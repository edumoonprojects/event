// AI Tool Match (EduMoon AI Lab). For all years.
// The right AI tool for the right job: chat, search with sources, your own notes, design, code, and when not to use AI at all.
// Tool names are examples that were popular in 2026. Free plans and features change often, so check before you rely on one.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const TM = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const TOOLBOX = [
  ["Explain, brainstorm, draft", "AI chat assistants: ChatGPT, Gemini, Claude and similar."],
  ["Answers with sources", "AI search tools like Perplexity, or Google with AI answers. Open the sources."],
  ["Study from YOUR notes", "Tools that answer only from files you upload, like NotebookLM."],
  ["Posters and slides", "Design tools with AI features, like Canva, or AI slide makers."],
  ["Code help", "Coding assistants in your editor, or an AI chat for explanations."],
  ["Translate and fix English", "Translators and writing checkers. Read the result before you send it."],
  ["Live facts", "Official websites, not AI memory: results, dates, prices, rules."],
  ["No AI needed", "Exams, private data, things you must learn by doing."]
];

window.GAME = {
  id: "ai-tool-match",
  title: "AI Tool Match",
  club: "AI Lab",
  tagline: "One task, the right AI tool. And knowing when to use none.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no coding needed", time: "35 minutes", level: "Beginner",
    about: "There are hundreds of AI tools, and most students use one chat app for everything. In 6 rounds, teams match real student tasks (studying, assignments, posters, code, English, career) to the right kind of AI tool, and learn when an official website or no AI at all is the smarter choice.",
    outcomes: "A simple toolbox of 8 tool types, how to pick the right one for a task, and why live facts belong to official sources.",
    tone: "Focus on the TYPE of tool, not brands; names are only examples and free plans change often. If students mention a tool not in the game, welcome it and ask which type it is.",
    extra: [["Keep it current", "AI tools change fast. Before each session, glance at content.js and swap any tool that no longer has a free plan."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Matched",
    rulesEyebrow: "How AI Tool Match works", rulesTitle: "Read the task. Pick the tool. Win.",
    learnText: "The host shares one type of AI tool and what it’s best at.", crackTitle: "Match",
    crackText: "Pick the best tool on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody matched this one. Most people use the wrong tool for it!", cracked: "matched it",
    next: "Next round →", finale: "Next →", winner: "are today’s AI toolbox masters!", endLine: "You now know which AI to use, and when!"
  },
  offerEyebrow: "EduMoon AI Lab · Toolbox level",
  offerTitle: "Your AI toolbox",
  offers: [
    { min: 0.7, icon: "wrench", title: "Toolbox Master", text: "You pick the right tool every time, and know when to skip AI." },
    { min: 0.45, icon: "badge-check", title: "Smart Picker", text: "Strong! Try one new tool type from the list this week." },
    { min: 0.2, icon: "search", title: "Explorer", text: "Good start. Try a source-showing AI search next time you research." },
    { min: 0, icon: "book-open", title: "One-App User", text: "Everyone starts here. Save the toolbox and try one new tool today." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · AI Tool Match",
      title: "You wouldn’t use a hammer to cut paper. So why use one AI app for everything? Match every task to the right tool.",
      cards: [["wrench", "Real student tasks, the right tool"], ["search", "AI that shows sources vs AI that guesses"], ["shield", "When the best tool is no AI at all"]]
    },
    { type: "rules" },

    // ---------- Round 1: Chat assistants ----------
    {
      type: "learn", door: 1,
      title: "AI chat assistants are great at explaining and drafting.",
      points: [["Best for", "Explaining topics, brainstorming, first drafts, practice questions"], ["Examples", "ChatGPT, Gemini, Claude and similar apps"], ["Weak at", "Latest news, exact facts and anything it can’t check"]],
      highlightLast: true,
      side: { label: "Use a chat assistant to", items: [["lightbulb", "Explain simply", "“Like I’m a 1st-year”"], ["list-checks", "Quiz you", "Practice before exams"], ["pen-tool", "Draft", "Then you edit and own it"]] }
    },
    TM(1, "Chat Assistants", {
      prompt: "You didn’t understand recursion in class. Which tool type helps most right now?",
      options: ["An AI chat assistant: ask it to explain simply, with one example, then quiz you", "A poster design tool", "A translation app", "A calculator"], answer: 0,
      hint: "You need explaining and practice.",
      note: "Explain, then quiz yourself. That’s the chat assistant’s sweet spot.", badge: "lightbulb"
    }),
    TM(1, "Chat Assistants", {
      prompt: "You need 20 ideas for your club’s event names in 1 minute. Best tool type?",
      options: ["Your college website", "A spreadsheet", "An AI chat assistant", "A PDF reader"], answer: 2,
      hint: "Brainstorming many options fast.",
      note: "Brainstorming has no wrong answer, so it’s a perfect AI task. You pick the best idea.", badge: "sparkles"
    }),
    TM(1, "Chat Assistants", {
      prompt: "What should you NOT rely on a chat assistant’s memory for?",
      options: ["Explaining a concept", "Today’s exam timetable and last dates", "Brainstorming names", "Rewriting your paragraph"], answer: 1,
      hint: "Which one changes and has an official source?",
      note: "Live dates and schedules come from official notices, not AI memory.", badge: "clock",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Search with sources ----------
    {
      type: "learn", door: 2,
      title: "For research, use AI that shows its sources.",
      points: [["What it does", "Searches the web and links to where each answer came from"], ["Examples", "Perplexity, or Google search with AI answers"], ["Your job", "Open the sources. Are they real and trustworthy?"]],
      highlightLast: true,
      side: { label: "Good sources", items: [["landmark", "Government and .gov.in", "Rules, schemes, dates"], ["graduation-cap", "Universities and journals", "Research"], ["file-text", "Official docs", "Software and tools"]] }
    },
    TM(2, "Search with Sources", {
      prompt: "You need 3 real statistics with sources for a project report. Best tool type?",
      options: ["A poster maker", "An AI search tool that shows clickable sources, then you open each one", "An AI chat with no sources", "A voice recorder"], answer: 1,
      hint: "Your teacher will ask: where is this from?",
      note: "Sources you can open and check are the whole point. Never cite a number you can’t trace.", badge: "search"
    }),
    TM(2, "Search with Sources", {
      prompt: "An AI search tool gives an answer with 3 links. What should you do before using it?",
      options: ["Nothing, links mean it’s true", "Open the links and check they actually say that", "Count the links", "Share it immediately"], answer: 1,
      hint: "Do the sources really support the answer?",
      note: "Sometimes the source says something different. Read it yourself.", badge: "link-2"
    }),
    TM(2, "Search with Sources", {
      prompt: "You want the latest news about a new government internship scheme. Best first stop?",
      options: ["A poster tool", "An AI chat from memory", "The official government website, or AI search linking to it", "A friend’s WhatsApp status"], answer: 2,
      hint: "Who announced the scheme?",
      note: "For official schemes, the official site is the truth. AI search helps you find it.", badge: "landmark",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Your own notes ----------
    {
      type: "learn", door: 3,
      title: "Some AI tools answer only from YOUR files.",
      points: [["What it does", "You upload notes or PDFs; it answers from them"], ["Example", "NotebookLM, and some chat apps that accept files"], ["Why it helps", "Fewer made-up answers, matches your syllabus"]],
      highlightLast: true,
      side: { label: "Great for", items: [["book-open", "Revising your notes", "Summaries and questions"], ["file-text", "Long PDFs", "Find the part you need"], ["list-checks", "Practice tests", "From your own material"]] }
    },
    TM(3, "Your Own Notes", {
      prompt: "You have 80 pages of class notes and an exam in 2 days. Best tool type?",
      options: ["A tool where you upload your notes and ask it to summarise and quiz you from them", "A poster design tool", "A random YouTube video", "A translation app"], answer: 0,
      hint: "Which tool uses YOUR material?",
      note: "Answers from your own notes match your syllabus far better than a general AI.", badge: "book-open"
    }),
    TM(3, "Your Own Notes", {
      prompt: "Why is an answer-from-your-files tool safer for exam prep?",
      options: ["It’s always free", "It writes longer answers", "It sticks closer to your material, so it invents less", "It never makes mistakes"], answer: 2,
      hint: "It can still be wrong, but less often. Why?",
      note: "Grounded in your files means fewer hallucinations. Still check anything that looks odd.", badge: "shield"
    }),
    TM(3, "Your Own Notes", {
      prompt: "Which file should you NOT upload to any AI tool?",
      options: ["Your class notes", "A public textbook chapter you’re allowed to use", "Your own essay draft", "A document with your Aadhaar number and bank details"], answer: 3,
      hint: "Private data stays private.",
      note: "Remove private details first, or don’t upload it at all.", badge: "lock",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Which AI tool do you use most, and what for?", note: "Is it the right type for that job? 20 seconds.", points: 100 },

    // ---------- Round 4: Design and slides ----------
    {
      type: "learn", door: 4,
      title: "For posters and slides, use design tools with AI.",
      points: [["What they do", "Templates, layouts, image edits, text suggestions"], ["Examples", "Canva and AI slide makers"], ["Watch out", "Spelling, real dates, and no copyrighted characters or logos"]],
      highlightLast: true,
      side: { label: "Design checklist", items: [["check", "Spell-check every word", "AI images often misspell"], ["clock", "Real date and venue", "Double-check"], ["palette", "Your brand colours", "Stay consistent"]] }
    },
    TM(4, "Design", {
      prompt: "You need a poster for your club event in 15 minutes. Best tool type?",
      options: ["A design tool with templates and AI features", "An AI chat that only writes text", "A spreadsheet", "A coding editor"], answer: 0,
      hint: "You need a visual, fast.",
      note: "Chat can write the poster text; a design tool makes it look good. Use both.", badge: "palette"
    }),
    TM(4, "Design", {
      prompt: "An AI image tool made your poster, but the text reads “WORSHOP” and “SATRDAY”. What now?",
      options: ["Post it, nobody reads", "Fix the text yourself in the design tool before posting", "Make the text smaller", "Add more images"], answer: 1,
      hint: "Whose name is on the poster?",
      note: "AI images often misspell words. Always type the text yourself and check it.", badge: "spell-check"
    }),
    TM(4, "Design", {
      prompt: "AI slide makers can build a deck in a minute. What’s still YOUR job?",
      options: ["Nothing", "Choosing the font only", "Checking every fact, cutting extra text, and practising what you’ll say", "Adding more slides"], answer: 2,
      hint: "Who presents it?",
      note: "AI gives a first draft. The facts, the story and the delivery are yours.", badge: "mic",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Code and English ----------
    {
      type: "learn", door: 5,
      title: "Code helpers and English helpers: use them to learn.",
      points: [["Code assistants", "Explain errors, suggest fixes, write small pieces"], ["English helpers", "Fix grammar, translate, rewrite politely"], ["The rule", "Understand what it changed, so you get better yourself"]],
      highlightLast: true,
      side: { label: "Learn-mode prompts", items: [["code", "“Explain this error”", "Before “fix it”"], ["spell-check", "“Show my mistakes”", "Not just the fixed version"], ["languages", "“Translate and explain”", "Learn the words"]] }
    },
    TM(5, "Code and English", {
      prompt: "Your code shows an error you don’t understand. Best first step with AI?",
      options: ["Paste the error and ask AI to explain what it means and why it happened", "Ask AI to rewrite your whole project", "Delete the code", "Copy random code from the internet"], answer: 0,
      hint: "Understand first, fix second.",
      note: "Explaining the error teaches you to fix it next time on your own.", badge: "code"
    }),
    TM(5, "Code and English", {
      prompt: "You want your English email to sound professional AND improve your English. Best ask?",
      options: ["“Fix it” and send", "“Fix my email and list the mistakes you corrected, with why”", "“Make it longer”", "“Write a new one”"], answer: 1,
      hint: "Which one teaches you something?",
      note: "Seeing your mistakes explained is how your own English improves.", badge: "mail"
    }),
    TM(5, "Code and English", {
      prompt: "You’re in a lab exam where AI isn’t allowed. Best tool?",
      options: ["A hidden AI app", "Your friend’s phone", "Your own brain and practice", "A smartwatch"], answer: 2,
      hint: "Read the question again.",
      note: "Rules are rules. Practise with AI before the exam so you can do it without AI during it.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Mixed match (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: the smartest choice is sometimes no AI at all.",
      points: [["Live facts", "Official sites: results, timetables, prices, rules"], ["Private things", "Passwords, OTPs, ID numbers, health records"], ["Skills you must build", "Practise yourself; use AI as a coach, not a replacement"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["wrench", "Mixed tasks", "Pick the right tool"], ["award", "Then your toolbox level", "How smart is your team?"]] }
    },
    TM(6, "Mixed Match", {
      double: true,
      prompt: "You want to check your semester results. Best tool?",
      options: ["An AI chat", "An AI image tool", "An AI slide maker", "Your university’s official results website"], answer: 3,
      hint: "Who has your actual marks?",
      note: "AI doesn’t know your marks. Official websites only.", badge: "landmark"
    }),
    TM(6, "Mixed Match", {
      double: true,
      prompt: "You’re preparing for a placement interview next week. Best combination?",
      options: ["AI chat for mock interview questions and feedback, plus the company’s official careers page for the role details", "Only a poster tool", "Only AI memory for company details", "No preparation"], answer: 0,
      hint: "Practice + real facts.",
      note: "Use AI for practice, official sources for facts. That combo wins.", badge: "briefcase"
    }),
    TM(6, "Mixed Match", {
      double: true,
      prompt: "A website says “Give us your email password and our AI will sort your inbox.” Best choice?",
      options: ["Give it, it’s AI", "Give it, but change the password later", "Don’t. Never type your password into an unknown site, AI or not", "Ask a friend to give theirs instead"], answer: 2,
      hint: "Would you give your house key to a stranger?",
      note: "“AI” doesn’t make a website safe. Official apps and permissions only, never your password.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: one task this week, and which tool type you’ll use for it.", note: "Make it real. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Your AI Toolbox: 8 Jobs, 8 Tools", note: "Screenshot this. Pick the right tool before you open an app.", items: TOOLBOX },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "AI games, coding challenges and real projects every week. Learn to use AI the smart way.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
