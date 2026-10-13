# 素材与原创记录

- 所有纸牌、伙伴、卡包、凭单与图标由本项目的 Pixi 几何绘制函数和原创 SVG 绘制，未引入原版图集、纹理、shader 或音频。
- 名称“星筹夜航”及360项玩家可见名称、中文效果说明均为本任务独立制作。内部 sourceKey 用于对应事实表条目，不显示原版文案。
- 声音由 Web Audio 振荡器合成。引用事实的音高关系不代表已与原版音频逐波形/逐帧核验。
- 字体：Noto Sans SC Regular，SIL Open Font License 1.1，来自 Noto CJK 项目的简体中文字体。上游 <https://github.com/notofonts/noto-cjk>；本地文件 `public/fonts/NotoSansSC-Regular.otf`，许可证保留于 `public/fonts/OFL.txt`。字体按开放许可使用，不宣称原创。
- 配色、几何图案、卡片大小、排列、弹簧与像素屏震参数属于原创界面适配。参考源码能提取的动画时长关系与音高在事实表列出；原版录屏仍待提供。
- 参考源码、LuaJIT 执行参考产物及未来游戏内 dump 只放 `references/`，已由本项目忽略配置排除，不参与生产构建。

字体文件 SHA256：`faa6c9df652116dde789d351359f3d7e5d2285a2b2a1f04a2d7244df706d5ea9`。字体自身名称表的版权与许可通知保留于 `public/fonts/COPYRIGHT.txt`。

- 公开试玩版本使用界面所需字符的WOFF2子集，家族名改为Night Voyage SC Subset，字体版权与OFL许可保留。开放许可OTF原件保留供复现；可安装tools/font-requirements.txt中的锁定依赖后运行scripts/subset-font.py重新生成，结果见font-subset-report.json。
