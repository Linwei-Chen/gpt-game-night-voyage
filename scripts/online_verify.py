"""用全新浏览器实际检查线上教程和完整一局，证据与本地验证分别保存。"""
from pathlib import Path
import argparse, json, shutil, subprocess, sys, tempfile
parser=argparse.ArgumentParser()
parser.add_argument('--url',default='https://linwei-chen.github.io/gpt-game-night-voyage/')
args=parser.parse_args()
root=Path(__file__).resolve().parent.parent
output=root/'docs/online-release-checks';output.mkdir(exist_ok=True)
results=[]
with tempfile.TemporaryDirectory(prefix='night-online-check-') as temp:
    working=Path(temp)
    sources=['scripts/tutorial_verify.py','scripts/browser_verify.py','docs/full-run.json','src/ui/tutorial.ts','src/ui/tutorial-model.ts','src/independent-main.ts','src/original-style.css','src/core/run-engine.ts','src/core/rng.ts']
    for name in sources:
        target=working/name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(root/name,target)
    for script in ['tutorial_verify.py','browser_verify.py']:
        result=subprocess.run([sys.executable,str(working/'scripts'/script),'--url',args.url],cwd=working)
        results.append({'script':'scripts/'+script,'exitCode':result.returncode})
        if result.returncode:break
    for name in ['tutorial-browser-report.json','browser-report.json']:
        path=working/'docs'/name
        if path.exists():shutil.copy2(path,output/name)
    screenshots=working/'docs/screenshots'
    if screenshots.exists():shutil.copytree(screenshots,root/'docs/screenshots/online',dirs_exist_ok=True)
passed=len(results)==2 and all(r['exitCode']==0 for r in results)
report={'url':args.url,'method':'与本地验证相同的真实控件脚本，在全新浏览器中访问公开站点；教程与203步八段实战分别记录，不覆盖本地证据。','checks':results,'passed':passed}
(output/'summary.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report,ensure_ascii=False))
if not passed:sys.exit(1)
