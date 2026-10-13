import systems from '../../data/systems-verified.json';
import jokerData from '../../data/jokers.json';
import { cardChips, rankChips, type Card } from '../core/cards';
import { HAND_VALUES } from '../core/poker';
import { computeBlindRequirement, computeInterest, computeRerollCost, computeSellValue } from '../core/economy-runtime';
import type { ScoreResult } from '../core/scoring';
import { handNames, handLessons, practiceCards, scorePractice, scorePartnerExample, cardLabel, rankLabel, suitSymbols } from './tutorial-model';

const storageKey = 'night-tutorial-v1';
const chapters = [
  {id:'goal',title:'先学会怎样过关'},
  {id:'table',title:'看懂牌桌'},
  {id:'hands',title:'认牌与牌型'},
  {id:'practice',title:'亲手选出一个对子'},
  {id:'scoring',title:'分数是怎么来的'},
  {id:'turns',title:'出牌还是弃牌'},
  {id:'partners',title:'伙伴与结算顺序'},
  {id:'tools',title:'升级与改造纸牌'},
  {id:'shop',title:'商店、金币与利息'},
  {id:'route',title:'关卡与完整航程'},
  {id:'controls',title:'操作速查'},
  {id:'questions',title:'遇到问题怎么办'},
];
interface Progress {seen:boolean;chapter:string;practicePassed:boolean}
const initialProgress = ():Progress => ({seen:false,chapter:'goal',practicePassed:false});
function loadProgress():Progress {
  try {
    const raw=JSON.parse(localStorage.getItem(storageKey)??'null');
    if(!raw||typeof raw!=='object')return initialProgress();
    return {seen:raw.seen===true,chapter:chapters.some(c=>c.id===raw.chapter)?raw.chapter:'goal',practicePassed:raw.practicePassed===true};
  } catch {return initialProgress();}
}
export const hasSeenTutorial = () => loadProgress().seen;
const escape = (value:unknown) => String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]!));
const fmt = (value:number) => value.toLocaleString('zh-CN');
const money = (value:number) => '$'+fmt(value);
const blind = (key:string) => systems.blinds.find(b=>b.sourceKey===key)!;
const partners = ['j_joker','j_blackboard'].map(key=>jokerData.find(j=>j.sourceKey===key)!);
const baseScore = scorePractice(practiceCards.slice(0,2).map(c=>c.id))!;
const callout = (title:string,body:string) => `<aside class="tutorial-callout"><strong>${title}</strong><p>${body}</p></aside>`;
function cardMarkup(c:Card, selected=false, interactive=false):string {
  const red=c.suit==='hearts'||c.suit==='diamonds';
  const face=`<span>${rankLabel(c.rank)}</span><b>${suitSymbols[c.suit]}</b>`;
  return interactive
    ? `<button class="tutorial-card ${red?'red':''} ${selected?'selected':''}" data-practice-card="${c.id}" aria-label="${escape(cardLabel(c))}" aria-pressed="${selected}">${face}</button>`
    : `<span class="tutorial-card mini ${red?'red':''}" aria-label="${escape(cardLabel(c))}">${face}</span>`;
}
function scoreMarkup(result:ScoreResult):string {
  return `<div class="tutorial-equation" aria-label="筹码乘倍率得到分数"><span class="tutorial-chips"><strong>${fmt(result.chips)}</strong>筹码</span><b>×</b><span class="tutorial-mult"><strong>${fmt(result.mult)}</strong>倍率</span><b>=</b><span class="tutorial-total"><strong>${fmt(result.score)}</strong>本手分数</span></div>`;
}
function traceMarkup(result:ScoreResult):string {
  const cards = [...practiceCards];
  return `<ol class="tutorial-trace">${result.trace.filter(e=>['base','chips','mult','xmult','xMult'].includes(e.kind)).map(e=>{
    const card=cards.find(c=>c.id===e.cardId);
    const partner=partners.find(j=>'lesson-'+j.sourceKey===e.jokerId);
    const label=e.kind==='base'?'牌型基础':card?cardLabel(card):partner?.name??'效果';
    const action=e.kind==='base'?'起点':e.kind==='chips'?'+ '+fmt(e.amount??0)+' 筹码':e.kind==='mult'?'+ '+fmt(e.amount??0)+' 倍率':'× '+fmt(e.amount??0)+' 倍率';
    return `<li><span>${escape(label)}</span><em>${action}</em><strong>${fmt(e.chipsAfter)} × ${fmt(e.multAfter)}</strong></li>`;
  }).join('')}</ol>`;
}
function handMarkup(hidden:boolean):string {
  return handLessons.filter(h=>h.hidden===hidden).map(h=>`<details class="tutorial-hand-entry" ${h.type==='pair'?'open':''}><summary><span>${h.name}</span><strong>${h.chips} × ${h.mult}</strong></summary><p>${h.rule}</p><div class="tutorial-mini-hand">${h.cards.map(c=>cardMarkup(c)).join('')}</div><p class="tutorial-caption">等级 1 的基础值；每升一级 +${h.levelChips} 基础筹码、+${h.levelMult} 基础倍率。上面的普通牌例实际得到 ${fmt(h.score.score)} 分。</p></details>`).join('');
}
interface TutorialOptions {onExit:()=>void;returnLabel:string;phase?:string;firstVisit?:boolean}
export function mountTutorial(host:HTMLElement,options:TutorialOptions):void {
  const progress=loadProgress();
  let index=options.firstVisit?0:Math.max(0,chapters.findIndex(c=>c.id===progress.chapter));
  let selected:string[]=[],practiceResult:ScoreResult|undefined;
  let reverse=false, savings=systems.economy.interestCap;
  const phaseChapter:Record<string,string>={playing:'turns',shop:'shop',pack:'tools',blindSelect:'route',roundEnd:'shop',won:'route',lost:'questions'};
  function persist(){
    progress.seen=true;progress.chapter=chapters[index]!.id;
    try{localStorage.setItem(storageKey,JSON.stringify(progress));}catch{/* 存储不可用时仍允许阅读与练习。 */}
  }
  function content(id:string):string {
    const start=systems.starting,economy=systems.economy;
    if(id==='goal'){
      const target=computeBlindRequirement(1,'bl_small',1),earned=Math.floor(target*0.4);
      return `<p class="tutorial-lead">你要做的是：在有限的出牌次数内，让本关累计筹码达到目标。</p><div class="tutorial-goal-demo"><div><span>第一小关的基础目标</span><strong>${fmt(target)}</strong></div><div><span>假设已经得到</span><strong>${fmt(earned)}</strong></div><div><span>还需要</span><strong>${fmt(target-earned)}</strong></div></div><p>每手的分数都会累加。比如上面的示意里，下一手再得 ${fmt(target-earned)} 分就能通过；不必一手拿满整个目标。</p><ol class="tutorial-steps"><li><strong>进入关卡。</strong>先看左侧目标和特殊限制。</li><li><strong>组合手牌。</strong>点选牌，再按下“出牌”；需要换牌时按“弃牌”。</li><li><strong>领取金币，进入商店。</strong>买能提高得分的伙伴或道具，再去下一关。</li></ol>${callout('第一局怎么开','先选第一种起始牌组、最低难度。先练会对子、两对和葫芦，再学会用伙伴放大得分。教程末尾可以回到开局页。')}<p>一局要穿过 ${start.winAnte} 段夜航。完成最后的守关关卡后获胜，也可以继续挑战更远的航程。</p><button id="tutorial-try" class="small">现在试着选一个对子</button>`;
    }
    if(id==='table')return `<p class="tutorial-lead">先看目标，再看次数，最后选牌。</p><div class="tutorial-map"><div class="tutorial-map-hud"><strong>左侧</strong><p>本关目标<br>已积累筹码<br>筹码 × 倍率<br>出牌 / 弃牌 / 金币</p></div><div class="tutorial-map-board"><span>上方：伙伴与道具</span><span>中间：关卡或商店</span><span>下方：手牌</span><strong>出牌 · 弃牌 · 排序</strong></div></div><dl class="tutorial-definitions"><dt>本关目标与本关筹码</dt><dd>目标是过关门槛；本关筹码是这一关各次出牌得分的总和。进度条填满就通过。</dd><dt>筹码与倍率</dt><dd>选牌时这里预览的是牌型的基础值。出牌后，纸牌与伙伴效果会继续改变它们，最终分数以实际结算为准。</dd><dt>出牌与弃牌</dt><dd>显示本关还剩几次。出牌用完还没达到目标，这局就结束；弃牌用于换掉不想保留的手牌。</dd><dt>手牌与牌堆</dt><dd>下方是你现在能用的牌。“查看”可看整副牌组。“牌堆”显示本关待抽的牌数和牌组总数。</dd><dt>顶部伙伴与道具</dt><dd>伙伴通常会持续提供能力；道具通常使用一次就消失。点击卡牌可以读完整效果。</dd></dl>`;
    if(id==='hands')return `<p class="tutorial-lead">牌型决定基础筹码与倍率。先记住“相同点数”和“相同花色”。</p><p>纸牌点数为 2～10、J、Q、K、A。普通 2～10 提供自己的点数筹码；J/Q/K 各提供 ${rankChips(13)} 筹码，A 提供 ${rankChips(14)} 筹码。“人头牌”指 J、Q、K。</p><p>花色是 ♠ 黑桃、♥ 红心、♣ 梅花、♦ 方块。同花必须是同一个符号；仅同为红色或黑色还不够。</p><div class="tutorial-hand-list">${handMarkup(false)}</div><details class="tutorial-advanced"><summary>进阶：通过改造获得的三种隐藏牌型</summary><p>普通牌组同一点数只有四张。复制或改造纸牌后，才能做出以下组合；首次打出前，这些牌型的星图不会按通常规则加入牌池。</p>${handMarkup(true)}</details>${callout('怎样选牌型','围绕已有伙伴和升级过的牌型出牌。同一手只按识别出的一个主牌型计算基础值；各牌型的分数不相加。特殊伙伴能改变顺子、同花条件，具体看卡牌说明。')}`;
    if(id==='practice'){
      const feedback=!practiceResult?'点两张 9，再按“练习出牌”。':practiceResult.handType==='pair'?(selected.length===2?'对子成立！两张 9 都参与计分。':'对子成立！附带的普通牌被打出，但没有给这个对子增加筹码。'):'现在识别为高牌。试着选两张点数相同的 9。';
      return `<p class="tutorial-lead">试着选出一个对子：点两张 9。再点一次可以取消选择。</p><div class="tutorial-practice-cards">${practiceCards.map(c=>cardMarkup(c,selected.includes(c.id),true)).join('')}</div><div class="tutorial-practice-actions"><span id="tutorial-selection">已选 ${selected.length} / ${practiceCards.length} 张</span><button id="tutorial-play" class="primary" ${!selected.length?'disabled':''}>练习出牌</button><button id="tutorial-reset" class="small">重新选择</button></div><div id="tutorial-feedback" class="tutorial-feedback" aria-live="polite"><p>${feedback}</p>${practiceResult?`<strong>本手牌型：${handNames[practiceResult.handType]}</strong>${scoreMarkup(practiceResult)}<p>真正计分的是：${practiceResult.scoringCards.map(cardLabel).join('、')}。</p>`:''}</div>${callout('接着试一件事','保留两张9，再多选一张K并练习出牌。你会发现普通的附带K没有提高对子分数；只打两张9，可以把K留给后面的手牌。石印等特殊牌与伙伴可能改变哪些牌参与计分。')}<p class="tutorial-caption">这是可反复尝试的练习牌桌；你的正式航程会保留原来的金币、次数和牌组。</p>`;
    }
    if(id==='scoring')return `<p class="tutorial-lead">本手分数 = 最终筹码 × 最终倍率。</p><p>拿刚才的两张9作例子。等级1对子先给 ${HAND_VALUES.pair.chips} 基础筹码、${HAND_VALUES.pair.mult} 基础倍率；两张普通9各加 ${cardChips(practiceCards[0]!)} 筹码。</p>${traceMarkup(baseScore)}${scoreMarkup(baseScore)}<p>所以这手得到 ${fmt(baseScore.score)} 分，并加到“本关筹码”中。多带一张没参与计分的普通牌，不会自动多加它的点数。</p><h3>有伙伴或改造牌时</h3><ol class="tutorial-steps"><li>先处理会影响这手牌的事前效果，确定牌型基础值。</li><li>计分牌从左到右结算，每张牌也可触发伙伴效果。</li><li>再处理留在手里的效果，例如留手倍率增强。</li><li>结算伙伴行及其他修正，最后将筹码乘倍率。</li></ol><p>“+倍率”是相加，“×倍率”是相乘。重触发会让对应牌的效果再走一次；每次加筹、加倍或乘倍都会出现在逐项结算中。</p>${callout('排序为什么有用','同一牌型不会因为普通手牌左右换位就变成另一牌型，但触发顺序会改变结果。先看卡牌要求，再决定手牌和伙伴的左右位置。')}`;
    if(id==='turns')return `<p class="tutorial-lead">有好牌型就出牌；缺关键牌时，用弃牌换取机会。</p><dl class="tutorial-definitions"><dt>出牌</dt><dd>点选一至五张手牌，再点击“出牌”。它消耗一次出牌机会，把得分加入本关筹码，并按规则补牌；到达目标就结束本关。</dd><dt>弃牌</dt><dd>选中想换掉的牌，点击“弃牌”。它消耗弃牌机会并补牌，普通弃牌不增加关卡分数，也不消耗出牌机会。少数伙伴或印记会在弃牌时触发。</dd></dl><p>基础规则起手 ${start.handSize} 张，每关 ${start.hands} 次出牌、${start.discards} 次弃牌。起始牌组、难度、伙伴或守关技能可能改变它们，左侧显示的是本关实际剩余次数。</p><h3>第一次选牌可以这样想</h3><ol class="tutorial-steps"><li>按点数排序，找对子、三条与两对。</li><li>如果想做葫芦，保留三条或对子，换掉其他牌。</li><li>想做同花时，按花色排序，保留同一花色。</li><li>看剩余次数与目标。离目标还很远时，优先准备能配合伙伴的强手；已经接近时，够分就可以结束本关。</li></ol>${callout('出牌按钮是确认','点击手牌只是选择，再点一次可取消。看清已选数量后按“出牌”；每次机会都很宝贵。没有选牌、正在结算或不在出牌阶段时，按钮不会执行。')}`;
    if(id==='partners'){
      const result=scorePartnerExample(reverse),order=reverse?partners.slice().reverse():partners;
      return `<p class="tutorial-lead">伙伴是持续能力。购买时，先看触发条件，再看它增加什么。</p><ul><li><strong>加筹码：</strong>提高蓝色数字。</li><li><strong>加倍率：</strong>给红色数字加一个值。</li><li><strong>乘倍率：</strong>把当前红色数字放大。</li><li><strong>其他能力：</strong>成长、挣钱、复制、重触发或改变出牌条件。</li></ul><h3>试着交换两个伙伴</h3><p>仍然打出两张9；留手是梅花K和黑桃2，满足${partners[1]!.name}的“留手全为黑桃或梅花”条件。</p><div class="tutorial-partners">${order.map(j=>`<div><strong>${j.name}</strong><p>${j.description}</p></div>`).join('')}</div><button id="tutorial-swap" class="small">交换左右位置</button>${traceMarkup(result)}${scoreMarkup(result)}${callout('这个例子先加再乘更高','两位伙伴在同一结算阶段按位置触发。先加倍率，再乘倍率，能让新增的倍率也被放大；切换位置看看两个实际结果。其他效果可能有不同触发阶段，应按其条件判断。')}<p>正式游戏中，点击持有伙伴，再用详情里的“左移”“右移”；也可以拖动调整位置。基础伙伴位置是 ${start.jokerSlots} 个，满位时可出售已有伙伴腾出位置。带“常驻”标记的伙伴不能出售。</p>`;
    }
    if(id==='tools')return `<p class="tutorial-lead">升级牌型，改造纸牌，把随机手牌变成你的优势。</p><dl class="tutorial-definitions"><dt>星图：提高某个牌型等级</dt><dd>用匹配星图后，该牌型未来的基础筹码与倍率增长。比如对子每升一级，基础筹码 +${HAND_VALUES.pair.levelChips}、基础倍率 +${HAND_VALUES.pair.levelMult}。具体增长可在“认牌与牌型”中查。</dd><dt>占卜与秘术：改造或产生资源</dt><dd>可能改变点数、花色、强化、版本，或者复制/销毁牌、产生其他卡。使用前读说明，确认需要几张目标。</dd><dt>需要选择目标时</dt><dd>先回到牌桌选好手牌，再点击顶部道具并按“使用道具”。从卡包中使用时，也先选手牌，再点击选项、看详情并确认。单纯查看详情不消耗选择。</dd><dt>道具位置与卡包</dt><dd>基础道具位置有 ${start.consumableSlots} 个。商店购买的道具通常先存进这里；卡包中的星图、占卜等通常直接使用。选项卡显示还能选几张，也可以跳过剩余。</dd></dl><details class="tutorial-advanced"><summary>查阅：八种强化的具体作用</summary>${systems.enhancements.map(e=>`<p><strong>${e.name}：</strong>${e.description}</p>`).join('')}</details><details class="tutorial-advanced"><summary>查阅：四种印记的触发时机</summary>${systems.seals.map(e=>`<p><strong>${e.name}：</strong>${e.description}</p>`).join('')}</details><details class="tutorial-advanced"><summary>查阅：纸牌与伙伴的版本</summary>${systems.editions.filter(e=>e.sourceKey!=='e_base').map(e=>`<p><strong>${e.name}：</strong>${e.description}</p>`).join('')}</details>${callout('哪些牌要留下','有些强化在参与出牌时生效，有些留在手里才生效。例如留手倍率增强需要保留手牌。按说明安排，而不是把所有好牌都一起打出去。')}`;
    if(id==='shop')return `<p class="tutorial-lead">金币用来增强下一关，也能通过存钱产生利息。</p><h3>先买什么</h3><ol class="tutorial-steps"><li>前几关先补稳定得分的伙伴，看看条件能否配合你常出的牌型。</li><li>用星图集中升级常用牌型，用占卜或秘术改善牌组。</li><li>凭单提供本局持续升级，例如商店位置或经济能力。它不同于一次使用的道具。</li><li>购买前看价格和位置，保留足够资源应对上涨的目标。</li></ol><p>点击商品会打开详情，再按“购买”确认。点击持有卡牌可以使用或出售。以普通版本${partners[0]!.name}为例，基础购买价 ${money(partners[0]!.cost)}，普通卖价 ${money(computeSellValue(partners[0]!.cost))}；实际价格看当时弹窗。</p><h3>基础利息，亲手算一次</h3><p>按发放本关奖励前的现金，每存 ${money(economy.interestUnit)} 得 ${money(economy.interestAmount)} 利息；基础计息本金上限 ${money(economy.interestCap)}，因此最多得 ${money(computeInterest(economy.interestCap))}。部分牌组、凭单会修改或禁用利息。</p><div class="tutorial-interest"><label for="tutorial-money">发奖前现金 <output id="tutorial-cash">${money(savings)}</output></label><input id="tutorial-money" type="range" min="0" max="${economy.interestCap*2}" step="1" value="${savings}"><p>这次基础利息：<strong id="tutorial-interest-value">${money(computeInterest(savings))}</strong></p></div><p>通常每次剩余出牌可带来 ${money(economy.moneyPerHand)} 奖励；基础规则下，剩余弃牌的奖励是 ${money(economy.moneyPerDiscard)}。结算页会逐项显示本关实际收入。</p><h3>重掷与特殊伙伴</h3><p>重掷会刷新普通货架；基础付费重掷价格依次为 ${[0,1,2].map(n=>money(computeRerollCost(n))).join('、')}…… 同次商店每付费一次再增加 ${money(economy.rerollIncrement)}，下一家商店重置。免费次数和凭单可能改变价格。</p><p>租用伙伴每关支付 ${money(economy.rentalPerRound)}；限期伙伴会在期限后失效；常驻伙伴无法出售或摧毁。购买前看清标记和说明。</p>`;
    if(id==='route')return `<p class="tutorial-lead">一段夜航要依次通过小关、大关和守关关卡。</p><div class="tutorial-route"><span>${blind('bl_small').name}<small>小关</small></span><b>→</b><span>${blind('bl_big').name}<small>大关</small></span><b>→</b><span>守关者<small>特殊规则</small></span></div><p>通过后领取收入并进入商店；下一段目标继续上涨。共穿过 ${systems.starting.winAnte} 段，也就是 ${systems.starting.winAnte*3} 关，击败最后守关者后获胜。</p><h3>守关者会改变规则</h3><p>先阅读左侧“本关目标”下的说明。比如这些关卡：</p>${['bl_psychic','bl_water','bl_house'].map(key=>`<p><strong>${blind(key).name}：</strong>${blind(key).description}</p>`).join('')}<p>灰暗或背面的牌可能不能照平常方式使用。不同守关者的解除办法和条件也不同，能解除能力的伙伴要按说明使用。</p><h3>跳过关卡意味着什么</h3><p>小关与大关可跳过，获得一枚标签；这次不会拿到正常过关收入，也不会进入通常的过关商店。标签可能立即生效，也可能留到之后触发。守关关卡必须应对。刚开始可以先逐关游玩，熟悉标签后再决定是否跳过。</p><h3>成功与失败</h3><p>达到目标会立即结算本关。出牌次数用完、分数仍不足时，这次航程结束，可以重开。完成八段后，可按“继续航行”保留伙伴与资源进入更远的关卡。</p>`;
    if(id==='controls')return `<p class="tutorial-lead">鼠标、触摸和键盘都可以完成主要操作。</p><dl class="tutorial-definitions"><dt>选择 / 取消选择</dt><dd>点一次手牌选中，选中牌会抬起；再点一次取消。键盘数字1～9对应当前手牌的位置。</dd><dt>确认出牌</dt><dd>点击“出牌”，或按 Enter。</dd><dt>弃掉已选牌</dt><dd>点击“弃牌”，或按 Backspace。</dd><dt>手牌排序</dt><dd>“按点数”方便找对子，“按花色”方便找同花。← / → 移动最近选中的手牌，也可拖动换位。</dd><dt>调整伙伴</dt><dd>点击持有伙伴，在详情中左移或右移；也能拖动。</dd><dt>查看能力与买卖</dt><dd>点击伙伴、道具、商品或卡包，先阅读详情再确认。道具需要手牌目标时，先选择目标。</dd><dt>看慢一点</dt><dd>底部“结算速度”可调慢。顶部能开关声音；“设置”里可减少运动与屏幕震动。</dd><dt>退出与恢复</dt><dd>操作后会自动保存。刷新后，在开局页点“继续航行”；设置中也可导出本局存档。</dd><dt>随时复习</dt><dd>点顶部“教程”。“图鉴”可以查所有伙伴、道具、牌组和关卡。</dd></dl><p>手机手牌可能分两排，顺序为先上排从左到右，再下排从左到右。弹窗打开时，键盘出牌不会触发正式航程。</p>`;
    return `<p class="tutorial-lead">卡住时，先看下面对应的情况。</p><details open class="tutorial-advanced"><summary>为什么选了牌，分数还没变化？</summary><p>选中只是准备。点击下方“出牌”后才会扣次数并得分。“弃牌”主要用于换牌。</p></details><details class="tutorial-advanced"><summary>为什么打出五张，只算了两张？</summary><p>对子只取对应的两张普通牌；其他普通附带牌不参与计分。石印或特定伙伴等例外会改变计分集合。可以在选牌练习中多选一张K试试。</p></details><details class="tutorial-advanced"><summary>左侧预览为什么与最后得分不同？</summary><p>选牌预览显示牌型的基础筹码与倍率。正式结算还会加纸牌点数、强化、伙伴与留手效果。看最后的“得到多少筹码”提示。</p></details><details class="tutorial-advanced"><summary>为什么出牌或弃牌按钮是灰的？</summary><p>检查有没有选中手牌、是否正在结算、是否已经进入商店或过关。弃牌次数为零时也不能再弃牌。特殊关卡可能要求选满五张或限制牌型。</p></details><details class="tutorial-advanced"><summary>为什么不能买伙伴或使用道具？</summary><p>先看金币和持有位置。伙伴或道具满位时，按说明使用或出售已有卡牌。需要改造目标的道具，先回到牌桌选好所需张数，再打开道具确认。下方状态提示会说明未完成的原因。</p></details><details class="tutorial-advanced"><summary>怎样提高得分，而不是一直重开？</summary><p>先围绕一个常用牌型建立伙伴组合：补筹码、补倍率，再放大倍率；用星图升级，用改造提高抽到目标牌型的机会。每关开始先看限制，商店买能实际触发的能力，留意剩余次数与目标。</p></details><details class="tutorial-advanced"><summary>种子是什么？</summary><p>种子决定可重现的随机序列。相同种子、相同牌组、难度和相同操作，会重现本游戏的一局；换操作顺序也可能改变后续抽牌或商品。</p></details><p class="tutorial-caption">现在可以回到牌桌试一局。之后遇到具体卡牌，打开详情或图鉴阅读对应能力。</p>`;
  }
  function render(focus?:string){
    persist();
    const current=chapters[index]!;
    host.innerHTML=`<section class="tutorial-shell" aria-label="新手航行课"><div class="tutorial-header"><div><p class="tutorial-kicker">从第一手牌开始学</p><h2>新手航行课</h2></div><button id="tutorial-exit" class="small">${options.returnLabel}</button></div><div class="tutorial-layout"><nav class="tutorial-nav" aria-label="教程章节">${chapters.map((c,i)=>`<button data-tutorial-chapter="${c.id}" ${i===index?'aria-current="step"':''}><span>${i+1}</span>${c.title}</button>`).join('')}</nav><div class="tutorial-reading"><label class="tutorial-mobile-chapters" for="tutorial-chapter">跳转章节<select id="tutorial-chapter">${chapters.map((c,i)=>`<option value="${c.id}" ${i===index?'selected':''}>${i+1}. ${c.title}</option>`).join('')}</select></label><article id="tutorial-article" tabindex="-1"><h3 class="tutorial-lesson-title">${current.title}</h3>${content(current.id)}</article></div></div><div class="tutorial-footer"><span id="tutorial-progress">第 ${index+1} / ${chapters.length} 课${progress.practicePassed?' · 对子练习已通过':''}</span><div><button id="tutorial-prev" class="small" ${index===0?'disabled':''}>上一课</button><button id="tutorial-next" class="primary">${index===chapters.length-1?options.returnLabel:'下一课'}</button></div></div>${options.phase&&phaseChapter[options.phase]?`<button id="tutorial-current" class="tutorial-context">我卡在当前这一步，查看相关课程</button>`:''}</section>`;
    host.querySelector<HTMLButtonElement>('#tutorial-exit')!.onclick=options.onExit;
    host.querySelector<HTMLButtonElement>('#tutorial-prev')!.onclick=()=>go(index-1);
    host.querySelector<HTMLButtonElement>('#tutorial-next')!.onclick=()=>index===chapters.length-1?options.onExit():go(index+1);
    host.querySelectorAll<HTMLButtonElement>('[data-tutorial-chapter]').forEach(b=>b.onclick=()=>go(chapters.findIndex(c=>c.id===b.dataset.tutorialChapter)));
    host.querySelector<HTMLSelectElement>('#tutorial-chapter')!.onchange=e=>go(chapters.findIndex(c=>c.id===(e.target as HTMLSelectElement).value));
    const currentButton=host.querySelector<HTMLButtonElement>('#tutorial-current');
    if(currentButton)currentButton.onclick=()=>go(chapters.findIndex(c=>c.id===phaseChapter[options.phase!]));
    const tryButton=host.querySelector<HTMLButtonElement>('#tutorial-try');if(tryButton)tryButton.onclick=()=>go(chapters.findIndex(c=>c.id==='practice'));
    host.querySelectorAll<HTMLButtonElement>('[data-practice-card]').forEach(b=>b.onclick=()=>{
      const id=b.dataset.practiceCard!;
      selected=selected.includes(id)?selected.filter(x=>x!==id):[...selected,id];
      practiceResult=undefined;render(`[data-practice-card="${id}"]`);
    });
    const play=host.querySelector<HTMLButtonElement>('#tutorial-play');
    if(play)play.onclick=()=>{practiceResult=scorePractice(selected);if(practiceResult?.handType==='pair')progress.practicePassed=true;render('#tutorial-play');};
    const reset=host.querySelector<HTMLButtonElement>('#tutorial-reset');if(reset)reset.onclick=()=>{selected=[];practiceResult=undefined;render('#tutorial-reset');};
    const swap=host.querySelector<HTMLButtonElement>('#tutorial-swap');if(swap)swap.onclick=()=>{reverse=!reverse;render('#tutorial-swap');};
    const input=host.querySelector<HTMLInputElement>('#tutorial-money');if(input)input.oninput=()=>{
      savings=Number(input.value);
      host.querySelector<HTMLOutputElement>('#tutorial-cash')!.textContent=money(savings);
      host.querySelector<HTMLElement>('#tutorial-interest-value')!.textContent=money(computeInterest(savings));
    };
    if(focus)host.querySelector<HTMLElement>(focus)?.focus({preventScroll:true});
  }
  function go(next:number){index=Math.max(0,Math.min(chapters.length-1,next));render();host.querySelector<HTMLElement>('#tutorial-article')!.focus({preventScroll:true});}
  render();
}
