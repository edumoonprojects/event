# EduMoon Door Games engine

Shared code for every EduMoon door game. Each game lives in its own folder (like `escape-the-lab/`) and has its own link.

| File | What it does |
|---|---|
| `host.js` | The host page: create a room (Teams or Solo), Next, Reveal, +30s, explain bonus |
| `player.js` | The player page each team (or student) opens on their phone |
| `doors.js` | Scoring, leaderboard and the shared screens |
| `doors.css` | The look |
| `db.js`, `firebase-config.js` | The Firebase connection (same project as EduMoon Live) |

## Make a new game
1. Copy the `escape-the-lab` folder and give it a new name, like `placement-round`.
2. Change only `content.js` in the new folder: a new `id`, title and steps.
3. Upload the folder. The game is live at `edumoonprojects.github.io/event/<folder name>/host.html`.
4. Add a card for it on the home page (`index.html` in the main folder).

## Scoring
- Correct answer: 100 (the Trap Door: 100 for the output + 100 for the bug line)
- Speed: up to +50, less the longer a team takes. None after the timer ends
- Explain bonus: +50, tapped by the host
- Hints: the first one in the game is free, each one after that is −30
- Doors marked `double: true` give double points
