// How AI Reads Your Notes (EduMoon AI Lab). Advanced: for students who know How ChatGPT Works.
// How AI tools answer from your own documents (retrieval-augmented generation, or RAG): chunking, embeddings, similarity search, grounded answers with sources, and where it fails. No coding needed.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const RG = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const RGN = (round, name, extra) => RG(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: RAG in 8 lines.
const RAGCARD = [
  ["The problem", "A chatbot does not know your notes, and cannot read a whole library at once."],
  ["Chunk", "Split documents into small pieces, like a paragraph or a page."],
  ["Embed", "Turn each chunk into a list of numbers that captures its meaning."],
  ["Search", "Turn the question into numbers too, and find the closest chunks."],
  ["Answer", "Give the AI the question plus the best chunks. Ask it to answer only from them."],
  ["Show sources", "Good tools cite which page or chunk the answer came from."],
  ["It can still fail", "Wrong chunk found, outdated notes, or missing information."],
  ["Privacy", "Uploading notes sends them to the tool. Never upload others’ private data."]
];

window.GAME = {
  id: "how-ai-reads-your-notes",
  title: "How AI Reads Your Notes",
  club: "AI Lab",
  tagline: "Upload your notes and ask questions. What is the AI actually doing?",
  art: window.STORY_ART,
  guide: {
    years: "2nd year onwards (after How ChatGPT Works)", time: "45 minutes", level: "Advanced",
    about: "Sravani uploads 300 pages of semester notes to an AI study tool and asks, “What is Ohm’s law?” How does it find the right page in seconds? In 6 rounds, teams learn retrieval-augmented generation (RAG) without code: why chatbots need it, chunking documents, embeddings that turn meaning into numbers, finding the closest chunks, generating grounded answers with sources, and the ways it can fail, including privacy.",
    outcomes: "How “chat with your PDF” tools and company knowledge bots work, the ideas of chunks, embeddings and similarity, why sources matter, and how to judge whether an answer can be trusted.",
    tone: "Many students already use these tools. Ask who has uploaded a PDF to an AI tool. Keep it concrete with library and index-card analogies. No maths beyond simple counting.",
    extra: [["Analogy to use", "A librarian who cannot read every book for you, but can quickly fetch the three most relevant pages and read just those."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Retrieved",
    rulesEyebrow: "How How AI Reads Your Notes works", rulesTitle: "Learn each step. Follow the question. See how answers are found.",
    learnText: "The host explains one step of how AI searches your notes.", crackTitle: "Answer",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even AI engineers debug this daily!", cracked: "retrieved it",
    next: "Next round →", finale: "Next →", winner: "understand how AI reads notes!", endLine: "Sravani trusts her study tool, and checks its sources."
  },
  offerEyebrow: "EduMoon AI Lab · Retrieval level",
  offerTitle: "Your retrieval level",
  offers: [
    { min: 0.7, icon: "brain", title: "RAG Architect", text: "You understand the whole pipeline. Try a free no-code RAG tool on your notes." },
    { min: 0.45, icon: "search", title: "Search Builder", text: "Strong! Always check the sources your AI tool shows." },
    { min: 0.2, icon: "file-text", title: "Chunk Learner", text: "Good start. Revise chunk, embed, search, answer." },
    { min: 0, icon: "book-open", title: "Note Taker", text: "Everyone starts here. Play How ChatGPT Works first." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · 300 pages of notes",
      title: "Sravani uploads 300 pages of notes to an AI study tool and asks, “What is Ohm’s law?” It answers in seconds, with the page number. How? Can your team open it up?",
      cards: [["file-text", "Chunks, embeddings and search"], ["shield", "Sources, failures and privacy"], ["trophy", "Your score decides your retrieval level"]]
    },
    { type: "rules" },

    // ---------- Round 1: The problem ----------
    {
      type: "learn", door: 1,
      title: "Chatbots do not know your notes, and cannot read everything at once.",
      points: [["Trained knowledge", "A chatbot learned from public text, not your class notes"], ["Limited window", "It can only read a certain amount of text per question"], ["So: retrieve first", "Find the few relevant pages, then let the AI read only those"]],
      highlightLast: true,
      side: { label: "The librarian idea", items: [["book-open", "A big library", "Your 300 pages"], ["search", "A fast librarian", "Finds 3 relevant pages"], ["bot", "A reader", "Answers from those pages"]] }
    },
    RG(1, "The Problem", {
      prompt: "Why can’t a chatbot simply answer from Sravani’s notes without any extra system?",
      options: ["It never saw her notes", "Chatbots cannot read English", "Notes are always too short", "It refuses all study questions"], answer: 0,
      hint: "What did it learn from, and how much can it read at once?",
      note: "It never saw her notes, and it cannot read all 300 pages for every question. Retrieval solves both.", badge: "search"
    }),
    RG(1, "The Problem", {
      prompt: "What does RAG stand for?",
      options: ["Random Answer Generator", "Retrieval-Augmented Generation", "Rapid AI Grading", "Read All Gradually"], answer: 1,
      hint: "Find first, then write.",
      note: "Retrieve the relevant pieces, then generate an answer using them.", badge: "list-checks"
    }),
    RG(1, "The Problem", {
      prompt: "Which tool most likely uses RAG?",
      options: ["A chat-with-PDF app", "A basic calculator", "A torch app", "A step counter"], answer: 0,
      hint: "Answers from your own documents.",
      note: "Chat-with-PDF apps, company help bots and study tools usually use retrieval like this.", badge: "file-text",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Chunking ----------
    {
      type: "learn", door: 2,
      title: "Step 1: cut documents into chunks.",
      points: [["Chunk", "A small piece: a paragraph or a few hundred words"], ["Why small?", "Easier to find exactly the right part"], ["Not too small", "A half-sentence loses its meaning"]],
      highlightLast: true,
      side: { label: "Like index cards", items: [["file-text", "One topic per card", "Ohm’s law"], ["file-text", "Next card", "Kirchhoff’s laws"], ["search", "Find the right card", "Not the whole book"]] }
    },
    RGN(2, "Chunking", {
      prompt: "Sravani’s notes have 300 pages. Each page is split into 2 chunks. How many chunks?",
      answer: 600,
      hint: "300 × 2.",
      note: "600 chunks. Each one can be searched and fetched on its own.", badge: "list-checks"
    }),
    RG(2, "Chunking", {
      prompt: "What is the problem with chunks of only 3 words each?",
      options: ["They are too long to read", "They lose meaning", "They make answers perfect", "There is no problem"], answer: 1,
      hint: "“law states that” — what law?",
      note: "Tiny chunks lose context. Very big chunks bury the answer. Good systems pick a size in between.", badge: "x"
    }),
    RG(2, "Chunking", {
      prompt: "Why is splitting by headings or paragraphs often better than splitting every 100 characters?",
      options: ["It uses less electricity", "Headings are always correct", "It makes chunks random", "It keeps one idea per chunk"], answer: 3,
      hint: "Natural boundaries.",
      note: "Natural boundaries keep each chunk about one idea, which makes search more accurate.", badge: "check",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Embeddings ----------
    {
      type: "learn", door: 3,
      title: "Step 2: turn meaning into numbers (embeddings).",
      points: [["Embedding", "A long list of numbers for a piece of text"], ["Similar meaning, close numbers", "“voltage” and “potential difference” land near each other"], ["Not just keywords", "It matches meaning, even with different words"]],
      highlightLast: true,
      side: { label: "Close in meaning", items: [["check", "“current through a resistor”", "Close to Ohm’s law"], ["check", "“V = IR”", "Also close"], ["x", "“mess menu for Friday”", "Far away"]] }
    },
    RG(3, "Embeddings", {
      prompt: "Which pair would have embeddings CLOSEST together?",
      options: ["“car repair” and “mango juice”", "“car repair” and “exam timetable”", "“car repair” and “fixing cars”", "“car repair” and “music festival”"], answer: 2,
      hint: "Same meaning, different words.",
      note: "Embeddings capture meaning, so different words with the same idea sit close together.", badge: "route"
    }),
    RG(3, "Embeddings", {
      prompt: "Sravani asks, “How are voltage and current related?” Her notes say “Ohm’s law: V = IR” but never use the word “related”. Can embedding search still find it?",
      options: ["Yes, it matches meaning", "No, it needs the exact word “related”", "Only if she types in capitals", "Only on weekends"], answer: 0,
      hint: "Meaning, not keywords.",
      note: "This is the big advantage over simple keyword search.", badge: "search"
    }),
    RGN(3, "Embeddings", {
      prompt: "Each of the 600 chunks gets one embedding. The question gets one too. How many embeddings in total?",
      answer: 601,
      hint: "600 + 1.",
      note: "601. The question’s embedding is compared with all 600 chunk embeddings.", badge: "chart-column",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain embeddings to the room using a map: similar ideas live close together.", note: "Places on a map, ideas in number-space. 20 seconds.", points: 100 },

    // ---------- Round 4: Retrieval ----------
    {
      type: "learn", door: 4,
      title: "Step 3: find the chunks closest to the question.",
      points: [["Compare", "The question’s numbers vs every chunk’s numbers"], ["Top-k", "Keep the k closest chunks, for example the top 3"], ["Fast", "Special databases do this in milliseconds"]],
      highlightLast: true,
      side: { label: "Question: “What is Ohm’s law?”", items: [["check", "Chunk 214", "Ohm’s law definition"], ["check", "Chunk 215", "Worked example"], ["check", "Chunk 88", "Resistors in series"]] }
    },
    RGN(4, "Retrieval", {
      prompt: "The system keeps the top 3 chunks, each about 250 words. Roughly how many words does the AI read to answer?",
      answer: 750,
      hint: "3 × 250.",
      note: "About 750 words instead of 300 pages. That is why it is fast and fits in the AI’s reading limit.", badge: "zap"
    }),
    RG(4, "Retrieval", {
      prompt: "What happens if retrieval picks the wrong chunks?",
      options: ["The AI fixes it automatically every time", "The answer becomes more accurate", "The answer may be wrong or off-topic", "Nothing changes"], answer: 2,
      hint: "Garbage in…",
      note: "The AI can only answer from what it is given. Bad retrieval means bad answers.", badge: "x"
    }),
    RG(4, "Retrieval", {
      prompt: "Sravani asks about “Kirchhoff’s laws” but her notes call them “KCL and KVL” only. What helps retrieval most?",
      options: ["Asking the same question louder", "Uploading the notes twice", "Adding the full names", "Deleting old chunks"], answer: 2,
      hint: "Help the meaning match.",
      note: "Abbreviations can confuse search. Clear headings and full terms make retrieval much better.", badge: "spell-check",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Grounded answers ----------
    {
      type: "learn", door: 5,
      title: "Step 4: answer only from the retrieved chunks, and show sources.",
      points: [["The prompt", "“Answer using only these notes. If the answer is not there, say so.”"], ["Citations", "“From page 112” lets you check"], ["Fewer made-up answers", "But not zero. Still check important facts"]],
      highlightLast: true,
      side: { label: "A good answer", items: [["check", "The answer", "“V = IR: voltage equals current times resistance.”"], ["file-text", "The source", "“Notes, page 112”"], ["shield", "Honesty", "“Not found in your notes” when missing"]] }
    },
    RG(5, "Grounded Answers", {
      prompt: "Why should the AI show which page its answer came from?",
      options: ["To make the answer longer", "So Sravani can check it", "Because pages look nice", "To hide mistakes"], answer: 1,
      hint: "Trust, but verify.",
      note: "Sources let you check the answer quickly. An answer with no source is harder to trust.", badge: "file-text"
    }),
    RG(5, "Grounded Answers", {
      prompt: "Sravani asks about a topic that is NOT in her notes. What should a well-built tool do?",
      options: ["Say it is not in her notes", "Invent a confident answer", "Show a random page", "Crash"], answer: 0,
      hint: "Honest beats confident.",
      note: "Good systems are told to admit when the answer is not in the documents, instead of guessing.", badge: "shield"
    }),
    RG(5, "Grounded Answers", {
      prompt: "Can a RAG system still make mistakes?",
      options: ["No, it is always correct", "Only on Mondays", "Only if the notes are short", "Yes, in several ways"], answer: 3,
      hint: "Grounded is better, not perfect.",
      note: "RAG reduces made-up answers but cannot remove all errors. Check important answers against the source.", badge: "search",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Failures and privacy (double) ----------
    {
      type: "learn", door: 6,
      title: "Know where it breaks, and protect your data.",
      points: [["Outdated documents", "Old notes give old answers"], ["Scanned images", "Text inside images may not be read unless it is converted"], ["Privacy", "Uploaded files go to the tool’s servers. Never upload others’ private data"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "Failures and privacy", "Real choices"], ["mic", "Then the final challenge", "Explain the pipeline"]] }
    },
    RG(6, "Failures and Privacy", {
      double: true,
      prompt: "A college help bot gives last year’s exam dates. What is the most likely cause?",
      options: ["Embeddings stopped working", "Students asked too politely", "The bot is tired", "Its documents are old"], answer: 3,
      hint: "Answers come from the documents.",
      note: "RAG is only as current as its documents. Someone must update them.", badge: "clock"
    }),
    RG(6, "Failures and Privacy", {
      double: true,
      prompt: "Sravani’s notes are phone photos of handwritten pages. Search finds nothing. Why?",
      options: ["Handwriting is illegal", "The images were never turned into text", "Photos are too colourful", "The AI dislikes her handwriting"], answer: 1,
      hint: "Chunks need text.",
      note: "Images need text recognition (OCR) first. Without it, there is no text to chunk or search.", badge: "eye"
    }),
    RG(6, "Failures and Privacy", {
      double: true,
      prompt: "A club secretary wants to upload a sheet of all members’ phone numbers and addresses to a free AI tool. Best advice?",
      options: ["Upload it, AI tools are private", "Upload half the sheet", "Don’t upload it", "Post it publicly instead"], answer: 2,
      hint: "Whose data is it?",
      note: "Uploading sends data to the tool’s servers. Other people’s personal data needs their consent and care.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best explanation wins +200", prompt: "Explain in 30 seconds how an AI tool answers from 300 pages of notes: chunk, embed, search, answer.", note: "Use the librarian analogy if it helps. The host picks the clearest.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "RAG in 8 Lines", note: "Screenshot this. Next time you chat with a PDF, check the sources.", items: RAGCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
