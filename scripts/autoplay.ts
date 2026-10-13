import {writeFileSync} from 'node:fs';
import {createRun,enterBlind,toggleCard,playSelected,discardSelected,continueAfterRound,leaveShop,rerollShop,rerollCost,buyOffer,sellItem,useConsumable,takePackCard,closePack,serializeRun,restoreRun,currentBlindKey,type RunState,type Offer} from '../src/core/run-engine';
import {scoreHand} from '../src/core/scoring';
import {evaluateJokers,createJoker,getJokerModifiers} from '../src/content/jokers';
import {evaluatePoker,handValue} from '../src/core/poker';
import {cardChips} from '../src/core/cards';
import {pokerRules} from '../src/core/run-engine';
import {systemsContent as content,canUseConsumable} from '../src/content/systems-runtime';
import {SeededRng} from '../src/core/rng';
import type {Card} from '../src/core/cards';
import jokers from '../data/jokers.json';

/** 只使用公开游戏动作；每次试算在独立快照里进行，原局数值和随机状态不被改写。 */
export function combinations<T>(items:T[],min=1,max=5):T[][]{
 const result:T[][]=[];const walk=(from:number,chosen:T[])=>{if(chosen.length>=min)result.push([...chosen]);if(chosen.length===max)return;for(let i=from;i<items.length;i++){chosen.push(items[i]!);walk(i+1,chosen);chosen.pop();}};walk(0,[]);return result;
}
function bestPlay(s:RunState){
 let best={ids:[] as string[],score:-1};const saved=serializeRun(s);
 const candidateGroups=new Map<string,{cards:Card[];estimate:number}[]>();
 for(const cards of combinations(s.hand)){
  const poker=evaluatePoker(cards,pokerRules(s)),base=handValue(poker.type,s.handLevels[poker.type]);
  const estimate=(base.chips+poker.scoringCards.reduce((n,c)=>n+cardChips(c),0))*base.mult;
  const group=candidateGroups.get(poker.type)??[];group.push({cards,estimate});candidateGroups.set(poker.type,group);
 }
 const shortlisted=[...candidateGroups.values()].flatMap(group=>group.sort((a,b)=>b.estimate-a.estimate).slice(0,3));
 for(const {cards} of shortlisted){
  if(s.system.forcedSelection&&!cards.some(c=>c.id===s.system.forcedSelection))continue;
  const copy=restoreRun(saved);copy.selected=[];for(const card of cards)toggleCard(copy,card.id);
  try{const result=playSelected(copy);if(result.score>best.score)best={ids:cards.map(c=>c.id),score:result.score};}catch{}
 }
 return best;
}
function utility(s:RunState,group=s.jokers):number{
 const samples:Card[][]=['hearts','spades'].map(suit=>[14,13,9,7,5].map((rank,i)=>({id:'sample-'+i,rank,suit} as Card)));
 let sum=0;
 for(const played of samples){
  const copied=structuredClone(group),mod=getJokerModifiers(copied),run={money:s.dollars,deckCards:s.deck,handUses:{...s.handUses,flush:(s.handUses.flush??0)+1},handsPlayed:s.handsPlayed,probabilityNormal:mod.probabilityFactor,jokerSlots:s.jokerSlots,consumableSlots:s.consumableSlots,tarotUsed:s.system.tarotUsed??0,distinctPlanetsUsed:s.system.usedPlanets?.length??0};
  const held=s.deck.filter(c=>c.suit!==played[0]!.suit).slice(0,3);
  sum+=scoreHand({played,held,jokers:copied,handLevels:{...s.handLevels},evaluateJokers,context:{run,round:{handsLeft:2,handsPlayed:1,handUses:{flush:1},...s.system.jokerRound},blind:{boss:false,chips:s.target},consumables:s.consumables},rng:new SeededRng('BOT-PREVIEW')}).score;
 }
 return sum/samples.length;
}
const usefulTarot=new Set(['c_empress','c_heirophant','c_chariot','c_justice','c_death','c_temperance','c_hermit','c_magician','c_strength','c_devil']);
const growing=new Set(['j_hiker','j_constellation','j_vampire','j_hologram','j_egg','j_rocket','j_satellite','j_midas_mask','j_lucky_cat']);
const usefulVoucher=new Set(['v_clearance_sale','v_liquidation','v_telescope','v_observatory','v_paint_brush','v_palette','v_grabber','v_nacho_tong','v_reroll_surplus','v_reroll_glut','v_overstock_norm']);
function targets(s:RunState,key:string):string[]{
 const def=content.consumables.find(c=>c.sourceKey===key)!;const min=Math.max(0,...def.effects.map(a=>a.condition.selectedMin??0));const max=Math.max(min,...def.effects.map(a=>a.condition.selectedMax??0));
 if(!max)return [];
 const ordered=[...s.hand].sort((a,b)=>{const value=(c:Card)=>c.enhancement==='glass'?100:c.enhancement==='steel'?90:c.rank;return value(b)-value(a);});
 if(key==='c_death'&&ordered.length>=2)return ordered.slice(0,2).map(c=>c.id);
 return ordered.slice(0,max).map(c=>c.id);
}
function consumeInventory(s:RunState,record:(action:string,detail:any)=>void){
 for(const c of [...s.consumables]){try{const selected=targets(s,c.sourceKey);const input={...s.system,handCards:s.hand,deck:s.deck,jokers:s.jokers as any,consumables:s.consumables.filter(x=>x.id!==c.id).map(x=>x.sourceKey),consumableSlots:s.consumableSlots,lastTarotPlanet:s.system.lastTarotPlanet};if(!canUseConsumable(c.sourceKey,input,selected).usable)continue;
  s.selected=[];for(const id of selected)toggleCard(s,id);useConsumable(s,c.id);record('useConsumable',{sourceKey:c.sourceKey,selected});
 }catch{}}
}
function packChoice(s:RunState):Offer|undefined{
 return s.pack?.choices.slice().sort((a,b)=>packValue(s,b)-packValue(s,a))[0];
}
function packValue(s:RunState,o:Offer):number{
 if(o.kind==='joker'){const j=createJoker(o.sourceKey) as any;return utility(s,[...s.jokers,j])-utility(s)+ (growing.has(o.sourceKey)?s.ante<4?150:20:0);}
 if(o.card)return o.card.enhancement==='glass'?200:o.card.enhancement==='steel'?150:o.card.edition==='polychrome'?180:o.card.rank??0;
 if(o.sourceKey==='c_neptune')return 1000;if(o.sourceKey==='c_black_hole')return 1500;if(o.sourceKey==='c_soul')return 800;
 return usefulTarot.has(o.sourceKey)?200:o.sourceKey==='c_cryptid'||o.sourceKey==='c_aura'||o.sourceKey==='c_deja_vu'?300:10;
}
function shop(s:RunState,record:(action:string,detail:any)=>void){
 for(let actions=0;actions<24&&s.phase==='shop';actions++){
  consumeInventory(s,record);
  const base=utility(s);let best:Offer|undefined,bestValue=0;
  for(const offer of [...s.shop.offers,...(s.shop.voucher?[s.shop.voucher]:[])]){
   if(offer.price>s.dollars)continue;let value=0;
   if(offer.kind==='joker'){
    if(s.jokers.length>=s.jokerSlots&&offer.edition!=='negative')continue;
    const j=createJoker(offer.sourceKey) as any;j.edition=offer.edition;
    value=utility(s,[...s.jokers,j])-base;if(growing.has(offer.sourceKey)&&s.ante<4)value+=150;
   }else if(offer.sourceKey==='c_neptune'&&s.consumables.length<s.consumableSlots)value=300;
   else if(offer.kind==='tarot'&&usefulTarot.has(offer.sourceKey)&&s.consumables.length<s.consumableSlots)value=80;
   else if(offer.kind==='voucher'&&usefulVoucher.has(offer.sourceKey)&&s.dollars-offer.price>=8)value=100;
   value/=Math.max(1,offer.price);if(value>bestValue){best=offer;bestValue=value;}
  }
  if(best&&bestValue>1){try{buyOffer(s,best.id);record('buy',{key:best.sourceKey,price:best.price});continue;}catch{}}
  if(s.jokers.length>=s.jokerSlots){let weak=s.jokers.filter(j=>!j.eternal).map(j=>({j,value:base-utility(s,s.jokers.filter(x=>x.id!==j.id))})).sort((a,b)=>a.value-b.value)[0];
   const candidate=s.shop.offers.filter(o=>o.kind==='joker'&&o.price<=s.dollars+(weak?.j.sellValue??0)).sort((a,b)=>utility(s,[...s.jokers,createJoker(b.sourceKey) as any])-utility(s,[...s.jokers,createJoker(a.sourceKey) as any]))[0];
   if(weak&&candidate&&utility(s,[...s.jokers.filter(j=>j.id!==weak.j.id),createJoker(candidate.sourceKey) as any])>base*1.12){sellItem(s,weak.j.id);record('sell',{key:weak.j.sourceKey});continue;}
  }
  const pack=s.shop.packs.find(o=>['celestial','arcana','spectral'].includes(content.boosters.find(p=>p.sourceKey===o.sourceKey)!.packKind!)&&o.price<=s.dollars-5);
  if(pack){buyOffer(s,pack.id);record('openPack',{key:pack.sourceKey,price:pack.price});while((s.phase as string)==='pack'){const o=packChoice(s);if(!o){closePack(s);break;}try{const selected=o.kind==='joker'||o.card?[]:targets(s,o.sourceKey);s.selected=[];for(const id of selected)toggleCard(s,id);takePackCard(s,o.id);record('takePack',{key:o.sourceKey,selected});}catch{closePack(s);record('closePack',{});}}continue;}
  if(s.dollars>=rerollCost(s)+12&&s.shop.paidRerolls<3){rerollShop(s);record('reroll',{cost:rerollCost(s)-1});continue;}
  break;
 }
 leaveShop(s);record('leaveShop',{});
}
export function playRun(seed:string,deck='b_checkered'){
 const s=createRun(seed,deck,1),log:any[]=[];let step=0;
 const record=(action:string,detail:any)=>{log.push({step:++step,ante:s.ante,blindIndex:s.blindIndex,round:s.round,action,...detail,dollars:s.dollars,jokers:s.jokers.map(j=>j.sourceKey)});};
 while(!['won','lost'].includes(s.phase)&&step<1000){
  if(s.phase==='blindSelect'){enterBlind(s);record('enterBlind',{blind:currentBlindKey(s),target:s.target,boss:s.bossKey});}
  else if(s.phase==='playing'){
   consumeInventory(s,record);const best=bestPlay(s);
   // 按花色保留较大组，实际调用弃牌/补牌；达到目标所需次数超过剩余出牌时优先换牌。
   if(s.discardsLeft>0&&best.score*s.handsLeft<s.target-s.roundScore){const suit=['hearts','spades'].sort((a,b)=>s.hand.filter(c=>c.suit===b&&!c.debuffed).length-s.hand.filter(c=>c.suit===a&&!c.debuffed).length)[0]!;const discard=s.hand.filter(c=>c.suit!==suit||c.debuffed).slice(0,5);if(discard.length){s.selected=[];for(const c of discard)toggleCard(s,c.id);discardSelected(s);record('discard',{ids:discard.map(c=>c.id)});continue;}}
   if(!best.ids.length)break;s.selected=[];for(const id of best.ids)toggleCard(s,id);const result=playSelected(s);record('play',{ids:best.ids,handType:result.handType,score:result.score,roundScore:s.roundScore,target:s.target});
  }else if(s.phase==='roundEnd'){record('payout',{payout:s.payout});continueAfterRound(s);}
  else if(s.phase==='shop')shop(s,record);
  else if(s.phase==='pack')closePack(s);
 }
 return {seed,deck,stake:1,outcome:s.phase,ante:s.ante,round:s.round,actions:step,log,save:serializeRun(s)};
}
if(process.argv[1]?.endsWith('autoplay.ts')){
 const start=Date.now(),limit=Number(process.argv[2]??10),summaries:any[]=[];
 for(let i=0;i<limit;i++){const seed='NIGHT-VERIFY-'+i;const result=playRun(seed);summaries.push({seed,outcome:result.outcome,ante:result.ante,round:result.round,actions:result.actions});console.log(JSON.stringify(summaries.at(-1)));
  writeFileSync('docs/autoplay-search.json',JSON.stringify({method:'公开动作，无修改规则、资源、得分、次数或随机结果',elapsedMs:Date.now()-start,runs:summaries},null,2));
  if(result.outcome==='won'){writeFileSync('docs/full-run.json',JSON.stringify(result,null,2));console.log('完整八段验证日志已保存');break;}
 }
}
