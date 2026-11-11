// Prompt Battle (EduMoon AI Lab). For all years.
// Teams judge prompts and AI outputs, then battle live: each team writes a prompt in a free AI tool on a phone,
// shows the result, and the host awards points to the best one.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PB = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const BATTLE = (n, prompt, note) => ({ type: "speak", eyebrow: `Live Battle ${n} · best result wins +150`, prompt, note, points: 150 });

const MOVES = [
  ["Set the scene", "Who you are, who it’s for, and why you need it."],
  ["Name the exact output", "“A 6-line poster text”, “3 reel hooks”, “a 5-question quiz”."],
  ["Add constraints", "Word limit, tone, language, must include, must avoid."],
  ["Show an example", "One sample of the style you want beats ten adjectives."],
  ["Ask for options", "“Give me 3 versions” and pick the best."],
  ["Iterate fast", "“Shorter”, “funnier”, “more specific to Vizag”."],
  ["Judge like a user", "Would your target person actually read, click or use it?"],
  ["Check and own it", "Fix facts, add your real details, make it yours."]
];

window.GAME = {
  id: "prompt-battle",
  title: "Prompt Battle",
  club: "AI Lab",
  tagline: "Same AI, same task. The better prompt wins.",
  art: window.STORY_ART,
  guide: {
    years: "All years · no coding needed", time: "40 minutes", level: "Medium",
    about: "Teams learn what makes a winning prompt by judging real prompt-and-output pairs, then go head to head in 3 live battles. In each battle every team gets the same task, writes a prompt in any free AI tool (ChatGPT, Gemini, Claude or similar) on one phone, and shows the result. The room reacts, and the host awards +150 to the best result.",
    outcomes: "8 prompt moves for creative and practical tasks, how to judge AI output like a real user, and the habit of iterating instead of accepting the first answer.",
    tone: "Make the live battles loud and fun: count down the time, let teams read results out, and get the room to clap for the best one. Reward creativity and specificity, not length. If a team has no internet, let them pair with another team or speak their prompt aloud and judge the prompt itself.",
    extra: [["Before you start", "Each team needs one phone with internet and any free AI chat app or website. Give 3 minutes per live battle: 2 to prompt and improve, 1 to show."], ["Judging tip", "Ask: would the real target person use this? Specific beats generic every time."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Won",
    rulesEyebrow: "How Prompt Battle works", rulesTitle: "Judge prompts. Then battle live.",
    learnText: "The host shares one winning prompt move.", crackTitle: "Judge",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Live battles: write a prompt in any free AI app, show the result. Best result wins <b>+150</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. It’s trickier than it looks!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s prompt battle champions!", endLine: "You can now get great results from any AI!"
  },
  offerEyebrow: "EduMoon AI Lab · Battle results",
  offerTitle: "Your battle rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Prompt Champion", text: "Specific, creative and you iterate. You’d win most real prompt battles." },
    { min: 0.45, icon: "swords", title: "Strong Contender", text: "Strong! Ask for 3 versions every time and pick the best." },
    { min: 0.2, icon: "zap", title: "Rising Challenger", text: "Good start. Add one example to your next prompt." },
    { min: 0, icon: "book-open", title: "Rookie Battler", text: "Everyone starts here. Save the 8 moves and try them tonight." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Prompt Battle",
      title: "Every team gets the same AI and the same task. Only one prompt wins. Ready to battle?",
      cards: [["swords", "Judge prompts and AI outputs"], ["smartphone", "3 live battles on your own phone"], ["crown", "The room crowns the best result"]]
    },
    { type: "rules" },

    // ---------- Round 1: Set the scene ----------
    {
      type: "learn", door: 1,
      title: "Winning prompts set the scene first.",
      points: [["Who you are", "“I run a college coding club in Vizag”"], ["Who it’s for", "“1st-year students who are scared of coding”"], ["Why", "“To get 50 people to our first event”"]],
      highlightLast: true,
      side: { label: "Same task, two prompts", items: [["circle-x", "“Write a poster”", "Generic, forgettable"], ["circle-check", "“Write poster text for a free coding game night for scared 1st-years in Vizag”", "Specific, useful"], ["target", "Rule", "The audience shapes everything"]] }
    },
    PB(1, "Set the Scene", {
      prompt: "Task: an invite for a club game night. Which prompt wins?",
      options: ["“Write an invite for our club’s game night, make it fun and exciting for everyone in college”", "“Invite for event”", "“WhatsApp invite: free coding game night for 1st-years, friendly, under 60 words, with time and place.”", "“Make it nice”"], answer: 2,
      hint: "Audience, length, tone and what must be included.",
      note: "The winning prompt says who it’s for, the tone, the length and the must-haves.", badge: "message-circle"
    }),
    PB(1, "Set the Scene", {
      prompt: "Two outputs for a canteen offer post. Which one would students actually notice?",
      options: ["“Great food at great prices for every student on campus.”", "“Exam week combo: 2 samosas + chai for ₹30, 4 to 6 PM.”", "“Quality food is our passion and priority.”", "“Come eat something.”"], answer: 1,
      hint: "Which one has a real reason to walk over?",
      note: "Specific offer, price and time. Good prompts ask for specifics, and good judges pick them.", badge: "store"
    }),
    PB(1, "Set the Scene", {
      prompt: "Why do vague prompts give boring results?",
      options: ["AI is lazy unless you pay for it", "Free AI tools only write boring text", "With no details, AI gives the average answer", "AI doesn’t like short prompts and ignores them"], answer: 2,
      hint: "If AI knows nothing about your situation, what does it fall back on?",
      note: "No details means average output. Your specific details are what make it stand out.", badge: "lightbulb",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Exact output + Battle 1 ----------
    {
      type: "learn", door: 2,
      title: "Name the exact output you want.",
      points: [["Count", "“3 options”, “5 hooks”, “10 names”"], ["Size", "“Under 15 words each”, “one line”"], ["Must include / avoid", "“Include the date”, “no emojis”, “no hashtags”"]],
      highlightLast: true,
      side: { label: "Battle tip", items: [["list-checks", "Ask for options", "Then pick the best"], ["timer", "Short is harder", "Word limits force quality"], ["route", "Then iterate", "“Make number 2 funnier”"]] }
    },
    PB(2, "Exact Output", {
      prompt: "You need a club name fast. Which prompt gives you the most to choose from?",
      options: ["“Club name? Something cool and techy for our new AI club in college”", "“10 short names for a college AI club. Under 3 words. No ‘tech’ or ‘hub’.”", "“Name”", "“What should I name my club?”"], answer: 1,
      hint: "Count + size + what to avoid.",
      note: "Asking for 10 with rules gives you real choices instead of one average guess.", badge: "list-checks"
    }),
    PB(2, "Exact Output", {
      prompt: "AI gave you 10 names. None are perfect. Best next move?",
      options: ["Pick one at random and move on", "“I like #3 and #7. Give me 5 more like those.”", "Start over with “Club name?”", "Use all 10 names on different posts"], answer: 1,
      hint: "Tell AI what you liked.",
      note: "Iterating on what you liked is how pros get great results.", badge: "route"
    }),
    PB(2, "Exact Output", {
      prompt: "You need a reel hook (the first line). Which constraint matters MOST?",
      options: ["It must be very long so it explains everything", "It must be in formal English for a good image", "It must use the word “journey” somewhere", "It must hook people in 2 seconds"], answer: 3,
      hint: "How fast do people scroll?",
      note: "Hooks are judged in seconds. Tell AI the time and word limit.", badge: "zap",
      board: true, boardLabel: "after Round 2"
    }),
    BATTLE(1, "Live Battle 1: Get AI to write a 2-line reel hook for “How to survive your first college exam”. 2 minutes. Best hook wins.", "Teams: open any free AI app on one phone. Set the scene, name the output, iterate. Then read your best hook aloud. Host: tap the winning team for +150."),

    // ---------- Round 3: Examples ----------
    {
      type: "learn", door: 3,
      title: "Show one example and AI copies the style.",
      points: [["Describe vs show", "“Fun and catchy” means different things to everyone"], ["Paste a sample", "One post, caption or answer you like"], ["Say what to copy", "“Same tone and length, new topic”"]],
      highlightLast: true,
      side: { label: "Where examples help", items: [["pen-tool", "Captions", "Match your page’s voice"], ["file-text", "Exam answers", "Match your university pattern"], ["mail", "Emails", "Match your college’s format"]] }
    },
    PB(3, "Examples", {
      prompt: "Your club page has a funny, short style. How do you get AI to match it?",
      options: ["Say “be funny and short like our page”", "Paste 2 old captions and say “same style”", "Say “be like us, you know our vibe”", "Use capital letters so AI takes it seriously"], answer: 1,
      hint: "Show, don’t describe.",
      note: "Examples are the fastest way to share a style. AI is great at copying patterns.", badge: "pen-tool"
    }),
    PB(3, "Examples", {
      prompt: "You want 7-mark exam answers in your university’s pattern. What should you paste?",
      options: ["Nothing, AI knows every university’s pattern", "Your marks memo from last semester", "Your hall ticket with the exam details", "One model 7-mark answer from a senior"], answer: 3,
      hint: "What does a good answer look like?",
      note: "A model answer shows structure, length and keywords. AI follows it.", badge: "graduation-cap"
    }),
    PB(3, "Examples", {
      prompt: "When is giving an example a BAD idea?",
      options: ["When it has private or copied details", "Always, examples only confuse the AI", "Never, examples always give better results", "When the example is too short to be useful"], answer: 0,
      hint: "Think privacy and permission.",
      note: "Remove names, numbers and private details before you paste anything.", badge: "lock",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Share your team’s best prompt trick so far.", note: "What worked in Battle 1? 20 seconds.", points: 100 },

    // ---------- Round 4: Judge like a user + Battle 2 ----------
    {
      type: "learn", door: 4,
      title: "Judge AI output like the real user would.",
      points: [["Would they read it?", "Short, clear, relevant to them"], ["Would they act?", "Clear next step: register, click, reply"], ["Is it true?", "No made-up facts, prices or promises"]],
      highlightLast: true,
      side: { label: "Red flags in AI output", items: [["x", "Big empty words", "“Unlock your potential”"], ["x", "Made-up facts", "Prices, dates, stats"], ["x", "No call to action", "So what should I do?"]] }
    },
    PB(4, "Judge Like a User", {
      prompt: "Which AI-written event line would make a 1st-year actually register?",
      options: ["“Embark on a transformative journey of growth and learning with our amazing club.”", "“Unlock your potential with us.”", "“Never coded? Build your first webpage in 45 minutes. Free. Saturday 4 PM.”", "“Join us for an amazing experience.”"], answer: 2,
      hint: "Which one answers: what, for whom, when, where?",
      note: "Specific promise, no fear, clear time and place. That’s output worth keeping.", badge: "target"
    }),
    PB(4, "Judge Like a User", {
      prompt: "AI writes: “Our app is used by 2 lakh students.” Your app has 300 users. What do you do?",
      options: ["Keep it, it sounds good and nobody will check", "Round it down to 1 lakh to be safe", "Delete it, never publish made-up numbers", "Add a small star next to it as a note"], answer: 2,
      hint: "Is it true?",
      note: "AI fills gaps with confident fiction. You’re responsible for every claim you publish.", badge: "shield"
    }),
    PB(4, "Judge Like a User", {
      prompt: "Two AI outputs. One is 200 words, one is 40. For a WhatsApp message, which usually wins?",
      options: ["The 200-word one, because more detail is always better", "The 40-word one, if it has everything", "Neither, WhatsApp needs images only", "The longer one with more emojis"], answer: 1,
      hint: "How do people read WhatsApp?",
      note: "Fit the format to where it’ll be read. Short and complete wins on chat.", badge: "smartphone",
      board: true, boardLabel: "after Round 4"
    }),
    BATTLE(2, "Live Battle 2: Get AI to write a WhatsApp message inviting your batch to a free study group before exams. Under 50 words. 2 minutes.", "It must say what, when, where and why it helps. Read it aloud. The room votes; host taps the winner for +150."),

    // ---------- Round 5: Iterate ----------
    {
      type: "learn", door: 5,
      title: "The winner is usually the third version, not the first.",
      points: [["Read the first answer", "What’s good? What’s off?"], ["Give one clear note", "“Shorter”, “more Vizag-specific”, “less formal”"], ["Repeat 2 or 3 times", "Each round gets closer"]],
      highlightLast: true,
      side: { label: "Useful follow-ups", items: [["check", "“Keep #2, make it shorter”", "Precise"], ["map", "“Add a local example”", "Relatable"], ["search", "“What’s weak in this?”", "AI critiques itself"]] }
    },
    PB(5, "Iterate", {
      prompt: "AI’s poster text is good but too long for the poster. Best follow-up?",
      options: ["“Cut it to 12 words. Keep the date and ‘free’.”", "“Do better, this is too long for my poster”", "“Again, but shorter and nicer this time”", "“Make it perfect for a college poster”"], answer: 0,
      hint: "One clear, specific note.",
      note: "Say exactly what to change and what to keep.", badge: "pen-tool"
    }),
    PB(5, "Iterate", {
      prompt: "Which follow-up helps you find weaknesses you missed?",
      options: ["“Is this good? Be honest with me please”", "“Act as a 1st-year. What would confuse you here?”", "“Thanks, that’s good enough for now”", "“Rate it 10 out of 10 and explain why”"], answer: 1,
      hint: "Ask AI to play your real audience.",
      note: "Role-play your audience to stress-test your output before real people see it.", badge: "user"
    }),
    PB(5, "Iterate", {
      prompt: "You’ve iterated 3 times and it’s great. One last step before you post?",
      options: ["Post it instantly while the idea is fresh", "Ask AI to add more words and hashtags", "Check every fact and add your own touch", "Change the font to something more stylish"], answer: 2,
      hint: "Whose name goes on it?",
      note: "AI drafts, you own it. Check the details and make it sound like you.", badge: "badge-check",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Final battle (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: put every move together.",
      points: [["Scene + exact output", "Who, for whom, what, how long"], ["Example + constraints", "Style, tone, must include, avoid"], ["Iterate + check", "Third version, facts fixed"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["swords", "Then the final battle", "+150 to the best"], ["award", "Then your battle rank", "Who’s champion?"]] }
    },
    PB(6, "Final Round", {
      double: true,
      prompt: "Which prompt would win a battle for “a bio for your Instagram page”?",
      options: ["“Write a bio for my Instagram page about coding, make it cool and professional and catchy”", "“Bio for my coding tips page for Telugu students. Under 150 characters, friendly.”", "“Cool bio”", "“Instagram bio please”"], answer: 1,
      hint: "Scene, limit, tone, purpose.",
      note: "Instagram bios have a 150-character limit. Telling AI the real limit avoids rework.", badge: "user"
    }),
    PB(6, "Final Round", {
      double: true,
      prompt: "In a prompt battle, what usually decides the winner?",
      options: ["Whose phone is newer and faster", "Which AI app they used for the battle", "Whoever writes the longest prompt", "The most specific prompt and follow-ups"], answer: 3,
      hint: "Today’s battles: what made the winning results different?",
      note: "Same tools, different results. The skill is in the prompting and iterating.", badge: "crown"
    }),
    PB(6, "Final Round", {
      double: true,
      prompt: "Your friend says, “AI wrote it, so it’s not my work.” What’s the best reply?",
      options: ["“You’re right, AI did everything, so it isn’t really yours”", "“Never use AI again, it’s basically cheating”", "“Your ideas and checks are yours. Disclose AI where rules ask.”", "“Just hide that you used AI, nobody can tell anyway”"], answer: 2,
      hint: "What part did the human do?",
      note: "Directing, judging and fixing AI output is real skill. Honesty about using it builds trust.", badge: "handshake",
      board: true, boardLabel: "after Round 6"
    }),
    BATTLE(3, "Final Battle: Get AI to write a 30-second pitch for a simple app idea that solves one problem on YOUR campus. 3 minutes.", "Teams pick the problem, prompt, iterate, then one person reads the pitch aloud. Host: tap the winning team for +150."),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: what’s the one prompt move you’ll use from today?", note: "Make it simple and real. The room claps; the host picks the best one.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Moves That Win Prompt Battles", note: "Screenshot this. Try 3 moves on your next AI task.", items: MOVES },
    {
      type: "end",
      joinTitle: "Join the EduMoon community",
      joinText: "AI games, coding challenges and real projects every week. Learn to use AI the smart way.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
