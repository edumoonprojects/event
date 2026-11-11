// Hallucination Hunter (EduMoon AI Lab). For all years.
// AI answers look perfect. Teams hunt the one confidently wrong line, then learn how to check AI before trusting it.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const HQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the wrong line" questions use the bug door with friendlier labels.
const HUNT = { kind: "bug", time: 60, step1: "What’s wrong with it?", step2: "Tap the wrong line", say1: "First pick what’s wrong.", say2: "Now tap the wrong line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The wrong line is" };

const CHECKS = [
  ["Ask: could this be wrong?", "AI predicts likely words. Likely is not the same as true."],
  ["Check numbers and dates", "These are the easiest things for AI to get wrong."],
  ["Open every source", "If you can’t find the paper, link or quote, don’t use it."],
  ["Use two sources", "Textbook, official site, or a second search. Not AI checking itself."],
  ["Run the code", "Code that looks right can still fail. Test it before you trust it."],
  ["Be extra careful with health, money and law", "Ask a real expert for anything serious."],
  ["Ask AI to show its working", "Then check each step, not just the final answer."],
  ["Say what you checked", "“I verified this on the official site” builds trust."]
];

window.GAME = {
  id: "hallucination-hunter",
  title: "Hallucination Hunter",
  club: "AI Lab",
  tagline: "AI sounds 100% sure. Hunt the line that’s 100% wrong.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no coding needed", time: "35 minutes", level: "Beginner",
    about: "Every question shows an answer that sounds like it came from an AI chat. Most lines are correct, but one is confidently wrong: a fake fact, a wrong number, a made-up source or a bug. Teams hunt it down, then learn simple habits to check AI before they trust it in assignments, projects and daily life.",
    outcomes: "What a hallucination is and why it happens, the 8 habits for checking AI answers, and the confidence to question an answer that sounds sure.",
    tone: "Keep it fun, like a detective game. AI is still useful; the point is to check it, not to fear it. When a team falls for a wrong line, say: that’s exactly how real people get fooled, which is why we practise.",
    extra: [["Make it local", "Swap any question for a real wrong answer your students got from AI. Edit content.js and keep the same format."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Caught",
    rulesEyebrow: "How Hallucination Hunter works", rulesTitle: "Read it. Doubt it. Catch it.",
    learnText: "The host shares one way AI goes wrong.", crackTitle: "Hunt",
    crackText: "Find the problem and lock in your answer on your phone.",
    rulesExtra: "Wrong-line questions: <b>100</b> for what’s wrong + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody caught this one. AI fools a lot of people exactly like this!", cracked: "caught it",
    next: "Next round →", finale: "Next →", winner: "are today’s top hallucination hunters!", endLine: "You don’t trust AI blindly anymore!"
  },
  offerEyebrow: "EduMoon AI Lab · Fact-check level",
  offerTitle: "Your hunter rank",
  offers: [
    { min: 0.7, icon: "shield", title: "Master Hunter", text: "Almost nothing gets past you. Teach your friends these habits." },
    { min: 0.45, icon: "search", title: "Sharp Eye", text: "Strong! Start checking numbers and sources every single time." },
    { min: 0.2, icon: "eye", title: "Getting Suspicious", text: "Good start. Next time AI sounds sure, open one source to check." },
    { min: 0, icon: "book-open", title: "Rookie Hunter", text: "Everyone starts here. Save the 8 checks and use one today." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Hallucination Hunter",
      title: "AI never says “I’m not sure”. Somewhere in every answer today, one line is confidently wrong. Can your team catch it?",
      cards: [["search", "Hunt the wrong line in AI answers"], ["brain", "Learn why AI makes things up"], ["shield", "Leave with 8 habits to check any answer"]]
    },
    { type: "rules" },

    // ---------- Round 1: What is a hallucination? ----------
    {
      type: "learn", door: 1,
      title: "A hallucination is when AI makes something up and says it confidently.",
      points: [["It predicts words", "It writes what sounds right, which is usually, not always, what is right"], ["It doesn’t know it’s wrong", "Wrong lines look exactly as confident as right ones"], ["It hides between true lines", "Three true facts make the fourth easy to believe"]],
      highlightLast: true,
      side: { label: "Most common hallucinations", items: [["clock", "Wrong dates and numbers", "Years, prices, statistics"], ["book-open", "Fake sources", "Papers, links, quotes that don’t exist"], ["user", "Wrong people", "Who invented or said something"]] }
    },
    HQ(1, "Spot the Fake", Object.assign({}, HUNT, {
      prompt: "You asked AI about India’s space missions. One line is wrong. Find it.",
      code: ["Chandrayaan-3 landed near the Moon’s south pole in August 2023.", "ISRO’s headquarters is in Bengaluru.", "Mangalyaan reached Mars orbit in 2014.", "Chandrayaan-3 was India’s first mission to the Moon."],
      outputOptions: ["It’s a confident wrong fact: Chandrayaan-1 went to the Moon in 2008", "It’s too short", "Nothing, it’s all correct"], outputAnswer: 0, bugLine: 3,
      bugText: "India’s first Moon mission was Chandrayaan-1 in 2008. Chandrayaan-3 was the third",
      hint: "Look at the number in the mission’s name.",
      note: "The name itself gave it away. AI mixes up “first” and “latest” all the time.", badge: "search"
    })),
    HQ(1, "Spot the Fake", {
      prompt: "Why does AI sometimes make up facts?",
      options: ["It wants to trick you on purpose", "It predicts words that sound right", "It’s connected to a fake website", "Only free versions of AI do it"], answer: 1,
      hint: "Think about how AI builds a sentence.",
      note: "It isn’t lying on purpose. It’s predicting. That’s why checking is your job.", badge: "brain"
    }),
    HQ(1, "Spot the Fake", {
      prompt: "Which AI answer should you check MOST carefully?",
      options: ["A poem about the rain for a club post", "Ideas for a club event name", "A rewrite of your own paragraph", "Exact statistics for a report"], answer: 3,
      hint: "Which one has a fact that can be right or wrong?",
      note: "Creative tasks have no wrong answer. Facts, numbers and sources do. Check those every time.", badge: "chart-column",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Numbers and dates ----------
    {
      type: "learn", door: 2,
      title: "Numbers and dates are where AI slips most.",
      points: [["They look precise", "“47.3%” feels true even when it was invented"], ["Small changes, big mistakes", "1991 vs 2015, lakh vs crore, million vs billion"], ["Do the maths yourself", "If AI calculates something, check it with a calculator"]],
      highlightLast: true,
      side: { label: "Quick checks", items: [["search", "Search the number", "Find it on an official site"], ["timer", "Does it make sense?", "Compare it with what you already know"], ["list-checks", "Re-calculate", "Phone calculator, 10 seconds"]] }
    },
    HQ(2, "Numbers and Dates", Object.assign({}, HUNT, {
      prompt: "AI wrote a fact sheet for your history assignment. One line is wrong.",
      code: ["India became independent on 15 August 1947.", "The Constitution came into effect on 26 January 1950.", "India has 28 states and 8 union territories.", "The first general elections in India were held in 1971."],
      outputOptions: ["Nothing, it’s all correct", "It’s a wrong date: the first general elections were in 1951–52", "The line is too long"], outputAnswer: 1, bugLine: 3,
      bugText: "India’s first general elections were held in 1951–52",
      hint: "Independence was 1947. Would India wait 24 years to vote?",
      note: "A wrong date looks exactly like a right one. Check every date that goes into an assignment.", badge: "clock"
    })),
    HQ(2, "Numbers and Dates", {
      prompt: "AI says: “A ₹1,200 phone cover at 25% off costs ₹1,000.” Is it right?",
      options: ["Yes, ₹1,000", "No, it’s ₹900", "No, it’s ₹950", "No, it’s ₹875"], answer: 1,
      hint: "25% of 1,200 is 300.",
      note: "1,200 − 300 = 900. AI can get simple maths wrong. A 10-second check on your calculator catches it.", badge: "indian-rupee"
    }),
    HQ(2, "Numbers and Dates", {
      prompt: "AI writes: “Exactly 73.6% of Indian students use AI daily (EduSurvey 2024).” What should you do?",
      options: ["Use it, it has a source in brackets", "Round it to 74% and use it", "Search for that survey yourself", "Ask AI if it’s sure, then use it"], answer: 2,
      hint: "Does that survey actually exist?",
      note: "Exact numbers with a confident source name are a classic hallucination. If you can’t find the survey, don’t use the number.", badge: "search",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Fake sources ----------
    {
      type: "learn", door: 3,
      title: "AI can invent sources that look completely real.",
      points: [["Fake papers", "Real-sounding titles, authors and journals that don’t exist"], ["Fake links", "URLs that look right but go nowhere"], ["Fake quotes", "Famous people “saying” things they never said"]],
      highlightLast: true,
      side: { label: "How to check a source", items: [["search", "Google Scholar", "Search the exact paper title"], ["link-2", "Open the link", "Does it load? Does it say that?"], ["book-open", "Find the quote", "On a trusted news or official site"]] }
    },
    HQ(3, "Fake Sources", {
      prompt: "AI gives you a paper to cite: “Kumar & Rao (2021), Journal of Student AI Studies”. You can’t find it anywhere online. What now?",
      options: ["Cite it anyway, AI found it somewhere", "Change the year slightly and cite it", "Cite it in a small font at the end", "Don’t cite it, it’s probably invented"], answer: 3,
      hint: "If nobody can find it, can your teacher?",
      note: "Made-up citations have embarrassed students, researchers and even lawyers in court. No source found means no citation.", badge: "book-open"
    }),
    HQ(3, "Fake Sources", {
      prompt: "AI says: “As Dr. A. P. J. Abdul Kalam said, ‘Use AI for every assignment.’” What’s the problem?",
      options: ["Nothing, Kalam said many wise things", "Likely fake: Kalam died before AI chat tools", "The quote is too short to be real", "It should be written in Hindi"], answer: 1,
      hint: "When did today’s AI chat tools become popular?",
      note: "AI often attaches famous names to sentences that sound wise. Always find the quote on a trusted site first.", badge: "message-circle"
    }),
    HQ(3, "Fake Sources", {
      prompt: "What’s the BEST way to check if an AI-given source is real?",
      options: ["Ask the same AI again if it’s real", "Search the exact title and open it", "Check if it sounds professional enough", "Count the authors and the page numbers"], answer: 1,
      hint: "Don’t let AI check its own homework.",
      note: "AI checking itself can repeat the same mistake. Open the original source with your own eyes.", badge: "link-2",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Tell the room about a time AI gave you a wrong answer.", note: "What did you ask, what did it say, and how did you find out?", points: 100 },

    // ---------- Round 4: Code that looks right ----------
    {
      type: "learn", door: 4,
      title: "AI code can look perfect and still be wrong.",
      points: [["Invented functions", "It may use a function or library that doesn’t exist"], ["Small logic slips", "An off-by-one, a wrong sign, a missed edge case"], ["The fix: run it", "Test with a few inputs, including weird ones"]],
      highlightLast: true,
      side: { label: "Before you trust AI code", items: [["code", "Read every line", "Can you explain it?"], ["zap", "Run it", "With normal and edge inputs"], ["search", "Check the docs", "Does that function exist?"]] }
    },
    HQ(4, "Code Check", Object.assign({}, HUNT, {
      prompt: "You asked AI how Python’s list works. One line is wrong.",
      code: ["Lists in Python are written with square brackets: [1, 2, 3].", "The first item of a list is at index 0.", "list.append(x) adds x to the end of the list.", "len(list) returns the last item of the list."],
      outputOptions: ["It’s correct, len means last", "The brackets are wrong", "It’s wrong: len() returns the number of items"], outputAnswer: 2, bugLine: 3,
      bugText: "len() gives the number of items. To get the last item, use list[-1]",
      hint: "What does “len” stand for?",
      note: "len = length. A small wrong line like this can waste an hour of debugging.", badge: "code"
    })),
    HQ(4, "Code Check", {
      prompt: "AI writes code using a library called “easyfaceAI”. Your code shows “No module named easyfaceAI”. Most likely reason?",
      options: ["Your laptop is broken and needs repair", "Python is outdated and needs updating", "AI may have invented the library", "You need to restart the internet router"], answer: 2,
      hint: "Does that library really exist?",
      note: "AI sometimes invents package names. Attackers even publish fake packages with those names, so never blindly install what AI suggests.", badge: "shield"
    }),
    HQ(4, "Code Check", {
      prompt: "AI’s code passes your one test. What’s the smart next step?",
      options: ["Test it with more inputs, including edge cases", "Submit it immediately before the deadline", "Ask AI to add more comments to the code", "Change the variable names to make it yours"], answer: 0,
      hint: "Does one passing test prove it always works?",
      note: "Edge cases (empty input, zero, negatives, huge numbers) are where AI code breaks most.", badge: "list-checks",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: High stakes ----------
    {
      type: "learn", door: 5,
      title: "For health, money and law, AI is a starting point, not the final answer.",
      points: [["Mistakes cost more here", "A wrong dose, a wrong tax rule, a wrong legal step"], ["Rules change often", "AI may not know the latest update"], ["Ask a real expert", "Doctor, pharmacist, CA, lawyer, official helpline"]],
      highlightLast: true,
      side: { label: "Where to check", items: [["landmark", "Official websites", "Government and bank sites"], ["heart", "Doctors and pharmacists", "For anything about medicines"], ["shield", "1930", "India’s cyber fraud helpline"]] }
    },
    HQ(5, "High Stakes", {
      prompt: "Your friend has a fever. AI suggests a medicine dose. What should you do?",
      options: ["Give that dose right away", "Double it to be safe and quick", "Ask AI a second time to confirm", "Check the label, ask a doctor"], answer: 3,
      hint: "Who should decide a medicine dose?",
      note: "Doses depend on age, weight and health. AI can be wrong, and here a mistake can hurt someone.", badge: "heart"
    }),
    HQ(5, "High Stakes", Object.assign({}, HUNT, {
      prompt: "AI explains how to stay safe from UPI fraud. One line is dangerously wrong.",
      code: ["Never share your UPI PIN with anyone.", "Check the name before you pay a QR code.", "To receive money on UPI, enter your UPI PIN.", "Report fraud quickly on the 1930 helpline."],
      outputOptions: ["Nothing, it’s all correct", "It’s too short", "It’s dangerously wrong: you never need your PIN to RECEIVE money"], outputAnswer: 2, bugLine: 2,
      bugText: "your UPI PIN is only for sending money. If someone asks for it to “receive” money, it’s a scam",
      hint: "Who is the PIN supposed to protect?",
      note: "This exact trick is how many students lose money. One wrong line in a “safety guide” can be costly.", badge: "shield"
    })),
    HQ(5, "High Stakes", {
      prompt: "AI tells you the last date to apply for a government scholarship. What’s the smartest move?",
      options: ["Trust it, AI is usually right", "Check the official website", "Ask a friend if AI is usually right", "Apply on the last day to be safe"], answer: 1,
      hint: "Dates change every year.",
      note: "Deadlines and rules change. The official site is the only source that counts.", badge: "landmark",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Final hunt (double) ----------
    {
      type: "learn", door: 6,
      title: "Final hunt: the best hunters check before they share.",
      points: [["Before you copy", "Facts, numbers and sources: checked?"], ["Before you post", "Would you be embarrassed if it’s wrong?"], ["Before you forward", "Fake news spreads one forward at a time"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["search", "3 final hunts", "Mixed topics"], ["award", "Then your hunter rank", "How sharp is your team?"]] }
    },
    HQ(6, "Final Hunt", Object.assign({}, HUNT, {
      double: true,
      prompt: "AI wrote a short bio of a famous scientist. One line is wrong.",
      code: ["C. V. Raman was an Indian physicist.", "He discovered the Raman effect, about how light scatters.", "He won the Nobel Prize in Physics in 1930.", "He was the first person in the world to win a Nobel Prize."],
      outputOptions: ["It’s a confident wrong fact: the first Nobel Prizes were given in 1901", "Nothing, it’s all correct", "He studied chemistry, not physics"], outputAnswer: 0, bugLine: 3,
      bugText: "the first Nobel Prizes were given in 1901. Raman was the first Asian to win a Nobel Prize in science",
      hint: "Were Nobel Prizes first given in 1930?",
      note: "AI turned “first Asian to win in science” into “first in the world”. A small twist, a big error.", badge: "award"
    })),
    HQ(6, "Final Hunt", {
      double: true,
      prompt: "A WhatsApp forward says: “AI confirmed: college exams cancelled next week.” What do you do?",
      options: ["Forward it to all groups so people know", "Celebrate and stop studying for now", "Check the official notice first", "Ask AI if it’s true and believe it"], answer: 2,
      hint: "Who actually decides exam dates?",
      note: "“AI confirmed” isn’t proof of anything. Official sources first, always.", badge: "message-circle"
    }),
    HQ(6, "Final Hunt", {
      double: true,
      prompt: "Which habit protects you MOST from AI hallucinations?",
      options: ["Using only paid AI tools, they don’t make mistakes", "Asking all your questions in English", "Never using AI for anything", "Checking facts in a trusted source"], answer: 3,
      hint: "Even the best AI makes mistakes.",
      note: "Every AI tool can hallucinate. A second trusted source is the habit that catches it.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: what will YOU check the next time AI answers you?", note: "Pick one habit and a real situation. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Checks Before You Trust AI", note: "Screenshot this. Use one check the next time you open an AI chat.", items: CHECKS },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "AI games, coding challenges and real projects every week. Learn to use AI the smart way.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
