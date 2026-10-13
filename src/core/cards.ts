import evidence from '../../data/evidence-scoring.json';
/** 卡牌数据仅描述机制；玩家看到的图形与名称由原创界面提供。 */
export type Suit = 'spades' | 'hearts' | 'clubs' | 'diamonds';
export type Enhancement = 'bonus' | 'mult' | 'wild' | 'glass' | 'steel' | 'stone' | 'gold' | 'lucky';
export type Edition = 'foil' | 'holo' | 'polychrome' | 'negative';
export type Seal = 'red' | 'blue' | 'purple' | 'gold';
export interface Card {
  id: string;
  rank: number;
  suit: Suit;
  enhancement?: Enhancement;
  edition?: Edition;
  seal?: Seal;
  debuffed?: boolean;
  permanentChips?: number;
  sortId?: number;
  custom?: Record<string, any>;
}
export const SUITS: readonly Suit[] = ['spades', 'hearts', 'clubs', 'diamonds'];
/** F:rank.chips，card.stone，card.bonus。 */
export function rankChips(rank: number): number {
  if (!Number.isInteger(rank) || rank < 2 || rank > 14) throw new Error('点数必须为 2 至 14');
  return rank === 14 ? 11 : Math.min(rank, 10);
}
export function cardChips(card: Card): number {
  if (card.debuffed) return 0;
  const nominal = card.enhancement === 'stone' ? 50 : rankChips(card.rank);
  return nominal + (card.enhancement === 'bonus' ? 30 : 0) + (card.permanentChips ?? 0);
}
export function isFace(card: Card, rules: { pareidolia?: boolean; bypassDebuff?: boolean } = {}): boolean {
  if (card.debuffed && !rules.bypassDebuff) return false;
  return !!rules.pareidolia || (card.enhancement !== 'stone' && card.rank >= 11 && card.rank <= 13);
}
export function cardIsSuit(card: Card, suit: Suit, rules: { smeared?: boolean; flushCalc?: boolean; bypassDebuff?: boolean } = {}): boolean {
  if (card.enhancement === 'stone') return false;
  if (card.debuffed && !rules.flushCalc && !rules.bypassDebuff) return false;
  if (card.enhancement === 'wild' && (!card.debuffed || rules.bypassDebuff)) return true;
  const red = (s: Suit) => s === 'hearts' || s === 'diamonds';
  return card.suit === suit || (!!rules.smeared && red(card.suit) === red(suit));
}
/** F:rank.highTie。高牌选择使用名义点数，避免仅按筹码比较人头牌。 */
export function cardNominal(card: Card): number {
  const suitWeight: Record<Suit, number> = {diamonds: 0.01, clubs: 0.02, hearts: 0.03, spades: 0.04};
  const faceOffset = card.rank >= 11 ? (card.rank - 10) / 10 : 0;
  const multiplier = card.enhancement === 'stone' ? -1000 : 1;
  return rankChips(card.rank) + faceOffset + suitWeight[card.suit] * multiplier +
    (card.custom?.suitNominalOriginal ?? suitWeight[card.suit] / 10) * 0.0001 * multiplier +
    (card.custom?.uniqueVal ?? 0) * 0.000001;
}
export function makeDeck(): Card[] {
  const order=evidence.facts.find(f=>f.id==='deck.prototypeOrder')!.value as unknown as {suits:Suit[];ranks:number[]};
  return order.suits.flatMap(suit => order.ranks.map(rank => ({id:`${suit}-${rank}`,rank,suit})));
}
