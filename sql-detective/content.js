// SQL Detective (EduMoon Coding Club). For 2nd year and above.
// The Hostel A common room laptop vanished one night. Teams query the hostel database to crack the case.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number" (how many rows?), "bug" (what happens, then tap the broken line)

const SQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 60, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const SN = (round, name, extra) => SQ(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const BROKEN = { kind: "bug", time: 75, step1: "What happens when it runs?", step2: "Tap the broken line", say1: "First pick what happens.", say2: "Now tap the line with the mistake.", bugLabel: "The broken line is" };

// The hostel database, shown at the top of most questions.
const HOSTEL_DB = [
  "-- students (id, name, hostel, year): 1 Anil A 2 | 2 Bhavya B 3 | 3 Charan A 3",
  "--   4 Divya B 2 | 5 Eshwar A 4 | 6 Farah B 4",
  "-- gate_log (student_id, time): 3 21:10 | 5 21:40 | 1 22:05 | 5 22:30 | 6 22:45"
];
const WITH = (...q) => HOSTEL_DB.concat(q);

// The take-home card: an SQL cheat sheet.
const SQLSHEET = [
  ["SELECT … FROM …", "Pick columns from a table. SELECT * means every column."],
  ["WHERE", "Keep only rows that match. Text goes in quotes: hostel = 'A'."],
  ["AND / OR", "Combine conditions. AND needs both, OR needs either."],
  ["ORDER BY … DESC", "Sort rows. ASC (small to big) is the default."],
  ["LIMIT n", "Keep only the first n rows."],
  ["COUNT(*), COUNT(DISTINCT x)", "Count rows, or count different values."],
  ["GROUP BY + HAVING", "Make groups. Filter groups with HAVING, not WHERE."],
  ["JOIN … ON", "Connect two tables where a column matches. LEFT JOIN keeps every row on the left."]
];

window.GAME = {
  id: "sql-detective",
  title: "SQL Detective",
  club: "Coding Club",
  tagline: "The Hostel A laptop vanished one night. The only witness is the database. Query your way to the truth.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year and above (anyone who has started DBMS)", time: "40 minutes", level: "Medium", mono: true,
    about: "A mystery played with SQL. The Hostel A common room laptop went missing one night, and the warden’s database has two small tables: students and the hostel gate log. In 6 rounds, teams learn SELECT and WHERE, sorting, counting and grouping, JOINs and common errors, then use them all to find who had the laptop. Every question shows the data, so teams can work out the result by hand.",
    outcomes: "The SQL that appears in DBMS exams and placement tests (SELECT, WHERE, ORDER BY, LIMIT, COUNT, GROUP BY, HAVING, JOIN), plus the habit of predicting a query’s result before running it.",
    tone: "Play up the detective story. When you reveal, run the query by hand on the screen: point at each row and say “keep” or “skip”. Teams that get the reasoning right but miscount still deserve praise.",
    extra: [["Got a laptop?", "You can paste the two tables into any free online SQL editor and run each query live after the reveal. It isn’t needed to play."],
      ["The ending", "The final question has a twist: the data shows who left the gate, not who took the laptop. Use it to talk about checking facts before accusing anyone."]]
  },
  words: {
    round: "Round", unlocked: "Clue", badgeLabel: "Solved",
    rulesEyebrow: "How SQL Detective works", rulesTitle: "Learn the clause. Run the query in your head. Crack the case.",
    learnText: "The host shows one piece of SQL.", crackTitle: "Query",
    crackText: "Work out what the query returns, and lock in your answer.",
    rulesExtra: "Broken queries: <b>100</b> for what happens + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody cracked this clue. Real databases trick developers like this every day!", cracked: "cracked it",
    next: "Next round →", finale: "Next →", winner: "are today’s top SQL detectives!", endLine: "Case closed. The laptop is back in Hostel A."
  },
  offerEyebrow: "EduMoon Coding Club · Detective ranks",
  offerTitle: "Your detective rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Chief Inspector", text: "You read queries like a database does. Try writing one for a real project." },
    { min: 0.45, icon: "search", title: "Detective", text: "Strong! Practise JOINs and GROUP BY in a free online SQL editor this week." },
    { min: 0.2, icon: "key", title: "Junior Detective", text: "Good start. Write out each query’s rows by hand, like today." },
    { min: 0, icon: "book-open", title: "Trainee", text: "Everyone starts here. Save the cheat sheet and play again after your next DBMS class." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Case file 404",
      title: "The Hostel A common room laptop vanished last night. The warden has one witness: the hostel database. Can your team crack the case?",
      cards: [["search", "Two tables, one mystery"], ["code", "Learn real SQL, round by round"], ["trophy", "Your score decides your detective rank"]]
    },
    { type: "rules" },

    // ---------- Round 1: SELECT and WHERE ----------
    {
      type: "learn", door: 1,
      title: "SELECT picks columns. WHERE picks rows.",
      points: [["SELECT name, year", "Which columns you want. * means all of them"], ["FROM students", "Which table to look in"], ["WHERE hostel = 'B'", "Only rows that match. Text needs quotes"]],
      highlightLast: true,
      code: ["SELECT name, year", "FROM students", "WHERE hostel = 'B';"],
      output: "Bhavya 3 · Divya 2 · Farah 4"
    },
    SN(1, "SELECT and WHERE", {
      prompt: "How many rows does this query return?",
      code: WITH("SELECT * FROM students", "WHERE hostel = 'A';"),
      answer: 3,
      hint: "Go through the students one by one. Who is in hostel A?",
      trace: [["Anil", "A, keep"], ["Charan", "A, keep"], ["Eshwar", "A, keep"], ["Bhavya, Divya, Farah", "B, skip"]],
      note: "3 rows: Anil, Charan and Eshwar. The laptop was in Hostel A, so these are our first names to check.", badge: "search"
    }),
    SQ(1, "SELECT and WHERE", {
      prompt: "Which query lists only the names of 4th year students?",
      code: HOSTEL_DB.slice(0, 2),
      options: ["SELECT * FROM students;", "SELECT year FROM students WHERE name = 4;", "SELECT name FROM students WHERE year = 4;", "SELECT name WHERE year = 4 FROM students;"], answer: 2,
      hint: "SELECT, then FROM, then WHERE. In that order.",
      note: "SELECT name FROM students WHERE year = 4 gives Eshwar and Farah. The order of clauses matters: FROM always comes before WHERE.", badge: "check"
    }),
    SN(1, "SELECT and WHERE", {
      prompt: "How many rows does this query return?",
      code: WITH("SELECT name FROM students", "WHERE year >= 3 AND hostel = 'B';"),
      answer: 2,
      hint: "Both conditions must be true.",
      trace: [["Bhavya", "B, year 3: keep"], ["Farah", "B, year 4: keep"], ["Divya", "B, but year 2: skip"]],
      note: "2: Bhavya and Farah. AND needs both conditions to be true.", badge: "list-checks",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: ORDER BY and LIMIT ----------
    {
      type: "learn", door: 2,
      title: "ORDER BY sorts. LIMIT keeps the top few.",
      points: [["ORDER BY name", "A to Z. Add DESC for Z to A"], ["LIMIT 2", "Keep only the first 2 rows after sorting"], ["Times as text", "'21:10' comes before '22:05' when sorted, just like the clock"]],
      highlightLast: true,
      code: ["SELECT name FROM students", "ORDER BY name", "LIMIT 2;"],
      output: "Anil · Bhavya"
    },
    SQ(2, "ORDER BY and LIMIT", {
      prompt: "What does this query return?",
      code: WITH("SELECT name FROM students", "ORDER BY name DESC LIMIT 1;"),
      options: ["Anil", "Farah", "Eshwar", "Divya"], answer: 1,
      hint: "DESC means Z to A. Which name comes last in the alphabet?",
      note: "Farah. Sorted Z to A, F comes first among these names, and LIMIT 1 keeps only her.", badge: "chart-column"
    }),
    SN(2, "ORDER BY and LIMIT", {
      prompt: "How many rows does this query return?",
      code: WITH("SELECT * FROM gate_log", "WHERE time > '22:00';"),
      answer: 3,
      hint: "Look at the gate_log times.",
      trace: [["21:10, 21:40", "before 22:00, skip"], ["22:05, 22:30, 22:45", "after 22:00, keep"]],
      note: "3 rows. Three gate exits happened after 10 pm.", badge: "clock"
    }),
    SQ(2, "ORDER BY and LIMIT", {
      prompt: "Who left the hostel gate first that night? What does this return?",
      code: WITH("SELECT student_id FROM gate_log", "ORDER BY time LIMIT 1;"),
      options: ["5", "1", "6", "3"], answer: 3,
      hint: "Sort by time, earliest first. Take the top row.",
      note: "3, which is Charan, at 21:10. Too early for the laptop, which was last seen at 22:00.", badge: "route",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: COUNT and GROUP BY ----------
    {
      type: "learn", door: 3,
      title: "COUNT counts. GROUP BY makes groups.",
      points: [["COUNT(*)", "How many rows match"], ["COUNT(DISTINCT x)", "How many DIFFERENT values of x"], ["GROUP BY hostel", "One row per group, each with its own count"]],
      highlightLast: true,
      code: ["SELECT hostel, COUNT(*)", "FROM students", "GROUP BY hostel;"],
      output: "A 3 · B 3"
    },
    SN(3, "COUNT and GROUP BY", {
      prompt: "What number does this query return?",
      code: WITH("SELECT COUNT(*) FROM gate_log", "WHERE student_id = 5;"),
      answer: 2,
      hint: "How many times does 5 appear in gate_log?",
      note: "2. Student 5, Eshwar, went through the gate twice: 21:40 and 22:30. Suspicious? Keep reading.", badge: "search"
    }),
    SN(3, "COUNT and GROUP BY", {
      prompt: "What number does this query return?",
      code: WITH("SELECT COUNT(DISTINCT student_id)", "FROM gate_log;"),
      answer: 4,
      hint: "Count different students, not rows. Eshwar appears twice.",
      note: "4 different students: 3, 5, 1 and 6. COUNT(*) would say 5, because it counts rows.", badge: "users"
    }),
    SQ(3, "COUNT and GROUP BY", {
      prompt: "What does this query return?",
      code: WITH("SELECT year, COUNT(*) FROM students", "GROUP BY year;"),
      options: ["2 → 2, 3 → 2, 4 → 2", "2 → 1, 3 → 2, 4 → 3", "Just the number 6", "2 → 3, 3 → 3"], answer: 0,
      hint: "Make a pile for each year, then count each pile.",
      note: "Two students in each year. GROUP BY gives one row per year, each with its own count.", badge: "chart-column",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain in 20 seconds: what’s the difference between COUNT(*) and COUNT(DISTINCT student_id)?", note: "Use the gate log as your example.", points: 100 },

    // ---------- Round 4: JOIN ----------
    {
      type: "learn", door: 4,
      title: "JOIN connects two tables.",
      points: [["gate_log has only IDs", "To see names, we need the students table too"], ["ON s.id = g.student_id", "Match each gate row with the student who has that id"], ["LEFT JOIN", "Keeps every row on the left, even with no match. Missing values become NULL"]],
      highlightLast: true,
      code: ["SELECT s.name, g.time", "FROM students s", "JOIN gate_log g ON s.id = g.student_id", "WHERE g.time < '21:30';"],
      output: "Charan 21:10"
    },
    SQ(4, "JOIN", {
      prompt: "Who went through the gate at 22:05? What does this return?",
      code: WITH("SELECT s.name FROM students s", "JOIN gate_log g ON s.id = g.student_id", "WHERE g.time = '22:05';"),
      options: ["Anil", "Charan", "Eshwar", "Farah"], answer: 0,
      hint: "Which student_id is at 22:05? Then look up that id.",
      note: "Anil. The 22:05 row has student_id 1, and student 1 is Anil. Right in the time window!", badge: "search"
    }),
    SN(4, "JOIN", {
      prompt: "How many rows does this JOIN return?",
      code: WITH("SELECT s.name, g.time FROM students s", "JOIN gate_log g ON s.id = g.student_id;"),
      answer: 5,
      hint: "Every gate_log row finds exactly one student.",
      note: "5, one for every gate_log row. Eshwar appears twice because he went through the gate twice.", badge: "code"
    }),
    SQ(4, "JOIN", {
      prompt: "Which students never went through the gate? What does this return?",
      code: WITH("SELECT s.name FROM students s", "LEFT JOIN gate_log g ON s.id = g.student_id", "WHERE g.student_id IS NULL;"),
      options: ["Eshwar and Farah", "Nobody", "Anil and Charan", "Bhavya and Divya"], answer: 3,
      hint: "Which ids (1 to 6) are missing from gate_log?",
      note: "Bhavya (2) and Divya (4) have no gate rows, so their gate columns are NULL. They stayed in all night.", badge: "users",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Broken queries ----------
    {
      type: "learn", door: 5,
      title: "Three mistakes that break most queries.",
      points: [["Text without quotes", "hostel = A looks for a column called A"], ["COUNT in WHERE", "WHERE filters rows. Filter groups with HAVING"], ["A missing comma", "SELECT name year means “call the name column year”"]],
      highlightLast: true,
      code: ["SELECT hostel, COUNT(*)", "FROM students", "GROUP BY hostel", "HAVING COUNT(*) > 2;"],
      output: "A 3 · B 3"
    },
    SQ(5, "Broken Queries", Object.assign({}, BROKEN, {
      prompt: "The warden’s assistant wrote this. What happens, and which line is broken?",
      code: ["SELECT name", "FROM students", "WHERE hostel = A;"],
      outputOptions: ["An error: there is no column called A", "3 names from hostel A", "No rows, but no error"], outputAnswer: 0, bugLine: 2,
      bugText: "A without quotes is read as a column name. Fix: hostel = 'A'",
      hint: "How does SQL tell text apart from a column name?",
      note: "Text values always need quotes in SQL. Without them, the database looks for a column with that name.", badge: "x"
    })),
    SQ(5, "Broken Queries", Object.assign({}, BROKEN, {
      prompt: "Trying to find hostels with more than 2 students. What happens, and which line is broken?",
      code: ["SELECT hostel, COUNT(*)", "FROM students", "WHERE COUNT(*) > 2", "GROUP BY hostel;"],
      outputOptions: ["Both hostels, with 3 each", "An error: COUNT can’t be used in WHERE", "Only hostel A"], outputAnswer: 1, bugLine: 2,
      bugText: "WHERE runs before groups exist. Fix: remove it and add HAVING COUNT(*) > 2 after GROUP BY",
      hint: "WHERE works on rows. When do the counts exist?",
      note: "WHERE filters rows before grouping; HAVING filters groups after. This one is asked in almost every DBMS viva.", badge: "list-checks"
    })),
    SQ(5, "Broken Queries", Object.assign({}, BROKEN, {
      prompt: "Supposed to show names and years of 4th years. What happens, and which line is broken?",
      code: ["SELECT name year", "FROM students", "WHERE year = 4;"],
      outputOptions: ["Names and years of the 4th years", "An error", "Only the names, in a column titled year"], outputAnswer: 2, bugLine: 0,
      bugText: "with no comma, “year” becomes a new title for the name column. Fix: SELECT name, year",
      hint: "This one doesn’t crash. Look closely at the first line.",
      note: "A sneaky one: no error, just the wrong result. Always check your output, not just that the query ran.", badge: "search",
      board: true, boardLabel: "after Round 5"
    })),

    // ---------- Round 6: Solve the case (double) ----------
    {
      type: "learn", door: 6,
      title: "The final clue: the laptop was last seen at 22:00 and gone by 22:20.",
      points: [["BETWEEN", "Includes both ends: BETWEEN '22:00' AND '22:20'"], ["Join to get names", "IDs alone don’t tell the warden much"], ["Data shows what, not why", "A good detective checks before accusing"]],
      highlightLast: true
    },
    SN(6, "Solve the Case", {
      double: true,
      prompt: "How many people went through the gate in the time window? What number does this return?",
      code: WITH("SELECT COUNT(*) FROM gate_log", "WHERE time BETWEEN '22:00' AND '22:20';"),
      answer: 1,
      hint: "Which times are from 22:00 to 22:20?",
      note: "Just 1: the 22:05 exit. Eshwar’s 22:30 is too late.", badge: "target"
    }),
    SQ(6, "Solve the Case", {
      double: true,
      prompt: "Which query gives the name and hostel of that person?",
      code: HOSTEL_DB,
      options: ["SELECT name, hostel FROM gate_log WHERE time BETWEEN '22:00' AND '22:20';", "SELECT * FROM students WHERE time BETWEEN '22:00' AND '22:20';", "SELECT s.name, s.hostel FROM students s JOIN gate_log g ON s.id = g.student_id WHERE g.time BETWEEN '22:00' AND '22:20';", "SELECT s.name FROM students s JOIN gate_log g ON s.name = g.time;"], answer: 2,
      hint: "gate_log has times. students has names. You need both.",
      note: "Only the JOIN works: gate_log has no name or hostel column, and students has no time column. Result: Anil, hostel A.", badge: "key"
    }),
    SQ(6, "Solve the Case", {
      double: true,
      prompt: "The query returns: Anil, hostel A, 22:05. What should the warden do?",
      options: ["Announce in the hostel group that Anil stole the laptop", "Talk to Anil first: the data proves he left the gate at 22:05, not that he took the laptop", "Delete the gate log", "Suspend everyone in Hostel A"], answer: 1,
      hint: "What does the gate_log actually record?",
      note: "Data shows what happened, not why. The warden asked Anil, who had borrowed the laptop for a late hackathon session and forgot to sign the register. Case closed, nobody falsely accused.", badge: "shield",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best query wins +200", prompt: "Write a query on paper: the names of students who went through the gate more than once.", note: "Hint: JOIN, GROUP BY s.name, HAVING COUNT(*) > 1. The answer is Eshwar. Read the best one aloud.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "SQL Cheat Sheet", note: "Screenshot this. It covers most SQL questions in DBMS exams and placement tests.", items: SQLSHEET },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, escape rooms and project nights every week. No laptop needed to start.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
