-- 独立本地导出器。只读取白名单字段，不执行效果、随机函数或上传操作。
local MODULE_ID = 'local_fact_export'
local previous = rawget(_G, 'LOCAL_FACT_EXPORTER')
if type(previous) == 'table' and rawget(previous, 'module_id') == MODULE_ID then
    return previous
end

local NULL, SKIP, ARRAY = {}, {}, {}
local MAX_DEPTH, MAX_NODES = 96, 200000
local function array() return setmetatable({}, ARRAY) end
local function raw(object, key)
    if type(object) == 'table' then return rawget(object, key) end
end
local function finite(n) return n == n and n ~= math.huge and n ~= -math.huge end
local function number_text(n) return string.format('%.17g', n):gsub(',', '.') end
local function valid_utf8(s)
    local i, n = 1, #s
    while i <= n do
        local a = s:byte(i)
        local length, lower, upper
        if a < 128 then length = 1
        elseif a >= 194 and a <= 223 then length, lower, upper = 2, 128, 191
        elseif a >= 224 and a <= 239 then
            length, lower, upper = 3, a == 224 and 160 or 128, a == 237 and 159 or 191
        elseif a >= 240 and a <= 244 then
            length, lower, upper = 4, a == 240 and 144 or 128, a == 244 and 143 or 191
        else return false end
        if i + length - 1 > n then return false end
        if length > 1 then
            local b = s:byte(i + 1)
            if b < lower or b > upper then return false end
            for j = i + 2, i + length - 1 do
                local c = s:byte(j)
                if c < 128 or c > 191 then return false end
            end
        end
        i = i + length
    end
    return true
end
local escapes = {['"'] = '\\"', ['\\'] = '\\\\', ['\b'] = '\\b', ['\f'] = '\\f', ['\n'] = '\\n', ['\r'] = '\\r', ['\t'] = '\\t'}
local function quote(s)
    return '"' .. s:gsub('[%z\1-\31\\"]', function(c)
        return escapes[c] or string.format('\\u%04x', c:byte())
    end) .. '"'
end
local function lua_quote(s)
    return '"' .. s:gsub('[%z\1-\31\\"]', function(c)
        return escapes[c] or string.format('\\%03d', c:byte())
    end) .. '"'
end
local function pointer_key(k) return tostring(k):gsub('~', '~0'):gsub('/', '~1') end
local function lua_key(k)
    if type(k) == 'string' then return '[' .. lua_quote(k) .. ']' end
    if type(k) == 'boolean' then return k and '[true]' or '[false]' end
    return '[' .. number_text(k) .. ']'
end
local function warn(ctx, kind, pointer, lua_path, detail)
    ctx.warnings[#ctx.warnings + 1] = {
        kind = kind, jsonPointer = pointer, luaPath = lua_path, detail = detail,
    }
end
local ranks = {string = 1, number = 2, boolean = 3}
local function key_less(a, b)
    local ta, tb = type(a), type(b)
    if ta ~= tb then return ranks[ta] < ranks[tb] end
    if ta == 'boolean' then return a == false and b == true end
    return a < b
end
local function keys_of(value, ctx, pointer, lua_path)
    local keys = {}
    for k in next, value do
        local kind = type(k)
        if not ranks[kind] then
            warn(ctx, 'unsupported_key', pointer, lua_path .. '[<' .. kind .. '>]', kind)
        elseif kind == 'number' and not finite(k) then
            warn(ctx, 'unsupported_key', pointer, lua_path .. '[<non_finite>]', 'non_finite_number')
        elseif kind == 'string' and not valid_utf8(k) then
            warn(ctx, 'invalid_utf8_key', pointer, lua_path .. '[<invalid_utf8>]', 'invalid_utf8')
        else keys[#keys + 1] = k end
    end
    table.sort(keys, key_less)
    return keys
end
local function sanitize(value, pointer, lua_path, ctx, depth)
    local kind = type(value)
    if value == nil then
        ctx.paths[pointer] = lua_path
        warn(ctx, 'missing_field', pointer, lua_path, 'nil')
        return NULL
    end
    if kind ~= 'table' and kind ~= 'boolean' and kind ~= 'number' and kind ~= 'string' then
        warn(ctx, 'unsupported_value', pointer, lua_path, kind)
        return SKIP
    end
    if kind == 'number' and not finite(value) then
        warn(ctx, 'non_finite_number', pointer, lua_path, 'NaN_or_Infinity')
        return SKIP
    end
    if kind == 'string' and not valid_utf8(value) then
        warn(ctx, 'invalid_utf8_value', pointer, lua_path, 'invalid_utf8')
        return SKIP
    end
    ctx.paths[pointer] = lua_path
    if kind == 'table' and ctx.seen[value] then
        local target = ctx.seen[value]
        warn(ctx, ctx.active[value] and 'cycle_reference' or 'shared_reference', pointer, lua_path, target)
        return {['$ref'] = target}
    end
    ctx.nodes = ctx.nodes + 1
    if depth > MAX_DEPTH or ctx.nodes > MAX_NODES then
        local reason = depth > MAX_DEPTH and 'max_depth' or 'max_nodes'
        warn(ctx, 'truncated', pointer, lua_path, reason)
        return {['$truncated'] = reason}
    end
    if kind ~= 'table' then return value end
    ctx.seen[value], ctx.active[value] = pointer, true
    local keys = keys_of(value, ctx, pointer, lua_path)
    local sequence, string_only = #keys > 0, true
    for i, k in ipairs(keys) do
        if type(k) ~= 'number' or k ~= i then sequence = false end
        if type(k) ~= 'string' then string_only = false end
    end
    local out
    if sequence then
        out = array()
        for i, k in ipairs(keys) do
            local child_pointer = pointer .. '/' .. (i - 1)
            local child = sanitize(rawget(value, k), child_pointer, lua_path .. lua_key(k), ctx, depth + 1)
            if child == SKIP then
                child = NULL
                ctx.paths[child_pointer] = lua_path .. lua_key(k)
            end
            out[i] = child
        end
    elseif string_only then
        out = {}
        for _, k in ipairs(keys) do
            local child = sanitize(rawget(value, k), pointer .. '/' .. pointer_key(k), lua_path .. lua_key(k), ctx, depth + 1)
            if child ~= SKIP then out[k] = child end
        end
    else
        local entries = array()
        out = {['$luaTable'] = entries}
        for _, k in ipairs(keys) do
            local child_pointer = pointer .. '/$luaTable/' .. #entries .. '/value'
            local child = sanitize(rawget(value, k), child_pointer, lua_path .. lua_key(k), ctx, depth + 1)
            if child ~= SKIP then
                entries[#entries + 1] = {keyType = type(k), key = k, value = child}
            end
        end
    end
    ctx.active[value] = nil
    return out
end
local function encode(value)
    if value == NULL or value == nil then return 'null' end
    local kind = type(value)
    if kind == 'string' then return quote(value) end
    if kind == 'boolean' then return value and 'true' or 'false' end
    if kind == 'number' then return number_text(value) end
    assert(kind == 'table', '仅支持已净化的快照')
    local fragments = {}
    if getmetatable(value) == ARRAY then
        for i = 1, #value do fragments[i] = encode(value[i]) end
        return '[' .. table.concat(fragments, ',') .. ']'
    end
    local keys = {}
    for k in next, value do keys[#keys + 1] = k end
    table.sort(keys)
    for i, k in ipairs(keys) do fragments[i] = quote(k) .. ':' .. encode(rawget(value, k)) end
    return '{' .. table.concat(fragments, ',') .. '}'
end
local ROOT_FIELDS = {
    'P_CENTERS', 'P_BLINDS', 'P_TAGS', 'P_CENTER_POOLS', 'P_JOKER_RARITY_POOLS',
    'P_SEALS', 'P_STAKES', 'P_CARDS',
}
local GAME_FIELDS = {
    'hands', 'starting_params', 'probabilities', 'round_resets', 'current_round', 'round_bonus', 'shop',
    'edition_rate', 'joker_rate', 'tarot_rate', 'planet_rate', 'spectral_rate', 'playing_card_rate',
    'interest_cap', 'interest_amount', 'discount_percent', 'inflation', 'base_reroll_cost',
    'perishable_rounds', 'rental_rate', 'pool_flags', 'used_jokers', 'used_vouchers', 'modifiers',
    'banned_keys', 'bosses_used', 'blind_on_deck', 'starting_deck_size', 'win_ante', 'stake', 'round',
    'dollars', 'chips', 'bankrupt_at', 'hands_played', 'unused_discards', 'pseudorandom', 'pack_size',
}
local AREA_FIELDS = {'hand', 'jokers', 'consumeables', 'shop_jokers', 'shop_booster', 'shop_vouchers'}
table.sort(GAME_FIELDS)
table.sort(AREA_FIELDS)
local function count_table(value)
    local n = 0
    if type(value) == 'table' then for _ in next, value do n = n + 1 end end
    return n
end
local function string_or_null(value)
    return type(value) == 'string' and valid_utf8(value) and value or NULL
end
local exporter = {
    module_id = MODULE_ID, version = '0.2.0', save_subdirectory = 'references/game-dumps',
    logger = function(message)
        local fn = rawget(_G, 'print')
        if type(fn) == 'function' then fn(message) end
    end,
}
function exporter.snapshot(game)
    game = game or rawget(_G, 'G')
    if type(game) ~= 'table' then return nil, '游戏全局 G 尚未就绪。' end
    local ctx = {paths = {}, warnings = array(), seen = {}, active = {}, nodes = 0}
    local data, counts, content_counts = {}, {}, {}
    for _, field in ipairs(ROOT_FIELDS) do
        local value = rawget(game, field)
        local cleaned = sanitize(value, '/data/' .. field, 'G.' .. field, ctx, 0)
        if cleaned ~= SKIP then data[field] = cleaned end
        counts[field] = count_table(value)
    end
    local centers = rawget(game, 'P_CENTERS')
    if type(centers) == 'table' then
        for _, center in next, centers do
            local set = raw(center, 'set')
            if type(set) == 'string' and valid_utf8(set) then
                content_counts[set] = (content_counts[set] or 0) + 1
            else content_counts.unclassified = (content_counts.unclassified or 0) + 1 end
        end
    end
    local run = rawget(game, 'GAME')
    ctx.paths['/data/GAME'] = 'G.GAME'
    if type(run) == 'table' then
        data.GAME = {}
        for _, field in ipairs(GAME_FIELDS) do
            local cleaned = sanitize(rawget(run, field), '/data/GAME/' .. field, 'G.GAME' .. lua_key(field), ctx, 0)
            if cleaned ~= SKIP then data.GAME[field] = cleaned end
        end
    else data.GAME = sanitize(nil, '/data/GAME', 'G.GAME', ctx, 0) end
    data.areas = {}
    for _, name in ipairs(AREA_FIELDS) do
        local area = rawget(game, name)
        if type(area) == 'table' then
            data.areas[name] = {config = sanitize(rawget(area, 'config'), '/data/areas/' .. name .. '/config', 'G.' .. name .. '.config', ctx, 0)}
            if data.areas[name].config == SKIP then data.areas[name].config = nil end
        else data.areas[name] = sanitize(nil, '/data/areas/' .. name, 'G.' .. name, ctx, 0) end
    end
    local love_api, smods = rawget(_G, 'love'), rawget(_G, 'SMODS')
    local runtime = NULL
    local get_version = raw(love_api, 'getVersion')
    if type(get_version) == 'function' then
        local ok, major, minor, revision, codename = pcall(get_version)
        if ok and type(major) == 'number' and type(minor) == 'number' and type(revision) == 'number' and finite(major) and finite(minor) and finite(revision) then
            runtime = {major = major, minor = minor, revision = revision, codename = string_or_null(codename)}
        end
    end
    local mods, mod_table = array(), raw(smods, 'Mods')
    if type(mod_table) == 'table' then
        for key, mod in next, mod_table do
            local id = raw(mod, 'id') or key
            if type(id) == 'string' and valid_utf8(id) and type(mod) == 'table' then
                mods[#mods + 1] = {id = id, version = string_or_null(raw(mod, 'version')),
                    disabled = raw(mod, 'disabled') == true, canLoad = raw(mod, 'can_load') == true,
                    metaMod = raw(mod, 'meta_mod') == true}
            end
        end
        table.sort(mods, function(a, b)
            if a.id ~= b.id then return a.id < b.id end
            local av, bv = a.version == NULL and '' or a.version, b.version == NULL and '' or b.version
            return av < bv
        end)
    end
    local version = rawget(game, 'VERSION')
    ctx.paths['/metadata/gameVersion'] = 'G.VERSION'
    if version == nil then version = rawget(_G, 'VERSION'); ctx.paths['/metadata/gameVersion'] = 'VERSION' end
    local stages = rawget(game, 'STAGES')
    local stage, run_stage = rawget(game, 'STAGE'), raw(stages, 'RUN')
    local metadata = {
        exporterId = MODULE_ID, exporterVersion = exporter.version, capturedAtUtc = os.date('!%Y-%m-%dT%H:%M:%SZ'),
        gameVersion = string_or_null(version), loveVersion = runtime,
        frameworkPresent = type(smods) == 'table', frameworkVersion = string_or_null(raw(smods, 'version')),
        modListAvailable = type(mod_table) == 'table', loadedMods = mods,
        runStatePresent = type(run) == 'table' and type(raw(run, 'hands')) == 'table',
        runStarted = stage ~= nil and run_stage ~= nil and stage == run_stage,
        definitionsReady = type(centers) == 'table' and type(rawget(game, 'P_BLINDS')) == 'table' and type(rawget(game, 'P_TAGS')) == 'table' and type(rawget(game, 'P_CENTER_POOLS')) == 'table' and type(rawget(game, 'P_JOKER_RARITY_POOLS')) == 'table',
        tableCounts = counts, contentCounts = content_counts,
        outputRoot = 'love.filesystem.getSaveDirectory()',
        fieldPathFormat = 'RFC6901_JSON_Pointer_to_Lua_bracket_path',
        functionEffectsExported = false, limits = {maxDepth = MAX_DEPTH, maxNodes = MAX_NODES},
    }
    table.sort(ctx.warnings, function(a, b)
        for _, key in ipairs({'jsonPointer', 'luaPath', 'kind', 'detail'}) do
            if a[key] ~= b[key] then return a[key] < b[key] end
        end
        return false
    end)
    metadata.warningCount = #ctx.warnings
    return {schemaVersion = 1, metadata = metadata, data = data, fieldPaths = ctx.paths, warnings = ctx.warnings}
end
function exporter.encode_snapshot(snapshot) return encode(snapshot) end
local serial, busy = 0, false
local function report(ok, message)
    if not ok then exporter.last_error = message end
    if type(exporter.logger) == 'function' then pcall(exporter.logger, message) end
end
function exporter.export_now()
    if busy then return nil, '导出正在进行，请稍后重试。' end
    busy = true
    local ok, result = pcall(function()
        local snapshot, err = exporter.snapshot()
        if not snapshot then error(err, 0) end
        if not snapshot.metadata.definitionsReady then error('内容定义尚未就绪；请进入游戏后再导出。', 0) end
        local fs = raw(rawget(_G, 'love'), 'filesystem')
        local mkdir, info, write = raw(fs, 'createDirectory'), raw(fs, 'getInfo'), raw(fs, 'write')
        if type(mkdir) ~= 'function' or type(info) ~= 'function' or type(write) ~= 'function' then error('LÖVE 保存目录接口尚未就绪。', 0) end
        local created, create_err = mkdir(exporter.save_subdirectory)
        if not created then error('创建保存目录失败：' .. tostring(create_err), 0) end
        local stamp, path = os.date('%Y%m%d-%H%M%S')
        for _ = 1, 100000 do
            serial = serial + 1
            path = exporter.save_subdirectory .. '/dump-' .. stamp .. '-' .. string.format('%04d', serial) .. '.json'
            local query_ok, existing = pcall(info, path)
            if not query_ok then error('查询保存文件失败：' .. tostring(existing), 0) end
            if not existing then break end
            path = nil
        end
        if not path then error('找不到可用的导出文件名。', 0) end
        local body = encode(snapshot)
        local saved, write_err = write(path, body)
        if not saved then error('写入保存目录失败：' .. tostring(write_err), 0) end
        local get_save_dir = raw(fs, 'getSaveDirectory')
        local dir_ok, directory = false, nil
        if type(get_save_dir) == 'function' then dir_ok, directory = pcall(get_save_dir) end
        if not dir_ok or type(directory) ~= 'string' then directory = nil end
        return {relative_path = path, save_directory = directory,
            absolute_path = directory and (directory .. '/' .. path) or nil,
            bytes = #body, warning_count = snapshot.metadata.warningCount}
    end)
    busy = false
    if not ok then
        local message = type(result) == 'string' and result or '导出失败。'
        report(false, message)
        return nil, message
    end
    exporter.last_export, exporter.last_error = result, nil
    report(true, '已导出至 ' .. (result.absolute_path or ('LÖVE 用户保存目录/' .. result.relative_path)))
    return result
end
local original_update, wrapped_update, was_down
local function poll()
    local keyboard = raw(rawget(_G, 'love'), 'keyboard')
    local is_down = raw(keyboard, 'isDown')
    if type(is_down) ~= 'function' then return end
    local down = is_down('f8') == true
    local rising = down and not was_down
    was_down = down
    if rising then exporter.export_now() end
end
local function pack(...) return {n = select('#', ...), ...} end
function exporter.install()
    local game = rawget(_G, 'Game')
    if type(game) ~= 'table' or type(game.update) ~= 'function' then
        exporter.hook_installed, exporter.hook_error = false, 'Game.update 尚未就绪；可稍后调用 install()。'
        return nil, exporter.hook_error
    end
    if wrapped_update then
        if game.update == wrapped_update then exporter.hook_installed, exporter.hook_error = true, nil; return true end
        return nil, '其他工具已更换更新入口；保持其入口并使用手动导出。'
    end
    original_update, was_down = game.update, false
    wrapped_update = function(self, ...)
        local values = pack(original_update(self, ...))
        local ok, err = pcall(poll)
        if not ok and exporter.last_error ~= tostring(err) then report(false, tostring(err)) end
        return unpack(values, 1, values.n)
    end
    game.update = wrapped_update
    exporter.hook_installed, exporter.hook_error = true, nil
    return true
end
function exporter.uninstall()
    local game = rawget(_G, 'Game')
    if not wrapped_update then return true end
    if type(game) ~= 'table' or game.update ~= wrapped_update then return nil, '更新入口已更换，无法直接撤回；请重启游戏。' end
    game.update = original_update
    original_update, wrapped_update, was_down = nil, nil, false
    exporter.hook_installed, exporter.hook_error = false, nil
    return true
end
rawset(_G, 'LOCAL_FACT_EXPORTER', exporter)
local installed, hook_error = exporter.install()
exporter.hook_installed, exporter.hook_error = installed == true, hook_error
return exporter
