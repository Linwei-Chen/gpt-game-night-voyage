# 独立评审记录

审核成品：.。

仅对照 facts.json、事实表、本任务实现和测试。未读取 references、原版代码、既往研究文档。所有源码保持只读，仅写此评审记录。旧 balatro-rebuild 的未知并发版本不计入成品结论。

## 当前状态

本轮已报告的机制问题全部通过针对性复验。本代理独立运行 tests/game.test.ts 与 tests/endless.test.ts，47 项全部通过；其中 4 项覆盖胜利后继续、再次遇到终局、不满足条件时保持存档、继续标志保存恢复。

本次已报告的机制与界面问题均完成针对性复验，当前抽查没有未解决的 P1/P2/P3。最后定向检查覆盖桌面与手机、5 伙伴/2 道具及 6 伙伴/3 道具、商店与卡包，共 8 个场景；每场保留 7 张手牌，商店有 4 商品、1 凭单、2 卡包。全部卡牌中心及近四边均命中自身、位于牌桌内，无横向溢出。已查看最大压力场景截图，计数和提示避开卡面，扩展后的伙伴与道具完整显示。

桌面与手机的胜利继续流程已独立通过：胜利面板和存档可刷新恢复，点击继续后进入商店，保留金币、伙伴、道具、牌组及牌型等级；商店再次刷新恢复后离店，进入第九段，显示“夜航 9 · 继续航行”、目标 110000，并可实际进入关卡发出 8 张手牌。继续流程和最末界面定向脚本的页面错误均为空，每次检查八个 UI、引擎与事实文件起止哈希一致。继续流程保留上一冻结阶段的定向结果；最后仅布局和文案调整已回查，引擎及事实文件哈希未变。此项通过构造边界存档核验流程；不冒充本代理亲自完成 24 关实战。

## 界面修复记录

### R21 · P2 · 扩容后的凭单和卡包互相遮挡，手机商品被裁切

- 位置：src/render/original-table.ts:36、42、48（货架行间距与卡包位置）。
- 事实背景：system.v_overstock_norm.effects.0、system.v_overstock_plus.effects.0，使普通货架由 2 个位置增至 4 个；同时还有凭单与 2 个卡包。
- 场景：4 件普通商品、1 张凭单、2 个卡包；这是完整扩容后的正常组合。
- 桌面 1440×1000：凭单矩形 x=1006..1132，首个卡包 x=1059..1147；elementFromPoint 在凭单中心返回 pack-0。点击凭单中心实际会打开卡包详情。
- 手机 390×844：首件商品左边 x=-4.29，被牌桌裁切；凭单中心仍命中 pack-0；卡包宽约 37 像素。操作条 y=525..562 位于商品 y=483..564 的范围内，也覆盖部分卡面。
- 原因：货架按整张桌面的 900/500 逻辑宽度分配，没有给右侧卡包留独立区域；移动端的操作条仍使用固定 185 像素位置。
- 截图：/tmp/night-review-full-shop-desktop.png、/tmp/night-review-full-shop-mobile.png。
- 修复复验：桌面 1440×1000 与手机 390×844，在 5 伙伴、2 道具、7 手牌、4 商品、1 凭单、2 卡包的场景，所有商品、凭单、卡包、道具与手牌中心及近四边均命中自身，无横向溢出。凭单中心正确打开空白凭单详情，两卡包分别打开对应详情。R21 已通过。

### R22 · P3 · 顶部计数条遮住伙伴上沿

- 位置：src/original-style.css 的 .board-top。
- 场景：满 5 伙伴的桌面与手机商店。
- 实际：伙伴中心和左、右、下近边缘都可命中，上近边缘命中 null；手机截图中左右计数文字压住第一与第五张伙伴标题。
- 修复复验：桌面与手机所有伙伴上沿均命中自身；第一、第五张上沿真实点击均打开正确伙伴详情。手机计数与伙伴标题分开，所有卡牌的全部检查点通过。
- 中间复验发现 P3：桌面第四张伙伴范围 x=737..845、y=134..280；下边缘中心 y=278 命中“重掷 $5”按钮，操作条范围 y=277..307，重叠 3 像素。
- 最后修复将桌面操作条和货架下移，伙伴与道具按各自可用宽度排布。5/2 与 6/3 数量在桌面、手机的商店与卡包中全部检查点通过；第四张伙伴下沿真实点击正确打开“霜灯”详情，金币仍为 100，没有误触重掷。R22 全部通过。

## 已修复问题详情

### R16 · P2 · 待办目标错误地限制为已经玩过的牌型

- 位置：src/content/jokers.ts:90。
- 事实：hand.highCard、hand.pair 等牌型的 hidden=false；joker.j_todo_list.rule.2。
- 复现：仅玩过高牌后在商店购买 j_todo_list，再结束一个只玩高牌的回合。
- 实际：初始目标 highCard，回合结束仍 highCard；排除当前目标后候选池为空。
- 原因：visibleHandTypes 的默认集合取 Object.keys(handUses)，将未玩过但已可见的普通牌型排除。
- 修复复验：仅玩过高牌时仍可选所有 9 个基础牌型；本轮实际目标由 straightFlush 换为 fourOfAKind，已通过。

### R19 · P2 · 普通凭单意外免费补满已购买空位

- 位置：src/core/run-engine.ts:255、280（refreshPrices 及买凭单后调用）。
- 当前事实：system.v_blank.effects.0（仅增加 blankRedeems）；system.v_clearance_sale.effects.0（仅设置折扣）；system.v_overstock_norm.effects.0（新增 1 个货架槽）。
- 复现：商店现有 offers=[]、持有 100 金币、货架保留 v_blank，购买该凭单。
- 实际：offers 由 0 增加为 2，生成 c_fool 和 j_wrathful_joker。买折扣凭单时也补满原来已经购买的空位。
- 原因：refreshPrices 对所有凭单执行 while(offers < shopSlots)，混入补货职责。
- 建议：重定价只更新已有商品；只有货架槽数新增时，生成对应新增数量，保留已经购买的空位。
- 修复复验：空货架买 v_blank 或折扣凭单仍为 0 件；买新增货架凭单只生成 1 件，槽位由 2 变 3，已通过。

### R20 · P2 · 数字起始牌组被误判为开局已缩牌

- 位置：src/core/run-engine.ts 的 context（startingDeckSize 固定为 initial.deckSize）。
- 事实：joker.j_erosion.rule.0；system.b_abandoned.effects.0。
- 复现：创建 b_abandoned，开局实际 40 张，装入 j_erosion 后打一张牌；再对照开局删去 1 张的场景。
- 实际：未删牌已增加 48 倍率，删 1 张增加 52 倍率；runtime.startingDeckSize 均为 52。
- 预期：比较该局开局 40 张与当前张数，应分别增加 0、4 倍率。
- 建议：起始牌组处理完成后记录实际初始牌数，后续上下文使用该固定记录。
- 修复复验：起始牌数固定记录为 40；未删牌没有加倍率，删 1 张恰好 +4，已通过。

## 修复后回查

- R13：Gros Michel 自毁后 system.poolFlags.gros_michel_extinct=true，正式 eligibleJokerDefinitions 已包含 j_cavendish；已通过。
- R17：购买 v_clearance_sale 后 discountPercent=25，现有原价 10 的 Blueprint 重算为 7；价格问题已通过。补货副作用单独记录为 R19。
- R18：bl_final_acorn 实测 state.faceDown=true，但卡面与可访问名称仍显示伙伴身份；事实 system.bl_final_acorn.effects.0。已及时反馈，主代理已加入背面伙伴视图和隐藏库存详情。最终浏览器已看到可访问名称“背面伙伴，未知伙伴”，弹窗显示“身份被此关遮住了”且不透露真实身份；已通过。

## 已完成针对性复验的问题

| ID | 优先级 | 发现时问题 | 精确事实 |
|---|---|---|---|
| R1 | P1 | 伙伴/道具被误当纸牌取点数，出售及消费抛异常 | joker.j_luchador.rule.0、joker.j_invisible.rule.1 |
| R2 | P1 | 第六感销毁阶段丢失生成道具事件 | joker.j_sixth_sense.rule.0 |
| R3 | P1 | 禁用 Boss 未撤销手牌、次数、目标倍率 | joker.j_chicot.rule.0、joker.j_luchador.rule.0 |
| R4 | P1 | 骨头先生缺少实际轮内得分上下文 | joker.j_mr_bones.rule.0 |
| R5 | P1 | 每轮点数/花色目标未初始化 | joker.round-targets、j_mail/j_ancient/j_castle/j_idol.rule.0 |
| R6 | P1 | 道具/卡包消费未完整触发成长及使用统计 | joker.j_constellation.rule.0、joker.j_satellite.rule.0 |
| R7 | P1 | 伙伴生成/复制的纸牌未触发全息成长 | joker.j_hologram.rule.0 |
| R8 | P2 | 有效期满立即被解除失效 | system.economy.perishableRounds |
| R9 | P2 | 购买额外凭单删除未买主凭单 | system.tag_voucher.effects.0 |
| R10 | P1 | 焚牌升级上次出牌而非本次弃牌牌型 | joker.j_burnt.rule.0 |
| R11 | P1 | 满槽出售隐形伙伴没有复制 | joker.j_invisible.rule.1 |
| R12 | P2 | 复制剥离全部版本、元数据、成长卖价 | joker.j_invisible.rule.1、joker.j_egg.rule.0 |
| R13 | P2 | Gros Michel 消失标记未同步到后继牌池 | joker.j_gros_michel.rule.1、joker.j_cavendish.requiredPoolFlag |
| R14 | P2 | Showman 允许重复的标志未影响商店池 | joker.j_ring_master.rule.0、system.shop.poolRules |
| R15 | P1 | 修总出牌计数时误改首手条件为整局累计 | joker.j_dna.rule.0、joker.j_sixth_sense.rule.0 |

## 已通过抽查

- Hiker 永久筹码保留，Midas 改造保留，Vampire 增强移除保留。
- 同操作的存档恢复深层状态没有差异。
- Magic、Nebula、Ghost、Abandoned、Checkered、Zodiac 起始资源与事实对应。
- Manacle 下一轮恢复手牌数。
- Observatory 正式计分：持有 1 张匹配星图时倍率 ×1.5，2 张时 ×2.25，不匹配不触发；Plasma 的平衡在星图之后执行。事实 system.v_observatory.effects.1、system.mechanics.observatoryOrder。

## 视觉与交互检查

预览 http://127.0.0.1:53427/；独立 Chrome 浏览器上下文。开发页面的热更新会中断正在进行的检查，后续关闭本测试上下文的热更新连接再测试，未把开发更新误报为游戏故障。

### 已通过

- 桌面 1440×1000：初始 8 张手牌都可点选，3 张 3 加 2 张 2 识别为葫芦，并得到 212 筹码；补牌、轮内分数、出牌次数与状态提示同步。
- 牌组弹窗显示 52 张；关闭弹窗后返回牌桌。
- 商店购买伙伴和道具成功；选两张手牌再从库存使用 c_empress，两张都变为 mult 强化，库存道具移除，状态提示成功。
- 卡包正常打开，跳过剩余返回商店；离开商店返回 blindSelect，手牌清空。
- House 关卡的 8 张初始暗牌实际为背面，可访问名称也统一为“背面纸牌”。
- 更新后的移动端全新加载 390×844：8 张手牌分两排，每张约 55×68 像素，均位于牌桌范围内，无页面横向溢出。
- 上述操作期间未捕获到页面 JavaScript 错误。
- 高难度 Buffoon 卡包：生成伙伴的 eternal/rental 标记已经保留到正式 choices 及持有库存。

### 已通过的信息与确认交互

- U1：纸牌商品现已显示方块 7、glass 强化与 polychrome 版本的具体效果，已通过。最后复验已整理尾部标点，没有句号接分号或双句号。
- U2：手机卡包点击选项先显示能力与目标要求，再按“使用此牌”确认；查看前后剩余选择次数均为 1，随后实际确认一个可用道具后返回商店，已通过。
- U3：实际租赁伙伴详情显示“租用伙伴，每关支付 $3”；eternal 伙伴显示无法出售或摧毁，已通过。
- Boss 更换入口：手机可见且可操作，普通凭单支付 $10 后本轮按钮禁用；高级凭单连续更换两次扣除 $20，按钮仍可用，已通过。

### 继续航行的独立核验

- 事实：run.endlessContinuation、run.winNotificationOnce、system.anteCurves.endless.formula。
- 尺寸：1440×1000 与 390×844，各使用独立浏览器上下文。
- 胜利状态保存于 night-save；刷新后可继续恢复胜利面板。
- 点击“继续航行”后为 shop，system.endless=true；原 $40、5 伙伴、2 道具、牌组强化、高牌 5 级逐字段保持。
- 再次刷新商店后离店为 ante=9、target=110000；标签为“夜航 9 · 继续航行”。实际进入关卡后仍为 110000，发出 8 张牌。
- 胜利继续使用构造边界存档检查 UI 与状态转换。主代理另报告真实 24 关、203 操作完整通关及全量 1959 测试、生产构建通过；这些仅记为主代理结果，没有冒充本代理执行。

### 运行配置与版本记录

初次完整 UI 脚本检查途中，主入口新增继续航行，起止哈希不同；该轮保留为已检查功能记录，不记为同一版本封版结果。最终定向脚本改用独立 Python Playwright、已安装 Chrome 与 --disable-gpu-sandbox，先等待页面及字体完成加载。原测试侧点击卡顿在此配置中消失，未列为产品缺陷。热更新连接仅在本测试上下文中关闭。

最新定向脚本页面错误为空，以下文件起止 SHA256 完全一致：

| 文件 | SHA256 |
|---|---|
| src/independent-main.ts | cdc4bdc2b509b85d077fc30b65bebb8e6e96a2dcc5e433f41f7f5ab3c748b069 |
| src/render/original-table.ts | 4fa9fd21f23e5ffbb423b13c145895e0665b83a987a8ad830a1a05202ca6a0c4 |
| src/original-style.css | d25034e6cedd1b4198d8e0915bb0e2266c3b195a9cf14aaae80a2cd838f3e7c5 |
| src/core/run-engine.ts | c111d5dab1e116d778313e4232f8d58f7fb400954283b0aba29b6a3faa0f415a |
| src/content/systems-runtime.ts | e9d2a17dd38e3497992276f9ec327c429d4a1b6f35c9f9ee811c8c2e06f84314 |
| src/core/economy-runtime.ts | 38c267ecb46f1ce9a4affe4d559545807d5e1b9722299834db2f874a5deaa2ca |
| data/facts.json | a81865b3ab74a3ef277c33241668e6e4dd22d01a3c8f30a5bd0c4f0b6aee615d |
| data/evidence-run.json | 1ff3f4bc96b2ff8f522315de89c469af2e05c39d99272415bcaa475db27030e8 |

### 截图与范围

- 最末界面版本：/tmp/night-review-last-desktop-shop.png、/tmp/night-review-last-desktop-shop-pack.png、/tmp/night-review-last-desktop-expanded.png、/tmp/night-review-last-desktop-expanded-pack.png、/tmp/night-review-last-mobile-shop.png、/tmp/night-review-last-mobile-shop-pack.png、/tmp/night-review-last-mobile-expanded.png、/tmp/night-review-last-mobile-expanded-pack.png。
- 继续航行冻结阶段：/tmp/night-review-freeze-desktop-won.png、/tmp/night-review-freeze-mobile-won.png、/tmp/night-review-freeze-desktop-ante9.png、/tmp/night-review-freeze-mobile-ante9.png。
- 已完成完整交互阶段：/tmp/night-review-final-desktop-playing.png、/tmp/night-review-final-desktop-shop.png、/tmp/night-review-final-house.png、/tmp/night-review-final-acorn.png、/tmp/night-review-final-mobile-playing.png、/tmp/night-review-final-mobile-shop.png、/tmp/night-review-final-mobile-pack.png、/tmp/night-review-final-mobile-boss.png。
- 低影响文案与摆放均已修复复验：纸牌效果详情没有重复标点，手机商店与卡包底部提示位于第二排手牌下方。扩展为 3 个道具后，实际逐个点击均打开对应详情；卡包选项预览不消耗剩余选择次数。

没有向项目新增截图或改动源码、测试，仅写此评审记录。只评估原创界面可读性与可用性。没有原版录屏，原版逐帧／视觉差分未验收，不宣称通过。

## 主代理归档

最终8个压力场景及4张胜利/第九段截图已从临时目录归档到 [screenshots/review](screenshots/review)，文件名与上文一致。此处只补充产物位置，保留独立评审结论与冻结哈希。
