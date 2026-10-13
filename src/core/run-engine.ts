import type { Card, Edition } from './cards';
import { makeDeck, SUITS } from './cards';
import { SeededRng } from './rng';
import { evaluatePoker, HAND_VALUES, type HandType } from './poker';
import { scoreHand, type ScoreJoker, type ScoreResult, type JokerEvent } from './scoring';
import * as jokerRuntime from '../content/jokers';
import * as systemRuntime from '../content/systems-runtime';
import { computeBlindRequirement, computePurchasePrice, computeSellValue, computeRerollCost, computeRoundPayout, eligibleBosses, pickEdition, pickShopKind, pickBooster, shopWeightsForState } from './economy-runtime';
import { systemsContent as definitions } from '../content/systems-runtime';
import jokerData from '../../data/jokers.json';
import uiEvidence from '../../data/evidence-ui.json';
import runEvidence from '../../data/evidence-run.json';

export type Phase='blindSelect'|'playing'|'roundEnd'|'shop'|'pack'|'lost'|'won';
export interface OwnedJoker extends ScoreJoker { sourceKey:string; cost:number; sellValue:number; eternal?:boolean; rental?:boolean; perishable?:number; }
export interface OwnedConsumable {id:string;sourceKey:string;edition?:Edition;cost:number;sellValue:number}
export interface Offer {id:string;sourceKey:string;kind:string;price:number;edition?:Edition;card?:Card;eternal?:boolean;rental?:boolean;perishable?:number}
export interface RunState {
  seed:string;deckKey:string;stake:number;phase:Phase;ante:number;blindAnte:number;blindIndex:number;round:number;bossKey:string;bossesUsed:Record<string,number>;
  target:number;roundScore:number;dollars:number;handSize:number;maxHands:number;maxDiscards:number;handsLeft:number;discardsLeft:number;jokerSlots:number;consumableSlots:number;
  deck:Card[];drawPile:Card[];discardPile:Card[];hand:Card[];played:Card[];selected:string[];jokers:OwnedJoker[];consumables:OwnedConsumable[];handLevels:Record<HandType,number>;
  handUses:Partial<Record<HandType,number>>;roundHandUses:Partial<Record<HandType,number>>;lastHandType?:HandType;handsPlayed:number;roundHandsPlayed:number;discardsUsed:number;
  shop:{offers:Offer[];packs:Offer[];voucher?:Offer;paidRerolls:number;freeRerolls:number};pack?:{key:string;choices:Offer[];remaining:number;returnPhase:Phase};tags:string[];
  rng:SeededRng;uid:number;system:Record<string,any>;runtime:Record<string,any>;payout?:ReturnType<typeof computeRoundPayout>;lastScore?:ScoreResult;log:string[];
}
const MAX_SELECT=Number(uiEvidence.facts.find(f=>f.id==='RUN-001')!.value);
const initial=definitions.starting;
const jd=(key:string)=>jokerData.find(j=>j.sourceKey===key)!;
const cd=(key:string)=>definitions.consumables.find(c=>c.sourceKey===key)!;
export const currentBlindKey=(s:RunState)=>s.blindIndex===0?'bl_small':s.blindIndex===1?'bl_big':s.bossKey;
const nextId=(s:RunState,prefix:string)=>`${prefix}-${s.uid++}`;
const fail=(message:string):never=>{throw new Error(message);};
const clone=<T>(data:T):T=>structuredClone(data);

function systemState(s:RunState):any {
  return {...s.system,dollars:s.dollars,handSize:s.handSize,hands:s.maxHands,discards:s.maxDiscards,handsLeft:s.handsLeft,discardsLeft:s.discardsLeft,
    jokerSlots:s.jokerSlots,consumableSlots:s.consumableSlots,ante:s.ante,blindAnte:s.blindAnte,deck:s.deck,handCards:s.hand,jokers:s.jokers,consumables:s.consumables.map(c=>c.sourceKey),handLevels:s.handLevels,
    handUses:s.handUses,handPlayed:s.handUses,lastHandType:s.lastHandType,handsPlayed:s.handsPlayed,discardsUsed:s.discardsUsed,unusedDiscards:s.system.unusedDiscards??0,mostPlayedHand:Object.keys(s.handUses).sort((a,b)=>(s.handUses[b as HandType]??0)-(s.handUses[a as HandType]??0))[0]??'highCard',tags:s.tags.map((key,i)=>({id:'tag-'+i,sourceKey:key})),shopCards:[...s.shop.offers,...s.shop.packs,...(s.shop.voucher?[s.shop.voucher]:[])].map(o=>({...o,cost:o.price})),roundHandsPlayed:s.roundHandsPlayed,roundDiscardsUsed:s.discardsUsed};
}
function applySystem(s:RunState,result:any) {
  if(!result.applied && result.reason)fail(result.reason);
  const r=result.state??{};s.system={...s.system,...r};
  for(const [from,to] of [['dollars','dollars'],['handSize','handSize'],['hands','maxHands'],['discards','maxDiscards'],['handsLeft','handsLeft'],['discardsLeft','discardsLeft'],['jokerSlots','jokerSlots'],['consumableSlots','consumableSlots'],['ante','ante'],['blindAnte','blindAnte']] as const)
    if(typeof r[from]==='number')s[to]=r[from];
  if(r.deck)s.deck=r.deck;if(r.handCards)s.hand=r.handCards;if(r.handLevels)s.handLevels=r.handLevels;
  if(r.jokers){s.jokers=r.jokers.map((j:any)=>({...j,sellValue:j.sellValue??computeSellValue(j.cost??jd(j.sourceKey)?.cost??0)}));refreshModifiers(s);}
  if(r.consumables){const old=[...s.consumables];s.consumables=r.consumables.map((value:any)=>{const key=typeof value==='string'?value:value.sourceKey;const i=old.findIndex(c=>c.sourceKey===key);if(i>=0)return old.splice(i,1)[0]!;return {id:nextId(s,'cons'),sourceKey:key,cost:cd(key).cost!,sellValue:computeSellValue(cd(key).cost!)};});}
  if(r.tags)s.tags=r.tags.map((tag:any)=>typeof tag==='string'?tag:tag.sourceKey);if(r.bossKey)s.bossKey=r.bossKey;if(r.bossesUsed)s.bossesUsed=r.bossesUsed;
  for(const e of result.events??[])if(e.message)s.log.push(e.message);
  const existing=new Set(s.deck.map(c=>c.id));s.hand=s.hand.filter(c=>existing.has(c.id));s.drawPile=s.drawPile.filter(c=>existing.has(c.id));s.discardPile=s.discardPile.filter(c=>existing.has(c.id));
  syncCards(s);
  for(const e of result.events??[]){
    if(e.type==='cardsAdded')fire(s,'playingCardsAdded',{cards:e.cards});
    if(e.type==='cardsRemoved')fire(s,'cardsRemoved',{removedCards:e.cards,cards:e.cards});
    if(e.type==='cardsDiscarded')s.discardPile.push(...(e.cards??[]).filter((c:Card)=>existing.has(c.id)));
    if(e.type==='jokersRemoved')refreshModifiers(s);
    if(e.type==='drawRequested'&&s.phase==='playing'&&s.hand.length)draw(s,e.count??1);
  }
}
function syncCards(s:RunState){
  const byId=new Map(s.deck.map(c=>[c.id,c]));
  for(const c of s.hand){const canonical=byId.get(c.id);if(canonical)Object.assign(canonical,c);}
  const remap=(cards:Card[])=>cards.flatMap(c=>byId.has(c.id)?[byId.get(c.id)!]:[]);
  s.hand=remap(s.hand);s.played=remap(s.played);s.drawPile=remap(s.drawPile);s.discardPile=remap(s.discardPile);
}
export function pokerRules(s:RunState){const m=jokerRuntime.getJokerModifiers(s.jokers);return {fourFingers:m.pokerMinimum<MAX_SELECT,shortcut:m.straightMaxGap>1,splash:m.scoreAllCards,pareidolia:m.allCardsAreFace,smeared:m.smearedSuits};}
function refreshModifiers(s:RunState){
  const m=jokerRuntime.getJokerModifiers(s.jokers),old=s.system.appliedModifiers??{};
  for(const [key,property] of [['handSize','handSize'],['handsPerRound','maxHands'],['discardsPerRound','maxDiscards']] as const)s[property]+=m[key]-(old[key]??0);
  s.system.appliedModifiers=m;s.system.probabilityNormal=initial.probabilityNormal*m.probabilityFactor;s.system.bankruptAt=m.bankruptAt;s.system.freePlanets=m.freePlanets;s.system.allowDuplicates=m.allowDuplicates;
  s.system.interestAmount=definitions.economy.interestAmount+m.interestAmount;s.system.pareidolia=m.allCardsAreFace;
}
function context(s:RunState,hook:string,extra:Record<string,any>={}) {
  Object.assign(s.runtime,{visibleHandTypes:(Object.keys(HAND_VALUES) as HandType[]).filter(h=>!HAND_VALUES[h].hidden||(s.handUses[h]??0)>0),money:s.dollars,handsPlayed:s.handsPlayed,handUses:s.handUses,handLevels:s.handLevels,deckCards:s.deck,deckRemaining:s.drawPile.length,startingDeckSize:s.system.startingDeckSize??initial.deckSize,jokerSlots:s.jokerSlots,consumableSlots:s.consumableSlots,skips:s.system.skips??0,tarotUsed:s.system.tarotUsed??0,distinctPlanetsUsed:s.system.usedPlanets?.length??0,ante:s.ante,probabilityNormal:s.system.probabilityNormal??initial.probabilityNormal,consumableBuffer:0,...s.system.jokerRun});
  const blind=definitions.blinds.find(b=>b.sourceKey===currentBlindKey(s))!;
  return {hook,run:s.runtime,round:{handsLeft:s.handsLeft,discardsLeft:s.discardsLeft,handsPlayed:s.roundHandsPlayed,discardsUsed:s.discardsUsed,handUses:s.roundHandUses,...s.system.jokerRound},blind:{boss:!!blind.boss,disabled:!!s.system.blindDisabled,triggered:!!s.system.blindTriggered,chips:s.target},roundScore:s.roundScore,scoreFraction:s.target?s.roundScore/s.target:0,rng:s.rng,consumables:s.consumables,allJokers:s.jokers,fullHand:s.played,heldCards:s.hand,scoringCards:s.lastScore?.scoringCards??[],handType:s.lastHandType??'highCard',handTypes:s.lastHandType?[s.lastHandType]:[],...extra};
}
function eligibleJokers(s:RunState,rarity:number) {
  const pool=systemRuntime.eligibleJokerDefinitions(systemState(s),rarity);
  return pool.length?pool:[jd('j_joker')];
}
function jokerOffer(s:RunState,rarity?:number):Offer {
  const roll=s.rng.next('rarity'+s.ante);rarity??=roll>definitions.shop.rarityThresholds.rare?3:roll>definitions.shop.rarityThresholds.uncommon?2:1;
  const def=s.rng.pick(eligibleJokers(s,rarity),'Joker'+rarity+s.ante);const edition=pickEdition(s.rng.next('edi'+s.ante),{rate:s.system.editionRate});
  const stickers=definitions.shop.stickers;const et=s.rng.next('eternal'),rent=s.rng.next('rental');
  const eternal=s.stake>=4&&def.eternalCompatible&&et>stickers.eternalThreshold;
  const perishable=s.stake>=7&&def.perishableCompatible&&et>stickers.perishableLow&&et<=stickers.perishableHigh?definitions.economy.perishableRounds:undefined;
  const rental=s.stake>=8&&rent>stickers.rentalThreshold;
  return {id:nextId(s,'offer'),sourceKey:def.sourceKey,kind:'joker',edition,eternal,rental,perishable,price:computePurchasePrice(def.cost!,{edition,inflation:s.system.inflation,discountPercent:s.system.discountPercent,rental})};
}
function consumableOffer(s:RunState,kind:string):Offer {
  const pool=systemRuntime.eligibleConsumables(kind,systemState(s));
  const def=pool.length?s.rng.pick(pool,kind+s.ante):cd(definitions.shop.poolRules.fallback[kind]);
  return {id:nextId(s,'offer'),sourceKey:def.sourceKey,kind,price:computePurchasePrice(def.cost!,{inflation:s.system.inflation,discountPercent:s.system.discountPercent,free:kind==='planet'&&s.system.freePlanets})};
}
function playingOffer(s:RunState):Offer {
  const generated=systemRuntime.generateShopPlayingCard(systemState(s),s.rng);
  // 只提交生成器的计数；商品尚未购买，不能把它加入持有牌组。
  s.system.serial=generated.state.serial;
  return {...generated.offer,id:nextId(s,'offer'),sourceKey:'playingCard',kind:'playingCard',price:generated.offer.cost!,edition:generated.offer.edition as Edition};
}
function generatedPlayingCard(s:RunState):Card {
  return {id:nextId(s,'card'),rank:s.rng.int(2,14,'frontRank'+s.ante),suit:s.rng.pick(SUITS,'frontSuit'+s.ante)};
}
function spawnConsumable(s:RunState,kind:string,key?:string,negative=false) {
  if(!negative&&s.consumables.length>=s.consumableSlots)return;
  const offer=key?{sourceKey:key,price:cd(key).cost!}:consumableOffer(s,kind);
  s.consumables.push({id:nextId(s,'cons'),sourceKey:offer.sourceKey,cost:offer.price,sellValue:computeSellValue(offer.price),edition:negative?'negative':undefined});if(negative)s.consumableSlots++;
}
function addJoker(s:RunState,offer:Offer) {
  const j=jokerRuntime.createJoker(offer.sourceKey,nextId(s,'joker'),{run:context(s,'init').run,rng:s.rng}) as OwnedJoker;
  const cost=computePurchasePrice(jd(offer.sourceKey).cost!,{edition:offer.edition,discountPercent:s.system.discountPercent,inflation:s.system.inflation,rental:offer.rental});
  Object.assign(j,{cost,sellValue:computeSellValue(cost),edition:offer.edition,eternal:offer.eternal,rental:offer.rental,perishable:offer.perishable});s.jokers.push(j);if(j.edition==='negative')s.jokerSlots++;
  fire(s,'equip',{evaluatedJokers:[j]});refreshModifiers(s);
}
function removeCard(s:RunState,id:string){s.deck=s.deck.filter(c=>c.id!==id);s.hand=s.hand.filter(c=>c.id!==id);s.drawPile=s.drawPile.filter(c=>c.id!==id);s.discardPile=s.discardPile.filter(c=>c.id!==id);}
function applyEvents(s:RunState,events:JokerEvent[],scoreEvents=false) {
  for(const e of events){
    switch(e.kind){
      case 'money':case 'dollars':if(!scoreEvents)s.dollars+=e.amount??0;break;
      case 'levelUp':case 'level':if(!scoreEvents&&e.target in HAND_VALUES)s.handLevels[e.target as HandType]=Math.max(1,s.handLevels[e.target as HandType]+(e.amount??0));break;
      case 'spawn':{
        const addedCards:Card[]=[];
        for(let i=0;i<(e.amount??1);i++){
          if(e.target==='playingCard'){const card=generatedPlayingCard(s);if(e.value?.enhancement)card.enhancement=e.value.enhancement;if(e.value?.seal==='random')card.seal=s.rng.pick(['red','blue','purple','gold'] as const,'seal');s.deck.push(card);if(e.value?.destination==='hand')s.hand.push(card);else s.drawPile.push(card);addedCards.push(card);}
          else if(e.target==='joker'){if(s.jokers.length<s.jokerSlots)addJoker(s,jokerOffer(s,e.value?.rarity));}
          else if(e.target==='tarot'||e.target==='spectral')spawnConsumable(s,e.target,e.value?.sourceKey);
        }
        if(addedCards.length)fire(s,'playingCardsAdded',{cards:addedCards});
        break;
      }
      case 'duplicate':{
        const source=e.value?.source;if(!source)break;
        if(e.target==='playingCard'){const c={...clone(source),id:nextId(s,'card')};s.deck.push(c);if(e.value?.destination==='hand')s.hand.push(c);else s.drawPile.push(c);fire(s,'playingCardsAdded',{cards:[c]});}
        else if(e.target==='consumable'){spawnConsumable(s,'tarot',source.sourceKey,e.value?.edition==='negative');}
        else if(e.target==='joker') {
          const copy:OwnedJoker={...clone(source),id:nextId(s,'joker'),state:clone(source.state??{})};
          const copyState=copy.state!;
          if(e.value?.stripNegative&&copy.edition==='negative'){
            copy.edition=undefined;copy.cost=computePurchasePrice(jd(copy.sourceKey).cost!,{discountPercent:s.system.discountPercent,inflation:s.system.inflation,rental:copy.rental});
            copy.sellValue=computeSellValue(copy.cost,copyState.extraValue??0);
          }
          if(e.value?.resetAge)copyState.rounds=0;
          if(s.jokers.length<s.jokerSlots||copy.edition==='negative'){s.jokers.push(copy);if(copy.edition==='negative')s.jokerSlots++;fire(s,'equip',{evaluatedJokers:[copy]});refreshModifiers(s);}
        }
      }break;
      case 'removeJoker':{const removed=s.jokers.find(j=>j.id===e.target);if(removed?.edition==='negative')s.jokerSlots--;s.jokers=s.jokers.filter(j=>j.id!==e.target);refreshModifiers(s);break;}
      case 'destroyCard':removeCard(s,e.cardId??e.target?.id);break;
      case 'tag':s.tags.push(e.target??e.value??'tag_double');break;
      case 'disableBoss':disableCurrentBoss(s);break;
      case 'poolFlag':s.system.poolFlags={...s.system.poolFlags,[e.target]:e.value};break;
      case 'hands':s.handsLeft+=e.amount??0;break;case 'discards':s.discardsLeft+=e.amount??0;break;
      case 'saved':s.system.saved=true;break;
      case 'rule':s.system[e.target]=e.value??e.amount;break;
    }
  }
  s.runtime.consumableBuffer=0;s.runtime.jokerBuffer=0;
}
function updateTarget(s:RunState){
  s.target=computeBlindRequirement(s.blindAnte,currentBlindKey(s),s.stake,s.system.anteScaling??initial.anteScaling)*(s.system.blindRequirementFactor??1);
}
function disableCurrentBoss(s:RunState){
  applySystem(s,systemRuntime.disableBlind(currentBlindKey(s),systemState(s)));updateTarget(s);
}
function resetRoundTargets(s:RunState){s.system.jokerRound=jokerRuntime.resetJokerRoundTargets(s.deck,s.ante,s.rng,s.system.jokerRound);}
function fire(s:RunState,hook:string,extra:Record<string,any>={}) {
  const events=jokerRuntime.evaluateJokers(extra.evaluatedJokers??s.jokers,context(s,hook,extra));applyEvents(s,events);return events;
}
export const bossRerollCost=Number(runEvidence.facts.find(f=>f.id==='run.bossRerollCost')!.value);
export function rerollBoss(s:RunState){
  const allowed=s.system.bossRerollsAllowed??0;if(s.phase!=='blindSelect'||!allowed||(allowed>0&&s.system.bossRerolled))fail('本底注不能再更换守关者');
  if(s.dollars-bossRerollCost<(s.system.bankruptAt??0))fail('金币不足');
  s.dollars-=bossRerollCost;s.system.bossRerolled=true;chooseBoss(s);updateTarget(s);
}
function cacheBlindRewards(s:RunState){
  const pool=definitions.tags.filter(t=>!t.min_ante||s.ante>=t.min_ante);
  s.system.blindTags=[s.rng.pick(pool,'Tag'+s.ante).sourceKey,s.rng.pick(pool,'Tag'+s.ante).sourceKey];
  const visible=(Object.keys(HAND_VALUES) as HandType[]).filter(h=>!HAND_VALUES[h].hidden||(s.handUses[h]??0)>0);
  s.system.orbitalHands=[s.rng.pick(visible,'orbital'),s.rng.pick(visible,'orbital')];
}
function chooseBoss(s:RunState){s.bossKey=s.rng.pick(eligibleBosses(s.ante,{used:s.bossesUsed}),'boss').sourceKey;s.bossesUsed[s.bossKey]=(s.bossesUsed[s.bossKey]??0)+1;}
export function createRun(seed:string,deckKey='b_red',stake=1):RunState {
  const levels=Object.fromEntries(Object.keys(HAND_VALUES).map(h=>[h,1])) as Record<HandType,number>;
  const s:RunState={seed:seed||'NIGHT',deckKey,stake,phase:'blindSelect',ante:1,blindAnte:1,blindIndex:0,round:0,bossKey:'',bossesUsed:{},target:0,roundScore:0,dollars:initial.dollars,handSize:initial.handSize,maxHands:initial.hands,maxDiscards:initial.discards,handsLeft:initial.hands,discardsLeft:initial.discards,jokerSlots:initial.jokerSlots,consumableSlots:initial.consumableSlots,
    deck:makeDeck().map((c,i)=>({...c,sortId:i+1})),drawPile:[],discardPile:[],hand:[],played:[],selected:[],jokers:[],consumables:[],handLevels:levels,handUses:{},roundHandUses:{},handsPlayed:0,roundHandsPlayed:0,discardsUsed:0,shop:{offers:[],packs:[],paidRerolls:0,freeRerolls:0},tags:[],rng:new SeededRng(seed||'NIGHT'),uid:1,system:{},runtime:{},log:[]};
  applySystem(s,systemRuntime.applyDeck(deckKey,systemState(s),s.rng));applySystem(s,systemRuntime.applyStake(stake,systemState(s)));
  s.system.startingDeckSize=s.deck.length;s.handsLeft=s.maxHands;s.discardsLeft=s.maxDiscards;resetRoundTargets(s);chooseBoss(s);cacheBlindRewards(s);updateTarget(s);return s;
}
function draw(s:RunState,count:number){
  const newCards=s.drawPile.splice(0,Math.max(0,count));s.hand.push(...newCards);
  const result=systemRuntime.applyBlindDraw(currentBlindKey(s),systemState(s),newCards,s.rng);applySystem(s,result);
  s.hand=systemRuntime.applyBlindCardDebuffs(currentBlindKey(s),s.hand,systemState(s));syncCards(s);if(s.system.forcedSelection&&!s.selected.includes(s.system.forcedSelection))s.selected.push(s.system.forcedSelection);
}
export function enterBlind(s:RunState):RunState {
  if(s.phase!=='blindSelect')fail('当前不能进入关卡');s.round++;s.phase='playing';s.roundScore=0;s.handsLeft=s.maxHands;s.discardsLeft=s.maxDiscards;s.roundHandsPlayed=0;s.discardsUsed=0;s.roundHandUses={};s.hand=[];s.played=[];s.selected=[];s.discardPile=[];
  s.system.blindDisabled=false;s.system.blindTriggered=false;s.system.blindRequirementFactor=1;s.system.saved=false;
  for(const c of s.deck){c.debuffed=false;c.custom={...c.custom,faceDown:false};}s.drawPile=s.rng.shuffle(s.deck,'shuffle'+s.ante);
  applySystem(s,systemRuntime.applyBlindStart(currentBlindKey(s),systemState(s),s.rng));
  s.handsLeft=s.system.handsLeft??s.maxHands;s.discardsLeft=s.system.discardsLeft??s.maxDiscards;processTags(s,'round_start_bonus');updateTarget(s);fire(s,'blindSet');updateTarget(s);
  draw(s,s.handSize);fire(s,'firstHandDrawn');return s;
}
export function toggleCard(s:RunState,id:string){
  if(!s.hand.some(c=>c.id===id))return;if(id===s.system.forcedSelection)return;if(s.selected.includes(id))s.selected=s.selected.filter(x=>x!==id);else if(s.selected.length<MAX_SELECT)s.selected.push(id);
}
export function moveHandCard(s:RunState,id:string,delta:number){const i=s.hand.findIndex(c=>c.id===id),to=i+delta;if(i>=0&&to>=0&&to<s.hand.length)[s.hand[i],s.hand[to]]=[s.hand[to]!,s.hand[i]!];}
export function sortHand(s:RunState,mode:'rank'|'suit'){s.hand.sort((a,b)=>mode==='rank'?b.rank-a.rank:SUITS.indexOf(a.suit)-SUITS.indexOf(b.suit)||b.rank-a.rank);}
export function playSelected(s:RunState):ScoreResult {
  if(s.phase!=='playing'||s.handsLeft<=0||!s.selected.length)fail('请先选择一至五张手牌');
  let played=s.hand.filter(c=>s.selected.includes(c.id));let held=s.hand.filter(c=>!s.selected.includes(c.id));
  const modifiers=pokerRules(s);const poker=evaluatePoker(played,modifiers);
  const before=systemRuntime.applyBlindBeforeHand(currentBlindKey(s),{...systemState(s),handCards:held},played,poker.type,s.rng) as any;
  if(before.blocked)fail(before.reason??'当前关卡限制了这次出牌');
  applySystem(s,before);const byId=new Map(s.deck.map(c=>[c.id,c]));played=played.map(c=>byId.get(c.id)??c);held=s.hand;s.handsLeft--;s.played=played;s.hand=held;s.selected=[];
  s.handUses[poker.type]=(s.handUses[poker.type]??0)+1;s.roundHandUses[poker.type]=(s.roundHandUses[poker.type]??0)+1;s.lastHandType=poker.type;s.system.blindTriggered=!!before.debuffedHand||before.baseChipsFactor!==1||before.baseMultFactor!==1;
  const runtime=context(s,'before');
  const result=scoreHand({played,held,jokers:s.jokers,handLevels:s.handLevels,rules:modifiers,rng:s.rng,evaluateJokers:jokerRuntime.evaluateJokers,context:runtime,
    heldConsumableEffects:()=>systemRuntime.getObservatoryEffects(systemState(s),poker.type,s.consumables).map(e=>({kind:'xmult',amount:e.amount,cardId:e.cardId,sourceKey:e.sourceKey})),
    probabilityNormal:s.system.probabilityNormal??initial.probabilityNormal,debuffHand:before.debuffedHand,chipsDollarCap:!!s.system.chipsDollarCap,balancedScoring:!!s.system.balancedScoring,
    modifyHand:value=>({chips:Math.max(before.baseChipsMinimum??0,Math.floor(value.chips*(before.baseChipsFactor??1)+(before.baseRoundOffset??0))),mult:Math.max(before.baseMultMinimum??1,Math.floor(value.mult*(before.baseMultFactor??1)+(before.baseRoundOffset??0)))})});
  s.dollars=s.runtime.money;s.roundScore+=result.score;s.lastScore=result;s.handsPlayed++;s.roundHandsPlayed++;applyEvents(s,result.events,true);
  for(const c of result.destroyedCards)removeCard(s,c.id);
  s.discardPile.push(...played.filter(c=>s.deck.some(d=>d.id===c.id)));
  applySystem(s,systemRuntime.applyBlindAfterHand(currentBlindKey(s),systemState(s),played,s.rng));
  if(s.roundScore>=s.target){endRound(s);}
  else if(s.handsLeft<=0)endRound(s,true);
  else draw(s,s.system.blindState?.drawCount??Math.max(0,s.handSize-s.hand.length));
  return result;
}
export function discardSelected(s:RunState){
  if(s.phase!=='playing'||s.discardsLeft<=0||!s.selected.length)fail('当前不能弃牌');
  const cards=s.hand.filter(c=>s.selected.includes(c.id));const poker=evaluatePoker(cards,pokerRules(s));fire(s,'preDiscard',{fullHand:cards,handType:poker.type,handTypes:poker.allTypes});s.discardsLeft--;
  for(const card of cards){fire(s,'discard',{card,fullHand:cards});if(card.seal==='purple'&&!card.debuffed)spawnConsumable(s,'tarot');}
  s.hand=s.hand.filter(c=>!s.selected.includes(c.id));s.discardPile.push(...cards.filter(c=>s.deck.some(d=>d.id===c.id)));s.selected=[];s.discardsUsed++;applySystem(s,systemRuntime.applyBlindAfterDiscard(currentBlindKey(s),systemState(s),s.rng));draw(s,s.system.blindState?.drawCount??Math.max(0,s.handSize-s.hand.length));
}
function endRound(s:RunState,gameOver=false){
  fire(s,'roundEnd',{gameOver});if(gameOver&&!s.system.saved){s.phase='lost';return;}
  for(const card of s.hand){
    if(card.debuffed)continue;const repeated=fire(s,'roundEndRepetition',{card,repetitionArea:'held',hasHeldEffects:card.enhancement==='gold'||card.seal==='blue'}).filter(e=>e.kind==='retrigger').reduce((n,e)=>n+(e.amount??0),0);const times=1+(card.seal==='red'?1:0)+repeated;
    for(let i=0;i<times;i++){
      if(card.enhancement==='gold')s.dollars+=Number(definitions.enhancements.find(e=>e.sourceKey==='m_gold')!.config.h_dollars);
      if(card.seal==='blue'&&s.lastHandType){const planet=definitions.consumables.find(c=>c.kind==='planet'&&(c as any).handType===s.lastHandType);if(planet)spawnConsumable(s,'planet',planet.sourceKey);}
    }
  }
  const payout=computeRoundPayout({dollars:s.dollars,blindKey:currentBlindKey(s),stake:s.stake,handsLeft:s.handsLeft,discardsLeft:s.discardsLeft,moneyPerHand:s.system.moneyPerHand,moneyPerDiscard:s.system.moneyPerDiscard,noInterest:s.system.noInterest,interestCap:s.system.interestCap,interestAmount:s.system.interestAmount,noBlindReward:s.system.noBlindReward});
  s.payout=payout;s.dollars+=payout.total;fire(s,'payout');
  for(const j of s.jokers){if(j.rental)s.dollars-=definitions.economy.rentalPerRound;if(j.perishable!==undefined){if(j.perishable>0)j.perishable--;if(j.perishable<=0)j.debuffed=true;}}
  s.system.unusedDiscards=(s.system.unusedDiscards??0)+s.discardsLeft;processTags(s,'eval',{bossDefeated:s.blindIndex===2});if(s.blindIndex===2){const deckEffect=systemRuntime.applyDeckEvent(s.deckKey,systemState(s),{type:'bossDefeated'},s.rng);if(deckEffect.applied)applySystem(s,deckEffect);}
  applySystem(s,systemRuntime.applyBlindEnd(currentBlindKey(s),systemState(s)));resetRoundTargets(s);s.phase='roundEnd';
}
function refreshOffers(s:RunState){
  s.shop.offers=[];const slots=s.system.shopSlots??definitions.shop.jokerSlots;
  for(let i=0;i<slots;i++){const kind=pickShopKind(s.rng.next('cdt'+s.ante),shopWeightsForState(s.system));s.shop.offers.push(kind==='joker'?jokerOffer(s):kind==='playingCard'?playingOffer(s):consumableOffer(s,kind));}
}
export function continueAfterRound(s:RunState){
  if(s.phase!=='roundEnd')fail('本关还未结束');
  if(s.blindIndex===2&&s.ante===initial.winAnte&&!s.system.endless){s.phase='won';return;}
  s.system.shopD6Used=false;s.system.shopFree=false;s.system.temporaryRerollBase=undefined;
  s.phase='shop';s.shop={offers:[],packs:[],paidRerolls:0,freeRerolls:jokerRuntime.getJokerModifiers(s.jokers).freeRerolls};refreshOffers(s);
  for(let i=0;i<definitions.shop.boosterSlots;i++){const pack=pickBooster(s.rng,{firstShop:s.round===1&&i===0});s.shop.packs.push({id:nextId(s,'pack'),sourceKey:pack.sourceKey,kind:'pack',price:computePurchasePrice(pack.cost,{discountPercent:s.system.discountPercent,inflation:s.system.inflation})});}
  if(s.system.voucherAnte!==s.ante){const pool=systemRuntime.eligibleVouchers(systemState(s));s.system.voucherSource=pool.length?s.rng.pick(pool,'Voucher').sourceKey:undefined;s.system.voucherAnte=s.ante;}
  if(s.system.voucherSource&&!s.system.vouchers?.includes(s.system.voucherSource)){const v=definitions.vouchers.find(v=>v.sourceKey===s.system.voucherSource)!;s.shop.voucher={id:nextId(s,'voucher'),sourceKey:v.sourceKey,kind:'voucher',price:computePurchasePrice(v.cost!,{discountPercent:s.system.discountPercent,inflation:s.system.inflation})};}
  processTags(s,'shop_start');processTags(s,'store_joker_create');processTags(s,'voucher_add');processTags(s,'store_joker_modify');processTags(s,'shop_final_pass');
}
export function continueEndless(s:RunState){
  if(s.phase!=='won')fail('完成八段航行后才能继续');
  s.system.endless=true;s.phase='roundEnd';continueAfterRound(s);
}
export const rerollCost=(s:RunState)=>computeRerollCost(s.shop.paidRerolls,s.system.rerollBaseCost??initial.rerollBaseCost,s.shop.freeRerolls,s.system.temporaryRerollBase);
export function rerollShop(s:RunState){
  if(s.phase!=='shop')fail('重掷只能在商店进行');const cost=rerollCost(s);if(s.dollars-cost<(s.system.bankruptAt??0))fail('金币不足');s.dollars-=cost;if(s.shop.freeRerolls>0)s.shop.freeRerolls--;else s.shop.paidRerolls++;refreshOffers(s);fire(s,'reroll');
}
function refreshPrices(s:RunState,addedSlots=0){
  const options={discountPercent:s.system.discountPercent,inflation:s.system.inflation};
  for(const o of [...s.shop.offers,...s.shop.packs,...(s.shop.voucher?[s.shop.voucher]:[])]){
    const base=o.kind==='joker'?jd(o.sourceKey).cost:o.kind==='voucher'?definitions.vouchers.find(v=>v.sourceKey===o.sourceKey)!.cost:o.kind==='pack'?definitions.boosters.find(p=>p.sourceKey===o.sourceKey)!.cost:o.card?(definitions as any).playingCardCost:cd(o.sourceKey).cost;
    o.price=computePurchasePrice(base!,{...options,edition:o.edition,rental:o.rental,free:o.price===0||(o.kind==='planet'&&s.system.freePlanets)});
  }
  for(const item of s.jokers){
    item.cost=computePurchasePrice(jd(item.sourceKey).cost!,{...options,edition:item.edition,rental:item.rental});
    item.sellValue=computeSellValue(item.cost,item.state?.extraValue??0);
  }
  for(const item of s.consumables){item.cost=computePurchasePrice(cd(item.sourceKey).cost!,{...options,edition:item.edition});item.sellValue=computeSellValue(item.cost);}
  for(let i=0;i<addedSlots;i++){const kind=pickShopKind(s.rng.next('cdt'+s.ante),shopWeightsForState(s.system));s.shop.offers.push(kind==='joker'?jokerOffer(s):kind==='playingCard'?playingOffer(s):consumableOffer(s,kind));}
}
export function buyOffer(s:RunState,id:string){
  if(s.phase!=='shop')fail('当前不在商店');const offer=[...s.shop.offers,...s.shop.packs,...(s.shop.voucher?[s.shop.voucher]:[])].find(o=>o.id===id)??fail('这件商品已不在货架上');
  if(s.dollars-offer.price<(s.system.bankruptAt??0))fail('金币不足');
  if(offer.kind==='joker'&&offer.edition!=='negative'&&s.jokers.length>=s.jokerSlots)fail('伙伴位置已满，请先出售一张');
  if(['tarot','planet','spectral'].includes(offer.kind)&&s.consumables.length>=s.consumableSlots)fail('道具位置已满，请先使用或出售');
  const slotsBefore=s.system.shopSlots??definitions.shop.jokerSlots;s.dollars-=offer.price;
  if(offer.kind==='joker')addJoker(s,offer);
  else if(offer.kind==='voucher'){applySystem(s,systemRuntime.applyVoucher(offer.sourceKey,systemState(s)));if(s.shop.voucher?.id===id)s.shop.voucher=undefined;}
  else if(offer.kind==='pack')openPack(s,offer.sourceKey);
  else if(offer.card){s.deck.push(offer.card);fire(s,'playingCardsAdded',{cards:[offer.card]});}
  else s.consumables.push({id:nextId(s,'cons'),sourceKey:offer.sourceKey,cost:offer.price,sellValue:computeSellValue(offer.price)});
  s.shop.offers=s.shop.offers.filter(o=>o.id!==id);s.shop.packs=s.shop.packs.filter(o=>o.id!==id);if(offer.kind==='voucher')refreshPrices(s,Math.max(0,(s.system.shopSlots??definitions.shop.jokerSlots)-slotsBefore));
}
export function sellItem(s:RunState,id:string){
  const j=s.jokers.find(j=>j.id===id);if(j){
    if(j.eternal)fail('这张伙伴无法出售');
    const events=jokerRuntime.evaluateJokers([j],context(s,'sellSelf',{card:j}));
    s.dollars+=j.sellValue;s.jokers=s.jokers.filter(x=>x.id!==id);if(j.edition==='negative')s.jokerSlots--;
    applyEvents(s,events);fire(s,'sell',{card:j});refreshModifiers(s);
    if(currentBlindKey(s)==='bl_final_leaf'&&!s.system.blindDisabled)disableCurrentBoss(s);return;
  }
  const c=s.consumables.find(c=>c.id===id)??fail('找不到这张牌');s.dollars+=c.sellValue;s.consumables=s.consumables.filter(x=>x.id!==id);if(c.edition==='negative')s.consumableSlots--;fire(s,'sell',{card:c});
}
function consumeEffects(s:RunState,sourceKey:string,item:Record<string,any>,selectedCards:Card[]){
  const definition=cd(sourceKey),consumable={...item,sourceKey,set:definition.kind};
  if(definition.kind==='tarot')s.system.tarotUsed=(s.system.tarotUsed??0)+1;
  if(definition.kind==='planet')s.system.usedPlanets=[...new Set([...(s.system.usedPlanets??[]),sourceKey])];
  fire(s,'consume',{card:consumable,consumable,selectedCards});s.selected=[];refreshModifiers(s);
}
export function useConsumable(s:RunState,id:string){
  const c=s.consumables.find(c=>c.id===id)??fail('道具不存在');const selected=s.hand.filter(card=>s.selected.includes(card.id));
  const input=systemState(s);input.consumables=s.consumables.filter(x=>x.id!==id).map(x=>x.sourceKey);if(c.edition==='negative')input.consumableSlots--;
  const result=systemRuntime.applyConsumable(c.sourceKey,input,s.selected,s.rng);if(!result.applied)fail(result.reason??'当前无法使用这个道具');
  // 匹配返回库存前排除本次消费的实例，避免同名道具之间发生身份串换。
  s.consumables=s.consumables.filter(x=>x.id!==id);applySystem(s,result);consumeEffects(s,c.sourceKey,c,selected);
}
export function leaveShop(s:RunState){
  if(s.phase!=='shop')fail('当前不在商店');fire(s,'shopEnd');advanceBlind(s);
}
function advanceBlind(s:RunState){
  if(s.blindIndex===2){s.ante++;s.blindAnte++;s.blindIndex=0;s.system.playedThisAnte=[];s.system.bossRerolled=false;chooseBoss(s);cacheBlindRewards(s);}else s.blindIndex++;
  s.phase='blindSelect';s.hand=[];s.played=[];s.selected=[];s.system.blindRequirementFactor=1;updateTarget(s);
}
export function skipBlind(s:RunState){
  if(s.phase!=='blindSelect'||s.blindIndex===2)fail('这关不能跳过');if(!s.system.blindTags)cacheBlindRewards(s);const tag=definitions.tags.find(t=>t.sourceKey===s.system.blindTags[s.blindIndex])!;const orbitalHand=s.system.orbitalHands[s.blindIndex];s.tags.push(tag.sourceKey);s.system.skips=(s.system.skips??0)+1;
  processTags(s,'tag_add',{tagKey:tag.sourceKey,orbitalHand});processTags(s,'immediate',{orbitalHand});advanceBlind(s);processTags(s,'new_blind_choice');openFreePacks(s);
}
function processTags(s:RunState,type:string,extra:Record<string,any>={}){
  for(const key of [...s.tags]){
    const result=systemRuntime.applyTag(key,systemState(s),{type,...extra},s.rng);if(!result.applied)continue;applySystem(s,result);const index=s.tags.indexOf(key);if(index>=0)s.tags.splice(index,1);
    const offers=result.state.shopCards??[];if(type.startsWith('store_')||type.startsWith('shop_')||type==='voucher_add'){
      const mapped=offers.map((o:any)=>({...o,sourceKey:o.sourceKey??'playingCard',price:o.cost??0,edition:o.edition??o.joker?.edition}));s.shop.offers=mapped.filter((o:any)=>!['pack','voucher'].includes(o.kind));s.shop.packs=mapped.filter((o:any)=>o.kind==='pack');const vouchers=mapped.filter((o:any)=>o.kind==='voucher');if(vouchers.length){s.shop.voucher=vouchers[0];s.shop.offers.push(...vouchers.slice(1));}
    }
  }
}
function openFreePacks(s:RunState){if(s.phase==='pack')return;const key=s.system.freePacks?.shift();if(key)openPack(s,key);}
function openPack(s:RunState,key:string){
  const pack=definitions.boosters.find(p=>p.sourceKey===key)??fail('未知卡包');const returnPhase=s.phase;fire(s,'openBooster',{booster:pack});
  const generated=systemRuntime.generatePackContents(key,systemState(s),s.rng);applySystem(s,{state:generated.state,events:[],applied:true});
  const choices:Offer[]=generated.items.map(item=>({id:item.id,sourceKey:item.sourceKey??'playingCard',kind:item.kind==='consumable'?cd(item.sourceKey!).kind:item.kind,price:0,edition:(item.edition??item.joker?.edition) as Edition,card:item.card,eternal:item.joker?.eternal,rental:item.joker?.rental,perishable:item.joker?.perishable}));
  s.pack={key,choices,remaining:pack.choose!,returnPhase};s.phase='pack';if(['arcana','spectral'].includes(pack.packKind!)&&!s.hand.length){s.drawPile=s.rng.shuffle(s.deck,'packdraw');draw(s,s.handSize);}
}
export function takePackCard(s:RunState,id:string){
  if(s.phase!=='pack'||!s.pack)fail('当前未打开卡包');const pack=s.pack!;const offer=pack.choices.find(c=>c.id===id)??fail('卡包中没有此牌');
  if(offer.kind==='joker'){if(offer.edition!=='negative'&&s.jokers.length>=s.jokerSlots)fail('伙伴位置已满');addJoker(s,offer);}
  else if(offer.card){s.deck.push(offer.card);fire(s,'playingCardsAdded',{cards:[offer.card]});}
  else {const selected=s.hand.filter(c=>s.selected.includes(c.id));applySystem(s,systemRuntime.applyConsumable(offer.sourceKey,systemState(s),s.selected,s.rng));consumeEffects(s,offer.sourceKey,offer,selected);}
  pack.choices=pack.choices.filter(c=>c.id!==id);pack.remaining--;if(pack.remaining<=0)closePack(s);s.selected=[];
}
export function closePack(s:RunState){if(s.pack){if(s.pack.remaining>0)fire(s,'skipBooster');s.phase=s.pack.returnPhase;s.pack=undefined;s.hand=[];s.selected=[];openFreePacks(s);}}
const NUMBER_TAG='$night.number';
function stableJsonValue(value:any):any {
  // JSON 的原生编码会丢失非有限数；显式标记保持双精度计分边界和存档一致。
  if(typeof value==='number'&&!Number.isFinite(value))return {[NUMBER_TAG]:Number.isNaN(value)?'NaN':value>0?'Infinity':'-Infinity'};
  if(Array.isArray(value))return value.map(stableJsonValue);
  if(value&&typeof value==='object')return Object.fromEntries(Object.keys(value).sort().map(key=>[key,stableJsonValue(value[key])]));
  return value;
}
export function serializeRun(s:RunState):string {
  const {rng,lastScore,...rest}=s;return JSON.stringify(stableJsonValue({...rest,rng:rng.snapshot()}));
}
export function restoreRun(json:string):RunState {
  const data=JSON.parse(json,(_key,value)=>{
    if(value&&typeof value==='object'&&!Array.isArray(value)&&Object.keys(value).length===1){
      if(value[NUMBER_TAG]==='Infinity')return Infinity;
      if(value[NUMBER_TAG]==='-Infinity')return -Infinity;
      if(value[NUMBER_TAG]==='NaN')return NaN;
    }
    return value;
  });const rng=new SeededRng(data.seed);rng.restore(data.rng);data.rng=rng;syncCards(data);return data as RunState;
}
