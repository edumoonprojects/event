// Tense Tamer (EduMoon English Club). For all years.
// The tense mistakes students make most in interviews, emails and daily talk, fixed in real sentences.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const TT = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 35, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the wrong sentence" questions use the bug door.
const WRONG = { kind: "bug", time: 60, step1: "What’s the mistake?", step2: "Tap the wrong sentence", say1: "First pick the mistake.", say2: "Now tap the wrong sentence.", partO: "the mistake", partL: "the sentence", lineLabel: "sentence", bugLabel: "The wrong sentence is" };

const FIXES = [
  ["I have two brothers", "Not “I am having two brothers.” Have, know, like, understand rarely take -ing."],
  ["I know Python", "Not “I am knowing Python.”"],
  ["I have been working here for 2 years", "Not “I am working here since 2 years.”"],
  ["I submitted it yesterday", "Not “I have submitted it yesterday.” A finished time takes the simple past."],
  ["Did you go?", "Not “Did you went?” After did, use the base verb."],
  ["I didn’t know", "Not “I didn’t knew.”"],
  ["When I reach, I’ll call you", "Not “When I will reach…” No “will” after when/if for the future."],
  ["I graduated in 2025", "Not “I am graduated in 2025.”"],
  ["since + a point, for + a length", "Since Monday, since 2024. For 3 days, for 2 years."],
  ["Have you ever…?", "For experiences with no exact time: “Have you ever used Git?”"]
];

window.GAME = {
  id: "tense-tamer",
  title: "Tense Tamer",
  club: "English Club",
  tagline: "“I am working here since 2 years.” Let’s fix that, forever.",
  art: window.STORY_ART,
  guide: {
    years: "All years · beginner to medium English", time: "35 minutes", level: "Beginner",
    about: "A few tense mistakes show up again and again in interviews, emails and daily talk. In 6 rounds, teams fix the most common ones: verbs that don’t take -ing, simple past with yesterday and did, since vs for and the present perfect, no “will” after when and if, and interview and email sentences. They spot the wrong sentence in short paragraphs and practise saying the right version aloud.",
    outcomes: "10 high-frequency tense fixes, the rules behind them in simple words, and more confident English in interviews and emails.",
    tone: "No shaming. These mistakes are extremely common, even among good speakers. After each reveal, the whole room says the correct sentence together once. That repetition is the real learning.",
    extra: [["Telugu bridge", "If a rule is confusing, explain it once in Telugu, then switch back to English examples."]]
  },
  words: {
    round: "Round", unlocked: "Correct version", badgeLabel: "Tamed",
    rulesEyebrow: "How Tense Tamer works", rulesTitle: "Read the sentence. Pick the right tense.",
    learnText: "The host explains one tense rule in simple words.", crackTitle: "Fix",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Wrong-sentence questions: <b>100</b> for the mistake + <b>100</b> for the sentence. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. It’s one of the most common mistakes in India!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "have tamed their tenses!", endLine: "Say it right, say it with confidence!"
  },
  offerEyebrow: "EduMoon English Club · Tense results",
  offerTitle: "Your English level",
  offers: [
    { min: 0.7, icon: "crown", title: "Tense Master", text: "Your tenses are interview-ready. Help a friend fix theirs." },
    { min: 0.45, icon: "languages", title: "Confident Speaker", text: "Strong! Practise since vs for in 3 sentences today." },
    { min: 0.2, icon: "message-circle", title: "Getting There", text: "Good start. Read the 10 fixes aloud once a day this week." },
    { min: 0, icon: "book-open", title: "Starting Out", text: "Everyone starts here. Save the 10 fixes and say them aloud." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Tense Tamer",
      title: "“I am having two brothers.” “I am working here since 2 years.” “When I will reach, I will call.” Sound familiar? Let’s tame them.",
      cards: [["languages", "The most common tense mistakes"], ["briefcase", "Interview and email sentences"], ["mic", "Say the right version aloud"]]
    },
    { type: "rules" },

    // ---------- Round 1: No -ing for state verbs ----------
    {
      type: "learn", door: 1,
      title: "Some verbs rarely take -ing.",
      points: [["State verbs", "have (own), know, like, want, understand, believe, need"], ["They describe a state", "Not an action happening now"], ["So", "“I have two brothers”, “I know Java”"]],
      highlightLast: true,
      side: { label: "Fixes", items: [["x", "I am having a laptop", ""], ["check", "I have a laptop", ""], ["check", "I am having lunch", "(an action, so -ing is fine)"]] }
    },
    TT(1, "State Verbs", {
      prompt: "Which sentence is correct?",
      options: ["I am have two brothers.", "I am having two brothers.", "I have two brothers.", "I having two brothers."], answer: 2,
      hint: "“Have” meaning own.",
      note: "“I have two brothers.” But “I’m having lunch” is fine, because that “have” is an action.", badge: "users"
    }),
    TT(1, "State Verbs", {
      prompt: "In an interview: “Do you know Python?” Best answer?",
      options: ["Yes, Python is knowing me.", "Yes, I knowing Python.", "Yes, I know Python and have built two projects with it.", "Yes, I am knowing Python."], answer: 2,
      hint: "Know is a state verb.",
      note: "“I know Python.” Add proof and it becomes a strong answer.", badge: "code"
    }),
    TT(1, "State Verbs", {
      prompt: "Which sentence is correct?",
      options: ["I am understanding your point.", "I understanding your point.", "I understand your point.", "I am understand your point."], answer: 2,
      hint: "Understand is a state verb.",
      note: "“I understand your point.” Simple and confident.", badge: "brain",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Simple past ----------
    {
      type: "learn", door: 2,
      title: "Finished actions with a past time: simple past.",
      points: [["Yesterday, last week, in 2024", "Use the simple past: submitted, went, saw"], ["With did / didn’t", "Use the base verb: Did you go? I didn’t know"], ["Not “have” + a finished time", "“I have seen him yesterday” is wrong"]],
      highlightLast: true,
      side: { label: "Fixes", items: [["x", "Did you went?", ""], ["check", "Did you go?", ""], ["check", "I didn’t know", ""]] }
    },
    TT(2, "Simple Past", {
      prompt: "Which question is correct?",
      options: ["Did you go to the workshop?", "Do you went to the workshop?", "Did you went to the workshop?", "Did you gone to the workshop?"], answer: 0,
      hint: "After did, the base verb.",
      note: "Did already shows the past, so the verb stays in its base form: go.", badge: "message-circle"
    }),
    TT(2, "Simple Past", {
      prompt: "Which sentence is correct?",
      options: ["I am submitted the record yesterday.", "I submit the record yesterday.", "I have submitted the record yesterday.", "I submitted the record yesterday."], answer: 3,
      hint: "Yesterday is a finished time.",
      note: "With yesterday, use the simple past: submitted.", badge: "file-text"
    }),
    TT(2, "Simple Past", {
      prompt: "Which sentence is correct?",
      options: ["Sorry, I didn’t know about the deadline.", "Sorry, I not knew about the deadline.", "Sorry, I didn’t knew about the deadline.", "Sorry, I don’t knew about the deadline."], answer: 0,
      hint: "After didn’t, the base verb.",
      note: "“I didn’t know.” Same rule as “Did you go?”", badge: "clock",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Since, for and the present perfect ----------
    {
      type: "learn", door: 3,
      title: "Since, for, and actions that continue to now.",
      points: [["Started in the past and still true", "have been + -ing, or have + past participle"], ["for + a length of time", "for 2 years, for 3 months"], ["since + a starting point", "since 2024, since Monday"]],
      highlightLast: true,
      side: { label: "The big fix", items: [["x", "I am working here since 2 years", ""], ["check", "I have been working here for 2 years", ""], ["check", "…since 2024", ""]] }
    },
    TT(3, "Since and For", {
      prompt: "Which sentence is correct?",
      options: ["I was learning coding since 2 years.", "I have been learning coding for 2 years.", "I learning coding since 2 years.", "I am learning coding since 2 years."], answer: 1,
      hint: "Started in the past, still going, length of time.",
      note: "“I have been learning coding for 2 years.” One of the most useful fixes for interviews.", badge: "code"
    }),
    TT(3, "Since and For", {
      prompt: "Fill in: “I have been in the coding club ___ last August.”",
      options: ["from since", "since", "during", "for"], answer: 1,
      hint: "Last August is a starting point.",
      note: "since + a starting point. for + a length of time.", badge: "clock"
    }),
    TT(3, "Since and For", {
      prompt: "Interviewer asks about your experience. Which question is correct?",
      options: ["Have you ever use Git?", "Are you ever used Git?", "Have you ever used Git?", "Did you ever used Git?"], answer: 2,
      hint: "Experience, no exact time.",
      note: "“Have you ever used…?” Answer: “Yes, I’ve used it for my mini-project.”", badge: "briefcase",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say one sentence about yourself with “for” and one with “since”.", note: "Example: “I have lived in Vizag for 3 years.” 20 seconds.", points: 100 },

    // ---------- Round 4: Future and when/if ----------
    {
      type: "learn", door: 4,
      title: "No “will” after when or if, for the future.",
      points: [["When I reach, I’ll call", "Not “When I will reach”"], ["If it rains, we’ll cancel", "Not “If it will rain”"], ["Plans", "“I’m going to apply”, “I’m meeting her at 5”"]],
      highlightLast: true,
      side: { label: "Fixes", items: [["x", "When I will finish…", ""], ["check", "When I finish, I’ll send it", ""], ["check", "If I get the job, I’ll move", ""]] }
    },
    TT(4, "Future", {
      prompt: "Which sentence is correct?",
      options: ["When I will reach home, I will call you.", "When I reached home, I will call you.", "When I reach home, I will call you.", "When I reaching home, I will call you."], answer: 2,
      hint: "No “will” after when.",
      note: "“When I reach home, I’ll call you.” The “will” goes in the other half.", badge: "smartphone"
    }),
    TT(4, "Future", {
      prompt: "Which sentence is correct?",
      options: ["If I get the internship, I will move to Hyderabad.", "If I got the internship, I will move to Hyderabad.", "If I getting the internship, I move to Hyderabad.", "If I will get the internship, I will move to Hyderabad."], answer: 0,
      hint: "No “will” after if.",
      note: "“If I get…, I will…” Present after if, will in the result.", badge: "briefcase"
    }),
    TT(4, "Future", Object.assign({}, WRONG, {
      prompt: "A message to a friend about plans. Which sentence is wrong?",
      code: ["I’m going to apply for the summer internship.", "I’m meeting the HR on Friday at 4.", "When I will finish the interview, I will text you.", "If they select me, I’ll treat you."],
      outputOptions: ["Nothing, all are correct", "No “will” after when: it should be “When I finish the interview”", "It should be “I am meet the HR”"], outputAnswer: 1, bugLine: 2,
      bugText: "“When I finish the interview, I’ll text you.”",
      hint: "Look after “when”.",
      note: "Three correct future forms and one classic slip.", badge: "message-circle",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Interview sentences ----------
    {
      type: "learn", door: 5,
      title: "Interview sentences that sound confident.",
      points: [["Your study now", "“I’m in my 3rd year of BTech”, “I’m pursuing a BTech in ECE”"], ["Finished", "“I graduated in 2025”, “I completed an internship at…”"], ["Ongoing", "“I have been learning React for 6 months”"]],
      highlightLast: true,
      side: { label: "Fixes", items: [["x", "I am graduated in 2025", ""], ["check", "I graduated in 2025", ""], ["check", "I have completed 2 projects", ""]] }
    },
    TT(5, "Interview English", {
      prompt: "Which sentence is correct?",
      options: ["I have graduated in 2025 from Andhra University.", "I am graduated in 2025 from Andhra University.", "I graduating in 2025 from Andhra University.", "I graduated from Andhra University in 2025."], answer: 3,
      hint: "A finished event with a year.",
      note: "“I graduated in 2025.” Finished, with a year, so simple past.", badge: "graduation-cap"
    }),
    TT(5, "Interview English", Object.assign({}, WRONG, {
      prompt: "A student’s “Tell me about yourself”. Which sentence is wrong?",
      code: ["I’m a 3rd-year CSE student at AU.", "I have been learning web development for a year.", "I am having good knowledge of HTML and CSS.", "Last semester, I built a CGPA calculator."],
      outputOptions: ["“Last semester” should be “last semester ago”", "Nothing, all are correct", "“Have” for knowledge is a state verb: say “I have good knowledge of…”"], outputAnswer: 2, bugLine: 2,
      bugText: "“I have good knowledge of HTML and CSS.” Or even better: “I’m comfortable with HTML and CSS.”",
      hint: "Remember Round 1.",
      note: "Great answer, one slip. Fix it and the whole answer sounds polished.", badge: "user"
    })),
    TT(5, "Interview English", {
      prompt: "“What are you doing currently?” Best answer?",
      options: ["I doing project.", "I am do final year.", "I’m in my final year and I’m building a project on attendance tracking.", "Currently I am doing nothing."], answer: 2,
      hint: "Present continuous for what’s happening now.",
      note: "Present continuous (“I’m building…”) is perfect for current activities.", badge: "code",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Emails and mixed (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: emails and mixed. Double points!",
      points: [["Attaching", "“I have attached my resume” or “Please find my resume attached”"], ["Following up", "“I applied last week and wanted to follow up”"], ["Still anyone’s game", "Double points"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Anyone can still win"], ["mail", "Email sentences", ""], ["award", "Then your level", ""]] }
    },
    TT(6, "Emails", {
      double: true,
      prompt: "Which email line is correct?",
      options: ["I was attach my resume.", "I have attached my resume for your reference.", "I am attaching my resume yesterday.", "I attach my resume since yesterday."], answer: 1,
      hint: "Done just now, result is here.",
      note: "“I have attached my resume.” Simple and professional.", badge: "mail"
    }),
    TT(6, "Emails", {
      double: true,
      prompt: "Which follow-up line is correct?",
      options: ["I apply for the role last Monday.", "I am applied for the role last Monday.", "I applied for the role last Monday and wanted to follow up.", "I have applied for the role last Monday."], answer: 2,
      hint: "Last Monday is a finished time.",
      note: "“I applied … last Monday.” Finished time, simple past.", badge: "clock"
    }),
    TT(6, "Emails", Object.assign({}, WRONG, {
      double: true,
      prompt: "A leave email to a professor. Which sentence is wrong?",
      code: ["Dear Sir, I am writing to request leave on Friday.", "My sister’s wedding is on that day.", "I have completed my record work already.", "I will submit the assignment when I will return."],
      outputOptions: ["Nothing, all are correct", "The first sentence is too formal", "No “will” after when: “when I return”"], outputAnswer: 2, bugLine: 3,
      bugText: "“I will submit the assignment when I return.”",
      hint: "Round 4’s rule.",
      note: "A polished email with one fixable slip. Now you’ll catch it every time.", badge: "spell-check",
      board: true, boardLabel: "after Round 6"
    })),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: introduce yourself for an interview using “for” or “since”, a simple past, and a present continuous.", note: "The room listens for slips. The host picks the smoothest intro.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Tense Fixes to Use Forever", note: "Screenshot this. Read it aloud once a day this week.", items: FIXES },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, English practice and fun every week. Talk confidently with your college friends.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
