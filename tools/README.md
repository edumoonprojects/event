# EduMoon Game Zone: build tools

Tools for adding new door games to this repo. Each game folder gets a live app (host + player pages), a Screen Deck (`deck.html` + an offline PDF) and a Host Guide PDF.

## How Vikas works
- **Plan first, build later.** Write the full round-by-round plan in chat and wait for a clear yes before building.
- **No emojis** anywhere: games, decks, guides.
- Deliver a zip of the new game folders plus `engine/games.js`. Vikas uploads it on github.com (Add file → Upload files) as `vikaskapuganti`. The PDFs are sent separately and are not uploaded.

## The tools
| File | What it does |
|---|---|
| `scaffold.py` | Creates a game folder: `host.html`, `index.html` and `theme.css` from a colour set. Copy `art.js` and write `content.js` yourself. |
| `gen.py <game>` | Builds `<game>/deck.html` (the online Screen Deck) and two PDFs in `./out`: the Screen Deck and the Host Guide. |
| `playtest.py <game> [shots-dir]` | Plays the whole game in demo mode (host + one team answering correctly). Must end with `errors: none`. |

Paths: the tools find the repo automatically (the folder above `tools/`). Set `EVENT_OUT` to choose where PDFs go. They need Python with `playwright` and `qrcode`, Node, and Chrome at `/usr/bin/google-chrome`.

Example:
```
python3 tools/scaffold.py vizag-quiz "Vizag Quiz" "#081419" "#10272F" "#21444F" "#A8CDD6" "#FFD166" "#5FD3C8" "#1F9E95" "#022421" "#0F3D45" paper
python3 tools/playtest.py vizag-quiz
python3 tools/gen.py vizag-quiz
```
The last argument of `scaffold.py` is `paper` (text questions) or `code` (programming questions, dark monospace).

## Writing content.js
Copy the pattern from an existing game, such as `hr-round/content.js` (text), `bug-hunt/content.js` (code) or `python-escape/content.js` (doors with a master key).
- **6 rounds × 3 questions**, a `learn` step before each round, `board: true` on each round’s last question, `double: true` on round 6.
- One optional `speak` step mid-game (+100) and a final `speak` (+200), then `offer` (if `offers` are set), a `wordlist` take-home card and `end`.
- Add a `guide` object (years, time, level, about, outcomes, tone, extra; `mono: true` for code games). `gen.py` uses it for the Host Guide.
- **Learn steps: 3 points maximum**, or they overflow on a projector.
- **Don’t name top-level helpers `D`, `G`, `H` or `S`**: the engine uses those globals. Use names like `PQ`, `TQ`.
- Icons must exist in `engine/icons.js`.
- Door kinds: `choice` (options + answer), `number` (answer), `bug` (code lines, outputOptions, outputAnswer, bugLine). The bug door can be relabelled with step1/step2/say1/say2 (see the `TAP`, `FLAG` or `LINE` helpers in existing games).
- **Spread the answers** across A to D so there’s no pattern, and never mention option letters in notes.
- Brands, banks, numbers and links in scenarios must be made up.

## Finishing a game
1. `playtest.py` ends with `errors: none`.
2. `gen.py` makes both PDFs. Look at a few pages.
3. Add the game to `engine/games.js` (club, icon, title, added date, desc, years, level: beginner/medium/advanced, time, group, needs, host, player).
4. Check there are no emojis in the files or PDFs.
5. Zip the new folders + `engine/games.js` for Vikas.
