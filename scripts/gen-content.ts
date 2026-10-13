import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root=resolve(import.meta.dirname,'..');
interface Fact {id:string;subject:string;value:unknown;source:string;confidence:string}
const evidenceFiles=readdirSync(resolve(root,'data')).filter(f=>/^evidence-.*\.json$/.test(f)&&f!=='evidence-systems.json').sort();
const bundles=evidenceFiles.map(f=>({file:f,...JSON.parse(readFileSync(resolve(root,'data',f),'utf8'))}));
const facts:Fact[]=bundles.flatMap(b=>b.facts);
const seen=new Set<string>();
for(const fact of facts){
  if(!fact.id||!fact.subject||!fact.source||!fact.confidence)throw new Error(`证据字段不齐：${fact.id}`);
  if(seen.has(fact.id))throw new Error(`事实编号重复：${fact.id}`);seen.add(fact.id);
  for(const part of fact.source.split(/;\s*/)){
    const match=part.match(/^(references\/[^:]+):(\d+)(?:-(\d+))?/);
    if(match&&existsSync(resolve(root,match[1]!))){
      const lines=readFileSync(resolve(root,match[1]!),'utf8').split('\n').length;
      if(Number(match[2])<1||Number(match[3]??match[2])>lines)throw new Error(`行号超界：${fact.id} ${part}`);
    }
  }
}
writeFileSync(resolve(root,'data/facts.json'),JSON.stringify({schema:1,version:'1.0.1o-FULL',facts},null,2)+'\n');
const cell=(v:unknown)=> (typeof v==='string'?v:JSON.stringify(v)).replaceAll('|','\\|').replaceAll('\n','<br>');
const provenance=JSON.parse(readFileSync(resolve(root,'docs/source-provenance.json'),'utf8'));
if(!/^[a-f0-9]{40}$/i.test(provenance.commit??''))throw new Error('固定来源记录缺少有效提交号：docs/source-provenance.json');
writeFileSync(resolve(root,'docs/fact-table.md'),`# 事实表\n\n参考版本：1.0.1o-FULL；用户已确认本机无原版。参考源固定提交：${provenance.commit}。\n\n所有“高”表示参考源码可核验，尚不表示已通过游戏内导出或差分。TBD 不进入可宣称一致的范围。\n\n事实 | 值/公式 | 出处（文件:行号 或 JSON 字段） | 置信度\n---|---|---|---\n`+facts.map(f=>`${cell(f.id+' '+f.subject)} | ${cell(f.value)} | ${cell(f.source)} | ${cell(f.confidence)}`).join('\n')+'\n');
writeFileSync(resolve(root,'src/content/generated.ts'),`// 此文件由 scripts/gen-content.ts 生成；只灌装独立制作的数据。\nimport systemsData from '../../data/systems-verified.json';\nimport jokersData from '../../data/jokers.json';\nimport evidence from '../../data/facts.json';\nexport const generatedSystems = systemsData;\nexport const generatedJokers = jokersData;\nexport const facts = evidence.facts;\nexport const sourceVersion = evidence.version;\n`);
console.log(`已生成 ${facts.length} 条事实及完整内容模块。`);
