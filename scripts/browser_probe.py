import json
from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parent.parent
out=root/"docs/screenshots";out.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",headless=True,args=["--disable-gpu-sandbox"])
    page=browser.new_page(viewport={"width":1440,"height":1000},device_scale_factor=1)
    page.set_default_timeout(6000)
    errors=[];logs=[];page.on("console",lambda m:logs.append({"type":m.type,"text":m.text}))
    page.on("pageerror",lambda e:errors.append(str(e)))
    page.goto("http://127.0.0.1:53427/");page.wait_for_load_state("networkidle");page.evaluate("document.fonts.ready");page.screenshot(path=str(out/"01-menu.png"),full_page=True)
    print(json.dumps({"buttons":page.locator("button").all_text_contents(),"errors":errors,"logs":logs,"modal":page.locator("#modal-content").inner_html()},ensure_ascii=False))
    page.locator("#start-run").click();page.locator("#enter-blind").wait_for();page.screenshot(path=str(out/"02-blind-select.png"),full_page=True)
    page.locator("#enter-blind").click();page.wait_for_function("window.nightState?.phase==='playing'");page.wait_for_timeout(700);page.screenshot(path=str(out/"03-playing.png"),full_page=True)
    print(json.dumps(page.evaluate("({phase:nightState.phase,hand:nightState.hand,buttons:Array.from(document.querySelectorAll('button')).map(b=>({id:b.id,text:b.textContent}))})"),ensure_ascii=False))
    page.set_viewport_size({"width":390,"height":844});page.wait_for_timeout(500);page.screenshot(path=str(out/"04-mobile.png"),full_page=True)
    print(json.dumps({"errors":errors,"mobileOverflow":page.evaluate("document.documentElement.scrollWidth>innerWidth")},ensure_ascii=False))
    browser.close()
