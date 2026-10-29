// EduMoon Door Games: shared rules, scoring and screens.
// A game is a list of steps in window.GAME (see escape-the-lab/content.js).
// Room data in Firebase: rooms/<code>/{state, players, ans, hints, bonus, timing}.

(function () {
  const G = window.GAME;
  const esc = H.esc;
  const D = {};

  D.store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };

  D.POINTS = { correct: 100, speed: 50, explain: 50, hint: 30 };

  // Words each game can change in content.js (G.words). Defaults are Escape the Lab's.
  const W = D.W = Object.assign({
    round: "Door", unlocked: "Unlocked 🔓", badgeLabel: "Letter won",
    rulesEyebrow: "How every door works", rulesTitle: "Learn it. Crack it. Escape.",
    learnText: "The host teaches one C idea.", crackTitle: "Crack", crackText: "Solve the door and lock in your answer on the phone.",
    nobody: "Nobody cracked this door. It fools almost everyone!", cracked: "cracked it",
    next: "Next door ▶", finale: "Reveal the master key ▶", winner: "escaped first! 🏆", endLine: "You escaped the lab! 🔓"
  }, G.words || {});
  D.doorSteps = G.steps.map((s, i) => (s.type === "door" ? i : -1)).filter(i => i >= 0);
  D.doorNo = si => D.doorSteps.indexOf(si) + 1;
  D.isDoor = si => !!G.steps[si] && G.steps[si].type === "door";
  // Steps that can score: doors, plus optional speaking turns (host-awarded points).
  D.scoredSteps = G.steps.map((s, i) => (s.type === "door" || s.type === "speak" ? i : -1)).filter(i => i >= 0);
  // Doors followed by a leaderboard (a door can skip it with board: false).
  D.hasBoard = si => D.isDoor(si) && G.steps[si].board !== false;
  D.boardSteps = D.doorSteps.filter(si => D.hasBoard(si));
  D.lastStep = () => D.scoredSteps[D.scoredSteps.length - 1];
  D.teamWord = mode => (mode === "solo" ? "player" : "team");

  // ---------- scoring ----------
  D.check = (s, a) => {
    if (a == null) return { ok: false };
    if (s.kind === "number") return { ok: parseInt(String(a).trim(), 10) === s.answer };
    if (s.kind === "choice") return { ok: a === s.answer };
    if (s.kind === "bug") { const o = a.o === s.outputAnswer, l = a.l === s.bugLine; return { ok: o && l, o, l }; }
    return { ok: false };
  };

  // Points one team scored for its answer at door step si (no hints or bonus).
  D.answerPoints = (room, si, pid) => {
    const s = G.steps[si], rec = room.ans && room.ans[si] && room.ans[si][pid];
    if (!rec) return { answered: false, ok: false, base: 0, speed: 0, pts: 0 };
    const r = D.check(s, rec.a), m = s.double ? 2 : 1, tm = (room.timing && room.timing[si]) || { t0: rec.t, dur: s.time };
    let base = 0;
    if (s.kind === "bug") base = ((r.o ? D.POINTS.correct : 0) + (r.l ? D.POINTS.correct : 0)) * m;
    else base = r.ok ? D.POINTS.correct * m : 0;
    let speed = 0;
    const took = Math.max(0, rec.t - tm.t0);
    if (r.ok) speed = Math.round(D.POINTS.speed * m * Math.max(0, Math.min(1, 1 - took / (tm.dur * 1000))));
    return { answered: true, ...r, base, speed, pts: base + speed, took, a: rec.a };
  };

  // Hint penalties: the first hint in the game is free, each later one costs points at the door it was used.
  D.hintPenalties = room => {
    const out = {}, used = {};
    D.doorSteps.forEach(si => {
      const h = (room.hints && room.hints[si]) || {};
      Object.keys(h).forEach(pid => {
        used[pid] = (used[pid] || 0) + 1;
        if (used[pid] > 1) { out[si] = out[si] || {}; out[si][pid] = D.POINTS.hint; }
      });
    });
    return out;
  };

  D.stepPoints = (room, si, pid, pen) => {
    const r = D.answerPoints(room, si, pid);
    const bonus = (room.bonus && room.bonus[si] && room.bonus[si][pid]) || 0;
    const minus = (pen[si] && pen[si][pid]) || 0;
    return r.pts + bonus - minus;
  };

  // Leaderboard after door step `upto` (inclusive). Includes rank movement since the previous door.
  // "Round" points and rank movement are measured since the previous leaderboard.
  D.table = (room, upto) => {
    const players = room.players || {}, pen = D.hintPenalties(room);
    const steps = D.scoredSteps.filter(i => i <= upto);
    const prevBoard = D.boardSteps.filter(i => i < upto).pop();
    const before = steps.filter(i => prevBoard != null && i <= prevBoard);
    const rows = Object.entries(players).map(([pid, p]) => {
      const total = steps.reduce((t, si) => t + D.stepPoints(room, si, pid, pen), 0);
      const prev = before.reduce((t, si) => t + D.stepPoints(room, si, pid, pen), 0);
      return { pid, name: p.name || "Team", total, prev, round: total - prev };
    });
    const by = key => rows.slice().sort((a, b) => b[key] - a[key] || String(a.name).localeCompare(b.name));
    by("prev").forEach((r, i) => (r.prevRank = i + 1));
    const ranked = by("total");
    ranked.forEach((r, i) => (r.rank = i + 1));
    return ranked;
  };

  // Fastest correct lock-in among the doors since the previous leaderboard.
  D.fastest = (room, upto) => {
    let best = null;
    const prevBoard = D.boardSteps.filter(i => i < upto).pop();
    D.doorSteps.filter(si => si <= upto && (prevBoard == null || si > prevBoard)).forEach(si => {
      Object.keys((room.ans && room.ans[si]) || {}).forEach(pid => {
        const r = D.answerPoints(room, si, pid);
        if (r.ok && (!best || r.took < best.took)) best = { pid, took: r.took, name: (room.players && room.players[pid] && room.players[pid].name) || "Team" };
      });
    });
    return best;
  };

  D.secs = ms => { const s = Math.round(ms / 1000); return s < 60 ? s + " s" : Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };

  // Letters of the master key won so far.
  D.lettersWon = st => {
    if (!st || st.step == null || st.step < 0) return 0;
    return D.doorSteps.filter(si => si < st.step || (si === st.step && st.phase !== "open")).length;
  };
  D.keyline = st => {
    if (!G.key) return "";
    const n = D.lettersWon(st), L = G.key.split("");
    return `<span class="keyline" aria-label="Master key: ${n} of ${L.length} letters">KEY ${L.map((c, i) => (i < n ? `<b>${c}</b>` : "_")).join(" ")}</span>`;
  };

  D.answerText = s => {
    if (s.kind === "number") return String(s.answer);
    if (s.kind === "choice") return s.options[s.answer];
    if (s.kind === "bug") return `${s.outputOptions[s.outputAnswer]}`;
    return "";
  };
  D.myAnswerText = (s, a) => {
    if (a == null) return "";
    if (s.kind === "choice") return s.options[a];
    if (s.kind === "bug") return `${s.outputOptions[a.o] || "?"}, bug on line ${a.l + 1}`;
    return String(a);
  };

  // ---------- screens ----------
  D.code = (lines, o = {}) => !lines ? "" : `<pre class="code" aria-label="Code">${lines.map((l, i) => {
    const cls = "ln" + (o.bad === i ? " bad" : "") + (o.pick === i ? " pick" : "");
    const tap = o.tap ? ` data-line="${i}" role="button" tabindex="0" aria-label="Line ${i + 1}: ${esc(l)}"` : "";
    return `<span class="${cls}"${tap}>${esc(l) || " "}</span>`;
  }).join("")}</pre>`;

  D.trace = rows => `<pre class="code" aria-label="Step by step">${rows.map(([c, note]) => `<span class="ln">${esc(c)}${note ? `   <span class="c">// ${esc(note)}</span>` : ""}</span>`).join("")}</pre>`;

  D.vStory = s => `
    <p class="eyebrow coral">${esc(s.alert)}</p>
    <h1 class="title">${esc(s.title)}</h1>
    <div class="grid">${s.cards.map(([ic, t]) => `<div class="card"><span class="icon" aria-hidden="true">${ic}</span><p class="big">${esc(t)}</p></div>`).join("")}</div>`;

  D.vRules = mode => {
    const w = D.teamWord(mode);
    return `
    <p class="eyebrow">${esc(W.rulesEyebrow)}</p>
    <h1 class="title">${esc(W.rulesTitle)}</h1>
    <div class="grid">
      <div class="card"><span class="icon" aria-hidden="true">📖</span><h3>1 · Learn</h3><p class="big muted">${esc(W.learnText)}</p></div>
      <div class="card"><span class="icon" aria-hidden="true">🔐</span><h3>2 · ${esc(W.crackTitle)}</h3><p class="big muted">${esc(W.crackText)}</p></div>
      <div class="card amber"><span class="icon" aria-hidden="true">⚡</span><h3>3 · Reveal</h3><p class="big muted">Faster correct answers score more.</p></div>
    </div>
    <div class="grid">
      <div class="card"><p class="big"><b>+100</b> correct · <b>up to +50</b> for speed</p></div>
      <div class="card"><p class="big"><b>1 free hint</b> per ${w}. Extra hints <b>−30</b></p></div>
      <div class="card"><p class="big">${W.rulesExtra || "Explain the answer well: <b>+50</b>. Final boss: <b>double</b>"}</p></div>
    </div>`;
  };

  D.vLearn = s => `
    <p class="eyebrow">Before ${esc(W.round)} ${s.door} · Learn</p>
    <h1 class="title">${esc(s.title)}</h1>
    <div class="split">
      <div style="display:flex;flex-direction:column;gap:12px">
        ${s.points.map(([h, t], i) => `<div class="card${i === s.points.length - 1 && s.highlightLast ? " amber" : ""}"><h3>${esc(h)}</h3><p class="big ${i === s.points.length - 1 && s.highlightLast ? "" : "muted"}">${esc(t)}</p></div>`).join("")}
      </div>
      <div class="card" style="background:#070A1F">
        <p class="eyebrow">Example</p>
        ${D.code(s.code)}
        ${s.boxes ? `<div class="chips" aria-label="Array boxes">${s.boxes.map((v, i) => `<span class="chip">a[${i}] = ${v}</span>`).join("")}</div>` : ""}
        <p class="eyebrow green">Shows</p>
        <p class="out">${esc(s.output)}</p>
      </div>
    </div>`;

  D.vDoorHead = (s, si, room) => `
    <div class="doorhead">
      <div style="display:flex;flex-direction:column;gap:8px">
        <p class="eyebrow ${s.double ? "coral" : ""}">${s.eyebrow ? esc(s.eyebrow) : `${esc(W.round)} ${D.doorNo(si)} of ${D.doorSteps.length} · ${esc(s.name)}`}${s.double ? " · Double points" : ""}</p>
        <h1 class="title">${esc(s.prompt)}</h1>
      </div>
      <span class="timer" data-timer="${si}" aria-live="off"></span>
    </div>`;

  D.vReveal = (s, si) => `
    <p class="eyebrow green">${s.eyebrow ? esc(s.eyebrow) : `${esc(W.round)} ${D.doorNo(si)}`} · ${esc(W.unlocked)}</p>
    <div class="split">
      <div style="display:flex;flex-direction:column;gap:14px">
        <div class="card"><p class="muted">The answer is</p><p class="answer${D.answerText(s).length > 14 ? " long" : ""}">${esc(D.answerText(s))}</p>${s.kind === "bug" ? `<p class="big">The bug is on <b>line ${s.bugLine + 1}</b>: ${esc(s.bugText)}</p>` : ""}</div>
        ${s.trace ? D.trace(s.trace) : ""}${s.explain ? `<p class="big">${D.rich(s.explain)}</p>` : ""}
        <p class="note">${esc(s.note)}</p>
      </div>
      <div class="letter"><small>${esc(W.badgeLabel)}</small><b class="${s.letter ? "" : "emo"}">${esc(s.letter || s.badge || "✅")}</b></div>
    </div>`;

  D.vBoard = (room, si, me) => {
    const rows = D.table(room, si), f = D.fastest(room, si), last = si === D.doorSteps[D.doorSteps.length - 1], s = G.steps[si];
    return `
    <p class="eyebrow">Leaderboard · ${s.boardLabel ? esc(s.boardLabel) : `after ${esc(W.round)} ${D.doorNo(si)}`}${last ? " (final)" : ""}</p>
    ${f ? `<div class="fast"><span class="icon" aria-hidden="true">⚡</span><p class="big">Fastest: <b>${esc(f.name)}</b>, locked in correctly in ${D.secs(f.took)}</p></div>` : `<div class="fast"><span class="icon" aria-hidden="true">🤯</span><p class="big">${esc(W.nobody)}</p></div>`}
    <div class="board">${rows.length ? rows.map(r => D.brow(r, me)).join("") : `<p class="muted">No ${D.teamWord(room.state && room.state.mode)}s yet.</p>`}</div>`;
  };

  D.brow = (r, me) => {
    const mv = r.prevRank - r.rank;
    return `<div class="brow${r.pid === me ? " me" : ""}"><span class="rk">${r.rank}</span>
      <span class="nm">${esc(r.name)} ${mv > 0 ? `<span class="mv">▲ ${mv}</span>` : mv < 0 ? `<span class="mv dn">▼ ${-mv}</span>` : ""}</span>
      <span class="gain${r.round < 0 ? " neg" : ""}">${r.round > 0 ? "+" + r.round : r.round < 0 ? "−" + -r.round : ""}</span><span class="sc">${r.total}</span></div>`;
  };

  // ---------- story games (English Club) ----------
  // **word** in story text becomes a highlighted power word.
  D.rich = t => esc(t).replace(/\*\*(.+?)\*\*/g, '<mark class="pw">$1</mark>');
  D.art = () => (G.art ? `<div class="art" aria-hidden="true">${G.art}</div>` : "");
  D.vTale = s => `
    ${D.art()}
    <p class="eyebrow">${esc(s.eyebrow)}</p>
    <h1 class="title">${esc(s.title)}</h1>
    <div class="tale">${s.text.map(p => `<p>${D.rich(p)}</p>`).join("")}</div>
    <p class="eyebrow">Power words</p>
    <div class="words">${s.words.map(([w, m]) => `<div class="word"><b>${esc(w)}</b><span>${esc(m)}</span></div>`).join("")}</div>`;
  D.vSpeak = s => `
    <p class="eyebrow">${esc(s.eyebrow || "Speaking time 🎤")}</p>
    <h1 class="title">${esc(s.prompt)}</h1>
    ${s.note ? `<p class="big muted">${esc(s.note)}</p>` : ""}`;
  D.allWords = () => G.steps.filter(s => s.type === "tale").flatMap(s => s.words);
  D.vWordlist = s => `
    <p class="eyebrow">${esc(s.eyebrow || "Take it home")}</p>
    <h1 class="title">${esc(s.title || "Your power words")}</h1>
    <p class="big muted">${esc(s.note || "Screenshot this and use one new word every day.")}</p>
    <div class="words">${D.allWords().map(([w, m]) => `<div class="word"><b>${esc(w)}</b><span>${esc(m)}</span></div>`).join("")}</div>`;

  D.vKey = () => `
    <div class="keyslide">
      <p class="eyebrow" style="color:#4A3300">The master key</p>
      <div class="keyrow">${G.key.split("").map(c => `<span>${c}</span>`).join("")}</div>
      <h1 class="title">${esc(G.keyTitle)}</h1>
      <p class="big">${esc(G.keyLine)}</p>
    </div>`;

  // Offer letters (Placement Round style endings): G.offers = [{min: 0.75, icon, title, text}, ...] best first.
  D.maxPoints = () => D.doorSteps.reduce((t, si) => {
    const s = G.steps[si], m = s.double ? 2 : 1;
    return t + (s.kind === "bug" ? 2 : 1) * D.POINTS.correct * m + D.POINTS.speed * m;
  }, 0);
  D.offerFor = total => {
    const pct = total / D.maxPoints(), list = G.offers || [];
    return list.find(o => pct >= o.min) || list[list.length - 1];
  };
  D.offerCard = (r, mine) => {
    const o = D.offerFor(r.total);
    return `<div class="offer${mine ? " mine" : ""}"><span class="icon" aria-hidden="true">${o.icon}</span>
      <div class="ot"><small>${mine ? "Your offer letter" : "#" + r.rank + " · " + esc(r.name)}</small><b>${esc(o.title)}</b><span class="muted">${esc(o.text)}</span></div>
      <span class="sc">${r.total}</span></div>`;
  };
  D.vOffers = room => {
    const rows = D.table(room, D.lastStep());
    return `<p class="eyebrow">${esc(G.offerEyebrow || "Offer letters")}</p><h1 class="title">${esc(G.offerTitle || "Your results")}</h1>
      <div class="board">${rows.map(r => D.offerCard(r)).join("") || `<p class="muted">No teams yet.</p>`}</div>`;
  };

  D.vPodium = rows => {
    const top = [rows[1], rows[0], rows[2]], h = [120, 170, 90], col = ["#B6C1E6", "#FFB830", "#E2A77A"], lab = ["2", "1", "3"];
    return `<div class="podium">${top.map((r, i) => r ? `<div class="pod"><span class="who">${esc(r.name)}</span><span class="muted">${r.total} pts</span><div class="blk" style="height:${h[i]}px;background:${col[i]}">${lab[i]}</div></div>` : `<div class="pod"></div>`).join("")}</div>`;
  };

  // Shared timer: every element with data-timer counts down to that door's end time.
  D.tick = room => {
    document.querySelectorAll("[data-timer]").forEach(el => {
      const si = +el.dataset.timer, tm = room && room.timing && room.timing[si];
      if (!tm) { el.textContent = ""; return; }
      const left = tm.t0 + tm.dur * 1000 - DB.now();
      if (left <= 0) { el.textContent = "⏰ Time’s up!"; el.className = "timer up"; return; }
      const s = Math.ceil(left / 1000);
      el.textContent = "⏱ " + Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
      el.className = "timer" + (left < 10000 ? " low" : "");
    });
  };
  D.timeUp = (room, si) => { const tm = room && room.timing && room.timing[si]; return !!tm && DB.now() > tm.t0 + tm.dur * 1000; };

  window.D = D;
})();
