import { readFileSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { createRun, enterBlind, toggleCard, playSelected, discardSelected, continueAfterRound, buyOffer, useConsumable, takePackCard, closePack, sellItem, rerollShop, leaveShop, serializeRun, restoreRun, currentBlindKey, type RunState } from '../src/core/run-engine';

/** 只调用公开游戏动作；日志期望来自本实现完整实战，不能替代原版差分。 */
export function replayRun(record:any,checkpoint:'none'|'middle'|'every'='none'){
 let s=createRun(record.seed,record.deck,record.stake),restores=0,plays=0;
 function select(ids:string[]){
  for(const id of [...s.selected])if(!ids.includes(id))toggleCard(s,id);
  for(const id of ids)if(!s.selected.includes(id))toggleCard(s,id);
  assert.deepEqual([...s.selected].sort(),[...ids].sort(),'选牌集合应与日志一致');
 }
 for(const e of record.log){
  const prefix=`操作 ${e.step} ${e.action}`;
  switch(e.action){
   case 'enterBlind':enterBlind(s);assert.equal(currentBlindKey(s),e.blind,prefix+' 关卡');assert.equal(s.bossKey,e.boss,prefix+' 守关者');assert.equal(s.target,e.target,prefix+' 目标');break;
   case 'play':{
    select(e.ids);const score=playSelected(s);plays++;
    assert.equal(score.handType,e.handType,prefix+' 牌型');assert.equal(score.score,e.score,prefix+' 本次分数');assert.equal(s.roundScore,e.roundScore,prefix+' 总分');assert.equal(s.target,e.target,prefix+' 目标');break;
   }
   case 'discard':select(e.ids);discardSelected(s);break;
   case 'payout':assert.equal(s.phase,'roundEnd',prefix+' 阶段');assert.deepEqual(s.payout,e.payout,prefix+' 奖励');break;
   case 'buy':case 'openPack':{
    const o=[...s.shop.offers,...s.shop.packs,...(s.shop.voucher?[s.shop.voucher]:[])].find(o=>o.sourceKey===e.key&&o.price===e.price);assert.ok(o,prefix+' 商品存在');buyOffer(s,o.id);break;
   }
   case 'useConsumable':{const c=s.consumables.find(c=>c.sourceKey===e.sourceKey);assert.ok(c,prefix+' 道具存在');select(e.selected??[]);useConsumable(s,c.id);break;}
   case 'takePack':{const c=s.pack?.choices.find(c=>c.sourceKey===e.key);assert.ok(c,prefix+' 卡包选项存在');select(e.selected??[]);takePackCard(s,c.id);break;}
   case 'closePack':closePack(s);break;
   case 'sell':{const c=s.jokers.find(c=>c.sourceKey===e.key)??s.consumables.find(c=>c.sourceKey===e.key);assert.ok(c,prefix+' 持有牌存在');sellItem(s,c.id);break;}
   case 'reroll':rerollShop(s);break;
   case 'leaveShop':leaveShop(s);break;
   default:throw new Error(prefix+' 未知动作');
  }
  assert.equal(s.dollars,e.dollars,prefix+' 金币');assert.deepEqual(s.jokers.map(j=>j.sourceKey),e.jokers,prefix+' 伙伴');
  assert.equal(s.ante,e.ante,prefix+' 底注');assert.equal(s.blindIndex,e.blindIndex,prefix+' 关序');assert.equal(s.round,e.round,prefix+' 回合');
  if(e.action==='payout')continueAfterRound(s);
  if(checkpoint==='every'||checkpoint==='middle'&&e.step===Math.floor(record.log.length/2)){
   s=restoreRun(serializeRun(s));restores++;
  }
 }
 assert.equal(s.phase,record.outcome,'最终胜负');assert.equal(serializeRun(s),record.save,'最终存档应逐字符一致');
 return {checkpoint,passed:true,steps:record.log.length,plays,restores,outcome:s.phase,ante:s.ante,round:s.round};
}
if(process.argv[1]?.endsWith('replay.ts')){
 const record=JSON.parse(readFileSync('docs/full-run.json','utf8'));
 const checks=(['none','middle','every'] as const).map(mode=>replayRun(record,mode));
 const result={method:'公开动作重放；每步核对金币、伙伴、关卡、分数和目标；最终存档逐字符一致',originalGameComparison:false,seed:record.seed,checks};
 writeFileSync('docs/replay-report.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
}
