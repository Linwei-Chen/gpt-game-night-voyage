# 事实表

参考版本：1.0.1o-FULL；用户已确认本机无原版。参考源固定提交：895ab3a25bc6f513fa80885eb59951bf8e76bc55。

所有“高”表示参考源码可核验，尚不表示已通过游戏内导出或差分。TBD 不进入可宣称一致的范围。

事实 | 值/公式 | 出处（文件:行号 或 JSON 字段） | 置信度
---|---|---|---
joker.j_joker.order j_joker order | 1 | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.cost j_joker cost | 2 | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.rarity j_joker rarity | 1 | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.blueprint_compat j_joker blueprint_compat | true | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.perishable_compat j_joker perishable_compat | true | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.eternal_compat j_joker eternal_compat | true | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.unlocked j_joker unlocked | true | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.config.mult j_joker config.mult | 4 | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.unlockCondition j_joker unlockCondition | null | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.enhancementGate j_joker enhancementGate | null | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.requiredPoolFlag j_joker requiredPoolFlag | null | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.excludedPoolFlag j_joker excludedPoolFlag | null | references/source/game.lua:368 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.poolWeight j_joker poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_joker.rule.0 j_joker 触发规则 0 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"mult","value":"$state.mult"}],"copyable":true} | references/source/card.lua:3681; references/source/game.lua:368 | 高：固定参考版本源码；独立声明式规格
joker.j_joker.baseSellValue j_joker 基础卖价 | 1 | references/source/card.lua:382; references/source/game.lua:368 | 高：基础价格无版次/折扣时推导
joker.j_greedy_joker.order j_greedy_joker order | 2 | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.cost j_greedy_joker cost | 5 | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.rarity j_greedy_joker rarity | 1 | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.blueprint_compat j_greedy_joker blueprint_compat | true | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.perishable_compat j_greedy_joker perishable_compat | true | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.eternal_compat j_greedy_joker eternal_compat | true | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.unlocked j_greedy_joker unlocked | true | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.config.extra.s_mult j_greedy_joker config.extra.s_mult | 3 | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.config.extra.suit j_greedy_joker config.extra.suit | diamonds | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.unlockCondition j_greedy_joker unlockCondition | null | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.enhancementGate j_greedy_joker enhancementGate | null | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.requiredPoolFlag j_greedy_joker requiredPoolFlag | null | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.excludedPoolFlag j_greedy_joker excludedPoolFlag | null | references/source/game.lua:369 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.poolWeight j_greedy_joker poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_greedy_joker.rule.0 j_greedy_joker 触发规则 0 | {"trigger":"card","condition":["suitIs","diamonds"],"actions":[{"op":"emit","kind":"mult","value":"$state.extra.s_mult"}],"copyable":true} | references/source/card.lua:3217–3223; references/source/game.lua:369 | 高：固定参考版本源码；独立声明式规格
joker.j_greedy_joker.baseSellValue j_greedy_joker 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:369 | 高：基础价格无版次/折扣时推导
joker.j_lusty_joker.order j_lusty_joker order | 3 | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.cost j_lusty_joker cost | 5 | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.rarity j_lusty_joker rarity | 1 | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.blueprint_compat j_lusty_joker blueprint_compat | true | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.perishable_compat j_lusty_joker perishable_compat | true | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.eternal_compat j_lusty_joker eternal_compat | true | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.unlocked j_lusty_joker unlocked | true | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.config.extra.s_mult j_lusty_joker config.extra.s_mult | 3 | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.config.extra.suit j_lusty_joker config.extra.suit | hearts | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.unlockCondition j_lusty_joker unlockCondition | null | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.enhancementGate j_lusty_joker enhancementGate | null | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.requiredPoolFlag j_lusty_joker requiredPoolFlag | null | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.excludedPoolFlag j_lusty_joker excludedPoolFlag | null | references/source/game.lua:370 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.poolWeight j_lusty_joker poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lusty_joker.rule.0 j_lusty_joker 触发规则 0 | {"trigger":"card","condition":["suitIs","hearts"],"actions":[{"op":"emit","kind":"mult","value":"$state.extra.s_mult"}],"copyable":true} | references/source/card.lua:3217–3223; references/source/game.lua:370 | 高：固定参考版本源码；独立声明式规格
joker.j_lusty_joker.baseSellValue j_lusty_joker 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:370 | 高：基础价格无版次/折扣时推导
joker.j_wrathful_joker.order j_wrathful_joker order | 4 | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.cost j_wrathful_joker cost | 5 | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.rarity j_wrathful_joker rarity | 1 | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.blueprint_compat j_wrathful_joker blueprint_compat | true | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.perishable_compat j_wrathful_joker perishable_compat | true | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.eternal_compat j_wrathful_joker eternal_compat | true | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.unlocked j_wrathful_joker unlocked | true | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.config.extra.s_mult j_wrathful_joker config.extra.s_mult | 3 | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.config.extra.suit j_wrathful_joker config.extra.suit | spades | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.unlockCondition j_wrathful_joker unlockCondition | null | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.enhancementGate j_wrathful_joker enhancementGate | null | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.requiredPoolFlag j_wrathful_joker requiredPoolFlag | null | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.excludedPoolFlag j_wrathful_joker excludedPoolFlag | null | references/source/game.lua:371 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.poolWeight j_wrathful_joker poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wrathful_joker.rule.0 j_wrathful_joker 触发规则 0 | {"trigger":"card","condition":["suitIs","spades"],"actions":[{"op":"emit","kind":"mult","value":"$state.extra.s_mult"}],"copyable":true} | references/source/card.lua:3217–3223; references/source/game.lua:371 | 高：固定参考版本源码；独立声明式规格
joker.j_wrathful_joker.baseSellValue j_wrathful_joker 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:371 | 高：基础价格无版次/折扣时推导
joker.j_gluttenous_joker.order j_gluttenous_joker order | 5 | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.cost j_gluttenous_joker cost | 5 | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.rarity j_gluttenous_joker rarity | 1 | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.blueprint_compat j_gluttenous_joker blueprint_compat | true | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.perishable_compat j_gluttenous_joker perishable_compat | true | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.eternal_compat j_gluttenous_joker eternal_compat | true | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.unlocked j_gluttenous_joker unlocked | true | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.config.extra.s_mult j_gluttenous_joker config.extra.s_mult | 3 | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.config.extra.suit j_gluttenous_joker config.extra.suit | clubs | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.unlockCondition j_gluttenous_joker unlockCondition | null | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.enhancementGate j_gluttenous_joker enhancementGate | null | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.requiredPoolFlag j_gluttenous_joker requiredPoolFlag | null | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.excludedPoolFlag j_gluttenous_joker excludedPoolFlag | null | references/source/game.lua:372 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.poolWeight j_gluttenous_joker poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gluttenous_joker.rule.0 j_gluttenous_joker 触发规则 0 | {"trigger":"card","condition":["suitIs","clubs"],"actions":[{"op":"emit","kind":"mult","value":"$state.extra.s_mult"}],"copyable":true} | references/source/card.lua:3217–3223; references/source/game.lua:372 | 高：固定参考版本源码；独立声明式规格
joker.j_gluttenous_joker.baseSellValue j_gluttenous_joker 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:372 | 高：基础价格无版次/折扣时推导
joker.j_jolly.order j_jolly order | 6 | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.cost j_jolly cost | 3 | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.rarity j_jolly rarity | 1 | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.blueprint_compat j_jolly blueprint_compat | true | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.perishable_compat j_jolly perishable_compat | true | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.eternal_compat j_jolly eternal_compat | true | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.unlocked j_jolly unlocked | true | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.config.t_mult j_jolly config.t_mult | 8 | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.config.type j_jolly config.type | pair | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.unlockCondition j_jolly unlockCondition | null | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.enhancementGate j_jolly enhancementGate | null | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.requiredPoolFlag j_jolly requiredPoolFlag | null | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.excludedPoolFlag j_jolly excludedPoolFlag | null | references/source/game.lua:373 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.poolWeight j_jolly poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_jolly.rule.0 j_jolly 触发规则 0 | {"trigger":"joker","condition":["handContains","pair"],"actions":[{"op":"emit","kind":"mult","value":"$state.t_mult"}],"copyable":true} | references/source/card.lua:3660–3665; references/source/game.lua:373 | 高：固定参考版本源码；独立声明式规格
joker.j_jolly.baseSellValue j_jolly 基础卖价 | 1 | references/source/card.lua:382; references/source/game.lua:373 | 高：基础价格无版次/折扣时推导
joker.j_zany.order j_zany order | 7 | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.cost j_zany cost | 4 | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.rarity j_zany rarity | 1 | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.blueprint_compat j_zany blueprint_compat | true | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.perishable_compat j_zany perishable_compat | true | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.eternal_compat j_zany eternal_compat | true | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.unlocked j_zany unlocked | true | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.config.t_mult j_zany config.t_mult | 12 | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.config.type j_zany config.type | threeOfAKind | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.unlockCondition j_zany unlockCondition | null | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.enhancementGate j_zany enhancementGate | null | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.requiredPoolFlag j_zany requiredPoolFlag | null | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.excludedPoolFlag j_zany excludedPoolFlag | null | references/source/game.lua:374 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.poolWeight j_zany poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_zany.rule.0 j_zany 触发规则 0 | {"trigger":"joker","condition":["handContains","threeOfAKind"],"actions":[{"op":"emit","kind":"mult","value":"$state.t_mult"}],"copyable":true} | references/source/card.lua:3660–3665; references/source/game.lua:374 | 高：固定参考版本源码；独立声明式规格
joker.j_zany.baseSellValue j_zany 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:374 | 高：基础价格无版次/折扣时推导
joker.j_mad.order j_mad order | 8 | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.cost j_mad cost | 4 | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.rarity j_mad rarity | 1 | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.blueprint_compat j_mad blueprint_compat | true | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.perishable_compat j_mad perishable_compat | true | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.eternal_compat j_mad eternal_compat | true | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.unlocked j_mad unlocked | true | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.config.t_mult j_mad config.t_mult | 10 | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.config.type j_mad config.type | twoPair | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.unlockCondition j_mad unlockCondition | null | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.enhancementGate j_mad enhancementGate | null | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.requiredPoolFlag j_mad requiredPoolFlag | null | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.excludedPoolFlag j_mad excludedPoolFlag | null | references/source/game.lua:375 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.poolWeight j_mad poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mad.rule.0 j_mad 触发规则 0 | {"trigger":"joker","condition":["handContains","twoPair"],"actions":[{"op":"emit","kind":"mult","value":"$state.t_mult"}],"copyable":true} | references/source/card.lua:3660–3665; references/source/game.lua:375 | 高：固定参考版本源码；独立声明式规格
joker.j_mad.baseSellValue j_mad 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:375 | 高：基础价格无版次/折扣时推导
joker.j_crazy.order j_crazy order | 9 | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.cost j_crazy cost | 4 | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.rarity j_crazy rarity | 1 | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.blueprint_compat j_crazy blueprint_compat | true | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.perishable_compat j_crazy perishable_compat | true | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.eternal_compat j_crazy eternal_compat | true | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.unlocked j_crazy unlocked | true | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.config.t_mult j_crazy config.t_mult | 12 | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.config.type j_crazy config.type | straight | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.unlockCondition j_crazy unlockCondition | null | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.enhancementGate j_crazy enhancementGate | null | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.requiredPoolFlag j_crazy requiredPoolFlag | null | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.excludedPoolFlag j_crazy excludedPoolFlag | null | references/source/game.lua:376 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.poolWeight j_crazy poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crazy.rule.0 j_crazy 触发规则 0 | {"trigger":"joker","condition":["handContains","straight"],"actions":[{"op":"emit","kind":"mult","value":"$state.t_mult"}],"copyable":true} | references/source/card.lua:3660–3665; references/source/game.lua:376 | 高：固定参考版本源码；独立声明式规格
joker.j_crazy.baseSellValue j_crazy 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:376 | 高：基础价格无版次/折扣时推导
joker.j_droll.order j_droll order | 10 | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.cost j_droll cost | 4 | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.rarity j_droll rarity | 1 | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.blueprint_compat j_droll blueprint_compat | true | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.perishable_compat j_droll perishable_compat | true | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.eternal_compat j_droll eternal_compat | true | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.unlocked j_droll unlocked | true | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.config.t_mult j_droll config.t_mult | 10 | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.config.type j_droll config.type | flush | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.unlockCondition j_droll unlockCondition | null | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.enhancementGate j_droll enhancementGate | null | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.requiredPoolFlag j_droll requiredPoolFlag | null | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.excludedPoolFlag j_droll excludedPoolFlag | null | references/source/game.lua:377 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.poolWeight j_droll poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_droll.rule.0 j_droll 触发规则 0 | {"trigger":"joker","condition":["handContains","flush"],"actions":[{"op":"emit","kind":"mult","value":"$state.t_mult"}],"copyable":true} | references/source/card.lua:3660–3665; references/source/game.lua:377 | 高：固定参考版本源码；独立声明式规格
joker.j_droll.baseSellValue j_droll 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:377 | 高：基础价格无版次/折扣时推导
joker.j_sly.order j_sly order | 11 | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.cost j_sly cost | 3 | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.rarity j_sly rarity | 1 | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.blueprint_compat j_sly blueprint_compat | true | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.perishable_compat j_sly perishable_compat | true | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.eternal_compat j_sly eternal_compat | true | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.unlocked j_sly unlocked | true | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.config.t_chips j_sly config.t_chips | 50 | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.config.type j_sly config.type | pair | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.unlockCondition j_sly unlockCondition | null | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.enhancementGate j_sly enhancementGate | null | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.requiredPoolFlag j_sly requiredPoolFlag | null | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.excludedPoolFlag j_sly excludedPoolFlag | null | references/source/game.lua:378 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.poolWeight j_sly poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sly.rule.0 j_sly 触发规则 0 | {"trigger":"joker","condition":["handContains","pair"],"actions":[{"op":"emit","kind":"chips","value":"$state.t_chips"}],"copyable":true} | references/source/card.lua:3666–3671; references/source/game.lua:378 | 高：固定参考版本源码；独立声明式规格
joker.j_sly.baseSellValue j_sly 基础卖价 | 1 | references/source/card.lua:382; references/source/game.lua:378 | 高：基础价格无版次/折扣时推导
joker.j_wily.order j_wily order | 12 | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.cost j_wily cost | 4 | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.rarity j_wily rarity | 1 | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.blueprint_compat j_wily blueprint_compat | true | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.perishable_compat j_wily perishable_compat | true | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.eternal_compat j_wily eternal_compat | true | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.unlocked j_wily unlocked | true | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.config.t_chips j_wily config.t_chips | 100 | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.config.type j_wily config.type | threeOfAKind | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.unlockCondition j_wily unlockCondition | null | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.enhancementGate j_wily enhancementGate | null | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.requiredPoolFlag j_wily requiredPoolFlag | null | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.excludedPoolFlag j_wily excludedPoolFlag | null | references/source/game.lua:379 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.poolWeight j_wily poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wily.rule.0 j_wily 触发规则 0 | {"trigger":"joker","condition":["handContains","threeOfAKind"],"actions":[{"op":"emit","kind":"chips","value":"$state.t_chips"}],"copyable":true} | references/source/card.lua:3666–3671; references/source/game.lua:379 | 高：固定参考版本源码；独立声明式规格
joker.j_wily.baseSellValue j_wily 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:379 | 高：基础价格无版次/折扣时推导
joker.j_clever.order j_clever order | 13 | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.cost j_clever cost | 4 | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.rarity j_clever rarity | 1 | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.blueprint_compat j_clever blueprint_compat | true | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.perishable_compat j_clever perishable_compat | true | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.eternal_compat j_clever eternal_compat | true | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.unlocked j_clever unlocked | true | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.config.t_chips j_clever config.t_chips | 80 | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.config.type j_clever config.type | twoPair | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.unlockCondition j_clever unlockCondition | null | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.enhancementGate j_clever enhancementGate | null | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.requiredPoolFlag j_clever requiredPoolFlag | null | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.excludedPoolFlag j_clever excludedPoolFlag | null | references/source/game.lua:380 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.poolWeight j_clever poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_clever.rule.0 j_clever 触发规则 0 | {"trigger":"joker","condition":["handContains","twoPair"],"actions":[{"op":"emit","kind":"chips","value":"$state.t_chips"}],"copyable":true} | references/source/card.lua:3666–3671; references/source/game.lua:380 | 高：固定参考版本源码；独立声明式规格
joker.j_clever.baseSellValue j_clever 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:380 | 高：基础价格无版次/折扣时推导
joker.j_devious.order j_devious order | 14 | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.cost j_devious cost | 4 | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.rarity j_devious rarity | 1 | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.blueprint_compat j_devious blueprint_compat | true | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.perishable_compat j_devious perishable_compat | true | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.eternal_compat j_devious eternal_compat | true | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.unlocked j_devious unlocked | true | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.config.t_chips j_devious config.t_chips | 100 | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.config.type j_devious config.type | straight | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.unlockCondition j_devious unlockCondition | null | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.enhancementGate j_devious enhancementGate | null | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.requiredPoolFlag j_devious requiredPoolFlag | null | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.excludedPoolFlag j_devious excludedPoolFlag | null | references/source/game.lua:381 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.poolWeight j_devious poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_devious.rule.0 j_devious 触发规则 0 | {"trigger":"joker","condition":["handContains","straight"],"actions":[{"op":"emit","kind":"chips","value":"$state.t_chips"}],"copyable":true} | references/source/card.lua:3666–3671; references/source/game.lua:381 | 高：固定参考版本源码；独立声明式规格
joker.j_devious.baseSellValue j_devious 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:381 | 高：基础价格无版次/折扣时推导
joker.j_crafty.order j_crafty order | 15 | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.cost j_crafty cost | 4 | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.rarity j_crafty rarity | 1 | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.blueprint_compat j_crafty blueprint_compat | true | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.perishable_compat j_crafty perishable_compat | true | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.eternal_compat j_crafty eternal_compat | true | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.unlocked j_crafty unlocked | true | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.config.t_chips j_crafty config.t_chips | 80 | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.config.type j_crafty config.type | flush | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.unlockCondition j_crafty unlockCondition | null | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.enhancementGate j_crafty enhancementGate | null | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.requiredPoolFlag j_crafty requiredPoolFlag | null | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.excludedPoolFlag j_crafty excludedPoolFlag | null | references/source/game.lua:382 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.poolWeight j_crafty poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_crafty.rule.0 j_crafty 触发规则 0 | {"trigger":"joker","condition":["handContains","flush"],"actions":[{"op":"emit","kind":"chips","value":"$state.t_chips"}],"copyable":true} | references/source/card.lua:3666–3671; references/source/game.lua:382 | 高：固定参考版本源码；独立声明式规格
joker.j_crafty.baseSellValue j_crafty 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:382 | 高：基础价格无版次/折扣时推导
joker.j_half.order j_half order | 16 | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.cost j_half cost | 5 | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.rarity j_half rarity | 1 | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.blueprint_compat j_half blueprint_compat | true | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.perishable_compat j_half perishable_compat | true | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.eternal_compat j_half eternal_compat | true | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.unlocked j_half unlocked | true | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.config.extra.mult j_half config.extra.mult | 20 | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.config.extra.size j_half config.extra.size | 3 | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.unlockCondition j_half unlockCondition | null | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.enhancementGate j_half enhancementGate | null | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.requiredPoolFlag j_half requiredPoolFlag | null | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.excludedPoolFlag j_half excludedPoolFlag | null | references/source/game.lua:384 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.poolWeight j_half poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_half.rule.0 j_half 触发规则 0 | {"trigger":"joker","condition":["lte","$ctx.fullHand.length","$state.extra.size"],"actions":[{"op":"emit","kind":"mult","value":"$state.extra.mult"}],"copyable":true} | references/source/card.lua:3672; references/source/game.lua:384 | 高：固定参考版本源码；独立声明式规格
joker.j_half.baseSellValue j_half 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:384 | 高：基础价格无版次/折扣时推导
joker.j_stencil.order j_stencil order | 17 | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.cost j_stencil cost | 8 | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.rarity j_stencil rarity | 2 | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.blueprint_compat j_stencil blueprint_compat | true | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.perishable_compat j_stencil perishable_compat | true | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.eternal_compat j_stencil eternal_compat | true | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.unlocked j_stencil unlocked | true | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.unlockCondition j_stencil unlockCondition | null | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.enhancementGate j_stencil enhancementGate | null | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.requiredPoolFlag j_stencil requiredPoolFlag | null | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.excludedPoolFlag j_stencil excludedPoolFlag | null | references/source/game.lua:385 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.poolWeight j_stencil poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stencil.rule.0 j_stencil 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.stencilFactor",1],"actions":[{"op":"emit","kind":"xmult","value":"$ctx.stencilFactor"}],"copyable":true} | references/source/card.lua:3966; references/source/game.lua:385 | 高：固定参考版本源码；独立声明式规格
joker.j_stencil.baseSellValue j_stencil 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:385 | 高：基础价格无版次/折扣时推导
joker.j_four_fingers.order j_four_fingers order | 18 | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.cost j_four_fingers cost | 7 | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.rarity j_four_fingers rarity | 2 | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.blueprint_compat j_four_fingers blueprint_compat | false | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.perishable_compat j_four_fingers perishable_compat | true | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.eternal_compat j_four_fingers eternal_compat | true | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.unlocked j_four_fingers unlocked | true | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.unlockCondition j_four_fingers unlockCondition | null | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.enhancementGate j_four_fingers enhancementGate | null | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.requiredPoolFlag j_four_fingers requiredPoolFlag | null | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.excludedPoolFlag j_four_fingers excludedPoolFlag | null | references/source/game.lua:386 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.poolWeight j_four_fingers poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_four_fingers.rule.0 j_four_fingers 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":4,"target":"pokerMinimum"}],"copyable":false} | references/source/functions/misc_functions.lua:524; references/source/functions/misc_functions.lua:550; references/source/game.lua:386 | 高：固定参考版本源码；独立声明式规格
joker.j_four_fingers.baseSellValue j_four_fingers 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:386 | 高：基础价格无版次/折扣时推导
joker.j_mime.order j_mime order | 19 | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.cost j_mime cost | 5 | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.rarity j_mime rarity | 2 | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.blueprint_compat j_mime blueprint_compat | true | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.perishable_compat j_mime perishable_compat | true | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.eternal_compat j_mime eternal_compat | true | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.unlocked j_mime unlocked | true | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.config.extra j_mime config.extra | 1 | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.unlockCondition j_mime unlockCondition | null | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.enhancementGate j_mime enhancementGate | null | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.requiredPoolFlag j_mime requiredPoolFlag | null | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.excludedPoolFlag j_mime excludedPoolFlag | null | references/source/game.lua:387 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.poolWeight j_mime poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mime.rule.0 j_mime 触发规则 0 | {"trigger":["repetition","roundEndRepetition"],"condition":["and",["eq","$ctx.repetitionArea","held"],"$ctx.hasHeldEffects"],"actions":[{"op":"emit","kind":"retrigger","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3387; references/source/game.lua:387 | 高：固定参考版本源码；独立声明式规格
joker.j_mime.baseSellValue j_mime 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:387 | 高：基础价格无版次/折扣时推导
joker.j_credit_card.order j_credit_card order | 20 | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.cost j_credit_card cost | 1 | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.rarity j_credit_card rarity | 1 | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.blueprint_compat j_credit_card blueprint_compat | false | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.perishable_compat j_credit_card perishable_compat | true | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.eternal_compat j_credit_card eternal_compat | true | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.unlocked j_credit_card unlocked | true | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.config.extra j_credit_card config.extra | 20 | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.unlockCondition j_credit_card unlockCondition | null | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.enhancementGate j_credit_card enhancementGate | null | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.requiredPoolFlag j_credit_card requiredPoolFlag | null | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.excludedPoolFlag j_credit_card excludedPoolFlag | null | references/source/game.lua:388 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.poolWeight j_credit_card poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_credit_card.rule.0 j_credit_card 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":["neg","$state.extra"],"target":"bankruptAt"}],"copyable":false} | references/source/card.lua:593; references/source/game.lua:388 | 高：固定参考版本源码；独立声明式规格
joker.j_credit_card.baseSellValue j_credit_card 基础卖价 | 1 | references/source/card.lua:382; references/source/game.lua:388 | 高：基础价格无版次/折扣时推导
joker.j_ceremonial.order j_ceremonial order | 21 | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.cost j_ceremonial cost | 6 | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.rarity j_ceremonial rarity | 2 | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.blueprint_compat j_ceremonial blueprint_compat | true | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.perishable_compat j_ceremonial perishable_compat | false | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.eternal_compat j_ceremonial eternal_compat | true | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.unlocked j_ceremonial unlocked | true | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.config.mult j_ceremonial config.mult | 0 | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.unlockCondition j_ceremonial unlockCondition | null | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.enhancementGate j_ceremonial enhancementGate | null | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.requiredPoolFlag j_ceremonial requiredPoolFlag | null | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.excludedPoolFlag j_ceremonial excludedPoolFlag | null | references/source/game.lua:389 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.poolWeight j_ceremonial poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ceremonial.rule.0 j_ceremonial 触发规则 0 | {"trigger":"blindSet","condition":true,"actions":[{"op":"consumeRight","factor":2}],"copyable":false} | references/source/card.lua:2561; references/source/game.lua:389 | 高：固定参考版本源码；独立声明式规格
joker.j_ceremonial.rule.1 j_ceremonial 触发规则 1 | {"trigger":"joker","condition":["gt","$state.mult",0],"actions":[{"op":"emit","kind":"mult","value":"$state.mult"}],"copyable":true} | references/source/card.lua:3737; references/source/game.lua:389 | 高：固定参考版本源码；独立声明式规格
joker.j_ceremonial.baseSellValue j_ceremonial 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:389 | 高：基础价格无版次/折扣时推导
joker.j_banner.order j_banner order | 22 | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.cost j_banner cost | 5 | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.rarity j_banner rarity | 1 | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.blueprint_compat j_banner blueprint_compat | true | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.perishable_compat j_banner perishable_compat | true | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.eternal_compat j_banner eternal_compat | true | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.unlocked j_banner unlocked | true | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.config.extra j_banner config.extra | 30 | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.unlockCondition j_banner unlockCondition | null | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.enhancementGate j_banner enhancementGate | null | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.requiredPoolFlag j_banner requiredPoolFlag | null | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.excludedPoolFlag j_banner excludedPoolFlag | null | references/source/game.lua:390 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.poolWeight j_banner poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_banner.rule.0 j_banner 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.round.discardsLeft",0],"actions":[{"op":"emit","kind":"chips","value":["mul","$ctx.round.discardsLeft","$state.extra"]}],"copyable":true} | references/source/card.lua:3707; references/source/game.lua:390 | 高：固定参考版本源码；独立声明式规格
joker.j_banner.baseSellValue j_banner 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:390 | 高：基础价格无版次/折扣时推导
joker.j_mystic_summit.order j_mystic_summit order | 23 | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.cost j_mystic_summit cost | 5 | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.rarity j_mystic_summit rarity | 1 | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.blueprint_compat j_mystic_summit blueprint_compat | true | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.perishable_compat j_mystic_summit perishable_compat | true | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.eternal_compat j_mystic_summit eternal_compat | true | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.unlocked j_mystic_summit unlocked | true | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.config.extra.mult j_mystic_summit config.extra.mult | 15 | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.config.extra.d_remaining j_mystic_summit config.extra.d_remaining | 0 | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.unlockCondition j_mystic_summit unlockCondition | null | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.enhancementGate j_mystic_summit enhancementGate | null | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.requiredPoolFlag j_mystic_summit requiredPoolFlag | null | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.excludedPoolFlag j_mystic_summit excludedPoolFlag | null | references/source/game.lua:391 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.poolWeight j_mystic_summit poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mystic_summit.rule.0 j_mystic_summit 触发规则 0 | {"trigger":"joker","condition":["eq","$ctx.round.discardsLeft","$state.extra.d_remaining"],"actions":[{"op":"emit","kind":"mult","value":"$state.extra.mult"}],"copyable":true} | references/source/card.lua:3694; references/source/game.lua:391 | 高：固定参考版本源码；独立声明式规格
joker.j_mystic_summit.baseSellValue j_mystic_summit 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:391 | 高：基础价格无版次/折扣时推导
joker.j_marble.order j_marble order | 24 | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.cost j_marble cost | 6 | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.rarity j_marble rarity | 2 | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.blueprint_compat j_marble blueprint_compat | true | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.perishable_compat j_marble perishable_compat | true | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.eternal_compat j_marble eternal_compat | true | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.unlocked j_marble unlocked | true | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.config.extra j_marble config.extra | 1 | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.unlockCondition j_marble unlockCondition | null | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.enhancementGate j_marble enhancementGate | null | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.requiredPoolFlag j_marble requiredPoolFlag | null | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.excludedPoolFlag j_marble excludedPoolFlag | null | references/source/game.lua:392 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.poolWeight j_marble poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_marble.rule.0 j_marble 触发规则 0 | {"trigger":"blindSet","condition":true,"actions":[{"op":"spawn","set":"playingCard","count":"$state.extra","enhancement":"stone"}],"copyable":true} | references/source/card.lua:2580; references/source/game.lua:392 | 高：固定参考版本源码；独立声明式规格
joker.j_marble.baseSellValue j_marble 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:392 | 高：基础价格无版次/折扣时推导
joker.j_loyalty_card.order j_loyalty_card order | 25 | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.cost j_loyalty_card cost | 5 | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.rarity j_loyalty_card rarity | 2 | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.blueprint_compat j_loyalty_card blueprint_compat | true | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.perishable_compat j_loyalty_card perishable_compat | true | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.eternal_compat j_loyalty_card eternal_compat | true | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.unlocked j_loyalty_card unlocked | true | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.config.extra.Xmult j_loyalty_card config.extra.Xmult | 4 | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.config.extra.every j_loyalty_card config.extra.every | 5 | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.config.extra.remaining j_loyalty_card config.extra.remaining | 5 remaining | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.unlockCondition j_loyalty_card unlockCondition | null | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.enhancementGate j_loyalty_card enhancementGate | null | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.requiredPoolFlag j_loyalty_card requiredPoolFlag | null | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.excludedPoolFlag j_loyalty_card excludedPoolFlag | null | references/source/game.lua:393 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.poolWeight j_loyalty_card poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_loyalty_card.rule.0 j_loyalty_card 触发规则 0 | {"trigger":"joker","condition":["eq",["mod",["sub",["sub","$state.extra.every",1],["sub","$ctx.run.handsPlayed","$state.createdAtHands"]],["add","$state.extra.every",1]],"$state.extra.every"],"actions":[{"op":"emit","kind":"xmult","value":"$state.extra.Xmult"}],"copyable":true} | references/source/card.lua:3632; references/source/game.lua:393 | 高：固定参考版本源码；独立声明式规格
joker.j_loyalty_card.baseSellValue j_loyalty_card 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:393 | 高：基础价格无版次/折扣时推导
joker.j_8_ball.order j_8_ball order | 26 | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.cost j_8_ball cost | 5 | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.rarity j_8_ball rarity | 1 | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.blueprint_compat j_8_ball blueprint_compat | true | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.perishable_compat j_8_ball perishable_compat | true | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.eternal_compat j_8_ball eternal_compat | true | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.unlocked j_8_ball unlocked | true | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.config.extra j_8_ball config.extra | 4 | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.unlockCondition j_8_ball unlockCondition | null | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.enhancementGate j_8_ball enhancementGate | null | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.requiredPoolFlag j_8_ball requiredPoolFlag | null | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.excludedPoolFlag j_8_ball excludedPoolFlag | null | references/source/game.lua:394 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.poolWeight j_8_ball poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_8_ball.rule.0 j_8_ball 触发规则 0 | {"trigger":"card","condition":["and",["rankIn",[8]],"$ctx.hasConsumableRoom",["chance","$state.extra","8ball"]],"actions":[{"op":"spawn","set":"tarot","count":1}],"copyable":true} | references/source/card.lua:3106; references/source/game.lua:394 | 高：固定参考版本源码；独立声明式规格
joker.j_8_ball.baseSellValue j_8_ball 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:394 | 高：基础价格无版次/折扣时推导
joker.j_misprint.order j_misprint order | 27 | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.cost j_misprint cost | 4 | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.rarity j_misprint rarity | 1 | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.blueprint_compat j_misprint blueprint_compat | true | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.perishable_compat j_misprint perishable_compat | true | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.eternal_compat j_misprint eternal_compat | true | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.unlocked j_misprint unlocked | true | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.config.extra.max j_misprint config.extra.max | 23 | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.config.extra.min j_misprint config.extra.min | 0 | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.unlockCondition j_misprint unlockCondition | null | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.enhancementGate j_misprint enhancementGate | null | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.requiredPoolFlag j_misprint requiredPoolFlag | null | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.excludedPoolFlag j_misprint excludedPoolFlag | null | references/source/game.lua:395 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.poolWeight j_misprint poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_misprint.rule.0 j_misprint 触发规则 0 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"mult","value":["randomInt","$state.extra.min","$state.extra.max","misprint"]}],"copyable":true} | references/source/card.lua:3700; references/source/game.lua:395 | 高：固定参考版本源码；独立声明式规格
joker.j_misprint.baseSellValue j_misprint 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:395 | 高：基础价格无版次/折扣时推导
joker.j_dusk.order j_dusk order | 28 | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.cost j_dusk cost | 5 | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.rarity j_dusk rarity | 2 | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.blueprint_compat j_dusk blueprint_compat | true | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.perishable_compat j_dusk perishable_compat | true | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.eternal_compat j_dusk eternal_compat | true | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.unlocked j_dusk unlocked | true | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.config.extra j_dusk config.extra | 1 | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.unlockCondition.type j_dusk unlockCondition.type |  | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.unlockCondition.extra j_dusk unlockCondition.extra |  | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.unlockCondition.hidden j_dusk unlockCondition.hidden | true | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.enhancementGate j_dusk enhancementGate | null | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.requiredPoolFlag j_dusk requiredPoolFlag | null | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.excludedPoolFlag j_dusk excludedPoolFlag | null | references/source/game.lua:396 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.poolWeight j_dusk poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dusk.rule.0 j_dusk 触发规则 0 | {"trigger":"repetition","condition":["and",["eq","$ctx.repetitionArea","played"],["eq","$ctx.round.handsLeft",0]],"actions":[{"op":"emit","kind":"retrigger","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3360; references/source/game.lua:396 | 高：固定参考版本源码；独立声明式规格
joker.j_dusk.baseSellValue j_dusk 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:396 | 高：基础价格无版次/折扣时推导
joker.j_raised_fist.order j_raised_fist order | 29 | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.cost j_raised_fist cost | 5 | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.rarity j_raised_fist rarity | 1 | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.blueprint_compat j_raised_fist blueprint_compat | true | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.perishable_compat j_raised_fist perishable_compat | true | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.eternal_compat j_raised_fist eternal_compat | true | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.unlocked j_raised_fist unlocked | true | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.unlockCondition j_raised_fist unlockCondition | null | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.enhancementGate j_raised_fist enhancementGate | null | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.requiredPoolFlag j_raised_fist requiredPoolFlag | null | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.excludedPoolFlag j_raised_fist excludedPoolFlag | null | references/source/game.lua:397 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.poolWeight j_raised_fist poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_raised_fist.rule.0 j_raised_fist 触发规则 0 | {"trigger":"held","condition":"$ctx.isLowestHeld","actions":[{"op":"emit","kind":"mult","value":["mul",2,"$ctx.cardNominal"]}],"copyable":true} | references/source/card.lua:3320; references/source/game.lua:397 | 高：固定参考版本源码；独立声明式规格
joker.j_raised_fist.baseSellValue j_raised_fist 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:397 | 高：基础价格无版次/折扣时推导
joker.j_chaos.order j_chaos order | 30 | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.cost j_chaos cost | 4 | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.rarity j_chaos rarity | 1 | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.blueprint_compat j_chaos blueprint_compat | false | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.perishable_compat j_chaos perishable_compat | true | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.eternal_compat j_chaos eternal_compat | true | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.unlocked j_chaos unlocked | true | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.config.extra j_chaos config.extra | 1 | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.unlockCondition j_chaos unlockCondition | null | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.enhancementGate j_chaos enhancementGate | null | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.requiredPoolFlag j_chaos requiredPoolFlag | null | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.excludedPoolFlag j_chaos excludedPoolFlag | null | references/source/game.lua:398 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.poolWeight j_chaos poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chaos.rule.0 j_chaos 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":"$state.extra","target":"freeRerolls"}],"copyable":false} | references/source/card.lua:601; references/source/game.lua:398 | 高：固定参考版本源码；独立声明式规格
joker.j_chaos.baseSellValue j_chaos 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:398 | 高：基础价格无版次/折扣时推导
joker.j_fibonacci.order j_fibonacci order | 31 | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.cost j_fibonacci cost | 8 | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.rarity j_fibonacci rarity | 2 | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.blueprint_compat j_fibonacci blueprint_compat | true | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.perishable_compat j_fibonacci perishable_compat | true | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.eternal_compat j_fibonacci eternal_compat | true | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.unlocked j_fibonacci unlocked | true | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.config.extra j_fibonacci config.extra | 8 | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.unlockCondition j_fibonacci unlockCondition | null | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.enhancementGate j_fibonacci enhancementGate | null | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.requiredPoolFlag j_fibonacci requiredPoolFlag | null | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.excludedPoolFlag j_fibonacci excludedPoolFlag | null | references/source/game.lua:400 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.poolWeight j_fibonacci poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fibonacci.rule.0 j_fibonacci 触发规则 0 | {"trigger":"card","condition":["rankIn",[14,2,3,5,8]],"actions":[{"op":"emit","kind":"mult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3185; references/source/game.lua:400 | 高：固定参考版本源码；独立声明式规格
joker.j_fibonacci.baseSellValue j_fibonacci 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:400 | 高：基础价格无版次/折扣时推导
joker.j_steel_joker.order j_steel_joker order | 32 | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.cost j_steel_joker cost | 7 | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.rarity j_steel_joker rarity | 2 | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.blueprint_compat j_steel_joker blueprint_compat | true | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.perishable_compat j_steel_joker perishable_compat | true | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.eternal_compat j_steel_joker eternal_compat | true | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.unlocked j_steel_joker unlocked | true | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.config.extra j_steel_joker config.extra | 0.2 | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.unlockCondition j_steel_joker unlockCondition | null | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.enhancementGate j_steel_joker enhancementGate | m_steel | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.requiredPoolFlag j_steel_joker requiredPoolFlag | null | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.excludedPoolFlag j_steel_joker excludedPoolFlag | null | references/source/game.lua:401 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.poolWeight j_steel_joker poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_steel_joker.rule.0 j_steel_joker 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.deckSteelCount",0],"actions":[{"op":"emit","kind":"xmult","value":["add",1,["mul","$state.extra","$ctx.deckSteelCount"]]}],"copyable":true} | references/source/card.lua:3929; references/source/game.lua:401 | 高：固定参考版本源码；独立声明式规格
joker.j_steel_joker.baseSellValue j_steel_joker 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:401 | 高：基础价格无版次/折扣时推导
joker.j_scary_face.order j_scary_face order | 33 | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.cost j_scary_face cost | 4 | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.rarity j_scary_face rarity | 1 | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.blueprint_compat j_scary_face blueprint_compat | true | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.perishable_compat j_scary_face perishable_compat | true | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.eternal_compat j_scary_face eternal_compat | true | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.unlocked j_scary_face unlocked | true | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.config.extra j_scary_face config.extra | 30 | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.unlockCondition j_scary_face unlockCondition | null | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.enhancementGate j_scary_face enhancementGate | null | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.requiredPoolFlag j_scary_face requiredPoolFlag | null | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.excludedPoolFlag j_scary_face excludedPoolFlag | null | references/source/game.lua:402 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.poolWeight j_scary_face poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scary_face.rule.0 j_scary_face 触发规则 0 | {"trigger":"card","condition":"$ctx.cardIsFace","actions":[{"op":"emit","kind":"chips","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3136; references/source/game.lua:402 | 高：固定参考版本源码；独立声明式规格
joker.j_scary_face.baseSellValue j_scary_face 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:402 | 高：基础价格无版次/折扣时推导
joker.j_abstract.order j_abstract order | 34 | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.cost j_abstract cost | 4 | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.rarity j_abstract rarity | 1 | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.blueprint_compat j_abstract blueprint_compat | true | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.perishable_compat j_abstract perishable_compat | true | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.eternal_compat j_abstract eternal_compat | true | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.unlocked j_abstract unlocked | true | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.config.extra j_abstract config.extra | 3 | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.unlockCondition j_abstract unlockCondition | null | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.enhancementGate j_abstract enhancementGate | null | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.requiredPoolFlag j_abstract requiredPoolFlag | null | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.excludedPoolFlag j_abstract excludedPoolFlag | null | references/source/game.lua:403 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.poolWeight j_abstract poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_abstract.rule.0 j_abstract 触发规则 0 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"mult","value":["mul","$state.extra","$ctx.jokerCount"]}],"copyable":true} | references/source/card.lua:3678; references/source/game.lua:403 | 高：固定参考版本源码；独立声明式规格
joker.j_abstract.baseSellValue j_abstract 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:403 | 高：基础价格无版次/折扣时推导
joker.j_delayed_grat.order j_delayed_grat order | 35 | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.cost j_delayed_grat cost | 4 | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.rarity j_delayed_grat rarity | 1 | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.blueprint_compat j_delayed_grat blueprint_compat | false | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.perishable_compat j_delayed_grat perishable_compat | true | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.eternal_compat j_delayed_grat eternal_compat | true | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.unlocked j_delayed_grat unlocked | true | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.config.extra j_delayed_grat config.extra | 2 | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.unlockCondition j_delayed_grat unlockCondition | null | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.enhancementGate j_delayed_grat enhancementGate | null | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.requiredPoolFlag j_delayed_grat requiredPoolFlag | null | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.excludedPoolFlag j_delayed_grat excludedPoolFlag | null | references/source/game.lua:404 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.poolWeight j_delayed_grat poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_delayed_grat.rule.0 j_delayed_grat 触发规则 0 | {"trigger":"payout","condition":["and",["eq","$ctx.round.discardsUsed",0],["gt","$ctx.round.discardsLeft",0]],"actions":[{"op":"emit","kind":"money","value":["mul","$state.extra","$ctx.round.discardsLeft"]}],"copyable":false} | references/source/card.lua:1675; references/source/game.lua:404 | 高：固定参考版本源码；独立声明式规格
joker.j_delayed_grat.baseSellValue j_delayed_grat 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:404 | 高：基础价格无版次/折扣时推导
joker.j_hack.order j_hack order | 36 | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.cost j_hack cost | 6 | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.rarity j_hack rarity | 2 | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.blueprint_compat j_hack blueprint_compat | true | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.perishable_compat j_hack perishable_compat | true | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.eternal_compat j_hack eternal_compat | true | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.unlocked j_hack unlocked | true | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.config.extra j_hack config.extra | 1 | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.unlockCondition j_hack unlockCondition | null | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.enhancementGate j_hack enhancementGate | null | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.requiredPoolFlag j_hack requiredPoolFlag | null | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.excludedPoolFlag j_hack excludedPoolFlag | null | references/source/game.lua:405 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.poolWeight j_hack poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hack.rule.0 j_hack 触发规则 0 | {"trigger":"repetition","condition":["and",["eq","$ctx.repetitionArea","played"],["rankIn",[2,3,4,5]]],"actions":[{"op":"emit","kind":"retrigger","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3374; references/source/game.lua:405 | 高：固定参考版本源码；独立声明式规格
joker.j_hack.baseSellValue j_hack 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:405 | 高：基础价格无版次/折扣时推导
joker.j_pareidolia.order j_pareidolia order | 37 | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.cost j_pareidolia cost | 5 | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.rarity j_pareidolia rarity | 2 | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.blueprint_compat j_pareidolia blueprint_compat | false | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.perishable_compat j_pareidolia perishable_compat | true | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.eternal_compat j_pareidolia eternal_compat | true | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.unlocked j_pareidolia unlocked | true | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.unlockCondition j_pareidolia unlockCondition | null | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.enhancementGate j_pareidolia enhancementGate | null | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.requiredPoolFlag j_pareidolia requiredPoolFlag | null | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.excludedPoolFlag j_pareidolia excludedPoolFlag | null | references/source/game.lua:406 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.poolWeight j_pareidolia poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_pareidolia.rule.0 j_pareidolia 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":1,"target":"allCardsAreFace"}],"copyable":false} | references/source/card.lua:964; references/source/game.lua:406 | 高：固定参考版本源码；独立声明式规格
joker.j_pareidolia.baseSellValue j_pareidolia 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:406 | 高：基础价格无版次/折扣时推导
joker.j_gros_michel.order j_gros_michel order | 38 | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.cost j_gros_michel cost | 5 | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.rarity j_gros_michel rarity | 1 | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.blueprint_compat j_gros_michel blueprint_compat | true | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.perishable_compat j_gros_michel perishable_compat | true | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.eternal_compat j_gros_michel eternal_compat | false | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.unlocked j_gros_michel unlocked | true | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.config.extra.odds j_gros_michel config.extra.odds | 6 | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.config.extra.mult j_gros_michel config.extra.mult | 15 | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.unlockCondition j_gros_michel unlockCondition | null | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.enhancementGate j_gros_michel enhancementGate | null | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.requiredPoolFlag j_gros_michel requiredPoolFlag | null | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.excludedPoolFlag j_gros_michel excludedPoolFlag | gros_michel_extinct | references/source/game.lua:407 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.poolWeight j_gros_michel poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gros_michel.rule.0 j_gros_michel 触发规则 0 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"mult","value":"$state.extra.mult"}],"copyable":true} | references/source/card.lua:4022; references/source/game.lua:407 | 高：固定参考版本源码；独立声明式规格
joker.j_gros_michel.rule.1 j_gros_michel 触发规则 1 | {"trigger":"roundEnd","condition":["chance","$state.extra.odds","gros_michel"],"actions":[{"op":"remove","who":"self"},{"op":"flag","key":"gros_michel_extinct","value":true}],"copyable":false} | references/source/card.lua:3019; references/source/game.lua:407 | 高：固定参考版本源码；独立声明式规格
joker.j_gros_michel.baseSellValue j_gros_michel 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:407 | 高：基础价格无版次/折扣时推导
joker.j_even_steven.order j_even_steven order | 39 | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.cost j_even_steven cost | 4 | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.rarity j_even_steven rarity | 1 | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.blueprint_compat j_even_steven blueprint_compat | true | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.perishable_compat j_even_steven perishable_compat | true | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.eternal_compat j_even_steven eternal_compat | true | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.unlocked j_even_steven unlocked | true | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.config.extra j_even_steven config.extra | 4 | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.unlockCondition j_even_steven unlockCondition | null | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.enhancementGate j_even_steven enhancementGate | null | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.requiredPoolFlag j_even_steven requiredPoolFlag | null | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.excludedPoolFlag j_even_steven excludedPoolFlag | null | references/source/game.lua:408 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.poolWeight j_even_steven poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_even_steven.rule.0 j_even_steven 触发规则 0 | {"trigger":"card","condition":["rankIn",[2,4,6,8,10]],"actions":[{"op":"emit","kind":"mult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3196; references/source/game.lua:408 | 高：固定参考版本源码；独立声明式规格
joker.j_even_steven.baseSellValue j_even_steven 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:408 | 高：基础价格无版次/折扣时推导
joker.j_odd_todd.order j_odd_todd order | 40 | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.cost j_odd_todd cost | 4 | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.rarity j_odd_todd rarity | 1 | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.blueprint_compat j_odd_todd blueprint_compat | true | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.perishable_compat j_odd_todd perishable_compat | true | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.eternal_compat j_odd_todd eternal_compat | true | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.unlocked j_odd_todd unlocked | true | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.config.extra j_odd_todd config.extra | 31 | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.unlockCondition j_odd_todd unlockCondition | null | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.enhancementGate j_odd_todd enhancementGate | null | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.requiredPoolFlag j_odd_todd requiredPoolFlag | null | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.excludedPoolFlag j_odd_todd excludedPoolFlag | null | references/source/game.lua:409 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.poolWeight j_odd_todd poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_odd_todd.rule.0 j_odd_todd 触发规则 0 | {"trigger":"card","condition":["rankIn",[14,3,5,7,9]],"actions":[{"op":"emit","kind":"chips","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3206; references/source/game.lua:409 | 高：固定参考版本源码；独立声明式规格
joker.j_odd_todd.baseSellValue j_odd_todd 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:409 | 高：基础价格无版次/折扣时推导
joker.j_scholar.order j_scholar order | 41 | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.cost j_scholar cost | 4 | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.rarity j_scholar rarity | 1 | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.blueprint_compat j_scholar blueprint_compat | true | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.perishable_compat j_scholar perishable_compat | true | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.eternal_compat j_scholar eternal_compat | true | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.unlocked j_scholar unlocked | true | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.config.extra.mult j_scholar config.extra.mult | 4 | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.config.extra.chips j_scholar config.extra.chips | 20 | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.unlockCondition j_scholar unlockCondition | null | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.enhancementGate j_scholar enhancementGate | null | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.requiredPoolFlag j_scholar requiredPoolFlag | null | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.excludedPoolFlag j_scholar excludedPoolFlag | null | references/source/game.lua:410 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.poolWeight j_scholar poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_scholar.rule.0 j_scholar 触发规则 0 | {"trigger":"card","condition":["rankIn",[14]],"actions":[{"op":"emit","kind":"chips","value":"$state.extra.chips"},{"op":"emit","kind":"mult","value":"$state.extra.mult"}],"copyable":true} | references/source/card.lua:3159; references/source/game.lua:410 | 高：固定参考版本源码；独立声明式规格
joker.j_scholar.baseSellValue j_scholar 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:410 | 高：基础价格无版次/折扣时推导
joker.j_business.order j_business order | 42 | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.cost j_business cost | 4 | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.rarity j_business rarity | 1 | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.blueprint_compat j_business blueprint_compat | true | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.perishable_compat j_business perishable_compat | true | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.eternal_compat j_business eternal_compat | true | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.unlocked j_business unlocked | true | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.config.extra j_business config.extra | 2 | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.unlockCondition j_business unlockCondition | null | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.enhancementGate j_business enhancementGate | null | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.requiredPoolFlag j_business requiredPoolFlag | null | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.excludedPoolFlag j_business excludedPoolFlag | null | references/source/game.lua:411 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.poolWeight j_business poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_business.rule.0 j_business 触发规则 0 | {"trigger":"card","condition":["and","$ctx.cardIsFace",["chance","$state.extra","business"]],"actions":[{"op":"emit","kind":"money","value":2}],"copyable":true} | references/source/card.lua:3175; references/source/game.lua:411 | 高：固定参考版本源码；独立声明式规格
joker.j_business.baseSellValue j_business 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:411 | 高：基础价格无版次/折扣时推导
joker.j_supernova.order j_supernova order | 43 | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.cost j_supernova cost | 5 | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.rarity j_supernova rarity | 1 | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.blueprint_compat j_supernova blueprint_compat | true | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.perishable_compat j_supernova perishable_compat | true | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.eternal_compat j_supernova eternal_compat | true | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.unlocked j_supernova unlocked | true | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.config.extra j_supernova config.extra | 1 | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.unlockCondition j_supernova unlockCondition | null | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.enhancementGate j_supernova enhancementGate | null | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.requiredPoolFlag j_supernova requiredPoolFlag | null | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.excludedPoolFlag j_supernova excludedPoolFlag | null | references/source/game.lua:412 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.poolWeight j_supernova poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_supernova.rule.0 j_supernova 触发规则 0 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"mult","value":"$ctx.currentHandUses"}],"copyable":true} | references/source/card.lua:3731; references/source/game.lua:412 | 高：固定参考版本源码；独立声明式规格
joker.j_supernova.baseSellValue j_supernova 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:412 | 高：基础价格无版次/折扣时推导
joker.j_ride_the_bus.order j_ride_the_bus order | 44 | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.cost j_ride_the_bus cost | 6 | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.rarity j_ride_the_bus rarity | 1 | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.blueprint_compat j_ride_the_bus blueprint_compat | true | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.perishable_compat j_ride_the_bus perishable_compat | false | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.eternal_compat j_ride_the_bus eternal_compat | true | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.unlocked j_ride_the_bus unlocked | true | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.config.extra j_ride_the_bus config.extra | 1 | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.unlockCondition.type j_ride_the_bus unlockCondition.type | discard_custom | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.enhancementGate j_ride_the_bus enhancementGate | null | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.requiredPoolFlag j_ride_the_bus requiredPoolFlag | null | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.excludedPoolFlag j_ride_the_bus excludedPoolFlag | null | references/source/game.lua:413 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.poolWeight j_ride_the_bus poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ride_the_bus.rule.0 j_ride_the_bus 触发规则 0 | {"trigger":"before","condition":"$ctx.scoringHasFace","actions":[{"op":"set","target":"state.mult","value":0}],"copyable":false} | references/source/card.lua:3525; references/source/game.lua:413 | 高：固定参考版本源码；独立声明式规格
joker.j_ride_the_bus.rule.1 j_ride_the_bus 触发规则 1 | {"trigger":"before","condition":["not","$ctx.scoringHasFace"],"actions":[{"op":"add","target":"state.mult","value":"$state.extra"}],"copyable":false} | references/source/card.lua:3525; references/source/game.lua:413 | 高：固定参考版本源码；独立声明式规格
joker.j_ride_the_bus.rule.2 j_ride_the_bus 触发规则 2 | {"trigger":"joker","condition":["gt","$state.mult",0],"actions":[{"op":"emit","kind":"mult","value":"$state.mult"}],"copyable":true} | references/source/card.lua:3992; references/source/game.lua:413 | 高：固定参考版本源码；独立声明式规格
joker.j_ride_the_bus.baseSellValue j_ride_the_bus 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:413 | 高：基础价格无版次/折扣时推导
joker.j_space.order j_space order | 45 | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.cost j_space cost | 5 | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.rarity j_space rarity | 2 | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.blueprint_compat j_space blueprint_compat | true | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.perishable_compat j_space perishable_compat | true | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.eternal_compat j_space eternal_compat | true | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.unlocked j_space unlocked | true | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.config.extra j_space config.extra | 4 | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.unlockCondition j_space unlockCondition | null | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.enhancementGate j_space enhancementGate | null | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.requiredPoolFlag j_space requiredPoolFlag | null | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.excludedPoolFlag j_space excludedPoolFlag | null | references/source/game.lua:414 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.poolWeight j_space poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_space.rule.0 j_space 触发规则 0 | {"trigger":"before","condition":["chance","$state.extra","space"],"actions":[{"op":"level","hand":"$ctx.handType","amount":1}],"copyable":true} | references/source/card.lua:3420; references/source/game.lua:414 | 高：固定参考版本源码；独立声明式规格
joker.j_space.baseSellValue j_space 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:414 | 高：基础价格无版次/折扣时推导
joker.j_egg.order j_egg order | 46 | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.cost j_egg cost | 4 | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.rarity j_egg rarity | 1 | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.blueprint_compat j_egg blueprint_compat | false | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.perishable_compat j_egg perishable_compat | true | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.eternal_compat j_egg eternal_compat | true | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.unlocked j_egg unlocked | true | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.config.extra j_egg config.extra | 3 | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.unlockCondition j_egg unlockCondition | null | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.enhancementGate j_egg enhancementGate | null | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.requiredPoolFlag j_egg requiredPoolFlag | null | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.excludedPoolFlag j_egg excludedPoolFlag | null | references/source/game.lua:416 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.poolWeight j_egg poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_egg.rule.0 j_egg 触发规则 0 | {"trigger":"roundEnd","condition":true,"actions":[{"op":"sellValueAdd","who":"self","amount":"$state.extra"}],"copyable":false} | references/source/card.lua:2985; references/source/game.lua:416 | 高：固定参考版本源码；独立声明式规格
joker.j_egg.baseSellValue j_egg 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:416 | 高：基础价格无版次/折扣时推导
joker.j_burglar.order j_burglar order | 47 | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.cost j_burglar cost | 6 | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.rarity j_burglar rarity | 2 | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.blueprint_compat j_burglar blueprint_compat | true | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.perishable_compat j_burglar perishable_compat | true | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.eternal_compat j_burglar eternal_compat | true | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.unlocked j_burglar unlocked | true | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.config.extra j_burglar config.extra | 3 | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.unlockCondition j_burglar unlockCondition | null | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.enhancementGate j_burglar enhancementGate | null | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.requiredPoolFlag j_burglar requiredPoolFlag | null | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.excludedPoolFlag j_burglar excludedPoolFlag | null | references/source/game.lua:417 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.poolWeight j_burglar poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burglar.rule.0 j_burglar 触发规则 0 | {"trigger":"blindSet","condition":true,"actions":[{"op":"emit","kind":"hands","value":"$state.extra"},{"op":"emit","kind":"discards","value":["neg","$ctx.round.discardsLeft"]}],"copyable":true} | references/source/card.lua:2522; references/source/game.lua:417 | 高：固定参考版本源码；独立声明式规格
joker.j_burglar.baseSellValue j_burglar 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:417 | 高：基础价格无版次/折扣时推导
joker.j_blackboard.order j_blackboard order | 48 | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.cost j_blackboard cost | 6 | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.rarity j_blackboard rarity | 2 | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.blueprint_compat j_blackboard blueprint_compat | true | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.perishable_compat j_blackboard perishable_compat | true | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.eternal_compat j_blackboard eternal_compat | true | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.unlocked j_blackboard unlocked | true | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.config.extra j_blackboard config.extra | 3 | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.unlockCondition j_blackboard unlockCondition | null | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.enhancementGate j_blackboard enhancementGate | null | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.requiredPoolFlag j_blackboard requiredPoolFlag | null | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.excludedPoolFlag j_blackboard excludedPoolFlag | null | references/source/game.lua:418 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.poolWeight j_blackboard poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blackboard.rule.0 j_blackboard 触发规则 0 | {"trigger":"joker","condition":"$ctx.allHeldBlack","actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3951; references/source/game.lua:418 | 高：固定参考版本源码；独立声明式规格
joker.j_blackboard.baseSellValue j_blackboard 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:418 | 高：基础价格无版次/折扣时推导
joker.j_runner.order j_runner order | 49 | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.cost j_runner cost | 5 | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.rarity j_runner rarity | 1 | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.blueprint_compat j_runner blueprint_compat | true | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.perishable_compat j_runner perishable_compat | false | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.eternal_compat j_runner eternal_compat | true | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.unlocked j_runner unlocked | true | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.config.extra.chips j_runner config.extra.chips | 0 | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.config.extra.chip_mod j_runner config.extra.chip_mod | 15 | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.unlockCondition j_runner unlockCondition | null | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.enhancementGate j_runner enhancementGate | null | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.requiredPoolFlag j_runner requiredPoolFlag | null | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.excludedPoolFlag j_runner excludedPoolFlag | null | references/source/game.lua:419 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.poolWeight j_runner poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_runner.rule.0 j_runner 触发规则 0 | {"trigger":"before","condition":["handContains","straight"],"actions":[{"op":"add","target":"state.extra.chips","value":"$state.extra.chip_mod"}],"copyable":false} | references/source/card.lua:3435; references/source/game.lua:419 | 高：固定参考版本源码；独立声明式规格
joker.j_runner.rule.1 j_runner 触发规则 1 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"chips","value":"$state.extra.chips"}],"copyable":true} | references/source/card.lua:3908; references/source/game.lua:419 | 高：固定参考版本源码；独立声明式规格
joker.j_runner.baseSellValue j_runner 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:419 | 高：基础价格无版次/折扣时推导
joker.j_ice_cream.order j_ice_cream order | 50 | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.cost j_ice_cream cost | 5 | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.rarity j_ice_cream rarity | 1 | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.blueprint_compat j_ice_cream blueprint_compat | true | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.perishable_compat j_ice_cream perishable_compat | true | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.eternal_compat j_ice_cream eternal_compat | false | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.unlocked j_ice_cream unlocked | true | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.config.extra.chips j_ice_cream config.extra.chips | 100 | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.config.extra.chip_mod j_ice_cream config.extra.chip_mod | 5 | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.unlockCondition j_ice_cream unlockCondition | null | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.enhancementGate j_ice_cream enhancementGate | null | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.requiredPoolFlag j_ice_cream requiredPoolFlag | null | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.excludedPoolFlag j_ice_cream excludedPoolFlag | null | references/source/game.lua:420 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.poolWeight j_ice_cream poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ice_cream.rule.0 j_ice_cream 触发规则 0 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"chips","value":"$state.extra.chips"}],"copyable":true} | references/source/card.lua:3915; references/source/game.lua:420 | 高：固定参考版本源码；独立声明式规格
joker.j_ice_cream.rule.1 j_ice_cream 触发规则 1 | {"trigger":"after","condition":true,"actions":[{"op":"decay","target":"state.extra.chips","amount":"$state.extra.chip_mod","threshold":0}],"copyable":false} | references/source/card.lua:3571; references/source/game.lua:420 | 高：固定参考版本源码；独立声明式规格
joker.j_ice_cream.baseSellValue j_ice_cream 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:420 | 高：基础价格无版次/折扣时推导
joker.j_dna.order j_dna order | 51 | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.cost j_dna cost | 8 | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.rarity j_dna rarity | 3 | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.blueprint_compat j_dna blueprint_compat | true | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.perishable_compat j_dna perishable_compat | true | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.eternal_compat j_dna eternal_compat | true | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.unlocked j_dna unlocked | true | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.unlockCondition j_dna unlockCondition | null | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.enhancementGate j_dna enhancementGate | null | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.requiredPoolFlag j_dna requiredPoolFlag | null | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.excludedPoolFlag j_dna excludedPoolFlag | null | references/source/game.lua:421 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.poolWeight j_dna poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_dna.rule.0 j_dna 触发规则 0 | {"trigger":"before","condition":["and",["eq","$ctx.round.handsPlayed",0],["eq","$ctx.fullHand.length",1]],"actions":[{"op":"duplicate","who":"firstPlayed","destination":"hand"}],"copyable":true} | references/source/card.lua:3501; references/source/game.lua:421 | 高：固定参考版本源码；独立声明式规格
joker.j_dna.baseSellValue j_dna 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:421 | 高：基础价格无版次/折扣时推导
joker.j_splash.order j_splash order | 52 | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.cost j_splash cost | 3 | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.rarity j_splash rarity | 1 | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.blueprint_compat j_splash blueprint_compat | false | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.perishable_compat j_splash perishable_compat | true | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.eternal_compat j_splash eternal_compat | true | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.unlocked j_splash unlocked | true | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.unlockCondition j_splash unlockCondition | null | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.enhancementGate j_splash enhancementGate | null | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.requiredPoolFlag j_splash requiredPoolFlag | null | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.excludedPoolFlag j_splash excludedPoolFlag | null | references/source/game.lua:422 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.poolWeight j_splash poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_splash.rule.0 j_splash 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":1,"target":"scoreAllCards"}],"copyable":false} | references/source/functions/state_events.lua:583; references/source/game.lua:422 | 高：固定参考版本源码；独立声明式规格
joker.j_splash.baseSellValue j_splash 基础卖价 | 1 | references/source/card.lua:382; references/source/game.lua:422 | 高：基础价格无版次/折扣时推导
joker.j_blue_joker.order j_blue_joker order | 53 | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.cost j_blue_joker cost | 5 | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.rarity j_blue_joker rarity | 1 | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.blueprint_compat j_blue_joker blueprint_compat | true | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.perishable_compat j_blue_joker perishable_compat | true | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.eternal_compat j_blue_joker eternal_compat | true | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.unlocked j_blue_joker unlocked | true | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.config.extra j_blue_joker config.extra | 2 | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.unlockCondition j_blue_joker unlockCondition | null | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.enhancementGate j_blue_joker enhancementGate | null | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.requiredPoolFlag j_blue_joker requiredPoolFlag | null | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.excludedPoolFlag j_blue_joker excludedPoolFlag | null | references/source/game.lua:423 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.poolWeight j_blue_joker poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blue_joker.rule.0 j_blue_joker 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.run.deckRemaining",0],"actions":[{"op":"emit","kind":"chips","value":["mul","$state.extra","$ctx.run.deckRemaining"]}],"copyable":true} | references/source/card.lua:3887; references/source/game.lua:423 | 高：固定参考版本源码；独立声明式规格
joker.j_blue_joker.baseSellValue j_blue_joker 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:423 | 高：基础价格无版次/折扣时推导
joker.j_sixth_sense.order j_sixth_sense order | 54 | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.cost j_sixth_sense cost | 6 | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.rarity j_sixth_sense rarity | 2 | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.blueprint_compat j_sixth_sense blueprint_compat | false | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.perishable_compat j_sixth_sense perishable_compat | true | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.eternal_compat j_sixth_sense eternal_compat | true | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.unlocked j_sixth_sense unlocked | true | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.unlockCondition j_sixth_sense unlockCondition | null | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.enhancementGate j_sixth_sense enhancementGate | null | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.requiredPoolFlag j_sixth_sense requiredPoolFlag | null | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.excludedPoolFlag j_sixth_sense excludedPoolFlag | null | references/source/game.lua:424 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.poolWeight j_sixth_sense poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sixth_sense.rule.0 j_sixth_sense 触发规则 0 | {"trigger":"destroyingCard","condition":["and",["eq","$ctx.round.handsPlayed",0],["eq","$ctx.fullHand.length",1],["rankIn",[6]]],"actions":[{"op":"remove","who":"card"},{"op":"spawn","set":"spectral","count":1,"requireRoom":true}],"copyable":false} | references/source/card.lua:2604; references/source/game.lua:424 | 高：固定参考版本源码；独立声明式规格
joker.j_sixth_sense.baseSellValue j_sixth_sense 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:424 | 高：基础价格无版次/折扣时推导
joker.j_constellation.order j_constellation order | 55 | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.cost j_constellation cost | 6 | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.rarity j_constellation rarity | 2 | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.blueprint_compat j_constellation blueprint_compat | true | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.perishable_compat j_constellation perishable_compat | false | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.eternal_compat j_constellation eternal_compat | true | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.unlocked j_constellation unlocked | true | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.config.extra j_constellation config.extra | 0.1 | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.config.Xmult j_constellation config.Xmult | 1 | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.unlockCondition j_constellation unlockCondition | null | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.enhancementGate j_constellation enhancementGate | null | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.requiredPoolFlag j_constellation requiredPoolFlag | null | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.excludedPoolFlag j_constellation excludedPoolFlag | null | references/source/game.lua:425 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.poolWeight j_constellation poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_constellation.rule.0 j_constellation 触发规则 0 | {"trigger":"consume","condition":["eq","$ctx.consumable.set","planet"],"actions":[{"op":"add","target":"state.xmult","value":"$state.extra"}],"copyable":false} | references/source/card.lua:2727; references/source/game.lua:425 | 高：固定参考版本源码；独立声明式规格
joker.j_constellation.rule.1 j_constellation 触发规则 1 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:425 | 高：固定参考版本源码；独立声明式规格
joker.j_constellation.baseSellValue j_constellation 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:425 | 高：基础价格无版次/折扣时推导
joker.j_hiker.order j_hiker order | 56 | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.cost j_hiker cost | 5 | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.rarity j_hiker rarity | 2 | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.blueprint_compat j_hiker blueprint_compat | true | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.perishable_compat j_hiker perishable_compat | true | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.eternal_compat j_hiker eternal_compat | true | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.unlocked j_hiker unlocked | true | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.config.extra j_hiker config.extra | 5 | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.unlockCondition j_hiker unlockCondition | null | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.enhancementGate j_hiker enhancementGate | null | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.requiredPoolFlag j_hiker requiredPoolFlag | null | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.excludedPoolFlag j_hiker excludedPoolFlag | null | references/source/game.lua:426 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.poolWeight j_hiker poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hiker.rule.0 j_hiker 触发规则 0 | {"trigger":"card","condition":true,"actions":[{"op":"cardAdd","field":"permanentChips","amount":"$state.extra"}],"copyable":true} | references/source/card.lua:3067; references/source/game.lua:426 | 高：固定参考版本源码；独立声明式规格
joker.j_hiker.baseSellValue j_hiker 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:426 | 高：基础价格无版次/折扣时推导
joker.j_faceless.order j_faceless order | 57 | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.cost j_faceless cost | 4 | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.rarity j_faceless rarity | 1 | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.blueprint_compat j_faceless blueprint_compat | true | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.perishable_compat j_faceless perishable_compat | true | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.eternal_compat j_faceless eternal_compat | true | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.unlocked j_faceless unlocked | true | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.config.extra.dollars j_faceless config.extra.dollars | 5 | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.config.extra.faces j_faceless config.extra.faces | 3 | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.unlockCondition j_faceless unlockCondition | null | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.enhancementGate j_faceless enhancementGate | null | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.requiredPoolFlag j_faceless requiredPoolFlag | null | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.excludedPoolFlag j_faceless excludedPoolFlag | null | references/source/game.lua:427 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.poolWeight j_faceless poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_faceless.rule.0 j_faceless 触发规则 0 | {"trigger":"discard","condition":["and","$ctx.isLastDiscard",["gte","$ctx.discardFaceCount","$state.extra.faces"]],"actions":[{"op":"emit","kind":"money","value":"$state.extra.dollars"}],"copyable":true} | references/source/card.lua:2858; references/source/game.lua:427 | 高：固定参考版本源码；独立声明式规格
joker.j_faceless.baseSellValue j_faceless 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:427 | 高：基础价格无版次/折扣时推导
joker.j_green_joker.order j_green_joker order | 58 | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.cost j_green_joker cost | 4 | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.rarity j_green_joker rarity | 1 | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.blueprint_compat j_green_joker blueprint_compat | true | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.perishable_compat j_green_joker perishable_compat | false | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.eternal_compat j_green_joker eternal_compat | true | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.unlocked j_green_joker unlocked | true | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.config.extra.hand_add j_green_joker config.extra.hand_add | 1 | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.config.extra.discard_sub j_green_joker config.extra.discard_sub | 1 | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.unlockCondition j_green_joker unlockCondition | null | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.enhancementGate j_green_joker enhancementGate | null | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.requiredPoolFlag j_green_joker requiredPoolFlag | null | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.excludedPoolFlag j_green_joker excludedPoolFlag | null | references/source/game.lua:428 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.poolWeight j_green_joker poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_green_joker.rule.0 j_green_joker 触发规则 0 | {"trigger":"before","condition":true,"actions":[{"op":"add","target":"state.mult","value":"$state.extra.hand_add"}],"copyable":false} | references/source/card.lua:3563; references/source/game.lua:428 | 高：固定参考版本源码；独立声明式规格
joker.j_green_joker.rule.1 j_green_joker 触发规则 1 | {"trigger":"discard","condition":"$ctx.isLastDiscard","actions":[{"op":"set","target":"state.mult","value":["max",0,["sub","$state.mult","$state.extra.discard_sub"]]}],"copyable":false} | references/source/card.lua:2846; references/source/game.lua:428 | 高：固定参考版本源码；独立声明式规格
joker.j_green_joker.rule.2 j_green_joker 触发规则 2 | {"trigger":"joker","condition":["gt","$state.mult",0],"actions":[{"op":"emit","kind":"mult","value":"$state.mult"}],"copyable":true} | references/source/card.lua:4010; references/source/game.lua:428 | 高：固定参考版本源码；独立声明式规格
joker.j_green_joker.baseSellValue j_green_joker 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:428 | 高：基础价格无版次/折扣时推导
joker.j_superposition.order j_superposition order | 59 | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.cost j_superposition cost | 4 | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.rarity j_superposition rarity | 1 | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.blueprint_compat j_superposition blueprint_compat | true | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.perishable_compat j_superposition perishable_compat | true | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.eternal_compat j_superposition eternal_compat | true | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.unlocked j_superposition unlocked | true | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.unlockCondition j_superposition unlockCondition | null | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.enhancementGate j_superposition enhancementGate | null | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.requiredPoolFlag j_superposition requiredPoolFlag | null | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.excludedPoolFlag j_superposition excludedPoolFlag | null | references/source/game.lua:429 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.poolWeight j_superposition poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_superposition.rule.0 j_superposition 触发规则 0 | {"trigger":"joker","condition":["and","$ctx.scoringHasAce",["handContains","straight"],"$ctx.hasConsumableRoom"],"actions":[{"op":"spawn","set":"tarot","count":1}],"copyable":true} | references/source/card.lua:3762; references/source/game.lua:429 | 高：固定参考版本源码；独立声明式规格
joker.j_superposition.baseSellValue j_superposition 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:429 | 高：基础价格无版次/折扣时推导
joker.j_todo_list.order j_todo_list order | 60 | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.cost j_todo_list cost | 4 | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.rarity j_todo_list rarity | 1 | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.blueprint_compat j_todo_list blueprint_compat | true | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.perishable_compat j_todo_list perishable_compat | true | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.eternal_compat j_todo_list eternal_compat | true | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.unlocked j_todo_list unlocked | true | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.config.extra.dollars j_todo_list config.extra.dollars | 4 | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.config.extra.poker_hand j_todo_list config.extra.poker_hand | highCard | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.unlockCondition j_todo_list unlockCondition | null | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.enhancementGate j_todo_list enhancementGate | null | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.requiredPoolFlag j_todo_list requiredPoolFlag | null | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.excludedPoolFlag j_todo_list excludedPoolFlag | null | references/source/game.lua:430 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.poolWeight j_todo_list poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_todo_list.rule.0 j_todo_list 触发规则 0 | {"trigger":"init","condition":true,"actions":[{"op":"randomHandTarget","excludeCurrent":false}],"copyable":false} | references/source/card.lua:311; references/source/game.lua:430 | 高：固定参考版本源码；独立声明式规格
joker.j_todo_list.rule.1 j_todo_list 触发规则 1 | {"trigger":"before","condition":["eq","$ctx.handType","$state.targetHand"],"actions":[{"op":"emit","kind":"money","value":"$state.extra.dollars"}],"copyable":true} | references/source/card.lua:3491; references/source/game.lua:430 | 高：固定参考版本源码；独立声明式规格
joker.j_todo_list.rule.2 j_todo_list 触发规则 2 | {"trigger":"roundEnd","condition":true,"actions":[{"op":"randomHandTarget","excludeCurrent":true}],"copyable":false} | references/source/card.lua:2975; references/source/game.lua:430 | 高：固定参考版本源码；独立声明式规格
joker.j_todo_list.baseSellValue j_todo_list 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:430 | 高：基础价格无版次/折扣时推导
joker.j_cavendish.order j_cavendish order | 61 | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.cost j_cavendish cost | 4 | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.rarity j_cavendish rarity | 1 | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.blueprint_compat j_cavendish blueprint_compat | true | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.perishable_compat j_cavendish perishable_compat | true | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.eternal_compat j_cavendish eternal_compat | false | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.unlocked j_cavendish unlocked | true | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.config.extra.odds j_cavendish config.extra.odds | 1000 | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.config.extra.Xmult j_cavendish config.extra.Xmult | 3 | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.unlockCondition j_cavendish unlockCondition | null | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.enhancementGate j_cavendish enhancementGate | null | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.requiredPoolFlag j_cavendish requiredPoolFlag | gros_michel_extinct | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.excludedPoolFlag j_cavendish excludedPoolFlag | null | references/source/game.lua:432 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.poolWeight j_cavendish poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cavendish.rule.0 j_cavendish 触发规则 0 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"xmult","value":"$state.extra.Xmult"}],"copyable":true} | references/source/card.lua:4028; references/source/game.lua:432 | 高：固定参考版本源码；独立声明式规格
joker.j_cavendish.rule.1 j_cavendish 触发规则 1 | {"trigger":"roundEnd","condition":["chance","$state.extra.odds","cavendish"],"actions":[{"op":"remove","who":"self"}],"copyable":false} | references/source/card.lua:3019; references/source/game.lua:432 | 高：固定参考版本源码；独立声明式规格
joker.j_cavendish.baseSellValue j_cavendish 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:432 | 高：基础价格无版次/折扣时推导
joker.j_card_sharp.order j_card_sharp order | 62 | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.cost j_card_sharp cost | 6 | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.rarity j_card_sharp rarity | 2 | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.blueprint_compat j_card_sharp blueprint_compat | true | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.perishable_compat j_card_sharp perishable_compat | true | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.eternal_compat j_card_sharp eternal_compat | true | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.unlocked j_card_sharp unlocked | true | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.config.extra.Xmult j_card_sharp config.extra.Xmult | 3 | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.unlockCondition j_card_sharp unlockCondition | null | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.enhancementGate j_card_sharp enhancementGate | null | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.requiredPoolFlag j_card_sharp requiredPoolFlag | null | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.excludedPoolFlag j_card_sharp excludedPoolFlag | null | references/source/game.lua:433 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.poolWeight j_card_sharp poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_card_sharp.rule.0 j_card_sharp 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.currentHandUsesThisRound",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.extra.Xmult"}],"copyable":true} | references/source/card.lua:4040; references/source/game.lua:433 | 高：固定参考版本源码；独立声明式规格
joker.j_card_sharp.baseSellValue j_card_sharp 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:433 | 高：基础价格无版次/折扣时推导
joker.j_red_card.order j_red_card order | 63 | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.cost j_red_card cost | 5 | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.rarity j_red_card rarity | 1 | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.blueprint_compat j_red_card blueprint_compat | true | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.perishable_compat j_red_card perishable_compat | false | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.eternal_compat j_red_card eternal_compat | true | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.unlocked j_red_card unlocked | true | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.config.extra j_red_card config.extra | 3 | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.unlockCondition j_red_card unlockCondition | null | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.enhancementGate j_red_card enhancementGate | null | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.requiredPoolFlag j_red_card requiredPoolFlag | null | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.excludedPoolFlag j_red_card excludedPoolFlag | null | references/source/game.lua:434 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.poolWeight j_red_card poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_red_card.rule.0 j_red_card 触发规则 0 | {"trigger":"skipBooster","condition":true,"actions":[{"op":"add","target":"state.mult","value":"$state.extra"}],"copyable":false} | references/source/card.lua:2442; references/source/game.lua:434 | 高：固定参考版本源码；独立声明式规格
joker.j_red_card.rule.1 j_red_card 触发规则 1 | {"trigger":"joker","condition":["gt","$state.mult",0],"actions":[{"op":"emit","kind":"mult","value":"$state.mult"}],"copyable":true} | references/source/card.lua:4034; references/source/game.lua:434 | 高：固定参考版本源码；独立声明式规格
joker.j_red_card.baseSellValue j_red_card 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:434 | 高：基础价格无版次/折扣时推导
joker.j_madness.order j_madness order | 64 | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.cost j_madness cost | 7 | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.rarity j_madness rarity | 2 | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.blueprint_compat j_madness blueprint_compat | true | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.perishable_compat j_madness perishable_compat | false | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.eternal_compat j_madness eternal_compat | true | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.unlocked j_madness unlocked | true | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.config.extra j_madness config.extra | 0.5 | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.unlockCondition j_madness unlockCondition | null | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.enhancementGate j_madness enhancementGate | null | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.requiredPoolFlag j_madness requiredPoolFlag | null | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.excludedPoolFlag j_madness excludedPoolFlag | null | references/source/game.lua:435 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.poolWeight j_madness poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_madness.rule.0 j_madness 触发规则 0 | {"trigger":"blindSet","condition":["not","$ctx.blind.boss"],"actions":[{"op":"add","target":"state.xmult","value":"$state.extra"},{"op":"remove","who":"randomJoker","key":"madness"}],"copyable":false} | references/source/card.lua:2503; references/source/game.lua:435 | 高：固定参考版本源码；独立声明式规格
joker.j_madness.rule.1 j_madness 触发规则 1 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:435 | 高：固定参考版本源码；独立声明式规格
joker.j_madness.baseSellValue j_madness 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:435 | 高：基础价格无版次/折扣时推导
joker.j_square.order j_square order | 65 | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.cost j_square cost | 4 | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.rarity j_square rarity | 1 | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.blueprint_compat j_square blueprint_compat | true | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.perishable_compat j_square perishable_compat | false | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.eternal_compat j_square eternal_compat | true | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.unlocked j_square unlocked | true | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.config.extra.chips j_square config.extra.chips | 0 | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.config.extra.chip_mod j_square config.extra.chip_mod | 4 | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.unlockCondition j_square unlockCondition | null | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.enhancementGate j_square enhancementGate | null | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.requiredPoolFlag j_square requiredPoolFlag | null | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.excludedPoolFlag j_square excludedPoolFlag | null | references/source/game.lua:436 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.poolWeight j_square poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_square.rule.0 j_square 触发规则 0 | {"trigger":"before","condition":["eq","$ctx.fullHand.length",4],"actions":[{"op":"add","target":"state.extra.chips","value":"$state.extra.chip_mod"}],"copyable":false} | references/source/card.lua:3427; references/source/game.lua:436 | 高：固定参考版本源码；独立声明式规格
joker.j_square.rule.1 j_square 触发规则 1 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"chips","value":"$state.extra.chips"}],"copyable":true} | references/source/card.lua:3901; references/source/game.lua:436 | 高：固定参考版本源码；独立声明式规格
joker.j_square.baseSellValue j_square 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:436 | 高：基础价格无版次/折扣时推导
joker.j_seance.order j_seance order | 66 | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.cost j_seance cost | 6 | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.rarity j_seance rarity | 2 | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.blueprint_compat j_seance blueprint_compat | true | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.perishable_compat j_seance perishable_compat | true | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.eternal_compat j_seance eternal_compat | true | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.unlocked j_seance unlocked | true | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.config.extra.poker_hand j_seance config.extra.poker_hand | straightFlush | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.unlockCondition j_seance unlockCondition | null | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.enhancementGate j_seance enhancementGate | null | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.requiredPoolFlag j_seance requiredPoolFlag | null | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.excludedPoolFlag j_seance excludedPoolFlag | null | references/source/game.lua:437 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.poolWeight j_seance poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seance.rule.0 j_seance 触发规则 0 | {"trigger":"joker","condition":["and",["handContains","straightFlush"],"$ctx.hasConsumableRoom"],"actions":[{"op":"spawn","set":"spectral","count":1}],"copyable":true} | references/source/card.lua:3787; references/source/game.lua:437 | 高：固定参考版本源码；独立声明式规格
joker.j_seance.baseSellValue j_seance 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:437 | 高：基础价格无版次/折扣时推导
joker.j_riff_raff.order j_riff_raff order | 67 | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.cost j_riff_raff cost | 6 | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.rarity j_riff_raff rarity | 1 | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.blueprint_compat j_riff_raff blueprint_compat | true | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.perishable_compat j_riff_raff perishable_compat | true | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.eternal_compat j_riff_raff eternal_compat | true | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.unlocked j_riff_raff unlocked | true | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.config.extra j_riff_raff config.extra | 2 | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.unlockCondition j_riff_raff unlockCondition | null | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.enhancementGate j_riff_raff enhancementGate | null | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.requiredPoolFlag j_riff_raff requiredPoolFlag | null | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.excludedPoolFlag j_riff_raff excludedPoolFlag | null | references/source/game.lua:438 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.poolWeight j_riff_raff poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_riff_raff.rule.0 j_riff_raff 触发规则 0 | {"trigger":"blindSet","condition":["gt","$ctx.emptyJokerSlots",0],"actions":[{"op":"spawn","set":"joker","count":["min","$state.extra","$ctx.emptyJokerSlots"],"rarity":1}],"copyable":true} | references/source/card.lua:2529; references/source/game.lua:438 | 高：固定参考版本源码；独立声明式规格
joker.j_riff_raff.baseSellValue j_riff_raff 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:438 | 高：基础价格无版次/折扣时推导
joker.j_vampire.order j_vampire order | 68 | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.cost j_vampire cost | 7 | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.rarity j_vampire rarity | 2 | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.blueprint_compat j_vampire blueprint_compat | true | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.perishable_compat j_vampire perishable_compat | false | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.eternal_compat j_vampire eternal_compat | true | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.unlocked j_vampire unlocked | true | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.config.extra j_vampire config.extra | 0.1 | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.config.Xmult j_vampire config.Xmult | 1 | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.unlockCondition j_vampire unlockCondition | null | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.enhancementGate j_vampire enhancementGate | null | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.requiredPoolFlag j_vampire requiredPoolFlag | null | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.excludedPoolFlag j_vampire excludedPoolFlag | null | references/source/game.lua:439 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.poolWeight j_vampire poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vampire.rule.0 j_vampire 触发规则 0 | {"trigger":"before","condition":true,"actions":[{"op":"consumeEnhancements","amount":"$state.extra"}],"copyable":false} | references/source/card.lua:3465; references/source/game.lua:439 | 高：固定参考版本源码；独立声明式规格
joker.j_vampire.rule.1 j_vampire 触发规则 1 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:439 | 高：固定参考版本源码；独立声明式规格
joker.j_vampire.baseSellValue j_vampire 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:439 | 高：基础价格无版次/折扣时推导
joker.j_shortcut.order j_shortcut order | 69 | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.cost j_shortcut cost | 7 | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.rarity j_shortcut rarity | 2 | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.blueprint_compat j_shortcut blueprint_compat | false | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.perishable_compat j_shortcut perishable_compat | true | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.eternal_compat j_shortcut eternal_compat | true | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.unlocked j_shortcut unlocked | true | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.unlockCondition j_shortcut unlockCondition | null | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.enhancementGate j_shortcut enhancementGate | null | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.requiredPoolFlag j_shortcut requiredPoolFlag | null | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.excludedPoolFlag j_shortcut excludedPoolFlag | null | references/source/game.lua:440 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.poolWeight j_shortcut poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shortcut.rule.0 j_shortcut 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":2,"target":"straightMaxGap"}],"copyable":false} | references/source/functions/misc_functions.lua:567; references/source/game.lua:440 | 高：固定参考版本源码；独立声明式规格
joker.j_shortcut.baseSellValue j_shortcut 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:440 | 高：基础价格无版次/折扣时推导
joker.j_hologram.order j_hologram order | 70 | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.cost j_hologram cost | 7 | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.rarity j_hologram rarity | 2 | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.blueprint_compat j_hologram blueprint_compat | true | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.perishable_compat j_hologram perishable_compat | false | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.eternal_compat j_hologram eternal_compat | true | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.unlocked j_hologram unlocked | true | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.config.extra j_hologram config.extra | 0.25 | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.config.Xmult j_hologram config.Xmult | 1 | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.unlockCondition j_hologram unlockCondition | null | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.enhancementGate j_hologram enhancementGate | null | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.requiredPoolFlag j_hologram requiredPoolFlag | null | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.excludedPoolFlag j_hologram excludedPoolFlag | null | references/source/game.lua:441 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.poolWeight j_hologram poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hologram.rule.0 j_hologram 触发规则 0 | {"trigger":"playingCardsAdded","condition":["gt","$ctx.cards.length",0],"actions":[{"op":"add","target":"state.xmult","value":["mul","$state.extra","$ctx.cards.length"]}],"copyable":false} | references/source/card.lua:2457; references/source/game.lua:441 | 高：固定参考版本源码；独立声明式规格
joker.j_hologram.rule.1 j_hologram 触发规则 1 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:441 | 高：固定参考版本源码；独立声明式规格
joker.j_hologram.baseSellValue j_hologram 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:441 | 高：基础价格无版次/折扣时推导
joker.j_vagabond.order j_vagabond order | 71 | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.cost j_vagabond cost | 8 | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.rarity j_vagabond rarity | 3 | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.blueprint_compat j_vagabond blueprint_compat | true | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.perishable_compat j_vagabond perishable_compat | true | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.eternal_compat j_vagabond eternal_compat | true | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.unlocked j_vagabond unlocked | true | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.config.extra j_vagabond config.extra | 4 | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.unlockCondition j_vagabond unlockCondition | null | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.enhancementGate j_vagabond enhancementGate | null | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.requiredPoolFlag j_vagabond requiredPoolFlag | null | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.excludedPoolFlag j_vagabond excludedPoolFlag | null | references/source/game.lua:442 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.poolWeight j_vagabond poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_vagabond.rule.0 j_vagabond 触发规则 0 | {"trigger":"joker","condition":["and",["lte","$ctx.run.money","$state.extra"],"$ctx.hasConsumableRoom"],"actions":[{"op":"spawn","set":"tarot","count":1}],"copyable":true} | references/source/card.lua:3743; references/source/game.lua:442 | 高：固定参考版本源码；独立声明式规格
joker.j_vagabond.baseSellValue j_vagabond 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:442 | 高：基础价格无版次/折扣时推导
joker.j_baron.order j_baron order | 72 | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.cost j_baron cost | 8 | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.rarity j_baron rarity | 3 | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.blueprint_compat j_baron blueprint_compat | true | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.perishable_compat j_baron perishable_compat | true | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.eternal_compat j_baron eternal_compat | true | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.unlocked j_baron unlocked | true | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.config.extra j_baron config.extra | 1.5 | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.unlockCondition j_baron unlockCondition | null | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.enhancementGate j_baron enhancementGate | null | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.requiredPoolFlag j_baron requiredPoolFlag | null | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.excludedPoolFlag j_baron excludedPoolFlag | null | references/source/game.lua:443 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.poolWeight j_baron poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baron.rule.0 j_baron 触发规则 0 | {"trigger":"held","condition":["rankIn",[13]],"actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3287; references/source/game.lua:443 | 高：固定参考版本源码；独立声明式规格
joker.j_baron.baseSellValue j_baron 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:443 | 高：基础价格无版次/折扣时推导
joker.j_cloud_9.order j_cloud_9 order | 73 | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.cost j_cloud_9 cost | 7 | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.rarity j_cloud_9 rarity | 2 | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.blueprint_compat j_cloud_9 blueprint_compat | false | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.perishable_compat j_cloud_9 perishable_compat | true | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.eternal_compat j_cloud_9 eternal_compat | true | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.unlocked j_cloud_9 unlocked | true | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.config.extra j_cloud_9 config.extra | 1 | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.unlockCondition j_cloud_9 unlockCondition | null | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.enhancementGate j_cloud_9 enhancementGate | null | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.requiredPoolFlag j_cloud_9 requiredPoolFlag | null | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.excludedPoolFlag j_cloud_9 excludedPoolFlag | null | references/source/game.lua:444 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.poolWeight j_cloud_9 poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cloud_9.rule.0 j_cloud_9 触发规则 0 | {"trigger":"payout","condition":["gt","$ctx.deckNineCount",0],"actions":[{"op":"emit","kind":"money","value":["mul","$state.extra","$ctx.deckNineCount"]}],"copyable":false} | references/source/card.lua:1661; references/source/game.lua:444 | 高：固定参考版本源码；独立声明式规格
joker.j_cloud_9.baseSellValue j_cloud_9 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:444 | 高：基础价格无版次/折扣时推导
joker.j_rocket.order j_rocket order | 74 | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.cost j_rocket cost | 6 | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.rarity j_rocket rarity | 2 | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.blueprint_compat j_rocket blueprint_compat | false | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.perishable_compat j_rocket perishable_compat | false | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.eternal_compat j_rocket eternal_compat | true | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.unlocked j_rocket unlocked | true | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.config.extra.dollars j_rocket config.extra.dollars | 1 | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.config.extra.increase j_rocket config.extra.increase | 2 | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.unlockCondition j_rocket unlockCondition | null | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.enhancementGate j_rocket enhancementGate | null | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.requiredPoolFlag j_rocket requiredPoolFlag | null | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.excludedPoolFlag j_rocket excludedPoolFlag | null | references/source/game.lua:445 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.poolWeight j_rocket poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rocket.rule.0 j_rocket 触发规则 0 | {"trigger":"roundEnd","condition":"$ctx.blind.boss","actions":[{"op":"add","target":"state.extra.dollars","value":"$state.extra.increase"}],"copyable":false} | references/source/card.lua:2896; references/source/game.lua:445 | 高：固定参考版本源码；独立声明式规格
joker.j_rocket.rule.1 j_rocket 触发规则 1 | {"trigger":"payout","condition":true,"actions":[{"op":"emit","kind":"money","value":"$state.extra.dollars"}],"copyable":false} | references/source/card.lua:1664; references/source/game.lua:445 | 高：固定参考版本源码；独立声明式规格
joker.j_rocket.baseSellValue j_rocket 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:445 | 高：基础价格无版次/折扣时推导
joker.j_obelisk.order j_obelisk order | 75 | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.cost j_obelisk cost | 8 | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.rarity j_obelisk rarity | 3 | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.blueprint_compat j_obelisk blueprint_compat | true | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.perishable_compat j_obelisk perishable_compat | false | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.eternal_compat j_obelisk eternal_compat | true | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.unlocked j_obelisk unlocked | true | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.config.extra j_obelisk config.extra | 0.2 | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.config.Xmult j_obelisk config.Xmult | 1 | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.unlockCondition j_obelisk unlockCondition | null | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.enhancementGate j_obelisk enhancementGate | null | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.requiredPoolFlag j_obelisk requiredPoolFlag | null | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.excludedPoolFlag j_obelisk excludedPoolFlag | null | references/source/game.lua:446 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.poolWeight j_obelisk poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_obelisk.rule.0 j_obelisk 触发规则 0 | {"trigger":"before","condition":"$ctx.isUniqueMostPlayed","actions":[{"op":"set","target":"state.xmult","value":1}],"copyable":false} | references/source/card.lua:3543; references/source/game.lua:446 | 高：固定参考版本源码；独立声明式规格
joker.j_obelisk.rule.1 j_obelisk 触发规则 1 | {"trigger":"before","condition":["not","$ctx.isUniqueMostPlayed"],"actions":[{"op":"add","target":"state.xmult","value":"$state.extra"}],"copyable":false} | references/source/card.lua:3543; references/source/game.lua:446 | 高：固定参考版本源码；独立声明式规格
joker.j_obelisk.rule.2 j_obelisk 触发规则 2 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:446 | 高：固定参考版本源码；独立声明式规格
joker.j_obelisk.baseSellValue j_obelisk 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:446 | 高：基础价格无版次/折扣时推导
joker.j_midas_mask.order j_midas_mask order | 76 | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.cost j_midas_mask cost | 7 | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.rarity j_midas_mask rarity | 2 | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.blueprint_compat j_midas_mask blueprint_compat | false | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.perishable_compat j_midas_mask perishable_compat | true | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.eternal_compat j_midas_mask eternal_compat | true | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.unlocked j_midas_mask unlocked | true | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.unlockCondition j_midas_mask unlockCondition | null | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.enhancementGate j_midas_mask enhancementGate | null | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.requiredPoolFlag j_midas_mask requiredPoolFlag | null | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.excludedPoolFlag j_midas_mask excludedPoolFlag | null | references/source/game.lua:448 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.poolWeight j_midas_mask poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_midas_mask.rule.0 j_midas_mask 触发规则 0 | {"trigger":"before","condition":true,"actions":[{"op":"enhanceFaces","enhancement":"gold"}],"copyable":false} | references/source/card.lua:3443; references/source/game.lua:448 | 高：固定参考版本源码；独立声明式规格
joker.j_midas_mask.baseSellValue j_midas_mask 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:448 | 高：基础价格无版次/折扣时推导
joker.j_luchador.order j_luchador order | 77 | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.cost j_luchador cost | 5 | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.rarity j_luchador rarity | 2 | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.blueprint_compat j_luchador blueprint_compat | true | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.perishable_compat j_luchador perishable_compat | true | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.eternal_compat j_luchador eternal_compat | false | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.unlocked j_luchador unlocked | true | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.unlockCondition j_luchador unlockCondition | null | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.enhancementGate j_luchador enhancementGate | null | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.requiredPoolFlag j_luchador requiredPoolFlag | null | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.excludedPoolFlag j_luchador excludedPoolFlag | null | references/source/game.lua:449 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.poolWeight j_luchador poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_luchador.rule.0 j_luchador 触发规则 0 | {"trigger":"sellSelf","condition":["and","$ctx.blind.boss",["not","$ctx.blind.disabled"]],"actions":[{"op":"emit","kind":"disableBoss","value":1}],"copyable":true} | references/source/card.lua:2355; references/source/game.lua:449 | 高：固定参考版本源码；独立声明式规格
joker.j_luchador.baseSellValue j_luchador 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:449 | 高：基础价格无版次/折扣时推导
joker.j_photograph.order j_photograph order | 78 | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.cost j_photograph cost | 5 | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.rarity j_photograph rarity | 1 | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.blueprint_compat j_photograph blueprint_compat | true | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.perishable_compat j_photograph perishable_compat | true | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.eternal_compat j_photograph eternal_compat | true | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.unlocked j_photograph unlocked | true | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.config.extra j_photograph config.extra | 2 | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.unlockCondition j_photograph unlockCondition | null | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.enhancementGate j_photograph enhancementGate | null | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.requiredPoolFlag j_photograph requiredPoolFlag | null | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.excludedPoolFlag j_photograph excludedPoolFlag | null | references/source/game.lua:450 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.poolWeight j_photograph poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_photograph.rule.0 j_photograph 触发规则 0 | {"trigger":"card","condition":"$ctx.isFirstScoringFace","actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3093; references/source/game.lua:450 | 高：固定参考版本源码；独立声明式规格
joker.j_photograph.baseSellValue j_photograph 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:450 | 高：基础价格无版次/折扣时推导
joker.j_gift.order j_gift order | 79 | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.cost j_gift cost | 6 | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.rarity j_gift rarity | 2 | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.blueprint_compat j_gift blueprint_compat | false | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.perishable_compat j_gift perishable_compat | true | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.eternal_compat j_gift eternal_compat | true | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.unlocked j_gift unlocked | true | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.config.extra j_gift config.extra | 1 | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.unlockCondition j_gift unlockCondition | null | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.enhancementGate j_gift enhancementGate | null | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.requiredPoolFlag j_gift requiredPoolFlag | null | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.excludedPoolFlag j_gift excludedPoolFlag | null | references/source/game.lua:451 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.poolWeight j_gift poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_gift.rule.0 j_gift 触发规则 0 | {"trigger":"roundEnd","condition":true,"actions":[{"op":"sellValueAdd","who":"allInventory","amount":"$state.extra"}],"copyable":false} | references/source/card.lua:2993; references/source/game.lua:451 | 高：固定参考版本源码；独立声明式规格
joker.j_gift.baseSellValue j_gift 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:451 | 高：基础价格无版次/折扣时推导
joker.j_turtle_bean.order j_turtle_bean order | 80 | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.cost j_turtle_bean cost | 6 | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.rarity j_turtle_bean rarity | 2 | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.blueprint_compat j_turtle_bean blueprint_compat | false | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.perishable_compat j_turtle_bean perishable_compat | true | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.eternal_compat j_turtle_bean eternal_compat | false | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.unlocked j_turtle_bean unlocked | true | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.config.extra.h_size j_turtle_bean config.extra.h_size | 5 | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.config.extra.h_mod j_turtle_bean config.extra.h_mod | 1 | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.unlockCondition j_turtle_bean unlockCondition | null | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.enhancementGate j_turtle_bean enhancementGate | null | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.requiredPoolFlag j_turtle_bean requiredPoolFlag | null | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.excludedPoolFlag j_turtle_bean excludedPoolFlag | null | references/source/game.lua:452 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.poolWeight j_turtle_bean poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_turtle_bean.rule.0 j_turtle_bean 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":"$state.extra.h_size","target":"handSize"}],"copyable":false} | references/source/card.lua:605; references/source/game.lua:452 | 高：固定参考版本源码；独立声明式规格
joker.j_turtle_bean.rule.1 j_turtle_bean 触发规则 1 | {"trigger":"roundEnd","condition":true,"actions":[{"op":"decay","target":"state.extra.h_size","amount":"$state.extra.h_mod","threshold":0}],"copyable":false} | references/source/card.lua:2903; references/source/game.lua:452 | 高：固定参考版本源码；独立声明式规格
joker.j_turtle_bean.baseSellValue j_turtle_bean 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:452 | 高：基础价格无版次/折扣时推导
joker.j_erosion.order j_erosion order | 81 | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.cost j_erosion cost | 6 | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.rarity j_erosion rarity | 2 | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.blueprint_compat j_erosion blueprint_compat | true | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.perishable_compat j_erosion perishable_compat | true | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.eternal_compat j_erosion eternal_compat | true | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.unlocked j_erosion unlocked | true | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.config.extra j_erosion config.extra | 4 | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.unlockCondition j_erosion unlockCondition | null | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.enhancementGate j_erosion enhancementGate | null | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.requiredPoolFlag j_erosion requiredPoolFlag | null | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.excludedPoolFlag j_erosion excludedPoolFlag | null | references/source/game.lua:453 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.poolWeight j_erosion poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_erosion.rule.0 j_erosion 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.run.startingDeckSize","$ctx.deckCount"],"actions":[{"op":"emit","kind":"mult","value":["mul","$state.extra",["max",0,["sub","$ctx.run.startingDeckSize","$ctx.deckCount"]]]}],"copyable":true} | references/source/card.lua:3894; references/source/game.lua:453 | 高：固定参考版本源码；独立声明式规格
joker.j_erosion.baseSellValue j_erosion 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:453 | 高：基础价格无版次/折扣时推导
joker.j_reserved_parking.order j_reserved_parking order | 82 | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.cost j_reserved_parking cost | 6 | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.rarity j_reserved_parking rarity | 1 | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.blueprint_compat j_reserved_parking blueprint_compat | true | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.perishable_compat j_reserved_parking perishable_compat | true | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.eternal_compat j_reserved_parking eternal_compat | true | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.unlocked j_reserved_parking unlocked | true | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.config.extra.odds j_reserved_parking config.extra.odds | 2 | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.config.extra.dollars j_reserved_parking config.extra.dollars | 1 | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.unlockCondition j_reserved_parking unlockCondition | null | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.enhancementGate j_reserved_parking enhancementGate | null | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.requiredPoolFlag j_reserved_parking requiredPoolFlag | null | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.excludedPoolFlag j_reserved_parking excludedPoolFlag | null | references/source/game.lua:454 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.poolWeight j_reserved_parking poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_reserved_parking.rule.0 j_reserved_parking 触发规则 0 | {"trigger":"held","condition":["and","$ctx.cardIsFace",["chance","$state.extra.odds","parking"]],"actions":[{"op":"emit","kind":"money","value":"$state.extra.dollars"}],"copyable":true} | references/source/card.lua:3302; references/source/game.lua:454 | 高：固定参考版本源码；独立声明式规格
joker.j_reserved_parking.baseSellValue j_reserved_parking 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:454 | 高：基础价格无版次/折扣时推导
joker.j_mail.order j_mail order | 83 | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.cost j_mail cost | 4 | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.rarity j_mail rarity | 1 | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.blueprint_compat j_mail blueprint_compat | true | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.perishable_compat j_mail perishable_compat | true | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.eternal_compat j_mail eternal_compat | true | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.unlocked j_mail unlocked | true | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.config.extra j_mail config.extra | 5 | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.unlockCondition j_mail unlockCondition | null | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.enhancementGate j_mail enhancementGate | null | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.requiredPoolFlag j_mail requiredPoolFlag | null | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.excludedPoolFlag j_mail excludedPoolFlag | null | references/source/game.lua:455 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.poolWeight j_mail poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mail.rule.0 j_mail 触发规则 0 | {"trigger":"discard","condition":["and",["eq","$ctx.cardRank","$ctx.round.mailRank"],["not","$ctx.card.debuffed"]],"actions":[{"op":"emit","kind":"money","value":"$state.extra"}],"copyable":true} | references/source/card.lua:2825; references/source/game.lua:455 | 高：固定参考版本源码；独立声明式规格
joker.j_mail.baseSellValue j_mail 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:455 | 高：基础价格无版次/折扣时推导
joker.j_to_the_moon.order j_to_the_moon order | 84 | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.cost j_to_the_moon cost | 5 | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.rarity j_to_the_moon rarity | 2 | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.blueprint_compat j_to_the_moon blueprint_compat | false | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.perishable_compat j_to_the_moon perishable_compat | true | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.eternal_compat j_to_the_moon eternal_compat | true | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.unlocked j_to_the_moon unlocked | true | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.config.extra j_to_the_moon config.extra | 1 | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.unlockCondition j_to_the_moon unlockCondition | null | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.enhancementGate j_to_the_moon enhancementGate | null | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.requiredPoolFlag j_to_the_moon requiredPoolFlag | null | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.excludedPoolFlag j_to_the_moon excludedPoolFlag | null | references/source/game.lua:456 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.poolWeight j_to_the_moon poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_to_the_moon.rule.0 j_to_the_moon 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":"$state.extra","target":"interestAmount"}],"copyable":false} | references/source/card.lua:613; references/source/game.lua:456 | 高：固定参考版本源码；独立声明式规格
joker.j_to_the_moon.baseSellValue j_to_the_moon 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:456 | 高：基础价格无版次/折扣时推导
joker.j_hallucination.order j_hallucination order | 85 | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.cost j_hallucination cost | 4 | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.rarity j_hallucination rarity | 1 | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.blueprint_compat j_hallucination blueprint_compat | true | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.perishable_compat j_hallucination perishable_compat | true | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.eternal_compat j_hallucination eternal_compat | true | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.unlocked j_hallucination unlocked | true | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.config.extra j_hallucination config.extra | 2 | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.unlockCondition j_hallucination unlockCondition | null | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.enhancementGate j_hallucination enhancementGate | null | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.requiredPoolFlag j_hallucination requiredPoolFlag | null | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.excludedPoolFlag j_hallucination excludedPoolFlag | null | references/source/game.lua:457 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.poolWeight j_hallucination poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hallucination.rule.0 j_hallucination 触发规则 0 | {"trigger":"openBooster","condition":["and","$ctx.hasConsumableRoom",["chance","$state.extra",["concat","halu","$ctx.run.ante"]]],"actions":[{"op":"spawn","set":"tarot","count":1}],"copyable":true} | references/source/card.lua:2336; references/source/game.lua:457 | 高：固定参考版本源码；独立声明式规格
joker.j_hallucination.baseSellValue j_hallucination 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:457 | 高：基础价格无版次/折扣时推导
joker.j_fortune_teller.order j_fortune_teller order | 86 | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.cost j_fortune_teller cost | 6 | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.rarity j_fortune_teller rarity | 1 | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.blueprint_compat j_fortune_teller blueprint_compat | true | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.perishable_compat j_fortune_teller perishable_compat | true | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.eternal_compat j_fortune_teller eternal_compat | true | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.unlocked j_fortune_teller unlocked | true | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.config.extra j_fortune_teller config.extra | 1 | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.unlockCondition j_fortune_teller unlockCondition | null | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.enhancementGate j_fortune_teller enhancementGate | null | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.requiredPoolFlag j_fortune_teller requiredPoolFlag | null | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.excludedPoolFlag j_fortune_teller excludedPoolFlag | null | references/source/game.lua:458 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.poolWeight j_fortune_teller poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_fortune_teller.rule.0 j_fortune_teller 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.run.tarotUsed",0],"actions":[{"op":"emit","kind":"mult","value":["mul","$state.extra","$ctx.run.tarotUsed"]}],"copyable":true} | references/source/card.lua:4016; references/source/game.lua:458 | 高：固定参考版本源码；独立声明式规格
joker.j_fortune_teller.baseSellValue j_fortune_teller 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:458 | 高：基础价格无版次/折扣时推导
joker.j_juggler.order j_juggler order | 87 | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.cost j_juggler cost | 4 | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.rarity j_juggler rarity | 1 | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.blueprint_compat j_juggler blueprint_compat | false | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.perishable_compat j_juggler perishable_compat | true | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.eternal_compat j_juggler eternal_compat | true | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.unlocked j_juggler unlocked | true | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.config.h_size j_juggler config.h_size | 1 | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.unlockCondition j_juggler unlockCondition | null | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.enhancementGate j_juggler enhancementGate | null | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.requiredPoolFlag j_juggler requiredPoolFlag | null | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.excludedPoolFlag j_juggler excludedPoolFlag | null | references/source/game.lua:459 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.poolWeight j_juggler poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_juggler.rule.0 j_juggler 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":"$state.h_size","target":"handSize"}],"copyable":false} | references/source/card.lua:589; references/source/game.lua:459 | 高：固定参考版本源码；独立声明式规格
joker.j_juggler.baseSellValue j_juggler 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:459 | 高：基础价格无版次/折扣时推导
joker.j_drunkard.order j_drunkard order | 88 | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.cost j_drunkard cost | 4 | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.rarity j_drunkard rarity | 1 | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.blueprint_compat j_drunkard blueprint_compat | false | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.perishable_compat j_drunkard perishable_compat | true | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.eternal_compat j_drunkard eternal_compat | true | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.unlocked j_drunkard unlocked | true | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.config.d_size j_drunkard config.d_size | 1 | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.unlockCondition j_drunkard unlockCondition | null | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.enhancementGate j_drunkard enhancementGate | null | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.requiredPoolFlag j_drunkard requiredPoolFlag | null | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.excludedPoolFlag j_drunkard excludedPoolFlag | null | references/source/game.lua:460 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.poolWeight j_drunkard poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drunkard.rule.0 j_drunkard 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":"$state.d_size","target":"discardsPerRound"}],"copyable":false} | references/source/card.lua:592; references/source/game.lua:460 | 高：固定参考版本源码；独立声明式规格
joker.j_drunkard.baseSellValue j_drunkard 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:460 | 高：基础价格无版次/折扣时推导
joker.j_stone.order j_stone order | 89 | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.cost j_stone cost | 6 | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.rarity j_stone rarity | 2 | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.blueprint_compat j_stone blueprint_compat | true | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.perishable_compat j_stone perishable_compat | true | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.eternal_compat j_stone eternal_compat | true | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.unlocked j_stone unlocked | true | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.config.extra j_stone config.extra | 25 | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.unlockCondition j_stone unlockCondition | null | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.enhancementGate j_stone enhancementGate | m_stone | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.requiredPoolFlag j_stone requiredPoolFlag | null | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.excludedPoolFlag j_stone excludedPoolFlag | null | references/source/game.lua:461 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.poolWeight j_stone poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stone.rule.0 j_stone 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.deckStoneCount",0],"actions":[{"op":"emit","kind":"chips","value":["mul","$state.extra","$ctx.deckStoneCount"]}],"copyable":true} | references/source/card.lua:3922; references/source/game.lua:461 | 高：固定参考版本源码；独立声明式规格
joker.j_stone.baseSellValue j_stone 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:461 | 高：基础价格无版次/折扣时推导
joker.j_golden.order j_golden order | 90 | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.cost j_golden cost | 6 | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.rarity j_golden rarity | 1 | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.blueprint_compat j_golden blueprint_compat | false | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.perishable_compat j_golden perishable_compat | true | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.eternal_compat j_golden eternal_compat | true | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.unlocked j_golden unlocked | true | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.config.extra j_golden config.extra | 4 | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.unlockCondition j_golden unlockCondition | null | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.enhancementGate j_golden enhancementGate | null | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.requiredPoolFlag j_golden requiredPoolFlag | null | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.excludedPoolFlag j_golden excludedPoolFlag | null | references/source/game.lua:462 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.poolWeight j_golden poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_golden.rule.0 j_golden 触发规则 0 | {"trigger":"payout","condition":true,"actions":[{"op":"emit","kind":"money","value":"$state.extra"}],"copyable":false} | references/source/card.lua:1658; references/source/game.lua:462 | 高：固定参考版本源码；独立声明式规格
joker.j_golden.baseSellValue j_golden 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:462 | 高：基础价格无版次/折扣时推导
joker.j_lucky_cat.order j_lucky_cat order | 91 | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.cost j_lucky_cat cost | 6 | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.rarity j_lucky_cat rarity | 2 | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.blueprint_compat j_lucky_cat blueprint_compat | true | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.perishable_compat j_lucky_cat perishable_compat | false | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.eternal_compat j_lucky_cat eternal_compat | true | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.unlocked j_lucky_cat unlocked | true | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.config.Xmult j_lucky_cat config.Xmult | 1 | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.config.extra j_lucky_cat config.extra | 0.25 | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.unlockCondition j_lucky_cat unlockCondition | null | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.enhancementGate j_lucky_cat enhancementGate | m_lucky | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.requiredPoolFlag j_lucky_cat requiredPoolFlag | null | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.excludedPoolFlag j_lucky_cat excludedPoolFlag | null | references/source/game.lua:464 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.poolWeight j_lucky_cat poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_lucky_cat.rule.0 j_lucky_cat 触发规则 0 | {"trigger":"card","condition":"$ctx.card.luckyTriggered","actions":[{"op":"add","target":"state.xmult","value":"$state.extra"}],"copyable":false} | references/source/card.lua:3076; references/source/game.lua:464 | 高：固定参考版本源码；独立声明式规格
joker.j_lucky_cat.rule.1 j_lucky_cat 触发规则 1 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:464 | 高：固定参考版本源码；独立声明式规格
joker.j_lucky_cat.baseSellValue j_lucky_cat 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:464 | 高：基础价格无版次/折扣时推导
joker.j_baseball.order j_baseball order | 92 | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.cost j_baseball cost | 8 | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.rarity j_baseball rarity | 3 | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.blueprint_compat j_baseball blueprint_compat | true | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.perishable_compat j_baseball perishable_compat | true | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.eternal_compat j_baseball eternal_compat | true | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.unlocked j_baseball unlocked | true | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.config.extra j_baseball config.extra | 1.5 | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.unlockCondition j_baseball unlockCondition | null | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.enhancementGate j_baseball enhancementGate | null | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.requiredPoolFlag j_baseball requiredPoolFlag | null | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.excludedPoolFlag j_baseball excludedPoolFlag | null | references/source/game.lua:465 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.poolWeight j_baseball poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_baseball.rule.0 j_baseball 触发规则 0 | {"trigger":"otherJoker","condition":["and",["eq","$ctx.otherJoker.rarity",2],["neq","$ctx.otherJoker.id","$self.id"]],"actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3397; references/source/game.lua:465 | 高：固定参考版本源码；独立声明式规格
joker.j_baseball.baseSellValue j_baseball 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:465 | 高：基础价格无版次/折扣时推导
joker.j_bull.order j_bull order | 93 | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.cost j_bull cost | 6 | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.rarity j_bull rarity | 2 | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.blueprint_compat j_bull blueprint_compat | true | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.perishable_compat j_bull perishable_compat | true | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.eternal_compat j_bull eternal_compat | true | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.unlocked j_bull unlocked | true | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.config.extra j_bull config.extra | 2 | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.unlockCondition j_bull unlockCondition | null | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.enhancementGate j_bull enhancementGate | null | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.requiredPoolFlag j_bull requiredPoolFlag | null | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.excludedPoolFlag j_bull excludedPoolFlag | null | references/source/game.lua:466 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.poolWeight j_bull poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bull.rule.0 j_bull 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.moneyWithBuffer",0],"actions":[{"op":"emit","kind":"chips","value":["mul","$state.extra","$ctx.moneyWithBuffer"]}],"copyable":true} | references/source/card.lua:3936; references/source/game.lua:466 | 高：固定参考版本源码；独立声明式规格
joker.j_bull.baseSellValue j_bull 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:466 | 高：基础价格无版次/折扣时推导
joker.j_diet_cola.order j_diet_cola order | 94 | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.cost j_diet_cola cost | 6 | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.rarity j_diet_cola rarity | 2 | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.blueprint_compat j_diet_cola blueprint_compat | true | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.perishable_compat j_diet_cola perishable_compat | true | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.eternal_compat j_diet_cola eternal_compat | false | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.unlocked j_diet_cola unlocked | true | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.unlockCondition j_diet_cola unlockCondition | null | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.enhancementGate j_diet_cola enhancementGate | null | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.requiredPoolFlag j_diet_cola requiredPoolFlag | null | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.excludedPoolFlag j_diet_cola excludedPoolFlag | null | references/source/game.lua:467 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.poolWeight j_diet_cola poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_diet_cola.rule.0 j_diet_cola 触发规则 0 | {"trigger":"sellSelf","condition":true,"actions":[{"op":"emit","kind":"tag","value":1,"target":"tag_double"}],"copyable":true} | references/source/card.lua:2361; references/source/game.lua:467 | 高：固定参考版本源码；独立声明式规格
joker.j_diet_cola.baseSellValue j_diet_cola 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:467 | 高：基础价格无版次/折扣时推导
joker.j_trading.order j_trading order | 95 | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.cost j_trading cost | 6 | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.rarity j_trading rarity | 2 | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.blueprint_compat j_trading blueprint_compat | false | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.perishable_compat j_trading perishable_compat | true | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.eternal_compat j_trading eternal_compat | true | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.unlocked j_trading unlocked | true | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.config.extra j_trading config.extra | 3 | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.unlockCondition j_trading unlockCondition | null | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.enhancementGate j_trading enhancementGate | null | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.requiredPoolFlag j_trading requiredPoolFlag | null | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.excludedPoolFlag j_trading excludedPoolFlag | null | references/source/game.lua:468 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.poolWeight j_trading poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trading.rule.0 j_trading 触发规则 0 | {"trigger":"discard","condition":["and",["eq","$ctx.round.discardsUsed",0],["eq","$ctx.fullHand.length",1]],"actions":[{"op":"remove","who":"card"},{"op":"emit","kind":"money","value":"$state.extra"}],"copyable":false} | references/source/card.lua:2802; references/source/game.lua:468 | 高：固定参考版本源码；独立声明式规格
joker.j_trading.baseSellValue j_trading 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:468 | 高：基础价格无版次/折扣时推导
joker.j_flash.order j_flash order | 96 | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.cost j_flash cost | 5 | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.rarity j_flash rarity | 2 | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.blueprint_compat j_flash blueprint_compat | true | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.perishable_compat j_flash perishable_compat | false | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.eternal_compat j_flash eternal_compat | true | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.unlocked j_flash unlocked | true | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.config.extra j_flash config.extra | 2 | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.config.mult j_flash config.mult | 0 | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.unlockCondition j_flash unlockCondition | null | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.enhancementGate j_flash enhancementGate | null | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.requiredPoolFlag j_flash requiredPoolFlag | null | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.excludedPoolFlag j_flash excludedPoolFlag | null | references/source/game.lua:469 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.poolWeight j_flash poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flash.rule.0 j_flash 触发规则 0 | {"trigger":"reroll","condition":true,"actions":[{"op":"add","target":"state.mult","value":"$state.extra"}],"copyable":false} | references/source/card.lua:2404; references/source/game.lua:469 | 高：固定参考版本源码；独立声明式规格
joker.j_flash.rule.1 j_flash 触发规则 1 | {"trigger":"joker","condition":["gt","$state.mult",0],"actions":[{"op":"emit","kind":"mult","value":"$state.mult"}],"copyable":true} | references/source/card.lua:3998; references/source/game.lua:469 | 高：固定参考版本源码；独立声明式规格
joker.j_flash.baseSellValue j_flash 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:469 | 高：基础价格无版次/折扣时推导
joker.j_popcorn.order j_popcorn order | 97 | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.cost j_popcorn cost | 5 | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.rarity j_popcorn rarity | 1 | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.blueprint_compat j_popcorn blueprint_compat | true | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.perishable_compat j_popcorn perishable_compat | true | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.eternal_compat j_popcorn eternal_compat | false | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.unlocked j_popcorn unlocked | true | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.config.mult j_popcorn config.mult | 20 | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.config.extra j_popcorn config.extra | 4 | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.unlockCondition j_popcorn unlockCondition | null | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.enhancementGate j_popcorn enhancementGate | null | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.requiredPoolFlag j_popcorn requiredPoolFlag | null | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.excludedPoolFlag j_popcorn excludedPoolFlag | null | references/source/game.lua:470 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.poolWeight j_popcorn poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_popcorn.rule.0 j_popcorn 触发规则 0 | {"trigger":"joker","condition":["gt","$state.mult",0],"actions":[{"op":"emit","kind":"mult","value":"$state.mult"}],"copyable":true} | references/source/card.lua:4004; references/source/game.lua:470 | 高：固定参考版本源码；独立声明式规格
joker.j_popcorn.rule.1 j_popcorn 触发规则 1 | {"trigger":"roundEnd","condition":true,"actions":[{"op":"decay","target":"state.mult","amount":"$state.extra","threshold":0}],"copyable":false} | references/source/card.lua:2945; references/source/game.lua:470 | 高：固定参考版本源码；独立声明式规格
joker.j_popcorn.baseSellValue j_popcorn 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:470 | 高：基础价格无版次/折扣时推导
joker.j_trousers.order j_trousers order | 98 | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.cost j_trousers cost | 6 | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.rarity j_trousers rarity | 2 | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.blueprint_compat j_trousers blueprint_compat | true | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.perishable_compat j_trousers perishable_compat | false | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.eternal_compat j_trousers eternal_compat | true | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.unlocked j_trousers unlocked | true | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.config.extra j_trousers config.extra | 2 | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.unlockCondition j_trousers unlockCondition | null | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.enhancementGate j_trousers enhancementGate | null | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.requiredPoolFlag j_trousers requiredPoolFlag | null | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.excludedPoolFlag j_trousers excludedPoolFlag | null | references/source/game.lua:471 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.poolWeight j_trousers poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trousers.rule.0 j_trousers 触发规则 0 | {"trigger":"before","condition":["or",["handContains","twoPair"],["handContains","fullHouse"]],"actions":[{"op":"add","target":"state.mult","value":"$state.extra"}],"copyable":false} | references/source/card.lua:3412; references/source/game.lua:471 | 高：固定参考版本源码；独立声明式规格
joker.j_trousers.rule.1 j_trousers 触发规则 1 | {"trigger":"joker","condition":["gt","$state.mult",0],"actions":[{"op":"emit","kind":"mult","value":"$state.mult"}],"copyable":true} | references/source/card.lua:3986; references/source/game.lua:471 | 高：固定参考版本源码；独立声明式规格
joker.j_trousers.baseSellValue j_trousers 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:471 | 高：基础价格无版次/折扣时推导
joker.j_ancient.order j_ancient order | 99 | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.cost j_ancient cost | 8 | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.rarity j_ancient rarity | 3 | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.blueprint_compat j_ancient blueprint_compat | true | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.perishable_compat j_ancient perishable_compat | true | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.eternal_compat j_ancient eternal_compat | true | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.unlocked j_ancient unlocked | true | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.config.extra j_ancient config.extra | 1.5 | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.unlockCondition j_ancient unlockCondition | null | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.enhancementGate j_ancient enhancementGate | null | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.requiredPoolFlag j_ancient requiredPoolFlag | null | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.excludedPoolFlag j_ancient excludedPoolFlag | null | references/source/game.lua:472 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.poolWeight j_ancient poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ancient.rule.0 j_ancient 触发规则 0 | {"trigger":"card","condition":["suitIs","$ctx.round.ancientSuit"],"actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3255; references/source/game.lua:472 | 高：固定参考版本源码；独立声明式规格
joker.j_ancient.baseSellValue j_ancient 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:472 | 高：基础价格无版次/折扣时推导
joker.j_ramen.order j_ramen order | 100 | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.cost j_ramen cost | 6 | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.rarity j_ramen rarity | 2 | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.blueprint_compat j_ramen blueprint_compat | true | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.perishable_compat j_ramen perishable_compat | true | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.eternal_compat j_ramen eternal_compat | false | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.unlocked j_ramen unlocked | true | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.config.Xmult j_ramen config.Xmult | 2 | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.config.extra j_ramen config.extra | 0.01 | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.unlockCondition j_ramen unlockCondition | null | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.enhancementGate j_ramen enhancementGate | null | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.requiredPoolFlag j_ramen requiredPoolFlag | null | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.excludedPoolFlag j_ramen excludedPoolFlag | null | references/source/game.lua:473 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.poolWeight j_ramen poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ramen.rule.0 j_ramen 触发规则 0 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:473 | 高：固定参考版本源码；独立声明式规格
joker.j_ramen.rule.1 j_ramen 触发规则 1 | {"trigger":"discard","condition":true,"actions":[{"op":"decay","target":"state.xmult","amount":"$state.extra","threshold":1}],"copyable":false} | references/source/card.lua:3653–3659; references/source/game.lua:473 | 高：固定参考版本源码；独立声明式规格
joker.j_ramen.baseSellValue j_ramen 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:473 | 高：基础价格无版次/折扣时推导
joker.j_walkie_talkie.order j_walkie_talkie order | 101 | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.cost j_walkie_talkie cost | 4 | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.rarity j_walkie_talkie rarity | 1 | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.blueprint_compat j_walkie_talkie blueprint_compat | true | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.perishable_compat j_walkie_talkie perishable_compat | true | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.eternal_compat j_walkie_talkie eternal_compat | true | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.unlocked j_walkie_talkie unlocked | true | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.config.extra.chips j_walkie_talkie config.extra.chips | 10 | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.config.extra.mult j_walkie_talkie config.extra.mult | 4 | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.unlockCondition j_walkie_talkie unlockCondition | null | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.enhancementGate j_walkie_talkie enhancementGate | null | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.requiredPoolFlag j_walkie_talkie requiredPoolFlag | null | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.excludedPoolFlag j_walkie_talkie excludedPoolFlag | null | references/source/game.lua:474 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.poolWeight j_walkie_talkie poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_walkie_talkie.rule.0 j_walkie_talkie 触发规则 0 | {"trigger":"card","condition":["rankIn",[4,10]],"actions":[{"op":"emit","kind":"chips","value":"$state.extra.chips"},{"op":"emit","kind":"mult","value":"$state.extra.mult"}],"copyable":true} | references/source/card.lua:3167; references/source/game.lua:474 | 高：固定参考版本源码；独立声明式规格
joker.j_walkie_talkie.baseSellValue j_walkie_talkie 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:474 | 高：基础价格无版次/折扣时推导
joker.j_selzer.order j_selzer order | 102 | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.cost j_selzer cost | 6 | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.rarity j_selzer rarity | 2 | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.blueprint_compat j_selzer blueprint_compat | true | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.perishable_compat j_selzer perishable_compat | true | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.eternal_compat j_selzer eternal_compat | false | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.unlocked j_selzer unlocked | true | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.config.extra j_selzer config.extra | 10 | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.unlockCondition j_selzer unlockCondition | null | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.enhancementGate j_selzer enhancementGate | null | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.requiredPoolFlag j_selzer requiredPoolFlag | null | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.excludedPoolFlag j_selzer excludedPoolFlag | null | references/source/game.lua:475 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.poolWeight j_selzer poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_selzer.rule.0 j_selzer 触发规则 0 | {"trigger":"repetition","condition":["eq","$ctx.repetitionArea","played"],"actions":[{"op":"emit","kind":"retrigger","value":1}],"copyable":true} | references/source/card.lua:3367; references/source/game.lua:475 | 高：固定参考版本源码；独立声明式规格
joker.j_selzer.rule.1 j_selzer 触发规则 1 | {"trigger":"after","condition":true,"actions":[{"op":"decay","target":"state.extra","amount":1,"threshold":0}],"copyable":false} | references/source/card.lua:3601; references/source/game.lua:475 | 高：固定参考版本源码；独立声明式规格
joker.j_selzer.baseSellValue j_selzer 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:475 | 高：基础价格无版次/折扣时推导
joker.j_castle.order j_castle order | 103 | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.cost j_castle cost | 6 | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.rarity j_castle rarity | 2 | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.blueprint_compat j_castle blueprint_compat | true | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.perishable_compat j_castle perishable_compat | false | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.eternal_compat j_castle eternal_compat | true | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.unlocked j_castle unlocked | true | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.config.extra.chips j_castle config.extra.chips | 0 | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.config.extra.chip_mod j_castle config.extra.chip_mod | 3 | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.unlockCondition j_castle unlockCondition | null | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.enhancementGate j_castle enhancementGate | null | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.requiredPoolFlag j_castle requiredPoolFlag | null | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.excludedPoolFlag j_castle excludedPoolFlag | null | references/source/game.lua:476 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.poolWeight j_castle poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_castle.rule.0 j_castle 触发规则 0 | {"trigger":"discard","condition":["and",["suitIs","$ctx.round.castleSuit"],["not","$ctx.card.debuffed"]],"actions":[{"op":"add","target":"state.extra.chips","value":"$state.extra.chip_mod"}],"copyable":false} | references/source/card.lua:2814; references/source/game.lua:476 | 高：固定参考版本源码；独立声明式规格
joker.j_castle.rule.1 j_castle 触发规则 1 | {"trigger":"joker","condition":["gt","$state.extra.chips",0],"actions":[{"op":"emit","kind":"chips","value":"$state.extra.chips"}],"copyable":true} | references/source/card.lua:3880; references/source/game.lua:476 | 高：固定参考版本源码；独立声明式规格
joker.j_castle.baseSellValue j_castle 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:476 | 高：基础价格无版次/折扣时推导
joker.j_smiley.order j_smiley order | 104 | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.cost j_smiley cost | 4 | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.rarity j_smiley rarity | 1 | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.blueprint_compat j_smiley blueprint_compat | true | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.perishable_compat j_smiley perishable_compat | true | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.eternal_compat j_smiley eternal_compat | true | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.unlocked j_smiley unlocked | true | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.config.extra j_smiley config.extra | 5 | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.unlockCondition j_smiley unlockCondition | null | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.enhancementGate j_smiley enhancementGate | null | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.requiredPoolFlag j_smiley requiredPoolFlag | null | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.excludedPoolFlag j_smiley excludedPoolFlag | null | references/source/game.lua:477 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.poolWeight j_smiley poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smiley.rule.0 j_smiley 触发规则 0 | {"trigger":"card","condition":"$ctx.cardIsFace","actions":[{"op":"emit","kind":"mult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3143; references/source/game.lua:477 | 高：固定参考版本源码；独立声明式规格
joker.j_smiley.baseSellValue j_smiley 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:477 | 高：基础价格无版次/折扣时推导
joker.j_campfire.order j_campfire order | 105 | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.cost j_campfire cost | 9 | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.rarity j_campfire rarity | 3 | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.blueprint_compat j_campfire blueprint_compat | true | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.perishable_compat j_campfire perishable_compat | true | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.eternal_compat j_campfire eternal_compat | true | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.unlocked j_campfire unlocked | true | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.config.extra j_campfire config.extra | 0.25 | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.unlockCondition j_campfire unlockCondition | null | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.enhancementGate j_campfire enhancementGate | null | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.requiredPoolFlag j_campfire requiredPoolFlag | null | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.excludedPoolFlag j_campfire excludedPoolFlag | null | references/source/game.lua:478 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.poolWeight j_campfire poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_campfire.rule.0 j_campfire 触发规则 0 | {"trigger":"sell","condition":true,"actions":[{"op":"add","target":"state.xmult","value":"$state.extra"}],"copyable":false} | references/source/card.lua:3653–3659; references/source/game.lua:478 | 高：固定参考版本源码；独立声明式规格
joker.j_campfire.rule.1 j_campfire 触发规则 1 | {"trigger":"roundEnd","condition":"$ctx.blind.boss","actions":[{"op":"set","target":"state.xmult","value":1}],"copyable":false} | references/source/card.lua:2889; references/source/game.lua:478 | 高：固定参考版本源码；独立声明式规格
joker.j_campfire.rule.2 j_campfire 触发规则 2 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:478 | 高：固定参考版本源码；独立声明式规格
joker.j_campfire.baseSellValue j_campfire 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:478 | 高：基础价格无版次/折扣时推导
joker.j_ticket.order j_ticket order | 106 | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.cost j_ticket cost | 5 | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.rarity j_ticket rarity | 1 | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.blueprint_compat j_ticket blueprint_compat | true | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.perishable_compat j_ticket perishable_compat | true | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.eternal_compat j_ticket eternal_compat | true | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.unlocked j_ticket unlocked | false | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.config.extra j_ticket config.extra | 4 | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.unlockCondition.type j_ticket unlockCondition.type | hand_contents | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.unlockCondition.extra j_ticket unlockCondition.extra | Gold | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.enhancementGate j_ticket enhancementGate | m_gold | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.requiredPoolFlag j_ticket requiredPoolFlag | null | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.excludedPoolFlag j_ticket excludedPoolFlag | null | references/source/game.lua:480 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.poolWeight j_ticket poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ticket.rule.0 j_ticket 触发规则 0 | {"trigger":"card","condition":["eq","$ctx.cardEnhancement","gold"],"actions":[{"op":"emit","kind":"money","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3150; references/source/game.lua:480 | 高：固定参考版本源码；独立声明式规格
joker.j_ticket.baseSellValue j_ticket 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:480 | 高：基础价格无版次/折扣时推导
joker.j_mr_bones.order j_mr_bones order | 107 | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.cost j_mr_bones cost | 5 | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.rarity j_mr_bones rarity | 2 | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.blueprint_compat j_mr_bones blueprint_compat | false | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.perishable_compat j_mr_bones perishable_compat | true | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.eternal_compat j_mr_bones eternal_compat | false | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.unlocked j_mr_bones unlocked | false | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.unlockCondition.type j_mr_bones unlockCondition.type | c_losses | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.unlockCondition.extra j_mr_bones unlockCondition.extra | 5 | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.enhancementGate j_mr_bones enhancementGate | null | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.requiredPoolFlag j_mr_bones requiredPoolFlag | null | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.excludedPoolFlag j_mr_bones excludedPoolFlag | null | references/source/game.lua:481 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.poolWeight j_mr_bones poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_mr_bones.rule.0 j_mr_bones 触发规则 0 | {"trigger":"roundEnd","condition":["and","$ctx.gameOver",["gte","$ctx.scoreFraction",0.25]],"actions":[{"op":"emit","kind":"saved","value":1},{"op":"remove","who":"self"}],"copyable":false} | references/source/card.lua:3047; references/source/game.lua:481 | 高：固定参考版本源码；独立声明式规格
joker.j_mr_bones.baseSellValue j_mr_bones 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:481 | 高：基础价格无版次/折扣时推导
joker.j_acrobat.order j_acrobat order | 108 | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.cost j_acrobat cost | 6 | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.rarity j_acrobat rarity | 2 | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.blueprint_compat j_acrobat blueprint_compat | true | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.perishable_compat j_acrobat perishable_compat | true | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.eternal_compat j_acrobat eternal_compat | true | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.unlocked j_acrobat unlocked | false | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.config.extra j_acrobat config.extra | 3 | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.unlockCondition.type j_acrobat unlockCondition.type | c_hands_played | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.unlockCondition.extra j_acrobat unlockCondition.extra | 200 | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.enhancementGate j_acrobat enhancementGate | null | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.requiredPoolFlag j_acrobat requiredPoolFlag | null | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.excludedPoolFlag j_acrobat excludedPoolFlag | null | references/source/game.lua:482 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.poolWeight j_acrobat poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_acrobat.rule.0 j_acrobat 触发规则 0 | {"trigger":"joker","condition":["eq","$ctx.round.handsLeft",0],"actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3688; references/source/game.lua:482 | 高：固定参考版本源码；独立声明式规格
joker.j_acrobat.baseSellValue j_acrobat 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:482 | 高：基础价格无版次/折扣时推导
joker.j_sock_and_buskin.order j_sock_and_buskin order | 109 | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.cost j_sock_and_buskin cost | 6 | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.rarity j_sock_and_buskin rarity | 2 | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.blueprint_compat j_sock_and_buskin blueprint_compat | true | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.perishable_compat j_sock_and_buskin perishable_compat | true | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.eternal_compat j_sock_and_buskin eternal_compat | true | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.unlocked j_sock_and_buskin unlocked | false | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.config.extra j_sock_and_buskin config.extra | 1 | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.unlockCondition.type j_sock_and_buskin unlockCondition.type | c_face_cards_played | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.unlockCondition.extra j_sock_and_buskin unlockCondition.extra | 300 | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.enhancementGate j_sock_and_buskin enhancementGate | null | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.requiredPoolFlag j_sock_and_buskin requiredPoolFlag | null | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.excludedPoolFlag j_sock_and_buskin excludedPoolFlag | null | references/source/game.lua:483 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.poolWeight j_sock_and_buskin poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_sock_and_buskin.rule.0 j_sock_and_buskin 触发规则 0 | {"trigger":"repetition","condition":["and",["eq","$ctx.repetitionArea","played"],"$ctx.cardIsFace"],"actions":[{"op":"emit","kind":"retrigger","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3344; references/source/game.lua:483 | 高：固定参考版本源码；独立声明式规格
joker.j_sock_and_buskin.baseSellValue j_sock_and_buskin 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:483 | 高：基础价格无版次/折扣时推导
joker.j_swashbuckler.order j_swashbuckler order | 110 | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.cost j_swashbuckler cost | 4 | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.rarity j_swashbuckler rarity | 1 | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.blueprint_compat j_swashbuckler blueprint_compat | true | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.perishable_compat j_swashbuckler perishable_compat | true | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.eternal_compat j_swashbuckler eternal_compat | true | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.unlocked j_swashbuckler unlocked | false | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.config.mult j_swashbuckler config.mult | 1 | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.unlockCondition.type j_swashbuckler unlockCondition.type | c_jokers_sold | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.unlockCondition.extra j_swashbuckler unlockCondition.extra | 20 | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.enhancementGate j_swashbuckler enhancementGate | null | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.requiredPoolFlag j_swashbuckler requiredPoolFlag | null | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.excludedPoolFlag j_swashbuckler excludedPoolFlag | null | references/source/game.lua:484 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.poolWeight j_swashbuckler poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_swashbuckler.rule.0 j_swashbuckler 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.otherJokerSellTotal",0],"actions":[{"op":"emit","kind":"mult","value":"$ctx.otherJokerSellTotal"}],"copyable":true} | references/source/card.lua:3974; references/source/game.lua:484 | 高：固定参考版本源码；独立声明式规格
joker.j_swashbuckler.baseSellValue j_swashbuckler 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:484 | 高：基础价格无版次/折扣时推导
joker.j_troubadour.order j_troubadour order | 111 | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.cost j_troubadour cost | 6 | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.rarity j_troubadour rarity | 2 | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.blueprint_compat j_troubadour blueprint_compat | false | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.perishable_compat j_troubadour perishable_compat | true | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.eternal_compat j_troubadour eternal_compat | true | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.unlocked j_troubadour unlocked | false | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.config.extra.h_size j_troubadour config.extra.h_size | 2 | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.config.extra.h_plays j_troubadour config.extra.h_plays | -1 | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.unlockCondition.type j_troubadour unlockCondition.type | round_win | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.unlockCondition.extra j_troubadour unlockCondition.extra | 5 | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.enhancementGate j_troubadour enhancementGate | null | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.requiredPoolFlag j_troubadour requiredPoolFlag | null | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.excludedPoolFlag j_troubadour excludedPoolFlag | null | references/source/game.lua:485 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.poolWeight j_troubadour poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_troubadour.rule.0 j_troubadour 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":"$state.extra.h_size","target":"handSize"},{"op":"emit","kind":"rule","value":"$state.extra.h_plays","target":"handsPerRound"}],"copyable":false} | references/source/card.lua:623; references/source/game.lua:485 | 高：固定参考版本源码；独立声明式规格
joker.j_troubadour.baseSellValue j_troubadour 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:485 | 高：基础价格无版次/折扣时推导
joker.j_certificate.order j_certificate order | 112 | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.cost j_certificate cost | 6 | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.rarity j_certificate rarity | 2 | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.blueprint_compat j_certificate blueprint_compat | true | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.perishable_compat j_certificate perishable_compat | true | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.eternal_compat j_certificate eternal_compat | true | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.unlocked j_certificate unlocked | false | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.unlockCondition.type j_certificate unlockCondition.type | double_gold | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.enhancementGate j_certificate enhancementGate | null | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.requiredPoolFlag j_certificate requiredPoolFlag | null | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.excludedPoolFlag j_certificate excludedPoolFlag | null | references/source/game.lua:486 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.poolWeight j_certificate poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_certificate.rule.0 j_certificate 触发规则 0 | {"trigger":"firstHandDrawn","condition":true,"actions":[{"op":"spawn","set":"playingCard","count":1,"seal":"random","destination":"hand"}],"copyable":true} | references/source/card.lua:2468; references/source/game.lua:486 | 高：固定参考版本源码；独立声明式规格
joker.j_certificate.baseSellValue j_certificate 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:486 | 高：基础价格无版次/折扣时推导
joker.j_smeared.order j_smeared order | 113 | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.cost j_smeared cost | 7 | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.rarity j_smeared rarity | 2 | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.blueprint_compat j_smeared blueprint_compat | false | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.perishable_compat j_smeared perishable_compat | true | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.eternal_compat j_smeared eternal_compat | true | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.unlocked j_smeared unlocked | false | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.unlockCondition.type j_smeared unlockCondition.type | modify_deck | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.unlockCondition.extra.count j_smeared unlockCondition.extra.count | 3 | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.unlockCondition.extra.enhancement j_smeared unlockCondition.extra.enhancement | Wild Card | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.unlockCondition.extra.e_key j_smeared unlockCondition.extra.e_key | m_wild | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.enhancementGate j_smeared enhancementGate | null | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.requiredPoolFlag j_smeared requiredPoolFlag | null | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.excludedPoolFlag j_smeared excludedPoolFlag | null | references/source/game.lua:487 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.poolWeight j_smeared poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_smeared.rule.0 j_smeared 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":1,"target":"smearedSuits"}],"copyable":false} | references/source/card.lua:4069; references/source/game.lua:487 | 高：固定参考版本源码；独立声明式规格
joker.j_smeared.baseSellValue j_smeared 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:487 | 高：基础价格无版次/折扣时推导
joker.j_throwback.order j_throwback order | 114 | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.cost j_throwback cost | 6 | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.rarity j_throwback rarity | 2 | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.blueprint_compat j_throwback blueprint_compat | true | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.perishable_compat j_throwback perishable_compat | true | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.eternal_compat j_throwback eternal_compat | true | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.unlocked j_throwback unlocked | false | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.config.extra j_throwback config.extra | 0.25 | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.unlockCondition.type j_throwback unlockCondition.type | continue_game | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.enhancementGate j_throwback enhancementGate | null | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.requiredPoolFlag j_throwback requiredPoolFlag | null | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.excludedPoolFlag j_throwback excludedPoolFlag | null | references/source/game.lua:488 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.poolWeight j_throwback poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_throwback.rule.0 j_throwback 触发规则 0 | {"trigger":"joker","condition":["gt","$ctx.run.skips",0],"actions":[{"op":"emit","kind":"xmult","value":["add",1,["mul","$state.extra","$ctx.run.skips"]]}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:488 | 高：固定参考版本源码；独立声明式规格
joker.j_throwback.baseSellValue j_throwback 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:488 | 高：基础价格无版次/折扣时推导
joker.j_hanging_chad.order j_hanging_chad order | 115 | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.cost j_hanging_chad cost | 4 | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.rarity j_hanging_chad rarity | 1 | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.blueprint_compat j_hanging_chad blueprint_compat | true | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.perishable_compat j_hanging_chad perishable_compat | true | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.eternal_compat j_hanging_chad eternal_compat | true | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.unlocked j_hanging_chad unlocked | false | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.config.extra j_hanging_chad config.extra | 2 | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.unlockCondition.type j_hanging_chad unlockCondition.type | round_win | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.unlockCondition.extra j_hanging_chad unlockCondition.extra | highCard | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.enhancementGate j_hanging_chad enhancementGate | null | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.requiredPoolFlag j_hanging_chad requiredPoolFlag | null | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.excludedPoolFlag j_hanging_chad excludedPoolFlag | null | references/source/game.lua:489 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.poolWeight j_hanging_chad poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hanging_chad.rule.0 j_hanging_chad 触发规则 0 | {"trigger":"repetition","condition":["and",["eq","$ctx.repetitionArea","played"],"$ctx.isFirstScoringCard"],"actions":[{"op":"emit","kind":"retrigger","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3352; references/source/game.lua:489 | 高：固定参考版本源码；独立声明式规格
joker.j_hanging_chad.baseSellValue j_hanging_chad 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:489 | 高：基础价格无版次/折扣时推导
joker.j_rough_gem.order j_rough_gem order | 116 | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.cost j_rough_gem cost | 7 | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.rarity j_rough_gem rarity | 2 | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.blueprint_compat j_rough_gem blueprint_compat | true | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.perishable_compat j_rough_gem perishable_compat | true | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.eternal_compat j_rough_gem eternal_compat | true | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.unlocked j_rough_gem unlocked | false | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.config.extra j_rough_gem config.extra | 1 | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.unlockCondition.type j_rough_gem unlockCondition.type | modify_deck | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.unlockCondition.extra.count j_rough_gem unlockCondition.extra.count | 30 | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.unlockCondition.extra.suit j_rough_gem unlockCondition.extra.suit | diamonds | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.enhancementGate j_rough_gem enhancementGate | null | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.requiredPoolFlag j_rough_gem requiredPoolFlag | null | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.excludedPoolFlag j_rough_gem excludedPoolFlag | null | references/source/game.lua:490 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.poolWeight j_rough_gem poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_rough_gem.rule.0 j_rough_gem 触发规则 0 | {"trigger":"card","condition":["suitIs","diamonds"],"actions":[{"op":"emit","kind":"money","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3224; references/source/game.lua:490 | 高：固定参考版本源码；独立声明式规格
joker.j_rough_gem.baseSellValue j_rough_gem 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:490 | 高：基础价格无版次/折扣时推导
joker.j_bloodstone.order j_bloodstone order | 117 | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.cost j_bloodstone cost | 7 | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.rarity j_bloodstone rarity | 2 | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.blueprint_compat j_bloodstone blueprint_compat | true | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.perishable_compat j_bloodstone perishable_compat | true | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.eternal_compat j_bloodstone eternal_compat | true | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.unlocked j_bloodstone unlocked | false | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.config.extra.odds j_bloodstone config.extra.odds | 2 | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.config.extra.Xmult j_bloodstone config.extra.Xmult | 1.5 | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.unlockCondition.type j_bloodstone unlockCondition.type | modify_deck | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.unlockCondition.extra.count j_bloodstone unlockCondition.extra.count | 30 | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.unlockCondition.extra.suit j_bloodstone unlockCondition.extra.suit | hearts | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.enhancementGate j_bloodstone enhancementGate | null | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.requiredPoolFlag j_bloodstone requiredPoolFlag | null | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.excludedPoolFlag j_bloodstone excludedPoolFlag | null | references/source/game.lua:491 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.poolWeight j_bloodstone poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bloodstone.rule.0 j_bloodstone 触发规则 0 | {"trigger":"card","condition":["and",["suitIs","hearts"],["chance","$state.extra.odds","bloodstone"]],"actions":[{"op":"emit","kind":"xmult","value":"$state.extra.Xmult"}],"copyable":true} | references/source/card.lua:3247; references/source/game.lua:491 | 高：固定参考版本源码；独立声明式规格
joker.j_bloodstone.baseSellValue j_bloodstone 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:491 | 高：基础价格无版次/折扣时推导
joker.j_arrowhead.order j_arrowhead order | 118 | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.cost j_arrowhead cost | 7 | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.rarity j_arrowhead rarity | 2 | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.blueprint_compat j_arrowhead blueprint_compat | true | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.perishable_compat j_arrowhead perishable_compat | true | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.eternal_compat j_arrowhead eternal_compat | true | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.unlocked j_arrowhead unlocked | false | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.config.extra j_arrowhead config.extra | 50 | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.unlockCondition.type j_arrowhead unlockCondition.type | modify_deck | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.unlockCondition.extra.count j_arrowhead unlockCondition.extra.count | 30 | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.unlockCondition.extra.suit j_arrowhead unlockCondition.extra.suit | spades | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.enhancementGate j_arrowhead enhancementGate | null | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.requiredPoolFlag j_arrowhead requiredPoolFlag | null | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.excludedPoolFlag j_arrowhead excludedPoolFlag | null | references/source/game.lua:492 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.poolWeight j_arrowhead poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_arrowhead.rule.0 j_arrowhead 触发规则 0 | {"trigger":"card","condition":["suitIs","spades"],"actions":[{"op":"emit","kind":"chips","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3240; references/source/game.lua:492 | 高：固定参考版本源码；独立声明式规格
joker.j_arrowhead.baseSellValue j_arrowhead 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:492 | 高：基础价格无版次/折扣时推导
joker.j_onyx_agate.order j_onyx_agate order | 119 | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.cost j_onyx_agate cost | 7 | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.rarity j_onyx_agate rarity | 2 | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.blueprint_compat j_onyx_agate blueprint_compat | true | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.perishable_compat j_onyx_agate perishable_compat | true | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.eternal_compat j_onyx_agate eternal_compat | true | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.unlocked j_onyx_agate unlocked | false | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.config.extra j_onyx_agate config.extra | 7 | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.unlockCondition.type j_onyx_agate unlockCondition.type | modify_deck | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.unlockCondition.extra.count j_onyx_agate unlockCondition.extra.count | 30 | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.unlockCondition.extra.suit j_onyx_agate unlockCondition.extra.suit | clubs | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.enhancementGate j_onyx_agate enhancementGate | null | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.requiredPoolFlag j_onyx_agate requiredPoolFlag | null | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.excludedPoolFlag j_onyx_agate excludedPoolFlag | null | references/source/game.lua:493 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.poolWeight j_onyx_agate poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_onyx_agate.rule.0 j_onyx_agate 触发规则 0 | {"trigger":"card","condition":["suitIs","clubs"],"actions":[{"op":"emit","kind":"mult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3233; references/source/game.lua:493 | 高：固定参考版本源码；独立声明式规格
joker.j_onyx_agate.baseSellValue j_onyx_agate 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:493 | 高：基础价格无版次/折扣时推导
joker.j_glass.order j_glass order | 120 | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.cost j_glass cost | 6 | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.rarity j_glass rarity | 2 | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.blueprint_compat j_glass blueprint_compat | true | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.perishable_compat j_glass perishable_compat | false | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.eternal_compat j_glass eternal_compat | true | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.unlocked j_glass unlocked | false | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.config.extra j_glass config.extra | 0.75 | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.config.Xmult j_glass config.Xmult | 1 | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.unlockCondition.type j_glass unlockCondition.type | modify_deck | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.unlockCondition.extra.count j_glass unlockCondition.extra.count | 5 | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.unlockCondition.extra.enhancement j_glass unlockCondition.extra.enhancement | Glass Card | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.unlockCondition.extra.e_key j_glass unlockCondition.extra.e_key | m_glass | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.enhancementGate j_glass enhancementGate | m_glass | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.requiredPoolFlag j_glass requiredPoolFlag | null | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.excludedPoolFlag j_glass excludedPoolFlag | null | references/source/game.lua:494 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.poolWeight j_glass poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_glass.rule.0 j_glass 触发规则 0 | {"trigger":["cardsDestroyed","cardsRemoved"],"condition":["gt","$ctx.shatteredCount",0],"actions":[{"op":"add","target":"state.xmult","value":["mul","$state.extra","$ctx.shatteredCount"]}],"copyable":false} | references/source/card.lua:2647; references/source/game.lua:494 | 高：固定参考版本源码；独立声明式规格
joker.j_glass.rule.1 j_glass 触发规则 1 | {"trigger":"consume","condition":["and",["eq","$ctx.consumable.sourceKey","c_hanged_man"],["gt","$ctx.selectedGlassCount",0]],"actions":[{"op":"add","target":"state.xmult","value":["mul","$state.extra","$ctx.selectedGlassCount"]}],"copyable":false} | references/source/card.lua:3653–3659; references/source/game.lua:494 | 高：固定参考版本源码；独立声明式规格
joker.j_glass.rule.2 j_glass 触发规则 2 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:494 | 高：固定参考版本源码；独立声明式规格
joker.j_glass.baseSellValue j_glass 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:494 | 高：基础价格无版次/折扣时推导
joker.j_ring_master.order j_ring_master order | 121 | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.cost j_ring_master cost | 5 | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.rarity j_ring_master rarity | 2 | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.blueprint_compat j_ring_master blueprint_compat | false | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.perishable_compat j_ring_master perishable_compat | true | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.eternal_compat j_ring_master eternal_compat | true | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.unlocked j_ring_master unlocked | false | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.unlockCondition.type j_ring_master unlockCondition.type | ante_up | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.unlockCondition.ante j_ring_master unlockCondition.ante | 4 | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.enhancementGate j_ring_master enhancementGate | null | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.requiredPoolFlag j_ring_master requiredPoolFlag | null | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.excludedPoolFlag j_ring_master excludedPoolFlag | null | references/source/game.lua:496 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.poolWeight j_ring_master poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_ring_master.rule.0 j_ring_master 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":1,"target":"allowDuplicates"}],"copyable":false} | references/source/functions/common_events.lua:1987; references/source/game.lua:496 | 高：固定参考版本源码；独立声明式规格
joker.j_ring_master.baseSellValue j_ring_master 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:496 | 高：基础价格无版次/折扣时推导
joker.j_flower_pot.order j_flower_pot order | 122 | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.cost j_flower_pot cost | 6 | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.rarity j_flower_pot rarity | 2 | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.blueprint_compat j_flower_pot blueprint_compat | true | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.perishable_compat j_flower_pot perishable_compat | true | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.eternal_compat j_flower_pot eternal_compat | true | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.unlocked j_flower_pot unlocked | false | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.config.extra j_flower_pot config.extra | 3 | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.unlockCondition.type j_flower_pot unlockCondition.type | ante_up | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.unlockCondition.ante j_flower_pot unlockCondition.ante | 8 | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.enhancementGate j_flower_pot enhancementGate | null | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.requiredPoolFlag j_flower_pot requiredPoolFlag | null | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.excludedPoolFlag j_flower_pot excludedPoolFlag | null | references/source/game.lua:497 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.poolWeight j_flower_pot poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_flower_pot.rule.0 j_flower_pot 触发规则 0 | {"trigger":"joker","condition":"$ctx.coversAllSuits","actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3807; references/source/game.lua:497 | 高：固定参考版本源码；独立声明式规格
joker.j_flower_pot.baseSellValue j_flower_pot 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:497 | 高：基础价格无版次/折扣时推导
joker.j_blueprint.order j_blueprint order | 123 | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.cost j_blueprint cost | 10 | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.rarity j_blueprint rarity | 3 | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.blueprint_compat j_blueprint blueprint_compat | true | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.perishable_compat j_blueprint perishable_compat | true | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.eternal_compat j_blueprint eternal_compat | true | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.unlocked j_blueprint unlocked | false | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.unlockCondition.type j_blueprint unlockCondition.type | win_custom | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.enhancementGate j_blueprint enhancementGate | null | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.requiredPoolFlag j_blueprint requiredPoolFlag | null | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.excludedPoolFlag j_blueprint excludedPoolFlag | null | references/source/game.lua:498 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.poolWeight j_blueprint poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_blueprint.rule.0 j_blueprint 触发规则 0 | {"trigger":"*","condition":true,"actions":[{"op":"copy","who":"right"}],"copyable":true} | references/source/card.lua:2304; references/source/game.lua:498 | 高：固定参考版本源码；独立声明式规格
joker.j_blueprint.baseSellValue j_blueprint 基础卖价 | 5 | references/source/card.lua:382; references/source/game.lua:498 | 高：基础价格无版次/折扣时推导
joker.j_wee.order j_wee order | 124 | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.cost j_wee cost | 8 | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.rarity j_wee rarity | 3 | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.blueprint_compat j_wee blueprint_compat | true | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.perishable_compat j_wee perishable_compat | false | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.eternal_compat j_wee eternal_compat | true | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.unlocked j_wee unlocked | false | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.config.extra.chips j_wee config.extra.chips | 0 | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.config.extra.chip_mod j_wee config.extra.chip_mod | 8 | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.unlockCondition.type j_wee unlockCondition.type | win | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.unlockCondition.n_rounds j_wee unlockCondition.n_rounds | 18 | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.enhancementGate j_wee enhancementGate | null | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.requiredPoolFlag j_wee requiredPoolFlag | null | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.excludedPoolFlag j_wee excludedPoolFlag | null | references/source/game.lua:499 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.poolWeight j_wee poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_wee.rule.0 j_wee 触发规则 0 | {"trigger":"card","condition":["rankIn",[2]],"actions":[{"op":"add","target":"state.extra.chips","value":"$state.extra.chip_mod"}],"copyable":false} | references/source/card.lua:3083; references/source/game.lua:499 | 高：固定参考版本源码；独立声明式规格
joker.j_wee.rule.1 j_wee 触发规则 1 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"chips","value":"$state.extra.chips"}],"copyable":true} | references/source/card.lua:3873; references/source/game.lua:499 | 高：固定参考版本源码；独立声明式规格
joker.j_wee.baseSellValue j_wee 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:499 | 高：基础价格无版次/折扣时推导
joker.j_merry_andy.order j_merry_andy order | 125 | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.cost j_merry_andy cost | 7 | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.rarity j_merry_andy rarity | 2 | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.blueprint_compat j_merry_andy blueprint_compat | false | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.perishable_compat j_merry_andy perishable_compat | true | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.eternal_compat j_merry_andy eternal_compat | true | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.unlocked j_merry_andy unlocked | false | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.config.d_size j_merry_andy config.d_size | 3 | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.config.h_size j_merry_andy config.h_size | -1 | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.unlockCondition.type j_merry_andy unlockCondition.type | win | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.unlockCondition.n_rounds j_merry_andy unlockCondition.n_rounds | 12 | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.enhancementGate j_merry_andy enhancementGate | null | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.requiredPoolFlag j_merry_andy requiredPoolFlag | null | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.excludedPoolFlag j_merry_andy excludedPoolFlag | null | references/source/game.lua:500 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.poolWeight j_merry_andy poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_merry_andy.rule.0 j_merry_andy 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":"$state.d_size","target":"discardsPerRound"},{"op":"emit","kind":"rule","value":"$state.h_size","target":"handSize"}],"copyable":false} | references/source/card.lua:589; references/source/card.lua:592; references/source/game.lua:500 | 高：固定参考版本源码；独立声明式规格
joker.j_merry_andy.baseSellValue j_merry_andy 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:500 | 高：基础价格无版次/折扣时推导
joker.j_oops.order j_oops order | 126 | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.cost j_oops cost | 4 | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.rarity j_oops rarity | 2 | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.blueprint_compat j_oops blueprint_compat | false | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.perishable_compat j_oops perishable_compat | true | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.eternal_compat j_oops eternal_compat | true | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.unlocked j_oops unlocked | false | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.unlockCondition.type j_oops unlockCondition.type | chip_score | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.unlockCondition.chips j_oops unlockCondition.chips | 10000 | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.enhancementGate j_oops enhancementGate | null | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.requiredPoolFlag j_oops requiredPoolFlag | null | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.excludedPoolFlag j_oops excludedPoolFlag | null | references/source/game.lua:501 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.poolWeight j_oops poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_oops.rule.0 j_oops 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":2,"target":"probabilityFactor"}],"copyable":false} | references/source/card.lua:608; references/source/game.lua:501 | 高：固定参考版本源码；独立声明式规格
joker.j_oops.baseSellValue j_oops 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:501 | 高：基础价格无版次/折扣时推导
joker.j_idol.order j_idol order | 127 | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.cost j_idol cost | 6 | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.rarity j_idol rarity | 2 | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.blueprint_compat j_idol blueprint_compat | true | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.perishable_compat j_idol perishable_compat | true | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.eternal_compat j_idol eternal_compat | true | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.unlocked j_idol unlocked | false | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.config.extra j_idol config.extra | 2 | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.unlockCondition.type j_idol unlockCondition.type | chip_score | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.unlockCondition.chips j_idol unlockCondition.chips | 1000000 | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.enhancementGate j_idol enhancementGate | null | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.requiredPoolFlag j_idol requiredPoolFlag | null | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.excludedPoolFlag j_idol excludedPoolFlag | null | references/source/game.lua:502 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.poolWeight j_idol poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_idol.rule.0 j_idol 触发规则 0 | {"trigger":"card","condition":["and",["eq","$ctx.cardRank","$ctx.round.idolRank"],["suitIs","$ctx.round.idolSuit"]],"actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3127; references/source/game.lua:502 | 高：固定参考版本源码；独立声明式规格
joker.j_idol.baseSellValue j_idol 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:502 | 高：基础价格无版次/折扣时推导
joker.j_seeing_double.order j_seeing_double order | 128 | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.cost j_seeing_double cost | 6 | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.rarity j_seeing_double rarity | 2 | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.blueprint_compat j_seeing_double blueprint_compat | true | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.perishable_compat j_seeing_double perishable_compat | true | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.eternal_compat j_seeing_double eternal_compat | true | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.unlocked j_seeing_double unlocked | false | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.config.extra j_seeing_double config.extra | 2 | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.unlockCondition.type j_seeing_double unlockCondition.type | hand_contents | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.unlockCondition.extra j_seeing_double unlockCondition.extra | four 7 of Clubs | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.enhancementGate j_seeing_double enhancementGate | null | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.requiredPoolFlag j_seeing_double requiredPoolFlag | null | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.excludedPoolFlag j_seeing_double excludedPoolFlag | null | references/source/game.lua:503 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.poolWeight j_seeing_double poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_seeing_double.rule.0 j_seeing_double 触发规则 0 | {"trigger":"joker","condition":"$ctx.hasClubAndOtherSuit","actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3653; references/source/game.lua:503 | 高：固定参考版本源码；独立声明式规格
joker.j_seeing_double.baseSellValue j_seeing_double 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:503 | 高：基础价格无版次/折扣时推导
joker.j_matador.order j_matador order | 129 | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.cost j_matador cost | 7 | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.rarity j_matador rarity | 2 | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.blueprint_compat j_matador blueprint_compat | true | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.perishable_compat j_matador perishable_compat | true | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.eternal_compat j_matador eternal_compat | true | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.unlocked j_matador unlocked | false | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.config.extra j_matador config.extra | 8 | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.unlockCondition.type j_matador unlockCondition.type | round_win | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.enhancementGate j_matador enhancementGate | null | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.requiredPoolFlag j_matador requiredPoolFlag | null | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.excludedPoolFlag j_matador excludedPoolFlag | null | references/source/game.lua:504 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.poolWeight j_matador poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_matador.rule.0 j_matador 触发规则 0 | {"trigger":["joker","debuffedHand"],"condition":"$ctx.blind.triggered","actions":[{"op":"emit","kind":"money","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3719; references/source/game.lua:504 | 高：固定参考版本源码；独立声明式规格
joker.j_matador.baseSellValue j_matador 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:504 | 高：基础价格无版次/折扣时推导
joker.j_hit_the_road.order j_hit_the_road order | 130 | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.cost j_hit_the_road cost | 8 | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.rarity j_hit_the_road rarity | 3 | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.blueprint_compat j_hit_the_road blueprint_compat | true | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.perishable_compat j_hit_the_road perishable_compat | true | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.eternal_compat j_hit_the_road eternal_compat | true | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.unlocked j_hit_the_road unlocked | false | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.config.extra j_hit_the_road config.extra | 0.5 | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.unlockCondition.type j_hit_the_road unlockCondition.type | discard_custom | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.enhancementGate j_hit_the_road enhancementGate | null | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.requiredPoolFlag j_hit_the_road requiredPoolFlag | null | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.excludedPoolFlag j_hit_the_road excludedPoolFlag | null | references/source/game.lua:505 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.poolWeight j_hit_the_road poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_hit_the_road.rule.0 j_hit_the_road 触发规则 0 | {"trigger":"discard","condition":["and",["rankIn",[11]],["not","$ctx.card.debuffed"]],"actions":[{"op":"add","target":"state.xmult","value":"$state.extra"}],"copyable":false} | references/source/card.lua:2835; references/source/game.lua:505 | 高：固定参考版本源码；独立声明式规格
joker.j_hit_the_road.rule.1 j_hit_the_road 触发规则 1 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:505 | 高：固定参考版本源码；独立声明式规格
joker.j_hit_the_road.rule.2 j_hit_the_road 触发规则 2 | {"trigger":"roundEnd","condition":["gt","$state.xmult",1],"actions":[{"op":"set","target":"state.xmult","value":1}],"copyable":false} | references/source/card.lua:3011; references/source/game.lua:505 | 高：固定参考版本源码；独立声明式规格
joker.j_hit_the_road.baseSellValue j_hit_the_road 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:505 | 高：基础价格无版次/折扣时推导
joker.j_duo.order j_duo order | 131 | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.cost j_duo cost | 8 | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.rarity j_duo rarity | 3 | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.blueprint_compat j_duo blueprint_compat | true | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.perishable_compat j_duo perishable_compat | true | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.eternal_compat j_duo eternal_compat | true | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.unlocked j_duo unlocked | false | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.config.Xmult j_duo config.Xmult | 2 | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.config.type j_duo config.type | pair | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.unlockCondition.type j_duo unlockCondition.type | win_no_hand | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.unlockCondition.extra j_duo unlockCondition.extra | pair | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.enhancementGate j_duo enhancementGate | null | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.requiredPoolFlag j_duo requiredPoolFlag | null | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.excludedPoolFlag j_duo excludedPoolFlag | null | references/source/game.lua:506 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.poolWeight j_duo poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_duo.rule.0 j_duo 触发规则 0 | {"trigger":"joker","condition":["handContains","pair"],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:506 | 高：固定参考版本源码；独立声明式规格
joker.j_duo.baseSellValue j_duo 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:506 | 高：基础价格无版次/折扣时推导
joker.j_trio.order j_trio order | 132 | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.cost j_trio cost | 8 | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.rarity j_trio rarity | 3 | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.blueprint_compat j_trio blueprint_compat | true | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.perishable_compat j_trio perishable_compat | true | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.eternal_compat j_trio eternal_compat | true | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.unlocked j_trio unlocked | false | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.config.Xmult j_trio config.Xmult | 3 | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.config.type j_trio config.type | threeOfAKind | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.unlockCondition.type j_trio unlockCondition.type | win_no_hand | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.unlockCondition.extra j_trio unlockCondition.extra | threeOfAKind | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.enhancementGate j_trio enhancementGate | null | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.requiredPoolFlag j_trio requiredPoolFlag | null | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.excludedPoolFlag j_trio excludedPoolFlag | null | references/source/game.lua:507 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.poolWeight j_trio poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_trio.rule.0 j_trio 触发规则 0 | {"trigger":"joker","condition":["handContains","threeOfAKind"],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:507 | 高：固定参考版本源码；独立声明式规格
joker.j_trio.baseSellValue j_trio 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:507 | 高：基础价格无版次/折扣时推导
joker.j_family.order j_family order | 133 | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.cost j_family cost | 8 | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.rarity j_family rarity | 3 | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.blueprint_compat j_family blueprint_compat | true | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.perishable_compat j_family perishable_compat | true | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.eternal_compat j_family eternal_compat | true | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.unlocked j_family unlocked | false | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.config.Xmult j_family config.Xmult | 4 | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.config.type j_family config.type | fourOfAKind | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.unlockCondition.type j_family unlockCondition.type | win_no_hand | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.unlockCondition.extra j_family unlockCondition.extra | fourOfAKind | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.enhancementGate j_family enhancementGate | null | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.requiredPoolFlag j_family requiredPoolFlag | null | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.excludedPoolFlag j_family excludedPoolFlag | null | references/source/game.lua:508 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.poolWeight j_family poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_family.rule.0 j_family 触发规则 0 | {"trigger":"joker","condition":["handContains","fourOfAKind"],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:508 | 高：固定参考版本源码；独立声明式规格
joker.j_family.baseSellValue j_family 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:508 | 高：基础价格无版次/折扣时推导
joker.j_order.order j_order order | 134 | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.cost j_order cost | 8 | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.rarity j_order rarity | 3 | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.blueprint_compat j_order blueprint_compat | true | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.perishable_compat j_order perishable_compat | true | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.eternal_compat j_order eternal_compat | true | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.unlocked j_order unlocked | false | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.config.Xmult j_order config.Xmult | 3 | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.config.type j_order config.type | straight | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.unlockCondition.type j_order unlockCondition.type | win_no_hand | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.unlockCondition.extra j_order unlockCondition.extra | straight | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.enhancementGate j_order enhancementGate | null | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.requiredPoolFlag j_order requiredPoolFlag | null | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.excludedPoolFlag j_order excludedPoolFlag | null | references/source/game.lua:509 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.poolWeight j_order poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_order.rule.0 j_order 触发规则 0 | {"trigger":"joker","condition":["handContains","straight"],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:509 | 高：固定参考版本源码；独立声明式规格
joker.j_order.baseSellValue j_order 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:509 | 高：基础价格无版次/折扣时推导
joker.j_tribe.order j_tribe order | 135 | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.cost j_tribe cost | 8 | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.rarity j_tribe rarity | 3 | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.blueprint_compat j_tribe blueprint_compat | true | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.perishable_compat j_tribe perishable_compat | true | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.eternal_compat j_tribe eternal_compat | true | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.unlocked j_tribe unlocked | false | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.config.Xmult j_tribe config.Xmult | 2 | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.config.type j_tribe config.type | flush | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.unlockCondition.type j_tribe unlockCondition.type | win_no_hand | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.unlockCondition.extra j_tribe unlockCondition.extra | flush | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.enhancementGate j_tribe enhancementGate | null | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.requiredPoolFlag j_tribe requiredPoolFlag | null | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.excludedPoolFlag j_tribe excludedPoolFlag | null | references/source/game.lua:510 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.poolWeight j_tribe poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_tribe.rule.0 j_tribe 触发规则 0 | {"trigger":"joker","condition":["handContains","flush"],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:510 | 高：固定参考版本源码；独立声明式规格
joker.j_tribe.baseSellValue j_tribe 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:510 | 高：基础价格无版次/折扣时推导
joker.j_stuntman.order j_stuntman order | 136 | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.cost j_stuntman cost | 7 | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.rarity j_stuntman rarity | 3 | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.blueprint_compat j_stuntman blueprint_compat | true | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.perishable_compat j_stuntman perishable_compat | true | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.eternal_compat j_stuntman eternal_compat | true | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.unlocked j_stuntman unlocked | false | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.config.extra.h_size j_stuntman config.extra.h_size | 2 | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.config.extra.chip_mod j_stuntman config.extra.chip_mod | 250 | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.unlockCondition.type j_stuntman unlockCondition.type | chip_score | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.unlockCondition.chips j_stuntman unlockCondition.chips | 100000000 | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.enhancementGate j_stuntman enhancementGate | null | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.requiredPoolFlag j_stuntman requiredPoolFlag | null | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.excludedPoolFlag j_stuntman excludedPoolFlag | null | references/source/game.lua:512 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.poolWeight j_stuntman poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_stuntman.rule.0 j_stuntman 触发规则 0 | {"trigger":"joker","condition":true,"actions":[{"op":"emit","kind":"chips","value":"$state.extra.chip_mod"}],"copyable":true} | references/source/card.lua:3713; references/source/game.lua:512 | 高：固定参考版本源码；独立声明式规格
joker.j_stuntman.rule.1 j_stuntman 触发规则 1 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":["neg","$state.extra.h_size"],"target":"handSize"}],"copyable":false} | references/source/card.lua:627; references/source/game.lua:512 | 高：固定参考版本源码；独立声明式规格
joker.j_stuntman.baseSellValue j_stuntman 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:512 | 高：基础价格无版次/折扣时推导
joker.j_invisible.order j_invisible order | 137 | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.cost j_invisible cost | 8 | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.rarity j_invisible rarity | 3 | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.blueprint_compat j_invisible blueprint_compat | false | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.perishable_compat j_invisible perishable_compat | true | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.eternal_compat j_invisible eternal_compat | false | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.unlocked j_invisible unlocked | false | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.config.extra j_invisible config.extra | 2 | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.unlockCondition.type j_invisible unlockCondition.type | win_custom | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.enhancementGate j_invisible enhancementGate | null | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.requiredPoolFlag j_invisible requiredPoolFlag | null | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.excludedPoolFlag j_invisible excludedPoolFlag | null | references/source/game.lua:513 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.poolWeight j_invisible poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_invisible.rule.0 j_invisible 触发规则 0 | {"trigger":"roundEnd","condition":true,"actions":[{"op":"add","target":"state.rounds","value":1}],"copyable":false} | references/source/card.lua:2934; references/source/game.lua:513 | 高：固定参考版本源码；独立声明式规格
joker.j_invisible.rule.1 j_invisible 触发规则 1 | {"trigger":"sellSelf","condition":["and",["gte","$state.rounds","$state.extra"],["lte","$ctx.jokerCount","$ctx.run.jokerSlots"]],"actions":[{"op":"duplicate","who":"randomJoker","key":"invisible","stripNegative":true,"resetAge":true}],"copyable":false} | references/source/card.lua:2371; references/source/game.lua:513 | 高：固定参考版本源码；独立声明式规格
joker.j_invisible.baseSellValue j_invisible 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:513 | 高：基础价格无版次/折扣时推导
joker.j_brainstorm.order j_brainstorm order | 138 | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.cost j_brainstorm cost | 10 | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.rarity j_brainstorm rarity | 3 | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.blueprint_compat j_brainstorm blueprint_compat | true | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.perishable_compat j_brainstorm perishable_compat | true | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.eternal_compat j_brainstorm eternal_compat | true | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.unlocked j_brainstorm unlocked | false | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.unlockCondition.type j_brainstorm unlockCondition.type | discard_custom | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.enhancementGate j_brainstorm enhancementGate | null | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.requiredPoolFlag j_brainstorm requiredPoolFlag | null | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.excludedPoolFlag j_brainstorm excludedPoolFlag | null | references/source/game.lua:514 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.poolWeight j_brainstorm poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_brainstorm.rule.0 j_brainstorm 触发规则 0 | {"trigger":"*","condition":true,"actions":[{"op":"copy","who":"first"}],"copyable":true} | references/source/card.lua:2321; references/source/game.lua:514 | 高：固定参考版本源码；独立声明式规格
joker.j_brainstorm.baseSellValue j_brainstorm 基础卖价 | 5 | references/source/card.lua:382; references/source/game.lua:514 | 高：基础价格无版次/折扣时推导
joker.j_satellite.order j_satellite order | 139 | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.cost j_satellite cost | 6 | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.rarity j_satellite rarity | 2 | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.blueprint_compat j_satellite blueprint_compat | false | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.perishable_compat j_satellite perishable_compat | true | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.eternal_compat j_satellite eternal_compat | true | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.unlocked j_satellite unlocked | false | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.config.extra j_satellite config.extra | 1 | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.unlockCondition.type j_satellite unlockCondition.type | money | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.unlockCondition.extra j_satellite unlockCondition.extra | 400 | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.enhancementGate j_satellite enhancementGate | null | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.requiredPoolFlag j_satellite requiredPoolFlag | null | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.excludedPoolFlag j_satellite excludedPoolFlag | null | references/source/game.lua:515 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.poolWeight j_satellite poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_satellite.rule.0 j_satellite 触发规则 0 | {"trigger":"payout","condition":["gt","$ctx.run.distinctPlanetsUsed",0],"actions":[{"op":"emit","kind":"money","value":["mul","$state.extra","$ctx.run.distinctPlanetsUsed"]}],"copyable":false} | references/source/card.lua:1667; references/source/game.lua:515 | 高：固定参考版本源码；独立声明式规格
joker.j_satellite.baseSellValue j_satellite 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:515 | 高：基础价格无版次/折扣时推导
joker.j_shoot_the_moon.order j_shoot_the_moon order | 140 | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.cost j_shoot_the_moon cost | 5 | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.rarity j_shoot_the_moon rarity | 1 | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.blueprint_compat j_shoot_the_moon blueprint_compat | true | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.perishable_compat j_shoot_the_moon perishable_compat | true | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.eternal_compat j_shoot_the_moon eternal_compat | true | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.unlocked j_shoot_the_moon unlocked | false | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.config.extra j_shoot_the_moon config.extra | 13 | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.unlockCondition.type j_shoot_the_moon unlockCondition.type | play_all_hearts | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.enhancementGate j_shoot_the_moon enhancementGate | null | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.requiredPoolFlag j_shoot_the_moon requiredPoolFlag | null | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.excludedPoolFlag j_shoot_the_moon excludedPoolFlag | null | references/source/game.lua:516 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.poolWeight j_shoot_the_moon poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_shoot_the_moon.rule.0 j_shoot_the_moon 触发规则 0 | {"trigger":"held","condition":["rankIn",[12]],"actions":[{"op":"emit","kind":"mult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3280; references/source/game.lua:516 | 高：固定参考版本源码；独立声明式规格
joker.j_shoot_the_moon.baseSellValue j_shoot_the_moon 基础卖价 | 2 | references/source/card.lua:382; references/source/game.lua:516 | 高：基础价格无版次/折扣时推导
joker.j_drivers_license.order j_drivers_license order | 141 | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.cost j_drivers_license cost | 7 | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.rarity j_drivers_license rarity | 3 | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.blueprint_compat j_drivers_license blueprint_compat | true | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.perishable_compat j_drivers_license perishable_compat | true | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.eternal_compat j_drivers_license eternal_compat | true | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.unlocked j_drivers_license unlocked | false | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.config.extra j_drivers_license config.extra | 3 | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.unlockCondition.type j_drivers_license unlockCondition.type | modify_deck | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.unlockCondition.extra.count j_drivers_license unlockCondition.extra.count | 16 | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.unlockCondition.extra.tally j_drivers_license unlockCondition.extra.tally | total | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.enhancementGate j_drivers_license enhancementGate | null | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.requiredPoolFlag j_drivers_license requiredPoolFlag | null | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.excludedPoolFlag j_drivers_license excludedPoolFlag | null | references/source/game.lua:517 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.poolWeight j_drivers_license poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_drivers_license.rule.0 j_drivers_license 触发规则 0 | {"trigger":"joker","condition":["gte","$ctx.deckEnhancedCount",16],"actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3943; references/source/game.lua:517 | 高：固定参考版本源码；独立声明式规格
joker.j_drivers_license.baseSellValue j_drivers_license 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:517 | 高：基础价格无版次/折扣时推导
joker.j_cartomancer.order j_cartomancer order | 142 | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.cost j_cartomancer cost | 6 | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.rarity j_cartomancer rarity | 2 | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.blueprint_compat j_cartomancer blueprint_compat | true | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.perishable_compat j_cartomancer perishable_compat | true | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.eternal_compat j_cartomancer eternal_compat | true | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.unlocked j_cartomancer unlocked | false | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.unlockCondition.type j_cartomancer unlockCondition.type | discover_amount | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.unlockCondition.tarot_count j_cartomancer unlockCondition.tarot_count | 22 | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.enhancementGate j_cartomancer enhancementGate | null | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.requiredPoolFlag j_cartomancer requiredPoolFlag | null | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.excludedPoolFlag j_cartomancer excludedPoolFlag | null | references/source/game.lua:518 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.poolWeight j_cartomancer poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_cartomancer.rule.0 j_cartomancer 触发规则 0 | {"trigger":"blindSet","condition":"$ctx.hasConsumableRoom","actions":[{"op":"spawn","set":"tarot","count":1}],"copyable":true} | references/source/card.lua:2545; references/source/game.lua:518 | 高：固定参考版本源码；独立声明式规格
joker.j_cartomancer.baseSellValue j_cartomancer 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:518 | 高：基础价格无版次/折扣时推导
joker.j_astronomer.order j_astronomer order | 143 | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.cost j_astronomer cost | 8 | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.rarity j_astronomer rarity | 2 | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.blueprint_compat j_astronomer blueprint_compat | false | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.perishable_compat j_astronomer perishable_compat | true | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.eternal_compat j_astronomer eternal_compat | true | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.unlocked j_astronomer unlocked | false | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.unlockCondition.type j_astronomer unlockCondition.type | discover_amount | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.unlockCondition.planet_count j_astronomer unlockCondition.planet_count | 12 | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.enhancementGate j_astronomer enhancementGate | null | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.requiredPoolFlag j_astronomer requiredPoolFlag | null | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.excludedPoolFlag j_astronomer excludedPoolFlag | null | references/source/game.lua:519 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.poolWeight j_astronomer poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_astronomer.rule.0 j_astronomer 触发规则 0 | {"trigger":"passive","condition":true,"actions":[{"op":"emit","kind":"rule","value":1,"target":"freePlanets"}],"copyable":false} | references/source/card.lua:381; references/source/card.lua:616; references/source/game.lua:519 | 高：固定参考版本源码；独立声明式规格
joker.j_astronomer.baseSellValue j_astronomer 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:519 | 高：基础价格无版次/折扣时推导
joker.j_burnt.order j_burnt order | 144 | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.cost j_burnt cost | 8 | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.rarity j_burnt rarity | 3 | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.blueprint_compat j_burnt blueprint_compat | true | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.perishable_compat j_burnt perishable_compat | true | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.eternal_compat j_burnt eternal_compat | true | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.unlocked j_burnt unlocked | false | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.config.h_size j_burnt config.h_size | 0 | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.config.extra j_burnt config.extra | 4 | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.unlockCondition.type j_burnt unlockCondition.type | c_cards_sold | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.unlockCondition.extra j_burnt unlockCondition.extra | 50 | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.enhancementGate j_burnt enhancementGate | null | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.requiredPoolFlag j_burnt requiredPoolFlag | null | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.excludedPoolFlag j_burnt excludedPoolFlag | null | references/source/game.lua:520 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.poolWeight j_burnt poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_burnt.rule.0 j_burnt 触发规则 0 | {"trigger":"preDiscard","condition":["and",["lte","$ctx.round.discardsUsed",0],["not","$ctx.forcedDiscard"]],"actions":[{"op":"level","hand":"$ctx.handType","amount":1}],"copyable":true} | references/source/card.lua:2770; references/source/game.lua:520 | 高：固定参考版本源码；独立声明式规格
joker.j_burnt.baseSellValue j_burnt 基础卖价 | 4 | references/source/card.lua:382; references/source/game.lua:520 | 高：基础价格无版次/折扣时推导
joker.j_bootstraps.order j_bootstraps order | 145 | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.cost j_bootstraps cost | 7 | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.rarity j_bootstraps rarity | 2 | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.blueprint_compat j_bootstraps blueprint_compat | true | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.perishable_compat j_bootstraps perishable_compat | true | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.eternal_compat j_bootstraps eternal_compat | true | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.unlocked j_bootstraps unlocked | false | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.config.extra.mult j_bootstraps config.extra.mult | 2 | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.config.extra.dollars j_bootstraps config.extra.dollars | 5 | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.unlockCondition.type j_bootstraps unlockCondition.type | modify_jokers | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.unlockCondition.extra.polychrome j_bootstraps unlockCondition.extra.polychrome | true | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.unlockCondition.extra.count j_bootstraps unlockCondition.extra.count | 2 | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.enhancementGate j_bootstraps enhancementGate | null | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.requiredPoolFlag j_bootstraps requiredPoolFlag | null | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.excludedPoolFlag j_bootstraps excludedPoolFlag | null | references/source/game.lua:521 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.poolWeight j_bootstraps poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_bootstraps.rule.0 j_bootstraps 触发规则 0 | {"trigger":"joker","condition":["gte","$ctx.moneyWithBuffer","$state.extra.dollars"],"actions":[{"op":"emit","kind":"mult","value":["mul","$state.extra.mult",["floor",["div","$ctx.moneyWithBuffer","$state.extra.dollars"]]]}],"copyable":true} | references/source/card.lua:4046; references/source/game.lua:521 | 高：固定参考版本源码；独立声明式规格
joker.j_bootstraps.baseSellValue j_bootstraps 基础卖价 | 3 | references/source/card.lua:382; references/source/game.lua:521 | 高：基础价格无版次/折扣时推导
joker.j_caino.order j_caino order | 146 | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.cost j_caino cost | 20 | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.rarity j_caino rarity | 4 | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.blueprint_compat j_caino blueprint_compat | true | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.perishable_compat j_caino perishable_compat | true | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.eternal_compat j_caino eternal_compat | true | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.unlocked j_caino unlocked | false | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.config.extra j_caino config.extra | 1 | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.unlockCondition.type j_caino unlockCondition.type |  | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.unlockCondition.extra j_caino unlockCondition.extra |  | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.unlockCondition.hidden j_caino unlockCondition.hidden | true | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.enhancementGate j_caino enhancementGate | null | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.requiredPoolFlag j_caino requiredPoolFlag | null | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.excludedPoolFlag j_caino excludedPoolFlag | null | references/source/game.lua:522 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.poolWeight j_caino poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_caino.rule.0 j_caino 触发规则 0 | {"trigger":["cardsDestroyed","cardsRemoved"],"condition":["gt","$ctx.removedFaceCount",0],"actions":[{"op":"add","target":"state.xmult","value":["mul","$state.extra","$ctx.removedFaceCount"]}],"copyable":false} | references/source/card.lua:2673; references/source/game.lua:522 | 高：固定参考版本源码；独立声明式规格
joker.j_caino.rule.1 j_caino 触发规则 1 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:4052; references/source/game.lua:522 | 高：固定参考版本源码；独立声明式规格
joker.j_caino.baseSellValue j_caino 基础卖价 | 10 | references/source/card.lua:382; references/source/game.lua:522 | 高：基础价格无版次/折扣时推导
joker.j_triboulet.order j_triboulet order | 147 | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.cost j_triboulet cost | 20 | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.rarity j_triboulet rarity | 4 | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.blueprint_compat j_triboulet blueprint_compat | true | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.perishable_compat j_triboulet perishable_compat | true | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.eternal_compat j_triboulet eternal_compat | true | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.unlocked j_triboulet unlocked | false | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.config.extra j_triboulet config.extra | 2 | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.unlockCondition.type j_triboulet unlockCondition.type |  | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.unlockCondition.extra j_triboulet unlockCondition.extra |  | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.unlockCondition.hidden j_triboulet unlockCondition.hidden | true | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.enhancementGate j_triboulet enhancementGate | null | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.requiredPoolFlag j_triboulet requiredPoolFlag | null | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.excludedPoolFlag j_triboulet excludedPoolFlag | null | references/source/game.lua:523 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.poolWeight j_triboulet poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_triboulet.rule.0 j_triboulet 触发规则 0 | {"trigger":"card","condition":["rankIn",[12,13]],"actions":[{"op":"emit","kind":"xmult","value":"$state.extra"}],"copyable":true} | references/source/card.lua:3262; references/source/game.lua:523 | 高：固定参考版本源码；独立声明式规格
joker.j_triboulet.baseSellValue j_triboulet 基础卖价 | 10 | references/source/card.lua:382; references/source/game.lua:523 | 高：基础价格无版次/折扣时推导
joker.j_yorick.order j_yorick order | 148 | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.cost j_yorick cost | 20 | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.rarity j_yorick rarity | 4 | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.blueprint_compat j_yorick blueprint_compat | true | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.perishable_compat j_yorick perishable_compat | true | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.eternal_compat j_yorick eternal_compat | true | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.unlocked j_yorick unlocked | false | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.config.extra.xmult j_yorick config.extra.xmult | 1 | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.config.extra.discards j_yorick config.extra.discards | 23 | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.unlockCondition.type j_yorick unlockCondition.type |  | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.unlockCondition.extra j_yorick unlockCondition.extra |  | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.unlockCondition.hidden j_yorick unlockCondition.hidden | true | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.enhancementGate j_yorick enhancementGate | null | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.requiredPoolFlag j_yorick requiredPoolFlag | null | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.excludedPoolFlag j_yorick excludedPoolFlag | null | references/source/game.lua:524 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.poolWeight j_yorick poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_yorick.rule.0 j_yorick 触发规则 0 | {"trigger":"discard","condition":true,"actions":[{"op":"countdown","target":"state.remaining","reset":"$state.extra.discards","gain":{"target":"state.xmult","amount":"$state.extra.xmult"}}],"copyable":false} | references/source/card.lua:2788; references/source/game.lua:524 | 高：固定参考版本源码；独立声明式规格
joker.j_yorick.rule.1 j_yorick 触发规则 1 | {"trigger":"joker","condition":["gt","$state.xmult",1],"actions":[{"op":"emit","kind":"xmult","value":"$state.xmult"}],"copyable":true} | references/source/card.lua:3653–3659; references/source/game.lua:524 | 高：固定参考版本源码；独立声明式规格
joker.j_yorick.baseSellValue j_yorick 基础卖价 | 10 | references/source/card.lua:382; references/source/game.lua:524 | 高：基础价格无版次/折扣时推导
joker.j_chicot.order j_chicot order | 149 | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.cost j_chicot cost | 20 | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.rarity j_chicot rarity | 4 | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.blueprint_compat j_chicot blueprint_compat | false | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.perishable_compat j_chicot perishable_compat | true | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.eternal_compat j_chicot eternal_compat | true | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.unlocked j_chicot unlocked | false | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.unlockCondition.type j_chicot unlockCondition.type |  | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.unlockCondition.extra j_chicot unlockCondition.extra |  | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.unlockCondition.hidden j_chicot unlockCondition.hidden | true | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.enhancementGate j_chicot enhancementGate | null | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.requiredPoolFlag j_chicot requiredPoolFlag | null | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.excludedPoolFlag j_chicot excludedPoolFlag | null | references/source/game.lua:525 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.poolWeight j_chicot poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_chicot.rule.0 j_chicot 触发规则 0 | {"trigger":["blindSet","equip"],"condition":"$ctx.blind.boss","actions":[{"op":"emit","kind":"disableBoss","value":1}],"copyable":false} | references/source/card.lua:2492; references/source/game.lua:525 | 高：固定参考版本源码；独立声明式规格
joker.j_chicot.baseSellValue j_chicot 基础卖价 | 10 | references/source/card.lua:382; references/source/game.lua:525 | 高：基础价格无版次/折扣时推导
joker.j_perkeo.order j_perkeo order | 150 | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.cost j_perkeo cost | 20 | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.rarity j_perkeo rarity | 4 | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.blueprint_compat j_perkeo blueprint_compat | true | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.perishable_compat j_perkeo perishable_compat | true | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.eternal_compat j_perkeo eternal_compat | true | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.unlocked j_perkeo unlocked | false | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.unlockCondition.type j_perkeo unlockCondition.type |  | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.unlockCondition.extra j_perkeo unlockCondition.extra |  | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.unlockCondition.hidden j_perkeo unlockCondition.hidden | true | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.enhancementGate j_perkeo enhancementGate | null | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.requiredPoolFlag j_perkeo requiredPoolFlag | null | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.excludedPoolFlag j_perkeo excludedPoolFlag | null | references/source/game.lua:526 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.poolWeight j_perkeo poolWeight | 1 | references/source/functions/common_events.lua:2113–2119 | 高：固定参考版本源码；待游戏内导出交叉验证
joker.j_perkeo.rule.0 j_perkeo 触发规则 0 | {"trigger":"shopEnd","condition":["gt","$ctx.consumables.length",0],"actions":[{"op":"duplicate","who":"randomConsumable","key":"perkeo","edition":"negative"}],"copyable":true} | references/source/card.lua:2413; references/source/game.lua:526 | 高：固定参考版本源码；独立声明式规格
joker.j_perkeo.baseSellValue j_perkeo 基础卖价 | 10 | references/source/card.lua:382; references/source/game.lua:526 | 高：基础价格无版次/折扣时推导
joker.count 参考版本计策总数 | 150 | references/source/game.lua:368–526 | 高：实数条目
joker.initial-state 共用初始状态 | {"mult":0,"xmult":1,"extraValue":0,"rounds":0,"createdAtHands":"当前整局已完成出牌次数"} | references/source/card.lua:283–299; references/source/card.lua:308; references/source/card.lua:337 | 高：源码初始状态
joker.rarity-weight 非传奇生成时的稀有度区间 | {"common":0.7,"uncommon":0.25,"rare":0.05,"legendary":0} | references/source/functions/common_events.lua:1969–1970 | 高：源码区间
joker.source-version 参考版本 | 1.0.1o-FULL | references/source/globals.lua:1–2 | 高：源码版本标记
joker.round-targets 每回合指定点数/花色的抽样规则 | {"excludeEnhancement":"stone","suits":["spades","hearts","clubs","diamonds"],"idol":{"streamPrefix":"idol","fallbackSuit":"spades","fallbackDisplayRank":14},"mail":{"streamPrefix":"mail","fallbackDisplayRank":14},"ancient":{"streamPrefix":"anc","excludePrevious":true},"castle":{"streamPrefix":"cas","fallbackSuit":"spades"},"timing":["runInitialize","roundEnd"]} | references/source/functions/common_events.lua:2271–2324; references/source/game.lua:2385–2389; references/source/functions/state_events.lua:273–276 | 高：源码；牌池按整副非石质牌张数抽样
joker.misprint-oracle 随机整数的本地LuaJIT差分金标准 | {"seed":"MISPRINT","stream":"misprint","min":0,"max":23,"values":[9,19,5,3,14]} | references/source/functions/misc_functions.lua:280–321; references/source/card.lua:3727–3734; 本地固定LuaJIT原函数调用输出 | 高：独立运行源码；五个连续样本，仅证明固定运行时路径
run.bossRerollCost 选择关卡时更换守关者的费用 | 10 | references/source/functions/button_callbacks.lua:2784-2803 | 高（固定参考源码，未游戏内核验）
run.bossRerollAllowance 改航凭单次数约束 | 普通改航每个 Ante 一次；升级改航不限次数；每次花费须满足 bankruptAt | references/source/functions/button_callbacks.lua:2784-2803 | 高（固定参考源码，未游戏内核验）
run.blindTagCache 跳过奖励在底注开始时为前两关预先生成 | Small / Big 各缓存一个标签，查看选择界面不会重新抽取 | references/source/game.lua:2179-2180 | 高（固定参考源码）
run.orbitalHandCache 星轨标签的升级目标抽取 | 从全部已可见牌型中等候选抽一个；按 ante 和 blind 类型缓存 | references/source/functions/UI_definitions.lua:1506-1517 | 高（固定参考源码）
run.startingDeckSize 局内固定起始牌数 | 完成起始牌组变换后的 playing_cards 数量，后续增删不改变此基数 | references/source/game.lua:2375 | 高（固定参考源码）
run.endlessContinuation 达到获胜底注后可继续同一局 | 胜利面板可继续；恢复本局正常结算和商店，随后推进下一底注 | references/source/functions/UI_definitions.lua:2784-2786; references/source/functions/state_events.lua:111-112,156-170 | 高（固定参考源码，尚无游戏内轨迹）
run.winNotificationOnce 首次达到目标后的胜利通知只显示一次 | 目标底注 Boss 过关且尚未通知时显示；继续后不重复 | references/source/functions/state_events.lua:111-112,156-170 | 高（固定参考源码）
hand.flushFive 牌型基础分与每级增量：Flush Five | {"order":1,"mult":16,"chips":160,"level":1,"l_mult":3,"l_chips":50,"handType":"flushFive","hidden":true} | references/source/game.lua:2002 | 高（参考源码；未游戏内差分）
hand.flushHouse 牌型基础分与每级增量：Flush House | {"order":2,"mult":14,"chips":140,"level":1,"l_mult":4,"l_chips":40,"handType":"flushHouse","hidden":true} | references/source/game.lua:2003 | 高（参考源码；未游戏内差分）
hand.fiveOfAKind 牌型基础分与每级增量：Five of a Kind | {"order":3,"mult":12,"chips":120,"level":1,"l_mult":3,"l_chips":35,"handType":"fiveOfAKind","hidden":true} | references/source/game.lua:2004 | 高（参考源码；未游戏内差分）
hand.straightFlush 牌型基础分与每级增量：Straight Flush | {"order":4,"mult":8,"chips":100,"level":1,"l_mult":4,"l_chips":40,"handType":"straightFlush","hidden":false} | references/source/game.lua:2005 | 高（参考源码；未游戏内差分）
hand.fourOfAKind 牌型基础分与每级增量：Four of a Kind | {"order":5,"mult":7,"chips":60,"level":1,"l_mult":3,"l_chips":30,"handType":"fourOfAKind","hidden":false} | references/source/game.lua:2006 | 高（参考源码；未游戏内差分）
hand.fullHouse 牌型基础分与每级增量：Full House | {"order":6,"mult":4,"chips":40,"level":1,"l_mult":2,"l_chips":25,"handType":"fullHouse","hidden":false} | references/source/game.lua:2007 | 高（参考源码；未游戏内差分）
hand.flush 牌型基础分与每级增量：Flush | {"order":7,"mult":4,"chips":35,"level":1,"l_mult":2,"l_chips":15,"handType":"flush","hidden":false} | references/source/game.lua:2008 | 高（参考源码；未游戏内差分）
hand.straight 牌型基础分与每级增量：Straight | {"order":8,"mult":4,"chips":30,"level":1,"l_mult":3,"l_chips":30,"handType":"straight","hidden":false} | references/source/game.lua:2009 | 高（参考源码；未游戏内差分）
hand.threeOfAKind 牌型基础分与每级增量：Three of a Kind | {"order":9,"mult":3,"chips":30,"level":1,"l_mult":2,"l_chips":20,"handType":"threeOfAKind","hidden":false} | references/source/game.lua:2010 | 高（参考源码；未游戏内差分）
hand.twoPair 牌型基础分与每级增量：Two Pair | {"order":10,"mult":2,"chips":20,"level":1,"l_mult":1,"l_chips":20,"handType":"twoPair","hidden":false} | references/source/game.lua:2011 | 高（参考源码；未游戏内差分）
hand.pair 牌型基础分与每级增量：Pair | {"order":11,"mult":2,"chips":10,"level":1,"l_mult":1,"l_chips":15,"handType":"pair","hidden":false} | references/source/game.lua:2012 | 高（参考源码；未游戏内差分）
hand.highCard 牌型基础分与每级增量：High Card | {"order":12,"mult":1,"chips":5,"level":1,"l_mult":1,"l_chips":10,"handType":"highCard","hidden":false} | references/source/game.lua:2013 | 高（参考源码；未游戏内差分）
hand.levelFormula 牌型升级公式 | {"level":"max(0, level + amount)","chips":"max(0, s_chips + l_chips × (level − 1))","mult":"max(1, s_mult + l_mult × (level − 1))"} | references/source/functions/common_events.lua:464-468 | 高（参考源码；未游戏内差分）
rank.chips 扑克点数筹码 | {"14":11,"2..10":"rank","11..13":10} | references/source/card.lua:122-134 | 高（参考源码；未游戏内差分）
rank.highTie 高牌相同点数按内部 nominal 区分 | {"faceOffsets":{"11":0.1,"12":0.2,"13":0.3,"14":0.4},"suits":{"diamonds":0.01,"clubs":0.02,"hearts":0.03,"spades":0.04}} | references/source/card.lua:131-141; references/source/card.lua:950-954 | 高（参考源码；未游戏内差分）
poker.priority 牌型强弱优先级 | ["flushFive","flushHouse","fiveOfAKind","straightFlush","fourOfAKind","fullHouse","flush","straight","threeOfAKind","twoPair","pair","highCard"] | references/source/functions/state_events.lua:544-555 | 高（参考源码；未游戏内差分）
poker.hidden 三种隐藏牌型条件 | {"flushFive":"5 cards same rank + flush","flushHouse":"3 cards same rank and 2 cards another rank + flush","fiveOfAKind":"5 cards same rank"} | references/source/functions/misc_functions.lua:404-425 | 高（参考源码；未游戏内差分）
poker.subTypes 高重数牌型也被 pair/three/four 小丑识别 | {"fiveOfAKind":["fourOfAKind","threeOfAKind","pair"],"fourOfAKind":["threeOfAKind","pair"],"threeOfAKind":["pair"],"fullHouse":["twoPair"]} | references/source/functions/misc_functions.lua:479-517 | 高（参考源码；未游戏内差分）
poker.fourFingers 四张顺子/同花门槛 | 4 | references/source/functions/misc_functions.lua:524-551 | 高（参考源码；未游戏内差分）
poker.shortcut 顺子允许间隔 | 连续存在的两个点数之间最多缺1个点数；不允许首尾绕回 | references/source/functions/misc_functions.lua:565-585 | 高（参考源码；未游戏内差分）
poker.straightFlushUnion 四指顺子同花组合 | 顺子与同花各自满足门槛即可，计分集合为二者并集 | references/source/functions/misc_functions.lua:428-442 | 高（参考源码；未游戏内差分）
poker.stone 石头牌牌型与计分 | 不参与点数/花色配对；无条件加入计分牌集合 | references/source/card.lua:957-962; references/source/card.lua:4064-4068; references/source/functions/state_events.lua:580-600 | 高（参考源码；未游戏内差分）
poker.wild 万能花色与减益 | 未减益万能牌可代表任意花色；减益后只保留底牌花色供牌型识别 | references/source/card.lua:4064-4087 | 高（参考源码；未游戏内差分）
poker.smeared 红黑颜色合并 | hearts与diamonds合并；clubs与spades合并 | references/source/card.lua:4072-4085 | 高（参考源码；未游戏内差分）
card.bonus 增强或版本数值：bonus | {"chips":30} | references/source/game.lua:648 | 高（参考源码；未游戏内差分）
card.mult 增强或版本数值：mult | {"mult":4} | references/source/game.lua:649 | 高（参考源码；未游戏内差分）
card.glass 增强或版本数值：glass | {"xmult":2,"breakDenominator":4} | references/source/game.lua:651 | 高（参考源码；未游戏内差分）
card.steel 增强或版本数值：steel | {"heldXmult":1.5} | references/source/game.lua:652 | 高（参考源码；未游戏内差分）
card.stone 增强或版本数值：stone | {"chips":50} | references/source/game.lua:653 | 高（参考源码；未游戏内差分）
card.gold 增强或版本数值：gold | {"roundEndMoney":3} | references/source/game.lua:654 | 高（参考源码；未游戏内差分）
card.lucky 增强或版本数值：lucky | {"mult":20,"money":20} | references/source/game.lua:655 | 高（参考源码；未游戏内差分）
card.foil 增强或版本数值：foil | {"chips":50} | references/source/game.lua:659 | 高（参考源码；未游戏内差分）
card.holo 增强或版本数值：holo | {"mult":10} | references/source/game.lua:660 | 高（参考源码；未游戏内差分）
card.polychrome 增强或版本数值：polychrome | {"xmult":1.5} | references/source/game.lua:661 | 高（参考源码；未游戏内差分）
card.luckyMultProbability 幸运+倍率概率 | normal / 5 | references/source/card.lua:984-995 | 高（参考源码；未游戏内差分）
card.luckyMoneyProbability 幸运金钱概率 | normal / 15 | references/source/card.lua:1068-1083 | 高（参考源码；未游戏内差分）
card.goldSeal 金封金钱 | 3 | references/source/card.lua:1071-1073 | 高（参考源码；未游戏内差分）
card.redSeal 红封额外触发次数 | 1 | references/source/card.lua:2242-2249 | 高（参考源码；未游戏内差分）
card.heldSealGate 手牌红封重复门槛 | 该手牌必须有至少一个手中效果；钢铁或者小丑产生手中效果 | references/source/functions/state_events.lua:798-829 | 高（参考源码；未游戏内差分）
card.debuff 减益牌计分 | 计分仍保留牌型，但出牌卡筹码/增强/版本/小丑逐卡触发均不执行 | references/source/functions/state_events.lua:650-665; references/source/card.lua:976-1017 | 高（参考源码；未游戏内差分）
scoring.pipeline 计分阶段顺序 | ["before","blindModify","playedCards","heldCards","jokerMain","destroyCards","finalize","after"] | references/source/functions/state_events.lua:628-641,648,784,877,950,1049,1068 | 高（参考源码；未游戏内差分）
scoring.cardOrder 出牌与每卡效果顺序 | 计分卡按左到右；每次先卡 chips→mult→money→xmult→edition，再逐小丑由左到右执行 individual | references/source/functions/state_events.lua:600; references/source/functions/state_events.lua:692-777 | 高（参考源码；未游戏内差分）
scoring.retrigger 出牌重触发队列 | 原触发一次 + 红封 + 每个小丑声明的重复次数；每次重跑卡与小丑individual | references/source/functions/state_events.lua:666-698 | 高（参考源码；未游戏内差分）
scoring.jokerEdition 小丑版本触发位置 | foil/holo在main前；otherJoker在main后；polychrome在otherJoker后 | references/source/functions/state_events.lua:880-940 | 高（参考源码；未游戏内差分）
scoring.final 最后计分公式 | floor(chips × mult)；after阶段发生在最终分数加入之后 | references/source/functions/state_events.lua:1049; references/source/functions/state_events.lua:1068-1070 | 高（参考源码；未游戏内差分）
scoring.chipCap 筹码金钱上限规则 | min(chips, max(dollars,0))；每次mod_chips时执行 | references/source/functions/misc_functions.lua:684-688 | 高（参考源码；未游戏内差分）
rng.pseudohash seed哈希公式 | {"initial":1,"iteration":"h = ((1.1239285023 / h) × byte(str,i) × π + π × i) mod 1; i从UTF-8字节末尾到开头"} | references/source/functions/misc_functions.lua:279-285 | 高（参考源码；未游戏内差分）
rng.keyState 独立key伪随机状态公式 | {"initial":"pseudohash(key + seed)","advance":"abs(round13((2.134453429141 + state × 1.72431234) mod 1))","seed":"(state + pseudohash(seed)) / 2"} | references/source/functions/misc_functions.lua:298-312 | 高（参考源码；未游戏内差分）
rng.luaJit 每次随机数生成 | 将pseudoseed结果传给LuaJIT math.randomseed；然后math.random() 或math.random(min,max) | references/source/functions/misc_functions.lua:315-320 | 高（参考源码；未游戏内差分）
rng.tausworthe LuaJIT TW223开源参数 | {"stateBits":64,"parameters":[[63,31,18],[58,19,28],[55,24,7],[47,21,8]],"mantissaBits":52} | references/source/luajit_lj_prng.c:35-60 | 中（开源LuaJIT v2.1；原游戏内核版本尚未核验）
rng.luaSeed LuaJIT浮点seed参数 | {"stateCount":4,"seedMultiplier":"π","seedAddend":"e","warmupSteps":10,"minimumStateBits":[1,6,9,17]} | references/source/luajit_lib_math.c:114-127 | 中（开源LuaJIT v2.1；原游戏内核版本尚未核验）
rng.shuffle 洗牌规则 | Fisher–Yates逆序；一轮洗牌只调用一次math.randomseed，后续连续抽数 | references/source/functions/misc_functions.lua:206-216 | 高（参考源码；未游戏内差分）
juice.initialHighlight 计分牌高亮等待 | 0.2 | references/source/functions/state_events.lua:601-604 | 高（参考源码；未游戏内差分）
juice.triggerPitch 触发音高进度 | {"initial":0.3,"increment":0.08} | references/source/functions/state_events.lua:607-608 | 高（参考源码；未游戏内差分）
juice.phasePause 计分阶段等待 | {"beforeCards":0.4,"beforeHeld":0.3,"scoreAnnounce":0.4,"scoreAdd":0.5,"afterScore":0.3} | references/source/functions/state_events.lua:620,782,1030,1050,1066 | 高（参考源码；未游戏内差分）
probability.normal 基础概率分子 | 1 | references/source/game.lua:1890-1891 | 高（参考源码；未游戏内差分）
scoring.plasma 均衡组终算平衡 | chips = mult = floor((chips + mult) / 2) | references/source/back.lua:128-131 | 高（参考源码；未游戏内差分）
rng.oracle.vectors 真实LuaJIT运行对照向量：vectors | [{"seed":"TRACEABLE","hash":0.8621351357196545,"keys":["shop","shop","pack","deck","pack","lucky_mult","lucky_money","glass","boss"],"values":[0.5938684394075084,0.8536718065003059,0.01835476527096902,0.3242978853181018,0.5300946517742071,0.6766648541736058,0.18480367713266488,0.5779157814003237,0.840637166200146],"shuffle":[5,4,6,1,3,10,9,7,2,8]},{"seed":"AAAAAAAA","hash":0.43257138351543745,"keys":["shop","shop","pack","deck","pack","lucky_mult","lucky_money","glass","boss"],"values":[0.4069714710849561,0.43557434130180495,0.28534682112477006,0.24172578777179,0.49435405256170717,0.28427756769681145,0.049230979681164966,0.28991879595214076,0.5863984305229646],"shuffle":[4,1,3,7,2,6,9,10,8,5]},{"seed":"HELLOWORLD","hash":0.9770937623111422,"keys":["shop","shop","pack","deck","pack","lucky_mult","lucky_money","glass","boss"],"values":[0.008527550136065098,0.19830845108364636,0.6648424269338709,0.460473995072574,0.8260002402920421,0.9271831800623871,0.3723462815159655,0.025147788379757507,0.5770913738939261],"shuffle":[9,7,1,4,8,5,6,10,2,3]},{"seed":"SEED1234","hash":0.5272275331462879,"keys":["shop","shop","pack","deck","pack","lucky_mult","lucky_money","glass","boss"],"values":[0.011646248144308036,0.7559032663482006,0.45742435920371705,0.6553539287106074,0.3600124670931768,0.17517949090875296,0.3151892539539476,0.7059395544734708,0.8313843364002373],"shuffle":[4,2,1,3,6,10,5,7,8,9]},{"seed":"中文种子","hash":0.8916183412875398,"keys":["shop","shop","pack","deck","pack","lucky_mult","lucky_money","glass","boss"],"values":[0.13748702684781988,0.6951482068582024,0.7657813228852046,0.5226067321783865,0.316044690987334,0.9749126165773387,0.045631791901441066,0.11406900072996229,0.28155707284458864],"shuffle":[2,5,6,1,3,8,10,9,4,7]}] | references/rng-oracle.json.vectors; references/source/functions/misc_functions.lua:279-320 | 高（LuaJIT 运行时已实测；未原版游戏内差分）
rng.oracle.numericSeeds 真实LuaJIT运行对照向量：numericSeeds | [{"seed":0,"random":0.794206292431241},{"seed":1,"random":0.3238105623786367},{"seed":0.5,"random":0.09657393438653461},{"seed":0.123456789,"random":0.7991842333777264},{"seed":12345,"random":0.35882823880566006}] | references/rng-oracle.json.numericSeeds; references/source/functions/misc_functions.lua:279-320 | 高（LuaJIT 运行时已实测；未原版游戏内差分）
rng.fusedSeed 本机LuaJIT种子初始化采用一次舍入融合乘加 | {"floatMode":"fused","instruction":"fmadd","separateMode":"非融合运行时应选separate；未核验原版平台"} | references/luajit/lib-math-disassembly.txt:221-230; references/source/luajit_lib_math.c:122 | 高（本机编译产物已核验；原游戏平台TBD）
deck.prototypeOrder 标准牌组初始创建顺序 | {"suits":["clubs","diamonds","hearts","spades"],"ranks":[2,3,4,5,6,7,8,9,14,11,13,12,10],"sort":"按花色字母与点数字母组合字典序；C/D/H/S × 2..9/A/J/K/Q/T"} | references/source/game.lua:2340-2357; references/source/game.lua:2367-2372 | 高（参考源码；未游戏内差分）
poker.oracle.sampleAudit 固定样本Lua原函数与独立牌型集合判定差分 | {"sampleCount":10000,"mismatchCount":0,"coverage":["1至5张","四指","捷径","涂抹","Splash","万能","石头","减益"],"checks":["最强牌型","所有包含牌型","按出牌顺序的计分牌id"]} | references/poker-oracle.lua; references/poker-oracle.json; references/poker-diff.json.cases/.mismatches | 高（真实Lua参考函数差分已执行；不是原版游戏内差分）
system.Blue.effects.0 星印：roundEnd时机的sealEffect规则 | {"trigger":"roundEnd","condition":{},"action":"sealEffect","seal":"blue","count":1} | references/source/card.lua:1033-1063; references/source/game.lua:221 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.Gold.effects.0 金印：card时机的sealEffect规则 | {"trigger":"card","condition":{},"action":"sealEffect","seal":"gold","dollars":3} | references/source/card.lua:1068-1072; references/source/game.lua:219 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.Purple.effects.0 术印：discard时机的sealEffect规则 | {"trigger":"discard","condition":{},"action":"sealEffect","seal":"purple","count":1} | references/source/card.lua:2253-2266; references/source/game.lua:222 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.Red.effects.0 回印：retrigger时机的sealEffect规则 | {"trigger":"retrigger","condition":{},"action":"sealEffect","seal":"red","repetitions":1} | references/source/card.lua:2242-2250; references/source/game.lua:220 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.anteCurves.1.0 anteCurves.1.0 | 300 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.1.1 anteCurves.1.1 | 800 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.1.2 anteCurves.1.2 | 2000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.1.3 anteCurves.1.3 | 5000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.1.4 anteCurves.1.4 | 11000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.1.5 anteCurves.1.5 | 20000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.1.6 anteCurves.1.6 | 35000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.1.7 anteCurves.1.7 | 50000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.2.0 anteCurves.2.0 | 300 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.2.1 anteCurves.2.1 | 900 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.2.2 anteCurves.2.2 | 2600 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.2.3 anteCurves.2.3 | 8000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.2.4 anteCurves.2.4 | 20000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.2.5 anteCurves.2.5 | 36000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.2.6 anteCurves.2.6 | 60000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.2.7 anteCurves.2.7 | 100000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.3.0 anteCurves.3.0 | 300 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.3.1 anteCurves.3.1 | 1000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.3.2 anteCurves.3.2 | 3200 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.3.3 anteCurves.3.3 | 9000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.3.4 anteCurves.3.4 | 25000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.3.5 anteCurves.3.5 | 60000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.3.6 anteCurves.3.6 | 110000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.3.7 anteCurves.3.7 | 200000 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.belowOne anteCurves.belowOne | 100 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.endless.afterAnte anteCurves.endless.afterAnte | 8 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.endless.base anteCurves.endless.base | 1.6 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.endless.formula anteCurves.endless.formula | c = ante - 8; d = 1 + 0.2*c; raw = floor(A8*(1.6+(0.75*c)^d)^c); raw - raw % 10^floor(log10(raw)-1) | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.endless.k anteCurves.endless.k | 0.75 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.anteCurves.endless.powerIncrement anteCurves.endless.powerIncrement | 0.2 | references/source/functions/misc_functions.lua:919-955 | 高：固定社区源码，待原版导出交叉验证
system.b_abandoned.config.remove_faces b_abandoned.config.remove_faces | true | references/source/game.lua:636 | 高：固定社区源码，待原版导出交叉验证
system.b_abandoned.effects.0 数字组：runStart时机的removeFaces规则 | {"trigger":"runStart","condition":{},"action":"removeFaces"} | references/source/back.lua:202-203; references/source/game.lua:2355; references/source/game.lua:636 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_abandoned.stake b_abandoned.stake | 1 | references/source/game.lua:636 | 高：固定社区源码，待原版导出交叉验证
system.b_abandoned.unlock_condition.deck b_abandoned.unlock_condition.deck | b_green | references/source/game.lua:636 | 高：固定社区源码，待原版导出交叉验证
system.b_abandoned.unlock_condition.type b_abandoned.unlock_condition.type | win_deck | references/source/game.lua:636 | 高：固定社区源码，待原版导出交叉验证
system.b_abandoned.unlocked b_abandoned.unlocked | false | references/source/game.lua:636 | 高：固定社区源码，待原版导出交叉验证
system.b_anaglyph.effects.0 复签组：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"bossDoubleTag","value":true} | references/source/back.lua:111-119; references/source/game.lua:640 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_anaglyph.effects.1 复签组：bossDefeated时机的addTag规则 | {"trigger":"bossDefeated","condition":{},"action":"addTag","sourceKey":"tag_double"} | references/source/back.lua:111-119; references/source/game.lua:640 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_anaglyph.stake b_anaglyph.stake | 1 | references/source/game.lua:640 | 高：固定社区源码，待原版导出交叉验证
system.b_anaglyph.unlock_condition.stake b_anaglyph.unlock_condition.stake | 4 | references/source/game.lua:640 | 高：固定社区源码，待原版导出交叉验证
system.b_anaglyph.unlock_condition.type b_anaglyph.unlock_condition.type | win_stake | references/source/game.lua:640 | 高：固定社区源码，待原版导出交叉验证
system.b_anaglyph.unlocked b_anaglyph.unlocked | false | references/source/game.lua:640 | 高：固定社区源码，待原版导出交叉验证
system.b_black.config.hands b_black.config.hands | -1 | references/source/game.lua:632 | 高：固定社区源码，待原版导出交叉验证
system.b_black.config.joker_slot b_black.config.joker_slot | 1 | references/source/game.lua:632 | 高：固定社区源码，待原版导出交叉验证
system.b_black.effects.0 增伴组：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"hands","value":-1} | references/source/back.lua:181-182; references/source/game.lua:632 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_black.effects.1 增伴组：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"jokerSlots","value":1} | references/source/back.lua:257-258; references/source/game.lua:632 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_black.stake b_black.stake | 1 | references/source/game.lua:632 | 高：固定社区源码，待原版导出交叉验证
system.b_black.unlock_condition.amount b_black.unlock_condition.amount | 100 | references/source/game.lua:632 | 高：固定社区源码，待原版导出交叉验证
system.b_black.unlock_condition.type b_black.unlock_condition.type | discover_amount | references/source/game.lua:632 | 高：固定社区源码，待原版导出交叉验证
system.b_black.unlocked b_black.unlocked | false | references/source/game.lua:632 | 高：固定社区源码，待原版导出交叉验证
system.b_blue.config.hands b_blue.config.hands | 1 | references/source/game.lua:629 | 高：固定社区源码，待原版导出交叉验证
system.b_blue.effects.0 加赛组：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"hands","value":1} | references/source/back.lua:181-182; references/source/game.lua:629 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_blue.stake b_blue.stake | 1 | references/source/game.lua:629 | 高：固定社区源码，待原版导出交叉验证
system.b_blue.unlock_condition.amount b_blue.unlock_condition.amount | 20 | references/source/game.lua:629 | 高：固定社区源码，待原版导出交叉验证
system.b_blue.unlock_condition.type b_blue.unlock_condition.type | discover_amount | references/source/game.lua:629 | 高：固定社区源码，待原版导出交叉验证
system.b_blue.unlocked b_blue.unlocked | false | references/source/game.lua:629 | 高：固定社区源码，待原版导出交叉验证
system.b_checkered.effects.0 双色组：runStart时机的mapSuits规则 | {"trigger":"runStart","condition":{},"action":"mapSuits","mapping":{"clubs":"spades","diamonds":"hearts"}} | references/source/back.lua:239-248; references/source/game.lua:637 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_checkered.stake b_checkered.stake | 1 | references/source/game.lua:637 | 高：固定社区源码，待原版导出交叉验证
system.b_checkered.unlock_condition.deck b_checkered.unlock_condition.deck | b_black | references/source/game.lua:637 | 高：固定社区源码，待原版导出交叉验证
system.b_checkered.unlock_condition.type b_checkered.unlock_condition.type | win_deck | references/source/game.lua:637 | 高：固定社区源码，待原版导出交叉验证
system.b_checkered.unlocked b_checkered.unlocked | false | references/source/game.lua:637 | 高：固定社区源码，待原版导出交叉验证
system.b_erratic.config.randomize_rank_suit b_erratic.config.randomize_rank_suit | true | references/source/game.lua:642 | 高：固定社区源码，待原版导出交叉验证
system.b_erratic.effects.0 随机组：runStart时机的randomizeDeck规则 | {"trigger":"runStart","condition":{},"action":"randomizeDeck"} | references/source/back.lua:254-255; references/source/game.lua:2342; references/source/game.lua:642 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_erratic.stake b_erratic.stake | 1 | references/source/game.lua:642 | 高：固定社区源码，待原版导出交叉验证
system.b_erratic.unlock_condition.stake b_erratic.unlock_condition.stake | 7 | references/source/game.lua:642 | 高：固定社区源码，待原版导出交叉验证
system.b_erratic.unlock_condition.type b_erratic.unlock_condition.type | win_stake | references/source/game.lua:642 | 高：固定社区源码，待原版导出交叉验证
system.b_erratic.unlocked b_erratic.unlocked | false | references/source/game.lua:642 | 高：固定社区源码，待原版导出交叉验证
system.b_ghost.config.consumables.0 b_ghost.config.consumables.0 | c_hex | references/source/game.lua:635 | 高：固定社区源码，待原版导出交叉验证
system.b_ghost.config.spectral_rate b_ghost.config.spectral_rate | 2 | references/source/game.lua:635 | 高：固定社区源码，待原版导出交叉验证
system.b_ghost.effects.0 异域组：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"spectralRate","value":2} | references/source/back.lua:206-207; references/source/game.lua:635 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_ghost.effects.1 异域组：runStart时机的addConsumables规则 | {"trigger":"runStart","condition":{},"action":"addConsumables","keys":["c_hex"]} | references/source/back.lua:184-191; references/source/game.lua:635 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_ghost.stake b_ghost.stake | 1 | references/source/game.lua:635 | 高：固定社区源码，待原版导出交叉验证
system.b_ghost.unlock_condition.deck b_ghost.unlock_condition.deck | b_yellow | references/source/game.lua:635 | 高：固定社区源码，待原版导出交叉验证
system.b_ghost.unlock_condition.type b_ghost.unlock_condition.type | win_deck | references/source/game.lua:635 | 高：固定社区源码，待原版导出交叉验证
system.b_ghost.unlocked b_ghost.unlocked | false | references/source/game.lua:635 | 高：固定社区源码，待原版导出交叉验证
system.b_green.config.extra_discard_bonus b_green.config.extra_discard_bonus | 1 | references/source/game.lua:631 | 高：固定社区源码，待原版导出交叉验证
system.b_green.config.extra_hand_bonus b_green.config.extra_hand_bonus | 2 | references/source/game.lua:631 | 高：固定社区源码，待原版导出交叉验证
system.b_green.config.no_interest b_green.config.no_interest | true | references/source/game.lua:631 | 高：固定社区源码，待原版导出交叉验证
system.b_green.effects.0 勤俭组：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"moneyPerHand","value":2} | references/source/back.lua:272-273; references/source/game.lua:631 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_green.effects.1 勤俭组：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"moneyPerDiscard","value":1} | references/source/back.lua:275-276; references/source/game.lua:631 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_green.effects.2 勤俭组：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"noInterest","value":true} | references/source/back.lua:269-270; references/source/game.lua:631 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_green.stake b_green.stake | 1 | references/source/game.lua:631 | 高：固定社区源码，待原版导出交叉验证
system.b_green.unlock_condition.amount b_green.unlock_condition.amount | 75 | references/source/game.lua:631 | 高：固定社区源码，待原版导出交叉验证
system.b_green.unlock_condition.type b_green.unlock_condition.type | discover_amount | references/source/game.lua:631 | 高：固定社区源码，待原版导出交叉验证
system.b_green.unlocked b_green.unlocked | false | references/source/game.lua:631 | 高：固定社区源码，待原版导出交叉验证
system.b_magic.config.consumables.0 b_magic.config.consumables.0 | c_fool | references/source/game.lua:633 | 高：固定社区源码，待原版导出交叉验证
system.b_magic.config.consumables.1 b_magic.config.consumables.1 | c_fool | references/source/game.lua:633 | 高：固定社区源码，待原版导出交叉验证
system.b_magic.config.voucher b_magic.config.voucher | v_crystal_ball | references/source/game.lua:633 | 高：固定社区源码，待原版导出交叉验证
system.b_magic.effects.0 回声组：runStart时机的redeemVoucher规则 | {"trigger":"runStart","condition":{},"action":"redeemVoucher","sourceKey":"v_crystal_ball"} | references/source/back.lua:174-179; references/source/back.lua:232-237; references/source/game.lua:633 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_magic.effects.1 回声组：runStart时机的addConsumables规则 | {"trigger":"runStart","condition":{},"action":"addConsumables","keys":["c_fool","c_fool"]} | references/source/back.lua:184-191; references/source/game.lua:633 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_magic.stake b_magic.stake | 1 | references/source/game.lua:633 | 高：固定社区源码，待原版导出交叉验证
system.b_magic.unlock_condition.deck b_magic.unlock_condition.deck | b_red | references/source/game.lua:633 | 高：固定社区源码，待原版导出交叉验证
system.b_magic.unlock_condition.type b_magic.unlock_condition.type | win_deck | references/source/game.lua:633 | 高：固定社区源码，待原版导出交叉验证
system.b_magic.unlocked b_magic.unlocked | false | references/source/game.lua:633 | 高：固定社区源码，待原版导出交叉验证
system.b_nebula.config.consumable_slot b_nebula.config.consumable_slot | -1 | references/source/game.lua:634 | 高：固定社区源码，待原版导出交叉验证
system.b_nebula.config.voucher b_nebula.config.voucher | v_telescope | references/source/game.lua:634 | 高：固定社区源码，待原版导出交叉验证
system.b_nebula.effects.0 观测组：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"consumableSlots","value":-1} | references/source/back.lua:266-267; references/source/game.lua:634 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_nebula.effects.1 观测组：runStart时机的redeemVoucher规则 | {"trigger":"runStart","condition":{},"action":"redeemVoucher","sourceKey":"v_telescope"} | references/source/back.lua:174-179; references/source/back.lua:232-237; references/source/game.lua:634 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_nebula.stake b_nebula.stake | 1 | references/source/game.lua:634 | 高：固定社区源码，待原版导出交叉验证
system.b_nebula.unlock_condition.deck b_nebula.unlock_condition.deck | b_blue | references/source/game.lua:634 | 高：固定社区源码，待原版导出交叉验证
system.b_nebula.unlock_condition.type b_nebula.unlock_condition.type | win_deck | references/source/game.lua:634 | 高：固定社区源码，待原版导出交叉验证
system.b_nebula.unlocked b_nebula.unlocked | false | references/source/game.lua:634 | 高：固定社区源码，待原版导出交叉验证
system.b_painted.config.hand_size b_painted.config.hand_size | 2 | references/source/game.lua:639 | 高：固定社区源码，待原版导出交叉验证
system.b_painted.config.joker_slot b_painted.config.joker_slot | -1 | references/source/game.lua:639 | 高：固定社区源码，待原版导出交叉验证
system.b_painted.effects.0 宽手组：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"jokerSlots","value":-1} | references/source/back.lua:257-258; references/source/game.lua:639 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_painted.effects.1 宽手组：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"handSize","value":2} | references/source/back.lua:260-261; references/source/game.lua:639 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_painted.stake b_painted.stake | 1 | references/source/game.lua:639 | 高：固定社区源码，待原版导出交叉验证
system.b_painted.unlock_condition.stake b_painted.unlock_condition.stake | 3 | references/source/game.lua:639 | 高：固定社区源码，待原版导出交叉验证
system.b_painted.unlock_condition.type b_painted.unlock_condition.type | win_stake | references/source/game.lua:639 | 高：固定社区源码，待原版导出交叉验证
system.b_painted.unlocked b_painted.unlocked | false | references/source/game.lua:639 | 高：固定社区源码，待原版导出交叉验证
system.b_plasma.config.ante_scaling b_plasma.config.ante_scaling | 2 | references/source/game.lua:641 | 高：固定社区源码，待原版导出交叉验证
system.b_plasma.effects.0 均衡组：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"anteScaling","value":2} | references/source/back.lua:263-264; references/source/game.lua:641 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_plasma.effects.1 均衡组：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"balancedScoring","value":true} | references/source/back.lua:125-129; references/source/game.lua:641 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_plasma.effects.2 均衡组：finalScore时机的balanceChipsMult规则 | {"trigger":"finalScore","condition":{},"action":"balanceChipsMult","formula":"floor((chips+mult)/2)^2"} | references/source/back.lua:125-129; references/source/game.lua:641 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_plasma.stake b_plasma.stake | 1 | references/source/game.lua:641 | 高：固定社区源码，待原版导出交叉验证
system.b_plasma.unlock_condition.stake b_plasma.unlock_condition.stake | 5 | references/source/game.lua:641 | 高：固定社区源码，待原版导出交叉验证
system.b_plasma.unlock_condition.type b_plasma.unlock_condition.type | win_stake | references/source/game.lua:641 | 高：固定社区源码，待原版导出交叉验证
system.b_plasma.unlocked b_plasma.unlocked | false | references/source/game.lua:641 | 高：固定社区源码，待原版导出交叉验证
system.b_red.config.discards b_red.config.discards | 1 | references/source/game.lua:628 | 高：固定社区源码，待原版导出交叉验证
system.b_red.effects.0 换牌组：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"discards","value":1} | references/source/back.lua:209-210; references/source/game.lua:628 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_red.stake b_red.stake | 1 | references/source/game.lua:628 | 高：固定社区源码，待原版导出交叉验证
system.b_red.unlocked b_red.unlocked | true | references/source/game.lua:628 | 高：固定社区源码，待原版导出交叉验证
system.b_yellow.config.dollars b_yellow.config.dollars | 10 | references/source/game.lua:630 | 高：固定社区源码，待原版导出交叉验证
system.b_yellow.effects.0 储金组：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"dollars","value":10} | references/source/back.lua:199-200; references/source/game.lua:630 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_yellow.stake b_yellow.stake | 1 | references/source/game.lua:630 | 高：固定社区源码，待原版导出交叉验证
system.b_yellow.unlock_condition.amount b_yellow.unlock_condition.amount | 50 | references/source/game.lua:630 | 高：固定社区源码，待原版导出交叉验证
system.b_yellow.unlock_condition.type b_yellow.unlock_condition.type | discover_amount | references/source/game.lua:630 | 高：固定社区源码，待原版导出交叉验证
system.b_yellow.unlocked b_yellow.unlocked | false | references/source/game.lua:630 | 高：固定社区源码，待原版导出交叉验证
system.b_zodiac.config.vouchers.0 b_zodiac.config.vouchers.0 | v_tarot_merchant | references/source/game.lua:638 | 高：固定社区源码，待原版导出交叉验证
system.b_zodiac.config.vouchers.1 b_zodiac.config.vouchers.1 | v_planet_merchant | references/source/game.lua:638 | 高：固定社区源码，待原版导出交叉验证
system.b_zodiac.config.vouchers.2 b_zodiac.config.vouchers.2 | v_overstock_norm | references/source/game.lua:638 | 高：固定社区源码，待原版导出交叉验证
system.b_zodiac.effects.0 商旅组：runStart时机的redeemVoucher规则 | {"trigger":"runStart","condition":{},"action":"redeemVoucher","sourceKey":"v_tarot_merchant"} | references/source/back.lua:174-179; references/source/back.lua:232-237; references/source/game.lua:638 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_zodiac.effects.1 商旅组：runStart时机的redeemVoucher规则 | {"trigger":"runStart","condition":{},"action":"redeemVoucher","sourceKey":"v_planet_merchant"} | references/source/back.lua:174-179; references/source/back.lua:232-237; references/source/game.lua:638 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_zodiac.effects.2 商旅组：runStart时机的redeemVoucher规则 | {"trigger":"runStart","condition":{},"action":"redeemVoucher","sourceKey":"v_overstock_norm"} | references/source/back.lua:174-179; references/source/back.lua:232-237; references/source/game.lua:638 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.b_zodiac.stake b_zodiac.stake | 1 | references/source/game.lua:638 | 高：固定社区源码，待原版导出交叉验证
system.b_zodiac.unlock_condition.stake b_zodiac.unlock_condition.stake | 2 | references/source/game.lua:638 | 高：固定社区源码，待原版导出交叉验证
system.b_zodiac.unlock_condition.type b_zodiac.unlock_condition.type | win_stake | references/source/game.lua:638 | 高：固定社区源码，待原版导出交叉验证
system.b_zodiac.unlocked b_zodiac.unlocked | false | references/source/game.lua:638 | 高：固定社区源码，待原版导出交叉验证
system.bl_arm.boss.max bl_arm.boss.max | 10 | references/source/game.lua:279 | 高：固定社区源码，待原版导出交叉验证
system.bl_arm.boss.min bl_arm.boss.min | 2 | references/source/game.lua:279 | 高：固定社区源码，待原版导出交叉验证
system.bl_arm.defeated bl_arm.defeated | false | references/source/game.lua:279 | 高：固定社区源码，待原版导出交叉验证
system.bl_arm.dollars bl_arm.dollars | 5 | references/source/game.lua:279 | 高：固定社区源码，待原版导出交叉验证
system.bl_arm.effects.0 降级：beforeHand时机的downgradeHand规则 | {"trigger":"beforeHand","condition":{},"action":"downgradeHand","minLevel":1,"amount":1} | references/source/blind.lua:550-558; references/source/game.lua:279 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_arm.mult bl_arm.mult | 2 | references/source/game.lua:279 | 高：固定社区源码，待原版导出交叉验证
system.bl_big.defeated bl_big.defeated | false | references/source/game.lua:265 | 高：固定社区源码，待原版导出交叉验证
system.bl_big.dollars bl_big.dollars | 4 | references/source/game.lua:265 | 高：固定社区源码，待原版导出交叉验证
system.bl_big.effects.0 中门：start时机的none规则 | {"trigger":"start","condition":{},"action":"none"} | references/source/blind.lua:346-352; references/source/game.lua:265 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_big.mult bl_big.mult | 1.5 | references/source/game.lua:265 | 高：固定社区源码，待原版导出交叉验证
system.bl_club.boss.max bl_club.boss.max | 10 | references/source/game.lua:270 | 高：固定社区源码，待原版导出交叉验证
system.bl_club.boss.min bl_club.boss.min | 1 | references/source/game.lua:270 | 高：固定社区源码，待原版导出交叉验证
system.bl_club.debuff.suit bl_club.debuff.suit | Clubs | references/source/game.lua:270 | 高：固定社区源码，待原版导出交叉验证
system.bl_club.defeated bl_club.defeated | false | references/source/game.lua:270 | 高：固定社区源码，待原版导出交叉验证
system.bl_club.dollars bl_club.dollars | 5 | references/source/game.lua:270 | 高：固定社区源码，待原版导出交叉验证
system.bl_club.effects.0 叶禁：cardDebuff时机的debuffSuit规则 | {"trigger":"cardDebuff","condition":{},"action":"debuffSuit","suit":"clubs"} | references/source/blind.lua:624-628; references/source/card.lua:4064-4088; references/source/game.lua:270 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_club.mult bl_club.mult | 2 | references/source/game.lua:270 | 高：固定社区源码，待原版导出交叉验证
system.bl_eye.boss.max bl_eye.boss.max | 10 | references/source/game.lua:283 | 高：固定社区源码，待原版导出交叉验证
system.bl_eye.boss.min bl_eye.boss.min | 3 | references/source/game.lua:283 | 高：固定社区源码，待原版导出交叉验证
system.bl_eye.defeated bl_eye.defeated | false | references/source/game.lua:283 | 高：固定社区源码，待原版导出交叉验证
system.bl_eye.dollars bl_eye.dollars | 5 | references/source/game.lua:283 | 高：固定社区源码，待原版导出交叉验证
system.bl_eye.effects.0 不重演：beforeHand时机的requireUnusedHand规则 | {"trigger":"beforeHand","condition":{},"action":"requireUnusedHand"} | references/source/blind.lua:535-540; references/source/game.lua:283 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_eye.mult bl_eye.mult | 2 | references/source/game.lua:283 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_acorn.boss.max bl_final_acorn.boss.max | 10 | references/source/game.lua:293 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_acorn.boss.min bl_final_acorn.boss.min | 10 | references/source/game.lua:293 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_acorn.boss.showdown bl_final_acorn.boss.showdown | true | references/source/game.lua:293 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_acorn.defeated bl_final_acorn.defeated | false | references/source/game.lua:293 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_acorn.dollars bl_final_acorn.dollars | 8 | references/source/game.lua:293 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_acorn.effects.0 乱序：start时机的hideShuffleJokers规则 | {"trigger":"start","condition":{},"action":"hideShuffleJokers","shuffleCount":3} | references/source/blind.lua:190-203; references/source/game.lua:293 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_final_acorn.mult bl_final_acorn.mult | 2 | references/source/game.lua:293 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_bell.boss.max bl_final_bell.boss.max | 10 | references/source/game.lua:277 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_bell.boss.min bl_final_bell.boss.min | 10 | references/source/game.lua:277 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_bell.boss.showdown bl_final_bell.boss.showdown | true | references/source/game.lua:277 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_bell.defeated bl_final_bell.defeated | false | references/source/game.lua:277 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_bell.dollars bl_final_bell.dollars | 8 | references/source/game.lua:277 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_bell.effects.0 指定席：draw时机的forceSelection规则 | {"trigger":"draw","condition":{},"action":"forceSelection"} | references/source/blind.lua:575-587; references/source/game.lua:277 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_final_bell.mult bl_final_bell.mult | 2 | references/source/game.lua:277 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_heart.boss.max bl_final_heart.boss.max | 10 | references/source/game.lua:294 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_heart.boss.min bl_final_heart.boss.min | 10 | references/source/game.lua:294 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_heart.boss.showdown bl_final_heart.boss.showdown | true | references/source/game.lua:294 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_heart.defeated bl_final_heart.defeated | false | references/source/game.lua:294 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_heart.dollars bl_final_heart.dollars | 8 | references/source/game.lua:294 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_heart.effects.0 静默：draw时机的debuffRandomJoker规则 | {"trigger":"draw","condition":{"heartPrepped":true},"action":"debuffRandomJoker","avoidPrevious":true} | references/source/blind.lua:588-596; references/source/card.lua:526-532; references/source/game.lua:294 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_final_heart.effects.1 静默：beforeHand时机的prepareHeart规则 | {"trigger":"beforeHand","condition":{},"action":"prepareHeart"} | references/source/blind.lua:488-492; references/source/game.lua:294 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_final_heart.mult bl_final_heart.mult | 2 | references/source/game.lua:294 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_leaf.boss.max bl_final_leaf.boss.max | 10 | references/source/game.lua:287 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_leaf.boss.min bl_final_leaf.boss.min | 10 | references/source/game.lua:287 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_leaf.boss.showdown bl_final_leaf.boss.showdown | true | references/source/game.lua:287 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_leaf.defeated bl_final_leaf.defeated | false | references/source/game.lua:287 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_leaf.dollars bl_final_leaf.dollars | 8 | references/source/game.lua:287 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_leaf.effects.0 封印：cardDebuff时机的debuffAll规则 | {"trigger":"cardDebuff","condition":{},"action":"debuffAll"} | references/source/blind.lua:650-651; references/source/game.lua:287 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_final_leaf.effects.1 封印：jokerSold时机的disableBlind规则 | {"trigger":"jokerSold","condition":{},"action":"disableBlind"} | references/source/card.lua:1616-1619; references/source/blind.lua:356-412; references/source/game.lua:287 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_final_leaf.mult bl_final_leaf.mult | 2 | references/source/game.lua:287 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_vessel.boss.max bl_final_vessel.boss.max | 10 | references/source/game.lua:288 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_vessel.boss.min bl_final_vessel.boss.min | 10 | references/source/game.lua:288 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_vessel.boss.showdown bl_final_vessel.boss.showdown | true | references/source/game.lua:288 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_vessel.defeated bl_final_vessel.defeated | false | references/source/game.lua:288 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_vessel.dollars bl_final_vessel.dollars | 8 | references/source/game.lua:288 | 高：固定社区源码，待原版导出交叉验证
system.bl_final_vessel.effects.0 高塔：start时机的requirementMultiplier规则 | {"trigger":"start","condition":{},"action":"requirementMultiplier","value":6} | references/source/blind.lua:107-108; references/source/game.lua:288 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_final_vessel.mult bl_final_vessel.mult | 6 | references/source/game.lua:288 | 高：固定社区源码，待原版导出交叉验证
system.bl_fish.boss.max bl_fish.boss.max | 10 | references/source/game.lua:269 | 高：固定社区源码，待原版导出交叉验证
system.bl_fish.boss.min bl_fish.boss.min | 2 | references/source/game.lua:269 | 高：固定社区源码，待原版导出交叉验证
system.bl_fish.defeated bl_fish.defeated | false | references/source/game.lua:269 | 高：固定社区源码，待原版导出交叉验证
system.bl_fish.dollars bl_fish.dollars | 5 | references/source/game.lua:269 | 高：固定社区源码，待原版导出交叉验证
system.bl_fish.effects.0 暗流：beforeHand时机的prepareFish规则 | {"trigger":"beforeHand","condition":{},"action":"prepareFish"} | references/source/blind.lua:494-496; references/source/game.lua:269 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_fish.effects.1 暗流：draw时机的hideDrawn规则 | {"trigger":"draw","condition":{"fishPrepped":true},"action":"hideDrawn"} | references/source/blind.lua:617-618; references/source/game.lua:269 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_fish.mult bl_fish.mult | 2 | references/source/game.lua:269 | 高：固定社区源码，待原版导出交叉验证
system.bl_flint.boss.max bl_flint.boss.max | 10 | references/source/game.lua:292 | 高：固定社区源码，待原版导出交叉验证
system.bl_flint.boss.min bl_flint.boss.min | 2 | references/source/game.lua:292 | 高：固定社区源码，待原版导出交叉验证
system.bl_flint.defeated bl_flint.defeated | false | references/source/game.lua:292 | 高：固定社区源码，待原版导出交叉验证
system.bl_flint.dollars bl_flint.dollars | 5 | references/source/game.lua:292 | 高：固定社区源码，待原版导出交叉验证
system.bl_flint.effects.0 减半：beforeHand时机的halveBase规则 | {"trigger":"beforeHand","condition":{},"action":"halveBase","chipMinimum":0,"multMinimum":1,"roundOffset":0.5} | references/source/blind.lua:510-515; references/source/game.lua:292 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_flint.mult bl_flint.mult | 2 | references/source/game.lua:292 | 高：固定社区源码，待原版导出交叉验证
system.bl_goad.boss.max bl_goad.boss.max | 10 | references/source/game.lua:281 | 高：固定社区源码，待原版导出交叉验证
system.bl_goad.boss.min bl_goad.boss.min | 1 | references/source/game.lua:281 | 高：固定社区源码，待原版导出交叉验证
system.bl_goad.debuff.suit bl_goad.debuff.suit | Spades | references/source/game.lua:281 | 高：固定社区源码，待原版导出交叉验证
system.bl_goad.defeated bl_goad.defeated | false | references/source/game.lua:281 | 高：固定社区源码，待原版导出交叉验证
system.bl_goad.dollars bl_goad.dollars | 5 | references/source/game.lua:281 | 高：固定社区源码，待原版导出交叉验证
system.bl_goad.effects.0 锋禁：cardDebuff时机的debuffSuit规则 | {"trigger":"cardDebuff","condition":{},"action":"debuffSuit","suit":"spades"} | references/source/blind.lua:624-628; references/source/card.lua:4064-4088; references/source/game.lua:281 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_goad.mult bl_goad.mult | 2 | references/source/game.lua:281 | 高：固定社区源码，待原版导出交叉验证
system.bl_head.boss.max bl_head.boss.max | 10 | references/source/game.lua:286 | 高：固定社区源码，待原版导出交叉验证
system.bl_head.boss.min bl_head.boss.min | 1 | references/source/game.lua:286 | 高：固定社区源码，待原版导出交叉验证
system.bl_head.debuff.suit bl_head.debuff.suit | Hearts | references/source/game.lua:286 | 高：固定社区源码，待原版导出交叉验证
system.bl_head.defeated bl_head.defeated | false | references/source/game.lua:286 | 高：固定社区源码，待原版导出交叉验证
system.bl_head.dollars bl_head.dollars | 5 | references/source/game.lua:286 | 高：固定社区源码，待原版导出交叉验证
system.bl_head.effects.0 心禁：cardDebuff时机的debuffSuit规则 | {"trigger":"cardDebuff","condition":{},"action":"debuffSuit","suit":"hearts"} | references/source/blind.lua:624-628; references/source/card.lua:4064-4088; references/source/game.lua:286 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_head.mult bl_head.mult | 2 | references/source/game.lua:286 | 高：固定社区源码，待原版导出交叉验证
system.bl_hook.boss.max bl_hook.boss.max | 10 | references/source/game.lua:267 | 高：固定社区源码，待原版导出交叉验证
system.bl_hook.boss.min bl_hook.boss.min | 1 | references/source/game.lua:267 | 高：固定社区源码，待原版导出交叉验证
system.bl_hook.defeated bl_hook.defeated | false | references/source/game.lua:267 | 高：固定社区源码，待原版导出交叉验证
system.bl_hook.dollars bl_hook.dollars | 5 | references/source/game.lua:267 | 高：固定社区源码，待原版导出交叉验证
system.bl_hook.effects.0 抽离：beforeHand时机的discardRandomHand规则 | {"trigger":"beforeHand","condition":{},"action":"discardRandomHand","count":2} | references/source/blind.lua:464-486; references/source/game.lua:267 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_hook.mult bl_hook.mult | 2 | references/source/game.lua:267 | 高：固定社区源码，待原版导出交叉验证
system.bl_house.boss.max bl_house.boss.max | 10 | references/source/game.lua:274 | 高：固定社区源码，待原版导出交叉验证
system.bl_house.boss.min bl_house.boss.min | 2 | references/source/game.lua:274 | 高：固定社区源码，待原版导出交叉验证
system.bl_house.defeated bl_house.defeated | false | references/source/game.lua:274 | 高：固定社区源码，待原版导出交叉验证
system.bl_house.dollars bl_house.dollars | 5 | references/source/game.lua:274 | 高：固定社区源码，待原版导出交叉验证
system.bl_house.effects.0 暗幕：draw时机的hideDrawn规则 | {"trigger":"draw","condition":{"firstDraw":true},"action":"hideDrawn"} | references/source/blind.lua:611-612; references/source/game.lua:274 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_house.mult bl_house.mult | 2 | references/source/game.lua:274 | 高：固定社区源码，待原版导出交叉验证
system.bl_manacle.boss.max bl_manacle.boss.max | 10 | references/source/game.lua:271 | 高：固定社区源码，待原版导出交叉验证
system.bl_manacle.boss.min bl_manacle.boss.min | 1 | references/source/game.lua:271 | 高：固定社区源码，待原版导出交叉验证
system.bl_manacle.defeated bl_manacle.defeated | false | references/source/game.lua:271 | 高：固定社区源码，待原版导出交叉验证
system.bl_manacle.dollars bl_manacle.dollars | 5 | references/source/game.lua:271 | 高：固定社区源码，待原版导出交叉验证
system.bl_manacle.effects.0 窄握：start时机的add规则 | {"trigger":"start","condition":{},"action":"add","field":"handSize","value":-1} | references/source/blind.lua:187-188; references/source/game.lua:271 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_manacle.effects.1 窄握：end时机的add规则 | {"trigger":"end","condition":{},"action":"add","field":"handSize","value":1} | references/source/blind.lua:341-342; references/source/game.lua:271 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_manacle.mult bl_manacle.mult | 2 | references/source/game.lua:271 | 高：固定社区源码，待原版导出交叉验证
system.bl_mark.boss.max bl_mark.boss.max | 10 | references/source/game.lua:275 | 高：固定社区源码，待原版导出交叉验证
system.bl_mark.boss.min bl_mark.boss.min | 2 | references/source/game.lua:275 | 高：固定社区源码，待原版导出交叉验证
system.bl_mark.defeated bl_mark.defeated | false | references/source/game.lua:275 | 高：固定社区源码，待原版导出交叉验证
system.bl_mark.dollars bl_mark.dollars | 5 | references/source/game.lua:275 | 高：固定社区源码，待原版导出交叉验证
system.bl_mark.effects.0 蒙面：draw时机的hideFaces规则 | {"trigger":"draw","condition":{},"action":"hideFaces"} | references/source/blind.lua:614-615; references/source/game.lua:275 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_mark.mult bl_mark.mult | 2 | references/source/game.lua:275 | 高：固定社区源码，待原版导出交叉验证
system.bl_mouth.boss.max bl_mouth.boss.max | 10 | references/source/game.lua:268 | 高：固定社区源码，待原版导出交叉验证
system.bl_mouth.boss.min bl_mouth.boss.min | 2 | references/source/game.lua:268 | 高：固定社区源码，待原版导出交叉验证
system.bl_mouth.defeated bl_mouth.defeated | false | references/source/game.lua:268 | 高：固定社区源码，待原版导出交叉验证
system.bl_mouth.dollars bl_mouth.dollars | 5 | references/source/game.lua:268 | 高：固定社区源码，待原版导出交叉验证
system.bl_mouth.effects.0 单轨：beforeHand时机的requireSameHand规则 | {"trigger":"beforeHand","condition":{},"action":"requireSameHand"} | references/source/blind.lua:542-547; references/source/game.lua:268 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_mouth.mult bl_mouth.mult | 2 | references/source/game.lua:268 | 高：固定社区源码，待原版导出交叉验证
system.bl_needle.boss.max bl_needle.boss.max | 10 | references/source/game.lua:285 | 高：固定社区源码，待原版导出交叉验证
system.bl_needle.boss.min bl_needle.boss.min | 2 | references/source/game.lua:285 | 高：固定社区源码，待原版导出交叉验证
system.bl_needle.defeated bl_needle.defeated | false | references/source/game.lua:285 | 高：固定社区源码，待原版导出交叉验证
system.bl_needle.dollars bl_needle.dollars | 5 | references/source/game.lua:285 | 高：固定社区源码，待原版导出交叉验证
system.bl_needle.effects.0 孤注：start时机的set规则 | {"trigger":"start","condition":{},"action":"set","field":"hands","value":1} | references/source/blind.lua:183-185; references/source/game.lua:285 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_needle.mult bl_needle.mult | 1 | references/source/game.lua:285 | 高：固定社区源码，待原版导出交叉验证
system.bl_ox.boss.max bl_ox.boss.max | 10 | references/source/game.lua:266 | 高：固定社区源码，待原版导出交叉验证
system.bl_ox.boss.min bl_ox.boss.min | 6 | references/source/game.lua:266 | 高：固定社区源码，待原版导出交叉验证
system.bl_ox.defeated bl_ox.defeated | false | references/source/game.lua:266 | 高：固定社区源码，待原版导出交叉验证
system.bl_ox.dollars bl_ox.dollars | 5 | references/source/game.lua:266 | 高：固定社区源码，待原版导出交叉验证
system.bl_ox.effects.0 归零：beforeHand时机的zeroCash规则 | {"trigger":"beforeHand","condition":{"mostPlayedHand":true},"action":"zeroCash"} | references/source/blind.lua:560-566; references/source/game.lua:266 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_ox.mult bl_ox.mult | 2 | references/source/game.lua:266 | 高：固定社区源码，待原版导出交叉验证
system.bl_pillar.boss.max bl_pillar.boss.max | 10 | references/source/game.lua:291 | 高：固定社区源码，待原版导出交叉验证
system.bl_pillar.boss.min bl_pillar.boss.min | 1 | references/source/game.lua:291 | 高：固定社区源码，待原版导出交叉验证
system.bl_pillar.defeated bl_pillar.defeated | false | references/source/game.lua:291 | 高：固定社区源码，待原版导出交叉验证
system.bl_pillar.dollars bl_pillar.dollars | 5 | references/source/game.lua:291 | 高：固定社区源码，待原版导出交叉验证
system.bl_pillar.effects.0 旧迹：cardDebuff时机的debuffPlayedThisAnte规则 | {"trigger":"cardDebuff","condition":{},"action":"debuffPlayedThisAnte"} | references/source/blind.lua:634-636; references/source/game.lua:291 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_pillar.mult bl_pillar.mult | 2 | references/source/game.lua:291 | 高：固定社区源码，待原版导出交叉验证
system.bl_plant.boss.max bl_plant.boss.max | 10 | references/source/game.lua:284 | 高：固定社区源码，待原版导出交叉验证
system.bl_plant.boss.min bl_plant.boss.min | 4 | references/source/game.lua:284 | 高：固定社区源码，待原版导出交叉验证
system.bl_plant.debuff.is_face bl_plant.debuff.is_face | face | references/source/game.lua:284 | 高：固定社区源码，待原版导出交叉验证
system.bl_plant.defeated bl_plant.defeated | false | references/source/game.lua:284 | 高：固定社区源码，待原版导出交叉验证
system.bl_plant.dollars bl_plant.dollars | 5 | references/source/game.lua:284 | 高：固定社区源码，待原版导出交叉验证
system.bl_plant.effects.0 面禁：cardDebuff时机的debuffFaces规则 | {"trigger":"cardDebuff","condition":{},"action":"debuffFaces"} | references/source/blind.lua:630-632; references/source/game.lua:284 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_plant.mult bl_plant.mult | 2 | references/source/game.lua:284 | 高：固定社区源码，待原版导出交叉验证
system.bl_psychic.boss.max bl_psychic.boss.max | 10 | references/source/game.lua:280 | 高：固定社区源码，待原版导出交叉验证
system.bl_psychic.boss.min bl_psychic.boss.min | 1 | references/source/game.lua:280 | 高：固定社区源码，待原版导出交叉验证
system.bl_psychic.debuff.h_size_ge bl_psychic.debuff.h_size_ge | 5 | references/source/game.lua:280 | 高：固定社区源码，待原版导出交叉验证
system.bl_psychic.defeated bl_psychic.defeated | false | references/source/game.lua:280 | 高：固定社区源码，待原版导出交叉验证
system.bl_psychic.dollars bl_psychic.dollars | 5 | references/source/game.lua:280 | 高：固定社区源码，待原版导出交叉验证
system.bl_psychic.effects.0 满额：beforeHand时机的requireCardCount规则 | {"trigger":"beforeHand","condition":{},"action":"requireCardCount","minimum":5} | references/source/blind.lua:527-529; references/source/game.lua:280 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_psychic.mult bl_psychic.mult | 2 | references/source/game.lua:280 | 高：固定社区源码，待原版导出交叉验证
system.bl_serpent.boss.max bl_serpent.boss.max | 10 | references/source/game.lua:290 | 高：固定社区源码，待原版导出交叉验证
system.bl_serpent.boss.min bl_serpent.boss.min | 5 | references/source/game.lua:290 | 高：固定社区源码，待原版导出交叉验证
system.bl_serpent.defeated bl_serpent.defeated | false | references/source/game.lua:290 | 高：固定社区源码，待原版导出交叉验证
system.bl_serpent.dollars bl_serpent.dollars | 5 | references/source/game.lua:290 | 高：固定社区源码，待原版导出交叉验证
system.bl_serpent.effects.0 限流：afterHand时机的limitDraw规则 | {"trigger":"afterHand","condition":{},"action":"limitDraw","count":3} | references/source/functions/state_events.lua:362-367; references/source/game.lua:290 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_serpent.effects.1 限流：afterDiscard时机的limitDraw规则 | {"trigger":"afterDiscard","condition":{},"action":"limitDraw","count":3} | references/source/functions/state_events.lua:362-367; references/source/game.lua:290 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_serpent.mult bl_serpent.mult | 2 | references/source/game.lua:290 | 高：固定社区源码，待原版导出交叉验证
system.bl_small.defeated bl_small.defeated | false | references/source/game.lua:264 | 高：固定社区源码，待原版导出交叉验证
system.bl_small.dollars bl_small.dollars | 3 | references/source/game.lua:264 | 高：固定社区源码，待原版导出交叉验证
system.bl_small.effects.0 前哨：start时机的none规则 | {"trigger":"start","condition":{},"action":"none"} | references/source/blind.lua:346-352; references/source/game.lua:264 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_small.mult bl_small.mult | 1 | references/source/game.lua:264 | 高：固定社区源码，待原版导出交叉验证
system.bl_tooth.boss.max bl_tooth.boss.max | 10 | references/source/game.lua:272 | 高：固定社区源码，待原版导出交叉验证
system.bl_tooth.boss.min bl_tooth.boss.min | 3 | references/source/game.lua:272 | 高：固定社区源码，待原版导出交叉验证
system.bl_tooth.defeated bl_tooth.defeated | false | references/source/game.lua:272 | 高：固定社区源码，待原版导出交叉验证
system.bl_tooth.dollars bl_tooth.dollars | 5 | references/source/game.lua:272 | 高：固定社区源码，待原版导出交叉验证
system.bl_tooth.effects.0 过路费：beforeHand时机的chargePlayedCards规则 | {"trigger":"beforeHand","condition":{},"action":"chargePlayedCards","perCard":1} | references/source/blind.lua:497-505; references/source/game.lua:272 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_tooth.mult bl_tooth.mult | 2 | references/source/game.lua:272 | 高：固定社区源码，待原版导出交叉验证
system.bl_wall.boss.max bl_wall.boss.max | 10 | references/source/game.lua:273 | 高：固定社区源码，待原版导出交叉验证
system.bl_wall.boss.min bl_wall.boss.min | 2 | references/source/game.lua:273 | 高：固定社区源码，待原版导出交叉验证
system.bl_wall.defeated bl_wall.defeated | false | references/source/game.lua:273 | 高：固定社区源码，待原版导出交叉验证
system.bl_wall.dollars bl_wall.dollars | 5 | references/source/game.lua:273 | 高：固定社区源码，待原版导出交叉验证
system.bl_wall.effects.0 高墙：start时机的requirementMultiplier规则 | {"trigger":"start","condition":{},"action":"requirementMultiplier","value":4} | references/source/blind.lua:107-108; references/source/game.lua:273 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_wall.mult bl_wall.mult | 4 | references/source/game.lua:273 | 高：固定社区源码，待原版导出交叉验证
system.bl_water.boss.max bl_water.boss.max | 10 | references/source/game.lua:282 | 高：固定社区源码，待原版导出交叉验证
system.bl_water.boss.min bl_water.boss.min | 2 | references/source/game.lua:282 | 高：固定社区源码，待原版导出交叉验证
system.bl_water.defeated bl_water.defeated | false | references/source/game.lua:282 | 高：固定社区源码，待原版导出交叉验证
system.bl_water.dollars bl_water.dollars | 5 | references/source/game.lua:282 | 高：固定社区源码，待原版导出交叉验证
system.bl_water.effects.0 无回头：start时机的set规则 | {"trigger":"start","condition":{},"action":"set","field":"discards","value":0} | references/source/blind.lua:179-181; references/source/game.lua:282 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_water.mult bl_water.mult | 2 | references/source/game.lua:282 | 高：固定社区源码，待原版导出交叉验证
system.bl_wheel.boss.max bl_wheel.boss.max | 10 | references/source/game.lua:278 | 高：固定社区源码，待原版导出交叉验证
system.bl_wheel.boss.min bl_wheel.boss.min | 2 | references/source/game.lua:278 | 高：固定社区源码，待原版导出交叉验证
system.bl_wheel.defeated bl_wheel.defeated | false | references/source/game.lua:278 | 高：固定社区源码，待原版导出交叉验证
system.bl_wheel.dollars bl_wheel.dollars | 5 | references/source/game.lua:278 | 高：固定社区源码，待原版导出交叉验证
system.bl_wheel.effects.0 遮掩：draw时机的randomHide规则 | {"trigger":"draw","condition":{},"action":"randomHide","probabilityDenominator":7} | references/source/blind.lua:605-609; references/source/game.lua:278 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_wheel.mult bl_wheel.mult | 2 | references/source/game.lua:278 | 高：固定社区源码，待原版导出交叉验证
system.bl_window.boss.max bl_window.boss.max | 10 | references/source/game.lua:289 | 高：固定社区源码，待原版导出交叉验证
system.bl_window.boss.min bl_window.boss.min | 1 | references/source/game.lua:289 | 高：固定社区源码，待原版导出交叉验证
system.bl_window.debuff.suit bl_window.debuff.suit | Diamonds | references/source/game.lua:289 | 高：固定社区源码，待原版导出交叉验证
system.bl_window.defeated bl_window.defeated | false | references/source/game.lua:289 | 高：固定社区源码，待原版导出交叉验证
system.bl_window.dollars bl_window.dollars | 5 | references/source/game.lua:289 | 高：固定社区源码，待原版导出交叉验证
system.bl_window.effects.0 菱禁：cardDebuff时机的debuffSuit规则 | {"trigger":"cardDebuff","condition":{},"action":"debuffSuit","suit":"diamonds"} | references/source/blind.lua:624-628; references/source/card.lua:4064-4088; references/source/game.lua:289 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.bl_window.mult bl_window.mult | 2 | references/source/game.lua:289 | 高：固定社区源码，待原版导出交叉验证
system.c_ankh.config.extra c_ankh.config.extra | 2 | references/source/game.lua:581 | 高：固定社区源码，待原版导出交叉验证
system.c_ankh.cost c_ankh.cost | 4 | references/source/game.lua:581 | 高：固定社区源码，待原版导出交叉验证
system.c_ankh.effects.0 孤伴双影：consume时机的cloneOneJokerAndPrune规则 | {"trigger":"consume","condition":{"hasJoker":true,"jokerSlotsMin":2},"action":"cloneOneJokerAndPrune","stripNegative":true} | references/source/card.lua:1426-1451; references/source/card.lua:1536-1541; references/source/game.lua:581 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_aura.cost c_aura.cost | 4 | references/source/game.lua:575 | 高：固定社区源码，待原版导出交叉验证
system.c_aura.effects.0 霓染：consume时机的selectedEdition规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1,"selectedEditionless":true},"action":"selectedEdition","edition":"random"} | references/source/card.lua:1192-1197; references/source/card.lua:1544-1545; references/source/functions/common_events.lua:2055-2080; references/source/card.lua:1564-1567; references/source/game.lua:575 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_black_hole.cost c_black_hole.cost | 4 | references/source/game.lua:588 | 高：固定社区源码，待原版导出交叉验证
system.c_black_hole.effects.0 全线进阶：consume时机的upgradeAllHands规则 | {"trigger":"consume","condition":{},"action":"upgradeAllHands","amount":1} | references/source/card.lua:1171-1175; references/source/functions/common_events.lua:464-468; references/source/game.lua:588 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_black_hole.hidden c_black_hole.hidden | true | references/source/game.lua:588 | 高：固定社区源码，待原版导出交叉验证
system.c_ceres.config.hand_type c_ceres.config.hand_type | Flush House | references/source/game.lua:567 | 高：固定社区源码，待原版导出交叉验证
system.c_ceres.config.softlock c_ceres.config.softlock | true | references/source/game.lua:567 | 高：固定社区源码，待原版导出交叉验证
system.c_ceres.cost c_ceres.cost | 3 | references/source/game.lua:567 | 高：固定社区源码，待原版导出交叉验证
system.c_ceres.effects.0 同色满座：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"flushHouse","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:567 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_ceres.freq c_ceres.freq | 1 | references/source/game.lua:567 | 高：固定社区源码，待原版导出交叉验证
system.c_chariot.config.max_highlighted c_chariot.config.max_highlighted | 1 | references/source/game.lua:540 | 高：固定社区源码，待原版导出交叉验证
system.c_chariot.config.mod_conv c_chariot.config.mod_conv | m_steel | references/source/game.lua:540 | 高：固定社区源码，待原版导出交叉验证
system.c_chariot.cost c_chariot.cost | 3 | references/source/game.lua:540 | 高：固定社区源码，待原版导出交叉验证
system.c_chariot.effects.0 冷铸：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1},"action":"selectedSet","field":"enhancement","value":"steel"} | references/source/card.lua:1101-1106; references/source/card.lua:1142-1144; references/source/card.lua:1564-1567; references/source/game.lua:540 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_cryptid.config.extra c_cryptid.config.extra | 2 | references/source/game.lua:586 | 高：固定社区源码，待原版导出交叉验证
system.c_cryptid.config.max_highlighted c_cryptid.config.max_highlighted | 1 | references/source/game.lua:586 | 高：固定社区源码，待原版导出交叉验证
system.c_cryptid.cost c_cryptid.cost | 4 | references/source/game.lua:586 | 高：固定社区源码，待原版导出交叉验证
system.c_cryptid.effects.0 双重镜像：consume时机的cloneSelectedCards规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1},"action":"cloneSelectedCards","count":2} | references/source/card.lua:1201-1217; references/source/card.lua:1564-1567; references/source/game.lua:586 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_death.config.max_highlighted c_death.config.max_highlighted | 2 | references/source/game.lua:546 | 高：固定社区源码，待原版导出交叉验证
system.c_death.config.min_highlighted c_death.config.min_highlighted | 2 | references/source/game.lua:546 | 高：固定社区源码，待原版导出交叉验证
system.c_death.config.mod_conv c_death.config.mod_conv | card | references/source/game.lua:546 | 高：固定社区源码，待原版导出交叉验证
system.c_death.cost c_death.cost | 3 | references/source/game.lua:546 | 高：固定社区源码，待原版导出交叉验证
system.c_death.effects.0 镜写：consume时机的copyRightmost规则 | {"trigger":"consume","condition":{"selectedMin":2,"selectedMax":2},"action":"copyRightmost"} | references/source/card.lua:1111-1118; references/source/functions/common_events.lua:2160-2198; references/source/card.lua:1564-1567; references/source/game.lua:546 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_deja_vu.config.extra c_deja_vu.config.extra | Red | references/source/game.lua:582 | 高：固定社区源码，待原版导出交叉验证
system.c_deja_vu.config.max_highlighted c_deja_vu.config.max_highlighted | 1 | references/source/game.lua:582 | 高：固定社区源码，待原版导出交叉验证
system.c_deja_vu.cost c_deja_vu.cost | 4 | references/source/game.lua:582 | 高：固定社区源码，待原版导出交叉验证
system.c_deja_vu.effects.0 回放印记：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1},"action":"selectedSet","field":"seal","value":"red"} | references/source/card.lua:1178-1186; references/source/card.lua:1564-1567; references/source/game.lua:582 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_devil.config.max_highlighted c_devil.config.max_highlighted | 1 | references/source/game.lua:548 | 高：固定社区源码，待原版导出交叉验证
system.c_devil.config.mod_conv c_devil.config.mod_conv | m_gold | references/source/game.lua:548 | 高：固定社区源码，待原版导出交叉验证
system.c_devil.cost c_devil.cost | 3 | references/source/game.lua:548 | 高：固定社区源码，待原版导出交叉验证
system.c_devil.effects.0 镀金：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1},"action":"selectedSet","field":"enhancement","value":"gold"} | references/source/card.lua:1101-1106; references/source/card.lua:1142-1144; references/source/card.lua:1564-1567; references/source/game.lua:548 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_earth.config.hand_type c_earth.config.hand_type | Full House | references/source/game.lua:559 | 高：固定社区源码，待原版导出交叉验证
system.c_earth.cost c_earth.cost | 3 | references/source/game.lua:559 | 高：固定社区源码，待原版导出交叉验证
system.c_earth.effects.0 满座航线：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"fullHouse","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:559 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_earth.freq c_earth.freq | 1 | references/source/game.lua:559 | 高：固定社区源码，待原版导出交叉验证
system.c_ectoplasm.cost c_ectoplasm.cost | 4 | references/source/game.lua:579 | 高：固定社区源码，待原版导出交叉验证
system.c_ectoplasm.effects.0 增位契约：consume时机的randomJokerEdition规则 | {"trigger":"consume","condition":{"editionlessJoker":true},"action":"randomJokerEdition","edition":"negative"} | references/source/card.lua:1467-1492; references/source/card.lua:1547-1548; references/source/functions/common_events.lua:2055-2080; references/source/game.lua:579 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_ectoplasm.effects.1 增位契约：consume时机的reduceHandEscalating规则 | {"trigger":"consume","condition":{},"action":"reduceHandEscalating"} | references/source/card.lua:1494-1497; references/source/game.lua:579 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_emperor.config.tarots c_emperor.config.tarots | 2 | references/source/game.lua:537 | 高：固定社区源码，待原版导出交叉验证
system.c_emperor.cost c_emperor.cost | 3 | references/source/game.lua:537 | 高：固定社区源码，待原版导出交叉验证
system.c_emperor.effects.0 异术双笺：consume时机的spawnConsumables规则 | {"trigger":"consume","condition":{},"action":"spawnConsumables","kind":"tarot","count":2} | references/source/card.lua:1401-1411; references/source/card.lua:1550-1551; references/source/game.lua:537 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_empress.config.max_highlighted c_empress.config.max_highlighted | 2 | references/source/game.lua:536 | 高：固定社区源码，待原版导出交叉验证
system.c_empress.config.mod_conv c_empress.config.mod_conv | m_mult | references/source/game.lua:536 | 高：固定社区源码，待原版导出交叉验证
system.c_empress.cost c_empress.cost | 3 | references/source/game.lua:536 | 高：固定社区源码，待原版导出交叉验证
system.c_empress.effects.0 添势：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":2},"action":"selectedSet","field":"enhancement","value":"mult"} | references/source/card.lua:1101-1106; references/source/card.lua:1142-1144; references/source/card.lua:1564-1567; references/source/game.lua:536 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_eris.config.hand_type c_eris.config.hand_type | Flush Five | references/source/game.lua:568 | 高：固定社区源码，待原版导出交叉验证
system.c_eris.config.softlock c_eris.config.softlock | true | references/source/game.lua:568 | 高：固定社区源码，待原版导出交叉验证
system.c_eris.cost c_eris.cost | 3 | references/source/game.lua:568 | 高：固定社区源码，待原版导出交叉验证
system.c_eris.effects.0 同色五影：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"flushFive","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:568 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_eris.freq c_eris.freq | 1 | references/source/game.lua:568 | 高：固定社区源码，待原版导出交叉验证
system.c_familiar.config.extra c_familiar.config.extra | 3 | references/source/game.lua:571 | 高：固定社区源码，待原版导出交叉验证
system.c_familiar.config.remove_card c_familiar.config.remove_card | true | references/source/game.lua:571 | 高：固定社区源码，待原版导出交叉验证
system.c_familiar.cost c_familiar.cost | 4 | references/source/game.lua:571 | 高：固定社区源码，待原版导出交叉验证
system.c_familiar.effects.0 三面新生：consume时机的removeRandom规则 | {"trigger":"consume","condition":{"handMin":2},"action":"removeRandom","count":1} | references/source/card.lua:1292-1309; references/source/card.lua:1570-1574; references/source/game.lua:571 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_familiar.effects.1 三面新生：consume时机的spawnPlayingCards规则 | {"trigger":"consume","condition":{},"action":"spawnPlayingCards","count":3,"ranks":[11,12,13],"enhanced":true,"excludeEnhancements":["stone"]} | references/source/card.lua:1319-1321; references/source/card.lua:1315-1338; references/source/game.lua:571 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_fool.cost c_fool.cost | 3 | references/source/game.lua:533 | 高：固定社区源码，待原版导出交叉验证
system.c_fool.effects.0 回声：consume时机的copyLastConsumable规则 | {"trigger":"consume","condition":{},"action":"copyLastConsumable"} | references/source/card.lua:1373-1381; references/source/card.lua:1553-1555; references/source/game.lua:533 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_grim.config.extra c_grim.config.extra | 2 | references/source/game.lua:572 | 高：固定社区源码，待原版导出交叉验证
system.c_grim.config.remove_card c_grim.config.remove_card | true | references/source/game.lua:572 | 高：固定社区源码，待原版导出交叉验证
system.c_grim.cost c_grim.cost | 4 | references/source/game.lua:572 | 高：固定社区源码，待原版导出交叉验证
system.c_grim.effects.0 双尖新生：consume时机的removeRandom规则 | {"trigger":"consume","condition":{"handMin":2},"action":"removeRandom","count":1} | references/source/card.lua:1292-1309; references/source/card.lua:1570-1574; references/source/game.lua:572 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_grim.effects.1 双尖新生：consume时机的spawnPlayingCards规则 | {"trigger":"consume","condition":{},"action":"spawnPlayingCards","count":2,"ranks":[14],"enhanced":true,"excludeEnhancements":["stone"]} | references/source/card.lua:1322-1324; references/source/card.lua:1315-1338; references/source/game.lua:572 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_hanged_man.config.max_highlighted c_hanged_man.config.max_highlighted | 2 | references/source/game.lua:545 | 高：固定社区源码，待原版导出交叉验证
system.c_hanged_man.config.remove_card c_hanged_man.config.remove_card | true | references/source/game.lua:545 | 高：固定社区源码，待原版导出交叉验证
system.c_hanged_man.cost c_hanged_man.cost | 3 | references/source/game.lua:545 | 高：固定社区源码，待原版导出交叉验证
system.c_hanged_man.effects.0 删章：consume时机的removeSelected规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":2},"action":"removeSelected"} | references/source/card.lua:1271-1289; references/source/card.lua:1564-1567; references/source/game.lua:545 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_heirophant.config.max_highlighted c_heirophant.config.max_highlighted | 2 | references/source/game.lua:538 | 高：固定社区源码，待原版导出交叉验证
system.c_heirophant.config.mod_conv c_heirophant.config.mod_conv | m_bonus | references/source/game.lua:538 | 高：固定社区源码，待原版导出交叉验证
system.c_heirophant.cost c_heirophant.cost | 3 | references/source/game.lua:538 | 高：固定社区源码，待原版导出交叉验证
system.c_heirophant.effects.0 添筹：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":2},"action":"selectedSet","field":"enhancement","value":"bonus"} | references/source/card.lua:1101-1106; references/source/card.lua:1142-1144; references/source/card.lua:1564-1567; references/source/game.lua:538 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_hermit.config.extra c_hermit.config.extra | 20 | references/source/game.lua:542 | 高：固定社区源码，待原版导出交叉验证
system.c_hermit.cost c_hermit.cost | 3 | references/source/game.lua:542 | 高：固定社区源码，待原版导出交叉验证
system.c_hermit.effects.0 积蓄：consume时机的gainCappedCash规则 | {"trigger":"consume","condition":{},"action":"gainCappedCash","cap":20} | references/source/card.lua:1385-1390; references/source/game.lua:542 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_hex.config.extra c_hex.config.extra | 2 | references/source/game.lua:583 | 高：固定社区源码，待原版导出交叉验证
system.c_hex.cost c_hex.cost | 4 | references/source/game.lua:583 | 高：固定社区源码，待原版导出交叉验证
system.c_hex.effects.0 彩契：consume时机的randomJokerEdition规则 | {"trigger":"consume","condition":{"editionlessJoker":true},"action":"randomJokerEdition","edition":"polychrome","pruneOthers":true} | references/source/card.lua:1467-1492; references/source/card.lua:1547-1548; references/source/functions/common_events.lua:2055-2080; references/source/game.lua:583 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_high_priestess.config.planets c_high_priestess.config.planets | 2 | references/source/game.lua:535 | 高：固定社区源码，待原版导出交叉验证
system.c_high_priestess.cost c_high_priestess.cost | 3 | references/source/game.lua:535 | 高：固定社区源码，待原版导出交叉验证
system.c_high_priestess.effects.0 观星双笺：consume时机的spawnConsumables规则 | {"trigger":"consume","condition":{},"action":"spawnConsumables","kind":"planet","count":2} | references/source/card.lua:1401-1411; references/source/card.lua:1550-1551; references/source/game.lua:535 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_immolate.config.extra.destroy c_immolate.config.extra.destroy | 5 | references/source/game.lua:580 | 高：固定社区源码，待原版导出交叉验证
system.c_immolate.config.extra.dollars c_immolate.config.extra.dollars | 20 | references/source/game.lua:580 | 高：固定社区源码，待原版导出交叉验证
system.c_immolate.config.remove_card c_immolate.config.remove_card | true | references/source/game.lua:580 | 高：固定社区源码，待原版导出交叉验证
system.c_immolate.cost c_immolate.cost | 4 | references/source/game.lua:580 | 高：固定社区源码，待原版导出交叉验证
system.c_immolate.effects.0 焚纸换金：consume时机的removeRandom规则 | {"trigger":"consume","condition":{"handMin":2},"action":"removeRandom","count":5} | references/source/card.lua:1340-1346; references/source/card.lua:1570-1574; references/source/game.lua:580 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_immolate.effects.1 焚纸换金：consume时机的add规则 | {"trigger":"consume","condition":{},"action":"add","field":"dollars","value":20} | references/source/card.lua:1340-1367; references/source/card.lua:1570-1574; references/source/game.lua:580 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_incantation.config.extra c_incantation.config.extra | 4 | references/source/game.lua:573 | 高：固定社区源码，待原版导出交叉验证
system.c_incantation.config.remove_card c_incantation.config.remove_card | true | references/source/game.lua:573 | 高：固定社区源码，待原版导出交叉验证
system.c_incantation.cost c_incantation.cost | 4 | references/source/game.lua:573 | 高：固定社区源码，待原版导出交叉验证
system.c_incantation.effects.0 四数新生：consume时机的removeRandom规则 | {"trigger":"consume","condition":{"handMin":2},"action":"removeRandom","count":1} | references/source/card.lua:1292-1309; references/source/card.lua:1570-1574; references/source/game.lua:573 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_incantation.effects.1 四数新生：consume时机的spawnPlayingCards规则 | {"trigger":"consume","condition":{},"action":"spawnPlayingCards","count":4,"ranks":[2,3,4,5,6,7,8,9,10],"enhanced":true,"excludeEnhancements":["stone"]} | references/source/card.lua:1325-1327; references/source/card.lua:1315-1338; references/source/game.lua:573 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_judgement.cost c_judgement.cost | 3 | references/source/game.lua:553 | 高：固定社区源码，待原版导出交叉验证
system.c_judgement.effects.0 新伴：consume时机的spawnJoker规则 | {"trigger":"consume","condition":{"freeJokerSlot":true},"action":"spawnJoker","rarity":"random"} | references/source/card.lua:1415-1421; references/source/card.lua:1557-1562; references/source/game.lua:553 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_jupiter.config.hand_type c_jupiter.config.hand_type | Flush | references/source/game.lua:561 | 高：固定社区源码，待原版导出交叉验证
system.c_jupiter.cost c_jupiter.cost | 3 | references/source/game.lua:561 | 高：固定社区源码，待原版导出交叉验证
system.c_jupiter.effects.0 同色航线：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"flush","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:561 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_jupiter.freq c_jupiter.freq | 1 | references/source/game.lua:561 | 高：固定社区源码，待原版导出交叉验证
system.c_justice.config.max_highlighted c_justice.config.max_highlighted | 1 | references/source/game.lua:541 | 高：固定社区源码，待原版导出交叉验证
system.c_justice.config.mod_conv c_justice.config.mod_conv | m_glass | references/source/game.lua:541 | 高：固定社区源码，待原版导出交叉验证
system.c_justice.cost c_justice.cost | 3 | references/source/game.lua:541 | 高：固定社区源码，待原版导出交叉验证
system.c_justice.effects.0 脆光：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1},"action":"selectedSet","field":"enhancement","value":"glass"} | references/source/card.lua:1101-1106; references/source/card.lua:1142-1144; references/source/card.lua:1564-1567; references/source/game.lua:541 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_lovers.config.max_highlighted c_lovers.config.max_highlighted | 1 | references/source/game.lua:539 | 高：固定社区源码，待原版导出交叉验证
system.c_lovers.config.mod_conv c_lovers.config.mod_conv | m_wild | references/source/game.lua:539 | 高：固定社区源码，待原版导出交叉验证
system.c_lovers.cost c_lovers.cost | 3 | references/source/game.lua:539 | 高：固定社区源码，待原版导出交叉验证
system.c_lovers.effects.0 万色：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1},"action":"selectedSet","field":"enhancement","value":"wild"} | references/source/card.lua:1101-1106; references/source/card.lua:1142-1144; references/source/card.lua:1564-1567; references/source/game.lua:539 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_magician.config.max_highlighted c_magician.config.max_highlighted | 2 | references/source/game.lua:534 | 高：固定社区源码，待原版导出交叉验证
system.c_magician.config.mod_conv c_magician.config.mod_conv | m_lucky | references/source/game.lua:534 | 高：固定社区源码，待原版导出交叉验证
system.c_magician.cost c_magician.cost | 3 | references/source/game.lua:534 | 高：固定社区源码，待原版导出交叉验证
system.c_magician.effects.0 吉签：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":2},"action":"selectedSet","field":"enhancement","value":"lucky"} | references/source/card.lua:1101-1106; references/source/card.lua:1142-1144; references/source/card.lua:1564-1567; references/source/game.lua:534 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_mars.config.hand_type c_mars.config.hand_type | Four of a Kind | references/source/game.lua:560 | 高：固定社区源码，待原版导出交叉验证
system.c_mars.cost c_mars.cost | 3 | references/source/game.lua:560 | 高：固定社区源码，待原版导出交叉验证
system.c_mars.effects.0 四棱航线：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"fourOfAKind","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:560 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_mars.freq c_mars.freq | 1 | references/source/game.lua:560 | 高：固定社区源码，待原版导出交叉验证
system.c_medium.config.extra c_medium.config.extra | Purple | references/source/game.lua:585 | 高：固定社区源码，待原版导出交叉验证
system.c_medium.config.max_highlighted c_medium.config.max_highlighted | 1 | references/source/game.lua:585 | 高：固定社区源码，待原版导出交叉验证
system.c_medium.cost c_medium.cost | 4 | references/source/game.lua:585 | 高：固定社区源码，待原版导出交叉验证
system.c_medium.effects.0 异术印记：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1},"action":"selectedSet","field":"seal","value":"purple"} | references/source/card.lua:1178-1186; references/source/card.lua:1564-1567; references/source/game.lua:585 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_mercury.config.hand_type c_mercury.config.hand_type | Pair | references/source/game.lua:557 | 高：固定社区源码，待原版导出交叉验证
system.c_mercury.cost c_mercury.cost | 3 | references/source/game.lua:557 | 高：固定社区源码，待原版导出交叉验证
system.c_mercury.effects.0 双子航线：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"pair","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:557 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_mercury.freq c_mercury.freq | 1 | references/source/game.lua:557 | 高：固定社区源码，待原版导出交叉验证
system.c_moon.config.max_highlighted c_moon.config.max_highlighted | 3 | references/source/game.lua:551 | 高：固定社区源码，待原版导出交叉验证
system.c_moon.config.suit_conv c_moon.config.suit_conv | Clubs | references/source/game.lua:551 | 高：固定社区源码，待原版导出交叉验证
system.c_moon.cost c_moon.cost | 3 | references/source/game.lua:551 | 高：固定社区源码，待原版导出交叉验证
system.c_moon.effects.0 叶染：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":3},"action":"selectedSet","field":"suit","value":"clubs"} | references/source/card.lua:1137-1139; references/source/card.lua:1564-1567; references/source/game.lua:551 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_neptune.config.hand_type c_neptune.config.hand_type | Straight Flush | references/source/game.lua:564 | 高：固定社区源码，待原版导出交叉验证
system.c_neptune.cost c_neptune.cost | 3 | references/source/game.lua:564 | 高：固定社区源码，待原版导出交叉验证
system.c_neptune.effects.0 虹桥航线：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"straightFlush","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:564 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_neptune.freq c_neptune.freq | 1 | references/source/game.lua:564 | 高：固定社区源码，待原版导出交叉验证
system.c_ouija.cost c_ouija.cost | 4 | references/source/game.lua:578 | 高：固定社区源码，待原版导出交叉验证
system.c_ouija.effects.0 一数：consume时机的randomizeAllRank规则 | {"trigger":"consume","condition":{"handMin":2},"action":"randomizeAllRank"} | references/source/card.lua:1246-1256; references/source/card.lua:1570-1574; references/source/game.lua:578 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_ouija.effects.1 一数：consume时机的add规则 | {"trigger":"consume","condition":{},"action":"add","field":"handSize","value":-1} | references/source/card.lua:1246-1256; references/source/card.lua:1570-1574; references/source/game.lua:578 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_planet_x.config.hand_type c_planet_x.config.hand_type | Five of a Kind | references/source/game.lua:566 | 高：固定社区源码，待原版导出交叉验证
system.c_planet_x.config.softlock c_planet_x.config.softlock | true | references/source/game.lua:566 | 高：固定社区源码，待原版导出交叉验证
system.c_planet_x.cost c_planet_x.cost | 3 | references/source/game.lua:566 | 高：固定社区源码，待原版导出交叉验证
system.c_planet_x.effects.0 五影航线：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"fiveOfAKind","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:566 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_planet_x.freq c_planet_x.freq | 1 | references/source/game.lua:566 | 高：固定社区源码，待原版导出交叉验证
system.c_pluto.config.hand_type c_pluto.config.hand_type | High Card | references/source/game.lua:565 | 高：固定社区源码，待原版导出交叉验证
system.c_pluto.cost c_pluto.cost | 3 | references/source/game.lua:565 | 高：固定社区源码，待原版导出交叉验证
system.c_pluto.effects.0 孤星航线：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"highCard","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:565 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_pluto.freq c_pluto.freq | 1 | references/source/game.lua:565 | 高：固定社区源码，待原版导出交叉验证
system.c_saturn.config.hand_type c_saturn.config.hand_type | Straight | references/source/game.lua:562 | 高：固定社区源码，待原版导出交叉验证
system.c_saturn.cost c_saturn.cost | 3 | references/source/game.lua:562 | 高：固定社区源码，待原版导出交叉验证
system.c_saturn.effects.0 连续航线：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"straight","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:562 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_saturn.freq c_saturn.freq | 1 | references/source/game.lua:562 | 高：固定社区源码，待原版导出交叉验证
system.c_sigil.cost c_sigil.cost | 4 | references/source/game.lua:577 | 高：固定社区源码，待原版导出交叉验证
system.c_sigil.effects.0 一色：consume时机的randomizeAllSuit规则 | {"trigger":"consume","condition":{"handMin":2},"action":"randomizeAllSuit"} | references/source/card.lua:1232-1242; references/source/card.lua:1570-1574; references/source/game.lua:577 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_soul.cost c_soul.cost | 4 | references/source/game.lua:587 | 高：固定社区源码，待原版导出交叉验证
system.c_soul.effects.0 传奇来客：consume时机的spawnJoker规则 | {"trigger":"consume","condition":{"freeJokerSlot":true},"action":"spawnJoker","rarity":4} | references/source/card.lua:1415-1421; references/source/card.lua:1557-1562; references/source/game.lua:587 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_soul.hidden c_soul.hidden | true | references/source/game.lua:587 | 高：固定社区源码，待原版导出交叉验证
system.c_star.config.max_highlighted c_star.config.max_highlighted | 3 | references/source/game.lua:550 | 高：固定社区源码，待原版导出交叉验证
system.c_star.config.suit_conv c_star.config.suit_conv | Diamonds | references/source/game.lua:550 | 高：固定社区源码，待原版导出交叉验证
system.c_star.cost c_star.cost | 3 | references/source/game.lua:550 | 高：固定社区源码，待原版导出交叉验证
system.c_star.effects.0 菱染：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":3},"action":"selectedSet","field":"suit","value":"diamonds"} | references/source/card.lua:1137-1139; references/source/card.lua:1564-1567; references/source/game.lua:550 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_strength.config.max_highlighted c_strength.config.max_highlighted | 2 | references/source/game.lua:544 | 高：固定社区源码，待原版导出交叉验证
system.c_strength.config.mod_conv c_strength.config.mod_conv | up_rank | references/source/game.lua:544 | 高：固定社区源码，待原版导出交叉验证
system.c_strength.cost c_strength.cost | 3 | references/source/game.lua:544 | 高：固定社区源码，待原版导出交叉验证
system.c_strength.effects.0 进阶：consume时机的raiseRanks规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":2},"action":"raiseRanks","amount":1} | references/source/card.lua:1121-1134; references/source/card.lua:1564-1567; references/source/game.lua:544 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_sun.config.max_highlighted c_sun.config.max_highlighted | 3 | references/source/game.lua:552 | 高：固定社区源码，待原版导出交叉验证
system.c_sun.config.suit_conv c_sun.config.suit_conv | Hearts | references/source/game.lua:552 | 高：固定社区源码，待原版导出交叉验证
system.c_sun.cost c_sun.cost | 3 | references/source/game.lua:552 | 高：固定社区源码，待原版导出交叉验证
system.c_sun.effects.0 心染：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":3},"action":"selectedSet","field":"suit","value":"hearts"} | references/source/card.lua:1137-1139; references/source/card.lua:1564-1567; references/source/game.lua:552 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_talisman.config.extra c_talisman.config.extra | Gold | references/source/game.lua:574 | 高：固定社区源码，待原版导出交叉验证
system.c_talisman.config.max_highlighted c_talisman.config.max_highlighted | 1 | references/source/game.lua:574 | 高：固定社区源码，待原版导出交叉验证
system.c_talisman.cost c_talisman.cost | 4 | references/source/game.lua:574 | 高：固定社区源码，待原版导出交叉验证
system.c_talisman.effects.0 金色印记：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1},"action":"selectedSet","field":"seal","value":"gold"} | references/source/card.lua:1178-1186; references/source/card.lua:1564-1567; references/source/game.lua:574 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_temperance.config.extra c_temperance.config.extra | 50 | references/source/game.lua:547 | 高：固定社区源码，待原版导出交叉验证
system.c_temperance.cost c_temperance.cost | 3 | references/source/game.lua:547 | 高：固定社区源码，待原版导出交叉验证
system.c_temperance.effects.0 盘点：consume时机的gainJokerSellTotal规则 | {"trigger":"consume","condition":{},"action":"gainJokerSellTotal","cap":50} | references/source/card.lua:1393-1398; references/source/card.lua:4167-4174; references/source/game.lua:547 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_tower.config.max_highlighted c_tower.config.max_highlighted | 1 | references/source/game.lua:549 | 高：固定社区源码，待原版导出交叉验证
system.c_tower.config.mod_conv c_tower.config.mod_conv | m_stone | references/source/game.lua:549 | 高：固定社区源码，待原版导出交叉验证
system.c_tower.cost c_tower.cost | 3 | references/source/game.lua:549 | 高：固定社区源码，待原版导出交叉验证
system.c_tower.effects.0 磐石：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1},"action":"selectedSet","field":"enhancement","value":"stone"} | references/source/card.lua:1101-1106; references/source/card.lua:1142-1144; references/source/card.lua:1564-1567; references/source/game.lua:549 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_trance.config.extra c_trance.config.extra | Blue | references/source/game.lua:584 | 高：固定社区源码，待原版导出交叉验证
system.c_trance.config.max_highlighted c_trance.config.max_highlighted | 1 | references/source/game.lua:584 | 高：固定社区源码，待原版导出交叉验证
system.c_trance.cost c_trance.cost | 4 | references/source/game.lua:584 | 高：固定社区源码，待原版导出交叉验证
system.c_trance.effects.0 星色印记：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":1},"action":"selectedSet","field":"seal","value":"blue"} | references/source/card.lua:1178-1186; references/source/card.lua:1564-1567; references/source/game.lua:584 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_uranus.config.hand_type c_uranus.config.hand_type | Two Pair | references/source/game.lua:563 | 高：固定社区源码，待原版导出交叉验证
system.c_uranus.cost c_uranus.cost | 3 | references/source/game.lua:563 | 高：固定社区源码，待原版导出交叉验证
system.c_uranus.effects.0 双双航线：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"twoPair","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:563 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_uranus.freq c_uranus.freq | 1 | references/source/game.lua:563 | 高：固定社区源码，待原版导出交叉验证
system.c_venus.config.hand_type c_venus.config.hand_type | Three of a Kind | references/source/game.lua:558 | 高：固定社区源码，待原版导出交叉验证
system.c_venus.cost c_venus.cost | 3 | references/source/game.lua:558 | 高：固定社区源码，待原版导出交叉验证
system.c_venus.effects.0 三影航线：consume时机的upgradeHand规则 | {"trigger":"consume","condition":{},"action":"upgradeHand","hand":"threeOfAKind","amount":1} | references/source/card.lua:1264-1266; references/source/functions/common_events.lua:464-468; references/source/game.lua:558 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_venus.freq c_venus.freq | 1 | references/source/game.lua:558 | 高：固定社区源码，待原版导出交叉验证
system.c_wheel_of_fortune.config.extra c_wheel_of_fortune.config.extra | 4 | references/source/game.lua:543 | 高：固定社区源码，待原版导出交叉验证
system.c_wheel_of_fortune.cost c_wheel_of_fortune.cost | 3 | references/source/game.lua:543 | 高：固定社区源码，待原版导出交叉验证
system.c_wheel_of_fortune.effects.0 光谱轮：consume时机的randomJokerEdition规则 | {"trigger":"consume","condition":{"editionlessJoker":true},"action":"randomJokerEdition","probabilityDenominator":4,"edition":"random"} | references/source/card.lua:1467-1492; references/source/card.lua:1547-1548; references/source/functions/common_events.lua:2055-2080; references/source/game.lua:543 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_world.config.max_highlighted c_world.config.max_highlighted | 3 | references/source/game.lua:554 | 高：固定社区源码，待原版导出交叉验证
system.c_world.config.suit_conv c_world.config.suit_conv | Spades | references/source/game.lua:554 | 高：固定社区源码，待原版导出交叉验证
system.c_world.cost c_world.cost | 3 | references/source/game.lua:554 | 高：固定社区源码，待原版导出交叉验证
system.c_world.effects.0 锋染：consume时机的selectedSet规则 | {"trigger":"consume","condition":{"selectedMin":1,"selectedMax":3},"action":"selectedSet","field":"suit","value":"spades"} | references/source/card.lua:1137-1139; references/source/card.lua:1564-1567; references/source/game.lua:554 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_wraith.cost c_wraith.cost | 4 | references/source/game.lua:576 | 高：固定社区源码，待原版导出交叉验证
system.c_wraith.effects.0 高阶换约：consume时机的spawnJoker规则 | {"trigger":"consume","condition":{"freeJokerSlot":true},"action":"spawnJoker","rarity":3} | references/source/card.lua:1454-1464; references/source/card.lua:1557-1562; references/source/game.lua:576 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.c_wraith.effects.1 高阶换约：consume时机的set规则 | {"trigger":"consume","condition":{},"action":"set","field":"dollars","value":0} | references/source/card.lua:1454-1464; references/source/card.lua:1557-1562; references/source/game.lua:576 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.e_base.effects.0 素面：score时机的scoringEdition规则 | {"trigger":"score","condition":{},"action":"scoringEdition","kind":"base","config":{}} | references/source/card.lua:1016-1030; references/source/game.lua:658 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.e_base.unlocked e_base.unlocked | true | references/source/game.lua:658 | 高：固定社区源码，待原版导出交叉验证
system.e_foil.config.extra e_foil.config.extra | 50 | references/source/game.lua:659 | 高：固定社区源码，待原版导出交叉验证
system.e_foil.effects.0 银纹：score时机的scoringEdition规则 | {"trigger":"score","condition":{},"action":"scoringEdition","kind":"foil","config":{"extra":50}} | references/source/card.lua:395-399; references/source/card.lua:1026-1027; references/source/game.lua:659 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.e_foil.unlocked e_foil.unlocked | true | references/source/game.lua:659 | 高：固定社区源码，待原版导出交叉验证
system.e_holo.config.extra e_holo.config.extra | 10 | references/source/game.lua:660 | 高：固定社区源码，待原版导出交叉验证
system.e_holo.effects.0 幻纹：score时机的scoringEdition规则 | {"trigger":"score","condition":{},"action":"scoringEdition","kind":"holo","config":{"extra":10}} | references/source/card.lua:390-394; references/source/card.lua:1023-1024; references/source/game.lua:660 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.e_holo.unlocked e_holo.unlocked | true | references/source/game.lua:660 | 高：固定社区源码，待原版导出交叉验证
system.e_negative.config.extra e_negative.config.extra | 1 | references/source/game.lua:662 | 高：固定社区源码，待原版导出交叉验证
system.e_negative.effects.0 空域：score时机的scoringEdition规则 | {"trigger":"score","condition":{},"action":"scoringEdition","kind":"negative","config":{"extra":1}} | references/source/card.lua:405-417; references/source/game.lua:662 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.e_negative.unlocked e_negative.unlocked | true | references/source/game.lua:662 | 高：固定社区源码，待原版导出交叉验证
system.e_polychrome.config.extra e_polychrome.config.extra | 1.5 | references/source/game.lua:661 | 高：固定社区源码，待原版导出交叉验证
system.e_polychrome.effects.0 虹纹：score时机的scoringEdition规则 | {"trigger":"score","condition":{},"action":"scoringEdition","kind":"polychrome","config":{"extra":1.5}} | references/source/card.lua:400-404; references/source/card.lua:1020-1021; references/source/game.lua:661 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.e_polychrome.unlocked e_polychrome.unlocked | true | references/source/game.lua:661 | 高：固定社区源码，待原版导出交叉验证
system.economy.bossRerollCost economy.bossRerollCost | 10 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.editionSurcharges.foil economy.editionSurcharges.foil | 2 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.editionSurcharges.holo economy.editionSurcharges.holo | 3 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.editionSurcharges.negative economy.editionSurcharges.negative | 5 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.editionSurcharges.polychrome economy.editionSurcharges.polychrome | 5 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.interestAmount economy.interestAmount | 1 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.interestCap economy.interestCap | 25 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.interestUnit economy.interestUnit | 5 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.minimumPrice economy.minimumPrice | 1 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.moneyPerDiscard economy.moneyPerDiscard | 0 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.moneyPerHand economy.moneyPerHand | 1 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.perishableExpiresAt 短期伙伴永久静默门槛，盲注清理和禁用均不解除 | 0 | references/source/card.lua:526-532 | 高：固定社区源码，待原版导出交叉验证
system.economy.perishableRounds economy.perishableRounds | 5 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.priceRoundOffset economy.priceRoundOffset | 0.5 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.rentalPerRound economy.rentalPerRound | 3 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.rentalPurchase economy.rentalPurchase | 1 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.rerollIncrement economy.rerollIncrement | 1 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.sellDivisor economy.sellDivisor | 2 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.economy.sellMinimum economy.sellMinimum | 1 | references/source/card.lua:369-384; references/source/game.lua:1915; references/source/functions/state_events.lua:1166-1202; references/source/functions/common_events.lua:2263-2268 | 高：固定社区源码，待原版导出交叉验证
system.m_bonus.config.bonus m_bonus.config.bonus | 30 | references/source/game.lua:648 | 高：固定社区源码，待原版导出交叉验证
system.m_bonus.effects.0 盈筹：cardOrHeld时机的scoringEnhancement规则 | {"trigger":"cardOrHeld","condition":{},"action":"scoringEnhancement","kind":"bonus","config":{"bonus":30}} | references/source/card.lua:976-982; references/source/game.lua:648 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.m_bonus.max m_bonus.max | 500 | references/source/game.lua:648 | 高：固定社区源码，待原版导出交叉验证
system.m_glass.config.Xmult m_glass.config.Xmult | 2 | references/source/game.lua:651 | 高：固定社区源码，待原版导出交叉验证
system.m_glass.config.extra m_glass.config.extra | 4 | references/source/game.lua:651 | 高：固定社区源码，待原版导出交叉验证
system.m_glass.effects.0 脆晶：cardOrHeld时机的scoringEnhancement规则 | {"trigger":"cardOrHeld","condition":{},"action":"scoringEnhancement","kind":"glass","config":{"Xmult":2,"extra":4}} | references/source/card.lua:999-1003; references/source/functions/state_events.lua:961-963; references/source/game.lua:651 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.m_glass.max m_glass.max | 500 | references/source/game.lua:651 | 高：固定社区源码，待原版导出交叉验证
system.m_gold.config.h_dollars m_gold.config.h_dollars | 3 | references/source/game.lua:654 | 高：固定社区源码，待原版导出交叉验证
system.m_gold.effects.0 留金：cardOrHeld时机的scoringEnhancement规则 | {"trigger":"cardOrHeld","condition":{},"action":"scoringEnhancement","kind":"gold","config":{"h_dollars":3}} | references/source/card.lua:1033-1038; references/source/game.lua:654 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.m_gold.max m_gold.max | 500 | references/source/game.lua:654 | 高：固定社区源码，待原版导出交叉验证
system.m_lucky.config.mult m_lucky.config.mult | 20 | references/source/game.lua:655 | 高：固定社区源码，待原版导出交叉验证
system.m_lucky.config.p_dollars m_lucky.config.p_dollars | 20 | references/source/game.lua:655 | 高：固定社区源码，待原版导出交叉验证
system.m_lucky.effects.0 吉签：cardOrHeld时机的scoringEnhancement规则 | {"trigger":"cardOrHeld","condition":{},"action":"scoringEnhancement","kind":"lucky","config":{"mult":20,"p_dollars":20},"probabilityDenominators":{"mult":5,"dollars":15}} | references/source/card.lua:984-996; references/source/card.lua:1074-1082; references/source/game.lua:655 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.m_lucky.max m_lucky.max | 500 | references/source/game.lua:655 | 高：固定社区源码，待原版导出交叉验证
system.m_mult.config.mult m_mult.config.mult | 4 | references/source/game.lua:649 | 高：固定社区源码，待原版导出交叉验证
system.m_mult.effects.0 升势：cardOrHeld时机的scoringEnhancement规则 | {"trigger":"cardOrHeld","condition":{},"action":"scoringEnhancement","kind":"mult","config":{"mult":4}} | references/source/card.lua:984-996; references/source/game.lua:649 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.m_mult.max m_mult.max | 500 | references/source/game.lua:649 | 高：固定社区源码，待原版导出交叉验证
system.m_steel.config.h_x_mult m_steel.config.h_x_mult | 1.5 | references/source/game.lua:652 | 高：固定社区源码，待原版导出交叉验证
system.m_steel.effects.0 冷铸：cardOrHeld时机的scoringEnhancement规则 | {"trigger":"cardOrHeld","condition":{},"action":"scoringEnhancement","kind":"steel","config":{"h_x_mult":1.5}} | references/source/card.lua:1011-1014; references/source/game.lua:652 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.m_steel.max m_steel.max | 500 | references/source/game.lua:652 | 高：固定社区源码，待原版导出交叉验证
system.m_stone.config.bonus m_stone.config.bonus | 50 | references/source/game.lua:653 | 高：固定社区源码，待原版导出交叉验证
system.m_stone.effects.0 磐石：cardOrHeld时机的scoringEnhancement规则 | {"trigger":"cardOrHeld","condition":{},"action":"scoringEnhancement","kind":"stone","config":{"bonus":50}} | references/source/card.lua:976-981; references/source/game.lua:653 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.m_stone.max m_stone.max | 500 | references/source/game.lua:653 | 高：固定社区源码，待原版导出交叉验证
system.m_wild.effects.0 全色：cardOrHeld时机的scoringEnhancement规则 | {"trigger":"cardOrHeld","condition":{},"action":"scoringEnhancement","kind":"wild","config":{}} | references/source/card.lua:4064-4088; references/source/game.lua:650 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.m_wild.max m_wild.max | 500 | references/source/game.lua:650 | 高：固定社区源码，待原版导出交叉验证
system.mechanics.duplicatePolicy duplicatePolicy服务机制 | {"occupiedAreas":["ownedJokers","ownedConsumables","shop","pack"],"allowWithActiveShowman":true,"allowWithDebuffedShowman":false} | references/source/card.lua:349-353; references/source/functions/common_events.lua:1987-1989; references/source/functions/misc_functions.lua:903-913 | 高：人工阅读固定社区源码，待原版对照
system.mechanics.jokerStickers jokerStickers服务机制 | {"areas":["shop","pack"],"eternalThreshold":0.7,"perishableLow":0.4,"perishableHigh":0.7,"rentalThreshold":0.7,"eternalPerishableSharedRoll":true,"perishableRounds":5} | references/source/functions/common_events.lua:2137-2147; references/source/game.lua:2055-2059 | 高：人工阅读固定社区源码，待原版对照
system.mechanics.observatoryOrder observatoryOrder服务机制 | {"stage":"afterJokerMainBeforeDeckFinal","perCard":true,"consumes":false} | references/source/card.lua:2291-2300; references/source/functions/state_events.lua:877-959 | 高：人工阅读固定社区源码，待原版对照
system.mechanics.orbitalSelection orbitalSelection服务机制 | {"time":"blindChoicePreview","visibleOnly":true,"cache":"anteAndBlind","rngKey":"orbital"} | references/source/functions/UI_definitions.lua:1506-1515; references/source/tag.lua:105-109 | 高：人工阅读固定社区源码，待原版对照
system.mechanics.perishableDebuff perishableDebuff服务机制 | {"expiresAt":0,"persistsAfterBlindEnd":true,"persistsAfterBlindDisable":true} | references/source/card.lua:526-532; references/source/blind.lua:588-596 | 高：人工阅读固定社区源码，待原版对照
system.mechanics.roundTemporaryHandSize 回合临时手牌容量回收 | {"expiresAt":"roundEnd","sourceField":"temporaryHandSize","preservePermanentChanges":true} | references/source/functions/state_events.lua:270; references/source/tag.lua:339-340 | 高：人工阅读固定社区源码，待原版对照
system.p_arcana_jumbo_1.config.choose p_arcana_jumbo_1.config.choose | 1 | references/source/game.lua:669 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_jumbo_1.config.extra p_arcana_jumbo_1.config.extra | 5 | references/source/game.lua:669 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_jumbo_1.cost p_arcana_jumbo_1.cost | 6 | references/source/game.lua:669 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_jumbo_1.effects.0 异术大包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":1,"packKind":"arcana"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:669 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_arcana_jumbo_1.kind p_arcana_jumbo_1.kind | Arcana | references/source/game.lua:669 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_jumbo_1.weight p_arcana_jumbo_1.weight | 1 | references/source/game.lua:669 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_jumbo_2.config.choose p_arcana_jumbo_2.config.choose | 1 | references/source/game.lua:670 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_jumbo_2.config.extra p_arcana_jumbo_2.config.extra | 5 | references/source/game.lua:670 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_jumbo_2.cost p_arcana_jumbo_2.cost | 6 | references/source/game.lua:670 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_jumbo_2.effects.0 异术大包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":1,"packKind":"arcana"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:670 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_arcana_jumbo_2.kind p_arcana_jumbo_2.kind | Arcana | references/source/game.lua:670 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_jumbo_2.weight p_arcana_jumbo_2.weight | 1 | references/source/game.lua:670 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_mega_1.config.choose p_arcana_mega_1.config.choose | 2 | references/source/game.lua:671 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_mega_1.config.extra p_arcana_mega_1.config.extra | 5 | references/source/game.lua:671 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_mega_1.cost p_arcana_mega_1.cost | 8 | references/source/game.lua:671 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_mega_1.effects.0 异术双选包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":2,"packKind":"arcana"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:671 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_arcana_mega_1.kind p_arcana_mega_1.kind | Arcana | references/source/game.lua:671 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_mega_1.weight p_arcana_mega_1.weight | 0.25 | references/source/game.lua:671 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_mega_2.config.choose p_arcana_mega_2.config.choose | 2 | references/source/game.lua:672 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_mega_2.config.extra p_arcana_mega_2.config.extra | 5 | references/source/game.lua:672 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_mega_2.cost p_arcana_mega_2.cost | 8 | references/source/game.lua:672 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_mega_2.effects.0 异术双选包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":2,"packKind":"arcana"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:672 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_arcana_mega_2.kind p_arcana_mega_2.kind | Arcana | references/source/game.lua:672 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_mega_2.weight p_arcana_mega_2.weight | 0.25 | references/source/game.lua:672 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_1.config.choose p_arcana_normal_1.config.choose | 1 | references/source/game.lua:665 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_1.config.extra p_arcana_normal_1.config.extra | 3 | references/source/game.lua:665 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_1.cost p_arcana_normal_1.cost | 4 | references/source/game.lua:665 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_1.effects.0 异术小包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"arcana"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:665 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_arcana_normal_1.kind p_arcana_normal_1.kind | Arcana | references/source/game.lua:665 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_1.weight p_arcana_normal_1.weight | 1 | references/source/game.lua:665 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_2.config.choose p_arcana_normal_2.config.choose | 1 | references/source/game.lua:666 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_2.config.extra p_arcana_normal_2.config.extra | 3 | references/source/game.lua:666 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_2.cost p_arcana_normal_2.cost | 4 | references/source/game.lua:666 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_2.effects.0 异术小包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"arcana"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:666 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_arcana_normal_2.kind p_arcana_normal_2.kind | Arcana | references/source/game.lua:666 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_2.weight p_arcana_normal_2.weight | 1 | references/source/game.lua:666 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_3.config.choose p_arcana_normal_3.config.choose | 1 | references/source/game.lua:667 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_3.config.extra p_arcana_normal_3.config.extra | 3 | references/source/game.lua:667 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_3.cost p_arcana_normal_3.cost | 4 | references/source/game.lua:667 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_3.effects.0 异术小包 3：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"arcana"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:667 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_arcana_normal_3.kind p_arcana_normal_3.kind | Arcana | references/source/game.lua:667 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_3.weight p_arcana_normal_3.weight | 1 | references/source/game.lua:667 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_4.config.choose p_arcana_normal_4.config.choose | 1 | references/source/game.lua:668 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_4.config.extra p_arcana_normal_4.config.extra | 3 | references/source/game.lua:668 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_4.cost p_arcana_normal_4.cost | 4 | references/source/game.lua:668 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_4.effects.0 异术小包 4：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"arcana"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:668 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_arcana_normal_4.kind p_arcana_normal_4.kind | Arcana | references/source/game.lua:668 | 高：固定社区源码，待原版导出交叉验证
system.p_arcana_normal_4.weight p_arcana_normal_4.weight | 1 | references/source/game.lua:668 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_jumbo_1.config.choose p_buffoon_jumbo_1.config.choose | 1 | references/source/game.lua:695 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_jumbo_1.config.extra p_buffoon_jumbo_1.config.extra | 4 | references/source/game.lua:695 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_jumbo_1.cost p_buffoon_jumbo_1.cost | 6 | references/source/game.lua:695 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_jumbo_1.effects.0 伙伴大包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":4,"choose":1,"packKind":"buffoon"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:695 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_buffoon_jumbo_1.kind p_buffoon_jumbo_1.kind | Buffoon | references/source/game.lua:695 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_jumbo_1.weight p_buffoon_jumbo_1.weight | 0.6 | references/source/game.lua:695 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_mega_1.config.choose p_buffoon_mega_1.config.choose | 2 | references/source/game.lua:696 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_mega_1.config.extra p_buffoon_mega_1.config.extra | 4 | references/source/game.lua:696 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_mega_1.cost p_buffoon_mega_1.cost | 8 | references/source/game.lua:696 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_mega_1.effects.0 伙伴双选包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":4,"choose":2,"packKind":"buffoon"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:696 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_buffoon_mega_1.kind p_buffoon_mega_1.kind | Buffoon | references/source/game.lua:696 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_mega_1.weight p_buffoon_mega_1.weight | 0.15 | references/source/game.lua:696 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_normal_1.config.choose p_buffoon_normal_1.config.choose | 1 | references/source/game.lua:693 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_normal_1.config.extra p_buffoon_normal_1.config.extra | 2 | references/source/game.lua:693 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_normal_1.cost p_buffoon_normal_1.cost | 4 | references/source/game.lua:693 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_normal_1.effects.0 伙伴小包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":2,"choose":1,"packKind":"buffoon"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:693 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_buffoon_normal_1.kind p_buffoon_normal_1.kind | Buffoon | references/source/game.lua:693 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_normal_1.weight p_buffoon_normal_1.weight | 0.6 | references/source/game.lua:693 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_normal_2.config.choose p_buffoon_normal_2.config.choose | 1 | references/source/game.lua:694 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_normal_2.config.extra p_buffoon_normal_2.config.extra | 2 | references/source/game.lua:694 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_normal_2.cost p_buffoon_normal_2.cost | 4 | references/source/game.lua:694 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_normal_2.effects.0 伙伴小包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":2,"choose":1,"packKind":"buffoon"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:694 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_buffoon_normal_2.kind p_buffoon_normal_2.kind | Buffoon | references/source/game.lua:694 | 高：固定社区源码，待原版导出交叉验证
system.p_buffoon_normal_2.weight p_buffoon_normal_2.weight | 0.6 | references/source/game.lua:694 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_jumbo_1.config.choose p_celestial_jumbo_1.config.choose | 1 | references/source/game.lua:677 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_jumbo_1.config.extra p_celestial_jumbo_1.config.extra | 5 | references/source/game.lua:677 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_jumbo_1.cost p_celestial_jumbo_1.cost | 6 | references/source/game.lua:677 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_jumbo_1.effects.0 星图大包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":1,"packKind":"celestial"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:677 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_celestial_jumbo_1.kind p_celestial_jumbo_1.kind | Celestial | references/source/game.lua:677 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_jumbo_1.weight p_celestial_jumbo_1.weight | 1 | references/source/game.lua:677 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_jumbo_2.config.choose p_celestial_jumbo_2.config.choose | 1 | references/source/game.lua:678 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_jumbo_2.config.extra p_celestial_jumbo_2.config.extra | 5 | references/source/game.lua:678 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_jumbo_2.cost p_celestial_jumbo_2.cost | 6 | references/source/game.lua:678 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_jumbo_2.effects.0 星图大包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":1,"packKind":"celestial"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:678 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_celestial_jumbo_2.kind p_celestial_jumbo_2.kind | Celestial | references/source/game.lua:678 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_jumbo_2.weight p_celestial_jumbo_2.weight | 1 | references/source/game.lua:678 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_mega_1.config.choose p_celestial_mega_1.config.choose | 2 | references/source/game.lua:679 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_mega_1.config.extra p_celestial_mega_1.config.extra | 5 | references/source/game.lua:679 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_mega_1.cost p_celestial_mega_1.cost | 8 | references/source/game.lua:679 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_mega_1.effects.0 星图双选包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":2,"packKind":"celestial"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:679 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_celestial_mega_1.kind p_celestial_mega_1.kind | Celestial | references/source/game.lua:679 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_mega_1.weight p_celestial_mega_1.weight | 0.25 | references/source/game.lua:679 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_mega_2.config.choose p_celestial_mega_2.config.choose | 2 | references/source/game.lua:680 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_mega_2.config.extra p_celestial_mega_2.config.extra | 5 | references/source/game.lua:680 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_mega_2.cost p_celestial_mega_2.cost | 8 | references/source/game.lua:680 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_mega_2.effects.0 星图双选包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":2,"packKind":"celestial"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:680 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_celestial_mega_2.kind p_celestial_mega_2.kind | Celestial | references/source/game.lua:680 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_mega_2.weight p_celestial_mega_2.weight | 0.25 | references/source/game.lua:680 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_1.config.choose p_celestial_normal_1.config.choose | 1 | references/source/game.lua:673 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_1.config.extra p_celestial_normal_1.config.extra | 3 | references/source/game.lua:673 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_1.cost p_celestial_normal_1.cost | 4 | references/source/game.lua:673 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_1.effects.0 星图小包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"celestial"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:673 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_celestial_normal_1.kind p_celestial_normal_1.kind | Celestial | references/source/game.lua:673 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_1.weight p_celestial_normal_1.weight | 1 | references/source/game.lua:673 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_2.config.choose p_celestial_normal_2.config.choose | 1 | references/source/game.lua:674 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_2.config.extra p_celestial_normal_2.config.extra | 3 | references/source/game.lua:674 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_2.cost p_celestial_normal_2.cost | 4 | references/source/game.lua:674 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_2.effects.0 星图小包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"celestial"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:674 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_celestial_normal_2.kind p_celestial_normal_2.kind | Celestial | references/source/game.lua:674 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_2.weight p_celestial_normal_2.weight | 1 | references/source/game.lua:674 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_3.config.choose p_celestial_normal_3.config.choose | 1 | references/source/game.lua:675 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_3.config.extra p_celestial_normal_3.config.extra | 3 | references/source/game.lua:675 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_3.cost p_celestial_normal_3.cost | 4 | references/source/game.lua:675 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_3.effects.0 星图小包 3：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"celestial"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:675 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_celestial_normal_3.kind p_celestial_normal_3.kind | Celestial | references/source/game.lua:675 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_3.weight p_celestial_normal_3.weight | 1 | references/source/game.lua:675 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_4.config.choose p_celestial_normal_4.config.choose | 1 | references/source/game.lua:676 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_4.config.extra p_celestial_normal_4.config.extra | 3 | references/source/game.lua:676 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_4.cost p_celestial_normal_4.cost | 4 | references/source/game.lua:676 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_4.effects.0 星图小包 4：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"celestial"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:676 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_celestial_normal_4.kind p_celestial_normal_4.kind | Celestial | references/source/game.lua:676 | 高：固定社区源码，待原版导出交叉验证
system.p_celestial_normal_4.weight p_celestial_normal_4.weight | 1 | references/source/game.lua:676 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_jumbo_1.config.choose p_spectral_jumbo_1.config.choose | 1 | references/source/game.lua:683 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_jumbo_1.config.extra p_spectral_jumbo_1.config.extra | 4 | references/source/game.lua:683 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_jumbo_1.cost p_spectral_jumbo_1.cost | 6 | references/source/game.lua:683 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_jumbo_1.effects.0 异域大包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":4,"choose":1,"packKind":"spectral"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:683 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_spectral_jumbo_1.kind p_spectral_jumbo_1.kind | Spectral | references/source/game.lua:683 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_jumbo_1.weight p_spectral_jumbo_1.weight | 0.3 | references/source/game.lua:683 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_mega_1.config.choose p_spectral_mega_1.config.choose | 2 | references/source/game.lua:684 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_mega_1.config.extra p_spectral_mega_1.config.extra | 4 | references/source/game.lua:684 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_mega_1.cost p_spectral_mega_1.cost | 8 | references/source/game.lua:684 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_mega_1.effects.0 异域双选包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":4,"choose":2,"packKind":"spectral"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:684 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_spectral_mega_1.kind p_spectral_mega_1.kind | Spectral | references/source/game.lua:684 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_mega_1.weight p_spectral_mega_1.weight | 0.07 | references/source/game.lua:684 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_normal_1.config.choose p_spectral_normal_1.config.choose | 1 | references/source/game.lua:681 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_normal_1.config.extra p_spectral_normal_1.config.extra | 2 | references/source/game.lua:681 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_normal_1.cost p_spectral_normal_1.cost | 4 | references/source/game.lua:681 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_normal_1.effects.0 异域小包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":2,"choose":1,"packKind":"spectral"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:681 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_spectral_normal_1.kind p_spectral_normal_1.kind | Spectral | references/source/game.lua:681 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_normal_1.weight p_spectral_normal_1.weight | 0.3 | references/source/game.lua:681 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_normal_2.config.choose p_spectral_normal_2.config.choose | 1 | references/source/game.lua:682 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_normal_2.config.extra p_spectral_normal_2.config.extra | 2 | references/source/game.lua:682 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_normal_2.cost p_spectral_normal_2.cost | 4 | references/source/game.lua:682 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_normal_2.effects.0 异域小包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":2,"choose":1,"packKind":"spectral"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:682 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_spectral_normal_2.kind p_spectral_normal_2.kind | Spectral | references/source/game.lua:682 | 高：固定社区源码，待原版导出交叉验证
system.p_spectral_normal_2.weight p_spectral_normal_2.weight | 0.3 | references/source/game.lua:682 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_jumbo_1.config.choose p_standard_jumbo_1.config.choose | 1 | references/source/game.lua:689 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_jumbo_1.config.extra p_standard_jumbo_1.config.extra | 5 | references/source/game.lua:689 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_jumbo_1.cost p_standard_jumbo_1.cost | 6 | references/source/game.lua:689 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_jumbo_1.effects.0 纸牌大包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":1,"packKind":"standard"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:689 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_standard_jumbo_1.kind p_standard_jumbo_1.kind | Standard | references/source/game.lua:689 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_jumbo_1.weight p_standard_jumbo_1.weight | 1 | references/source/game.lua:689 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_jumbo_2.config.choose p_standard_jumbo_2.config.choose | 1 | references/source/game.lua:690 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_jumbo_2.config.extra p_standard_jumbo_2.config.extra | 5 | references/source/game.lua:690 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_jumbo_2.cost p_standard_jumbo_2.cost | 6 | references/source/game.lua:690 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_jumbo_2.effects.0 纸牌大包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":1,"packKind":"standard"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:690 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_standard_jumbo_2.kind p_standard_jumbo_2.kind | Standard | references/source/game.lua:690 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_jumbo_2.weight p_standard_jumbo_2.weight | 1 | references/source/game.lua:690 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_mega_1.config.choose p_standard_mega_1.config.choose | 2 | references/source/game.lua:691 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_mega_1.config.extra p_standard_mega_1.config.extra | 5 | references/source/game.lua:691 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_mega_1.cost p_standard_mega_1.cost | 8 | references/source/game.lua:691 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_mega_1.effects.0 纸牌双选包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":2,"packKind":"standard"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:691 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_standard_mega_1.kind p_standard_mega_1.kind | Standard | references/source/game.lua:691 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_mega_1.weight p_standard_mega_1.weight | 0.25 | references/source/game.lua:691 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_mega_2.config.choose p_standard_mega_2.config.choose | 2 | references/source/game.lua:692 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_mega_2.config.extra p_standard_mega_2.config.extra | 5 | references/source/game.lua:692 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_mega_2.cost p_standard_mega_2.cost | 8 | references/source/game.lua:692 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_mega_2.effects.0 纸牌双选包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":5,"choose":2,"packKind":"standard"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:692 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_standard_mega_2.kind p_standard_mega_2.kind | Standard | references/source/game.lua:692 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_mega_2.weight p_standard_mega_2.weight | 0.25 | references/source/game.lua:692 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_1.config.choose p_standard_normal_1.config.choose | 1 | references/source/game.lua:685 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_1.config.extra p_standard_normal_1.config.extra | 3 | references/source/game.lua:685 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_1.cost p_standard_normal_1.cost | 4 | references/source/game.lua:685 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_1.effects.0 纸牌小包 1：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"standard"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:685 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_standard_normal_1.kind p_standard_normal_1.kind | Standard | references/source/game.lua:685 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_1.weight p_standard_normal_1.weight | 1 | references/source/game.lua:685 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_2.config.choose p_standard_normal_2.config.choose | 1 | references/source/game.lua:686 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_2.config.extra p_standard_normal_2.config.extra | 3 | references/source/game.lua:686 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_2.cost p_standard_normal_2.cost | 4 | references/source/game.lua:686 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_2.effects.0 纸牌小包 2：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"standard"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:686 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_standard_normal_2.kind p_standard_normal_2.kind | Standard | references/source/game.lua:686 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_2.weight p_standard_normal_2.weight | 1 | references/source/game.lua:686 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_3.config.choose p_standard_normal_3.config.choose | 1 | references/source/game.lua:687 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_3.config.extra p_standard_normal_3.config.extra | 3 | references/source/game.lua:687 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_3.cost p_standard_normal_3.cost | 4 | references/source/game.lua:687 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_3.effects.0 纸牌小包 3：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"standard"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:687 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_standard_normal_3.kind p_standard_normal_3.kind | Standard | references/source/game.lua:687 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_3.weight p_standard_normal_3.weight | 1 | references/source/game.lua:687 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_4.config.choose p_standard_normal_4.config.choose | 1 | references/source/game.lua:688 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_4.config.extra p_standard_normal_4.config.extra | 3 | references/source/game.lua:688 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_4.cost p_standard_normal_4.cost | 4 | references/source/game.lua:688 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_4.effects.0 纸牌小包 4：open时机的openPack规则 | {"trigger":"open","condition":{},"action":"openPack","size":3,"choose":1,"packKind":"standard"} | references/source/card.lua:1692-1709; references/source/card.lua:1726-1778; references/source/game.lua:688 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.p_standard_normal_4.kind p_standard_normal_4.kind | Standard | references/source/game.lua:688 | 高：固定社区源码，待原版导出交叉验证
system.p_standard_normal_4.weight p_standard_normal_4.weight | 1 | references/source/game.lua:688 | 高：固定社区源码，待原版导出交叉验证
system.playingCardCost 普通和强化纸牌的商店基础价 | 1 | references/source/card.lua:335; references/source/game.lua:365,648-655 | 高：固定社区源码，待原版导出交叉验证
system.shop.boosterSlots shop.boosterSlots | 2 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.categoryOrder 商店分类累计概率区间顺序 | ["joker","tarot","planet","playingCard","spectral"] | references/source/functions/UI_definitions.lua:769-775 | 高：固定社区源码，待原版导出交叉验证
system.shop.editionCumulative.foil shop.editionCumulative.foil | 0.04 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.editionCumulative.holo shop.editionCumulative.holo | 0.02 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.editionCumulative.negative shop.editionCumulative.negative | 0.003 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.editionCumulative.polychrome shop.editionCumulative.polychrome | 0.006 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.editionRate shop.editionRate | 1 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.firstPackBuffoon shop.firstPackBuffoon | true | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.guaranteedEditionMultiplier shop.guaranteedEditionMultiplier | 25 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.jokerSlots shop.jokerSlots | 2 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.packRules 卡包内概率与纸牌进货强化规则 | {"arcanaSpectralThreshold":0.8,"standardEnhancedThreshold":0.6,"standardEditionModifier":2,"standardSealThreshold":0.8,"standardSealThresholds":{"red":0.75,"blue":0.5,"gold":0.25,"purple":0},"hiddenReplacementThreshold":0.997,"illusionEnhancedThreshold":0.6,"illusionEditionThreshold":0.8,"illusionEditionThresholds":{"polychrome":0.85,"holo":0.5,"foil":0}} | references/source/card.lua:1731-1778; references/source/functions/UI_definitions.lua:772-791; references/source/functions/common_events.lua:2088-2101 | 高：固定社区源码，待原版导出交叉验证
system.shop.poolRules 卡池限制、隐藏牌型条件与兜底项 | {"hiddenPlanetRequiresPlayedHand":true,"uniqueOwnedExceptShowman":true,"voucherRequiresAllPrerequisites":true,"hiddenConsumersNotInNormalPool":true,"fallback":{"tarot":"c_strength","planet":"c_pluto","spectral":"c_incantation","voucher":"v_blank","tag":"tag_handy","joker":"j_joker"}} | references/source/functions/common_events.lua:1963-2053 | 高：固定社区源码，待原版导出交叉验证
system.shop.rarityThresholds.rare shop.rarityThresholds.rare | 0.95 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.rarityThresholds.uncommon shop.rarityThresholds.uncommon | 0.7 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.stickers.eternalThreshold shop.stickers.eternalThreshold | 0.7 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.stickers.perishableHigh shop.stickers.perishableHigh | 0.7 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.stickers.perishableLow shop.stickers.perishableLow | 0.4 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.stickers.rentalThreshold shop.stickers.rentalThreshold | 0.7 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.voucherSlots shop.voucherSlots | 1 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.weights.joker shop.weights.joker | 20 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.weights.planet shop.weights.planet | 4 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.weights.playingCard shop.weights.playingCard | 0 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.weights.spectral shop.weights.spectral | 0 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.shop.weights.tarot shop.weights.tarot | 4 | references/source/game.lua:1900-1905,1984; references/source/functions/common_events.lua:1944-1960,1969-1970,2055-2079,2138-2145 | 高：固定社区源码，待原版导出交叉验证
system.stake_black.effects.0 难度 4：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"stake","value":4} | references/source/game.lua:2049-2059; references/source/game.lua:256 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_black.effects.1 难度 4：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"noSmallBlindReward","value":true} | references/source/game.lua:2050-2052; references/source/game.lua:256 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_black.effects.2 难度 4：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"scaling","value":2} | references/source/game.lua:2054-2057; references/source/game.lua:256 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_black.effects.3 难度 4：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"eternalsEnabled","value":true} | references/source/game.lua:2055; references/source/game.lua:256 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_black.stake_level stake_black.stake_level | 4 | references/source/game.lua:256 | 高：固定社区源码，待原版导出交叉验证
system.stake_black.unlocked stake_black.unlocked | false | references/source/game.lua:256 | 高：固定社区源码，待原版导出交叉验证
system.stake_blue.effects.0 难度 5：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"stake","value":5} | references/source/game.lua:2049-2059; references/source/game.lua:257 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_blue.effects.1 难度 5：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"noSmallBlindReward","value":true} | references/source/game.lua:2050-2052; references/source/game.lua:257 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_blue.effects.2 难度 5：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"scaling","value":2} | references/source/game.lua:2054-2057; references/source/game.lua:257 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_blue.effects.3 难度 5：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"eternalsEnabled","value":true} | references/source/game.lua:2055; references/source/game.lua:257 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_blue.effects.4 难度 5：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"discards","value":-1} | references/source/game.lua:2056; references/source/game.lua:257 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_blue.stake_level stake_blue.stake_level | 5 | references/source/game.lua:257 | 高：固定社区源码，待原版导出交叉验证
system.stake_blue.unlocked stake_blue.unlocked | false | references/source/game.lua:257 | 高：固定社区源码，待原版导出交叉验证
system.stake_gold.effects.0 难度 8：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"stake","value":8} | references/source/game.lua:2049-2059; references/source/game.lua:260 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_gold.effects.1 难度 8：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"noSmallBlindReward","value":true} | references/source/game.lua:2050-2052; references/source/game.lua:260 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_gold.effects.2 难度 8：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"scaling","value":3} | references/source/game.lua:2054-2057; references/source/game.lua:260 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_gold.effects.3 难度 8：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"eternalsEnabled","value":true} | references/source/game.lua:2055; references/source/game.lua:260 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_gold.effects.4 难度 8：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"discards","value":-1} | references/source/game.lua:2056; references/source/game.lua:260 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_gold.effects.5 难度 8：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"perishablesEnabled","value":true} | references/source/game.lua:2058; references/source/game.lua:260 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_gold.effects.6 难度 8：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"rentalsEnabled","value":true} | references/source/game.lua:2059; references/source/game.lua:260 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_gold.stake_level stake_gold.stake_level | 8 | references/source/game.lua:260 | 高：固定社区源码，待原版导出交叉验证
system.stake_gold.unlocked stake_gold.unlocked | false | references/source/game.lua:260 | 高：固定社区源码，待原版导出交叉验证
system.stake_green.effects.0 难度 3：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"stake","value":3} | references/source/game.lua:2049-2059; references/source/game.lua:255 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_green.effects.1 难度 3：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"noSmallBlindReward","value":true} | references/source/game.lua:2050-2052; references/source/game.lua:255 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_green.effects.2 难度 3：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"scaling","value":2} | references/source/game.lua:2054-2057; references/source/game.lua:255 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_green.stake_level stake_green.stake_level | 3 | references/source/game.lua:255 | 高：固定社区源码，待原版导出交叉验证
system.stake_green.unlocked stake_green.unlocked | false | references/source/game.lua:255 | 高：固定社区源码，待原版导出交叉验证
system.stake_orange.effects.0 难度 7：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"stake","value":7} | references/source/game.lua:2049-2059; references/source/game.lua:259 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_orange.effects.1 难度 7：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"noSmallBlindReward","value":true} | references/source/game.lua:2050-2052; references/source/game.lua:259 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_orange.effects.2 难度 7：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"scaling","value":3} | references/source/game.lua:2054-2057; references/source/game.lua:259 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_orange.effects.3 难度 7：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"eternalsEnabled","value":true} | references/source/game.lua:2055; references/source/game.lua:259 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_orange.effects.4 难度 7：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"discards","value":-1} | references/source/game.lua:2056; references/source/game.lua:259 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_orange.effects.5 难度 7：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"perishablesEnabled","value":true} | references/source/game.lua:2058; references/source/game.lua:259 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_orange.stake_level stake_orange.stake_level | 7 | references/source/game.lua:259 | 高：固定社区源码，待原版导出交叉验证
system.stake_orange.unlocked stake_orange.unlocked | false | references/source/game.lua:259 | 高：固定社区源码，待原版导出交叉验证
system.stake_purple.effects.0 难度 6：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"stake","value":6} | references/source/game.lua:2049-2059; references/source/game.lua:258 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_purple.effects.1 难度 6：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"noSmallBlindReward","value":true} | references/source/game.lua:2050-2052; references/source/game.lua:258 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_purple.effects.2 难度 6：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"scaling","value":3} | references/source/game.lua:2054-2057; references/source/game.lua:258 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_purple.effects.3 难度 6：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"eternalsEnabled","value":true} | references/source/game.lua:2055; references/source/game.lua:258 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_purple.effects.4 难度 6：runStart时机的add规则 | {"trigger":"runStart","condition":{},"action":"add","field":"discards","value":-1} | references/source/game.lua:2056; references/source/game.lua:258 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_purple.stake_level stake_purple.stake_level | 6 | references/source/game.lua:258 | 高：固定社区源码，待原版导出交叉验证
system.stake_purple.unlocked stake_purple.unlocked | false | references/source/game.lua:258 | 高：固定社区源码，待原版导出交叉验证
system.stake_red.effects.0 难度 2：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"stake","value":2} | references/source/game.lua:2049-2059; references/source/game.lua:254 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_red.effects.1 难度 2：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"noSmallBlindReward","value":true} | references/source/game.lua:2050-2052; references/source/game.lua:254 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_red.stake_level stake_red.stake_level | 2 | references/source/game.lua:254 | 高：固定社区源码，待原版导出交叉验证
system.stake_red.unlocked stake_red.unlocked | false | references/source/game.lua:254 | 高：固定社区源码，待原版导出交叉验证
system.stake_white.effects.0 难度 1：runStart时机的set规则 | {"trigger":"runStart","condition":{},"action":"set","field":"stake","value":1} | references/source/game.lua:2049-2059; references/source/game.lua:253 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.stake_white.stake_level stake_white.stake_level | 1 | references/source/game.lua:253 | 高：固定社区源码，待原版导出交叉验证
system.stake_white.unlocked stake_white.unlocked | true | references/source/game.lua:253 | 高：固定社区源码，待原版导出交叉验证
system.starting.anteScaling starting.anteScaling | 1 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.starting.consumableSlots starting.consumableSlots | 2 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.starting.deckSize starting.deckSize | 52 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.starting.discards starting.discards | 3 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.starting.dollars starting.dollars | 4 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.starting.handSize starting.handSize | 8 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.starting.hands starting.hands | 4 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.starting.jokerSlots starting.jokerSlots | 5 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.starting.probabilityNormal starting.probabilityNormal | 1 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.starting.rerollBaseCost starting.rerollBaseCost | 5 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.starting.winAnte starting.winAnte | 8 | references/source/functions/misc_functions.lua:1868-1880; references/source/game.lua:1884-1895 | 高：固定社区源码，待原版导出交叉验证
system.tag_boss.config.type tag_boss.config.type | new_blind_choice | references/source/game.lua:233 | 高：固定社区源码，待原版导出交叉验证
system.tag_boss.effects.0 换个守关：new_blind_choice时机的rerollBoss规则 | {"trigger":"new_blind_choice","condition":{},"action":"rerollBoss"} | references/source/tag.lua:284-300; references/source/game.lua:233 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_boss.min_ante tag_boss.min_ante | null | references/source/game.lua:233 | 高：固定社区源码，待原版导出交叉验证
system.tag_buffoon.config.type tag_buffoon.config.type | new_blind_choice | references/source/game.lua:237 | 高：固定社区源码，待原版导出交叉验证
system.tag_buffoon.effects.0 伙伴赠包：new_blind_choice时机的freePack规则 | {"trigger":"new_blind_choice","condition":{},"action":"freePack","sourceKey":"p_buffoon_mega_1"} | references/source/tag.lua:267-282; references/source/game.lua:237 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_buffoon.min_ante tag_buffoon.min_ante | 2 | references/source/game.lua:237 | 高：固定社区源码，待原版导出交叉验证
system.tag_charm.config.type tag_charm.config.type | new_blind_choice | references/source/game.lua:235 | 高：固定社区源码，待原版导出交叉验证
system.tag_charm.effects.0 异术赠包：new_blind_choice时机的freePack规则 | {"trigger":"new_blind_choice","condition":{},"action":"freePack","sourceKey":"p_arcana_mega_1","sourceKeys":["p_arcana_mega_1","p_arcana_mega_2"]} | references/source/tag.lua:205-220; references/source/game.lua:235 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_charm.min_ante tag_charm.min_ante | null | references/source/game.lua:235 | 高：固定社区源码，待原版导出交叉验证
system.tag_coupon.config.type tag_coupon.config.type | shop_final_pass | references/source/game.lua:241 | 高：固定社区源码，待原版导出交叉验证
system.tag_coupon.effects.0 免费采购：shop_final_pass时机的shopFree规则 | {"trigger":"shop_final_pass","condition":{},"action":"shopFree"} | references/source/tag.lua:447-464; references/source/game.lua:241 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_coupon.min_ante tag_coupon.min_ante | null | references/source/game.lua:241 | 高：固定社区源码，待原版导出交叉验证
system.tag_d_six.config.type tag_d_six.config.type | shop_start | references/source/game.lua:244 | 高：固定社区源码，待原版导出交叉验证
system.tag_d_six.effects.0 重选特惠：shop_start时机的set规则 | {"trigger":"shop_start","condition":{},"action":"set","field":"temporaryRerollBase","value":0} | references/source/tag.lua:382-388; references/source/game.lua:244 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_d_six.min_ante tag_d_six.min_ante | null | references/source/game.lua:244 | 高：固定社区源码，待原版导出交叉验证
system.tag_double.config.type tag_double.config.type | tag_add | references/source/game.lua:242 | 高：固定社区源码，待原版导出交叉验证
system.tag_double.effects.0 复签：tag_add时机的doubleNextTag规则 | {"trigger":"tag_add","condition":{"notDoubleTag":true},"action":"doubleNextTag"} | references/source/tag.lua:319-333; references/source/game.lua:242 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_double.min_ante tag_double.min_ante | null | references/source/game.lua:242 | 高：固定社区源码，待原版导出交叉验证
system.tag_economy.config.max tag_economy.config.max | 40 | references/source/game.lua:248 | 高：固定社区源码，待原版导出交叉验证
system.tag_economy.config.type tag_economy.config.type | immediate | references/source/game.lua:248 | 高：固定社区源码，待原版导出交叉验证
system.tag_economy.effects.0 积蓄翻倍：immediate时机的gainCappedCash规则 | {"trigger":"immediate","condition":{},"action":"gainCappedCash","cap":40} | references/source/tag.lua:176-189; references/source/game.lua:248 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_economy.min_ante tag_economy.min_ante | null | references/source/game.lua:248 | 高：固定社区源码，待原版导出交叉验证
system.tag_ethereal.config.type tag_ethereal.config.type | new_blind_choice | references/source/game.lua:240 | 高：固定社区源码，待原版导出交叉验证
system.tag_ethereal.effects.0 异域赠包：new_blind_choice时机的freePack规则 | {"trigger":"new_blind_choice","condition":{},"action":"freePack","sourceKey":"p_spectral_normal_1"} | references/source/tag.lua:238-252; references/source/game.lua:240 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_ethereal.min_ante tag_ethereal.min_ante | 2 | references/source/game.lua:240 | 高：固定社区源码，待原版导出交叉验证
system.tag_foil.config.edition tag_foil.config.edition | foil | references/source/game.lua:228 | 高：固定社区源码，待原版导出交叉验证
system.tag_foil.config.odds tag_foil.config.odds | 2 | references/source/game.lua:228 | 高：固定社区源码，待原版导出交叉验证
system.tag_foil.config.type tag_foil.config.type | store_joker_modify | references/source/game.lua:228 | 高：固定社区源码，待原版导出交叉验证
system.tag_foil.effects.0 银纹伙伴：store_joker_modify时机的shopEdition规则 | {"trigger":"store_joker_modify","condition":{},"action":"shopEdition","edition":"foil","free":true} | references/source/tag.lua:398-408; references/source/game.lua:228 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_foil.min_ante tag_foil.min_ante | null | references/source/game.lua:228 | 高：固定社区源码，待原版导出交叉验证
system.tag_foil.requires tag_foil.requires | e_foil | references/source/game.lua:228 | 高：固定社区源码，待原版导出交叉验证
system.tag_garbage.config.dollars_per_discard tag_garbage.config.dollars_per_discard | 1 | references/source/game.lua:239 | 高：固定社区源码，待原版导出交叉验证
system.tag_garbage.config.type tag_garbage.config.type | immediate | references/source/game.lua:239 | 高：固定社区源码，待原版导出交叉验证
system.tag_garbage.effects.0 弃牌补贴：immediate时机的gainFromCounter规则 | {"trigger":"immediate","condition":{},"action":"gainFromCounter","field":"unusedDiscards","multiplier":1} | references/source/tag.lua:158-165; references/source/game.lua:239 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_garbage.min_ante tag_garbage.min_ante | 2 | references/source/game.lua:239 | 高：固定社区源码，待原版导出交叉验证
system.tag_handy.config.dollars_per_hand tag_handy.config.dollars_per_hand | 1 | references/source/game.lua:238 | 高：固定社区源码，待原版导出交叉验证
system.tag_handy.config.type tag_handy.config.type | immediate | references/source/game.lua:238 | 高：固定社区源码，待原版导出交叉验证
system.tag_handy.effects.0 出牌补贴：immediate时机的gainFromCounter规则 | {"trigger":"immediate","condition":{},"action":"gainFromCounter","field":"handsPlayed","multiplier":1} | references/source/tag.lua:167-174; references/source/game.lua:238 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_handy.min_ante tag_handy.min_ante | 2 | references/source/game.lua:238 | 高：固定社区源码，待原版导出交叉验证
system.tag_holo.config.edition tag_holo.config.edition | holo | references/source/game.lua:229 | 高：固定社区源码，待原版导出交叉验证
system.tag_holo.config.odds tag_holo.config.odds | 3 | references/source/game.lua:229 | 高：固定社区源码，待原版导出交叉验证
system.tag_holo.config.type tag_holo.config.type | store_joker_modify | references/source/game.lua:229 | 高：固定社区源码，待原版导出交叉验证
system.tag_holo.effects.0 幻纹伙伴：store_joker_modify时机的shopEdition规则 | {"trigger":"store_joker_modify","condition":{},"action":"shopEdition","edition":"holo","free":true} | references/source/tag.lua:409-419; references/source/game.lua:229 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_holo.min_ante tag_holo.min_ante | null | references/source/game.lua:229 | 高：固定社区源码，待原版导出交叉验证
system.tag_holo.requires tag_holo.requires | e_holo | references/source/game.lua:229 | 高：固定社区源码，待原版导出交叉验证
system.tag_investment.config.dollars tag_investment.config.dollars | 25 | references/source/game.lua:231 | 高：固定社区源码，待原版导出交叉验证
system.tag_investment.config.type tag_investment.config.type | eval | references/source/game.lua:231 | 高：固定社区源码，待原版导出交叉验证
system.tag_investment.effects.0 到期分红：eval时机的add规则 | {"trigger":"eval","condition":{"bossDefeated":true},"action":"add","field":"dollars","value":25} | references/source/tag.lua:117-129; references/source/game.lua:231 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_investment.min_ante tag_investment.min_ante | null | references/source/game.lua:231 | 高：固定社区源码，待原版导出交叉验证
system.tag_juggle.config.h_size tag_juggle.config.h_size | 3 | references/source/game.lua:243 | 高：固定社区源码，待原版导出交叉验证
system.tag_juggle.config.type tag_juggle.config.type | round_start_bonus | references/source/game.lua:243 | 高：固定社区源码，待原版导出交叉验证
system.tag_juggle.effects.0 宽手一轮：round_start_bonus时机的add规则 | {"trigger":"round_start_bonus","condition":{},"action":"add","field":"handSize","value":3} | references/source/tag.lua:334-342; references/source/game.lua:243 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_juggle.effects.1 宽手一轮：round_start_bonus时机的add规则 | {"trigger":"round_start_bonus","condition":{},"action":"add","field":"temporaryHandSize","value":3} | references/source/tag.lua:334-342; references/source/game.lua:243 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_juggle.min_ante tag_juggle.min_ante | null | references/source/game.lua:243 | 高：固定社区源码，待原版导出交叉验证
system.tag_meteor.config.type tag_meteor.config.type | new_blind_choice | references/source/game.lua:236 | 高：固定社区源码，待原版导出交叉验证
system.tag_meteor.effects.0 星图赠包：new_blind_choice时机的freePack规则 | {"trigger":"new_blind_choice","condition":{},"action":"freePack","sourceKey":"p_celestial_mega_1","sourceKeys":["p_celestial_mega_1","p_celestial_mega_2"]} | references/source/tag.lua:221-237; references/source/game.lua:236 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_meteor.min_ante tag_meteor.min_ante | 2 | references/source/game.lua:236 | 高：固定社区源码，待原版导出交叉验证
system.tag_negative.config.edition tag_negative.config.edition | negative | references/source/game.lua:227 | 高：固定社区源码，待原版导出交叉验证
system.tag_negative.config.odds tag_negative.config.odds | 5 | references/source/game.lua:227 | 高：固定社区源码，待原版导出交叉验证
system.tag_negative.config.type tag_negative.config.type | store_joker_modify | references/source/game.lua:227 | 高：固定社区源码，待原版导出交叉验证
system.tag_negative.effects.0 空域伙伴：store_joker_modify时机的shopEdition规则 | {"trigger":"store_joker_modify","condition":{},"action":"shopEdition","edition":"negative","free":true} | references/source/tag.lua:431-441; references/source/game.lua:227 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_negative.min_ante tag_negative.min_ante | 2 | references/source/game.lua:227 | 高：固定社区源码，待原版导出交叉验证
system.tag_negative.requires tag_negative.requires | e_negative | references/source/game.lua:227 | 高：固定社区源码，待原版导出交叉验证
system.tag_orbital.config.levels tag_orbital.config.levels | 3 | references/source/game.lua:247 | 高：固定社区源码，待原版导出交叉验证
system.tag_orbital.config.type tag_orbital.config.type | immediate | references/source/game.lua:247 | 高：固定社区源码，待原版导出交叉验证
system.tag_orbital.effects.0 航线升级：immediate时机的upgradeOrbital规则 | {"trigger":"immediate","condition":{},"action":"upgradeOrbital","amount":3} | references/source/tag.lua:191-202; references/source/game.lua:247 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_orbital.min_ante tag_orbital.min_ante | 2 | references/source/game.lua:247 | 高：固定社区源码，待原版导出交叉验证
system.tag_polychrome.config.edition tag_polychrome.config.edition | polychrome | references/source/game.lua:230 | 高：固定社区源码，待原版导出交叉验证
system.tag_polychrome.config.odds tag_polychrome.config.odds | 4 | references/source/game.lua:230 | 高：固定社区源码，待原版导出交叉验证
system.tag_polychrome.config.type tag_polychrome.config.type | store_joker_modify | references/source/game.lua:230 | 高：固定社区源码，待原版导出交叉验证
system.tag_polychrome.effects.0 虹纹伙伴：store_joker_modify时机的shopEdition规则 | {"trigger":"store_joker_modify","condition":{},"action":"shopEdition","edition":"polychrome","free":true} | references/source/tag.lua:420-430; references/source/game.lua:230 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_polychrome.min_ante tag_polychrome.min_ante | null | references/source/game.lua:230 | 高：固定社区源码，待原版导出交叉验证
system.tag_polychrome.requires tag_polychrome.requires | e_polychrome | references/source/game.lua:230 | 高：固定社区源码，待原版导出交叉验证
system.tag_rare.config.odds tag_rare.config.odds | 3 | references/source/game.lua:226 | 高：固定社区源码，待原版导出交叉验证
system.tag_rare.config.type tag_rare.config.type | store_joker_create | references/source/game.lua:226 | 高：固定社区源码，待原版导出交叉验证
system.tag_rare.effects.0 珍贵伙伴：store_joker_create时机的shopJoker规则 | {"trigger":"store_joker_create","condition":{},"action":"shopJoker","rarity":3,"free":true} | references/source/tag.lua:346-368; references/source/game.lua:226 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_rare.min_ante tag_rare.min_ante | null | references/source/game.lua:226 | 高：固定社区源码，待原版导出交叉验证
system.tag_rare.requires tag_rare.requires | j_blueprint | references/source/game.lua:226 | 高：固定社区源码，待原版导出交叉验证
system.tag_skip.config.skip_bonus tag_skip.config.skip_bonus | 5 | references/source/game.lua:246 | 高：固定社区源码，待原版导出交叉验证
system.tag_skip.config.type tag_skip.config.type | immediate | references/source/game.lua:246 | 高：固定社区源码，待原版导出交叉验证
system.tag_skip.effects.0 跳过补贴：immediate时机的gainFromCounter规则 | {"trigger":"immediate","condition":{},"action":"gainFromCounter","field":"skips","multiplier":5} | references/source/tag.lua:149-156; references/source/game.lua:246 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_skip.min_ante tag_skip.min_ante | null | references/source/game.lua:246 | 高：固定社区源码，待原版导出交叉验证
system.tag_standard.config.type tag_standard.config.type | new_blind_choice | references/source/game.lua:234 | 高：固定社区源码，待原版导出交叉验证
system.tag_standard.effects.0 纸牌赠包：new_blind_choice时机的freePack规则 | {"trigger":"new_blind_choice","condition":{},"action":"freePack","sourceKey":"p_standard_mega_1"} | references/source/tag.lua:254-266; references/source/game.lua:234 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_standard.min_ante tag_standard.min_ante | 2 | references/source/game.lua:234 | 高：固定社区源码，待原版导出交叉验证
system.tag_top_up.config.spawn_jokers tag_top_up.config.spawn_jokers | 2 | references/source/game.lua:245 | 高：固定社区源码，待原版导出交叉验证
system.tag_top_up.config.type tag_top_up.config.type | immediate | references/source/game.lua:245 | 高：固定社区源码，待原版导出交叉验证
system.tag_top_up.effects.0 双伴来访：immediate时机的spawnJoker规则 | {"trigger":"immediate","condition":{},"action":"spawnJoker","count":2,"rarity":1} | references/source/tag.lua:134-147; references/source/game.lua:245 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_top_up.min_ante tag_top_up.min_ante | 2 | references/source/game.lua:245 | 高：固定社区源码，待原版导出交叉验证
system.tag_uncommon.config.type tag_uncommon.config.type | store_joker_create | references/source/game.lua:225 | 高：固定社区源码，待原版导出交叉验证
system.tag_uncommon.effects.0 进阶伙伴：store_joker_create时机的shopJoker规则 | {"trigger":"store_joker_create","condition":{},"action":"shopJoker","rarity":2,"free":true} | references/source/tag.lua:369-381; references/source/game.lua:225 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_uncommon.min_ante tag_uncommon.min_ante | null | references/source/game.lua:225 | 高：固定社区源码，待原版导出交叉验证
system.tag_voucher.config.type tag_voucher.config.type | voucher_add | references/source/game.lua:232 | 高：固定社区源码，待原版导出交叉验证
system.tag_voucher.effects.0 额外凭单：voucher_add时机的extraVoucher规则 | {"trigger":"voucher_add","condition":{},"action":"extraVoucher"} | references/source/tag.lua:302-317; references/source/game.lua:232 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.tag_voucher.min_ante tag_voucher.min_ante | null | references/source/game.lua:232 | 高：固定社区源码，待原版导出交叉验证
system.v_antimatter.available v_antimatter.available | true | references/source/game.lua:620 | 高：固定社区源码，待原版导出交叉验证
system.v_antimatter.config.extra v_antimatter.config.extra | 15 | references/source/game.lua:620 | 高：固定社区源码，待原版导出交叉验证
system.v_antimatter.cost v_antimatter.cost | 10 | references/source/game.lua:620 | 高：固定社区源码，待原版导出交叉验证
system.v_antimatter.effects.0 伙伴扩容：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"jokerSlots","value":1} | references/source/card.lua:1950-1954; references/source/game.lua:620 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_antimatter.requires.0 v_antimatter.requires.0 | v_blank | references/source/game.lua:620 | 高：固定社区源码，待原版导出交叉验证
system.v_antimatter.unlock_condition.extra v_antimatter.unlock_condition.extra | 10 | references/source/game.lua:620 | 高：固定社区源码，待原版导出交叉验证
system.v_antimatter.unlock_condition.type v_antimatter.unlock_condition.type | blank_redeems | references/source/game.lua:620 | 高：固定社区源码，待原版导出交叉验证
system.v_antimatter.unlocked v_antimatter.unlocked | false | references/source/game.lua:620 | 高：固定社区源码，待原版导出交叉验证
system.v_blank.available v_blank.available | true | references/source/game.lua:603 | 高：固定社区源码，待原版导出交叉验证
system.v_blank.config.extra v_blank.config.extra | 5 | references/source/game.lua:603 | 高：固定社区源码，待原版导出交叉验证
system.v_blank.cost v_blank.cost | 10 | references/source/game.lua:603 | 高：固定社区源码，待原版导出交叉验证
system.v_blank.effects.0 空白凭单：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"blankRedeems","value":1} | references/source/card.lua:1947-1948; references/source/game.lua:603 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_blank.unlocked v_blank.unlocked | true | references/source/game.lua:603 | 高：固定社区源码，待原版导出交叉验证
system.v_clearance_sale.available v_clearance_sale.available | true | references/source/game.lua:593 | 高：固定社区源码，待原版导出交叉验证
system.v_clearance_sale.config.extra v_clearance_sale.config.extra | 25 | references/source/game.lua:593 | 高：固定社区源码，待原版导出交叉验证
system.v_clearance_sale.cost v_clearance_sale.cost | 10 | references/source/game.lua:593 | 高：固定社区源码，待原版导出交叉验证
system.v_clearance_sale.effects.0 优惠采购：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"discountPercent","value":25} | references/source/card.lua:1917-1922; references/source/game.lua:593 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_clearance_sale.unlocked v_clearance_sale.unlocked | true | references/source/game.lua:593 | 高：固定社区源码，待原版导出交叉验证
system.v_crystal_ball.available v_crystal_ball.available | true | references/source/game.lua:596 | 高：固定社区源码，待原版导出交叉验证
system.v_crystal_ball.config.extra v_crystal_ball.config.extra | 3 | references/source/game.lua:596 | 高：固定社区源码，待原版导出交叉验证
system.v_crystal_ball.cost v_crystal_ball.cost | 10 | references/source/game.lua:596 | 高：固定社区源码，待原版导出交叉验证
system.v_crystal_ball.effects.0 备用匣：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"consumableSlots","value":1} | references/source/card.lua:1912-1915; references/source/game.lua:596 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_crystal_ball.unlocked v_crystal_ball.unlocked | true | references/source/game.lua:596 | 高：固定社区源码，待原版导出交叉验证
system.v_directors_cut.available v_directors_cut.available | true | references/source/game.lua:606 | 高：固定社区源码，待原版导出交叉验证
system.v_directors_cut.config.extra v_directors_cut.config.extra | 10 | references/source/game.lua:606 | 高：固定社区源码，待原版导出交叉验证
system.v_directors_cut.cost v_directors_cut.cost | 10 | references/source/game.lua:606 | 高：固定社区源码，待原版导出交叉验证
system.v_directors_cut.effects.0 重排关卡：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"bossRerollsAllowed","value":1} | references/source/functions/button_callbacks.lua:2784-2803; references/source/game.lua:606 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_directors_cut.unlocked v_directors_cut.unlocked | true | references/source/game.lua:606 | 高：固定社区源码，待原版导出交叉验证
system.v_glow_up.available v_glow_up.available | true | references/source/game.lua:611 | 高：固定社区源码，待原版导出交叉验证
system.v_glow_up.config.extra v_glow_up.config.extra | 4 | references/source/game.lua:611 | 高：固定社区源码，待原版导出交叉验证
system.v_glow_up.cost v_glow_up.cost | 10 | references/source/game.lua:611 | 高：固定社区源码，待原版导出交叉验证
system.v_glow_up.effects.0 光泽筛选Ⅱ：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"editionRate","value":4} | references/source/card.lua:1900-1903; references/source/game.lua:611 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_glow_up.requires.0 v_glow_up.requires.0 | v_hone | references/source/game.lua:611 | 高：固定社区源码，待原版导出交叉验证
system.v_glow_up.unlock_condition.extra v_glow_up.unlock_condition.extra | 5 | references/source/game.lua:611 | 高：固定社区源码，待原版导出交叉验证
system.v_glow_up.unlock_condition.type v_glow_up.unlock_condition.type | have_edition | references/source/game.lua:611 | 高：固定社区源码，待原版导出交叉验证
system.v_glow_up.unlocked v_glow_up.unlocked | false | references/source/game.lua:611 | 高：固定社区源码，待原版导出交叉验证
system.v_grabber.available v_grabber.available | true | references/source/game.lua:598 | 高：固定社区源码，待原版导出交叉验证
system.v_grabber.config.extra v_grabber.config.extra | 1 | references/source/game.lua:598 | 高：固定社区源码，待原版导出交叉验证
system.v_grabber.cost v_grabber.cost | 10 | references/source/game.lua:598 | 高：固定社区源码，待原版导出交叉验证
system.v_grabber.effects.0 加赛许可：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"hands","value":1} | references/source/card.lua:1936-1938; references/source/game.lua:598 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_grabber.unlocked v_grabber.unlocked | true | references/source/game.lua:598 | 高：固定社区源码，待原版导出交叉验证
system.v_hieroglyph.available v_hieroglyph.available | true | references/source/game.lua:605 | 高：固定社区源码，待原版导出交叉验证
system.v_hieroglyph.config.extra v_hieroglyph.config.extra | 1 | references/source/game.lua:605 | 高：固定社区源码，待原版导出交叉验证
system.v_hieroglyph.cost v_hieroglyph.cost | 10 | references/source/game.lua:605 | 高：固定社区源码，待原版导出交叉验证
system.v_hieroglyph.effects.0 回溯出牌：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"ante","value":-1} | references/source/card.lua:1957-1960; references/source/game.lua:605 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_hieroglyph.effects.1 回溯出牌：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"blindAnte","value":-1} | references/source/card.lua:1957-1960; references/source/game.lua:605 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_hieroglyph.effects.2 回溯出牌：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"hands","value":-1} | references/source/card.lua:1962-1964; references/source/game.lua:605 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_hieroglyph.unlocked v_hieroglyph.unlocked | true | references/source/game.lua:605 | 高：固定社区源码，待原版导出交叉验证
system.v_hone.available v_hone.available | true | references/source/game.lua:594 | 高：固定社区源码，待原版导出交叉验证
system.v_hone.config.extra v_hone.config.extra | 2 | references/source/game.lua:594 | 高：固定社区源码，待原版导出交叉验证
system.v_hone.cost v_hone.cost | 10 | references/source/game.lua:594 | 高：固定社区源码，待原版导出交叉验证
system.v_hone.effects.0 光泽筛选：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"editionRate","value":2} | references/source/card.lua:1900-1903; references/source/game.lua:594 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_hone.unlocked v_hone.unlocked | true | references/source/game.lua:594 | 高：固定社区源码，待原版导出交叉验证
system.v_illusion.available v_illusion.available | true | references/source/game.lua:621 | 高：固定社区源码，待原版导出交叉验证
system.v_illusion.config.extra v_illusion.config.extra | 4 | references/source/game.lua:621 | 高：固定社区源码，待原版导出交叉验证
system.v_illusion.cost v_illusion.cost | 10 | references/source/game.lua:621 | 高：固定社区源码，待原版导出交叉验证
system.v_illusion.effects.0 精装进货：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"playingCardRate","value":4} | references/source/card.lua:1905-1908; references/source/game.lua:621 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_illusion.effects.1 精装进货：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"illusion","value":true} | references/source/functions/UI_definitions.lua:769-794; references/source/game.lua:621 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_illusion.requires.0 v_illusion.requires.0 | v_magic_trick | references/source/game.lua:621 | 高：固定社区源码，待原版导出交叉验证
system.v_illusion.unlock_condition.extra v_illusion.unlock_condition.extra | 20 | references/source/game.lua:621 | 高：固定社区源码，待原版导出交叉验证
system.v_illusion.unlock_condition.type v_illusion.unlock_condition.type | c_playing_cards_bought | references/source/game.lua:621 | 高：固定社区源码，待原版导出交叉验证
system.v_illusion.unlocked v_illusion.unlocked | false | references/source/game.lua:621 | 高：固定社区源码，待原版导出交叉验证
system.v_liquidation.available v_liquidation.available | true | references/source/game.lua:610 | 高：固定社区源码，待原版导出交叉验证
system.v_liquidation.config.extra v_liquidation.config.extra | 50 | references/source/game.lua:610 | 高：固定社区源码，待原版导出交叉验证
system.v_liquidation.cost v_liquidation.cost | 10 | references/source/game.lua:610 | 高：固定社区源码，待原版导出交叉验证
system.v_liquidation.effects.0 优惠采购Ⅱ：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"discountPercent","value":50} | references/source/card.lua:1917-1922; references/source/game.lua:610 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_liquidation.requires.0 v_liquidation.requires.0 | v_clearance_sale | references/source/game.lua:610 | 高：固定社区源码，待原版导出交叉验证
system.v_liquidation.unlock_condition.extra v_liquidation.unlock_condition.extra | 10 | references/source/game.lua:610 | 高：固定社区源码，待原版导出交叉验证
system.v_liquidation.unlock_condition.type v_liquidation.unlock_condition.type | run_redeem | references/source/game.lua:610 | 高：固定社区源码，待原版导出交叉验证
system.v_liquidation.unlocked v_liquidation.unlocked | false | references/source/game.lua:610 | 高：固定社区源码，待原版导出交叉验证
system.v_magic_trick.available v_magic_trick.available | true | references/source/game.lua:604 | 高：固定社区源码，待原版导出交叉验证
system.v_magic_trick.config.extra v_magic_trick.config.extra | 4 | references/source/game.lua:604 | 高：固定社区源码，待原版导出交叉验证
system.v_magic_trick.cost v_magic_trick.cost | 10 | references/source/game.lua:604 | 高：固定社区源码，待原版导出交叉验证
system.v_magic_trick.effects.0 纸牌进货：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"playingCardRate","value":4} | references/source/card.lua:1905-1908; references/source/game.lua:604 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_magic_trick.unlocked v_magic_trick.unlocked | true | references/source/game.lua:604 | 高：固定社区源码，待原版导出交叉验证
system.v_money_tree.available v_money_tree.available | true | references/source/game.lua:619 | 高：固定社区源码，待原版导出交叉验证
system.v_money_tree.config.extra v_money_tree.config.extra | 100 | references/source/game.lua:619 | 高：固定社区源码，待原版导出交叉验证
system.v_money_tree.cost v_money_tree.cost | 10 | references/source/game.lua:619 | 高：固定社区源码，待原版导出交叉验证
system.v_money_tree.effects.0 储蓄扩容Ⅱ：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"interestCap","value":100} | references/source/card.lua:1931-1934; references/source/game.lua:619 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_money_tree.requires.0 v_money_tree.requires.0 | v_seed_money | references/source/game.lua:619 | 高：固定社区源码，待原版导出交叉验证
system.v_money_tree.unlock_condition.extra v_money_tree.unlock_condition.extra | 10 | references/source/game.lua:619 | 高：固定社区源码，待原版导出交叉验证
system.v_money_tree.unlock_condition.type v_money_tree.unlock_condition.type | interest_streak | references/source/game.lua:619 | 高：固定社区源码，待原版导出交叉验证
system.v_money_tree.unlocked v_money_tree.unlocked | false | references/source/game.lua:619 | 高：固定社区源码，待原版导出交叉验证
system.v_nacho_tong.available v_nacho_tong.available | true | references/source/game.lua:615 | 高：固定社区源码，待原版导出交叉验证
system.v_nacho_tong.config.extra v_nacho_tong.config.extra | 1 | references/source/game.lua:615 | 高：固定社区源码，待原版导出交叉验证
system.v_nacho_tong.cost v_nacho_tong.cost | 10 | references/source/game.lua:615 | 高：固定社区源码，待原版导出交叉验证
system.v_nacho_tong.effects.0 加赛许可Ⅱ：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"hands","value":1} | references/source/card.lua:1936-1938; references/source/game.lua:615 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_nacho_tong.requires.0 v_nacho_tong.requires.0 | v_grabber | references/source/game.lua:615 | 高：固定社区源码，待原版导出交叉验证
system.v_nacho_tong.unlock_condition.extra v_nacho_tong.unlock_condition.extra | 2500 | references/source/game.lua:615 | 高：固定社区源码，待原版导出交叉验证
system.v_nacho_tong.unlock_condition.type v_nacho_tong.unlock_condition.type | c_cards_played | references/source/game.lua:615 | 高：固定社区源码，待原版导出交叉验证
system.v_nacho_tong.unlocked v_nacho_tong.unlocked | false | references/source/game.lua:615 | 高：固定社区源码，待原版导出交叉验证
system.v_observatory.available v_observatory.available | true | references/source/game.lua:614 | 高：固定社区源码，待原版导出交叉验证
system.v_observatory.config.extra v_observatory.config.extra | 1.5 | references/source/game.lua:614 | 高：固定社区源码，待原版导出交叉验证
system.v_observatory.cost v_observatory.cost | 10 | references/source/game.lua:614 | 高：固定社区源码，待原版导出交叉验证
system.v_observatory.effects.0 观测增幅：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"observatory","value":true} | references/source/card.lua:2291-2300; references/source/game.lua:614 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_observatory.effects.1 观测增幅：jokerMainConsumable时机的observatoryXMult规则 | {"trigger":"jokerMainConsumable","condition":{"matchingPlanet":true,"notDebuffed":true},"action":"observatoryXMult","factor":1.5} | references/source/card.lua:2291-2300; references/source/functions/state_events.lua:877-959; references/source/game.lua:614 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_observatory.requires.0 v_observatory.requires.0 | v_telescope | references/source/game.lua:614 | 高：固定社区源码，待原版导出交叉验证
system.v_observatory.unlock_condition.extra v_observatory.unlock_condition.extra | 25 | references/source/game.lua:614 | 高：固定社区源码，待原版导出交叉验证
system.v_observatory.unlock_condition.type v_observatory.unlock_condition.type | c_planetarium_used | references/source/game.lua:614 | 高：固定社区源码，待原版导出交叉验证
system.v_observatory.unlocked v_observatory.unlocked | false | references/source/game.lua:614 | 高：固定社区源码，待原版导出交叉验证
system.v_omen_globe.available v_omen_globe.available | true | references/source/game.lua:613 | 高：固定社区源码，待原版导出交叉验证
system.v_omen_globe.config.extra v_omen_globe.config.extra | 4 | references/source/game.lua:613 | 高：固定社区源码，待原版导出交叉验证
system.v_omen_globe.cost v_omen_globe.cost | 10 | references/source/game.lua:613 | 高：固定社区源码，待原版导出交叉验证
system.v_omen_globe.effects.0 跨界匣：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"omenGlobe","value":true} | references/source/card.lua:1730-1735; references/source/game.lua:613 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_omen_globe.requires.0 v_omen_globe.requires.0 | v_crystal_ball | references/source/game.lua:613 | 高：固定社区源码，待原版导出交叉验证
system.v_omen_globe.unlock_condition.extra v_omen_globe.unlock_condition.extra | 25 | references/source/game.lua:613 | 高：固定社区源码，待原版导出交叉验证
system.v_omen_globe.unlock_condition.type v_omen_globe.unlock_condition.type | c_tarot_reading_used | references/source/game.lua:613 | 高：固定社区源码，待原版导出交叉验证
system.v_omen_globe.unlocked v_omen_globe.unlocked | false | references/source/game.lua:613 | 高：固定社区源码，待原版导出交叉验证
system.v_overstock_norm.available v_overstock_norm.available | true | references/source/game.lua:592 | 高：固定社区源码，待原版导出交叉验证
system.v_overstock_norm.cost v_overstock_norm.cost | 10 | references/source/game.lua:592 | 高：固定社区源码，待原版导出交叉验证
system.v_overstock_norm.effects.0 扩展货架：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"shopSlots","value":1} | references/source/card.lua:1885-1888; references/source/game.lua:592 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_overstock_norm.unlocked v_overstock_norm.unlocked | true | references/source/game.lua:592 | 高：固定社区源码，待原版导出交叉验证
system.v_overstock_plus.available v_overstock_plus.available | true | references/source/game.lua:609 | 高：固定社区源码，待原版导出交叉验证
system.v_overstock_plus.cost v_overstock_plus.cost | 10 | references/source/game.lua:609 | 高：固定社区源码，待原版导出交叉验证
system.v_overstock_plus.effects.0 扩展货架Ⅱ：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"shopSlots","value":1} | references/source/card.lua:1885-1888; references/source/game.lua:609 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_overstock_plus.requires.0 v_overstock_plus.requires.0 | v_overstock_norm | references/source/game.lua:609 | 高：固定社区源码，待原版导出交叉验证
system.v_overstock_plus.unlock_condition.extra v_overstock_plus.unlock_condition.extra | 2500 | references/source/game.lua:609 | 高：固定社区源码，待原版导出交叉验证
system.v_overstock_plus.unlock_condition.type v_overstock_plus.unlock_condition.type | c_shop_dollars_spent | references/source/game.lua:609 | 高：固定社区源码，待原版导出交叉验证
system.v_overstock_plus.unlocked v_overstock_plus.unlocked | false | references/source/game.lua:609 | 高：固定社区源码，待原版导出交叉验证
system.v_paint_brush.available v_paint_brush.available | true | references/source/game.lua:607 | 高：固定社区源码，待原版导出交叉验证
system.v_paint_brush.config.extra v_paint_brush.config.extra | 1 | references/source/game.lua:607 | 高：固定社区源码，待原版导出交叉验证
system.v_paint_brush.cost v_paint_brush.cost | 10 | references/source/game.lua:607 | 高：固定社区源码，待原版导出交叉验证
system.v_paint_brush.effects.0 宽手许可：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"handSize","value":1} | references/source/card.lua:1940-1941; references/source/game.lua:607 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_paint_brush.unlocked v_paint_brush.unlocked | true | references/source/game.lua:607 | 高：固定社区源码，待原版导出交叉验证
system.v_palette.available v_palette.available | true | references/source/game.lua:624 | 高：固定社区源码，待原版导出交叉验证
system.v_palette.config.extra v_palette.config.extra | 1 | references/source/game.lua:624 | 高：固定社区源码，待原版导出交叉验证
system.v_palette.cost v_palette.cost | 10 | references/source/game.lua:624 | 高：固定社区源码，待原版导出交叉验证
system.v_palette.effects.0 宽手许可Ⅱ：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"handSize","value":1} | references/source/card.lua:1940-1941; references/source/game.lua:624 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_palette.requires.0 v_palette.requires.0 | v_paint_brush | references/source/game.lua:624 | 高：固定社区源码，待原版导出交叉验证
system.v_palette.unlock_condition.extra v_palette.unlock_condition.extra | 5 | references/source/game.lua:624 | 高：固定社区源码，待原版导出交叉验证
system.v_palette.unlock_condition.type v_palette.unlock_condition.type | min_hand_size | references/source/game.lua:624 | 高：固定社区源码，待原版导出交叉验证
system.v_palette.unlocked v_palette.unlocked | false | references/source/game.lua:624 | 高：固定社区源码，待原版导出交叉验证
system.v_petroglyph.available v_petroglyph.available | true | references/source/game.lua:622 | 高：固定社区源码，待原版导出交叉验证
system.v_petroglyph.config.extra v_petroglyph.config.extra | 1 | references/source/game.lua:622 | 高：固定社区源码，待原版导出交叉验证
system.v_petroglyph.cost v_petroglyph.cost | 10 | references/source/game.lua:622 | 高：固定社区源码，待原版导出交叉验证
system.v_petroglyph.effects.0 回溯弃牌：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"ante","value":-1} | references/source/card.lua:1957-1960; references/source/game.lua:622 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_petroglyph.effects.1 回溯弃牌：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"blindAnte","value":-1} | references/source/card.lua:1957-1960; references/source/game.lua:622 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_petroglyph.effects.2 回溯弃牌：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"discards","value":-1} | references/source/card.lua:1966-1968; references/source/game.lua:622 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_petroglyph.requires.0 v_petroglyph.requires.0 | v_hieroglyph | references/source/game.lua:622 | 高：固定社区源码，待原版导出交叉验证
system.v_petroglyph.unlock_condition.ante v_petroglyph.unlock_condition.ante | 12 | references/source/game.lua:622 | 高：固定社区源码，待原版导出交叉验证
system.v_petroglyph.unlock_condition.extra v_petroglyph.unlock_condition.extra | 12 | references/source/game.lua:622 | 高：固定社区源码，待原版导出交叉验证
system.v_petroglyph.unlock_condition.type v_petroglyph.unlock_condition.type | ante_up | references/source/game.lua:622 | 高：固定社区源码，待原版导出交叉验证
system.v_petroglyph.unlocked v_petroglyph.unlocked | false | references/source/game.lua:622 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_merchant.available v_planet_merchant.available | true | references/source/game.lua:601 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_merchant.config.extra v_planet_merchant.config.extra | 2.4 | references/source/game.lua:601 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_merchant.config.extra_disp v_planet_merchant.config.extra_disp | 2 | references/source/game.lua:601 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_merchant.cost v_planet_merchant.cost | 10 | references/source/game.lua:601 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_merchant.effects.0 星图进货：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"planetRate","value":9.6} | references/source/card.lua:1895-1898; references/source/game.lua:601 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_planet_merchant.unlocked v_planet_merchant.unlocked | true | references/source/game.lua:601 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_tycoon.available v_planet_tycoon.available | true | references/source/game.lua:618 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_tycoon.config.extra v_planet_tycoon.config.extra | 8 | references/source/game.lua:618 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_tycoon.config.extra_disp v_planet_tycoon.config.extra_disp | 4 | references/source/game.lua:618 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_tycoon.cost v_planet_tycoon.cost | 10 | references/source/game.lua:618 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_tycoon.effects.0 星图进货Ⅱ：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"planetRate","value":32} | references/source/card.lua:1895-1898; references/source/game.lua:618 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_planet_tycoon.requires.0 v_planet_tycoon.requires.0 | v_planet_merchant | references/source/game.lua:618 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_tycoon.unlock_condition.extra v_planet_tycoon.unlock_condition.extra | 50 | references/source/game.lua:618 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_tycoon.unlock_condition.type v_planet_tycoon.unlock_condition.type | c_planets_bought | references/source/game.lua:618 | 高：固定社区源码，待原版导出交叉验证
system.v_planet_tycoon.unlocked v_planet_tycoon.unlocked | false | references/source/game.lua:618 | 高：固定社区源码，待原版导出交叉验证
system.v_recyclomancy.available v_recyclomancy.available | true | references/source/game.lua:616 | 高：固定社区源码，待原版导出交叉验证
system.v_recyclomancy.config.extra v_recyclomancy.config.extra | 1 | references/source/game.lua:616 | 高：固定社区源码，待原版导出交叉验证
system.v_recyclomancy.cost v_recyclomancy.cost | 10 | references/source/game.lua:616 | 高：固定社区源码，待原版导出交叉验证
system.v_recyclomancy.effects.0 换牌许可Ⅱ：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"discards","value":1} | references/source/card.lua:1943-1945; references/source/game.lua:616 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_recyclomancy.requires.0 v_recyclomancy.requires.0 | v_wasteful | references/source/game.lua:616 | 高：固定社区源码，待原版导出交叉验证
system.v_recyclomancy.unlock_condition.extra v_recyclomancy.unlock_condition.extra | 2500 | references/source/game.lua:616 | 高：固定社区源码，待原版导出交叉验证
system.v_recyclomancy.unlock_condition.type v_recyclomancy.unlock_condition.type | c_cards_discarded | references/source/game.lua:616 | 高：固定社区源码，待原版导出交叉验证
system.v_recyclomancy.unlocked v_recyclomancy.unlocked | false | references/source/game.lua:616 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_glut.available v_reroll_glut.available | true | references/source/game.lua:612 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_glut.config.extra v_reroll_glut.config.extra | 2 | references/source/game.lua:612 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_glut.cost v_reroll_glut.cost | 10 | references/source/game.lua:612 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_glut.effects.0 重选折扣Ⅱ：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"rerollBaseCost","value":-2} | references/source/card.lua:1925-1928; references/source/game.lua:612 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_reroll_glut.requires.0 v_reroll_glut.requires.0 | v_reroll_surplus | references/source/game.lua:612 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_glut.unlock_condition.extra v_reroll_glut.unlock_condition.extra | 100 | references/source/game.lua:612 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_glut.unlock_condition.type v_reroll_glut.unlock_condition.type | c_shop_rerolls | references/source/game.lua:612 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_glut.unlocked v_reroll_glut.unlocked | false | references/source/game.lua:612 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_surplus.available v_reroll_surplus.available | true | references/source/game.lua:595 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_surplus.config.extra v_reroll_surplus.config.extra | 2 | references/source/game.lua:595 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_surplus.cost v_reroll_surplus.cost | 10 | references/source/game.lua:595 | 高：固定社区源码，待原版导出交叉验证
system.v_reroll_surplus.effects.0 重选折扣：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"rerollBaseCost","value":-2} | references/source/card.lua:1925-1928; references/source/game.lua:595 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_reroll_surplus.unlocked v_reroll_surplus.unlocked | true | references/source/game.lua:595 | 高：固定社区源码，待原版导出交叉验证
system.v_retcon.available v_retcon.available | true | references/source/game.lua:623 | 高：固定社区源码，待原版导出交叉验证
system.v_retcon.config.extra v_retcon.config.extra | 10 | references/source/game.lua:623 | 高：固定社区源码，待原版导出交叉验证
system.v_retcon.cost v_retcon.cost | 10 | references/source/game.lua:623 | 高：固定社区源码，待原版导出交叉验证
system.v_retcon.effects.0 重排关卡Ⅱ：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"bossRerollsAllowed","value":-1} | references/source/functions/button_callbacks.lua:2784-2803; references/source/game.lua:623 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_retcon.requires.0 v_retcon.requires.0 | v_directors_cut | references/source/game.lua:623 | 高：固定社区源码，待原版导出交叉验证
system.v_retcon.unlock_condition.extra v_retcon.unlock_condition.extra | 25 | references/source/game.lua:623 | 高：固定社区源码，待原版导出交叉验证
system.v_retcon.unlock_condition.type v_retcon.unlock_condition.type | blind_discoveries | references/source/game.lua:623 | 高：固定社区源码，待原版导出交叉验证
system.v_retcon.unlocked v_retcon.unlocked | false | references/source/game.lua:623 | 高：固定社区源码，待原版导出交叉验证
system.v_seed_money.available v_seed_money.available | true | references/source/game.lua:602 | 高：固定社区源码，待原版导出交叉验证
system.v_seed_money.config.extra v_seed_money.config.extra | 50 | references/source/game.lua:602 | 高：固定社区源码，待原版导出交叉验证
system.v_seed_money.cost v_seed_money.cost | 10 | references/source/game.lua:602 | 高：固定社区源码，待原版导出交叉验证
system.v_seed_money.effects.0 储蓄扩容：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"interestCap","value":50} | references/source/card.lua:1931-1934; references/source/game.lua:602 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_seed_money.unlocked v_seed_money.unlocked | true | references/source/game.lua:602 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_merchant.available v_tarot_merchant.available | true | references/source/game.lua:600 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_merchant.config.extra v_tarot_merchant.config.extra | 2.4 | references/source/game.lua:600 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_merchant.config.extra_disp v_tarot_merchant.config.extra_disp | 2 | references/source/game.lua:600 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_merchant.cost v_tarot_merchant.cost | 10 | references/source/game.lua:600 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_merchant.effects.0 异术进货：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"tarotRate","value":9.6} | references/source/card.lua:1890-1893; references/source/game.lua:600 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_tarot_merchant.unlocked v_tarot_merchant.unlocked | true | references/source/game.lua:600 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_tycoon.available v_tarot_tycoon.available | true | references/source/game.lua:617 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_tycoon.config.extra v_tarot_tycoon.config.extra | 8 | references/source/game.lua:617 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_tycoon.config.extra_disp v_tarot_tycoon.config.extra_disp | 4 | references/source/game.lua:617 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_tycoon.cost v_tarot_tycoon.cost | 10 | references/source/game.lua:617 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_tycoon.effects.0 异术进货Ⅱ：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"tarotRate","value":32} | references/source/card.lua:1890-1893; references/source/game.lua:617 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_tarot_tycoon.requires.0 v_tarot_tycoon.requires.0 | v_tarot_merchant | references/source/game.lua:617 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_tycoon.unlock_condition.extra v_tarot_tycoon.unlock_condition.extra | 50 | references/source/game.lua:617 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_tycoon.unlock_condition.type v_tarot_tycoon.unlock_condition.type | c_tarots_bought | references/source/game.lua:617 | 高：固定社区源码，待原版导出交叉验证
system.v_tarot_tycoon.unlocked v_tarot_tycoon.unlocked | false | references/source/game.lua:617 | 高：固定社区源码，待原版导出交叉验证
system.v_telescope.available v_telescope.available | true | references/source/game.lua:597 | 高：固定社区源码，待原版导出交叉验证
system.v_telescope.config.extra v_telescope.config.extra | 3 | references/source/game.lua:597 | 高：固定社区源码，待原版导出交叉验证
system.v_telescope.cost v_telescope.cost | 10 | references/source/game.lua:597 | 高：固定社区源码，待原版导出交叉验证
system.v_telescope.effects.0 定向观测：redeem时机的set规则 | {"trigger":"redeem","condition":{},"action":"set","field":"telescope","value":true} | references/source/card.lua:1736-1751; references/source/game.lua:597 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_telescope.unlocked v_telescope.unlocked | true | references/source/game.lua:597 | 高：固定社区源码，待原版导出交叉验证
system.v_wasteful.available v_wasteful.available | true | references/source/game.lua:599 | 高：固定社区源码，待原版导出交叉验证
system.v_wasteful.config.extra v_wasteful.config.extra | 1 | references/source/game.lua:599 | 高：固定社区源码，待原版导出交叉验证
system.v_wasteful.cost v_wasteful.cost | 10 | references/source/game.lua:599 | 高：固定社区源码，待原版导出交叉验证
system.v_wasteful.effects.0 换牌许可：redeem时机的add规则 | {"trigger":"redeem","condition":{},"action":"add","field":"discards","value":1} | references/source/card.lua:1943-1945; references/source/game.lua:599 | 高：人工阅读固定社区源码，待游戏内dump交叉验证
system.v_wasteful.unlocked v_wasteful.unlocked | true | references/source/game.lua:599 | 高：固定社区源码，待原版导出交叉验证
UI-001 抽牌音高关系 | 0.85 + percent*0.2/100 | references/source/functions/common_events.lua:416 | 高（参考源码）
UI-002 逐牌计分弹出基础时长 | 0.65 | references/source/functions/common_events.lua:805 | 高（参考源码）
UI-003 筹码弹出时长基数 | 0.6 | references/source/functions/common_events.lua:805 | 高（参考源码）
UI-004 弹出时长倍率 | 1.25 | references/source/functions/common_events.lua:878 | 高（参考源码）
UI-005 计分音高关系 | 0.8+percent*0.2 | references/source/functions/common_events.lua:892 | 高（参考源码）
UI-006 逐牌计分画面抖动增量 | 0.7 | references/source/functions/common_events.lua:895 | 高（参考源码）
VERSION-001 参考源码版本 | 1.0.1o-FULL | references/source/globals.lua:1-2 | 高（文件自声明，尚无游戏内核验）
RUN-001 一次选中/出牌上限 | 5 | references/source/functions/button_callbacks.lua:2049 | 高（参考源码）
