"""通过真实按钮重放整局；仅读取状态，不注入游戏动作或改写存档。"""
import argparse, json, time
from pathlib import Path
from playwright.sync_api import sync_playwright
parser=argparse.ArgumentParser();parser.add_argument('--url',default='http://127.0.0.1:53427/');args=parser.parse_args()
root=Path(__file__).resolve().parent.parent
out=root/'docs/screenshots';out.mkdir(parents=True,exist_ok=True)
run=json.loads((root/'docs/full-run.json').read_text())
with sync_playwright() as p:
    browser=p.chromium.launch(**({'executable_path':'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'} if Path('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome').exists() else {}),headless=True,args=['--disable-gpu-sandbox'])
    page=browser.new_page(viewport={'width':1440,'height':1000},device_scale_factor=1)
    page.set_default_timeout(10000)
    errors=[];console_errors=[];checks=[]
    page.on('pageerror',lambda e:errors.append(str(e)))
    page.on('console',lambda m:console_errors.append(m.text) if m.type=='error' else None)
    def state():return page.evaluate('window.nightState')
    def card(id):return page.locator('.card-hit').filter(has=page.locator('nothing')) if False else page.locator(f'.card-hit[data-card-id="{id}"]')
    def select(ids):
        s=state()
        for id in s['selected']:
            if id not in ids:card(id).click()
        for id in ids:
            if id not in state()['selected']:card(id).click()
        assert sorted(state()['selected'])==sorted(ids)
    def geometry():
        return page.evaluate("""() => {const host=document.querySelector('#table').getBoundingClientRect();return [...document.querySelectorAll('.card-hit')].map(b=>{const r=b.getBoundingClientRect(),hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return {id:b.dataset.cardId,title:b.getAttribute('aria-label'),inside:r.left>=host.left-1&&r.right<=host.right+1,centerHit:hit===b,width:r.width,height:r.height};});}""")
    page.goto(args.url);page.wait_for_load_state('networkidle');page.evaluate('document.fonts.ready')
    if page.locator('#tutorial-exit').count():page.locator('#tutorial-exit').click()
    page.screenshot(path=str(out/'01-menu.png'),full_page=True)
    page.locator('#start-seed').fill(run['seed']);page.locator('#start-deck').select_option(run['deck']);page.locator('#start-stake').select_option(str(run['stake']));page.locator('#start-run').click()
    page.locator('#settings-btn').click();page.locator('#reduce-motion').check();page.locator('#close-modal').click()
    page.screenshot(path=str(out/'02-blind-select.png'),full_page=True)
    refreshed=False;mobile=False
    for e in run['log']:
        a=e['action']
        if a=='enterBlind':page.locator('#enter-blind').click()
        elif a=='play':
            select(e['ids']);page.locator('#play-btn').click()
            page.wait_for_function('(v)=>window.nightState?.roundScore===v',arg=e['roundScore'])
            page.wait_for_function("document.querySelector('#status').textContent.includes('得到')")
            page.wait_for_timeout(50)
        elif a=='discard':select(e['ids']);page.locator('#discard-btn').click()
        elif a=='payout':
            assert state()['payout']==e['payout'];page.locator('#continue-round').click()
        elif a in ('buy','openPack'):
            s=state();pool=s['shop']['offers']+s['shop']['packs']+([s['shop']['voucher']] if s['shop'].get('voucher') else [])
            o=next(x for x in pool if x['sourceKey']==e['key'] and x['price']==e['price'])
            card(o['id']).click();page.locator('#buy-dialog').click()
        elif a=='useConsumable':
            select(e.get('selected',[]));c=next(x for x in state()['consumables'] if x['sourceKey']==e['sourceKey']);card(c['id']).click();page.locator('#use-dialog').click()
        elif a=='takePack':
            select(e.get('selected',[]));c=next(x for x in state()['pack']['choices'] if x['sourceKey']==e['key']);card(c['id']).click();assert page.locator('#modal-content p').count()>0;page.locator('#take-pack-dialog').click()
        elif a=='sell':
            c=next(x for x in state()['jokers']+state()['consumables'] if x['sourceKey']==e['key']);card(c['id']).click();page.locator('#sell-dialog').click()
        elif a=='reroll':page.locator('#reroll-shop').click()
        elif a=='leaveShop':page.locator('#leave-shop').click()
        elif a=='closePack':page.locator('#close-pack').click()
        else:raise AssertionError('未知动作 '+a)
        page.wait_for_function('(v)=>window.nightState?.dollars===v',arg=e['dollars'])
        s=state();assert s['dollars']==e['dollars'],(e['step'],a,'金币');assert [j['sourceKey'] for j in s['jokers']]==e['jokers'],(e['step'],a,'伙伴')
        if a=='play':assert s['roundScore']==e['roundScore']
        if e['step']==1:
            page.screenshot(path=str(out/'03-playing.png'),full_page=True)
            page.set_viewport_size({'width':390,'height':844});page.wait_for_timeout(300);page.screenshot(path=str(out/'04-mobile.png'),full_page=True)
            checks.append({'name':'手机手牌中心及边界', 'cards':geometry(),'overflow':page.evaluate('document.documentElement.scrollWidth>innerWidth')})
            page.set_viewport_size({'width':1440,'height':1000})
        if e['step']==3:
            page.screenshot(path=str(out/'05-shop.png'),full_page=True);checks.append({'name':'桌面商店中心及边界','cards':geometry()})
        if e['step']==24:
            page.screenshot(path=str(out/'06-pack.png'),full_page=True)
        if e['step']==101:
            saved=page.evaluate("localStorage.getItem('night-save')");page.reload();page.wait_for_load_state('networkidle');page.locator('#resume-run').click();assert page.evaluate("localStorage.getItem('night-save')")==saved
            refreshed=True;checks.append({'name':'整局中途刷新恢复','step':101,'passed':True})
        if e['step']==103:
            page.set_viewport_size({'width':390,'height':844});page.wait_for_timeout(300);mobile=True
        if e['step']==111:
            page.screenshot(path=str(out/'07-mobile-shop.png'),full_page=True);checks.append({'name':'手机商店中心及边界','cards':geometry()});page.set_viewport_size({'width':1440,'height':1000})
        if e['step']%25==0:print(json.dumps({'uiStep':e['step'],'phase':state()['phase'],'errors':len(errors)},ensure_ascii=False),flush=True)
    assert state()['phase']=='won';page.screenshot(path=str(out/'08-won.png'),full_page=True)
    page.locator('#continue-endless').click();assert state()['phase']=='shop';page.locator('#leave-shop').click();assert state()['ante']==9;assert state()['target']==110000;page.locator('#enter-blind').click();assert state()['target']==110000
    page.screenshot(path=str(out/'09-endless.png'),full_page=True);checks.append({'name':'获胜后继续同局进入第九段','passed':True,'target':110000})
    checks.append({'name':'203次真实界面操作至八段获胜','passed':True,'actions':len(run['log']),'refreshed':refreshed,'mobileDuringRun':mobile})
    # 新局验证排序、左右移动、道具图鉴与存档导出；原本获胜记录已单独保存。
    page.locator('#new-run-btn').click();page.locator('#start-run').click();page.locator('#enter-blind').click()
    page.locator('#sort-rank').click();ranks=[c['rank'] for c in state()['hand']];assert ranks==sorted(ranks,reverse=True)
    id=state()['hand'][2]['id'];card(id).click();page.locator('#hand-left').click();assert state()['hand'][1]['id']==id;page.locator('#hand-right').click();assert state()['hand'][2]['id']==id
    page.locator('#sort-suit').click();checks.append({'name':'手牌排序与左右顺序','passed':True})
    page.locator('#collection-btn').click();assert page.locator('.collection-item').count()==150
    for category,count in [('consumables',52),('vouchers',32),('decks',15),('blinds',30),('tags',24),('stakes',8),('boosters',32),('enhancements',8),('seals',4),('editions',5)]:
        page.locator(f'[data-category="{category}"]').click();assert page.locator('.collection-item').count()==count
    page.locator('#close-modal').click();checks.append({'name':'图鉴全部11类别数量','passed':True})
    page.locator('#settings-btn').click()
    with page.expect_download() as d:page.locator('#export-save').click()
    exported=json.loads(Path(d.value.path()).read_text());assert exported['seed']==state()['seed'];page.locator('#close-modal').click();checks.append({'name':'存档导出','passed':True})
    result={'method':'Chrome真实按钮与卡面操作；状态只读；未注入游戏函数或改写存档','url':args.url,'browser':browser.version,'errors':errors,'consoleErrors':console_errors,'checks':checks}
    (root/'docs/browser-report.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    assert not errors and not console_errors,(errors,console_errors)
    assert all(x['inside'] and x['centerHit'] for c in checks for x in c.get('cards',[])), '卡面中心或边界检查失败'
    print(json.dumps({'passed':True,'uiActions':203,'errors':errors,'consoleErrors':console_errors},ensure_ascii=False),flush=True)
    browser.close()
