# 当前调研结果

有效工程为 night-voyage-independent，参考固定提交 895ab3a25bc6f513fa80885eb59951bf8e76bc55。360 条内容、3642 条事实已收录，本轮1959项游戏测试通过。详细结论见 [验证报告](docs/verification-report.md)、[最新进度](docs/progress.md) 与 [来源记录](docs/source-provenance.json)。

本机无原版，不将参考快照或本实现测试当作原版实际运行。原件仅在忽略的 references；最终 1:1 未验收。

## 历史采集记录

下文保留早期工作区调查，包含已被后续隔离、修正或升级的状态与数量；旧目录、旧计数不代表当前成品。

# 调研发现

## 2026-10-13：工作区基线

- 用户工作区中已有 `balatro-rebuild/` 项目骨架，包含 `data/`、`docs/`、`references/`、`scripts/`、`src/`、`tests/`、`tools/`。
- 现有 `docs/progress.md` 记为阶段 A，但其“无已有复刻工程”描述与当前磁盘状态不符；项目骨架内尚未发现源文件或配置，待更新进度记录。
- `docs/fact-table.md` 目前仅有参考版本 TBD；`docs/coverage.md` 将各模块列为未实现；`docs/decisions.md` 选定 TypeScript + PixiJS + Vite。
- 当前根目录不是 Git 仓库，且本环境文件系统为只读；是否能创建/修改项目文件待授权检查。
- 用户要求并行域审；三个只读子任务已分别负责计分/经济、内容目录、本地安装与项目结构。
- 用户明确要求独立实现。发现的 `~/.zcode/workspace/default/balatro-clone` 是他人项目，排除为代码、依赖和实现来源；本任务只在 `balatro-rebuild/` 从零实现。

## 2026-10-13：第一轮公开来源核查

- Steam 官方商店页列出 150 个 Joker、15 副牌组、22 种 Tarot、11 种 Planet、32 张 Voucher（About This Game 段落，网页行 204–215）。这仅验证页面公开列出的数量，不等价于每个对象的完整定义。
- Game Design Lab 的 Balatro 系统参考页把数据版本标为 `1.0.1o-FULL`，并报告 Joker 150 张：Common 61、Uncommon 64、Rare 20、Legendary 5；页面说其条目来自 Wiki 各 Joker 信息框，不是官方导出。因此只能作候选版本/交叉核对，不能代替本地导出。
- Steamodded 的 G 变量文档说明：`G.P_CENTERS` 包含 Joker、consumable、voucher、deck、enhancement、edition、booster 等中心对象；`G.P_BLINDS`、`G.P_TAGS`、`G.P_CARDS` 等是独立原型表，`G.P_CENTER_POOLS` 按类别分组（网页行 142–156）。这可用于后续导出器设计，属社区框架文档。
- 找到一个公开的反向工程仓库，但 README 明确仓库包含纹理和 shader。为遵守素材红线，不克隆或下载整仓；后续若参考其中逻辑，只记录必要的数值事实和精确文件行号，不保存或复制资源与表达性文本。
- Steam 社区讨论的一位玩家列出 1.0.1o 于 2025-02-24 发布；这不是开发者公告或游戏内版本证明，只作为候选版本线索（讨论网页行 140–145）。
- 该反向工程仓库当前分支名为 `asset-main`，仓库页面列出 `functions/`、`card.lua`、`blind.lua`、`tag.lua`、`version.jkr`；由于该仓库混有原版纹理/shader，尚未检索具体源文件行，也未确认其对应版本。
- Steam 官方公告列表显示最新可见的 2025 年 2 月 24 日公告为 Friends of Jimbo 4，内容是跨平台卡背/卡面外观更新（公告网页行 82–89）；页面中 2026 年公告为周边消息。第三方 Balatro HQ 于 2026 年 10 月的更新追踪页称 1.1 尚未发布、游戏仍在 1.0 线、其数据库对应 1.0.1o（网页行 17–21、165–166）。据此把 `1.0.1o-FULL` 作为公开资料可支持的复刻目标数据版本，而不声称已与本机游戏核验。
- 没有本机安装时，不制作或伪称完成游戏内导出；若公开资料对某参数无法精确溯源，相关实现暂标 TBD。
- 参考链接：Steam 商店 `https://store.steampowered.com/app/2379780/Balatro/`；系统参考 `https://teemo.dev/game-design/balatro/systems/jokers-reference/`；Steamodded 文档 `https://github.com/Steamodded/smods/wiki/G/af137fd3b3048b4e22ce5c03a96423f3e8fcb7e2`；反向工程仓库 `https://github.com/balatro-src/balatro-src-reverse-engineering`。

## 2026-10-13：牌型、计分与经济规则（社区交叉核对）

- 牌型列表页列 12 个可升级类型；系统参考另把 Royal Flush 作为第 13 个显示名称，它实际与 Straight Flush 共用等级。三种隐藏类型为 Five of a Kind、Flush House、Flush Five；首次打出前在 Run Info 中隐藏。
- 牌型按固定优先级选出，不比较升级等级或分数；组合型按条件交集判定（如 Flush Five = 五条且同花，Flush House = 葫芦且同花）。A 可作顺子高牌或低牌，不可绕回；卡牌顺序不改变牌型判定，但改变计分触发次序。Four Fingers 会改变直顺/同花所需牌数。
- 计分阶段包括：分类/Boss 拦截/牌型基础值；打出牌逐张从左到右结算牌与逐卡小丑；手牌中逐张结算；小丑行整体结算；Plasma 平衡；销毁；取整并累加、After 小丑和盲注检查。红印与小丑重触发可重复完整逐卡流程。Stage 4 具体处理顺序尚待核对。
- 计分参考对基础牌筹码、四种改牌槽、Boss 盲注倍率及 Ante 9+ 需求曲线作了明确描述，来源为两份社区 Wiki 的逐格交叉校对，但仍不等同于本地原版数据。
- 发现正式商店宣传页和结构化社区数据的 Planet 数量不一致：Steam 商店页写 11；版本数据目录页列 12 张。收录时以每张实际牌和目标版本数据核对，不能用营销页面计数代替完整对象数。
- 来源：`https://teemo.dev/game-design/balatro/systems/hands-blinds-and-scoring-reference/`（网页行 66–135、216–244、251–277）；`https://teemo.dev/game-design/balatro/systems/scoring-engine-chips-mult/`（网页行 75–78）；`https://teemo.dev/game-design/balatro/systems/economy-money-interest-and-the-shop/`（网页行 43–61、70–100、103–126）；`https://teemo.dev/game-design/balatro/wiki/poker-hands/`（网页行 15–50）；[Steam 商店页](https://store.steampowered.com/app/2379780/Balatro/)（网页行 204–215）。

## 证据规则

- 数值事实必须有反编译文件行号、游戏导出 JSON 字段或可复核的一手来源。
- 社区 wiki 只能作为交叉核对，不用来伪造原版代码行号。
- 未取得原版数据时用 TBD，并清楚区分已核验和推断。


## 2026-10-13：事实表生成与当前实现盘点

- 更正先前“项目没有代码/数据骨架”的初始盘点：后续检查发现独立实现与生成脚本已经在规范项目目录中出现；本轮不采用工作区外他人 clone 的代码。
- `npm run content` 成功，事实表共 3,351 条，引用精确到被忽略的参考快照行号或 JSON 字段。该快照版本自声明为 `1.0.1o-FULL`，commit 为 `895ab3a25bc6f513fa80885eb59951bf8e76bc55`。
- `npm run audit` 成功，目录数量均与当前结构化数据一致。该检查只验证目录结构/来源与事实条目，不等同于运行时效果测试。
- Steam 未发现本机原版安装；不能伪称完成游戏内 dump、版本核验或逐帧差分。
- 测试先前因缺少状态机与系统运行时模块未能完成类型检查；模块正在补齐，需对最终工作树重新验证。
- 本轮错误：曾误发删除 `docs/progress.md` 的补丁，随即通过受管权限恢复并重建为当前内容。

## 内容条目口径

- 数据中 150 Joker、52 Consumable、32 Voucher、15 Deck、30 Blind、8 Stake、24 Tag、32 Booster 原型、8 Enhancement、4 Seal、5 Edition 均有目录项。
- 32 个 Booster 原型对应 15 种可见包型；官方商店页宣传 Planet 数量与结构化数据口径有差异，事实表保留冲突和来源说明。
- 目录完整度和机制效果完整度分开记录。

## 引擎独立评审与修复记录

有效入口确认 run-engine/independent-main；Boss 撤销、Mr Bones 得分上下文、目标参数、消费与弃牌事件、生成卡成长、临时减益清理等发现已转为集成回归。存档差异诊断当前为空。数值与效果测试和来源元数据检查将分别报告。
