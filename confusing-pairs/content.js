// Confusing Pairs (EduMoon English Club). Beginner: for all years.
// Word pairs that look or sound alike: affect/effect, advice/advise, lose/loose, than/then, borrow/lend, stationary/stationery, fewer/less, since/for, everyday/every day, maybe/may be, and more.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const CP = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 25, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const CPSPOT = { kind: "bug", time: 50, step1: "Which pair is mixed up?", step2: "Tap the line with the mistake", say1: "First pick the pair.", say2: "Now tap the wrong line.", partO: "the pair", partL: "the line", lineLabel: "line", bugLabel: "The wrong line is" };

// The take-home card: 12 pairs and a trick for each.
const PAIRS = [
  ["affect / effect", "Affect is the Action (verb). Effect is the End result (noun)."],
  ["advice / advise", "Advice is a thing (noun). Advise is what you do (verb)."],
  ["lose / loose", "Lose your phone. Loose clothes (not tight)."],
  ["than / then", "Than compares (taller than). Then is time (first this, then that)."],
  ["borrow / lend", "You borrow from someone. You lend to someone."],
  ["stationary / stationery", "Stationary = standing still. Stationery = pens and paper (E for envelope)."],
  ["fewer / less", "Fewer for things you count. Less for things you measure."],
  ["since / for", "Since + a point in time (since 2024). For + a length of time (for 2 years)."],
  ["everyday / every day", "Everyday = ordinary. Every day = each day."],
  ["maybe / may be", "Maybe = perhaps. May be = might be."],
  ["quiet / quite", "Quiet = silent. Quite = fairly."],
  ["already / all ready", "Already = before now. All ready = fully prepared."]
];

window.GAME = {
  id: "confusing-pairs",
  title: "Confusing Pairs",
  club: "English Club",
  tagline: "Affect or effect? Lose or loose? Fix the word pairs that trip everyone up.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "Ravi’s internship email said he wanted to “loose weight” and asked his manager for “an advise”. In 6 rounds, teams learn 12 confusing word pairs with a simple trick for each: meaning pairs, sound-alike pairs, borrow and lend, stationary and stationery, fewer and less, since and for, and one-word vs two-word pairs. The last round checks a real email.",
    outcomes: "Correct use of 12 commonly confused word pairs, with a memory trick for each, and the habit of checking them before sending.",
    tone: "Fast and fun. After each reveal, say a short sentence with the right word and have the room repeat it. Nobody should feel embarrassed; native speakers mix these up too.",
    extra: [["Quick drill", "Between rounds, say a sentence with a blank and ask the room to shout the right word."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Fixed",
    rulesEyebrow: "How Confusing Pairs works", rulesTitle: "Learn the trick. Pick the right word. Be fast.",
    learnText: "The host shares two or three pairs and a trick for each.", crackTitle: "Pick",
    crackText: "Pick the right word on your phone, fast.",
    rulesExtra: "25 seconds each. Faster scores more. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. This pair fools almost everyone!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "never mix up their words!", endLine: "Ravi’s emails are spotless now."
  },
  offerEyebrow: "EduMoon English Club · Word level",
  offerTitle: "Your word level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Word Wizard", text: "You never mix them up. Help a friend check their resume." },
    { min: 0.45, icon: "spell-check", title: "Sharp Writer", text: "Strong! Learn the 3 pairs you missed from the card below." },
    { min: 0.2, icon: "pen-tool", title: "Careful Learner", text: "Good start. Use the tricks; they really work." },
    { min: 0, icon: "book-open", title: "Pair Learner", text: "Everyone starts here. Learn two pairs a day this week." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Mixed-up words",
      title: "Ravi’s email to his manager said he wanted to “loose weight” and asked for “an advise”. Can your team untangle the words that trip everyone up?",
      cards: [["spell-check", "12 confusing pairs"], ["lightbulb", "A memory trick for each"], ["trophy", "Your score decides your word level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Meaning pairs ----------
    {
      type: "learn", door: 1,
      title: "Pairs where one is an action and one is a thing.",
      points: [["affect / effect", "Affect is the Action; Effect is the End result"], ["advice / advise", "Advice is a thing; advise is what you do"], ["Test", "Can you put “an” or “the” before it? Then it is the thing"]],
      highlightLast: true,
      side: { label: "Examples", items: [["check", "“Lack of sleep affects your marks.”", ""], ["check", "“It had a big effect.”", ""], ["check", "“Can you advise me? Your advice helped.”", ""]] }
    },
    CP(1, "Action or Thing", {
      prompt: "“Late nights ___ your concentration.”",
      options: ["affect", "effect", "effects", "affection"], answer: 0,
      hint: "It is the action here.",
      note: "affect: the action. The result would be “an effect”.", badge: "zap"
    }),
    CP(1, "Action or Thing", {
      prompt: "“My senior gave me good ___ about placements.”",
      options: ["advise", "advice", "advices", "adviced"], answer: 1,
      hint: "Can you say “a piece of ___”?",
      note: "advice is the thing. It has no plural: “some advice”, not “advices”.", badge: "message-circle"
    }),
    CP(1, "Action or Thing", {
      prompt: "“Could you ___ me on which elective to choose?”",
      options: ["advice", "advise", "advised", "advices"], answer: 1,
      hint: "It is what the person does.",
      note: "advise is the verb (say it with a z sound: ad-VIZE).", badge: "graduation-cap",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Sound-alikes ----------
    {
      type: "learn", door: 2,
      title: "Pairs that sound almost the same.",
      points: [["lose / loose", "Lose your phone; loose shirt"], ["than / then", "Than compares; then is time"], ["quiet / quite", "Quiet is silent; quite means fairly"]],
      highlightLast: true,
      side: { label: "Tricks", items: [["lightbulb", "loose has two Os", "Like a loose, baggy shirt"], ["lightbulb", "thEn", "E for timE"], ["lightbulb", "quiET", "Ends like “be quiet”"]] }
    },
    CP(2, "Sound-Alikes", {
      prompt: "“Don’t ___ your ID card before the exam.”",
      options: ["loose", "loss", "lose", "lost"], answer: 2,
      hint: "Opposite of find.",
      note: "lose = not have any more. loose = not tight.", badge: "search"
    }),
    CP(2, "Sound-Alikes", {
      prompt: "“Vizag is bigger ___ Kakinada.”",
      options: ["then", "than", "that", "the"], answer: 1,
      hint: "A comparison.",
      note: "than compares. then is about time: “First lunch, then class.”", badge: "scale"
    }),
    CP(2, "Sound-Alikes", {
      prompt: "“The library was ___ quiet today.”",
      options: ["quiet", "quit", "quitely", "quite"], answer: 3,
      hint: "It means “fairly” here.",
      note: "quite (fairly) quiet (silent). Both in one sentence!", badge: "book-open",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Direction and spelling pairs ----------
    {
      type: "learn", door: 3,
      title: "Direction pairs and spelling pairs.",
      points: [["borrow / lend", "Borrow FROM someone; lend TO someone"], ["stationary / stationery", "stationAry = standing still; stationEry = envelopes, pens, paper"], ["Indian English trap", "“Can you borrow me your pen?” should be “lend me”"]],
      highlightLast: true,
      side: { label: "Examples", items: [["check", "“Can I borrow your pen?”", ""], ["check", "“Can you lend me your pen?”", ""], ["check", "“A stationery shop near college”", ""]] }
    },
    CP(3, "Direction and Spelling", {
      prompt: "“Can you ___ me your calculator for the exam?”",
      options: ["borrow", "lend", "loan from", "take"], answer: 1,
      hint: "Giving TO me.",
      note: "lend me. “Can I borrow your calculator?” is also correct.", badge: "handshake"
    }),
    CP(3, "Direction and Spelling", {
      prompt: "“I bought pens and files at the ___ shop.”",
      options: ["stationery", "stationary", "stationeri", "stationory"], answer: 0,
      hint: "E for envelope.",
      note: "stationery: pens, paper, envelopes. stationary means not moving.", badge: "pen-tool"
    }),
    CP(3, "Direction and Spelling", {
      prompt: "“The bus was ___ at the signal for ten minutes.”",
      options: ["stationary", "stationery", "station", "stationed"], answer: 0,
      hint: "Not moving.",
      note: "stationary: standing still. A for “at rest”.", badge: "route",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say one sentence using “borrow” and one using “lend” about something in your bag.", note: "Borrow from, lend to. 20 seconds.", points: 100 },

    // ---------- Round 4: Counting and time ----------
    {
      type: "learn", door: 4,
      title: "Counting pairs and time pairs.",
      points: [["fewer / less", "Fewer students (you count them); less water (you measure it)"], ["since / for", "Since 2024 (a point); for 2 years (a length)"], ["between / among", "Between two; among many"]],
      highlightLast: true,
      side: { label: "Quick test", items: [["check", "Can you count it one by one?", "Use fewer"], ["check", "Is it a starting point?", "Use since"], ["check", "Only two people?", "Use between"]] }
    },
    CP(4, "Counting and Time", {
      prompt: "“This year, ___ students joined the club.”",
      options: ["less", "lesser", "few of", "fewer"], answer: 3,
      hint: "Can you count students?",
      note: "fewer, because students are counted one by one.", badge: "users"
    }),
    CP(4, "Counting and Time", {
      prompt: "“I have been learning Python ___ two years.”",
      options: ["since", "from", "for", "by"], answer: 2,
      hint: "A length of time.",
      note: "for two years. since would need a starting point: “since 2024”.", badge: "clock"
    }),
    CP(4, "Counting and Time", {
      prompt: "“Divide the prize money ___ the five team members.”",
      options: ["between", "within", "among", "in"], answer: 2,
      hint: "More than two people.",
      note: "among for a group; between is usually for two.", badge: "indian-rupee",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: One word or two ----------
    {
      type: "learn", door: 5,
      title: "One word or two? The meaning changes.",
      points: [["everyday / every day", "Everyday clothes; I run every day"], ["maybe / may be", "Maybe I’ll come; it may be late"], ["already / all ready", "I already paid; we are all ready"]],
      highlightLast: true,
      side: { label: "Test", items: [["check", "Can you swap in “each day”?", "Then every day"], ["check", "Can you swap in “perhaps”?", "Then maybe"], ["check", "Can you swap in “fully prepared”?", "Then all ready"]] }
    },
    CP(5, "One Word or Two", {
      prompt: "“I practise speaking English ___.”",
      options: ["everyday", "every-day", "everydays", "every day"], answer: 3,
      hint: "Can you say “each day”?",
      note: "every day (each day). everyday means ordinary: “everyday English”.", badge: "clock"
    }),
    CP(5, "One Word or Two", {
      prompt: "“The results ___ out by Friday.”",
      options: ["maybe", "mabe", "may-be", "may be"], answer: 3,
      hint: "It means “might be”.",
      note: "may be = might be. maybe = perhaps: “Maybe they’ll come out Friday.”", badge: "file-text"
    }),
    CP(5, "One Word or Two", {
      prompt: "“The team is ___ for the hackathon.”",
      options: ["all ready", "already", "allready", "all-readied"], answer: 0,
      hint: "Fully prepared.",
      note: "all ready = fully prepared. already = before now: “We already registered.”", badge: "badge-check",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Email check (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: catch the pairs in real messages.",
      points: [["Read slowly", "Your brain auto-corrects; slow down"], ["Spell check misses these", "Both words are real, so no red line"], ["Use the tricks", "Action/End, two Os, E for envelope"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["mail", "Real messages", "Find the mix-up"], ["mic", "Then the final challenge", "Pair battle"]] }
    },
    CP(6, "Email Check", Object.assign({}, CPSPOT, {
      double: true,
      prompt: "Ravi’s email to his manager. Which line has a mix-up?",
      code: ["Dear Ma’am,", "Thank you for the feedback on my report.", "Could you give me an advise on improving my charts?", "Regards, Ravi"],
      outputOptions: ["advice / advise", "affect / effect", "than / then"], outputAnswer: 0, bugLine: 2,
      bugText: "“an advise” should be “some advice” or “advice”: it is the thing, not the action",
      hint: "Is it the thing or the action?",
      note: "“Could you give me some advice…?” or “Could you advise me…?”", badge: "mail"
    })),
    CP(6, "Email Check", Object.assign({}, CPSPOT, {
      double: true,
      prompt: "A club notice. Which line has a mix-up?",
      code: ["Hi everyone!", "The workshop starts at 4 PM, than we have snacks.", "Please bring your laptops and chargers.", "See you there!"],
      outputOptions: ["than / then", "lose / loose", "fewer / less"], outputAnswer: 0, bugLine: 1,
      bugText: "“than” compares; for time, use “then”",
      hint: "Is it a comparison or a time order?",
      note: "“…at 4 PM, then we have snacks.”", badge: "clock"
    })),
    CP(6, "Email Check", {
      double: true,
      prompt: "Which sentence is fully correct?",
      options: ["“Can you borrow me less notes then last time?”", "“Can you lend me less notes then last time?”", "“Can you lend me fewer notes than last time?”", "“Can you borrow me fewer notes than last time?”"], answer: 2,
      hint: "Check lend, fewer and than.",
      note: "lend me (giving to me), fewer notes (countable), than (comparison).", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best team wins +200", prompt: "Pair battle: the host says one word from a pair. Your team must use BOTH words of the pair correctly in one sentence.", note: "Try: affect, lose, stationery, fewer, maybe. Best sentence wins.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "12 Confusing Pairs", note: "Screenshot this. Check these before every email.", items: PAIRS },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
