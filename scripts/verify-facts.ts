/**
 * 全量事实到断言的审计。运行：npx tsx scripts/verify-facts.ts
 * 只生成 docs/fact-assertion-audit.json；不运行行为测试，不读取 references/。
 * 原域报告保持历史状态，当前树哈希单独记录；相等检查不会升级成运行行为验证。
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, sep } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import ts from 'typescript';

const root=resolve(import.meta.dirname,'..');
type Level='independent_scenario'|'partial_field'|'oracle_vector'|'same_source_internal_consistency'|'uncovered';
interface Fact {id:string;subject:string;value:unknown;source:string;confidence:string;[key:string]:unknown}
interface Assertion {file?:string;line?:number;dataLine?:number;name?:string;type?:string;[key:string]:unknown}
interface LegacyMapping {factId:string;source:string;status:string;assertions:Assertion[];verifiedScope:string;unverifiedScope?:string[];relatedBehaviourAssertions?:Assertion[];fieldCoverage?:unknown}
interface LegacyReport {factCount:number;generatedAt:unknown;coverageCounters:unknown;testRun:unknown;artifactHashes:Record<string,string>;facts:LegacyMapping[];extraUiFactAssertions?:LegacyMapping[]}
interface Scope {start:number;end:number;kind:string;nameTemplate:string;hasExpectation:boolean}
interface CheckedAssertion extends Assertion {file:string;line:number;anchorValidation:Record<string,unknown>}
interface Mapping {
 factId:string;domain:string;level:Level;sourceStatus:string;mappingOrigin:string;source:string;sourceConfidence:string;
 assertions:CheckedAssertion[];historicalEvidence:Assertion[];verifiedScope:string;unverifiedScope:string[];
 relatedBehaviourAssertions?:CheckedAssertion[];fieldCoverage?:unknown;internalValueCheck?:Record<string,unknown>;
}
const errors:string[]=[],warnings:string[]=[];
const inspectedFiles=new Set<string>();
const historyReferencesSkipped:{factId:string;file?:string;type?:string}[]=[];
const error=(message:string)=>errors.push(message);
const safePath=(path:string):string=>{
 const target=resolve(root,path),rel=relative(root,target).split(sep).join('/');
 if(!rel||rel.startsWith('../')||rel==='..'||rel==='references'||rel.startsWith('references/'))throw new Error(`不允许读取此路径：${path}`);
 return target;
};
const fileBytes=(path:string):Buffer=>{inspectedFiles.add(path);return readFileSync(safePath(path));};
const text=(path:string):string=>fileBytes(path).toString('utf8');
const read=<T>(path:string):T=>JSON.parse(text(path)) as T;
const hash=(path:string):string=>createHash('sha256').update(fileBytes(path)).digest('hex');
const countBy=<T>(xs:T[],key:(v:T)=>string):Record<string,number>=>xs.reduce((out,v)=>{const k=key(v);out[k]=(out[k]??0)+1;return out;},{} as Record<string,number>);
function uniqueFacts(items:Fact[],name:string):Map<string,Fact>{
 const out=new Map<string,Fact>();
 for(const f of items){
  if(!f.id||!f.subject||!f.source||!f.confidence||!Object.hasOwn(f,'value'))error(`${name}事实字段不齐：${f.id}`);
  if(out.has(f.id))error(`${name}事实ID重复：${f.id}`);
  out.set(f.id,f);
 }
 return out;
}
const merged=read<{version:string;facts:Fact[]}>('data/facts.json');
const facts=uniqueFacts(merged.facts,'总表');
const bundleSpecs=[
 {domain:'joker',file:'data/evidence-jokers.json',expected:2381},
 {domain:'core',file:'data/evidence-scoring.json',expected:62},
 {domain:'system',file:'data/evidence-systems-verified.json',expected:1184},
 {domain:'ui',file:'data/evidence-ui.json',expected:8},
 {domain:'run',file:'data/evidence-run.json',expected:7},
];
const domainById=new Map<string,string>();
const bundleFacts=new Map<string,Fact>();
const bundleCounts:Record<string,number>={};
for(const spec of bundleSpecs){
 const bundle=read<{facts:Fact[]}>(spec.file);uniqueFacts(bundle.facts,spec.file);bundleCounts[spec.domain]=bundle.facts.length;
 if(bundle.facts.length!==spec.expected)error(`${spec.file}应有${spec.expected}条，实际${bundle.facts.length}条`);
 for(const f of bundle.facts){
  if(bundleFacts.has(f.id))error(`分域之间事实ID重复：${f.id}`);
  bundleFacts.set(f.id,f);domainById.set(f.id,spec.domain);
  if(!facts.has(f.id))error(`总表遗漏分域事实：${f.id}`);
  else if(!isDeepStrictEqual(facts.get(f.id),f))error(`总表与分域事实不一致：${f.id}`);
 }
}
for(const id of facts.keys())if(!bundleFacts.has(id))error(`总表中存在未知分域事实：${id}`);
if(facts.size!==3642)error(`最终事实数量应为3642，实际${facts.size}`);

const sourceCache=new Map<string,{lines:string[];scopes:Scope[]}>();
function callBase(expr:ts.Expression):string|undefined{
 if(ts.isIdentifier(expr))return expr.text;
 if(ts.isPropertyAccessExpression(expr))return callBase(expr.expression);
 if(ts.isCallExpression(expr))return callBase(expr.expression);
 return undefined;
}
function testSource(file:string){
 const cached=sourceCache.get(file);if(cached)return cached;
 const code=text(file),source=ts.createSourceFile(file,code,ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);
 const scopes:Scope[]=[];
 const visit=(node:ts.Node)=>{
  if(ts.isCallExpression(node)){
   const base=callBase(node.expression);
   const callback=node.arguments.find(arg=>ts.isArrowFunction(arg)||ts.isFunctionExpression(arg));
   if(callback&&base&&['test','it','afterAll'].includes(base)){
    let hasExpectation=false;
    const findExpectation=(child:ts.Node)=>{if(ts.isCallExpression(child)&&callBase(child.expression)==='expect')hasExpectation=true;ts.forEachChild(child,findExpectation);};
    findExpectation(callback);
    const name=node.arguments[0];
    scopes.push({start:source.getLineAndCharacterOfPosition(node.getStart(source)).line+1,end:source.getLineAndCharacterOfPosition(node.end).line+1,
     kind:base==='afterAll'?'after_all_assertion':'test',nameTemplate:name&&!(ts.isArrowFunction(name)||ts.isFunctionExpression(name))?name.getText(source):'afterAll',hasExpectation});
   }
  }
  ts.forEachChild(node,visit);
 };
 visit(source);const out={lines:code.split(/\r?\n/),scopes};sourceCache.set(file,out);return out;
}
function inspectAssertion(a:Assertion,factId:string):{current?:CheckedAssertion;historical?:Assertion}{
 if(!a.file){error(`${factId}断言缺少文件`);return {};}
 if(a.file==='references'||a.file.startsWith('references/')){
  historyReferencesSkipped.push({factId,file:a.file,type:a.type});return {historical:{...a,readThisAudit:false,dependencyRequired:false}};
 }
 let target:string;
 try{target=safePath(a.file);}catch(e){error(`${factId}断言路径无效：${String(e)}`);return {};}
 if(!existsSync(target)){error(`${factId}断言文件不存在：${a.file}`);return {};}
 if(!a.file.startsWith('tests/')||!a.file.endsWith('.test.ts')){error(`${factId}断言没有指向测试文件：${a.file}`);return {};}
 const src=testSource(a.file);let line=a.line;let resolvedAssertion={...a};let reanchored=false;
 if(!Number.isInteger(line)||!line||line<1||line>src.lines.length){error(`${factId}断言行号越界：${a.file}:${line}`);return {};}
 let scope=src.scopes.filter(s=>s.start<=line!&&line!<=s.end&&s.hasExpectation).sort((a,b)=>(a.end-a.start)-(b.end-b.start))[0];
 // 原核心报告有一项四指断言直接定位于字面量向量行。保留它作数据锚点，另定位实际执行向量的test.each。
 if(!scope&&a.type==='literal_registry_scenario'&&a.file==='tests/jokers.test.ts'&&/v\('j_four_fingers'/.test(src.lines[line-1])){
  const executor=src.scopes.find(s=>s.kind==='test'&&s.hasExpectation&&s.nameTemplate.includes('事件与状态符合源码事实'));
  if(executor){resolvedAssertion={...a,line:executor.start,dataLine:line,originalDefinitionLine:line};line=executor.start;scope=executor;reanchored=true;}
 }
 if(!scope){error(`${factId}断言行号不在含expect的test/afterAll内：${a.file}:${line}`);return {};}
 const currentLine=src.lines[line-1];
 if(!currentLine.trim()){error(`${factId}断言指向空行：${a.file}:${line}`);return {};}
 const dataLine=resolvedAssertion.dataLine;
 if(dataLine!==undefined&&(!Number.isInteger(dataLine)||dataLine<1||dataLine>src.lines.length||!src.lines[dataLine-1].trim())){
  error(`${factId}场景数据行无效：${a.file}:${dataLine}`);return {};
 }
 return {current:{...resolvedAssertion,file:a.file,line,anchorValidation:{fileExists:true,lineExists:true,containsExpectInTestScope:true,
  testKind:scope.kind,testNameTemplate:scope.nameTemplate,testStartLine:scope.start,testEndLine:scope.end,
  sourceLine:currentLine.trim(),...(dataLine===undefined?{}:{dataLineExists:true,dataSourceLine:src.lines[dataLine-1].trim()}),
  ...(reanchored?{literalFixtureReanchoredToExecutor:true,originalSnapshotPreserved:true}:{}),
  nameSemantics:'旧报告name可为模板展开名或简写；当前语法树中的真实声明记录为testNameTemplate。'}}};
}
function findAssertion(file:string,fragment:string,type='literal_scenario',name?:string):Assertion{
 const src=testSource(file),index=src.lines.findIndex(line=>line.includes(fragment));
 if(index<0){error(`未找到测试声明：${file} ${fragment}`);return {file,line:0,name:name??fragment,type};}
 return {file,line:index+1,name:name??fragment,type};
}
const rows=new Map<string,Mapping>();
function put(fid:string,level:Level,assertions:Assertion[],verified:string,unverified:string[],origin:string,status:string=level,extras:Partial<Mapping>={}){
 const fact=facts.get(fid);
 if(!fact){error(`映射引用未知事实：${fid}`);return;}
 if(rows.has(fid)){error(`同一事实重复映射：${fid}`);return;}
 const checked=assertions.map(a=>inspectAssertion(a,fid));
 rows.set(fid,{factId:fid,domain:domainById.get(fid)??'unknown',level,sourceStatus:status,mappingOrigin:origin,source:fact.source,sourceConfidence:fact.confidence,
  assertions:checked.flatMap(a=>a.current?[a.current]:[]),historicalEvidence:checked.flatMap(a=>a.historical?[a.historical]:[]),verifiedScope:verified,unverifiedScope:unverified,...extras});
}
const normalize:Record<string,Level>={
 metadata_internal_consistency_only:'same_source_internal_consistency',scenario_asserted_local:'independent_scenario',catalog_count_asserted:'independent_scenario',
 partially_asserted:'partial_field',unasserted:'uncovered',oracle_independently_matched:'oracle_vector',literal_scenarios_asserted:'independent_scenario',prior_reference_sample_report:'uncovered',
};
const reports:{file:string;report:LegacyReport}[]=[];
for(const [file,domain] of [['docs/jokers-fact-assertions.json','joker'],['docs/core-fact-assertions.json','core']]){
 const report=read<LegacyReport>(file);reports.push({file,report});const seen=new Set<string>();
 for(const old of report.facts){
  if(seen.has(old.factId))error(`${file}原域报告重复映射：${old.factId}`);seen.add(old.factId);
  if(domainById.get(old.factId)!==domain)error(`${file}原域映射分域错误：${old.factId}`);
  if(facts.get(old.factId)?.source!==old.source)error(`${file}出处文本与总表不一致：${old.factId}`);
  const level=normalize[old.status];if(!level){error(`未知原域层级：${old.factId} ${old.status}`);continue;}
  const related=old.relatedBehaviourAssertions?.map(a=>inspectAssertion(a,old.factId)).flatMap(a=>a.current?[a.current]:[]);
  put(old.factId,level,old.assertions,old.verifiedScope,[...(old.unverifiedScope??[]),...(old.status==='prior_reference_sample_report'?['该映射仅保存历史参考报告；本脚本不读取references，当前分发树没有对应的可执行断言，因此按未覆盖统计。']:[])],file,old.status,
   {...(old.fieldCoverage?{fieldCoverage:old.fieldCoverage}:{}),...(related?.length?{relatedBehaviourAssertions:related}:{})});
 }
 const expectedIds=[...domainById].filter(([,d])=>d===domain).map(([id])=>id);
 for(const id of expectedIds)if(!seen.has(id))error(`${file}原域报告遗漏：${id}`);
 if(report.factCount!==seen.size)error(`${file}报告factCount与独立ID数不一致`);
}

// 逐字段值读取与系统域已有一致性用例相同，但这里只报告这一层，绝不称效果已运行。
const systems=read<Record<string,any>>('data/systems-verified.json');
const systemCategories=['consumables','vouchers','decks','blinds','stakes','tags','boosters','enhancements','seals','editions'];
const systemCatalog=new Map<string,any>(systemCategories.flatMap(key=>systems[key]).map(item=>[item.sourceKey,item]));
function get(obj:any,parts:string[]):any{let value=obj;for(const part of parts)value=value?.[part];return value;}
for(const fact of [...facts.values()].filter(f=>domainById.get(f.id)==='system')){
 const [item,...parts]=fact.id.replace(/^system\./,'').split('.');const actual=get(systemCatalog.get(item)??systems[item],parts);
 const same=isDeepStrictEqual(actual,fact.value);if(!same)error(`系统目录字段与采集事实不一致：${fact.id}`);
 put(fact.id,'same_source_internal_consistency',[findAssertion('tests/systems-verified.test.ts','for(const fact of evidence.facts)it(fact.id','catalog_evidence_equality',fact.id)],
  '系统目录中对应字段与采集事实逐项相等；脚本也执行该相等检查。',
  ['目录和事实来自同一采集过程，相等不能排除共同采集错误。','即使validationLayer标为mechanismTrace，字段相等仍不是该效果条件/触发时机/结果的独立行为验证。','系统文件另有真实行为场景，但本次未逐事实建立其精确覆盖关系，不能据此升级1184项。'],
  'tests/systems-verified.test.ts的全量逐字段证据断言', 'metadata_internal_consistency_only',
  {internalValueCheck:{performedThisScript:true,passed:same,path:[item,...parts],comparison:'deep strict equality against captured fact value',capturesOriginalRuntime:false}});
}

// 小丑元字段也复核目录值，但保留原报告的行为层级，不用这些值比较升级规则。
const jokers=read<any[]>('data/jokers.json'),jokerCatalog=new Map(jokers.map(j=>[j.sourceKey,j]));
const aliases:Record<string,string>={blueprint_compat:'blueprintCompatible',perishable_compat:'perishableCompatible',eternal_compat:'eternalCompatible',unlocked:'unlockedInitially'};
for(const row of rows.values())if(row.domain==='joker'&&row.level==='same_source_internal_consistency'){
 const match=row.factId.match(/^joker\.(j_\w+)\.(.+)$/);
 if(!match){error(`小丑元字段无法定位：${row.factId}`);continue;}
 const parts=match[2].split('.');parts[0]=aliases[parts[0]]??parts[0];
 const same=isDeepStrictEqual(get(jokerCatalog.get(match[1]),parts),facts.get(row.factId)!.value);
 if(!same)error(`小丑目录字段与采集事实不一致：${row.factId}`);
 row.internalValueCheck={performedThisScript:true,passed:same,path:[match[1],...parts],comparison:'deep strict equality against captured fact value',capturesOriginalRuntime:false};
}

const coreReport=reports.find(x=>x.file==='docs/core-fact-assertions.json')!.report;
for(const old of coreReport.extraUiFactAssertions??[]){
 const level=normalize[old.status];if(!level){error(`未知附加UI层级：${old.factId}`);continue;}
 put(old.factId,level,old.assertions,old.verifiedScope,old.unverifiedScope??[],'docs/core-fact-assertions.json.extraUiFactAssertions',old.status);
}
put('UI-001','uncovered',[],'已采集抽牌音高关系；没有对应的独立断言。',['计分音高UI-005的测试不能替代抽牌音高。'],'现有tests/检索');
put('UI-006','uncovered',[],'已采集画面抖动增量；现有时序测试没有验证0.7。',['渲染器引用SCORE_SHAKE不等于强度或录屏效果已验证。'],'现有tests/timing.test.ts检索');
put('VERSION-001','partial_field',[findAssertion('tests/systems-verified.test.ts','固定版本和全部定义数量','literal_metadata')],
 '系统目录version.game有独立字面量1.0.1o-FULL检查。',['原版globals.lua的版本声明与原版游戏内版本没有在本脚本核验；仅检查本地数据版本标记。'],'本轮直接映射');
put('RUN-001','partial_field',[findAssertion('tests/poker.test.ts','空手/超过五张拒绝')],
 '独立牌型入口拒绝空手和6张；五张的多种牌型有实际场景。',['界面/整局toggleCard选择第6张时的上限没有专用断言，不能将判定器边界等同于该按钮回调的完整验收。'],'本轮直接映射');
const costAssertion=findAssertion('tests/game.test.ts','普通改航每底注一次','literal_boundary');
const costLines=testSource('tests/game.test.ts').lines.slice(costAssertion.line!-1,costAssertion.line!+4).join('\n');
const literalCost=/expect\(bossRerollCost\)\.toBe\(10\)/.test(costLines)&&/expect\(s\.dollars\)\.toBe\(20\)/.test(costLines);
put('run.bossRerollCost',literalCost?'independent_scenario':'same_source_internal_consistency',[costAssertion],
 literalCost?'改航费独立字面量10、初始30扣费后20，实际公开改航操作通过对应断言。':'已有扣费行为用例，但期望使用同一个bossRerollCost变量，尚不能独立验证字面量10。',
 ['本脚本只核对断言位置和形式，不运行测试；其他折扣或债务边界另验。'],'本轮直接映射',literalCost?'literal_scenario':'shared_cost_expectation');
put('run.bossRerollAllowance','partial_field',[
 findAssertion('tests/game.test.ts','普通改航每底注一次'),findAssertion('tests/game.test.ts','高级改航可重复')],
 '普通改航第二次拒绝；高级改航允许多次，金币不足时保持局内和RNG状态。',
 ['负bankruptAt债务边界未专用验证；跨Ante恢复普通一次资格和真实凭单兑换到改航的整个链条未逐项覆盖。'],'本轮直接映射');
put('run.blindTagCache','partial_field',[findAssertion('tests/game.test.ts','星轨奖励提升缓存牌型')],
 '初始两项blindTags与跳过时使用缓存标签的场景有断言。',
 ['显示选择界面反复打开时不重新消费RNG、按底注重新生成标签的实际调用轨迹未专用验证。'],'本轮直接映射');
put('run.orbitalHandCache','partial_field',[
 findAssertion('tests/game.test.ts','星轨奖励提升缓存牌型'),findAssertion('tests/game.test.ts','可见牌型包括尚未出过')],
 '跳过按指定缓存牌型pair升3级且不沿用lastHandType=flush；可见基础牌型池含9种。',
 ['用例主动设置缓存目标，不能证明抽取等权性、全部可见隐藏牌型以及按ante/blind缓存的随机调用顺序。'],'本轮直接映射');
put('run.startingDeckSize','partial_field',[findAssertion('tests/game.test.ts','数字牌组的蚀损按实际初始40张')],
 '数字牌组初始实际40张时不会错误发蚀损倍率，覆盖变换后初始基数的一个场景。',
 ['后续多次增删牌后基数保持固定未专用断言；其他起始牌组的基数未逐项映射。'],'本轮直接映射');
put('run.endlessContinuation','independent_scenario',[
 findAssertion('tests/endless.test.ts','首次获胜停在胜利面板'),findAssertion('tests/endless.test.ts','未获胜时拒绝继续'),findAssertion('tests/endless.test.ts','继续标志保存恢复')],
 '公开continueEndless动作：首次胜利后进入商店，保留资源；未获胜拒绝且不改存档；继续标志保存恢复；离店到Ante9且首关目标110000。',
 ['这些场景设置了获胜状态前提；没有证明完整Ante9及之后实战，也没有实际浏览器点击和逐帧原版对照。'],'本轮直接映射');
put('run.winNotificationOnce','independent_scenario',[
 findAssertion('tests/endless.test.ts','首次获胜停在胜利面板'),findAssertion('tests/endless.test.ts','后续终局不再弹出'),findAssertion('tests/endless.test.ts','继续标志保存恢复')],
 '状态机在首次八段获胜进入won，继续后和后续终局进入shop，不再重复首次胜利状态。',
 ['测试核对状态分支，并未统计实际浏览器胜利面板显示次数；不表示完整Ante9+关卡已验收。'],'本轮直接映射');

// 内容中的事实ID链接必须存在；sourceRefs是出处文本，仅保留，不访问本地原始资料。
let contentFactReferenceCount=0;
function checkLinks(value:unknown,location:string):void{
 if(Array.isArray(value)){value.forEach((v,i)=>checkLinks(v,`${location}[${i}]`));return;}
 if(!value||typeof value!=='object')return;
 for(const [key,v] of Object.entries(value)){
  const refs=/factRefs$/i.test(key)&&Array.isArray(v)?v:/factRef$/i.test(key)&&typeof v==='string'?[v]:[];
  for(const ref of refs){contentFactReferenceCount++;if(typeof ref!=='string'||!facts.has(ref))error(`内容引用未知事实：${location}.${key} ${String(ref)}`);}
  checkLinks(v,`${location}.${key}`);
 }
}
checkLinks(jokers,'data/jokers.json');checkLinks(systems,'data/systems-verified.json');
for(const id of facts.keys())if(!rows.has(id))error(`事实缺少验证层级映射：${id}`);
for(const id of rows.keys())if(!facts.has(id))error(`映射中有不存在的事实：${id}`);
for(const row of rows.values())if(row.level!=='uncovered'&&!row.assertions.length)error(`已覆盖层级没有当前测试断言：${row.factId}`);

function collectFiles(dir:string):string[]{
 const out:string[]=[];
 for(const entry of readdirSync(safePath(dir),{withFileTypes:true})){
  const path=`${dir}/${entry.name}`;
  if(lstatSync(safePath(path)).isSymbolicLink()){warnings.push(`快照跳过符号链接：${path}`);continue;}
  if(entry.isDirectory())out.push(...collectFiles(path));else if(entry.isFile())out.push(path);
 }
 return out;
}
const snapshotPaths=[...new Set([...['src','tests','scripts','data'].flatMap(collectFiles),
 'index.html','package.json','package-lock.json','tsconfig.json','vite.config.ts','docs/fact-table.md',...reports.map(r=>r.file)])].sort();
const currentTreeHashes:Record<string,string>={};
for(const path of snapshotPaths)if(existsSync(safePath(path)))currentTreeHashes[path]=hash(path);else warnings.push(`当前树快照中缺少可选文件：${path}`);
const domainReportHistory=reports.map(({file,report})=>({
 file,generatedAt:report.generatedAt,recordedFactCount:report.factCount,recordedCoverageCounters:report.coverageCounters,
 recordedTestRun:report.testRun,recordedArtifactHashes:report.artifactHashes,
 hashComparison:Object.entries(report.artifactHashes).map(([path,recorded])=>{
  if(path==='references'||path.startsWith('references/'))return {file:path,recordedSha256:recorded,status:'reference_not_read'};
  if(!existsSync(safePath(path)))return {file:path,recordedSha256:recorded,status:'missing_from_current_tree'};
  const current=currentTreeHashes[path]??hash(path);
  return {file:path,recordedSha256:recorded,currentSha256:current,status:recorded===current?'same_as_historical_snapshot':'changed_since_historical_snapshot'};
 }),
 note:'原报告及其通过数量原样作为历史记录；文件变化不抹去历史，也不自动证明最终树通过这些测试。',
}));
const ordered=merged.facts.flatMap(f=>rows.has(f.id)?[rows.get(f.id)!]:[]);
const levelCounts=countBy(ordered,row=>row.level);
for(const level of ['independent_scenario','partial_field','oracle_vector','same_source_internal_consistency','uncovered'])levelCounts[level]??=0;
const uncoveredFactIds=ordered.filter(row=>row.level==='uncovered').map(row=>row.factId);
const assertionCount=ordered.reduce((n,row)=>n+row.assertions.length+(row.relatedBehaviourAssertions?.length??0),0);
const tbdFactIds=merged.facts.filter(f=>f.value==='TBD'||/TBD|低|待查/.test(f.confidence)).map(f=>f.id);
const report={
 schemaVersion:1,generatedAt:new Date().toISOString(),referenceVersion:merged.version,
 purpose:'全量事实登记、断言定位、同源字段检查与层级审计；不执行行为测试，不替代原版运行时差分。',
 command:'npx tsx scripts/verify-facts.ts',factCount:facts.size,mappedFactCount:rows.size,expectedFactCount:3642,bundleCounts,levelCounts,
 levelMeaning:{
  independent_scenario:'有独立字面量期望的具体行为或数量场景；只检查现有映射与代码位置，运行结果由最终全测单独报告。',
  partial_field:'仅部分字段或分支有断言；缺口在每条unverifiedScope。',
  oracle_vector:'独立实现的测试引用已采集的真实Lua输出；固定向量范围及原运行时限制保留，本脚本不重新执行Lua或单测。',
  same_source_internal_consistency:'目录字段与同源采集事实相等；本脚本执行值比较。不能排除共同采集错误，也不是行为验证。',
  uncovered:'没有当前分发树中可定位的相应独立断言，或仅有未随分发保存的历史报告。',
 },
 structuralValidation:{passed:errors.length===0,errors,warnings,
  mergedFactsExactlyEqualDomainFacts:!errors.some(e=>/总表|分域/.test(e)),factIdsUnique:!errors.some(e=>/重复/.test(e)),
  allFactsMapped:!errors.some(e=>/遗漏|缺少验证层级/.test(e)),assertionCount,
  assertionPositionsChecked:'测试文件存在、行号非空且在含expect的test/it/afterAll语法节点内；数据行存在；真实声明模板另记。',
  contentFactReferenceCount,contentFactReferencesExist:!errors.some(e=>/内容引用未知事实/.test(e)),
  originalSourceFilesInspected:false,sourceCitationValidation:'只要求登记的出处文本非空并与分域/旧报告一致；不访问references中的原始文件，不能宣称原始来源文件在分发包中存在。',
  referencesReadCount:0,internalValueComparisonsPerformed:ordered.filter(r=>r.internalValueCheck).length,
  internalValueComparisonFailures:ordered.filter(r=>r.internalValueCheck?.passed===false).map(r=>r.factId),
 },
 behaviourTestExecution:{executedThisScript:false,currentPassedCount:null,currentFailedCount:null,
  status:'not_executed_by_this_script',note:'本脚本不编造当前全测结论；最终全测和根覆盖文档由主流程单独维护。原域测试数量只在domainReportHistory中保存为历史。'},
 uncoveredFactIds,tbdFactIds,partialFactIds:ordered.filter(row=>row.level==='partial_field').map(row=>row.factId),
 domainReportHistory,currentTreeHashes,currentTreeHashDigest:createHash('sha256').update(JSON.stringify(currentTreeHashes)).digest('hex'),
 historicalReferenceAssertionsSkipped:historyReferencesSkipped,
 limits:[
  '事实ID和断言位置完整不等于全部公式、条件空间、概率与触发时机的行为验收完成。',
  '系统1184项按同源目录字段一致性统计；mechanismTrace标签或效果对象存在不会升级行为层级。',
  '小丑与核心原域报告保持原状态，当前文件哈希单独记录；历史报告的通过数量不自动绑定最终源码。',
  '本脚本不访问references，不依赖原版资源/反编译资料，分发时仍可运行；原始来源文件的真实性/存在性须另行本地核验。',
  '无原版游戏内导出、完整原版seed轨迹和逐帧录屏核验；Lua固定向量不能推出全部平台与全局随机路径一致。',
  '双精度超大分数行为、原版极端值和separate浮点模式仍有待核验；存档非有限数回归属于另一层证据。',
  '无尽用例只验证继续动作、保存标志、首次胜利状态分支及Ante9首关目标，不是完整Ante9+实战或浏览器面板次数验收。',
 ],facts:ordered,
};
writeFileSync(resolve(root,'docs/fact-assertion-audit.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({factCount:report.factCount,mappedFactCount:report.mappedFactCount,structuralValidationPassed:report.structuralValidation.passed,
 levelCounts:report.levelCounts,uncoveredFactIds:report.uncoveredFactIds,tbdFactIds:report.tbdFactIds,errors:report.structuralValidation.errors,
 behaviourTestsExecuted:false,report:'docs/fact-assertion-audit.json'},null,2));
if(errors.length)process.exitCode=1;
