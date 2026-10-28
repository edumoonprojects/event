# EduMoon Live

A multiplayer game for EduMoon's weekly Zoom sessions. The host shares `host.html` on Zoom, students join on their phones at `index.html` with a room code, and the leaderboard builds itself.

## Files

| File | What it is |
|---|---|
| `host.html` | Host screen to share on Zoom |
| `index.html` | Player page students open on their phones |
| `questions.js` | This week's rounds. Copy and edit it for each new session |
| `firebase-config.js` | Your Firebase connection (leave as `null` for demo mode) |
| `game.js`, `style.css`, `icon.png` | Shared code, look and logo |

## One-time setup (about 15 minutes)

### 1. Create the Firebase database (free)
1. Go to https://console.firebase.google.com and sign in with the EduMoon Google account.
2. Click **Create a project**, name it `edumoon-live`, and skip Google Analytics.
3. In the left menu: **Build → Realtime Database → Create database**. Pick the location closest to India (Singapore, `asia-southeast1`) and choose **Start in locked mode**.
4. Open the **Rules** tab, replace everything with the rules below, and click **Publish**:

```json
{
  "rules": {
    "rooms": {
      "$room": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

5. Go to **Project settings** (gear icon) → **Your apps** → click the **</>** web icon, name it `edumoon-live`, and register it (no hosting needed).
6. Copy the `firebaseConfig = { ... }` object it shows and paste it into `firebase-config.js`, replacing `null`. Make sure it includes `databaseURL`.

### 2. Put it on GitHub Pages
1. On GitHub, create a new public repository called `live` under the EduMoon account.
2. Upload all the files in this folder (drag and drop on the repository page) and commit.
3. Go to **Settings → Pages**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`, and save.
4. After a minute, the game is live at `https://<your-github-name>.github.io/live/`:
   - Host screen: `.../live/host.html`
   - Students: `.../live/` (the host screen shows this link, the room code and a QR code)

## Running a session
1. Open `host.html` on the laptop, share the screen on Zoom, and paste the join link in the Zoom chat.
2. Wait until everyone's name appears, then press **Start game**. `Enter` or `Space` presses the main button.
3. Rounds end automatically when time runs out or everyone has answered.
4. Faster correct answers score more (500–1000). In word hunts: +50 for each letter found first, +300 for solving the word.

## Making next week's game
Copy `questions.js`, change `title` and the `rounds`, and upload it to replace the old one. The four round types are explained at the top of the file.

## Note on the rules
The rules above let anyone with the link read and write game rooms. That's fine for quiz games with no personal data. Don't store anything private in this database.
