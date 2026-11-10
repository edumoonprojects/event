// Excel Express (EduMoon Skills Club). For all years.
// Spreadsheet basics every job expects: SUM, AVERAGE, COUNTIF, IF, sorting and filtering, lookups, $ references and charts.
// Formulas work the same in Excel and Google Sheets unless noted.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const EX = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const EN = (round, name, extra) => EX(round, name, Object.assign({ kind: "number", time: 60 }, extra));

const FORMULAS = [
  ["=SUM(B2:B10)", "Add up a range."],
  ["=AVERAGE(B2:B10)", "The average of a range."],
  ["=MAX() / =MIN()", "Highest and lowest value."],
  ["=COUNTIF(C2:C40, \"Present\")", "Count cells that match a condition."],
  ["=IF(B2>=40, \"Pass\", \"Fail\")", "Show one thing or another based on a test."],
  ["=XLOOKUP / =VLOOKUP", "Find a value in another table by a key, like a roll number."],
  ["$B$1", "Lock a cell so it doesn’t shift when you copy a formula."],
  ["Sort, Filter, Freeze panes", "Order data, show only what you need, keep headers visible."],
  ["Charts", "Bar to compare, line for change over time."],
  ["Ctrl + Z", "Undo. Your best friend."]
];

window.GAME = {
  id: "excel-express",
  title: "Excel Express",
  club: "Skills Club",
  tagline: "The spreadsheet skills every internship expects. Fast.",
  art: window.STORY_ART,
  guide: {
    years: "All years · every branch", time: "35 minutes", level: "Beginner",
    about: "Almost every job, internship and college club uses spreadsheets. In 6 rounds, teams manage a made-up club’s attendance, marks and fest budget: adding and averaging, counting with conditions, IF formulas, sorting and filtering, looking up values by roll number, locking cells with $ and choosing the right chart. Some questions ask for a typed number result.",
    outcomes: "10 formulas and features used in most office jobs, how to read a formula, and the confidence to manage any club or project data in Excel or Google Sheets.",
    tone: "Keep it practical. If you have a laptop, show one formula live in Google Sheets after each round. Typed answers are whole numbers only.",
    extra: [["Practise later", "Every formula works in free Google Sheets on a phone or laptop."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Calculated",
    rulesEyebrow: "How Excel Express works", rulesTitle: "Read the sheet. Pick the formula. Get the answer.",
    learnText: "The host shows one spreadsheet skill.", crackTitle: "Calculate",
    crackText: "Pick or type your answer on your phone and lock it in.",
    rulesExtra: "Typed answers: whole numbers only. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Even office pros look this up!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s spreadsheet stars!", endLine: "=SUM(skills learned today)"
  },
  offerEyebrow: "EduMoon Skills Club · Spreadsheet results",
  offerTitle: "Your spreadsheet level",
  offers: [
    { min: 0.7, icon: "crown", title: "Spreadsheet Pro", text: "You’re office-ready. Add “Excel / Google Sheets” to your resume with a real example." },
    { min: 0.45, icon: "chart-column", title: "Formula Fluent", text: "Strong! Practise IF and XLOOKUP on a real sheet this week." },
    { min: 0.2, icon: "list-checks", title: "Cell Starter", text: "Good start. Make your club’s attendance sheet with COUNTIF." },
    { min: 0, icon: "book-open", title: "Blank Sheet", text: "Everyone starts here. Save the 10 formulas and try SUM today." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Excel Express",
      title: "Your club has 40 members, 6 events and a fest budget, all in one messy spreadsheet. The HOD wants a report by evening. Formulas to the rescue.",
      cards: [["chart-column", "Formulas every job expects"], ["list-checks", "Clean up a real club sheet"], ["timer", "Work faster than copy-paste"]]
    },
    { type: "rules" },

    // ---------- Round 1: SUM, AVERAGE, MAX ----------
    {
      type: "learn", door: 1,
      title: "Every formula starts with =",
      points: [["=SUM(B2:B6)", "Adds all values from B2 to B6"], ["=AVERAGE(B2:B6)", "Their average"], ["=MAX() / =MIN()", "Highest / lowest"]],
      highlightLast: true,
      side: { label: "Fest budget (column B)", items: [["indian-rupee", "B2 Posters", "₹1,500"], ["indian-rupee", "B3 Snacks", "₹3,000"], ["indian-rupee", "B4 Prizes", "₹2,500"]] }
    },
    EN(1, "Basics", {
      prompt: "B2 = 1500, B3 = 3000, B4 = 2500. What does =SUM(B2:B4) show?",
      answer: 7000,
      hint: "Add them.",
      note: "1,500 + 3,000 + 2,500 = 7,000. SUM saves you adding by hand, and updates automatically.", badge: "indian-rupee"
    }),
    EX(1, "Basics", {
      prompt: "Which formula finds the average marks in cells C2 to C41?",
      options: ["=SUM(C2:C41)", "=AVG(C2,C41)", "=AVERAGE(C2:C41)", "=MEAN C2-C41"], answer: 2,
      hint: "The full word, and a colon for the range.",
      note: "=AVERAGE(C2:C41). The colon means “from C2 to C41”.", badge: "chart-column"
    }),
    EX(1, "Basics", {
      prompt: "Which formula shows the highest score in D2:D41?",
      options: ["=BIG(D2)", "=TOP(D2:D41)", "=HIGH(D2:D41)", "=MAX(D2:D41)"], answer: 3,
      hint: "Maximum.",
      note: "=MAX finds the highest; =MIN the lowest.", badge: "trophy",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: COUNTIF and IF ----------
    {
      type: "learn", door: 2,
      title: "Count and decide with conditions.",
      points: [["=COUNTIF(range, condition)", "Counts cells that match"], ["=IF(test, yes, no)", "Shows one thing if the test is true, another if not"], ["Text goes in quotes", "\"Present\", \"Pass\""]],
      highlightLast: true,
      side: { label: "Examples", items: [["users", "=COUNTIF(C2:C41,\"Present\")", "how many came"], ["check", "=IF(D2>=40,\"Pass\",\"Fail\")", "pass or fail"], ["list-checks", "Text in \"quotes\"", ""]] }
    },
    EX(2, "Conditions", {
      prompt: "Column C has “Present” or “Absent” for 40 members. Which formula counts how many were present?",
      options: ["=IF(C2:C41)", "=COUNTIF(C2:C41, \"Present\")", "=COUNT(Present)", "=SUM(C2:C41)"], answer: 1,
      hint: "Count, with a condition.",
      note: "COUNTIF counts cells that match. Perfect for attendance.", badge: "users"
    }),
    EN(2, "Conditions", {
      prompt: "D2 is 35. What does =IF(D2>=40, 1, 0) show? Type the number.",
      answer: 0,
      hint: "Is 35 at least 40?",
      note: "35 is less than 40, so the test is false and it shows 0.", badge: "check"
    }),
    EX(2, "Conditions", {
      prompt: "You want “Pass” if marks in D2 are 40 or more, else “Fail”. Which formula?",
      options: ["=IF(D2, Pass, Fail)", "=PASS(D2>40)", "=IF(\"Pass\">=40)", "=IF(D2>=40, \"Pass\", \"Fail\")"], answer: 3,
      hint: "Test, then yes, then no.",
      note: "IF(test, value if true, value if false). Text needs quotes.", badge: "graduation-cap",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Sort, filter, freeze ----------
    {
      type: "learn", door: 3,
      title: "Sort, filter and freeze: tidy data in seconds.",
      points: [["Sort", "Order rows by a column, A to Z or high to low"], ["Filter", "Show only rows you need, like 2nd years"], ["Freeze panes", "Keep the header row visible when scrolling"]],
      highlightLast: true,
      side: { label: "Where to find them", items: [["list-checks", "Data menu", "Sort and filter"], ["eye", "View menu", "Freeze"], ["shield", "Select all columns first", "before sorting"]] }
    },
    EX(3, "Tidy Data", {
      prompt: "You want to see only the members from 2nd year, without deleting anyone. Best tool?",
      options: ["Make a new sheet by retyping", "Delete other rows", "Filter on the Year column", "Colour the rows"], answer: 2,
      hint: "Show, don’t delete.",
      note: "Filters hide rows temporarily. Your data stays safe.", badge: "search"
    }),
    EX(3, "Tidy Data", {
      prompt: "You sort only the Marks column, but not the Names column. What happens?",
      options: ["It sorts faster", "Marks get mixed up with the wrong names", "Names sort automatically always", "Nothing"], answer: 1,
      hint: "Rows must move together.",
      note: "Always select the whole table (or use the full sort option) so each row stays together.", badge: "shield"
    }),
    EX(3, "Tidy Data", {
      prompt: "You scroll down 200 rows and forget which column is which. What helps?",
      options: ["Delete the headers", "Freeze the top row", "Zoom out to 10%", "Print it"], answer: 1,
      hint: "Keep the header in view.",
      note: "Freeze panes keeps your header row on screen while you scroll.", badge: "eye",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Where could you use a spreadsheet this week: club, hostel expenses, study plan?", note: "20 seconds. Name one use and one formula.", points: 100 },

    // ---------- Round 4: Lookups ----------
    {
      type: "learn", door: 4,
      title: "Lookups: find information from another table.",
      points: [["You have a roll number", "You want that student’s name from another sheet"], ["=XLOOKUP(key, find in, return from)", "Newer and simpler"], ["=VLOOKUP(key, table, column, FALSE)", "Older, still everywhere. FALSE means exact match"]],
      highlightLast: true,
      side: { label: "Lookup example", items: [["search", "Key", "Roll number 21A05"], ["list-checks", "Look in", "Roll number column"], ["user", "Return", "Name column"]] }
    },
    EX(4, "Lookups", {
      prompt: "You have roll numbers in one sheet and want to bring in each student’s phone number from the main list. Which function?",
      options: ["=XLOOKUP (or VLOOKUP)", "=SUM", "=MAX", "=COUNTIF"], answer: 0,
      hint: "Look up by a key.",
      note: "Lookups match a key (the roll number) and return a value from another table.", badge: "search"
    }),
    EX(4, "Lookups", {
      prompt: "In =VLOOKUP(A2, Members!A:D, 3, FALSE), what does the 3 mean?",
      options: ["Return the value from the 3rd column of the table", "Round to 3 decimals", "Look up 3 times", "Return 3 rows"], answer: 0,
      hint: "Which column to bring back.",
      note: "3 means the 3rd column of the lookup table. FALSE asks for an exact match.", badge: "list-checks"
    }),
    EX(4, "Lookups", {
      prompt: "Your lookup shows #N/A for one roll number. Most likely reason?",
      options: ["That roll number isn’t in the lookup table, or has an extra space or typo", "Excel is out of date", "The computer is broken", "The formula is too long"], answer: 0,
      hint: "It couldn’t find the key.",
      note: "#N/A means “not found”. Check spelling and spaces. Clean data, happy lookups.", badge: "search",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: $ references ----------
    {
      type: "learn", door: 5,
      title: "The $ sign locks a cell when you copy formulas.",
      points: [["Normal reference", "B2 shifts to B3, B4… when copied down"], ["$B$1", "Always stays B1, even when copied"], ["Use it for", "A fixed rate, a target or a total in one cell"]],
      highlightLast: true,
      side: { label: "Example", items: [["indian-rupee", "B1", "Ticket price ₹50"], ["users", "A2:A10", "Tickets sold per day"], ["code", "=A2*$B$1", "copied down safely"]] }
    },
    EX(5, "Locking Cells", {
      prompt: "Ticket price is in B1. You write =A2*B1 and copy it down. Row 3 shows wrong values. Why?",
      options: ["The price changed", "Copying is not allowed", "B1 shifted to B2, B3… when copied. Use $B$1 to lock it", "A2 is wrong"], answer: 2,
      hint: "What happens to B1 when copied down?",
      note: "References move when copied. $ locks them in place.", badge: "lock"
    }),
    EN(5, "Locking Cells", {
      prompt: "B1 = 50 (ticket price). A4 = 12 (tickets sold). What does =A4*$B$1 show?",
      answer: 600,
      hint: "12 × 50.",
      note: "12 × 50 = 600. The $ kept B1 locked even in row 4.", badge: "indian-rupee"
    }),
    EX(5, "Locking Cells", {
      prompt: "Which reference stays exactly the same wherever you copy it?",
      options: ["B$1", "$B1", "B1", "$B$1"], answer: 3,
      hint: "Lock both the column and the row.",
      note: "$B$1 locks both. $B1 locks only the column; B$1 only the row.", badge: "lock",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Charts and final (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: show it with the right chart.",
      points: [["Bar or column", "Compare categories, like events"], ["Line", "Change over time, like monthly members"], ["Pie", "Parts of a whole, with only a few slices"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["chart-column", "Charts and checks", ""], ["award", "Then your level", ""]] }
    },
    EX(6, "Charts", {
      double: true,
      prompt: "You want to show how club membership grew from January to December. Best chart?",
      options: ["A table only", "Line chart", "Pie chart", "Scatter of random dots"], answer: 1,
      hint: "Change over time.",
      note: "Line charts show trends over time clearly.", badge: "trending-up"
    }),
    EX(6, "Charts", {
      double: true,
      prompt: "You want to compare attendance at 6 different events. Best chart?",
      options: ["No chart", "Pie with 6 thin slices", "Line chart", "Bar or column chart"], answer: 3,
      hint: "Compare categories.",
      note: "Bars make comparisons between categories easy to read.", badge: "chart-column"
    }),
    EN(6, "Charts", {
      double: true,
      prompt: "C2:C6 contain Present, Absent, Present, Present, Absent. What does =COUNTIF(C2:C6, \"Present\") show?",
      answer: 3,
      hint: "Count the Presents.",
      note: "3 Presents. Same formula, 40 members or 4,000.", badge: "users",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: describe a sheet for your club, with 3 formulas you’d use and why.", note: "The host picks the most useful sheet.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Spreadsheet Must-Knows", note: "Screenshot this. Try them in Google Sheets tonight.", items: FORMULAS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Career skills, interview practice and games every week. Learn the skills companies look for.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
