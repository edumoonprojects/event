// AI Agents 2: Automate Your Club (EduMoon AI Lab). Sequel to AI Agents and Automation. For 2nd year and above.
// The club is growing fast. Teams build "FlowBot", an automation workflow, block by block: trigger, steps, conditions, data, testing, value.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const AG = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const AGN = (round, name, extra) => AG(round, name, Object.assign({ kind: "number", time: 50 }, extra));

// The take-home card: the workflow builder checklist.
const FLOWCARD = [
  ["Trigger", "What starts it? A new form entry, a time, or a new email."],
  ["Steps", "List every action in order. One action per step."],
  ["Conditions", "Add if/else only where the path really changes."],
  ["Data", "Map each field: name to name, email to email. Check the format."],
  ["Test", "Run it on test data first, never on real people."],
  ["Failures", "Decide what happens when a step fails: retry, skip, or alert a person."],
  ["Approval", "A person approves anything big or permanent."],
  ["Value", "Automate tasks that are frequent, repetitive and boring first."]
];

window.GAME = {
  id: "ai-agents-2",
  title: "AI Agents 2: Automate Your Club",
  club: "AI Lab",
  tagline: "Part 2 of AI Agents. Build FlowBot, a real automation workflow for your club, one block at a time.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year and above (1st years welcome; no coding needed)", time: "40 minutes", level: "Medium",
    about: "The sequel to AI Agents and Automation. Teams build FlowBot, an automation that handles club registrations from start to finish. In 6 rounds they learn the building blocks every automation tool uses: triggers, steps in order, if/else conditions, mapping data between apps, testing and handling failures, and choosing what is worth automating. It ends with every team designing a workflow for a real campus task.",
    outcomes: "Students can sketch an automation as trigger, steps and conditions, spot the data and failure problems before they happen, and decide which tasks are worth automating. These are the same ideas used in no-code automation tools and AI agent builders.",
    tone: "Hands-on and practical. Draw the workflow on the board as it grows round by round: trigger box, then steps, then the if/else branch. Students who played Part 1 will recognise ClubBot; new students can join without it. No product names are used, so the game stays accurate as tools change.",
    extra: [["Board tip", "Keep one big FlowBot diagram on the whiteboard and add a block after every round. By Round 6 the room has built a full workflow together."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Automated",
    rulesEyebrow: "How AI Agents 2 works", rulesTitle: "Learn a block. Add it to FlowBot. Keep it working.",
    learnText: "The host explains one building block of automation.", crackTitle: "Answer",
    crackText: "Pick or type the best choice on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Automation teams get stuck here too!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "built the best FlowBot!", endLine: "FlowBot is live. The club runs itself, and the team finally has time to plan better events."
  },
  offerEyebrow: "EduMoon AI Lab · Workflow results",
  offerTitle: "Your automation builder rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Workflow Architect", text: "You think in triggers, steps and conditions. Try automating one real task this week." },
    { min: 0.45, icon: "rocket", title: "Flow Builder", text: "Strong! Pick one boring weekly task and sketch its workflow on paper." },
    { min: 0.2, icon: "lightbulb", title: "Automation Explorer", text: "Good start. Save the checklist and use it before your first automation." },
    { min: 0, icon: "book-open", title: "Curious Beginner", text: "Everyone starts here. Play Part 1 again, then try this one once more." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon AI Lab · AI Agents 2",
      title: "The club now gets 300 registrations a week. Forms, sheets, WhatsApp, certificates: the team is drowning. Your job: build FlowBot, an automation that handles it all, safely.",
      cards: [["zap", "Triggers and steps"], ["route", "If/else conditions"], ["shield", "Testing and failures"]]
    },
    { type: "rules" },

    // ---------- Round 1: Triggers ----------
    {
      type: "learn", door: 1,
      title: "Every automation starts with a trigger.",
      points: [["Trigger", "The event that starts the workflow"], ["Three common kinds", "Something new arrives (a form entry), a time (every Monday 9 AM), or a message (a new email)"], ["One trigger per flow", "If two things start it, build two small flows"]],
      highlightLast: true,
      side: { label: "FlowBot’s possible triggers", items: [["list-checks", "New form entry", "A student registers"], ["clock", "Schedule", "Every Friday at 6 PM"], ["mail", "New email", "A sponsor writes in"]] }
    },
    AG(1, "Triggers", {
      prompt: "FlowBot should send a welcome message the moment a student registers. What’s the trigger?",
      options: ["Every Monday at 9 AM, for the whole week", "Whenever the secretary remembers to check", "A new registration form entry", "When the event is over"], answer: 2,
      hint: "“The moment” something new arrives.",
      note: "A new form entry. Event-based triggers run instantly; scheduled ones wait for a set time.", badge: "zap"
    }),
    AG(1, "Triggers", {
      prompt: "The team wants a summary of the week’s registrations every Friday evening. Which trigger fits?",
      options: ["A schedule: every Friday at 6 PM", "Each new form entry as it arrives", "A new email from a sponsor", "A student asking in the WhatsApp group"], answer: 0,
      hint: "This one happens at a fixed time, not because something new arrived.",
      note: "A scheduled trigger. Weekly reports, reminders and backups usually run on a schedule.", badge: "clock"
    }),
    AG(1, "Triggers", {
      prompt: "What’s wrong with the trigger “whenever something changes in the sheet”?",
      options: ["Sheets can’t start any automation at all", "Nothing, it’s the safest choice", "It’s too slow for most clubs", "Any small edit runs it, even a typo fix"], answer: 3,
      hint: "Think about how often a sheet changes.",
      note: "Too broad. A typo fix would send duplicate messages. Good triggers are specific: “new row added”, not “anything changed”.", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Steps in order ----------
    {
      type: "learn", door: 2,
      title: "Steps run in order, and order matters.",
      points: [["One action per step", "Add a row, send a message, make a certificate"], ["Order", "Each step can only use what earlier steps produced"], ["Keep it short", "Fewer steps means fewer places to break"]],
      highlightLast: true,
      side: { label: "FlowBot so far", items: [["zap", "Trigger", "New registration"], ["list-checks", "Step 1", "Add to the master sheet"], ["mail", "Step 2", "Send a welcome message"]] }
    },
    AG(2, "Steps", {
      prompt: "FlowBot must: send the event link, add the student to the sheet, and check the seat is still free. Best order?",
      options: ["Send the link, add to the sheet, check the seat", "Add to the sheet, send the link, check the seat", "Check the seat, add to the sheet, send the link", "Send the link only, skip the rest"], answer: 2,
      hint: "What if the event is already full?",
      note: "Check first. Sending a link and then saying “sorry, it’s full” is a classic automation mistake.", badge: "route"
    }),
    AGN(2, "Steps", {
      prompt: "The secretary does these by hand for each registration: copy to sheet, send welcome, add to WhatsApp list, add to certificate list. If FlowBot does 3 of them, how many does she still do by hand? Type the number.",
      answer: 1,
      hint: "4 tasks, 3 automated.",
      note: "1. Partial automation still saves 75% of the work. You don’t have to automate everything at once.", badge: "search"
    }),
    AG(2, "Steps", {
      prompt: "One step says: “Read the sheet, send emails, make certificates and update WhatsApp.” What’s the problem?",
      options: ["It’s too many actions in one step to debug", "Automations can’t send emails at all", "Steps must always be written in capitals", "It’s fine, bigger steps run faster"], answer: 0,
      hint: "If it fails, where did it fail?",
      note: "One action per step. When something breaks, you’ll know exactly which step to fix.", badge: "list-checks",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Conditions ----------
    {
      type: "learn", door: 3,
      title: "Conditions send different people down different paths.",
      points: [["If / else", "If the student chose Coding, add them to the Coding group; else, the English group"], ["Filters", "Stop the flow for some entries, like test entries or duplicates"], ["Only where needed", "Every branch is another path to test"]],
      highlightLast: true,
      side: { label: "FlowBot’s first branch", items: [["route", "If club = Coding", "Add to Coding group"], ["route", "If club = English", "Add to English group"], ["x", "If email is blank", "Stop and alert the team"]] }
    },
    AG(3, "Conditions", {
      prompt: "Students pick Coding, English or Career & Skills on the form. How should FlowBot add them to the right group?",
      options: ["Add everyone to all three groups", "A condition on the “club” field", "Ask each student again on WhatsApp", "Add them to a random group"], answer: 1,
      hint: "The answer is already in the form.",
      note: "One condition on the club field routes everyone correctly, with no extra questions.", badge: "route"
    }),
    AG(3, "Conditions", {
      prompt: "The same student registers twice by mistake. What should FlowBot do?",
      options: ["Send two welcome messages to be safe", "Delete the student from everything", "Ignore the form for the rest of the day", "Check if the email exists, and skip if so"], answer: 3,
      hint: "Look before you add.",
      note: "A duplicate check. It’s one of the most common conditions in real workflows.", badge: "search"
    }),
    AG(3, "Conditions", {
      prompt: "A team member suggests 12 different branches for every small case. Best advice?",
      options: ["Great, more branches always means smarter", "Start with the 2 or 3 that matter most", "Remove all conditions and send everything", "Let each student pick their own branch"], answer: 1,
      hint: "Every branch needs testing and fixing.",
      note: "Keep it simple. Handle the common cases first and send rare ones to a person.", badge: "lightbulb",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Data ----------
    {
      type: "learn", door: 4,
      title: "Data has to move cleanly from one app to the next.",
      points: [["Mapping", "Connect each field: form “Full name” goes into sheet column “Name”"], ["Placeholders", "“Hi {name}, see you on {date}” fills in real values"], ["Clean data", "Trim spaces, fix formats, and check for blanks"]],
      highlightLast: true,
      side: { label: "Mapping example", items: [["list-checks", "Form: Full name", "Sheet: Name"], ["mail", "Form: Email ID", "Sheet: Email"], ["message-circle", "Form: Mobile", "Sheet: Phone"]] }
    },
    AG(4, "Data", {
      prompt: "FlowBot sends: “Hi {name}, welcome!” but students receive “Hi {name}, welcome!” exactly like that. Most likely cause?",
      options: ["The email server is down for the day", "The placeholder isn’t mapped", "Students typed their names wrong on the form", "The message is too short to send"], answer: 1,
      hint: "Where should the name come from?",
      note: "The placeholder wasn’t connected to the form’s name field. Always check one test message before going live.", badge: "search"
    }),
    AG(4, "Data", {
      prompt: "Some students type phone numbers as “98490 12345”, others as “+91-9849012345”. What should FlowBot do?",
      options: ["Reject everyone who used spaces", "Send messages to both formats twice", "Clean it into one format before using it", "Ignore the phone numbers completely"], answer: 2,
      hint: "Messy input, one clean output.",
      note: "Normalise data first: remove spaces and dashes, add the country code once. Then every later step works.", badge: "list-checks",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Testing and failures ----------
    {
      type: "learn", door: 5,
      title: "Test it before real people see it. Plan for failures.",
      points: [["Test data", "Run the flow with fake entries, like “Test Student”, to your own email"], ["Failure path", "When a step fails: retry once, then alert a person"], ["Watch the first week", "Check the log every day until you trust it"]],
      highlightLast: true,
      side: { label: "When a step fails", items: [["clock", "Retry", "Once or twice, then stop"], ["mail", "Alert", "Tell a team member"], ["file-text", "Log", "Record what failed and why"]] }
    },
    AG(5, "Testing", {
      prompt: "FlowBot is built. What’s the best first test?",
      options: ["Turn it on for all 300 students tonight", "Ask a friend if the diagram looks good", "Submit 3 fake entries and check each step", "Wait for real students to report problems"], answer: 2,
      hint: "Safe, controlled, and you can see everything.",
      note: "Test entries show exactly what each step does, without spamming real students.", badge: "badge-check"
    }),
    AG(5, "Testing", {
      prompt: "The certificate step fails for one student because their name has a special character. Best design?",
      options: ["Stop the whole flow for everyone", "Skip it, log it, and alert the team", "Retry it a thousand times until it works", "Delete that student’s registration"], answer: 1,
      hint: "One failure shouldn’t block 299 others.",
      note: "Handle the failure, keep going for everyone else, and tell a person. That’s a resilient workflow.", badge: "shield",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: What to automate (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: automate what’s worth it. Double points.",
      points: [["Frequent", "It happens often: every day or every registration"], ["Repetitive", "Same steps every time"], ["Low risk", "A mistake is easy to fix, or a person approves first"]],
      highlightLast: true,
      side: { label: "Good vs bad to automate", items: [["zap", "Welcome messages", "Frequent and simple"], ["clock", "Weekly reports", "Same every week"], ["x", "Choosing award winners", "Needs human judgement"]] }
    },
    AGN(6, "Value", {
      double: true,
      prompt: "Sending a welcome message by hand takes 2 minutes. The club gets 300 registrations a month. How many HOURS a month does FlowBot save? Type the number.",
      answer: 10,
      hint: "300 × 2 minutes, then divide by 60.",
      note: "600 minutes = 10 hours every month, from one small step. That’s why automation is worth learning.", badge: "clock"
    }),
    AG(6, "Value", {
      double: true,
      prompt: "Which task should the club automate FIRST?",
      options: ["Choosing the best project for the award", "Replying to a sponsor’s angry complaint", "Sending event reminders to registrants", "Deciding who becomes the next club lead"], answer: 2,
      hint: "Frequent, repetitive and low risk.",
      note: "Reminders. The other three need human judgement and care.", badge: "rocket"
    }),
    AG(6, "Value", {
      double: true,
      prompt: "FlowBot is about to send certificates to all 300 students. What’s the safest final step?",
      options: ["Send them immediately, the flow is tested", "A team member reviews a sample first", "Send them twice in case some fail", "Post all certificates publicly instead"], answer: 1,
      hint: "Big and permanent: a human says yes.",
      note: "Approve before anything big goes out. A quick human check catches the one mistake that would reach 300 people.", badge: "badge-check",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best workflow wins +200", prompt: "Design a workflow for one real campus task in 60 seconds: the trigger, 3 steps, one condition, and what happens if a step fails.", note: "The room votes for the most useful and safest workflow.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "The Workflow Builder Checklist", note: "Screenshot this. Use it before you automate anything.", items: FLOWCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "AI, coding games and project nights every week. No laptop needed to start.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
