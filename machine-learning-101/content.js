// Machine Learning 101 (EduMoon AI Lab). For all years. No maths needed.
// The hostel mess wastes food every night. Teams build a model to predict how many plates will be eaten.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const ML = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const MN = (round, name, extra) => ML(round, name, Object.assign({ kind: "number", time: 50 }, extra));

// The take-home card: ML words in one line each.
const MLWORDS = [
  ["Features", "The inputs the model looks at: day, menu, exam week."],
  ["Label", "The answer you want to predict: plates eaten."],
  ["Supervised learning", "Learning from examples that have the answers."],
  ["Unsupervised learning", "Finding groups or patterns when there are no answers."],
  ["Classification vs regression", "Predicting a category (spam or not) vs a number (410 plates)."],
  ["Training and test data", "Learn on one part, check on a part the model has never seen."],
  ["Overfitting", "Memorising the training data instead of learning the pattern."],
  ["Bias", "A model repeats the unfairness or gaps in its data. Check who’s missing."]
];

window.GAME = {
  id: "machine-learning-101",
  title: "Machine Learning 101",
  club: "AI Lab",
  tagline: "The hostel mess throws away food every night. Can your team build a model that predicts how much to cook?",
  art: window.STORY_ART,
  guide: {
    years: "All years (no maths or coding needed)", time: "40 minutes", level: "Medium",
    about: "Machine learning explained through one story: the hostel mess wastes food every night, and the warden wants to predict how many plates will be eaten. In 6 rounds, teams learn data, features and labels, supervised and unsupervised learning, training and test data, overfitting, why accuracy can mislead, and how bias gets into models. Every idea is shown with the mess example, so no maths is needed.",
    outcomes: "The core ML vocabulary used in interviews and AI courses, the ability to describe any ML problem as features and a label, and a healthy habit of asking “what data was this trained on?”",
    tone: "Many students think ML is only for maths toppers. Keep repeating that the ideas are common sense first: learning from past examples, then checking on new ones. Praise good reasoning even when the answer is wrong.",
    extra: [["Make it local", "After Round 1, ask the room what else could predict mess plates in their own hostel: cricket match nights, festivals, rain. Students love adding features."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Learned",
    rulesEyebrow: "How Machine Learning 101 works", rulesTitle: "Learn the idea. Train the model. Stop the food waste.",
    learnText: "The host explains one machine learning idea.", crackTitle: "Answer",
    crackText: "Pick or type your answer on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Real data scientists make this mistake too!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s top data scientists!", endLine: "The mess now cooks just enough. Zero waste!"
  },
  offerEyebrow: "EduMoon AI Lab · ML results",
  offerTitle: "Your data scientist rank",
  offers: [
    { min: 0.7, icon: "crown", title: "ML Engineer", text: "You think like a data scientist. Try a beginner ML course or a small project next." },
    { min: 0.45, icon: "chart-column", title: "Data Scientist", text: "Strong! Describe one everyday problem as features and a label this week." },
    { min: 0.2, icon: "search", title: "Data Explorer", text: "Good start. Revise the word card; these words come up in every AI interview." },
    { min: 0, icon: "book-open", title: "ML Beginner", text: "Everyone starts here. Today you learned how machines learn." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · Machine Learning 101",
      title: "Every night, the hostel mess cooks for 500 and throws away food for 100. The warden asks your team: can a machine learn to predict it?",
      cards: [["chart-column", "6 rounds of real ML ideas"], ["lightbulb", "No maths, just the hostel mess"], ["trophy", "Win the title of ML Engineer"]]
    },
    { type: "rules" },

    // ---------- Round 1: Data, features and labels ----------
    {
      type: "learn", door: 1,
      title: "Machine learning starts with examples from the past.",
      points: [["Data", "Records of past dinners, one row per night"], ["Features", "The inputs: day, menu, exam week, weather"], ["Label", "The answer you want to predict: how many plates were eaten"]],
      highlightLast: true,
      side: { label: "One row of data", items: [["clock", "Day: Friday", "Feature"], ["flame", "Menu: biryani · Exam week: no", "Features"], ["target", "Plates eaten: 410", "Label"]] }
    },
    ML(1, "Features and Labels", {
      prompt: "In the mess model, what is the label?",
      options: ["The day of the week", "The number of plates eaten", "The menu for that day", "The weather that evening"], answer: 1,
      hint: "What does the warden want to predict?",
      note: "Plates eaten is the label: the answer. Day, menu and weather are features: the clues.", badge: "target"
    }),
    ML(1, "Features and Labels", {
      prompt: "Which of these would be the most useful feature to add?",
      options: ["The colour of the cook’s shirt", "The warden’s favourite movie", "Whether it’s exam week", "The number of fans in the mess"], answer: 2,
      hint: "What actually changes how many students eat?",
      note: "During exam week, many students skip dinner or order in. A good feature has a real link to the label.", badge: "lightbulb"
    }),
    MN(1, "Features and Labels", {
      prompt: "The mess kept records for 12 weeks, one row for every dinner. How many rows of data is that?",
      answer: 84,
      hint: "7 dinners a week.",
      note: "12 × 7 = 84 rows. Real models often use thousands of rows; more examples usually mean better learning.", badge: "list-checks",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Supervised and unsupervised ----------
    {
      type: "learn", door: 2,
      title: "Learning with answers, or without them.",
      points: [["Supervised", "The data has the answers (labels). The model learns to predict them"], ["Unsupervised", "No answers. The model finds groups or patterns by itself"], ["Two kinds of supervised", "Classification predicts a category; regression predicts a number"]],
      highlightLast: true,
      side: { label: "Examples", items: [["mail", "Spam or not spam", "Classification"], ["chart-column", "How many plates", "Regression"], ["users", "Group students by eating habits", "Unsupervised"]] }
    },
    ML(2, "Supervised or Not", {
      prompt: "The mess model learns from past dinners where we know how many plates were eaten. What kind of learning is this?",
      options: ["Unsupervised learning", "No learning at all", "Random guessing", "Supervised learning"], answer: 3,
      hint: "Does the data include the answers?",
      note: "Supervised. Every row has the answer (plates eaten), so the model can learn from it.", badge: "check"
    }),
    ML(2, "Supervised or Not", {
      prompt: "The warden wants to find groups of students with similar eating habits, but nobody has labelled any groups. What kind of learning fits?",
      options: ["Unsupervised learning (clustering)", "Supervised learning with labels", "Regression on the eating data", "Classification into known groups"], answer: 0,
      hint: "There are no answers to learn from.",
      note: "Unsupervised. The model finds groups on its own, like “late eaters” and “skip-breakfast” students.", badge: "users"
    }),
    ML(2, "Supervised or Not", {
      prompt: "A model predicts whether it will rain tomorrow: yes or no. What type of problem is it?",
      options: ["Regression", "Classification", "Clustering", "Not machine learning"], answer: 1,
      hint: "Is the answer a number or a category?",
      note: "Classification: the answer is a category (yes or no). Predicting how many millimetres of rain would be regression.", badge: "cloud",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Training and test data ----------
    {
      type: "learn", door: 3,
      title: "Practise on some data. Test on data it has never seen.",
      points: [["Training data", "Most of the rows. The model learns from these"], ["Test data", "Rows kept aside, hidden from the model while it learns"], ["Why?", "Testing on new data shows how it will do in real life"]],
      highlightLast: true,
      side: { label: "Like exams", items: [["book-open", "Training data", "Your practice papers"], ["file-text", "Test data", "The real exam, with new questions"], ["x", "Testing on training data", "Like grading the practice paper you memorised"]] }
    },
    ML(3, "Training and Test", {
      prompt: "You have 100 days of mess data. Which split is most sensible?",
      options: ["Train on 80 days, test on the other 20", "Train on all 100, test on the same 100", "Train on 5 days, test on 95", "Don’t test at all"], answer: 0,
      hint: "Most for learning, some kept aside for checking.",
      note: "80/20 is a common split. The model never sees the 20 test days while learning.", badge: "list-checks"
    }),
    ML(3, "Training and Test", {
      prompt: "Why is it a mistake to test a model on the same data it trained on?",
      options: ["It takes too long to run twice", "It’s against the rules of AI", "The score looks better than reality", "Computers can’t read the same data twice"], answer: 2,
      hint: "Think of memorising the practice paper.",
      note: "The model has already seen those answers. Only new, unseen data shows its real performance.", badge: "search"
    }),
    MN(3, "Training and Test", {
      prompt: "You have 150 rows and use an 80/20 split. How many rows go into the test data?",
      answer: 30,
      hint: "20% of 150.",
      note: "30 test rows and 120 training rows.", badge: "chart-column",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name 3 features you’d use to predict how many people come to a college fest.", note: "20 seconds. Then say what the label is.", points: 100 },

    // ---------- Round 4: Overfitting ----------
    {
      type: "learn", door: 4,
      title: "Overfitting: memorising instead of learning.",
      points: [["It learns the noise too", "Even the random one-off nights, like the day the gas ran out"], ["Great on training, poor on new data", "That gap is the warning sign"], ["Fixes", "More varied data, a simpler model, and always testing on unseen data"]],
      highlightLast: true,
      side: { label: "Spot it", items: [["check", "Training score: 99%", "Looks amazing"], ["x", "Test score: 60%", "Falls apart on new data"], ["lightbulb", "Big gap = overfitting", "It memorised, it didn’t learn"]] }
    },
    ML(4, "Overfitting", {
      prompt: "The mess model scores 99% on training data and 60% on test data. What’s happening?",
      options: ["It’s perfect and ready to use", "Overfitting: it memorised", "The test data is broken", "It needs a faster computer"], answer: 1,
      hint: "Look at the gap between the two scores.",
      note: "A big gap between training and test scores is the classic sign of overfitting.", badge: "search"
    }),
    ML(4, "Overfitting", {
      prompt: "Which student is “overfitting”?",
      options: ["One who learned the concepts and solves new problems", "One who asks lots of questions in class", "One who studies a little every day", "One who memorised last year’s answers"], answer: 3,
      hint: "Great on practice, poor on anything new.",
      note: "Memorising answers works only for the exact same questions. Models do the same thing when they overfit.", badge: "graduation-cap"
    }),
    ML(4, "Overfitting", {
      prompt: "How can the warden reduce overfitting?",
      options: ["More varied data and a simpler model", "Test on the training data instead", "Remove all the features", "Use only one week of data"], answer: 0,
      hint: "More examples, less memorising.",
      note: "More varied data and simpler models help the model learn the real pattern instead of the noise.", badge: "check",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Accuracy traps ----------
    {
      type: "learn", door: 5,
      title: "99% accurate can still be useless.",
      points: [["Accuracy = correct ÷ total", "Simple, but it can mislead"], ["The rare-case trap", "If something is rare, “always no” scores high and catches nothing"], ["Ask what mistakes cost", "Some errors are much worse than others"]],
      highlightLast: true,
      side: { label: "The lazy model", items: [["mail", "1,000 emails", "Only 10 are spam"], ["x", "Model always says “not spam”", "Never catches any"], ["chart-column", "Accuracy: 99%", "Looks great, does nothing"]] }
    },
    MN(5, "Accuracy Traps", {
      prompt: "1,000 emails, 10 are spam. A model labels every email “not spam”. What is its accuracy in percent? Type the number.",
      answer: 99,
      hint: "How many of the 1,000 did it get right?",
      note: "It’s right about the 990 normal emails: 990 ÷ 1,000 = 99%. And it caught zero spam.", badge: "target"
    }),
    ML(5, "Accuracy Traps", {
      prompt: "Why is that 99% spam model useless?",
      options: ["99% is too low for a spam filter", "It never catches a single spam email", "It uses too much memory to run", "Spam isn’t real anymore"], answer: 1,
      hint: "What was the model built to do?",
      note: "High accuracy, zero usefulness. For rare cases, you also check how many of the important cases it actually catches.", badge: "x"
    }),
    ML(5, "Accuracy Traps", {
      prompt: "A model checks X-rays for a serious illness. Which mistake is usually worse?",
      options: ["Saying a healthy person might be ill, so they get one more test", "Taking a few extra seconds", "Telling a sick person they are healthy", "Printing the report in black and white"], answer: 2,
      hint: "Which mistake means someone misses treatment?",
      note: "Missing a sick person can be dangerous. Teams tune models to catch more real cases, even if that means more false alarms.", badge: "heart",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Bias (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: models learn our mistakes too. Double points.",
      points: [["Models copy their data", "Including unfair patterns from the past"], ["Check who’s missing", "Data from one group won’t work well for another"], ["Keep humans in the loop", "Test on different groups and review important decisions"]],
      highlightLast: true,
      side: { label: "Ask every time", items: [["search", "Where did the data come from?", "Whose history is it?"], ["users", "Who is missing?", "Groups the model never saw"], ["shield", "Who checks the results?", "A person, for big decisions"]] }
    },
    ML(6, "Bias", {
      double: true,
      prompt: "A company trains a hiring model on 10 years of past hires, mostly men. What is likely to happen?",
      options: ["It will favour people like past hires", "It will be perfectly fair to everyone", "It will hire only women from now on", "It will refuse to work on that data"], answer: 0,
      hint: "Models copy patterns in their data.",
      note: "The model learns the old pattern and repeats it. Real companies have had to scrap hiring tools for exactly this reason.", badge: "users"
    }),
    ML(6, "Bias", {
      double: true,
      prompt: "The mess model was trained only on the boys’ hostel. The warden wants to use it for the girls’ hostel. What’s the risk?",
      options: ["No risk, because food is food everywhere", "It may predict badly; it never saw that data", "It will run slower on new data", "It will only work on weekends"], answer: 1,
      hint: "Did the model ever see this group?",
      note: "Different groups can have different patterns. Collect data from the girls’ hostel and test there before trusting it.", badge: "search"
    }),
    ML(6, "Bias", {
      double: true,
      prompt: "What’s the best way to build fairer models?",
      options: ["Use as little data as possible", "Never test the model on anything", "Let the model decide alone", "Data for everyone, test groups, human review"], answer: 3,
      hint: "Data, testing and humans.",
      note: "Fairer data, testing across groups and human review together make models safer to use.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best idea wins +200", prompt: "Pick one campus problem. Say what you’d predict (the label) and 3 features you’d use.", note: "60 seconds. Bonus: name one way the model could be biased.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 Machine Learning Words", note: "Screenshot this. These words come up in every AI course and interview.", items: MLWORDS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "AI, coding games and project nights every week. No laptop needed to start.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
