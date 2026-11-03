// Word Power (EduMoon English Club). For all years.
// Confused pairs, stronger words, phrases that confuse HR, idioms, formal vs casual and placement vocabulary.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const WP = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

// The take-home card: 20 power words, in pairs of plain → stronger.
const POWER = [
  ["very tired → exhausted", "very good → excellent"],
  ["very big → huge", "very important → essential"],
  ["very happy → delighted", "very hard → challenging"],
  ["very quick → rapid", "very clear → obvious"],
  ["helped → supported", "did → completed"],
  ["made → built", "led → organised"],
  ["started → launched", "improved → increased by 30%"],
  ["reply → respond", "talk → discuss"],
  ["work together → collaborate", "take charge → take initiative"],
  ["thing to deliver → deliverable", "acting early → proactive"]
];

window.GAME = {
  id: "word-power",
  title: "Word Power",
  club: "English Club",
  tagline: "The right word makes you sound clear and confident. Learn the words that matter in emails, interviews and life.",
  art: window.STORY_ART,
  guide: {
    years: "All years", time: "35 minutes", level: "Beginner",
    about: "A vocabulary game for real situations. In 6 rounds, teams fix commonly confused words, swap weak words for strong ones, learn which Indian English phrases can confuse people outside India, decode idioms, switch between casual and formal English, and learn the words used in placement interviews and offices. It ends with a 60-second self-introduction using today’s words.",
    outcomes: "20 stronger words, the confused pairs that appear in every placement English test, and a feel for when to use formal and casual English.",
    tone: "Indian English is a real, valid way of speaking; never mock it. Round 3 is about being understood by everyone, including people abroad, not about being “wrong”. Praise students who try a new word, even if they use it a little off.",
    extra: [["Make it stick", "After each reveal, ask one student to make a new sentence with the word. Speaking a word once helps more than reading it ten times."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Powered up",
    rulesEyebrow: "How Word Power works", rulesTitle: "Learn the words. Pick the best one. Sound like a pro.",
    learnText: "The host shares a few words that matter.", crackTitle: "Answer",
    crackText: "Pick the best word or sentence on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Now the whole room has a new word!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "have the most Word Power!", endLine: "Use one new word today. That’s how it sticks."
  },
  offerEyebrow: "EduMoon English Club · Word Power results",
  offerTitle: "Your vocabulary rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Word Master", text: "Your English is sharp and clear. Try writing a cover letter with today’s words." },
    { min: 0.45, icon: "book-a", title: "Power Speaker", text: "Strong! Use one new word from the card every day this week." },
    { min: 0.2, icon: "spell-check", title: "Word Builder", text: "Good start. Learn the confused pairs; they come up in every English test." },
    { min: 0, icon: "book-open", title: "Word Explorer", text: "Everyone starts here. Save the card and read one line a day." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon English Club · Word Power",
      title: "Same idea, different words: “I did a project” or “I built an app that 300 students use.” Which one gets the interview?",
      cards: [["spell-check", "Fix the words that trip everyone up"], ["book-a", "Swap weak words for strong ones"], ["trophy", "Win the title of Word Master"]]
    },
    { type: "rules" },

    // ---------- Round 1: Confused pairs ----------
    {
      type: "learn", door: 1,
      title: "Words that sound alike but mean different things.",
      points: [["affect / effect", "Affect is usually the action. Effect is usually the result"], ["lose / loose", "Lose your keys. Loose is the opposite of tight"], ["their / there / they’re", "Belongs to them · a place · they are"]],
      highlightLast: true
    },
    WP(1, "Confused Pairs", {
      prompt: "“The new timetable will ___ everyone in 2nd year.”",
      options: ["effect", "affect", "afect", "effects"], answer: 1,
      hint: "We need the action word here.",
      note: "Affect. “The timetable will affect everyone” (action). “The effect of the timetable” (result).", badge: "spell-check"
    }),
    WP(1, "Confused Pairs", {
      prompt: "“Don’t ___ your hall ticket before the exam!”",
      options: ["loss", "loose", "lost", "lose"], answer: 3,
      hint: "Not the opposite of tight.",
      note: "Lose. Loose, with two o’s, means not tight: “a loose shirt”.", badge: "key"
    }),
    WP(1, "Confused Pairs", {
      prompt: "Fill all three blanks: “___ going to submit ___ project over ___.”",
      options: ["They’re · their · there", "Their · there · they’re", "There · they’re · their", "They’re · there · their"], answer: 0,
      hint: "They are going… their project… over (a place).",
      note: "They’re (they are) going to submit their (belongs to them) project over there (a place).", badge: "check",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Stronger words ----------
    {
      type: "learn", door: 2,
      title: "“Very” is often a sign you need a stronger word.",
      points: [["very tired → exhausted", "very good → excellent, very big → huge"], ["Action words win resumes", "“Built, launched, organised” beat “did, made, helped”"], ["Specific beats general", "“Helpful” tells more than “nice”"]],
      highlightLast: true
    },
    WP(2, "Stronger Words", {
      prompt: "Which word is the strongest replacement for “very tired” after a 24-hour hackathon?",
      options: ["Exhausted", "Sleepy", "Bored", "Tiring"], answer: 0,
      hint: "Tired, but much more so.",
      note: "Exhausted. One strong word is better than “very” plus a weak one.", badge: "zap"
    }),
    WP(2, "Stronger Words", {
      prompt: "Which resume line sounds strongest?",
      options: ["“Did a website for the college fest.”", "“Was part of a website team.”", "“Helped with some website work.”", "“Built the college fest website, used by 800 students to register.”"], answer: 3,
      hint: "Look for a strong action word and a result.",
      note: "“Built” plus a real number. Recruiters skim resumes in seconds, and strong verbs catch the eye.", badge: "file-user"
    }),
    WP(2, "Stronger Words", {
      prompt: "You’re thanking a speaker by email. Which line is best?",
      options: ["“Your session was nice.”", "“Your session on resumes was really helpful. I’ve already rewritten my project section.”", "“Good session sir.”", "“Nice nice, very nice.”"], answer: 1,
      hint: "Specific and genuine.",
      note: "It says what was helpful and what you did with it. Speakers remember emails like this.", badge: "mail",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Phrases that can confuse ----------
    {
      type: "learn", door: 3,
      title: "Some phrases are normal in India but confuse people elsewhere.",
      points: [["This isn’t about “wrong” English", "Indian English is real English"], ["It’s about being understood", "Your future manager or client may be in another country"], ["When in doubt, be plain and specific", "“Please reply by Friday” works everywhere"]],
      highlightLast: true
    },
    WP(3, "Clear Everywhere", {
      prompt: "Writing to a company in the UK. Which line is clearest?",
      options: ["“Kindly revert back at the earliest.”", "“Do the needful and revert.”", "“Please revert back ASAP.”", "“Could you please reply by Friday?”"], answer: 3,
      hint: "Outside India, “revert” usually means “go back to an older version”.",
      note: "“Reply by Friday” is clear anywhere. In global English, “revert” means returning to a previous state, so “revert back” can confuse.", badge: "globe"
    }),
    WP(3, "Clear Everywhere", {
      prompt: "In an email to a professor abroad, which line is clearest?",
      options: ["“I am having a doubt in this topic.”", "“My doubt is coming.”", "“I have a question about this topic.”", "“Doubt: this topic.”"], answer: 2,
      hint: "Outside India, a “doubt” means you don’t believe something.",
      note: "“I have a question”. Elsewhere, “I have a doubt” sounds like “I don’t believe you”.", badge: "message-circle"
    }),
    WP(3, "Clear Everywhere", {
      prompt: "You want an online meeting with a client in the US to happen earlier. What should you say?",
      options: ["“Can we bring the meeting forward to 3 pm?”", "“Can we prepone the meeting?”", "“Meeting prepone please.”", "“Can we postpone it earlier?”"], answer: 0,
      hint: "“Prepone” is an Indian English word many people abroad don’t know.",
      note: "“Bring it forward” is understood everywhere. “Prepone” is fine with Indian colleagues.", badge: "clock",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Describe your college in 3 strong words, then explain one of them.", note: "20 seconds. No “very”, no “nice”!", points: 100 },

    // ---------- Round 4: Idioms ----------
    {
      type: "learn", door: 4,
      title: "Idioms: the meaning isn’t in the words.",
      points: [["Break the ice", "Start a conversation when people feel awkward"], ["Hit the books", "Start studying seriously"], ["Use them lightly", "One idiom sounds natural. Five sounds forced"]],
      highlightLast: true
    },
    WP(4, "Idioms", {
      prompt: "“The aptitude test was a piece of cake.” What does it mean?",
      options: ["There was cake after the test", "The test was very easy", "The test was in pieces", "The test was too short"], answer: 1,
      hint: "Eating cake is easy.",
      note: "Very easy. Its opposite: “It was a tough nut to crack.”", badge: "thumbs-up"
    }),
    WP(4, "Idioms", {
      prompt: "“Let’s not beat around the bush. Did I get the internship?” What does the speaker want?",
      options: ["To go to the garden", "To wait longer", "A direct answer, without avoiding the point", "To argue"], answer: 2,
      hint: "Walking around a bush, not through it.",
      note: "A direct answer. “Beating around the bush” means avoiding the main point.", badge: "target"
    }),
    WP(4, "Idioms", {
      prompt: "“I’ll be on cloud nine if I clear this placement.” How will the speaker feel?",
      options: ["Extremely happy", "Very tired", "Confused", "Scared of heights"], answer: 0,
      hint: "Up in the clouds, in a good way.",
      note: "Extremely happy. You can also say “over the moon”.", badge: "sparkles",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Formal vs casual ----------
    {
      type: "learn", door: 5,
      title: "Same message, different clothes.",
      points: [["Friends: casual", "“Hey, wanna grab chai?”"], ["Professors, HR, clients: formal", "“Dear Professor Rao, I would like to request…”"], ["Shortcuts can sound rude", "“ASAP” and “pls” look lazy in a formal email"]],
      highlightLast: true
    },
    WP(5, "Formal vs Casual", {
      prompt: "Best way to start an email to your professor?",
      options: ["“Hey sir!”", "“Hi bro,”", "“Respected sir/madam, I am writing to inform that…”", "“Dear Professor Rao,”"], answer: 3,
      hint: "Use their name and title.",
      note: "“Dear Professor Rao,” is polite and personal. “Respected sir/madam” is very common, but using the real name is warmer and shows you know who you’re writing to.", badge: "mail"
    }),
    WP(5, "Formal vs Casual", {
      prompt: "Which line fits a formal email asking for an extension?",
      options: ["“I wanna submit it late.”", "“I would like to request two more days to submit my assignment, as I was unwell this week.”", "“Pls extend deadline asap.”", "“Can’t submit, sorry.”"], answer: 1,
      hint: "Full words, a clear request and a reason.",
      note: "“I would like to request…” with a reason. No wanna, pls or asap.", badge: "pen-tool"
    }),
    WP(5, "Formal vs Casual", {
      prompt: "Your manager asks when the report will be ready. Which reply is most professional?",
      options: ["“I’ll send it by 5 pm today.”", "“ASAP.”", "“Soon, don’t worry.”", "“Whenever it’s done.”"], answer: 0,
      hint: "Which one gives a real time?",
      note: "A specific time is professional and builds trust. “ASAP” and “soon” mean different things to different people.", badge: "clock",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Placement vocabulary (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: words you’ll hear at work. Double points.",
      points: [["Interviewers use them", "Knowing them helps you understand the question"], ["You can use them too", "Correctly, in the right place"], ["Double points", "Anyone can still win"]],
      highlightLast: true
    },
    WP(6, "Placement Vocabulary", {
      double: true,
      prompt: "The interviewer says: “We want someone proactive.” What do they mean?",
      options: ["Someone who acts early and solves problems before being told", "Someone who is always online", "Someone who reacts quickly to orders", "Someone with a lot of certificates"], answer: 0,
      hint: "Pro = before.",
      note: "Proactive: acting early, not waiting to be told. Back it up with an example of something you did on your own.", badge: "rocket"
    }),
    WP(6, "Placement Vocabulary", {
      double: true,
      prompt: "Your project lead says: “The first deliverable is due Monday.” What is a deliverable?",
      options: ["A parcel", "A delivery boy", "A finished piece of work you hand over, like a report or a feature", "A meeting"], answer: 2,
      hint: "Something you deliver to the team.",
      note: "A deliverable is a finished piece of work: a report, a design, a working feature.", badge: "briefcase"
    }),
    WP(6, "Placement Vocabulary", {
      double: true,
      prompt: "Which sentence uses “collaborate” correctly?",
      options: ["“I collaborated the project alone.”", "“The project collaborated me.”", "“I collaborate my assignments.”", "“I collaborated with two classmates to build a library app.”"], answer: 3,
      hint: "You collaborate WITH people.",
      note: "Collaborate means work together with others, so you always collaborate with someone.", badge: "users",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Introduce yourself in 60 seconds using at least 3 words from today.", note: "The room counts the power words. Clear and confident beats fancy.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "20 Power Words", note: "Screenshot this. Swap one weak word for a strong one in every email you write.", items: POWER },
    {
      type: "end",
      joinTitle: "Join the EduMoon English Club",
      joinText: "Speaking games, word games and GD practice every week. No fear of mistakes.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
