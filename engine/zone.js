// EduMoon Game Zone: draws the home page and each club page from games.js.
// The page's <body data-club="coding"> picks a club; no data-club means the home page.
// <body data-root="../"> is the path back to the main event folder.

(function () {
  const Z = window.ZONE, body = document.body, club = body.dataset.club, root = body.dataset.root || "";
  const $ = q => document.querySelector(q);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const LEVEL = { beginner: ["🟢", "Beginner"], medium: ["🟡", "Medium"], advanced: ["🔴", "Advanced"] };
  const byClub = id => Z.clubs.find(c => c.id === id);
  const gamesOf = id => Z.games.filter(g => g.club === id).sort((a, b) => (b.added || "").localeCompare(a.added || ""));
  const latest = () => Z.games.slice().sort((a, b) => (b.added || "").localeCompare(a.added || "")).slice(0, 3);
  const isNew = g => g.added && (Date.now() - new Date(g.added + "T00:00:00").getTime()) < 14 * 864e5;

  const badges = g => {
    const lv = LEVEL[g.level] || LEVEL.beginner;
    return `<ul class="badges" aria-label="Game details">
      <li><span aria-hidden="true">🎓</span> ${esc(g.years)}</li>
      <li>${lv[0]} ${lv[1]}</li>
      <li><span aria-hidden="true">⏱</span> ${esc(g.time)}</li>
      <li><span aria-hidden="true">👥</span> ${esc(g.group)}</li>
      <li>${esc(g.needs)}</li>
    </ul>`;
  };

  const gameCard = (g, showClub) => {
    const c = byClub(g.club);
    return `<article class="gcard" style="--c:${c.color};--c2:${c.color2}">
      <div class="ghead">${showClub ? `<span class="clubtag">${c.icon} ${esc(c.name)}</span>` : ""}${isNew(g) ? `<span class="newtag">New</span>` : ""}</div>
      <h3><span aria-hidden="true">${g.icon}</span> ${esc(g.title)}</h3>
      <p class="muted">${esc(g.desc)}</p>
      ${badges(g)}
      <div class="gbtns"><a class="btn" href="${root}${g.host}">Host this game</a><a class="btn ghost" href="${root}${g.player}">Player page</a></div>
    </article>`;
  };

  const banner = () => { const b = Z.banner; return b ? `<section class="vibe">
      <div><p class="eyebrow">${esc(b.eyebrow)}</p><h2>${esc(b.title)}</h2><p class="big">${esc(b.text)}</p></div>
      <a class="btn green" href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.button)}</a></section>` : ""; };

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
          <span class="cicon" aria-hidden="true">${c.icon}</span><h2>${esc(c.name)}</h2><p>${esc(c.tagline)}</p>
          <span class="ccount">${n ? n + (n === 1 ? " game" : " games") : "New games landing soon"} →</span></a>`; }).join("")}
      </section>
      <section class="block"><p class="eyebrow">Latest events</p><div class="ggrid">${latest().map(g => gameCard(g, true)).join("")}</div></section>
      ${banner()}`;
  }

  function clubPage(c) {
    document.title = c.name + " · EduMoon Game Zone";
    const list = gamesOf(c.id);
    $("#main").innerHTML = `
      <a class="backlink" href="${root}">← EduMoon Game Zone</a>
      <section class="chero" style="--c:${c.color};--c2:${c.color2}">
        <span class="cicon" aria-hidden="true">${c.icon}</span>
        <div><h1 class="zt">${esc(c.name)}</h1><p class="big">${esc(c.about)}</p></div>
      </section>
      <section class="block"><p class="eyebrow">${list.length} ${list.length === 1 ? "game" : "games"} to host</p>
        ${list.length ? `<div class="ggrid">${list.map(g => gameCard(g, false)).join("")}</div>` : `<div class="card"><h3>New games are on the way</h3><p class="muted">Check back soon. Meanwhile, try a game from another club.</p></div>`}
      </section>
      <section class="block"><p class="eyebrow">How to host</p>
        <ol class="steps"><li>Tap <b>Host this game</b> on your phone or laptop</li><li>Pick <b>Teams</b> or <b>Solo</b>, then create the room</li><li>Share the QR code or link with your students</li><li>Tap <b>Next</b> to move through the game. You’re in control</li></ol>
      </section>
      ${banner()}`;
  }

  const c = club && byClub(club);
  if (c) clubPage(c); else home();
})();
