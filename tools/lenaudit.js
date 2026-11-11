// Find literal `options: [ ... ]` arrays followed by `answer: N` in a content.js source.
const vm = require('vm');
function scanArray(src, start) { // start at '['
  let i = start, depth = 0, q = null;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (q) { if (ch === '\\') { i++; continue; } if (ch === q) q = null; continue; }
    if (ch === '"' || ch === "'" || ch === '`') { q = ch; continue; }
    if (ch === '[') depth++;
    else if (ch === ']') { depth--; if (depth === 0) return i; }
  }
  return -1;
}
function findQuestions(src) {
  const out = []; const re = /options\s*:\s*\[/g; let m;
  while ((m = re.exec(src))) {
    const s = m.index + m[0].length - 1, e = scanArray(src, s);
    if (e < 0) continue;
    const text = src.slice(s, e + 1);
    let arr; try { arr = vm.runInNewContext('(' + text + ')'); } catch (err) { continue; }
    if (!Array.isArray(arr) || !arr.every(x => typeof x === 'string')) continue;
    const after = src.slice(e + 1, e + 40).match(/^\s*,\s*answer\s*:\s*(\d+)/);
    // prompt: nearest preceding prompt/q/title string
    const before = src.slice(Math.max(0, s - 700), s);
    const pm = [...before.matchAll(/(?:prompt|q|question|title|text)\s*:\s*(["'`])((?:\\.|(?!\1).)*)\1/g)].pop();
    out.push({ s, e: e + 1, text, arr, answer: after ? +after[1] : null, prompt: pm ? pm[2] : '' });
  }
  return out;
}
const isLongest = (arr, a) => { const L = arr.map(x => x.length), o = L.filter((_, i) => i !== a); return L[a] > Math.max(...o); };
const isClear = (arr, a) => { const L = arr.map(x => x.length), mx = Math.max(...L.filter((_, i) => i !== a)); return L[a] >= 1.4 * mx && L[a] - mx >= 8; };


// ---- Checker ----
// Usage: node tools/lenaudit.js            (all games)
//        node tools/lenaudit.js game-id    (one or more games)
// Flags questions where the right answer is CLEARLY the longest option
// (at least 1.4x and 8+ characters longer than every other option),
// and games where the right answer is the longest in more than 40% of questions.
// Students can win by tapping the longest option, so every game should pass this.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const games = process.argv.slice(2).length ? process.argv.slice(2) : fs.readdirSync(root).filter(d => fs.existsSync(path.join(root, d, 'content.js')));
let T = 0, Lg = 0, fails = 0;
for (const g of games) {
  const qs = findQuestions(fs.readFileSync(path.join(root, g, 'content.js'), 'utf8')).filter(q => q.answer != null);
  if (!qs.length) continue;
  const L = qs.filter(q => isLongest(q.arr, q.answer)), C = qs.filter(q => isClear(q.arr, q.answer));
  T += qs.length; Lg += L.length;
  const pct = Math.round(100 * L.length / qs.length);
  const bad = C.length > 0 || pct > 40;
  if (bad) fails++;
  console.log(`${bad ? 'CHECK' : 'ok   '} ${g.padEnd(24)} right answer longest in ${L.length}/${qs.length} (${pct}%), clearly longest ${C.length}`);
  C.forEach(q => console.log(`        clearly longest: "${q.arr[q.answer]}"`));
}
console.log(`\nAll: right answer longest in ${Lg}/${T} (${Math.round(100 * Lg / T)}%). Aim for about 25%.`);
