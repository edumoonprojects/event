// Git Rescue (EduMoon Coding Club). For 2nd and 3rd year.
// It's the night before project submission and a teammate overwrote everything. Teams learn Git to save it.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const GR = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 55, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the problem line" questions use the bug door.
const FIX = { kind: "bug", time: 70, step1: "What’s the problem?", step2: "Tap the problem line", say1: "First pick what’s wrong.", say2: "Now tap the problem line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The problem line is" };

// The take-home card: 10 Git commands you'll actually use.
const COMMANDS = [
  ["git clone <link>", "Copy a project from GitHub to your laptop."],
  ["git status", "What changed? What’s staged? Run it often."],
  ["git add <file>", "Choose the changes for your next commit."],
  ["git commit -m \"…\"", "Save a snapshot with a clear message."],
  ["git log --oneline", "See the history of commits."],
  ["git restore <file>", "Throw away uncommitted changes to a file."],
  ["git switch -c <branch>", "Create a new branch and move to it."],
  ["git merge <branch>", "Bring another branch’s work into yours."],
  ["git pull", "Get your teammates’ latest work. Do it before you push."],
  ["git push", "Send your commits to GitHub."]
];

window.GAME = {
  id: "git-rescue",
  title: "Git Rescue",
  club: "Coding Club",
  tagline: "It’s the night before submission and a teammate overwrote the project. Git can save it.",
  art: window.STORY_ART,
  guide: {
    years: "2nd and 3rd year", time: "40 minutes", level: "Medium", mono: true,
    about: "It’s the night before project submission, and a teammate has overwritten the whole project. In 6 rounds, teams learn the Git that saves it: commits, undoing mistakes, branches, merge conflicts, working with GitHub, and finally the full rescue. The game ends with a “10 Git commands you’ll actually use” card.",
    outcomes: "What commits, branches and merges really are, how to undo mistakes safely, how to read and fix a merge conflict, and a daily Git routine for team projects.",
    tone: "Many students are scared of Git because they once lost work or saw a scary error. Make it clear that Git is a safety net, not a trap. If you have a laptop, showing one command live (git log or git status) after a reveal makes it click.",
    extra: [["Commands", "The game uses modern commands like git switch and git restore. Older tutorials use git checkout for the same things; both work."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Rescued",
    rulesEyebrow: "How Git Rescue works", rulesTitle: "Learn the command. Use it. Save the project.",
    learnText: "The host explains one part of Git.", crackTitle: "Rescue",
    crackText: "Pick the right command or fix on your phone and lock it in.",
    rulesExtra: "Line questions: <b>100</b> for the problem + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Git confuses experienced developers too!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "rescued the project!", endLine: "Project saved. Submission on time!"
  },
  offerEyebrow: "EduMoon Coding Club · Git skill check",
  offerTitle: "Your Git level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Git Hero", text: "You could rescue any team project. Teach your teammates." },
    { min: 0.45, icon: "code", title: "Confident Committer", text: "Strong! Practise merge conflicts once on a test project." },
    { min: 0.2, icon: "route", title: "Branch Explorer", text: "Good start. Put your next project on GitHub with real commits." },
    { min: 0, icon: "book-open", title: "Git Beginner", text: "Everyone starts here. Try the first 4 commands on the card tonight." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · 11:40 PM, the night before submission",
      title: "Your teammate just messaged: “Sorry, I think I overwrote the whole project.” Submission is at 9 AM. Can your team use Git to save it?",
      cards: [["alarm-clock", "A real project disaster"], ["code", "6 rounds of Git that actually save you"], ["trophy", "Leave with the 10 commands you’ll use"]]
    },
    { type: "rules" },

    // ---------- Round 1: Commits ----------
    {
      type: "learn", door: 1,
      title: "A commit is a saved snapshot of your whole project.",
      points: [["git add", "Choose which changes go into the snapshot"], ["git commit -m \"message\"", "Save the snapshot, with a note about what changed"], ["Every commit can be brought back", "That’s why Git can rescue you"]],
      highlightLast: true,
      code: ["git add index.html", "git commit -m \"Add registration form\""],
      output: "A snapshot you can always return to"
    },
    GR(1, "Commits", {
      prompt: "What is a Git commit?",
      options: ["A file upload to Google Drive", "A saved snapshot of your project, with a message, that you can return to later", "A promise to finish the project", "A way to delete files"], answer: 1,
      hint: "Think “save point” in a game.",
      note: "Like a save point in a game. Commit often, and you can always go back.", badge: "check"
    }),
    GR(1, "Commits", {
      prompt: "Which commit message is best?",
      options: ["git commit -m \"Add email check to registration form\"", "git commit -m \"final final FINAL\"", "git commit -m \"changes\"", "git commit -m \"asdfgh\""], answer: 0,
      hint: "Which one would help you at midnight, searching the history?",
      note: "Say what the commit does. Future you, at 11:40 PM, will thank you.", badge: "file-text"
    }),
    GR(1, "Commits", {
      prompt: "How often should you commit?",
      options: ["Only when the teacher asks", "Once, at the end of the project", "After each small piece of work that works, like a finished form or a fixed bug", "Every 10 seconds"], answer: 2,
      hint: "Small save points or one big one?",
      note: "Small, working steps. The more save points you have, the less you can lose.", badge: "clock",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Undo ----------
    {
      type: "learn", door: 2,
      title: "Git can undo almost anything, if you choose the right tool.",
      points: [["git restore <file>", "Throw away changes you haven’t committed yet"], ["git log --oneline", "See all past commits, newest first"], ["git revert <commit>", "Undo a commit by adding a new “opposite” commit. Safe for shared projects"]],
      highlightLast: true,
      side: { label: "Careful with", items: [["alarm-clock", "git reset --hard", "Throws work away. Avoid on shared branches"], ["alarm-clock", "Force push", "Can overwrite teammates’ work"], ["check", "When unsure", "Commit or copy first, then experiment"]] }
    },
    GR(2, "Undo", {
      prompt: "You edited app.js, broke everything, and haven’t committed. How do you get back the last committed version?",
      options: ["git push app.js", "Delete the whole folder", "git commit app.js", "git restore app.js"], answer: 3,
      hint: "You want to throw away uncommitted changes to one file.",
      note: "git restore brings the file back to how it was at the last commit. (Older tutorials use git checkout -- app.js.)", badge: "route"
    }),
    GR(2, "Undo", {
      prompt: "Which command shows the list of past commits?",
      options: ["git log --oneline", "git add", "git clone", "git status"], answer: 0,
      hint: "You want the history.",
      note: "git log --oneline shows each commit’s short ID and message. That’s your map back in time.", badge: "list-checks"
    }),
    GR(2, "Undo", {
      prompt: "A bad commit is already pushed, and teammates have pulled it. What’s the safest way to undo it?",
      options: ["Delete the GitHub repository", "git revert <commit>, then push", "Tell everyone to delete their copy", "git reset --hard and force push"], answer: 1,
      hint: "Which one undoes it without rewriting shared history?",
      note: "revert adds a new commit that undoes the bad one. History stays intact, and nobody’s copy breaks.", badge: "shield",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Branches ----------
    {
      type: "learn", door: 3,
      title: "Branches let everyone work without breaking main.",
      points: [["main", "The working, tested version of the project"], ["A branch", "A separate line of work, like login-page or fix-header"], ["When it works", "Merge it into main"]],
      highlightLast: true,
      code: ["git switch -c login-page", "# work, add, commit…", "git switch main", "git merge login-page"],
      output: "The login page joins main only when it’s ready"
    },
    GR(3, "Branches", {
      prompt: "Why use branches in a team project?",
      options: ["GitHub charges less", "They delete old code", "They make the project bigger", "Each person can build their feature separately without breaking the working version in main"], answer: 3,
      hint: "What did the teammate do to the project tonight?",
      note: "If your teammate had worked on a branch, main would still be safe tonight.", badge: "route"
    }),
    GR(3, "Branches", {
      prompt: "Which command creates a new branch called login-page and moves you to it?",
      options: ["git log login-page", "git branch delete login-page", "git switch -c login-page", "git push login-page"], answer: 2,
      hint: "-c means create.",
      note: "git switch -c creates and switches in one go. (Older tutorials: git checkout -b login-page.)", badge: "code"
    }),
    GR(3, "Branches", {
      prompt: "What should be on the main branch?",
      options: ["Only the README", "Everyone’s work in progress", "Half-finished experiments", "Code that works and has been tested"], answer: 3,
      hint: "What should you be able to submit at any moment?",
      note: "Keep main always working. Then a late-night mistake on a branch can never ruin the submission.", badge: "check",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain branches to the room using a real-life example, like drafts of an essay.", note: "If you can explain it simply, you understand it.", points: 100 },

    // ---------- Round 4: Merge conflicts ----------
    {
      type: "learn", door: 4,
      title: "A merge conflict is Git asking: “Which version do you want?”",
      points: [["It happens when", "Two branches changed the same lines differently"], ["Git marks both versions", "Between <<<<<<<, ======= and >>>>>>>"], ["You decide", "Keep one, the other, or combine them. Delete the markers, then add and commit"]],
      highlightLast: true,
      code: ["<<<<<<< HEAD", "title = \"EduMoon Fest\"", "=======", "title = \"EduMoon Fest 2026\"", ">>>>>>> new-title"],
      output: "Top: your branch. Bottom: the branch you’re merging"
    },
    GR(4, "Merge Conflicts", {
      prompt: "In a conflict, what is between <<<<<<< HEAD and =======?",
      code: ["<<<<<<< HEAD", "color = \"blue\"", "=======", "color = \"green\"", ">>>>>>> new-theme"],
      options: ["The version from the branch you’re merging in", "The version on your current branch", "A random old version", "An error message"], answer: 1,
      hint: "HEAD means “where you are now”.",
      note: "Top part = your current branch (HEAD). Bottom part = the incoming branch, here new-theme.", badge: "search"
    }),
    GR(4, "Merge Conflicts", {
      prompt: "How do you resolve a merge conflict?",
      options: ["Run git push again until it works", "Restart your laptop", "Delete the file", "Edit the file to keep the right code, remove all the markers, then git add and git commit"], answer: 3,
      hint: "You make the decision, then tell Git it’s done.",
      note: "Choose the final code, delete the markers, then add and commit. That’s it.", badge: "check"
    }),
    GR(4, "Merge Conflicts", Object.assign({}, FIX, {
      prompt: "Ravi “resolved” a conflict, but the app still won’t run. Which line is the problem?",
      code: ["function greet() {", "  return \"Welcome to EduMoon Fest 2026\";", ">>>>>>> new-title", "}"],
      outputOptions: ["A leftover conflict marker will break the code", "The function name is wrong", "The text is too long"], outputAnswer: 0, bugLine: 2,
      bugText: "a leftover conflict marker. Delete every <<<<<<<, ======= and >>>>>>> line",
      hint: "Which line isn’t real code?",
      note: "A classic mistake. Before committing, search the file for <<<<, ==== and >>>> to be sure.", badge: "x",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: GitHub ----------
    {
      type: "learn", door: 5,
      title: "GitHub is where your team’s commits meet.",
      points: [["git clone", "Copy the project from GitHub to your laptop, once"], ["git pull, then git push", "Get teammates’ work first, then send yours"], ["Pull requests", "Ask to merge your branch into main, so a teammate can review it first"]],
      highlightLast: true,
      side: { label: "Common errors", items: [["alarm-clock", "“Updates were rejected”", "Someone pushed first. Pull, then push"], ["alarm-clock", "“Not a git repository”", "You’re in the wrong folder"], ["alarm-clock", "“Permission denied”", "Not added to the repo, or not signed in"]] }
    },
    GR(5, "GitHub", {
      prompt: "git push fails: “Updates were rejected because the remote contains work that you do not have.” What do you do?",
      options: ["Force push to overwrite it", "git pull, fix any conflicts, then git push", "Delete the repository", "Email the files instead"], answer: 1,
      hint: "Someone pushed before you.",
      note: "Pull first to combine their work with yours, then push. Force pushing here would delete their work, which is how tonight’s disaster happens.", badge: "route"
    }),
    GR(5, "GitHub", {
      prompt: "You joined a project. How do you get it onto your laptop the first time?",
      options: ["Download each file one by one", "git push", "git clone <repository link>", "git commit"], answer: 2,
      hint: "You want a full copy, with its history.",
      note: "git clone copies the whole project and its history, already connected to GitHub.", badge: "link-2"
    }),
    GR(5, "GitHub", {
      prompt: "What is a pull request?",
      options: ["A request to merge your branch into main, so teammates can review it first", "Another name for git pull", "A bug report", "Asking GitHub for more storage"], answer: 0,
      hint: "It’s a request, and someone else looks at it.",
      note: "Pull requests let a teammate check your code before it reaches main. Real companies use them every day.", badge: "users",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: The rescue (double) ----------
    {
      type: "learn", door: 6,
      title: "The rescue: everything you need is in the history.",
      points: [["Find the last good commit", "git log --oneline, and read the messages"], ["Bring it back safely", "Revert the bad commit, or restore files from the good one"], ["Then protect main", "Branches, pull requests and pulling before pushing"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["alarm-clock", "It’s 11:40 PM", "Save the project"], ["trophy", "Then your Git level", "Hero or beginner?"]] }
    },
    GR(6, "The Rescue", {
      double: true,
      prompt: "The teammate’s overwrite is commit a1b2c3, already pushed. The commit before it was the working version. Best rescue?",
      options: ["Submit the broken version", "Start the whole project again from scratch", "git revert a1b2c3, check the app works, then push", "Delete the repository and make a new one"], answer: 2,
      hint: "Undo one shared commit safely.",
      note: "One command undoes the overwrite, keeps all history, and your teammates’ copies stay in sync. Submission saved.", badge: "trophy"
    }),
    GR(6, "The Rescue", Object.assign({}, FIX, {
      double: true,
      prompt: "While rescuing, Ravi notices this in the code that’s on GitHub. Which line is a serious problem?",
      code: ["const app = initApp();", "const db = connectDatabase();", "const API_KEY = \"sk-EXAMPLE-SECRET-12345\";", "startServer(app, db);"],
      outputOptions: ["A secret key is pushed publicly; anyone can copy and misuse it", "The variable names are too long", "Nothing, it’s fine"], outputAnswer: 0, bugLine: 2,
      bugText: "a real secret key on GitHub. Change (rotate) the key immediately, then keep secrets in a file listed in .gitignore",
      hint: "Which line would you not want strangers to read?",
      note: "Deleting the line isn’t enough: it’s still in the history. Rotate the key, then keep secrets out of Git with .gitignore.", badge: "lock"
    })),
    GR(6, "The Rescue", {
      double: true,
      prompt: "Which daily routine would have prevented tonight’s disaster?",
      options: ["git pull → work on your own branch → add and commit often → push → open a pull request to merge into main", "Only one person ever touches the code", "Force push every evening", "Work on main, never commit, email files at the end"], answer: 0,
      hint: "Every command from today, in order.",
      note: "Pull, branch, commit often, push, pull request. With this routine, a teammate can’t overwrite main by accident.", badge: "route",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Tell the room a Git (or lost-file) disaster you’ve had, and which command from today would have saved you.", note: "The most honest story wins. Every developer has one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Git Commands You’ll Actually Use", note: "Screenshot this. Put your next project on GitHub and use every one.", items: COMMANDS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Bug hunts, Git rescues and real team projects every week. Build together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
