#!/bin/bash
# EduMoon Game Zone: check, playtest and make PDFs for one or more games, one at a time.
#
#   bash tools/build_all.sh guess-the-movie vizag-quiz      (only these games)
#   bash tools/build_all.sh --all                            (every game; takes a long time)
#
# For each game it runs, in order:
#   1. lenaudit.js  - the right answer must not be clearly the longest option
#   2. playtest.py  - plays the whole game; must end with "errors: none"
#   3. gen.py       - makes deck.html, the Screen Deck PDF and the Host Guide PDF
# Games run one after another (never two playtests at once: they share port 8765).
# PDFs go to $EVENT_OUT, or ./out if it is not set. A log is saved in that folder too.
# At the end it prints one PASS / FAIL line per game.

cd "$(dirname "$0")/.." || exit 1
ROOT=$(pwd)
OUT=${EVENT_OUT:-$ROOT/out}
export EVENT_OUT=$OUT
mkdir -p "$OUT"
LOG="$OUT/build_all.log"
: > "$LOG"

if [ "$1" = "--all" ]; then
  GAMES=$(for d in */; do [ -f "$d/content.js" ] && echo "${d%/}"; done)
else
  GAMES="$*"
fi
if [ -z "$GAMES" ]; then
  echo "Usage: bash tools/build_all.sh <game> [game...]   or   bash tools/build_all.sh --all"
  exit 1
fi

SUMMARY=""; FAILS=0
for g in $GAMES; do
  if [ ! -f "$g/content.js" ]; then
    SUMMARY+="FAIL  $g: no such game folder\n"; FAILS=$((FAILS+1)); continue
  fi
  echo "=== $g" | tee -a "$LOG"
  problems=""

  audit=$(node tools/lenaudit.js "$g" 2>&1); echo "$audit" >> "$LOG"
  echo "$audit" | grep -q "^CHECK" && problems+=" answers-too-long"

  play=$(timeout 300 python3 tools/playtest.py "$g" 2>&1); echo "$play" >> "$LOG"
  echo "$play" | tail -1 | grep -q "errors: none" || problems+=" playtest"

  gen=$(timeout 300 python3 tools/gen.py "$g" 2>&1); echo "$gen" >> "$LOG"
  echo "$gen" | tail -1 | grep -q "PDFs:" || problems+=" pdf"

  if [ -z "$problems" ]; then SUMMARY+="PASS  $g\n"
  else SUMMARY+="FAIL  $g:$problems\n"; FAILS=$((FAILS+1)); fi
done

echo; echo "===== Summary ====="
printf "$SUMMARY" | tee -a "$LOG"
echo "PDFs: $OUT    Full log: $LOG"
[ $FAILS -eq 0 ]
