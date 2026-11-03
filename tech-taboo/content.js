// Tech Taboo (EduMoon Fun Zone). For all years.
// Guess the tech word from a Taboo-style clue, then play live Taboo: describe a word without saying the banned ones.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const TT = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

// The take-home card: 10 tech words explained simply.
const TWORDS = [
  ["Bug", "A mistake in code that makes a program behave wrongly."],
  ["Loop", "Code that repeats until a condition says stop."],
  ["Browser", "The app you use to open websites."],
  ["Cloud", "Someone else’s computers, on the internet, storing or running your stuff."],
  ["Prompt", "The instruction or question you give an AI tool."],
  ["Deepfake", "A fake video or voice made with AI to look real."],
  ["Phishing", "A fake message that tricks you into sharing passwords or money."],
  ["Firewall", "A guard that decides which network traffic is allowed in or out."],
  ["Startup", "A young company trying to grow fast with a new idea."],
  ["Internship", "Short-term work, often during college, to learn on the job."]
];

window.GAME = {
  id: "tech-taboo",
  title: "Tech Taboo",
  club: "Fun Zone",
  tagline: "Guess the tech word from the clue. Then describe one yourself, without saying the banned words.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "A party game about tech words. In each round, teams read a clue someone gave without saying the obvious words, and guess the tech word. Rounds cover everyday tech, coding, the internet, AI, cybersecurity and startups. Twice in the game, the room plays live Taboo: one person describes a word while their team guesses, without saying any banned word.",
    outcomes: "30 tech words they can explain in simple English, which is exactly what interviewers ask (“Explain the cloud to a 10-year-old”).",
    tone: "Loud and fast. During live Taboo, the rest of the room are the referees: they shout “Taboo!” when a banned word slips out. Laugh with people, never at them.",
    extra: [["Live Taboo rules", "One describer per team stands up. They can’t say the word, the banned words, or “sounds like”. No gestures that spell the word. 60 seconds per team. Each correct guess is 1 point on a sheet; the best team gets the bonus on the screen."],
      ["Extra Taboo cards", "CLOUD (no: sky, storage, Google, internet, online). PASSWORD (no: secret, login, letters, account). APP (no: phone, download, store, Play). ROBOT (no: machine, metal, AI, human). WI-FI (no: internet, wireless, router, signal). LAPTOP (no: computer, portable, keyboard, screen). EMAIL (no: mail, send, inbox, message). HACKER (no: computer, break, security, code). SELFIE (no: photo, camera, front, Instagram). RESUME (no: CV, job, paper, experience). OTP (no: password, number, SMS, bank). UPI (no: pay, money, scan, bank)."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Guessed",
    rulesEyebrow: "How Tech Taboo works", rulesTitle: "Read the clue. Guess the word. Never say the banned words.",
    learnText: "The host introduces the round’s topic.", crackTitle: "Guess",
    crackText: "Pick the word the clue is describing on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Live Taboo: <b>+100</b> and <b>+200</b>. Round 6: <b>double</b>!",
    nobody: "Nobody guessed it. Now you’ve learned a new word!", cracked: "guessed it",
    next: "Next round →", finale: "Next →", winner: "are the Tech Taboo champions!", endLine: "Now explain one of today’s words to a friend."
  },
  offerEyebrow: "EduMoon Fun Zone · Tech Taboo results",
  offerTitle: "Your tech-talk rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Tech Explainer", text: "You can explain tech simply. That’s an interview superpower." },
    { min: 0.45, icon: "message-circle", title: "Word Wizard", text: "Strong! Explain one tech word to someone at home this week." },
    { min: 0.2, icon: "lightbulb", title: "Quick Guesser", text: "Good fun! Save the word card and learn 2 new words a day." },
    { min: 0, icon: "sparkles", title: "Taboo Rookie", text: "Everyone starts here. Today you met 18 tech words." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Tech Taboo",
      title: "Can you explain “the cloud” without saying sky, storage or internet? Your team is about to find out.",
      cards: [["message-circle", "Guess the tech word from the clue"], ["mic", "Then play live Taboo"], ["trophy", "Win the title of Tech Explainer"]]
    },
    { type: "rules" },

    // ---------- Round 1: Everyday tech ----------
    {
      type: "learn", door: 1,
      title: "How Taboo clues work.",
      points: [["Every word has banned words", "The most obvious words you’d use to describe it"], ["So the clue goes around them", "Describe what it does, where you see it, how it feels"], ["Your job now: guess", "Later, you’ll be the one giving clues"]],
      highlightLast: true,
      side: { label: "This round", items: [["smartphone", "Everyday tech", "Things in your bag and pocket"], ["x", "Banned words", "Shown at the start of each clue"], ["timer", "30 seconds", "Read, guess, lock in"]] }
    },
    TT(1, "Everyday Tech", {
      prompt: "Banned: internet, wireless, router. The clue: “It’s invisible. At home or in college, you ask for its name and its secret code before anything else.”",
      options: ["Bluetooth", "Wi-Fi", "Hotspot", "GPS"], answer: 1,
      hint: "Its password is the first thing guests ask for.",
      note: "Wi-Fi. Asking for “the name and the code” is the giveaway.", badge: "smartphone"
    }),
    TT(1, "Everyday Tech", {
      prompt: "Banned: scan, pay, phone camera. The clue: “A black and white square full of tiny boxes. It’s stuck on every tea stall counter.”",
      options: ["Barcode", "Chip", "Sticker", "QR code"], answer: 3,
      hint: "Tea stalls, auto drivers, everyone has one now.",
      note: "QR code. QR stands for Quick Response.", badge: "badge-check"
    }),
    TT(1, "Everyday Tech", {
      prompt: "Banned: battery, charge, phone. The clue: “A small brick you carry on long trips so your device doesn’t die.”",
      options: ["Power bank", "Charger", "Adapter", "Smartwatch"], answer: 0,
      hint: "It stores energy for later.",
      note: "Power bank. A charger needs a wall socket; a power bank doesn’t.", badge: "zap",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Coding words ----------
    {
      type: "learn", door: 2,
      title: "Coding words, explained without code.",
      points: [["Think of real-life versions", "A recipe, a box, a mistake, a repeat"], ["Interviewers love this", "“Explain a loop to your grandmother”"], ["Simple beats smart", "The best clue is the one anyone understands"]],
      highlightLast: true,
      side: { label: "This round", items: [["code", "Coding words", "From your first programming class"], ["lightbulb", "Real-life versions", "Recipes, labels, repeats"], ["message-circle", "Explain simply", "Like you would to a 10-year-old"]] }
    },
    TT(2, "Coding Words", {
      prompt: "Banned: error, mistake, insect. The clue: “It’s why your program works on Monday and breaks on Tuesday. You spend hours hunting it.”",
      options: ["Virus", "Crash", "Bug", "Glitch"], answer: 2,
      hint: "The hunters are called debuggers.",
      note: "Bug. In 1947, engineers found a real moth stuck in a computer and taped it in their logbook.", badge: "search"
    }),
    TT(2, "Coding Words", {
      prompt: "Banned: repeat, again, for, while. The clue: “Do the same thing 100 times while only writing it once.”",
      options: ["Function", "Loop", "Array", "Variable"], answer: 1,
      hint: "Round and round.",
      note: "Loop. It keeps going until a condition says stop.", badge: "route"
    }),
    TT(2, "Coding Words", {
      prompt: "Banned: value, store, box, x. The clue: “A name you give something so your program can remember it and change it later. Like a label on a jar.”",
      options: ["Variable", "Comment", "Loop", "Folder"], answer: 0,
      hint: "Its value can vary.",
      note: "Variable. score = 10, then score = 20. Same label, new value.", badge: "code",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Internet and social ----------
    {
      type: "learn", door: 3,
      title: "Internet words you use every day.",
      points: [["You know them all", "But can you explain them?"], ["Describe the habit", "What people do with it, where it appears"], ["Watch for the trap", "Two words can sound very close"]],
      highlightLast: true,
      side: { label: "This round", items: [["globe", "Internet words", "Browsers, memes, hashtags"], ["search", "Close cousins", "Some words sound alike"], ["mic", "After this round", "Live Taboo for +100"]] }
    },
    TT(3, "Internet and Social", {
      prompt: "Banned: Chrome, website, app. The clue: “The window you open to visit any page on the internet.”",
      options: ["Search engine", "Server", "Browser", "Router"], answer: 2,
      hint: "Chrome is one. Google Search is not.",
      note: "Browser. A search engine (like Google Search) is a website you open inside a browser.", badge: "globe"
    }),
    TT(3, "Internet and Social", {
      prompt: "Banned: funny, picture, viral. The clue: “A joke made from a movie scene and some text, shared in every WhatsApp group.”",
      options: ["Sticker", "GIF", "Reel", "Meme"], answer: 3,
      hint: "It spreads like a joke, but it’s an image.",
      note: "Meme. The word was coined in 1976, long before the internet.", badge: "film"
    }),
    TT(3, "Internet and Social", {
      prompt: "Banned: tag, Instagram, symbol. The clue: “The little # sign that groups posts on the same topic.”",
      options: ["Hashtag", "Handle", "Mention", "Story"], answer: 0,
      hint: "Hash + …",
      note: "Hashtag. A handle starts with @. A hashtag starts with #.", badge: "message-circle",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Live Taboo · best describer wins +100", prompt: "CLOUD. Banned: sky, storage, Google, internet, online.", note: "One person per team describes it in 30 seconds. The room shouts “Taboo!” if a banned word slips out.", points: 100 },

    // ---------- Round 4: AI words ----------
    {
      type: "learn", door: 4,
      title: "AI words: new, everywhere, often misused.",
      points: [["AI is in your phone already", "Face unlock, keyboard suggestions, chat apps"], ["Know the real meaning", "Interviewers check if you understand, not if you can say the word"], ["Some AI words are warnings", "Not every AI use is a good one"]],
      highlightLast: true,
      side: { label: "This round", items: [["sparkles", "AI words", "Prompts, chatbots, deepfakes"], ["shield", "Use AI well", "Check before you forward"], ["lightbulb", "Know the meaning", "Not just the buzzword"]] }
    },
    TT(4, "AI Words", {
      prompt: "Banned: question, ask, command. The clue: “What you type into an AI tool to tell it what you want. Better ones get better answers.”",
      options: ["Password", "Prompt", "Query string", "Keyword"], answer: 1,
      hint: "Prompt engineering is a skill now.",
      note: "Prompt. Clear, detailed prompts get much better results.", badge: "pen-tool"
    }),
    TT(4, "AI Words", {
      prompt: "Banned: fake, video, edit. The clue: “A clip of a famous person saying something they never said, made by a computer.”",
      options: ["Filter", "Animation", "Deepfake", "Meme"], answer: 2,
      hint: "Deep learning + …",
      note: "Deepfake. Always check the source before you forward a shocking clip.", badge: "shield"
    }),
    TT(4, "AI Words", {
      prompt: "Banned: robot, chat, talk. The clue: “The helper that pops up in the corner of a bank website and answers your questions.”",
      options: ["Chatbot", "Pop-up", "Virus", "Cookie"], answer: 0,
      hint: "A bot you message with.",
      note: "Chatbot. Some follow simple scripts; newer ones use large AI models.", badge: "message-circle",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Cybersecurity ----------
    {
      type: "learn", door: 5,
      title: "Cybersecurity words that keep you safe.",
      points: [["Attacks have names", "Knowing the name helps you spot it"], ["Defences have names too", "Some sit between you and the internet"], ["Never share these", "OTPs and passwords, with anyone, ever"]],
      highlightLast: true,
      side: { label: "This round", items: [["shield", "Security words", "Attacks and defences"], ["lock", "Never share", "Your OTP or password"], ["search", "Names help", "Knowing the name helps you notice"]] }
    },
    TT(5, "Cybersecurity", {
      prompt: "Banned: fish, scam, email, fake. The clue: “A message that pretends to be your bank so you’ll type your password into the wrong page.”",
      options: ["Spam", "Phishing", "Hacking", "Malware"], answer: 1,
      hint: "It sounds like you’re trying to catch something with a hook.",
      note: "Phishing. Spam is unwanted messages; phishing is a trap made to steal from you.", badge: "shield"
    }),
    TT(5, "Cybersecurity", {
      prompt: "Banned: wall, fire, block, security. The clue: “A guard at the gate of a network that decides which traffic gets in.”",
      options: ["Antivirus", "VPN", "Proxy", "Firewall"], answer: 3,
      hint: "Its name comes from walls that stop fire spreading in buildings.",
      note: "Firewall. Antivirus checks files on your device; a firewall checks traffic coming in and going out.", badge: "lock"
    }),
    TT(5, "Cybersecurity", {
      prompt: "Banned: password, code, message, bank. The clue: “6 digits that arrive on your phone, work only once, and expire in minutes.”",
      options: ["OTP", "PIN", "CVV", "UPI ID"], answer: 0,
      hint: "One Time…",
      note: "OTP: One Time Password. No real bank or company will ever ask you for it on a call.", badge: "key",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Startups and jobs (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: startups and jobs. Double points.",
      points: [["Words from the job market", "You’ll hear them in every placement talk"], ["Double points", "Anyone can still win"], ["Then the big one", "Live Taboo for +200"]],
      highlightLast: true,
      side: { label: "Final round", items: [["rocket", "Startup words", "Founders, investors, interns"], ["zap", "Double points", "Every answer counts twice"], ["mic", "Then live Taboo", "The +200 final"]] }
    },
    TT(6, "Startups and Jobs", {
      double: true,
      prompt: "Banned: company, new, business, small. The clue: “Two friends, one idea, a laptop, and a dream of becoming the next big app.”",
      options: ["Startup", "Freelancing", "Franchise", "Partnership"], answer: 0,
      hint: "It has just started up.",
      note: "Startup. A young company trying to grow fast with a new idea.", badge: "rocket"
    }),
    TT(6, "Startups and Jobs", {
      double: true,
      prompt: "Banned: job, work, student, company. The clue: “Two months in summer where you learn on the job, sometimes with a stipend, and it goes on your resume.”",
      options: ["Workshop", "Placement", "Internship", "Hackathon"], answer: 2,
      hint: "Interns do it.",
      note: "Internship. One good internship can matter more than an extra certificate.", badge: "briefcase"
    }),
    TT(6, "Startups and Jobs", {
      double: true,
      prompt: "Banned: money, invest, shark, fund. The clue: “The person who gives a startup cash early, in return for a piece of the company.”",
      options: ["Customer", "Co-founder", "Mentor", "Investor"], answer: 3,
      hint: "Angel ones are famous.",
      note: "Investor. Angel investors put money in very early; venture capital firms come later.", badge: "landmark",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final live Taboo, results, take-home ----------
    { type: "speak", eyebrow: "Live Taboo final · best team wins +200", prompt: "60 seconds per team. Your describer gets cards from the host. How many can your team guess?", note: "Cards are in the Host Guide (PASSWORD, APP, ROBOT, LAPTOP…). The room are the referees.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Tech Words, Simply", note: "Screenshot this. Interviewers often ask you to explain a tech word in simple English.", items: TWORDS },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Quizzes, games and events for students across Vizag every week.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
