import { describe, expect, it } from 'vitest';
import { makeDeck, cardChips, cardIsSuit, isFace, type Card, type Suit } from '../src/core/cards';
import { evaluatePoker, handValue, HAND_VALUES, type HandType } from '../src/core/poker';
import evidence from '../data/evidence-scoring.json';
const c=(rank:number,suit:Suit='spades',extra:Partial<Card>={}):Card=>({id:`${rank}-${suit}-${counter++}`,rank,suit,...extra});
let counter=0;
const ranks=(rs:number[],suits:Suit[]=['spades','hearts','clubs','diamonds','spades'])=>rs.map((r,i)=>c(r,suits[i%suits.length]));
describe('牌型证据断言（game.lua:2002-2013）',()=>{
 for(const fact of evidence.facts.filter(f=>f.id.startsWith('hand.')&&typeof f.value==='object'&&'handType' in f.value!)){
  it(fact.id,()=>{const v=fact.value as any; expect(HAND_VALUES[v.handType as HandType]).toMatchObject({chips:v.chips,mult:v.mult,levelChips:v.l_chips,levelMult:v.l_mult}); expect(handValue(v.handType,3)).toEqual({chips:v.chips+2*v.l_chips,mult:v.mult+2*v.l_mult});});
 }
 it('降到等级零时筹码至少0，倍率至少1',()=>{expect(handValue('highCard',0)).toEqual({chips:0,mult:1});});
});
describe('组合判定与计分集合',()=>{
 const cases:[HandType,number[],Suit[]?][]=[['highCard',[14,12,9,4,3]],['pair',[9,9,13,6,3]],['twoPair',[14,14,12,4,4]],['threeOfAKind',[10,10,10,6,5]],['straight',[11,10,9,8,7]],['flush',[14,13,10,5,4],['hearts']],['fullHouse',[13,13,13,2,2]],['fourOfAKind',[11,11,11,11,3]],['straightFlush',[12,11,10,9,8],['spades']],['fiveOfAKind',[14,14,14,14,14]],['flushHouse',[7,7,7,4,4],['diamonds']],['flushFive',[14,14,14,14,14],['spades']]];
 it.each(cases)('%s', (type,rs,suits)=>expect(evaluatePoker(ranks(rs,suits)).type).toBe(type));
 it('A可在A2345最小顺子中计分',()=>expect(evaluatePoker(ranks([14,2,3,4,5])).type).toBe('straight'));
 it('QKA23不能绕回',()=>expect(evaluatePoker(ranks([12,13,14,2,3])).allTypes).not.toContain('straight'));
 it('重复点数不够长度不能构成顺子',()=>expect(evaluatePoker(ranks([2,3,3,4,5])).type).toBe('pair'));
 it('四指的顺子与同花可以用不同四张组成',()=>{const cards=[c(2,'hearts'),c(3,'hearts'),c(4,'hearts'),c(5,'clubs'),c(9,'hearts')];const result=evaluatePoker(cards,{fourFingers:true});expect(result.type).toBe('straightFlush');expect(result.scoringCards).toEqual(cards);});
 it('捷径每个间隙允许少一个点数',()=>expect(evaluatePoker(ranks([2,4,6,8,10]),{shortcut:true}).type).toBe('straight'));
 it('捷径不能跳过连续两个点数',()=>expect(evaluatePoker(ranks([2,5,7,9,11]),{shortcut:true}).allTypes).not.toContain('straight'));
 it('四指顺子可包含重复点数牌的全部实例',()=>{const cs=ranks([2,3,3,4,5]);expect(evaluatePoker(cs,{fourFingers:true}).scoringCards).toHaveLength(5);});
 it('石头牌加入计分但不构成对子',()=>{const ace=c(14),stone=c(14,'hearts',{enhancement:'stone'});expect(evaluatePoker([ace,stone])).toMatchObject({type:'highCard',scoringCards:[ace,stone]});});
 it('仅石头牌仍返回高牌，并计分全部石头',()=>{const cs=[c(2,'hearts',{enhancement:'stone'}),c(2,'spades',{enhancement:'stone'})];expect(evaluatePoker(cs).type).toBe('highCard');expect(evaluatePoker(cs).scoringCards).toEqual(cs);});
 it('Splash计分所有出牌，不改变牌型',()=>{const cs=ranks([2,2,7,9,11]);expect(evaluatePoker(cs,{splash:true})).toMatchObject({type:'pair',scoringCards:cs});});
 it('五条满足对子/三条/四条小丑但不满足两对',()=>{const r=evaluatePoker(ranks([6,6,6,6,6]));expect(r.allTypes).toEqual(expect.arrayContaining(['fiveOfAKind','fourOfAKind','threeOfAKind','pair','highCard']));expect(r.allTypes).not.toContain('twoPair');});
 it('葫芦同时满足两对/对子/三条小丑',()=>expect(evaluatePoker(ranks([6,6,6,3,3])).allTypes).toEqual(expect.arrayContaining(['fullHouse','twoPair','threeOfAKind','pair'])));
 it('减益万能牌失去通配花色但仍保留底牌花色',()=>{const cs=[c(2,'hearts'),c(4,'hearts'),c(7,'hearts'),c(9,'hearts'),c(13,'spades',{enhancement:'wild'})];expect(evaluatePoker(cs).type).toBe('flush');cs[4]!.debuffed=true;expect(evaluatePoker(cs).type).toBe('highCard');});
 it('涂抹规则合并红色',()=>{const cs=ranks([2,4,7,9,13],['hearts','diamonds']);expect(evaluatePoker(cs,{smeared:true}).type).toBe('flush');});
 it('同点数高牌选择较大的内部花色nominal',()=>{const cs=[c(14,'diamonds'),c(14,'spades')];const result=evaluatePoker(cs);expect(result.patterns.highCard).toEqual([cs[1]]);});
 it('空手/超过五张拒绝',()=>{expect(()=>evaluatePoker([])).toThrow();expect(()=>evaluatePoker(ranks([2,3,4,5,6,7]))).toThrow();});
});
describe('卡牌语义',()=>{
 it('牌组含52张互异基础牌',()=>{const deck=makeDeck();expect(deck).toHaveLength(52);expect(new Set(deck.map(c=>c.id)).size).toBe(52);});
 it('标准牌组创建顺序与源prototype字典序一致',()=>{const deck=makeDeck();expect(deck[0]).toMatchObject({suit:'clubs',rank:2});expect(deck[8]).toMatchObject({suit:'clubs',rank:14});expect(deck.at(-1)).toMatchObject({suit:'spades',rank:10});});
 it('JQK为10筹码，A为11；石头50不叠加底牌',()=>{expect([11,12,13,14].map(r=>cardChips(c(r)))).toEqual([10,10,10,11]);expect(cardChips(c(14,'spades',{enhancement:'stone',permanentChips:7}))).toBe(57);});
 it('减益卡不触发花色和人头效果，牌型识别可保留花色',()=>{const x=c(13,'spades',{debuffed:true});expect(isFace(x)).toBe(false);expect(cardIsSuit(x,'spades')).toBe(false);expect(cardIsSuit(x,'spades',{flushCalc:true})).toBe(true);});
});


// 期望逐项抄录自 hand.* / rank.chips / poker.priority 事实；不从实现或 JSON 计算。
// 两个数据副本相等只能检查内部一致性，本表用独立字面量发现共同误改。
import { HAND_PRIORITY } from '../src/core/poker';
const literalHandValues: [HandType,number,number,number,number,number,number,number,number,boolean][] = [
 ['flushFive',160,16,50,3,260,22,110,13,true],
 ['flushHouse',140,14,40,4,220,22,100,10,true],
 ['fiveOfAKind',120,12,35,3,190,18,85,9,true],
 ['straightFlush',100,8,40,4,180,16,60,4,false],
 ['fourOfAKind',60,7,30,3,120,13,30,4,false],
 ['fullHouse',40,4,25,2,90,8,15,2,false],
 ['flush',35,4,15,2,65,8,20,2,false],
 ['straight',30,4,30,3,90,10,0,1,false],
 ['threeOfAKind',30,3,20,2,70,7,10,1,false],
 ['twoPair',20,2,20,1,60,4,0,1,false],
 ['pair',10,2,15,1,40,4,0,1,false],
 ['highCard',5,1,10,1,25,3,0,1,false],
];
describe('十二牌型的独立字面量基础分与升级金标准',()=>{
 it.each(literalHandValues)('%s：基础/增量/等级3/等级0/隐藏标志',(type,chips,mult,levelChips,levelMult,level3Chips,level3Mult,level0Chips,level0Mult,hidden)=>{
  expect(HAND_VALUES[type]).toEqual({chips,mult,levelChips,levelMult,hidden});
  expect(handValue(type,1)).toEqual({chips,mult});
  expect(handValue(type,3)).toEqual({chips:level3Chips,mult:level3Mult});
  expect(handValue(type,0)).toEqual({chips:level0Chips,mult:level0Mult});
 });
 it('牌型优先级完整按独立字面量排序',()=>{
  expect(HAND_PRIORITY).toEqual(['flushFive','flushHouse','fiveOfAKind','straightFlush','fourOfAKind','fullHouse','flush','straight','threeOfAKind','twoPair','pair','highCard']);
 });
 it('2至A每个点数的筹码都有字面量期望',()=>{
  expect([2,3,4,5,6,7,8,9,10,11,12,13,14].map(rank=>cardChips(c(rank)))).toEqual([2,3,4,5,6,7,8,9,10,10,10,10,11]);
 });
 it('标准牌组的完整52张顺序使用独立花色和点数表核验',()=>{
  const expected=['clubs','diamonds','hearts','spades'].flatMap(suit=>[2,3,4,5,6,7,8,9,14,11,13,12,10].map(rank=>({suit,rank})));
  expect(makeDeck().map(({suit,rank})=>({suit,rank}))).toEqual(expected);
 });
});
