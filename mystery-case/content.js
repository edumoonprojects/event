// Mystery Case (EduMoon Fun Zone). Advanced: for all years who like logic puzzles.
// One detective story across six rounds: "The Missing Fest Trophy". Teams read clues, rule out suspects, spot contradictions and red herrings, and solve the case. All people and places are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const MC = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const MCN = (round, name, extra) => MC(round, name, Object.assign({ kind: "number", time: 50 }, extra));

// The take-home card: how detectives think.
const DETECTIVE = [
  ["Fix the time window", "When was it last seen? When was it found missing?"],
  ["Rule people out", "Who could not have been there at the right time?"],
  ["Look for contradictions", "Two clues that cannot both be true point to a lie or a mistake."],
  ["Check physical clues", "Stains, sizes, footprints. They are hard to fake."],
  ["Watch for red herrings", "A strong motive is not evidence of action."],
  ["Test the story", "Does the suspect’s explanation match the records?"],
  ["Follow the evidence, not the gossip", "Facts first, opinions last."],
  ["Use it everywhere", "Debugging code, aptitude puzzles and interviews use the same thinking."]
];

window.GAME = {
  id: "mystery-case",
  title: "Mystery Case",
  club: "Fun Zone",
  tagline: "The fest trophy is missing. Five suspects. One timeline. Can your team solve it?",
  art: window.STORY_ART,
  guide: {
    years: "All years · any crowd", time: "40 minutes", level: "Advanced",
    about: "The night before the final, the winners’ trophy vanishes from the fest office at a made-up college, Coastline Institute. Five suspects: Arjun the fest coordinator, Bhavya the sound tech, Charan the canteen helper, Divya the decor head and Eshan the photographer. Over 6 rounds, teams use a timeline, alibis, physical clues, red herrings and a twist to solve the case. Each round builds on the last, so read the clues carefully.",
    outcomes: "Logical deduction: building a timeline, ruling out possibilities, spotting contradictions and red herrings, and testing a story against evidence. The same skills help in debugging and aptitude puzzles.",
    tone: "Play it like a detective show. Read the clues dramatically, pause before reveals, and let teams argue their theory before you show the answer. Keep a running clue board if you have a whiteboard.",
    extra: [["Clue board", "Write the five suspects in columns. After each round, cross out or circle names together with the room."]]
  },
  words: {
    round: "Clue", unlocked: "Answer", badgeLabel: "Solved",
    rulesEyebrow: "How Mystery Case works", rulesTitle: "Read the clues. Rule out suspects. Solve the case.",
    learnText: "The host reveals the next set of clues.", crackTitle: "Deduce",
    crackText: "Use the clues and lock in your answer.",
    rulesExtra: "Clues build on each other. Clue 6: <b>double</b>!",
    nobody: "Nobody cracked this one. The case gets clearer from here!", cracked: "cracked it",
    next: "Next clue →", finale: "Next →", winner: "are today’s master detectives!", endLine: "Case closed. The trophy is back."
  },
  offerEyebrow: "Coastline Institute · Detective rank",
  offerTitle: "Your detective rank",
  offers: [
    { min: 0.7, icon: "search", title: "Master Detective", text: "Nothing slips past you. Try Brain Teasers next." },
    { min: 0.45, icon: "eye", title: "Sharp Inspector", text: "Strong! Use the timeline method on your next aptitude puzzle." },
    { min: 0.2, icon: "lightbulb", title: "Junior Detective", text: "Good start. Watch for contradictions next time." },
    { min: 0, icon: "party-popper", title: "Curious Bystander", text: "Everyone starts here. Mysteries get easier with practice!" }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · The Missing Fest Trophy",
      title: "The night before the fest final, the winners’ trophy vanished from the fest office. Five suspects. One evening. Can your team find out what happened?",
      cards: [["search", "Arjun, Bhavya, Charan, Divya, Eshan"], ["clock", "Timeline, alibis, clues and a twist"], ["trophy", "Your score decides your detective rank"]]
    },
    { type: "rules" },

    // ---------- Clue 1: The timeline ----------
    {
      type: "learn", door: 1,
      title: "Clue set 1: the timeline and the keypad log.",
      points: [["6:30 PM", "The watchman sees the trophy on the office shelf"], ["8:00 PM", "Arjun finds the shelf empty"], ["Keypad log", "Arjun’s code 6:10 to 6:20 · Bhavya’s code 6:45 to 6:55 · Divya’s code 7:30 to 7:40"]],
      highlightLast: true,
      side: { label: "Suspects", items: [["user", "Arjun", "Fest coordinator"], ["user", "Bhavya", "Sound tech"], ["user", "Divya", "Decor head"]] }
    },
    MCN(1, "Timeline", {
      prompt: "How many minutes long is the window in which the trophy went missing?",
      answer: 90,
      hint: "From 6:30 to 8:00.",
      note: "90 minutes: from 6:30, when it was last seen, to 8:00, when it was found missing.", badge: "clock"
    }),
    MC(1, "Timeline", {
      prompt: "Whose keypad entry happened completely BEFORE the trophy was last seen?",
      options: ["Bhavya’s", "Divya’s", "Arjun’s", "Nobody’s"], answer: 2,
      hint: "Compare each entry with 6:30.",
      note: "Arjun’s code was used 6:10 to 6:20, before the 6:30 sighting. His visit cannot explain the missing trophy.", badge: "search"
    }),
    MC(1, "Timeline", {
      prompt: "Which codes were used INSIDE the 6:30 to 8:00 window?",
      options: ["Bhavya’s and Divya’s", "Arjun’s and Bhavya’s", "Only Arjun’s", "Only Divya’s"], answer: 0,
      hint: "Two entries fall in the window.",
      note: "Bhavya’s code at 6:45 and Divya’s at 7:30. Two leads to check.", badge: "list-checks",
      board: true, boardLabel: "after Clue 1"
    }),

    // ---------- Clue 2: Alibis ----------
    {
      type: "learn", door: 2,
      title: "Clue set 2: a photo and a confession.",
      points: [["Eshan’s photo", "Timestamped 6:50 PM: Bhavya on stage, testing mics, far from the office"], ["Bhavya says", "“I gave my keypad code to Charan earlier so he could leave water bottles inside.”"], ["CCTV, 7:30", "Divya enters with empty hands and leaves with a flat decor box, 40 cm tall"]],
      highlightLast: true,
      side: { label: "New suspects", items: [["user", "Charan", "Canteen helper"], ["user", "Eshan", "Photographer"], ["eye", "The trophy", "60 cm tall"]] }
    },
    MC(2, "Alibis", {
      prompt: "Bhavya’s code was used 6:45 to 6:55, but a 6:50 photo shows her on stage. What does this suggest?",
      options: ["Someone used her code", "Bhavya was in two places", "The keypad deletes old logs", "The trophy left by itself"], answer: 0,
      hint: "Both clues cannot be true for Bhavya.",
      note: "A contradiction. Either the photo time is wrong, or someone else typed her code. The second fits the next clue.", badge: "search"
    }),
    MC(2, "Alibis", {
      prompt: "Based on Bhavya’s statement, who is most likely to have used her code?",
      options: ["Arjun", "Divya", "Eshan", "Charan"], answer: 3,
      hint: "Who did she share it with?",
      note: "She shared her code with Charan. He becomes our main lead.", badge: "key"
    }),
    MCN(2, "Alibis", {
      prompt: "The trophy is 60 cm tall. Divya’s box is 40 cm tall. By how many cm is the trophy too tall to stand inside it?",
      answer: 20,
      hint: "60 − 40.",
      note: "20 cm too tall. It could not stand in her box, and the CCTV shows the box was flat. Divya looks less likely.", badge: "chart-column",
      board: true, boardLabel: "after Clue 2"
    }),

    // ---------- Clue 3: Physical evidence ----------
    {
      type: "learn", door: 3,
      title: "Clue set 3: what the room tells us.",
      points: [["A yellow stain", "Turmeric on the empty shelf"], ["Footprints", "Muddy shoe prints near the shelf, size 9"], ["Shoe sizes", "Arjun 10 · Charan 9 · Divya 6 · Eshan 11"]],
      highlightLast: true,
      side: { label: "Also", items: [["clock", "Canteen register", "Charan finished his shift at 6:40 PM"], ["map", "The kitchen", "Next to the fest office"], ["eye", "Bhavya", "On stage all evening, per photos"]] }
    },
    MC(3, "Physical Clues", {
      prompt: "Turmeric on the shelf points most strongly to which suspect?",
      options: ["Divya, the decor head", "Eshan, the photographer", "Arjun, the coordinator", "Charan, from the canteen"], answer: 3,
      hint: "Who works with turmeric every day?",
      note: "The canteen helper handles turmeric all day. Strong, but we need more than one clue.", badge: "search"
    }),
    MC(3, "Physical Clues", {
      prompt: "The footprints are size 9. Which suspect matches?",
      options: ["Arjun", "Charan", "Divya", "Eshan"], answer: 1,
      hint: "Check the size list.",
      note: "Only Charan wears size 9. Two physical clues now point to him.", badge: "eye"
    }),
    MC(3, "Physical Clues", {
      prompt: "Charan’s shift ended at 6:40. Bhavya’s code was used at 6:45. Was Charan free at that time?",
      options: ["No, he was still at work", "We cannot know at all", "Only after 8 PM", "Yes, his shift had ended"], answer: 3,
      hint: "Compare 6:40 and 6:45.",
      note: "He was free from 6:40, five minutes before the code was used. Timeline, stain and footprints all line up.", badge: "clock",
      board: true, boardLabel: "after Clue 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Present your team’s theory so far: who, when and the three strongest clues.", note: "Like a detective in the final scene. 30 seconds.", points: 100 },

    // ---------- Clue 4: Red herrings ----------
    {
      type: "learn", door: 4,
      title: "Clue set 4: things that look suspicious, but may not be.",
      points: [["Arjun’s message", "Yesterday he posted: “This trophy design is ugly!”"], ["Eshan’s deleted photo", "He deleted one picture from 7:15. He says it was blurry"], ["Keypad timing", "Bhavya’s code was active from 6:45 to 6:55"]],
      highlightLast: true,
      side: { label: "Remember", items: [["x", "A motive", "Is not proof of action"], ["x", "Odd behaviour", "Needs a link to the crime"], ["check", "Evidence", "Must connect person, place and time"]] }
    },
    MC(4, "Red Herrings", {
      prompt: "Arjun hated the trophy design. Does that make him the main suspect?",
      options: ["Yes: a motive is enough", "Yes: coordinators always do it", "No: he left before 6:30", "Maybe: flip a coin"], answer: 2,
      hint: "Check the timeline from Clue 1.",
      note: "A motive without opportunity is a red herring. Arjun’s only visit ended at 6:20.", badge: "x"
    }),
    MC(4, "Red Herrings", {
      prompt: "Eshan deleted a blurry photo. What is the best way to treat this?",
      options: ["Arrest Eshan immediately", "Note it; it is weak alone", "Ignore all of Eshan’s photos", "Assume he took the trophy"], answer: 1,
      hint: "Does anything connect Eshan to the office?",
      note: "Nothing places Eshan in the office. His other photo actually helped solve the case.", badge: "eye"
    }),
    MCN(4, "Red Herrings", {
      prompt: "How many minutes was Bhavya’s code active (6:45 to 6:55)?",
      answer: 10,
      hint: "Count from 45 to 55.",
      note: "10 minutes. Enough time to enter, pick up a trophy and leave.", badge: "timer",
      board: true, boardLabel: "after Clue 4"
    }),

    // ---------- Clue 5: The twist ----------
    {
      type: "learn", door: 5,
      title: "Clue set 5: the twist.",
      points: [["Charan admits it", "“I took it to polish it as a surprise for the final. It’s in the canteen store.”"], ["The store room", "The trophy is there, shining, wrapped in cloth"], ["Store log", "Charan signed the trophy in at 7:00 PM"]],
      highlightLast: true,
      side: { label: "Detective questions", items: [["search", "Does his story match the records?", ""], ["scale", "Theft or a bad decision?", ""], ["shield", "What rule was broken?", ""]] }
    },
    MC(5, "The Twist", {
      prompt: "How should the detectives test Charan’s story?",
      options: ["Check it against the records", "Believe him because he looks honest", "Ignore it and call it theft", "Ask his friends what they think"], answer: 0,
      hint: "Stories must match records.",
      note: "His 7:00 store-log entry fits the 6:45 office visit. The evidence supports his story.", badge: "search"
    }),
    MC(5, "The Twist", {
      prompt: "Even with good intentions, what did Charan do wrong?",
      options: ["Took it without permission", "He polished the trophy too well", "He worked in the canteen", "He wore size 9 shoes"], answer: 0,
      hint: "Permission and communication.",
      note: "Good intentions do not replace permission. A quick message would have avoided a panic.", badge: "shield"
    }),
    MC(5, "The Twist", {
      prompt: "What was Bhavya’s mistake in this story?",
      options: ["Testing mics on stage", "Sharing her access code", "Being in a photo", "Working on fest night"], answer: 1,
      hint: "Codes are personal.",
      note: "Sharing access codes or passwords makes logs useless and puts you under suspicion.", badge: "lock",
      board: true, boardLabel: "after Clue 5"
    }),

    // ---------- Clue 6: Case closed (double) ----------
    {
      type: "learn", door: 6,
      title: "Final clue: close the case. Double points!",
      points: [["Who", "The person all the evidence points to"], ["How", "The clue that broke the alibi"], ["What to ignore", "The red herring that fooled people"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["search", "Close the case", "Who, how and the red herring"], ["mic", "Then the final challenge", "Make your own mystery"]] }
    },
    MC(6, "Case Closed", {
      double: true,
      prompt: "Who took the trophy from the office?",
      options: ["Arjun", "Divya", "Charan", "Eshan"], answer: 2,
      hint: "Code, stain, footprints, timeline and confession.",
      note: "Charan. Every clue lines up: Bhavya’s shared code, the turmeric, size 9 prints, his free time and the store log.", badge: "trophy"
    }),
    MC(6, "Case Closed", {
      double: true,
      prompt: "Which clue first showed that someone else used Bhavya’s code?",
      options: ["The turmeric stain", "Eshan’s 6:50 photo", "Arjun’s angry message", "Divya’s decor box"], answer: 1,
      hint: "It placed Bhavya somewhere else.",
      note: "The timestamped photo contradicted the keypad log. That one contradiction cracked the case open.", badge: "eye"
    }),
    MC(6, "Case Closed", {
      double: true,
      prompt: "Which clue was the biggest red herring?",
      options: ["The size 9 footprints", "Bhavya’s shared code", "Arjun’s angry message", "The store log at 7:00"], answer: 2,
      hint: "Motive without opportunity.",
      note: "Arjun’s complaint looked suspicious but he was never there in the window. Case closed!", badge: "x",
      board: true, boardLabel: "after Clue 6"
    }),

    // ---------- Final challenge, rank, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best mystery wins +200", prompt: "Each team creates a 3-clue mini mystery about something missing in college. The other teams solve it.", note: "Fair clues, one answer. The mystery that is hardest but fair wins.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "How Detectives Think", note: "Screenshot this. Use it for puzzles, debugging and interviews.", items: DETECTIVE },
    {
      type: "end",
      joinTitle: "Join the EduMoon Fun Zone",
      joinText: "Quizzes, party games and brain teasers every week. Come for the fun, stay for the people.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
