import { describe, it, expect } from 'vitest';
import { createRun, enterBlind, toggleCard, playSelected, discardSelected, continueAfterRound, rerollShop, buyOffer, leaveShop, serializeRun, restoreRun, sellItem, useConsumable, takePackCard, rerollBoss, bossRerollCost, skipBlind } from '../src/core/run-engine';
import { createJoker } from '../src/content/jokers';
import content from '../data/systems-verified.json';

describe('完整局状态机：证据先于实现',()=>{
  it('初始资源逐项对应事实JSON',()=>{
    const s=createRun('ENGINE-START','b_red',1);
    expect(s.dollars).toBe(content.starting.dollars);
    expect(s.handSize).toBe(content.starting.handSize);
    expect(s.maxDiscards).toBe(content.starting.discards+Number(content.decks.find(x=>x.sourceKey==='b_red')!.config.discards));
    expect(s.deck).toHaveLength(content.starting.deckSize);
    expect(s.phase).toBe('blindSelect');
  });
  it('非法空出牌不消耗次数或随机状态',()=>{
    const s=enterBlind(createRun('INVALID'));const before=serializeRun(s);
    expect(()=>playSelected(s)).toThrow();expect(serializeRun(s)).toBe(before);
  });
  it('出牌/弃牌与手牌、牌库的守恒',()=>{
    const s=enterBlind(createRun('CARD-CONSERVATION'));
    expect(s.hand).toHaveLength(s.handSize);
    const selected=s.hand[0]!.id;toggleCard(s,selected);discardSelected(s);
    expect(s.discardsLeft).toBe(s.maxDiscards-1);
    expect(s.hand).toHaveLength(s.handSize);
    expect(s.hand.some(x=>x.id===selected)).toBe(false);
    expect(s.hand.length+s.drawPile.length+s.discardPile.length).toBe(s.deck.length);
  });
  it('单张六点销毁后，整局状态机接收生成幽影牌事件',()=>{
    const s=createRun('SIXTH-SENSE');
    s.deck=[{id:'six',rank:6,suit:'clubs'}];
    s.jokers=[createJoker('j_sixth_sense','sixth') as any];
    enterBlind(s);
    toggleCard(s,'six');
    const result=playSelected(s);
    expect(result.destroyedCards.map(c=>c.id)).toEqual(['six']);
    expect(result.events.some(e=>e.kind==='spawn'&&e.target==='spectral')).toBe(true);
    expect(s.deck.some(c=>c.id==='six')).toBe(false);
    expect(s.consumables).toHaveLength(1);
    expect(content.consumables.find(c=>c.sourceKey===s.consumables[0]!.sourceKey)?.kind).toBe('spectral');
  });
  it('相同种子相同操作得到相同手牌、商店和随机状态',()=>{
    const simulate=()=>{let s=enterBlind(createRun('REPEATABLE'));toggleCard(s,s.hand[0]!.id);discardSelected(s);toggleCard(s,s.hand[0]!.id);playSelected(s);return serializeRun(s);};
    expect(simulate()).toBe(simulate());
  });
  it('存档恢复不改变下一次操作结果',()=>{
    let a=enterBlind(createRun('RESTORE'));toggleCard(a,a.hand[0]!.id);discardSelected(a);
    const b=restoreRun(serializeRun(a));toggleCard(a,a.hand[0]!.id);toggleCard(b,b.hand[0]!.id);playSelected(a);playSelected(b);
    expect(serializeRun(a)).toBe(serializeRun(b));
  });
  it('余额不足的重掷不变更商店',()=>{
    let s=enterBlind(createRun('ECONOMY'));s.roundScore=s.target;s.phase='roundEnd';continueAfterRound(s);
    s.dollars=0;const before=serializeRun(s);expect(()=>rerollShop(s)).toThrow();expect(serializeRun(s)).toBe(before);
  });
  it('已过关的商店可进入下一关，原有牌堆重洗',()=>{
    let s=enterBlind(createRun('ROUND-CYCLE'));s.roundScore=s.target;s.phase='roundEnd';continueAfterRound(s);
    expect(s.phase).toBe('shop');leaveShop(s);expect(s.phase).toBe('blindSelect');expect(s.blindIndex).toBe(1);
    enterBlind(s);expect(s.hand).toHaveLength(s.handSize);
  });
  it('买入同一商店卡两次被拒绝',()=>{
    let s=enterBlind(createRun('SHOP'));s.roundScore=s.target;s.phase='roundEnd';continueAfterRound(s);s.dollars=100;
    const offer=s.shop.offers[0]!;buyOffer(s,offer.id);expect(()=>buyOffer(s,offer.id)).toThrow();
  });
});


describe('独立评审发现的生命周期集成回归',()=>{
  const own=(key:string,id=key,extra:Record<string,any>={})=>Object.assign(createJoker(key,id),extra) as any;
  const paired=(s:any)=>{s.deck=[{id:'a',rank:8,suit:'clubs'},{id:'b',rank:8,suit:'hearts'},{id:'c',rank:14,suit:'spades'}];};
  it.each(['bl_manacle','bl_water','bl_needle','bl_wall','bl_final_vessel'])('禁用 %s 撤销关卡能力和需求倍率',key=>{
    const s=createRun('DISABLE');s.blindIndex=2;s.bossKey=key;s.jokers=[own('j_chicot')];enterBlind(s);
    expect(s.system.blindDisabled).toBe(true);expect(s.handSize).toBe(content.starting.handSize);
    expect(s.handsLeft).toBe(s.maxHands);expect(s.discardsLeft).toBe(s.maxDiscards);
    if(key==='bl_wall'||key==='bl_final_vessel')expect(s.target).toBe(600);
  });
  it('售出灭能伙伴时补回束缚手牌，不能重复撤销',()=>{
    const s=createRun('SELL-DISABLE');s.blindIndex=2;s.bossKey='bl_manacle';s.jokers=[own('j_luchador')];enterBlind(s);
    expect(s.handSize).toBe(7);sellItem(s,s.jokers[0]!.id);expect(s.handSize).toBe(8);expect(s.hand.length).toBe(8);
  });
  it('救场以本轮实际得分判定，而且回合末只触发一次',()=>{
    const s=createRun('BONES');paired(s);s.jokers=[own('j_mr_bones'),own('j_egg')];enterBlind(s);s.handsLeft=1;s.handLevels.pair=2;
    const old=s.jokers.find(j=>j.sourceKey==='j_egg')!.sellValue;toggleCard(s,'a');toggleCard(s,'b');playSelected(s);
    expect(s.roundScore).toBeGreaterThanOrEqual(s.target*.25);expect(s.roundScore).toBeLessThan(s.target);
    expect(s.phase).toBe('roundEnd');expect(s.jokers.some(j=>j.sourceKey==='j_mr_bones')).toBe(false);
    expect(s.jokers.find(j=>j.sourceKey==='j_egg')!.sellValue-old).toBe(3);
  });
  it('每轮随机目标均初始化，邮差使用该轮点数',()=>{
    const s=createRun('ROUND-TARGETS');s.jokers=[own('j_mail')];enterBlind(s);const t=s.system.jokerRound;
    expect(t).toMatchObject({mailRank:expect.any(Number),ancientSuit:expect.any(String),castleSuit:expect.any(String),idolRank:expect.any(Number),idolSuit:expect.any(String)});
    s.hand[0]!.rank=t.mailRank;const dollars=s.dollars;toggleCard(s,s.hand[0]!.id);discardSelected(s);expect(s.dollars-dollars).toBe(5);
  });
  it('首弃牌升级当前牌型，不能沿用上次出牌',()=>{
    const s=createRun('BURNT');paired(s);s.jokers=[own('j_burnt')];enterBlind(s);s.lastHandType='flush';toggleCard(s,'a');toggleCard(s,'b');discardSelected(s);
    expect(s.handLevels.pair).toBe(2);expect(s.handLevels.flush).toBe(1);expect(s.handLevels.highCard).toBe(1);
  });
  it('库存使用星球同时触发生长并累计不同星球',()=>{
    const s=createRun('PLANET');s.jokers=[own('j_constellation')];s.consumables=[{id:'mercury',sourceKey:'c_mercury',cost:3,sellValue:1}];useConsumable(s,'mercury');
    expect(s.handLevels.pair).toBe(2);expect(s.jokers[0]!.state!.xmult).toBeCloseTo(1.1);expect(s.system.usedPlanets).toEqual(['c_mercury']);
  });
  it('卡包使用星球走同一消费生命周期',()=>{
    const s=createRun('PACK-PLANET');s.jokers=[own('j_constellation')];s.phase='pack';s.pack={key:'p_celestial_normal_1',choices:[{id:'planet',sourceKey:'c_mercury',kind:'planet',price:0}],remaining:1,returnPhase:'shop'};takePackCard(s,'planet');
    expect(s.handLevels.pair).toBe(2);expect(s.jokers[0]!.state!.xmult).toBeCloseTo(1.1);expect(s.system.usedPlanets).toEqual(['c_mercury']);
  });
  it('消费摧毁保留选中玻璃数量给成长效果',()=>{
    const s=createRun('GLASS-CONSUME');s.deck=[{id:'glass',rank:8,suit:'clubs',enhancement:'glass'}];s.jokers=[own('j_glass')];s.consumables=[{id:'hanged',sourceKey:'c_hanged_man',cost:3,sellValue:1}];enterBlind(s);toggleCard(s,'glass');useConsumable(s,'hanged');
    expect(s.deck).toHaveLength(0);expect(s.jokers[0]!.state!.xmult).toBeCloseTo(1.75);
  });
  it('生成纸牌通知全息成长，每次新增都保留在牌组',()=>{
    const s=createRun('SPAWN-GROWTH');s.jokers=[own('j_marble'),own('j_certificate'),own('j_hologram')];enterBlind(s);
    expect(s.deck.length).toBe(54);expect(s.jokers.find(j=>j.sourceKey==='j_hologram')!.state!.xmult).toBe(1.5);
  });
  it('Invisible 在满槽出售仍能复制，保留正面版本和成长卖价',()=>{
    const s=createRun('FULL-DUPLICATE');const egg=own('j_egg','egg',{edition:'foil',eternal:true,cost:8,sellValue:7});egg.state.extraValue=3;
    const invisible=own('j_invisible','invisible');invisible.state.rounds=2;s.jokerSlots=2;s.jokers=[invisible,egg];sellItem(s,'invisible');
    expect(s.jokers).toHaveLength(2);const copy=s.jokers.find(j=>j.id!=='egg')!;
    expect(copy.edition).toBe('foil');expect(copy.eternal).toBe(true);expect(copy.sellValue).toBe(7);expect(copy.state!.extraValue).toBe(3);expect(copy.state!.rounds).toBe(0);
  });
  it('购买额外凭单保留本商店主凭单',()=>{
    const s=createRun('EXTRA-VOUCHER');s.phase='shop';s.dollars=30;s.shop.voucher={id:'main',sourceKey:'v_paint_brush',kind:'voucher',price:10};s.shop.offers=[{id:'extra',sourceKey:'v_blank',kind:'voucher',price:10}];buyOffer(s,'extra');expect(s.shop.voucher?.id).toBe('main');
  });
  it('新商店重置标签局部标志',()=>{
    const s=createRun('SHOP-FLAGS');s.phase='roundEnd';s.system.shopD6Used=true;s.system.shopFree=true;s.system.temporaryRerollBase=0;continueAfterRound(s);
    expect(s.system.shopD6Used).toBe(false);expect(s.system.shopFree).toBe(false);expect(s.system.temporaryRerollBase).toBeUndefined();
  });
});


describe('凭单与候选池的整局回归',()=>{
  it('折扣兑换立即刷新剩余商品与已持有卡的卖价',()=>{
    const s=createRun('DISCOUNT');s.phase='shop';s.dollars=40;s.shop.voucher={id:'discount',kind:'voucher',sourceKey:'v_clearance_sale',price:10};s.shop.offers=[{id:'card',kind:'joker',sourceKey:'j_blueprint',price:10}];buyOffer(s,'discount');
    expect(s.system.discountPercent).toBe(25);expect(s.shop.offers[0]!.price).toBe(7);
  });
  it('同一底注内未买凭单在下间商店仍出现',()=>{
    const s=createRun('PERSIST-VOUCHER');s.phase='roundEnd';continueAfterRound(s);const key=s.shop.voucher?.sourceKey;leaveShop(s);s.phase='roundEnd';continueAfterRound(s);expect(s.shop.voucher?.sourceKey).toBe(key);
  });
  it('持有星球在伙伴阶段后参与倍率，并先于均衡牌组',()=>{
    const s=createRun('OBSERVATORY','b_plasma');s.system.observatory=true;s.deck=[{id:'a',rank:8,suit:'clubs'},{id:'b',rank:8,suit:'hearts'}];s.consumables=[{id:'planet',sourceKey:'c_mercury',cost:3,sellValue:1},{id:'planet2',sourceKey:'c_mercury',cost:3,sellValue:1}];enterBlind(s);toggleCard(s,'a');toggleCard(s,'b');const result=playSelected(s);
    expect(result.score).toBe(225);expect(result.trace.filter(e=>e.stage==='heldConsumable'&&e.kind==='xmult')).toHaveLength(2);expect(result.trace.findIndex(e=>e.cardId==='planet'&&e.kind==='xmult')).toBeLessThan(result.trace.findIndex(e=>e.kind==='balanced'));
  });
  it('可见牌型包括尚未出过的基础牌型',()=>{
    const s=createRun('TODO-VISIBLE');s.handUses.highCard=1;s.phase='shop';s.dollars=20;s.shop.offers=[{id:'todo',kind:'joker',sourceKey:'j_todo_list',price:4}];buyOffer(s,'todo');
    expect(s.runtime.visibleHandTypes).toHaveLength(9);expect(s.runtime.visibleHandTypes).toContain('straightFlush');expect(s.runtime.visibleHandTypes).not.toContain('flushFive');
  });
  it('枯荣牌消失的旗标进入系统牌池',()=>{
    const s=createRun('POOL-FLAG');s.jokers=[createJoker('j_gros_michel') as any];s.rng.next=(key?:string)=>key==='gros_michel'?0:.5;enterBlind(s);s.handLevels.highCard=100;toggleCard(s,s.hand[0]!.id);playSelected(s);
    expect(s.system.poolFlags?.gros_michel_extinct).toBe(true);
  });
});


describe('改航凭单集成',()=>{
  it('普通改航每底注一次，费用按事实扣除',()=>{
    const s=createRun('BOSS-REROLL');s.system.bossRerollsAllowed=1;s.dollars=30;const old=s.bossKey;rerollBoss(s);expect(bossRerollCost).toBe(10);expect(s.dollars).toBe(20);expect(s.bossKey).not.toBe(old);expect(()=>rerollBoss(s)).toThrow();
  });
  it('高级改航可重复，金币不足时保持状态与随机流',()=>{
    const s=createRun('BOSS-REROLL-UNLIMITED');s.system.bossRerollsAllowed=-1;s.dollars=20;rerollBoss(s);rerollBoss(s);const before=serializeRun(s);expect(()=>rerollBoss(s)).toThrow();expect(serializeRun(s)).toBe(before);
  });
});

it('无扩容凭单不会补回已买空的货架',()=>{
  const s=createRun('EMPTY-SHELF');s.phase='shop';s.dollars=20;s.shop.offers=[];s.shop.voucher={id:'blank',sourceKey:'v_blank',kind:'voucher',price:10};buyOffer(s,'blank');expect(s.shop.offers).toHaveLength(0);
});

it('星轨奖励提升缓存牌型，不沿用上次出牌',()=>{
  const s=createRun('TAG-CACHE');expect(s.system.blindTags).toHaveLength(2);s.system.blindTags[0]='tag_orbital';s.system.orbitalHands[0]='pair';s.lastHandType='flush';skipBlind(s);expect(s.handLevels.pair).toBe(4);expect(s.handLevels.flush).toBe(1);
});

it('数字牌组的蚀损按实际初始40张计算，不自带删牌奖励',()=>{
  const s=createRun('EROSION','b_abandoned');s.jokers=[createJoker('j_erosion') as any];enterBlind(s);toggleCard(s,s.hand[0]!.id);const result=playSelected(s);
  expect(s.deck).toHaveLength(40);expect(result.events.filter(e=>e.kind==='mult'&&e.jokerId===s.jokers[0]?.id)).toHaveLength(0);
});


// card.gold=3，card.redSeal=1，Mime回合末重触发=1；用公开出牌动作赢得一关。
describe('金牌回合末奖励与存档数值边界',()=>{
 const goldCases=[
  {name:'普通金牌',red:false,mime:false,debuffed:false,played:false,expected:3},
  {name:'红封金牌',red:true,mime:false,debuffed:false,played:false,expected:6},
  {name:'Mime金牌',red:false,mime:true,debuffed:false,played:false,expected:6},
  {name:'红封与Mime金牌',red:true,mime:true,debuffed:false,played:false,expected:9},
  {name:'减益金牌',red:true,mime:true,debuffed:true,played:false,expected:0},
  {name:'已打出的金牌',red:true,mime:true,debuffed:false,played:true,expected:0},
 ];
 it.each(goldCases)('$name：只给剩余未减益手牌奖励',g=>{
  const s=createRun('GOLD-END-'+g.name);s.deck=[{id:'play-ace',rank:14,suit:'clubs'},{id:'held-gold',rank:2,suit:'hearts',enhancement:'gold',...(g.red?{seal:'red' as const}:{})}];
  s.handLevels.highCard=10;if(g.mime)s.jokers=[createJoker('j_mime','gold-mime') as any];enterBlind(s);
  const gold=s.hand.find(card=>card.id==='held-gold')!;gold.debuffed=g.debuffed;
  const before=s.dollars;toggleCard(s,g.played?'held-gold':'play-ace');const result=playSelected(s);
  expect(s.phase).toBe('roundEnd');expect(result.money).toBe(0);expect(s.payout).toBeDefined();
  expect(s.dollars-before-s.payout!.total).toBe(g.expected);
 });
 it('伙伴主结算→两张持有星图→均衡的真实整局顺序',()=>{
  const s=createRun('OBSERVATORY-JOKER-AUDIT','b_plasma');s.system.observatory=true;s.deck=[{id:'a',rank:8,suit:'clubs'},{id:'b',rank:8,suit:'hearts'}];
  s.jokers=[createJoker('j_joker','observatory-joker') as any];s.consumables=[{id:'o1',sourceKey:'c_mercury',cost:3,sellValue:1},{id:'o2',sourceKey:'c_mercury',cost:3,sellValue:1}];
  enterBlind(s);toggleCard(s,'a');toggleCard(s,'b');const r=playSelected(s);
  expect(r).toMatchObject({chips:19,mult:19,score:361});
  const main=r.trace.findIndex(e=>e.jokerId==='observatory-joker'&&e.kind==='mult');const held=r.trace.findIndex(e=>e.stage==='heldConsumable');const balanced=r.trace.findIndex(e=>e.kind==='balanced');
  expect(main).toBeGreaterThanOrEqual(0);expect(held).toBeGreaterThan(main);expect(balanced).toBeGreaterThan(held);
 });
 it('存档恢复保留Infinity、负Infinity和NaN，并保持普通文本与null',()=>{
  const original=createRun('NONFINITE-SAVE');original.roundScore=Infinity;original.target=-Infinity;
  original.system.numericAudit={nan:NaN,values:[Infinity,-Infinity,NaN],normalText:'Infinity',absent:null};
  const serialized=serializeRun(original);expect(()=>JSON.parse(serialized)).not.toThrow();const restored=restoreRun(serialized);
  expect(restored.roundScore).toBe(Infinity);expect(restored.target).toBe(-Infinity);expect(restored.system.numericAudit.nan).toBeNaN();
  expect(restored.system.numericAudit.values).toEqual([Infinity,-Infinity,NaN]);expect(restored.system.numericAudit.normalText).toBe('Infinity');expect(restored.system.numericAudit.absent).toBeNull();
  expect(restored.rng.snapshot()).toEqual(original.rng.snapshot());
 });
});
