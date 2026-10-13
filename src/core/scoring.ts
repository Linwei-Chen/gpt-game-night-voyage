import { cardChips, type Card, type Edition } from './cards';
import { evaluatePoker, handValue, type HandType, type PokerRules } from './poker';
import evidence from '../../data/evidence-scoring.json';
export type ScoreHook = 'before' | 'repetition' | 'card' | 'held' | 'joker' | 'otherJoker' | 'destroyingCard' | 'removeCards' | 'after' | 'debuffedHand';
export interface JokerEvent {
  kind: string;
  amount?: number;
  jokerId?: string;
  cardId?: string;
  target?: any;
  value?: any;
  [key: string]: any;
}
export interface ScoreJoker {
  id: string;
  sourceKey?: string;
  state?: Record<string, any>;
  edition?: Edition;
  debuffed?: boolean;
  hook?: (context: JokerContext) => JokerEvent[] | JokerEvent | void;
  [key: string]: any;
}
export interface JokerContext {
  hook: ScoreHook;
  card?: Card;
  fullHand: Card[];
  scoringCards: Card[];
  heldCards: Card[];
  handType: HandType;
  handTypes: HandType[];
  allJokers: ScoreJoker[];
  repetition?: number;
  repetitionArea?: 'played' | 'held';
  hasHeldEffects?: boolean;
  otherJoker?: ScoreJoker;
  [key: string]: any;
}
export type RandomSource = ((key: string) => number) | {next: (key?: string) => number};
export interface ScoreInput {
  played: Card[];
  held: Card[];
  jokers?: ScoreJoker[];
  consumeables?: ScoreJoker[];
  heldConsumableEffects?: () => JokerEvent[];
  handLevels?: Partial<Record<HandType, number>>;
  rules?: PokerRules;
  context?: Record<string, any>;
  rng?: RandomSource;
  probabilityNormal?: number;
  evaluateJokers?: (jokers: any[], context: any) => JokerEvent[];
  modifyHand?: (value: {chips: number; mult: number; handType: HandType}) => {chips: number; mult: number};
  debuffHand?: boolean;
  chipsDollarCap?: boolean;
  balancedScoring?: boolean;
  finalScoringModifier?: (value: {chips:number; mult:number}) => {chips:number; mult:number};
}
export interface TraceEvent extends JokerEvent {
  stage: string;
  index: number;
  chipsBefore: number;
  multBefore: number;
  chipsAfter: number;
  multAfter: number;
  repetition?: number;
}
export interface ScoreResult {
  handType: HandType;
  chips: number;
  mult: number;
  score: number;
  money: number;
  trace: TraceEvent[];
  scoringCards: Card[];
  destroyedCards: Card[];
  events: JokerEvent[];
}
const fact = (id: string) => evidence.facts.find(f => f.id === id)!.value as any;
const amount = (id: string, key: string) => Number(fact(id)[key]);
/** 每个队列元素是下一步的逻辑操作。只有该步执行时才生成后续重触发与事件。 */
class ScoreQueue {
  private pending: (()=>void)[] = [];
  append(...tasks: (()=>void)[]) {this.pending.push(...tasks);}
  insert(...tasks: (()=>void)[]) {this.pending.unshift(...tasks);}
  drain() {while(this.pending.length) this.pending.shift()!();}
}
export function scoreHand(input: ScoreInput): ScoreResult {
  const jokers=input.jokers ?? [];
  const active=(key:string) => jokers.some(j=>!j.debuffed && j.sourceKey===key);
  const rules:PokerRules={fourFingers:active('j_four_fingers'),shortcut:active('j_shortcut'),smeared:active('j_smeared'),splash:active('j_splash'),pareidolia:active('j_pareidolia'),...input.rules};
  const poker=evaluatePoker(input.played,rules);
  const levels=input.handLevels ?? {};
  const runtime=input.context ?? {};
  const trace:TraceEvent[]=[], events:JokerEvent[]=[], destroyedCards:Card[]=[];
  let chips=0,mult=1,money=0,finalScore=0,finalChips=0,finalMult=1;
  const queue=new ScoreQueue();
  const random=(key:string):number => {
    const rng=input.rng ?? runtime.rng;
    if (!rng) throw new Error(`概率效果需要可复现随机源 RNG：${key}`);
    return typeof rng === 'function' ? rng(key) : rng.next(key);
  };
  const probability=()=> input.probabilityNormal ?? runtime.run?.probabilityNormal ?? runtime.probabilityNormal ?? 1;
  const cap=(value:number):number => input.chipsDollarCap ? Math.min(value,Math.max(0,runtime.run?.money ?? runtime.money ?? 0)) : value;
  const context=(hook:ScoreHook,extra:Record<string,any>={}):JokerContext => ({...runtime,hook,fullHand:input.played,scoringCards:poker.scoringCards,heldCards:input.held,handType:poker.type,handTypes:poker.allTypes,allJokers:jokers,rules,rng:input.rng ?? runtime.rng,...extra});
  const evaluate=(group:ScoreJoker[],ctx:JokerContext):JokerEvent[] => {
    if(input.evaluateJokers) return input.evaluateJokers(group,ctx) ?? [];
    return group.flatMap(j => {
      if(j.debuffed || !j.hook) return [];
      const result=j.hook(ctx);
      return result ? (Array.isArray(result)?result:[result]).map(e=>({...e,jokerId:e.jokerId??j.id})) : [];
    });
  };
  const apply=(event:JokerEvent,stage:string,extra:Record<string,any>={}):void => {
    const oldChips=chips,oldMult=mult;
    const delta=event.amount ?? 0;
    // 金钱在队列位置立即结算，后续按财富计算的小丑能看到新余额。
    switch(event.kind) {
      case 'chips': chips=cap(chips+delta);break;
      case 'mult': mult+=delta;break;
      case 'xmult': case 'xMult': mult*=delta;break;
      case 'money': case 'dollars':
        money+=delta;
        if(runtime.run && typeof runtime.run.money==='number') runtime.run.money+=delta;
        else if(typeof runtime.money==='number') runtime.money+=delta;
        break;
      case 'levelUp': case 'level': {
        const target=(event.target ?? poker.type) as HandType;
        levels[target]=Math.max(0,(levels[target]??1)+delta);
        break;
      }
      case 'swap': [chips,mult]=[cap(mult),chips];break;
    }
    events.push(event);
    trace.push({...event,...extra,stage,index:trace.length,chipsBefore:oldChips,multBefore:oldMult,chipsAfter:chips,multAfter:mult});
  };
  const applyAll=(list:JokerEvent[],stage:string,extra:Record<string,any>={}) => list.forEach(e=>apply(e,stage,extra));
  const editionEvents=(edition?:Edition|string):JokerEvent[] => {
    if(edition==='foil') return [{kind:'chips',amount:amount('card.foil','chips')}];
    if(edition==='holo'||edition==='holographic') return [{kind:'mult',amount:amount('card.holo','mult')}];
    if(edition==='polychrome') return [{kind:'xmult',amount:amount('card.polychrome','xmult')}];
    return [];
  };
  const basePlayedEffects=(card:Card):JokerEvent[] => {
    if(card.debuffed) return [];
    const out:JokerEvent[]=[{kind:'chips',amount:cardChips(card),cardId:card.id}];
    card.custom ??= {};
    card.custom.luckyTrigger=false;
    if(card.enhancement==='mult') out.push({kind:'mult',amount:amount('card.mult','mult'),cardId:card.id});
    if(card.enhancement==='lucky'&&random('lucky_mult')<probability()/5) {
      card.custom.luckyTrigger=true;out.push({kind:'mult',amount:amount('card.lucky','mult'),cardId:card.id});
    }
    if(card.seal==='gold') out.push({kind:'money',amount:fact('card.goldSeal'),cardId:card.id});
    if(card.enhancement==='lucky'&&random('lucky_money')<probability()/15) {
      card.custom.luckyTrigger=true;out.push({kind:'money',amount:amount('card.lucky','money'),cardId:card.id});
    }
    if(card.enhancement==='glass') out.push({kind:'xmult',amount:amount('card.glass','xmult'),cardId:card.id});
    out.push(...editionEvents(card.edition).map(e=>({...e,cardId:card.id,edition:true})));
    return out;
  };
  const baseHeldEffects=(card:Card):JokerEvent[] => card.enhancement==='steel'&&!card.debuffed ? [{kind:'xmult',amount:amount('card.steel','heldXmult'),cardId:card.id}] : [];
  const repeats=(list:JokerEvent[]):number => list.filter(e=>e.kind==='retrigger').reduce((n,e)=>{
    if(!Number.isInteger(e.amount)||e.amount!<0) throw new Error('重触发次数必须为非负整数');
    return n+e.amount!;
  },0);
  const scoreCard=(card:Card,repetition:number):void => {
    const own=basePlayedEffects(card);
    const individual=evaluate(jokers,context('card',{card,repetition}));
    // individual 的状态变更发生于卡值捕获后；例如 Hiker 的永久筹码下次触发才生效。
    if(card.custom) card.custom.luckyTrigger=false;
    applyAll(own,'card',{cardId:card.id,repetition});
    applyAll(individual,'card',{cardId:card.id,repetition});
  };
  const schedulePlayed=(card:Card):void => {
    if(card.debuffed) {apply({kind:'debuff',cardId:card.id},'card');return;}
    const repetitionEffects=evaluate(jokers,context('repetition',{card,repetitionArea:'played'}));
    const total=1+(card.seal==='red'?Number(fact('card.redSeal')):0)+repeats(repetitionEffects);
    queue.insert(...Array.from({length:total},(_,repetition)=>()=>scoreCard(card,repetition)));
  };
  const scoreHeld=(card:Card,repetition:number,precomputed?:JokerEvent[]):void => {
    const own=baseHeldEffects(card),individual=precomputed ?? evaluate(jokers,context('held',{card,repetition}));
    applyAll(own,'held',{cardId:card.id,repetition});applyAll(individual,'held',{cardId:card.id,repetition});
  };
  const scheduleHeld=(card:Card):void => {
    const own=baseHeldEffects(card),individual=evaluate(jokers,context('held',{card,repetition:0}));
    const hasHeldEffects=own.length+individual.length>0;
    const repetitionEffects=evaluate(jokers,context('repetition',{card,repetitionArea:'held',hasHeldEffects}));
    const total=1+(hasHeldEffects&&!card.debuffed&&card.seal==='red'?Number(fact('card.redSeal')):0)+repeats(repetitionEffects);
    queue.insert(...Array.from({length:total},(_,repetition)=>()=>scoreHeld(card,repetition,repetition===0?individual:undefined)));
  };
  const scoreJoker=(joker:ScoreJoker):void => {
    const ed=joker.debuffed?[]:editionEvents(joker.edition).map(e=>({...e,jokerId:joker.id,edition:true}));
    applyAll(ed.filter(e=>e.kind!=='xmult'),'joker');
    applyAll(evaluate([joker],context('joker',{joker})),'joker');
    applyAll(evaluate(jokers,context('otherJoker',{otherJoker:joker})),'otherJoker');
    applyAll(ed.filter(e=>e.kind==='xmult'),'joker');
  };
  const destroyCards=():void => {
    for(const card of poker.scoringCards) {
      const result=evaluate(jokers,context('destroyingCard',{card}));
      const destroyed=result.some(e=>e.kind==='destroy'||e.kind==='destroyCard');
      const broken=card.enhancement==='glass'&&!card.debuffed&&random('glass')<probability()/amount('card.glass','breakDenominator');
      if(destroyed||broken) {
        card.custom ??= {};
        if(card.enhancement==='glass') card.custom.shattered=true; else card.custom.destroyed=true;
        destroyedCards.push(card);
        apply({kind:'destroyCard',cardId:card.id,target:card,glass:card.enhancement==='glass'},'destroy');
        // destroyingCard 的规则可同时移除纸牌并生成道具；保留其余事件供整局状态机处理。
        applyAll(result.filter(e=>e.kind!=='destroy'&&e.kind!=='destroyCard'),'destroy',{cardId:card.id});
      }
    }
    applyAll(evaluate(jokers,context('removeCards',{removedCards:destroyedCards,removed:destroyedCards})),'destroy');
  };
  // 独立阶段队列；各阶段只声明自己的任务，逐卡任务运行时再插入重触发。
  queue.append(()=> {
    if(input.debuffHand) {chips=0;mult=0;applyAll(evaluate(jokers,context('debuffedHand')),'before');return;}
    applyAll(evaluate(jokers,context('before')),'before');
    const value=handValue(poker.type,levels[poker.type]??1);
    chips=cap(value.chips);mult=value.mult;
    trace.push({kind:'base',stage:'base',index:trace.length,chipsBefore:0,multBefore:0,chipsAfter:chips,multAfter:mult});
    if(input.modifyHand) {const modified=input.modifyHand({chips,mult,handType:poker.type});chips=cap(modified.chips);mult=modified.mult;}
  });
  if(!input.debuffHand) {
    queue.append(...poker.scoringCards.map(card=>()=>schedulePlayed(card)));
    queue.append(...input.held.map(card=>()=>scheduleHeld(card)));
    queue.append(...[...jokers,...(input.consumeables??[])].map(joker=>()=>scoreJoker(joker)));
    queue.append(()=>applyAll(input.heldConsumableEffects?.()??[],'heldConsumable'));
    queue.append(()=> {
      // F:scoring.plasma；最终平衡先取整，再进入销毁与结算。
      if(input.balancedScoring) {const balanced=Math.floor((chips+mult)/2);chips=cap(balanced);mult=balanced;apply({kind:'balanced',amount:balanced},'finalScoring');}
      if(input.finalScoringModifier) {const adjusted=input.finalScoringModifier({chips,mult});chips=cap(adjusted.chips);mult=adjusted.mult;}
    });
    queue.append(destroyCards);
  }
  queue.append(()=>{finalChips=chips;finalMult=mult;finalScore=Math.floor(chips*mult);apply({kind:'score',amount:finalScore},'finalize');});
  queue.append(()=>applyAll(evaluate(jokers,context('after')),'after'));
  queue.drain();
  return {handType:poker.type,chips:finalChips,mult:finalMult,score:finalScore,money,trace,scoringCards:poker.scoringCards,destroyedCards,events};
}
