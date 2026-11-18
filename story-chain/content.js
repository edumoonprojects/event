// Story Chain (EduMoon English Club). For all years.
// Tell stories in English: story shape, linking words, past tenses, vivid details, reported speech and strong endings. Teams build one story together across the game.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const KC = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const KSPOT = { kind: "bug", time: 55, step1: "What is wrong with it?", step2: "Tap the weak line", say1: "First pick what is wrong.", say2: "Now tap the weak line.", partO: "what is wrong", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: the storyteller's toolkit.
const TOOLKIT = [
  ["Shape", "Who and where → the problem → what they did → how it ended."],
  ["Start strong", "Begin close to the action: “The bus broke down on the ghat road.”"],
  ["Link it", "First, then, suddenly, however, after that, finally."],
  ["Past tenses", "“I was walking when it started to rain.” Long action + short action."],
  ["Show, don’t tell", "Not “I was scared”, but “My hands were shaking.”"],
  ["One real detail", "A smell, a sound or a number makes it real."],
  ["Reported speech", "She said, “I am tired.” → She said she was tired."],
  ["End with a point", "A lesson, a twist or a laugh. Never just “that’s it”."]
];

window.GAME = {
  id: "story-chain",
  title: "Story Chain",
  club: "English Club",
  tagline: "Tell stories people remember. Build one together, one line at a time.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "40 minutes", level: "Medium",
    about: "Interviews, presentations and even reels need one skill: telling a story clearly. In 6 rounds, teams learn the shape of a good story, linking words, past tenses for storytelling, how to show instead of tell, reported speech and strong endings. Speaking turns run through the whole game, and the final challenge is a story chain where every team adds one line.",
    outcomes: "A simple story structure, 10 linking words, correct past tenses in stories, vivid details, reported speech, and the confidence to tell a 30-second story in English.",
    tone: "This is a speaking game, so the energy comes from the room. Praise every attempt to speak, especially from quiet students. Gently model better versions instead of correcting in front of everyone.",
    extra: [["Story chain rules", "For the final challenge: the host starts with one line. Each team adds one sentence using a linking word. The best line wins the +200."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Told",
    rulesEyebrow: "How Story Chain works", rulesTitle: "Learn the tool. Pick the best line. Tell the story.",
    learnText: "The host shares one storytelling tool.", crackTitle: "Choose",
    crackText: "Pick the best line on your phone and lock it in.",
    rulesExtra: "Speaking turns: <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even writers rewrite this part!", cracked: "nailed it",
    next: "Next round →", finale: "Next →", winner: "are today’s best storytellers!", endLine: "Every story deserves a good teller."
  },
  offerEyebrow: "EduMoon English Club · Storyteller level",
  offerTitle: "Your storyteller level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Master Storyteller", text: "People will remember your stories. Use one in your next interview." },
    { min: 0.45, icon: "mic", title: "Strong Teller", text: "Strong! Tell one 30-second story to a friend in English this week." },
    { min: 0.2, icon: "pen-tool", title: "Story Builder", text: "Good start. Practise the shape below with one memory from college." },
    { min: 0, icon: "book-open", title: "Story Listener", text: "Everyone starts here. Listen to how good speakers start their stories." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Story Chain",
      title: "Interviews, speeches and even reels all need one skill: telling a good story. Can your team learn the tools and build one together?",
      cards: [["message-circle", "Shape, linking words and tenses"], ["mic", "Speaking turns in every half"], ["trophy", "Your score decides your storyteller level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Story shape ----------
    {
      type: "learn", door: 1,
      title: "Every good story has the same simple shape.",
      points: [["Who and where", "Set the scene in one line"], ["A problem", "Something goes wrong or changes"], ["Action and ending", "What they did, and how it ended"]],
      highlightLast: true,
      side: { label: "A 4-line story", items: [["map", "Scene", "“Last Diwali, we were driving to Araku.”"], ["alarm-clock", "Problem", "“The car broke down on the ghat road.”"], ["check", "Action and end", "“A tea seller helped us. We reached at midnight.”"]] }
    },
    KC(1, "Story Shape", {
      prompt: "Which is the strongest opening line for a story?",
      options: ["“So, I want to tell you a story about something that happened.”", "“Last monsoon, our bus broke down on the Araku ghat road.”", "“This story is very interesting, please listen to it carefully.”", "“Okay, let me think about how to start this story now.”"], answer: 1,
      hint: "Which one puts you in the scene right away?",
      note: "Start close to the action: when, where and what. The other lines delay the story.", badge: "rocket"
    }),
    KC(1, "Story Shape", {
      prompt: "A story has a scene and an ending, but nothing goes wrong. What is missing?",
      options: ["A title at the top", "More characters in it", "A long description", "The problem or change"], answer: 3,
      hint: "What makes people want to keep listening?",
      note: "Without a problem, nothing happens. The problem is what makes a story a story.", badge: "flame"
    }),
    KC(1, "Story Shape", {
      prompt: "Put this story in the right order: (A) We reached at midnight. (B) The car broke down. (C) We were driving to Araku. (D) A tea seller helped us.",
      options: ["B, C, A, D", "A, D, B, C", "C, D, B, A", "C, B, D, A"], answer: 3,
      hint: "Scene, problem, action, ending.",
      note: "Scene (C), problem (B), action (D), ending (A).", badge: "list-checks",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Linking words ----------
    {
      type: "learn", door: 2,
      title: "Linking words carry the listener from one moment to the next.",
      points: [["Order", "First, then, after that, finally"], ["Surprise", "Suddenly, just then, out of nowhere"], ["Contrast", "However, but, even though"]],
      highlightLast: true,
      side: { label: "Avoid", items: [["x", "“And then… and then… and then…”", "Use different links"], ["x", "“So, so, so…”", "Pause instead"], ["check", "Mix order, surprise and contrast", "It flows better"]] }
    },
    KC(2, "Linking Words", {
      prompt: "“We were laughing on the beach. ___, a huge wave soaked all our bags.” Which word fits best?",
      options: ["Suddenly", "Finally", "However", "First"], answer: 0,
      hint: "Something unexpected.",
      note: "Suddenly signals surprise. Finally is for endings, and First is for the start.", badge: "zap"
    }),
    KC(2, "Linking Words", {
      prompt: "“I studied all night. ___, I forgot the first formula in the exam.” Which word fits best?",
      options: ["Suddenly", "First", "Because", "However"], answer: 3,
      hint: "The second part goes against what you expect.",
      note: "However shows contrast: he studied, but still forgot.", badge: "scale"
    }),
    KC(2, "Linking Words", Object.assign({}, KSPOT, {
      prompt: "Divya’s story. Which line makes it sound weakest?",
      code: ["Last week, our team entered a hackathon in Vizag.", "And then we built an app and then it crashed and then we fixed it and then we won.", "Our app helped students find free study rooms.", "Finally, the judges gave us first prize."],
      outputOptions: ["Too many “and then”s in one line", "It is in the wrong tense", "It is too short"], outputAnswer: 0, bugLine: 1,
      bugText: "it squeezes four events with “and then”. Better: “We built the app overnight. Suddenly, it crashed. However, we fixed it in time.”",
      hint: "Which line feels like a breathless list?",
      note: "Different linking words give each moment its own space. One event per sentence.", badge: "pen-tool",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: Past tenses ----------
    {
      type: "learn", door: 3,
      title: "Stories happen in the past. Two past tenses do most of the work.",
      points: [["Past simple", "Finished actions: “I reached, I saw, I ran”"], ["Past continuous", "Background: “I was walking, it was raining”"], ["Together", "“I was walking (long) when my phone rang (short).”"]],
      highlightLast: true,
      side: { label: "Common mistakes", items: [["x", "“Yesterday I go to college.”", "→ “Yesterday I went”"], ["x", "“I was go to the beach.”", "→ “I was going” or “I went”"], ["check", "“We were eating when the power went off.”", "Long + short"]] }
    },
    KC(3, "Past Tenses", {
      prompt: "Which sentence is correct?",
      options: ["“Yesterday I go to the beach with friends.”", "“Yesterday I went to the beach with friends.”", "“Yesterday I was go to the beach with friends.”", "“Yesterday I going to the beach with friends.”"], answer: 1,
      hint: "Yesterday means finished and past.",
      note: "Went is the past simple of go. Yesterday needs the past simple.", badge: "clock"
    }),
    KC(3, "Past Tenses", {
      prompt: "“I ___ for the bus when it started to rain.” Which fits best?",
      options: ["was waiting", "wait", "am waiting", "will wait"], answer: 0,
      hint: "A longer background action, then a short one.",
      note: "Was waiting (the long background), then started (the short event). This pair makes stories flow.", badge: "timer"
    }),
    KC(3, "Past Tenses", {
      prompt: "Which line tells a story most naturally?",
      options: ["“We eat dinner when the power goes off.”", "“We were eat dinner when the power was go off.”", "“We were eating dinner when the power went off.”", "“We are eating dinner when the power went off.”"], answer: 2,
      hint: "Long past action plus short past action.",
      note: "Past continuous for the background, past simple for the sudden event.", badge: "check",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Tell a 20-second story using “I was … when …”. Something that surprised you.", note: "Scene, problem, ending. Use was + -ing, then a short past action.", points: 100 },

    // ---------- Round 4: Show, don't tell ----------
    {
      type: "learn", door: 4,
      title: "Show, don’t tell. Let the listener see it.",
      points: [["Telling", "“I was very nervous.”"], ["Showing", "“My hands were shaking and my mouth went dry.”"], ["One real detail", "A sound, a smell, a number. It makes it real"]],
      highlightLast: true,
      side: { label: "Upgrade it", items: [["x", "“The food was good.”", "Tells"], ["check", "“The biryani was so spicy my eyes watered.”", "Shows"], ["check", "“300 students were waiting outside.”", "A real number"]] }
    },
    KC(4, "Show, Don’t Tell", {
      prompt: "Which line SHOWS fear instead of telling it?",
      options: ["“I was very, very scared at that time.”", "“I felt a lot of fear in that moment.”", "“It was a really scary experience for me.”", "“My heart was pounding, I couldn’t speak.”"], answer: 3,
      hint: "Which one could you see in a film?",
      note: "A pounding heart and lost words show fear. The others just name the feeling.", badge: "heart"
    }),
    KC(4, "Show, Don’t Tell", {
      prompt: "Which detail makes “The fest was crowded” come alive?",
      options: ["“There were many, many people there.”", "“It was extremely crowded, honestly.”", "“The queue for food reached the main gate.”", "“The fest was very crowded and busy.”"], answer: 2,
      hint: "Which one can you picture?",
      note: "A queue to the main gate paints a picture. Repeating “very crowded” does not.", badge: "eye"
    }),
    KC(4, "Show, Don’t Tell", {
      prompt: "Which line best shows that the exam was hard?",
      options: ["“The exam was really, really tough.”", "“Half the hall stopped writing early.”", "“The exam was the hardest one ever.”", "“Everyone said it was a very hard exam.”"], answer: 1,
      hint: "Look for something you could actually see.",
      note: "People putting down their pens shows how hard it was.", badge: "pen-tool",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Reported speech ----------
    {
      type: "learn", door: 5,
      title: "Reporting what someone said: move one step back in time.",
      points: [["Direct", "She said, “I am tired.”"], ["Reported", "She said (that) she was tired"], ["Shifts", "am → was, will → would, can → could"]],
      highlightLast: true,
      side: { label: "More examples", items: [["message-circle", "“I will come.”", "He said he would come"], ["message-circle", "“I can help.”", "She said she could help"], ["message-circle", "“We are late.”", "They said they were late"]] }
    },
    KC(5, "Reported Speech", {
      prompt: "Ravi said, “I am hungry.” Which reported version is correct?",
      options: ["Ravi said he is hungry", "Ravi said I am hungry", "Ravi said he was hungry", "Ravi said he will hungry"], answer: 2,
      hint: "Move one step back in time.",
      note: "am becomes was. In casual speech you will hear both, but “was” is the safe choice.", badge: "user"
    }),
    KC(5, "Reported Speech", {
      prompt: "The coach said, “We will win tomorrow.” Report it.",
      options: ["The coach said they would win the next day.", "The coach said we will win tomorrow.", "The coach said they win tomorrow.", "The coach said we are winning tomorrow."], answer: 0,
      hint: "will becomes… and tomorrow becomes…",
      note: "will → would, and tomorrow → the next day, because the moment has passed.", badge: "trophy"
    }),
    KC(5, "Reported Speech", {
      prompt: "Meena said, “I can drive.” Which is correct?",
      options: ["Meena said she can drove.", "Meena said I could drive.", "Meena said she could drive.", "Meena said she cans drive."], answer: 2,
      hint: "can → ?",
      note: "can becomes could. She said she could drive.", badge: "route",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Endings (double) ----------
    {
      type: "learn", door: 6,
      title: "End with a point: a lesson, a twist or a laugh.",
      points: [["A lesson", "“That day I learned to always carry a charger.”"], ["A twist", "“The stranger who helped us was our new principal.”"], ["A laugh", "“We won the prize, and still missed the bus home.”"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["sparkles", "Endings", "Make it stick"], ["mic", "Then the final challenge", "The story chain"]] }
    },
    KC(6, "Strong Endings", {
      double: true,
      prompt: "Which is the strongest ending for the broken-down-car story?",
      options: ["“So that’s it, that is my whole story.”", "“Now I always carry the tea seller’s number.”", "“And then we went home and slept. The end.”", "“It was a good experience, I think, overall.”"], answer: 1,
      hint: "Which one leaves the listener with something?",
      note: "It is personal, specific and a little funny. Weak endings just stop.", badge: "sparkles"
    }),
    KC(6, "Strong Endings", {
      double: true,
      prompt: "In an interview: “Tell me about a challenge.” How should the story end?",
      options: ["The result and what you learned", "With “that’s all, sir, thank you”", "With a joke about the interviewer", "With a long list of your marks"], answer: 0,
      hint: "Interviewers want to know the outcome.",
      note: "End with the result and the lesson. It turns a story into proof of your skills.", badge: "briefcase"
    }),
    KC(6, "Strong Endings", Object.assign({}, KSPOT, {
      double: true,
      prompt: "Arjun’s story for a reel. Which line weakens it most?",
      code: ["Last week, I lost my wallet on Beach Road.", "I was panicking when an auto driver stopped me.", "He was holding my wallet, with every rupee still inside.", "Anyway, I don’t know, so yeah, that’s it."],
      outputOptions: ["The ending has no point", "The opening is too long", "It uses the wrong tense"], outputAnswer: 0, bugLine: 3,
      bugText: "it fades out. Better: “That day I learned honest people are everywhere.”",
      hint: "Which line wastes the best moment?",
      note: "A great story with a weak ending feels unfinished. Plan your last line before you start.", badge: "x",
      board: true, boardLabel: "after Round 6"
    })),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best line wins +200", prompt: "Story chain: the host starts with “Last night, the hostel lights went off.” Each team adds one line with a linking word.", note: "Use suddenly, however, after that or finally. Best line wins.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Storyteller’s Toolkit", note: "Screenshot this. Use it for your next interview story or reel.", items: TOOLKIT },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
