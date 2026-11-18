// GATE, CAT or GRE? (EduMoon Skills Club). For 2nd year onwards.
// The big exams after graduation: which exam leads where (M.Tech and PSUs, MBA, MS abroad, government jobs), what each tests, timelines, and how to choose by goal instead of peer pressure.
// Exam details are general and can change; students should always check the official website for the current year.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const GX = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const GXN = (round, name, extra) => GX(round, name, Object.assign({ kind: "number", time: 50 }, extra));

// The take-home card: which exam leads where.
const EXAMMAP = [
  ["GATE", "M.Tech or ME in India, some PSU jobs. Engineering subject knowledge. Score valid 3 years."],
  ["CAT", "MBA at IIMs and many B-schools. Verbal, reasoning and maths. Usually in November."],
  ["GRE", "MS and some other programmes abroad. Verbal, maths and writing. Many universities now make it optional."],
  ["IELTS / TOEFL", "English test for studying abroad. Scores valid 2 years."],
  ["GMAT", "MBA abroad and some Indian schools."],
  ["UPSC CSE", "IAS, IPS and more. Prelims, mains and interview. Long preparation."],
  ["Bank, SSC, state PSC", "Government jobs with their own exams, like IBPS, SSC CGL and APPSC."],
  ["Always check", "Dates, patterns and rules change. Use only the official website for the current year."]
];

window.GAME = {
  id: "gate-cat-or-gre",
  title: "GATE, CAT or GRE?",
  club: "Skills Club",
  tagline: "M.Tech, MBA, MS abroad or a government job. Which exam leads where?",
  art: window.STORY_ART,
  guide: {
    years: "2nd year onwards", time: "40 minutes", level: "Medium",
    about: "Final-year student Harish hears “Write GATE!”, “No, CAT!”, “Go abroad, write GRE!” from everyone around him. In 6 rounds, teams learn which exam leads where, what GATE, CAT and GRE test, the English tests for abroad, the main government job exams, and how to choose by goal and timeline instead of peer pressure. Details are general; students should always check official websites for the current year.",
    outcomes: "A clear map of the major exams after graduation, what each one tests and leads to, rough timelines, and a simple way to choose.",
    tone: "Many students write exams because friends are writing them. Encourage them to start from what they want to do in 5 years. Respect every path, including jobs straight after college.",
    extra: [["Check official sites", "Exam dates, patterns and eligibility change every year. Remind students to use only official websites for the latest details."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Mapped",
    rulesEyebrow: "How GATE, CAT or GRE? works", rulesTitle: "Learn the exam. Match it to the goal. Choose your path.",
    learnText: "The host explains one exam or path.", crackTitle: "Choose",
    crackText: "Pick the best answer on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many final years mix these up too!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "have their career map ready!", endLine: "Harish chose his exam by his goal."
  },
  offerEyebrow: "EduMoon Skills Club · Career clarity",
  offerTitle: "Your career clarity",
  offers: [
    { min: 0.7, icon: "compass", title: "Clear Path", text: "You know where each road leads. Write your 5-year goal and pick one exam." },
    { min: 0.45, icon: "map", title: "Map Reader", text: "Strong! Visit the official site of the exam you like most this week." },
    { min: 0.2, icon: "route", title: "Path Finder", text: "Good start. Talk to one senior who wrote the exam you are curious about." },
    { min: 0, icon: "book-open", title: "Explorer", text: "Everyone starts here. Play Life After BTech: Career Map next." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Too many voices",
      title: "Harish’s friends say “GATE!”, his cousin says “CAT!”, and his neighbour says “GRE, go abroad!” He is confused. Can your team help him choose by his goal?",
      cards: [["map", "Which exam leads where"], ["compass", "Timelines and how to choose"], ["trophy", "Your score decides your career clarity"]]
    },
    { type: "rules" },

    // ---------- Round 1: The map ----------
    {
      type: "learn", door: 1,
      title: "Start from the goal, then pick the exam.",
      points: [["Higher studies in India", "GATE for M.Tech, CAT for MBA"], ["Study abroad", "GRE or GMAT, plus IELTS or TOEFL"], ["Government jobs", "UPSC, state PSC, bank, SSC and PSU routes"]],
      highlightLast: true,
      side: { label: "Goal → exam", items: [["graduation-cap", "M.Tech at an IIT", "GATE"], ["briefcase", "MBA at an IIM", "CAT"], ["globe", "MS in the US", "GRE (if required) + TOEFL or IELTS"]] }
    },
    GX(1, "The Map", {
      prompt: "Harish wants an MBA from an IIM. Which exam?",
      options: ["GATE", "GRE", "CAT", "UPSC"], answer: 2,
      hint: "The IIMs run it.",
      note: "CAT is the main entrance for IIM MBA programmes, and many other B-schools also accept it.", badge: "briefcase"
    }),
    GX(1, "The Map", {
      prompt: "Divya wants an M.Tech in VLSI at an IIT or NIT. Which exam?",
      options: ["CAT", "GRE", "GATE", "IELTS"], answer: 2,
      hint: "It tests engineering subjects.",
      note: "GATE. It tests your branch subjects and is the main route to M.Tech in India.", badge: "graduation-cap"
    }),
    GX(1, "The Map", {
      prompt: "Karthik wants an MS in Computer Science in the US. Which combination is most typical?",
      options: ["GRE and TOEFL or IELTS", "GATE and CAT together", "UPSC and SSC exams", "CAT and IELTS only"], answer: 0,
      hint: "An academic test and an English test.",
      note: "Many US universities ask for TOEFL or IELTS, and some still want the GRE. Check each university’s page.", badge: "globe",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: GATE ----------
    {
      type: "learn", door: 2,
      title: "GATE: your branch knowledge, tested deeply.",
      points: [["Tests", "Engineering maths, aptitude and your branch subjects"], ["Leads to", "M.Tech and ME admissions, and some PSU jobs"], ["Score validity", "3 years, so you can use one good score for a while"]],
      highlightLast: true,
      side: { label: "Good to know", items: [["landmark", "Organised by", "IISc and IITs, in rotation"], ["clock", "Usually held", "Early in the year"], ["briefcase", "PSUs", "Some public sector companies hire using GATE scores"]] }
    },
    GXN(2, "GATE", {
      prompt: "For how many years is a GATE score valid?",
      answer: 3,
      hint: "More than one, less than five.",
      note: "3 years. Some students write it in final year and use the score after working for a year or two.", badge: "clock"
    }),
    GX(2, "GATE", {
      prompt: "What does GATE mainly test?",
      options: ["Your English essay writing", "Business case studies", "Current affairs and history", "Your engineering branch subjects"], answer: 3,
      hint: "It is for engineering postgraduate study.",
      note: "Branch subjects, plus engineering maths and general aptitude. Strong basics from your degree matter most.", badge: "wrench"
    }),
    GX(2, "GATE", {
      prompt: "Apart from M.Tech admissions, what else can a good GATE score lead to?",
      options: ["An IIM MBA seat", "Some PSU jobs", "A US visa", "An IAS post"], answer: 1,
      hint: "Public sector companies.",
      note: "Several public sector undertakings use GATE scores in their hiring. Check each PSU’s notice.", badge: "landmark",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: CAT ----------
    {
      type: "learn", door: 3,
      title: "CAT: the gateway to MBA at the IIMs.",
      points: [["Sections", "Verbal and reading, data and reasoning, quantitative aptitude"], ["Usually held", "In November, run by one of the IIMs"], ["Not just marks", "Interviews, academics and sometimes work experience also count"]],
      highlightLast: true,
      side: { label: "Myths", items: [["x", "“Only commerce students can crack CAT.”", "Engineers write it in large numbers"], ["x", "“You need work experience first.”", "Not required to apply"], ["check", "Reading habit", "Helps the verbal section a lot"]] }
    },
    GX(3, "CAT", {
      prompt: "Which of these is NOT a CAT section?",
      options: ["Verbal and reading comprehension", "Data interpretation and logical reasoning", "Engineering branch subjects", "Quantitative aptitude"], answer: 2,
      hint: "CAT is for all graduates.",
      note: "CAT does not test engineering subjects. It tests reading, reasoning and maths.", badge: "x"
    }),
    GX(3, "CAT", {
      prompt: "Harish asks, “Do I need work experience to apply for CAT?” Best answer?",
      options: ["Yes, at least 5 years", "No, freshers can apply too", "Only if you are from commerce", "Only government employees can apply"], answer: 1,
      hint: "Final-year students write it.",
      note: "Work experience is not required to apply. Some schools value it in selection, so it can help.", badge: "check"
    }),
    GX(3, "CAT", {
      prompt: "What habit helps most with CAT’s verbal section?",
      options: ["Reading articles daily", "Memorising formulas", "Solving circuits", "Learning a new programming language"], answer: 0,
      hint: "Reading comprehension.",
      note: "Daily reading of good articles builds speed and understanding. It cannot be crammed in a month.", badge: "book-open",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say what you want to be doing in 5 years, and which exam (or none) fits that goal.", note: "Goal first, exam second. 20 seconds.", points: 100 },

    // ---------- Round 4: Study abroad ----------
    {
      type: "learn", door: 4,
      title: "Going abroad: an academic test, an English test and a lot of planning.",
      points: [["GRE or GMAT", "Many universities now make the GRE optional; check each one"], ["IELTS or TOEFL", "English tests most universities require. Scores valid 2 years"], ["Start early", "Applications often close 8 to 12 months before the course begins"]],
      highlightLast: true,
      side: { label: "Plan for", items: [["file-text", "SOP and letters", "Statement of purpose, recommendations"], ["indian-rupee", "Costs", "Tests, applications, fees, living"], ["clock", "Timeline", "Tests in 3rd or early 4th year"]] }
    },
    GX(4, "Study Abroad", {
      prompt: "What do IELTS and TOEFL test?",
      options: ["English language skills", "Engineering subjects", "Business knowledge", "Coding ability"], answer: 0,
      hint: "For students from non-English-speaking countries.",
      note: "Reading, writing, listening and speaking in English. Most universities abroad ask for one of them.", badge: "languages"
    }),
    GXN(4, "Study Abroad", {
      prompt: "An IELTS score is valid for how many years?",
      answer: 2,
      hint: "Shorter than GATE.",
      note: "2 years, and the same for TOEFL. Plan the test close to your application time.", badge: "clock"
    }),
    GX(4, "Study Abroad", {
      prompt: "Karthik wants to start an MS in the US in a September intake. When should he usually start applying?",
      options: ["In July, just before the course", "After the course starts", "Five years before", "The previous autumn"], answer: 3,
      hint: "Applications close many months early.",
      note: "Most deadlines fall 8 to 12 months before the course. Tests should be done before that.", badge: "route",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Government jobs ----------
    {
      type: "learn", door: 5,
      title: "Government jobs have their own exams.",
      points: [["UPSC Civil Services", "IAS, IPS, IFS and more. Prelims, mains, interview"], ["State and other exams", "APPSC in Andhra, SSC CGL, bank exams like IBPS and SBI"], ["Long preparation", "Often a year or more of steady study"]],
      highlightLast: true,
      side: { label: "UPSC stages", items: [["list-checks", "Prelims", "Objective screening test"], ["pen-tool", "Mains", "Written papers"], ["users", "Interview", "Personality test"]] }
    },
    GXN(5, "Government Jobs", {
      prompt: "How many stages does the UPSC Civil Services exam have?",
      answer: 3,
      hint: "Prelims, mains, and…",
      note: "Three: prelims, mains and the interview (personality test).", badge: "landmark"
    }),
    GX(5, "Government Jobs", {
      prompt: "Which exam is run by the Andhra Pradesh government for state jobs?",
      options: ["CAT", "APPSC exams", "GRE", "GATE"], answer: 1,
      hint: "Public Service Commission.",
      note: "The Andhra Pradesh Public Service Commission runs Group exams for state government posts.", badge: "map"
    }),
    GX(5, "Government Jobs", {
      prompt: "A student wants a bank officer job. Which exams are most relevant?",
      options: ["GATE and GRE", "IBPS PO and SBI PO", "CAT and GMAT", "IELTS and TOEFL"], answer: 1,
      hint: "Banking exams.",
      note: "IBPS and SBI run exams for probationary officers and other bank posts.", badge: "landmark",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Choosing (double) ----------
    {
      type: "learn", door: 6,
      title: "Choose by goal, not by what friends are doing.",
      points: [["Ask: what do I want in 5 years?", "Research, management, abroad, government or a job now?"], ["Check fit", "Do you enjoy the subjects this path needs?"], ["One main plan, one backup", "Not five exams at once"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["compass", "Real choices", "Different students, different goals"], ["mic", "Then the final challenge", "Your own plan"]] }
    },
    GX(6, "Choosing", {
      double: true,
      prompt: "Harish loves electronics and wants to design chips. Which path fits best?",
      options: ["CAT because his cousin did", "UPSC because it is popular", "GRE only because friends are going", "GATE and M.Tech, or a core job"], answer: 3,
      hint: "Match the path to the interest.",
      note: "His interest is technical and deep, so GATE and M.Tech or a core job fit. Following others rarely ends well.", badge: "compass"
    }),
    GX(6, "Choosing", {
      double: true,
      prompt: "Sneha plans to write GATE, CAT, GRE, UPSC and bank exams in the same year. What is the problem?",
      options: ["Nothing, more is always better", "She will get all five easily", "Too many; she should focus", "Exams are all the same"], answer: 2,
      hint: "Each needs serious preparation.",
      note: "Each exam needs different preparation. One main plan and one backup works far better.", badge: "target"
    }),
    GX(6, "Choosing", {
      double: true,
      prompt: "Where should students check exam dates, patterns and eligibility?",
      options: ["The official exam website", "A random forwarded message", "A friend’s guess", "Last year’s poster"], answer: 0,
      hint: "Details change every year.",
      note: "Only official websites have the current year’s details. Forwarded messages are often outdated or wrong.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best plan wins +200", prompt: "In 30 seconds: your goal in 5 years, your main exam or path, a backup, and one step you will take this month.", note: "Goal, path, backup, first step. The host picks the clearest plan.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Which Exam Leads Where", note: "Screenshot this. Always check the official site for the current year.", items: EXAMMAP },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock interviews, resumes, internships and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
