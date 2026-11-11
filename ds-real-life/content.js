// Data Structures in Real Life (EduMoon Coding Club). For 1st year onwards.
// Arrays, stacks, queues, linked lists, hash maps, trees and graphs, explained through canteen queues,
// browser back buttons, contact lists and maps, then matched to real problems.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const DS = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const STRUCTS = [
  ["Array", "Items in numbered slots. Fast to reach by position: a row of lockers."],
  ["Stack", "Last in, first out: a pile of plates, the browser back button, undo."],
  ["Queue", "First in, first out: the canteen line, printer jobs."],
  ["Linked list", "Each item points to the next: a treasure hunt, a music playlist."],
  ["Hash map", "Find by a key instantly: phonebook name → number, roll no → student."],
  ["Tree", "One top, branches below: folders, family tree, college hierarchy."],
  ["Graph", "Points connected by lines: maps, friend networks, train routes."],
  ["Pick by the question", "What do I need to do fast: add, remove, find or connect?"]
];

window.GAME = {
  id: "ds-real-life",
  title: "Data Structures in Real Life",
  club: "Coding Club",
  tagline: "You use data structures every day. You just didn’t know their names.",
  art: window.STORY_ART,
  guide: {
    years: "1st year onwards · no DSA background needed", time: "35 minutes", level: "Beginner",
    about: "Data structures scare first years because they’re taught with symbols before stories. In 6 rounds, teams meet them in real life: arrays as lockers, stacks as plates and the back button, queues as the canteen line, linked lists as playlists, hash maps as phonebooks, and trees and graphs as folders and maps. Then they match each structure to real problems and see why the choice matters.",
    outcomes: "What 7 core data structures are, a real-life picture for each, and how to pick the right one for a problem, a strong base before DSA classes and LeetCode.",
    tone: "No code required. After each round, draw the structure quickly on the board. When a team gets it, ask them for another real-life example; that’s where the learning sticks.",
    extra: [["Next step", "Follow up with Placement Round 2: DSA once students are comfortable with these pictures."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Structured",
    rulesEyebrow: "How Data Structures in Real Life works", rulesTitle: "Spot the structure in everyday life.",
    learnText: "The host shows one data structure with a real-life picture.", crackTitle: "Match",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. It’s trickier than it looks!", cracked: "matched it",
    next: "Next round →", finale: "Next →", winner: "see data structures everywhere!", endLine: "DSA just got a lot less scary!"
  },
  offerEyebrow: "EduMoon Coding Club · DSA results",
  offerTitle: "Your DSA vision",
  offers: [
    { min: 0.7, icon: "crown", title: "Structure Master", text: "You see the patterns. Try Placement Round 2: DSA next." },
    { min: 0.45, icon: "code", title: "Pattern Spotter", text: "Strong! Solve one easy stack or queue problem on LeetCode." },
    { min: 0.2, icon: "route", title: "Explorer", text: "Good start. Learn stack and queue first; they come up often." },
    { min: 0, icon: "book-open", title: "Fresh Start", text: "Everyone starts here. Save the 8 pictures and look for them today." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Data Structures in Real Life",
      title: "The canteen line, your browser’s back button, Google Maps, your phone’s contacts. They’re all data structures. Let’s name them.",
      cards: [["list-checks", "7 structures, 7 real-life pictures"], ["brain", "No code needed"], ["route", "Pick the right one for a problem"]]
    },
    { type: "rules" },

    // ---------- Round 1: Arrays ----------
    {
      type: "learn", door: 1,
      title: "Array: items in numbered slots.",
      points: [["Like a row of lockers", "Each has a number, starting at 0"], ["Fast to reach by position", "“Give me locker 5” is instant"], ["Slow to insert in the middle", "Everything after it shifts"]],
      highlightLast: true,
      side: { label: "Real life", items: [["list-checks", "Lockers", "numbered"], ["users", "Roll numbers", "in order"], ["clock", "Days of the week", "fixed slots"]] }
    },
    DS(1, "Arrays", {
      prompt: "Which real-life thing is most like an array?",
      options: ["A pile of plates in the canteen", "A family tree", "A row of numbered lockers", "A road map of the city"], answer: 2,
      hint: "Numbered slots.",
      note: "Numbered slots you can reach directly by position. That’s an array.", badge: "list-checks"
    }),
    DS(1, "Arrays", {
      prompt: "marks = [70, 85, 92, 64]. What is marks[2]?",
      code: ["marks = [70, 85, 92, 64]", "print(marks[2])"],
      options: ["70", "64", "85", "92"], answer: 3,
      hint: "Counting starts at 0.",
      note: "Index 0 is 70, 1 is 85, 2 is 92. Arrays start counting from 0.", badge: "code"
    }),
    DS(1, "Arrays", {
      prompt: "Why is inserting a new student in the MIDDLE of a long array slow?",
      options: ["Arrays can’t hold student records", "Everything after it shifts one place", "It’s always fast in every language", "It deletes the array"], answer: 1,
      hint: "Think of squeezing into a full row of lockers.",
      note: "Inserting in the middle means moving everything after it. Other structures handle this better.", badge: "route",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Stacks ----------
    {
      type: "learn", door: 2,
      title: "Stack: last in, first out.",
      points: [["Like a pile of plates", "You take from the top: the last one put on"], ["Push and pop", "Add to the top, remove from the top"], ["Used for", "Undo, browser back button, checking brackets"]],
      highlightLast: true,
      side: { label: "Real life", items: [["list-checks", "Plates", "top first"], ["route", "Back button", "last page first"], ["code", "Ctrl + Z", "last action first"]] }
    },
    DS(2, "Stacks", {
      prompt: "You visit Google, then YouTube, then Instagram. You press Back once. Where do you go?",
      options: ["Home screen", "YouTube", "Instagram", "Google"], answer: 1,
      hint: "Last visited before the current page.",
      note: "Back pops the last page off the history stack: YouTube.", badge: "route"
    }),
    DS(2, "Stacks", {
      prompt: "Which everyday feature works like a stack?",
      options: ["A canteen line at lunchtime", "A train route map", "Ctrl + Z (undo)", "A phone’s contact search"], answer: 2,
      hint: "Which undoes the LAST thing first?",
      note: "Undo reverses your most recent action first. Last in, first out.", badge: "pen-tool"
    }),
    DS(2, "Stacks", {
      prompt: "Push 1, push 2, push 3, then pop once. What comes out?",
      options: ["2", "1", "Nothing", "3"], answer: 3,
      hint: "The top of the pile.",
      note: "3 was pushed last, so it’s popped first.", badge: "list-checks",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Queues ----------
    {
      type: "learn", door: 3,
      title: "Queue: first in, first out.",
      points: [["Like the canteen line", "The first person in line gets served first"], ["Enqueue and dequeue", "Join at the back, leave from the front"], ["Used for", "Printer jobs, customer support, ticket booking"]],
      highlightLast: true,
      side: { label: "Real life", items: [["users", "Canteen line", "fair order"], ["file-text", "Printer jobs", "in order sent"], ["timer", "Booking waitlist", "first come"]] }
    },
    DS(3, "Queues", {
      prompt: "Which real-life thing is a queue?",
      options: ["The canteen counter line", "A pile of books on a desk", "A road map of Vizag", "Folders on a laptop"], answer: 0,
      hint: "First come, first served.",
      note: "The first person in line is served first. That’s FIFO: first in, first out.", badge: "users"
    }),
    DS(3, "Queues", {
      prompt: "Anu, then Ravi, then Sneha send files to the lab printer. Whose prints first?",
      options: ["Random", "Ravi", "Anu", "Sneha"], answer: 2,
      hint: "First in, first out.",
      note: "Printers use a queue. Anu sent first, so Anu prints first.", badge: "file-text"
    }),
    DS(3, "Queues", {
      prompt: "What’s the key difference between a stack and a queue?",
      options: ["Stack: newest out first; queue: oldest", "Queues are always faster than stacks", "Stacks can only store numbers", "There’s no real difference between them"], answer: 0,
      hint: "Plates vs canteen line.",
      note: "Stack: last in, first out. Queue: first in, first out.", badge: "brain",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Name one more stack and one more queue from your daily life.", note: "20 seconds. The most creative example wins.", points: 100 },

    // ---------- Round 4: Linked lists and hash maps ----------
    {
      type: "learn", door: 4,
      title: "Linked lists and hash maps.",
      points: [["Linked list", "Each item points to the next, like a treasure hunt or a playlist"], ["Easy to add or remove in the middle", "Just change the pointers"], ["Hash map", "Find by a key instantly: name → phone number, roll no → student"]],
      highlightLast: true,
      side: { label: "Real life", items: [["star", "Playlist", "song → next song"], ["search", "Phone contacts", "name → number"], ["users", "Roll number lookup", "key → value"]] }
    },
    DS(4, "Lists and Maps", {
      prompt: "A treasure hunt where each clue tells you where the next clue is. Which structure is this like?",
      options: ["Array", "Graph", "Linked list", "Stack"], answer: 2,
      hint: "Each item points to the next.",
      note: "Each clue (node) points to the next one. That’s a linked list.", badge: "route"
    }),
    DS(4, "Lists and Maps", {
      prompt: "You type a friend’s name and their number appears instantly. Which structure fits best?",
      options: ["Queue", "Hash map", "Stack", "Tree"], answer: 1,
      hint: "Look up by a key.",
      note: "Hash maps find a value by its key almost instantly, even with thousands of contacts.", badge: "search"
    }),
    DS(4, "Lists and Maps", {
      prompt: "You need to find any student’s details from their roll number, among 5,000 students, very fast. Best choice?",
      options: ["A queue of students in roll order", "A hash map keyed by roll number", "Search a list one by one every time", "A stack of student records"], answer: 1,
      hint: "Key → value.",
      note: "Checking 5,000 one by one is slow. A hash map jumps straight to the key.", badge: "users",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Trees ----------
    {
      type: "learn", door: 5,
      title: "Tree: one top, branches below.",
      points: [["Root at the top", "Children below, and their children below them"], ["Used for", "Folders, family trees, organisation charts"], ["Search trees", "Sorted trees can find things fast by halving the search"]],
      highlightLast: true,
      side: { label: "Real life", items: [["list-checks", "Folders", "C: → Users → You"], ["users", "Family tree", ""], ["landmark", "College hierarchy", "Principal → HODs → faculty"]] }
    },
    DS(5, "Trees", {
      prompt: "Your laptop’s folders: Documents contains College, which contains Sem 3 and Sem 4. Which structure?",
      options: ["Stack", "Array", "Queue", "Tree"], answer: 3,
      hint: "One top, branches below.",
      note: "Folders inside folders form a tree, with one root and branches.", badge: "list-checks"
    }),
    DS(5, "Trees", {
      prompt: "In a college org chart, the Principal is at the top. In tree words, the Principal is the…",
      options: ["Root", "Leaf", "Pointer", "Queue"], answer: 0,
      hint: "Where everything starts.",
      note: "The top node is the root. Nodes with no children are leaves.", badge: "landmark"
    }),
    DS(5, "Trees", {
      prompt: "Guessing a number from 1 to 100 by asking “higher or lower?” and halving each time is like searching a…",
      options: ["Queue", "Stack", "Linked list", "Binary search tree"], answer: 3,
      hint: "Halving each time.",
      note: "Each question cuts the options in half. That’s why sorted trees and binary search are so fast.", badge: "brain",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Graphs and picking (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: graphs, and picking the right structure.",
      points: [["Graph", "Points (nodes) connected by lines (edges)"], ["Used for", "Maps, friend networks, train and flight routes"], ["Picking", "Ask: what do I need to do fast?"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["map", "Graphs", ""], ["award", "Then your rank", ""]] }
    },
    DS(6, "Graphs and Picking", {
      double: true,
      prompt: "Google Maps finding the shortest route from your college to RK Beach. Which structure is underneath?",
      options: ["A queue of directions", "A graph of places and roads", "An array of 4 items", "A stack of turns"], answer: 1,
      hint: "Places connected by roads.",
      note: "Maps are graphs. Shortest-path algorithms search through them.", badge: "map"
    }),
    DS(6, "Graphs and Picking", {
      double: true,
      prompt: "“People you may know” on social apps uses connections between friends. Which structure?",
      options: ["Graph", "Queue", "Array", "Stack"], answer: 0,
      hint: "People connected to people.",
      note: "Friend networks are graphs. Friends of friends are two edges away.", badge: "users"
    }),
    DS(6, "Graphs and Picking", {
      double: true,
      prompt: "You’re building a customer support system where requests must be handled in the order they arrive. Best structure?",
      options: ["Queue", "Tree", "Graph", "Stack"], answer: 0,
      hint: "Fair order.",
      note: "First come, first served: a queue. Picking the right structure makes the system fair and simple.", badge: "message-circle",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "In 30 seconds: pick an app you use and name 2 data structures it probably uses, and why.", note: "The host picks the best explanation.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Data Structures, Real-Life Edition", note: "Screenshot this. Spot each one in your day today.", items: STRUCTS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, contests and real projects every week. Learn with your college friends.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
