// EduMoon Game Zone: host code lock.
// Only people with a host code (given by EduMoon) can create a game room.
// The check happens in the Firebase rules (see engine/RULES.md), not in this file,
// so it can't be skipped by editing the page.
//
// Firebase layout:
//   hostcodes/<CODE> = "Ambassador name"     (added by EduMoon in the Firebase console; nobody can read it)
//   roomkeys/<ROOM>  = "<CODE>"              (written once when a room is created; nobody can read it)
//   hostlog/<CODE>/<ROOM> = {game, at}       (who hosted what, visible only in the Firebase console)

(function () {
  const KEY = "edumoon-hostlock";
  const clean = s => String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 20);

  const HostLock = {
    saved() { try { return localStorage.getItem(KEY) || ""; } catch (e) { return ""; } },
    remember(c) { try { localStorage.setItem(KEY, c); } catch (e) {} },
    forget() { try { localStorage.removeItem(KEY); } catch (e) {} },
    clean,

    // The input box for the setup screen.
    field() {
      if (window.DB && DB.mode === "demo") return "";
      return `<div class="card hostlock">
        <label class="lbl" for="hostcode">Host code</label>
        <input class="field" id="hostcode" maxlength="20" autocomplete="off" autocapitalize="characters" spellcheck="false"
          placeholder="From EduMoon" value="${HostLock.saved()}"
          style="font-family:var(--display);letter-spacing:.12em;text-transform:uppercase">
        <p class="muted small" id="hosterr" role="alert" style="margin:.5em 0 0"></p>
      </div>`;
    },
    read() { const el = document.getElementById("hostcode"); return el ? clean(el.value) : ""; },
    error(msg) { const el = document.getElementById("hosterr"); if (el) { el.textContent = msg; el.style.color = msg ? "var(--bad, #FF6B6B)" : ""; } },

    // Create the room's state in one write, together with its key and a log line.
    // Resolves true if it worked, false if the host code was wrong.
    async create(room, state, gameId) {
      if (DB.mode === "demo") { await DB.set(`rooms/${room}/state`, state); return true; }
      const code = HostLock.read();
      if (!code) { HostLock.error("Type your host code. Ask EduMoon if you don’t have one."); return false; }
      const upd = {};
      upd[`roomkeys/${room}`] = code;
      upd[`hostlog/${code}/${room}`] = { game: gameId || state.game || "live", at: DB.now() };
      upd[`rooms/${room}/state`] = state;
      try {
        await DB.fb.ref().update(upd);
        HostLock.remember(code); HostLock.error("");
        return true;
      } catch (e) {
        console.warn(e);
        const denied = /permission/i.test(String(e && (e.code || e.message)));
        HostLock.error(denied ? "That host code isn’t valid. Check it or ask EduMoon." : "Couldn’t reach the game server. Check the internet and try again.");
        return false;
      }
    }
  };

  // A full-screen box for pages without their own setup screen (EduMoon Live).
  // Keeps asking until a room is created, then resolves.
  HostLock.gate = function (room, state, gameId) {
    if (DB.mode === "demo") return HostLock.create(room, state, gameId);
    return new Promise(resolve => {
      const box = document.createElement("div");
      box.style.cssText = "position:fixed;inset:0;z-index:99;display:grid;place-items:center;padding:16px;background:rgba(5,8,30,.92)";
      box.innerHTML = `<div style="width:min(420px,100%);background:#10163F;border-radius:20px;padding:24px;color:#F3F6FC;font-family:inherit">
        <h2 style="margin:0 0 6px">Host code</h2>
        <p style="margin:0 0 14px;opacity:.75">Only EduMoon hosts can start a game.</p>
        <input id="hostcode" maxlength="20" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="From EduMoon" value="${HostLock.saved()}"
          style="width:100%;box-sizing:border-box;padding:14px;border-radius:12px;border:2px solid #2A356F;background:#0A0F33;color:#F3F6FC;font-size:20px;letter-spacing:.12em;text-transform:uppercase">
        <p id="hosterr" role="alert" style="min-height:1.2em;margin:8px 0"></p>
        <button id="hostgo" style="width:100%;padding:14px;border:0;border-radius:12px;background:#FFC83D;color:#1A1300;font-weight:800;font-size:18px;cursor:pointer">Start hosting</button>
      </div>`;
      document.body.appendChild(box);
      const go = async () => {
        const b = box.querySelector("#hostgo"); b.disabled = true;
        const ok = await HostLock.create(room, state, gameId);
        b.disabled = false;
        if (ok) { box.remove(); resolve(true); }
      };
      box.querySelector("#hostgo").onclick = go;
      box.querySelector("#hostcode").onkeydown = e => { if (e.key === "Enter") go(); };
    });
  };

  window.HostLock = HostLock;
})();
