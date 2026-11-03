"""Build the Screen Deck (deck.html in the game folder + offline PDF) and the Host Guide PDF for a door game.
Usage: python3 gen.py <game-folder>"""
import sys, json, re, subprocess, os, html, io, time
import qrcode, qrcode.image.svg

import os as _os
ROOT = _os.environ.get("EVENT_ROOT") or _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__)))
OUT = _os.environ.get("EVENT_OUT") or _os.path.join(_os.getcwd(), "out")
SITE = "edumoonprojects.github.io/event"
os.makedirs(OUT, exist_ok=True)
gid = sys.argv[1]
G = json.loads(subprocess.check_output(["node", "-e", f"global.window={{}};try{{require('{ROOT}/{gid}/art.js')}}catch(e){{}};require('{ROOT}/{gid}/content.js');console.log(JSON.stringify(window.GAME))"]))
Z = json.loads(subprocess.check_output(["node", "-e", f"global.window={{}};require('{ROOT}/engine/games.js');console.log(JSON.stringify(window.ZONE))"]))
zg = next((g for g in Z["games"] if g.get("host", "").startswith(gid + "/")), {})
guide = G.get("guide", {})
W = G.get("words", {})
ROUND = W.get("round", "Round" if W else "Door")
e = lambda s: html.escape(str(s if s is not None else ""), quote=True)
L = "ABCDEFGH"

theme = open(f"{ROOT}/{gid}/theme.css").read() if os.path.exists(f"{ROOT}/{gid}/theme.css") else ""
var = lambda n, d: (re.search(rf"--{n}:\s*([^;]+);", theme) or [None, d])[1].strip()
C = dict(bg=var("bg", "#0A0E27"), panel=var("panel", "#151B3D"), line=var("line", "#2A3366"), ink=var("ink", "#F2F4FB"),
         soft=var("soft", "#AEB6DA"), amber=var("amber", "#FFC857"), green=var("green", "#3DDC97"), coral=var("coral", "#FF6B6B"))

def qr_svg(url):
    img = qrcode.make(url, image_factory=qrcode.image.svg.SvgPathImage, box_size=10, border=2)
    s = img.to_string(encoding="unicode")
    return re.sub(r"<\?xml[^>]*\?>", "", s).replace("<svg ", '<svg class="qrsvg" ', 1)

doors = [s for s in G["steps"] if s["type"] == "door"]
def door_points(s):
    base = 200 if s["kind"] == "bug" else 100
    return base * (2 if s.get("double") else 1)
MAX = sum(door_points(s) for s in doors)

def answer_text(s):
    if s["kind"] == "bug":
        return f"Line {s['bugLine'] + 1} · {L[s['outputAnswer']]}"
    if s["kind"] == "number":
        return str(s["answer"])
    return L[s["answer"]]

def answer_full(s):
    if s["kind"] == "bug":
        return f"Line {s['bugLine'] + 1} (“{s['code'][s['bugLine']]}”) and reason {L[s['outputAnswer']]}: {s['outputOptions'][s['outputAnswer']]}"
    if s["kind"] == "number":
        return str(s["answer"])
    return f"{L[s['answer']]}: {s['options'][s['answer']]}"

def lines_html(code, bad=None, numbered=True):
    rows = "".join(f'<div class="ln{" bad" if bad == i else ""}">{f"<b>{i + 1}</b>" if numbered else ""}<span>{e(t)}</span></div>' for i, t in enumerate(code))
    return f'<div class="lines{" mono" if guide.get("mono") else ""}">{rows}</div>'

# ---------------------------------------------------------------- Screen Deck
slides = []
def slide(inner, cls=""):
    slides.append(f'<section class="slide {cls}"><div class="hdr"><img src="../engine/icon.png" alt=""><span>EduMoon · {e(G["club"])}</span><span class="gt">{e(G["title"])}</span></div><div class="body">{inner}</div></section>')

story = next((s for s in G["steps"] if s["type"] == "story"), None)
art = G.get("art") or ""
slide(f'''<div class="art">{art}</div><p class="eyebrow">{e(story["alert"] if story else G["club"])}</p>
<h1 class="h1">{e(story["title"] if story else G["title"])}</h1>
<div class="cards3">{"".join(f'<div class="cardx">{e(t)}</div>' for _, t in (story["cards"] if story else []))}</div>''', "title")

double_rounds = sorted({s.get("eyebrow", "") for s in doors if s.get("double")})
slide(f'''<p class="eyebrow">How to play without phones</p><h1 class="h1">Teams, paper and a pen. That’s all.</h1>
<div class="grid2">
<div class="cardx"><h3>Make teams of 3 or 4</h3><p>Each team picks a name and writes it at the top of a sheet of paper.</p></div>
<div class="cardx"><h3>Write your answer</h3><p>Write the letter (A, B, C or D).{" For “tap the line” questions, write the line number and the letter." if any(s["kind"] == "bug" for s in doors) else ""}</p></div>
<div class="cardx"><h3>Points</h3><p>100 for each correct answer.{" Line questions: 100 for the line + 100 for the reason." if any(s["kind"] == "bug" for s in doors) else ""}{" The last round counts double." if double_rounds else ""}</p></div>
<div class="cardx hl"><h3>Speak up</h3><p>Speaking moments earn bonus points. The host decides who gets them.</p></div>
</div>''')

rnd_q = {}
dcount = 0
for s in G["steps"]:
    t = s["type"]
    if t == "learn":
        pts = "".join(f'<div class="cardx{" hl" if (i == len(s["points"]) - 1 and s.get("highlightLast")) else ""}"><h3>{e(h)}</h3><p>{e(x)}</p></div>' for i, (h, x) in enumerate(s["points"]))
        side = ""
        if s.get("side"):
            side = f'<div class="side"><p class="eyebrow">{e(s["side"]["label"])}</p>' + "".join(f'<div class="srow"><b>{e(a)}</b><span>{e(b)}</span></div>' for _, a, b in s["side"]["items"]) + "</div>"
        elif s.get("code"):
            side = f'<div class="side"><p class="eyebrow">Example</p>{lines_html(s["code"], numbered=False)}<p class="eyebrow g">Shows</p><p class="out">{e(s.get("output", ""))}</p></div>'
        slide(f'<p class="eyebrow">Before {e(ROUND)} {s["door"]} · Learn</p><h1 class="h2">{e(s["title"])}</h1><div class="split"><div class="col">{pts}</div>{side}</div>')
    elif t == "door":
        dcount += 1
        eb = s.get("eyebrow") or f'{ROUND} {dcount} · {s.get("name", "")}'
        key = eb.split("·")[0].strip()
        rnd_q[key] = rnd_q.get(key, 0) + 1
        qn = rnd_q[key]
        tag = f'<p class="eyebrow">{e(eb)} · Question {qn}{" · Double points" if s.get("double") else ""}</p>'
        timer = f'<div class="timer">{s.get("time", 45)} seconds</div>'
        if s["kind"] == "bug":
            reveal_opts = "".join(f'<div class="opt {"ok" if k == s["outputAnswer"] else "dim"}"><b>{L[k]}</b><span>{e(o)}</span></div>' for k, o in enumerate(s["outputOptions"]))
            q = f'{tag}<h1 class="h3">{e(s["prompt"])}</h1><div class="split2">{lines_html(s["code"])}<div class="col"><p class="eyebrow">{e(s.get("step1", "Why is it a problem?"))}</p>{"".join(f"<div class=opt><b>{L[k]}</b><span>{e(o)}</span></div>" for k, o in enumerate(s["outputOptions"]))}<p class="write">Write: line number + letter</p></div></div>{timer}'
            a = f'{tag}<h1 class="h3">{e(s["prompt"])}</h1><div class="split2">{lines_html(s["code"], bad=s["bugLine"])}<div class="col"><p class="eyebrow g">Answer: {e(answer_text(s))}</p>{reveal_opts}<p class="note">{e(s.get("note", ""))}</p></div></div>'
        elif s["kind"] == "number":
            code = lines_html(s["code"], numbered=False) if s.get("code") else ""
            q = f'{tag}<h1 class="h3">{e(s["prompt"])}</h1>{code}<p class="write">Write your number</p>{timer}'
            a = f'{tag}<h1 class="h3">{e(s["prompt"])}</h1>{code}<div class="bigans">Answer: {e(s["answer"])}</div><p class="note">{e(s.get("note", ""))}</p>'
        else:
            code = lines_html(s["code"], numbered=False) if s.get("code") else ""
            opts = lambda reveal: '<div class="opts">' + "".join(f'<div class="opt{(" ok" if k == s["answer"] else " dim") if reveal else ""}"><b>{L[k]}</b><span>{e(o)}</span></div>' for k, o in enumerate(s["options"])) + "</div>"
            q = f'{tag}<h1 class="h3">{e(s["prompt"])}</h1>{code}{opts(False)}{timer}'
            a = f'{tag}<h1 class="h3">{e(s["prompt"])}</h1>{code}{opts(True)}<p class="note">{e(s.get("note", ""))}</p>'
        if s.get("letter"):
            a += f'<p class="write">Letter won: {e(s["letter"])}</p>'
        slide(q, "q")
        slide(a, "a")
        if s.get("board"):
            slide(f'<p class="eyebrow">Scorekeeper</p><h1 class="h1">Scores {e(s.get("boardLabel", ""))}</h1><p class="lead">Add up each team’s points and read out the top 3.</p><div class="score">{"".join("<div><span></span><span></span></div>" for _ in range(6))}</div>')
    elif t == "speak":
        slide(f'<p class="eyebrow">{e(s.get("eyebrow", "Speaking time"))}</p><h1 class="h1">{e(s["prompt"])}</h1><p class="lead">{e(s.get("note", ""))}</p><div class="pts">+{s.get("points", 100)} points</div>', "speak")
    elif t == "compare":
        col = lambda k, cls, lab: f'<div class="cmp {cls}"><p class="eyebrow">{lab}</p>' + "".join(f"<p>{e(x)}</p>" for x in s[k]) + "</div>"
        slide(f'<p class="eyebrow">{e(s.get("eyebrow", ""))}</p><h1 class="h2">{e(s["title"])}</h1><div class="grid2">{col("before", "bef", "Before")}{col("after", "aft", "After")}</div><p class="note">{e(s.get("note", ""))}</p>')
    elif t == "key" and G.get("key"):
        letters = "".join(f'<span class="kl">{e(c)}</span>' for c in G["key"])
        slide(f'<p class="eyebrow">The master key</p><div class="keyrow">{letters}</div><h1 class="h2">{e(G.get("keyTitle", ""))}</h1><p class="lead">{e(G.get("keyLine", ""))}</p>')
    elif t == "offer" and G.get("offers"):
        rows = "".join(f'<div class="srow"><b>{round(o["min"] * MAX)}+ points</b><span><strong>{e(o["title"])}</strong> · {e(o["text"])}</span></div>' for o in G["offers"])
        slide(f'<p class="eyebrow">{e(G.get("offerEyebrow", "Results"))}</p><h1 class="h1">{e(G.get("offerTitle", "Your results"))}</h1><p class="lead">Out of {MAX} points (not counting speaking bonuses). Find your team’s total.</p><div class="side wide">{rows}</div>')
    elif t == "wordlist":
        items = "".join(f'<div class="cardx sm"><h3>{e(a)}</h3><p>{e(b)}</p></div>' for a, b in s["items"])
        slide(f'<p class="eyebrow">{e(s.get("eyebrow", ""))}</p><h1 class="h2">{e(s["title"])}</h1><p class="lead">{e(s.get("note", ""))}</p><div class="wl">{items}</div>')
    elif t == "end":
        slide(f'<p class="eyebrow">Final results</p><h1 class="h1">And the winners are…</h1><div class="podium"><div><span>2nd</span></div><div class="first"><span>1st</span></div><div><span>3rd</span></div></div><p class="lead">{e(W.get("endLine", ""))}</p>')
        slide(f'<div class="join"><div><p class="eyebrow">Keep going</p><h1 class="h1">{e(s.get("joinTitle", ""))}</h1><p class="lead">{e(s.get("joinText", ""))}</p><p class="lead"><b>Scan to join the EduMoon community on WhatsApp</b></p></div><div class="qrbox">{qr_svg(s["joinUrl"])}</div></div>')

css = f"""
:root{{--bg:{C['bg']};--panel:{C['panel']};--line:{C['line']};--ink:{C['ink']};--soft:{C['soft']};--amber:{C['amber']};--green:{C['green']};--coral:{C['coral']};
--disp:'Space Grotesk','Inter Display','Inter',Verdana,sans-serif;--txt:'Nunito Sans','Inter',Verdana,sans-serif}}
*{{box-sizing:border-box;margin:0}}
html,body{{background:#05060d;color:var(--ink);font-family:var(--txt)}}
.slide{{width:1600px;height:900px;background:radial-gradient(circle at 85% 0%,color-mix(in srgb,var(--panel) 80%,#ffffff 6%) 0%,var(--bg) 60%);position:relative;overflow:hidden;padding:44px 72px 56px;display:flex;flex-direction:column}}
.hdr{{display:flex;align-items:center;gap:14px;font-size:20px;color:var(--soft);font-weight:700;letter-spacing:.04em;text-transform:uppercase}}
.hdr img{{width:40px;height:40px;border-radius:10px}} .hdr .gt{{margin-left:auto;color:var(--amber)}}
.body{{flex:1;display:flex;flex-direction:column;justify-content:center;gap:24px;min-height:0}}
.eyebrow{{font-size:22px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--amber)}} .eyebrow.g{{color:var(--green)}}
.h1{{font-family:var(--disp);font-size:66px;line-height:1.08;font-weight:700}} .h2{{font-family:var(--disp);font-size:54px;line-height:1.1;font-weight:700}} .h3{{font-family:var(--disp);font-size:44px;line-height:1.15;font-weight:700}}
.lead{{font-size:30px;color:var(--soft);line-height:1.35}}
.art svg{{width:100%;height:auto;max-height:280px;border-radius:22px;display:block}}
.title .body{{gap:18px}} .title .h1{{font-size:56px}}
.cards3{{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}}
.cardx{{background:var(--panel);border:2px solid var(--line);border-radius:20px;padding:22px 26px;font-size:26px;line-height:1.35}}
.cardx h3{{font-size:28px;margin-bottom:6px;font-family:var(--disp)}} .cardx p{{color:var(--soft)}}
.cardx.hl{{background:linear-gradient(135deg,var(--amber),color-mix(in srgb,var(--amber) 55%,#fff));color:#241600;border:0}} .cardx.hl p{{color:#3d2a00}}
.cardx.sm{{font-size:21px;padding:16px 20px}} .cardx.sm h3{{font-size:23px;color:var(--amber)}}
.grid2{{display:grid;grid-template-columns:1fr 1fr;gap:20px}}
.split{{display:grid;grid-template-columns:1.25fr 1fr;gap:26px;align-items:start}} .split2{{display:grid;grid-template-columns:1.2fr 1fr;gap:26px;align-items:start}}
.col{{display:flex;flex-direction:column;gap:14px}}
.side{{background:var(--panel);border:2px solid var(--line);border-radius:20px;padding:24px 28px;display:flex;flex-direction:column;gap:14px}}
.srow{{display:flex;flex-direction:column;border-left:5px solid var(--amber);padding-left:16px}} .srow b{{font-size:26px}} .srow span{{font-size:22px;color:var(--soft)}}
.side.wide .srow{{flex-direction:row;gap:24px;align-items:baseline}} .side.wide .srow b{{min-width:200px;color:var(--amber)}} .side.wide .srow span{{font-size:25px}} .side.wide strong{{color:var(--ink)}}
.lines{{background:#F5F1EA;color:#1f1a28;border-radius:16px;padding:10px 0;font-size:26px;line-height:1.4}}
.ln{{display:flex;gap:16px;padding:8px 22px;border-left:6px solid transparent}} .ln b{{color:#8a7f70;min-width:26px}}
.ln.bad{{background:#FFD9D3;border-left-color:#E5484D}}
.lines.mono{{background:#030A07;color:#E8F5EE;font-family:'JetBrains Mono','DejaVu Sans Mono',monospace;font-size:25px;white-space:pre}} .lines.mono .ln b{{color:#5f7f6f}} .lines.mono .ln.bad{{background:#4a1515;border-left-color:#FF6B6B}}
.opts{{display:grid;grid-template-columns:1fr 1fr;gap:16px}}
.opt{{display:flex;gap:18px;align-items:flex-start;background:var(--panel);border:2px solid var(--line);border-radius:18px;padding:18px 22px;font-size:27px;line-height:1.3}}
.opt b{{flex:0 0 46px;height:46px;border-radius:12px;background:var(--amber);color:#241600;display:grid;place-items:center;font-family:var(--disp);font-size:26px}}
.opt.ok{{border-color:var(--green);background:color-mix(in srgb,var(--green) 22%,var(--panel))}} .opt.ok b{{background:var(--green)}}
.opt.dim{{opacity:.38}}
.timer{{position:absolute;right:72px;bottom:40px;font-size:24px;font-weight:800;color:var(--soft);border:2px solid var(--line);border-radius:999px;padding:8px 20px}}
.write{{font-size:24px;font-weight:800;color:var(--amber)}}
.note{{font-size:28px;line-height:1.35;color:var(--ink);background:color-mix(in srgb,var(--green) 14%,transparent);border-left:6px solid var(--green);padding:14px 20px;border-radius:10px}}
.bigans{{font-family:var(--disp);font-size:64px;color:var(--green)}}
.out{{font-size:28px;font-weight:800;color:var(--green)}}
.pts{{align-self:flex-start;font-family:var(--disp);font-size:40px;background:var(--amber);color:#241600;border-radius:999px;padding:10px 32px}}
.cmp{{border-radius:20px;padding:22px 26px;display:flex;flex-direction:column;gap:10px;font-size:23px;line-height:1.3}}
.cmp p{{border-bottom:1px solid var(--line);padding-bottom:8px}} .cmp p.eyebrow{{border:0}}
.bef{{background:color-mix(in srgb,var(--coral) 14%,var(--panel));border:2px solid color-mix(in srgb,var(--coral) 50%,transparent)}} .bef .eyebrow{{color:var(--coral)}}
.aft{{background:color-mix(in srgb,var(--green) 14%,var(--panel));border:2px solid color-mix(in srgb,var(--green) 50%,transparent)}} .aft .eyebrow{{color:var(--green)}}
.score{{display:grid;grid-template-columns:1fr 1fr;gap:14px}} .score div{{display:grid;grid-template-columns:3fr 1fr;gap:10px}} .score span{{height:62px;border:2px dashed var(--line);border-radius:12px}}
.wl{{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}}
.podium{{display:flex;gap:24px;align-items:flex-end;justify-content:center;height:330px}}
.podium div{{width:240px;height:200px;background:var(--panel);border:2px solid var(--line);border-radius:20px 20px 0 0;display:flex;align-items:flex-start;justify-content:center;padding-top:18px}}
.podium .first{{height:300px;background:linear-gradient(180deg,var(--amber),color-mix(in srgb,var(--amber) 50%,var(--panel)));color:#241600}}
.podium span{{font-family:var(--disp);font-size:44px}}
.keyrow{{display:flex;gap:18px}} .kl{{width:120px;height:140px;border-radius:20px;background:var(--amber);color:#241600;display:grid;place-items:center;font-family:var(--disp);font-size:80px;font-weight:700}}
.join{{display:grid;grid-template-columns:1.4fr 1fr;gap:40px;align-items:center}}
.qrbox{{background:#fff;border-radius:24px;padding:20px;width:400px;justify-self:end}} .qrsvg{{width:100%;height:auto;display:block}}
/* Present mode */
body.present{{overflow:hidden;height:100vh;display:grid;place-items:center}}
body.present .slide{{display:none;position:absolute;left:50%;top:50%;transform-origin:center}} body.present .slide.on{{display:flex}}
.navhint{{position:fixed;bottom:10px;left:50%;transform:translateX(-50%);font:14px var(--txt);color:#9aa;background:#0008;padding:6px 14px;border-radius:999px}}
@media print{{@page{{size:1600px 900px;margin:0}} html,body{{background:none}} .slide{{page-break-after:always;break-after:page}} .navhint{{display:none}}}}
"""

deck = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(G['title'])} · Screen Deck</title>
<link rel="icon" href="../engine/icon.png">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Nunito+Sans:wght@400;700;800&display=swap">
<style>{css}</style>
</head>
<body>
<!-- Screen Deck for {e(G['title'])}: play without phones. Use the arrow keys or click to move. Press F for full screen. -->
{''.join(slides)}
<div class="navhint" id="hint">← → to move · F for full screen · <span id="pos"></span></div>
<script>
(function(){{
  if (matchMedia("print").matches || location.hash === "#all") {{ document.getElementById("hint").remove(); return; }}
  var S = [].slice.call(document.querySelectorAll(".slide")), i = 0;
  document.body.classList.add("present");
  try {{ i = Math.min(S.length - 1, Math.max(0, parseInt(sessionStorage.getItem("deck-{gid}") || "0", 10) || 0)); }} catch (x) {{}}
  function fit() {{ var k = Math.min(innerWidth / 1600, innerHeight / 900); S.forEach(function (s) {{ s.style.transform = "translate(-50%,-50%) scale(" + k + ")"; }}); }}
  function show() {{ S.forEach(function (s, j) {{ s.classList.toggle("on", j === i); }}); document.getElementById("pos").textContent = (i + 1) + " / " + S.length; try {{ sessionStorage.setItem("deck-{gid}", i); }} catch (x) {{}} }}
  function go(d) {{ i = Math.min(S.length - 1, Math.max(0, i + d)); show(); }}
  addEventListener("keydown", function (ev) {{
    if (["ArrowRight", "PageDown", " ", "Enter"].indexOf(ev.key) > -1) {{ ev.preventDefault(); go(1); }}
    else if (["ArrowLeft", "PageUp", "Backspace"].indexOf(ev.key) > -1) {{ ev.preventDefault(); go(-1); }}
    else if (ev.key === "f" || ev.key === "F") {{ if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); }}
  }});
  addEventListener("click", function (ev) {{ go(ev.clientX < innerWidth / 3 ? -1 : 1); }});
  addEventListener("resize", fit); addEventListener("beforeprint", function () {{ document.body.classList.remove("present"); S.forEach(function (s) {{ s.style.transform = ""; }}); }});
  addEventListener("afterprint", function () {{ document.body.classList.add("present"); fit(); }});
  fit(); show();
}})();
</script>
</body>
</html>
"""
open(f"{ROOT}/{gid}/deck.html", "w").write(deck)

# ---------------------------------------------------------------- Host Guide
meta = [G["club"], guide.get("years") or zg.get("years", ""), guide.get("level") or (zg.get("level", "").capitalize()), guide.get("time") or zg.get("time", ""), zg.get("group", "6–30 · teams or solo")]
script = []
qn_in = {}
gcount = 0
for s in G["steps"]:
    t = s["type"]
    if t == "learn":
        script.append(f'<h3 class="rh">{e(ROUND)} {s["door"]}</h3><div class="say"><p class="lab">Teach first (about 1 minute). Say:</p><p><b>{e(s["title"])}</b></p><ul>' + "".join(f"<li><b>{e(h)}:</b> {e(x)}</li>" for h, x in s["points"]) + "</ul></div>")
    elif t == "door":
        gcount += 1
        eb = s.get("eyebrow") or f'{ROUND} {gcount} · {s.get("name", "")}'
        key = eb.split("·")[0].strip(); qn_in[key] = qn_in.get(key, 0) + 1
        if s["kind"] == "bug":
            body = lines_html(s["code"]) + "<ol class='abc'>" + "".join(f"<li>{e(o)}</li>" for o in s["outputOptions"]) + "</ol>"
        elif s["kind"] == "number":
            body = lines_html(s["code"], numbered=False) if s.get("code") else ""
        else:
            body = (lines_html(s["code"], numbered=False) if s.get("code") else "") + "<ol class='abc'>" + "".join(f"<li>{e(o)}</li>" for o in s["options"]) + "</ol>"
        script.append(f'''<div class="q"><p class="qh">Question {qn_in[key]}{" · double points" if s.get("double") else ""} · {s.get("time", 45)} seconds</p><p class="qp">{e(s["prompt"])}</p>{body}
<p class="ans"><b>Answer:</b> {e(answer_full(s))}</p>
<p class="hint"><b>If teams are stuck, hint:</b> {e(s.get("hint", ""))}</p>
<p class="exp"><b>After revealing, say:</b> {e(s.get("note", ""))}</p>{f'<p class="ans"><b>Letter won:</b> {e(s["letter"])}</p>' if s.get("letter") else ""}</div>''')
        if s.get("board"):
            script.append(f'<p class="board">Show the scoreboard ({e(s.get("boardLabel", ""))}). Read out the top 3.</p>')
    elif t == "speak":
        script.append(f'<div class="say spk"><p class="lab">{e(s.get("eyebrow", "Speaking"))} · +{s.get("points", 100)} points</p><p><b>“{e(s["prompt"])}”</b></p><p>{e(s.get("note", ""))} Ask for 2 or 3 volunteers. With phones, tap the team’s name to give the points; on paper, tell the scorekeeper.</p></div>')
    elif t == "compare":
        script.append(f'<h3 class="rh">After the last round: {e(s["title"])}</h3><div class="say"><p>Read 2 or 3 pairs aloud. Then say: <b>“{e(s.get("note", ""))}”</b></p></div>')
    elif t == "key" and G.get("key"):
        script.append(f'<h3 class="rh">The master key</h3><div class="say"><p>Reveal the key: <b>{e(G["key"])}</b>. Say: “{e(G.get("keyTitle", ""))}” Teams that cracked every door spell the full word.</p></div>')
    elif t == "offer" and G.get("offers"):
        script.append('<h3 class="rh">Offer letters</h3><div class="say"><p>With phones, each team sees its own offer. On paper, use these totals (out of ' + str(MAX) + '):</p><ul>' + "".join(f'<li><b>{round(o["min"] * MAX)}+ points:</b> {e(o["title"])}</li>' for o in G["offers"]) + "</ul></div>")
    elif t == "wordlist":
        script.append(f'<h3 class="rh">Take-home: {e(s["title"])}</h3><div class="say"><p>Ask everyone to take a photo or screenshot. {e(s.get("note", ""))}</p></div>')
    elif t == "end":
        script.append(f'<h3 class="rh">The end</h3><div class="say"><p>Announce the top 3 and clap for every team. Then show the join screen and say: <b>“{e(s.get("joinText", ""))}”</b> Give everyone 30 seconds to scan the QR code.</p></div>')

keyrows = "".join(f"<tr><td>{e(s.get('eyebrow') or (ROUND + ' ' + str(k + 1) + ' · ' + s.get('name', '')))}{' (x2)' if s.get('double') else ''}</td><td>{e(s['prompt'][:70] + ('…' if len(s['prompt']) > 70 else ''))}</td><td><b>{e(answer_text(s))}</b></td></tr>" for k, s in enumerate(doors))
extra = "".join(f"<p><b>{e(a)}</b> {e(b)}</p>" for a, b in guide.get("extra", []))
host_url = f"{SITE}/{gid}/host.html"; player_url = f"{SITE}/{gid}/"; deck_url = f"{SITE}/{gid}/deck.html"
bugnote = " For “tap the line” questions, teams write the line number and the letter (100 points each)." if any(s["kind"] == "bug" for s in doors) else ""

gcss = f"""
@page{{size:A4;margin:16mm 15mm}}
*{{box-sizing:border-box}} body{{font-family:'Inter',sans-serif;color:#1d1b26;font-size:10.5pt;line-height:1.45;margin:0}}
h1{{font-family:'Inter Display','Inter';font-size:26pt;margin:0 0 4px}} h2{{font-family:'Inter Display','Inter';font-size:15pt;margin:20px 0 8px;padding-bottom:4px;border-bottom:2px solid {C['amber']};break-after:avoid}}
.top{{display:flex;align-items:center;gap:12px;margin-bottom:6px}} .top img{{width:44px;height:44px;border-radius:10px}} .top small{{display:block;color:#6b6478;font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:8.5pt}}
.meta{{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 14px}} .meta span{{background:#f1edf6;border-radius:999px;padding:3px 10px;font-size:9pt;font-weight:600}}
table{{width:100%;border-collapse:collapse;margin:6px 0}} td,th{{border:1px solid #ddd6e6;padding:6px 8px;vertical-align:top;text-align:left;font-size:9.5pt}} th{{background:#f6f3fa}}
.box{{background:#fff8e6;border-left:4px solid {C['amber']};padding:8px 12px;border-radius:6px;margin:8px 0}}
ol,ul{{margin:4px 0;padding-left:20px}} li{{margin:2px 0}}
.rh{{font-family:'Inter Display','Inter';font-size:13pt;margin:16px 0 6px;color:#3a2a55;break-after:avoid}}
.say{{background:#f6f3fa;border-radius:8px;padding:8px 12px;margin:6px 0;break-inside:avoid}} .say p{{margin:2px 0}} .lab{{font-size:8.5pt;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#6b6478}}
.spk{{background:#fff8e6}}
.q{{border:1px solid #e3dcec;border-radius:8px;padding:8px 12px;margin:8px 0;break-inside:avoid}}
.qh{{font-size:8.5pt;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#6b6478;margin:0}} .qp{{font-weight:700;margin:3px 0 4px}}
ol.abc{{list-style:upper-alpha}}
.ans{{color:#0d6b47;margin:4px 0 2px}} .hint,.exp{{margin:2px 0;color:#3d3848}}
.lines{{background:#f5f1ea;border-radius:6px;padding:4px 0;margin:4px 0;font-size:9.5pt}} .lines.mono{{font-family:'DejaVu Sans Mono',monospace;white-space:pre;font-size:8.8pt}} .ln{{display:flex;gap:10px;padding:2px 10px}} .ln b{{color:#8a7f70;min-width:12px}}
.board{{font-weight:700;color:#7a4b00;margin:6px 0}}
.qr{{display:flex;gap:16px;align-items:center}} .qr svg{{width:110px;height:110px}}
"""
guide_html = f"""<!doctype html><html><head><meta charset="utf-8"><title>{e(G['title'])} · Host Guide</title><style>{gcss}</style></head><body>
<div class="top"><img src="{ROOT}/engine/icon.png"><div><small>EduMoon · {e(G['club'])} · Host Guide</small><h1>{e(G['title'])}</h1></div></div>
<div class="meta">{''.join(f'<span>{e(m)}</span>' for m in meta if m)}</div>

<h2>Before you start</h2>
<p>{e(guide.get('about', G.get('tagline', '')))}</p>
<p><b>What students get out of it:</b> {e(guide.get('outcomes', ''))}</p>
<div class="box"><b>Your tone matters.</b> {e(guide.get('tone', 'Keep it light and fun. Praise effort, not just right answers.'))}</div>
{extra}

<h2>Two ways to play</h2>
<table><tr><th></th><th>With phones (the app)</th><th>Without phones (Screen Deck)</th></tr>
<tr><td>You need</td><td>A laptop or phone for you, on a projector or shared screen. One phone per team (or one each in Solo).</td><td>The Screen Deck on a projector or shared screen (online link or the PDF). Paper and a pen for each team. One scorekeeper.</td></tr>
<tr><td>Answers</td><td>Teams lock in on their phones. Scores, speed bonus and leaderboard are automatic.</td><td>Teams write the letter on paper.{bugnote} The scorekeeper adds the points.</td></tr>
<tr><td>Timer</td><td>Built in. Tap +30s if needed.</td><td>Use your phone’s timer. Each question slide shows the time.</td></tr></table>

<h2>Setup</h2>
<p><b>With phones (10 minutes before):</b></p>
<ol><li>Open <b>{host_url}</b> on your laptop and put it on the big screen.</li>
<li>Pick <b>Teams</b> (8 or more people) or <b>Solo</b> (small groups), then tap <b>Create game room</b>.</li>
<li>Students scan the QR code, or open <b>{player_url}</b> and type the 4-letter room code and their team name.</li>
<li>When every team has joined, tap <b>Next</b>. You control every screen from here.</li></ol>
<p><b>Without phones:</b></p>
<ol><li>Open <b>{deck_url}</b> (or the Screen Deck PDF) on the big screen. Press F for full screen and the arrow keys to move.</li>
<li>Make teams of 3 or 4. Each team writes its name on a sheet of paper.</li>
<li>Choose a scorekeeper (a volunteer or a friend) with a sheet of all team names.</li>
<li>Every question has two slides: the question, then the answer. Collect or check answers before you move to the answer slide.</li></ol>

<h2>Scoring</h2>
<table><tr><th>With phones</th><th>On paper</th></tr>
<tr><td>Correct answer: 100. Speed: up to +50 for faster answers. First hint free, each extra hint −30. Explain bonus: +50 (you tap it). Speaking: as shown on the screen.{" Last round: double." if double_rounds else ""}</td>
<td>Correct answer: 100.{" Line questions: 100 for the line + 100 for the reason." if bugnote else ""}{" Last round: double." if double_rounds else ""} Speaking: as shown on the slide. Maximum without speaking: {MAX}.</td></tr></table>

<h2>The script, round by round</h2>
<div class="say"><p class="lab">Opening (1 minute). Say:</p><p>{e(story['title'] if story else G.get('tagline', ''))}</p><p>Then explain the rules from the “How it works” screen.</p></div>
{''.join(script)}

<h2>If something goes wrong</h2>
<ul><li><b>Online on Zoom or Meet:</b> share your screen with the host page. Use Solo mode if students are in different places. For speaking, ask students to unmute.</li>
<li><b>A team can’t join:</b> check the 4-letter room code. A refreshed phone rejoins automatically.</li>
<li><b>Slow internet:</b> switch to the Screen Deck PDF and play on paper. It works fully offline.</li>
<li><b>Tapped Next too early:</b> tap ← to go back.</li>
<li><b>Running out of time:</b> skip the optional speaking moments, not the questions. Always do the ending and the join screen.</li>
<li><b>Nobody wants to speak:</b> go first yourself, then ask the team that’s last on the scoreboard. They want the points most.</li></ul>

<h2>Quick answer key</h2>
<p>Keep this open on your phone. Letters match both the app and the Screen Deck.</p>
<table><tr><th>Round</th><th>Question</th><th>Answer</th></tr>{keyrows}</table>
</body></html>"""
gpath = f"{OUT}/{gid}-guide.html"
open(gpath, "w").write(guide_html)

# ---------------------------------------------------------------- PDFs (Chrome, served over http for relative paths)
srv = subprocess.Popen(["python3", "-m", "http.server", "8766", "--directory", ROOT], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
try:
    from playwright.sync_api import sync_playwright
    name = re.sub(r"[^A-Za-z0-9]+", "_", G["title"]).strip("_")
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        ctx = b.new_context()
        ctx.route("**/fonts.googleapis.com/**", lambda r: r.fulfill(body="", content_type="text/css"))
        pg = ctx.new_page(); pg.goto(f"http://localhost:8766/{gid}/deck.html#all"); pg.wait_for_timeout(500)
        pg.pdf(path=f"{OUT}/{name}_Screen_Deck.pdf", width="1600px", height="900px", print_background=True, margin={"top": "0", "right": "0", "bottom": "0", "left": "0"})
        pg2 = ctx.new_page(); pg2.goto("file://" + gpath); pg2.wait_for_timeout(300)
        pg2.pdf(path=f"{OUT}/{name}_Host_Guide.pdf", format="A4", print_background=True, prefer_css_page_size=True)
        b.close()
    print("slides:", len(slides), "| max paper points:", MAX, "| PDFs:", f"{name}_Screen_Deck.pdf", f"{name}_Host_Guide.pdf")
finally:
    srv.terminate()
