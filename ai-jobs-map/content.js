// AI Jobs Map (EduMoon AI Lab). For all years and every branch.
// The real jobs in AI and what each one does: data roles, building roles, non-coding roles, the skills and portfolio that get you hired, and a path from any branch. No salary figures are quoted.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const JM = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const JMN = (round, name, extra) => JM(round, name, Object.assign({ kind: "number", time: 50 }, extra));

// The take-home card: the AI jobs map.
const JOBS = [
  ["Data analyst", "Turns data into answers with Excel, SQL and dashboards. A great first AI-adjacent job."],
  ["Data engineer", "Builds the pipelines that collect, clean and store data."],
  ["Data scientist", "Uses statistics and models to find patterns and predict."],
  ["ML engineer", "Trains, tests and deploys models into real products."],
  ["AI app developer", "Builds apps on top of AI models and APIs: chatbots, assistants, tools."],
  ["AI product manager", "Decides what to build and why, and keeps users at the centre."],
  ["AI evaluator and trainer", "Tests outputs, writes examples, finds where the AI fails."],
  ["Your path", "Your branch knowledge + one AI skill + 2 real projects on GitHub."]
];

window.GAME = {
  id: "ai-jobs-map",
  title: "AI Jobs Map",
  club: "AI Lab",
  tagline: "“I want a job in AI.” Great, which one? Find the role that fits you.",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "40 minutes", level: "Medium",
    about: "Meghana tells everyone, “I want a job in AI,” but cannot say which job. In 6 rounds, teams meet the AI team at a made-up company, learn what data analysts, data engineers, data scientists, ML engineers, AI app developers, product managers and AI evaluators really do, which skills each needs, why projects beat certificates, and how students from any branch can start. No salary numbers are quoted, because they change fast.",
    outcomes: "A clear map of AI roles, the core skills for each, the difference between coding and non-coding AI jobs, and a realistic first step from any branch.",
    tone: "Students hear a lot of hype about AI jobs. Keep it grounded: real roles, real skills, real first steps. Encourage non-CSE students; many AI jobs need domain knowledge more than deep coding.",
    extra: [["Ask the room", "Before Round 6, ask three students their branch, and have the room suggest one AI-related role for each."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Mapped",
    rulesEyebrow: "How AI Jobs Map works", rulesTitle: "Meet the role. Match the skills. Find your path.",
    learnText: "The host introduces a group of AI roles.", crackTitle: "Match",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even recruiters mix these roles up!", cracked: "matched it",
    next: "Next round →", finale: "Next →", winner: "have their AI career map ready!", endLine: "Meghana knows exactly which AI job she wants."
  },
  offerEyebrow: "EduMoon AI Lab · Career clarity",
  offerTitle: "Your AI career clarity",
  offers: [
    { min: 0.7, icon: "compass", title: "Clear Direction", text: "You know the roles. Pick one and build your first project this month." },
    { min: 0.45, icon: "map", title: "Map Reader", text: "Strong! Look up 3 real job posts for the role you like." },
    { min: 0.2, icon: "route", title: "Path Finder", text: "Good start. Talk to one senior working in data or AI." },
    { min: 0, icon: "book-open", title: "Explorer", text: "Everyone starts here. Play What Is AI? and come back." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Which AI job?",
      title: "Meghana says, “I want a job in AI.” Her senior asks, “Which one?” She has no answer. Can your team map the AI jobs for her?",
      cards: [["users", "8 real roles in an AI team"], ["wrench", "The skills each role needs"], ["trophy", "Your score decides your career clarity"]]
    },
    { type: "rules" },

    // ---------- Round 1: The AI team ----------
    {
      type: "learn", door: 1,
      title: "One AI product needs a whole team, not just one “AI person”.",
      points: [["Data people", "Collect, clean and understand the data"], ["Builders", "Train models and build the product around them"], ["Deciders and checkers", "Product managers, designers, testers and evaluators"]],
      highlightLast: true,
      side: { label: "A made-up team: TutorBot", items: [["chart-column", "Data", "Analyst, engineer"], ["code", "Build", "ML engineer, app developer"], ["users", "Decide and check", "PM, designer, evaluator"]] }
    },
    JM(1, "The AI Team", {
      prompt: "A company builds an AI tutor app. Who decides WHICH features to build first, based on what students need?",
      options: ["The AI product manager", "The data engineer", "The ML engineer", "The office manager"], answer: 0,
      hint: "What to build, and why.",
      note: "The product manager decides what to build and why, using user research and data.", badge: "target"
    }),
    JM(1, "The AI Team", {
      prompt: "Which statement about AI jobs is most accurate?",
      options: ["Only PhDs can work in AI", "AI jobs are only for CSE", "There is just one job: AI engineer", "Many roles, some low-code"], answer: 3,
      hint: "Remember the whole team.",
      note: "AI teams have many roles. Some are deeply technical; others need domain knowledge, communication and judgement.", badge: "users"
    }),
    JMN(1, "The AI Team", {
      prompt: "The TutorBot team has 2 data people, 3 builders and 3 deciders and checkers. How many people in total?",
      answer: 8,
      hint: "2 + 3 + 3.",
      note: "8 people, and only some of them train models. Most real AI teams look like this.", badge: "users",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Data roles ----------
    {
      type: "learn", door: 2,
      title: "Data roles: the foundation of every AI product.",
      points: [["Data analyst", "Answers questions with Excel, SQL and dashboards"], ["Data engineer", "Builds pipelines that move and clean data"], ["Data scientist", "Uses statistics and models to predict and explain"]],
      highlightLast: true,
      side: { label: "Starter skills", items: [["chart-column", "Excel and SQL", "For almost every data job"], ["code", "Python basics", "pandas for data"], ["eye", "Charts and storytelling", "Explaining what the data says"]] }
    },
    JM(2, "Data Roles", {
      prompt: "A manager asks, “Which city had the most app sign-ups last month?” Who usually answers this?",
      options: ["An ML engineer", "A data analyst", "A UX designer", "A security engineer"], answer: 1,
      hint: "A clear question answered from data.",
      note: "Data analysts answer business questions with SQL, spreadsheets and dashboards.", badge: "chart-column"
    }),
    JM(2, "Data Roles", {
      prompt: "Which TWO skills appear in almost every data job post?",
      options: ["Photoshop and Premiere", "AutoCAD and MATLAB", "SQL and Excel", "Java and Android"], answer: 2,
      hint: "Querying and working with tables.",
      note: "SQL and Excel are the backbone of data work. Python is the usual next step.", badge: "list-checks"
    }),
    JM(2, "Data Roles", {
      prompt: "Data arrives messy from 5 different apps every night. Who builds the system that cleans and combines it?",
      options: ["A product manager", "An HR executive", "A content writer", "A data engineer"], answer: 3,
      hint: "Pipelines.",
      note: "Data engineers build the pipelines. Without clean data, no AI model works well.", badge: "route",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Building roles ----------
    {
      type: "learn", door: 3,
      title: "Building roles: from model to product.",
      points: [["ML engineer", "Trains, tests and deploys models"], ["AI app developer", "Builds apps using AI models and APIs"], ["MLOps engineer", "Keeps models running, monitored and updated"]],
      highlightLast: true,
      side: { label: "Common skills", items: [["code", "Python", "The main language"], ["brain", "ML basics", "Training, testing, overfitting"], ["cloud", "Cloud and APIs", "Deploying and connecting"]] }
    },
    JM(3, "Building Roles", {
      prompt: "A team uses an existing AI model through an API to build a study assistant app. Which role fits best?",
      options: ["Data analyst", "Graphic designer", "AI app developer", "Accountant"], answer: 2,
      hint: "Building an app on top of a model.",
      note: "AI app developers connect models to real apps: prompts, APIs, user interface and safety checks.", badge: "smartphone"
    }),
    JM(3, "Building Roles", {
      prompt: "A model worked well in testing but gets worse months after launch. Who usually watches for this?",
      options: ["The marketing team", "The office admin", "Nobody needs to", "An MLOps engineer"], answer: 3,
      hint: "Monitoring models in production.",
      note: "Real-world data changes over time. MLOps and ML engineers monitor and retrain models.", badge: "wrench"
    }),
    JM(3, "Building Roles", {
      prompt: "Which language is used most in ML and data science work?",
      options: ["COBOL", "Python", "HTML", "Assembly"], answer: 1,
      hint: "pandas, scikit-learn, PyTorch.",
      note: "Python, because of its many data and AI libraries. Learn the basics first, then the libraries.", badge: "code",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Which AI role sounds most like you so far, and why?", note: "One role, one reason. 20 seconds.", points: 100 },

    // ---------- Round 4: Non-coding roles ----------
    {
      type: "learn", door: 4,
      title: "Not a coder? AI still needs you.",
      points: [["AI product manager", "Understands users, sets priorities, works with engineers"], ["AI evaluator and trainer", "Writes examples, tests outputs, finds failures"], ["Domain experts", "Doctors, lawyers, teachers and engineers who guide AI in their field"]],
      highlightLast: true,
      side: { label: "Also", items: [["palette", "AI UX designer", "How people interact with AI"], ["scale", "AI policy and ethics", "Rules, fairness, safety"], ["store", "AI sales and solutions", "Helping clients use AI"]] }
    },
    JM(4, "Non-coding Roles", {
      prompt: "A company needs someone to test a medical chatbot’s answers and flag dangerous mistakes. Who is a strong fit?",
      options: ["An evaluator who knows health", "A wedding video editor", "A stock market trader", "A hotel chef in Vizag"], answer: 0,
      hint: "Domain knowledge plus careful testing.",
      note: "Evaluators with real subject knowledge are valuable. They catch errors that general testers miss.", badge: "heart"
    }),
    JM(4, "Non-coding Roles", {
      prompt: "Which skill matters MOST for an AI product manager?",
      options: ["Typing very fast", "Building servers by hand", "Memorising every algorithm", "Understanding users"], answer: 3,
      hint: "What to build, and why.",
      note: "PMs connect user needs, business goals and what the tech can do. Communication is their main tool.", badge: "users"
    }),
    JM(4, "Non-coding Roles", {
      prompt: "A civil engineering student loves AI but not deep coding. What is a realistic path?",
      options: ["Give up on AI completely", "Switch branches immediately", "Use AI tools within civil", "Only apply for coding jobs"], answer: 2,
      hint: "Branch knowledge is the edge.",
      note: "Domain plus AI is powerful: drone and image analysis of sites, planning tools, safety monitoring.", badge: "wrench",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Skills and portfolio ----------
    {
      type: "learn", door: 5,
      title: "Projects beat certificates.",
      points: [["Two real projects", "Small, finished, on GitHub with a clear README"], ["Real data", "A local problem, not only famous practice datasets"], ["Show your thinking", "What you tried, what failed, what you learned"]],
      highlightLast: true,
      side: { label: "Strong vs weak", items: [["x", "15 online certificates", "Easy to collect"], ["check", "A bus delay predictor for Vizag routes", "Real, local, explained"], ["check", "A short post explaining it", "Proves you understand it"]] }
    },
    JM(5, "Skills and Portfolio", {
      prompt: "Which will impress an AI recruiter most?",
      options: ["20 course certificates", "One finished, explained project", "A long list of buzzwords", "A big follower count"], answer: 1,
      hint: "Proof of skill.",
      note: "A finished, explained project shows you can actually do the work. Certificates only show you watched videos.", badge: "badge-check"
    }),
    JM(5, "Skills and Portfolio", {
      prompt: "What should every project on GitHub have?",
      options: ["A clear README", "No description, the code speaks", "Only screenshots", "A password to view it"], answer: 0,
      hint: "Recruiters spend under a minute per project.",
      note: "A README explains the problem, how you solved it and what you found. Make it easy to understand fast.", badge: "file-text"
    }),
    JMN(5, "Skills and Portfolio", {
      prompt: "Meghana spends 6 hours a week on her project. How many hours is that over 10 weeks?",
      answer: 60,
      hint: "6 × 10.",
      note: "60 hours is enough for a solid first project. Small steady weekly time beats one weekend of panic.", badge: "timer",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Your path (double) ----------
    {
      type: "learn", door: 6,
      title: "Your path: branch + one AI skill + real projects.",
      points: [["Pick one role to aim for", "Not all of them at once"], ["Learn the core skill", "SQL for analysts, Python and ML for builders, users for PMs"], ["Build in your domain", "Projects from your branch stand out"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["compass", "Your path", "Real student choices"], ["mic", "Then the final challenge", "Your 6-month plan"]] }
    },
    JM(6, "Your Path", {
      double: true,
      prompt: "A commerce student wants a first job in data. Best first step?",
      options: ["Start a PhD in deep learning", "Learn 5 languages at once", "Excel, SQL, then a sales dashboard", "Wait until final year"], answer: 2,
      hint: "Core skill plus a domain project.",
      note: "Excel and SQL, then a project from commerce like a sales dashboard. Domain plus data is a strong combination.", badge: "chart-column"
    }),
    JM(6, "Your Path", {
      double: true,
      prompt: "Meghana wants to be an ML engineer. Which learning order makes most sense?",
      options: ["Python, ML basics, then a project", "Deep learning research papers first", "Only watch AI news videos", "Learn the latest tool, skip basics"], answer: 0,
      hint: "Foundations first.",
      note: "Python basics, then ML concepts, then one project you deploy. Tools change; foundations last.", badge: "route"
    }),
    JM(6, "Your Path", {
      double: true,
      prompt: "Which plan is most realistic for the next 6 months?",
      options: ["Become an expert in all AI roles", "One role, one skill, two projects", "Collect 50 certificates", "Wait for AI to settle down first"], answer: 1,
      hint: "Focused and finishable.",
      note: "Focus beats breadth. One role, one skill, two finished projects, shared on GitHub and LinkedIn.", badge: "target",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best plan wins +200", prompt: "In 30 seconds: the AI role you want, the core skill you will learn first, and your first project idea.", note: "Specific and realistic wins. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The AI Jobs Map", note: "Screenshot this. Pick one role and look up 3 real job posts tonight.", items: JOBS },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
