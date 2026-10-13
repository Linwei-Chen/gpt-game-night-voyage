import { describe, expect, it } from 'vitest';
import { createRun, continueAfterRound, continueEndless, leaveShop, enterBlind, serializeRun, restoreRun } from '../src/core/run-engine';

// run.endlessContinuation / run.winNotificationOnce；原版胜利后恢复正常局内流程。
describe('八段获胜后的继续航行',()=>{
 it('首次获胜停在胜利面板，继续后进入商店并保留本局资源',()=>{
  const s=createRun('ENDLESS');s.ante=8;s.blindAnte=8;s.blindIndex=2;s.phase='roundEnd';s.dollars=30;
  continueAfterRound(s);expect(s.phase).toBe('won');continueEndless(s);expect(s.phase).toBe('shop');expect(s.dollars).toBe(30);expect(s.system.endless).toBe(true);
  leaveShop(s);expect(s.ante).toBe(9);expect(s.target).toBe(110000);enterBlind(s);expect(s.target).toBe(110000);
 });
 it('后续终局不再弹出首次胜利面板',()=>{
  const s=createRun('ENDLESS-LATER');s.ante=16;s.blindAnte=16;s.blindIndex=2;s.phase='roundEnd';s.system.endless=true;
  continueAfterRound(s);expect(s.phase).toBe('shop');
 });
 it('未获胜时拒绝继续，存档保持不变',()=>{
  const s=createRun('ENDLESS-GUARD'),before=serializeRun(s);expect(()=>continueEndless(s)).toThrow();expect(serializeRun(s)).toBe(before);
 });
 it('继续标志保存恢复，八段商店不会重复触发胜利',()=>{
  let s=createRun('ENDLESS-SAVE');s.ante=8;s.blindAnte=8;s.blindIndex=2;s.phase='won';continueEndless(s);s=restoreRun(serializeRun(s));
  expect(s.system.endless).toBe(true);expect(s.phase).toBe('shop');leaveShop(s);expect(s.ante).toBe(9);
 });
});
