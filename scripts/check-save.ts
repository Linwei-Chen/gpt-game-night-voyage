import {createRun,enterBlind,toggleCard,discardSelected,playSelected,serializeRun,restoreRun} from '../src/core/run-engine';
const a=enterBlind(createRun('RESTORE'));toggleCard(a,a.hand[0]!.id);discardSelected(a);const b=restoreRun(serializeRun(a));toggleCard(a,a.hand[0]!.id);toggleCard(b,b.hand[0]!.id);playSelected(a);playSelected(b);
const paths:string[]=[];
function compare(a:any,b:any,path:string){if(typeof a==='object'&&a&&typeof b==='object'&&b){for(const key of new Set([...Object.keys(a),...Object.keys(b)]))compare(a[key],b[key],path+'.'+key);}else if(a!==b)paths.push(path+' '+a+' / '+b);}
compare(JSON.parse(serializeRun(a)),JSON.parse(serializeRun(b)),'state');console.log(paths.slice(0,30));
