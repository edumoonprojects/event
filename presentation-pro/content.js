// Presentation Pro (EduMoon Skills Club). For all years.
// Slides people remember and talks people follow: one idea per slide, less text, visuals, hooks, structure,
// delivery, nerves and handling questions. For seminars, project reviews, vivas and pitches.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PS = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Find the slide or step that hurts" questions use the bug door.
const SLIDE = { kind: "bug", time: 60, step1: "What’s the problem?", step2: "Tap the weak line", say1: "First pick the problem.", say2: "Now tap the weak line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

const TIPS = [
  ["One idea per slide", "If it needs two titles, it needs two slides."],
  ["Fewer words", "Short phrases on screen; the details come from you."],
  ["Big, readable text", "If the last row can’t read it, it’s too small."],
  ["Show, don’t list", "A chart, photo or diagram beats 8 bullets."],
  ["Hook in the first 30 seconds", "A question, a story or a surprising fact."],
  ["Problem, solution, proof, ask", "A structure for almost any talk."],
  ["Practise out loud, timed", "At least twice, standing up."],
  ["Questions are good", "Listen fully, answer briefly, say “I’ll check” if unsure."]
];

window.GAME = {
  id: "presentation-pro",
  title: "Presentation Pro",
  club: "Skills Club",
  tagline: "Slides people remember. Talks people actually listen to.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "Seminars, project reviews, vivas, internships and pitches all need presentations. In 6 rounds, teams fix slides and talks: one idea per slide, cutting text, readable design, showing instead of listing, strong openings, a simple structure, confident delivery, handling nerves and answering questions. They spot the weak line in slide plans and practise short openings out loud.",
    outcomes: "8 rules for slides and delivery, a simple structure for any talk, ways to handle nerves, and how to answer questions calmly.",
    tone: "Many students are scared of presenting. Celebrate every speaker, keep speaking steps short, and remind them that confidence comes from practice, not talent.",
    extra: [["Live practice", "In the final challenge, give each team 30 seconds to open a talk on their mini-project. Clap for every one."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Nailed it",
    rulesEyebrow: "How Presentation Pro works", rulesTitle: "Fix the slide. Fix the talk. Own the room.",
    learnText: "The host shares one presentation rule.", crackTitle: "Choose",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Weak-line questions: <b>100</b> for the problem + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most presentations make this mistake!", cracked: "nailed it",
    next: "Next round →", finale: "Next →", winner: "are today’s presentation pros!", endLine: "Your next presentation just got better!"
  },
  offerEyebrow: "EduMoon Skills Club · Presentation results",
  offerTitle: "Your presenter level",
  offers: [
    { min: 0.7, icon: "crown", title: "Stage Ready", text: "Slides and delivery: you’ve got it. Volunteer for the next seminar." },
    { min: 0.45, icon: "mic", title: "Confident Presenter", text: "Strong! Cut your next slide’s words in half." },
    { min: 0.2, icon: "pen-tool", title: "Getting There", text: "Good start. Practise your opening out loud twice." },
    { min: 0, icon: "book-open", title: "First Talk", text: "Everyone starts here. Save the 8 rules for your next seminar." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Presentation Pro",
      title: "Slide 1: 200 words. Slide 2: 250 words. The audience is on their phones by slide 3. Let’s make sure that never happens to you.",
      cards: [["file-text", "Slides that people read"], ["mic", "Openings that grab attention"], ["shield", "Handle nerves and questions calmly"]]
    },
    { type: "rules" },

    // ---------- Round 1: Less text ----------
    {
      type: "learn", door: 1,
      title: "Slides support you. They’re not your script.",
      points: [["People can’t read and listen together", "Long text makes them stop listening to you"], ["One idea per slide", "With a clear title"], ["Short phrases", "You explain the rest out loud"]],
      highlightLast: true,
      side: { label: "Quick rule", items: [["file-text", "About 6 lines max", ""], ["eye", "Big text", "Readable from the back"], ["mic", "Details from you", "Not the slide"]] }
    },
    PS(1, "Less Text", {
      prompt: "Which slide will the audience understand fastest?",
      options: ["A full paragraph copied from the report", "A screenshot of a long email", "12 bullet points in small font", "Title “Why our app?” with 3 short points and one image"], answer: 3,
      hint: "Less is more.",
      note: "Short, clear, visual. You explain the details while they look.", badge: "file-text"
    }),
    PS(1, "Less Text", {
      prompt: "A student reads every word from the slides, facing the screen. What’s the problem?",
      options: ["Nothing", "The font is too big", "Too much eye contact", "The audience can read faster themselves, and loses connection with the speaker"], answer: 3,
      hint: "Why do they need you?",
      note: "Face the audience and explain. The slide is the backup, you are the presentation.", badge: "users"
    }),
    PS(1, "Less Text", {
      prompt: "Your slide has two big ideas. Best fix?",
      options: ["Remove the title", "Make the font smaller", "Add more animations", "Split it into two slides, one idea each"], answer: 3,
      hint: "One idea per slide.",
      note: "More slides with less on each is easier to follow than fewer crowded ones.", badge: "list-checks",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Design ----------
    {
      type: "learn", door: 2,
      title: "Simple design makes slides readable.",
      points: [["Contrast", "Dark text on light, or light on dark"], ["Big fonts", "Titles large, body readable from the back"], ["Show, don’t list", "Charts, photos, diagrams"]],
      highlightLast: true,
      side: { label: "Avoid", items: [["x", "Yellow text on white", ""], ["x", "5 different fonts", ""], ["x", "Spinning animations", ""]] }
    },
    PS(2, "Design", {
      prompt: "Which colour choice is easiest to read on a projector?",
      options: ["Light yellow text on a white background", "Dark text on a light background, or white on dark", "Grey on grey", "Red text on green"], answer: 1,
      hint: "Contrast.",
      note: "Projectors wash out colours. Strong contrast keeps text readable.", badge: "eye"
    }),
    PS(2, "Design", {
      prompt: "You want to show that app users grew from 50 to 500 in 5 months. Best way?",
      options: ["A list of 5 bullet points", "A simple line chart with the 5 months", "Just say it, no slide", "A paragraph describing each month"], answer: 1,
      hint: "Show the trend.",
      note: "A chart shows growth instantly. Words make people do the work.", badge: "trending-up"
    }),
    PS(2, "Design", Object.assign({}, SLIDE, {
      prompt: "A team’s slide design plan. Which choice hurts?",
      code: ["One colour theme for every slide.", "Title font size large, body text readable from the back.", "A different flashy animation on every bullet point.", "One clear image or chart per slide."],
      outputOptions: ["It distracts from the message and wastes time", "The theme is boring", "Nothing, it’s perfect"], outputAnswer: 0, bugLine: 2,
      bugText: "flashy animations pull attention away from what you’re saying. Keep them rare and simple",
      hint: "What would distract the audience?",
      note: "Design should help people understand, not show off effects.", badge: "palette",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: Openings and structure ----------
    {
      type: "learn", door: 3,
      title: "Grab attention in the first 30 seconds.",
      points: [["Hook", "A question, a short story, a surprising fact"], ["Simple structure", "Problem → solution → proof → ask or summary"], ["Tell them the plan", "“3 things in 5 minutes”"]],
      highlightLast: true,
      side: { label: "Hooks", items: [["message-circle", "A question", "“How many of you…?”"], ["sparkles", "A surprising fact", ""], ["user", "A 20-second story", ""]] }
    },
    PS(3, "Openings", {
      prompt: "Which opening grabs attention best for a project on campus water wastage?",
      options: ["“Water is very important.”", "“Good morning, my name is… our topic is water wastage.”", "“Raise your hand if you’ve seen a tap running in the hostel with nobody near it.”", "Reading the abstract word by word"], answer: 2,
      hint: "Involve the audience.",
      note: "A question that makes people think of their own experience pulls them in.", badge: "message-circle"
    }),
    PS(3, "Openings", {
      prompt: "A simple structure that works for most project presentations?",
      options: ["Problem, your solution, proof it works, what’s next", "Only the code", "Random order", "Thank you slide first"], answer: 0,
      hint: "Tell a story.",
      note: "Problem → solution → proof → next steps. Easy to follow, easy to remember.", badge: "route"
    }),
    PS(3, "Openings", Object.assign({}, SLIDE, {
      prompt: "A mini-project presentation plan. Which step weakens it?",
      code: ["Open with a question about the problem.", "Spend 8 of 10 minutes on the history of the topic since 1950.", "Show a live demo of our working prototype.", "End with results and what we’d do next."],
      outputOptions: ["The demo should be skipped", "Too much time on background, not enough on your actual work", "Nothing, perfect plan"], outputAnswer: 1, bugLine: 1,
      bugText: "the audience came to see YOUR work. Keep background short and spend time on your solution and demo",
      hint: "What did the audience come for?",
      note: "Background is context, not content. A minute is usually enough.", badge: "clock",
      board: true, boardLabel: "after Round 3"
    })),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Open a talk on any topic with a hook. 20 seconds.", note: "A question, a story or a surprising fact. The room claps.", points: 100 },

    // ---------- Round 4: Delivery ----------
    {
      type: "learn", door: 4,
      title: "How you say it matters as much as what you say.",
      points: [["Eye contact", "Look at different people, not the screen or floor"], ["Pace and pauses", "Slow down. A pause makes a point land"], ["Practise out loud", "Twice, standing, with a timer"]],
      highlightLast: true,
      side: { label: "Delivery basics", items: [["eye", "Look at people", ""], ["timer", "Slow down", ""], ["mic", "Speak to the back row", ""]] }
    },
    PS(4, "Delivery", {
      prompt: "Best way to prepare for a 5-minute seminar?",
      options: ["Practise out loud, standing, with a timer, at least twice", "Don’t prepare, be natural", "Read the slides once in your head", "Memorise every word"], answer: 0,
      hint: "Practise like it’s real.",
      note: "Out-loud practice finds the awkward parts and fixes your timing.", badge: "timer"
    }),
    PS(4, "Delivery", {
      prompt: "When nervous, many people speak very fast. Best fix?",
      options: ["Speak even faster to finish early", "Breathe, slow down, and pause after each key point", "Whisper", "Look only at the floor"], answer: 1,
      hint: "Pauses are powerful.",
      note: "Slower feels strange to you but sounds confident to the audience.", badge: "heart"
    }),
    PS(4, "Delivery", {
      prompt: "Where should you look while presenting?",
      options: ["At the ceiling", "At your phone", "At different people in the audience, a few seconds each", "At the screen the whole time"], answer: 2,
      hint: "Connect.",
      note: "Eye contact makes people feel you’re talking to them.", badge: "eye",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Nerves and questions ----------
    {
      type: "learn", door: 5,
      title: "Nerves are normal. Questions are good.",
      points: [["Nerves", "Breathe slowly, know your first 2 lines by heart"], ["Questions", "Listen fully, pause, answer briefly"], ["Don’t know?", "“Good question, I’ll check and get back to you.” Never make it up"]],
      highlightLast: true,
      side: { label: "Calm tricks", items: [["heart", "Slow breaths", "Before you start"], ["mic", "First 2 lines", "By heart"], ["check", "“I’ll check”", "is a fine answer"]] }
    },
    PS(5, "Nerves and Questions", {
      prompt: "Your hands shake before a viva. What helps most?",
      options: ["Drinking 3 coffees", "Not looking at the panel at all", "Slow breaths, and knowing your first two lines by heart", "Running away"], answer: 2,
      hint: "Calm body, confident start.",
      note: "A strong start calms you down for the rest.", badge: "heart"
    }),
    PS(5, "Nerves and Questions", {
      prompt: "A judge asks a question you don’t know the answer to. Best reply?",
      options: ["Stay silent", "Make up an answer confidently", "Argue with the judge", "“That’s a good question. I’m not sure, but I’ll find out.” Then mention what you do know"], answer: 3,
      hint: "Honest and calm.",
      note: "Made-up answers fall apart with one follow-up. Honesty earns respect.", badge: "check"
    }),
    PS(5, "Nerves and Questions", {
      prompt: "Someone asks a long, confusing question. First step?",
      options: ["Repeat or rephrase it briefly to check you understood", "Ignore it", "Answer immediately anyway", "Ask them to sit down"], answer: 0,
      hint: "Make sure you understood.",
      note: "Rephrasing gives you time to think, and makes sure you answer the right question.", badge: "message-circle",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Final (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: put it all together.",
      points: [["Slides", "One idea, few words, big and visual"], ["Talk", "Hook, structure, slow and clear"], ["Finish strong", "Summary or ask, then “Thank you, happy to take questions”"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["mic", "Final choices", ""], ["award", "Then your level", ""]] }
    },
    PS(6, "Final", {
      double: true,
      prompt: "Best way to end a project presentation?",
      options: ["Run out of time mid-slide", "A slide saying only “Any queries?”", "“That’s it.” and walk away", "A one-line summary of what you built and why it matters, then “Thank you, happy to take questions”"], answer: 3,
      hint: "Leave them with your main point.",
      note: "People remember the end. Make your main point the last thing they hear.", badge: "award"
    }),
    PS(6, "Final", {
      double: true,
      prompt: "You have 5 minutes but 25 slides. What should you do?",
      options: ["Talk very fast", "Skip the demo", "Cut to the 6 to 8 slides that matter most", "Ask for 20 more minutes"], answer: 2,
      hint: "Roughly a minute per slide.",
      note: "Fit the slides to the time, not the time to the slides.", badge: "timer"
    }),
    PS(6, "Final", {
      double: true,
      prompt: "What makes someone a confident presenter over time?",
      options: ["Being born confident", "Presenting often and learning from each one", "Expensive slides", "Never presenting"], answer: 1,
      hint: "Practice.",
      note: "Confidence is built. Volunteer to present whenever you can.", badge: "trending-up",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: open a presentation on your mini-project or club. Hook, problem and what you built.", note: "One speaker per team. The room claps; the host picks the strongest opening.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Rules for Great Presentations", note: "Screenshot this. Use it for your next seminar or viva.", items: TIPS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Career skills, presentation practice and games every week. Build confidence with your college friends.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
