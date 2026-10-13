import { cardIsSuit, cardNominal, SUITS, type Card } from './cards';
import evidence from '../../data/evidence-scoring.json';
export type HandType = 'highCard' | 'pair' | 'twoPair' | 'threeOfAKind' | 'straight' | 'flush' | 'fullHouse' | 'fourOfAKind' | 'straightFlush' | 'fiveOfAKind' | 'flushHouse' | 'flushFive';
export interface PokerRules { fourFingers?: boolean; shortcut?: boolean; smeared?: boolean; splash?: boolean; pareidolia?: boolean; }
export interface HandValue { chips: number; mult: number; }
export interface HandDefinition extends HandValue { levelChips: number; levelMult: number; hidden: boolean; }
export const HAND_VALUES = Object.fromEntries(evidence.facts.filter(f => f.id.startsWith('hand.') && typeof f.value === 'object' && f.value && 'handType' in f.value).map(f => {
  const v = f.value as unknown as {handType: HandType; chips: number; mult: number; l_chips: number; l_mult: number; hidden: boolean};
  return [v.handType, {chips: v.chips, mult: v.mult, levelChips: v.l_chips, levelMult: v.l_mult, hidden: v.hidden}];
})) as Record<HandType, HandDefinition>;
export const HAND_PRIORITY = (evidence.facts.find(f => f.id === 'poker.priority')!.value as HandType[]);
export function handValue(type: HandType, level = 1): HandValue {
  if (!Number.isInteger(level) || level < 0) throw new Error('牌型等级必须是非负整数');
  const v = HAND_VALUES[type];
  return {chips: Math.max(0, v.chips + v.levelChips * (level - 1)), mult: Math.max(1, v.mult + v.levelMult * (level - 1))};
}
export interface PokerResult { type: HandType; scoringCards: Card[]; allTypes: HandType[]; patterns: Partial<Record<HandType, Card[]>>; }
/** 顺子用点数连通分量识别；A同时提供低端1与高端14，但不连接两端。 */
function straightCards(cards: Card[], rules: PokerRules): Card[] | undefined {
  const ranks = new Map<number, Card[]>();
  for (const c of cards) {
    if (c.enhancement === 'stone') continue;
    ranks.set(c.rank, [...(ranks.get(c.rank) ?? []), c]);
  }
  const values = [...ranks.keys()].sort((a,b) => a-b);
  if (ranks.has(14)) values.unshift(1);
  const components: number[][] = [];
  for (const value of values) {
    const last = components.at(-1);
    const gap = last ? value - last.at(-1)! : Infinity;
    if (last && gap <= (rules.shortcut ? 2 : 1)) last.push(value); else components.push([value]);
  }
  const length = rules.fourFingers ? 4 : 5;
  const component = components.find(part => part.length >= length);
  if (!component) return;
  return [...new Set(component.flatMap(r => ranks.get(r === 1 ? 14 : r)!))];
}
/** F:poker.*。用候选集合与优先级独立建模；不重用参考实现的控制流。 */
export function evaluatePoker(cards: Card[], rules: PokerRules = {}): PokerResult {
  if (cards.length < 1 || cards.length > 5) throw new Error('每次需出 1 至 5 张牌');
  const groups = new Map<number, Card[]>();
  for (const c of cards) {
    if (c.enhancement === 'stone') continue;
    groups.set(c.rank, [...(groups.get(c.rank) ?? []), c]);
  }
  const matching = (n: number) => [...groups.entries()].filter(([,cs]) => cs.length === n).sort(([a],[b]) => b-a).map(([,cs]) => cs);
  const doubles = matching(2), triples = matching(3), fours = matching(4), fives = matching(5);
  const flush = SUITS.map(suit => cards.filter(c => cardIsSuit(c,suit,{smeared:rules.smeared,flushCalc:true}))).find(cs => cs.length >= (rules.fourFingers ? 4 : 5));
  const straight = straightCards(cards,rules);
  const highest = cards.reduce((best,c) => cardNominal(c) > cardNominal(best) ? c : best);
  const patterns: Partial<Record<HandType,Card[]>> = {highCard:[highest]};
  const candidates: [HandType,Card[]|undefined][] = [
    ['pair',doubles[0]], ['threeOfAKind',triples[0]], ['fourOfAKind',fours[0]], ['fiveOfAKind',fives[0]],
    ['twoPair',doubles.length === 2 ? doubles.flat() : triples[0] && doubles[0] ? [...triples[0],...doubles[0]] : undefined],
    ['fullHouse',triples[0] && doubles[0] ? [...triples[0],...doubles[0]] : undefined],
    ['flush',flush], ['straight',straight], ['straightFlush',flush && straight ? [...new Set([...flush,...straight])] : undefined],
    ['flushHouse',flush && triples[0] && doubles[0] ? [...triples[0],...doubles[0]] : undefined],
    ['flushFive',flush && fives[0] ? fives[0] : undefined],
  ];
  for (const [type,cs] of candidates) if (cs) patterns[type]=cs;
  // F:poker.subTypes：重数牌型满足低重数小丑的“包含”条件。
  if (fives[0]) patterns.fourOfAKind=fives[0];
  if (patterns.fourOfAKind) patterns.threeOfAKind=patterns.fourOfAKind;
  if (patterns.threeOfAKind) patterns.pair=patterns.threeOfAKind;
  const allTypes=HAND_PRIORITY.filter(type => !!patterns[type]);
  const type=allTypes[0]!;
  const chosen=new Set(patterns[type]);
  const scoringCards=cards.filter(c => chosen.has(c) || c.enhancement === 'stone' || rules.splash);
  return {type,scoringCards,allTypes,patterns};
}
