// EduMoon Live: shared helpers and the data layer.
// Uses Firebase Realtime Database when firebase-config.js has a config,
// otherwise a local demo store that syncs between tabs on the same device.

(function () {
  const FB_VERSION = "10.12.2";

  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = () => rej(new Error("Could not load " + src));
      document.head.appendChild(s);
    });
  }

  // ---------- Local demo store ----------
  const KEY = "edumoon-live-demo";
  const local = {
    listeners: new Set(), ch: null, queued: false,
    read() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return local.mem || {}; } },
    write(tree) { local.mem = tree; try { localStorage.setItem(KEY, JSON.stringify(tree)); } catch (e) {} local.notify(true); },
    notify(broadcast) {
      if (broadcast && local.ch) local.ch.postMessage("change");
      if (local.queued) return;
      local.queued = true;
      setTimeout(() => { local.queued = false; const t = local.read(); local.listeners.forEach(l => l.cb(getAt(t, l.path))); }, 0);
    }
  };
  function parts(p) { return p.split("/").filter(Boolean); }
  function getAt(t, p) { let n = t; for (const k of parts(p)) { if (n == null || typeof n !== "object") return null; n = n[k]; } return n === undefined ? null : JSON.parse(JSON.stringify(n)); }
  function setAt(t, p, v) {
    const ks = parts(p); let n = t;
    for (let i = 0; i < ks.length - 1; i++) { if (typeof n[ks[i]] !== "object" || n[ks[i]] === null) n[ks[i]] = {}; n = n[ks[i]]; }
    if (v === null || v === undefined) delete n[ks[ks.length - 1]]; else n[ks[ks.length - 1]] = v;
  }

  const DB = {
    mode: "demo", offset: 0, fb: null,
    async init() {
      const cfg = window.FIREBASE_CONFIG;
      if (cfg && cfg.databaseURL) {
        try {
          await loadScript(`https://www.gstatic.com/firebasejs/${FB_VERSION}/firebase-app-compat.js`);
          await loadScript(`https://www.gstatic.com/firebasejs/${FB_VERSION}/firebase-database-compat.js`);
          if (!firebase.apps.length) firebase.initializeApp(cfg);
          DB.fb = firebase.database();
          DB.fb.ref(".info/serverTimeOffset").on("value", s => { DB.offset = s.val() || 0; });
          DB.mode = "live";
          return;
        } catch (e) { console.warn("Firebase unavailable, using demo mode", e); }
      }
      if ("BroadcastChannel" in window) {
        local.ch = new BroadcastChannel(KEY);
        local.ch.onmessage = () => local.notify(false);
      }
      window.addEventListener("storage", e => { if (e.key === KEY) local.notify(false); });
    },
    now() { return Date.now() + DB.offset; },
    set(path, val) {
      if (DB.fb) return DB.fb.ref(path).set(val);
      const t = local.read(); setAt(t, path, val); local.write(t); return Promise.resolve();
    },
    update(path, obj) {
      if (DB.fb) return DB.fb.ref(path).update(obj);
      const t = local.read(); for (const k in obj) setAt(t, path + "/" + k, obj[k]); local.write(t); return Promise.resolve();
    },
    get(path) {
      if (DB.fb) return DB.fb.ref(path).once("value").then(s => s.val());
      return Promise.resolve(getAt(local.read(), path));
    },
    on(path, cb) {
      if (DB.fb) { const r = DB.fb.ref(path); const h = r.on("value", s => cb(s.val())); return () => r.off("value", h); }
      const l = { path, cb }; local.listeners.add(l); cb(getAt(local.read(), path));
      return () => local.listeners.delete(l);
    },
    // Write val only if nothing is there yet. Resolves true if this call won.
    claim(path, val) {
      if (DB.fb) return DB.fb.ref(path).transaction(cur => (cur === null ? val : undefined)).then(r => r.committed);
      const t = local.read(); if (getAt(t, path) !== null) return Promise.resolve(false);
      setAt(t, path, val); local.write(t); return Promise.resolve(true);
    }
  };

  // ---------- Shared helpers ----------
  const H = {
    esc(s) { return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); },
    norm(s) { return String(s || "").toUpperCase().replace(/[^A-Z]/g, ""); },
    letters(word) { return [...new Set(word.replace(/[^A-Z]/g, ""))]; },
    mask(word, found) { return [...word].map(c => (c === " " ? " " : found.includes(c) ? c : "_")).join(""); },
    code() { const a = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; let s = ""; for (let i = 0; i < 4; i++) s += a[Math.floor(Math.random() * a.length)]; return s; },
    ss(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; } },
    OPT: [
      { c: "var(--a)", ink: "#F3F6FC", s: "▲" },
      { c: "var(--b)", ink: "#2A1E00", s: "◆" },
      { c: "var(--c)", ink: "#06321F", s: "●" },
      { c: "var(--d)", ink: "#3D0E06", s: "■" }
    ],
    nova(mood = "happy", size = 80) {
      const m = { happy: "M43 56 Q50 63 57 56", party: "M42 55 Q50 68 58 55 Z", worried: "M43 61 Q50 55 57 61", calm: "M44 58 L56 58" }[mood];
      return `<svg class="nova" width="${size}" height="${size}" viewBox="0 0 100 100" aria-label="Nova, the EduMoon star"><path d="M50 4 L62.9 32.2 L93.7 35.8 L70.9 56.8 L77 87.2 L50 72 L23 87.2 L29.1 56.8 L6.3 35.8 L37.1 32.2Z" fill="#FFC83D" stroke="#FFC83D" stroke-width="8" stroke-linejoin="round"/><circle cx="36" cy="55" r="4" fill="#FF9F7A" opacity=".7"/><circle cx="64" cy="55" r="4" fill="#FF9F7A" opacity=".7"/><circle cx="42" cy="47" r="3.6" fill="#070B3A"/><circle cx="58" cy="47" r="3.6" fill="#070B3A"/><path d="${m}" fill="${mood === "party" ? "#070B3A" : "none"}" stroke="#070B3A" stroke-width="3.2" stroke-linecap="round"/></svg>`;
    },
    // Points for a correct timed answer: 500 base + up to 500 for speed.
    speedPoints(t, endsAt, dur) {
      const left = Math.max(0, Math.min(1, (endsAt - t) / (dur * 1000)));
      return 500 + Math.round(500 * left);
    },
    LETTER_PTS: 50, SOLVE_PTS: 300, MAX_WRONG: 6
  };

  window.DB = DB; window.H = H;
})();
