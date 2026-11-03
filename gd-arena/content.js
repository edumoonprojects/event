// GD Arena (EduMoon English Club). For 3rd and final year.
// Group discussions in placement drives: 6 rounds of GD skills, then a live GD in small groups.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const GQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Tap the weak line" questions use the bug door with friendlier labels.
const WEAK = { kind: "bug", time: 55, step1: "Why is it a problem?", step2: "Tap the weak line", say1: "First pick why it’s a problem.", say2: "Now tap the weak line.", partO: "the reason", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: phrases for every moment of a GD.
const PHRASES = [
  ["To start", "“Let’s first be clear on what this topic really asks…”"],
  ["To add a point", "“Building on what Priya said, I’d add that…”"],
  ["To agree", "“That’s a strong point, and here’s an example that supports it…”"],
  ["To disagree", "“I see it differently, and here’s why…”"],
  ["To enter", "“If I could add one point here…”"],
  ["To bring someone in", "“Sneha, we haven’t heard from you yet. What do you think?”"],
  ["To refocus", "“We’ve covered X well. Should we also look at Y?”"],
  ["To summarise", "“To sum up, we agreed on…, we differed on…, and most of us felt…”"]
];

window.GAME = {
  id: "gd-arena",
  title: "GD Arena",
  club: "English Club",
  tagline: "Group discussions decide many placement drives. Learn the moves, then play a live GD.",
  art: window.STORY_ART,
  guide: {
    years: "3rd and final year (2nd years welcome to watch and learn)", time: "40 minutes", level: "Medium",
    about: "Many placement drives include a group discussion (GD), and students fear it more than written tests. In 6 rounds, teams learn what evaluators really score, how to start, how to agree and disagree politely, how to handle someone who won’t stop talking, how to bring quiet members in and how to summarise. Then the room splits into groups for a real 5-minute GD.",
    outcomes: "A phrase for every moment of a GD, an understanding that quality and teamwork beat talking the most, and their first real GD practice in a safe room.",
    tone: "Fear of speaking is the real enemy here, not grammar. During the live GD, praise anyone who speaks even once. Never correct English mistakes in front of the group; note them for later if a student asks.",
    extra: [["Running the live GD", "Make groups of 5 or 6 in circles. Give each group one topic (there are 4 on the screen). Set a 5-minute timer. Walk around and notice who uses today’s moves: starting, building on others, bringing someone in, summarising. Give the +200 to the best participant, not the loudest."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Nailed",
    rulesEyebrow: "How GD Arena works", rulesTitle: "Learn the move. Pick the best line. Then use it live.",
    learnText: "The host shows one GD move.", crackTitle: "Answer",
    crackText: "Pick the best line on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>. Live GD: <b>+200</b>!",
    nobody: "Nobody got this one. Most students get it wrong in real GDs too!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s GD champions!", endLine: "You’re ready for your next GD!"
  },
  offerEyebrow: "EduMoon English Club · GD results",
  offerTitle: "How would the evaluator rate you?",
  offers: [
    { min: 0.7, icon: "crown", title: "GD Leader", text: "You know the moves. Next time, be the one who summarises." },
    { min: 0.45, icon: "message-circle", title: "Strong Contributor", text: "Good! Practise one GD a week with friends and you’ll stand out." },
    { min: 0.2, icon: "ear", title: "Good Listener", text: "A great base. Next GD, try to speak at least 3 times." },
    { min: 0, icon: "book-open", title: "Getting Started", text: "Everyone starts here. Save the phrase card and practise one phrase a day." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · GD Arena",
      title: "Placement drive, round 2: “Sit in a circle. Your topic is on the board. You have 15 minutes.” Is your team ready?",
      cards: [["users", "6 rounds of real GD moments"], ["message-circle", "Pick the best line for each moment"], ["mic", "Then a live GD in small groups"]]
    },
    { type: "rules" },

    // ---------- Round 1: What evaluators score ----------
    {
      type: "learn", door: 1,
      title: "The loudest person rarely wins a GD.",
      points: [["Content", "Relevant points with reasons and examples"], ["Communication", "Clear and calm. Simple English is perfectly fine"], ["Teamwork", "Listening, building on others, bringing people in. This is where most marks are won or lost"]],
      highlightLast: true,
      side: { label: "What loses marks", items: [["x", "Talking over others", "Even with good points"], ["x", "Staying silent", "They can’t score what they can’t hear"], ["x", "Fighting", "Disagree with ideas, never with people"]] }
    },
    GQ(1, "What Gets Scored", {
      prompt: "Four students in a GD. Who usually scores the highest?",
      options: ["Arjun, who spoke for 8 of the 15 minutes", "Meena, who made 3 clear points, built on others’ ideas and summarised at the end", "Kiran, who used the most difficult English words", "Ravi, who agreed with everyone"], answer: 1,
      hint: "Think about content, communication AND teamwork.",
      note: "Quality, teamwork and a summary beat talking the most. Evaluators notice who makes the GROUP better.", badge: "award"
    }),
    GQ(1, "What Gets Scored", {
      prompt: "In a 15-minute GD with 8 people, how many times should you aim to speak?",
      options: ["3 to 5 times, with a real point each time", "Every minute", "Only at the end", "Once, perfectly"], answer: 0,
      hint: "Enough to be noticed, not so much that you block others.",
      note: "3 to 5 meaningful entries is a good target. One perfect point is not enough to be noticed.", badge: "target"
    }),
    GQ(1, "What Gets Scored", {
      prompt: "Your English isn’t perfect. What should you do in a GD?",
      options: ["Memorise long sentences and say them", "Speak very fast so nobody notices mistakes", "Stay silent to avoid mistakes", "Speak in simple, clear sentences. Ideas and teamwork matter more than fancy grammar"], answer: 3,
      hint: "What are evaluators really scoring?",
      note: "Simple and clear wins. Many students who get selected speak simple English with good ideas.", badge: "message-circle",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Starting the GD ----------
    {
      type: "learn", door: 2,
      title: "Starting a GD is a chance, not a must.",
      points: [["Start only if you have a clear idea", "A weak start hurts more than a late, strong entry"], ["3 good ways to start", "Define the topic, share a fact, or ask a question the group can discuss"], ["Keep it short", "30 to 45 seconds, then let others in"]],
      highlightLast: true,
      side: { label: "Topic: “Should colleges allow AI tools in exams?”", items: [["book-a", "Define it", "“Let’s first be clear: which exams, and which tools?”"], ["chart-column", "Use a fact", "“Most students already use AI for assignments…”"], ["message-circle", "Ask a question", "“Is an exam testing memory, or thinking?”"]] }
    },
    GQ(2, "Starting the GD", {
      prompt: "Topic: “Should colleges allow AI tools in exams?” Which opening is best?",
      options: ["“Good morning everyone, myself Kiran, I will start the GD.”", "“AI is very bad. It should be banned everywhere.”", "“Before we take sides, let’s be clear on what we mean: open-book exams, coding tests, or all exams? The answer may be different for each.”", "“I don’t know much about AI, but I think yes.”"], answer: 2,
      hint: "Which one gives the whole group something to discuss?",
      note: "Defining the topic is a smart, safe start. It shows clear thinking and opens the floor for everyone.", badge: "flame"
    }),
    GQ(2, "Starting the GD", Object.assign({}, WEAK, {
      prompt: "Kiran starts the GD. Which line hurts his start?",
      code: ["Let’s first be clear on what “AI tools in exams” means.", "In coding tests, AI could replace the skill being tested.", "In open-book exams, it might be like using a textbook.", "So everyone who disagrees with me is simply wrong."],
      outputOptions: ["It attacks people and shuts the discussion down", "It’s too short", "It should be said first"], outputAnswer: 0, bugLine: 3,
      bugText: "it closes the discussion and attacks anyone who disagrees",
      hint: "Which line would make others feel they can’t speak?",
      note: "A great start opens the discussion. Calling others wrong before they speak loses teamwork marks instantly.", badge: "x"
    })),
    GQ(2, "Starting the GD", {
      prompt: "The topic is announced and you have no clear idea. What should you do?",
      options: ["Listen to the first 2 or 3 speakers, then enter with a strong point", "Stay silent the whole GD", "Ask the evaluator to change the topic", "Start anyway, to show confidence"], answer: 0,
      hint: "Is starting the only way to score?",
      note: "A strong second or third entry scores well. Listening first is a skill, not a weakness.", badge: "ear",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Agree and disagree ----------
    {
      type: "learn", door: 3,
      title: "Disagree with the idea, never with the person.",
      points: [["Agree and add", "“That’s a strong point, and here’s an example…”"], ["Disagree politely", "“I see it differently, and here’s why…”"], ["Build on someone", "Use their name: “Building on Priya’s point…” Evaluators love this"]],
      highlightLast: true,
      side: { label: "Never say", items: [["circle-x", "“You are wrong.”", "Attacks the person"], ["circle-x", "“That’s a stupid point.”", "Ends your teamwork score"], ["circle-x", "“I totally agree.” (and nothing else)", "Adds nothing new"]] }
    },
    GQ(3, "Agree and Disagree", {
      prompt: "Priya says: “Online classes are better than offline classes.” You disagree. Best response?",
      options: ["“No, you are completely wrong.”", "“I see it differently, Priya. Online classes save travel time, but labs and doubt-clearing work much better in person.”", "“Whatever. Offline is better.”", "Stay silent and shake your head"], answer: 1,
      hint: "Which one respects Priya AND gives a reason?",
      note: "Name + “I see it differently” + a reason. It even admits what’s good about her point, which makes it more convincing.", badge: "hand"
    }),
    GQ(3, "Agree and Disagree", Object.assign({}, WEAK, {
      prompt: "Arjun responds to Priya. Which line should he never say?",
      code: ["Priya made a good point about saving travel time.", "But I think that point is honestly a stupid one.", "For practical subjects like labs, being in person matters.", "Maybe a mix of online and offline works best."],
      outputOptions: ["It insults her idea and loses teamwork marks", "It’s too polite", "It should come at the end"], outputAnswer: 0, bugLine: 1,
      bugText: "calling a point “stupid” is an attack, even if the rest is good",
      hint: "One line undoes all the good ones.",
      note: "Without that line, Arjun’s answer is excellent: acknowledge, disagree with a reason, suggest a middle path.", badge: "shield"
    })),
    GQ(3, "Agree and Disagree", {
      prompt: "You agree with Rahul’s point. What’s the best way to say it?",
      options: ["“I agree.”", "“Same as Rahul.”", "“I totally, totally agree with everything.”", "“Building on Rahul’s point, our college fest is a good example: most registrations came through the app.”"], answer: 3,
      hint: "How do you agree AND add something new?",
      note: "Agreeing only scores when you add something: an example, a fact or a new angle.", badge: "thumbs-up",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Disagree politely: “Students should not use phones in college at all.”", note: "Use: “I see it differently, and here’s why…” Then one reason.", points: 100 },

    // ---------- Round 4: When someone won't stop ----------
    {
      type: "learn", door: 4,
      title: "When one person won’t stop talking, enter politely, but enter.",
      points: [["Wait for a breath", "Every speaker pauses. That’s your door"], ["Acknowledge, then add", "“That’s a good point, Rahul. If I could add one thing…”"], ["When two people fight", "Bring it back to the topic. That’s a leadership move"]],
      highlightLast: true,
      side: { label: "Don’t", items: [["x", "Shout over them", "Two loud people both lose marks"], ["x", "Complain to the evaluator", "Handle it inside the group"], ["x", "Give up and stay quiet", "Then you score nothing"]] }
    },
    GQ(4, "Getting a Word In", {
      prompt: "Rahul has been talking for 3 minutes. He pauses for a breath. What do you say?",
      options: ["“That’s a good point, Rahul. If I could add one thing here…”", "Nothing. Wait for him to finish completely", "Start talking louder than him", "“Rahul, you’ve talked enough, stop now.”"], answer: 0,
      hint: "Polite AND firm.",
      note: "Acknowledge, then add. You get in without a fight, and the evaluator sees maturity.", badge: "mic"
    }),
    GQ(4, "Getting a Word In", {
      prompt: "Two members start arguing loudly with each other. Best move?",
      options: ["Join the argument on one side", "Wait for it to end", "“Both of you make strong points. Can we hear what others think, so we cover the whole topic?”", "Ask the evaluator to stop them"], answer: 2,
      hint: "What would a good team leader do?",
      note: "Calming the group and bringing it back to the topic is one of the strongest leadership signals in a GD.", badge: "crown"
    }),
    GQ(4, "Getting a Word In", {
      prompt: "You started to speak at the same time as someone else. What should you do?",
      options: ["Leave the GD", "Repeat your point twice", "Keep talking louder until they stop", "Stop, say “Please go ahead”, then speak right after them"], answer: 3,
      hint: "Which one makes you look like the most mature person in the room?",
      note: "Letting them go first costs you 20 seconds and earns you teamwork marks. Then make sure you DO speak next.", badge: "users",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Bringing quiet members in ----------
    {
      type: "learn", door: 5,
      title: "Bringing a quiet person in earns YOU marks.",
      points: [["Evaluators notice it", "It shows leadership without being bossy"], ["Use their name", "“Sneha, we haven’t heard from you yet. What do you think?”"], ["Be kind if they’re nervous", "Ask a simple question: “Do you agree with this point or not?”"]],
      highlightLast: true,
      side: { label: "Good timing", items: [["clock", "Midway", "Once the first round of points is done"], ["route", "When the group repeats itself", "A new voice brings a new angle"], ["heart", "When someone tried to speak", "And got cut off"]] }
    },
    GQ(5, "Bring Someone In", {
      prompt: "Sneha hasn’t spoken in 8 minutes. Which line is best?",
      options: ["“Sneha, why aren’t you talking? Say something.”", "“Sneha, we haven’t heard from you yet. What do you think about this?”", "Ignore it. It’s her problem", "“Some people here are not participating at all.”"], answer: 1,
      hint: "Kind, by name, with an easy question.",
      note: "Warm and specific. Two of the other options put her on the spot or embarrass her.", badge: "heart"
    }),
    GQ(5, "Bring Someone In", {
      prompt: "Why does bringing a quiet member in help YOUR score?",
      options: ["It shows leadership and teamwork, which evaluators are scoring", "It gives you a rest", "Evaluators give a fixed bonus for it", "It doesn’t, it only helps them"], answer: 0,
      hint: "Think back to what evaluators score.",
      note: "A GD tests how you’d work in a team at the company. Including people is exactly what good teammates do.", badge: "users"
    }),
    GQ(5, "Bring Someone In", {
      prompt: "Kavya starts speaking for the first time, and someone cuts her off. Best move?",
      options: ["Let it go", "Start your own point", "“I think Kavya was about to say something. Kavya, please go on.”", "Tell the person who interrupted that they’re rude"], answer: 2,
      hint: "Help Kavya without attacking anyone.",
      note: "Giving the floor back is respectful and noticed. No need to blame the person who interrupted.", badge: "hand",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: The summary (double) ----------
    {
      type: "learn", door: 6,
      title: "The summary is the last thing the evaluator hears.",
      points: [["Keep it balanced", "Both sides that came up, not just your own view"], ["No new points", "A summary only covers what the group said"], ["30 to 45 seconds", "“To sum up, we agreed on…, we differed on…, and most of us felt…”"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["scroll", "3 summary questions", "Then the live GD"], ["mic", "+200 for the best GD participant", "Not the loudest!"]] }
    },
    GQ(6, "The Summary", {
      double: true,
      prompt: "Topic: AI tools in exams. Which summary is best?",
      options: ["“We discussed many things. Thank you.”", "“To sum up, AI will also take all our jobs in the future.”", "“To sum up, I was right: AI should be banned.”", "“To sum up, most of us felt AI shouldn’t be allowed in tests of basic skills like coding, but some felt it could work in open-book exams if rules are clear.”"], answer: 3,
      hint: "Balanced, only what the group said, and short.",
      note: "It covers both views and the group’s main conclusion. The one about jobs adds a new point, which a summary should never do.", badge: "scroll"
    }),
    GQ(6, "The Summary", Object.assign({}, WEAK, {
      double: true,
      prompt: "Meena summarises the GD. Which line breaks the rules of a summary?",
      code: ["To sum up, we looked at AI in exams from two sides.", "Most of us felt it shouldn’t be allowed in tests of basic skills.", "Some felt it could work in open-book exams with clear rules.", "Also, I think colleges should remove attendance rules."],
      outputOptions: ["It brings in a brand-new topic", "It’s too balanced", "It should be the first line"], outputAnswer: 0, bugLine: 3,
      bugText: "a brand-new topic. A summary only covers what the group already discussed",
      hint: "Did anyone discuss attendance?",
      note: "Lines 1 to 3 are a perfect summary. The last line throws it away by starting a new topic.", badge: "x"
    })),
    GQ(6, "The Summary", {
      double: true,
      prompt: "Nobody has summarised and the evaluator says “One minute left.” What should you do?",
      options: ["Make your strongest new point", "Offer to summarise: “If I may, let me sum up what we discussed…”", "Stay quiet until time is up", "Ask the evaluator who won"], answer: 1,
      hint: "What’s the last thing the evaluator will remember?",
      note: "Offering to summarise in the last minute is one of the smartest moves in a GD. The group usually lets you.", badge: "crown",
      board: true, boardLabel: "after Round 6"
    }),

    {
      type: "wordlist", eyebrow: "Live GD · pick one topic per group", title: "Your turn: a real 5-minute GD",
      note: "Make circles of 5 or 6. One topic per group. 5 minutes on the timer. Use today’s moves.",
      items: [["Topic 1", "Should colleges allow AI tools in exams?"], ["Topic 2", "Are online classes as good as offline classes?"], ["Topic 3", "Should students do internships from the first year?"], ["Topic 4", "Do social media influencers help or harm students?"]]
    },
    { type: "speak", eyebrow: "Live GD · best participant wins +200", prompt: "Who used today’s moves best? Start, build on others, bring someone in, summarise.", note: "The host (or each group) picks one person per group. Teamwork beats talking the most.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The GD Phrase Card", note: "Screenshot this. Practise one phrase a day before your placement drive.", items: PHRASES },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and GD practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
