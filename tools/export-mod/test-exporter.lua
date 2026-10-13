-- 自造数据夹具；不含原版内容，不写真实文件，不调用原版随机函数。
local checks = 0
local function expect(condition, message)
    checks = checks + 1
    assert(condition, '检查失败：' .. message)
end
local function pack(...)
    return {n = select('#', ...), ...}
end
local folder = (arg[0] or ''):match('^(.*/)') or ''
local held, fail_mkdir, fail_write, fail_info = false, false, false, false
local memory, directories, logs = {}, {}, {}
local successful_writes = 0
local throw_mkdir, throw_write = false, false
local old_date = os.date
os.date = function(format)
    if format:sub(1, 1) == '!' then return '2040-01-02T03:04:05Z' end
    return '20400102-030405'
end
love = {
    getVersion = function() return 99, 3, 8, '自造运行时' end,
    keyboard = {isDown = function(key) expect(key == 'f8', '只轮询 F8'); return held end},
    filesystem = {
        getSaveDirectory = function() return '/synthetic-save' end,
        createDirectory = function(path)
            if throw_mkdir then error('夹具：创建接口抛错') end
            if fail_mkdir then return false, '夹具：创建目录失败' end
            directories[path] = true
            return true
        end,
        getInfo = function(path)
            if fail_info then error('夹具：文件查询失败') end
            return memory[path] and {type = 'file'} or nil
        end,
        write = function(path, body)
            if throw_write then error('夹具：写入接口抛错') end
            if fail_write then return false, '夹具：写入失败' end
            expect(not memory[path], '不覆盖已有文件')
            memory[path] = body
            successful_writes = successful_writes + 1
            return true
        end,
    },
}
local original_calls = 0
local original = function(self, dt, extra)
    original_calls = original_calls + 1
    return nil, dt, extra, false, nil
end
Game = {update = original}
LOCAL_FACT_EXPORTER = nil
local callback = function() error('夹具函数不应执行') end
local poisonous = setmetatable({raw_value = 17}, {
    __index = callback, __pairs = callback, __tostring = callback,
})
local shared = {key = 'j_fixture', set = 'Joker', rarity = 2, cost = 7, config = {
    extra = 13, zero = 0, falsy = false, empty = '', unicode = '中文🃏',
    ['a/b~c'] = 'pointer-escape',
    control = '\0\1\8\12\n\r\t"\\', fraction = 0.125,
    list = {true, callback, 'tail'}, sparse = {[1] = 'first', [3] = 'third'},
    mixed = {[1] = 'number-key', ['1'] = 'string-key', [false] = 'boolean-key'},
    poison = poisonous, nan = 0/0, inf = math.huge, invalid_utf8 = string.char(255),
    callback = callback, thread = coroutine.create(callback), userdata = newproxy(),
}}
shared.config.self = shared.config
shared.config[callback] = '函数键不能表示'
shared.config[{}] = '表键不能表示'
shared.config[string.char(255)] = '无效 UTF-8 键不能表示'
local deep = {}
local tail = deep
for i = 1, 110 do tail.next = {}; tail = tail.next end
shared.config.deep = deep
G = {
    VERSION = 'fixture-only', STAGE = 9, STAGES = {RUN = 9}, STATE = 3,
    P_CENTERS = {j_fixture = shared}, P_BLINDS = {bl_fixture = {mult = 6}},
    P_TAGS = {tag_fixture = {min_ante = 3}},
    P_CENTER_POOLS = {Joker = {shared}}, P_JOKER_RARITY_POOLS = {[2] = {shared}},
    P_SEALS = {}, P_STAKES = {}, P_CARDS = {},
    GAME = {
        hands = {['自造牌型'] = {chips = 19, mult = 3, level = 2, l_chips = 6, l_mult = 2}},
        starting_params = {hands = 6, discards = 7}, probabilities = {normal = 3},
        round_resets = {ante = 3, reroll_cost = 7}, current_round = {reroll_cost = 8},
        shop = {joker_max = 3}, joker_rate = 27, interest_amount = 2, interest_cap = 31,
    },
    hand = {config = {card_limit = 11}},
}
SMODS = {version = 'fixture-framework', Mods = {
    A = {id = 'A', version = '1.2.3', can_load = true},
    Z = {id = 'Z', version = '2.0.0', disabled = true},
}}
local exporter = assert(dofile(folder .. 'main.lua'))
exporter.logger = function(message) logs[#logs + 1] = message end
expect(type(exporter.snapshot) == 'function', '提供快照入口')
expect(type(exporter.export_now) == 'function', '提供手动保存入口')
expect(Game.update ~= original, '安装实际更新方法包装')
local installed = Game.update
expect(exporter.install(), '重复安装成功且幂等')
expect(Game.update == installed, '重复安装不添加第二层包装')
expect(dofile(folder .. 'main.lua') == exporter, '重复载入返回同一实例')
expect(Game.update == installed, '重复载入不添加包装')
local snapshot = assert(exporter.snapshot())
expect(snapshot.data.GAME.hands['自造牌型'].chips == 19, '采集牌型数值')
expect(snapshot.data.GAME.round_resets.ante == 3, '采集回合重置参数')
expect(snapshot.data.GAME.shop.joker_max == 3, '采集商店槽位')
expect(snapshot.data.areas.hand.config.card_limit == 11, '采集当前手牌容量')
expect(snapshot.data.P_CENTERS.j_fixture.config.zero == 0, '保留数字零')
expect(snapshot.data.P_CENTERS.j_fixture.config.falsy == false, '保留 false')
expect(snapshot.data.P_CENTERS.j_fixture.config.empty == '', '保留空字符串')
expect(snapshot.data.P_CENTERS.j_fixture.config.callback == nil, '跳过函数')
expect(snapshot.data.P_CENTERS.j_fixture.config.nan == nil, '跳过非有限数字')
expect(snapshot.data.P_CENTERS.j_fixture.config.invalid_utf8 == nil, '跳过无效字符串')
expect(snapshot.metadata.tableCounts.P_CENTERS == 1, '内容总数来自实时表')
expect(snapshot.metadata.contentCounts.Joker == 1, '分类总数来自实时表')
expect(snapshot.metadata.runStarted == true, '当前局状态可追溯')
expect(snapshot.fieldPaths['/data/P_CENTERS/j_fixture/config/a~1b~0c'] == 'G.P_CENTERS["j_fixture"]["config"]["a/b~c"]', 'JSON Pointer 转义')
expect(snapshot.fieldPaths['/data/GAME/hands/自造牌型/chips'] == 'G.GAME["hands"]["自造牌型"]["chips"]', '字段路径映射')
local first_json = exporter.encode_snapshot(snapshot)
expect(first_json == exporter.encode_snapshot(assert(exporter.snapshot())), '相同夹具快照的序列化稳定')
expect(shared.config.self == shared.config and shared.config.callback == callback, '原始对象未被改动')
local result = pack(Game.update(G, 0.25, 29))
expect(result.n == 5 and result[1] == nil and result[2] == 0.25 and result[3] == 29 and result[4] == false and result[5] == nil, '完整保留原方法返回值')
expect(original_calls == 1, '更新原方法只执行一次')
local function write_count()
    local n = 0
    for _ in next, memory do n = n + 1 end
    return n
end
held = true
Game.update(G, 0.25)
expect(write_count() == 1, '按下 F8 导出一次')
Game.update(G, 0.25)
expect(write_count() == 1, '长按 F8 不重复导出')
held = false
Game.update(G, 0.25)
held = true
Game.update(G, 0.25)
expect(write_count() == 2, '释放后再按可以再导出')
local info = assert(exporter.export_now())
expect(write_count() == 3, '手动导出可运行')
expect(info.relative_path:match('^references/game%-dumps/dump%-%d%d%d%d%d%d%d%d%-%d%d%d%d%d%d%-%d%d%d%d%.json$'), '仅固定相对保存路径')
expect(info.absolute_path == '/synthetic-save/' .. info.relative_path, '报告实际保存目录')
expect(directories['references/game-dumps'] == true, '创建 LÖVE 保存子目录')
fail_mkdir = true
local no_dir, dir_error = exporter.export_now()
expect(no_dir == nil and dir_error:find('创建'), '目录创建失败能报告')
fail_mkdir = false
fail_write = true
local no_write, write_error = exporter.export_now()
expect(no_write == nil and write_error:find('写入'), '保存失败能报告')
fail_write = false
fail_info = true
local no_info, info_error = exporter.export_now()
expect(no_info == nil and info_error:find('查询'), '查询失败不覆盖文件')
fail_info = false
local path_prefix = info.relative_path:gsub('%d+%.json$', '')
for i = 6, 9 do memory[path_prefix .. string.format('%04d', i) .. '.json'] = 'reserved' end
local previous_count = write_count()
local collision_info = assert(exporter.export_now())
expect(collision_info.relative_path:match('0010%.json$'), '遇到已有文件名时继续查找')
expect(write_count() == previous_count + 1 and successful_writes == 4, '碰撞不覆盖旧文件')
throw_mkdir = true
local thrown_dir, thrown_dir_error = exporter.export_now()
expect(thrown_dir == nil and thrown_dir_error:find('创建接口抛错'), '捕获创建接口抛错')
throw_mkdir = false
throw_write = true
local thrown_write, thrown_write_error = exporter.export_now()
expect(thrown_write == nil and thrown_write_error:find('写入接口抛错'), '捕获写入接口抛错')
throw_write = false
local old_is_down = love.keyboard.isDown
love.keyboard.isDown = function() error('夹具：按键接口抛错') end
local poll_ok, poll_first, poll_second = pcall(Game.update, G, 0.75)
expect(poll_ok and poll_first == nil and poll_second == 0.75, '按键检查失败不打断游戏更新')
expect(exporter.last_error:find('按键接口抛错'), '按键检查失败能追溯')
love.keyboard.isDown = old_is_down
local saved_love = love
love = nil
local no_love, no_love_error = exporter.export_now()
expect(no_love == nil and no_love_error:find('LÖVE'), '未加载 LÖVE 时不写入')
love = saved_love
local order_snapshot = exporter.encode_snapshot(assert(exporter.snapshot()))
local old_config = shared.config
local reordered = {}
local reorder_keys = {}
for key in next, old_config do reorder_keys[#reorder_keys + 1] = key end
for i = #reorder_keys, 1, -1 do reordered[reorder_keys[i]] = old_config[reorder_keys[i]] end
reordered.self = reordered
shared.config = reordered
expect(exporter.encode_snapshot(assert(exporter.snapshot())) == order_snapshot, '键插入顺序不改变输出')
shared.config = old_config
local saved_game = G.GAME
G.GAME = nil
local menu_json = exporter.encode_snapshot(assert(exporter.snapshot()))
expect(exporter.snapshot().metadata.runStatePresent == false, '无当前局状态时明确标记')
G.GAME = saved_game
local saved_centers = G.P_CENTERS
G.P_CENTERS = nil
local not_ready, readiness_error = exporter.export_now()
expect(not_ready == nil and readiness_error:find('定义'), '定义未就绪时不伪报成功')
G.P_CENTERS = saved_centers
local other_update = function(...) return installed(...) end
Game.update = other_update
local not_rehooked = exporter.install()
expect(not_rehooked == nil and Game.update == other_update, '发现入口更换时不覆盖其他工具')
Game.update = installed
expect(exporter.uninstall(), '可以撤回自己的包装')
expect(Game.update == original, '撤回后恢复原方法')
expect(exporter.hook_installed == false, '撤回后状态同步')
expect(exporter.install(), '撤回后可重新安装')
expect(exporter.uninstall(), '最后清理包装')
local source_error = function() error('原方法错误应保留') end
Game.update = source_error
expect(exporter.install(), '错误保留夹具安装')
local success, error_text = pcall(Game.update, G, 0.25)
expect(not success and error_text:find('原方法错误应保留'), '不吞掉原游戏方法的错误')
expect(exporter.uninstall(), '错误保留夹具撤回')
Game = nil
expect(exporter.install() == nil, '尚无 Game 时清楚返回错误')
local saved_g = G
G = nil
expect(exporter.snapshot() == nil, '尚无 G 时清楚返回错误')
G = saved_g
os.date = old_date
io.write('{"luaAssertions":', checks, ',"writes":', successful_writes, ',"snapshot":', first_json, ',"menuSnapshot":', menu_json, '}\n')
