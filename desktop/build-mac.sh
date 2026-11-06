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
# hdiutil sometimes fails on CI runners ("Resource busy"); retry a few times before giving up.
for attempt in 1 2 3 4 5; do
  if hdiutil create -volname "IELTS Practice" -srcfolder "$STAGE" -ov -format UDZO "$DMG"; then
    echo "Built $DMG"
    exit 0
  fi
  echo "hdiutil failed (attempt $attempt), retrying in $((attempt * 10))s..." >&2
  hdiutil detach "/Volumes/IELTS Practice" -force >/dev/null 2>&1 || true
  rm -f "$DMG"
  sleep $((attempt * 10))
done
echo "hdiutil failed after 5 attempts" >&2
exit 1
