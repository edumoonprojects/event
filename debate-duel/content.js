// Debate Duel (EduMoon English Club). For all years.
// Learn to build an argument, attack ideas not people, spot fallacies and close strong. Then live 1-vs-1 debates.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const DQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Tap the weak line" questions use the bug door with friendlier labels.
const WEAKLINE = { kind: "bug", time: 60, step1: "Why is it weak?", step2: "Tap the weak line", say1: "First pick why it’s weak.", say2: "Now tap the weak line.", partO: "the reason", partL: "the line", lineLabel: "line", bugLabel: "The weak line is" };

// The take-home card: debate phrases for every moment.
const DPHRASES = [
  ["To open", "“Today I’ll show you three reasons why…”"],
  ["To give a reason", "“The first reason is… because…”"],
  ["To give an example", "“For example, in our own college…”"],
  ["To rebut", "“My opponent says X. But that ignores Y.”"],
  ["To concede, then counter", "“That’s a fair point, and yet…”"],
  ["To ask for proof", "“Where does that number come from?”"],
  ["To summarise", "“So we’ve seen three things: one…, two…, three…”"],
  ["To close", "“For these reasons, I urge you to agree that…”"]
];

window.GAME = {
  id: "debate-duel",
  title: "Debate Duel",
  club: "English Club",
  tagline: "Win arguments with reasons, not volume. Learn the moves, then face an opponent live.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "40 minutes", level: "Medium",
    about: "Debating teaches you to think clearly and speak with confidence. In 6 rounds, teams learn to build an argument (claim, reason, example), tell strong arguments from weak ones, rebut politely, spot common fallacies, use evidence, and close strongly. The game ends with live 1-vs-1 debates on student topics, with the room voting for the best debater.",
    outcomes: "A simple structure for any argument, 4 fallacies they can name and avoid, phrases for rebutting without being rude, and their first live debate in a safe room.",
    tone: "Debate is about ideas, never about people. Stop any personal comments immediately and kindly. Praise good structure over fluent English: a clear reason in simple words beats a fancy speech.",
    extra: [["Running the live debates", "Pick pairs of volunteers. Give each pair a topic from the screen, one for and one against. 1 minute each to speak, then 30 seconds each to rebut. The room votes with a show of hands. Run as many pairs as time allows; the host picks the best debater for the +200."],
      ["Debate topics", "Attendance should not be compulsory in college · Phones should be allowed in classrooms · Online classes are better than offline · Every student should learn to code · Exams should be open book · College should start at 10 am."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Won",
    rulesEyebrow: "How Debate Duel works", rulesTitle: "Learn the move. Pick the strongest line. Then debate live.",
    learnText: "The host shows one debate move.", crackTitle: "Answer",
    crackText: "Pick the strongest answer on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>. Live debate: <b>+200</b>!",
    nobody: "Nobody got this one. Even TV debaters fall for it!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s Debate Duel champions!", endLine: "Reasons beat volume, every time."
  },
  offerEyebrow: "EduMoon English Club · Debate results",
  offerTitle: "Your debater rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Debate Champion", text: "You argue with reasons and respect. Try a college debate competition." },
    { min: 0.45, icon: "swords", title: "Sharp Debater", text: "Strong! Practise one 1-minute argument a day on any topic." },
    { min: 0.2, icon: "message-circle", title: "Rising Voice", text: "Good start. Use claim, reason, example the next time you disagree with someone." },
    { min: 0, icon: "ear", title: "Thoughtful Listener", text: "Great debaters listen first. Save the phrase card and try one phrase this week." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Debate Duel",
      title: "Two podiums. One topic. The loudest voice doesn’t win; the best reasons do. Is your team ready to duel?",
      cards: [["swords", "6 rounds of debate moves"], ["search", "Spot weak arguments and fallacies"], ["mic", "Then live 1-vs-1 debates"]]
    },
    { type: "rules" },

    // ---------- Round 1: Claim, reason, example ----------
    {
      type: "learn", door: 1,
      title: "Every strong argument has three parts.",
      points: [["Claim", "What you believe: “College should start at 10 am.”"], ["Reason", "Why: “Students who sleep enough learn better.”"], ["Example", "Proof: “In our hostel, most students sleep after midnight and doze in 9 am classes.”"]],
      highlightLast: true,
      side: { label: "Example", items: [["target", "Claim", "Every college should have a coding club"], ["lightbulb", "Reason", "Students learn faster together"], ["badge-check", "Example", "Our club built 5 apps for the college last year"]] }
    },
    DQ(1, "Claim, Reason, Example", {
      prompt: "Topic: “Phones should be allowed in classrooms.” Which argument is built best?",
      options: ["“Phones are good. Everyone uses them. So yes.”", "“Phones help learning because students can look things up instantly. For example, in our DBMS class, we checked a query live and the whole class understood it.”", "“I love my phone.”", "“Phones should be allowed because they should be allowed.”"], answer: 1,
      hint: "Find the one with a claim, a reason AND an example.",
      note: "Claim, reason, example. The others are opinions, feelings or going in a circle.", badge: "badge-check"
    }),
    DQ(1, "Claim, Reason, Example", {
      prompt: "“Online classes save students hours of travel every week.” What part of an argument is this?",
      options: ["A claim", "An example", "A reason", "A conclusion"], answer: 2,
      hint: "It explains WHY online classes might be better.",
      note: "A reason. The claim would be “Online classes are better”; an example would be a real student’s story or a number.", badge: "lightbulb"
    }),
    DQ(1, "Claim, Reason, Example", {
      prompt: "“Every student should learn to code, because coding teaches problem solving.” What’s missing?",
      options: ["Nothing, it’s perfect", "A claim", "A louder voice", "An example or proof"], answer: 3,
      hint: "Claim: yes. Reason: yes. And…?",
      note: "An example: “My friend in Mechanical used Python to automate her lab readings.” Examples make arguments stick.", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Strong vs weak ----------
    {
      type: "learn", door: 2,
      title: "Not all reasons are equal.",
      points: [["Weak: “everyone”, “always”, “never”", "One counter-example breaks them"], ["Weak: feelings as facts", "“I feel it’s bad” is not a reason"], ["Strong: specific and checkable", "Numbers, real examples, clear cause and effect"]],
      highlightLast: true,
      side: { label: "Weak or strong?", items: [["x", "Weak", "“Everyone hates Mondays.”"], ["x", "Weak", "“I feel uniforms are bad.”"], ["check", "Strong", "“Uniforms add a cost for every family each year.”"]] }
    },
    DQ(2, "Strong vs Weak", {
      prompt: "Topic: “Exams should be open book.” Which reason is strongest?",
      options: ["“Everyone hates exams.”", "“My friends agree with me.”", "“Closed book exams are always unfair.”", "“Open book exams test understanding and application, which is what jobs need, instead of memory.”"], answer: 3,
      hint: "Which one could the other side not easily break?",
      note: "It gives a clear reason tied to a real goal. “Everyone” and “always” are easy to break with one example.", badge: "target"
    }),
    DQ(2, "Strong vs Weak", Object.assign({}, WEAKLINE, {
      prompt: "Sneha argues that attendance shouldn’t be compulsory. Which line is weakest?",
      code: ["College students are adults and can manage their own time.", "Some lectures are recorded, so students can learn at their own pace.", "Nobody ever learns anything in lectures.", "Students could use that time for internships and projects."],
      outputOptions: ["It’s an extreme claim that one example can break", "It’s too short", "It should come first"], outputAnswer: 0, bugLine: 2,
      bugText: "“Nobody ever” is easy to disprove: almost everyone has learned something in a lecture",
      hint: "Which line uses an extreme word?",
      note: "One extreme line can sink a good argument. “Many students learn better on their own” is stronger.", badge: "x"
    })),
    DQ(2, "Strong vs Weak", {
      prompt: "Ravi says: “Online classes are bad because I don’t like them.” What’s the problem?",
      options: ["It’s too long", "He used a personal feeling as if it were a reason", "He should have said it louder", "There’s no problem"], answer: 1,
      hint: "Does it convince someone who does like online classes?",
      note: "Feelings are valid, but they don’t convince others. Ask “why don’t I like them?” and the answer is the real reason.", badge: "heart",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Rebuttals ----------
    {
      type: "learn", door: 3,
      title: "A rebuttal attacks the idea, not the person.",
      points: [["Repeat their point fairly", "“My opponent says phones distract students.”"], ["Show what it misses", "“But phones can be on silent and used only for class work.”"], ["Concede small, win big", "“That’s true sometimes, and yet…” sounds confident and fair"]],
      highlightLast: true,
      side: { label: "A rebuttal in 3 steps", items: [["ear", "1. Repeat", "“My opponent says…”"], ["search", "2. Show the gap", "“But that ignores…”"], ["swords", "3. Your point", "“So in fact…”"]] }
    },
    DQ(3, "Rebuttals", {
      prompt: "Your opponent says: “Phones distract students.” Best rebuttal?",
      options: ["“That’s a fair concern. But a simple rule, phones on silent and only for class work, keeps the benefits without the distraction.”", "“You’re just old-fashioned.”", "“That’s wrong.”", "“You also use your phone in class!”"], answer: 0,
      hint: "Which one deals with the idea?",
      note: "Concede the fair part, then offer a solution. The others attack the person or just say “wrong” with no reason.", badge: "swords"
    }),
    DQ(3, "Rebuttals", {
      prompt: "Which of these is attacking the person, not the argument?",
      options: ["“Your number is from 2010. Is there a newer one?”", "“That works in big cities, but what about rural colleges?”", "“You failed last semester, so your opinion doesn’t count.”", "“Your example is one student. Is it true for most?”"], answer: 2,
      hint: "Which one is about who they are, not what they said?",
      note: "Bringing up someone’s marks has nothing to do with whether their argument is right. That’s called an ad hominem attack.", badge: "shield"
    }),
    DQ(3, "Rebuttals", {
      prompt: "Your opponent makes a point you genuinely agree with. What’s the smartest move?",
      options: ["Agree, and show why your side still wins overall", "Pretend you didn’t hear it", "Argue against it anyway", "Change the topic"], answer: 0,
      hint: "Admitting a fair point makes you look stronger, not weaker.",
      note: "“I agree with that, and it actually supports my point because…” Judges and audiences trust debaters who are fair.", badge: "thumbs-up",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Give one strong reason for: “College should start at 10 am.”", note: "Claim, reason, example, in 30 seconds.", points: 100 },

    // ---------- Round 4: Fallacies ----------
    {
      type: "learn", door: 4,
      title: "Fallacies are arguments that sound right but aren’t.",
      points: [["Bandwagon", "“Everyone does it, so it must be right”"], ["False choice", "“Either we ban phones or students will fail.” As if there are only two options"], ["Slippery slope", "“If we allow this, next thing you know, total chaos”"]],
      highlightLast: true,
      side: { label: "Also watch for", items: [["user", "Personal attack", "Attacking the person, not the idea"], ["route", "Going in a circle", "“It’s true because it’s true”"], ["search", "Cherry picking", "One example, ignoring the rest"]] }
    },
    DQ(4, "Spot the Fallacy", {
      prompt: "“Every college in the city has made attendance compulsory, so it must be the right thing.” Which fallacy is this?",
      options: ["Slippery slope", "Bandwagon", "False choice", "No fallacy"], answer: 1,
      hint: "It’s right because… everyone does it?",
      note: "Bandwagon. Something being popular doesn’t make it right. What matters is the reason behind it.", badge: "users"
    }),
    DQ(4, "Spot the Fallacy", {
      prompt: "“If we let students skip one class, soon they’ll skip all classes and the college will shut down.” Which fallacy is this?",
      options: ["Bandwagon", "Personal attack", "Slippery slope", "False choice"], answer: 2,
      hint: "One small step leads to disaster… without proof.",
      note: "Slippery slope. It jumps to an extreme ending without showing why each step would happen.", badge: "route"
    }),
    DQ(4, "Spot the Fallacy", {
      prompt: "“Either we ban phones completely, or students will never study again.” Which fallacy is this?",
      options: ["False choice", "Bandwagon", "Slippery slope", "No fallacy"], answer: 0,
      hint: "Are there really only two options?",
      note: "False choice. There are many options in between: silent mode, phone-free hours, a class-use rule.", badge: "search",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Facts and evidence ----------
    {
      type: "learn", door: 5,
      title: "Evidence wins debates. Made-up evidence loses them.",
      points: [["Fact or opinion?", "A fact can be checked. An opinion is what someone thinks"], ["Good evidence is specific", "Who said it, when, and how they know"], ["Never invent numbers", "“90% of students…” Says who? One question and you’re caught"]],
      highlightLast: true,
      side: { label: "Evidence checklist", items: [["user", "Who said it?", "A named source"], ["clock", "When?", "Recent is better"], ["chart-column", "How do they know?", "A survey, a study, a record"]] }
    },
    DQ(5, "Facts and Evidence", {
      prompt: "Which of these is a fact, not an opinion?",
      options: ["“Online classes are boring.”", "“Hostel food is the worst.”", "“Our college library opens at 8 am.”", "“Coding is the best skill to learn.”"], answer: 2,
      hint: "Which one could you check?",
      note: "You can check the library timing. The others are opinions, which is fine, but they need reasons to support them.", badge: "book-open"
    }),
    DQ(5, "Facts and Evidence", {
      prompt: "Which piece of evidence is strongest?",
      options: ["“Everyone knows this.”", "“My uncle said so.”", "“I read it somewhere.”", "“In our class survey last week, 41 of 60 students said they’d prefer a 10 am start.”"], answer: 3,
      hint: "Which one tells you who, when and how many?",
      note: "Specific, recent and checkable. “I read it somewhere” falls apart the moment someone asks “where?”.", badge: "chart-column"
    }),
    DQ(5, "Facts and Evidence", {
      prompt: "Your opponent says: “95% of employers don’t care about marks.” Best response?",
      options: ["“Where does that number come from?”", "“That’s a lie!”", "Accept it and give up", "“Well, 99% of employers do care!”"], answer: 0,
      hint: "Ask, don’t accuse.",
      note: "Asking for the source is polite and powerful. Answering with your own made-up number makes you just as wrong.", badge: "search",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Closing (double) ----------
    {
      type: "learn", door: 6,
      title: "The closing is what the audience remembers.",
      points: [["Summarise in threes", "“We’ve seen three things: one…, two…, three…”"], ["No new points", "The closing is not the time for a surprise argument"], ["End with a clear ask", "“So I urge you to agree that…”"]],
      highlightLast: true,
      side: { label: "The closing formula", items: [["list-checks", "Summarise", "Your three points"], ["target", "Ask", "What should they agree with?"], ["heart", "Thank them", "Then stop"]] }
    },
    DQ(6, "Closing Strong", {
      double: true,
      prompt: "Which is the strongest closing line?",
      options: ["“So yeah, that’s it.”", "“Sorry, I couldn’t say much.”", "“Students learn better when they sleep enough, they use mornings for self-study, and they attend more when classes start later. So I urge you: start college at 10 am.”", "“Thank you, any questions?”"], answer: 2,
      hint: "Summary + a clear ask.",
      note: "It sums up the three reasons and ends with a clear ask. Never end with “that’s it” or an apology.", badge: "flame"
    }),
    DQ(6, "Closing Strong", {
      double: true,
      prompt: "You have 30 seconds left and you just thought of a brand new argument. What should you do?",
      options: ["Rush through the new point and skip your summary", "Stop talking and sit down", "Use the time to summarise your main points clearly instead", "Ask the judge for 2 more minutes"], answer: 2,
      hint: "What does the audience need to remember?",
      note: "A clear summary beats a rushed new point. Save new ideas for your next debate.", badge: "timer"
    }),
    DQ(6, "Closing Strong", {
      double: true,
      prompt: "Your opponent becomes angry and starts shouting. What should you do?",
      options: ["Shout back louder", "Walk off the stage", "Mock them in front of the audience", "Stay calm, lower your voice slightly and keep making your points"], answer: 3,
      hint: "Who does the audience trust more: the calm one or the loud one?",
      note: "Calm wins. When the other side gets loud, a steady voice makes you look confident and in control.", badge: "heart",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Live debates, results, take-home ----------
    { type: "speak", eyebrow: "Live debate · best debater wins +200", prompt: "1-vs-1 debates. 1 minute each, then 30 seconds to rebut. The room votes.", note: "Topics: Attendance should not be compulsory · Phones in classrooms · Online vs offline classes · Every student should code · Open book exams.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Debate Phrase Card", note: "Screenshot this. Use one phrase in your next class discussion or GD.", items: DPHRASES },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, debates and GD practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
