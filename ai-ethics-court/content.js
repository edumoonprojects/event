// AI Ethics Court (EduMoon AI Lab). For all years.
// Real AI dilemmas from student life: teams act as the jury, pick the fairest verdict, and argue their case aloud.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const EC = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Case ${round} · ${name}` }, extra);
// "Find the problem line" questions use the bug door with court labels.
const OBJECTION = { kind: "bug", time: 60, step1: "What’s the problem?", step2: "Tap the line you object to", say1: "First pick the problem.", say2: "Now tap the line you object to.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "Objection to line" };

const CODE = [
  ["Be honest about AI use", "Say you used it when your college or employer asks."],
  ["Use it to learn, not to skip learning", "Could you do it without AI?"],
  ["Never fake people", "No deepfakes, fake voices or fake chats of real people."],
  ["Get consent", "Ask before you put someone’s photo, voice or data into AI."],
  ["Protect private data", "Yours and everyone else’s."],
  ["Check for bias", "Would this be fair to people who are different from you?"],
  ["Keep a human in charge", "Important decisions need a person who is responsible."],
  ["Report harm", "Fake content and scams: report them, don’t forward them. Cyber fraud: 1930."]
];

window.GAME = {
  id: "ai-ethics-court",
  title: "AI Ethics Court",
  club: "AI Lab",
  tagline: "Real AI dilemmas. Your team is the jury.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no coding needed", time: "40 minutes", level: "Medium",
    about: "Six cases from real student life: AI in assignments, deepfakes, privacy, bias, jobs and who is responsible when AI is wrong. For each case, teams act as the jury and pick the fairest verdict, object to the problem line in a statement, and argue their reasoning aloud. They leave with an 8-rule personal AI code.",
    outcomes: "How to think through an AI dilemma (honesty, consent, privacy, fairness, responsibility), what to do about deepfakes and AI scams, and a personal code for using AI well.",
    tone: "Some cases have grey areas; that’s the point. Accept good reasoning even when it differs from the given answer, and give the speaking bonus generously. Never shame anyone for past AI use. For the deepfake case, keep it serious and remind students that help exists (cybercrime.gov.in and 1930).",
    extra: [["Run it like a court", "Call yourself “the judge”, call teams “the jury”, and say “Objection!” before the problem-line questions. It makes the room laugh and pay attention."]]
  },
  words: {
    round: "Case", unlocked: "Verdict", badgeLabel: "Fair verdict",
    rulesEyebrow: "How AI Ethics Court works", rulesTitle: "Hear the case. Decide. Defend it.",
    learnText: "The judge explains what this case is really about.", crackTitle: "Decide",
    crackText: "Pick your team’s verdict on your phone and lock it in.",
    rulesExtra: "Objection questions: <b>100</b> for the problem + <b>100</b> for the line. Good arguments: <b>+100</b>. Case 6: <b>double</b>!",
    nobody: "No jury got this one. These cases are hard for adults too!", cracked: "reached a fair verdict",
    next: "Next case →", finale: "Next →", winner: "are today’s wisest jury!", endLine: "Court is adjourned. Use AI fairly!"
  },
  offerEyebrow: "EduMoon AI Lab · Court results",
  offerTitle: "Your jury rank",
  offers: [
    { min: 0.7, icon: "scale", title: "Chief Justice", text: "Fair, careful and honest. Others should ask you about AI decisions." },
    { min: 0.45, icon: "landmark", title: "Wise Jury", text: "Strong! Remember consent and privacy in every case." },
    { min: 0.2, icon: "users", title: "Fair Thinker", text: "Good start. Ask “who could this hurt?” before using AI." },
    { min: 0, icon: "book-open", title: "Law Student", text: "Everyone starts here. Save the 8 rules and read them once." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · AI Ethics Court",
      title: "Order in the court! Six AI cases from real student life. Your team is the jury. Will your verdicts be fair?",
      cards: [["scale", "6 real AI dilemmas"], ["message-circle", "Object to the problem line"], ["users", "Argue your verdict aloud"]]
    },
    { type: "rules" },

    // ---------- Case 1: The assignment ----------
    {
      type: "learn", door: 1,
      title: "Case 1: AI in assignments. The question is honesty and learning.",
      points: [["Rules differ", "Some teachers allow AI, some don’t. Check first"], ["Using it to learn", "Explaining, giving feedback, quizzing: usually fine"], ["Passing it off as yours", "Submitting AI work as your own when not allowed: not fine"]],
      highlightLast: true,
      side: { label: "Ask yourself", items: [["check", "Is it allowed?", "Check the rules"], ["brain", "Did I learn?", "Could I explain it?"], ["message-circle", "Would I tell my teacher?", "If not, why not?"]] }
    },
    EC(1, "The Assignment", {
      prompt: "Kiran’s teacher said “no AI”. Kiran asked AI to write the whole assignment and submitted it. Verdict?",
      options: ["Fine, everyone does it", "Not fair: it breaks the rule and Kiran learned nothing", "Fine, if the answer was correct", "Fine, if the font was changed"], answer: 1,
      hint: "Two problems: the rule, and the learning.",
      note: "Breaking a clear rule is dishonest, and the assignment existed so Kiran would learn.", badge: "file-text"
    }),
    EC(1, "The Assignment", {
      prompt: "Meera’s teacher allows AI. Meera wrote her essay, asked AI for feedback, and improved it herself. Verdict?",
      options: ["Cheating, AI was involved", "Fair: allowed, her own work, and she learned from feedback", "She should hide it", "Only fair on weekends"], answer: 1,
      hint: "Rules allow it. Whose work is it?",
      note: "Using AI as a coach within the rules is exactly the smart use we want.", badge: "check"
    }),
    EC(1, "The Assignment", Object.assign({}, OBJECTION, {
      prompt: "A student’s statement about AI. Object to the problem line.",
      code: ["I use AI to explain topics I miss in class.", "I check facts from AI before I write them.", "I submit AI answers as my own when my teacher says no AI.", "I tell my teacher when I use AI for feedback."],
      outputOptions: ["It breaks the rule and is dishonest", "It’s too long", "Nothing, every line is fine"], outputAnswer: 0, bugLine: 2,
      bugText: "submitting AI work against the teacher’s rule is dishonest. The other lines are good habits",
      hint: "Which line would the teacher be upset about?",
      note: "Three good habits and one dishonest one. Learning with AI is great; lying about it isn’t.", badge: "scale",
      board: true, boardLabel: "after Case 1"
    })),

    // ---------- Case 2: Deepfakes ----------
    {
      type: "learn", door: 2,
      title: "Case 2: Deepfakes. Faking a real person can cause real harm.",
      points: [["What it is", "AI-made photos, videos or voices of real people doing things they never did"], ["Why it’s serious", "It can embarrass, harass or scam someone, and it can be illegal"], ["If it happens to you", "Don’t panic. Save proof, report on the platform and at cybercrime.gov.in or 1930"]],
      highlightLast: true,
      side: { label: "Never", items: [["x", "Fake photos of classmates", "Even “as a joke”"], ["x", "Fake voice of a person", "Used for pranks or scams"], ["x", "Forward a deepfake", "Report it instead"]] }
    },
    EC(2, "Deepfakes", {
      prompt: "Someone makes an AI video of a classmate saying embarrassing things, “just for fun”, and posts it. Verdict?",
      options: ["Harmful and wrong: it fakes a real person without consent and can hurt them badly", "Fine, it’s a joke", "Fine, if it gets many likes", "Fine, if it’s deleted after a day"], answer: 0,
      hint: "How would the classmate feel?",
      note: "“Just a joke” doesn’t undo the harm. Faking real people can also break the law.", badge: "shield"
    }),
    EC(2, "Deepfakes", {
      prompt: "You receive a deepfake of a friend in a group chat. What’s the right move?",
      options: ["Forward it to more groups", "Laugh and ignore", "Don’t share it. Tell your friend privately, and report it", "Make another one"], answer: 2,
      hint: "What would you want if it were you?",
      note: "Every forward makes it worse. Support your friend and report it.", badge: "heart"
    }),
    EC(2, "Deepfakes", {
      prompt: "Your “uncle” calls with a slightly odd voice asking for urgent money on UPI. What should you do?",
      options: ["Pay quickly, family comes first", "Send half", "Hang up and call him back on his saved number, or ask a family question only he’d know", "Share your OTP to verify"], answer: 2,
      hint: "AI can copy voices.",
      note: "AI voice scams are real. Call back on a number you know. Report fraud on 1930.", badge: "smartphone",
      board: true, boardLabel: "after Case 2"
    }),

    // ---------- Case 3: Privacy and consent ----------
    {
      type: "learn", door: 3,
      title: "Case 3: Privacy. Other people’s data isn’t yours to share.",
      points: [["Consent", "Ask before putting someone’s photo, voice or chats into AI"], ["Your data", "Passwords, OTPs and ID numbers never go into AI"], ["Once uploaded", "You may not control where it goes next"]],
      highlightLast: true,
      side: { label: "Ask before you upload", items: [["user", "Is this about someone else?", "Ask them first"], ["lock", "Is it private?", "Then don’t"], ["eye", "Would they be okay seeing it?", "If not, stop"]] }
    },
    EC(3, "Privacy", {
      prompt: "Ravi screenshots his friend’s private chat and asks AI “Is she angry with me?” Verdict?",
      options: ["Totally fine", "Fine if Ravi deletes it later", "Not great: he shared private messages without her permission. Better to just ask her", "Fine if the AI is paid"], answer: 2,
      hint: "Did she agree to share her chat?",
      note: "Private messages belong to both people. Talking directly is better, and more honest.", badge: "message-circle"
    }),
    EC(3, "Privacy", Object.assign({}, OBJECTION, {
      prompt: "A club’s plan for using AI. Object to the problem line.",
      code: ["We’ll use AI to draft our event posters.", "We’ll ask AI for event name ideas.", "We’ll upload every member’s phone number and photo to a free AI app without asking.", "We’ll check every AI fact before posting."],
      outputOptions: ["It’s too formal", "It uses members’ private data without consent", "Nothing, every line is fine"], outputAnswer: 1, bugLine: 2,
      bugText: "members never agreed to share their numbers and photos with an AI app",
      hint: "Did the members say yes?",
      note: "Consent first. And phone numbers usually don’t need to go into AI at all.", badge: "lock"
    })),
    EC(3, "Privacy", {
      prompt: "A free AI app asks for access to all your contacts and photos to “improve your experience”. Best choice?",
      options: ["Allow everything", "Allow, it’s free", "Deny what it doesn’t really need. Free apps can be paid for with your data", "Uninstall your phone"], answer: 2,
      hint: "Does a chat app need all your photos?",
      note: "Give apps only the permissions they truly need. Read before you tap Allow.", badge: "smartphone",
      board: true, boardLabel: "after Case 3"
    }),
    { type: "speak", eyebrow: "The jury speaks · +100", prompt: "Defend your verdict: was any case so far harder than it looked?", note: "Give your reason in 20 seconds. Good reasoning earns points, even if others disagree.", points: 100 },

    // ---------- Case 4: Bias ----------
    {
      type: "learn", door: 4,
      title: "Case 4: Bias. AI can be unfair without anyone meaning it.",
      points: [["AI learns from past data", "If the past was unfair, AI can repeat it"], ["Examples", "Favouring some names, accents, genders, colleges or languages"], ["The fix", "Test with different people, check results, keep humans responsible"]],
      highlightLast: true,
      side: { label: "Bias check", items: [["users", "Would it treat everyone the same?", "Try different names"], ["chart-column", "Look at the results", "Who gets left out?"], ["user", "Who is responsible?", "A human, always"]] }
    },
    EC(4, "Bias", {
      prompt: "A company’s AI rejects most resumes from small-town colleges, because past hires were mostly from big cities. Verdict?",
      options: ["Fair, the AI is just doing maths", "Unfair: it copies past bias and blocks good people. The company must fix it", "Fair, big-city students are better", "Not anyone’s problem"], answer: 1,
      hint: "Did those students do anything wrong?",
      note: "AI that repeats past bias isn’t neutral. The company is responsible for testing and fixing it.", badge: "scale"
    }),
    EC(4, "Bias", {
      prompt: "You ask an AI image tool for “a software engineer”, and it shows only one kind of person. What does that show?",
      options: ["Only one kind of person can be an engineer", "The AI is broken forever", "Nothing important", "AI can reflect stereotypes from the data it learned from"], answer: 3,
      hint: "Where did the AI learn what an engineer looks like?",
      note: "Notice the pattern, then prompt for variety. Anyone can be an engineer.", badge: "eye"
    }),
    EC(4, "Bias", {
      prompt: "Your club builds an AI tool to pick event winners. What’s the fairest setup?",
      options: ["AI decides alone, no appeals", "Only the founder can see results", "Let AI pick randomly and hide how", "AI suggests, a human team reviews, and the rules are shared openly"], answer: 3,
      hint: "Who can check it’s fair?",
      note: "Open rules and human review make AI decisions trustworthy.", badge: "users",
      board: true, boardLabel: "after Case 4"
    }),

    // ---------- Case 5: Jobs and responsibility ----------
    {
      type: "learn", door: 5,
      title: "Case 5: When AI is wrong, a human is still responsible.",
      points: [["“AI did it” isn’t an excuse", "The person who used it is responsible"], ["Important decisions", "Health, money, marks, jobs: a human must check"], ["Jobs are changing", "People who use AI well are in demand; tasks change, skills matter more"]],
      highlightLast: true,
      side: { label: "Responsibility check", items: [["check", "Did I verify it?", "Before I used it"], ["user", "Who checks AI here?", "Name the person"], ["route", "Can someone appeal?", "Fair systems allow it"]] }
    },
    EC(5, "Responsibility", {
      prompt: "A student copies AI facts into a report without checking. Some are wrong. Who is responsible?",
      options: ["The student who submitted it", "The AI", "The internet", "Nobody"], answer: 0,
      hint: "Whose name is on the report?",
      note: "Your name, your responsibility. AI is a tool; you are the author.", badge: "file-text"
    }),
    EC(5, "Responsibility", Object.assign({}, OBJECTION, {
      prompt: "A hospital’s plan for an AI tool. Object to the problem line.",
      code: ["AI will help doctors read scans faster.", "Doctors will review every AI suggestion.", "Patients can ask a doctor to explain any result.", "If the AI makes a mistake, nobody is responsible."],
      outputOptions: ["Nothing, every line is fine", "It’s too short", "Someone must always be responsible for decisions"], outputAnswer: 2, bugLine: 3,
      bugText: "when AI is used in health, a person or the hospital must be responsible for mistakes",
      hint: "If something goes wrong, who answers for it?",
      note: "AI can help doctors a lot. But responsibility can never disappear into a machine.", badge: "heart"
    })),
    EC(5, "Responsibility", {
      prompt: "Your friend says, “AI will take all jobs, so why study?” What’s the best reply?",
      options: ["“True, stop studying”", "“AI changes many tasks. People with real skills who use AI well will be in demand. So learn both.”", "“AI is useless”", "“Only study AI, nothing else”"], answer: 1,
      hint: "Who gets hired: someone with skills, or someone without?",
      note: "Strong basics + smart AI use is the combination employers look for.", badge: "briefcase",
      board: true, boardLabel: "after Case 5"
    }),

    // ---------- Case 6: Final verdicts (double) ----------
    {
      type: "learn", door: 6,
      title: "Final case: your own AI code.",
      points: [["Honesty", "Say when you used AI, when asked"], ["Respect", "Consent, privacy, no fakes of real people"], ["Responsibility", "Check, own your work, keep humans in charge"]],
      highlightLast: true,
      side: { label: "Final case", items: [["zap", "Double points", "Still anyone’s game!"], ["scale", "3 final verdicts", "Mixed cases"], ["award", "Then your jury rank", "How wise is your team?"]] }
    },
    EC(6, "Final Verdicts", {
      double: true,
      prompt: "An influencer uses AI to make a fake “before and after” photo to sell a product. Verdict?",
      options: ["Fine, it’s marketing", "Fine if the product is good", "Misleading and unfair to buyers. Ads must not use fake results", "Fine if the photo looks real"], answer: 2,
      hint: "Would buyers feel cheated?",
      note: "Fake proof to sell something is misleading. Honest ads build lasting trust.", badge: "store"
    }),
    EC(6, "Final Verdicts", {
      double: true,
      prompt: "You use AI to make your club’s poster design. Someone asks if AI helped. Best answer?",
      options: ["“No, I did everything by hand”", "“Yes, AI helped with the design, and I checked and edited it.”", "Ignore the question", "“What is AI?”"], answer: 1,
      hint: "Is there anything to hide?",
      note: "Using AI isn’t shameful. Being honest about it is simply good practice.", badge: "palette"
    }),
    EC(6, "Final Verdicts", {
      double: true,
      prompt: "Which one question should you ask before EVERY AI use?",
      options: ["“Is it fast?”", "“Is it free?”", "“Will it go viral?”", "“Is this honest, fair, and safe for everyone involved?”"], answer: 3,
      hint: "Think about all six cases.",
      note: "Honest, fair, safe. If the answer is yes, go ahead. If not, stop and rethink.", badge: "badge-check",
      board: true, boardLabel: "after Case 6"
    }),

    { type: "speak", eyebrow: "Closing argument · best one wins +200", prompt: "In 30 seconds: your one rule for using AI fairly, from today.", note: "Make it simple and real. The room claps; the judge picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "My AI Code: 8 Rules", note: "Screenshot this. Read it once a week.", items: CODE },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "AI games, coding challenges and real projects every week. Learn to use AI the smart way.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
