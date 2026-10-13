# 教程独立评审记录

工程：.。

本次只读取正式事实表、实现与测试，不读取 references、原版源码、隔离源码或既往研究文档。源码与测试保持只读，仅写本报告；临时证据及截图放 /tmp。生产预览为 http://127.0.0.1:53428/。

## 最终结论

教程在本次覆盖范围内通过独立评审，未发现仍未解决的 P1、P2、P3 问题。静态事实核对、8 项教程测试、桌面与手机首轮 428 项浏览器检查，以及 T2 修复后的 301 项针对性补验均通过。T1 返回误判与 T2 手机按钮重叠均已修复并独立复验，最终 6 张截图已人工查看。

## 执行计划与完成记录

1. 已完成：核对 12 章中文说明与正式计分、经济、关卡规则。
2. 已完成：独立运行现有 8 项教程测试，全部通过。
3. 已完成：全新桌面和手机上下文中的首次引导、12 章导航、折叠说明、练习、伙伴交换、现金滑块、返回与刷新恢复。
4. 已完成：在真实 playing 阶段先选中一张正式手牌，记录状态、night-save 与 night-prefs；教程操作及每次关闭后逐字符比较。
5. 已完成：截图复查发现 T2，反馈修复，并保留 T1/T2 修复前证据。
6. 已完成：在修复后的生产版本复验两视口、首次/playing 两种背景下的全部 12 章布局；重拍并查看最终 6 张截图。
7. 已完成：记录两轮源码、事实数据及构建入口的起止 SHA-256；各轮期间一致。

## 事实与测试核对

12 章说明未发现明确机制错误。两张 9 的对子按 (10+9+9)×2=56 计分，附带普通 K 仍为 56，单张 K 高牌为 (5+10)×1=15。练习反馈明确只给两张 9 计分。青灯提供 +4 倍率，黛瓷在留手全黑时 ×3；顺序得到 28×((2+4)×3)=504，交换得到 28×(2×3+4)=280。教学例子使用正式计分接口。

利息使用正式经济接口：每 $5 得 $1，本金上限 $25，最多 $5；浏览器实际核对现金 0、4、5、9、10、24、25、50 对应利息 0、0、1、1、2、4、5、5。基础 8 张手牌、4 次出牌、3 次弃牌，红牌组额外一次弃牌；8 段夜航通常共 24 关，小关与大关可跳过，跳过没有正常过关收入或通常过关商店。Psychic 的 5 张要求、Water 清空弃牌、House 首次抽牌背面均对应正式数据。

本代理独立执行 ./node_modules/.bin/vitest run tests/tutorial.test.ts --no-cache：8 项全部通过。主代理汇报的全量测试、生产构建及旧实战回归不计入本代理亲自执行的检查。

## 独立浏览器覆盖

| 检查 | 结果 |
| --- | --- |
| 桌面 Chrome 1440×1000 | 首轮 210 项、补验 149 项全部通过 |
| 手机 Chrome 390×844 | 首轮 218 项、补验 152 项全部通过 |
| 全新浏览器首次引导 | 第一课自动展示；状态为 null；没有 night-save |
| 12 章导航 | 前进、后退、桌面目录及手机下拉；标题、序号同步 |
| 内容与控件 | 每章文章无横向溢出，弹窗在视口内，长文在文章区域滚动；页脚及退出可点击 |
| 牌型及工具折叠区 | 9 种普通及 3 种隐藏牌型可读；8 种强化、4 种印记、4 种非基础版本可展开 |
| 开局返回 | 修改种子、牌组、难度后打开教程，Escape 返回时选择保留 |
| 正式 playing 阶段入口 | 显示“回到牌桌”，当前阶段捷径跳至 turns；退出不回到开局 |
| 练习 | 未选牌禁用；选中、取消、重置、重复练习；56 / 56 / 15 分及反馈正确 |
| 伙伴及现金 | 504→280→504；滑块 Home、右键、End 与八个利息边界正确 |
| 游戏快捷键隔离 | 教程中按 1、2、Enter、Backspace 后，正式状态、存档、设置逐字符不变 |
| 四种返回 | 顶部退出、X、Escape、末课“回到牌桌”均关闭教程；原手牌选择保留 |
| 刷新与继续 | 不强制重开首次教程；继续航程恢复原状态、存档与设置；章节和练习通过进度保留 |
| T2 修复补验 | 两视口、首次及 playing 各 12 章的关闭/返回按钮、焦点轮廓、标题、文章、页脚、滚动均通过 |
| 最终截图 | 6 张均已人工查看，文字可读，头部按钮及焦点边框分离 |
| 浏览器异常 | 首轮和补验的所有上下文页面异常与控制台错误均为空 |

首轮 428 项和补验 301 项包含导航、状态断言及布局测量，不能等同为 729 个互相独立的测试场景。首轮仅测量中心点击，T2 是在人工截图复查中发现；补验增加了整个按钮与焦点轮廓的空间测量。

## 问题与修复复验

### T1 · P2 · 已修复：正式航程打开教程误判来自开局页

- 位置：src/independent-main.ts:162。
- 原因：只看 start-run 元素是否存在，关闭的开局弹窗仍保留该 DOM。
- 本代理旧版实际复现：正常进入第一关后打开顶部教程，退出仍显示“去开局”，当前阶段入口为 0；退出后开局弹窗打开。正式状态与 night-save 没有损失。
- 修复：判断增加 modal.open，限制为开局弹窗正在显示。
- 独立新页复验：桌面及手机的 playing 阶段均显示“回到牌桌”、当前阶段捷径存在且跳至 turns，四种退出均直接回到原牌桌。状态、night-save、night-prefs 逐字符不变。T2 补验再次确认正式阶段的 X 退出及存档保持。
- 历史截图：/tmp/tutorial-review-return-desktop.png、/tmp/tutorial-review-return-after.png。

### T2 · P3 · 已修复：手机首次教程的关闭按钮与返回按钮重叠

- 位置：src/original-style.css:22、111 的教程头部布局。
- 旧版复现：390×844 全新浏览器，首次自动打开教程；X 按钮默认获得焦点。X 矩形 x=322、y=59.64、宽45、高38；“去开局”矩形 x=304、y=91.14、宽41、高25。实体重叠约23×6.5像素，焦点线额外向外延伸并压到“去开局”文字。
- 旧版影响：两个按钮中心均能点击且返回目标相同，未见状态损失；问题是可见文字和控件空间重叠。playing 入口也有边缘重叠。
- 修复：桌面和手机教程头部的右侧空间由18px增至64px，让返回按钮避开 X。
- 独立补验：新生产 CSS 为 index-BlbmaGjf.css。两视口、首次/playing 两种背景各遍历 12 章，按钮实体、焦点轮廓和标题都不重叠；文章无横向溢出、页脚可点击、长文可滚动。
- 测量：新手机首次“去开局”移至 x=258、右边界299，X 左边界322，两者横向间距23像素；全部被检查布局的最小间距，桌面为37像素、手机为23像素，超过两侧焦点轮廓所需的12像素。
- 最终截图已人工复查，X 获得焦点时文字仍完整可读；补验中的正式状态、night-save、night-prefs 逐字符不变。
- 修复前证据：/tmp/tutorial-review-header-overlap-mobile.png。

首次连接拒绝来自生产预览尚未启动，页面代码未执行，服务恢复后已完成实测，不列为产品缺陷。

## 原始记录与最终截图

- 首轮浏览器记录：/tmp/tutorial-independent-final-review.json。
- T2 针对性补验记录：/tmp/tutorial-header-fix-review.json。
- 首次页截图拍摄记录：/tmp/tutorial-final-first-screenshots.json。

最终 6 张截图的来源路径如下；首次页保持文章顶部并显示 X 的焦点轮廓：

- /tmp/tutorial-review-final2-desktop-first.png
- /tmp/tutorial-review-final2-desktop-practice.png
- /tmp/tutorial-review-final2-desktop-partners.png
- /tmp/tutorial-review-final2-mobile-first.png
- /tmp/tutorial-review-final2-mobile-practice.png
- /tmp/tutorial-review-final2-mobile-partners.png

修复前证据另存如下：

- T1：/tmp/tutorial-review-return-desktop.png。
- T1：/tmp/tutorial-review-return-after.png。
- T2：/tmp/tutorial-review-header-overlap-mobile.png。

## 冻结与版本记录

首轮时间：2026-10-13T02:44:27.049765+00:00 至 2026-10-13T02:44:42.999181+00:00；其11个文件起止哈希一致。
T2 补验时间：2026-10-13T02:51:09.083830+00:00 至 2026-10-13T02:51:25.500687+00:00；其11个文件起止哈希一致。首次页补拍期间也一致。

两轮之间仅 src/original-style.css 与 dist/index.html 的哈希改变，与两条教程头部样式调整及重建一致。两个教程实现、主入口、测试、三张事实数据、正式计分与经济接口均保持首轮版本。最终文件 SHA-256：

| 文件 | 最终 SHA-256 |
| --- | --- |
| src/ui/tutorial-model.ts | 9073e7dd3077d98073275720ba156c771973103f8549c96175e0a51fe586a5c5 |
| src/ui/tutorial.ts | 18acfbe63c23baff604f0027ad9e786282a08a23cce75e16cf6e24b3c17651d8 |
| src/independent-main.ts | 5942de7b2321b21defb0c38758e5bd52777c77952ba71230030066433ed8e0d6 |
| src/original-style.css | 47e537fe4f6128c72730b2b8a121d68da92996d27bad26c9a08611fcddf48a38 |
| tests/tutorial.test.ts | 40f7ba3cb3e599bf89a50860e8bc7f225bc6dc8d4c0e6884832008f496650e55 |
| data/facts.json | a81865b3ab74a3ef277c33241668e6e4dd22d01a3c8f30a5bd0c4f0b6aee615d |
| data/systems-verified.json | ed28d1ffa43e52104e777fe6125c2efb0b64e911fa51bf11bbc5a9ffd61ef3b2 |
| data/jokers.json | 52f9817de53e2c22b02043c3c206446af1ef25a31509c8b3eeacb8986c2f037f |
| src/core/scoring.ts | 6ca9d97092de7752854d70565bc0a096c640e61510adf964cea508d88831c26a |
| src/core/economy-runtime.ts | 38c267ecb46f1ce9a4affe4d559545807d5e1b9722299834db2f874a5deaa2ca |
| dist/index.html | 12378b3b81af34f5c83df1265e826606cd3e00c2076fc372a53965a119d54997 |

T2 修复前的两个变更文件哈希：

- src/original-style.css：2e0cdc59653ee1aaa67091d55c157d21434ae236369d1cb8f03cdcf7821670eb。
- dist/index.html：f8f6bca14f637b4a48d8982d44e3c4d28c6f6a36f1d8061ac66f428b58aa4273。

## 范围与限制

本次独立评审覆盖教程与真实 playing 阶段的返回、隔离和恢复。未在每一种正式航程阶段重新构造教程背景，shop/pack 等阶段课程映射已静态核对。使用本机桌面 Chrome 及390×844的手机模拟，未声称完成真实 iOS Safari 或其他浏览器验收。未重做上次游戏整体独立评审，也未进行原版逐帧/视觉差分。

## 主代理归档

下列记录和截图已逐字节核对并归档，原始 /tmp 路径保留在评审正文中。

归档文件 | 来源路径
---|---
[tutorial-review-final2-desktop-first.png](screenshots/tutorial/review/tutorial-review-final2-desktop-first.png) | `/tmp/tutorial-review-final2-desktop-first.png`
[tutorial-review-final2-desktop-practice.png](screenshots/tutorial/review/tutorial-review-final2-desktop-practice.png) | `/tmp/tutorial-review-final2-desktop-practice.png`
[tutorial-review-final2-desktop-partners.png](screenshots/tutorial/review/tutorial-review-final2-desktop-partners.png) | `/tmp/tutorial-review-final2-desktop-partners.png`
[tutorial-review-final2-mobile-first.png](screenshots/tutorial/review/tutorial-review-final2-mobile-first.png) | `/tmp/tutorial-review-final2-mobile-first.png`
[tutorial-review-final2-mobile-practice.png](screenshots/tutorial/review/tutorial-review-final2-mobile-practice.png) | `/tmp/tutorial-review-final2-mobile-practice.png`
[tutorial-review-final2-mobile-partners.png](screenshots/tutorial/review/tutorial-review-final2-mobile-partners.png) | `/tmp/tutorial-review-final2-mobile-partners.png`
[tutorial-review-return-desktop.png](screenshots/tutorial/review/evidence/tutorial-review-return-desktop.png) | `/tmp/tutorial-review-return-desktop.png`
[tutorial-review-return-after.png](screenshots/tutorial/review/evidence/tutorial-review-return-after.png) | `/tmp/tutorial-review-return-after.png`
[tutorial-review-header-overlap-mobile.png](screenshots/tutorial/review/evidence/tutorial-review-header-overlap-mobile.png) | `/tmp/tutorial-review-header-overlap-mobile.png`
[tutorial-independent-final-review.json](tutorial-review-artifacts/tutorial-independent-final-review.json) | `/tmp/tutorial-independent-final-review.json`
[tutorial-header-fix-review.json](tutorial-review-artifacts/tutorial-header-fix-review.json) | `/tmp/tutorial-header-fix-review.json`
[tutorial-final-first-screenshots.json](tutorial-review-artifacts/tutorial-final-first-screenshots.json) | `/tmp/tutorial-final-first-screenshots.json`
