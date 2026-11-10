// How ChatGPT Works (EduMoon AI Lab). For all years.
// What really happens when you type a prompt: AI vs ML, training, tokens, why AI makes things up, context and using it well.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const CW = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

// The take-home card: 8 things to know about AI chatbots.
const CHATFACTS = [
  ["It predicts, it doesn’t look up", "A chatbot writes by predicting the next piece of text, one piece at a time."],
  ["Tokens", "Text is split into small pieces, often parts of words. The model works with those."],
  ["Training", "It learned patterns from huge amounts of text, then people rated answers to make it more helpful."],
  ["It can make things up", "It produces text that sounds right. Always check facts, names, numbers and sources."],
  ["No live news by default", "Unless the app connects it to search, it doesn’t know today’s scores or prices."],
  ["Context window", "It can only consider a limited amount of text at once. Very long chats lose details."],
  ["Good prompts", "Say who it’s for, what you want, and the format. Add an example."],
  ["Your responsibility", "Never paste passwords or private data, and follow your college’s rules on AI."]
];

window.GAME = {
  id: "how-chatgpt-works",
  title: "How ChatGPT Works",
  club: "AI Lab",
  tagline: "Millions of students use AI chatbots every day. Very few know what’s really happening inside. Find out.",
  art: window.STORY_ART,
  guide: {
    years: "All years (no coding needed)", time: "35 minutes", level: "Beginner",
    about: "A friendly look inside AI chatbots. In 6 rounds, teams learn the difference between AI, machine learning and generative AI, how chatbots are trained, how they write one token at a time, why they sometimes make things up, what a context window is, and how to use them well and safely. No model names or version numbers are used, so the game stays accurate as the tools change.",
    outcomes: "A clear mental model of how chatbots work, the habit of checking AI answers, better prompts, and an answer to the interview question “How does ChatGPT work?” in simple words.",
    tone: "Students use these tools daily and may have strong opinions. Keep it curious, not preachy: AI is a powerful tool, and knowing how it works makes you better at using it. Never shame anyone for using AI.",
    extra: [["Got a laptop?", "After Round 3 or 4, try it live: ask any chatbot a made-up question (like the plot of a book that doesn’t exist) and see if it invents an answer. It’s a great way to show hallucinations."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Got it",
    rulesEyebrow: "How this game works", rulesTitle: "Look inside the chatbot. Answer fast. Use AI better.",
    learnText: "The host explains one part of how chatbots work.", crackTitle: "Answer",
    crackText: "Pick or type your answer on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most AI users don’t know this either!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "understand AI best!", endLine: "Now you know what’s behind the chat box."
  },
  offerEyebrow: "EduMoon AI Lab · AI results",
  offerTitle: "Your AI understanding rank",
  offers: [
    { min: 0.7, icon: "crown", title: "AI Insider", text: "You know how chatbots really work. Explain it to a friend this week." },
    { min: 0.45, icon: "lightbulb", title: "Smart User", text: "Strong! Try writing your next prompt with a role, a task and a format." },
    { min: 0.2, icon: "search", title: "Curious Explorer", text: "Good start. Check one AI answer against a real source this week." },
    { min: 0, icon: "book-open", title: "AI Beginner", text: "Everyone starts here. Save the fact card and read one line a day." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · How ChatGPT Works",
      title: "You type a question. Two seconds later, a full answer appears. What actually happened in those two seconds?",
      cards: [["sparkles", "6 rounds inside the chatbot"], ["lightbulb", "Learn why AI sometimes makes things up"], ["trophy", "Win the title of AI Insider"]]
    },
    { type: "rules" },

    // ---------- Round 1: AI, ML and generative AI ----------
    {
      type: "learn", door: 1,
      title: "AI, machine learning, generative AI: circles inside circles.",
      points: [["AI", "Any computer system that does something we’d call smart"], ["Machine learning", "AI that learns patterns from data instead of following only fixed rules"], ["Generative AI", "Machine learning that creates new text, images or audio"]],
      highlightLast: true,
      side: { label: "Biggest to smallest", items: [["globe", "Artificial intelligence", "The whole field"], ["chart-column", "Machine learning", "Learns from data"], ["sparkles", "Generative AI", "Creates new content, like chatbots"]] }
    },
    CW(1, "AI, ML, Generative AI", {
      prompt: "Which of these is generative AI?",
      options: ["A calculator app", "An email spam filter that sorts messages", "A chatbot that writes a poem about Vizag", "A lift that stops at the floor you press"], answer: 2,
      hint: "Which one creates something new?",
      note: "The chatbot creates new text. A spam filter is machine learning too, but it sorts things rather than creating them.", badge: "sparkles"
    }),
    CW(1, "AI, ML, Generative AI", {
      prompt: "Which statement is true?",
      options: ["Every AI uses machine learning", "Machine learning is a part of AI, but not all AI uses machine learning", "AI and machine learning are completely separate", "Generative AI is bigger than AI"], answer: 1,
      hint: "Think of the circles inside circles.",
      note: "Machine learning sits inside AI. Older AI, like a chess program with hand-written rules, can be AI without learning from data.", badge: "chart-column"
    }),
    CW(1, "AI, ML, Generative AI", {
      prompt: "A traffic light switches every 60 seconds because an engineer set that rule. Is that machine learning?",
      options: ["No. It follows a fixed rule written by a person; it doesn’t learn from data", "Yes, all automatic things are machine learning", "Yes, because it uses electricity", "Only at night"], answer: 0,
      hint: "Does it learn anything from what happens on the road?",
      note: "Fixed rules aren’t learning. A traffic light that studied traffic data and changed its own timing would be machine learning.", badge: "route",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Training ----------
    {
      type: "learn", door: 2,
      title: "Chatbots learn by reading, a lot.",
      points: [["Huge amounts of text", "Books, websites, articles and code"], ["It learns patterns, not a database", "Which words tend to follow which, and how ideas connect"], ["Then people help", "Humans rate answers so it learns to be more helpful and safe"]],
      highlightLast: true,
      side: { label: "Like learning a language", items: [["book-open", "Read a lot", "You pick up how sentences work"], ["message-circle", "Practise", "You start making your own sentences"], ["users", "Get feedback", "A teacher tells you what was good"]] }
    },
    CW(2, "Training", {
      prompt: "Where does a chatbot learn language from?",
      options: ["A human types every answer in advance", "Huge amounts of text such as books, websites and code", "It listens to phone calls", "It is born knowing language"], answer: 1,
      hint: "Look at the learn screen.",
      note: "It learns patterns from huge amounts of text. No one writes its answers in advance.", badge: "book-open"
    }),
    CW(2, "Training", {
      prompt: "When a chatbot answers you, is it looking up an exact web page and copying it?",
      options: ["Yes, always", "Yes, but only for long answers", "Only on Sundays", "No. It writes new text from patterns it learned, unless the app connects it to search"], answer: 3,
      hint: "Did it learn a database, or patterns?",
      note: "It generates text from learned patterns. Some apps add a search tool, and then it can read pages, but the model itself isn’t a search engine.", badge: "search"
    }),
    CW(2, "Training", {
      prompt: "After the first training, why do companies have people rate the chatbot’s answers?",
      options: ["To make the chatbot more helpful, honest and safe", "To make it slower", "To give it a personality on purpose", "There’s no reason"], answer: 0,
      hint: "Think of a teacher giving feedback.",
      note: "Human feedback teaches it which answers people find helpful and which are harmful or wrong.", badge: "thumbs-up",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Tokens and next-word prediction ----------
    {
      type: "learn", door: 3,
      title: "It writes one small piece at a time.",
      points: [["Text becomes tokens", "Small pieces of text, often whole words or parts of words"], ["Predict the next token", "Based on everything so far, which piece most likely comes next?"], ["Repeat, very fast", "Add the new piece, predict again, until the answer is done"]],
      highlightLast: true,
      side: { label: "Watch it write", items: [["message-circle", "So far", "“The capital of India is”"], ["sparkles", "Next token", "“ New”"], ["sparkles", "Then", "“ Delhi”, and so on"]] }
    },
    CW(3, "Tokens", {
      prompt: "At its core, what is a chatbot doing while it writes an answer?",
      options: ["Thinking exactly like a human", "Copying from a single website", "Predicting the most likely next token, again and again", "Reading your mind"], answer: 2,
      hint: "Look at the learn screen.",
      note: "Next-token prediction, repeated very fast. It’s simple to describe, but at huge scale it produces remarkably good text.", badge: "zap"
    }),
    CW(3, "Tokens", {
      prompt: "What are tokens?",
      options: ["Coins you pay to use AI", "Passwords", "Images", "Small pieces of text, often words or parts of words"], answer: 3,
      hint: "The model splits your text into these.",
      note: "Tokens are pieces of text. Long or rare words are often split into several tokens.", badge: "code"
    }),
    CW(3, "Tokens", {
      kind: "number", time: 45,
      prompt: "Suppose a model splits this sentence like this: I | love | Viz | ag | beaches. How many tokens is that? Type the number.",
      code: ["I | love | Viz | ag | beaches"],
      answer: 5,
      hint: "Count the pieces between the lines.",
      note: "5 tokens. “Vizag” is rare in training text, so it may be split into 2 pieces. Exact splits differ between models.", badge: "list-checks",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain next-token prediction with your own example, in 20 seconds.", note: "Start a sentence and ask the room to guess the next word. That’s exactly what the model does.", points: 100 },

    // ---------- Round 4: Why AI makes things up ----------
    {
      type: "learn", door: 4,
      title: "Chatbots can sound sure and still be wrong.",
      points: [["It predicts what sounds right", "Not what it has checked to be true"], ["Made-up answers are called hallucinations", "Fake book titles, wrong dates, invented quotes"], ["So you check", "Facts, numbers, names and sources, every time it matters"]],
      highlightLast: true,
      side: { label: "Check before you trust", items: [["search", "Facts and numbers", "Find a reliable source"], ["file-text", "Quotes and references", "Make sure they exist"], ["clock", "Anything recent", "It may not know it"]] }
    },
    CW(4, "Making Things Up", {
      prompt: "You ask a chatbot for a book on cloud computing, and it names a title and author that don’t exist. Why?",
      options: ["It is lying on purpose", "It produced text that sounds right, without knowing it’s false", "The book was deleted", "Your phone was offline"], answer: 1,
      hint: "Does it check facts, or predict likely text?",
      note: "It isn’t lying; it doesn’t know. It produced a plausible title and author. That’s a hallucination.", badge: "lightbulb"
    }),
    CW(4, "Making Things Up", {
      prompt: "You’re using an AI answer for an assignment fact. What should you do?",
      options: ["Copy it; AI is always right", "Ask the AI if it’s sure, and trust its reply", "Check it in a reliable source like your textbook or an official site", "Change a few words so no one notices"], answer: 2,
      hint: "Asking the AI to check itself isn’t enough.",
      note: "Verify with a reliable source. The AI can say “yes, I’m sure” and still be wrong.", badge: "badge-check"
    }),
    CW(4, "Making Things Up", {
      prompt: "Without a search tool, which question is a chatbot most likely to get wrong?",
      options: ["“What is the score in today’s cricket match?”", "“What is photosynthesis?”", "“Explain a for loop.”", "“Give me 3 tips for a resume.”"], answer: 0,
      hint: "Which one changes every minute?",
      note: "Live information. Without search, the model only knows what it learned during training, so it can’t know today’s score.", badge: "clock",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Context and memory ----------
    {
      type: "learn", door: 5,
      title: "A chatbot can only keep so much in mind at once.",
      points: [["The context window", "How much text it can consider at one time: your messages and its replies"], ["Long chats lose details", "Early instructions can get missed"], ["A new chat starts fresh", "Unless the app has a memory feature you’ve turned on"]],
      highlightLast: true,
      side: { label: "Like a whiteboard", items: [["pen-tool", "Limited space", "Only so much fits"], ["x", "Fill it up", "Older parts get missed"], ["check", "Fresh board", "A new chat is a clean start"]] }
    },
    CW(5, "Context and Memory", {
      prompt: "In a very long chat, the AI stops following a rule you gave at the very start. What’s the likely reason?",
      options: ["It got angry", "It deleted your account", "It needs a software update", "The early instruction got lost in a long context"], answer: 3,
      hint: "Think of the whiteboard.",
      note: "Long chats can push early details out of focus. Repeating key rules, or starting fresh, fixes it.", badge: "list-checks"
    }),
    CW(5, "Context and Memory", {
      prompt: "You open a brand new chat. Does the chatbot remember yesterday’s conversation?",
      options: ["Yes, always, everything", "Usually not, unless the app has a memory feature that’s turned on", "Only if you type in capital letters", "Only on the same phone"], answer: 1,
      hint: "A new chat is a fresh whiteboard.",
      note: "By default, each chat starts fresh. Some apps add memory features, and you can usually see and control them in settings.", badge: "user"
    }),
    CW(5, "Context and Memory", {
      prompt: "A long chat has become confusing and the AI keeps mixing things up. Best fix?",
      options: ["Start a new chat with a short summary of what matters", "Type faster", "Keep repeating “wrong” until it gets it", "Give up on AI forever"], answer: 0,
      hint: "Clean whiteboard, key points only.",
      note: "A fresh chat with a clear summary usually works better than fighting a messy long chat.", badge: "check",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Using it well (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: use AI like a pro. Double points.",
      points: [["Be specific", "Who it’s for, what you want, and the format"], ["Protect your data", "Never paste passwords, ID numbers or other people’s private details"], ["You’re responsible", "For what you submit, and for following your college’s rules"]],
      highlightLast: true,
      side: { label: "A strong prompt", items: [["user", "Who", "“For a first-year student…”"], ["target", "What", "“…explain recursion with a real-life example…”"], ["list-checks", "Format", "“…in 5 short lines.”"]] }
    },
    CW(6, "Using AI Well", {
      double: true,
      prompt: "Which prompt will get the most useful answer?",
      options: ["“recursion”", "“Explain recursion to a first-year student using a real-life example, in 5 short lines.”", "“Tell me everything about programming.”", "“Help.”"], answer: 1,
      hint: "Who, what and format.",
      note: "Specific prompts get specific answers. The others leave the AI guessing what you want.", badge: "pen-tool"
    }),
    CW(6, "Using AI Well", {
      double: true,
      prompt: "Which of these should you NEVER paste into an AI chatbot?",
      options: ["Your class notes", "A paragraph you want to improve", "Your bank password or Aadhaar number", "A coding error message"], answer: 2,
      hint: "Which one could cause real harm if it leaked?",
      note: "Passwords, ID numbers and other people’s private information should never go into any chatbot.", badge: "shield"
    }),
    CW(6, "Using AI Well", {
      double: true,
      prompt: "What’s the right way to use AI for an assignment?",
      options: ["Copy the full answer and submit it", "Use it to understand and improve your work, check what it says, follow your college’s rules, and be open about using it", "Never use it for anything", "Use it but hide that you did"], answer: 1,
      hint: "Learning, checking and honesty.",
      note: "AI is a great tutor and editor. The learning and the responsibility stay with you.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Explain how a chatbot works to a 10-year-old, in 60 seconds.", note: "Use today’s ideas: reading lots of text, predicting the next piece, and why you still check its answers.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Things to Know About AI Chatbots", note: "Screenshot this. It’s also a great answer to “How does ChatGPT work?” in an interview.", items: CHATFACTS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "AI, coding games and project nights every week. No laptop needed to start.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
