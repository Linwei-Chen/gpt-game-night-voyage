"""用真实按钮核验教程：首次进入、课程、练习、返回、阅读记忆与正式存档隔离。"""
import argparse,json,hashlib
from pathlib import Path
from playwright.sync_api import sync_playwright
parser=argparse.ArgumentParser()
parser.add_argument('--url',default='http://127.0.0.1:53428/')
args=parser.parse_args()
root=Path(__file__).resolve().parent.parent
out=root/'docs/screenshots/tutorial'
out.mkdir(parents=True,exist_ok=True)
source_names=['src/ui/tutorial.ts','src/ui/tutorial-model.ts','src/independent-main.ts','src/original-style.css','src/core/run-engine.ts','src/core/rng.ts']
def hashes():return {name:hashlib.sha256((root/name).read_bytes()).hexdigest() for name in source_names}
before=hashes()
chapters=['goal','table','hands','practice','scoring','turns','partners','tools','shop','route','controls','questions']
errors=[];console_errors=[];checks=[]
with sync_playwright() as p:
    browser=p.chromium.launch(**({'executable_path':'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'} if Path('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome').exists() else {}),headless=True,args=['--disable-gpu-sandbox'])
    def new_page(width,height):
        context=browser.new_context(viewport={'width':width,'height':height},device_scale_factor=1)
        page=context.new_page()
        page.set_default_timeout(10000);page.set_default_navigation_timeout(45000)
        page.on('pageerror',lambda e:errors.append(str(e)))
        page.on('console',lambda m:console_errors.append(m.text) if m.type=='error' else None)
        page.goto(args.url);page.wait_for_load_state('networkidle');page.evaluate('document.fonts.ready')
        return context,page
    def go(page,id,mobile=False):
        if mobile:page.locator('#tutorial-chapter').select_option(id)
        else:page.locator('[data-tutorial-chapter="'+id+'"]').click()
        assert page.locator('#tutorial-article').inner_text().strip()
    def score(page,value):
        assert page.locator('.tutorial-total strong').inner_text()==str(value)
    def geometry(page):
        result=page.evaluate("""() => {
          const d=document.querySelector('#modal'),r=d.getBoundingClientRect(),a=document.querySelector('#tutorial-article'),close=d.querySelector('#close-modal').getBoundingClientRect(),exit=d.querySelector('#tutorial-exit').getBoundingClientRect();
          const closeExitGap=Math.max(close.left-exit.right,exit.left-close.right,close.top-exit.bottom,exit.top-close.bottom);
          return {closeExitGap,pageOverflow:document.documentElement.scrollWidth>innerWidth,dialogOverflow:d.scrollWidth>d.clientWidth+1,articleOverflow:a.scrollWidth>a.clientWidth+1,dialogInside:r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight,
          controls:[...d.querySelectorAll('#tutorial-exit,#tutorial-next,#tutorial-prev,#close-modal')].map(b=>{const q=b.getBoundingClientRect();return {id:b.id,inside:q.left>=r.left&&q.right<=r.right&&q.top>=r.top&&q.bottom<=r.bottom,hit:document.elementFromPoint(q.x+q.width/2,q.y+q.height/2)===b};})};}""")
        assert not result['pageOverflow'] and not result['dialogOverflow'] and not result['articleOverflow'],result
        assert result['dialogInside'],result
        assert result['closeExitGap']>=12,result  # 两个按钮的焦点边框也要留出互不覆盖的空间。
        assert all(c['inside'] and c['hit'] for c in result['controls']),result
        return result
    context,page=new_page(1440,1000)
    assert page.locator('.wordmark').evaluate('(a)=>a.href')==page.evaluate("new URL('./',location.href).href")
    checks.append({'name':'项目子路径返回首页保持当前试玩入口','passed':True})
    assert page.locator('.tutorial-lesson-title').inner_text()=='先学会怎样过关'
    assert page.locator('[data-tutorial-chapter]').count()==12
    assert page.evaluate('window.nightState') is None
    assert page.evaluate("localStorage.getItem('night-save')") is None
    page.screenshot(path=str(out/'01-first-visit-desktop.png'),full_page=True)
    checks.append({'name':'首次进入自动显示十二章教程','passed':True,'geometry':geometry(page)})
    go(page,'practice')
    assert page.locator('#tutorial-play').is_disabled()
    page.locator('[data-practice-card="lesson-spades-9"]').focus()
    page.locator('[data-practice-card="lesson-spades-9"]').press('Enter')
    page.locator('[data-practice-card="lesson-hearts-9"]').press('Space')
    assert page.locator('[data-practice-card][aria-pressed="true"]').count()==2
    page.locator('#tutorial-play').click();score(page,56)
    assert '对子成立' in page.locator('#tutorial-feedback').inner_text()
    page.screenshot(path=str(out/'02-practice-desktop.png'),full_page=True)
    page.locator('[data-practice-card="lesson-clubs-13"]').click();page.locator('#tutorial-play').click();score(page,56)
    assert '附带的普通牌' in page.locator('#tutorial-feedback').inner_text()
    page.locator('#tutorial-reset').click();assert page.locator('#tutorial-play').is_disabled()
    page.locator('[data-practice-card="lesson-clubs-13"]').click();page.locator('#tutorial-play').click();score(page,15)
    checks.append({'name':'键盘选牌、对子56、附带K仍56、单K15、重置','passed':True})
    go(page,'partners');score(page,504);page.locator('#tutorial-swap').click();score(page,280)
    page.screenshot(path=str(out/'03-partner-order-desktop.png'),full_page=True)
    page.locator('#tutorial-swap').click();score(page,504)
    checks.append({'name':'实际伙伴两种顺序504与280，反复切换无累积','passed':True})
    go(page,'shop')
    cash=page.locator('#tutorial-money')
    cash.press('Home');assert page.locator('#tutorial-interest-value').inner_text()=='$0'
    for _ in range(10):cash.press('ArrowRight')
    assert page.locator('#tutorial-cash').inner_text()=='$10'
    assert page.locator('#tutorial-interest-value').inner_text()=='$2'
    cash.press('End');assert page.locator('#tutorial-cash').inner_text()=='$50'
    assert page.locator('#tutorial-interest-value').inner_text()=='$5'
    checks.append({'name':'利息滑块0→10→50，结果0→2→5','passed':True})
    go(page,'hands');assert page.locator('.tutorial-hand-entry').count()==12
    page.locator('.tutorial-advanced > summary').click()
    assert page.locator('.tutorial-hand-entry').count()==12
    for chapter in chapters:
        go(page,chapter);assert len(page.locator('#tutorial-article').inner_text())>100,chapter
        geometry(page)
    checks.append({'name':'十二章导航、全部牌型和详细内容','passed':True})
    page.keyboard.press('Escape');page.locator('#start-seed').fill('TUTORIAL-CHECK')
    page.locator('#start-deck').select_option('b_checkered')
    page.locator('#start-stake').select_option('1')
    page.locator('#start-tutorial').click();go(page,'practice');page.locator('#tutorial-exit').click()
    assert page.locator('#start-seed').input_value()=='TUTORIAL-CHECK'
    assert page.locator('#start-deck').input_value()=='b_checkered'
    assert page.locator('#start-stake').input_value()=='1'
    checks.append({'name':'开局页教程入口与返回保留开局选择','passed':True})
    page.locator('#start-run').click();page.locator('#enter-blind').click()
    page.wait_for_function("window.nightState?.phase==='playing'")
    first_id=page.evaluate('window.nightState.hand[0].id')
    page.locator('.card-hit[data-card-id="'+first_id+'"]').click()
    saved=page.evaluate("localStorage.getItem('night-save')")
    snapshot=page.evaluate('JSON.stringify(window.nightState)')
    prefs=page.evaluate("localStorage.getItem('night-prefs')")
    page.locator('#help-btn').click()
    page.locator('#tutorial-current').click();assert page.locator('.tutorial-lesson-title').inner_text()=='出牌还是弃牌'
    go(page,'practice')
    page.locator('[data-practice-card="lesson-spades-9"]').click()
    page.locator('[data-practice-card="lesson-hearts-9"]').click()
    page.locator('#tutorial-play').click();score(page,56)
    go(page,'partners');page.locator('#tutorial-swap').click();score(page,280)
    go(page,'shop');page.locator('#tutorial-money').press('Home')
    assert page.evaluate('JSON.stringify(window.nightState)')==snapshot
    assert page.evaluate("localStorage.getItem('night-save')")==saved
    assert page.evaluate("localStorage.getItem('night-prefs')")==prefs
    page.locator('#close-modal').click();assert not page.locator('#modal').evaluate('(d)=>d.open')
    assert page.evaluate('JSON.stringify(window.nightState)')==snapshot
    page.locator('#help-btn').click();assert page.locator('.tutorial-lesson-title').inner_text()=='商店、金币与利息'
    page.keyboard.press('Escape');assert not page.locator('#modal').evaluate('(d)=>d.open')
    checks.append({'name':'正式出牌阶段教程与所有练习不改状态、RNG、金币、次数、选择和存档','passed':True})
    page.reload();page.wait_for_load_state('networkidle');assert page.locator('#start-run').count()==1
    assert page.locator('.tutorial-shell').count()==0
    page.locator('#resume-run').click();assert page.evaluate('JSON.stringify(window.nightState)')==snapshot
    page.locator('#help-btn').click();assert page.locator('.tutorial-lesson-title').inner_text()=='商店、金币与利息'
    checks.append({'name':'再次进入不重复自动引导、刷新恢复航程与阅读位置','passed':True})
    context.close()
    context,page=new_page(390,844)
    assert page.locator('.tutorial-lesson-title').inner_text()=='先学会怎样过关'
    page.screenshot(path=str(out/'04-first-visit-mobile.png'),full_page=True)
    geometry(page)
    go(page,'practice',True)
    page.locator('[data-practice-card="lesson-spades-9"]').click()
    page.locator('[data-practice-card="lesson-hearts-9"]').click()
    page.locator('#tutorial-play').click();score(page,56)
    page.screenshot(path=str(out/'05-practice-mobile.png'),full_page=True)
    checks.append({'name':'手机390×844选牌练习与触摸操作','passed':True,'geometry':geometry(page)})
    for chapter in chapters:go(page,chapter,True);geometry(page)
    go(page,'shop',True);page.screenshot(path=str(out/'06-shop-mobile.png'),full_page=True)
    go(page,'questions',True);page.locator('#tutorial-next').click();assert page.locator('#start-run').count()==1
    page.locator('#start-tutorial').click();assert page.locator('.tutorial-lesson-title').inner_text()=='遇到问题怎么办'
    page.locator('#tutorial-exit').click()
    page.screenshot(path=str(out/'07-menu-entry-mobile.png'),full_page=True)
    checks.append({'name':'手机十二章下拉导航、末课返回、入口与阅读记忆','passed':True})
    context.close()
    assert not errors and not console_errors,(errors,console_errors)
    after=hashes();assert after==before,'检查过程中游戏版本变化'
    result={'method':'独立Chrome浏览器；只通过真实按钮、键盘、滑块操作；只读正式状态和存档，不注入游戏动作或改写localStorage。','url':args.url,'browser':browser.version,'errors':errors,'consoleErrors':console_errors,'checks':checks,'sourceBefore':before,'sourceAfter':after,'sourceStable':True}
    (root/'docs/tutorial-browser-report.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({'passed':True,'checks':len(checks),'errors':errors,'consoleErrors':console_errors},ensure_ascii=False),flush=True)
    browser.close()
