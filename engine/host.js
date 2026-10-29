// EduMoon Door Games: the host page. Works on a phone or a laptop, and is safe to show on a
// projector or a Zoom share: answers only appear after the host taps Reveal.

(function () {
  const G = window.GAME, S = G.steps, $ = q => document.querySelector(q), esc = H.esc;
  const KEY = "doors-host-" + G.id;
  let code = null, room = {}, lastKey = "", confirmNew = false;

  const st = () => room.state || {};
  const base = () => `rooms/${code}`;
  const joinURL = () => { const u = new URL("index.html", location.href); u.search = "?room=" + code; return u.href; };
  const players = () => Object.entries(room.players || {}).map(([pid, p]) => ({ pid, ...p }));

  async function boot() {
    await DB.init();
    $("#conn").textContent = DB.mode === "live" ? "Live" : "Demo";
    $("#conn").className = "tag" + (DB.mode === "live" ? " live" : "");
    $("#title").textContent = G.title;
    $("#club").textContent = "EduMoon · " + G.club;
    document.title = G.title + " · Host";
    const saved = D.store.get(KEY);
    if (saved) {
      const s = await DB.get(`rooms/${saved}/state`);
      if (s && s.game === G.id) { code = saved; listen(); return; }
    }
    setup();
  }

  // ---------- setup: pick Teams or Solo ----------
  let pickMode = "teams";
  function setup() {
    $("#main").innerHTML = `
      <p class="eyebrow">New game</p>
      <h1 class="title">${esc(G.title)}</h1>
      <p class="big muted">${esc(G.tagline)}</p>
      <div class="modes" role="radiogroup" aria-label="How will people play?">
        <button class="mode${pickMode === "teams" ? " on" : ""}" role="radio" aria-checked="${pickMode === "teams"}" data-mode="teams"><b>👥 Teams</b><span class="muted">One phone per team of 3–4. Best for 8+ people.</span></button>
        <button class="mode${pickMode === "solo" ? " on" : ""}" role="radio" aria-checked="${pickMode === "solo"}" data-mode="solo"><b>🙋 Solo</b><span class="muted">Everyone plays on their own phone. Best for small groups.</span></button>
      </div>
      <button class="btn wide" id="create">Create game room</button>
      ${DB.mode === "demo" ? `<p class="muted">Demo mode: Firebase isn’t connected, so players can only join from other tabs on this device.</p>` : ""}`;
    $("#bar").hidden = true;
    document.querySelectorAll("[data-mode]").forEach(b => (b.onclick = () => { pickMode = b.dataset.mode; setup(); }));
    $("#create").onclick = async () => {
      $("#create").disabled = true;
      let c; for (let i = 0; i < 5; i++) { c = H.code(); if (!(await DB.get(`rooms/${c}/state`))) break; }
      code = c; D.store.set(KEY, code);
      await DB.set(base(), { state: { game: G.id, mode: pickMode, step: -1, phase: "lobby", created: DB.now() } });
      listen();
    };
  }

  function listen() {
    DB.on(base(), v => { room = v || {}; render(); });
    setInterval(() => D.tick(room), 250);
    document.addEventListener("keydown", e => {
      if (e.target.tagName === "INPUT") return;
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") { e.preventDefault(); main(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); back(); }
    });
    $("#next").onclick = main; $("#back").onclick = back; $("#more").onclick = addTime; $("#menu").onclick = menu;
  }

  // ---------- moving through the game (only the host does this) ----------
  async function setState(patch) { await DB.update(`${base()}/state`, patch); }

  async function go(i) {
    if (i < 0 || i >= S.length) return;
    if (D.isDoor(i)) {
      const opened = room.timing && room.timing[i];
      if (!opened) await DB.set(`${base()}/timing/${i}`, { t0: DB.now(), dur: S[i].time });
      return setState({ step: i, phase: opened ? "reveal" : "open" });
    }
    setState({ step: i, phase: "show" });
  }

  function main() {
    const s = st(), i = s.step;
    if (s.phase === "lobby") return go(0);
    if (D.isDoor(i) && s.phase === "open") return setState({ phase: "reveal" });
    if (D.isDoor(i) && s.phase === "reveal") return D.hasBoard(i) ? setState({ phase: "board" }) : go(i + 1);
    if (i < S.length - 1) return go(i + 1);
  }

  function back() {
    const s = st(), i = s.step;
    if (s.phase === "lobby" || i == null) return;
    if (D.isDoor(i) && s.phase === "board") return setState({ phase: "reveal" });
    if (i === 0) return setState({ step: -1, phase: "lobby" });
    const p = i - 1;
    if (D.isDoor(p)) return setState({ step: p, phase: D.hasBoard(p) ? "board" : "reveal" });
    setState({ step: p, phase: "show" });
  }

  async function addTime() {
    const i = st().step, tm = room.timing && room.timing[i];
    if (!tm) return;
    const end = Math.max(tm.t0 + tm.dur * 1000, DB.now()) + 30000;
    await DB.update(`${base()}/timing/${i}`, { dur: Math.round((end - tm.t0) / 1000) });
    flash("+30 seconds");
  }

  function menu() {
    if (!confirmNew) { confirmNew = true; $("#menu").textContent = "Tap again: new game"; setTimeout(() => { confirmNew = false; $("#menu").textContent = "⟲"; }, 3000); return; }
    D.store.del(KEY); location.reload();
  }

  async function toggleBonus(pid) {
    const i = st().step, has = room.bonus && room.bonus[i] && room.bonus[i][pid];
    await DB.set(`${base()}/bonus/${i}/${pid}`, has ? null : (S[i].type === "speak" ? S[i].points || 100 : D.POINTS.explain));
  }

  function flash(t) { const el = document.createElement("div"); el.className = "toast"; el.textContent = t; document.body.appendChild(el); setTimeout(() => el.remove(), 1600); }

  // ---------- screens ----------
  function render() {
    const s = st(), i = s.step, key = s.phase + ":" + i;
    $("#key").innerHTML = D.keyline(s);
    $("#codepill").textContent = code ? "Room " + code : "";
    if (key !== lastKey) { lastKey = key; full(); }
    live();
    bar();
  }

  function full() {
    const s = st(), i = s.step, step = S[i], M = $("#main");
    if (s.phase === "lobby") {
      M.innerHTML = `
        <div class="split">
          <div class="card" style="gap:16px">
            <p class="eyebrow">Join the game · ${s.mode === "solo" ? "Solo" : "Teams"}</p>
            <p class="big">Scan the QR code, or open the link and type the room code.</p>
            <p class="roomcode">${esc(code)}</p>
            <div class="qr" id="qr" aria-label="QR code to join"></div>
            <p class="url">${esc(joinURL())}</p>
            <button class="btn ghost" id="copy">Copy invite message</button>
          </div>
          <div class="card"><p class="eyebrow">Joined</p><div id="live"></div></div>
        </div>`;
      if (window.QRCode) new QRCode($("#qr"), { text: joinURL(), width: 180, height: 180, colorDark: "#0A0E27", colorLight: "#F2F4FB" });
      $("#copy").onclick = copyInvite;
      return;
    }
    if (!step) return;
    if (step.type === "story") M.innerHTML = D.vStory(step);
    else if (step.type === "rules") M.innerHTML = D.vRules(s.mode);
    else if (step.type === "learn") M.innerHTML = D.vLearn(step);
    else if (step.type === "door" && s.phase === "open") M.innerHTML = D.vDoorHead(step, i, room) + D.code(step.code) + `<div class="card" id="live"></div>`;
    else if (step.type === "door" && s.phase === "reveal") M.innerHTML = D.vReveal(step, i) + `<div class="card" id="live"></div>`;
    else if (step.type === "door" && s.phase === "board") M.innerHTML = `<div id="live"></div>`;
    else if (step.type === "key") M.innerHTML = D.vKey();
    else if (step.type === "offer") M.innerHTML = `<div id="live"></div>`;
    else if (step.type === "tale") M.innerHTML = D.vTale(step);
    else if (step.type === "speak") M.innerHTML = D.vSpeak(step) + `<div class="card" id="live"></div>`;
    else if (step.type === "wordlist") M.innerHTML = D.vWordlist(step);
    else if (step.type === "match") {
      M.innerHTML = D.vMatch(step) + `
        <div class="card" style="flex-direction:row;align-items:center;gap:24px;flex-wrap:wrap">
          <div class="qr" id="matchqr" aria-label="QR code for ${esc(step.title)}"></div>
          <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:8px"><p class="big"><b>Everyone, scan this on your own phone.</b></p><p class="muted">Already in the game? There’s also a button on your game screen.</p><p class="url">${esc(D.matchURL(step))}</p></div>
        </div>`;
      if (window.QRCode) new QRCode($("#matchqr"), { text: D.matchURL(step), width: 200, height: 200, colorDark: "#0A0E27", colorLight: "#F2F4FB" });
    }
    else if (step.type === "end") {
      M.innerHTML = `<div id="live"></div>
        <div class="card amber" style="flex-direction:row;align-items:center;gap:20px;flex-wrap:wrap">
          <div class="qr" id="endqr" aria-label="QR code to join the EduMoon community"></div>
          <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:8px"><h2>${esc(step.joinTitle)}</h2><p class="big">${esc(step.joinText)}</p><p class="muted">Scan to join on WhatsApp</p></div>
        </div>`;
      if (window.QRCode) new QRCode($("#endqr"), { text: step.joinUrl, width: 180, height: 180, colorDark: "#0A0E27", colorLight: "#F2F4FB" });
    }
    window.scrollTo(0, 0);
  }

  function live() {
    const L = $("#live"); if (!L) return;
    const s = st(), i = s.step, step = S[i], ps = players(), w = D.teamWord(s.mode);
    if (s.phase === "lobby") {
      L.innerHTML = `<p class="count">${ps.length}</p><p class="muted">${w}${ps.length === 1 ? "" : "s"} joined</p>
        <div class="chips">${ps.map(p => `<span class="chip">${esc(p.name)}</span>`).join("")}</div>`;
      return;
    }
    if (step && step.type === "door" && s.phase === "open") {
      const ans = (room.ans && room.ans[i]) || {}, n = Object.keys(ans).length;
      L.innerHTML = `<div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap"><span class="count">${n} / ${ps.length}</span><span class="big muted">${w}s locked in</span></div>
        <div class="chips">${ps.map(p => `<span class="chip${ans[p.pid] ? " on" : ""}">${ans[p.pid] ? "🔒 " : ""}${esc(p.name)}</span>`).join("")}</div>
        ${n >= ps.length && ps.length ? `<p class="note">Everyone has locked in. Tap Reveal when you’re ready!</p>` : ""}`;
      return;
    }
    if (step && step.type === "door" && s.phase === "reveal") {
      const right = ps.filter(p => D.answerPoints(room, i, p.pid).ok), b = (room.bonus && room.bonus[i]) || {};
      L.innerHTML = `<p class="big"><b>${right.length} of ${ps.length}</b> ${w}s ${esc(D.W.cracked)}.</p>
        <p class="eyebrow">Explain bonus: tap the ${w} that explained it well (+${D.POINTS.explain})</p>
        <div class="chips">${ps.map(p => `<button class="chip${b[p.pid] ? " on" : ""}" data-bonus="${esc(p.pid)}" aria-pressed="${!!b[p.pid]}">${b[p.pid] ? "⭐ " : ""}${esc(p.name)}</button>`).join("") || `<span class="muted">No ${w}s</span>`}</div>`;
      L.querySelectorAll("[data-bonus]").forEach(btn => (btn.onclick = () => toggleBonus(btn.dataset.bonus)));
      return;
    }
    if (step && step.type === "door" && s.phase === "board") { L.innerHTML = D.vBoard(room, i); return; }
    if (step && step.type === "offer") { L.innerHTML = D.vOffers(room); return; }
    if (step && step.type === "speak") {
      const b = (room.bonus && room.bonus[i]) || {}, pts = step.points || 100;
      L.innerHTML = `<p class="eyebrow">Optional · tap whoever spoke (+${pts}). Nobody? Just tap Next.</p>
        <div class="chips">${ps.map(p => `<button class="chip${b[p.pid] ? " on" : ""}" data-bonus="${esc(p.pid)}" aria-pressed="${!!b[p.pid]}">${b[p.pid] ? "🎤 " : ""}${esc(p.name)}</button>`).join("") || `<span class="muted">No ${w}s</span>`}</div>`;
      L.querySelectorAll("[data-bonus]").forEach(btn => (btn.onclick = () => toggleBonus(btn.dataset.bonus)));
      return;
    }
    if (step && step.type === "end") {
      const rows = D.table(room, D.lastStep());
      L.innerHTML = `<p class="eyebrow">Final results</p><h1 class="title">${rows[0] ? esc(rows[0].name) + " " + esc(D.W.winner) : "Game over"}</h1>
        ${D.vPodium(rows)}<div class="board">${rows.map(r => D.brow(r)).join("")}</div>`;
    }
  }

  function bar() {
    const s = st(), i = s.step, step = S[i];
    $("#bar").hidden = false;
    let label = "Next ▶", dis = false;
    if (s.phase === "lobby") { label = "Start game ▶"; dis = !players().length; }
    else if (step && step.type === "door" && s.phase === "open") label = "Reveal answer 🔓";
    else if (step && step.type === "door" && s.phase === "reveal") label = D.hasBoard(i) ? "Show leaderboard 🏆" : "Next ▶";
    else if (step && step.type === "door" && s.phase === "board") label = i === D.doorSteps[D.doorSteps.length - 1] ? D.W.finale : D.W.next;
    else if (i === S.length - 1) { label = "Game over 🎉"; dis = true; }
    $("#next").textContent = label; $("#next").disabled = dis;
    $("#back").disabled = s.phase === "lobby";
    $("#more").hidden = !(step && step.type === "door" && s.phase === "open");
    $("#pos").textContent = s.phase === "lobby" ? "Lobby" : `${i + 1} / ${S.length}`;
  }

  async function copyInvite() {
    const w = st().mode === "solo" ? "your name" : "your team name";
    const msg = `🔐 ${G.title} is starting!\nEduMoon ${G.club}\n\nTap to join: ${joinURL()}\nRoom code: ${code}\n\nOpen it on your phone and enter ${w}.`;
    try { await navigator.clipboard.writeText(msg); flash("Copied! Paste it in Zoom or WhatsApp"); }
    catch (e) { prompt("Copy this invite:", msg); }
  }

  boot();
})();
