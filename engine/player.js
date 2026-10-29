// EduMoon Door Games: the player page (one phone per team, or per person in Solo mode).
// It only follows the host: nothing moves until the host taps Next.

(function () {
  const G = window.GAME, S = G.steps, $ = q => document.querySelector(q), esc = H.esc;
  let code = (new URLSearchParams(location.search).get("room") || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 4);
  let pid = null, room = {}, lastKey = "", pick = null, pickLine = null, hintArm = false, busy = false;

  const st = () => room.state || {};
  const me = () => (room.players || {})[pid];
  const myAns = i => room.ans && room.ans[i] && room.ans[i][pid];
  const myHint = i => room.hints && room.hints[i] && room.hints[i][pid];
  const hintsUsed = () => D.doorSteps.filter(i => myHint(i)).length;

  async function boot() {
    await DB.init();
    $("#title").textContent = G.title;
    $("#club").textContent = "EduMoon · " + G.club;
    if (code) {
      const saved = D.store.get("doors-pid-" + code);
      if (saved && (await DB.get(`rooms/${code}/players/${saved}`))) { pid = saved; return listen(); }
    }
    join();
  }

  // ---------- join ----------
  async function join(err = "") {
    let mode = "teams";
    if (code) { const s = await DB.get(`rooms/${code}/state`); if (s && s.mode) mode = s.mode; }
    const w = mode === "solo" ? "Your name" : "Team name";
    $("#main").innerHTML = `
      <div class="center" style="padding:12px 0"><span class="icon big">${ic("gamepad-2")}</span><h1 class="title">${esc(G.title)}</h1><p class="big muted">${esc(G.tagline)}</p></div>
      <form class="card" id="jf" style="gap:12px">
        <label class="lbl" for="room">Room code</label>
        <input class="field" id="room" maxlength="4" autocomplete="off" autocapitalize="characters" placeholder="ABCD" value="${esc(code)}" style="font-family:var(--display);font-size:30px;letter-spacing:.2em;text-transform:uppercase">
        <label class="lbl" for="nm">${w}</label>
        <input class="field" id="nm" maxlength="20" autocomplete="off" placeholder="${mode === "solo" ? "Priya" : "Semicolon Squad"}">
        <p class="err" id="err" role="alert">${esc(err)}</p>
        <button class="btn wide" type="submit">Join the game</button>
        ${mode !== "solo" ? `<p class="muted">Only one phone per team needs to join.</p>` : ""}
      </form>`;
    (code ? $("#nm") : $("#room")).focus();
    $("#jf").onsubmit = async e => {
      e.preventDefault();
      const c = $("#room").value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 4), name = $("#nm").value.trim();
      if (c.length !== 4) return ($("#err").textContent = "Enter the 4-letter room code from the host.");
      if (!name) return ($("#err").textContent = "Enter a name so you show up on the leaderboard.");
      const s = await DB.get(`rooms/${c}/state`);
      if (!s) return ($("#err").textContent = "No game with that code. Check it with the host.");
      if (s.game !== G.id) return ($("#err").textContent = "That code is for a different game.");
      code = c;
      pid = D.store.get("doors-pid-" + code) || Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      D.store.set("doors-pid-" + code, pid);
      await DB.set(`rooms/${code}/players/${pid}`, { name, joined: DB.now() });
      history.replaceState(null, "", "?room=" + code);
      listen();
    };
  }

  function listen() {
    DB.on(`rooms/${code}`, v => { room = v || {}; render(); });
    setInterval(() => { D.tick(room); timeNote(); }, 250);
  }

  // ---------- answering ----------
  async function lockIn() {
    const i = st().step, s = S[i];
    if (busy || st().phase !== "open" || myAns(i)) return;
    let a = null;
    if (s.kind === "number") { const v = ($("#num") || {}).value; if (v == null || !/^-?\d+$/.test(String(v).trim())) return say("Type a whole number first."); a = parseInt(v, 10); }
    if (s.kind === "choice") { if (pick == null) return say("Tap an answer first."); a = pick; }
    if (s.kind === "bug") { if (pick == null) return say(s.say1 || "First pick what it shows."); if (pickLine == null) return say(s.say2 || "Now tap the line with the bug."); a = { o: pick, l: pickLine }; }
    busy = true;
    await DB.claim(`rooms/${code}/ans/${i}/${pid}`, { a, t: DB.now() });
    busy = false;
  }

  async function hint() {
    const i = st().step;
    if (myHint(i)) return;
    const free = hintsUsed() === 0;
    if (!free && !hintArm) { hintArm = true; return live(); }
    hintArm = false;
    await DB.claim(`rooms/${code}/hints/${i}/${pid}`, DB.now());
  }

  function say(t) { const el = $("#say"); if (el) { el.textContent = t; } }
  function timeNote() { const el = $("#tnote"), i = st().step; if (el) el.textContent = D.timeUp(room, i) ? "Time’s up! You can still lock in until the host reveals, but there are no speed points now." : ""; }

  // ---------- screens ----------
  function render() {
    if (!me()) { D.store.del("doors-pid-" + code); pid = null; return join("You were removed from this game. Join again."); }
    const s = st(), i = s.step, key = s.phase + ":" + i + ":" + (myAns(i) ? "a" : "") + (myHint(i) ? "h" : "");
    $("#key").innerHTML = s.phase === "lobby" ? "" : D.keyline(s);
    if (key !== lastKey) { if (lastKey.split(":")[1] !== String(i)) { pick = null; pickLine = null; hintArm = false; } lastKey = key; full(); }
    live();
  }

  function full() {
    const s = st(), i = s.step, step = S[i], M = $("#main");
    if (s.phase === "lobby") { M.innerHTML = `<div class="center" style="padding:24px 0"><span class="icon big">${ic("circle-check")}</span><h1 class="title">You’re in, ${esc(me().name)}!</h1><p class="big muted">Wait for the host to start. Keep this page open.</p></div><div class="card" id="live"></div>`; return; }
    if (!step) return;
    if (step.type === "story") M.innerHTML = D.vStory(step) + listenNote();
    else if (step.type === "rules") M.innerHTML = D.vRules(s.mode) + listenNote();
    else if (step.type === "learn") M.innerHTML = D.vLearn(step) + listenNote();
    else if (step.type === "door" && s.phase === "open") M.innerHTML = D.vDoorHead(step, i, room) + `<div id="ansarea"></div><div id="live"></div>`;
    else if (step.type === "door" && s.phase === "reveal") M.innerHTML = `<div id="live"></div>` + D.vReveal(step, i);
    else if (step.type === "door" && s.phase === "board") M.innerHTML = `<div id="live"></div>`;
    else if (step.type === "key") M.innerHTML = D.vKey();
    else if (step.type === "offer") M.innerHTML = `<div id="live"></div>`;
    else if (step.type === "tale") M.innerHTML = D.vTale(step) + listenNote();
    else if (step.type === "speak") M.innerHTML = D.vSpeak(step) + `<div class="card" id="live"></div>`;
    else if (step.type === "wordlist") M.innerHTML = D.vWordlist(step);
    else if (step.type === "compare") M.innerHTML = D.vCompare(step) + listenNote();
    else if (step.type === "end") M.innerHTML = `<div id="live"></div>`;
    else if (step.type === "match") M.innerHTML = D.vMatch(step) + `<a class="btn wide" style="text-align:center;text-decoration:none;display:block" href="${esc(D.matchURL(step))}" target="_blank" rel="noopener">${esc(step.button || "Open it →")}</a><p class="muted center">It opens in a new tab. Come back here after.</p>`;
    if (step.type === "door" && s.phase === "open") answerArea();
    window.scrollTo(0, 0);
  }

  const listenNote = () => `<p class="muted center">${ic("ear")} Listen to your host. The next screen appears when they tap Next.</p>`;

  function answerArea() {
    const i = st().step, s = S[i], A = $("#ansarea");
    if (myAns(i)) { A.innerHTML = D.code(s.code); return; }
    if (s.kind === "bug") {
      A.innerHTML = `
        <div class="card"><p class="eyebrow">Step 1 · ${esc(s.step1 || "What does it show?")}</p><div class="opts${s.outputOptions.some(o => String(o).length > 5) ? " long" : ""}">${s.outputOptions.map((o, k) => `<button class="opt${pick === k ? " pick" : ""}" data-pick="${k}" aria-pressed="${pick === k}">${esc(o)}</button>`).join("")}</div></div>
        <div class="card"><p class="eyebrow">Step 2 · ${esc(s.step2 || "Tap the line with the bug")}</p>${D.code(s.code, { tap: true, pick: pickLine })}</div>`;
    } else {
      A.innerHTML = D.code(s.code) + (s.kind === "number"
        ? `<div class="card"><label class="lbl" for="num">Your answer</label><input class="field" id="num" inputmode="numeric" pattern="-?[0-9]*" autocomplete="off" placeholder="Type a number" style="font-family:var(--display);font-size:32px"></div>`
        : `<div class="card"><p class="eyebrow">Your answer</p><div class="opts${s.options.some(o => String(o).length > 5) ? " long" : ""}">${s.options.map((o, k) => `<button class="opt${pick === k ? " pick" : ""}" data-pick="${k}" aria-pressed="${pick === k}">${esc(o)}</button>`).join("")}</div></div>`);
    }
    A.querySelectorAll("[data-pick]").forEach(b => (b.onclick = () => { pick = +b.dataset.pick; answerArea(); }));
    A.querySelectorAll("[data-line]").forEach(b => { const f = () => { pickLine = +b.dataset.line; answerArea(); }; b.onclick = f; b.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); f(); } }; });
    const num = $("#num"); if (num) num.onkeydown = e => { if (e.key === "Enter") { e.preventDefault(); lockIn(); } };
  }

  function live() {
    const L = $("#live"); if (!L) return;
    const s = st(), i = s.step, step = S[i], ps = Object.keys(room.players || {}).length, w = D.teamWord(s.mode);
    if (s.phase === "lobby") { L.innerHTML = `<p class="big"><b>${ps}</b> ${w}${ps === 1 ? "" : "s"} joined so far</p>`; return; }
    if (step.type === "door" && s.phase === "open") {
      const mine = myAns(i), n = Object.keys((room.ans && room.ans[i]) || {}).length, h = myHint(i);
      const free = hintsUsed() === 0 || h;
      L.innerHTML = mine
        ? `<div class="result none"><span class="icon big">${ic("lock")}</span><h2>Locked in!</h2><p class="big">Your answer: <b>${esc(D.myAnswerText(step, mine.a))}</b></p><p class="muted">${n} of ${ps} ${w}s locked in. Wait for the host to reveal…</p></div>`
        : `<button class="btn wide lockbtn" id="lock">Lock it in</button><p class="err" id="say" role="alert"></p><p class="muted" id="tnote"></p>
           ${h ? `<div class="hintbox">${ic("lightbulb")} ${esc(step.hint)}</div>` : `<button class="btn ghost wide" id="hint">${hintArm ? "Tap again to use it (−30 points)" : free ? ic("lightbulb") + " Use your free hint" : ic("lightbulb") + " Hint (costs 30 points)"}</button>`}
           <p class="muted">${n} of ${ps} ${w}s locked in</p>`;
      const lb = $("#lock"); if (lb) lb.onclick = lockIn;
      const hb = $("#hint"); if (hb) hb.onclick = hint;
      return;
    }
    if (step.type === "door" && s.phase === "reveal") {
      const r = D.answerPoints(room, i, pid);
      let cls = "none", head = "No answer this time", sub = "You didn’t lock in an answer.";
      if (r.answered && r.ok) { cls = "good"; head = "Cracked it!"; sub = `+${r.base} correct · +${r.speed} speed`; }
      else if (r.answered && step.kind === "bug" && (r.o || r.l)) { cls = "bad"; head = "Half right!"; const po = step.partO || "the output", pl = step.partL || "the bug"; sub = `+${r.base}. You got ${r.o ? po : pl}, but not ${r.o ? pl : po}.`; }
      else if (r.answered) { cls = "bad"; head = "Not this time"; sub = `You said ${D.myAnswerText(step, r.a)}.`; }
      L.innerHTML = `<div class="result ${cls}"><h2>${head}</h2><p class="big">${esc(sub)}</p>${r.pts ? `<p class="pts">+${r.pts}</p>` : ""}</div>`;
      return;
    }
    if (step.type === "door" && s.phase === "board") {
      const row = D.table(room, i).find(r => r.pid === pid);
      L.innerHTML = (row ? `<div class="card amber center"><p class="eyebrow" style="color:#4A3300">Your ${w}</p><p class="answer" style="color:#1C1300">#${row.rank}</p><p class="big">${row.total} points</p></div>` : "") + D.vBoard(room, i, pid);
      return;
    }
    if (step.type === "speak") {
      const got = room.bonus && room.bonus[i] && room.bonus[i][pid];
      L.innerHTML = got ? `<div class="result good"><h2>You spoke!</h2><p class="pts">+${got}</p></div>`
        : `<p class="big">Want to speak? Raise your hand or unmute. It’s completely optional, and there’s no wrong English!</p>`;
      return;
    }
    if (step.type === "offer") {
      const rows = D.table(room, D.lastStep()), row = rows.find(r => r.pid === pid);
      L.innerHTML = (row ? D.offerCard(row, true) : "") + `<p class="eyebrow">Everyone’s offers</p><div class="board">${rows.filter(r => r.pid !== pid).map(r => D.offerCard(r)).join("")}</div>`;
      return;
    }
    if (step.type === "end") {
      const rows = D.table(room, D.lastStep()), row = rows.find(r => r.pid === pid);
      L.innerHTML = `<div class="card amber center"><p class="eyebrow" style="color:#4A3300">You finished</p><p class="answer" style="color:#1C1300">#${row ? row.rank : "–"}</p><p class="big">${row ? row.total : 0} points · ${esc(D.W.endLine)}</p></div>
        ${D.vPodium(rows)}
        <a class="btn wide green" style="text-align:center;text-decoration:none;display:block" href="${esc(step.joinUrl)}" target="_blank" rel="noopener">${esc(step.joinButton)}</a>
        <p class="muted center">${esc(step.joinText)}</p>`;
    }
  }

  boot();
})();
