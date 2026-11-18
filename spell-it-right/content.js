// Spell It Right (EduMoon English Club). For all years.
// The English words students misspell most, with simple tricks to remember each one: double letters, ie/ei, silent letters, sound-alike words and resume spellings.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const SQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 30, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Tap the line with the spelling mistake" questions use the bug door with friendlier labels.
const SPOT = { kind: "bug", time: 50, step1: "What kind of mistake is it?", step2: "Tap the line with the mistake", say1: "First pick the kind of mistake.", say2: "Now tap the line with the wrong spelling.", partO: "the kind", partL: "the line", lineLabel: "line", bugLabel: "The wrong line is" };

// The take-home card: 10 words and a trick for each.
const TRICKS = [
  ["accommodate", "Big enough for two Cs and two Ms."],
  ["necessary", "One collar (C) and two sleeves (SS)."],
  ["definitely", "It has “finite” inside it: de-FINITE-ly."],
  ["separate", "There is “a rat” in sep-A-RAT-e."],
  ["receive", "I before E, except after C."],
  ["Wednesday", "Say it in your head as Wed-NES-day."],
  ["government", "Govern + ment. Don’t lose the N."],
  ["their / there / they’re", "Their = owns. There = place. They’re = they are."],
  ["its / it’s", "It’s = it is. Its = belongs to it."],
  ["principal / principle", "The principal is your PAL. A principle is a rule."]
];

window.GAME = {
  id: "spell-it-right",
  title: "Spell It Right",
  club: "English Club",
  tagline: "The words everyone misspells, and the tricks that fix them for good.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "Priya’s resume was rejected in 10 seconds because of three spelling mistakes. In 6 rounds, teams learn the words students get wrong most: double letters, ie and ei, silent letters, words that sound the same, classroom favourites, and the spellings that matter on a resume and in emails. Every word comes with a short trick to remember it.",
    outcomes: "Correct spelling of about 40 commonly misspelled words, 10 memory tricks, and the habit of checking spelling before sending anything important.",
    tone: "Spelling mistakes are common even among toppers, because English spelling is strange. Keep it light and fast. After each reveal, say the trick aloud and ask the room to repeat the word.",
    extra: [["Make it louder", "After each round, ask one team to spell the hardest word aloud letter by letter. Give them a clap, right or wrong."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Spelled",
    rulesEyebrow: "How Spell It Right works", rulesTitle: "Learn the trick. Spot the right spelling. Score.",
    learnText: "The host shares one spelling trick.", crackTitle: "Spell",
    crackText: "Pick the right spelling on your phone and lock it in.",
    rulesExtra: "Find-the-mistake questions: <b>100</b> + <b>100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. This word fools almost everyone!", cracked: "spelled it right",
    next: "Next round →", finale: "Next →", winner: "are today’s spelling champions!", endLine: "Priya’s resume is perfect now."
  },
  offerEyebrow: "EduMoon English Club · Spelling level",
  offerTitle: "Your spelling level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Spelling Champion", text: "Your resume and emails will look sharp. Help a friend check theirs." },
    { min: 0.45, icon: "spell-check", title: "Word Wizard", text: "Strong! Learn the 10 tricks below and you will rarely slip." },
    { min: 0.2, icon: "pen-tool", title: "Careful Writer", text: "Good start. Turn on spell check and read once before you send." },
    { min: 0, icon: "book-open", title: "Word Learner", text: "Everyone starts here. Learn 2 words from the card below each day." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Resume rejected",
      title: "Priya’s resume was rejected in 10 seconds. The reason? Three spelling mistakes. Can your team make sure it never happens again?",
      cards: [["spell-check", "The 40 words students misspell most"], ["lightbulb", "A simple trick for each one"], ["trophy", "Your score decides your spelling level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Double letters ----------
    {
      type: "learn", door: 1,
      title: "Double letters cause the most mistakes.",
      points: [["accommodate", "Two Cs and two Ms. It is big enough for both"], ["necessary", "One C, two Ss: one collar, two sleeves"], ["committee", "Double M, double T, double E"]],
      highlightLast: true,
      side: { label: "Watch these", items: [["check", "occasion", "Two Cs, one S"], ["check", "embarrass", "Two Rs, two Ss"], ["check", "tomorrow", "One M, two Rs"]] }
    },
    SQ(1, "Double Letters", {
      prompt: "The hostel can ___ 200 students. Which spelling is right?",
      options: ["accommodate", "accomodate", "acommodate", "acomodate"], answer: 0,
      hint: "Two of one letter, two of another.",
      note: "accommodate: two Cs and two Ms. It is big enough to hold both.", badge: "check"
    }),
    SQ(1, "Double Letters", {
      prompt: "Which spelling is right?",
      options: ["neccessary", "necessary", "necesary", "neccesary"], answer: 1,
      hint: "One collar, two sleeves.",
      note: "necessary: one C (a collar) and two Ss (two sleeves).", badge: "check"
    }),
    SQ(1, "Double Letters", {
      prompt: "The fest ___ meets on Friday. Which spelling is right?",
      options: ["commitee", "comittee", "committe", "committee"], answer: 3,
      hint: "Three pairs of double letters.",
      note: "committee: MM, TT and EE. Three doubles in one word.", badge: "users",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: ie or ei ----------
    {
      type: "learn", door: 2,
      title: "I before E, except after C.",
      points: [["believe, achieve, piece", "Most words: I comes first"], ["receive, ceiling, receipt", "Right after a C: E comes first"], ["weird, their, foreign", "A few rebels. Just learn them"]],
      highlightLast: true,
      side: { label: "Quick memory", items: [["lightbulb", "a PIEce of PIE", "piece has pie in it"], ["lightbulb", "reCEIve", "C, then E, then I"], ["lightbulb", "weird is weird", "It breaks the rule"]] }
    },
    SQ(2, "ie or ei", {
      prompt: "“I will ___ the parcel tomorrow.” Which spelling is right?",
      options: ["recieve", "receeve", "recive", "receive"], answer: 3,
      hint: "What letter comes just before the ie or ei?",
      note: "receive. It comes right after C, so it is E then I.", badge: "mail"
    }),
    SQ(2, "ie or ei", {
      prompt: "“She worked hard to ___ her goal.” Which spelling is right?",
      options: ["acheive", "achive", "achieve", "acheeve"], answer: 2,
      hint: "No C right before it.",
      note: "achieve. There is no C right before, so I comes before E.", badge: "target"
    }),
    SQ(2, "ie or ei", {
      prompt: "Which word breaks the “I before E” rule?",
      options: ["believe", "weird", "piece", "field"], answer: 1,
      hint: "Its own meaning is a clue.",
      note: "weird has E before I with no C nearby. Weird is weird.", badge: "sparkles",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Silent letters ----------
    {
      type: "learn", door: 3,
      title: "Silent letters: you don’t say them, but you must write them.",
      points: [["Wednesday", "The first D is silent. Think Wed-NES-day"], ["February", "The first R is easy to forget"], ["receipt, debt, doubt", "Silent P, silent B"]],
      highlightLast: true,
      side: { label: "More silent letters", items: [["ear", "knowledge", "Silent K"], ["ear", "honest", "Silent H"], ["ear", "island", "Silent S"]] }
    },
    SQ(3, "Silent Letters", {
      prompt: "The exam is on ___. Which spelling is right?",
      options: ["Wensday", "Wednesday", "Wednsday", "Wedensday"], answer: 1,
      hint: "Say it slowly the way it is written.",
      note: "Wednesday. Say Wed-NES-day in your head while writing.", badge: "clock"
    }),
    SQ(3, "Silent Letters", {
      prompt: "“Keep the shop ___ safe.” Which spelling is right?",
      options: ["reciept", "receit", "receipt", "reseipt"], answer: 2,
      hint: "There is a silent letter near the end, and it follows the C rule.",
      note: "receipt: E before I after C, and a silent P.", badge: "file-text"
    }),
    SQ(3, "Silent Letters", {
      prompt: "Which spelling is right?",
      options: ["Febuary", "Feburary", "Februrary", "February"], answer: 3,
      hint: "Feb, then a sound people skip.",
      note: "February. Most people say Feb-yoo-ary, so they forget the first R.", badge: "clock",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Spell “accommodate” and “necessary” aloud, letter by letter, without looking.", note: "Use the tricks: two Cs two Ms, one collar two sleeves.", points: 100 },

    // ---------- Round 4: Sound-alike words ----------
    {
      type: "learn", door: 4,
      title: "Same sound, different word, different spelling.",
      points: [["their / there / they’re", "Owns / place / they are"], ["its / it’s", "It’s always means it is or it has"], ["your / you’re", "You’re means you are"]],
      highlightLast: true,
      side: { label: "The test", items: [["search", "Can you say “it is”?", "Then write it’s"], ["search", "Can you say “you are”?", "Then write you’re"], ["search", "Is it about a place?", "Then write there"]] }
    },
    SQ(4, "Sound-Alikes", {
      prompt: "“The students forgot ___ ID cards.” Which word fits?",
      options: ["there", "their", "they’re", "thier"], answer: 1,
      hint: "The ID cards belong to the students.",
      note: "their shows ownership. there is a place. they’re means they are.", badge: "user"
    }),
    SQ(4, "Sound-Alikes", {
      prompt: "“The college changed ___ timings.” Which word fits?",
      options: ["it’s", "its’", "its", "it is"], answer: 2,
      hint: "Can you say “it is timings”?",
      note: "its means belongs to it. It’s only means it is or it has.", badge: "clock"
    }),
    SQ(4, "Sound-Alikes", {
      prompt: "“The ___ called a meeting about attendance.” Which word fits?",
      options: ["principle", "principel", "principal", "prinsipal"], answer: 2,
      hint: "Is it a person or a rule?",
      note: "The principal is a person, your PAL. A principle is a rule or belief.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Classroom favourites ----------
    {
      type: "learn", door: 5,
      title: "These words appear in every assignment, and get misspelled every time.",
      points: [["definitely", "Not definately. Think de-FINITE-ly"], ["separate", "There is “a rat” in sep-a-rat-e"], ["government, environment", "Don’t drop the N before the M"]],
      highlightLast: true,
      side: { label: "Also check", items: [["pen-tool", "grammar", "Ends in -ar, not -er"], ["pen-tool", "argument", "No E after the U"], ["pen-tool", "privilege", "No D in it"]] }
    },
    SQ(5, "Classroom Words", {
      prompt: "“I will ___ submit it on Monday.” Which spelling is right?",
      options: ["definitely", "definitly", "definately", "defenitely"], answer: 0,
      hint: "The word “finite” hides inside it.",
      note: "definitely: de-FINITE-ly. The most misspelled word in English writing.", badge: "check"
    }),
    SQ(5, "Classroom Words", {
      prompt: "“Write each answer on a ___ page.” Which spelling is right?",
      options: ["separate", "seperate", "seprate", "separete"], answer: 0,
      hint: "Find the rat.",
      note: "separate: there is “a rat” in the middle.", badge: "file-text"
    }),
    SQ(5, "Classroom Words", {
      prompt: "“The state ___ announced a new scheme.” Which spelling is right?",
      options: ["goverment", "governmant", "govermant", "government"], answer: 3,
      hint: "It comes from the word govern.",
      note: "government = govern + ment. The N that people drop is part of govern.", badge: "landmark",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Resume and email spellings (double) ----------
    {
      type: "learn", door: 6,
      title: "On a resume, one spelling mistake can end your chances.",
      points: [["Spell check is not enough", "It misses wrong words that are spelled right, like form for from"], ["Read it aloud once", "Your ear catches what your eyes skip"], ["Ask one friend", "Fresh eyes find mistakes in seconds"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["search", "Find the mistake", "In Priya’s resume and emails"], ["mic", "Then a spelling battle", "Best team wins +200"]] }
    },
    SQ(6, "Resume Check", Object.assign({}, SPOT, {
      double: true,
      prompt: "Priya’s resume. Which line has a spelling mistake?",
      code: ["Final year B.Tech student in Civil Engineering.", "Led a team of 5 in the college fest committee.", "Recieved the best project award in third year.", "Skilled in AutoCAD, Excel and public speaking."],
      outputOptions: ["An ie / ei mistake", "A double letter mistake", "A silent letter mistake"], outputAnswer: 0, bugLine: 2,
      bugText: "Recieved should be Received: E before I after C",
      hint: "Check the word right after a C.",
      note: "Received. One wrong pair of letters on the line about your best award.", badge: "file-user"
    })),
    SQ(6, "Resume Check", Object.assign({}, SPOT, {
      double: true,
      prompt: "Priya’s email to HR. Which line has a spelling mistake?",
      code: ["Dear Ma’am,", "Thank you for the opportunity to interview tomorrow.", "I will definately bring all my documents.", "Regards, Priya"],
      outputOptions: ["A silent letter mistake", "A classroom-word mistake", "A sound-alike mistake"], outputAnswer: 1, bugLine: 2,
      bugText: "definately should be definitely: de-FINITE-ly",
      hint: "One of the Round 5 words.",
      note: "definitely. Spell check sometimes misses it when the language is set wrongly. Read before sending.", badge: "mail"
    })),
    SQ(6, "Resume Check", {
      double: true,
      prompt: "Which sentence has NO spelling mistake?",
      options: ["I am a commited and hardworking student.", "Its a great oppurtunity for freshers.", "I would like to separate the two tasks.", "Your’re invited to the orientation."], answer: 2,
      hint: "Check every word in each one.",
      note: "separate is correct. The others: committed, It’s and opportunity, and You’re.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best team wins +200", prompt: "Spelling battle: the host says a word from today. One player from each team spells it aloud.", note: "Use: Wednesday, committee, receipt, government, definitely. First perfect team wins.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Words and Their Tricks", note: "Screenshot this. Check these before every resume, email and assignment.", items: TRICKS },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
