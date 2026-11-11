// Build Your Portfolio Website (EduMoon Coding Club). For all years; best after Web Basics.
// What goes on a student portfolio, in what order, how to write project cards, simple design rules,
// and how to publish free on GitHub Pages.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PF = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const PCHECK = [
  ["Hero", "Your name, one line on what you build, and one button."],
  ["About", "3 to 4 lines: year, branch, what you like building."],
  ["Projects", "2 or 3 real projects: problem, what you built, tools, live link."],
  ["Skills", "Only what you’ve actually used in a project."],
  ["Contact", "Email, LinkedIn and GitHub. No phone number needed."],
  ["Design", "One font, one accent colour, lots of space, works on phones."],
  ["Publish", "GitHub Pages: repo, index.html, Settings → Pages."],
  ["Share", "Put the link on your resume, LinkedIn and GitHub profile."]
];

window.GAME = {
  id: "portfolio-website",
  title: "Build Your Portfolio Website",
  club: "Coding Club",
  tagline: "What to put on it, how to make it look good, and how to publish it free on GitHub Pages.",
  art: window.STORY_ART,
  guide: {
    years: "All years (best after Web Basics)", time: "35 minutes", level: "Beginner",
    about: "Every student needs one link that shows their work. In 6 rounds, teams plan a portfolio for Ravi, a 2nd-year student: what sections it needs and in what order, how to write project cards that impress, simple design rules, how to publish it free on GitHub Pages, and how to share it. It ends with every student planning their own portfolio.",
    outcomes: "Students know the 5 sections of a good portfolio, can write a strong project card, and know the exact steps to publish a site on GitHub Pages for free.",
    tone: "Practical and encouraging. Many students think they have nothing to show; remind them that 2 small real projects are enough to start. If you have a laptop and projector, open GitHub and show the Settings → Pages screen after Round 5.",
    extra: [["Follow-up", "Challenge students to publish their portfolio within a week and share the link in the Coding Club group."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Shipped",
    rulesEyebrow: "How this game works", rulesTitle: "Plan it. Write it. Publish it.",
    learnText: "The host explains one part of a portfolio website.", crackTitle: "Answer",
    crackText: "Pick the best choice for Ravi’s portfolio on your phone.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most first portfolios miss it too!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "built the best portfolio!", endLine: "One link that shows your work. Build yours this week."
  },
  offerEyebrow: "EduMoon Coding Club · Portfolio results",
  offerTitle: "Your builder rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Portfolio Pro", text: "You know exactly what to build. Publish yours this week and share the link." },
    { min: 0.45, icon: "rocket", title: "Ready to Ship", text: "Strong! Pick your 2 best projects tonight and write their cards." },
    { min: 0.2, icon: "lightbulb", title: "Planner", text: "Good start. Save the checklist and build one section a day." },
    { min: 0, icon: "book-open", title: "First Draft", text: "Everyone starts here. Play Web Basics, then come back and build." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Build Your Portfolio Website",
      title: "Ravi, 2nd year, sends his resume everywhere. Recruiters ask: “Do you have a portfolio?” He doesn’t. Today your team plans it, and learns to publish it free.",
      cards: [["list-checks", "What goes on a portfolio"], ["code", "Project cards that impress"], ["globe", "Publish free on GitHub Pages"]]
    },
    { type: "rules" },

    // ---------- Round 1: What and why ----------
    {
      type: "learn", door: 1,
      title: "A portfolio is one link that shows your work.",
      points: [["Resume", "Tells people what you did"], ["Portfolio", "Shows it: live projects they can click"], ["Who looks", "Recruiters, startup founders, seniors and clients"]],
      highlightLast: true,
      side: { label: "The 5 sections", items: [["user", "Hero and About", "Who you are"], ["code", "Projects", "Your real work"], ["mail", "Contact", "How to reach you"]] }
    },
    PF(1, "Why a Portfolio", {
      prompt: "What does a portfolio give Ravi that a resume alone doesn’t?",
      options: ["A longer list of all the skills he has learned", "A place to share his marks memo", "Live projects people can click", "A photo gallery of his college trips"], answer: 2,
      hint: "Show, don’t just tell.",
      note: "Proof. A recruiter can open the project and see it working.", badge: "search"
    }),
    PF(1, "Why a Portfolio", {
      prompt: "Ravi says: “I only have 2 small projects. Is that enough?”",
      options: ["Yes, 2 real projects are a great start", "No, he needs at least 10 projects first", "Only if both are big team projects", "No, he should wait until final year"], answer: 0,
      hint: "Real and working beats many and broken.",
      note: "Two small real projects, explained well, are a great start. Add more as you build.", badge: "rocket",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Sections and order ----------
    {
      type: "learn", door: 2,
      title: "Put the most important thing first.",
      points: [["Hero", "Name, one line on what you build, one button: “See my projects”"], ["Then", "About, Projects, Skills, Contact"], ["Keep it short", "Visitors decide in a few seconds"]],
      highlightLast: true,
      side: { label: "A strong hero line", items: [["x", "Weak", "“Welcome to my website!!!”"], ["badge-check", "Strong", "“I build web apps students actually use.”"], ["hand", "Button", "See my projects"]] }
    },
    PF(2, "Sections", {
      prompt: "Which hero line is best for Ravi?",
      options: ["“Welcome to my personal website, thanks for visiting!”", "“Ravi Kumar, son of K. Ramesh, from Guntur.”", "“I build simple web apps that students use.”", "“Hi, I am Ravi and this is my portfolio page.”"], answer: 2,
      hint: "What does he do?",
      note: "Say what you build in one line. Visitors know who you are in 3 seconds.", badge: "user"
    }),
    PF(2, "Sections", {
      prompt: "Best order for the sections?",
      options: ["Contact, Skills, About, Projects, Hero", "Hero, About, Projects, Skills, Contact", "Skills, Hero, Contact, Projects, About", "Projects only, nothing else needed"], answer: 1,
      hint: "Who you are, then your work, then how to reach you.",
      note: "Hero, About, Projects, Skills, Contact. The order people want to read it in.", badge: "list-checks"
    }),
    PF(2, "Sections", {
      prompt: "What should the Contact section have?",
      options: ["Home address and phone number", "His Aadhaar number, to build trust", "Nothing, people will find him", "Email, LinkedIn and GitHub"], answer: 3,
      hint: "Professional and safe.",
      note: "Email, LinkedIn and GitHub. Keep personal details like your address off a public site.", badge: "mail",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Project cards ----------
    {
      type: "learn", door: 3,
      title: "Project cards are the heart of your portfolio.",
      points: [["Problem", "What it solves, in one line"], ["What you built", "Your part, with a number if you can"], ["Tools and links", "Built with, a live link and the code link"]],
      highlightLast: true,
      side: { label: "A strong project card", items: [["lightbulb", "Problem", "Fest registration was on paper"], ["code", "Built", "A site 300+ students used"], ["globe", "Links", "Live demo · GitHub"]] }
    },
    PF(3, "Project Cards", {
      prompt: "Which project description is strongest?",
      options: ["“A very good website project which I did with full dedication.”", "“Website using HTML, CSS, JS, Bootstrap, jQuery, Git.”", "“Fest sign-up site used by 300+ students. Live link.”", "“College project, please see it, you will like it.”"], answer: 2,
      hint: "Problem, result, proof.",
      note: "Specific results and a link beat adjectives and tool lists.", badge: "code"
    }),
    PF(3, "Project Cards", {
      prompt: "Ravi’s project was a team project. What should he write?",
      options: ["Nothing, so he gets all the credit", "That he built the whole thing alone", "Only the team’s name, no details", "What his own part was, clearly"], answer: 3,
      hint: "Honest and specific.",
      note: "“Team of 4; I built the login and payments.” Honest, and interviewers will ask anyway.", badge: "users"
    }),
    PF(3, "Project Cards", {
      prompt: "Which project should go first?",
      options: ["His oldest project, from 1st year", "His best and most finished project", "The one with the longest code", "A tutorial he copied step by step"], answer: 1,
      hint: "Lead with your strongest.",
      note: "Best first. Many visitors only look at the first project.", badge: "crown",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Design ----------
    {
      type: "learn", door: 4,
      title: "Simple design looks professional.",
      points: [["One font, one accent colour", "Plus black or dark text on a light background"], ["Space", "Let things breathe; don’t cram"], ["Phones first", "Most people will open your link on a phone"]],
      highlightLast: true,
      side: { label: "Design rules", items: [["pen-tool", "Fonts", "One, maybe two"], ["palette", "Colours", "One accent colour"], ["smartphone", "Mobile", "Test on your phone"]] }
    },
    PF(4, "Design", {
      prompt: "Ravi wants 6 colours, 4 fonts and a moving background. Best advice?",
      options: ["Great, more effects make him look more skilled", "Keep it simple: one font, one colour", "Use only black and white, no colour at all", "Add music that plays when the page opens"], answer: 1,
      hint: "Clean beats flashy.",
      note: "Simple and clean looks professional and loads fast.", badge: "palette"
    }),
    PF(4, "Design", {
      prompt: "How should Ravi check his site before sharing it?",
      options: ["Open it on his phone and a friend’s phone", "Only on his laptop’s big screen", "Ask AI if the code looks correct", "No need, browsers fix everything"], answer: 0,
      hint: "Where will most people open the link?",
      note: "Test on phones. Most recruiters and friends will open your link on a phone first.", badge: "smartphone",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Publish on GitHub Pages ----------
    {
      type: "learn", door: 5,
      title: "Publish it free with GitHub Pages.",
      points: [["Repository", "Create a public repo; name it username.github.io for your main site"], ["index.html", "Your home page file must be called index.html"], ["Turn it on", "Settings → Pages → choose the main branch"]],
      highlightLast: true,
      side: { label: "Ravi’s link", items: [["link-2", "Repo", "ravikumar.github.io"], ["file-text", "Home page", "index.html"], ["globe", "Live at", "https://ravikumar.github.io"]] }
    },
    PF(5, "Publish", {
      prompt: "Ravi’s GitHub username is “ravikumar”. What should his main portfolio repository be named?",
      options: ["my-portfolio-website-final", "ravikumar.github.io", "portfolio.html", "ravi-website-2026"], answer: 1,
      hint: "Username, then .github.io",
      note: "username.github.io becomes your main site at https://username.github.io. Other repos can use Pages too, at a longer link.", badge: "link-2"
    }),
    PF(5, "Publish", {
      prompt: "The site shows a 404 page. His home page file is called “home.html”. What’s wrong?",
      options: ["GitHub Pages costs money to use", "His laptop needs restarting", "The home page must be named index.html", "The repository has too many files"], answer: 2,
      hint: "What file does the website open first?",
      note: "Rename it to index.html. That’s the file a website opens by default.", badge: "file-text"
    }),
    PF(5, "Publish", {
      prompt: "Does Ravi need to buy hosting to put his portfolio online?",
      options: ["Yes, at least ₹5,000 every year", "Yes, and a server running in his room", "Only if he wants it to work on phones", "No, GitHub Pages hosts it free"], answer: 3,
      hint: "That’s why we use GitHub Pages.",
      note: "Free. A custom domain is optional and can be added later.", badge: "globe",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Share and improve (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: share it and keep it fresh. Double points.",
      points: [["Share", "Resume, LinkedIn profile, GitHub profile, email signature"], ["Update", "Add every new project, remove weak ones"], ["Feedback", "Ask 2 seniors what confused them"]],
      highlightLast: true,
      side: { label: "Where the link goes", items: [["file-text", "Resume", "Top, next to email"], ["users", "LinkedIn", "Featured section"], ["link-2", "GitHub", "Profile README"]] }
    },
    PF(6, "Share", {
      double: true,
      prompt: "Where should Ravi put his portfolio link first?",
      options: ["Only in his WhatsApp status for a day", "At the top of his resume", "In the last line of every email", "Nowhere, people will search for it"], answer: 1,
      hint: "Where recruiters look first.",
      note: "Top of the resume, next to email and LinkedIn. Then LinkedIn Featured and GitHub.", badge: "file-text"
    }),
    PF(6, "Share", {
      double: true,
      prompt: "6 months later, Ravi has built 3 better projects. What should he do?",
      options: ["Leave the site as it is, it’s published", "Delete it and start a new site", "Add the new ones and drop the weakest", "Make a separate site for each project"], answer: 2,
      hint: "Keep your best work in front.",
      note: "A portfolio is never “finished”. Keep your best 3 or 4 projects up front.", badge: "rocket",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best plan wins +200", prompt: "Plan your own portfolio in 30 seconds: your hero line, and the 2 projects you’ll put first.", note: "No projects yet? Say the first one you’ll build this month.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Portfolio checklist", note: "Screenshot this. Build one section a day and publish it in a week.", items: PCHECK },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, escape rooms and project nights every week. No laptop needed to start.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
