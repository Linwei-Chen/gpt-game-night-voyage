# 本地数据导出工具状态

更新日期：2026-10-13。

## 范围与决策

- 独立编写 Lua 工具，只读游戏定义与当前局参数，不复制参考代码，不执行卡牌效果或随机函数。
- 输出经 `love.filesystem` 写入用户保存目录；原版数据只能由用户手动复制到本地忽略的 `references/game-dumps/`。
- 采用实际存在的 `Game:update(dt)` 作为按键轮询入口，提供 `LOCAL_FACT_EXPORTER.export_now()` 手动入口。不假设 Steamodded 有 `on_update` API。
- 导出字段路径映射供事实表引用；不能表示的值明确记录，循环/共享引用用路径标记。

## 当前进度

| 项目 | 状态 |
| --- | --- |
| 导出字段源位置核实 | 完成 |
| 官方加载与清单格式核实 | 完成 |
| 独立序列化与保存实现 | 完成，夹具复核通过 |
| 自造数据与 LuaJIT 检查 | 完成，见下方独立报告 |
| 原版游戏内运行与版本兼容 | 待验收，本机未安装原版 |

## 已核实入口

本地参考版本 `1.0.1o-FULL`，来源 `GladdonT/balatro-source-code`，固定 commit `895ab3a25bc6f513fa80885eb59951bf8e76bc55`。

- `references/source/globals.lua:1-8`：版本定义。
- `references/source/game.lua:218-299`：印记、标签、挑战等级、盲注、基础扑克牌定义。
- `references/source/game.lua:364`：全部内容定义。
- `references/source/game.lua:704-841`：定义池与稀有度池。
- `references/source/game.lua:1887-2014`：起始参数、概率、商店比例、经济、当前回合、重置参数、牌型基础与升级值。
- `references/source/game.lua:2449`：实际更新方法。

## 验证边界

计划用 LuaJIT 自造夹具验证序列化、字段路径、保存失败处理、按键边沿与回调返回值，不声称游戏内运行通过。完整函数效果和未显式存储在这些表中的规则仍需结合源码或游戏内实验采集。

## 官方加载核验

只读核验 Steamodded 固定 commit `991b73a1eb916543f2447526c58d05769825ed5a`（`version.lua:1`：`26.1009.0~dev-a`）。

- `src/preflight/loader.lua:135-152,223`：JSON 清单必需 `id/author/name/description/prefix/main_file`，`priority` 为数值，`version` 为字符串。
- `src/preflight/loader.lua:301-327`：在 Mod 子目录发现 JSON 并校验字段。
- `src/preflight/loader.lua:747-784`：设置当前 Mod 并读取执行 `main_file`。
- 核验的是清单与加载流程；不等于已经在原版上验证此 Steamodded 版本。

## 实现记录

- 已重写 `main.lua` 与清单；全部序列化、按键轮询及保存代码独立编写。
- 按排序后的原始键读取；不读取表元方法。正常序列表转成 JSON 数组；稀疏、混合键表用带键类型的 `$luaTable` 保存。
- 函数、线程、userdata、非有限数字及无效 UTF-8 跳过并记录原因；数组无法表示的位置写 `null` 以保持下标。
- 共享/循环表用 `$ref` 指向导出内的 JSON Pointer；深度/节点保护触发时留下 `$truncated`，不伪称数据完整。
- 提供 F8 边沿触发、手动快照/导出、幂等安装和撤回方法。保存前查询文件名，避免同秒导出覆盖。

## 路径确认与首轮验证

默认保存到 **LÖVE 用户保存目录内的 `references/game-dumps/`**；后续分析仅手动移入本项目已忽略的 `references/game-dumps/`，不写入公开内容目录。原版名称、说明及导出结果保持本地。

首轮：两份 Lua 文件语法加载通过，55 条 Lua 夹具断言与 226 条 Python JSON/字段路径断言通过。正在补文件名碰撞、接口抛错和键插入顺序边界；这些检查独立于游戏测试总数。

LuaJIT 在此机器由源码构建，尚未安装 `jit.*` 工具模块，因此改用 `loadfile` 只编译不执行的方式检查语法；运行夹具正常。

## 最终独立验证报告

LuaJIT `2.1.1788856981`，仅执行独立工具及自造夹具。结果：

| 检查 | 数量/结果 |
| --- | --- |
| Lua 文件语法（`loadfile` 编译，不执行） | 2 份通过 |
| Lua 自造夹具断言 | 66 条通过 |
| Python JSON/引用/字段路径断言 | 227 条通过 |
| 可解析的来源字段路径 | 199 条逐一核验 |
| 模拟成功写入 | 4 次，全部仅在内存 |
| 自造异常警告 | 48 条，类别与计数核对通过 |
| 原版实际 dump | 0 份，尚未采集 |

已覆盖：零值/false/空串、中文与非 BMP Unicode、控制字符转义、有限小数、数组占位、混合/稀疏表、原始键与元方法隔离、循环与跨表共享引用、跳过函数/线程/userdata/非有限数字/无效 UTF-8、缺失字段、深度截断、字段路径及 JSON Pointer 转义、清单必需字段、稳定输出、原对象不变、完整回调返回值与原错误保留、重复安装与撤回、F8 边沿、文件名碰撞、不覆盖旧文件、保存及查询失败、接口抛错、按键检查失败不打断游戏、未初始化状态。

完整复现命令保存在 `tools/export-mod/README.md`。这些是导出器独立检查，不计入游戏的 1959 条单测，也不作为原版游戏内验证。

## 交付文件与待验收

- `tools/export-mod/main.lua`：独立实现，默认输出在 LÖVE 用户目录 `references/game-dumps/`。
- `tools/export-mod/manifest.json`：核实过字段格式的 Steamodded 清单。
- `tools/export-mod/test-exporter.lua`：自造数据夹具与内存文件系统。
- `tools/export-mod/README.md`：中文加载、手动调用、保存与引用说明、完整验证命令。
- 本文：工具独立进度与验证边界。

尚待合法原版环境验收：实际版本与框架版本、Mod 加载、F8 响应、保存目录权限、真实表完整性、无额外内容 Mod 的基线、逐阶段真实 dump。之后只手动将 dump 移入本项目已忽略的 `references/game-dumps/`；原版名称和说明仅存本地。

此子任务完成后停止写入，由主任务统一封版和提交。
