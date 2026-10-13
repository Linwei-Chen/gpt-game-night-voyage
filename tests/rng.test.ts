import { describe, expect, it } from 'vitest';
import { SeededRng, luaJitRandom, pseudohash } from '../src/core/rng';
describe('seed操作可复现与独立key状态',()=>{
 it('同seed同操作生成同结果，支持快照重放',()=>{const a=new SeededRng('TRACEABLE'),b=new SeededRng('TRACEABLE');expect([a.next('shop'),a.int(1,10,'pack'),a.shuffle([1,2,3,4],'deck')]).toEqual([b.next('shop'),b.int(1,10,'pack'),b.shuffle([1,2,3,4],'deck')]);const save=a.snapshot(),next=a.next('shop');a.restore(save);expect(a.next('shop')).toBe(next);});
 it('不同key相互独立',()=>{const a=new SeededRng('KEYS'),b=new SeededRng('KEYS');a.next('unused');expect(a.next('shop')).toBe(b.next('shop'));});
 it('shuffle不修改调用方数组',()=>{const original=[1,2,3,4,5];const r=new SeededRng('SHUFFLE').shuffle(original);expect(original).toEqual([1,2,3,4,5]);expect([...r].sort()).toEqual(original);});
 it('无候选或非法区间应报错',()=>{const r=new SeededRng('X');expect(()=>r.pick([])).toThrow();expect(()=>r.int(5,2)).toThrow();});
 it('next都在[0,1)且非单常数',()=>{const r=new SeededRng('RANGE');const values=Array.from({length:100},()=>r.next('same'));expect(values.every(x=>x>=0&&x<1)).toBe(true);expect(new Set(values).size).toBe(100);});
});

import evidence from '../data/evidence-scoring.json';
// 对照数据由真实 LuaJIT 执行本地只读参考产生，不由 TypeScript 实现生成。
const oracleVectors=evidence.facts.find(f=>f.id==='rng.oracle.vectors')!.value as unknown as {seed:string;hash:number;keys:string[];values:number[];shuffle:number[]}[];
const numericSeeds=evidence.facts.find(f=>f.id==='rng.oracle.numericSeeds')!.value as unknown as {seed:number;random:number}[];
describe('真实 LuaJIT 随机向量差分',()=>{
 it.each(oracleVectors)('原始哈希、独立key序列和洗牌：$seed',v=>{const r=new SeededRng(v.seed);expect(pseudohash(v.seed)).toBe(v.hash);expect(v.keys.map(key=>r.next(key))).toEqual(v.values);expect(r.shuffle([1,2,3,4,5,6,7,8,9,10],'shuffletest')).toEqual(v.shuffle);});
 it.each(numericSeeds)('底层TW223初始浮点seed：$seed',v=>expect(luaJitRandom(v.seed)).toBe(v.random));
});
