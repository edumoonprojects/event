// Guess the Movie from the Plot (EduMoon Fun Zone). For all years.
// Famous Telugu and Indian films described in one simple line (our own words, no film text or images).
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const GM = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 25, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const WATCHLIST = [
  ["Eega (2012)", "Revenge, from a housefly’s point of view."],
  ["Magadheera (2009)", "A love story across 400 years."],
  ["Jersey (2019)", "A comeback at 36, for a son’s wish."],
  ["Mahanati (2018)", "The life of actress Savitri."],
  ["Aditya 369 (1991)", "Telugu cinema’s classic time-travel film."],
  ["Dangal (2016)", "A father, two daughters, and wrestling gold."],
  ["Lagaan (2001)", "A village bets its tax on one cricket match."],
  ["Kantara (2022)", "Tradition, land and a forest officer."]
];

window.GAME = {
  id: "guess-the-movie",
  title: "Guess the Movie from the Plot",
  club: "Fun Zone",
  tagline: "One line. Four movies. 25 seconds. How well do you know Telugu and Indian cinema?",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Beginner",
    about: "A fast movie quiz. Each question describes a famous Telugu or Indian film in one simple, slightly funny line, and teams pick the movie from four options. Four rounds: Telugu blockbusters, India’s big hits, a hard round for true fans, and a double-points final.",
    outcomes: "A fun icebreaker that gets everyone talking, plus practice in reading and summarising stories in simple English.",
    tone: "Loud and fun. Let students shout their favourite dialogues after each answer (without playing film clips). Great as an opener before a club session or for freshers.",
    extra: [["Bonus round idea", "Ask each team to describe a movie in one line, without names. Other teams guess."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Movie buff",
    rulesEyebrow: "How this game works", rulesTitle: "Read the plot. Guess the movie. Fast.",
    learnText: "The host introduces the round.", crackTitle: "Guess",
    crackText: "Pick the movie on your phone. You have 25 seconds.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 4: <b>double</b>!",
    nobody: "Nobody got this one. Time for a movie night!", cracked: "guessed it",
    next: "Next round →", finale: "Next →", winner: "are today’s biggest movie buffs!", endLine: "Now go describe your favourite movie in one line."
  },
  offerEyebrow: "EduMoon Fun Zone · Movie results",
  offerTitle: "Your movie rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Box Office King", text: "You know cinema inside out. Host the next movie quiz!" },
    { min: 0.45, icon: "film", title: "First Day First Show", text: "Strong! You clearly watch a lot of movies." },
    { min: 0.2, icon: "sparkles", title: "Weekend Watcher", text: "Good start. Check the watchlist for your next movie night." },
    { min: 0, icon: "book-open", title: "Trailer Fan", text: "Everyone starts somewhere. The watchlist is waiting for you." }
  ],
  steps: [
    {
      type: "story",
      alert: "EduMoon Fun Zone · Guess the Movie",
      title: "One line. Four movies. 25 seconds. Let’s find out who the real movie buffs are.",
      cards: [["film", "Telugu blockbusters"], ["star", "India’s biggest hits"], ["flame", "A hard round for true fans"]]
    },
    { type: "rules" },

    // ---------- Round 1: Telugu blockbusters ----------
    {
      type: "learn", door: 1,
      title: "Round 1: Telugu blockbusters.",
      points: [["How it works", "One line about the story, four movie names"], ["Be quick", "25 seconds, and faster answers score more"], ["No spoilers?", "Only the start of each story, mostly"]],
      highlightLast: true,
      side: { label: "Warm-up", items: [["film", "Plot", "A man becomes a housefly…"], ["clock", "Time", "25 seconds"], ["zap", "Answer", "Tap fast!"]] }
    },
    GM(1, "Telugu Hits", {
      prompt: "A man is killed, comes back as a housefly, and makes his killer’s life miserable.",
      options: ["Magadheera", "Eega", "Arundhati", "Pokiri"], answer: 1,
      hint: "The hero is very, very small.",
      note: "Eega (2012). Revenge has never been so tiny.", badge: "film"
    }),
    GM(1, "Telugu Hits", {
      prompt: "A warrior from 400 years ago is reborn as a bike stunt rider and finds his princess again.",
      options: ["Baahubali", "Athadu", "Magadheera", "Okkadu"], answer: 2,
      hint: "Reincarnation and horses.",
      note: "Magadheera (2009). A love story across 400 years.", badge: "swords"
    }),
    GM(1, "Telugu Hits", {
      prompt: "A failed cricketer returns to the game at 36, just to buy his son a cricket jersey.",
      options: ["Jersey", "Majili", "Ninnu Kori", "Fidaa"], answer: 0,
      hint: "The title is the gift.",
      note: "Jersey (2019). Bring tissues.", badge: "heart"
    }),
    GM(1, "Telugu Hits", {
      prompt: "A baby is switched at birth: the rich family’s son grows up in a clerk’s house, and nobody knows.",
      options: ["Srimanthudu", "Bharat Ane Nenu", "Sarileru Neekevvaru", "Ala Vaikunthapurramuloo"], answer: 3,
      hint: "A very long title, and very famous songs.",
      note: "Ala Vaikunthapurramuloo (2020).", badge: "sparkles",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: India's big hits ----------
    {
      type: "learn", door: 2,
      title: "Round 2: India’s biggest hits.",
      points: [["Across India", "Hindi, Kannada and more"], ["Famous stories", "Most of the room will know some of these"], ["Speed", "Still 25 seconds"]],
      highlightLast: true,
      side: { label: "Round 2", items: [["star", "Pan-India", "Big hits"], ["users", "Teams", "Discuss fast"], ["clock", "Time", "25 seconds"]] }
    },
    GM(2, "India’s Hits", {
      prompt: "A father trains his two daughters to become wrestling champions.",
      options: ["Sultan", "Dangal", "Chak De! India", "Mary Kom"], answer: 1,
      hint: "Based on a true story from Haryana.",
      note: "Dangal (2016).", badge: "trophy"
    }),
    GM(2, "India’s Hits", {
      prompt: "Villagers in British India bet three years of tax on one cricket match against the British.",
      options: ["Lagaan", "Iqbal", "83", "Swades"], answer: 0,
      hint: "The title means tax.",
      note: "Lagaan (2001).", badge: "landmark"
    }),
    GM(2, "India’s Hits", {
      prompt: "Three engineering college friends go looking for their missing classmate and question the education system.",
      options: ["Chhichhore", "Dil Chahta Hai", "3 Idiots", "Munna Bhai"], answer: 2,
      hint: "All is well.",
      note: "3 Idiots (2009).", badge: "graduation-cap"
    }),
    GM(2, "India’s Hits", {
      prompt: "A boy from Mumbai’s streets rises to rule the gold fields.",
      options: ["Pushpa: The Rise", "Salaar", "Vikram", "KGF: Chapter 1"], answer: 3,
      hint: "The initials of a famous gold mining area.",
      note: "KGF: Chapter 1 (2018). Kolar Gold Fields.", badge: "crown",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Hard round ----------
    {
      type: "learn", door: 3,
      title: "Round 3: for true fans only.",
      points: [["Older films", "Classics your parents will know"], ["Biopics", "Real lives on screen"], ["Ask home", "Didn’t know one? Ask your family tonight"]],
      highlightLast: true,
      side: { label: "Hard mode", items: [["flame", "Classics", "Before 2000"], ["book-open", "True stories", "Biopics"], ["clock", "Time", "25 seconds"]] }
    },
    GM(3, "Hard Mode", {
      prompt: "A scientist’s time machine takes a young man back to the court of Sri Krishnadevaraya.",
      options: ["Bhairava Dweepam", "Aditya 369", "Mayabazar", "Jagadeka Veerudu"], answer: 1,
      hint: "The title has a number.",
      note: "Aditya 369 (1991), Telugu cinema’s classic time-travel film.", badge: "clock"
    }),
    GM(3, "Hard Mode", {
      prompt: "The life story of yesteryear actress Savitri, from stardom to struggle.",
      options: ["Mahanati", "Sita Ramam", "Shyam Singha Roy", "Rangasthalam"], answer: 0,
      hint: "The title means “great actress”.",
      note: "Mahanati (2018).", badge: "star"
    }),
    GM(3, "Hard Mode", {
      prompt: "A village’s spirit-dance tradition, a land dispute and a stubborn forest officer.",
      options: ["Vikram Vedha", "Kantara", "Virupaksha", "Karthikeya 2"], answer: 1,
      hint: "A Kannada film that became a pan-India hit.",
      note: "Kantara (2022).", badge: "flame",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Double points ----------
    {
      type: "learn", door: 4,
      title: "Final round: double points!",
      points: [["Mixed", "Telugu and Indian films"], ["Double", "Every answer counts twice"], ["Comebacks", "Anyone can still win"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "x2"], ["clock", "Time", "25 seconds"], ["trophy", "Winner", "Movie Buff of the day"]] }
    },
    GM(4, "Final", {
      double: true,
      prompt: "Two revolutionaries become best friends in 1920s Delhi, without knowing they’re on opposite sides.",
      options: ["Syeraa", "Manikarnika", "RRR", "Kesari"], answer: 2,
      hint: "Fire and water. An Oscar-winning song.",
      note: "RRR (2022).", badge: "swords"
    }),
    GM(4, "Final", {
      double: true,
      prompt: "A medical student with anger issues spirals after his girlfriend is married off to someone else.",
      options: ["Geetha Govindam", "Arjun Reddy", "Pelli Choopulu", "Ee Nagaraniki Emaindi"], answer: 1,
      hint: "Named after the hero.",
      note: "Arjun Reddy (2017).", badge: "heart"
    }),
    GM(4, "Final", {
      double: true,
      prompt: "A red sandalwood smuggler rises to the top of the syndicate and refuses to bow to anyone.",
      options: ["Pushpa: The Rise", "Rangasthalam", "Sarkaru Vaari Paata", "Waltair Veerayya"], answer: 0,
      hint: "“Thaggedhe le.”",
      note: "Pushpa: The Rise (2021).", badge: "crown",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Your turn · +100", prompt: "Describe any movie in ONE line, in English, without saying its name. The room guesses!", note: "Funny is good. No spoilers of the ending!", points: 100 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Weekend watchlist", note: "Screenshot this. Haven’t seen one? Watch it this weekend.", items: WATCHLIST },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Quizzes, games and events for students across Vizag every week.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
