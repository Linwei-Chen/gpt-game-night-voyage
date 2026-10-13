"""在真实项目子路径下检查生产包，仅读取状态并通过真实控件游玩。"""
import argparse, functools, http.server, json, shutil, subprocess, sys, tempfile, threading
from pathlib import Path
parser=argparse.ArgumentParser()
parser.add_argument('--slug',default='gpt-game-night-voyage')
args=parser.parse_args()
assert args.slug and all(c.isalnum() or c=='-' for c in args.slug)
root=Path(__file__).resolve().parent.parent
assert (root/'dist/index.html').exists(), '先运行 npm run build'
class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*_):pass
with tempfile.TemporaryDirectory(prefix='night-pages-') as temp:
    shutil.copytree(root/'dist',Path(temp)/args.slug)
    handler=functools.partial(QuietHandler,directory=temp)
    server=http.server.ThreadingHTTPServer(('127.0.0.1',0),handler)
    thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
    url=f'http://127.0.0.1:{server.server_port}/{args.slug}/'
    results=[]
    try:
        for name in ['tutorial_verify.py','browser_verify.py']:
            result=subprocess.run([sys.executable,str(root/'scripts'/name),'--url',url],cwd=root)
            results.append({'script':'scripts/'+name,'exitCode':result.returncode})
            if result.returncode:break
    finally:
        server.shutdown();server.server_close();thread.join()
    passed=len(results)==2 and all(r['exitCode']==0 for r in results)
    report={'method':'生产包置于项目子路径，用真实Chrome/Chromium控件核验教程和203步整局，状态只读。','basePath':'/'+args.slug+'/','url':url,'checks':results,'passed':passed}
    (root/'docs/pages-browser-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps(report,ensure_ascii=False))
    if not passed:sys.exit(1)
