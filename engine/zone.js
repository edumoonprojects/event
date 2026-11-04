// EduMoon Game Zone: draws the home page and each club page from games.js.
// The page's <body data-club="coding"> picks a club; no data-club means the home page.
// <body data-root="../"> is the path back to the main event folder.

(function () {
  const Z = window.ZONE, body = document.body, club = body.dataset.club, root = body.dataset.root || "";
  const $ = q => document.querySelector(q);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const LEVEL = { beginner: ["#3DDC97", "Beginner"], medium: ["#FFB830", "Medium"], advanced: ["#FF6B6B", "Advanced"] };
  const byClub = id => Z.clubs.find(c => c.id === id);
  const gamesOf = id => Z.games.filter(g => g.club === id).sort((a, b) => (b.added || "").localeCompare(a.added || ""));
  const latest = () => Z.games.slice().sort((a, b) => (b.added || "").localeCompare(a.added || "")).slice(0, 3);
  const isNew = g => g.added && (Date.now() - new Date(g.added + "T00:00:00").getTime()) < 14 * 864e5;

  // Filters: which years each standard label covers, and whether a game needs coding knowledge.
  const YEARS = { "All years": [1, 2, 3, 4], "1st & 2nd year": [1, 2], "2nd & 3rd year": [2, 3], "2nd year onwards": [2, 3, 4], "3rd year onwards": [3, 4], "Final year": [4] };
  const yearsOf = g => YEARS[g.years] || [1, 2, 3, 4];
  const noCode = g => g.nocode || g.club !== "coding";
  const mins = g => parseInt(g.time, 10) || 99;
  const RANK = { beginner: 0, medium: 1, advanced: 2 };
  const SORTS = {
    newest: ["Newest", (a, b) => (b.added || "").localeCompare(a.added || "")],
    easy: ["Easiest first", (a, b) => (RANK[a.level] ?? 0) - (RANK[b.level] ?? 0) || (b.added || "").localeCompare(a.added || "")],
    short: ["Shortest first", (a, b) => mins(a) - mins(b) || (b.added || "").localeCompare(a.added || "")],
    az: ["A to Z", (a, b) => a.title.localeCompare(b.title)]
  };

  const badges = g => {
    const lv = LEVEL[g.level] || LEVEL.beginner;
    return `<ul class="badges" aria-label="Game details">
      <li>${ic("graduation-cap")} ${esc(g.years)}</li>
      <li><span class="dot" style="background:${lv[0]}" aria-hidden="true"></span> ${lv[1]}</li>
      <li>${ic("clock")} ${esc(g.time)}</li>
      ${g.club === "coding" && g.nocode ? `<li>${ic("check")} No coding needed</li>` : ""}
      <li>${ic("users")} ${esc(g.group)}</li>
      <li>${ic("smartphone")} ${esc(g.needs)}</li>
    </ul>`;
  };

  const gameCard = (g, showClub) => {
    const c = byClub(g.club);
    return `<article class="gcard" style="--c:${c.color};--c2:${c.color2}">
      <div class="ghead">${showClub ? `<span class="clubtag">${ic(c.icon)} ${esc(c.name)}</span>` : ""}${isNew(g) ? `<span class="newtag">New</span>` : ""}</div>
      <h3><span class="gicon">${ic(g.icon)}</span> ${esc(g.title)}</h3>
      <p class="muted">${esc(g.desc)}</p>
      ${badges(g)}
      <div class="gbtns"><a class="btn" href="${root}${g.host}">Host this game</a><a class="btn ghost" href="${root}${g.player}">Player page</a></div>
    </article>`;
  };

  const banner = () => { const b = Z.banner; return b ? `<section class="vibe">
      <div><p class="eyebrow">${esc(b.eyebrow)}</p><h2>${esc(b.title)}</h2><p class="big">${esc(b.text)}</p></div>
      <a class="btn green" href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.button)}</a></section>` : ""; };


  // The filter bar: search, level, year, a no-coding switch and sort. Nothing selected = every game.
  function filterable(list, showClub, key) {
    const D0 = { q: "", level: "all", year: "all", nocode: false, sort: "newest" };
    let st = Object.assign({}, D0);
    try { const saved = JSON.parse(localStorage.getItem("gz-filter-" + key) || "{}"); Object.assign(st, saved, { q: "" }); } catch (e) {}
    if (!SORTS[st.sort]) st.sort = "newest";
    const chips = (name, opts) => `<div class="frow" role="group" aria-label="${name}"><span class="flabel">${name}</span><div class="fchips">${opts.map(([v, t]) => `<button type="button" class="fchip" data-f="${name.toLowerCase()}" data-v="${v}">${t}</button>`).join("")}</div></div>`;
    const html = `<div class="filters" role="search">
        <label class="fsearch">${ic("search")}<input id="fq" type="search" placeholder="Search games" aria-label="Search games" autocomplete="off"></label>
        ${chips("Level", [["all", "All"], ["beginner", "Beginner"], ["medium", "Medium"], ["advanced", "Advanced"]])}
        ${chips("Year", [["all", "All"], ["1", "1st"], ["2", "2nd"], ["3", "3rd"], ["4", "Final"]])}
        <div class="frow fend">
          <label class="fswitch"><input id="fnc" type="checkbox"> No coding needed</label>
          <label class="fsort">Sort <select id="fsort" aria-label="Sort games">${Object.entries(SORTS).map(([k, [t]]) => `<option value="${k}">${t}</option>`).join("")}</select></label>
        </div>
        <div class="fcount"><span id="fn" aria-live="polite"></span><button type="button" class="fclear" id="fclr" hidden>Clear filters</button></div>
      </div>
      <div id="fgrid"></div>`;
    const draw = () => {
      const q = st.q.trim().toLowerCase();
      const shown = list.filter(g => (st.level === "all" || g.level === st.level)
        && (st.year === "all" || yearsOf(g).includes(+st.year))
        && (!st.nocode || noCode(g))
        && (!q || [g.title, g.desc, (byClub(g.club) || {}).name, g.years].join(" ").toLowerCase().includes(q))).sort(SORTS[st.sort][1]);
      document.querySelectorAll(".fchip").forEach(b => { const on = String(st[b.dataset.f]) === b.dataset.v; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
      $("#fnc").checked = st.nocode; $("#fsort").value = st.sort;
      const busy = st.q || st.level !== "all" || st.year !== "all" || st.nocode;
      $("#fclr").hidden = !busy;
      $("#fn").textContent = busy ? `${shown.length} of ${list.length} games` : `${list.length} games`;
      $("#fgrid").innerHTML = shown.length ? `<div class="ggrid">${shown.map(g => gameCard(g, showClub)).join("")}</div>`
        : `<div class="card nomatch"><h3>No games match</h3><p class="muted">Try another search or fewer filters.</p><button type="button" class="btn" id="fclr2">Clear filters</button></div>`;
      const c2 = $("#fclr2"); if (c2) c2.onclick = clear;
      try { localStorage.setItem("gz-filter-" + key, JSON.stringify({ level: st.level, year: st.year, nocode: st.nocode, sort: st.sort })); } catch (e) {}
    };
    const clear = () => { st = Object.assign({}, D0, { sort: st.sort }); $("#fq").value = ""; draw(); };
    const wire = () => {
      document.querySelectorAll(".fchip").forEach(b => b.onclick = () => { st[b.dataset.f] = b.dataset.v; draw(); });
      $("#fq").oninput = e => { st.q = e.target.value; draw(); };
      $("#fnc").onchange = e => { st.nocode = e.target.checked; draw(); };
      $("#fsort").onchange = e => { st.sort = e.target.value; draw(); };
      $("#fclr").onclick = clear;
      draw();
    };
    return { html, wire };
  }

  function home() {
    document.title = "EduMoon Game Zone";
    $("#main").innerHTML = `
      <section class="hero">
        <p class="eyebrow">Welcome to</p>
        <h1 class="zt">EduMoon <span>Game Zone</span></h1>
        <p class="big muted">Pick your club, pick a game, and host it with just your phone.</p>
      </section>
      <section class="clubs" aria-label="Clubs">
        ${Z.clubs.map(c => { const n = gamesOf(c.id).length; return `<a class="ccard" href="${root}${c.id}/" style="--c:${c.color};--c2:${c.color2}">
          <span class="cicon">${ic(c.icon)}</span><h2>${esc(c.name)}</h2><p>${esc(c.tagline)}</p>
          <span class="ccount">${n ? n + (n === 1 ? " game" : " games") : "New games landing soon"} →</span></a>`; }).join("")}
      </section>
      <a class="allgames" href="${root}all/">${ic("search")} Search and filter all ${Z.games.length} games →</a>
      <section class="block"><p class="eyebrow">Latest events</p><div class="ggrid">${latest().map(g => gameCard(g, true)).join("")}</div></section>
      ${banner()}`;
  }

  function clubPage(c) {
    document.title = c.name + " · EduMoon Game Zone";
    const list = gamesOf(c.id);
    const F = list.length >= 6 ? filterable(list, false, c.id) : null;
    $("#main").innerHTML = `
      <a class="backlink" href="${root}">← EduMoon Game Zone</a>
      <section class="chero" style="--c:${c.color};--c2:${c.color2}">
        <span class="cicon">${ic(c.icon)}</span>
        <div><h1 class="zt">${esc(c.name)}</h1><p class="big">${esc(c.about)}</p></div>
      </section>
      <section class="block"><p class="eyebrow">${F ? "Games to host" : `${list.length} ${list.length === 1 ? "game" : "games"} to host`}</p>
        ${F ? F.html : list.length ? `<div class="ggrid">${list.map(g => gameCard(g, false)).join("")}</div>` : `<div class="card"><h3>New games are on the way</h3><p class="muted">Check back soon. Meanwhile, try a game from another club.</p></div>`}
      </section>
      <section class="block"><p class="eyebrow">How to host</p>
        <ol class="steps"><li>Tap <b>Host this game</b> on your phone or laptop</li><li>Pick <b>Teams</b> or <b>Solo</b>, then create the room</li><li>Share the QR code or link with your students</li><li>Tap <b>Next</b> to move through the game. You’re in control</li></ol>
      </section>
      ${banner()}`;
    if (F) F.wire();
  }

  function allPage() {
    document.title = "All games · EduMoon Game Zone";
    const list = Z.games.slice();
    const F = filterable(list, true, "all");
    $("#main").innerHTML = `
      <a class="backlink" href="${root}">← EduMoon Game Zone</a>
      <section class="hero"><p class="eyebrow">Every club, one place</p><h1 class="zt">All <span>games</span></h1>
        <p class="big muted">Search, filter by level or year, and find the right game for your crowd.</p></section>
      <section class="block">${F.html}</section>
      ${banner()}`;
    F.wire();
  }

  const c = club && byClub(club);
  if (club === "all") allPage(); else if (c) clubPage(c); else home();
})();
