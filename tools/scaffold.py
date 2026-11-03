"""Create a game folder: host.html, index.html and theme.css from a colour set.
Usage: python3 scaffold.py <id> "<Title>" <bg> <panel> <line> <soft> <accent> <btn1> <btn2> <btntext> <glow> [paper|code]"""
import sys, os
import os as _os
ROOT = _os.environ.get("EVENT_ROOT") or _os.path.dirname(_os.path.dirname(_os.path.abspath(__file__)))
gid, title, bg, panel, line, soft, accent, b1, b2, bt, glow, style = sys.argv[1:13]
os.makedirs(f"{ROOT}/{gid}", exist_ok=True)
for f in ("host.html", "index.html"):
    s = open(f"{ROOT}/hr-round/{f}").read().replace("HR Round", title)
    open(f"{ROOT}/{gid}/{f}", "w").write(s)
paper = """/* Text lines, not code: a paper look, normal text that wraps on phones. */
.code{background:#F5F1EA;color:#1F1A28;border-color:#D9D0C2;font-family:var(--body);white-space:pre-wrap;font-size:clamp(16px,1.9vw,26px);line-height:1.45}
.code .ln{padding:6px 18px}
.code [data-line]:hover{background:#EBE4D8}
.code .ln.pick{background:#FFE8A8;border-left-color:#E0A100}
.code .ln.bad{background:#FFD9D3;border-left-color:#E5484D}
.opt,.opts.long .opt{font-family:var(--body);font-weight:800;line-height:1.3;padding:10px 18px}
""" if style == "paper" else ".code{background:#04070F}\n"
css = f"""/* {title}: theme for the EduMoon Game Zone (overrides the engine colours). */
:root{{
  --bg:{bg}; --panel:{panel}; --panel2:{panel}; --line:{line};
  --ink:#F3F5FB; --soft:{soft}; --amber:{accent}; --green:#4FD8A0; --coral:#FF6B6B; --blue:#7CC8F2;
  --display:'Space Grotesk',Verdana,sans-serif;
}}
body{{background:radial-gradient(circle at 85% 0%,{glow} 0%,var(--bg) 55%) fixed}}
html{{background:var(--bg)}}
.card.amber,.keyslide{{background:linear-gradient(135deg,{accent},#FFF1C9)}}
.btn{{background:linear-gradient(135deg,{b1},{b2});color:{bt}}}
{paper}.letter{{background:linear-gradient(135deg,#4FD8A0,#1E9E6E);color:#03241A}}
.letter small,.letter b{{color:#03241A}}
.icon{{color:{accent}}}
.brow:first-child{{border-color:{accent}}}
.word b{{color:{accent};font-family:var(--body);font-size:18px}}
"""
open(f"{ROOT}/{gid}/theme.css", "w").write(css)
print("scaffolded", gid)
