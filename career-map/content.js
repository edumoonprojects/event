// Life After BTech: Career Map (EduMoon Skills Club). For 1st and 2nd years.
// Step types used: story · rules · learn · door · match · speak · wordlist · end
// A door with board: false skips the leaderboard, so scores show once per round.

const R = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

// The 8 paths (also used by the Career Map take-home card and Find My Path).
const PATHS = [
  ["💻 Software Developer", "Builds apps and websites. First step: learn one language (Python or C) and solve 1 easy problem a day."],
  ["☁️ Cloud Engineer", "Keeps big apps running for millions. First step: learn basic Linux commands and make a free cloud account."],
  ["📊 Data Analyst", "Finds answers hidden in numbers. First step: learn Excel and basic SQL, then analyse a dataset you like (cricket, movies)."],
  ["🛡️ Cybersecurity Analyst", "Protects companies from hackers. First step: learn networking basics and try beginner rooms on TryHackMe."],
  ["🎨 UI/UX Designer", "Designs apps that are easy and beautiful to use. First step: make a free Figma account and redesign one app screen."],
  ["🧭 Product Manager", "Decides what to build and leads the team. First step: pick an app you use, list 3 problems and how you’d fix them."],
  ["🎓 Higher Studies", "GATE (M.Tech, PSU jobs), MS abroad or MBA. First step: download the GATE syllabus for your branch and read it."],
  ["🏛️ Government Jobs", "SSC, banking, railways, state PSC and more. First step: pick one exam and try a free aptitude and reasoning practice test."]
];

window.GAME = {
  id: "career-map",
  title: "Life After BTech: Career Map",
  club: "Skills Club",
  tagline: "8 career paths after BTech. Learn them, play with them, and find yours.",
  art: window.STORY_ART,
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Career point",
    rulesEyebrow: "How Career Map works", rulesTitle: "Learn. Play. Find your path.",
    learnText: "The host shares one quick career idea.", crackTitle: "Play",
    crackText: "Answer on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Final round: <b>double</b>!",
    nobody: "Nobody got this one. Most students don’t know this yet!", cracked: "got it right",
    next: "Next round ▶", finale: "Next ▶", winner: "are today’s Career Champions! 🏆", endLine: "You now know 8 career paths! 🧭"
  },
  steps: [
    {
      type: "story", art: true,
      alert: "🧭 EduMoon Skills Club · Career Map",
      title: "It’s 4 years from now. You have your BTech degree. 8 roads are in front of you.",
      cards: [["🛣️", "Learn 8 real career paths after BTech"], ["🎮", "5 rounds: guess, bust myths, fix a plan"], ["🔮", "Find YOUR path at the end, just for you"]]
    },
    { type: "rules" },

    // ---------- Round 1: Guess the Job ----------
    {
      type: "learn", door: 1,
      title: "8 roads after BTech. Most students know only 1 or 2.",
      points: [["Not just “software job”", "There are many roles in tech, and some don’t need heavy coding"], ["Not just jobs", "Higher studies and government jobs are big roads too"], ["Your branch is not your limit", "Students from every branch reach these paths"]],
      highlightLast: true,
      side: { label: "The 8 roads", items: PATHS.map(([n, t]) => [n.split(" ")[0], n.slice(n.indexOf(" ") + 1), t.split(". ")[0] + "."]) }
    },
    R(1, "Guess the Job", {
      prompt: "“I attack my own company’s website to find weak spots before real hackers do.” Who am I?",
      options: ["Software Developer", "Cybersecurity Analyst", "Data Analyst", "Cloud Engineer"], answer: 1,
      hint: "Think about who protects a company from hackers.",
      note: "This is called ethical hacking. Companies pay people to break in, so real hackers can’t.", badge: "🛡️"
    }),
    R(1, "Guess the Job", {
      prompt: "“I talk to users, decide which feature the app builds next, and lead designers and developers. I may not write code.” Who am I?",
      options: ["UI/UX Designer", "Data Analyst", "Product Manager", "Software Developer"], answer: 2,
      hint: "This person decides WHAT gets built, not HOW it looks or how it’s coded.",
      note: "Product Managers are like the captain of an app. Talking, deciding and leading is the job.", badge: "🧭"
    }),
    R(1, "Guess the Job", {
      prompt: "“At 8 PM, lakhs of people order food on the same app. My job is to make sure it doesn’t crash.” Who am I?",
      options: ["Cloud Engineer", "UI/UX Designer", "Product Manager", "Cybersecurity Analyst"], answer: 0,
      hint: "The app runs on servers somewhere. Who looks after them?",
      note: "Cloud Engineers manage the servers that big apps run on, and add more when traffic rises.", badge: "☁️",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Myth or Fact ----------
    {
      type: "learn", door: 2,
      title: "Seniors say many things. Not all of them are true.",
      points: [["Ask: who said it, and when?", "Advice from 10 years ago may not fit today"], ["Skills and projects matter", "Marks open doors, but what you can DO gets you through them"], ["Start small, start early", "15 minutes a day in 1st year adds up to a lot by 4th year"]],
      highlightLast: true,
      side: { label: "Myth-busting rule", items: [["🤔", "Heard a career “rule”?", "Check it with someone who is doing that job today"], ["🔍", "Look at real job posts", "They show exactly what companies want"], ["🧪", "Try it yourself", "A small project tells you more than any opinion"]] }
    },
    R(2, "Myth or Fact", {
      prompt: "“Only CSE students can get IT jobs.”",
      options: ["Myth", "Fact"], answer: 0, time: 30,
      hint: "Think of mechanical or civil students you know who got a software job.",
      note: "Myth! Many big IT companies hire from all branches. What matters is your skills and your test.", badge: "🙅"
    }),
    R(2, "Myth or Fact", {
      prompt: "“Recruiters often look at your projects, GitHub or LinkedIn, not only your marks.”",
      options: ["Myth", "Fact"], answer: 1, time: 30,
      hint: "How else can a company see what you can actually build?",
      note: "Fact! A project you built is proof. That’s why seniors with projects stand out.", badge: "✅"
    }),
    R(2, "Myth or Fact", {
      prompt: "“1st year is too early to start building skills. Start in 3rd year.”",
      options: ["Myth", "Fact"], answer: 0, time: 30,
      hint: "Who has more time: a 1st year or a final year student?",
      note: "Myth! 1st year is the best time: no placement pressure, and lots of time to explore and switch.", badge: "⏰",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Skill Match ----------
    {
      type: "learn", door: 3,
      title: "Every job has one core skill to start with.",
      points: [["Don’t learn everything", "Pick the ONE skill your path needs first"], ["Free is enough", "You can learn the basics of every path for free online"], ["Learn by doing", "Make something small with the skill in your first month"]],
      highlightLast: true,
      side: { label: "Examples", items: [["💻", "Software Developer", "One programming language + problem solving"], ["☁️", "Cloud Engineer", "Linux + networking basics + one cloud (AWS, Azure or Google Cloud)"], ["🛡️", "Cybersecurity Analyst", "Networking + Linux + how attacks work"]] }
    },
    R(3, "Skill Match", {
      prompt: "You want to be a Data Analyst. Which skills should you learn first?",
      options: ["Java and Android", "Excel and SQL", "Figma", "Video editing"], answer: 1,
      hint: "Data lives in tables. Which tools work with tables?",
      note: "Excel and SQL are the first tools almost every Data Analyst learns. Python comes next.", badge: "📊"
    }),
    R(3, "Skill Match", {
      prompt: "You want to be a UI/UX Designer. Which tool will you use almost every day?",
      options: ["MySQL", "Linux terminal", "Figma", "Tally"], answer: 2,
      hint: "Designers draw app screens. Which of these is a design tool?",
      note: "Figma is the most popular tool for designing app screens, and it has a free plan.", badge: "🎨"
    }),
    R(3, "Skill Match", {
      prompt: "Most government job exams (SSC, banking, railways) mainly test…",
      options: ["Coding in C", "Aptitude, reasoning, English and general awareness", "Drawing and design", "Only your CGPA"], answer: 1,
      hint: "These exams are taken by students from every degree, not just engineering.",
      note: "Most of these exams test aptitude, reasoning, English and general awareness. Practice tests help a lot.", badge: "🏛️",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Fix the Plan ----------
    {
      type: "learn", door: 4,
      title: "A simple 4-year plan",
      points: [["Year 1 · Explore", "Try 2 or 3 paths with small free courses. Switching is fine!"], ["Year 2 · Choose and build", "Pick one path. Build 2 small projects"], ["Year 3 · Go real", "Internships, bigger projects, a clean LinkedIn"], ["Year 4 · Launch", "Placements, exams or higher studies. You’re ready"]],
      highlightLast: true,
      side: { label: "Remember", items: [["🔁", "You can change paths", "Especially in 1st and 2nd year"], ["🧱", "Small steps every week", "Not one big push in the last month"], ["📣", "Show your work", "GitHub, LinkedIn, a portfolio"]] }
    },
    R(4, "Fix the Plan", {
      kind: "bug", time: 60,
      prompt: "Ravi’s 4-year plan has one big mistake. Find it, and say why it’s wrong.",
      code: ["Year 1: Learn one programming language properly", "Year 2: Build 2 small projects and put them on GitHub", "Year 3: Apply for internships and build a bigger project", "Year 4: Make a LinkedIn and resume 1 week before placements"],
      outputOptions: ["Too early. Wait until final year", "Too late. Start in year 1 or 2 and keep updating it", "LinkedIn is not needed at all"], outputAnswer: 1, bugLine: 3,
      step1: "Why is the mistake wrong?", step2: "Tap the line with the mistake", say1: "First pick why it’s wrong.", say2: "Now tap the line with the mistake.",
      partO: "the reason", partL: "the line", lineLabel: "mistake on line", bugLabel: "The mistake is on",
      bugText: "a LinkedIn and resume should start early and grow every year",
      hint: "Read Year 4 again. Can you build a good profile in 1 week?",
      note: "Your LinkedIn and resume are like a garden. Plant them early and add to them every year.", badge: "🛠️",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Which Path? (double) ----------
    {
      type: "learn", door: 5,
      title: "Pick the path that fits YOU, not the hype.",
      points: [["What do you enjoy?", "What could you do for hours without getting bored?"], ["What are you good at?", "Maths, people, design, memory, explaining?"], ["What life do you want?", "Startup speed, stable job, research, serving people?"]],
      highlightLast: true,
      side: { label: "Final round", items: [["👤", "You’ll meet 2 students", "Read their story carefully"], ["🎯", "Pick the best path for them", "There’s one best fit"], ["⚡", "Double points", "Still anyone’s game!"]] }
    },
    R(5, "Which Path?", {
      double: true, time: 45,
      prompt: "Sneha loves drawing, notices every badly designed app, and doesn’t enjoy heavy maths. Best path?",
      options: ["Data Analyst", "UI/UX Designer", "Cloud Engineer", "Higher Studies (GATE)"], answer: 1,
      hint: "Drawing + apps + design sense…",
      note: "UI/UX Designer! Design skills matter more than heavy maths here. She can start with Figma today.", badge: "🎨"
    }),
    R(5, "Which Path?", {
      double: true, time: 45,
      prompt: "Arjun reads the news daily, is great at aptitude puzzles, and wants a stable, respected job serving people. Best path?",
      options: ["Government Jobs", "Product Manager", "Cybersecurity Analyst", "Software Developer"], answer: 0,
      hint: "Aptitude + general awareness + stable, public service…",
      note: "Government jobs! His daily news habit and aptitude skills are exactly what these exams test.", badge: "🏛️",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Find My Path ----------
    {
      type: "match", eyebrow: "Just for you 🔮", title: "Find My Path",
      note: "6 quick questions about you. No points, no wrong answers. You’ll get your best-fit path and your first step for this week.",
      url: "match.html", button: "Find my path ➜"
    },
    { type: "speak", eyebrow: "Speaking time 🎤 · optional", prompt: "What did you get? Do you agree? What do you want to become after BTech?", note: "Anyone can share. One sentence is enough!", points: 100 },
    { type: "wordlist", eyebrow: "Take it home", title: "Your Career Map 🧭", note: "Screenshot this. Remember: in 1st and 2nd year you can try a path and switch. Exploring is the plan.", items: PATHS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Careers, resumes, internships and startup games every week. Get ahead, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
window.CAREER_PATHS = PATHS;
