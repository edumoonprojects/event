// How Recommendations Work (EduMoon AI Lab). Medium: for all years.
// Why apps suggest what they suggest: signals, content-based and collaborative filtering, feedback loops, filter bubbles, and how to take back control of your feed. All apps and numbers are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const HR2 = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const HRN = (round, name, extra) => HR2(round, name, Object.assign({ kind: "number", time: 55 }, extra));

// The take-home card: recommendations in 8 lines.
const RECCARD = [
  ["Recommender", "A system that guesses what you will like next."],
  ["Signals", "Watch time, likes, skips, searches, shares, time of day."],
  ["Content-based", "“You watched cricket highlights, here are more cricket highlights.”"],
  ["Collaborative", "“People who liked what you liked also liked this.”"],
  ["Feedback loop", "You watch → it shows more of that → you watch more of that."],
  ["Filter bubble", "Seeing only one kind of view or content, again and again."],
  ["Take control", "Use “Not interested”, pause or clear history, follow new topics on purpose."],
  ["Remember", "The feed is optimised for your attention, not always for your goals."]
];

window.GAME = {
  id: "how-recommendations-work",
  title: "How Recommendations Work",
  club: "AI Lab",
  tagline: "Why does the app know exactly what you will watch next? Look inside the feed.",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "35 minutes", level: "Medium",
    about: "Kiran opened a made-up video app, ReelRiver, to watch one coding tutorial. Two hours later he was watching cooking videos from another country. In 6 rounds, teams learn how recommenders work: the signals they use, content-based and collaborative filtering, feedback loops, filter bubbles, and practical ways to take control of their own feed.",
    outcomes: "How video, shopping and music apps choose suggestions, the two main recommendation methods, why feeds can pull you in, what a filter bubble is, and simple habits to control your feed.",
    tone: "Everyone has a “how did I end up watching this?” story. Start with a few. Keep it non-preachy: recommenders are useful, students just need to know how they work.",
    extra: [["Try it", "Ask students to open any video app and look at the first 5 suggestions. Can they guess which past actions caused each one?"]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Decoded",
    rulesEyebrow: "How How Recommendations Work works", rulesTitle: "Learn the trick behind the feed. Answer. Take control.",
    learnText: "The host explains one part of how recommendations work.", crackTitle: "Answer",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. The feed is sneakier than it looks!", cracked: "decoded it",
    next: "Next round →", finale: "Next →", winner: "control their own feeds!", endLine: "Kiran’s feed now shows what he actually wants."
  },
  offerEyebrow: "EduMoon AI Lab · Feed control",
  offerTitle: "Your feed control level",
  offers: [
    { min: 0.7, icon: "brain", title: "Feed Master", text: "You know how the feed works. Clean up one app’s history this week." },
    { min: 0.45, icon: "eye", title: "Aware Scroller", text: "Strong! Use “Not interested” five times today." },
    { min: 0.2, icon: "lightbulb", title: "Curious User", text: "Good start. Read the card below once more." },
    { min: 0, icon: "book-open", title: "Feed Beginner", text: "Everyone starts here. Notice why each video is suggested." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Two hours later",
      title: "Kiran opened ReelRiver to watch one coding tutorial. Two hours later he was watching cooking videos from another country. How did the app pull him there?",
      cards: [["eye", "Signals and how apps choose"], ["route", "Feedback loops and filter bubbles"], ["trophy", "Your score decides your feed control level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Signals ----------
    {
      type: "learn", door: 1,
      title: "Every tap is a signal.",
      points: [["Strong signals", "Watch time, rewatching, sharing, saving"], ["Other signals", "Likes, comments, searches, follows"], ["Negative signals", "Skipping quickly, “Not interested”"]],
      highlightLast: true,
      side: { label: "What the app sees", items: [["timer", "Watched 95%", "Probably liked it"], ["x", "Skipped after 2 seconds", "Probably did not"], ["search", "Searched “Python loops”", "Interested in coding"]] }
    },
    HR2(1, "Signals", {
      prompt: "Which action is usually a STRONG signal that you liked a video?",
      options: ["Scrolling past it quickly", "Muting it", "Closing the app", "Watching almost all of it"], answer: 3,
      hint: "Time spent.",
      note: "Watch time is one of the strongest signals. Most apps care more about it than likes.", badge: "timer"
    }),
    HR2(1, "Signals", {
      prompt: "Kiran skips every cooking video after 2 seconds. What will the app probably learn?",
      options: ["He secretly loves cooking videos", "He must be a trained chef", "Nothing at all, skips are ignored", "He is not interested in cooking"], answer: 3,
      hint: "Quick skips are a signal too.",
      note: "Fast skips are a negative signal. Over time, it shows fewer of those.", badge: "x"
    }),
    HRN(1, "Signals", {
      prompt: "A 60-second reel. Kiran watches it twice fully. How many seconds of watch time is that?",
      answer: 120,
      hint: "60 × 2.",
      note: "120 seconds, 200% of the video length. A rewatch is a very strong signal.", badge: "chart-column",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Content-based ----------
    {
      type: "learn", door: 2,
      title: "Method 1: more of what you already like.",
      points: [["Content-based", "Find items similar to what you engaged with"], ["How", "Topics, tags, creators, music, even what is in the video"], ["Strength and weakness", "Very relevant, but can get repetitive"]],
      highlightLast: true,
      side: { label: "Example", items: [["check", "You watched", "“Python for beginners”"], ["check", "It suggests", "“Python loops”, “Python projects”"], ["x", "It rarely suggests", "Something totally new"]] }
    },
    HR2(2, "Content-Based", {
      prompt: "Kiran watched three Telugu stand-up comedy clips. What does a content-based recommender suggest next?",
      options: ["More Telugu stand-up clips", "A random science documentary", "Hindi news headlines", "Nothing until he searches"], answer: 0,
      hint: "Similar content.",
      note: "Content-based systems match the features of what you liked: language, topic, format.", badge: "film"
    }),
    HR2(2, "Content-Based", {
      prompt: "What is the main weakness of only content-based recommendations?",
      options: ["They are always random", "They never show related things", "They can become repetitive", "They only work offline"], answer: 2,
      hint: "Only more of the same.",
      note: "You mostly get variations of what you already watched. Discovery is limited.", badge: "route"
    }),
    HR2(2, "Content-Based", {
      prompt: "An online bookstore shows “Because you bought a C programming book: Data Structures in C.” Which method?",
      options: ["Collaborative filtering", "Content-based", "Random daily picks", "Alphabetical title order"], answer: 1,
      hint: "Similar item to the one bought.",
      note: "It matched the topic of the item itself.", badge: "book-open",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Collaborative filtering ----------
    {
      type: "learn", door: 3,
      title: "Method 2: people like you also liked this.",
      points: [["Collaborative filtering", "Find users with similar tastes"], ["Then", "Suggest what they liked that you have not seen yet"], ["Why it surprises you", "It can jump to topics you never searched"]],
      highlightLast: true,
      side: { label: "How Kiran got to cooking", items: [["users", "People who watch coding tutorials late at night", "Also watched…"], ["film", "“5-minute hostel recipes”", "So it suggested those"], ["route", "He watched one", "Then more cooking appeared"]] }
    },
    HR2(3, "Collaborative", {
      prompt: "“Students who watched this DSA video also watched this resume video.” Which method is this?",
      options: ["Content-based matching only", "A random suggestion", "Collaborative filtering", "A manual editor’s pick"], answer: 2,
      hint: "Based on other people’s behaviour.",
      note: "It uses what similar users did, not what the video is about.", badge: "users"
    }),
    HRN(3, "Collaborative", {
      prompt: "Of 200 users who watched the same DSA video as Kiran, 150 also watched a resume video. What percentage is that?",
      answer: 75,
      hint: "150 ÷ 200 × 100.",
      note: "75%. A strong pattern, so the resume video is a good guess for Kiran.", badge: "chart-column"
    }),
    HR2(3, "Collaborative", {
      prompt: "Why did Kiran suddenly get cooking videos after coding tutorials?",
      options: ["The app made a typing mistake", "Similar users watched both", "He searched for cooking once", "Cooking is always shown first"], answer: 1,
      hint: "People like him.",
      note: "Collaborative filtering connected him to what similar users enjoyed, even though he never searched for it.", badge: "route",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Share one surprising recommendation you got recently, and guess which method caused it.", note: "Content-based or collaborative? 20 seconds.", points: 100 },

    // ---------- Round 4: Feedback loops ----------
    {
      type: "learn", door: 4,
      title: "Feedback loops: the feed learns from itself.",
      points: [["The loop", "It shows X → you watch X → it shows more X"], ["Optimised for attention", "Many feeds aim to keep you watching longer"], ["Autoplay and infinite scroll", "Remove natural stopping points"]],
      highlightLast: true,
      side: { label: "Breaking the loop", items: [["clock", "Set a timer", "Before opening the app"], ["x", "Turn off autoplay", "Where possible"], ["target", "Search on purpose", "Instead of scrolling the feed"]] }
    },
    HR2(4, "Feedback Loops", {
      prompt: "Kiran watches one horror short at midnight. Next day his feed is full of horror. What happened?",
      options: ["A feedback loop from one signal", "His phone has picked up a virus", "The app’s feed is broken", "Horror is shown to all users"], answer: 0,
      hint: "One watch led to more.",
      note: "One strong signal changes what is shown, which changes what you watch next.", badge: "route"
    }),
    HR2(4, "Feedback Loops", {
      prompt: "Why do many video apps use autoplay and endless scrolling?",
      options: ["They save a lot of battery", "They are required by law", "They keep you watching longer", "They make videos load slower"], answer: 2,
      hint: "What do ad-based apps want?",
      note: "More time watching usually means more ads shown. Play Business Models 101 for that side of the story.", badge: "eye"
    }),
    HRN(4, "Feedback Loops", {
      prompt: "Kiran plans 20 minutes but scrolls for 2 hours. How many extra minutes did the feed take?",
      answer: 100,
      hint: "120 − 20.",
      note: "100 extra minutes. Feeds are designed to be hard to leave, so plan the exit before you start.", badge: "timer",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Filter bubbles ----------
    {
      type: "learn", door: 5,
      title: "Filter bubbles: when the feed shows only one side.",
      points: [["What it is", "Seeing mostly content that matches what you already believe or like"], ["Why it matters", "News, opinions and even career ideas can narrow"], ["Pop the bubble", "Follow different sources on purpose"]],
      highlightLast: true,
      side: { label: "Bubble signs", items: [["x", "Every post agrees with you", "Too comfortable"], ["x", "Same 5 creators all day", "Narrow"], ["check", "Mix sources", "Different views, same topic"]] }
    },
    HR2(5, "Filter Bubbles", {
      prompt: "What is a filter bubble?",
      options: ["A soap bubble filter for your photos", "Seeing only content that matches your views", "A monthly data plan limit on your SIM", "A plastic screen protector for phones"], answer: 1,
      hint: "Inside a bubble, you only see one side.",
      note: "Recommenders can narrow what you see, especially for news and opinions.", badge: "eye"
    }),
    HR2(5, "Filter Bubbles", {
      prompt: "Kiran’s feed shows only one opinion about a college election. Best move?",
      options: ["Assume everyone already agrees", "Share the first post he sees", "Read several sources on purpose", "Stop thinking about it at all"], answer: 2,
      hint: "Step outside the bubble.",
      note: "Look up other views directly. The feed shows what keeps you watching, not the full picture.", badge: "search"
    }),
    HR2(5, "Filter Bubbles", {
      prompt: "Which habit helps most with a narrow career feed?",
      options: ["Watching only one favourite creator", "Following people from different fields", "Liking every single video you see", "Turning off the phone for good"], answer: 1,
      hint: "Variety in, variety out.",
      note: "Following people from different fields widens what the system shows you.", badge: "users",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Take control (double) ----------
    {
      type: "learn", door: 6,
      title: "Train your feed instead of letting it train you.",
      points: [["Negative feedback", "Use “Not interested” or “Don’t recommend this channel”"], ["History controls", "Pause or clear watch history in settings"], ["Feed it on purpose", "Search, save and follow what you want more of"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "Take control", "Real habits"], ["mic", "Then the final challenge", "Design a fairer feed"]] }
    },
    HR2(6, "Take Control", {
      double: true,
      prompt: "Kiran wants more coding content and less horror. What is the fastest way?",
      options: ["Watch every horror video to the end", "Delete the app and install it again", "Wait and hope the feed fixes itself", "Search coding, mark horror “Not interested”"], answer: 3,
      hint: "Give clear signals both ways.",
      note: "Positive signals for what you want, negative signals for what you don’t. The feed adapts quickly.", badge: "target"
    }),
    HR2(6, "Take Control", {
      double: true,
      prompt: "Where can Kiran usually pause or clear what the app learned from his history?",
      options: ["In the app’s history settings", "Nowhere; it is saved forever", "Only by buying a new phone", "By changing the phone wallpaper"], answer: 0,
      hint: "Settings.",
      note: "Most apps have history or privacy controls. Options differ, so check each app.", badge: "shield"
    }),
    HR2(6, "Take Control", {
      double: true,
      prompt: "If you designed a recommender for a study app, what should it optimise for?",
      options: ["Students actually learning", "Maximum minutes scrolled", "The most ads shown per day", "The most notifications sent"], answer: 0,
      hint: "What is the real goal?",
      note: "What a system optimises shapes what it shows. Good design starts with the user’s real goal.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best design wins +200", prompt: "In 30 seconds: design a recommender for a college library app. Which signals would it use, and what should it optimise for?", note: "Signals, method and goal. The host picks the most thoughtful design.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Recommendations in 8 Lines", note: "Screenshot this. Train your feed this week.", items: RECCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon AI Lab",
      joinText: "AI games, tools and projects every week. Learn to use AI the right way, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
