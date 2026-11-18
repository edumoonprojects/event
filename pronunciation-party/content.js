// Pronunciation Party (EduMoon English Club). For all years.
// Common English words that are often mispronounced: silent letters, word stress, words that shrink, borrowed words, sounds Indian speakers often mix, and interview words.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Sounds are written in simple respelling: CAPITAL letters show the stressed part.

const NQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

// The take-home card: 12 words to say right.
const SAYIT = [
  ["island", "EYE-lund. The S is silent."],
  ["debris", "deb-REE. The S is silent."],
  ["receipt", "ri-SEET. The P is silent."],
  ["develop", "di-VEL-up. Stress the middle."],
  ["photographer", "fuh-TOG-ruh-fer. Stress moves from photograph."],
  ["comfortable", "KUMF-ter-bul. Three beats, not four."],
  ["vegetable", "VEJ-tuh-bul. Three beats."],
  ["Wednesday", "WENZ-day. Two beats."],
  ["suite", "SWEET, like a hotel suite. Not “suit”."],
  ["queue", "KYOO. Just the letter Q."],
  ["determine", "di-TER-min. Not “deter-mine”."],
  ["Practise", "Say each word slowly 3 times, then in a sentence. Record yourself once."]
];

window.GAME = {
  id: "pronunciation-party",
  title: "Pronunciation Party",
  club: "English Club",
  tagline: "Say it right, say it with confidence. The words almost everyone gets wrong.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Karthik is presenting at a national fest and wants his English to sound clear and confident. In 6 rounds, teams learn silent letters, word stress, words that shrink when spoken, borrowed words like suite and queue, sounds Indian speakers often mix, and interview words. After each round, the room says the words aloud together.",
    outcomes: "Clear pronunciation of about 25 commonly mispronounced words, the idea of word stress, and the confidence to speak without worrying about accent.",
    tone: "The goal is clarity, not a foreign accent. Indian English is a real, respected variety of English. Say each answer aloud yourself, then have the whole room repeat it. Make it a party: loud, fun and nobody is laughed at.",
    extra: [["Say it together", "After every reveal, say the word slowly, then normally, and ask the whole room to repeat it twice. This is the most important part of the game."]]
  },
  words: {
    round: "Round", unlocked: "Say it", badgeLabel: "Nailed",
    rulesEyebrow: "How Pronunciation Party works", rulesTitle: "Learn the sound. Pick the right way. Say it aloud together.",
    learnText: "The host says three words aloud. Repeat after the host.", crackTitle: "Pick",
    crackText: "Pick the right way to say it and lock it in.",
    rulesExtra: "Capital letters show the stressed part. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even TV anchors slip on this word!", cracked: "said it right",
    next: "Next round →", finale: "Next →", winner: "are today’s clearest speakers!", endLine: "Karthik is ready for the fest stage."
  },
  offerEyebrow: "EduMoon English Club · Speaking level",
  offerTitle: "Your pronunciation level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Crystal Clear", text: "You know how words really sound. Help a friend practise." },
    { min: 0.45, icon: "mic", title: "Clear Speaker", text: "Strong! Say the 12 words below aloud once a day this week." },
    { min: 0.2, icon: "ear", title: "Careful Listener", text: "Good start. Listen to how news readers say these words." },
    { min: 0, icon: "book-open", title: "Sound Learner", text: "Everyone starts here. Clear beats perfect, always." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · National fest",
      title: "Karthik is presenting at a national fest. His ideas are great, but a few words always come out wrong. Can your team help him say them right?",
      cards: [["mic", "25 words almost everyone gets wrong"], ["ear", "Say every answer aloud together"], ["trophy", "Your score decides your speaking level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Silent letters ----------
    {
      type: "learn", door: 1,
      title: "Some letters are written but never spoken.",
      points: [["island", "EYE-lund. The S is silent"], ["receipt", "ri-SEET. The P is silent"], ["debris", "deb-REE. The S is silent"]],
      highlightLast: true,
      side: { label: "Capital letters = stress", items: [["mic", "EYE-lund", "Say EYE louder"], ["mic", "ri-SEET", "Say SEET louder"], ["mic", "deb-REE", "Say REE louder"]] }
    },
    NQ(1, "Silent Letters", {
      prompt: "How do you say “island”?",
      options: ["IS-land", "EYE-lund", "is-LAND", "EYE-slund"], answer: 1,
      hint: "One letter is silent.",
      note: "EYE-lund. The S is silent. Say it together: EYE-lund.", badge: "ear"
    }),
    NQ(1, "Silent Letters", {
      prompt: "How do you say “receipt”?",
      options: ["ri-SEEPT", "REE-sept", "re-SIPT", "ri-SEET"], answer: 3,
      hint: "The P stays quiet.",
      note: "ri-SEET. The P is silent, just like in “psychology”.", badge: "file-text"
    }),
    NQ(1, "Silent Letters", {
      prompt: "After the cyclone, there was ___ on Beach Road. How do you say “debris”?",
      options: ["DEB-ris", "de-BRIS", "DEE-bris", "deb-REE"], answer: 3,
      hint: "It came from French. The last letter is quiet.",
      note: "deb-REE (or DEB-ree in British English). Either way, the S is silent.", badge: "waves",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Word stress ----------
    {
      type: "learn", door: 2,
      title: "Stress the right part of the word, and you sound clear.",
      points: [["develop", "di-VEL-up. Not DEV-lop"], ["hotel", "ho-TEL. Stress the end"], ["PHOtograph, phoTOGrapher", "The stress moves when the word grows"]],
      highlightLast: true,
      side: { label: "Listen for the loud part", items: [["mic", "di-VEL-up", "develop"], ["mic", "ho-TEL", "hotel"], ["mic", "fuh-TOG-ruh-fer", "photographer"]] }
    },
    NQ(2, "Word Stress", {
      prompt: "Which part of “develop” is stressed?",
      options: ["DE-velop", "deve-LOP", "de-VEL-op", "All parts equally"], answer: 2,
      hint: "The middle part is louder.",
      note: "di-VEL-up. Say it together. Many people say DEV-lop, which can confuse listeners.", badge: "mic"
    }),
    NQ(2, "Word Stress", {
      prompt: "Which is right for “photographer”?",
      options: ["PHO-to-graph-er", "pho-to-GRAPH-er", "pho-TOG-ra-pher", "pho-to-graph-ER"], answer: 2,
      hint: "It is different from photograph.",
      note: "fuh-TOG-ruh-fer. The stress moves to TOG. Same in photography: fuh-TOG-ruh-fee.", badge: "eye"
    }),
    NQ(2, "Word Stress", {
      prompt: "Where is the stress in “hotel”?",
      options: ["HO-tel", "ho-TEL", "Both the same", "There is no stress"], answer: 1,
      hint: "The end is louder.",
      note: "ho-TEL. Say it together: ho-TEL.", badge: "landmark",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Words that shrink ----------
    {
      type: "learn", door: 3,
      title: "Some words lose a sound when spoken.",
      points: [["comfortable", "KUMF-ter-bul. 3 beats, not com-FOR-table"], ["vegetable", "VEJ-tuh-bul. 3 beats"], ["Wednesday", "WENZ-day. 2 beats"]],
      highlightLast: true,
      side: { label: "Count the beats", items: [["mic", "KUMF · ter · bul", "3"], ["mic", "VEJ · tuh · bul", "3"], ["mic", "WENZ · day", "2"]] }
    },
    NQ(3, "Words That Shrink", {
      prompt: "How do you say “comfortable”?",
      options: ["KUMF-ter-bul", "com-FOR-ta-ble", "com-for-TA-ble", "COM-for-tay-bul"], answer: 0,
      hint: "Three beats, and the first one is loud.",
      note: "KUMF-ter-bul. The middle “or” almost disappears.", badge: "heart"
    }),
    NQ(3, "Words That Shrink", {
      prompt: "How many beats (syllables) do most people use to say “Wednesday”?",
      options: ["2", "1", "3", "4"], answer: 0,
      hint: "WENZ…",
      note: "Two: WENZ-day. The first D and the second E are silent.", badge: "clock"
    }),
    NQ(3, "Words That Shrink", {
      prompt: "How do you say “vegetable”?",
      options: ["ve-ge-TAY-bul", "VEJ-tuh-bul", "VE-ge-ta-bul", "ve-JET-a-bul"], answer: 1,
      hint: "Three beats, stress the first.",
      note: "VEJ-tuh-bul. Say it together: VEJ-tuh-bul.", badge: "store",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say this sentence clearly: “On Wednesday, the photographer felt comfortable at the hotel.”", note: "WENZ-day, fuh-TOG-ruh-fer, KUMF-ter-bul, ho-TEL. Slow and clear wins.", points: 100 },

    // ---------- Round 4: Borrowed words ----------
    {
      type: "learn", door: 4,
      title: "English borrowed some words, and kept their old sounds.",
      points: [["suite", "SWEET, like a hotel suite. A suit is clothes"], ["queue", "KYOO. Five letters, one sound"], ["chaos", "KAY-oss. Not cha-os"]],
      highlightLast: true,
      side: { label: "Also", items: [["mic", "epitome", "ih-PIT-uh-mee"], ["mic", "colonel", "KER-nul"], ["mic", "genre", "ZHON-ruh"]] }
    },
    NQ(4, "Borrowed Words", {
      prompt: "The team stayed in a hotel “suite”. How do you say it?",
      options: ["SOOT", "SOO-it", "SUIT-ee", "SWEET"], answer: 3,
      hint: "It sounds like something sugary.",
      note: "SWEET. A suit is clothes; a suite is a set of rooms or software.", badge: "landmark"
    }),
    NQ(4, "Borrowed Words", {
      prompt: "How do you say “chaos”?",
      options: ["KAY-oss", "CHAY-os", "cha-OS", "CHOWS"], answer: 0,
      hint: "The CH sounds like K, as in “school”.",
      note: "KAY-oss. Same in chaotic: kay-OT-ik.", badge: "zap"
    }),
    NQ(4, "Borrowed Words", {
      prompt: "“He is the epitome of hard work.” How do you say “epitome”?",
      options: ["EP-i-tome", "ep-i-TOME", "ih-PIT-uh-mee", "EP-i-tom"], answer: 2,
      hint: "It has four beats and ends with an “ee” sound.",
      note: "ih-PIT-uh-mee. It means a perfect example.", badge: "star",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Sounds we mix ----------
    {
      type: "learn", door: 5,
      title: "A few sounds that Indian speakers often mix up.",
      points: [["V and W", "V: top teeth touch the lip. W: round lips, no teeth"], ["TH", "Put your tongue between your teeth: three, think, thanks"], ["ask", "AASK, not AAKS"]],
      highlightLast: true,
      side: { label: "Practise", items: [["mic", "“Very well”", "V with teeth, W with round lips"], ["mic", "“Three, not tree”", "Tongue out for TH"], ["mic", "“Can I ask?”", "S then K"]] }
    },
    NQ(5, "Sounds We Mix", {
      prompt: "To say the V in “very”, what should you do?",
      options: ["Round your lips, no teeth", "Touch top teeth to your lower lip", "Close both lips fully", "Put your tongue out"], answer: 1,
      hint: "Feel your teeth.",
      note: "V uses teeth on the lip. W uses round lips. Say “very well” slowly together.", badge: "mic"
    }),
    NQ(5, "Sounds We Mix", {
      prompt: "Which sentence shows the TH sound said correctly?",
      options: ["“I tink so.” (tongue behind teeth)", "“I sink so.”", "“I fink so.”", "“I think so.” (tongue on teeth)"], answer: 3,
      hint: "Where does the tongue go?",
      note: "For TH, the tongue touches the teeth. Tink, sink and fink are other words or no words at all.", badge: "message-circle"
    }),
    NQ(5, "Sounds We Mix", {
      prompt: "In an interview: “Can I ___ a question?” How should “ask” sound?",
      options: ["AAKS", "AASK", "AAS", "AK"], answer: 1,
      hint: "S comes before K in the word.",
      note: "AASK. Saying AAKS is common but can sound careless in interviews.", badge: "briefcase",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Interview words (double) ----------
    {
      type: "learn", door: 6,
      title: "Words you will say in interviews and presentations.",
      points: [["determine", "di-TER-min. Not deter-MINE"], ["career", "kuh-REER. Not CARE-ee-er or carrier"], ["hierarchy", "HY-er-ar-kee. Four beats"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["briefcase", "Interview words", "Say them with confidence"], ["mic", "Then the final challenge", "A tongue twister battle"]] }
    },
    NQ(6, "Interview Words", {
      double: true,
      prompt: "How do you say “determine”?",
      options: ["di-TER-min", "dee-ter-MINE", "DEE-ter-mine", "de-TER-mine"], answer: 0,
      hint: "It ends like “min”, not “mine”.",
      note: "di-TER-min. Determined: di-TER-mind.", badge: "target"
    }),
    NQ(6, "Interview Words", {
      double: true,
      prompt: "“I want to build my career in data science.” How do you say “career”?",
      options: ["KAR-ee-er", "KAIR-ee-er", "kuh-REER", "CARRY-er"], answer: 2,
      hint: "Stress the end. It rhymes with “here”.",
      note: "kuh-REER. A carrier (KAIR-ee-er) carries things, like a phone network.", badge: "graduation-cap"
    }),
    NQ(6, "Interview Words", {
      double: true,
      prompt: "How do you say “hierarchy”?",
      options: ["HY-er-ar-kee", "hi-RAR-chee", "HY-ar-chee", "hi-er-AR-kee"], answer: 0,
      hint: "The CH sounds like K.",
      note: "HY-er-ar-kee. It means levels of authority in an organisation.", badge: "users",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · clearest team wins +200", prompt: "One player per team says: “The photographer determined the hierarchy in the hotel suite on Wednesday.”", note: "fuh-TOG-ruh-fer, di-TER-mind, HY-er-ar-kee, ho-TEL, SWEET, WENZ-day. Clearest wins.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "12 Words to Say Right", note: "Screenshot this. Say each word aloud 3 times today.", items: SAYIT },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
