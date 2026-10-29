// Desi English Fixer (EduMoon English Club). For all years.
// Everyday Indian English phrases that are fine with friends, and the clearer version for interviews, emails and global companies.
// Step types used: story · rules · learn · door · speak · match · wordlist · end
// Door kinds: "choice", and "bug" (pick the better version, then tap the wrong part of the sentence).

const R = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 35, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Tap the wrong part" questions use the bug door with friendlier labels.
const FIX = { kind: "bug", time: 45, step1: "Pick the better English", step2: "Tap the wrong part", say1: "First pick the better English.", say2: "Now tap the wrong part of the sentence.", partO: "the fix", partL: "the wrong part", lineLabel: "wrong part", bugLabel: "The wrong part is" };

// "Say this, not that": the take-home card (also used by the Screen Deck).
const SAY = [
  ["I am Vikas. / My name is Vikas.", "Not: Myself Vikas."],
  ["I am from Vizag.", "Not: I am belonging to Vizag."],
  ["My hometown is Guntur.", "Not: My native is Guntur."],
  ["I have a question.", "Not: I am having one doubt."],
  ["Could you repeat that, please?", "Not: Please repeat once again."],
  ["I’m stressed about my exam.", "Not: I am in tension."],
  ["Could you please share the form?", "Not: Kindly do the needful."],
  ["Please reply when you can.", "Not: Please revert back."],
  ["I have attached my resume.", "Not: PFA."],
  ["Can we move the meeting earlier?", "Not: Can we prepone the meeting? (India only)"],
  ["I’m out of town.", "Not: I’m out of station. (India only)"],
  ["I graduated in 2024.", "Not: I passed out in 2024. (Abroad, it means fainted!)"],
  ["He doesn’t know.", "Not: He don’t know."],
  ["Let’s discuss it.", "Not: Let’s discuss about it."],
  ["I’ll return the book.", "Not: I’ll return back the book."],
  ["I’m a final year CSE student…", "Interview opener: say who you are and what you’ve built."],
  ["I used to… so I… and now I…", "Weakness answer: a real weakness, and what you did about it."],
  ["Could you let me know the next steps?", "To HR: ask for exactly what you need."],
  ["I’m looking forward to hearing from you.", "Not: Awaiting your kind reply."],
  ["Thank you for your time.", "A simple, warm way to end any email."]
];

window.GAME = {
  id: "english-fixer",
  title: "Desi English Fixer",
  club: "English Club",
  tagline: "18 everyday English habits. Spot them, fix them, and sound confident in interviews and emails.",
  art: window.STORY_ART,
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Fixed",
    rulesEyebrow: "How Desi English Fixer works", rulesTitle: "Spot it. Fix it. Say it.",
    learnText: "The host shares one quick English tip.", crackTitle: "Fix",
    crackText: "Pick the better English on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Almost everyone says it this way!", cracked: "fixed it",
    next: "Next round →", finale: "Next →", winner: "are today’s English Fixers!", endLine: "You fixed 18 everyday English habits!"
  },
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Desi English Fixer",
      title: "“Sir, I am having one doubt.” Sounds normal? Today we fix it.",
      cards: [["message-circle", "18 phrases we all say every day"], ["spell-check", "Learn the version that works in interviews and emails"], ["mic", "Speak if you want to. No wrong English here!"]]
    },
    { type: "rules" },

    // ---------- Round 1: Introduce Yourself ----------
    {
      type: "learn", door: 1,
      title: "Your first sentence decides the first impression.",
      points: [["Start with “I am” or “My name is”", "Simple, clear and correct everywhere"], ["Use simple verbs", "“I am from”, “I study”, “I like”, not “I am belonging”"], ["This is not about Indian English being wrong", "With friends, say it any way. In interviews, use the clear version"]],
      highlightLast: true,
      side: { label: "Where “myself” is right", items: [["circle-check", "I did it myself.", "It means: on my own"], ["circle-check", "I taught myself Python.", "The action comes back to me"], ["circle-x", "Myself Ravi.", "Here it should be: I am Ravi"]] }
    },
    R(1, "Introduce Yourself", Object.assign({}, FIX, {
      prompt: "Find the mistake in Ravi’s introduction.",
      code: ["Myself Ravi,", "I am from Vizag", "and I study CSE", "at Andhra University."],
      outputOptions: ["Me Ravi", "I am Ravi", "Myself is Ravi"], outputAnswer: 1, bugLine: 0,
      bugText: "“Myself Ravi” → “I am Ravi” or “My name is Ravi”",
      hint: "“Myself” is used when you do something to yourself, like “I taught myself”.",
      note: "Say “I am Ravi” or “My name is Ravi”. Keep “myself” for “I did it myself”.", badge: "user"
    })),
    R(1, "Introduce Yourself", Object.assign({}, FIX, {
      prompt: "Find the mistake in Priya’s introduction.",
      code: ["Hello everyone,", "I am Priya.", "I am belonging to Vizag", "and I love coding."],
      outputOptions: ["I am from Vizag", "I am belong to Vizag", "I am belonged to Vizag"], outputAnswer: 0, bugLine: 2,
      bugText: "“I am belonging to Vizag” → “I am from Vizag”",
      hint: "Some verbs like “belong”, “know” and “like” almost never take -ing.",
      note: "“I am from Vizag” is short and clear. “Belong” almost never takes -ing.", badge: "globe"
    })),
    R(1, "Introduce Yourself", Object.assign({}, FIX, {
      prompt: "Find the mistake in Arjun’s introduction.",
      code: ["Good morning,", "I am Arjun.", "I study ECE in Vizag,", "but my native is Guntur."],
      outputOptions: ["but my nativity is Guntur", "but my native place Guntur", "but my hometown is Guntur"], outputAnswer: 2, bugLine: 3,
      bugText: "“My native is Guntur” → “My hometown is Guntur” or “I’m originally from Guntur”",
      hint: "Outside India, people say “hometown” for the place you grew up.",
      note: "Say “My hometown is Guntur” or “I’m originally from Guntur”.", badge: "map",
      board: true, boardLabel: "after Round 1"
    })),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Introduce yourself in 2 lines, without saying “Myself”.", note: "Name, where you’re from, what you study or love. Anyone can try!", points: 100 },

    // ---------- Round 2: Classroom English ----------
    {
      type: "learn", door: 2,
      title: "Classroom English: small changes, big confidence.",
      points: [["A “doubt” is not a “question”", "Doubt = you are not sure something is true. Question = you want to know something"], ["Shorter is better", "No need to add “once again”, “only” or “itself” everywhere"], ["Name your feeling clearly", "Stressed, nervous, worried, confused"]],
      highlightLast: true,
      side: { label: "Useful in class", items: [["message-circle", "Could you explain that again?", "When you didn’t understand"], ["message-circle", "Sorry, I didn’t catch that.", "When you didn’t hear"], ["message-circle", "May I ask something?", "Before your question"]] }
    },
    R(2, "Classroom English", {
      prompt: "You didn’t understand the lecture. What do you say to the professor?",
      options: ["Sir, I am having one doubt.", "Sir, I have a question.", "Sir, doubt is there.", "Sir, clear my doubt only."], answer: 1,
      hint: "A doubt means you think something might be wrong. What do you really have?",
      note: "“I have a question” is clear everywhere. Outside India, “doubt” usually means you think something may be wrong.", badge: "message-circle"
    }),
    R(2, "Classroom English", {
      prompt: "You didn’t hear what the professor said. Best way to ask?",
      options: ["Please repeat once again.", "Repeat it again, sir.", "Could you repeat that, please?", "Once more tell."], answer: 2,
      hint: "“Repeat” already means “say again”.",
      note: "“Repeat once again” says “again” twice. “Could you repeat that, please?” is polite and clear.", badge: "ear"
    }),
    R(2, "Classroom English", {
      prompt: "Your friend asks how you feel before the exam. Which is clearest?",
      options: ["I am in tension.", "I am taking tension.", "Tension is there.", "I’m stressed about the exam."], answer: 3,
      hint: "Which word names the feeling directly?",
      note: "“In tension” is understood only in India. Say “stressed”, “nervous” or “worried”.", badge: "heart",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Email English ----------
    {
      type: "learn", door: 3,
      title: "Good emails say exactly what you need.",
      points: [["Say the action", "Not “do the needful”, but “please share the form by Friday”"], ["No short forms to HR", "Write “I have attached”, not “PFA”"], ["Polite, not old-fashioned", "“Please”, “Could you”, “Thank you” are enough"]],
      highlightLast: true,
      side: { label: "A great email has", items: [["mail", "A clear subject", "Application: Junior Developer – Ravi Kumar"], ["list-checks", "One clear ask", "What do you want them to do?"], ["badge-check", "A simple ending", "Thank you, Ravi Kumar"]] }
    },
    R(3, "Email English", {
      prompt: "You need your college to send a bonafide certificate. Best line?",
      options: ["Kindly do the needful.", "Do the needful at the earliest.", "Could you please send my bonafide certificate by Friday?", "Needful may kindly be done."], answer: 2,
      hint: "Does “the needful” tell them what to do?",
      note: "“Do the needful” doesn’t say what you need. Ask for the exact thing, and when.", badge: "mail"
    }),
    R(3, "Email English", {
      prompt: "You want HR to reply to your email. Which line is best?",
      options: ["Please revert back.", "Revert back ASAP.", "Kindly revert.", "Please reply when you can."], answer: 3,
      hint: "In the UK and US, “revert” means “go back to an old state”.",
      note: "Outside India, “revert” means “go back to an earlier state”, and “back” is extra. Just say “reply”.", badge: "mail"
    }),
    R(3, "Email English", {
      prompt: "You’re sending your resume to a company. Best line?",
      options: ["PFA my resume.", "I have attached my resume for the Junior Developer role.", "Resume is attached herewith.", "Pls find attached resume."], answer: 1,
      hint: "Would a recruiter in another country know what “PFA” means?",
      note: "Write it in full and name the role: “I have attached my resume for the Junior Developer role.”", badge: "file-text",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say one line you would write to HR, the professional way.", note: "Try: asking for an interview time, sending your resume, or saying thank you.", points: 100 },

    // ---------- Round 4: India Only or Everywhere? ----------
    {
      type: "learn", door: 4,
      title: "Some words are understood only in India.",
      points: [["They are not wrong", "Indian English has its own words, and that’s fine in India"], ["But you’ll work with the world", "Clients, interviews and teams abroad may not understand them"], ["Know both", "Use the global word when you’re not sure"]],
      highlightLast: true,
      side: { label: "Fine everywhere", items: [["globe", "Postpone", "Move something later"], ["globe", "Graduate", "Finish your degree"], ["globe", "Out of town", "Away from your city"]] }
    },
    R(4, "India Only or Everywhere?", {
      prompt: "“Can we prepone the meeting to 3 PM?”",
      options: ["India only", "Everywhere"], answer: 0, time: 25,
      hint: "Its opposite, “postpone”, is used everywhere. Is this one?",
      note: "India only! Abroad, say “Can we move the meeting earlier, to 3 PM?” or “bring it forward”.", badge: "globe"
    }),
    R(4, "India Only or Everywhere?", {
      prompt: "“I can’t come tomorrow. I am out of station.”",
      options: ["India only", "Everywhere"], answer: 0, time: 25,
      hint: "Think of the old railway word “station”.",
      note: "India only! Say “I’m out of town” or “I’m travelling”.", badge: "map"
    }),
    R(4, "India Only or Everywhere?", {
      prompt: "“I passed out of college in 2024.”",
      options: ["India only", "Everywhere"], answer: 0, time: 25,
      hint: "In the US, what happens when someone “passes out” at a party?",
      note: "India only, and funny abroad: “passed out” means you fainted! Say “I graduated in 2024”.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Grammar Traps ----------
    {
      type: "learn", door: 5,
      title: "Three tiny grammar traps that interviewers notice.",
      points: [["He, she, it → does / doesn’t", "He doesn’t, she does, it doesn’t"], ["Some verbs need no “about”", "Discuss it, describe it, explain it"], ["Don’t say it twice", "Return back, repeat again, revert back"]],
      highlightLast: true,
      side: { label: "Same pattern", items: [["circle-check", "She doesn’t like tea.", "she → doesn’t"], ["circle-check", "Explain the code.", "not: explain about the code"], ["circle-check", "Enter the room.", "not: enter into the room"]] }
    },
    R(5, "Grammar Traps", {
      prompt: "Which sentence is correct?",
      options: ["He don’t know the answer.", "He doesn’t knows the answer.", "He doesn’t know the answer.", "He not know the answer."], answer: 2,
      hint: "He, she, it → does or doesn’t, and then the plain verb.",
      note: "He doesn’t know. After “doesn’t”, the verb stays simple: know, not knows.", badge: "spell-check"
    }),
    R(5, "Grammar Traps", {
      prompt: "Which sentence is correct?",
      options: ["Let’s discuss about the project.", "Let’s discuss the project.", "Let’s discuss on the project.", "Let’s discussion the project."], answer: 1,
      hint: "“Discuss” already includes the meaning of “about”.",
      note: "Discuss the project. (You can say “talk about the project”, but not “discuss about”.)", badge: "message-circle"
    }),
    R(5, "Grammar Traps", {
      prompt: "Which sentence is correct?",
      options: ["I will return back the book tomorrow.", "I will return the book back tomorrow.", "I will return the book tomorrow.", "I will back return the book tomorrow."], answer: 2,
      hint: "What does “return” already mean?",
      note: "“Return” already means “give back”. Same with “repeat again” and “revert back”.", badge: "book-open",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Interview English (double) ----------
    {
      type: "learn", door: 6,
      title: "Interview English: clear, confident, and about you.",
      points: [["Tell me about yourself", "Who you are → what you’ve done → what you want. 30 seconds"], ["Your weakness", "A real one, and what you are doing to fix it"], ["Messages to HR", "Polite, short, and ask for one clear thing"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["target", "3 interview moments", "Pick what a confident speaker would say"], ["mic", "Then the final challenge", "Your own 20-second introduction"]] }
    },
    R(6, "Interview English", {
      double: true, time: 45,
      prompt: "“Tell me about yourself.” Which opening is best?",
      options: ["Myself Ravi. My father is a farmer and my mother is a homemaker.", "I’m Ravi, a final year CSE student. I’ve built two web apps, and I’m looking for a developer role.", "What do you want to know, sir?", "I am hardworking, honest and punctual."], answer: 1,
      hint: "The interviewer wants to know about YOU: your study, your work, your goal.",
      note: "Who you are, what you’ve built, what you want. Family details can come later, if they ask.", badge: "user"
    }),
    R(6, "Interview English", {
      double: true, time: 45,
      prompt: "“What is your biggest weakness?” Which answer is best?",
      options: ["I have no weaknesses.", "I’m a perfectionist. I work too hard.", "I used to get nervous speaking in groups, so I joined the English club. Now I present every week.", "I get angry very easily."], answer: 2,
      hint: "A good answer is honest AND shows you’re working on it.",
      note: "A real weakness plus what you did about it. “Perfectionist” is a very common answer, and it rarely sounds honest.", badge: "target"
    }),
    R(6, "Interview English", Object.assign({}, FIX, {
      double: true, time: 50,
      prompt: "Ravi’s message to HR has one weak line. Find it and fix it.",
      code: ["Dear Ms. Sharma,", "I have attached my resume for the Junior Developer role.", "Kindly do the needful.", "Thank you, Ravi Kumar"],
      outputOptions: ["Please do the needful soon.", "Could you let me know the next steps?", "Revert back ASAP."], outputAnswer: 1, bugLine: 2,
      bugText: "“Kindly do the needful” → “Could you let me know the next steps?”",
      hint: "Which line doesn’t say what Ravi wants?",
      note: "Now the message is clear: here’s my resume, what happens next? HR can reply in one line.", badge: "mail",
      board: true, boardLabel: "after Round 6"
    })),

    // ---------- Final challenge, personal fix list and take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Your 20-second “Tell me about yourself”.", note: "Who you are, what you’ve done, what you want. The room claps; the host picks the best one.", points: 200 },
    {
      type: "match", eyebrow: "Just for you", title: "My Fix List",
      note: "Tick the phrases you say in real life. You’ll get your own top 5 fixes and a 7-day practice challenge.",
      url: "fixlist.html", button: "Make my fix list →"
    },
    { type: "wordlist", eyebrow: "Take it home", title: "Say this, not that", note: "Screenshot this. Pick one line a day and use it in class, in an email or on WhatsApp.", items: SAY },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, stories and debates every week. Speak more, fear less.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
window.SAY_THIS = SAY;
