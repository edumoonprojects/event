"""Play a door game end to end in demo mode: host + one player answering correctly.
Usage: python3 playtest.py <game-folder> [shots-dir]"""
import sys, json, subprocess, os, time
from playwright.sync_api import sync_playwright

import os as _os
ROOT = _os.environ.get("EVENT_ROOT") or _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__)))
game = sys.argv[1]
shots = sys.argv[2] if len(sys.argv) > 2 else None
if shots: os.makedirs(shots, exist_ok=True)
srv = subprocess.Popen(["python3", "-m", "http.server", "8765", "--directory", ROOT], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
steps = json.loads(subprocess.check_output(["node", "-e", f"global.window={{}};try{{require('{ROOT}/{game}/art.js')}}catch(e){{}};require('{ROOT}/{game}/content.js');console.log(JSON.stringify(window.GAME.steps))"]))
errors = []
try:
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        ctx = b.new_context(viewport={"width": 1280, "height": 800})
        ctx.route("**/firebase-config.js", lambda r: r.fulfill(body="window.FIREBASE_CONFIG=null;", content_type="application/javascript"))
        ctx.route("**/fonts.googleapis.com/**", lambda r: r.fulfill(body="", content_type="text/css"))
        host = ctx.new_page(); host.on("pageerror", lambda e: errors.append("host: " + str(e)))
        host.goto(f"http://localhost:8765/{game}/host.html"); host.wait_for_timeout(800)
        host.click('[data-mode="teams"]'); host.click("#create"); host.wait_for_timeout(800)
        code = host.locator("#codepill").inner_text().strip()[-4:]
        pl = ctx.new_page(); pl.set_viewport_size({"width": 390, "height": 800}); pl.on("pageerror", lambda e: errors.append("player: " + str(e)))
        pl.goto(f"http://localhost:8765/{game}/"); pl.wait_for_timeout(600)
        pl.fill("#room", code); pl.fill("#nm", "Test Team"); pl.click("button[type=submit]"); pl.wait_for_timeout(600)
        n = 0; last = None
        for _ in range(200):
            pos = host.locator("#pos").inner_text() if host.locator("#pos").count() else ""
            idx = None
            try: idx = int(pos.split("/")[0].strip()) - 1
            except Exception: pass
            st = steps[idx] if idx is not None and 0 <= idx < len(steps) else None
            if shots and pos != last:
                host.screenshot(path=f"{shots}/h{n:02d}.png"); pl.screenshot(path=f"{shots}/p{n:02d}.png", full_page=True); n += 1; last = pos
            if st and st["type"] == "door" and pl.locator("#lock").count():
                if st["kind"] == "bug":
                    pl.click(f'[data-pick="{st["outputAnswer"]}"]'); pl.wait_for_timeout(150)
                    pl.locator(f'[data-line="{st["bugLine"]}"]').first.click()
                elif st["kind"] == "number":
                    pl.fill("#num", str(st["answer"]))
                else:
                    pl.click(f'[data-pick="{st["answer"]}"]')
                pl.wait_for_timeout(150); pl.click("#lock"); pl.wait_for_timeout(300)
            if st and st["type"] == "end": break
            if not host.locator("#next").is_visible(): host.wait_for_timeout(300); continue
            host.click("#next"); host.wait_for_timeout(350)
        host.wait_for_timeout(600)
        print("final pos:", host.locator("#pos").inner_text() if host.locator("#pos").count() else "?")
        print("host text tail:", host.locator("#main").inner_text()[:300].replace("\n", " | "))
        print("player text:", pl.locator("#main").inner_text()[:300].replace("\n", " | "))
        b.close()
finally:
    srv.terminate()
print("errors:", errors or "none")
