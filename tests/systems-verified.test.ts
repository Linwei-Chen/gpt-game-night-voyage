import { describe, it, expect } from 'vitest';
import evidence from '../data/evidence-systems-verified.json';
import { systemsContent, normalizeSystemsState, applyConsumable, applyVoucher, applyDeck, applyStake, applyBlindStart, applyBlindBeforeHand, applyBlindAfterHand, applyBlindEnd, applyBlindCardDebuffs, applyBlindDraw, applyTag, generatePackContents, generateShopPlayingCard, applyDeckEvent, disableBlind, applyBlindAfterDiscard, eligibleConsumables, eligibleJokerDefinitions, getObservatoryEffects } from '../src/content/systems-runtime';
import { computeInterest, computeSellValue, computePurchasePrice, computeRerollCost, computeBlindReward, computeBlindRequirement, computeRoundPayout, pickEdition, pickShopKind, pickBooster, eligibleBosses } from '../src/core/economy-runtime';

// 期望值来自 evidence-systems.json 中固定版本的原始字段与规则，不由实现生成。
const fixed = (value = 0.01) => ({next: () => value, int: (min:number, max:number) => min + Math.min(max-min, Math.floor(value*(max-min+1))), pick: <T>(xs:T[]) => xs[Math.min(xs.length-1,Math.floor(value*xs.length))], shuffle:<T>(xs:T[])=>[...xs]});
const fresh = (extra:Record<string,any> = {}) => normalizeSystemsState(extra);
const card = (id='a',rank=2,suit='spades',extra={}) => ({id,rank,suit,...extra} as any);
const partner = (id='j1',extra={})=>({id,sourceKey:'j_joker',rarity:1,cost:2,sellValue:1,state:{},...extra});

describe('系统事实完整性',()=>{
  it('固定版本和全部定义数量',()=>{
    expect(systemsContent.version.game).toBe('1.0.1o-FULL');
    for (const [key,count] of Object.entries({consumables:52,vouchers:32,decks:15,blinds:30,stakes:8,tags:24,boosters:32,enhancements:8,seals:4,editions:5})) expect((systemsContent as any)[key]).toHaveLength(count);
    for(const c of [...systemsContent.consumables,...systemsContent.vouchers,...systemsContent.decks,...systemsContent.blinds,...systemsContent.tags]) {expect(c.name).toMatch(/[\u4e00-\u9fff]/);expect(c.sourceRefs.length).toBeGreaterThan(0);expect(c.effects.length).toBeGreaterThan(0);}
  });
});
describe('经济规则',()=>{
  it.each([[0,0],[4,0],[5,1],[24,4],[25,5],[100,5],[-10,0]])('存款 %i 的利息为 %i',(d,e)=>expect(computeInterest(d)).toBe(e));
  it('储蓄升级与无利息牌组',()=>{expect(computeInterest(100,50)).toBe(10);expect(computeInterest(150,100)).toBe(20);expect(computeInterest(100,25,1,true)).toBe(0);});
  it('售价、折扣、版本加价和租赁',()=>{expect(computeSellValue(0)).toBe(1);expect(computeSellValue(5,3)).toBe(5);expect(computePurchasePrice(4,{edition:'foil'})).toBe(6);expect(computePurchasePrice(6,{discountPercent:25})).toBe(4);expect(computePurchasePrice(6,{discountPercent:50})).toBe(3);expect(computePurchasePrice(8,{rental:true})).toBe(1);expect(computePurchasePrice(3,{free:true})).toBe(0);});
  it('重选每次加一，免费次数优先于价格',()=>{expect([0,1,2,3].map(n=>computeRerollCost(n))).toEqual([5,6,7,8]);expect(computeRerollCost(2,1)).toBe(3);expect(computeRerollCost(10,5,1)).toBe(0);expect(computeRerollCost(2,5,0,0)).toBe(2);});
  it('盲注奖励与利息使用结算前现金',()=>{expect(computeBlindReward('bl_small',1)).toBe(3);expect(computeBlindReward('bl_small',2)).toBe(0);expect(computeBlindReward('bl_big',8)).toBe(4);expect(computeBlindReward('bl_final_vessel')).toBe(8);expect(computeRoundPayout({dollars:24,blindKey:'bl_small',handsLeft:2,discardsLeft:3})).toEqual({blind:3,hands:2,discards:0,interest:4,total:9});});
  it('三条首注曲线与常规/终局倍率',()=>{
    expect(Array.from({length:8},(_,i)=>computeBlindRequirement(i+1))).toEqual([300,800,2000,5000,11000,20000,35000,50000]);
    expect(Array.from({length:8},(_,i)=>computeBlindRequirement(i+1,'bl_small',3))).toEqual([300,900,2600,8000,20000,36000,60000,100000]);
    expect(Array.from({length:8},(_,i)=>computeBlindRequirement(i+1,'bl_small',6))).toEqual([300,1000,3200,9000,25000,60000,110000,200000]);
    expect(computeBlindRequirement(0)).toBe(100);expect(computeBlindRequirement(8,'bl_final_vessel')).toBe(300000);expect(computeBlindRequirement(1,'bl_big',1,2)).toBe(900);expect(computeBlindRequirement(9)).toBe(110000);
  });
  it('版本累积阈值与保底分布',()=>{expect(pickEdition(0.999)).toBe('negative');expect(pickEdition(0.995)).toBe('polychrome');expect(pickEdition(0.99)).toBe('holo');expect(pickEdition(0.97)).toBe('foil');expect(pickEdition(0.96)).toBeUndefined();expect(pickEdition(0.999,{noNegative:true})).toBe('polychrome');expect(pickEdition(0.2,{guaranteed:true,noNegative:true})).toBe('foil');});
  it('商店权重、首包保证和 Boss 资格',()=>{expect(pickShopKind(0)).toBe('joker');expect(pickShopKind(0.8)).toBe('tarot');expect(pickShopKind(0.9)).toBe('planet');expect(pickBooster(fixed(),{firstShop:true}).packKind).toBe('buffoon');expect(eligibleBosses(1).every(x=>!x.boss?.showdown&&x.boss!.min<=1)).toBe(true);expect(eligibleBosses(8)).toHaveLength(5);expect(eligibleBosses(12).some(x=>x.sourceKey==='bl_ox')).toBe(true);});
});

describe('52 件消耗品逐件验证',()=>{
  const enhancements:Record<string,string>={c_magician:'lucky',c_empress:'mult',c_heirophant:'bonus',c_lovers:'wild',c_chariot:'steel',c_justice:'glass',c_devil:'gold',c_tower:'stone'};
  for(const [key,enhancement] of Object.entries(enhancements))it(`${key} 强化指定牌`,()=>{const s=fresh({deck:[card()],handCards:[card()]});const r=applyConsumable(key,s,['a'],fixed());expect(r.applied).toBe(true);expect(r.state.handCards![0].enhancement).toBe(enhancement);expect(s.handCards![0].enhancement).toBeUndefined();});
  const suits:Record<string,string>={c_star:'diamonds',c_moon:'clubs',c_sun:'hearts',c_world:'spades'};
  for(const [key,suit] of Object.entries(suits))it(`${key} 改变花色`,()=>expect(applyConsumable(key,fresh({handCards:[card()]}),['a'],fixed()).state.handCards![0].suit).toBe(suit));
  const planets:Record<string,string>={c_mercury:'pair',c_venus:'threeOfAKind',c_earth:'fullHouse',c_mars:'fourOfAKind',c_jupiter:'flush',c_saturn:'straight',c_uranus:'twoPair',c_neptune:'straightFlush',c_pluto:'highCard',c_planet_x:'fiveOfAKind',c_ceres:'flushHouse',c_eris:'flushFive'};
  for(const [key,hand] of Object.entries(planets))it(`${key} 牌型升级`,()=>expect(applyConsumable(key,fresh(),[],fixed()).state.handLevels![hand]).toBe(2));
  const seals:Record<string,string>={c_talisman:'gold',c_deja_vu:'red',c_trance:'blue',c_medium:'purple'};
  for(const [key,seal] of Object.entries(seals))it(`${key} 印记`,()=>expect(applyConsumable(key,fresh({handCards:[card()]}),['a'],fixed()).state.handCards![0].seal).toBe(seal));
  it('c_fool 复制最后消费，禁止复制自身',()=>{expect(applyConsumable('c_fool',fresh({lastTarotPlanet:'c_empress'}),[],fixed()).state.consumables).toEqual(['c_empress']);expect(applyConsumable('c_fool',fresh({lastTarotPlanet:'c_fool'}),[],fixed()).applied).toBe(false);});
  for(const [key,kind] of [['c_emperor','tarot'],['c_high_priestess','planet']])it(`${key} 生成两件同类消费品`,()=>{const r=applyConsumable(key,fresh(),[],fixed());expect(r.state.consumables).toHaveLength(2);for(const k of r.state.consumables!)expect(systemsContent.consumables.find(c=>c.sourceKey===k)!.kind).toBe(kind);});
  it('c_hermit 复制非负现金，封顶 20',()=>{expect(applyConsumable('c_hermit',fresh({dollars:30}),[],fixed()).state.dollars).toBe(50);expect(applyConsumable('c_hermit',fresh({dollars:-4}),[],fixed()).state.dollars).toBe(-4);});
  it('c_temperance 以伙伴售价求和，封顶 50',()=>expect(applyConsumable('c_temperance',fresh({dollars:0,jokers:[partner('j1',{sellValue:60})]}),[],fixed()).state.dollars).toBe(50));
  it('c_strength 点数循环到 2',()=>expect(applyConsumable('c_strength',fresh({handCards:[card('a',14)]}),['a'],fixed()).state.handCards![0].rank).toBe(2));
  it('c_hanged_man 销毁指定牌',()=>{const r=applyConsumable('c_hanged_man',fresh({deck:[card(),card('b')],handCards:[card(),card('b')]}),['a'],fixed());expect(r.state.deck).toHaveLength(1);expect(r.events.some(e=>e.type==='cardsRemoved')).toBe(true);});
  it('c_death 从最右牌完整拷贝属性',()=>{const r=applyConsumable('c_death',fresh({handCards:[card(),card('b',14,'hearts',{enhancement:'gold',seal:'red'})]}),['a','b'],fixed());expect(r.state.handCards![0]).toMatchObject({id:'a',rank:14,suit:'hearts',enhancement:'gold',seal:'red'});});
  it('c_wheel_of_fortune 四分之一成功且只改变无版本伙伴',()=>{expect(applyConsumable('c_wheel_of_fortune',fresh({jokers:[partner()]}),[],fixed(.01)).state.jokers![0].edition).toBe('foil');expect(applyConsumable('c_wheel_of_fortune',fresh({jokers:[partner()]}),[],fixed(.5)).state.jokers![0].edition).toBeUndefined();});
  for(const [key,rarity] of [['c_judgement',1],['c_soul',4],['c_wraith',3]] as const)it(`${key} 生成指定伙伴阶级`,()=>{const r=applyConsumable(key,fresh({dollars:10}),[],fixed());expect(r.state.jokers![0].rarity).toBe(rarity);if(key==='c_wraith')expect(r.state.dollars).toBe(0);});
  for(const [key,count,rank] of [['c_familiar',3,11],['c_grim',2,14],['c_incantation',4,2]] as const)it(`${key} 销毁一张再生成强化牌`,()=>{const r=applyConsumable(key,fresh({deck:[card(),card('b')],handCards:[card(),card('b')]}),[],fixed());expect(r.state.deck).toHaveLength(count+1);expect(r.state.handCards!.slice(-count).every((c:any)=>c.rank===rank&&c.enhancement&&c.enhancement!=='stone')).toBe(true);});
  it('c_aura 必定赋予非空版本',()=>expect(applyConsumable('c_aura',fresh({handCards:[card()]}),['a'],fixed()).state.handCards![0].edition).toBe('foil'));
  it('c_sigil 全手牌同一花色',()=>{const r=applyConsumable('c_sigil',fresh({handCards:[card(),card('b',3,'hearts')]}),[],fixed());expect(new Set(r.state.handCards!.map((c:any)=>c.suit)).size).toBe(1);});
  it('c_ouija 全手牌同一点数并永久减手牌上限',()=>{const r=applyConsumable('c_ouija',fresh({handCards:[card(),card('b',3)]}),[],fixed());expect(new Set(r.state.handCards!.map((c:any)=>c.rank)).size).toBe(1);expect(r.state.handSize).toBe(7);});
  it('c_ectoplasm 随使用次数递增缩手且增加伙伴槽',()=>{let r=applyConsumable('c_ectoplasm',fresh({jokers:[partner()]}),[],fixed());expect(r.state.handSize).toBe(7);expect(r.state.jokerSlots).toBe(6);r=applyConsumable('c_ectoplasm',{...r.state,jokers:[...r.state.jokers!,partner('j2')]},[],fixed());expect(r.state.handSize).toBe(5);});
  it('c_immolate 销毁至多五张并得 20',()=>{const cards=Array.from({length:6},(_,i)=>card(String(i)));const r=applyConsumable('c_immolate',fresh({dollars:0,deck:cards,handCards:cards}),[],fixed());expect(r.state.deck).toHaveLength(1);expect(r.state.dollars).toBe(20);});
  it('c_ankh 复制伙伴、销毁其他可销毁伙伴且剥离复制品空域',()=>{const r=applyConsumable('c_ankh',fresh({jokers:[partner('j1',{edition:'negative'}),partner('j2')]}),[],fixed());expect(r.state.jokers).toHaveLength(2);expect(r.state.jokers![1].edition).toBeUndefined();});
  it('c_hex 彩化伙伴并保留永恒伙伴',()=>{const r=applyConsumable('c_hex',fresh({jokers:[partner(),partner('j2',{eternal:true}),partner('j3')]}),[],fixed());expect(r.state.jokers).toHaveLength(2);expect(r.state.jokers![0].edition).toBe('polychrome');});
  it('c_cryptid 生成两张完整副本',()=>{const r=applyConsumable('c_cryptid',fresh({deck:[card()],handCards:[card()]}),['a'],fixed());expect(r.state.deck).toHaveLength(3);expect(new Set(r.state.deck!.map((c:any)=>c.id)).size).toBe(3);});
  it('c_black_hole 同时升级所有 12 种牌型',()=>expect(Object.values(applyConsumable('c_black_hole',fresh(),[],fixed()).state.handLevels!).every(x=>x===2)).toBe(true));
  it('消费选牌与容量限制拒绝无效操作',()=>{expect(applyConsumable('c_death',fresh({handCards:[card()]}),['a'],fixed()).applied).toBe(false);expect(applyConsumable('c_magician',fresh(),[],fixed()).applied).toBe(false);expect(applyConsumable('c_soul',fresh({jokerSlots:1,jokers:[partner()]}),[],fixed()).applied).toBe(false);});
});

describe('32 件凭单逐件规则',()=>{
 const expectations:Record<string,Record<string,any>>={v_overstock_norm:{shopSlots:3},v_overstock_plus:{shopSlots:3},v_clearance_sale:{discountPercent:25},v_liquidation:{discountPercent:50},v_hone:{editionRate:2},v_glow_up:{editionRate:4},v_reroll_surplus:{rerollBaseCost:3},v_reroll_glut:{rerollBaseCost:3},v_crystal_ball:{consumableSlots:3},v_omen_globe:{omenGlobe:true},v_telescope:{telescope:true},v_observatory:{observatory:true},v_grabber:{hands:5},v_nacho_tong:{hands:5},v_wasteful:{discards:4},v_recyclomancy:{discards:4},v_tarot_merchant:{tarotRate:9.6},v_tarot_tycoon:{tarotRate:32},v_planet_merchant:{planetRate:9.6},v_planet_tycoon:{planetRate:32},v_seed_money:{interestCap:50},v_money_tree:{interestCap:100},v_blank:{blankRedeems:1},v_antimatter:{jokerSlots:6},v_magic_trick:{playingCardRate:4},v_illusion:{playingCardRate:4,illusion:true},v_hieroglyph:{ante:0,blindAnte:0,hands:3},v_petroglyph:{ante:0,blindAnte:0,discards:2},v_directors_cut:{bossRerollsAllowed:1},v_retcon:{bossRerollsAllowed:-1},v_paint_brush:{handSize:9},v_palette:{handSize:9}};
 for(const [key,expected] of Object.entries(expectations))it(`${key} 运行效果`,()=>{const r=applyVoucher(key,fresh());expect(r.applied).toBe(true);expect(r.state).toMatchObject(expected);expect(r.state.vouchers).toContain(key);});
 it('升级凭单替换比例而非累乘，重复兑换不生效',()=>{let s=applyVoucher('v_tarot_merchant',fresh()).state;s=applyVoucher('v_tarot_tycoon',s).state;expect(s.tarotRate).toBe(32);expect(applyVoucher('v_tarot_tycoon',s).applied).toBe(false);});
});

describe('15 牌组、8 档难度',()=>{
 const expectations:Record<string,Record<string,any>>={b_red:{discards:4},b_blue:{hands:5},b_yellow:{dollars:14},b_green:{noInterest:true,moneyPerHand:2,moneyPerDiscard:1},b_black:{hands:3,jokerSlots:6},b_magic:{consumableSlots:3,consumables:['c_fool','c_fool']},b_nebula:{consumableSlots:1,telescope:true},b_ghost:{spectralRate:2,consumables:['c_hex']},b_abandoned:{},b_checkered:{},b_zodiac:{shopSlots:3,tarotRate:9.6,planetRate:9.6},b_painted:{handSize:10,jokerSlots:4},b_anaglyph:{bossDoubleTag:true},b_plasma:{anteScaling:2,balancedScoring:true},b_erratic:{randomizedDeck:true}};
 for(const [key,expected] of Object.entries(expectations))it(`${key} 初始化`,()=>{const r=applyDeck(key,fresh(),fixed());expect(r.state).toMatchObject(expected);if(key==='b_abandoned')expect(r.state.deck).toHaveLength(40);if(key==='b_checkered')expect(new Set(r.state.deck!.map((c:any)=>c.suit))).toEqual(new Set(['spades','hearts']));if(key==='b_erratic')expect(r.state.deck!.every((c:any)=>c.rank===2)).toBe(true);});
 for(let stake=1;stake<=8;stake++)it(`难度 ${stake} 累积规则`,()=>{const s=applyStake(stake,fresh()).state;expect(s.noSmallBlindReward).toBe(stake>=2);expect(s.scaling).toBe(stake>=6?3:stake>=3?2:1);expect(s.eternalsEnabled).toBe(stake>=4);expect(s.discards).toBe(stake>=5?2:3);expect(s.perishablesEnabled).toBe(stake>=7);expect(s.rentalsEnabled).toBe(stake>=8);});
});

describe('28 个 Boss 的数值与触发点',()=>{
 for(const b of systemsContent.blinds.filter(x=>x.kind==='boss'))it(`${b.sourceKey} 筹码与奖励`,()=>{expect(computeBlindRequirement(1,b.sourceKey)).toBe(300*b.mult!);expect(computeBlindReward(b.sourceKey)).toBe(b.dollars);});
 it('起手减弃牌/出牌/手牌限制',()=>{expect(applyBlindStart('bl_water',fresh(),fixed()).state.discards).toBe(0);expect(applyBlindStart('bl_needle',fresh(),fixed()).state.hands).toBe(1);expect(applyBlindStart('bl_manacle',fresh(),fixed()).state.handSize).toBe(7);});
 it('出牌规则、点数下降、归零与减半',()=>{
   expect(applyBlindBeforeHand('bl_psychic',fresh(),[card()],'pair',fixed()).debuffedHand).toBe(true);
   let s=applyBlindBeforeHand('bl_eye',fresh(),[card()],'pair',fixed()).state;expect(applyBlindBeforeHand('bl_eye',s,[card()],'pair',fixed()).debuffedHand).toBe(true);
   s=applyBlindBeforeHand('bl_mouth',fresh(),[card()],'pair',fixed()).state;expect(applyBlindBeforeHand('bl_mouth',s,[card()],'flush',fixed()).debuffedHand).toBe(true);
   expect(applyBlindBeforeHand('bl_arm',fresh({handLevels:{pair:3}}),[card()],'pair',fixed()).state.handLevels!.pair).toBe(2);
   expect(applyBlindBeforeHand('bl_ox',fresh({dollars:20,mostPlayedHand:'pair'}),[card()],'pair',fixed()).state.dollars).toBe(0);
   expect(applyBlindBeforeHand('bl_flint',fresh(),[card()],'pair',fixed())).toMatchObject({baseChipsFactor:.5,baseMultFactor:.5});
   expect(applyBlindBeforeHand('bl_tooth',fresh({dollars:4}),[card(),card('b')],'pair',fixed()).state.dollars).toBe(2);
 });
 it('各花色、人物牌、旧牌和封印禁用',()=>{for(const [key,suit] of [['bl_goad','spades'],['bl_head','hearts'],['bl_club','clubs'],['bl_window','diamonds']])expect(applyBlindCardDebuffs(key,[card('a',2,suit)])[0].debuffed).toBe(true);expect(applyBlindCardDebuffs('bl_plant',[card('a',11)])[0].debuffed).toBe(true);expect(applyBlindCardDebuffs('bl_pillar',[card()],fresh({playedThisAnte:['a']}))[0].debuffed).toBe(true);expect(applyBlindCardDebuffs('bl_final_leaf',[card()])[0].debuffed).toBe(true);});
 it('暗牌、强制选择、随机静默和丢牌',()=>{
   expect(applyBlindDraw('bl_house',fresh(),[card()],fixed()).state.handCards![0].custom!.faceDown).toBe(true);
   expect(applyBlindDraw('bl_wheel',fresh(),[card()],fixed()).state.handCards![0].custom!.faceDown).toBe(true);
   expect(applyBlindDraw('bl_mark',fresh(),[card('a',12)],fixed()).state.handCards![0].custom!.faceDown).toBe(true);
   expect(applyBlindDraw('bl_fish',fresh({blindState:{fishPrepped:true}}),[card()],fixed()).state.handCards![0].custom!.faceDown).toBe(true);
   expect(applyBlindDraw('bl_final_bell',fresh(),[card()],fixed()).state.forcedSelection).toBe('a');
   expect(applyBlindDraw('bl_final_heart',fresh({jokers:[partner()]}),[card()],fixed()).state.jokers![0].debuffed).toBe(true);
   expect(applyBlindBeforeHand('bl_hook',fresh({handCards:[card(),card('b'),card('c')]}),[], 'pair',fixed()).state.handCards).toHaveLength(1);
   expect(applyBlindStart('bl_final_acorn',fresh({jokers:[partner()]}),fixed()).state.jokers![0].state.faceDown).toBe(true);
   expect(applyBlindAfterHand('bl_serpent',fresh(),[card()],fixed()).state.blindState!.drawCount).toBe(3);
 });
});

describe('全量逐字段证据断言',()=>{
  const catalog=new Map<string,any>(['consumables','vouchers','decks','blinds','stakes','tags','boosters','enhancements','seals','editions'].flatMap(key=>(systemsContent as any)[key]).map(item=>[item.sourceKey,item]));
  for(const fact of evidence.facts)it(fact.id,()=>{
    const [root,...parts]=fact.id.replace(/^system\./,'').split('.');
    let actual:any=catalog.get(root)??(systemsContent as any)[root];
    if(parts.length===1&&parts[0]==='rules')actual=actual.effects;
    else for(const part of parts)actual=actual?.[part];
    expect(actual).toEqual(fact.value);expect(fact.source).toMatch(/references\/source\/.+:\d+/);
  });
});

describe('24 件凭签逐件触发',()=>{
 for(const [key,rarity] of [['tag_uncommon',2],['tag_rare',3]] as const)it(`${key} 免费指定稀有度伙伴`,()=>{const r=applyTag(key,fresh(),{type:'store_joker_create'},fixed());expect(r.applied).toBe(true);expect(r.state.shopCards[0]).toMatchObject({kind:'joker',cost:0,joker:{rarity}});expect(r.state.shopCards[0].sellValue).toBeGreaterThan(0);});
 for(const [key,edition] of [['tag_negative','negative'],['tag_foil','foil'],['tag_holo','holo'],['tag_polychrome','polychrome']] as const)it(`${key} 修改无版本伙伴并免购价`,()=>{const r=applyTag(key,fresh({shopCards:[{id:'o1',kind:'joker',sourceKey:'j_joker',joker:partner(),cost:2}]}),{type:'store_joker_modify',cardId:'o1'},fixed());expect(r.state.shopCards[0]).toMatchObject({edition,cost:0});expect(r.state.shopCards[0].joker!.edition).toBe(edition);expect(r.state.jokerSlots).toBe(5);});
 it('tag_investment 在 Boss 结算时发 25',()=>{expect(applyTag('tag_investment',fresh({dollars:0}),{type:'eval'},fixed()).applied).toBe(false);expect(applyTag('tag_investment',fresh({dollars:0}),{type:'eval',bossDefeated:true},fixed()).state.dollars).toBe(25);});
 it('tag_voucher 增加可买凭单',()=>{const r=applyTag('tag_voucher',fresh(),{type:'voucher_add'},fixed());expect(r.state.shopCards[0]).toMatchObject({kind:'voucher',cost:10});});
 it('tag_boss 按资格重选 Boss',()=>{const r=applyTag('tag_boss',fresh({ante:8}),{type:'new_blind_choice'},fixed());expect(r.state.bossKey.startsWith('bl_final_')).toBe(true);expect(r.state.bossesUsed![r.state.bossKey]).toBe(1);});
 for(const [key,pack] of [['tag_standard','p_standard_mega_1'],['tag_charm','p_arcana_mega_1'],['tag_meteor','p_celestial_mega_1'],['tag_buffoon','p_buffoon_mega_1'],['tag_ethereal','p_spectral_normal_1']])it(`${key} 赠包`,()=>{const r=applyTag(key,fresh(),{type:'new_blind_choice'},fixed());expect(r.state.freePacks).toEqual([pack]);expect(r.events).toContainEqual({type:'openFreePack',sourceKey:pack});});
 for(const [key,state,expected] of [['tag_handy',{handsPlayed:7},7],['tag_garbage',{unusedDiscards:9},9],['tag_skip',{skips:3},15],['tag_economy',{dollars:50},90]] as const)it(`${key} 计数奖励`,()=>expect(applyTag(key,fresh({dollars:0,...state}),{type:'immediate'},fixed()).state.dollars).toBe(expected));
 it('tag_coupon 仅免伙伴、道具与卡包价格',()=>{const r=applyTag('tag_coupon',fresh({shopCards:[{id:'a',kind:'joker',cost:6},{id:'b',kind:'pack',cost:8},{id:'c',kind:'voucher',cost:10}]}),{type:'shop_final_pass'},fixed());expect(r.state.shopCards.map(x=>x.cost)).toEqual([0,0,10]);});
 it('tag_double 复制下一种非复签凭签',()=>{expect(applyTag('tag_double',fresh(),{type:'tag_add',tagKey:'tag_double'},fixed()).applied).toBe(false);const r=applyTag('tag_double',fresh(),{type:'tag_add',tagKey:'tag_orbital',orbitalHand:'flush'},fixed());expect(r.state.tags[0]).toMatchObject({sourceKey:'tag_orbital',orbitalHand:'flush'});});
 it('tag_juggle 仅本轮加 3 手牌容量',()=>{const r=applyTag('tag_juggle',fresh(),{type:'round_start_bonus'},fixed());expect(r.state.handSize).toBe(11);expect(r.state.temporaryHandSize).toBe(3);});
 it('tag_d_six 当前商店从零起价而非无限免费',()=>{const r=applyTag('tag_d_six',fresh(),{type:'shop_start'},fixed());expect(computeRerollCost(0,5,0,r.state.temporaryRerollBase)).toBe(0);expect(computeRerollCost(3,5,0,r.state.temporaryRerollBase)).toBe(3);});
 it('tag_top_up 至多加两名普通伙伴',()=>{expect(applyTag('tag_top_up',fresh({jokers:[],jokerSlots:5}),{type:'immediate'},fixed()).state.jokers).toHaveLength(2);expect(applyTag('tag_top_up',fresh({jokers:[partner()],jokerSlots:2}),{type:'immediate'},fixed()).state.jokers).toHaveLength(2);});
 it('tag_orbital 指定牌型升级 3',()=>expect(applyTag('tag_orbital',fresh(),{type:'immediate',orbitalHand:'flush'},fixed()).state.handLevels.flush).toBe(4));
 it('没有目标和错误时机应保留凭签',()=>{expect(applyTag('tag_foil',fresh(),{type:'store_joker_modify'},fixed()).applied).toBe(false);expect(applyTag('tag_coupon',fresh(),{type:'immediate'},fixed()).applied).toBe(false);});
});

describe('32 个卡包、隐藏消费与商店纸牌',()=>{
  for(const pack of systemsContent.boosters)it(`${pack.sourceKey} 槽位与选择次数`,()=>{const r=generatePackContents(pack.sourceKey,fresh(),fixed());expect(r.items).toHaveLength(pack.size!);expect(r.choose).toBe(pack.choose);expect(r.items.every(x=>x.kind===(pack.packKind==='standard'?'playingCard':pack.packKind==='buffoon'?'joker':'consumable'))).toBe(true);expect(r.state.jokers).toHaveLength(0);});
  it('普通包强化、版本和印记阈值边界',()=>{const high=generatePackContents('p_standard_normal_1',fresh(),fixed(.999));expect(high.items.every(x=>x.card?.enhancement&&x.card?.edition==='polychrome'&&x.card?.seal==='red')).toBe(true);expect(high.state.jokerSlots).toBe(5);const low=generatePackContents('p_standard_normal_1',fresh(),fixed(.1));expect(low.items.every(x=>!x.card?.enhancement&&!x.card?.edition&&!x.card?.seal)).toBe(true);});
  it('跨界匣替换概率与隐藏物品不会在普通卡池出现',()=>{const r=generatePackContents('p_arcana_normal_1',fresh({omenGlobe:true}),fixed(.9));expect(r.items.every(x=>systemsContent.consumables.find(c=>c.sourceKey===x.sourceKey)!.kind==='spectral')).toBe(true);expect(eligibleConsumables('spectral').some(x=>x.hidden)).toBe(false);expect(eligibleConsumables('planet').some(x=>x.config.softlock)).toBe(false);expect(eligibleConsumables('planet',{handPlayed:{flushFive:1}}).some(x=>x.sourceKey==='c_eris')).toBe(true);});
  it('隐藏替代物的两次独立判定保留顺序',()=>{expect(generatePackContents('p_arcana_normal_1',fresh(),fixed(.999)).items[0].sourceKey).toBe('c_soul');expect(generatePackContents('p_celestial_normal_1',fresh(),fixed(.999)).items[0].sourceKey).toBe('c_black_hole');expect(generatePackContents('p_spectral_normal_1',fresh(),fixed(.999)).items[0].sourceKey).toBe('c_black_hole');});
  it('定向观测固定第一件最常用牌型星图',()=>expect(generatePackContents('p_celestial_normal_1',fresh({telescope:true,mostPlayedHand:'flush'}),fixed()).items[0].sourceKey).toBe('c_jupiter'));
  it('商店纸牌基础价 1，精装两个独立概率',()=>{expect(generateShopPlayingCard(fresh(),fixed()).offer.cost).toBe(1);const r=generateShopPlayingCard(fresh({illusion:true}),fixed(.99));expect(r.offer.card).toMatchObject({enhancement:'lucky',edition:'polychrome'});expect(r.offer.cost).toBe(6);});
  it('免费优先于租赁购买价，售价始终有最低值',()=>{expect(computePurchasePrice(8,{rental:true,free:true})).toBe(0);expect(computeSellValue(0)).toBe(1);});
});

describe('生命周期与集成资源',()=>{
 it('Boss 的单轮次数不覆盖永久资源',()=>{let s=fresh({hands:4,handsLeft:4,discards:3,discardsLeft:3});expect(applyBlindStart('bl_water',s,fixed()).state).toMatchObject({discards:3,discardsLeft:0});expect(applyBlindStart('bl_needle',s,fixed()).state).toMatchObject({hands:4,handsLeft:1});});
 it('禁用窄握保留期间取得的永久手牌修改',()=>{const s=applyBlindStart('bl_manacle',fresh(),fixed()).state;s.handSize--;expect(disableBlind('bl_manacle',s).state.handSize).toBe(7);});
 it('限流同样适用于弃牌后的抽牌',()=>expect(applyBlindAfterDiscard('bl_serpent',fresh(),fixed()).state.blindState.drawCount).toBe(3));
 it('复签牌组在守关胜利后给予一枚复签',()=>expect(applyDeckEvent('b_anaglyph',fresh(),{type:'bossDefeated'},fixed()).state.tags[0].sourceKey).toBe('tag_double'));
 it('卡库属性转换不会改变未选牌，移除会传出完整对象',()=>{const r=applyConsumable('c_strength',fresh({deck:[card(),card('b')],handCards:[card()]}),['a'],fixed());expect(r.state.deck.find(x=>x.id==='b')!.rank).toBe(2);expect(r.state.deck.find(x=>x.id==='a')!.rank).toBe(3);});
});

describe('守关与商店时机的回归测试',()=>{
 // 永久静默来自 card.lua:526-532；盲注轮换候选池来自 blind.lua:588-596。
 for(const remaining of [0,-1])it(`盲注结束保留已耗尽伙伴 ${remaining} 的静默`,()=>{
   const expired=partner('expired',{perishable:remaining,debuffed:true});
   const temporary=partner('temporary',{perishable:2,debuffed:true,state:{faceDown:true}});
   const r=applyBlindEnd('bl_final_heart',fresh({jokers:[expired,temporary]}));
   expect(r.state.jokers[0].debuffed).toBe(true);expect(r.state.jokers[1].debuffed).toBe(false);expect(r.state.jokers[1].state.faceDown).toBe(false);
 });
 it('禁用盲注保留已耗尽伙伴的静默',()=>{
   const r=disableBlind('bl_final_heart',fresh({jokers:[partner('expired',{perishable:0,debuffed:true}),partner('temporary',{debuffed:true})]}));
   expect(r.state.jokers.map(j=>j.debuffed)).toEqual([true,false]);
 });
 it('静默守关轮换避开已耗尽伙伴且不解除其永久静默',()=>{
   let s=applyBlindStart('bl_final_heart',fresh({jokers:[partner('expired',{perishable:0,debuffed:true}),partner('active')]}),fixed()).state;
   s=applyBlindDraw('bl_final_heart',s,[card()],fixed()).state;
   expect(s.jokers.map(j=>j.debuffed)).toEqual([true,true]);expect(s.blindState.debuffedJoker).toBe('active');
   s=applyBlindBeforeHand('bl_final_heart',s,[card()],'highCard',fixed()).state;
   s=applyBlindDraw('bl_final_heart',s,[card('b')],fixed()).state;
   expect(s.jokers.map(j=>j.debuffed)).toEqual([true,false]);
 });

 it('静默守关只在起手或出牌后轮换，不在普通弃牌后轮换',()=>{let s=applyBlindStart('bl_final_heart',fresh({jokers:[partner('j1'),partner('j2')]}),fixed()).state;s=applyBlindDraw('bl_final_heart',s,[card()],fixed()).state;expect(s.jokers.find(j=>j.debuffed)!.id).toBe('j1');s=applyBlindDraw('bl_final_heart',s,[card('b')],fixed()).state;expect(s.jokers.find(j=>j.debuffed)!.id).toBe('j1');s=applyBlindBeforeHand('bl_final_heart',s,[card()],'highCard',fixed()).state;s=applyBlindDraw('bl_final_heart',s,[card('c')],fixed()).state;expect(s.jokers.find(j=>j.debuffed)!.id).toBe('j2');});
 it('同一商店多枚零起价凭签和免费采购凭签留待下个商店',()=>{let r=applyTag('tag_d_six',fresh(),{type:'shop_start'},fixed());expect(applyTag('tag_d_six',r.state,{type:'shop_start'},fixed()).applied).toBe(false);r=applyTag('tag_coupon',fresh(),{type:'shop_final_pass'},fixed());expect(applyTag('tag_coupon',r.state,{type:'shop_final_pass'},fixed()).applied).toBe(false);});
 it('普通守关起手遮牌使用本轮计数，而非整局计数',()=>{const s=applyBlindStart('bl_house',fresh({handsPlayed:15}),fixed()).state;expect(applyBlindDraw('bl_house',s,[card()],fixed()).state.handCards[0].custom?.faceDown).toBe(true);});
 it('有两类额外进货时区间顺序为纸牌再异域',()=>expect(pickShopKind(.92,{joker:20,tarot:4,planet:4,playingCard:4,spectral:2})).toBe('playingCard'));
});


describe('卡包与货架生成的来源回归',()=>{
 const stampedRng=(poll:number)=>({...fixed(),next:(key='')=>key.startsWith('packetper')||key.startsWith('etperpoll')?poll:key.startsWith('packssjr')||key.startsWith('ssjr')?.8:.01});
 for(const [roll,eternal,perishable] of [[.4,false,undefined],[.7,false,5],[.701,true,undefined]] as const)it(`卡包贴签边界 ${roll}`,()=>{
  const state=applyStake(8,fresh()).state,r=generatePackContents('p_buffoon_normal_1',state,stampedRng(roll)),j=r.items[0].joker!;
  expect(!!j.eternal).toBe(eternal);expect(j.perishable).toBe(perishable);expect(j.rental).toBe(true);expect(j.cost).toBe(1);
 });
 it('低难度卡包不贴高难度标签',()=>{const j=generatePackContents('p_buffoon_normal_1',fresh(),stampedRng(.8)).items[0].joker!;expect(j.eternal).toBeFalsy();expect(j.perishable).toBeUndefined();expect(j.rental).toBeFalsy();});
 it('赠送的货架伙伴仍遵循高难度贴签',()=>{const j=applyTag('tag_uncommon',applyStake(8,fresh()).state,{type:'store_joker_create'},stampedRng(.7)).state.shopCards[0].joker!;expect(j.perishable).toBe(5);expect(j.rental).toBe(true);});
 for(const pack of ['p_buffoon_mega_1','p_arcana_mega_1','p_celestial_mega_1','p_spectral_mega_1'])it(`${pack} 未持有展商时包内不重复`,()=>{const keys=generatePackContents(pack,fresh(),fixed()).items.map(x=>x.sourceKey);expect(new Set(keys).size).toBe(keys.length);});
 it('已在货架的伙伴与消耗品也占用候选键',()=>{expect(eligibleJokerDefinitions(fresh({shopCards:[{id:'a',kind:'joker',sourceKey:'j_joker'}]}),1).some(x=>x.sourceKey==='j_joker')).toBe(false);expect(eligibleConsumables('tarot',fresh({shopCards:[{id:'a',kind:'tarot',sourceKey:'c_fool'}]})).some(x=>x.sourceKey==='c_fool')).toBe(false);});
 it('展商可允许重复，静默的展商没有作用',()=>{const showman={...partner(),sourceKey:'j_ring_master',debuffed:false},state=fresh({jokers:[showman]});const keys=generatePackContents('p_arcana_mega_1',state,fixed()).items.map(x=>x.sourceKey);expect(new Set(keys).size).toBe(1);showman.debuffed=true;const blocked=generatePackContents('p_arcana_mega_1',fresh({jokers:[showman]}),fixed()).items.map(x=>x.sourceKey);expect(new Set(blocked).size).toBe(blocked.length);});
});

describe('观测增幅的持有星图作用',()=>{
 it('未兑换凭单时没有倍率效果',()=>expect(getObservatoryEffects(fresh({consumables:['c_mercury']}),'pair')).toEqual([]));
 it('每张匹配星图分别乘1.5倍率，不消费库存',()=>{const state=applyVoucher('v_observatory',fresh({consumables:['c_mercury','c_mercury','c_venus','c_fool']})).state;const events=getObservatoryEffects(state,'pair');expect(events).toHaveLength(2);expect(events.map(e=>e.amount)).toEqual([1.5,1.5]);expect(state.consumables).toHaveLength(4);});
 it('库存对象按从左到右保留实例身份，静默星图不触发',()=>{const events=getObservatoryEffects(fresh({observatory:true}),'flush',[{id:'a',sourceKey:'c_jupiter'},{id:'b',sourceKey:'c_jupiter',debuffed:true},{id:'c',sourceKey:'c_jupiter'}]);expect(events.map(e=>e.cardId)).toEqual(['a','c']);expect(events.every(e=>e.type==='scoreXMult'&&e.stage==='jokerMainConsumable')).toBe(true);});
 it('错误牌型和异域全升级物不会当作星图',()=>expect(getObservatoryEffects(fresh({observatory:true,consumables:['c_black_hole','c_mercury']}),'flushFive')).toEqual([]));
});


describe('临时手牌容量与包型选择',()=>{
 it('回合结束回收凭签临时容量并保留永久修改，只回收一次',()=>{const s=applyTag('tag_juggle',fresh(),{type:'round_start_bonus'},fixed()).state;s.handSize++;const end=applyBlindEnd('bl_small',s).state;expect(end.handSize).toBe(9);expect(end.temporaryHandSize).toBeUndefined();expect(applyBlindEnd('bl_small',end).state.handSize).toBe(9);});
 it('占卜与星图赠包可选择等效的第二种包型',()=>{expect(applyTag('tag_charm',fresh(),{type:'new_blind_choice'},fixed(.9)).state.freePacks).toEqual(['p_arcana_mega_2']);expect(applyTag('tag_meteor',fresh(),{type:'new_blind_choice'},fixed(.9)).state.freePacks).toEqual(['p_celestial_mega_2']);});
});
