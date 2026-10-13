"""记录当前公开源码、网页包、报告与已观察验证；保留原版验收缺口。"""
from pathlib import Path
from datetime import datetime, timezone
import hashlib, json
root = Path(__file__).resolve().parent.parent
read = lambda name: json.loads((root/name).read_text())
sha = lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
def record(p):
    return {"file": p.relative_to(root).as_posix(), "sha256": sha(p), "bytes": p.stat().st_size}
facts = read("docs/fact-assertion-audit.json")
tests = read("docs/test-results.json")
browser = read("docs/browser-report.json")
tutorial = read("docs/tutorial-browser-report.json")
replay = read("docs/replay-report.json")
audit = read("docs/content-audit.json")
pages = read("docs/pages-browser-report.json")
assert tests["numFailedTests"] == 0 and pages["passed"]
assert not browser["errors"] and not browser["consoleErrors"]
assert not tutorial["errors"] and not tutorial["consoleErrors"]
assert all(c["passed"] for c in replay["checks"])
sources = dict(facts["currentTreeHashes"])
for directory in ["public", ".github", "tools"]:
    for p in sorted((root/directory).rglob("*")):
        if p.is_file() and not p.is_symlink():
            sources[p.relative_to(root).as_posix()] = sha(p)
for name in ["LICENSE", "THIRD_PARTY_NOTICES.md", ".gitignore", "CONTRIBUTING.md", "README.md"]:
    sources[name] = sha(root/name)
reports = {}
for p in sorted((root/"docs").rglob("*")):
    if p.is_file() and p.suffix in [".json", ".md"] and p.name != "release-manifest.json":
        entry = record(p); name = entry.pop("file"); reports[name] = entry
changed = lambda snapshot: [name for name, value in snapshot.items() if sha(root/name) != value]
manifest = {
    "schema": 2,
    "generatedAtUTC": datetime.now(timezone.utc).isoformat(),
    "project": "星筹夜航",
    "experimentTitle": "GPT 6.1 制作小游戏测试",
    "implementationRoot": ".",
    "referenceCommit": "895ab3a25bc6f513fa80885eb59951bf8e76bc55",
    "referenceVersion": "1.0.1o-FULL（来源自声明）",
    "sourceFingerprints": dict(sorted(sources.items())),
    "productionArtifacts": [record(p) for p in sorted((root/"dist").rglob("*")) if p.is_file()],
    "reports": reports,
    "screenshots": [record(p) for p in sorted((root/"docs/screenshots").rglob("*.png"))],
    "verification": {
        "gameTests": {"passed": tests["numPassedTests"], "failed": tests["numFailedTests"], "source": "docs/test-results.json"},
        "strictTypesAndBuild": {"command": "npm run build", "observedExitCode": 0},
        "contentAudit": {"errors": audit["errors"], "source": "docs/content-audit.json"},
        "facts": {"count": facts["factCount"], "mapped": facts["mappedFactCount"], "levels": facts["levelCounts"], "source": "docs/fact-assertion-audit.json"},
        "browser": {"url": browser["url"], "version": browser["browser"], "actions": 203, "pageErrors": browser["errors"], "consoleErrors": browser["consoleErrors"], "sourceChangesAfterRecording": changed(browser.get("sourceBefore", {}))},
        "tutorial": {"flows": len(tutorial["checks"]), "passed": sum(c["passed"] for c in tutorial["checks"]), "pageErrors": tutorial["errors"], "consoleErrors": tutorial["consoleErrors"], "sourceChangesAfterRecording": changed(tutorial["sourceBefore"])},
        "projectSubpath": pages,
        "replayStrategies": len(replay["checks"]),
        "historicalIndependentReviews": ["docs/independent-review.md", "docs/tutorial-review.md"],
        "publicReleaseReview": "docs/public-release-review.md"
    },
    "originalAcceptanceComplete": False,
    "unimplemented": ["持久解锁进度", "挑战", "成就"],
    "notVerifiedAgainstOriginal": ["游戏内dump", "同种子整局与全局随机轨迹", "平台浮点模式", "录屏、音频及逐帧手感", "全部组合、随机分支与完整无尽实战"],
    "excludedFromRepository": ["references/", "node_modules/", "dist/", ".venv/", ".publish-venv/", "artifacts/"],
    "note": "当前公开树指纹与历史评审分别记录；指纹不是原版金标准。dist仅记录指纹，由Actions重建发布。发布状态与线上核验见publishing-report.json。"
}
(root/"docs/release-manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2)+"\n")
print(json.dumps({"sources": len(sources), "artifacts": len(manifest["productionArtifacts"]), "reports": len(reports), "screenshots": len(manifest["screenshots"]), "originalAcceptanceComplete": False}, ensure_ascii=False))
