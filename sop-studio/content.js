// SOP Studio (EduMoon English Club). Advanced: for 3rd and final year planning higher studies in India or abroad.
// Writing a strong Statement of Purpose: what readers look for, openings, evidence, why this programme, goals and gaps, and final polish.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const SP = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const SPN = (round, name, extra) => SP(round, name, Object.assign({ kind: "number", time: 50 }, extra));
const SPOTLINE = { kind: "bug", time: 60, step1: "What is the problem?", step2: "Tap the weakest line", say1: "First pick the problem.", say2: "Now tap the weakest line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weakest line is" };

// The take-home card: the SOP checklist.
const SOPCARD = [
  ["Answer three questions", "Why this field, why this programme, why you, and why now."],
  ["Open with something real", "A specific moment or problem, not “Since childhood…”."],
  ["Evidence over adjectives", "Projects, numbers, what you did and learned. Not “passionate” and “hardworking”."],
  ["Why this programme", "Name courses, labs or research areas that fit your goals. Check them on the official site."],
  ["Goals that connect", "Short-term and long-term goals that follow from your past and this course."],
  ["Gaps, briefly", "A low semester or a gap year: one or two honest lines, with what changed."],
  ["Follow the instructions", "Word limit, prompts and format from each university."],
  ["Your own words", "Templates and copied text are easy to spot. AI can help you check, not write your story."]
];

window.GAME = {
  id: "sop-studio",
  title: "SOP Studio",
  club: "English Club",
  tagline: "Your Statement of Purpose is your voice in the admission room. Make it count.",
  art: window.STORY_ART,
  guide: {
    years: "3rd and final year (anyone planning a master’s in India or abroad)", time: "45 minutes", level: "Advanced",
    about: "Ananya is applying for a master’s in data science. Her first SOP starts with “Since childhood I have been fascinated by computers” and lists 12 adjectives. In 6 rounds, teams learn what admission readers look for, how to open, how to show evidence, how to explain why this programme, how to connect goals and address gaps honestly, and how to polish the final draft. Teams pick the strongest lines and find the weakest ones.",
    outcomes: "A clear SOP structure, strong and specific writing, how to handle low marks or gaps, and why your own voice matters more than a template.",
    tone: "SOPs feel high-stakes and personal. Keep feedback gentle and practical. Point out that most first drafts are weak; rewriting is the real work. Invite students to share one real line from their own draft.",
    extra: [["Not just abroad", "The same skills help with Indian M.Tech and MBA interviews, scholarship essays and fellowship applications."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Polished",
    rulesEyebrow: "How SOP Studio works", rulesTitle: "Learn what readers want. Pick the strongest line. Rewrite.",
    learnText: "The host explains one part of a strong SOP.", crackTitle: "Edit",
    crackText: "Pick the best line or find the weakest one, and lock it in.",
    rulesExtra: "Find-the-weak-line questions: <b>100</b> + <b>100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Admission readers see this mistake daily!", cracked: "polished it",
    next: "Next round →", finale: "Next →", winner: "write SOPs that get read!", endLine: "Ananya’s SOP sounds like her now."
  },
  offerEyebrow: "EduMoon English Club · Admission decision",
  offerTitle: "Your admission decision",
  offers: [
    { min: 0.7, icon: "graduation-cap", title: "Admit with Scholarship", text: "You write with evidence and voice. Draft your SOP this month." },
    { min: 0.45, icon: "badge-check", title: "Admit", text: "Strong! Rewrite your opening using a real moment." },
    { min: 0.2, icon: "clock", title: "Waitlisted", text: "Good start. Replace every adjective with one piece of evidence." },
    { min: 0, icon: "book-open", title: "Reapply Next Cycle", text: "Everyone starts here. Read the checklist below before writing." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Application season",
      title: "Ananya’s SOP begins, “Since childhood I have been fascinated by computers,” and calls her “passionate” six times. The deadline is in three weeks. Can your team fix it?",
      cards: [["file-text", "What readers look for"], ["pen-tool", "Openings, evidence, goals and gaps"], ["trophy", "Your score decides the admission decision"]]
    },
    { type: "rules" },

    // ---------- Round 1: What readers look for ----------
    {
      type: "learn", door: 1,
      title: "An SOP answers: why this, why you, why now?",
      points: [["Why this field and programme", "What exactly you want to study, and why here"], ["Why you", "Proof you are ready: projects, work, courses"], ["Why now", "How it fits the step you are at in life"]],
      highlightLast: true,
      side: { label: "Readers are checking", items: [["target", "Clarity", "Do you know what you want?"], ["badge-check", "Readiness", "Can you handle the course?"], ["users", "Fit", "Will you add to the programme?"]] }
    },
    SP(1, "What Readers Want", {
      prompt: "What is an SOP mainly for?",
      options: ["Repeating your marks and certificates in sentences", "Proving you have the best English in your class", "Showing goals, readiness and fit", "Telling your whole life story from birth"], answer: 2,
      hint: "Why this, why you, why now.",
      note: "It explains your direction and proves you are ready, in your own voice. Marks are already in your transcript.", badge: "target"
    }),
    SP(1, "What Readers Want", {
      prompt: "An admission reader may see hundreds of SOPs. What makes one stand out?",
      options: ["Long words from a thesaurus", "Experiences only they have", "Famous quotes at the start", "Very long paragraphs"], answer: 1,
      hint: "What can no other applicant write?",
      note: "Your specific projects, problems and lessons. Generic lines blend into the pile.", badge: "star"
    }),
    SPN(1, "What Readers Want", {
      prompt: "A university asks for “no more than 1,000 words”. Ananya’s draft is 1,350 words. How many words must she cut at least?",
      answer: 350,
      hint: "1,350 − 1,000.",
      note: "350 words. Always follow the stated limit. Cutting weak lines usually makes the SOP stronger.", badge: "pen-tool",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Openings ----------
    {
      type: "learn", door: 2,
      title: "Open with a real moment, not a cliché.",
      points: [["Avoid", "“Since childhood…”, “In today’s fast-paced world…”, a famous quote"], ["Use", "A specific moment, problem or question that started your interest"], ["Connect quickly", "Link it to the field within a few lines"]],
      highlightLast: true,
      side: { label: "Weak vs strong", items: [["x", "“Since childhood I loved computers.”", "Everyone writes this"], ["check", "“Our hostel mess wasted 40 kg of rice a night. I wanted to predict it.”", "Specific"], ["check", "Then: “That question led me to data science.”", "Connected"]] }
    },
    SP(2, "Openings", {
      prompt: "Which opening is strongest for a data science SOP?",
      options: ["“Since childhood, I have been fascinated by computers and technology.”", "“In today’s fast-paced world, data is the new oil, as everyone says.”", "“As a famous scientist once said, the important thing is to never stop questioning.”", "“When our hostel mess wasted 40 kg of food nightly, I built a model to predict it.”"], answer: 3,
      hint: "Specific and real.",
      note: "A real problem she worked on. It is memorable and leads straight into her story.", badge: "sparkles"
    }),
    SP(2, "Openings", {
      prompt: "Why do admission readers dislike “Since childhood…” openings?",
      options: ["They are common and say little", "They are grammatically wrong", "Childhood is too personal", "They are always too long"], answer: 0,
      hint: "How many SOPs start that way?",
      note: "So many SOPs use it that it becomes invisible. A real recent moment says more.", badge: "x"
    }),
    SP(2, "Openings", Object.assign({}, SPOTLINE, {
      prompt: "Ananya’s opening paragraph. Which line weakens it most?",
      code: ["During my third year, I noticed our college bus routes left 200 students waiting daily.", "I collected GPS data for a month and built a simple model to suggest new timings.", "I am a very passionate, hardworking, dedicated and sincere student.", "That project showed me how data can change everyday decisions."],
      outputOptions: ["Empty adjectives with no evidence", "It is too specific", "It uses the wrong tense"], outputAnswer: 0, bugLine: 2,
      bugText: "four adjectives that every applicant uses. The project already proves them",
      hint: "Which line could be in anyone’s SOP?",
      note: "Show, don’t claim. The bus project already shows she is passionate and hardworking.", badge: "pen-tool",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: Evidence ----------
    {
      type: "learn", door: 3,
      title: "Every claim needs evidence.",
      points: [["What you did", "Your own part, not just “we”"], ["How", "Tools, methods and choices"], ["What you learned", "And what you would do differently"]],
      highlightLast: true,
      side: { label: "Upgrade a claim", items: [["x", "“I am good at machine learning.”", "Claim"], ["check", "“I built a model that cut bus waiting time by 18% in testing.”", "Evidence"], ["check", "“I learned that clean data mattered more than the algorithm.”", "Reflection"]] }
    },
    SP(3, "Evidence", {
      prompt: "Which sentence gives the strongest evidence?",
      options: ["“I have a deep interest in machine learning and its many applications.”", "“I have completed many online courses in data science and AI.”", "“My professors always say I am a very good student in class.”", "“My bus-data model cut test wait times by 18%.”"], answer: 3,
      hint: "What did she actually do, and what happened?",
      note: "A specific action and a measured result. The reader can picture her work.", badge: "chart-column"
    }),
    SP(3, "Evidence", {
      prompt: "Why include what you learned, not just what you did?",
      options: ["It makes the SOP longer", "It shows you reflect and grow", "Universities require a lessons section", "It hides weak results"], answer: 1,
      hint: "Graduate study is about learning.",
      note: "Reflection shows maturity and readiness for research-style learning.", badge: "lightbulb"
    }),
    SP(3, "Evidence", {
      prompt: "Ananya did a group project. How should she describe it?",
      options: ["Name the team’s work and hers", "Say she did everything alone", "Only say “we” throughout", "Leave the project out"], answer: 0,
      hint: "Honest and specific.",
      note: "Credit the team and name her own part clearly. Readers value honesty and teamwork.", badge: "users",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Turn one claim about yourself into evidence: what you did, how, and the result.", note: "No adjectives allowed. 20 seconds.", points: 100 },

    // ---------- Round 4: Why this programme ----------
    {
      type: "learn", door: 4,
      title: "Show you chose this programme for real reasons.",
      points: [["Be specific", "Courses, labs, research areas or projects that match your goals"], ["Check official pages", "Make sure what you mention exists and is current"], ["Customise each SOP", "Never send the same one with only the name changed"]],
      highlightLast: true,
      side: { label: "Weak vs strong", items: [["x", "“Your university is world-famous.”", "Generic"], ["check", "“The applied ML for public transport course fits my bus project.”", "Specific (if it really exists)"], ["x", "Wrong university name left in", "An instant rejection risk"]] }
    },
    SP(4, "Why This Programme", {
      prompt: "Which “why this programme” line is strongest?",
      options: ["“Your university has a beautiful campus and good weather.”", "“Your university is ranked very high in the world.”", "“My cousin studied there and liked it.”", "A named course or lab that connects to her own project"], answer: 3,
      hint: "Specific and connected to her goals.",
      note: "Naming a real course or research area that fits her work shows genuine fit.", badge: "target"
    }),
    SP(4, "Why This Programme", {
      prompt: "Ananya applies to 6 universities. What should she do with her SOP?",
      options: ["Customise the fit part", "Send the same text to all six", "Only change the university name", "Write one paragraph for all"], answer: 0,
      hint: "Readers can tell.",
      note: "The core story can stay, but the fit section must be written for each programme.", badge: "list-checks"
    }),
    SP(4, "Why This Programme", Object.assign({}, SPOTLINE, {
      prompt: "Part of her SOP for “Coastal State University” (a made-up name). Which line is a serious mistake?",
      code: ["Coastal State’s course on transport analytics matches my bus project.", "I would like to work with the urban mobility research group.", "That is why Northfield University is my first choice.", "I hope to build tools that help Indian cities plan better."],
      outputOptions: ["The wrong university name, copied from another SOP", "It mentions a research group", "It is too short"], outputAnswer: 0, bugLine: 2,
      bugText: "another university’s name was left in. Proofread every SOP separately",
      hint: "Read the names carefully.",
      note: "A wrong university name tells the reader the SOP was copied. It is one of the most common and costly mistakes.", badge: "x",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Goals and gaps ----------
    {
      type: "learn", door: 5,
      title: "Connect your goals, and address gaps briefly and honestly.",
      points: [["Short-term goal", "What you want to do right after the course"], ["Long-term goal", "The bigger direction, connected to your story"], ["Gaps", "One or two honest lines and what changed. No long excuses"]],
      highlightLast: true,
      side: { label: "A gap, handled well", items: [["check", "“My third-semester grades dropped due to a family illness.”", "Honest, brief"], ["check", "“I recovered with a 9.1 GPA over the next three semesters.”", "What changed"], ["x", "A full page of excuses", "Draws attention to the gap"]] }
    },
    SP(5, "Goals and Gaps", {
      prompt: "Which goal statement is strongest?",
      options: ["“Build transport data tools, starting as an analyst.”", "“To become rich and successful in life.”", "“To do whatever comes my way.”", "“To get a good job abroad somehow.”"], answer: 0,
      hint: "Specific and connected to her story.",
      note: "It follows from her bus project and the course. Readers see a clear path.", badge: "route"
    }),
    SP(5, "Goals and Gaps", {
      prompt: "Ananya had one weak semester. What should she do?",
      options: ["Hide it and hope they miss it", "Write a full page of reasons", "Brief note plus recovery", "Blame her professors"], answer: 2,
      hint: "Readers see the transcript anyway.",
      note: "A short, honest note with evidence of recovery turns a weakness into a sign of resilience.", badge: "heart"
    }),
    SP(5, "Goals and Gaps", {
      prompt: "She worked for two years before applying. How should she use it?",
      options: ["Leave it out completely", "Show how work shaped her goals", "Apologise for the delay", "Only list the company name"], answer: 1,
      hint: "Work is evidence too.",
      note: "Work experience can strengthen “why now” and “why you”. Connect it to the course.", badge: "briefcase",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Polish (double) ----------
    {
      type: "learn", door: 6,
      title: "Polish: your words, the right length, zero careless errors.",
      points: [["Your own voice", "Templates and AI-written stories sound the same as everyone else"], ["Follow every instruction", "Word limits, prompts and format"], ["Proofread three ways", "Read aloud, read backwards for typos, ask one honest reader"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "Honesty and polish", "The last 10%"], ["mic", "Then the final challenge", "Your opening line"]] }
    },
    SP(6, "Polish", {
      double: true,
      prompt: "A friend offers a “top SOP template” with blanks for names. What should Ananya do?",
      options: ["Fill in the blanks and submit", "Copy a senior’s SOP and change details", "Write her own story", "Ask AI to write the whole SOP"], answer: 2,
      hint: "Readers see the same templates every year.",
      note: "Structure can be learned from guides, but the story must be hers. Copied or generic SOPs are easy to spot.", badge: "shield"
    }),
    SP(6, "Polish", {
      double: true,
      prompt: "How can AI tools help with an SOP in an honest way?",
      options: ["Invent projects she never did", "Write the whole SOP from scratch", "Check grammar in her draft", "Copy text from other SOPs"], answer: 2,
      hint: "Helping vs replacing.",
      note: "AI can help check grammar and clarity in her own writing. The ideas and experiences must be real and hers. Check each university’s policy.", badge: "bot"
    }),
    SP(6, "Polish", {
      double: true,
      prompt: "The SOP is done. What is the best final check?",
      options: ["Submit immediately at midnight", "Read aloud, check names, get a reader", "Check only the first paragraph", "Make the font smaller to fit more"], answer: 1,
      hint: "Three ways of checking.",
      note: "Reading aloud catches awkward lines, checks catch costly errors, and an honest reader catches what you cannot see.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, decision, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best opening wins +200", prompt: "Say the opening two lines of your own SOP: a real moment, then how it led to your field.", note: "No “Since childhood”. Specific and true. The host picks.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "SOP Checklist", note: "Screenshot this. Use it for every draft.", items: SOPCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
