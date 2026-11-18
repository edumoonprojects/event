// Fact-Check Lab (EduMoon Skills Club). Medium: for all years.
// How to check a forward before you share it: source, date, photos, numbers, fake job offers and AI-made content. All messages, names and links are made up.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const FC = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const FCN = (round, name, extra) => FC(round, name, Object.assign({ kind: "number", time: 55 }, extra));
const FCSPOT = { kind: "bug", time: 55, step1: "What kind of problem is it?", step2: "Tap the line that gives it away", say1: "First pick the problem.", say2: "Now tap the line.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The giveaway line is" };

// The take-home card: the 8-step check.
const CHECKCARD = [
  ["1. Pause", "Strong feelings (shock, anger, fear) are a reason to slow down."],
  ["2. Source", "Who first said it? A named, known source, or “forwarded many times”?"],
  ["3. Date", "Is it new, or an old story shared again?"],
  ["4. Search", "Search the main claim. Do trusted news sites or official pages say it too?"],
  ["5. Photo", "Use a reverse image search. Old photos are often reused with new stories."],
  ["6. Numbers", "Do the numbers make sense? Check percentages and units."],
  ["7. Links", "Check the exact website address. Look-alike names are a trick."],
  ["8. Then decide", "Not sure? Don’t forward. Silence is better than spreading a fake."]
];

window.GAME = {
  id: "fact-check-lab",
  title: "Fact-Check Lab",
  club: "Skills Club",
  tagline: "Real or fake? Check the forward before you share it with 200 people.",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "35 minutes", level: "Medium",
    about: "A message in the class group says “College closed tomorrow! Forward to all!” Half the class skipped the lab and lost attendance. In 6 rounds, teams learn to check forwards like a fact-checker: source, date, old photos used again, numbers that do not add up, fake job and scholarship offers, and AI-made images and voices. All messages and links in this game are made up.",
    outcomes: "A simple 8-step check for any forward, the common signs of fake messages, how to spot look-alike links, and the habit of pausing before sharing.",
    tone: "Do not shame anyone for sharing fakes; everyone has. Make it detective work. After each reveal, ask: what was the clue?",
    extra: [["Show and tell", "Ask the room for a real fake forward they received recently (no personal details). Run it through the 8 steps together."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Checked",
    rulesEyebrow: "How Fact-Check Lab works", rulesTitle: "Learn the check. Find the clue. Don’t get fooled.",
    learnText: "The host shares one fact-checking skill.", crackTitle: "Check",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody spotted it. Fakes are designed to look real!", cracked: "checked it",
    next: "Next round →", finale: "Next →", winner: "can’t be fooled!", endLine: "The class group is fake-free today."
  },
  offerEyebrow: "EduMoon Skills Club · Fact-check level",
  offerTitle: "Your fact-check level",
  offers: [
    { min: 0.7, icon: "shield", title: "Chief Fact-Checker", text: "You can’t be fooled. Teach the 8 steps to your family group." },
    { min: 0.45, icon: "search", title: "Sharp Detective", text: "Strong! Try a reverse image search on the next viral photo you get." },
    { min: 0.2, icon: "eye", title: "Careful Reader", text: "Good start. Pause before every forward this week." },
    { min: 0, icon: "book-open", title: "Rookie Checker", text: "Everyone starts here. Keep the card below handy." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Forwarded many times",
      title: "“College closed tomorrow! Forward to all!” Half the class skipped the lab and lost attendance. It was fake. Can your team catch the next one?",
      cards: [["search", "Source, date, photos, numbers"], ["shield", "Fake offers and look-alike links"], ["trophy", "Your score decides your fact-check level"]]
    },
    { type: "rules" },

    // ---------- Round 1: Pause and source ----------
    {
      type: "learn", door: 1,
      title: "Step one: pause and find the source.",
      points: [["Pause", "Fakes are written to make you feel shock, fear or anger"], ["Source", "Who said it first? A named person or office?"], ["Official check", "College news comes from the college website, notice board or official group"]],
      highlightLast: true,
      side: { label: "Warning signs", items: [["x", "“Forward to everyone!”", "Pushes you to share fast"], ["x", "No name, no date", "Who wrote it?"], ["x", "ALL CAPS and many !!!", "Emotion, not facts"]] }
    },
    FC(1, "Pause and Source", {
      prompt: "A message says “College closed tomorrow!” with no name or notice number. What should you do first?",
      options: ["Forward it quickly to every group you are in", "Skip college tomorrow just to be safe", "Reply to the sender asking for more forwards", "Check the college website or official group"], answer: 3,
      hint: "Where do real notices come from?",
      note: "Check the official source first. A real closure will be on the college website, notice board or official channel.", badge: "search"
    }),
    FC(1, "Pause and Source", {
      prompt: "Why do many fake messages say “Forward this to 10 groups now!”?",
      options: ["Because real news always says that", "To spread before anyone checks", "To help the app save phone storage", "Because the government asks for it"], answer: 1,
      hint: "Speed beats checking.",
      note: "Urgency stops you from thinking. Real notices rarely beg you to forward them.", badge: "zap"
    }),
    FC(1, "Pause and Source", {
      prompt: "Which source is most trustworthy for a change in exam dates?",
      options: ["A screenshot in a friend’s status", "A video by an unknown YouTube channel", "A message marked “forwarded many times”", "The university’s official website"], answer: 3,
      hint: "Go to the place that makes the decision.",
      note: "The body that sets the exam is the one to check. Screenshots can be edited in seconds.", badge: "file-text",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Date and old photos ----------
    {
      type: "learn", door: 2,
      title: "Old news shared again, and old photos with new stories.",
      points: [["Check the date", "Many “breaking” stories are years old"], ["Reverse image search", "Upload the photo to Google Lens or a similar tool to find where it first appeared"], ["Captions lie", "A real photo with a false caption is still a fake"]],
      highlightLast: true,
      side: { label: "Example", items: [["eye", "Photo: flooded road", "Caption: “Beach Road today!”"], ["search", "Reverse search", "Photo is from another city, 4 years ago"], ["x", "Verdict", "Real photo, fake story"]] }
    },
    FC(2, "Dates and Photos", {
      prompt: "A “breaking” cyclone photo of Vizag goes viral. What is the best way to check if it is new?",
      options: ["Count how many people have shared it", "Zoom in to see if the photo is clear", "Do a reverse image search", "Check if the caption has many emojis"], answer: 2,
      hint: "Find where the photo first appeared.",
      note: "Reverse image search shows older copies. Many viral storm photos are from other years or other places.", badge: "eye"
    }),
    FC(2, "Dates and Photos", {
      prompt: "A real photo is shared with a false caption about where it was taken. Is the post true?",
      options: ["No, the false caption makes it a fake", "Yes, because the photo itself is real", "Yes, if many people have shared it", "Only true if the photo is high quality"], answer: 0,
      hint: "The story is in the caption.",
      note: "Misleading context is one of the most common fakes. Real photo, false story.", badge: "x"
    }),
    FCN(2, "Dates and Photos", {
      prompt: "A news article is dated 2021. It is now 2026. How many years old is the “breaking news”?",
      answer: 5,
      hint: "2026 − 2021.",
      note: "5 years old. Always check the date before you react or forward.", badge: "clock",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Numbers ----------
    {
      type: "learn", door: 3,
      title: "Numbers can lie too.",
      points: [["Does it add up?", "Percentages over 100%, or totals bigger than the population"], ["Which number?", "“Up 200%” from 1 to 3 is still only 3"], ["Who counted?", "A survey of 20 people is not “all students”"]],
      highlightLast: true,
      side: { label: "Quick checks", items: [["check", "Parts add to the total?", ""], ["check", "How many people were asked?", ""], ["check", "Up from what?", ""]] }
    },
    FC(3, "Numbers", {
      prompt: "A post says “120% of students failed the exam.” What is wrong?",
      options: ["Nothing; exams can be that hard", "More than 100% of a group cannot fail", "Percentages are not used for exams", "It should say 120 students instead"], answer: 1,
      hint: "What is the maximum percentage of a group?",
      note: "100% is everyone. A number over that is a clear sign the claim is made up or garbled.", badge: "chart-column"
    }),
    FCN(3, "Numbers", {
      prompt: "“Cases up 200%!” Last week there were 2 cases. How many are there this week?",
      answer: 6,
      hint: "200% more than 2 is 4 more.",
      note: "6 cases. A big percentage on a small number can sound scary but mean very little.", badge: "chart-column"
    }),
    FC(3, "Numbers", {
      prompt: "“90% of students prefer online classes!” The survey asked 10 students in one hostel. Best response?",
      options: ["The sample is too small to say “students”", "It must be true because it says 90%", "Online classes are clearly better now", "Surveys are always fully accurate"], answer: 0,
      hint: "How many were asked, and who?",
      note: "10 people in one hostel cannot speak for all students. Always ask who was counted.", badge: "users",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Share a fake forward your family or friends received. What was the clue that it was fake?", note: "No names or personal details. 20 seconds.", points: 100 },

    // ---------- Round 4: Fake offers and look-alike links ----------
    {
      type: "learn", door: 4,
      title: "Fake job, internship and scholarship offers.",
      points: [["Money first", "Real employers do not ask you to pay to get a job"], ["Look-alike links", "Check every letter in the website address"], ["Too good", "Big pay for little work is a classic trap"]],
      highlightLast: true,
      side: { label: "Red flags", items: [["x", "“Pay ₹999 registration fee”", "Real jobs don’t charge"], ["x", "Gmail address for a big company", "Check the domain"], ["x", "“Only 2 seats left, reply in 1 hour”", "Fake urgency"]] }
    },
    FC(4, "Fake Offers", {
      prompt: "“Work from home internship! ₹40,000/month. Pay ₹1,500 to confirm your seat.” What is the biggest red flag?",
      options: ["The salary is written in rupees", "It allows work from home", "Asking you to pay to join", "It is an internship, not a full job"], answer: 2,
      hint: "Who should pay whom?",
      note: "Real employers pay you. Any “fee to join” is a very common scam.", badge: "indian-rupee"
    }),
    FC(4, "Fake Offers", {
      prompt: "Which link is most likely FAKE for a scholarship from a portal named “scholarships.gov.in”?",
      options: ["scholarships.gov.in/login", "scholarships-gov-in.co", "scholarships.gov.in/apply", "scholarships.gov.in/help"], answer: 1,
      hint: "Look at the very end of the address.",
      note: "scholarships-gov-in.co is a different website that only looks similar. Always check the real domain.", badge: "link-2"
    }),
    FC(4, "Fake Offers", {
      prompt: "An “HR manager” from a big company emails you from a free Gmail address. Best move?",
      options: ["Send your Aadhaar and bank details", "Check the official careers page", "Pay the training fee they ask for", "Reply quickly before the offer ends"], answer: 1,
      hint: "Verify on the company’s own site.",
      note: "Big companies use their own email domain. Check openings on their official careers page.", badge: "mail",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: AI-made content ----------
    {
      type: "learn", door: 5,
      title: "AI-made images, voices and videos.",
      points: [["Images", "Look at hands, text, ears, jewellery and backgrounds"], ["Voices", "A call in a friend’s voice asking for money? Call them back on their own number"], ["Best check", "Who posted it first, and do trusted sources show it too?"]],
      highlightLast: true,
      side: { label: "AI clues", items: [["eye", "Strange fingers or text", "Common in AI images"], ["mic", "Odd pauses in a voice note", "Possible cloned voice"], ["search", "No trusted source", "The strongest clue"]] }
    },
    FC(5, "AI Fakes", {
      prompt: "You get a voice note in your cousin’s voice: “Send ₹5,000 urgently, I’m stuck.” Best move?",
      options: ["Call your cousin back on their own number", "Send the money right away to be safe", "Forward the voice note to the family group", "Reply with your UPI PIN to speed it up"], answer: 0,
      hint: "Use a channel you already trust.",
      note: "Voices can be copied with AI. Call back on a number you know before sending any money.", badge: "smartphone"
    }),
    FC(5, "AI Fakes", {
      prompt: "A viral photo shows a famous actor at your college fest. Which is the STRONGEST check?",
      options: ["Whether trusted sources posted it", "Whether the photo looks very bright and sharp", "Whether it has more than 10,000 likes", "Whether your friend says it looks real"], answer: 0,
      hint: "Visual clues help, but the source matters more.",
      note: "AI images are getting very good. The source and other trusted reports are the best check.", badge: "eye"
    }),
    FC(5, "AI Fakes", {
      prompt: "In an AI-made image, which detail often looks wrong?",
      options: ["The colour of the sky in the photo", "The shape of the photo frame", "The file size of the image", "Text on signs and fingers on hands"], answer: 3,
      hint: "Small, detailed parts.",
      note: "Text and hands are still common giveaways, but newer tools are improving, so check the source too.", badge: "eye",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Full check (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: run the full check on real-looking messages.",
      points: [["Use all steps", "Pause, source, date, search, photo, numbers, links"], ["One clue is enough", "If one thing is clearly fake, don’t forward"], ["Not sure?", "Don’t forward. That is always safe"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["search", "Full check", "Find the giveaway"], ["mic", "Then the final challenge", "Debunk it live"]] }
    },
    FC(6, "Full Check", Object.assign({}, FCSPOT, {
      double: true,
      prompt: "A forward in the class group. What is the problem, and which line gives it away?",
      code: ["URGENT: Free laptops for all BTech students!", "Announced by the Education Ministry today.", "Register at free-laptop-govt.online with your Aadhaar.", "Forward to 10 groups to activate your link!"],
      outputOptions: ["A look-alike website", "An old photo reused", "A number over 100%"], outputAnswer: 0, bugLine: 2,
      bugText: "“free-laptop-govt.online” is not an official government domain, and it asks for Aadhaar",
      hint: "Where does it send you?",
      note: "Official government sites usually end in gov.in. Never enter Aadhaar on an unknown link.", badge: "link-2"
    })),
    FC(6, "Full Check", Object.assign({}, FCSPOT, {
      double: true,
      prompt: "A post on social media. What is the problem, and which line gives it away?",
      code: ["Shocking! Survey of Vizag students:", "A survey of 12 students in one hostel found:", "95% of ALL Vizag students skip breakfast!", "Share to spread awareness!"],
      outputOptions: ["A tiny sample made to sound huge", "A look-alike website", "A cloned voice note"], outputAnswer: 0, bugLine: 2,
      bugText: "12 students in one hostel cannot tell us about “ALL Vizag students”",
      hint: "How many were asked?",
      note: "The claim jumps from 12 people to every student in the city.", badge: "users"
    })),
    FC(6, "Full Check", {
      double: true,
      prompt: "You’re not sure if a scary news forward is true. What is the best choice?",
      options: ["Forward it with “not sure if true” added", "Forward it to family only, just in case", "Don’t forward it until you can check it", "Post it on your status for a short time"], answer: 2,
      hint: "What stops the spread?",
      note: "Adding “not sure” still spreads it. Not forwarding is the safest choice.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best debunk wins +200", prompt: "The host reads a made-up forward. In 30 seconds, debunk it out loud using at least three of the 8 steps.", note: "Example: “Hostel water has a virus, don’t drink for 3 days, forward to all!”", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The 8-Step Fact Check", note: "Screenshot this. Use it before every forward.", items: CHECKCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Practical life and career skills every week, with games, talks and real examples.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
