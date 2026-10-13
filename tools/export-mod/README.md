# 本地事实导出工具

这是独立编写的 Lua 数据采集工具。它读取游戏中的数值表，在 **LÖVE 用户保存目录的 `references/game-dumps/`** 生成 JSON，并为每个已导出值附上原始字段路径。它不上传数据，也不自动写入本项目。

原版游戏与 Mod 框架尚未在本机运行验证。当前通过的是 LuaJIT 语法、自造数据、JSON 往返与回调行为检查。游戏内加载、按键响应和框架版本兼容仍待验收。

## 接入方式

### 使用 Steamodded

1. 先在自己合法安装的游戏中安装并确认 Steamodded/Lovely 可以运行。
2. 找到该安装实际使用的 `Mods` 目录。在其中建立 `local_fact_export/`，只复制本工具的 `manifest.json` 和 `main.lua`。
3. 启动游戏，确认“本地事实导出”出现在 Mod 列表且已启用。
4. 建议开一局新游戏，在选盲注、选牌或商店等稳定阶段按一下 F8。长按只导出一次，松开再按可以生成下一份快照。
5. 导出成功时，本地日志显示实际文件路径。也可以在已有的 Lua 调试入口读取 `LOCAL_FACT_EXPORTER.last_export` 或 `LOCAL_FACT_EXPORTER.last_error`。

清单与加载机制已对照 Steamodded 固定 commit `991b73a1eb916543f2447526c58d05769825ed5a`：该版本为 `26.1009.0~dev-a`。此核验说明清单格式和入口文件的加载方式；不代表已完成游戏内兼容验证。

框架源位置：

- [JSON 清单字段与校验](https://github.com/Steamodded/smods/blob/991b73a1eb916543f2447526c58d05769825ed5a/src/preflight/loader.lua#L135)：必需 `id/author/name/description/prefix/main_file`。
- [子目录 JSON 发现](https://github.com/Steamodded/smods/blob/991b73a1eb916543f2447526c58d05769825ed5a/src/preflight/loader.lua#L301)：Mod 子目录内扫描清单。
- [入口文件执行](https://github.com/Steamodded/smods/blob/991b73a1eb916543f2447526c58d05769825ed5a/src/preflight/loader.lua#L747)：读取并执行清单中的 `main_file`。
- [框架版本](https://github.com/Steamodded/smods/blob/991b73a1eb916543f2447526c58d05769825ed5a/version.lua#L1)。

工具包装原版实际存在的 `Game:update(dt)`，在原方法完成后轮询 F8，保留原方法的全部返回值和错误。它没有假设框架存在 `on_update` 接口。若别的 Mod 后续替换更新入口，使用下面的手动方式，并记录当时启用的 Mod。

### 已有 Lua 调试入口时手动加载

若不通过 Steamodded 自动加载，可将本工具 `main.lua` 放入 **LÖVE 用户保存目录**内的 `tools/local-fact-export/main.lua`，然后在游戏已有的 Lua 调试入口执行：

~~~lua
local chunk, err = love.filesystem.load("tools/local-fact-export/main.lua")
assert(chunk, err)()
local ok, install_err = LOCAL_FACT_EXPORTER.install()
assert(ok, install_err)
local result, export_err = LOCAL_FACT_EXPORTER.export_now()
assert(result, export_err)
print(result.absolute_path or result.relative_path)
~~~

如果工具已经加载，只需要 `LOCAL_FACT_EXPORTER.export_now()`。无按键接口时，手动导出仍可用。当前游戏定义未就绪时会返回错误；需要等游戏初始化后再调用。手动调试入口的获取取决于本机安装，不在此工具中注入新的控制台。

## 保存与本地引用

保存根由 [love.filesystem.getSaveDirectory](https://love2d.org/wiki/love.filesystem.getSaveDirectory) 决定，不硬编码 Windows、macOS 或 Linux 的用户名路径。相对文件名形如：

~~~text
references/game-dumps/dump-YYYYMMDD-HHMMSS-0001.json
~~~

文件名时间采用本地时间，`metadata.capturedAtUtc` 使用 UTC。序号与已存在文件检查共同避免覆盖。保存使用 [createDirectory](https://love2d.org/wiki/love.filesystem.createDirectory)、[getInfo](https://love2d.org/wiki/love.filesystem.getInfo) 和 [write](https://love2d.org/wiki/love.filesystem.write)。

后续分析时，**仅手动将需要的 dump 移入本项目已被忽略的 `references/game-dumps/`**。原版名称、说明与导出结果只留本地。不要将这些结果放入 `src/`、`data/`、公开文档或对外发布包；对外可见内容继续使用原创表达。

导出数据的游戏版本、已知 Mod 版本、当前局是否存在及分类数量记录在 `metadata`。框架和其他 Mod 可能改变定义；应保留该信息，并分别采集无额外内容 Mod 的基线与修改后的结果。

## 采集内容

| 输出位置 | 来源与用途 |
| --- | --- |
| `data.P_CENTERS` | 全部内容定义及其原始配置，包括定义里实际存储的费用、稀有度、权重、限制字段 |
| `data.P_BLINDS/P_TAGS/P_SEALS/P_STAKES/P_CARDS` | 盲注、标签、印记、挑战等级及基础扑克牌定义 |
| `data.P_CENTER_POOLS/P_JOKER_RARITY_POOLS` | 内容池和稀有度池，共享对象保留可追踪引用 |
| `data.GAME.hands` | 当前牌型等级、分数、倍数、初始值、升级值等实际存在字段 |
| `data.GAME.starting_params/probabilities` | 起始参数及当前概率乘子 |
| `data.GAME.round_resets/current_round/round_bonus/shop` | 本局重置参数、剩余动作、重掷状态和商店设置 |
| `data.GAME.*_rate` | 定义在当前局中的版本、各内容类别商店比例 |
| `data.GAME.interest_*/discount_percent/inflation/base_reroll_cost` | 当前经济参数 |
| `data.GAME.perishable_rounds/rental_rate` | 贴签相关当前参数 |
| `data.GAME.pool_flags/used_jokers/used_vouchers/modifiers/banned_keys/bosses_used` | 当前局的内容限制与状态 |
| `data.GAME.starting_deck_size/win_ante/stake/round/dollars/chips/bankrupt_at/hands_played/unused_discards/pseudorandom/pack_size/blind_on_deck` | 局面摘要、可用随机状态及当前局其他参数 |
| `data.areas.*.config` | 手牌、特例牌、消耗品和商店区域的当前容量配置 |

导出 `G.GAME` 使用上述白名单，避免遍历整个图形、音频和事件对象。静态定义引用的资源名可能作为普通字符串留在本地快照中；不会读取或导出对应素材文件。

本地参考版本 `1.0.1o-FULL` 的字段位置：`references/source/game.lua:218-299,364,704-841,1887-2014`；更新入口为 `game.lua:2449`；版本定义为 `globals.lua:1-8`。固定参考 commit 为 `GladdonT/balatro-source-code@895ab3a25bc6f513fa80885eb59951bf8e76bc55`。这些位置用于核实数据入口，工具没有复制其实现。

## JSON 格式与事实表

顶层为 `schemaVersion/metadata/data/fieldPaths/warnings`。`fieldPaths` 的键采用 RFC 6901 JSON Pointer，数组下标从 0 开始；对应值描述 Lua 原始字段，Lua 数组下标仍从 1 开始。

下面仅展示结构，用虚构内容键示意，不是原版事实：

~~~json
{
  "fieldPaths": {
    "/data/P_CENTERS/j_local_example/config/extra": "G.P_CENTERS[\"j_local_example\"][\"config\"][\"extra\"]"
  }
}
~~~

写入事实表时引用 `references/game-dumps/文件名.json#/data/...`，并记录快照版本、启用的 Mod 和采集阶段。牌型当前值可能已经升级，经济参数可能已被卡牌、牌组或优惠券修改，不能直接当作未修改的初始规则。

序列化规则：

- 保留 `false`、数字 0、空字符串、有效 Unicode 和所有 JSON 控制字符转义。
- 正常连续 Lua 序列表导出为 JSON 数组；空表默认导出为对象。
- 混合键、稀疏表和非正常序列表使用 `{"$luaTable":[{"keyType":...,"key":...,"value":...}]}`，避免数字键 1 与字符串键 "1" 冲突。
- 共享引用与循环引用用 `{"$ref":"/data/..."}`，指向同一文件内已导出的对象。沿引用解析后再读取值。
- 函数、线程、userdata、非有限数字和无效 UTF-8 值不导出，原因写入 `warnings`；连续数组的跳过位置写 `null`，保持下标。
- 缺失的白名单字段明确写 `null` 并记录 `missing_field`。
- 超出工具自己的递归或节点保护时写 `$truncated` 并记录原因。含此标记的内容需要补采，不能标成已验证。
- 使用原始表键读取，跳过不支持的键类型，不调用表的索引、遍历或字符串转换元方法。

函数效果、动态选池公式、没有显式存储在表中的概率以及动画时序不会由 JSON 自动还原。`metadata.functionEffectsExported` 固定为 `false`。这些仍需源码引用或受控实验；本工具输出不等于全量效果已经验证。

## 独立验证

`test-exporter.lua` 仅使用自造数据；文件系统为内存模拟，不读取原版数据、不产生真实 dump。当前结果：

- 两份 Lua 文件通过 LuaJIT `loadfile` 语法检查。
- 66 条 Lua 断言通过：字段采集、原对象不变、回调返回值/错误保留、幂等安装、撤回、F8 边沿、写入失败、接口抛错、文件名碰撞和键插入顺序。
- 227 条 Python JSON 与路径断言通过，其中逐一解析 199 条字段路径，并核对引用、混合键、Unicode、控制字符和跳过值。
- 4 次成功保存均落在模拟文件系统，无真实游戏数据写入。
- 48 条夹具警告来自刻意设置的循环、跳过值、缺失字段与深度截断，已核对类别和计数。
- 这些是导出器独立检查，不计入游戏的 1959 条单测。

在项目根目录运行以下命令，参数替换为可执行的 LuaJIT 路径。无需安装 LuaJIT 的 `jit.*` 辅助模块：

~~~sh
python3 - "/完整路径/luajit" <<'PY'
import json, pathlib, subprocess, sys
root=pathlib.Path.cwd()
lua=sys.argv[1]
for name in ("main.lua","test-exporter.lua"):
    path=str(root/"tools/export-mod"/name)
    subprocess.run([lua,"-e","assert(loadfile("+json.dumps(path)+"))"],capture_output=True,text=True,check=True)
result=subprocess.run([lua,str(root/"tools/export-mod/test-exporter.lua")],capture_output=True,text=True)
if result.returncode:
    print(result.stderr)
    raise SystemExit(result.returncode)
report=json.loads(result.stdout)
snapshot=report["snapshot"]; config=snapshot["data"]["P_CENTERS"]["j_fixture"]["config"]
checks=0
def check(value, message):
    global checks
    checks+=1
    assert value, message
def resolve(document,pointer):
    result=document
    for part in pointer.split("/")[1:]:
        key=part.replace("~1","/").replace("~0","~")
        result=result[int(key)] if isinstance(result,list) else result[key]
    return result
check(config["zero"]==0 and config["falsy"] is False and config["empty"]=="","零、false、空串")
check(config["unicode"]=="中文🃏","中文和非 BMP Unicode")
check(config["control"]=="\0\1\b\f\n\r\t\"\\","控制字符、引号、反斜杠")
check(config["fraction"]==0.125,"有限小数")
check(config["list"]==[True,None,"tail"],"数组跳过位置保留 null")
check(config["poison"]=={"raw_value":17},"不读取元方法")
check(config["self"]=={"$ref":"/data/P_CENTERS/j_fixture/config"},"循环引用")
check(snapshot["data"]["P_CENTER_POOLS"]["Joker"][0]=={"$ref":"/data/P_CENTERS/j_fixture"},"跨表共享引用")
mixed=config["mixed"]["$luaTable"]
check({(x["keyType"],str(x["key"])):x["value"] for x in mixed}=={("string","1"):"string-key",("number","1"):"number-key",("boolean","False"):"boolean-key"},"混合键不冲突")
check([(x["key"],x["value"]) for x in config["sparse"]["$luaTable"]]==[(1,"first"),(3,"third")],"稀疏表保留原始下标")
for key in ("callback","thread","userdata","nan","inf","invalid_utf8"):
    check(key not in config,"无法表示的值跳过："+key)
kinds={w["kind"] for w in snapshot["warnings"]}
check({"cycle_reference","shared_reference","unsupported_value","unsupported_key","invalid_utf8_value","invalid_utf8_key","non_finite_number","truncated","missing_field"}<=kinds,"警告类别齐全")
check(snapshot["metadata"]["warningCount"]==len(snapshot["warnings"]),"警告总数")
check(snapshot["metadata"]["functionEffectsExported"] is False,"未声称导出函数效果")
check(snapshot["metadata"]["gameVersion"]=="fixture-only","版本是夹具值")
check(snapshot["metadata"]["loveVersion"]["major"]==99,"LÖVE 版本读取")
check([m["id"] for m in snapshot["metadata"]["loadedMods"]]==["A","Z"],"mod 列表稳定排序")
check(snapshot["data"]["P_SEALS"]=={},"空 Lua 表默认 JSON 对象")
check(report["menuSnapshot"]["data"]["GAME"] is None and report["menuSnapshot"]["metadata"]["runStatePresent"] is False,"无当前局状态明确标记")
for pointer in snapshot["fieldPaths"]:
    resolve(snapshot,pointer)
    checks+=1
def walk(value):
    if isinstance(value,dict):
        if "$ref" in value:
            check(isinstance(resolve(snapshot,value["$ref"]),dict),"$ref 指向真实对象")
        for child in value.values(): walk(child)
    elif isinstance(value,list):
        for child in value: walk(child)
walk(snapshot["data"])
manifest=json.loads((root/"tools/export-mod/manifest.json").read_text())
check(all(isinstance(manifest[k],str) for k in ("id","name","description","prefix","main_file")) and isinstance(manifest["author"],list),"清单必需字段类型")
print(json.dumps({"syntaxFiles":2,"luaAssertions":report["luaAssertions"],"jsonAssertions":checks,"mockWrites":report["writes"],"rawFixtureWarnings":len(snapshot["warnings"]),"fieldPaths":len(snapshot["fieldPaths"]),"result":"passed"},ensure_ascii=False))
PY
~~~

仍待游戏内验收：合法原版安装的实际版本、Steamodded/Lovely 版本、Mod 发现与加载、F8 实际响应、保存目录权限、真实表完整性、逐阶段 dump 和额外 Mod 对内容池的影响。
