# PyInstaller spec for the desktop app.  Build:  pyinstaller desktop/ielts.spec --noconfirm
import os
import sys

ROOT = os.path.abspath(os.path.join(SPECPATH, '..'))
APP_NAME = 'IELTS Practice'
VERSION = os.environ.get('APP_VERSION', '1.0.0')

datas = [(os.path.join(ROOT, 'index.html'), '.')]
for folder in ('css', 'js', 'audio'):
    datas.append((os.path.join(ROOT, folder), folder))

a = Analysis(
    [os.path.join(ROOT, 'desktop', 'launcher.py')],
    pathex=[ROOT],
    datas=datas,
    hiddenimports=['server'],
    excludes=['numpy', 'pandas', 'matplotlib', 'PIL', 'IPython', 'jupyter'],
    noarchive=False,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name=APP_NAME,
    console=False,
    icon=os.path.join(ROOT, 'desktop', 'icon.ico') if sys.platform == 'win32' and os.path.exists(os.path.join(ROOT, 'desktop', 'icon.ico')) else None,
)
coll = COLLECT(exe, a.binaries, a.datas, name=APP_NAME)

if sys.platform == 'darwin':
    app = BUNDLE(
        coll,
        name=APP_NAME + '.app',
        bundle_identifier='io.github.ramsis23.ielts-practice',
        version=VERSION,
        info_plist={
            'CFBundleShortVersionString': VERSION,
            'NSHighResolutionCapable': True,
        },
    )
