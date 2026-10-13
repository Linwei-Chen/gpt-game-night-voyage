import { type Card, type Suit } from '../core/cards';
import { HAND_PRIORITY, HAND_VALUES, type HandType } from '../core/poker';
import { scoreHand, type ScoreResult } from '../core/scoring';
import { createJoker, evaluateJokers } from '../content/jokers';
import { SeededRng } from '../core/rng';

export const handNames: Record<HandType, string> = {
  highCard:'高牌', pair:'对子', twoPair:'两对', threeOfAKind:'三条', straight:'顺子',
  flush:'同花', fullHouse:'葫芦', fourOfAKind:'四条', straightFlush:'同花顺',
  fiveOfAKind:'五条', flushHouse:'同花葫芦', flushFive:'同花五条',
};
export const suitSymbols: Record<Suit, string> = {spades:'♠', hearts:'♥', clubs:'♣', diamonds:'♦'};
export const suitNames: Record<Suit, string> = {spades:'黑桃', hearts:'红心', clubs:'梅花', diamonds:'方块'};
const faceRanks: Record<number,string> = {11:'J',12:'Q',13:'K',14:'A'};
export const rankLabel = (rank:number) => faceRanks[rank] ?? String(rank);
export const cardLabel = (card:Card) => suitNames[card.suit]+' '+rankLabel(card.rank);
const card = (rank:number, suit:Suit, index=0):Card => ({id:`lesson-${suit}-${rank}${index?'-'+index:''}`,rank,suit});

// 任意教学牌例；筹码、倍率、升级与触发全部使用已有事实驱动的正式接口。
const examples: Record<HandType, {rule:string; cards:Card[]}> = {
  highCard:{rule:'没有更高牌型时，普通牌中只取最高的一张计分。',cards:[card(13,'spades'),card(9,'hearts'),card(7,'clubs'),card(4,'diamonds'),card(2,'spades')]},
  pair:{rule:'两张点数相同的牌。普通附带牌不参与对子计分。',cards:[card(9,'spades'),card(9,'hearts'),card(13,'clubs'),card(12,'diamonds'),card(2,'clubs')]},
  twoPair:{rule:'两组不同点数的对子，共四张普通计分牌。',cards:[card(9,'spades'),card(9,'hearts'),card(13,'spades'),card(13,'hearts'),card(2,'clubs')]},
  threeOfAKind:{rule:'三张点数相同的牌。',cards:[card(9,'spades'),card(9,'hearts'),card(9,'clubs'),card(13,'diamonds'),card(2,'clubs')]},
  straight:{rule:'五个连续点数，花色可以不同。A可在最前或最后，不能跨两端连接。',cards:[card(5,'spades'),card(6,'hearts'),card(7,'clubs'),card(8,'diamonds'),card(9,'spades')]},
  flush:{rule:'五张同一花色的牌；点数不必连续。同为红色或黑色不算同花。',cards:[card(2,'hearts'),card(5,'hearts'),card(7,'hearts'),card(9,'hearts'),card(13,'hearts')]},
  fullHouse:{rule:'三张同一点数，再加一组不同点数的对子。',cards:[card(9,'spades'),card(9,'hearts'),card(9,'clubs'),card(13,'diamonds'),card(13,'clubs')]},
  fourOfAKind:{rule:'四张点数相同的牌。普通附带牌不参与四条计分。',cards:[card(9,'spades'),card(9,'hearts'),card(9,'clubs'),card(9,'diamonds'),card(13,'clubs')]},
  straightFlush:{rule:'同时满足顺子和同花。A、K、Q、J、10同花也按同花顺计分。',cards:[card(5,'hearts'),card(6,'hearts'),card(7,'hearts'),card(8,'hearts'),card(9,'hearts')]},
  fiveOfAKind:{rule:'五张点数相同的牌，需要通过复制或改造牌组获得。',cards:[card(9,'spades'),card(9,'hearts'),card(9,'clubs'),card(9,'diamonds'),card(9,'spades',1)]},
  flushHouse:{rule:'同时满足葫芦和同花，需要复制或改造纸牌。',cards:[card(9,'hearts'),card(9,'hearts',1),card(9,'hearts',2),card(13,'hearts'),card(13,'hearts',1)]},
  flushFive:{rule:'五张相同点数、相同花色的牌，需要复制或改造纸牌。',cards:[card(9,'hearts'),card(9,'hearts',1),card(9,'hearts',2),card(9,'hearts',3),card(9,'hearts',4)]},
};
export const handLessons = HAND_PRIORITY.slice().reverse().map(type => ({
  type, name:handNames[type], rule:examples[type].rule, cards:examples[type].cards,
  ...HAND_VALUES[type], score:scoreHand({played:structuredClone(examples[type].cards),held:[]}),
}));
export const practiceCards = structuredClone(examples.pair.cards);
export function scorePractice(selectedIds: string[]): ScoreResult | undefined {
  const ids = new Set(selectedIds);
  const played = structuredClone(practiceCards.filter(c => ids.has(c.id)));
  if (!played.length) return;
  return scoreHand({played,held:structuredClone(practiceCards.filter(c => !ids.has(c.id)))});
}
export function scorePartnerExample(reverse: boolean): ScoreResult {
  const keys = reverse ? ['j_blackboard','j_joker'] : ['j_joker','j_blackboard'];
  const jokers = keys.map(key => createJoker(key,'lesson-'+key));
  return scoreHand({
    played:structuredClone(practiceCards.slice(0,2)),
    held:[card(13,'clubs'),card(2,'spades')], jokers, evaluateJokers,
    rng:new SeededRng('LESSON-PARTNERS'),
  });
}
