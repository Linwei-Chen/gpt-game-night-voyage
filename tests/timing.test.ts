import { describe, expect, it } from 'vitest';
import { CARD_POP_MS, SCORE_POP_MS, scorePitch } from '../src/render/timing';

// UI-002/003/004/005事实；独立字面量验证时间换算与音高，不使用原创配色或布局参数。
describe('已采集的弹出时长与计分音高',()=>{
 it('逐牌弹出650毫秒；筹码弹出0.6×1.25秒等于750毫秒',()=>{
  expect(CARD_POP_MS).toBe(650);expect(SCORE_POP_MS).toBe(750);
 });
 it.each([[0,.8],[.25,.85],[.5,.9],[.75,.95],[1,1]])('进度%s的音高为%s',(progress,expected)=>{
  expect(scorePitch(progress)).toBeCloseTo(expected,14);
 });
});
