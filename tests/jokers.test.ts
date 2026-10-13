import {afterAll, describe, expect, test} from 'vitest';
import {createJoker, evaluateJokers, getJokerModifiers, jokerDefinitions, resetJokerRoundTargets, type RuntimeJoker} from '../src/content/jokers';
import evidence from '../data/evidence-jokers.json';
import {scoreHand} from '../src/core/scoring';
import {SeededRng} from '../src/core/rng';
import type {Card} from '../src/core/cards';

const c=(id:string,rank=8,suit:Card['suit']='hearts',extra:Partial<Card>={}):Card=>({id,rank,suit,...extra});
const base=c('p');
interface Step {hook:string;ctx?:any;events?:any[];state?:Record<string,any>;card?:Record<string,any>;}
interface Vector {key:string;steps:Step[];initial?:any;extras?:{key:string;id?:string;sellValue?:number;eternal?:boolean;state?:any}[];}
const e=(kind:string,amount:number,target?:string)=>({kind,amount,...(target===undefined?{}:{target})});
const s=(hook:string,events:any[]=[],ctx:any={},state?:any):Step=>({hook,events,ctx,state});
const v=(key:string,...steps:Step[]):Vector=>({key,steps});
const seenRules=new Set<string>();
const vectors:Vector[]=[
 v('j_joker',s('joker',[e('mult',4)])),
 v('j_greedy_joker',s('card',[e('mult',3)],{card:c('d',8,'diamonds')})),
 v('j_lusty_joker',s('card',[e('mult',3)])),
 v('j_wrathful_joker',s('card',[e('mult',3)],{card:c('s',8,'spades')})),
 v('j_gluttenous_joker',s('card',[e('mult',3)],{card:c('c',8,'clubs')})),
 v('j_jolly',s('joker',[e('mult',8)],{handTypes:['pair']})),
 v('j_zany',s('joker',[e('mult',12)],{handTypes:['threeOfAKind']})),
 v('j_mad',s('joker',[e('mult',10)],{handTypes:['twoPair']})),
 v('j_crazy',s('joker',[e('mult',12)],{handTypes:['straight']})),
 v('j_droll',s('joker',[e('mult',10)],{handTypes:['flush']})),
 v('j_sly',s('joker',[e('chips',50)],{handTypes:['pair']})),
 v('j_wily',s('joker',[e('chips',100)],{handTypes:['threeOfAKind']})),
 v('j_clever',s('joker',[e('chips',80)],{handTypes:['twoPair']})),
 v('j_devious',s('joker',[e('chips',100)],{handTypes:['straight']})),
 v('j_crafty',s('joker',[e('chips',80)],{handTypes:['flush']})),
 v('j_half',s('joker',[e('mult',20)]),s('joker',[],{fullHand:[c('1'),c('2'),c('3'),c('4')]})),
 v('j_stencil',s('joker',[e('xmult',5)])),
 v('j_four_fingers',s('passive',[e('rule',4,'pokerMinimum')])),
 v('j_mime',s('repetition',[e('retrigger',1)],{repetitionArea:'held',hasHeldEffects:true}),s('roundEndRepetition',[e('retrigger',1)],{repetitionArea:'held',hasHeldEffects:true}),s('repetition',[],{repetitionArea:'held',hasHeldEffects:false})),
 v('j_credit_card',s('passive',[e('rule',-20,'bankruptAt')])),
 {key:'j_ceremonial',extras:[{key:'j_joker',sellValue:7}],steps:[s('blindSet',[{kind:'removeJoker',target:'other-0'}],{}, {mult:14}),s('joker',[e('mult',14)])]},
 v('j_banner',s('joker',[e('chips',60)])),
 v('j_mystic_summit',s('joker',[e('mult',15)],{round:{discardsLeft:0}}),s('joker',[])),
 v('j_marble',s('blindSet',[{kind:'spawn',amount:1,target:'playingCard',value:{enhancement:'stone'}}])),
 v('j_loyalty_card',s('joker',[],{run:{handsPlayed:4}}),s('joker',[e('xmult',4)],{run:{handsPlayed:5}}),s('joker',[],{run:{handsPlayed:6}})),
 v('j_8_ball',s('card',[e('spawn',1,'tarot')]),s('card',[],{consumables:[{id:'t1'},{id:'t2'}]})),
 v('j_misprint',s('joker',[e('mult',0)]),s('joker',[e('mult',23)],{rng:()=>0.999999})),
 v('j_dusk',s('repetition',[e('retrigger',1)],{round:{handsLeft:0}}),s('repetition',[])),
 v('j_raised_fist',s('held',[e('mult',4)],{card:c('h',2,'clubs'),heldCards:[c('h',2,'clubs'),c('h2',13,'hearts')]})),
 v('j_chaos',s('passive',[e('rule',1,'freeRerolls')])),
 v('j_fibonacci',s('card',[e('mult',8)],{card:c('a',14)}),s('card',[],{card:c('n',4)})),
 v('j_steel_joker',s('joker',[e('xmult',1.4)],{run:{deckCards:[c('a',2,'clubs',{enhancement:'steel'}),c('b',3,'clubs',{enhancement:'steel'})]}})),
 v('j_scary_face',s('card',[e('chips',30)],{card:c('j',11)})),
 v('j_abstract',s('joker',[e('mult',3)])),
 v('j_delayed_grat',s('payout',[e('money',4)]),s('payout',[],{round:{discardsUsed:1}})),
 v('j_hack',s('repetition',[e('retrigger',1)],{card:c('2',2)})),
 v('j_pareidolia',s('passive',[e('rule',1,'allCardsAreFace')])),
 v('j_gros_michel',s('joker',[e('mult',15)]),s('roundEnd',[{kind:'removeJoker'},e('poolFlag',1,'gros_michel_extinct')])),
 v('j_even_steven',s('card',[e('mult',4)],{card:c('4',4)}),s('card',[],{card:c('q',12)})),
 v('j_odd_todd',s('card',[e('chips',31)],{card:c('a',14)}),s('card',[],{card:c('j',11)})),
 v('j_scholar',s('card',[e('chips',20),e('mult',4)],{card:c('a',14)})),
 v('j_business',s('card',[e('money',2)],{card:c('k',13)})),
 v('j_supernova',s('joker',[e('mult',3)])),
 v('j_ride_the_bus',s('before',[],{}, {mult:1}),s('joker',[e('mult',1)]),s('before',[],{scoringCards:[c('j',11)]},{mult:0})),
 v('j_space',s('before',[e('levelUp',1,'highCard')])),
 v('j_egg',s('roundEnd',[],{}, {extraValue:3})),
 v('j_burglar',s('blindSet',[e('hands',3),e('discards',-2)])),
 v('j_blackboard',s('joker',[e('xmult',3)],{heldCards:[c('b',2,'clubs'),c('s',3,'spades')]}),s('joker',[],{heldCards:[c('r',2,'hearts')]})),
 v('j_runner',s('before',[],{handTypes:['straight']},{'extra.chips':15}),s('joker',[e('chips',15)])),
 v('j_ice_cream',s('joker',[e('chips',100)]),s('after',[],{}, {'extra.chips':95})),
 v('j_dna',s('before',[e('duplicate',1,'playingCard')]),s('before',[],{round:{handsPlayed:1}})),
 v('j_splash',s('passive',[e('rule',1,'scoreAllCards')])),
 v('j_blue_joker',s('joker',[e('chips',8)])),
 v('j_sixth_sense',s('destroyingCard',[{kind:'destroyCard'},e('spawn',1,'spectral')],{card:c('six',6),fullHand:[c('six',6)]})),
 v('j_constellation',s('consume',[],{consumable:{set:'planet'}},{xmult:1.1}),s('joker',[e('xmult',1.1)])),
 v('j_hiker',{hook:'card',events:[],card:{permanentChips:5}}),
 v('j_faceless',s('discard',[e('money',5)],{card:c('k',13),fullHand:[c('j',11),c('q',12),c('k',13)]})),
 v('j_green_joker',s('before',[],{}, {mult:1}),s('joker',[e('mult',1)]),s('discard',[],{}, {mult:0})),
 v('j_superposition',s('joker',[e('spawn',1,'tarot')],{handTypes:['straight'],scoringCards:[c('a',14)]})),
 v('j_todo_list',s('init',[],{}, {targetHand:'highCard'}),s('before',[e('money',4)]),s('roundEnd',[],{}, {targetHand:'pair'})),
 v('j_cavendish',s('joker',[e('xmult',3)]),s('roundEnd',[{kind:'removeJoker'}])),
 v('j_card_sharp',s('joker',[e('xmult',3)]),s('joker',[],{round:{handUses:{highCard:1}}})),
 v('j_red_card',s('skipBooster',[],{}, {mult:3}),s('joker',[e('mult',3)])),
 {key:'j_madness',extras:[{key:'j_joker'}],steps:[s('blindSet',[{kind:'removeJoker',target:'other-0'}],{blind:{boss:false}},{xmult:1.5}),s('joker',[e('xmult',1.5)])]},
 v('j_square',s('before',[],{fullHand:[c('1'),c('2'),c('3'),c('4')]},{'extra.chips':4}),s('joker',[e('chips',4)])),
 v('j_seance',s('joker',[e('spawn',1,'spectral')],{handTypes:['straightFlush']})),
 v('j_riff_raff',s('blindSet',[{kind:'spawn',amount:2,target:'joker',value:{rarity:1}}])),
 v('j_vampire',s('before',[],{scoringCards:[c('b',8,'hearts',{enhancement:'bonus'})]},{xmult:1.1}),s('joker',[e('xmult',1.1)])),
 v('j_shortcut',s('passive',[e('rule',2,'straightMaxGap')])),
 v('j_hologram',s('playingCardsAdded',[],{cards:[c('1'),c('2')]},{xmult:1.5}),s('joker',[e('xmult',1.5)])),
 v('j_vagabond',s('joker',[e('spawn',1,'tarot')],{run:{money:4}})),
 v('j_baron',s('held',[e('xmult',1.5)],{card:c('k',13)})),
 v('j_cloud_9',s('payout',[e('money',1)],{run:{deckCards:[c('nine',9),c('eight',8)]}})),
 v('j_rocket',s('roundEnd',[],{blind:{boss:true}},{'extra.dollars':3}),s('payout',[e('money',3)])),
 {key:'j_obelisk',initial:{xmult:1.4},steps:[s('before',[],{}, {xmult:1}),s('before',[],{run:{handUses:{highCard:3,pair:4}}},{xmult:1.2}),s('joker',[e('xmult',1.2)])]},
 v('j_midas_mask',{hook:'before',ctx:{scoringCards:[c('k',13)]},events:[],card:{}}),
 v('j_luchador',s('sellSelf',[e('disableBoss',1)],{blind:{boss:true,disabled:false}})),
 v('j_photograph',s('card',[e('xmult',2)],{card:c('face',11),scoringCards:[c('n',2),c('face',11),c('face2',13)]})),
 v('j_gift',s('roundEnd',[],{}, {extraValue:1})),
 v('j_turtle_bean',s('passive',[e('rule',5,'handSize')]),s('roundEnd',[],{}, {'extra.h_size':4})),
 v('j_erosion',s('joker',[e('mult',8)],{run:{startingDeckSize:5}})),
 v('j_reserved_parking',s('held',[e('money',1)],{card:c('k',13)})),
 v('j_mail',s('discard',[e('money',5)],{round:{mailRank:8}})),
 v('j_to_the_moon',s('passive',[e('rule',1,'interestAmount')])),
 v('j_hallucination',s('openBooster',[e('spawn',1,'tarot')])),
 v('j_fortune_teller',s('joker',[e('mult',3)])),
 v('j_juggler',s('passive',[e('rule',1,'handSize')])),
 v('j_drunkard',s('passive',[e('rule',1,'discardsPerRound')])),
 v('j_stone',s('joker',[e('chips',50)],{run:{deckCards:[c('a',2,'clubs',{enhancement:'stone'}),c('b',3,'clubs',{enhancement:'stone'})]}})),
 v('j_golden',s('payout',[e('money',4)])),
 v('j_lucky_cat',s('card',[],{card:c('l',8,'hearts',{custom:{luckyTrigger:true}})},{xmult:1.25}),s('joker',[e('xmult',1.25)])),
 v('j_baseball',s('otherJoker',[e('xmult',1.5)],{otherJoker:{id:'rare',rarity:2}}),s('otherJoker',[],{otherJoker:{id:'rare',rarity:3}})),
 v('j_bull',s('joker',[e('chips',20)])),
 v('j_diet_cola',s('sellSelf',[e('tag',1,'tag_double')])),
 v('j_trading',s('discard',[{kind:'destroyCard'},e('money',3)])),
 v('j_flash',s('reroll',[],{}, {mult:2}),s('joker',[e('mult',2)])),
 v('j_popcorn',s('joker',[e('mult',20)]),s('roundEnd',[],{}, {mult:16})),
 v('j_trousers',s('before',[],{handTypes:['twoPair']},{mult:2}),s('joker',[e('mult',2)])),
 v('j_ancient',s('card',[e('xmult',1.5)],{round:{ancientSuit:'hearts'}})),
 v('j_ramen',s('joker',[e('xmult',2)]),s('discard',[],{}, {xmult:1.99})),
 v('j_walkie_talkie',s('card',[e('chips',10),e('mult',4)],{card:c('4',4)})),
 v('j_selzer',s('repetition',[e('retrigger',1)]),s('after',[],{}, {extra:9})),
 v('j_castle',s('discard',[],{round:{castleSuit:'hearts'}},{'extra.chips':3}),s('joker',[e('chips',3)])),
 v('j_smiley',s('card',[e('mult',5)],{card:c('j',11)})),
 v('j_campfire',s('sell',[],{}, {xmult:1.25}),s('joker',[e('xmult',1.25)]),s('roundEnd',[],{blind:{boss:true}},{xmult:1})),
 v('j_ticket',s('card',[e('money',4)],{card:c('gold',8,'hearts',{enhancement:'gold'})})),
 v('j_mr_bones',s('roundEnd',[e('saved',1),{kind:'removeJoker'}],{gameOver:true,scoreFraction:0.25})),
 v('j_acrobat',s('joker',[e('xmult',3)],{round:{handsLeft:0}})),
 v('j_sock_and_buskin',s('repetition',[e('retrigger',1)],{card:c('j',11)})),
 {key:'j_swashbuckler',extras:[{key:'j_joker',sellValue:7},{key:'j_half',sellValue:3}],steps:[s('joker',[e('mult',10)])]},
 v('j_troubadour',s('passive',[e('rule',2,'handSize'),e('rule',-1,'handsPerRound')])),
 v('j_certificate',s('firstHandDrawn',[{kind:'spawn',amount:1,target:'playingCard',value:{seal:'random',destination:'hand'}}])),
 v('j_smeared',s('passive',[e('rule',1,'smearedSuits')])),
 v('j_throwback',s('joker',[e('xmult',1.5)],{run:{skips:2}})),
 v('j_hanging_chad',s('repetition',[e('retrigger',2)])),
 v('j_rough_gem',s('card',[e('money',1)],{card:c('d',8,'diamonds')})),
 v('j_bloodstone',s('card',[e('xmult',1.5)])),
 v('j_arrowhead',s('card',[e('chips',50)],{card:c('s',8,'spades')})),
 v('j_onyx_agate',s('card',[e('mult',7)],{card:c('c',8,'clubs')})),
 v('j_glass',s('cardsDestroyed',[],{removedCards:[{...c('glass',8,'hearts',{enhancement:'glass'}),shattered:true}]},{xmult:1.75}),s('consume',[],{consumable:{sourceKey:'c_hanged_man'},selectedCards:[c('g',8,'hearts',{enhancement:'glass'})]},{xmult:2.5}),s('joker',[e('xmult',2.5)])),
 v('j_ring_master',s('passive',[e('rule',1,'allowDuplicates')])),
 v('j_flower_pot',s('joker',[e('xmult',3)],{scoringCards:[c('h',2,'hearts'),c('d',3,'diamonds'),c('s',4,'spades'),c('c',5,'clubs')]})),
 {key:'j_blueprint',extras:[{key:'j_joker'}],steps:[s('joker',[e('mult',4)])]},
 v('j_wee',s('card',[],{card:c('2',2)},{'extra.chips':8}),s('joker',[e('chips',8)])),
 v('j_merry_andy',s('passive',[e('rule',3,'discardsPerRound'),e('rule',-1,'handSize')])),
 v('j_oops',s('passive',[e('rule',2,'probabilityFactor')])),
 v('j_idol',s('card',[e('xmult',2)],{round:{idolRank:8,idolSuit:'hearts'}})),
 v('j_seeing_double',s('joker',[e('xmult',2)],{scoringCards:[c('c',2,'clubs'),c('d',3,'diamonds')]})),
 v('j_matador',s('joker',[e('money',8)],{blind:{triggered:true}}),s('debuffedHand',[e('money',8)],{blind:{triggered:true}})),
 v('j_hit_the_road',s('discard',[],{card:c('j',11)},{xmult:1.5}),s('joker',[e('xmult',1.5)]),s('roundEnd',[],{}, {xmult:1})),
 v('j_duo',s('joker',[e('xmult',2)],{handTypes:['pair']})),
 v('j_trio',s('joker',[e('xmult',3)],{handTypes:['threeOfAKind']})),
 v('j_family',s('joker',[e('xmult',4)],{handTypes:['fourOfAKind']})),
 v('j_order',s('joker',[e('xmult',3)],{handTypes:['straight']})),
 v('j_tribe',s('joker',[e('xmult',2)],{handTypes:['flush']})),
 v('j_stuntman',s('joker',[e('chips',250)]),s('passive',[e('rule',-2,'handSize')])),
 {key:'j_invisible',extras:[{key:'j_joker'}],steps:[s('roundEnd',[],{}, {rounds:1}),s('roundEnd',[],{}, {rounds:2}),s('sellSelf',[{kind:'duplicate',amount:1,target:'joker',value:{stripNegative:true,resetAge:true}}])]},
 {key:'j_brainstorm',extras:[{key:'j_joker'}],steps:[s('joker',[e('mult',4)],{selfAtEnd:true})]},
 v('j_satellite',s('payout',[e('money',3)])),
 v('j_shoot_the_moon',s('held',[e('mult',13)],{card:c('q',12)})),
 v('j_drivers_license',s('joker',[e('xmult',3)],{run:{deckCards:Array.from({length:16},(_,i)=>c('e'+i,2,'clubs',{enhancement:'bonus'}))}})),
 v('j_cartomancer',s('blindSet',[e('spawn',1,'tarot')])),
 v('j_astronomer',s('passive',[e('rule',1,'freePlanets')])),
 v('j_burnt',s('preDiscard',[e('levelUp',1,'highCard')]),s('preDiscard',[],{forcedDiscard:true})),
 v('j_bootstraps',s('joker',[e('mult',4)]),s('joker',[],{run:{money:4}})),
 v('j_caino',s('cardsDestroyed',[],{removedCards:[c('face',11)]},{xmult:2}),s('joker',[e('xmult',2)])),
 v('j_triboulet',s('card',[e('xmult',2)],{card:c('q',12)})),
 {key:'j_yorick',initial:{remaining:1},steps:[s('discard',[],{}, {remaining:23,xmult:2}),s('joker',[e('xmult',2)]),s('discard',[],{}, {remaining:22})]},
 v('j_chicot',s('blindSet',[e('disableBoss',1)],{blind:{boss:true}})),
 v('j_perkeo',s('shopEnd',[{kind:'duplicate',amount:1,target:'consumable',value:{edition:'negative'}}],{consumables:[{id:'t',sourceKey:'c_magician',set:'tarot'}]})),
];
const get=(obj:any,path:string)=>path.split('.').reduce((value,key)=>value?.[key],obj);
const fixture=(joker:RuntimeJoker,extras:RuntimeJoker[],overrides:any={})=>{
 const run={money:10,handsPlayed:0,handUses:{highCard:3},deckCards:[base,c('9',9,'clubs'),c('2',2,'spades')],deckRemaining:4,startingDeckSize:3,jokerSlots:5,consumableSlots:2,tarotUsed:3,distinctPlanetsUsed:3,skips:0,consumableBuffer:0,jokerBuffer:0,...overrides.run};
 const round={handsLeft:1,discardsLeft:2,handsPlayed:0,discardsUsed:0,handUses:{highCard:2},...overrides.round};
 const allJokers=overrides.selfAtEnd?[...extras,joker]:[joker,...extras];
 return {hook:'joker',card:structuredClone(base),fullHand:[structuredClone(base)],scoringCards:[structuredClone(base)],heldCards:[c('h',2,'clubs')],handType:'highCard',handTypes:['highCard'],repetitionArea:'played',hasHeldEffects:true,consumables:[],visibleHandTypes:['highCard','pair'],rng:()=>0,...overrides,run,round,allJokers,blind:{boss:false,disabled:false,triggered:false,chips:100,...overrides.blind}};
};

describe('150 张计策的独立触发场景',()=>{
 test.each(vectors)('$key：事件与状态符合源码事实',vector=>{
  const joker=createJoker(vector.key,'subject');Object.assign(joker.state,structuredClone(vector.initial??{}));
  const extras=(vector.extras??[]).map((x,i)=>Object.assign(createJoker(x.key,x.id??'other-'+i),x));
  for(const step of vector.steps){
   const ctx=fixture(joker,extras,step.ctx);ctx.hook=step.hook;
   const out=evaluateJokers([joker],ctx);
   for(const event of out)if(event.factRef)seenRules.add(event.factRef);
   const effects=out.filter((event:any)=>!['state','cardState'].includes(event.kind));
   expect(effects,`${vector.key}/${step.hook}`).toHaveLength(step.events?.length??0);
   for(let i=0;i<(step.events?.length??0);i++)expect(effects[i]).toMatchObject(step.events![i]);
   for(const [path,value]of Object.entries(step.state??{})){const actual=get(joker.state,path);if(typeof value==='number')expect(actual).toBeCloseTo(value,10);else expect(actual).toEqual(value);}
   if(step.card)expect(ctx.card).toMatchObject(step.card);
  }
 });
 test.each(vectors)('$key：被失效时所有时机均不触发，不改变状态或消耗随机源',vector=>{
  const joker=createJoker(vector.key,'inactive');Object.assign(joker.state,structuredClone(vector.initial??{}));joker.debuffed=true;
  const extras=(vector.extras??[]).map((x,i)=>Object.assign(createJoker(x.key,'other-'+i),x));
  const before=structuredClone(joker);
  for(const step of vector.steps){const ctx=fixture(joker,extras,{...step.ctx,rng:()=>{throw new Error('失效计策不得消费随机源');}});ctx.hook=step.hook;expect(evaluateJokers([joker],ctx)).toEqual([]);expect(joker).toEqual(before);}
 });
 test('场景确实穷尽 150 张独立卡牌，而非只重复检查条目存在',()=>{
  expect(new Set(vectors.map(x=>x.key)).size).toBe(150);
  expect([...new Set(vectors.map(x=>x.key))].sort()).toEqual(jokerDefinitions.map(x=>x.sourceKey).sort());
 });
 test('逐卡目录字段与采集事实保持内部一致，引用存在',()=>{
  const byKey=new Map(jokerDefinitions.map(x=>[x.sourceKey,x]));
  const map:any={blueprint_compat:'blueprintCompatible',perishable_compat:'perishableCompatible',eternal_compat:'eternalCompatible',unlocked:'unlockedInitially'};
  for(const f of evidence.facts){
   const m=f.id.match(/^joker\.(j_\w+)\.(.+)$/);if(!m||m[2].startsWith('rule.'))continue;
   const definition:any=byKey.get(m[1]);const field=m[2].split('.');field[0]=map[field[0]]??field[0];
   expect(get(definition,field.join('.')),f.id).toEqual(f.value);
   expect(definition.factRefs,f.id).toContain(f.id);
  }
 });
});

describe('联动、复制、概率边界与生命周期',()=>{
 test('两个复制器不会重复积累目标状态，实际计分可复制积累结果',()=>{
  const green=createJoker('j_green_joker','green'),copy=createJoker('j_blueprint','copy');
  const ctx=fixture(green,[copy]);ctx.allJokers=[copy,green];ctx.hook='before';evaluateJokers([copy,green],ctx);
  expect(green.state.mult).toBe(1);ctx.hook='joker';expect(evaluateJokers([copy,green],ctx).filter(e=>e.kind==='mult').map(e=>e.amount)).toEqual([1,1]);
 });
 test('复制循环会终止，不可复制的被动效果不会被重复加入',()=>{
  const a=createJoker('j_blueprint','a'),b=createJoker('j_brainstorm','b');const ctx=fixture(a,[b]);ctx.hook='joker';expect(evaluateJokers([a,b],ctx)).toEqual([]);
  const c=createJoker('j_four_fingers','c');ctx.allJokers=[a,c];ctx.hook='passive';expect(evaluateJokers([a],ctx)).toEqual([]);
 });
 test('两个概率计策使概率分子乘 4，严格小于阈值才成功',()=>{
  const blood=createJoker('j_bloodstone','blood'),o1=createJoker('j_oops','o1'),o2=createJoker('j_oops','o2');
  const ctx=fixture(blood,[o1,o2],{rng:()=>0.9});ctx.hook='card';expect(evaluateJokers([blood],ctx)[0].amount).toBe(1.5);
  const c2=fixture(blood,[],{rng:()=>0.5});c2.hook='card';expect(evaluateJokers([blood],c2)).toEqual([]);
 });
 test('随机整数使用真实 SeededRng 与本地原始 LuaJIT 输出逐项相同',()=>{
  // 本地参考 misc_functions.lua 的 pseudorandom('misprint',0,23)，种子 MISPRINT，连续五次。
  const joker=createJoker('j_misprint'),rng=new SeededRng('MISPRINT'),ctx=fixture(joker,[],{rng});ctx.hook='joker';
  expect(Array.from({length:5},()=>evaluateJokers([joker],ctx)[0].amount)).toEqual([9,19,5,3,14]);
 });
 test('没有随机源时概率效果明确失败，不使用不可复现随机数',()=>{
  const j=createJoker('j_8_ball');const ctx=fixture(j,[],{rng:undefined});ctx.hook='card';expect(()=>evaluateJokers([j],ctx)).toThrow(/随机/);
 });
 test('多个生成效果共用容量预留，不能挤入超过空槽的消耗牌',()=>{
  const a=createJoker('j_cartomancer','a'),b=createJoker('j_cartomancer','b'),ctx=fixture(a,[b],{run:{consumableSlots:1}});ctx.hook='blindSet';
  expect(evaluateJokers([a,b],ctx).filter(e=>e.kind==='spawn')).toHaveLength(1);
 });
 test('永恒右邻不被祭献；没有可毁目标时成长仍生效',()=>{
  const d=createJoker('j_ceremonial','d'),other=createJoker('j_joker','e');other.eternal=true;const ctx=fixture(d,[other]);ctx.hook='blindSet';expect(evaluateJokers([d],ctx)).toEqual([]);expect(d.state.mult).toBe(0);
  const mad=createJoker('j_madness','m'),c2=fixture(mad,[other]);c2.hook='blindSet';evaluateJokers([mad],c2);expect(mad.state.xmult).toBe(1.5);expect(other.removed).not.toBe(true);
 });
 test('同点数最低留手牌仅最右触发，增强筹码不改变牌面两倍值',()=>{
  const j=createJoker('j_raised_fist'),left=c('left',2,'clubs',{enhancement:'bonus'}),right=c('right',2,'hearts'),ctx=fixture(j,[],{heldCards:[left,right],card:left});ctx.hook='held';expect(evaluateJokers([j],ctx)).toEqual([]);ctx.card=right;expect(evaluateJokers([j],ctx)[0].amount).toBe(4);
 });
 test('石质牌不匹配点数与花色；人物规则能把石质牌变为人物',()=>{
  const fib=createJoker('j_fibonacci'),stone=c('stone',2,'hearts',{enhancement:'stone'}),ctx=fixture(fib,[],{card:stone});ctx.hook='card';expect(evaluateJokers([fib],ctx)).toEqual([]);
  const scary=createJoker('j_scary_face'),face=createJoker('j_pareidolia');ctx.allJokers=[scary,face];expect(evaluateJokers([scary],ctx)[0].amount).toBe(30);
 });
 test('增强消除和人物改金按小丑左右顺序执行',()=>{
  const face=c('face',13),m=createJoker('j_midas_mask','m'),vamp=createJoker('j_vampire','v'),ctx=fixture(m,[vamp],{scoringCards:[face]});ctx.hook='before';evaluateJokers([m,vamp],ctx);expect(face.enhancement).toBeUndefined();expect(vamp.state.xmult).toBeCloseTo(1.1);
  const face2=c('face2',13),m2=createJoker('j_midas_mask','m2'),v2=createJoker('j_vampire','v2'),ctx2=fixture(v2,[m2],{scoringCards:[face2]});ctx2.hook='before';evaluateJokers([v2,m2],ctx2);expect(face2.enhancement).toBe('gold');expect(v2.state.xmult).toBe(1);
 });
 test('一张百变牌不同时填满四花色，也不能独自满足梅花与另一花色',()=>{
  const pot=createJoker('j_flower_pot'),wild=c('w',8,'hearts',{enhancement:'wild'}),ctx=fixture(pot,[],{scoringCards:[wild]});ctx.hook='joker';expect(evaluateJokers([pot],ctx)).toEqual([]);
  const double=createJoker('j_seeing_double');ctx.allJokers=[double];expect(evaluateJokers([double],ctx)).toEqual([]);
 });
 test('预留位与过期计策增长状态不会被序列化随机破坏',()=>{
  const j=createJoker('j_runner');const ctx=fixture(j,[],{handTypes:['straight']});ctx.hook='before';evaluateJokers([j],ctx);const clone=JSON.parse(JSON.stringify(j));ctx.hook='joker';expect(evaluateJokers([clone],ctx)[0].amount).toBe(15);
 });
 test('生命周期衰减到阈值就移除，而不是额外保留一手',()=>{
  for(const [key,target,value,hook]of [['j_ice_cream','extra.chips',5,'after'],['j_popcorn','mult',4,'roundEnd'],['j_turtle_bean','extra.h_size',1,'roundEnd'],['j_selzer','extra',1,'after'],['j_ramen','xmult',1.01,'discard']]as const){
   const j=createJoker(key);const parts=target.split('.');if(parts.length===2)j.state[parts[0]][parts[1]]=value;else j.state[target]=value;
   const ctx=fixture(j,[]);ctx.hook=hook;expect(evaluateJokers([j],ctx).some(e=>e.kind==='removeJoker')).toBe(true);expect(j.removed).toBe(true);
  }
 });
 test('玻璃被正常移除不成长；碎裂和特定消耗销毁分别成长',()=>{
  const j=createJoker('j_glass'),g=c('g',8,'hearts',{enhancement:'glass'}),ctx=fixture(j,[],{removedCards:[g]});ctx.hook='removeCards';evaluateJokers([j],ctx);expect(j.state.xmult).toBe(1);
  g.custom={shattered:true};evaluateJokers([j],ctx);expect(j.state.xmult).toBe(1.75);
 });
 test('命中人头牌金币与筹码的计分管线联动，财富计策看到即时收入',()=>{
  const j1=createJoker('j_business','b'),j2=createJoker('j_bull','wealth');const ctx=fixture(j1,[j2]);ctx.run.money=0;
  const result=scoreHand({played:[c('q',12)],held:[],jokers:[j1,j2],evaluateJokers,context:ctx,rng:()=>0});
  expect(result.money).toBe(2);expect(result.chips).toBe(19);expect(result.score).toBe(19);
 });
 test('手持人物倍率和重触发的真实结算顺序',()=>{
  const b=createJoker('j_baron','b'),mime=createJoker('j_mime','mime');
  const result=scoreHand({played:[c('2',2)],held:[c('k',13,'spades',{enhancement:'steel'})],jokers:[b,mime],evaluateJokers,context:fixture(b,[mime]),rng:()=>0});
  expect(result.mult).toBe(5.0625);expect(result.score).toBe(35);
 });
 test('累积成长前禁止复制，成长完成后两个倍率贡献都进入实际计分',()=>{
  const copy=createJoker('j_blueprint','copy'),g=createJoker('j_green_joker','g');const result=scoreHand({played:[c('2',2)],held:[],jokers:[copy,g],evaluateJokers,context:fixture(copy,[g]),rng:()=>0});expect(g.state.mult).toBe(1);expect(result.mult).toBe(3);expect(result.score).toBe(21);
 });
 test('出售、取得和使用道具上下文能接受真实非扑克牌对象，不读取缺失的点数',()=>{
  const luchador=createJoker('j_luchador','sale');const sale=fixture(luchador,[],{card:luchador,blind:{boss:true}});sale.hook='sellSelf';expect(evaluateJokers([luchador],sale)[0].kind).toBe('disableBoss');
  const invisible=createJoker('j_invisible','invisible'),other=createJoker('j_joker','other');invisible.state.rounds=2;
  const c2=fixture(invisible,[other],{card:invisible});c2.hook='sellSelf';expect(evaluateJokers([invisible],c2)[0].value.source.id).toBe('other');
  const ownedTarot={id:'tarot',sourceKey:'c_fool',cost:3,sellValue:1};const growth=createJoker('j_constellation');const c3=fixture(growth,[],{card:ownedTarot,consumable:ownedTarot});c3.hook='consume';expect(evaluateJokers([growth],c3)).toEqual([]);expect(growth.state.xmult).toBe(1);
  const c4=fixture(luchador,[],{card:ownedTarot});c4.hook='sell';expect(()=>evaluateJokers([luchador],c4)).not.toThrow();
 });
 test('利息计策按附加额累加，两个计策为基础 1 加 2，而非四倍',()=>{
  const two=getJokerModifiers([createJoker('j_to_the_moon','one'),createJoker('j_to_the_moon','two')]);expect(two.interestAmount).toBe(2);
 });
 test('回合目标按牌张抽样，排除石质牌，远古花色每轮不得重复',()=>{
  const deck=[c('stone',14,'spades',{enhancement:'stone'}),c('first',8,'clubs'),c('second',2,'diamonds')];
  const first=resetJokerRoundTargets(deck,1,()=>0);
  expect(first).toEqual({idolRank:8,idolSuit:'clubs',mailRank:8,ancientSuit:'spades',castleSuit:'clubs'});
  const second=resetJokerRoundTargets(deck,2,()=>0,first);expect(second.ancientSuit).toBe('hearts');
  const weighted=resetJokerRoundTargets([c('1',8,'clubs'),c('2',8,'clubs'),c('3',2,'diamonds')],1,()=>0.4);expect(weighted.idolRank).toBe(8);
 });
 test('所有目标只从石质牌组成时，牌面点数目标保留旧id，花色仍用明确的回退与不重复规则',()=>{
  const actual=resetJokerRoundTargets([c('stone',2,'clubs',{enhancement:'stone'})],2,()=>0,{idolRank:7,mailRank:9,ancientSuit:'spades'});
  expect(actual).toEqual({idolRank:7,idolSuit:'spades',mailRank:9,ancientSuit:'hearts',castleSuit:'spades'});
 });
 test('被动聚合同时支持扑克、经济和手牌参数',()=>{
  const keys=['j_four_fingers','j_shortcut','j_splash','j_pareidolia','j_credit_card','j_chaos','j_to_the_moon','j_juggler','j_oops','j_oops','j_troubadour','j_astronomer'];
  const modifiers=getJokerModifiers(keys.map((k,i)=>createJoker(k,'mod-'+i)));
  expect(modifiers).toMatchObject({pokerMinimum:4,straightMaxGap:2,scoreAllCards:true,allCardsAreFace:true,bankruptAt:-20,freeRerolls:1,interestAmount:1,handSize:3,probabilityFactor:4,handsPerRound:-1,freePlanets:true});
 });
});

afterAll(()=>{
 // 覆盖统计来自实际事件，不把规则条目的存在当作“已触发”。
 const missing=jokerDefinitions.flatMap(j=>j.rules.flatMap((r:any,i:number)=>seenRules.has(`joker.${j.sourceKey}.rule.${i}`)?[]:[`${j.sourceKey}/${r.trigger}`]));
 expect(missing,'每条效果规则至少执行一次并产生有效事件').toEqual([]);
});

test('待办初始可见池包括所有基础牌型，只有高牌出过也能换目标',()=>{
  const run={handUses:{highCard:1}},rng=()=>.5;const j=createJoker('j_todo_list','visible',{run,rng});const old=j.state.targetHand;
  expect(old).not.toBe('highCard');evaluateJokers([j],{hook:'roundEnd',run,rng});expect(j.state.targetHand).not.toBe(old);
});
