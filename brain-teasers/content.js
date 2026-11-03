// Brain Teasers (EduMoon Fun Zone). For all years.
// Riddles, number puzzles, patterns, lateral thinking and logic. Each round teaches one thinking trick.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const BQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const BN = (round, name, extra) => BQ(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: 6 thinking tricks.
const TRICKS = [
  ["Read every word", "Riddles hide the answer in the exact words. “All but 9” means 9 are left."],
  ["Don’t trust your first number", "Fast answers are often wrong. Check by putting the answer back in."],
  ["Look at the gaps", "In a series, write the difference between each pair. The pattern is often there."],
  ["Question the picture in your head", "Lateral puzzles break an assumption you didn’t know you made."],
  ["Test one case", "In logic puzzles, assume one person is telling the truth and see if it breaks."],
  ["Draw it", "A quick sketch solves clocks, seating and family trees faster than your head."]
];

window.GAME = {
  id: "brain-teasers",
  title: "Brain Teasers",
  club: "Fun Zone",
  tagline: "Riddles, puzzles and logic traps. The first answer that pops into your head is usually wrong.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "30 minutes", level: "Medium",
    about: "Six rounds of puzzles: riddles, number puzzles, patterns, lateral thinking, logic and a mixed final. Each round opens with one thinking trick, so students don’t just guess, they learn how to think through a puzzle. Several are classics that appear in aptitude tests and interviews.",
    outcomes: "6 thinking tricks that help in aptitude tests and puzzle interview rounds, and the habit of checking a fast answer before trusting it.",
    tone: "Puzzles make people feel clever or silly, so protect the silly feeling. After each reveal, ask one team that got it to explain how they thought, and praise the thinking, not just the answer.",
    extra: [["Stuck room?", "If no one has locked in after 30 seconds, read the hint aloud. You can also give +30s from the host bar."],
      ["Number questions", "Some questions need a typed number. Only the exact answer scores."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Solved",
    rulesEyebrow: "How Brain Teasers works", rulesTitle: "Learn the trick. Crack the puzzle. Don’t fall for the trap.",
    learnText: "The host shares one thinking trick.", crackTitle: "Solve",
    crackText: "Pick or type your answer on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody cracked it. It fools most people the first time!", cracked: "cracked it",
    next: "Next round →", finale: "Next →", winner: "have the sharpest brains in the room!", endLine: "Keep your brain curious!"
  },
  offerEyebrow: "EduMoon Fun Zone · Brain Teasers results",
  offerTitle: "Your thinker rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Puzzle Master", text: "You don’t fall for traps. Try a puzzle interview round with a friend." },
    { min: 0.45, icon: "lightbulb", title: "Sharp Thinker", text: "Strong! Use the 6 tricks below in your next aptitude test." },
    { min: 0.2, icon: "search", title: "Puzzle Hunter", text: "Good start. Try one puzzle a day for a week and watch it get easier." },
    { min: 0, icon: "sparkles", title: "Curious Mind", text: "Today the puzzles won. Tomorrow you’ll know their tricks." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Fun Zone · Brain Teasers",
      title: "18 puzzles. Every one has a trap. Can your team think slowly enough to see it, and fast enough to win?",
      cards: [["lightbulb", "Riddles, numbers, patterns and logic"], ["search", "A new thinking trick each round"], ["trophy", "Win the title of Puzzle Master"]]
    },
    { type: "rules" },

    // ---------- Round 1: Riddles ----------
    {
      type: "learn", door: 1,
      title: "Trick 1: read every word.",
      points: [["Riddles play with meaning", "A word can mean two things at once"], ["Say it aloud", "Hearing a riddle often shows the double meaning"], ["Think simple", "The answer is usually an everyday object"]],
      highlightLast: true,
      side: { label: "Try it", items: [["key", "Double meanings", "Keys, bark, ring"], ["mic", "Say it aloud", "You’ll hear the trick"], ["lightbulb", "Everyday objects", "Look around the room"]] }
    },
    BQ(1, "Riddles", {
      prompt: "What has keys but can’t open a single lock?",
      options: ["A map", "A piano", "A door", "A diary"], answer: 1,
      hint: "Think music, not doors.",
      note: "A piano. The word “keys” means two things here.", badge: "key"
    }),
    BQ(1, "Riddles", {
      prompt: "What gets wetter the more it dries?",
      options: ["A sponge", "Rain", "Soap", "A towel"], answer: 3,
      hint: "You use it after a bath.",
      note: "A towel. It dries you, and gets wetter while doing it.", badge: "waves"
    }),
    BQ(1, "Riddles", {
      prompt: "The more you take, the more you leave behind. What are they?",
      options: ["Footsteps", "Photos", "Notes", "Breaths"], answer: 0,
      hint: "Walk across a beach.",
      note: "Footsteps. Every step you take leaves one behind.", badge: "route",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Number puzzles ----------
    {
      type: "learn", door: 2,
      title: "Trick 2: don’t trust your first number.",
      points: [["Your brain loves shortcuts", "The number that jumps out first is often the trap"], ["Put it back in", "Check your answer against every line of the question"], ["Read the question twice", "Small words like “more than” change everything"]],
      highlightLast: true,
      side: { label: "Try it", items: [["pen-tool", "Write it down", "Rough paper helps"], ["check", "Check the answer", "Does it fit every line?"], ["clock", "Slow down", "Speed is the trap here"]] }
    },
    BN(2, "Number Puzzles", {
      prompt: "A bat and a ball cost ₹1,100 together. The bat costs ₹1,000 more than the ball. How much is the ball? Type the number.",
      answer: 50,
      hint: "If the ball is ₹100, the bat is ₹1,100. Total ₹1,200. Too much.",
      note: "₹50. The bat is ₹1,050, which is ₹1,000 more. Together, ₹1,100. Most people say ₹100.", badge: "target"
    }),
    BN(2, "Number Puzzles", {
      prompt: "5 machines make 5 phone cases in 5 minutes. How many minutes do 100 machines take to make 100 cases? Type the number.",
      answer: 5,
      hint: "How long does ONE machine take to make ONE case?",
      note: "5 minutes. Each machine makes one case in 5 minutes, so 100 machines make 100 cases in 5 minutes.", badge: "clock"
    }),
    BQ(2, "Number Puzzles", {
      prompt: "How many times can you subtract 5 from 25?",
      options: ["5 times", "4 times", "Only once", "As many times as you like"], answer: 2,
      hint: "After the first time, is it still 25?",
      note: "Only once. After that you’re subtracting from 20, not 25.", badge: "lightbulb",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Patterns ----------
    {
      type: "learn", door: 3,
      title: "Trick 3: look at the gaps.",
      points: [["Write the differences", "2, 5, 9, 14: the gaps are 3, 4, 5. Next gap is 6, so 20"], ["Try adding the last two", "Some patterns build on the numbers before"], ["Letters can be patterns too", "Think of things that come in order: days, months"]],
      highlightLast: true,
      side: { label: "Try it", items: [["chart-column", "Differences", "Subtract each pair"], ["sparkles", "Add the last two", "A famous series does this"], ["list-checks", "Letters", "Days, months, the alphabet"]] }
    },
    BN(3, "Patterns", {
      prompt: "What comes next? 2, 6, 12, 20, 30, ?",
      answer: 42,
      hint: "Gaps: 4, 6, 8, 10…",
      note: "42. The gaps grow by 2 each time: 4, 6, 8, 10, 12. Also 1×2, 2×3, 3×4, 4×5, 5×6, 6×7.", badge: "chart-column"
    }),
    BN(3, "Patterns", {
      prompt: "What comes next? 1, 1, 2, 3, 5, 8, ?",
      answer: 13,
      hint: "Add the last two numbers.",
      note: "13 (5 + 8). This is the Fibonacci series, studied by Indian mathematicians like Virahanka centuries before Fibonacci.", badge: "sparkles"
    }),
    BQ(3, "Patterns", {
      prompt: "What comes next? J, F, M, A, M, J, ?",
      options: ["J", "A", "S", "N"], answer: 0,
      hint: "January, February…",
      note: "J for July. They are the first letters of the months.", badge: "list-checks",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Ask the room your favourite riddle. Can they solve it in 20 seconds?", note: "If nobody solves it, you get the points. Keep it clean!", points: 100 },

    // ---------- Round 4: Lateral thinking ----------
    {
      type: "learn", door: 4,
      title: "Trick 4: question the picture in your head.",
      points: [["You assume things without noticing", "Who, where, what kind of animal…"], ["Ask: what am I assuming?", "Then try the opposite"], ["The silly answer can be right", "Lateral puzzles reward a fresh look"]],
      highlightLast: true,
      side: { label: "Try it", items: [["search", "Spot the assumption", "What did you picture?"], ["sparkles", "Flip it", "Try the opposite"], ["lightbulb", "Simple is fine", "Silly answers can win"]] }
    },
    BQ(4, "Lateral Thinking", {
      prompt: "Some months have 30 days and some have 31. How many have 28 days?",
      options: ["1", "2", "All 12", "It depends on the year"], answer: 2,
      hint: "Does January have 28 days in it?",
      note: "All 12. Every month has at least 28 days.", badge: "clock"
    }),
    BQ(4, "Lateral Thinking", {
      prompt: "A rooster lays an egg on the very top of a sloping roof. Which side does the egg roll down?",
      options: ["The left side", "The right side", "The side the wind blows", "Neither. Roosters don’t lay eggs"], answer: 3,
      hint: "Which bird lays eggs?",
      note: "Roosters are male. Hens lay eggs. The puzzle hides it inside a physics question.", badge: "sparkles"
    }),
    BQ(4, "Lateral Thinking", {
      prompt: "In a race, you overtake the person in 2nd place. What position are you in now?",
      options: ["1st", "2nd", "3rd", "Last"], answer: 1,
      hint: "You took their place, not the leader’s.",
      note: "2nd. You passed the person in 2nd, so you’re now in 2nd. The leader is still ahead.", badge: "route",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Logic ----------
    {
      type: "learn", door: 5,
      title: "Trick 5: test one case.",
      points: [["Assume someone is telling the truth", "Follow what that means for everyone else"], ["Look for a contradiction", "If it breaks, your assumption was wrong"], ["Try the next case", "There are only a few options. Test them one by one"]],
      highlightLast: true,
      side: { label: "Try it", items: [["user", "Pick one person", "Assume they tell the truth"], ["x", "Find the clash", "Does it contradict?"], ["check", "Next case", "Repeat until one works"]] }
    },
    BQ(5, "Logic", {
      prompt: "Priya says: “Rahul is lying.” Rahul says: “Kiran is lying.” Kiran says: “Priya and Rahul are both lying.” Who is telling the truth?",
      options: ["Only Priya", "Only Kiran", "Priya and Kiran", "Only Rahul"], answer: 3,
      hint: "Assume Kiran tells the truth. Then Rahul is lying, so Kiran is not lying… and Priya? Check it.",
      note: "Only Rahul. If Kiran were truthful, Priya’s claim that Rahul lies would be true, so Priya isn’t lying, which breaks Kiran’s claim. So Kiran lies, Rahul is right, and Priya lies.", badge: "search"
    }),
    BQ(5, "Logic", {
      prompt: "Three boxes are labelled Apples, Oranges and Mixed. Every label is wrong. You can take out one fruit from one box. Which box do you pick from to fix all three labels?",
      options: ["The box labelled Apples", "The box labelled Mixed", "The box labelled Oranges", "You need to open all three"], answer: 1,
      hint: "The Mixed box can’t really be mixed.",
      note: "The box labelled Mixed must contain only one fruit. If you pull an apple, it’s Apples. Then the box labelled Oranges can’t be Oranges, so it’s Mixed, and the last one is Oranges.", badge: "key"
    }),
    BQ(5, "Logic", {
      prompt: "Pointing at a photo, Arjun says: “His father is my father’s only son.” Arjun has no brothers. Who is in the photo?",
      options: ["Arjun himself", "Arjun’s father", "Arjun’s son", "Arjun’s brother"], answer: 2,
      hint: "Who is Arjun’s father’s only son?",
      note: "Arjun’s father’s only son is Arjun. So the photo shows someone whose father is Arjun: his son.", badge: "users",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Mega mix (double) ----------
    {
      type: "learn", door: 6,
      title: "Trick 6: draw it.",
      points: [["Clocks, seats and family trees", "A 5-second sketch beats a minute of thinking"], ["Use the trick you need", "Read every word, check, find the gap, question, test, draw"], ["Double points", "Anyone can still win"]],
      highlightLast: true,
      side: { label: "Final round", items: [["pen-tool", "Sketch it", "Clocks, seats and family trees"], ["zap", "Double points", "Every answer counts twice"], ["trophy", "Then make your own", "Invent a teaser for the room"]] }
    },
    BN(6, "Mega Mix", {
      double: true,
      prompt: "A farmer has 17 sheep. All but 9 run away. How many sheep are left? Type the number.",
      answer: 9,
      hint: "Read “all but 9” very slowly.",
      note: "9. “All but 9 run away” means 9 stayed.", badge: "target"
    }),
    BN(6, "Mega Mix", {
      double: true,
      prompt: "What is the angle between the hour hand and the minute hand at exactly 3 o’clock? Type the degrees.",
      answer: 90,
      hint: "Draw the clock. A full circle is 360 degrees.",
      note: "90 degrees. Each hour mark is 30 degrees apart, and 3 hours is 90.", badge: "clock"
    }),
    BQ(6, "Mega Mix", {
      double: true,
      prompt: "Meena’s mother has four children: April, May, June and…?",
      options: ["July", "August", "Meena", "March"], answer: 2,
      hint: "Read the start of the question again.",
      note: "Meena. It’s Meena’s mother, so Meena is one of the children.", badge: "user",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Make up a new brain teaser in 2 minutes, then ask the room.", note: "Use one of today’s tricks. The host picks the cleverest one, whether or not the room solves it.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "6 Thinking Tricks", note: "Screenshot this. Use them in your next aptitude test or puzzle round.", items: TRICKS },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "Quizzes, games and events for students across Vizag every week.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
