#!/usr/bin/env bash
# Build "IELTS Practice.app" and a .dmg on macOS.  Usage: desktop/build-mac.sh [version]
set -euo pipefail
cd "$(dirname "$0")/.."
VERSION="${1:-${APP_VERSION:-1.0.0}}"
ARCH="$(uname -m)"
export APP_VERSION="$VERSION"

python3 -m PyInstaller desktop/ielts.spec --noconfirm --clean --distpath dist --workpath build

STAGE="build/dmg"
rm -rf "$STAGE" && mkdir -p "$STAGE"
cp -R "dist/IELTS Practice.app" "$STAGE/"
ln -s /Applications "$STAGE/Applications"
DMG="dist/IELTS-Practice-$VERSION-mac-$ARCH.dmg"
rm -f "$DMG"
hdiutil create -volname "IELTS Practice" -srcfolder "$STAGE" -ov -format UDZO "$DMG"
echo "Built $DMG"
