import raw from '../../data/systems-verified.json';
import jokerData from '../../data/jokers.json';
import { createJoker as createRuntimeJoker } from './jokers';
import { makeDeck, cardIsSuit, isFace, type Card, type Suit, type Enhancement } from '../core/cards';
import { computePurchasePrice, computeSellValue, pickEdition, eligibleBosses } from '../core/economy-runtime';

export interface SystemEffect { trigger: string; condition: Record<string, any>; action: string; [key: string]: any }
export interface SystemDefinition { sourceKey: string; name: string; kind: string; order: number; description: string; sourceRefs: string[]; effects: SystemEffect[]; config: Record<string, any>; implementation: string; cost?: number; dollars?: number; mult?: number; weight?: number; packKind?: string; size?: number; choose?: number; handType?: string; hidden?: boolean; requires?: string | string[]; unlocked?: boolean; boss?: { min: number; max: number; showdown?: boolean }; [key: string]: any }
export interface SystemsContent { version: { game: string; commit: string; sourceConfidence: string }; starting: Record<string, number>; shop: Record<string, any>; economy: Record<string, any>; anteCurves: Record<string, any>; consumables: SystemDefinition[]; vouchers: SystemDefinition[]; decks: SystemDefinition[]; blinds: SystemDefinition[]; stakes: SystemDefinition[]; tags: SystemDefinition[]; enhancements: SystemDefinition[]; seals: SystemDefinition[]; editions: SystemDefinition[]; boosters: SystemDefinition[] }
export const systemsContent = raw as unknown as SystemsContent;
export interface SystemsRng { next(key?: string): number; int(min: number, max: number, key?: string): number; pick<T>(items: T[], key?: string): T; shuffle<T>(items: T[], key?: string): T[] }
export interface SystemJoker { id: string; sourceKey: string; state: Record<string, any>; rarity?: number; cost?: number; sellValue?: number; edition?: string; eternal?: boolean; debuffed?: boolean; rental?: boolean; perishable?: number; [key: string]: any }
export interface SystemEvent { type: string; sourceKey?: string; cardIds?: string[]; [key: string]: any }
export interface SystemRunState {
  dollars?: number; ante?: number; blindAnte?: number; stake?: number; scaling?: number; anteScaling?: number;
  handSize?: number; hands?: number; discards?: number; jokerSlots?: number; consumableSlots?: number;
  deck?: Card[]; handCards?: Card[]; jokers?: SystemJoker[]; consumables?: string[];
  handLevels?: Record<string, number>; handPlayed?: Record<string, number>; vouchers?: string[];
  shopSlots?: number; jokerRate?: number; tarotRate?: number; planetRate?: number; spectralRate?: number; playingCardRate?: number;
  rerollBaseCost?: number; temporaryRerollBase?: number; discountPercent?: number; editionRate?: number; interestCap?: number;
  noInterest?: boolean; moneyPerHand?: number; moneyPerDiscard?: number; lastTarotPlanet?: string;
  blindKey?: string; blindDisabled?: boolean; blindState?: Record<string, any>; playedThisAnte?: string[];
  mostPlayedHand?: string; handsPlayed?: number; discardsUsed?: number; unusedDiscards?: number; skips?: number;
  shopCards?: SystemOffer[]; freePacks?: string[]; tags?: SystemTag[]; pendingTags?: string[];
  bannedKeys?: string[]; unlockedKeys?: string[]; unlockAll?: boolean; poolFlags?: Record<string, boolean>;
  bossUses?: Record<string, number>; bossesUsed?: Record<string, number>; [key: string]: any;
}
export interface SystemOffer { id: string; kind: string; sourceKey?: string; cost?: number; sellValue?: number; edition?: string; card?: Card; joker?: SystemJoker; [key: string]: any }
export interface SystemTag { id: string; sourceKey: string; orbitalHand?: string; [key: string]: any }
export type NormalizedSystemsState = SystemRunState & { dollars: number; ante: number; blindAnte: number; stake: number; handSize: number; hands: number; discards: number; jokerSlots: number; consumableSlots: number; deck: Card[]; handCards: Card[]; jokers: SystemJoker[]; consumables: string[]; handLevels: Record<string, number>; vouchers: string[]; blindState: Record<string, any>; shopCards: SystemOffer[]; tags: SystemTag[]; pendingTags: string[]; freePacks: string[]; playedThisAnte: string[] };
export interface SystemResult { state: NormalizedSystemsState; events: SystemEvent[]; applied: boolean; reason?: string }
export interface BlindHandResult extends SystemResult { debuffedHand: boolean; blocked: boolean; baseChipsFactor: number; baseMultFactor: number; baseChipsMinimum: number; baseMultMinimum: number; baseRoundOffset: number }
const handTypes = ['highCard','pair','twoPair','threeOfAKind','straight','flush','fullHouse','fourOfAKind','straightFlush','fiveOfAKind','flushHouse','flushFive'];
const noRandom: SystemsRng = { next: () => .5, int: (min) => min, pick: (xs) => xs[0], shuffle: (xs) => [...xs] };
const clone = <T>(value: T): T => structuredClone(value);
/** card.lua:526-532：短期伙伴寿命耗尽后，所有解除静默请求均保持永久静默。 */
function setJokerDebuff(joker: SystemJoker, shouldDebuff: boolean): void {
  joker.debuffed = (joker.perishable !== undefined && joker.perishable <= systemsContent.economy.perishableExpiresAt) || shouldDebuff;
}


/** 所有公共入口接受部分状态并返回独立副本；未提供的资源由已溯源的初始值填充。 */
export function normalizeSystemsState(input: SystemRunState = {}): NormalizedSystemsState {
  const start = systemsContent.starting, shop = systemsContent.shop, economy = systemsContent.economy;
  const defaults = { ...start, ante: 1, blindAnte: input.ante ?? 1, stake: 1, scaling: 1, deck: makeDeck(), handCards: [], jokers: [], consumables: [], vouchers: [],
    handLevels: Object.fromEntries(handTypes.map(h=>[h,1])), shopSlots: shop.jokerSlots, jokerRate: shop.weights.joker, tarotRate: shop.weights.tarot, planetRate: shop.weights.planet, spectralRate: shop.weights.spectral, playingCardRate: shop.weights.playingCard,
    rerollBaseCost: start.rerollBaseCost, interestCap: economy.interestCap, editionRate: shop.editionRate, discountPercent: 0, noInterest: false, moneyPerHand: economy.moneyPerHand, moneyPerDiscard: economy.moneyPerDiscard,
    noSmallBlindReward: false, eternalsEnabled: false, perishablesEnabled: false, rentalsEnabled: false, ectoMinus: 1, handsPlayed: 0, discardsUsed: 0, unusedDiscards: 0, skips: 0, blindState: {}, shopCards: [], tags: [], pendingTags: [], freePacks: [], playedThisAnte: [], serial: 0 };
  return { ...clone(defaults), ...clone(input), handLevels: { ...defaults.handLevels, ...input.handLevels } } as NormalizedSystemsState;
}
function duplicateAllowed(state: NormalizedSystemsState): boolean { return state.jokers.some(j=>j.sourceKey === 'j_ring_master' && !j.debuffed); }
/** card.lua:349-353：货架和包内尚未购入的卡同样占用候选键。 */
function occupiedKeys(state: NormalizedSystemsState): Set<string> { return new Set([...state.jokers.map(j=>j.sourceKey),...state.consumables,...state.shopCards.flatMap(o=>o.sourceKey?[o.sourceKey]:[]),...(state.inFlightKeys??[])]); }
function uid(state: NormalizedSystemsState, prefix: string): string { state.serial = (state.serial ?? 0) + 1; return `${prefix}-${state.ante}-${state.serial}`; }
function replaceCards(state: NormalizedSystemsState, replacements: Card[]): void {
  const map = new Map(replacements.map(c=>[c.id,c]));
  state.handCards = state.handCards.map(c=>map.get(c.id) ?? c);
  state.deck = state.deck.map(c=>map.get(c.id) ?? c);
}
function removeCards(ctx: Context, cards: Card[]): void {
  const ids = new Set(cards.map(c=>c.id));
  ctx.state.handCards = ctx.state.handCards.filter(c=>!ids.has(c.id));ctx.state.deck = ctx.state.deck.filter(c=>!ids.has(c.id));
  ctx.events.push({ type: 'cardsRemoved', sourceKey: ctx.item.sourceKey, cardIds: [...ids], cards: clone(cards) });
}
function editionOnJoker(state: NormalizedSystemsState, joker: SystemJoker, edition?: string): void {
  state.jokerSlots += Number(edition === 'negative') - Number(joker.edition === 'negative');
  joker.edition = edition;
  const definition = jokerData.find(c=>c.sourceKey === joker.sourceKey);
  joker.cost = computePurchasePrice(definition?.cost ?? joker.cost ?? 0, { edition, discountPercent: state.discountPercent, rental: joker.rental });
  joker.sellValue = computeSellValue(joker.cost, joker.state.extraValue ?? joker.state.extra_value ?? 0);
}
function pruneJokers(ctx: Context, keep: SystemJoker): void {
  const removed = ctx.state.jokers.filter(j=>j.id !== keep.id && !j.eternal);
  ctx.state.jokerSlots -= removed.filter(j=>j.edition === 'negative').length;
  ctx.state.jokers = ctx.state.jokers.filter(j=>j.id === keep.id || j.eternal);
  ctx.events.push({ type: 'jokersRemoved', sourceKey: ctx.item.sourceKey, jokerIds: removed.map(j=>j.id), jokers: removed });
}
export function eligibleConsumables(kind: string, input: SystemRunState = {}, soulable = false): SystemDefinition[] {
  const state = normalizeSystemsState(input);
  const occupied=occupiedKeys(state),showman=duplicateAllowed(state);
  return systemsContent.consumables.filter(c=>c.kind === kind && (!c.hidden || soulable) && !state.bannedKeys?.includes(c.sourceKey) && (!c.config.softlock || (state.handPlayed?.[c.handType!] ?? 0) > 0) && (!occupied.has(c.sourceKey) || showman));
}
function pickConsumable(kind: string, state: NormalizedSystemsState, rng: SystemsRng, key: string, soulable = false, forcedKey?: string): string {
  if (forcedKey && !state.bannedKeys?.includes(forcedKey)) return forcedKey;
  let hidden: string | undefined;
  const showman = duplicateAllowed(state), occupied=occupiedKeys(state);
  if (soulable && (kind === 'tarot' || kind === 'spectral') && !state.bannedKeys?.includes('c_soul') && (!occupied.has('c_soul') || showman) && rng.next(`soul_${kind}${state.ante}`) > systemsContent.shop.packRules.hiddenReplacementThreshold) hidden = 'c_soul';
  if (soulable && (kind === 'planet' || kind === 'spectral') && !state.bannedKeys?.includes('c_black_hole') && (!occupied.has('c_black_hole') || showman) && rng.next(`soul_${kind}${state.ante}`) > systemsContent.shop.packRules.hiddenReplacementThreshold) hidden = 'c_black_hole';
  if (hidden) return hidden;
  const pool = eligibleConsumables(kind, state);
  return pool.length ? rng.pick(pool,key).sourceKey : systemsContent.shop.poolRules.fallback[kind];
}
export function eligibleVouchers(input: SystemRunState = {}): SystemDefinition[] {
  const s = normalizeSystemsState(input);
  return systemsContent.vouchers.filter(c=>!s.vouchers.includes(c.sourceKey) && !s.shopCards.some(x=>x.sourceKey === c.sourceKey) && !s.bannedKeys?.includes(c.sourceKey) && (s.unlockAll !== false || c.unlocked !== false || s.unlockedKeys?.includes(c.sourceKey)) && (!Array.isArray(c.requires) || c.requires.every(k=>s.vouchers.includes(k))));
}
export function eligibleJokerDefinitions(input: SystemRunState = {}, rarity?: number) {
  const s = normalizeSystemsState(input);
  const showman = duplicateAllowed(s),occupied=occupiedKeys(s);
  return jokerData.filter(c=>(rarity === undefined || c.rarity === rarity) && !s.bannedKeys?.includes(c.sourceKey) && (showman || !occupied.has(c.sourceKey)) && (s.unlockAll !== false || c.unlockedInitially || c.rarity === 4 || s.unlockedKeys?.includes(c.sourceKey)) && (!c.enhancementGate || s.deck.some(card=>`m_${card.enhancement}` === c.enhancementGate)) && (!c.requiredPoolFlag || s.poolFlags?.[c.requiredPoolFlag]) && (!c.excludedPoolFlag || !s.poolFlags?.[c.excludedPoolFlag]));
}
export function createSystemJoker(sourceKey: string, input: SystemRunState = {}, id?: string, rng?: SystemsRng): SystemJoker {
  const s = normalizeSystemsState(input);const c = jokerData.find(j=>j.sourceKey === sourceKey);
  if (!c) throw new Error(`未知伙伴 ${sourceKey}`);
  return createRuntimeJoker(sourceKey,id??uid(s,'partner'),{run:{handsPlayed:s.handsPlayed??0,deckCards:s.deck,handUses:s.handPlayed??{},...s.jokerRun},rng}) as SystemJoker;
}
function randomJoker(ctx: Context, rarity?: number, owned = true, area?: 'shop' | 'pack'): SystemJoker {
  const t = systemsContent.shop.rarityThresholds;
  if (rarity === undefined) { const roll = ctx.rng.next(`rarity${ctx.state.ante}`);rarity = roll > t.rare ? 3 : roll > t.uncommon ? 2 : 1; }
  const pool = eligibleJokerDefinitions({...ctx.state,inFlightKeys:ctx.reservedKeys}, rarity);
  const definition = pool.length ? ctx.rng.pick(pool, `${ctx.item.sourceKey}:joker`) : jokerData.find(x=>x.sourceKey === 'j_joker')!;
  const joker = createSystemJoker(definition.sourceKey,ctx.state,uid(ctx.state,'partner'),ctx.rng);
  // common_events.lua:2137-2147：商店与包内使用不同随机流，短期与永恒共用一次判定。
  if(area){
    const rules=systemsContent.shop.stickers,poll=ctx.rng.next(`${area==='pack'?'packetper':'etperpoll'}${ctx.state.ante}`);
    if(ctx.state.eternalsEnabled&&poll>rules.eternalThreshold&&definition.eternalCompatible)joker.eternal=true;
    else if(ctx.state.perishablesEnabled&&poll>rules.perishableLow&&poll<=rules.perishableHigh&&definition.perishableCompatible)joker.perishable=systemsContent.economy.perishableRounds;
    if(ctx.state.rentalsEnabled&&ctx.rng.next(`${area==='pack'?'packssjr':'ssjr'}${ctx.state.ante}`)>rules.rentalThreshold)joker.rental=true;
  }
  ctx.reservedKeys.push(definition.sourceKey);

  joker.edition = pickEdition(ctx.rng.next(`edi${ctx.item.sourceKey}${ctx.state.ante}`), {rate:ctx.state.editionRate});
  if (owned && joker.edition === 'negative') ctx.state.jokerSlots++;
  joker.cost = computePurchasePrice(definition.cost,{edition:joker.edition,discountPercent:ctx.state.discountPercent,rental:joker.rental,inflation:ctx.state.inflation});joker.sellValue = computeSellValue(joker.cost);
  return joker;
}
interface Context { reservedKeys: string[]; state: NormalizedSystemsState; rng: SystemsRng; selected: Card[]; events: SystemEvent[]; item: SystemDefinition; playedCards: Card[]; handType?: string; tag?: TagContext; debuffedHand: boolean; baseChipsFactor: number; baseMultFactor: number; baseChipsMinimum: number; baseMultMinimum: number; baseRoundOffset: number; trigger: string }
type Handler = (context: Context, effect: SystemEffect) => void;
function newContext(item: SystemDefinition, input: SystemRunState, selectedIds: string[], rng: SystemsRng, trigger: string): Context {
  const state = normalizeSystemsState(input);
  return {item,state,rng,trigger,reservedKeys:[],selected:selectedIds.map(id=>state.handCards.find(c=>c.id === id)).filter((x):x is Card=>!!x),events:[],playedCards:[],debuffedHand:false,baseChipsFactor:1,baseMultFactor:1,baseChipsMinimum:0,baseMultMinimum:1,baseRoundOffset:0};
}
function conditionMatches(condition: Record<string,any>, ctx: Context): boolean {
  const s=ctx.state;
  return !((condition.selectedMin && ctx.selected.length < condition.selectedMin) || (condition.selectedMax && ctx.selected.length > condition.selectedMax) || (condition.handMin && s.handCards.length < condition.handMin) || (condition.freeJokerSlot && s.jokers.length >= s.jokerSlots) || (condition.editionlessJoker && !s.jokers.some(j=>!j.edition)) || (condition.hasJoker && !s.jokers.length) || (condition.jokerSlotsMin && s.jokerSlots < condition.jokerSlotsMin) || (condition.selectedEditionless && ctx.selected.some(c=>c.edition)) || (condition.mostPlayedHand && ctx.handType !== s.mostPlayedHand) || (condition.fishPrepped && !s.blindState.fishPrepped) || (condition.heartPrepped && s.blindState.heartPrepped === false) || (condition.firstDraw && ((s.roundHandsPlayed ?? s.blindState.handsPlayed ?? s.handsPlayed ?? 0)>0 || (s.roundDiscardsUsed ?? s.blindState.discardsUsed ?? s.discardsUsed ?? 0)>0)) || (condition.bossDefeated && !ctx.tag?.bossDefeated) || (condition.notDoubleTag && (!ctx.tag?.tagKey || ctx.tag.tagKey === 'tag_double')));
}

/** 独立编写的统一动作注册器。数据决定时机与条件，动作函数只处理一种变换。 */
export const systemEffectHandlers: Record<string, Handler> = {
  none: ()=>{}, requirementMultiplier: ()=>{},
  set: (c,a)=>{const field=c.trigger==='start'&&c.item.kind==='boss'&&['hands','discards'].includes(a.field)&&c.state[`${a.field}Left`]!==undefined?`${a.field}Left`:a.field;c.state[field]=a.value;}, add: (c,a)=>{c.state[a.field]=(c.state[a.field]??0)+a.value;},
  selectedSet: (c,a)=>replaceCards(c.state,c.selected.map(card=>({...card,[a.field]:a.value}))),
  raiseRanks: (c,a)=>replaceCards(c.state,c.selected.map(card=>({...card,rank:2+(card.rank-2+a.amount)%13}))),
  copyRightmost: c=>{const ordered=[...c.selected].sort((a,b)=>c.state.handCards.findIndex(x=>x.id===a.id)-c.state.handCards.findIndex(x=>x.id===b.id));const template=ordered.at(-1)!;replaceCards(c.state,ordered.map(card=>({...clone(template),id:card.id,sortId:card.sortId})));},
  removeSelected: c=>removeCards(c,c.selected),
  removeRandom: (c,a)=>removeCards(c,c.rng.shuffle([...c.state.handCards].sort((a,b)=>(a.sortId??0)-(b.sortId??0)),a.count===5?'immolate':'random_destroy').slice(0,a.count)),
  upgradeHand: (c,a)=>{c.state.handLevels[a.hand]=(c.state.handLevels[a.hand]??1)+a.amount;c.events.push({type:'handLevelChanged',hand:a.hand,amount:a.amount});},
  upgradeAllHands: (c,a)=>{for(const h of handTypes)c.state.handLevels[h]+=a.amount;c.events.push({type:'allHandLevelsChanged',amount:a.amount});},
  copyLastConsumable: c=>{c.state.consumables.push(c.state.lastTarotPlanet!);},
  addConsumables: (c,a)=>{c.state.consumables.push(...a.keys);},
  spawnConsumables: (c,a)=>{for(let n=0;n<a.count&&c.state.consumables.length<c.state.consumableSlots;n++)c.state.consumables.push(pickConsumable(a.kind,c.state,c.rng,`${c.item.sourceKey}:consumable`));},
  gainCappedCash: (c,a)=>{c.state.dollars+=Math.max(0,Math.min(c.state.dollars,a.cap));},
  gainJokerSellTotal: (c,a)=>{c.state.dollars+=Math.min(a.cap,c.state.jokers.reduce((v,j)=>v+(j.sellValue??computeSellValue(j.cost??0)),0));},
  selectedEdition: (c,a)=>{const edition=a.edition==='random'?pickEdition(c.rng.next(c.item.sourceKey),{guaranteed:true,noNegative:true}):a.edition;replaceCards(c.state,c.selected.map(card=>({...card,edition})));},
  randomJokerEdition: (c,a)=>{if(a.probabilityDenominator && c.rng.next(c.item.sourceKey)>= (c.state.probabilityNormal??1)/a.probabilityDenominator){c.events.push({type:'probabilityMiss',sourceKey:c.item.sourceKey});return;}const joker=c.rng.pick(c.state.jokers.filter(j=>!j.edition),c.item.sourceKey);const edition=a.edition==='random'?pickEdition(c.rng.next(`${c.item.sourceKey}:edition`),{guaranteed:true,noNegative:true}):a.edition;editionOnJoker(c.state,joker,edition);if(a.pruneOthers)pruneJokers(c,joker);c.events.push({type:'jokerEditionChanged',jokerId:joker.id,edition});},
  reduceHandEscalating: c=>{c.state.handSize-=c.state.ectoMinus;c.state.ectoMinus++;},
  spawnPlayingCards: (c,a)=>{const enhancements=systemsContent.enhancements.filter(x=>!a.excludeEnhancements?.includes(x.sourceKey.slice(2)));const cards:Card[]=[];for(let n=0;n<a.count;n++){const card:Card={id:uid(c.state,'paper'),rank:c.rng.pick(a.ranks,`${c.item.sourceKey}:rank`),suit:c.rng.pick(['spades','hearts','diamonds','clubs'] as Suit[],`${c.item.sourceKey}:suit`)};if(a.enhanced)card.enhancement=c.rng.pick(enhancements,'spe_card').sourceKey.slice(2) as Enhancement;cards.push(card);}c.state.deck.push(...cards);c.state.handCards.push(...cards);c.events.push({type:'cardsAdded',sourceKey:c.item.sourceKey,cardIds:cards.map(x=>x.id),cards});},
  cloneSelectedCards: (c,a)=>{const cards=Array.from({length:a.count},()=>({...clone(c.selected[0]),id:uid(c.state,'copy')}));c.state.deck.push(...cards);c.state.handCards.push(...cards);c.events.push({type:'cardsAdded',sourceKey:c.item.sourceKey,cardIds:cards.map(x=>x.id),cards});},
  randomizeAllSuit: c=>{const suit=c.rng.pick(['spades','hearts','diamonds','clubs'] as Suit[],'sigil');replaceCards(c.state,c.state.handCards.map(card=>({...card,suit})));},
  randomizeAllRank: c=>{const rank=c.rng.int(2,14,'ouija');replaceCards(c.state,c.state.handCards.map(card=>({...card,rank})));},
  spawnJoker: (c,a)=>{for(let n=0;n<(a.count??1)&&c.state.jokers.length<c.state.jokerSlots;n++){const joker=randomJoker(c,a.rarity==='random'?undefined:a.rarity);c.state.jokers.push(joker);c.events.push({type:'jokerAdded',joker});}},
  cloneOneJokerAndPrune: (c,a)=>{const joker=c.rng.pick(c.state.jokers,'ankh_choice');pruneJokers(c,joker);const copy={...clone(joker),id:uid(c.state,'partner-copy')};if(a.stripNegative&&copy.edition==='negative'){copy.edition=undefined;const d=jokerData.find(x=>x.sourceKey===copy.sourceKey)!;copy.cost=computePurchasePrice(d.cost,{discountPercent:c.state.discountPercent});copy.sellValue=computeSellValue(copy.cost,copy.state.extraValue??0);}c.state.jokers.push(copy);c.events.push({type:'jokerAdded',joker:copy});},
  redeemVoucher: (c,a)=>{const r=applyVoucher(a.sourceKey,c.state);c.state=r.state;c.events.push(...r.events);},
  removeFaces: c=>{c.state.deck=c.state.deck.filter(card=>!isFace(card,{bypassDebuff:true}));},
  mapSuits: (c,a)=>{c.state.deck=c.state.deck.map(card=>({...card,suit:a.mapping[card.suit]??card.suit}));},
  randomizeDeck: c=>{c.state.deck=c.state.deck.map(card=>({...card,rank:c.rng.int(2,14,'erratic:rank'),suit:c.rng.pick(['spades','hearts','diamonds','clubs'] as Suit[],'erratic:suit')}));c.state.randomizedDeck=true;},
  addTag: (c,a)=>{c.state.tags.push({id:uid(c.state,'tag'),sourceKey:a.sourceKey});},
  balanceChipsMult: c=>{c.events.push({type:'balanceScore',formula:'floor((chips+mult)/2)^2'});},
  zeroCash: c=>{c.state.dollars=0;},
  chargePlayedCards: (c,a)=>{c.state.dollars-=c.playedCards.length*a.perCard;},
  discardRandomHand: (c,a)=>{const played=new Set(c.playedCards.map(x=>x.id));const cards=c.rng.shuffle(c.state.handCards.filter(x=>!played.has(x.id)),'hook').slice(0,a.count);const ids=new Set(cards.map(x=>x.id));c.state.handCards=c.state.handCards.filter(x=>!ids.has(x.id));c.state.blindState.forcedDiscardIds=[...ids];c.events.push({type:'cardsDiscarded',sourceKey:c.item.sourceKey,cards,cardIds:[...ids],forced:true});},
  requireCardCount: (c,a)=>{c.debuffedHand ||= c.playedCards.length<a.minimum;},
  requireUnusedHand: c=>{const seen=c.state.blindState.seenHands??[];c.debuffedHand ||= seen.includes(c.handType);if(!c.debuffedHand)c.state.blindState.seenHands=[...seen,c.handType];},
  requireSameHand: c=>{c.debuffedHand ||= !!c.state.blindState.onlyHand&&c.state.blindState.onlyHand!==c.handType;if(!c.debuffedHand)c.state.blindState.onlyHand=c.handType;},
  downgradeHand: (c,a)=>{c.state.handLevels[c.handType!]=Math.max(a.minLevel,(c.state.handLevels[c.handType!]??1)-a.amount);},
  halveBase: (c,a)=>{c.baseChipsFactor=.5;c.baseMultFactor=.5;c.baseChipsMinimum=a.chipMinimum;c.baseMultMinimum=a.multMinimum;c.baseRoundOffset=a.roundOffset;},
  prepareFish: c=>{c.state.blindState.fishPrepped=true;},prepareHeart: c=>{c.state.blindState.heartPrepped=true;},
  hideDrawn: c=>{replaceCards(c.state,c.selected.map(card=>({...card,custom:{...card.custom,faceDown:true}})));},
  hideFaces: c=>{replaceCards(c.state,c.selected.map(card=>({...card,custom:{...card.custom,faceDown:isFace(card,{pareidolia:c.state.pareidolia,bypassDebuff:true})}})));},
  randomHide: (c,a)=>{replaceCards(c.state,c.selected.map(card=>({...card,custom:{...card.custom,faceDown:c.rng.next('wheel')<(c.state.probabilityNormal??1)/a.probabilityDenominator}})));},
  forceSelection: c=>{if(!c.state.handCards.some(x=>x.id===c.state.forcedSelection)&&c.state.handCards.length)c.state.forcedSelection=c.rng.pick(c.state.handCards,'cerulean_bell').id;},
  debuffRandomJoker: c=>{const pool=c.state.jokers.filter(j=>!j.debuffed||c.state.jokers.length<2);for(const j of c.state.jokers)setJokerDebuff(j,false);if(pool.length){const joker=c.rng.pick(pool,'crimson_heart');setJokerDebuff(joker,true);c.state.blindState.debuffedJoker=joker.id;}else c.state.blindState.debuffedJoker=undefined;},
  hideShuffleJokers: (c,a)=>{for(const j of c.state.jokers)j.state={...j.state,faceDown:true};for(let n=0;n<a.shuffleCount;n++)c.state.jokers=c.rng.shuffle(c.state.jokers,'aajk');},
  limitDraw: (c,a)=>{c.state.blindState.drawCount=a.count;},
  disableBlind: c=>{c.state.blindDisabled=true;},
  debuffSuit: ()=>{},debuffFaces: ()=>{},debuffPlayedThisAnte: ()=>{},debuffAll: ()=>{},
  gainFromCounter: (c,a)=>{c.state.dollars+=(c.state[a.field]??0)*a.multiplier;},
  upgradeOrbital: (c,a)=>{const hand=c.tag?.orbitalHand;if(hand)c.state.handLevels[hand]+=a.amount;},
  freePack: (c,a)=>{const key=a.sourceKeys?c.rng.pick(a.sourceKeys,`${c.item.sourceKey}:variant`):a.sourceKey;c.state.freePacks.push(key);c.events.push({type:'openFreePack',sourceKey:key});},
  extraVoucher: c=>{const pool=eligibleVouchers(c.state);const item=pool.length?c.rng.pick(pool,'voucher_tag'):systemsContent.vouchers.find(x=>x.sourceKey==='v_blank')!;c.state.shopCards.push({id:uid(c.state,'offer'),kind:'voucher',sourceKey:item.sourceKey,cost:computePurchasePrice(item.cost??10,{discountPercent:c.state.discountPercent})});},
  rerollBoss: c=>{const pool=eligibleBosses(c.state.ante,{used:c.state.bossesUsed,banned:c.state.bannedKeys});if(pool.length){const boss=c.rng.pick(pool as unknown as SystemDefinition[],'boss');c.state.bossKey=boss.sourceKey;c.state.bossesUsed={...c.state.bossesUsed,[boss.sourceKey]:(c.state.bossesUsed?.[boss.sourceKey]??0)+1};}},
  doubleNextTag: c=>{c.state.tags.push({id:uid(c.state,'tag'),sourceKey:c.tag!.tagKey!,orbitalHand:c.tag?.orbitalHand});},
  shopFree: c=>{for(const item of c.state.shopCards)if(item.kind!=='voucher'){item.cost=0;item.couponed=true;}c.state.shopFree=true;},
  shopJoker: (c,a)=>{if(a.rarity===3&&!eligibleJokerDefinitions(c.state,3).length){c.events.push({type:'tagExpired',sourceKey:c.item.sourceKey});return;}const joker=randomJoker(c,a.rarity,false,'shop');const offer={id:uid(c.state,'offer'),kind:'joker',sourceKey:joker.sourceKey,joker,cost:a.free?0:joker.cost,sellValue:joker.sellValue};c.state.shopCards.push(offer);c.events.push({type:'shopJokerCreated',offer});},
  shopEdition: (c,a)=>{const offer=c.state.shopCards.find(x=>x.id===c.tag?.cardId)??c.state.shopCards.find(x=>x.kind==='joker'&&!x.edition&&!x.joker?.edition);if(offer){offer.edition=a.edition;if(offer.joker){offer.joker.edition=a.edition;const d=jokerData.find(x=>x.sourceKey===offer.joker!.sourceKey)!;offer.joker.cost=computePurchasePrice(d.cost,{edition:a.edition,discountPercent:c.state.discountPercent});offer.joker.sellValue=computeSellValue(offer.joker.cost);offer.sellValue=offer.joker.sellValue;}offer.cost=a.free?0:computePurchasePrice(jokerData.find(x=>x.sourceKey===offer.sourceKey)?.cost??0,{edition:a.edition,discountPercent:c.state.discountPercent});offer.couponed=!!a.free;}},
  observatoryXMult: (c,a)=>c.events.push({type:'scoreXMult',sourceKey:c.item.sourceKey,amount:a.factor,stage:'jokerMainConsumable'}),
  openPack: ()=>{}, scoringEnhancement: ()=>{},scoringEdition: ()=>{},sealEffect: ()=>{}
};
function execute(ctx: Context, effects = ctx.item.effects): void {
  for(const action of effects.filter(a=>a.trigger===ctx.trigger))if(conditionMatches(action.condition,ctx)){const handler=systemEffectHandlers[action.action];if(!handler)throw new Error(`尚未注册动作 ${action.action}`);handler(ctx,action);}
}
function result(ctx: Context, applied=true, reason?:string): SystemResult { return {state:ctx.state,events:ctx.events,applied,reason}; }
function find(group: keyof SystemsContent, key: string): SystemDefinition {const item=(systemsContent[group] as SystemDefinition[]).find(x=>x.sourceKey===key);if(!item)throw new Error(`未知内容 ${key}`);return item;}

export function canUseConsumable(sourceKey: string, input: SystemRunState = {}, selectedIds: string[] = []): {usable: boolean;reason?:string} {
  const item=find('consumables',sourceKey),c=newContext(item,input,selectedIds,noRandom,'consume');
  if(new Set(selectedIds).size!==selectedIds.length||c.selected.length!==selectedIds.length)return {usable:false,reason:'所选纸牌无效'};
  if(!item.effects.filter(a=>a.trigger==='consume').every(a=>conditionMatches(a.condition,c)))return {usable:false,reason:'当前资源或选牌不满足条件'};
  if(sourceKey==='c_fool'&&(!c.state.lastTarotPlanet||c.state.lastTarotPlanet==='c_fool'||c.state.consumables.length>=c.state.consumableSlots))return {usable:false,reason:'没有可复现的物品或可用空位'};
  if((sourceKey==='c_emperor'||sourceKey==='c_high_priestess')&&c.state.consumables.length>=c.state.consumableSlots)return {usable:false,reason:'消耗品槽已满'};
  return {usable:true};
}
/** 调用方应先移除正在使用的库存物品，再调用本函数；这样容量计算与原版一致。 */
export function applyConsumable(sourceKey: string, input: SystemRunState = {}, selectedIds: string[] = [], rng: SystemsRng): SystemResult {
  const item=find('consumables',sourceKey),c=newContext(item,input,selectedIds,rng,'consume'),can=canUseConsumable(sourceKey,input,selectedIds);
  if(!can.usable)return result(c,false,can.reason);
  execute(c);if(item.kind==='tarot'||item.kind==='planet')c.state.lastTarotPlanet=sourceKey;
  c.events.push({type:'consumableUsed',sourceKey});return result(c);
}
export function applyVoucher(sourceKey: string, input: SystemRunState = {}): SystemResult {const c=newContext(find('vouchers',sourceKey),input,[],noRandom,'redeem');if(c.state.vouchers.includes(sourceKey))return result(c,false,'已兑换该凭单');execute(c);c.state.vouchers.push(sourceKey);c.events.push({type:'voucherRedeemed',sourceKey});return result(c);}
export function applyDeck(sourceKey: string, input: SystemRunState = {}, rng: SystemsRng): SystemResult {const c=newContext(find('decks',sourceKey),input,[],rng,'runStart');execute(c);c.state.deckKey=sourceKey;return result(c);}
export function applyStake(level: number, input: SystemRunState = {}): SystemResult {if(!Number.isInteger(level)||level<1||level>8)throw new Error('难度必须在 1 至 8');const item=systemsContent.stakes.find(x=>x.stake_level===level)!;const c=newContext(item,input,[],noRandom,'runStart');execute(c);return result(c);}
export function applyBlindStart(sourceKey: string, input: SystemRunState = {}, rng: SystemsRng): SystemResult {const c=newContext(find('blinds',sourceKey),input,[],rng,'start');c.state.blindKey=sourceKey;c.state.blindDisabled=false;c.state.blindState={originalHandSize:c.state.handSize,originalHands:c.state.hands,originalDiscards:c.state.discards,originalHandsLeft:c.state.handsLeft,originalDiscardsLeft:c.state.discardsLeft,handsPlayed:0,discardsUsed:0};c.state.handsPlayed=0;c.state.discardsUsed=0;c.state.forcedSelection=undefined;execute(c);c.state.deck=applyBlindCardDebuffs(sourceKey,c.state.deck,c.state);c.state.handCards=applyBlindCardDebuffs(sourceKey,c.state.handCards,c.state);return result(c);}
export function applyBlindBeforeHand(sourceKey: string, input: SystemRunState = {}, cards: Card[], handType: string, rng: SystemsRng): BlindHandResult {
  const c=newContext(find('blinds',sourceKey),input,[],rng,'beforeHand');c.playedCards=cards;c.handType=handType;
  if(!c.state.blindDisabled)execute(c);
  return {...result(c,!c.state.blindDisabled),debuffedHand:c.debuffedHand,blocked:false,baseChipsFactor:c.baseChipsFactor,baseMultFactor:c.baseMultFactor,baseChipsMinimum:c.baseChipsMinimum,baseMultMinimum:c.baseMultMinimum,baseRoundOffset:c.baseRoundOffset};
}
/** 无效牌型仍会消耗出牌次数并取得零分，因此 blocked 与 debuffedHand 分别表达。 */
export function applyBlindAfterHand(sourceKey: string, input: SystemRunState = {}, cards: Card[], rng: SystemsRng): SystemResult {const c=newContext(find('blinds',sourceKey),input,[],rng,'afterHand');c.state.blindState.handsPlayed=(c.state.blindState.handsPlayed??0)+1;c.state.playedThisAnte=[...new Set([...c.state.playedThisAnte,...cards.map(x=>x.id)])];if(!c.state.blindDisabled)execute(c);return result(c);}
export function applyBlindAfterDiscard(sourceKey: string, input: SystemRunState = {}, rng: SystemsRng): SystemResult {const c=newContext(find('blinds',sourceKey),input,[],rng,'afterDiscard');c.state.blindState.discardsUsed=(c.state.blindState.discardsUsed??0)+1;if(!c.state.blindDisabled)execute(c);return result(c);}
export function applyBlindDraw(sourceKey: string, input: SystemRunState = {}, drawn: Card[], rng: SystemsRng): SystemResult {
  const state=normalizeSystemsState(input),ids=new Set(state.handCards.map(x=>x.id));state.handCards.push(...drawn.filter(x=>!ids.has(x.id)));
  const c=newContext(find('blinds',sourceKey),state,drawn.map(x=>x.id),rng,'draw');if(!c.state.blindDisabled)execute(c);c.state.blindState.fishPrepped=false;if(sourceKey==='bl_final_heart')c.state.blindState.heartPrepped=false;c.state.handCards=applyBlindCardDebuffs(sourceKey,c.state.handCards,c.state);return result(c);
}
export function applyBlindCardDebuffs(sourceKey: string, cards: Card[], input: SystemRunState = {}): Card[] {
  const state=normalizeSystemsState(input),blind=find('blinds',sourceKey);
  const tests: Record<string,(card:Card,rule:SystemEffect)=>boolean>={debuffSuit:(card,rule)=>cardIsSuit({...card,debuffed:false},rule.suit,{bypassDebuff:true,smeared:state.smeared}),debuffFaces:card=>isFace(card,{bypassDebuff:true,pareidolia:state.pareidolia}),debuffPlayedThisAnte:card=>state.playedThisAnte.includes(card.id),debuffAll:()=>true};
  const rules=blind.effects.filter(x=>x.trigger==='cardDebuff');
  return cards.map(card=>({...clone(card),debuffed:!state.blindDisabled&&rules.some(rule=>tests[rule.action]?.(card,rule))}));
}
export function disableBlind(sourceKey: string, input: SystemRunState = {}): SystemResult {
  const c=newContext(find('blinds',sourceKey),input,[],noRandom,'disabled');if(c.state.blindDisabled)return result(c);c.state.blindDisabled=true;
  if(sourceKey==='bl_manacle'){c.state.handSize+=1;c.events.push({type:'drawRequested',count:1});}
  if(sourceKey==='bl_water'){const f=c.state.discardsLeft!==undefined?'discardsLeft':'discards';c.state[f]+=(c.state.blindState.originalDiscardsLeft??c.state.blindState.originalDiscards??0);}
  if(sourceKey==='bl_needle'){const f=c.state.handsLeft!==undefined?'handsLeft':'hands';c.state[f]+=(c.state.blindState.originalHands??1)-1;}
  if(sourceKey==='bl_wall')c.state.blindRequirementFactor=.5;
  if(sourceKey==='bl_final_vessel')c.state.blindRequirementFactor=1/3;
  c.state.forcedSelection=undefined;c.state.deck=applyBlindCardDebuffs(sourceKey,c.state.deck,c.state);c.state.handCards=applyBlindCardDebuffs(sourceKey,c.state.handCards,c.state).map(x=>({...x,custom:{...x.custom,faceDown:false}}));for(const j of c.state.jokers){setJokerDebuff(j,false);j.state.faceDown=false;}return result(c);
}
export function applyBlindEnd(sourceKey: string,input: SystemRunState = {}): SystemResult {const c=newContext(find('blinds',sourceKey),input,[],noRandom,'end');if(!c.state.blindDisabled)execute(c);for(const j of c.state.jokers){setJokerDebuff(j,false);j.state.faceDown=false;}c.state.handSize-=(c.state.temporaryHandSize??0);c.state.temporaryHandSize=undefined;c.state.forcedSelection=undefined;return result(c);}
export interface TagContext { type: string; bossDefeated?: boolean; orbitalHand?: string; tagKey?: string; cardId?: string; [key: string]: any }
export function applyTag(sourceKey: string, input: SystemRunState = {}, context: TagContext, rng: SystemsRng): SystemResult {
  const item=find('tags',sourceKey),trigger=({store_final_pass:'shop_final_pass',next_blind_choice:'new_blind_choice'} as Record<string,string>)[context.type]??context.type,c=newContext(item,input,[],rng,trigger);c.tag=context;
  const actions=item.effects.filter(a=>a.trigger===trigger&&conditionMatches(a.condition,c));
  if(sourceKey==='tag_d_six'&&c.state.shopD6Used)return result(c,false,'本商店已兑换同类凭签');
  if(sourceKey==='tag_coupon'&&c.state.shopFree)return result(c,false,'本商店已免费');
  if(!actions.length)return result(c,false,'尚未到触发时机');
  if(actions.some(a=>a.action==='shopEdition')&&!c.state.shopCards.some(x=>(!context.cardId||x.id===context.cardId)&&x.kind==='joker'&&!x.edition&&!x.joker?.edition))return result(c,false,'暂无无版本伙伴商品');
  if(actions.some(a=>a.action==='upgradeOrbital')&&!context.orbitalHand)return result(c,false,'待指定牌型');
  execute(c,actions);if(sourceKey==='tag_d_six')c.state.shopD6Used=true;c.events.push({type:'tagConsumed',sourceKey});return result(c);
}
export function generatePackContents(sourceKey: string, input: SystemRunState = {}, rng: SystemsRng): {state:NormalizedSystemsState;items:SystemOffer[];choose:number} {
  const item=find('boosters',sourceKey),c=newContext(item,input,[],rng,'open'),items:SystemOffer[]=[];
  for(let n=0;n<(item.size??0);n++){
    if(item.packKind==='buffoon'){const joker=randomJoker(c,undefined,false,'pack');items.push({id:uid(c.state,'pack-item'),kind:'joker',sourceKey:joker.sourceKey,joker,cost:0});continue;}
    if(item.packKind==='standard'){
      const rules=systemsContent.shop.packRules,enhanced=rng.next(`stdset${c.state.ante}`)>rules.standardEnhancedThreshold;
      const card:Card={id:uid(c.state,'paper'),rank:rng.int(2,14,'sta:rank'),suit:rng.pick(['spades','hearts','diamonds','clubs'] as Suit[],'sta:suit')};
      if(enhanced)card.enhancement=rng.pick(systemsContent.enhancements,'sta:enhancement').sourceKey.slice(2) as Enhancement;
      card.edition=pickEdition(rng.next(`standard_edition${c.state.ante}`),{rate:c.state.editionRate,modifier:rules.standardEditionModifier,noNegative:true});
      if(rng.next(`stdseal${c.state.ante}`)>rules.standardSealThreshold){const roll=rng.next(`stdsealtype${c.state.ante}`);card.seal=roll>.75?'red':roll>.5?'blue':roll>.25?'gold':'purple';}
      items.push({id:card.id,kind:'playingCard',card,cost:0});continue;
    }
    const kind=item.packKind==='celestial'?'planet':item.packKind==='spectral'?'spectral':c.state.omenGlobe&&rng.next('omen_globe')>systemsContent.shop.packRules.arcanaSpectralThreshold?'spectral':'tarot';
    const forced=kind==='planet'&&n===0&&c.state.telescope?systemsContent.consumables.find(x=>x.handType===c.state.mostPlayedHand)?.sourceKey:undefined;
    const key=pickConsumable(kind,{...c.state,inFlightKeys:items.flatMap(x=>x.sourceKey?[x.sourceKey]:[])},rng,`${item.sourceKey}:${n}`,true,forced);
    const definition=find('consumables',key);items.push({id:uid(c.state,'pack-item'),kind:'consumable',sourceKey:key,name:definition.name,cost:0});
  }
  return {state:c.state,items,choose:item.choose??1};
}

/** 精装进货先独立判定强化，再独立判定版本，版本命中后使用保底三档分布。 */
export function generateShopPlayingCard(input: SystemRunState = {}, rng: SystemsRng): {state:NormalizedSystemsState;offer:SystemOffer} {
  const state=normalizeSystemsState(input),rules=systemsContent.shop.packRules;
  const enhanced=state.illusion&&rng.next('illusion')>rules.illusionEnhancedThreshold;
  const card:Card={id:uid(state,'paper'),rank:rng.int(2,14,'shop:rank'),suit:rng.pick(['spades','hearts','diamonds','clubs'] as Suit[],'shop:suit')};
  if(enhanced)card.enhancement=rng.pick(systemsContent.enhancements,'shop:enhancement').sourceKey.slice(2) as Enhancement;
  if(state.illusion&&rng.next('illusion')>rules.illusionEditionThreshold){const roll=rng.next('illusion');card.edition=roll>rules.illusionEditionThresholds.polychrome?'polychrome':roll>rules.illusionEditionThresholds.holo?'holo':'foil';}
  const cost=computePurchasePrice((raw as any).playingCardCost,{edition:card.edition,inflation:state.inflation,discountPercent:state.discountPercent});
  return {state,offer:{id:uid(state,'offer'),kind:'playingCard',sourceKey:'playingCard',card,cost,sellValue:computeSellValue(cost)}};
}

/** 牌组的持续事件与开局调整使用相同注册器。 */
export function applyDeckEvent(sourceKey: string, input: SystemRunState = {}, event: {type:string}, rng: SystemsRng): SystemResult {
  const c=newContext(find('decks',sourceKey),input,[],rng,event.type);const actions=c.item.effects.filter(a=>a.trigger===event.type);if(!actions.length)return result(c,false,'牌组在此时机没有效果');execute(c,actions);return result(c);
}

/** 伙伴主阶段结束后，持有星图从左到右逐张触发；发生在牌组最终平衡之前（state_events.lua:877-959）。 */
export function getObservatoryEffects(input: SystemRunState, handType: string, heldPlanets: ReadonlyArray<string | {id?:string;sourceKey:string;debuffed?:boolean}> = input.consumables ?? []): SystemEvent[] {
  if(!input.observatory&&!input.vouchers?.includes('v_observatory'))return [];
  const rule=find('vouchers','v_observatory').effects.find(x=>x.action==='observatoryXMult')!;
  return heldPlanets.flatMap((held,index)=>{
    const key=typeof held==='string'?held:held.sourceKey,item=systemsContent.consumables.find(x=>x.sourceKey===key);
    if((typeof held!=='string'&&held.debuffed)||item?.kind!=='planet'||item.handType!==handType)return [];
    return [{type:'scoreXMult',sourceKey:key,voucherKey:'v_observatory',cardId:typeof held==='string'?`held-planet-${index}`:held.id,amount:rule.factor,stage:'jokerMainConsumable',factRefs:['system.v_observatory.effects.1']}];
  });
}
