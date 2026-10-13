"""从OFL字体生成界面所需的WOFF2子集；字体许可与版权保留。"""
from pathlib import Path
import hashlib,json
from fontTools import subset, __version__ as fontToolsVersion
from fontTools.ttLib import TTFont
root=Path(__file__).resolve().parent.parent
source=root/'public/fonts/NotoSansSC-Regular.otf'
text=''.join(chr(i) for i in range(32,127))
for folder in ['src','data']:
    for path in (root/folder).rglob('*'):
        if path.is_file() and path.suffix in ['.ts','.css','.json']:
            text+=path.read_text()
text+=(root/'index.html').read_text()
font=TTFont(source)
options=subset.Options();options.flavor='woff2';options.layout_features=['*'];options.name_IDs=['*'];options.name_legacy=True
subsetter=subset.Subsetter(options=options);subsetter.populate(text=text);subsetter.subset(font)
# 子集使用新家族名；原版权和OFL记录仍保留。
names={1:'Night Voyage SC Subset',2:'Regular',3:'2026-NightVoyageSCSubset-Regular',4:'Night Voyage SC Subset Regular',6:'NightVoyageSCSubset-Regular',16:'Night Voyage SC Subset',17:'Regular'}
for entry in font['name'].names:
    if entry.nameID in names:entry.string=names[entry.nameID].encode(entry.getEncoding())
if 'CFF ' in font:
    cff=font['CFF '].cff;cff.fontNames=[names[6]]
    for top in cff.topDictIndex:
        top.FullName=names[4];top.FamilyName=names[1]
font.flavor='woff2'
target=root/'public/fonts/NightVoyageSC-Subset.woff2';font.save(target)
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
report={'source':'public/fonts/NotoSansSC-Regular.otf','sourceSha256':sha(source),'output':'public/fonts/NightVoyageSC-Subset.woff2','outputSha256':sha(target),'sourceBytes':source.stat().st_size,'outputBytes':target.stat().st_size,'unicodeCharacters':len(set(text)),'fontToolsVersion':fontToolsVersion,'license':'SIL Open Font License 1.1','family':'Night Voyage SC Subset'}
(root/'docs/font-subset-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(report,ensure_ascii=False))
