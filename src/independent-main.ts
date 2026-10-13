import './original-style.css';
import { hasSeenTutorial, mountTutorial } from './ui/tutorial';
import { SCORE_POP_MS } from './render/timing';
await document.fonts.load('16px "Noto Local"');
import { CardTable, GameAudio, type TableCard } from './render/original-table';
import { createRun, enterBlind, toggleCard, playSelected, discardSelected, sortHand, moveHandCard, continueAfterRound, continueEndless, leaveShop, skipBlind, rerollBoss, bossRerollCost, rerollShop, rerollCost, buyOffer, sellItem, useConsumable, takePackCard, closePack, currentBlindKey, pokerRules, serializeRun, restoreRun, type RunState, type Offer } from './core/run-engine';
import { evaluatePoker, handValue, HAND_VALUES, type HandType } from './core/poker';
import type { Card } from './core/cards';
import { getJokerModifiers } from './content/jokers';
import { systemsContent as definitions } from './content/systems-runtime';
import jokers from '../data/jokers.json';

const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const table=new CardTable($('table'));const audio=new GameAudio();let state:RunState|undefined;let busy=false;
const modal=$<HTMLDialogElement>('modal');const modalBody=$('modal-content');
let tutorialExit:(()=>void)|undefined;
const handNames:Record<HandType,string>={highCard:'高牌',pair:'对子',twoPair:'两对',threeOfAKind:'三条',straight:'顺子',flush:'同花',fullHouse:'葫芦',fourOfAKind:'四条',straightFlush:'同花顺',fiveOfAKind:'五条',flushHouse:'同花葫芦',flushFive:'同花五条'};
const suitNames:Record<string,string>={spades:'黑桃',hearts:'红心',clubs:'梅花',diamonds:'方块'};
const enhancementNames:Record<string,string>=Object.fromEntries(definitions.enhancements.map(e=>[e.sourceKey.replace(/^m_/,''),e.name]));
const getJ=(key:string)=>jokers.find(j=>j.sourceKey===key)!;
const getC=(key:string)=>definitions.consumables.find(c=>c.sourceKey===key)!;
const getB=(key:string)=>definitions.blinds.find(b=>b.sourceKey===key)!;
const escape=(s:unknown)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const status=(s:string)=>{$('status').textContent=s;};
function dialog(html:string){tutorialExit=undefined;modal.classList.remove('tutorial-modal');modal.removeAttribute('aria-label');modalBody.innerHTML=html;if(!modal.open)modal.showModal();}
function closeDialog(){if(tutorialExit){const exit=tutorialExit;tutorialExit=undefined;modal.classList.remove('tutorial-modal');modal.removeAttribute('aria-label');exit();return;}modal.close();}
modal.addEventListener('cancel',e=>{if(tutorialExit){e.preventDefault();closeDialog();}});
$('close-modal').onclick=closeDialog;
const prefs=JSON.parse(localStorage.getItem('night-prefs')??'{}');audio.muted=prefs.muted??true;table.reducedMotion=prefs.reducedMotion??matchMedia('(prefers-reduced-motion: reduce)').matches;
function save(){if(state)localStorage.setItem('night-save',serializeRun(state));localStorage.setItem('night-prefs',JSON.stringify({muted:audio.muted,reducedMotion:table.reducedMotion}));}
async function act(fn:()=>void|Promise<void>){if(busy)return;try{await fn();if(state)save();await render();}catch(e){status(e instanceof Error?e.message:'操作未完成，请重试');}}
function cardView(c:Card):TableCard {
 const rank=c.rank===14?'A':c.rank===13?'K':c.rank===12?'Q':c.rank===11?'J':String(c.rank);
 return {id:c.id,title:c.custom?.faceDown?'背面纸牌':`${suitNames[c.suit]} ${rank}`,kind:'playing',rank:c.rank,suit:c.suit,selected:!!state?.selected.includes(c.id),debuffed:c.debuffed,faceDown:c.custom?.faceDown,enhancement:c.enhancement?enhancementNames[c.enhancement]:undefined,edition:c.edition,seal:c.seal};
}
function offerView(o:Offer):TableCard {
 if(o.card)return {...cardView(o.card),id:o.id,price:o.price};
 const def=o.kind==='joker'?getJ(o.sourceKey):o.kind==='pack'?definitions.boosters.find(p=>p.sourceKey===o.sourceKey):o.kind==='voucher'?definitions.vouchers.find(v=>v.sourceKey===o.sourceKey):getC(o.sourceKey);
 const rarity=o.kind==='joker'?['','常见','进阶','稀有','传说'][(def as any)?.rarity]:o.kind==='pack'?`${(def as any)?.size} 选 ${(def as any)?.choose}`:o.kind==='voucher'?'本局升级':o.kind==='planet'?'牌型升级':o.kind==='spectral'?'秘术':'改造';
 return {id:o.id,key:o.sourceKey,title:def?.name??'纸牌',kind:o.kind==='joker'?'joker':o.kind==='pack'?'pack':o.kind==='voucher'?'voucher':'consumable',subtitle:rarity,price:o.price,edition:o.edition};
}
function blindDesc(key:string){const b=getB(key) as any;return b.description??b.effectDescription??(b.boss?'特殊关卡，出牌前请留意限制':'凑出牌型，让总筹码达到目标。');}
async function render(){
 if(!state){await table.render({hand:[],jokers:[],consumables:[],played:[],offers:[],packs:[],packChoices:[],stage:'menu'});return;}
 const s=state,b=getB(currentBlindKey(s));
 $('ante-label').textContent=`夜航 ${s.ante}${s.system.endless?' · 继续航行':' / '+definitions.starting.winAnte}`;$('round-label').textContent=`第 ${s.round||1} 关`;
 $('target').textContent=format(s.target);$('blind-name').textContent=b.name;$('blind-effect').textContent=s.system.blindDisabled?'本关特殊能力已解除。':blindDesc(b.sourceKey);$('round-score').textContent=format(s.roundScore);
 $('score-progress').style.width=`${Math.min(100,s.roundScore/s.target*100)}%`;$('money').textContent=`$${s.dollars}`;$('hands-left').textContent=String(s.handsLeft);$('discards-left').textContent=String(s.discardsLeft);
 $('deck-count').textContent=`牌堆 ${s.phase==='playing'?s.drawPile.length:s.deck.length} / ${s.deck.length}`;$('joker-count').textContent=`伙伴 ${s.jokers.length} / ${s.jokerSlots}`;$('consumable-count').textContent=`道具 ${s.consumables.length} / ${s.consumableSlots}`;
 $('seed-label').textContent=`种子 ${s.seed}`;$('selected-count').textContent=`${s.selected.length} / 5`;
 if(!busy&&s.selected.length){const cards=s.hand.filter(c=>s.selected.includes(c.id)),p=evaluatePoker(cards,pokerRules(s));const v=handValue(p.type,s.handLevels[p.type]);$('hand-name').textContent=`${handNames[p.type]} · 等级 ${s.handLevels[p.type]}`;$('chips').textContent=format(v.chips);$('mult').textContent=format(v.mult);}
 else if(!busy&&s.lastScore){$('hand-name').textContent=handNames[s.lastScore.handType];$('chips').textContent=format(s.lastScore.chips);$('mult').textContent=format(s.lastScore.mult);}
 else if(!busy){$('hand-name').textContent='选择你的牌';$('chips').textContent='0';$('mult').textContent='0';}
 $<HTMLButtonElement>('play-btn').disabled=busy||s.phase!=='playing'||!s.selected.length;$<HTMLButtonElement>('discard-btn').disabled=busy||s.phase!=='playing'||s.discardsLeft<=0||!s.selected.length;
 $('hand-hint').textContent=s.phase==='pack'?'先选手牌，再点击卡包中的道具使用':s.phase==='shop'?'点击商品购买，点击持有的卡牌使用或出售':'点击手牌选择一至五张，再出牌或弃牌';
 await table.render({stage:busy?'playing':s.phase,hand:s.hand.map(cardView),jokers:s.jokers.map(j=>({id:j.id,key:j.sourceKey,title:j.state?.faceDown?'背面伙伴':getJ(j.sourceKey)?.name??'伙伴',kind:'joker',faceDown:j.state?.faceDown,subtitle:j.state?.faceDown?'未知伙伴':j.eternal?'常驻':j.perishable!==undefined?`${j.perishable} 关有效`:['','常见','进阶','稀有','传说'][getJ(j.sourceKey)?.rarity??1],edition:j.edition,debuffed:j.debuffed})),consumables:s.consumables.map(c=>({id:c.id,key:c.sourceKey,title:getC(c.sourceKey)?.name??'道具',kind:'consumable',subtitle:getC(c.sourceKey)?.kind==='planet'?'牌型升级':'一次使用',edition:c.edition})),played:s.played.map(cardView),offers:s.phase==='shop'?[...s.shop.offers,...(s.shop.voucher?[s.shop.voucher]:[])].map(offerView):[],packs:s.shop.packs.map(offerView),packChoices:s.pack?.choices.map(o=>({...offerView(o),price:undefined}))??[]});
 const panel=$('stage-panel');panel.innerHTML='';
 if(busy){}else if(s.phase==='blindSelect'){
  const keys=['bl_small','bl_big',s.bossKey];panel.innerHTML=`<div class="blind-options">${keys.map((key,i)=>`<div class="blind-option ${s.blindIndex===i?'active':i>s.blindIndex?'future':''}"><h3>${escape(getB(key).name)}</h3><strong>${format(requirement(s,key))}</strong><p>${escape(blindDesc(key))}</p>${i===s.blindIndex?'<button class="primary small" id="enter-blind">进入关卡</button>'+(i<2?'<button class="small" id="skip-blind">跳过 · '+escape(definitions.tags.find(t=>t.sourceKey===s.system.blindTags?.[i])?.name??'领取标签')+'</button>':''):'<span class="tip">'+(i<s.blindIndex?'已通过':'待进入')+'</span>'}</div>`).join('')}</div>`;
  $('enter-blind').onclick=()=>act(()=>{enterBlind(s);status('手牌已发出。组合一至五张牌，开始累积筹码。');});if($('skip-blind'))$('skip-blind').onclick=()=>act(()=>{skipBlind(s);status('跳过此关，已领取一枚标签。');});
  if(s.system.bossRerollsAllowed){panel.insertAdjacentHTML('beforeend',`<button id="reroll-boss" class="small">更换守关者 $${bossRerollCost}</button>`);$<HTMLButtonElement>('reroll-boss').disabled=s.dollars-bossRerollCost<(s.system.bankruptAt??0)||(s.system.bossRerollsAllowed>0&&s.system.bossRerolled);$('reroll-boss').onclick=()=>act(()=>rerollBoss(s));}
 }else if(s.phase==='roundEnd'){
  const p=s.payout!;panel.innerHTML=`<div class="stage-message"><h2>这段航程，已通过。</h2><p>本关奖励 $${p?.blind??0} · 剩余出牌 $${p?.hands??0} · 利息 $${p?.interest??0}</p><strong>本轮收入 +$${p?.total??0}</strong><p><button class="primary" id="continue-round">${s.ante===definitions.starting.winAnte&&s.blindIndex===2?'完成夜航':'前往商店'}</button></p></div>`;$('continue-round').onclick=()=>act(()=>{continueAfterRound(s);status(s.phase==='won'?'八段夜航完成。':'选购伙伴、道具与卡包，准备下一关。');});
 }else if(s.phase==='shop'){
  panel.innerHTML=`<div class="shop-bar"><button id="reroll-shop" class="small">重掷 $${rerollCost(s)}</button> <button id="leave-shop" class="primary small">离开商店</button></div>`;$('reroll-shop').onclick=()=>act(()=>rerollShop(s));$('leave-shop').onclick=()=>act(()=>leaveShop(s));
 }else if(s.phase==='pack'){
  panel.innerHTML=`<div class="shop-bar"><span class="tip">还能选择 ${s.pack?.remaining} 张</span> <button id="close-pack" class="small">跳过剩余</button></div>`;$('close-pack').onclick=()=>act(()=>closePack(s));
 }else if(s.phase==='lost'||s.phase==='won'){
  panel.innerHTML=`<div class="stage-message"><h2>${s.phase==='won'?'八段夜航，全部抵达。':'航线停在这里。'}</h2><p>夜航 ${s.ante} · 共出牌 ${s.handsPlayed} 次 · 种子 ${escape(s.seed)}</p>${s.phase==='won'?'<button class="primary" id="continue-endless">继续航行</button> ':''}<button class="primary" id="restart-end">开启新航程</button></div>`;$('restart-end').onclick=()=>showStart();if($('continue-endless'))$('continue-endless').onclick=()=>act(()=>{continueEndless(s);status('继续这次夜航，目标会随航程增长。');});
 }
 positionStagePanel();
}
function positionStagePanel(){
 const panel=$('stage-panel'),host=$('table'),compact=host.clientWidth<600;
 host.parentElement?.classList.toggle('shelf-stage',state?.phase==='shop'||state?.phase==='pack');
 if(state?.phase==='shop'||state?.phase==='pack'){
  const scale=Math.min(host.clientWidth/(compact?540:1080),host.clientHeight/630);
  panel.style.top=`${(host.clientHeight-630*scale)/2+(compact?190:180)*scale}px`;
  panel.style.alignItems=compact?'flex-start':'center';
 }else{panel.style.top='';panel.style.alignItems='center';}
}
window.addEventListener('resize',positionStagePanel);
import { computeBlindRequirement } from './core/economy-runtime';
function requirement(s:RunState,key:string){return computeBlindRequirement(s.blindAnte,key,s.stake,s.system.anteScaling??definitions.starting.anteScaling);}
function format(n:number){return Number.isFinite(n)?Number(n.toFixed(2)).toLocaleString('zh-CN'):'∞';}

table.onClick=card=>{
 if(!state||busy)return;const s=state;
 if(s.hand.some(c=>c.id===card.id)){act(()=>{toggleCard(s,card.id);audio.play('select');});return;}
 if(s.phase==='shop'&&[...s.shop.offers,...s.shop.packs,...(s.shop.voucher?[s.shop.voucher]:[])].some(o=>o.id===card.id)){offerDialog(card.id);return;}
 if(s.phase==='pack'&&s.pack?.choices.some(o=>o.id===card.id)){packDialog(card.id);return;}
 inventoryDialog(card.id);
};
table.onReorder=(from,to)=>act(()=>{
 if(!state||busy)return;const row=state.hand.some(c=>c.id===from)?state.hand:state.jokers;
 const a=row.findIndex(c=>c.id===from),b=row.findIndex(c=>c.id===to);if(a>=0&&b>=0){const card=row.splice(a,1)[0]!;row.splice(b,0,card as any);}
});
function playingDescription(c:Card):string{
 const sealKey=c.seal?c.seal[0]!.toUpperCase()+c.seal.slice(1):undefined;
 const detail=[c.enhancement?definitions.enhancements.find(e=>e.sourceKey===`m_${c.enhancement}`)?.description:'普通纸牌',c.edition?definitions.editions.find(e=>e.sourceKey===`e_${c.edition}`)?.description:undefined,sealKey?definitions.seals.find(e=>e.sourceKey===sealKey)?.description:undefined];
 return detail.filter(Boolean).map(d=>d!.replace(/[。；;]+$/u,'')).join('；')+'。购买后加入本局牌组。';
}
function stickerInfo(o:{edition?:string;eternal?:boolean;rental?:boolean;perishable?:number}):string{
 return [o.eternal?'常驻伙伴，无法出售或摧毁':undefined,o.rental?`租用伙伴，每关支付 $${definitions.economy.rentalPerRound}`:undefined,o.perishable!==undefined?`剩余 ${o.perishable} 关有效，之后能力失效`:undefined,o.edition==='negative'?'空域版本，额外提供一个持有位置':undefined].filter(Boolean).join(' · ');
}
function packDialog(id:string){
 const s=state!,o=s.pack!.choices.find(o=>o.id===id)!;const def=o.kind==='joker'?getJ(o.sourceKey):o.card?undefined:getC(o.sourceKey);
 dialog(`<h2>${escape(o.card?cardView(o.card).title:def?.name)}</h2><p>${escape(o.card?playingDescription(o.card):(def as any)?.description)}</p><p class="tip">${escape(stickerInfo(o))}</p><p class="tip">需要改造手牌时，先返回牌桌选好目标，再使用此牌。</p><div class="info-actions"><button id="take-pack-dialog" class="primary">${o.kind==='joker'||o.card?'选择此牌':'使用此牌'}</button><button id="cancel-dialog">返回牌桌</button></div>`);
 $('take-pack-dialog').onclick=()=>act(()=>{takePackCard(s,id);closeDialog();status('已选择卡包中的一张牌。');});$('cancel-dialog').onclick=closeDialog;
}
function offerDialog(id:string){
 const s=state!,o=[...s.shop.offers,...s.shop.packs,...(s.shop.voucher?[s.shop.voucher]:[])].find(o=>o.id===id)!;const def=o.kind==='joker'?getJ(o.sourceKey):o.kind==='pack'?definitions.boosters.find(p=>p.sourceKey===o.sourceKey):o.kind==='voucher'?definitions.vouchers.find(v=>v.sourceKey===o.sourceKey):getC(o.sourceKey);
 dialog(`<h2>${escape(o.card?cardView(o.card).title:def?.name??'纸牌')}</h2><p>${escape((o.card?playingDescription(o.card):(def as any)?.description)??(o.kind==='pack'?`打开后从 ${(def as any)?.size} 张中选择 ${(def as any)?.choose} 张。`:'购买后可在本局使用。'))}</p><p class="tip">${escape(stickerInfo(o))}</p><div class="info-actions"><button id="buy-dialog" class="primary">购买 $${o.price}</button><button id="cancel-dialog">返回牌桌</button></div>`);
 $('buy-dialog').onclick=()=>act(()=>{buyOffer(s,id);closeDialog();audio.play('money');status('已购买。');});$('cancel-dialog').onclick=closeDialog;
}
function jokerLiveInfo(s:RunState,j:RunState['jokers'][number]):string{
 const v=j.state??{},t=s.system.jokerRound??{};
 const rank=(r:number)=>r===14?'A':r===13?'K':r===12?'Q':r===11?'J':String(r);
 const targets:Record<string,string>={j_mail:`本轮目标：${rank(t.mailRank)}`,j_ancient:`本轮目标：${suitNames[t.ancientSuit]}`,j_castle:`本轮目标：${suitNames[t.castleSuit]}`,j_idol:`本轮目标：${suitNames[t.idolSuit]} ${rank(t.idolRank)}`,j_todo_list:`本轮目标：${handNames[v.targetHand as HandType]}`,j_invisible:`已经历 ${v.rounds} 关`};
 const lines=[targets[j.sourceKey]];
 if(v.mult!==undefined&&getJ(j.sourceKey).rules.some(r=>JSON.stringify(r.actions).includes('$state.mult')))lines.push(`当前增加 ${v.mult} 倍率`);
 if(v.xmult!==undefined&&getJ(j.sourceKey).rules.some(r=>JSON.stringify(r.actions).includes('$state.xmult')))lines.push(`当前乘 ${Number(v.xmult.toFixed(2))} 倍率`);
 if(v.remaining!==undefined)lines.push(`剩余 ${v.remaining} 次`);
 return lines.filter(Boolean).join(' · ');
}
function inventoryDialog(id:string){
 const s=state!,j=s.jokers.find(j=>j.id===id),c=s.consumables.find(c=>c.id===id);if(!j&&!c)return;const def=j?getJ(j.sourceKey):getC(c!.sourceKey),value=j?j.sellValue:c!.sellValue;
 dialog(`<h2>${escape(j?.state?.faceDown?'背面伙伴':def.name)}</h2><p>${escape(j?.state?.faceDown?'身份被此关遮住了。你仍可移动这张伙伴或出售。':(def as any).description??'选择需要改造的手牌后使用。')}</p>${j&&!j.state?.faceDown?'<p class="tip">'+escape(jokerLiveInfo(s,j))+'</p>':''}${j?'<p class="tip">'+escape(stickerInfo(j))+'</p>':''}${j?'<p class="tip">按左右键调整伙伴顺序，顺序会影响结算。</p>':''}<div class="info-actions">${c?'<button id="use-dialog" class="primary">使用道具</button>':''}${j?'<button id="move-left">左移</button><button id="move-right">右移</button>':''}<button id="sell-dialog" ${j?.eternal?'disabled':''}>出售 $${value}</button><button id="cancel-dialog">返回</button></div>`);
 if(c)$('use-dialog').onclick=()=>act(()=>{useConsumable(s,id);closeDialog();status('道具已使用。');});
 if(j)for(const [button,delta] of [['move-left',-1],['move-right',1]] as const)$(''+button).onclick=()=>act(()=>{const i=s.jokers.findIndex(j=>j.id===id),k=i+delta;if(k>=0&&k<s.jokers.length)[s.jokers[i],s.jokers[k]]=[s.jokers[k]!,s.jokers[i]!];closeDialog();});
 $('sell-dialog').onclick=()=>act(()=>{sellItem(s,id);closeDialog();audio.play('money');status('已出售。');});$('cancel-dialog').onclick=closeDialog;
}
$('play-btn').onclick=()=>act(async()=>{
 if(!state)return;const s=state;busy=true;
 try{
  const result=playSelected(s);await render();const speed=Number($<HTMLSelectElement>('speed').value);let index=0;
  for(const e of result.trace){
   if(!['chips','mult','xmult','xMult','money','dollars','base'].includes(e.kind))continue;
   $('chips').textContent=format(e.chipsAfter);$('mult').textContent=format(e.multAfter);$('hand-name').textContent=handNames[result.handType];
   const isMult=['mult','xmult','xMult'].includes(e.kind),isMoney=['money','dollars'].includes(e.kind);const label=e.kind==='base'?'开始结算':`${e.kind.toLowerCase()==='xmult'?'×':'+'}${format(e.amount??0)}`;
   table.pulse(e.cardId??e.jokerId??'',label,isMult?'mult':isMoney?'money':'chips');audio.play(isMult?'mult':isMoney?'money':'chips',index++/Math.max(1,result.trace.length-1));
   $('chips').classList.remove('score-pop');$('mult').classList.remove('score-pop');void $('chips').offsetWidth;$(isMult?'mult':'chips').classList.add('score-pop');
   if(!table.reducedMotion)await new Promise(resolve=>setTimeout(resolve,SCORE_POP_MS/speed));
  }
  $('chips').textContent=format(result.chips);$('mult').textContent=format(result.mult);status(`${handNames[result.handType]}得到 ${format(result.score)} 筹码。`);if(s.phase==='roundEnd')audio.play('win');
 }finally{busy=false;}
});
$('discard-btn').onclick=()=>act(()=>{if(state){discardSelected(state);status('已弃牌并补牌。');}});
for(const [id,delta] of [['hand-left',-1],['hand-right',1]] as const)$(id).onclick=()=>act(()=>{if(state&&state.selected.length)moveHandCard(state,state.selected.at(-1)!,delta);});
$('sort-rank').onclick=()=>act(()=>{if(state)sortHand(state,'rank');});$('sort-suit').onclick=()=>act(()=>{if(state)sortHand(state,'suit');});
$('new-run-btn').onclick=()=>showStart();
interface StartOptions {seed:string;deck:string;stake:string}
function showStart(initial?:StartOptions){
 let stored=localStorage.getItem('night-save');
 dialog(`<div class="start-dialog"><div class="start-mark">✦</div><h2>星筹夜航</h2><p>组合手中的纸牌，让筹码与倍率一起增长。<br>结识有奇妙能力的伙伴，穿越八段夜航。</p><div class="form-row"><label>种子<input id="start-seed" maxlength="24" value="${escape(initial?.seed??'NIGHT13')}" aria-label="种子"></label><label>起始牌组<select id="start-deck">${definitions.decks.map(d=>`<option value="${d.sourceKey}">${escape(d.name)}</option>`).join('')}</select></label><label>难度<select id="start-stake">${definitions.stakes.map(d=>`<option value="${d.stake_level}">${escape(d.name)}</option>`).join('')}</select></label></div><p id="deck-description" class="tip">每关额外一次弃牌。</p><div class="info-actions" style="justify-content:center"><button id="start-run" class="primary">开始航行</button>${stored?'<button id="resume-run">继续航行</button>':''}</div><p class="start-learn">第一次玩？先练习选牌和计分。<br><button id="start-tutorial" class="small">新手教程 · 含选牌练习</button></p><p class="tip">游戏会在浏览器内自动保存。相同种子和操作可重现此游戏的一局。</p></div>`);
 const select=$<HTMLSelectElement>('start-deck');if(initial){select.value=initial.deck;$<HTMLSelectElement>('start-stake').value=initial.stake;}const updateDeckDescription=()=>{$('deck-description').textContent=(definitions.decks.find(d=>d.sourceKey===select.value) as any)?.description??'这副牌组有自己独特的起始规则。';};select.onchange=updateDeckDescription;updateDeckDescription();
 $('start-tutorial').onclick=()=>openTutorial();
 $('start-run').onclick=()=>act(()=>{state=createRun($<HTMLInputElement>('start-seed').value.trim(),select.value,Number($<HTMLSelectElement>('start-stake').value));closeDialog();status('选择第一关，启程。');});
 if(stored)$('resume-run').onclick=()=>act(()=>{state=restoreRun(stored!);closeDialog();status('已恢复上一次航行。');});
}
function openTutorial(firstVisit=false){
 const startOpen=modal.open&&!!$('start-run');
 const fromStart=startOpen||!state;
 const initial=startOpen?{seed:$<HTMLInputElement>('start-seed').value,deck:$<HTMLSelectElement>('start-deck').value,stake:$<HTMLSelectElement>('start-stake').value}:undefined;
 dialog('');modal.classList.add('tutorial-modal');modal.setAttribute('aria-label','新手航行课');
 tutorialExit=()=>{if(fromStart)showStart(initial);else modal.close();};
 mountTutorial(modalBody,{onExit:closeDialog,returnLabel:fromStart?'去开局':'回到牌桌',phase:fromStart?undefined:state?.phase,firstVisit});
}
function updateSoundButton(){$('sound-btn').textContent=`声音：${audio.muted?'关':'开'}`;$('sound-btn').setAttribute('aria-pressed',String(!audio.muted));}
updateSoundButton();$('sound-btn').onclick=async()=>{audio.muted=!audio.muted;await audio.unlock();updateSoundButton();save();audio.play('select');};
$('settings-btn').onclick=()=>{dialog(`<h2>设置</h2><p><label><input id="reduce-motion" type="checkbox" ${table.reducedMotion?'checked':''}> 减少运动与屏幕震动</label></p><p><button id="export-save">导出本局存档</button></p><p class="tip">关闭声音后，计分过程仍会逐项显示。浏览器刷新会保留上一局。</p>`);$<HTMLInputElement>('reduce-motion').onchange=e=>{table.reducedMotion=(e.target as HTMLInputElement).checked;save();};$('export-save').onclick=()=>{if(!state)return;const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([serializeRun(state)],{type:'application/json'}));a.download=`星筹夜航-${state.seed}.json`;a.click();URL.revokeObjectURL(a.href);};};
$('help-btn').textContent='教程';
$('help-btn').onclick=()=>openTutorial();
$('deck-btn').onclick=()=>{if(!state)return;dialog(`<h2>本局牌组 · ${state.deck.length} 张</h2><div class="collection-grid">${state.deck.slice().sort((a,b)=>b.rank-a.rank).map(c=>`<div class="collection-item"><strong>${escape(cardView(c).title)}</strong><small>${escape(c.enhancement?enhancementNames[c.enhancement]:'普通牌')}${c.seal?' · 印记':''}</small></div>`).join('')}</div>`);};
function collection(kind='jokers'){
 const categories:Record<string,{label:string;items:any[]}>={jokers:{label:'伙伴 150',items:jokers},consumables:{label:'道具 52',items:definitions.consumables},vouchers:{label:'升级 32',items:definitions.vouchers},decks:{label:'牌组 15',items:definitions.decks},blinds:{label:'关卡 30',items:definitions.blinds},tags:{label:'标签 24',items:definitions.tags},stakes:{label:'难度 8',items:definitions.stakes},boosters:{label:'卡包 32',items:definitions.boosters},enhancements:{label:'强化 8',items:definitions.enhancements},seals:{label:'印记 4',items:definitions.seals},editions:{label:'版本 5',items:definitions.editions}};
 dialog(`<h2>航行图鉴</h2><div class="filter-tabs">${Object.entries(categories).map(([k,v])=>`<button data-category="${k}" class="small ${kind===k?'active-tab':''}">${v.label}</button>`).join('')}</div><div class="collection-grid">${categories[kind]!.items.map(c=>`<div class="collection-item"><strong>${escape(c.name)}</strong><small>${c.cost!==undefined?'$'+c.cost:''}${c.rarity?' · '+['','常见','进阶','稀有','传说'][c.rarity]:''}</small><p>${escape(c.description??'在航行中发现它的用途。')}</p></div>`).join('')}</div>`);
 modalBody.querySelectorAll<HTMLButtonElement>('[data-category]').forEach(b=>b.onclick=()=>collection(b.dataset.category!));
}
$('collection-btn').onclick=()=>collection();
window.addEventListener('keydown',e=>{if(modal.open||!state||busy)return;if(e.key>='1'&&e.key<='9'){const c=state.hand[Number(e.key)-1];if(c)act(()=>toggleCard(state!,c.id));}if(e.key==='Enter')$('play-btn').click();if(e.key==='Backspace'){e.preventDefault();$('discard-btn').click();}});
// 自动化读取公开状态，不暴露修改状态或作弊入口。
Object.defineProperty(window,'nightState',{get:()=>state?JSON.parse(serializeRun(state)):null});
await render();if(hasSeenTutorial())showStart();else openTutorial(true);
