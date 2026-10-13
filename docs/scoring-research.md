# 计分核心研究与实施进度

更新：2026-10-13（香港时间）。

参考版本 1.0.1o-FULL，提交 `895ab3a25bc6f513fa80885eb59951bf8e76bc55`。仅从本地 `references/source` 提取规则、数值与发生顺序；实现采用独立的集合判定与事件队列。证据见 `data/evidence-scoring.json`。

当前：已完成静态事实提取，正在先写牌型、计分和种子测试。尚未进行原版游戏内差分与逐帧录屏比对。

决策：使用数字点数 2–14，完整英文花色内部 ID，短名增强/版本/封印。玩家界面名称交由原创内容层提供。纯逻辑不依赖渲染。

## 模块完成记录

- 先落盘测试，实际执行产生3个缺模块失败；随后独立实现 cards、poker、rng、scoring。
- 牌型使用集合与优先级；12种牌型、四指并集、捷径、A低端、石头/万能/涂抹规则已覆盖。基础分直接读证据文件。
- 计分使用阶段事件队列，逐卡运行时插入重复任务。支持卡版本、增强、手中钢铁、红封、Mime门槛、逐小丑main/otherJoker/版本、玻璃破坏、均衡组终算。
- 16组手算golden已通过；还覆盖金钱/RNG独立键、阶段冻结、玻璃每手仅破坏一次。全量小丑注册器集成测试待其完成后执行。

## RNG 真实差分与修复

将 MIT 开源 LuaJIT 固定至 `c6ffc141a8762b41703f9287d63d93622a13dd8f`，在 `references/luajit` 本地编译。测试脚本仅在本地读取参考 `misc_functions.lua` 中原始函数，输出 `references/rng-oracle.json`，数据同时纳入证据 JSON。

首次真实差分出现4个失败：部分 seed 结果与 TypeScript 不同。查看编译产物确认 ARM 使用 `fmadd`，将 seed×π+e 合并为一次舍入；JavaScript 原表达式是两次舍入。以独立整数精确运算实现 IEEE-754 融合乘加后，5组 seed 的哈希、45次带键随机、5次洗牌，以及5组底层数值seed结果逐值严格一致。RNG 15个测试全部通过。

默认固定 `fused` 浮点模式，可通过 `new SeededRng(seed,{floatMode:'separate'})` 选择非融合模式。快照记录模式并检查一致性。未知原版平台的 LuaJIT 版本、编译选项和整局随机调用路径仍是TBD，不能声称游戏内1:1 seed一致。

## 集成约定

`scoreHand` 立即修改共享 `context.run.money`；调用者应用事件时不得再次加金钱。注册器对成长值和卡属性的修改在求值时完成，返回state/cardState仅用于trace；外部spawn/remove/duplicate等事件由run层执行。返回最终chips/mult/score在after之前冻结。

永久卡属性必须修改牌组中同一个卡对象，或同步回写牌组；手牌复制而不回写会丢失成长效果。

## 最终本域验证（04:10 更新）

- 核心3个测试文件共104个测试全绿：牌型45，RNG15，计分44。
- 计分44中包含16组基础手算golden和17组真正全量注册器联动golden：加/乘顺序、版本与棒球位置、钢铁红封Mime+Baron、Hanging Chad+Photograph、Hack+玻璃、Blueprint/Brainstorm、Hiker永久成长、Lucky Cat双幸运不双成长、同手金钱进入Bootstraps、Space升级、Glass破坏后成长及Misprint真实RNG。
- 集成发现并修复Misprint随机整数参数顺序错误；注册器由对应代理修复。Blackboard万能牌测试假设经原始 `card.lua:3951-3963` 核验后纠正：未减益万能牌可以满足黑色花色检查，减益后检查底牌花色。
- 在本地参考Lua执行10000组固定样本，与独立集合判定逐项比较：最强牌型、所有子牌型、计分牌id与顺序，差异0。包含1至5张、四指/捷径/涂抹/Splash及万能/石头/减益组合。脚本与原始输出仅在references，报告为 `references/poker-diff.json`。
- 标准牌组按原型字典序创建：clubs/diamonds/hearts/spades，点数2..9/A/J/K/Q/T；专用回归先红后绿。
- 卡牌类型最终版本ID统一为foil/holo/polychrome/negative；计分兼容运行时字符串holographic，但类型不公开该别名。

已向root报告并由root集成：牌组与手牌共享引用/同步回写、均衡组终算、被动改判字段映射、Oops概率因子、回合末重触发类型。全局游戏与systems模块类型检查仍由对应责任代理处理，本域不声称整个工程构建或原版录屏通过。

尚未验收：原版游戏内全局seed调用路径、原版内核平台/版本、超大分数边界、逐帧动画与音频比对。
