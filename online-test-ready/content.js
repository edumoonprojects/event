// Online Test Ready (EduMoon Skills Club). For all years, especially 3rd and final year.
// How to survive online placement and internship tests: setup, proctoring rules, time management, negative marking, coding rounds and what to do when things go wrong.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const OT = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const OTN = (round, name, extra) => OT(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: the online test checklist.
const TESTCARD = [
  ["The day before", "Run the system check, update the browser, charge everything, read the rules email."],
  ["One hour before", "Quiet room, good light on your face, ID card ready, phone away, water bottle."],
  ["Proctoring", "Camera on, face visible, no tab switching, no other person in the room."],
  ["Time", "Know the section timers. Skip a hard question, mark it, come back."],
  ["Negative marking", "If wrong answers lose marks, guess only when you can rule out options."],
  ["Coding round", "Read constraints, test the sample, then think about edge cases like 0 and empty input."],
  ["If something breaks", "Stay calm, take a screenshot, note the time, email the support contact."],
  ["Never cheat", "Tests record your screen, camera and tabs. One flag can end your chances."]
];

window.GAME = {
  id: "online-test-ready",
  title: "Online Test Ready",
  club: "Skills Club",
  tagline: "Most placement first rounds are online now. Don’t lose marks to the setup.",
  art: window.STORY_ART,
  guide: {
    years: "All years (most useful for 3rd and final years)", time: "35 minutes", level: "Beginner",
    about: "Nikhil cleared his aptitude prep, but lost his first online placement test because his laptop died and his browser blocked the camera. In 6 rounds, teams learn how to set up for an online test, follow proctoring rules, manage time, handle negative marking, approach a coding round and react calmly when something breaks. All test platforms and companies are made up.",
    outcomes: "A checklist for any online test, the proctoring mistakes that get students flagged, smart time and guessing strategy, and what to do when tech fails during a test.",
    tone: "Students fear these tests. Keep it calm and practical: most problems are avoidable with 15 minutes of preparation. Share a real story if you have one about a test that went wrong.",
    extra: [["Make it practical", "If there is time, open any free online test platform’s system check on a laptop and show what it checks."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Ready",
    rulesEyebrow: "How Online Test Ready works", rulesTitle: "Learn the rule. Make the right move. Clear the test.",
    learnText: "The host shares one rule for online tests.", crackTitle: "Decide",
    crackText: "Pick Nikhil’s best move on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many students lose real tests to this!", cracked: "got it",
    next: "Next round →", finale: "Next →", winner: "are fully test ready!", endLine: "Nikhil cleared his next online test."
  },
  offerEyebrow: "EduMoon Skills Club · Test readiness",
  offerTitle: "Your test readiness",
  offers: [
    { min: 0.7, icon: "badge-check", title: "Test Ready", text: "You will not lose marks to setup or rules. Focus on practice now." },
    { min: 0.45, icon: "list-checks", title: "Almost Ready", text: "Strong! Save the checklist below and use it before every test." },
    { min: 0.2, icon: "timer", title: "Getting Ready", text: "Good start. Do one full mock test online this week." },
    { min: 0, icon: "book-open", title: "Test Learner", text: "Everyone starts here. Read the checklist twice before your first test." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Online test tomorrow",
      title: "Nikhil prepared for weeks, then lost his online test because his laptop died and the camera would not start. Can your team make sure it never happens again?",
      cards: [["smartphone", "Setup, rules, time and coding rounds"], ["shield", "What gets students flagged"], ["trophy", "Your score decides your test readiness"]]
    },
    { type: "rules" },

    // ---------- Round 1: Before the test ----------
    {
      type: "learn", door: 1,
      title: "Most test-day disasters happen before the first question.",
      points: [["Run the system check a day early", "Camera, mic, browser and internet"], ["Charge everything", "Laptop plugged in, phone hotspot as a backup"], ["Read the rules email", "Start time, ID needed, allowed items"]],
      highlightLast: true,
      side: { label: "Set up your space", items: [["eye", "Light on your face", "Not a window behind you"], ["users", "Alone in the room", "Tell your family the time"], ["file-user", "ID card ready", "Some tests check it on camera"]] }
    },
    OT(1, "Before the Test", {
      prompt: "The test is tomorrow at 10 AM. When should Nikhil run the platform’s system check?",
      options: ["At 9:59 AM tomorrow, just before", "Never, these checks always work fine", "After the test has already started", "Today, then again 30 minutes before"], answer: 3,
      hint: "If something fails, when can he still fix it?",
      note: "A day early leaves time to fix camera, browser or permission problems. Check again before you start.", badge: "list-checks"
    }),
    OT(1, "Before the Test", {
      prompt: "Nikhil’s Wi-Fi often drops in the evening. What is the smartest backup?",
      options: ["Hope it works this time", "Take the test from a café", "Restart the router during the test", "Keep a phone hotspot ready"], answer: 3,
      hint: "Plan B before you need it.",
      note: "A charged phone with enough data as a hotspot can save the test if Wi-Fi fails.", badge: "smartphone"
    }),
    OT(1, "Before the Test", {
      prompt: "Where should Nikhil sit for a camera-proctored test?",
      options: ["In a busy hostel common room", "Outdoors in the bright sun", "In a dark room with the light off", "A quiet room, light on his face"], answer: 3,
      hint: "The camera needs to see him clearly, and nobody else.",
      note: "A quiet room with light in front of you. Backlight from a window makes your face dark.", badge: "eye",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Proctoring rules ----------
    {
      type: "learn", door: 2,
      title: "Proctoring software watches more than you think.",
      points: [["Camera and face", "Your face must stay visible. Looking away often can be flagged"], ["Screen and tabs", "Switching tabs or windows is usually recorded"], ["Room and sound", "Other voices or people in the frame can be flagged"]],
      highlightLast: true,
      side: { label: "Common flags", items: [["x", "Tab switching", "Even to check the time"], ["x", "Phone on the desk", "Keep it away"], ["x", "Someone walks in", "Tell family beforehand"]] }
    },
    OT(2, "Proctoring", {
      prompt: "During the test, Nikhil wants to check the time on another tab. What should he do?",
      options: ["Use the timer shown on the test page", "Quickly switch tabs, it is only a second", "Ask his roommate aloud", "Pick up his phone to check"], answer: 0,
      hint: "Any tab switch may be recorded.",
      note: "Tests show a timer. Switching tabs, even innocently, can be flagged as suspicious.", badge: "timer"
    }),
    OT(2, "Proctoring", {
      prompt: "His mother walks in to give him tea during the test. What would have prevented the risk?",
      options: ["Locking the camera before starting", "Turning off all the lights in the room", "Telling family the test time beforehand", "Taking the test at midnight instead"], answer: 2,
      hint: "Prevention, not panic.",
      note: "Tell your family the time and put a note on the door. Another person in the frame can be flagged.", badge: "users"
    }),
    OT(2, "Proctoring", {
      prompt: "Which of these is most likely to be flagged by the proctor?",
      options: ["Drinking water from a clear bottle", "Reading the question slowly", "Looking at a phone under the desk", "Using rough paper if allowed"], answer: 2,
      hint: "Which one looks like cheating?",
      note: "Phones are the most common reason for flags. Keep yours in another room unless the rules say otherwise.", badge: "shield",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Time management ----------
    {
      type: "learn", door: 3,
      title: "Many tests have a timer for each section. Plan your minutes.",
      points: [["Know the structure", "How many sections, questions and minutes in each"], ["Skip and return", "Do not spend 5 minutes on one question"], ["Easy marks first", "Every question is usually worth the same"]],
      highlightLast: true,
      side: { label: "Quick maths", items: [["clock", "20 questions, 30 minutes", "About 1.5 minutes each"], ["route", "Stuck for 2 minutes?", "Mark it and move on"], ["check", "Last 3 minutes", "Fill marked ones if guessing is safe"]] }
    },
    OTN(3, "Time", {
      prompt: "A section has 20 questions and 30 minutes. How many seconds can Nikhil spend on each question on average?",
      answer: 90,
      hint: "30 minutes is 1,800 seconds.",
      note: "90 seconds each. If a question takes much longer, skip it and come back.", badge: "timer"
    }),
    OT(3, "Time", {
      prompt: "Nikhil is stuck on question 4 for 3 minutes. Best move?",
      options: ["Mark it, move on, return later", "Keep trying until he solves it", "Close the test and restart", "Leave the whole section"], answer: 0,
      hint: "The other questions are worth the same marks.",
      note: "One hard question should not steal time from five easy ones. Mark it and return if time allows.", badge: "route"
    }),
    OT(3, "Time", {
      prompt: "The section timer ends and the test jumps to the next section. What does that usually mean?",
      options: ["He can go back anytime", "That section is now closed", "The test has crashed", "He gets extra time later"], answer: 1,
      hint: "Read the rules about sections.",
      note: "Many tests lock a section when its timer ends. Know this before you start, and pace each section.", badge: "lock",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Tell the room your 3-step setup routine for an online test.", note: "Before, during, if something breaks. 20 seconds.", points: 100 },

    // ---------- Round 4: Negative marking ----------
    {
      type: "learn", door: 4,
      title: "Negative marking changes how you guess.",
      points: [["No negative marking", "Never leave a question blank"], ["With negative marking", "A wrong answer loses marks"], ["Smart guessing", "If you can rule out 2 options, guessing is often worth it"]],
      highlightLast: true,
      side: { label: "Example", items: [["check", "Right answer", "+1"], ["x", "Wrong answer", "−0.25"], ["search", "Blank", "0"]] }
    },
    OTN(4, "Negative Marking", {
      prompt: "+1 for right, −0.25 for wrong. Nikhil gets 16 right and 8 wrong. What is his score?",
      answer: 14,
      hint: "16 − (8 × 0.25).",
      note: "16 − 2 = 14. Eight wrong guesses cost him 2 full marks.", badge: "chart-column"
    }),
    OT(4, "Negative Marking", {
      prompt: "There is NO negative marking. One minute is left and 3 questions are blank. What should he do?",
      options: ["Leave them blank to be safe", "Guess all three", "Answer only one of them", "Ask the proctor for the answers"], answer: 1,
      hint: "What does a wrong answer cost here?",
      note: "With no negative marking, a guess can only help. Never leave blanks in that case.", badge: "zap"
    }),
    OT(4, "Negative Marking", {
      prompt: "With negative marking, when is guessing usually worth it?",
      options: ["Always, on every question", "When two options are ruled out", "Never, on any question", "Only on the first question"], answer: 1,
      hint: "Fewer options left means a better chance.",
      note: "With 2 options ruled out, the chance of a right guess is 1 in 2, which usually beats the small penalty.", badge: "target",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Coding round ----------
    {
      type: "learn", door: 5,
      title: "In coding rounds, hidden test cases decide your score.",
      points: [["Read the constraints", "How big can n be? Can it be 0 or negative?"], ["Pass the sample first", "Then think about edge cases"], ["Partial marks exist", "Passing some test cases is better than none"]],
      highlightLast: true,
      side: { label: "Edge cases to test", items: [["search", "Smallest input", "0, 1 or an empty list"], ["search", "Largest input", "Will it be fast enough?"], ["search", "Odd input", "Negative numbers, repeated values"]] }
    },
    OT(5, "Coding Round", {
      prompt: "Nikhil’s code passes the sample but fails hidden tests. What is the most likely reason?",
      options: ["The test platform is simply broken", "He typed his code too slowly", "He missed edge cases like 0", "His camera was switched off during it"], answer: 2,
      hint: "Hidden tests check unusual inputs.",
      note: "Samples are easy cases. Hidden tests check limits and special cases. Always test 0, 1, empty and very large inputs.", badge: "search"
    }),
    OT(5, "Coding Round", {
      prompt: "20 minutes left, and his code passes 6 of 10 test cases. Best move?",
      options: ["Delete it and start over", "Leave without submitting", "Copy code from the internet", "Submit, then improve it"], answer: 3,
      hint: "Partial marks count.",
      note: "Submit what works first. Then improve it. Many platforms keep your best submission.", badge: "check"
    }),
    OT(5, "Coding Round", {
      prompt: "The problem says n can be up to 1,000,000. His solution checks every pair. What is the risk?",
      options: ["It may be too slow and time out", "None, computers are fast", "It will use too little memory", "The output will be in the wrong language"], answer: 0,
      hint: "How many pairs are there for a million items?",
      note: "Checking every pair of a million items is far too many steps. Constraints tell you how fast your solution must be.", badge: "timer",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: When things go wrong (double) ----------
    {
      type: "learn", door: 6,
      title: "When something breaks, stay calm and keep proof.",
      points: [["Take a screenshot", "Of the error, with the time visible if you can"], ["Email support quickly", "Your name, roll number, test ID, time and what happened"], ["Never try to cheat the system", "Flags are hard to undo"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["shield", "Problems and honesty", "Real situations"], ["mic", "Then the final challenge", "Your test-day plan"]] }
    },
    OT(6, "When Things Go Wrong", {
      double: true,
      prompt: "Nikhil’s internet drops for 5 minutes during the test. What should he do?",
      options: ["Panic and close the laptop", "Give up on this company completely", "Use hotspot, screenshot, email support", "Post angrily about it on social media"], answer: 2,
      hint: "Fix, prove, report.",
      note: "Reconnect with the backup, keep proof, and email the support contact with details. Many companies allow a retest when there is proof.", badge: "smartphone"
    }),
    OT(6, "When Things Go Wrong", {
      double: true,
      prompt: "A senior offers to “sit next to you and help” during the online test. What should Nikhil do?",
      options: ["Say no; it is cheating", "Accept, because nobody will ever know", "Accept, but only for the coding part", "Ask him to whisper answers quietly"], answer: 0,
      hint: "Cameras, microphones and screen recording.",
      note: "It is cheating, and proctoring often catches it. If you get the job, you must still do the work yourself.", badge: "shield"
    }),
    OT(6, "When Things Go Wrong", {
      double: true,
      prompt: "Which support email is best after a technical problem?",
      options: ["“Your test is not working at all. Please do something now.”", "“Roll no, test ID, 10:42 AM drop, screenshot attached.”", "“Please just give me the job anyway, I studied very hard.”", "“Your platform is the worst one I have ever used.”"], answer: 1,
      hint: "Which one can the support team act on?",
      note: "Specific details and proof let the team verify and help you. Calm and clear beats angry.", badge: "mail",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best plan wins +200", prompt: "In 30 seconds, give your full plan for an online test: day before, one hour before, during, if something breaks.", note: "Four parts. The host picks the most complete plan.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Online Test Checklist", note: "Screenshot this. Read it the night before every online test.", items: TESTCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Mock interviews, resumes, internships and career games every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
