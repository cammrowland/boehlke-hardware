#!/usr/bin/env bash
#
# download-images.sh — Boehlke Hardware
#
# Fetches the two source images from boehlkehardware.com into ./images/ with
# the canonical filenames the build prompt references. Run from the project
# folder root:
#
#     cd ~/futurenative/projects/boehlke-hardware
#     bash download-images.sh
#
# The Cowork sandbox proxy blocks boehlkehardware.com for binary downloads,
# so this script exists to populate images/ on Camm's Mac before the drop
# folder is handed to Replit.

set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IMG_DIR="$DIR/images"
mkdir -p "$IMG_DIR"

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

fetch() {
  local url="$1"
  local out="$2"
  echo "→ $out"
  if curl -fSL -A "$UA" --max-time 30 -o "$out" "$url"; then
    echo "   ok ($(wc -c < "$out") bytes)"
  else
    echo "   FAILED — $url"
    rm -f "$out"
  fi
}

fetch "https://boehlkehardware.com/wp-content/uploads/2014/05/logo.png"            "$IMG_DIR/logo.png"
fetch "https://boehlkehardware.com/wp-content/uploads/2014/05/hard_home_cover1.png" "$IMG_DIR/hero.png"

echo
echo "Done. Contents of images/:"
ls -lh "$IMG_DIR"
