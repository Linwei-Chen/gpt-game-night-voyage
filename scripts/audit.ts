import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const root=resolve(import.meta.dirname,'..');
const read=(path:string)=>JSON.parse(readFileSync(resolve(root,path),'utf8'));
const systems=read('data/systems-verified.json'),j=read('data/jokers.json'),f=read('data/facts.json');
const jokers=Array.isArray(j)?j:j.jokers;
const categories=['consumables','vouchers','decks','blinds','stakes','tags','enhancements','seals','editions','boosters'];
const counts=Object.fromEntries(categories.map(k=>[k,systems[k].length]));counts.jokers=jokers.length;
const all=[...jokers,...categories.flatMap(k=>systems[k])];const errors:string[]=[];
const ids=new Set<string>();
for(const c of all){
 if(ids.has(c.sourceKey))errors.push(`重复内容 ${c.sourceKey}`);ids.add(c.sourceKey);
 if(!c.name)errors.push(`缺原创名称 ${c.sourceKey}`);
 if(!c.sourceRefs?.length&&!c.factRefs?.length)errors.push(`缺来源 ${c.sourceKey}`);
}
const unresolved=f.facts.filter((x:any)=>/TBD|低|待查/.test(x.confidence)||x.value==='TBD');
const result={version:f.version,counts,factCount:f.facts.length,unresolvedFacts:unresolved.length,errors,limits:['未取得游戏内导出。','未取得原版录屏，原版逐帧视觉验收未通过。','数值来源审计、单元测试与完整引擎集成是不同验证层。']};
writeFileSync(resolve(root,'docs/content-audit.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;
