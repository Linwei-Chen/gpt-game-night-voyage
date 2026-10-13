# 欢迎参与星筹夜航

欢迎分享种子、改善中文教学、补充边界用例，或让手机操作更舒服。

## 报告问题

在Issues中选择问题模板，附上种子、起始牌组、难度、发生阶段、操作顺序、浏览器与截图。有存档时可附上导出的游戏JSON；不要附密码、个人信息或原版游戏资源。

## 提交改进

先开Issue说明想改的行为。克隆后运行 `npm ci` 和 `npm run dev`；修改后运行 `npm test`、`npm run build`、`npm run audit`、`npm run verify:facts` 与 `npm run verify:run`。

改变数值时先登记fact-table中的依据；不确定的内容标TBD。逻辑修改应有可说明行为的测试。界面修改附电脑和手机截图。参考源码、反编译、原版图片/字体/音频只保留在被忽略的references目录。

提交PR时写清问题、改变后的行为及实际检查结果。新增素材须为原创或开放许可，并更新assets.md或THIRD_PARTY_NOTICES.md。
