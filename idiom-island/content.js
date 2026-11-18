// Idiom Island (EduMoon English Club). For all years.
// Everyday English idioms in college situations: what they mean, when to use them, and when to keep them out of formal writing.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const IQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 35, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const ISPOT = { kind: "bug", time: 55, step1: "What is wrong with it?", step2: "Tap the line that uses the idiom wrongly", say1: "First pick what is wrong.", say2: "Now tap the wrong line.", partO: "what is wrong", partL: "the line", lineLabel: "line", bugLabel: "The wrong line is" };

// The take-home card: 12 idioms from today.
const IDIOMS = [
  ["burn the midnight oil", "Study or work late into the night."],
  ["pass with flying colours", "Pass easily and very well."],
  ["break the ice", "Start a conversation when people feel shy."],
  ["on the same page", "Agreeing and understanding the plan in the same way."],
  ["cost an arm and a leg", "Be very expensive."],
  ["in the nick of time", "Just in time, at the last moment."],
  ["under the weather", "Feeling a little sick."],
  ["get cold feet", "Feel too nervous to do something you planned."],
  ["learn the ropes", "Learn how a new job or place works."],
  ["the ball is in your court", "It is your turn to decide or act."],
  ["call it a day", "Stop working for today."],
  ["Remember", "Idioms are great when speaking. Keep them out of formal emails, reports and exams."]
];

window.GAME = {
  id: "idiom-island",
  title: "Idiom Island",
  club: "English Club",
  tagline: "Sound natural in English. Learn the idioms people actually use.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Harsha is joining an online project team with students from Singapore and the UK. They keep saying things like “Let’s break the ice” and “The ball is in your court”, and he is lost. In 6 rounds, teams learn common idioms about studies, people, time and money, feelings and work, then practise using them in the right place. Every round ends with a speaking chance.",
    outcomes: "About 15 everyday idioms, their real meanings, how to use them in a sentence, and when to avoid them in formal writing.",
    tone: "Idioms are fun because they sound strange. Act some of them out: pretend to break ice, or look at the clock for “in the nick of time”. Praise students who try an idiom aloud, even if the sentence is not perfect.",
    extra: [["Already played Word Power?", "Word Power has a short idiom round. This game goes deeper with different idioms, so it is fine to play both."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Learned",
    rulesEyebrow: "How Idiom Island works", rulesTitle: "Learn the idioms. Pick the meaning. Use them aloud.",
    learnText: "The host shares three idioms and what they mean.", crackTitle: "Answer",
    crackText: "Pick the right meaning or sentence and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Idioms trick even fluent speakers!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "are today’s idiom masters!", endLine: "Harsha understands his team now."
  },
  offerEyebrow: "EduMoon English Club · Idiom level",
  offerTitle: "Your idiom level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Idiom Master", text: "You speak like a native. Use one new idiom every day this week." },
    { min: 0.45, icon: "message-circle", title: "Smooth Talker", text: "Strong! Try two idioms from the card in a conversation tomorrow." },
    { min: 0.2, icon: "languages", title: "Phrase Explorer", text: "Good start. Learn three idioms from the card below." },
    { min: 0, icon: "book-open", title: "Island Visitor", text: "Everyone starts here. Watch for idioms in shows and videos." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Idiom Island",
      title: "Harsha joined an online team with students from Singapore and the UK. They keep saying “Let’s break the ice!” and he is lost. Can your team help him?",
      cards: [["message-circle", "15 idioms people really use"], ["mic", "Use them aloud in every round"], ["trophy", "Your score decides your idiom level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Studies ----------
    {
      type: "learn", door: 1,
      title: "Idioms are phrases that do not mean what the words say.",
      points: [["burn the midnight oil", "Study late into the night"], ["hit the books", "Start studying seriously"], ["pass with flying colours", "Pass easily and very well"]],
      highlightLast: true,
      side: { label: "In a sentence", items: [["clock", "“I burned the midnight oil before the exam.”", ""], ["book-open", "“Time to hit the books.”", ""], ["award", "“She passed with flying colours.”", ""]] }
    },
    IQ(1, "Studies", {
      prompt: "“I have to burn the midnight oil tonight.” What does it mean?",
      options: ["Cook dinner very late at night", "Save electricity by switching off lights", "Study or work late into the night", "Go to a party after midnight"], answer: 2,
      hint: "Before electricity, people studied by oil lamps.",
      note: "It means working or studying late. People used oil lamps at night long ago.", badge: "clock"
    }),
    IQ(1, "Studies", {
      prompt: "“Exams start Monday. Time to hit the books!” What should you do?",
      options: ["Throw your books away", "Buy new books", "Lend your books to friends", "Start studying seriously"], answer: 3,
      hint: "Nobody is actually hitting anything.",
      note: "Hit the books means start studying hard. Nothing gets hurt.", badge: "book-open"
    }),
    IQ(1, "Studies", {
      prompt: "Which sentence uses “pass with flying colours” correctly?",
      options: ["“She painted the flag and passed it with flying colours.”", "“He failed, so he passed with flying colours.”", "“Priya scored 92 and passed with flying colours.”", "“Flying colours passed over the college ground.”"], answer: 2,
      hint: "It is about doing very well.",
      note: "It means passing easily and with a great result. It has nothing to do with real colours.", badge: "award",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: People ----------
    {
      type: "learn", door: 2,
      title: "Idioms about people and teams.",
      points: [["break the ice", "Start a conversation when everyone feels shy"], ["on the same page", "Understanding and agreeing on the plan"], ["see eye to eye", "Agree with someone"]],
      highlightLast: true,
      side: { label: "Often heard in teams", items: [["users", "“Let’s break the ice with quick introductions.”", ""], ["list-checks", "“Are we all on the same page?”", ""], ["handshake", "“We don’t always see eye to eye.”", ""]] }
    },
    IQ(2, "People", {
      prompt: "On the first team call, the leader says, “Let’s break the ice.” What does she want?",
      options: ["Start chatting so people feel relaxed", "Everyone to switch off the AC", "End the call early today", "Fix something broken in the office"], answer: 0,
      hint: "The “ice” is the awkward silence.",
      note: "Breaking the ice means getting people talking when they feel shy or new.", badge: "users"
    }),
    IQ(2, "People", {
      prompt: "“Before we start, are we all on the same page?” What is the leader checking?",
      options: ["If everyone opened the same PDF page", "If all agree on the plan", "If everyone is sitting in the same room", "If everyone has read the whole book"], answer: 1,
      hint: "It is not about real pages.",
      note: "It checks that everyone understands the plan in the same way. Very common in meetings.", badge: "list-checks"
    }),
    IQ(2, "People", {
      prompt: "“Harsha and Meena don’t see eye to eye on the design.” What does it mean?",
      options: ["They disagree about it", "They both wear glasses", "They never look at each other", "They are the same height"], answer: 0,
      hint: "Seeing eye to eye means agreeing.",
      note: "Not seeing eye to eye means disagreeing. Polite and useful at work.", badge: "eye",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Time and money ----------
    {
      type: "learn", door: 3,
      title: "Idioms about time and money.",
      points: [["cost an arm and a leg", "Be very expensive"], ["in the nick of time", "Just in time, at the last moment"], ["call it a day", "Stop working for today"]],
      highlightLast: true,
      side: { label: "In a sentence", items: [["indian-rupee", "“That laptop costs an arm and a leg.”", ""], ["timer", "“I submitted it in the nick of time.”", ""], ["clock", "“It’s 9 PM. Let’s call it a day.”", ""]] }
    },
    IQ(3, "Time and Money", {
      prompt: "“The new iPhone costs an arm and a leg.” What does it mean?",
      options: ["It can hurt you", "It is very expensive", "It is on discount", "It is free with a plan"], answer: 1,
      hint: "Would you give your arm for it?",
      note: "It means very expensive. Nobody pays with body parts.", badge: "indian-rupee"
    }),
    IQ(3, "Time and Money", {
      prompt: "“I reached the exam hall in the nick of time.” When did he reach?",
      options: ["One hour early", "After the exam ended", "On the wrong day", "Just before the start"], answer: 3,
      hint: "A nick is a tiny cut, like a tiny bit of time.",
      note: "Just in time, at the very last moment.", badge: "timer"
    }),
    IQ(3, "Time and Money", {
      prompt: "At 9 PM the team lead says, “Let’s call it a day.” What happens next?",
      options: ["They stop working for today", "They phone someone named Day", "They plan the next day’s work", "They work all night"], answer: 0,
      hint: "Look at the time.",
      note: "Calling it a day means stopping work for now. You might hear “call it a night” too.", badge: "clock",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Make one sentence about your college life using “burn the midnight oil” or “in the nick of time”.", note: "A real story is best. 15 seconds.", points: 100 },

    // ---------- Round 4: Feelings ----------
    {
      type: "learn", door: 4,
      title: "Idioms about feelings.",
      points: [["under the weather", "Feeling a little sick"], ["butterflies in my stomach", "Feeling nervous before something"], ["get cold feet", "Feel too nervous to do something you planned"]],
      highlightLast: true,
      side: { label: "In a sentence", items: [["heart", "“I’m a bit under the weather today.”", ""], ["mic", "“I had butterflies before my speech.”", ""], ["x", "“He got cold feet before the audition.”", ""]] }
    },
    IQ(4, "Feelings", {
      prompt: "A teammate messages, “Feeling under the weather, will join tomorrow.” What does it mean?",
      options: ["She is feeling a little sick", "It is raining where she lives", "She is travelling on a plane", "She is very happy today"], answer: 0,
      hint: "It is not about the actual weather.",
      note: "Under the weather means a bit unwell. A polite way to say you are not feeling well.", badge: "heart"
    }),
    IQ(4, "Feelings", {
      prompt: "“I had butterflies in my stomach before the interview.” How did she feel?",
      options: ["Hungry", "Sick from food", "Nervous", "Bored"], answer: 2,
      hint: "That fluttery feeling before something big.",
      note: "Butterflies means nervous excitement. Everyone gets them before interviews.", badge: "sparkles"
    }),
    IQ(4, "Feelings", Object.assign({}, ISPOT, {
      prompt: "Harsha writes about his day. Which line uses an idiom wrongly?",
      code: ["I had butterflies in my stomach before my presentation.", "But I didn’t get cold feet, I went ahead.", "I was under the weather because I won first prize.", "In the evening, we called it a day early."],
      outputOptions: ["Under the weather means sick, not happy", "Butterflies cannot be in a stomach", "It is too short"], outputAnswer: 0, bugLine: 2,
      bugText: "winning a prize makes you happy, not sick. He could say “I was thrilled”",
      hint: "Which idiom does not match the feeling?",
      note: "Under the weather means unwell. Mixing up an idiom’s meaning confuses people more than using no idiom.", badge: "search",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Work ----------
    {
      type: "learn", door: 5,
      title: "Idioms you will hear at work and internships.",
      points: [["learn the ropes", "Learn how a new job works"], ["the ball is in your court", "It is your turn to decide or act"], ["think outside the box", "Find a new, creative idea"]],
      highlightLast: true,
      side: { label: "At work", items: [["briefcase", "“Take a week to learn the ropes.”", ""], ["target", "“The ball is in your court now.”", ""], ["lightbulb", "“We need to think outside the box.”", ""]] }
    },
    IQ(5, "Work", {
      prompt: "On day one, the manager says, “Take this week to learn the ropes.” What should Harsha do?",
      options: ["Practise climbing ropes in the gym", "Tie up all the cables neatly", "Take the whole week off", "Learn how the job and team work"], answer: 3,
      hint: "Sailors had to learn which rope did what.",
      note: "Learning the ropes means learning how things work in a new place.", badge: "briefcase"
    }),
    IQ(5, "Work", {
      prompt: "A client says, “We sent our feedback. The ball is in your court.” What does it mean?",
      options: ["The client wants to play a match", "The client has lost the ball", "It is now Harsha’s turn to act", "The project is finished now"], answer: 2,
      hint: "In tennis, who hits the ball next?",
      note: "It is your turn to act or decide. Reply soon.", badge: "target"
    }),
    IQ(5, "Work", {
      prompt: "“We have no budget for ads. Let’s think outside the box.” What is the team being asked to do?",
      options: ["Find a creative new idea", "Work outside the office", "Open all the boxes", "Stop thinking about ads"], answer: 0,
      hint: "The “box” is the usual way of thinking.",
      note: "Think of new, creative ideas instead of the usual ones.", badge: "lightbulb",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Use them right (double) ----------
    {
      type: "learn", door: 6,
      title: "Use idioms when speaking. Be careful in formal writing.",
      points: [["Speaking and chats", "Idioms sound friendly and natural"], ["Formal emails, reports, exams", "Say it plainly: “very expensive”, not “an arm and a leg”"], ["One at a time", "Too many idioms in one sentence sounds forced"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["pen-tool", "Right place, right idiom", "Speaking or writing?"], ["mic", "Then the final challenge", "A mini story with 3 idioms"]] }
    },
    IQ(6, "Use Them Right", {
      double: true,
      prompt: "Where is an idiom LEAST suitable?",
      options: ["Chatting with your teammates", "A friendly speech at a fest", "A casual team video call", "A formal leave letter to the principal"], answer: 3,
      hint: "Which one is the most formal?",
      note: "Formal letters should be clear and plain. Save idioms for speaking and friendly messages.", badge: "file-text"
    }),
    IQ(6, "Use Them Right", {
      double: true,
      prompt: "Which sentence is best for a formal project report?",
      options: ["“The parts cost an arm and a leg, so we thought outside the box.”", "“The parts were expensive, so we found a cheaper design.”", "“We burned the midnight oil and the ball was in our court.”", "“The cost made us get cold feet but we called it a day.”"], answer: 1,
      hint: "Plain, clear and no idioms.",
      note: "Reports need plain English. The idiom-heavy versions sound like chat, and some do not even make sense.", badge: "pen-tool"
    }),
    IQ(6, "Use Them Right", {
      double: true,
      prompt: "Which sentence uses an idiom correctly?",
      options: ["“I got cold feet because the AC was on.”", "“Let’s break the ice: name and hobby, please.”", "“The exam was under the weather, so it was easy.”", "“I learned the ropes by buying new ropes.”"], answer: 1,
      hint: "Which one matches the real meaning?",
      note: "Breaking the ice with introductions is exactly right. The others use the words, but not the meaning.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best story wins +200", prompt: "Tell a 30-second story about exam week using 3 idioms from today.", note: "The room counts the idioms and claps. The host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Idioms From Idiom Island", note: "Screenshot this. Use one new idiom each day this week.", items: IDIOMS },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and English practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
