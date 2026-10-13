import { describe, expect, it } from 'vitest';
import type { Card } from '../src/core/cards';
import { scoreHand, type ScoreJoker, type JokerContext, type JokerEvent, type ScoreInput } from '../src/core/scoring';
let n=0;
const c=(rank:number,extra:Partial<Card>={}):Card=>({id:`card-${n++}`,rank,suit:'spades',...extra});
// 此处只表达已提取的机制事实；运行时全量注册器另有集成测试。
const joker=(id:string,hook:ScoreJoker['hook'],edition?:ScoreJoker['edition']):ScoreJoker=>({id,hook,edition});
const add4=joker('basic',ctx=>ctx.hook==='joker'?[{kind:'mult',amount:4,jokerId:'basic'}]:[]);
const times3=joker('blackboard',ctx=>ctx.hook==='joker'?[{kind:'xmult',amount:3,jokerId:'blackboard'}]:[]);
const mime=joker('mime',ctx=>ctx.hook==='repetition'&&ctx.repetitionArea==='held'&&ctx.hasHeldEffects?[{kind:'retrigger',amount:1,jokerId:'mime'}]:[]);
const scholar=joker('scholar',ctx=>ctx.hook==='card'&&ctx.card?.rank===14?[{kind:'chips',amount:20,jokerId:'scholar'},{kind:'mult',amount:4,jokerId:'scholar'}]:[]);
const golden: (Omit<ScoreInput,'held'> & {held?: Card[]; name:string; score:number; chips:number; mult:number})[] = [
 {name:'01 高牌A：(5+11)×1',played:[c(14)],score:16,chips:16,mult:1},
 {name:'02 对10：(10+10+10)×2',played:[c(10),c(10,{suit:'hearts'})],score:60,chips:30,mult:2},
 {name:'03 Bonus+Mult：(10+2+30+2)×(2+4)',played:[c(2,{enhancement:'bonus'}),c(2,{enhancement:'mult',suit:'hearts'})],score:264,chips:44,mult:6},
 {name:'04 左+4再玻璃×2：(10+2+2)×((2+4)×2)',played:[c(2,{enhancement:'mult'}),c(2,{enhancement:'glass',suit:'hearts'})],score:168,chips:14,mult:12},
 {name:'05 左玻璃×2再+4：(10+2+2)×(2×2+4)',played:[c(2,{enhancement:'glass'}),c(2,{enhancement:'mult',suit:'hearts'})],score:112,chips:14,mult:8},
 {name:'06 红封玻璃A：(5+11+11)×(1×2×2)',played:[c(14,{enhancement:'glass',seal:'red'})],score:108,chips:27,mult:4},
 {name:'07 手牌钢铁+红封：(5+11)×(1.5²)',played:[c(14)],held:[c(2,{enhancement:'steel',seal:'red'})],score:36,chips:16,mult:2.25},
 {name:'08 钢铁+红封+Mime：16×1.5³',played:[c(14)],held:[c(2,{enhancement:'steel',seal:'red'})],jokers:[mime],score:54,chips:16,mult:3.375},
 {name:'09 Joker+4→Blackboard×3：16×15',played:[c(14)],jokers:[add4,times3],score:240,chips:16,mult:15},
 {name:'10 Blackboard×3→Joker+4：16×7',played:[c(14)],jokers:[times3,add4],score:112,chips:16,mult:7},
 {name:'11 全息Blackboard先+10再×3→+4：16×37',played:[c(14)],jokers:[{...times3,edition:'holo'},add4],score:592,chips:16,mult:37},
 {name:'12 多彩Blackboard先×3再×1.5→+4：16×8.5',played:[c(14)],jokers:[{...times3,edition:'polychrome'},add4],score:136,chips:16,mult:8.5},
 {name:'13 减益A保留对子：(10+11)×2',played:[c(14,{debuffed:true}),c(14,{suit:'hearts'})],score:42,chips:21,mult:2},
 {name:'14 石头追加计分：(5+11+50)×1',played:[c(14),c(2,{enhancement:'stone'})],score:66,chips:66,mult:1},
 {name:'15 玻璃多彩A先×2×1.5再Scholar+4：(5+11+20)×7',played:[c(14,{enhancement:'glass',edition:'polychrome'})],jokers:[scholar],score:252,chips:36,mult:7},
 {name:'16 重触发同时重复Scholar：(5+11+20+11+20)×((1+4)+4)',played:[c(14,{seal:'red'})],jokers:[scholar],score:603,chips:67,mult:9},
];
describe('手算golden；数值来源 evidence-scoring 与 evidence-jokers',()=>{
 it.each(golden)('$name',g=>{const result=scoreHand({held:[],...g,rng:()=>0.99});expect(result).toMatchObject({score:g.score,chips:g.chips,mult:g.mult});});
});
describe('阶段队列与边界',()=>{
 it('重复触发trace逐卡，不提前执行后面的卡',()=>{const a=c(2,{seal:'red'}),b=c(2,{suit:'hearts'});const trace=scoreHand({played:[a,b],held:[]}).trace.filter(e=>e.kind==='chips'&&e.stage==='card');expect(trace.map(e=>e.cardId)).toEqual([a.id,a.id,b.id]);});
 it('手牌普通卡的红封不产生无效果重复',()=>{const result=scoreHand({played:[c(14)],held:[c(2,{seal:'red'})],jokers:[mime]});expect(result.score).toBe(16);expect(result.trace.filter(e=>e.stage==='held')).toHaveLength(0);});
 it('before升级影响本手基础分',()=>{const j=joker('space',ctx=>ctx.hook==='before'?[{kind:'levelUp',amount:1,jokerId:'space'}]:[]);expect(scoreHand({played:[c(14)],held:[],jokers:[j]})).toMatchObject({chips:26,mult:2,score:52});});
 it('均衡组终算先向下取整再平方',()=>expect(scoreHand({played:[c(14)],held:[],balancedScoring:true})).toMatchObject({chips:8,mult:8,score:64}));
 it('after不能修改已结算分数',()=>{const j=joker('after',ctx=>ctx.hook==='after'?[{kind:'mult',amount:4,jokerId:'after'}]:[]);expect(scoreHand({played:[c(14)],held:[],jokers:[j]}).score).toBe(16);});
 it('金封逐次给3，幸运money与mult用独立key',()=>{const keys:string[]=[];const result=scoreHand({played:[c(14,{seal:'red',enhancement:'lucky'})],held:[],rng:(key:string)=>{keys.push(key);return 0;}});expect(result.money).toBe(40);expect(result.mult).toBe(41);expect(keys).toEqual(['lucky_mult','lucky_money','lucky_mult','lucky_money']);const gold=scoreHand({played:[c(14,{seal:'gold'})],held:[]});expect(gold.money).toBe(3);});
 it('玻璃破碎每手每卡一次，与重复次数无关',()=>{let calls=0;const result=scoreHand({played:[c(14,{seal:'red',enhancement:'glass'})],held:[],rng:()=>{calls++;return 0;}});expect(calls).toBe(1);expect(result.destroyedCards).toHaveLength(1);expect(result.score).toBe(108);});
 it('概率效果没有rng时明确拒绝',()=>expect(()=>scoreHand({played:[c(14,{enhancement:'lucky'})],held:[]})).toThrow(/随机|RNG/));
 it('减益出牌不触发任何逐卡小丑',()=>{const fn=()=>{throw new Error('应被跳过')};const j=joker('guard',ctx=>ctx.hook==='card'?fn():[]);expect(scoreHand({played:[c(14,{debuffed:true})],held:[],jokers:[j]}).score).toBe(5);});
 it('otherJoker在当前main后、polychrome前',()=>{const observer=joker('baseball',ctx=>ctx.hook==='otherJoker'&&ctx.otherJoker?.id==='blackboard'?[{kind:'xmult',amount:1.5,jokerId:'baseball'}]:[]);const result=scoreHand({played:[c(14)],held:[],jokers:[{...times3,edition:'polychrome'},observer]});expect(result.mult).toBe(6.75);expect(result.trace.filter(e=>e.kind==='xmult').map(e=>e.jokerId)).toEqual(['blackboard','baseball','blackboard']);});
 it('逐joker调用仍提供allJokers全体',()=>{const counts:number[]=[];const evaluateJokers=(js:ScoreJoker[],ctx:JokerContext):JokerEvent[]=>{if(ctx.hook==='joker')counts.push(ctx.allJokers.length);return [];};scoreHand({played:[c(14)],held:[],jokers:[add4,times3],evaluateJokers});expect(counts).toEqual([2,2]);});
});

import {createJoker,evaluateJokers} from '../src/content/jokers';
import {SeededRng} from '../src/core/rng';
const actualJoker=(key:string,extra:Partial<ScoreJoker>={})=>({...createJoker(key,`${key}-${n++}`),...extra});
const actualScore=(played:Card[],held:Card[]=[],js:ScoreJoker[]=[],extra:Partial<ScoreInput>={})=>scoreHand({played,held,jokers:js,evaluateJokers,rng:()=>0.99,...extra});
describe('全量注册器真实联动golden（与手算比较）',()=>{
 it('实际Joker+Blackboard先加后乘',()=>expect(actualScore([c(14)],[],[actualJoker('j_joker'),actualJoker('j_blackboard')])).toMatchObject({chips:16,mult:15,score:240}));
 it('实际Blackboard+Joker反向先乘后加',()=>expect(actualScore([c(14)],[],[actualJoker('j_blackboard'),actualJoker('j_joker')])).toMatchObject({mult:7,score:112}));
 it('全息小丑版本在main前，棒球在main后',()=>expect(actualScore([c(14)],[],[actualJoker('j_blackboard',{edition:'holo'}),actualJoker('j_baseball')])).toMatchObject({mult:49.5,score:792}));
 it('多彩小丑版本在棒球之后，顺序trace确认',()=>{const b=actualJoker('j_blackboard',{edition:'polychrome'}),base=actualJoker('j_baseball');const r=actualScore([c(14)],[],[b,base]);expect(r).toMatchObject({mult:6.75,score:108});expect(r.trace.filter(e=>e.kind==='xmult').map(e=>e.jokerId)).toEqual([b.id,base.id,b.id]);});
 it('实际Mime+红封钢铁King+Baron共3次钢铁/Baron，16×2.25³取整',()=>expect(actualScore([c(14)],[c(13,{enhancement:'steel',seal:'red'})],[actualJoker('j_mime'),actualJoker('j_baron')])).toMatchObject({mult:11.390625,score:182}));
 it('Hanging Chad重复2次，每次Photograph×2，(5+30)×8',()=>expect(actualScore([c(13)],[],[actualJoker('j_hanging_chad'),actualJoker('j_photograph')])).toMatchObject({chips:35,mult:8,score:280}));
 it('Hack与红封共同重复玻璃2，(5+6)×2³',()=>expect(actualScore([c(2,{enhancement:'glass',seal:'red'})],[],[actualJoker('j_hack')])).toMatchObject({chips:11,mult:8,score:88}));
 it('Blueprint复制Scholar，每次红封重复也复制，107×17',()=>expect(actualScore([c(14,{seal:'red'})],[],[actualJoker('j_blueprint'),actualJoker('j_scholar')])).toMatchObject({chips:107,mult:17,score:1819}));
 it('Brainstorm复制第一张加4小丑，16×(1+4+4)',()=>expect(actualScore([c(14)],[],[actualJoker('j_joker'),actualJoker('j_brainstorm')])).toMatchObject({mult:9,score:144}));
 it('Blueprint/Brainstorm互相复制时有限终止',()=>expect(actualScore([c(14)],[],[actualJoker('j_blueprint'),actualJoker('j_brainstorm')]).score).toBe(16));
 it('Hiker卡属性先捕获后成长：第一次2，第二次7，永久合计10',()=>{const card=c(2,{seal:'red'});expect(actualScore([card],[],[actualJoker('j_hiker')])).toMatchObject({chips:14,score:14});expect(card.permanentChips).toBe(10);});
 it('Lucky Cat每次Lucky只成长一次；同时mult和money不双倍成长',()=>{const cat=actualJoker('j_lucky_cat');const r=actualScore([c(14,{enhancement:'lucky',seal:'red'})],[],[cat],{rng:()=>0});expect(cat.state!.xmult).toBe(1.5);expect(r).toMatchObject({chips:27,mult:61.5,score:1660,money:40});});
 it('幸运金钱当场进入余额，Bootstraps同手主结算可读取',()=>{const run={money:5};const r=actualScore([c(14,{enhancement:'lucky',seal:'red'})],[],[actualJoker('j_bootstraps')],{rng:()=>0,context:{run}});expect(run.money).toBe(45);expect(r).toMatchObject({mult:59,score:1593,money:40});});
 it('Space Joker在before升级，本手立即采用等级2高牌',()=>{const levels={highCard:1};const r=actualScore([c(14)],[],[actualJoker('j_space')],{rng:()=>0,handLevels:levels});expect(r).toMatchObject({chips:26,mult:2,score:52});expect(levels.highCard).toBe(2);});
 it('Glass Joker碎裂发生于main之后，成长在下一手才提供倍率',()=>{const glass=actualJoker('j_glass');const first=actualScore([c(14,{enhancement:'glass'})],[],[glass],{rng:()=>0});expect(first).toMatchObject({mult:2,score:32});expect(glass.state!.xmult).toBe(1.75);expect(actualScore([c(14)],[],[glass]).score).toBe(28);});
 it('Blackboard花色检查：未减益wild可算黑，减益后检查底牌花色',()=>{expect(actualScore([c(14)],[c(2,{suit:'spades',enhancement:'wild',debuffed:true})],[actualJoker('j_blackboard')]).score).toBe(48);expect(actualScore([c(14)],[c(2,{suit:'hearts',enhancement:'wild',debuffed:true})],[actualJoker('j_blackboard')]).score).toBe(16);expect(actualScore([c(14)],[c(2,{suit:'hearts',enhancement:'wild'})],[actualJoker('j_blackboard')]).score).toBe(48);});
 it('Misprint使用实际SeededRng整数API且同seed同score',()=>{const score=()=>actualScore([c(14)],[],[actualJoker('j_misprint')],{rng:new SeededRng('REAL-MISPRINT')}).score;expect(score()).toBe(score());});
});

 it('单张6销毁时保留幻灵生成事件',()=>{const j=actualJoker('j_sixth_sense');const r=actualScore([c(6)],[],[j],{context:{run:{consumableSlots:2},round:{handsPlayed:0},consumables:[]}});expect(r.destroyedCards).toHaveLength(1);expect(r.events.some(e=>e.kind==='spawn'&&e.target==='spectral')).toBe(true);});


// 期望取自 card.foil / scoring.chipCap / probability.normal 与增强概率事实。
describe('版本、筹码上限与精确概率阈值',()=>{
 it('出牌闪箔独立增加50筹码',()=>{
  expect(scoreHand({played:[c(14,{edition:'foil'})],held:[]})).toMatchObject({chips:66,mult:1,score:66});
 });
 it('伙伴闪箔在main前增加50，纸牌与伙伴版本分别触发',()=>{
  const r=scoreHand({played:[c(14,{edition:'foil'})],held:[],jokers:[{...add4,edition:'foil'}]});
  expect(r).toMatchObject({chips:116,mult:5,score:580});
  expect(r.trace.filter(e=>e.stage==='joker').map(e=>[e.kind,e.amount,e.edition??false])).toEqual([['chips',50,true],['mult',4,false]]);
 });
 it.each([[-5,0],[0,0],[3,3],[12,12]])('筹码上限余额%s：基础分和逐牌增量都即时截断',(balance,expected)=>{
  const r=scoreHand({played:[c(14)],held:[],chipsDollarCap:true,context:{run:{money:balance}}});
  expect(r).toMatchObject({chips:expected,mult:1,score:expected});
  expect(r.trace.find(e=>e.kind==='base')?.chipsAfter).toBe(Math.min(5,Math.max(0,balance)));
 });
 it('截断丢失的筹码不因余额增加恢复，之后新增筹码仍可得到',()=>{
  const income=joker('income',ctx=>ctx.hook==='joker'?[{kind:'chips',amount:100},{kind:'money',amount:10},{kind:'chips',amount:2}]:[]);
  const run={money:10};const r=scoreHand({played:[c(14)],held:[],jokers:[income],chipsDollarCap:true,context:{run}});
  expect(run.money).toBe(20);expect(r).toMatchObject({chips:12,mult:1,score:12,money:10});
  expect(r.trace.filter(e=>e.kind==='chips').map(e=>e.chipsAfter)).toEqual([10,10,12]);
 });
 it('盲注修改、筹码倍率交换及最终修改都应用筹码上限',()=>{
  const modified=scoreHand({played:[c(14)],held:[],chipsDollarCap:true,context:{money:10},modifyHand:()=>({chips:100,mult:1})});
  expect(modified.score).toBe(10);
  const swapped=scoreHand({played:[c(14)],held:[],chipsDollarCap:true,context:{money:20},jokers:[joker('swap',ctx=>ctx.hook==='joker'?[{kind:'mult',amount:20},{kind:'swap'}]:[])]});
  expect(swapped).toMatchObject({chips:20,mult:16,score:320});
  const final=scoreHand({played:[c(14)],held:[],chipsDollarCap:true,context:{money:12},finalScoringModifier:()=>({chips:100,mult:2})});
  expect(final).toMatchObject({chips:12,mult:2,score:24});
 });
 const thresholds:[string,number|undefined,number,number][]=[['默认分子1',undefined,.2,1/15],['分子2',2,.4,2/15]];
 const offsets:[string,number,boolean][]=[['阈值下方',-Number.EPSILON,true],['恰好阈值',0,false],['阈值上方',Number.EPSILON,false]];
 for(const [label,normal,multThreshold,moneyThreshold] of thresholds){
  it.each(offsets)(`幸运倍率${label}：%s遵循严格小于`,(_position,offset,success)=>{
   const keys:string[]=[];const r=scoreHand({played:[c(14,{enhancement:'lucky'})],held:[],probabilityNormal:normal,rng:key=>{keys.push(key);return key==='lucky_mult'?multThreshold+offset:.99;}});
   expect(r).toMatchObject({mult:success?21:1,score:success?336:16,money:0});
   expect(keys).toEqual(['lucky_mult','lucky_money']);
  });
  it.each(offsets)(`幸运金钱${label}：%s遵循严格小于`,(_position,offset,success)=>{
   const r=scoreHand({played:[c(14,{enhancement:'lucky'})],held:[],probabilityNormal:normal,rng:key=>key==='lucky_money'?moneyThreshold+offset:.99});
   expect(r).toMatchObject({mult:1,score:16,money:success?20:0});
  });
 }
 for(const [label,normal,threshold] of [['默认分子1',undefined,.25],['分子2',2,.5]] as const){
  it.each(offsets)(`玻璃破碎${label}：%s遵循严格小于`,(_position,offset,success)=>{
   const keys:string[]=[];const r=scoreHand({played:[c(14,{enhancement:'glass',seal:'red'})],held:[],probabilityNormal:normal,rng:key=>{keys.push(key);return threshold+offset;}});
   expect(r).toMatchObject({chips:27,mult:4,score:108});expect(r.destroyedCards).toHaveLength(success?1:0);expect(keys).toEqual(['glass']);
  });
 }
 it('没有钢铁增强时，真实Baron手中效果也打开红封与Mime重复门槛',()=>{
  expect(actualScore([c(14)],[c(13,{seal:'red'})],[actualJoker('j_baron'),actualJoker('j_mime')])).toMatchObject({chips:16,mult:3.375,score:54});
 });
 it('before→盲注修改→逐牌→手中→main→销毁→finalize→after完整顺序',()=>{
  const calls:string[]=[];
  const observer=joker('stages',ctx=>{
   const names:Record<string,string>={before:'before',card:'playedCards',held:'heldCards',joker:'jokerMain',destroyingCard:'destroyCards',after:'after'};
   if(names[ctx.hook])calls.push(names[ctx.hook]!);
   return ctx.hook==='joker'?[{kind:'mult',amount:4}]:ctx.hook==='after'?[{kind:'mult',amount:99}]:[];
  });
  const ace=c(14,{enhancement:'glass'});const r=scoreHand({played:[ace],held:[c(2,{enhancement:'steel'})],jokers:[observer],rng:()=>0,modifyHand:value=>{calls.push('blindModify');return value;}});
  expect(calls).toEqual(['before','blindModify','playedCards','heldCards','jokerMain','destroyCards','after']);
  expect(r.trace.map(e=>e.stage)).toEqual(['base','card','card','held','joker','destroy','finalize','after']);
  expect(r).toMatchObject({chips:16,mult:7,score:112,destroyedCards:[ace]});
  expect(r.trace.at(-1)?.multAfter).toBe(106);
 });
});
