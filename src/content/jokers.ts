import rawDefinitions from '../../data/jokers.json';
import jokerEvidence from '../../data/evidence-jokers.json';
import {cardIsSuit, isFace, rankChips, type Card, type Edition, type Suit} from '../core/cards';

/** 数据只保存事实与我们撰写的机制规格。解释器不包含逐卡条件分支。 */
export interface JokerRule {
  trigger:string|string[];
  condition:any;
  actions:JokerAction[];
  copyable:boolean;
  factRefs:string[];
}
export interface JokerAction {op:string;[key:string]:any;}
export interface JokerDefinition {
  id:string;sourceKey:string;name:string;description:string;order:number;rarity:number;cost:number;baseSellValue:number;
  poolWeight:number;blueprintCompatible:boolean;perishableCompatible:boolean;eternalCompatible:boolean;unlockedInitially:boolean;
  config:Record<string,any>;rules:JokerRule[];factRefs:string[];sourceRefs?:string[];
  unlockCondition:any;enhancementGate:string|null;requiredPoolFlag:string|null;excludedPoolFlag:string|null;
  implementationStatus:string;integrationStatus:string;
}
export interface RuntimeJoker {
  id:string;sourceKey:string;state:Record<string,any>;cost?:number;sellValue?:number;rarity?:number;
  edition?:Edition;eternal?:boolean;debuffed?:boolean;removed?:boolean;[key:string]:any;
}
export interface JokerEvent {kind:string;amount?:number;jokerId?:string;cardId?:string;target?:any;value?:any;factRef?:string;[key:string]:any;}
export interface JokerContext {hook:string;run?:Record<string,any>;round?:Record<string,any>;allJokers?:any[];[key:string]:any;}
export interface JokerModifiers {
  pokerMinimum:number;straightMaxGap:number;scoreAllCards:boolean;allCardsAreFace:boolean;smearedSuits:boolean;
  allowDuplicates:boolean;freePlanets:boolean;handSize:number;handsPerRound:number;discardsPerRound:number;
  bankruptAt:number;freeRerolls:number;interestAmount:number;probabilityFactor:number;
  fourFingers:boolean;shortcut:boolean;splash:boolean;pareidolia:boolean;smeared:boolean;probabilityNormal:number;
}
export const jokerDefinitions=rawDefinitions as unknown as JokerDefinition[];
export const jokerContent=jokerDefinitions;
const definitions=new Map(jokerDefinitions.flatMap(d=>[[d.sourceKey,d],[d.id,d]]));
const handAliases:Record<string,string>={'High Card':'highCard','Pair':'pair','Two Pair':'twoPair','Three of a Kind':'threeOfAKind','Straight':'straight','Flush':'flush','Full House':'fullHouse','Four of a Kind':'fourOfAKind','Straight Flush':'straightFlush','Five of a Kind':'fiveOfAKind','Flush House':'flushHouse','Flush Five':'flushFive'};
const plainHandTypes=['highCard','pair','twoPair','threeOfAKind','straight','flush','fullHouse','fourOfAKind','straightFlush'];
const normalizeHand=(value:string)=>handAliases[value]??value;
const clone=<T>(value:T):T=>structuredClone(value);
const get=(obj:any,path:string):any=>path.split('.').reduce((value,key)=>value?.[key],obj);
const set=(obj:any,path:string,value:any):void=>{const parts=path.split('.');let cursor=obj;for(const key of parts.slice(0,-1)){cursor[key]??={};cursor=cursor[key];}cursor[parts[parts.length-1]]=value;};
const numeric=(value:any):number=>typeof value==='number'&&Number.isFinite(value)?value:Number(value)||0;
const enhancement=(card:any):string|undefined=>{const value=card?.enhancement;return typeof value==='string'?value.replace(/^m_/,'').toLowerCase():undefined;};
const normalizeCard=(card:any):Card=>({...card,suit:String(card?.suit??'').toLowerCase() as Suit,enhancement:enhancement(card),debuffed:card?.debuffed??card?.debuff??false});
const idEqual=(a:any,b:any):boolean=>!!a&&!!b&&(a===b||(a.id!==undefined&&a.id===b.id));
const active=(j:any):boolean=>!j.debuffed&&!j.debuff&&!j.removed;
const sourceOf=(j:any):string=>j.sourceKey??j.key;

export function getJokerDefinition(key:string):JokerDefinition {
  const definition=definitions.get(key);if(!definition)throw new Error(`未找到计策定义：${key}`);return definition;
}
/** 创建状态和数据目录分离，保存文件只需保存实例。随机目标可通过 init 事件初始化。 */
export function createJoker(key:string,id?:string,options:{run?:Record<string,any>;rng?:any;context?:JokerContext}={}):RuntimeJoker {
  const d=getJokerDefinition(key),config=clone(d.config);
  const state:Record<string,any>={...config,mult:config.mult??0,xmult:config.Xmult??1,t_mult:config.t_mult??0,t_chips:config.t_chips??0,h_size:config.h_size??0,d_size:config.d_size??0,extraValue:0,rounds:0,createdAtHands:options.run?.handsPlayed??0};
  if(config.extra&&typeof config.extra==='object'){
    if(config.extra.discards!==undefined)state.remaining=config.extra.discards;
    if(config.extra.poker_hand!==undefined)state.targetHand=normalizeHand(config.extra.poker_hand);
  }
  const joker:RuntimeJoker={id:id??d.id,sourceKey:d.sourceKey,name:d.name,state,cost:d.cost,sellValue:d.baseSellValue,rarity:d.rarity};
  if(options.rng)evaluateJokers([joker],{hook:'init',run:options.run??{},rng:options.rng,...options.context,allJokers:[joker]});
  return joker;
}

interface Evaluation {
  self:RuntimeJoker;definition:JokerDefinition;ctx:any;raw:JokerContext;rule:JokerRule;ruleIndex:number;copyDepth:number;origin?:RuntimeJoker;
}
function normalizedContext(raw:JokerContext,self:RuntimeJoker,group:RuntimeJoker[]):any {
  const all=(raw.allJokers??group).filter(j=>!j.removed);
  const run=raw.run??(raw.run={});
  run.consumableBuffer??=0;run.jokerBuffer??=0;
  const deck=run.deckCards??run.playingCards??raw.deckCards??run.deck??[];
  const consumables=raw.consumables??raw.consumeables??run.consumables??run.consumeables??[];
  const fullHand=raw.fullHand??raw.played??[];
  const scoringCards=raw.scoringCards??raw.scoringHand??fullHand;
  const heldCards=raw.heldCards??raw.held??[];
  const card=raw.card??raw.otherCard??raw.other_card;
  const roundRaw=raw.round??raw.currentRound??run.round??{};
  const round={handsLeft:roundRaw.handsLeft??run.handsLeft??0,discardsLeft:roundRaw.discardsLeft??run.discardsLeft??0,handsPlayed:roundRaw.handsPlayed??run.roundHandsPlayed??0,discardsUsed:roundRaw.discardsUsed??run.discardsUsed??0,...roundRaw};
  const runView={...run,money:run.money??raw.money??0,handsPlayed:run.handsPlayed??0,handUses:run.handUses??{},deckCards:deck,deckRemaining:run.deckRemaining??run.drawPile?.length??0,startingDeckSize:run.startingDeckSize??deck.length,jokerSlots:run.jokerSlots??raw.jokerSlots??all.length,consumableSlots:run.consumableSlots??raw.consumableSlots??0,tarotUsed:run.tarotUsed??0,distinctPlanetsUsed:run.distinctPlanetsUsed??0,skips:run.skips??0};
  const has=(key:string)=>all.some(j=>active(j)&&sourceOf(j)===key);
  const pokerRules={smeared:has('j_smeared'),pareidolia:has('j_pareidolia')};
  const face=(c:any)=>!!c&&isFace(normalizeCard(c),pokerRules);
  const rank=(c:any)=>enhancement(c)==='stone'?-1:c?.rank;
  const isSuit=(c:any,suit:string,opts:any={})=>!!c&&cardIsSuit(normalizeCard(c),String(suit).toLowerCase() as Suit,{...pokerRules,...opts});
  const handType=normalizeHand(raw.handType??'highCard');
  const handUses=run.handUses??raw.handUses??{};
  const handStates=run.hands??raw.hands??{};
  const useCount=(name:string)=>handUses[name]??handStates[name]?.played??0;
  const visible=(raw.visibleHandTypes??run.visibleHandTypes??(Object.keys(handStates).length?Object.keys(handStates).filter(h=>handStates[h].visible!==false):[...plainHandTypes,...['fiveOfAKind','flushHouse','flushFive'].filter(h=>(handUses[h]??0)>0)])).map(normalizeHand);
  const usesThisRound=round.handUses??round.playedThisRound??raw.playedThisRound??{};
  const firstFace=scoringCards.find(face);
  let lowest:any;
  for(const held of heldCards)if(enhancement(held)!=='stone'&&(!lowest||held.rank<=lowest.rank))lowest=held;
  const assignedSuits=(forPot:boolean):Record<string,number>=>{
    const counts:Record<string,number>={hearts:0,diamonds:0,spades:0,clubs:0};
    const normalOrder=['hearts','diamonds','spades','clubs'];
    for(const item of scoringCards){
      if(enhancement(item)==='wild')continue;
      if(forPot){for(const suit of normalOrder)if(!counts[suit]&&isSuit(item,suit,{bypassDebuff:true})){counts[suit]++;break;}}
      else{for(const suit of normalOrder)if(isSuit(item,suit))counts[suit]++;}
    }
    const wildOrder=forPot?normalOrder:['clubs','diamonds','spades','hearts'];
    for(const item of scoringCards){if(enhancement(item)!=='wild')continue;for(const suit of wildOrder)if(!counts[suit]&&isSuit(item,suit)){counts[suit]++;break;}}
    return counts;
  };
  const potSuits=assignedSuits(true),doubleSuits=assignedSuits(false);
  const removedCards=raw.removedCards??raw.removed??raw.glassShattered??raw.cards??[];
  const selectedCards=raw.selectedCards??raw.highlighted??[];
  const normalProbability=raw.probabilityNormal??raw.normalProbability??run.probabilityNormal??all.filter(j=>active(j)&&sourceOf(j)==='j_oops').reduce(n=>n*numeric(getJokerDefinition('j_oops').rules[0].actions[0].value),1);
  let handTypes=(raw.handTypes??(raw.pokerHands?Object.keys(raw.pokerHands).filter(k=>raw.pokerHands[k]?.length):[handType])).map(normalizeHand);
  // 计分器通常传完整子牌型集合；生命周期调用只给单一牌型时补出确定的包含关系。
  if(!raw.handTypes&&!raw.pokerHands){
    const inherited:Record<string,string[]>={twoPair:['pair'],threeOfAKind:['pair'],fullHouse:['pair','twoPair','threeOfAKind'],fourOfAKind:['pair','threeOfAKind'],straightFlush:['straight','flush'],fiveOfAKind:['pair','threeOfAKind','fourOfAKind'],flushHouse:['pair','twoPair','threeOfAKind','fullHouse','flush'],flushFive:['pair','threeOfAKind','fourOfAKind','fiveOfAKind','flush']};
    handTypes=[...new Set([...handTypes,...(inherited[handType]??[])])];
  }
  return {...raw,run:runView,mutableRun:run,round,allJokers:all,consumables,fullHand,scoringCards,heldCards,handType,handTypes,visibleHandTypes:visible,removedCards,selectedCards,cards:raw.cards??raw.addedCards??[],blind:raw.blind??{},normalProbability,
    face,isSuit,cardRank:rank(card),cardNominal:card&&Number.isInteger(card.rank)&&card.rank>=2&&card.rank<=14&&enhancement(card)!=='stone'?rankChips(card.rank):0,cardEnhancement:enhancement(card),cardIsFace:face(card),
    card:card?Object.assign(card,{...(card.custom?.luckyTrigger!==undefined?{luckyTriggered:card.custom.luckyTrigger}:{})}):card,
    scoringHasFace:scoringCards.some(face),scoringHasAce:scoringCards.some((c:any)=>rank(c)===14),
    isFirstScoringCard:idEqual(card,scoringCards[0]),isFirstScoringFace:idEqual(card,firstFace),isLowestHeld:idEqual(card,lowest),isLastDiscard:idEqual(card,fullHand[fullHand.length-1]),
    discardFaceCount:fullHand.filter(face).length,removedFaceCount:removedCards.filter(face).length,
    shatteredCount:removedCards.filter((c:any)=>c.shattered||c.custom?.shattered).length,selectedGlassCount:selectedCards.filter((c:any)=>enhancement(c)==='glass').length,
    allHeldBlack:heldCards.every((c:any)=>isSuit(c,'clubs',{flushCalc:true})||isSuit(c,'spades',{flushCalc:true})),
    coversAllSuits:Object.values(potSuits).every(n=>n>0),hasClubAndOtherSuit:doubleSuits.clubs>0&&(doubleSuits.hearts+doubleSuits.diamonds+doubleSuits.spades)>0,
    jokerCount:all.length,emptyJokerSlots:Math.max(0,runView.jokerSlots-all.length-run.jokerBuffer),hasConsumableRoom:consumables.length+run.consumableBuffer<runView.consumableSlots,
    stencilFactor:runView.jokerSlots-all.length+all.filter(j=>sourceOf(j)==='j_stencil').length,
    deckCount:deck.length,deckSteelCount:deck.filter((c:any)=>enhancement(c)==='steel').length,deckStoneCount:deck.filter((c:any)=>enhancement(c)==='stone').length,deckNineCount:deck.filter((c:any)=>rank(c)===9).length,deckEnhancedCount:deck.filter((c:any)=>!!enhancement(c)).length,
    moneyWithBuffer:runView.money+numeric(run.dollarBuffer),currentHandUses:useCount(handType),currentHandUsesThisRound:usesThisRound[handType]??handStates[handType]?.playedThisRound??0,
    isUniqueMostPlayed:!visible.some((h:string)=>h!==handType&&useCount(h)>=useCount(handType)),
    otherJoker:raw.otherJoker?{...raw.otherJoker,rarity:raw.otherJoker.rarity??definitions.get(sourceOf(raw.otherJoker))?.rarity}:undefined,
    otherJokerSellTotal:all.filter(j=>j.id!==self.id).reduce((n,j)=>n+sellValue(j),0),
    scoreFraction:raw.scoreFraction??((raw.roundScore??run.chips??0)/(raw.blind?.chips??raw.blindTarget??Infinity)),
  };
}
function random(ctx:any,key:string):number {
  const rng=ctx.rng??ctx.run.rng;
  if(!rng)throw new Error(`计策概率效果需要可复现随机源：${key}`);
  const value=typeof rng==='function'?rng(key):rng.next(key);
  if(!Number.isFinite(value)||value<0||value>=1)throw new Error(`随机源结果须在 [0,1) 内：${key}`);
  return value;
}
function choose<T>(ctx:any,array:T[],key:string):T|undefined {return array.length?array[Math.floor(random(ctx,key)*array.length)]:undefined;}
function expr(value:any,e:Evaluation):any {
  if(typeof value==='string'&&value.startsWith('$')){
    const [root,...path]=value.slice(1).split('.');const scope=root==='state'?e.self.state:root==='self'?e.self:root==='ctx'?e.ctx:undefined;
    return path.length?get(scope,path.join('.')):scope;
  }
  if(!Array.isArray(value)||typeof value[0]!=='string')return value;
  const [op,...args]=value,a=()=>expr(args[0],e),b=()=>expr(args[1],e);
  switch(op){
    case 'and':return args.every(v=>!!expr(v,e));case 'or':return args.some(v=>!!expr(v,e));case 'not':return !a();
    case 'eq':return a()===b();case 'neq':return a()!==b();case 'gt':return a()>b();case 'gte':return a()>=b();case 'lt':return a()<b();case 'lte':return a()<=b();
    case 'concat':return args.map(v=>String(expr(v,e)??'')).join('');
    case 'add':return args.reduce((n,v)=>n+numeric(expr(v,e)),0);case 'sub':return numeric(a())-numeric(b());case 'mul':return numeric(a())*numeric(b());case 'div':return numeric(a())/numeric(b());
    case 'neg':return -numeric(a());case 'max':return Math.max(...args.map(v=>numeric(expr(v,e))));case 'min':return Math.min(...args.map(v=>numeric(expr(v,e))));case 'floor':return Math.floor(numeric(a()));case 'mod':{const x=numeric(a()),y=numeric(b());return ((x%y)+y)%y;}
    case 'rankIn':return (a()as number[]).includes(e.ctx.cardRank);
    case 'suitIs':return e.ctx.isSuit(e.ctx.card,a());
    case 'handContains':return e.ctx.handTypes.includes(a());
    case 'chance':{const denominator=numeric(a());if(denominator<=0)throw new Error('概率分母须为正数');return random(e.ctx,String(b()))<e.ctx.normalProbability/denominator;}
    case 'randomInt':{const lo=numeric(a()),hi=numeric(b()),key=String(expr(args[2],e)),rng=e.ctx.rng??e.ctx.run.rng;if(rng?.int)return rng.int(lo,hi,key);return lo+Math.floor(random(e.ctx,key)*(hi-lo+1));}
    default:throw new Error(`未注册的计策条件或算式：${op}`);
  }
}
function event(e:Evaluation,kind:string,fields:Record<string,any>={}):JokerEvent {
  return {kind,jokerId:(e.origin??e.self).id,factRef:e.rule.factRefs[0],sourceKey:e.definition.sourceKey,ruleIndex:e.ruleIndex,...fields};
}
function change(e:Evaluation,path:string,value:any):JokerEvent {
  const target=path.startsWith('state.')?e.self:e.ctx;
  const old=get(target,path);set(target,path,value);
  return event(e,'state',{target:path,value,amount:typeof value==='number'?value-numeric(old):undefined});
}
function sellValue(joker:any):number {
  return joker.sellValue??joker.sell_cost??((definitions.get(sourceOf(joker))?.baseSellValue??0)+numeric(joker.state?.extraValue));
}
function removeJoker(e:Evaluation,joker:RuntimeJoker):JokerEvent {
  joker.removed=true;return event(e,'removeJoker',{target:joker.id,value:joker});
}
type ActionHandler=(action:JokerAction,e:Evaluation)=>JokerEvent[];
/** 这份注册表按动作分类，共用操作可表达多张卡和多个时机。 */
const actions:Record<string,ActionHandler>={
  emit:(a,e)=>[event(e,a.kind,{amount:numeric(expr(a.value,e)),...(a.target?{target:a.target}:{})})],
  add:(a,e)=>[change(e,a.target,numeric(get(e.self,a.target))+numeric(expr(a.value,e)))],
  set:(a,e)=>[change(e,a.target,expr(a.value,e))],
  spawn:(a,e)=>{
    let count=Math.max(0,Math.floor(numeric(expr(a.count,e))));if(!count)return [];
    if(['tarot','planet','spectral'].includes(a.set)){
      const remaining=Math.max(0,e.ctx.run.consumableSlots-e.ctx.consumables.length-e.ctx.mutableRun.consumableBuffer);
      count=Math.min(count,remaining);e.ctx.mutableRun.consumableBuffer+=count;
    }
    if(a.set==='joker'){
      count=Math.min(count,Math.max(0,e.ctx.run.jokerSlots-e.ctx.allJokers.length-e.ctx.mutableRun.jokerBuffer));e.ctx.mutableRun.jokerBuffer+=count;
    }
    if(!count)return [];
    const {op,set,count:unused,...value}=a;
    return [event(e,'spawn',{amount:count,target:set,value})];
  },
  remove:(a,e)=>{
    if(a.who==='card')return e.ctx.card?[event(e,'destroyCard',{cardId:e.ctx.card.id,target:e.ctx.card})]:[];
    if(a.who==='self')return [removeJoker(e,e.self)];
    if(a.who==='randomJoker'){
      const possible=e.ctx.allJokers.filter((j:RuntimeJoker)=>j.id!==e.self.id&&!j.eternal&&!j.removed);
      const chosen=choose(e.ctx,possible,a.key??('remove:'+e.definition.sourceKey))as RuntimeJoker|undefined;return chosen?[removeJoker(e,chosen)]:[];
    }
    throw new Error(`未注册的移除目标：${a.who}`);
  },
  consumeRight:(a,e)=>{
    const index=e.ctx.allJokers.findIndex((j:RuntimeJoker)=>j.id===e.self.id),next=e.ctx.allJokers[index+1];
    if(!next||next.eternal||next.removed)return [];
    const result=removeJoker(e,next);return [result,change(e,'state.mult',numeric(e.self.state.mult)+sellValue(next)*numeric(a.factor))];
  },
  duplicate:(a,e)=>{
    let source:any,target:string;
    if(a.who==='firstPlayed'){source=e.ctx.fullHand[0];target='playingCard';}
    else if(a.who==='randomJoker'){source=choose(e.ctx,e.ctx.allJokers.filter((j:RuntimeJoker)=>j.id!==e.self.id&&!j.removed),a.key??('copy:'+e.definition.sourceKey));target='joker';}
    else if(a.who==='randomConsumable'){source=choose(e.ctx,e.ctx.consumables,a.key??('copy:'+e.definition.sourceKey));target='consumable';}
    else throw new Error(`未注册的复制目标：${a.who}`);
    if(!source)return [];
    return [event(e,'duplicate',{amount:1,target,value:{source,...(a.destination?{destination:a.destination}:{}),...(a.stripNegative?{stripNegative:true}:{}),...(a.resetAge?{resetAge:true}:{}),...(a.edition?{edition:a.edition}:{})}})];
  },
  cardAdd:(a,e)=>{
    const card=e.ctx.card;if(!card)return [];
    const delta=numeric(expr(a.amount,e));card[a.field]=numeric(card[a.field])+delta;
    return [event(e,'cardState',{cardId:card.id,target:a.field,value:card[a.field],amount:delta})];
  },
  enhanceFaces:(a,e)=>e.ctx.scoringCards.filter(e.ctx.face).map((card:any)=>{card.enhancement=a.enhancement;return event(e,'cardState',{cardId:card.id,target:'enhancement',value:a.enhancement});}),
  consumeEnhancements:(a,e)=>{
    const cards=e.ctx.scoringCards.filter((card:any)=>!!enhancement(card)&&!card.debuffed&&!card.debuff);
    const result=cards.map((card:any)=>{delete card.enhancement;return event(e,'cardState',{cardId:card.id,target:'enhancement',value:undefined});});
    if(cards.length)result.push(change(e,'state.xmult',numeric(e.self.state.xmult)+cards.length*numeric(expr(a.amount,e))));
    return result;
  },
  sellValueAdd:(a,e)=>{
    const items=a.who==='self'?[e.self]:[...e.ctx.allJokers,...e.ctx.consumables];
    return items.map((item:any)=>{
      item.state??={};const amount=numeric(expr(a.amount,e)),old=sellValue(item);item.state.extraValue=numeric(item.state.extraValue)+amount;item.sellValue=old+amount;
      return event(e,'state',{target:'sellValue',targetId:item.id,amount,value:item.sellValue});
    });
  },
  level:(a,e)=>[event(e,'levelUp',{amount:numeric(expr(a.amount,e)),target:normalizeHand(expr(a.hand,e))})],
  randomHandTarget:(a,e)=>{
    const options=e.ctx.visibleHandTypes.filter((h:string)=>!a.excludeCurrent||h!==e.self.state.targetHand);
    const chosen=choose(e.ctx,options,'to_do');return chosen?[change(e,'state.targetHand',chosen)]:[];
  },
  decay:(a,e)=>{
    const next=numeric(get(e.self,a.target))-numeric(expr(a.amount,e));
    return next<=numeric(expr(a.threshold,e))?[removeJoker(e,e.self)]:[change(e,a.target,next)];
  },
  countdown:(a,e)=>{
    const remaining=numeric(get(e.self,a.target));
    if(remaining<=1)return [change(e,a.target,numeric(expr(a.reset,e))),change(e,a.gain.target,numeric(get(e.self,a.gain.target))+numeric(expr(a.gain.amount,e)))];
    return [change(e,a.target,remaining-1)];
  },
  flag:(a,e)=>{
    e.ctx.mutableRun.poolFlags??={};e.ctx.mutableRun.poolFlags[a.key]=expr(a.value,e);
    return [event(e,'poolFlag',{target:a.key,value:expr(a.value,e),amount:a.value?1:0})];
  },
  copy:(a,e)=>{
    if(e.copyDepth>e.ctx.allJokers.length+1)return [];
    const index=e.ctx.allJokers.findIndex((j:RuntimeJoker)=>j.id===e.self.id);
    const other=a.who==='first'?e.ctx.allJokers[0]:e.ctx.allJokers[index+1];
    if(!other||other.id===e.self.id||!definitions.get(sourceOf(other))?.blueprintCompatible)return [];
    return evaluateOne(other,e.raw,e.ctx.allJokers,e.copyDepth+1,e.origin??e.self).map(result=>({...result,copiedFrom:result.copiedFrom??other.id,copiedFactRef:result.factRef,factRef:e.rule.factRefs[0]}));
  },
};
function evaluateOne(joker:RuntimeJoker,raw:JokerContext,all:RuntimeJoker[],copyDepth=0,origin?:RuntimeJoker):JokerEvent[] {
  if(!active(joker))return [];
  const definition=definitions.get(sourceOf(joker));if(!definition)return [];
  // 导入旧快照时使用明确的工厂初始状态补全字段，保留已经积累的状态。
  const initial=createJoker(definition.sourceKey,joker.id).state;joker.state={...initial,...joker.state};
  const hookAliases:Record<string,string>={removeCards:'cardsRemoved',settingBlind:'blindSet',endOfRound:'roundEnd',usingConsumable:'consume',sellingSelf:'sellSelf',sellingCard:'sell',endingShop:'shopEnd',rerollShop:'reroll',skippingBooster:'skipBooster',open_booster:'openBooster'};
  const ctx=normalizedContext(raw,joker,all);ctx.hook=hookAliases[raw.hook]??raw.hook;
  if(['card','held','repetition'].includes(ctx.hook)&&(ctx.card?.debuffed||ctx.card?.debuff))return [];
  const out:JokerEvent[]=[];
  for(let i=0;i<definition.rules.length;i++){
    const rule=definition.rules[i],triggers=Array.isArray(rule.trigger)?rule.trigger:[rule.trigger];
    if(!triggers.includes('*')&&!triggers.includes(ctx.hook))continue;
    if(copyDepth&&!rule.copyable)continue;
    const ev:Evaluation={self:joker,definition,ctx,raw,rule,ruleIndex:i,copyDepth,origin};
    if(!expr(rule.condition,ev))continue;
    for(const action of rule.actions){const handler=actions[action.op];if(!handler)throw new Error(`尚未实现的计策动作：${action.op}`);out.push(...handler(action,ev));}
  }
  return out;
}
export function evaluateJokers(jokers:any[],context:JokerContext):JokerEvent[] {
  const all=context.allJokers??jokers;
  return jokers.flatMap(joker=>evaluateOne(joker,context,all));
}
/** 被动规则是拥有的所有有效计策的聚合；同类数值累加，概率因子相乘。 */
export function getJokerModifiers(jokers:any[]):JokerModifiers {
  const result:JokerModifiers={pokerMinimum:5,straightMaxGap:1,scoreAllCards:false,allCardsAreFace:false,smearedSuits:false,allowDuplicates:false,freePlanets:false,handSize:0,handsPerRound:0,discardsPerRound:0,bankruptAt:0,freeRerolls:0,interestAmount:0,probabilityFactor:1,fourFingers:false,shortcut:false,splash:false,pareidolia:false,smeared:false,probabilityNormal:1};
  const events=evaluateJokers(jokers,{hook:'passive',allJokers:jokers,fullHand:[],scoringCards:[],heldCards:[],run:{}});
  for(const effect of events){
    if(effect.kind!=='rule')continue;
    const key=effect.target as keyof JokerModifiers,n=numeric(effect.amount);
    if(key==='probabilityFactor')result[key]*=n;
    else if(key==='pokerMinimum')result[key]=Math.min(result[key],n);
    else if(key==='straightMaxGap')result[key]=Math.max(result[key],n);
    else if(typeof result[key]==='boolean')(result as any)[key]=!!n||(result as any)[key];
    else (result as any)[key]+=n;
  }
  Object.assign(result,{fourFingers:result.pokerMinimum===4,shortcut:result.straightMaxGap===2,splash:result.scoreAllCards,pareidolia:result.allCardsAreFace,smeared:result.smearedSuits,probabilityNormal:result.probabilityFactor});
  return result;
}

export interface JokerRoundTargets {idolRank?:number;idolSuit?:Suit;mailRank?:number;ancientSuit?:Suit;castleSuit?:Suit;}
/** 目标抽样是共享回合规则，必须执行，即使当前未持有对应计策。 */
export function resetJokerRoundTargets(deck:Card[],ante:number,rng:any,previous:JokerRoundTargets={}):JokerRoundTargets {
  const spec=jokerEvidence.facts.find(f=>f.id==='joker.round-targets')!.value as any;
  const eligible=deck.filter(card=>enhancement(card)!==spec.excludeEnhancement);
  const ctx={rng},idol=choose(ctx,eligible,spec.idol.streamPrefix+ante),mail=choose(ctx,eligible,spec.mail.streamPrefix+ante);
  const ancientOptions=(spec.suits as Suit[]).filter(suit=>suit!==previous.ancientSuit);
  const ancient=choose(ctx,ancientOptions,spec.ancient.streamPrefix+ante);
  const castle=choose(ctx,eligible,spec.castle.streamPrefix+ante);
  return {idolRank:idol?.rank??previous.idolRank,idolSuit:(idol?.suit??spec.idol.fallbackSuit) as Suit,
    mailRank:mail?.rank??previous.mailRank,ancientSuit:ancient,castleSuit:(castle?.suit??spec.castle.fallbackSuit) as Suit};
}
