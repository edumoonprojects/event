# Host codes: Firebase setup

Only people with a host code can create a game room. Students never need a code to join.
The check runs inside Firebase, so nobody can skip it by editing the website.

## One-time setup (5 minutes)
1. Open https://console.firebase.google.com and pick the **edumoon-event** project.
2. Go to **Build → Realtime Database → Rules**.
3. Replace everything with the contents of `engine/database.rules.json` and click **Publish**.
4. Go to the **Data** tab. Hover over the top line (the database name), click **+**, and add:
   - Key: `hostcodes` (leave the value empty and click **+** next to it to add children)
   - One child per host: key = the code (capital letters and numbers only), value = the person's name.
   Example: key `SRIVALI6330`, value `Srivali`.
   Do NOT use "Import JSON" on the top line: it would replace the whole database.
5. Done. Open any game's host page, type a code, and create a room.

## Managing codes
- **Add a host:** add a new child under `hostcodes`.
- **Remove a host:** delete their child under `hostcodes`. Their code stops working right away.
- **See who hosted what:** open `hostlog` in the Data tab. Each code lists the rooms it created, with the game and time.

## Notes
- Hosts type their code once per device; the page remembers it.
- Rooms created before the new rules can't be updated. Just create a new room.
- Never put the list of codes in the GitHub repo. The repo is public.
