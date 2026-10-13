import { describe, expect, it } from 'vitest';
import { scorePractice, scorePartnerExample, handLessons, practiceCards } from '../src/ui/tutorial-model';

// 手算来源：hand.pair、rank.chips、joker.j_joker.rule.0、joker.j_blackboard.rule.0。
// 9、K、Q、2是教学牌例；其点数筹码由正式接口计算。
describe('教程示例与正式规则一致', () => {
  it('空选牌给出未出牌状态', () => expect(scorePractice([])).toBeUndefined());
  it('两张9：基础10加18筹码，倍率2，得到56', () => {
    expect(scorePractice(['lesson-spades-9', 'lesson-hearts-9'])).toMatchObject({ handType: 'pair', chips: 28, mult: 2, score: 56 });
  });
  it('对子带出普通K不会多算筹码', () => {
    const result = scorePractice(['lesson-spades-9', 'lesson-hearts-9', 'lesson-clubs-13'])!;
    expect(result.score).toBe(56);
    expect(result.scoringCards.map(c => c.id)).toEqual(['lesson-spades-9', 'lesson-hearts-9']);
  });
  it('单张K高牌为(5+10)×1', () => {
    expect(scorePractice(['lesson-clubs-13'])).toMatchObject({ handType: 'highCard', chips: 15, mult: 1, score: 15 });
  });
  it('全部12个牌型示例都实际识别为教学牌型', () => {
    expect(handLessons).toHaveLength(12);
    for (const lesson of handLessons) expect(lesson.score.handType, lesson.name).toBe(lesson.type);
    expect(handLessons.filter(l => l.hidden)).toHaveLength(3);
  });
  it('青灯再黛瓷：28×((2+4)×3)=504', () => {
    expect(scorePartnerExample(false)).toMatchObject({ chips: 28, mult: 18, score: 504 });
    expect(scorePartnerExample(false).trace.filter(e => ['mult','xmult'].includes(e.kind)).map(e => e.kind)).toEqual(['mult','xmult']);
  });
  it('黛瓷再青灯：28×(2×3+4)=280', () => {
    expect(scorePartnerExample(true)).toMatchObject({ chips: 28, mult: 10, score: 280 });
  });
  it('练习重新计分不会修改练习牌或累积伙伴状态', () => {
    const before = structuredClone(practiceCards);
    const a = scorePartnerExample(false);
    expect(scorePartnerExample(false)).toEqual(a);
    scorePractice(practiceCards.map(c => c.id));
    expect(practiceCards).toEqual(before);
  });
});
