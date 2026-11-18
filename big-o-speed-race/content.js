// Big-O Speed Race (EduMoon Coding Club). Advanced: for 2nd year and above.
// How fast code grows with input size: O(1), O(n), O(n²), O(log n), O(n log n), space complexity, and picking the right approach for placement-style problems. Code is in Python-style pseudocode.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const BO = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const BON = (round, name, extra) => BO(round, name, Object.assign({ kind: "number", time: 60 }, extra));

// The take-home card: Big-O in 8 lines.
const BIGOCARD = [
  ["O(1)", "Constant: same time for any n. Example: arr[5], a dictionary lookup."],
  ["O(log n)", "Halve the problem each step. Example: binary search on sorted data."],
  ["O(n)", "One pass over the data. Example: find the max in a list."],
  ["O(n log n)", "Good sorting. Example: merge sort, Python’s sorted()."],
  ["O(n²)", "A loop inside a loop. Example: compare every pair."],
  ["Drop the small stuff", "O(2n + 5) is O(n). Keep only the biggest term, no constants."],
  ["Space too", "Extra memory also has a Big-O. A new list of size n is O(n) space."],
  ["Interview tip", "Say the brute force and its Big-O first, then improve it."]
];

window.GAME = {
  id: "big-o-speed-race",
  title: "Big-O Speed Race",
  club: "Coding Club",
  tagline: "Your code works on 10 items. Will it survive 10 lakh? Race the Big-O.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year and above", time: "40 minutes", level: "Advanced", mono: true,
    about: "Arjun’s solution passed the sample tests in a placement round but failed with “Time Limit Exceeded” on the hidden ones. In 6 rounds, teams learn Big-O: constant and linear time, nested loops, logarithmic time and binary search, sorting and dropping constants, space complexity, and choosing the fastest approach for common interview problems. Code is in simple Python-style pseudocode.",
    outcomes: "Reading the Big-O of simple code, comparing growth rates, knowing why binary search and hashing are fast, and explaining time and space trade-offs in an interview.",
    tone: "Make it a race. Use the idea of input size growing from 10 to 10 lakh. Draw quick growth lines on the board if you can. Reward clear explanations, not just right answers.",
    extra: [["Before you start", "Students should know loops, lists and functions. Play Stacks and Queues first for a warm-up."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Optimised",
    rulesEyebrow: "How Big-O Speed Race works", rulesTitle: "Read the code. Find its Big-O. Beat the time limit.",
    learnText: "The host explains one Big-O idea with code.", crackTitle: "Answer",
    crackText: "Pick your answer on your phone and lock it in.",
    rulesExtra: "Some questions need a typed number. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Time Limit Exceeded for everyone!", cracked: "optimised it",
    next: "Next round →", finale: "Next →", winner: "beat the time limit!", endLine: "Arjun’s code now passes every hidden test."
  },
  offerEyebrow: "EduMoon Coding Club · Speed level",
  offerTitle: "Your Big-O level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Complexity Champion", text: "Interview-ready. Solve two medium problems and state their Big-O out loud." },
    { min: 0.45, icon: "zap", title: "Fast Coder", text: "Strong! Practise spotting nested loops in your old code." },
    { min: 0.2, icon: "timer", title: "Getting Faster", text: "Good start. Learn O(1), O(n) and O(n²) first; the rest builds on them." },
    { min: 0, icon: "book-open", title: "Speed Learner", text: "Everyone starts here. Keep the card below next to your laptop." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Time Limit Exceeded",
      title: "Arjun’s code passed the sample tests, then failed every hidden test with “Time Limit Exceeded”. The code was correct. So what went wrong?",
      cards: [["timer", "How code time grows"], ["zap", "Faster approaches"], ["trophy", "Your score decides your Big-O level"]]
    },
    { type: "rules" },

    // ---------- Round 1: O(1) and O(n) ----------
    {
      type: "learn", door: 1,
      title: "Big-O tells you how time grows as input grows.",
      points: [["n", "The input size, like the length of a list"], ["O(1)", "Same steps no matter how big n is"], ["O(n)", "Steps grow in step with n: double n, double time"]],
      highlightLast: true,
      code: ["def first(arr):", "    return arr[0]          # O(1)", "", "def total(arr):", "    s = 0", "    for x in arr:          # runs n times", "        s += x", "    return s               # O(n)"],
      output: "first: 1 step for any n · total: n steps"
    },
    BO(1, "Constant and Linear", {
      prompt: "What is the Big-O of getting arr[500] from a list?",
      options: ["O(1)", "O(n)", "O(n²)", "O(log n)"], answer: 0,
      hint: "Does it depend on the list length?",
      note: "Index access is O(1). The computer jumps straight to the position.", badge: "zap"
    }),
    BO(1, "Constant and Linear", {
      prompt: "Finding the largest number in an unsorted list by checking each one. Big-O?",
      options: ["O(n)", "O(1)", "O(n²)", "O(log n)"], answer: 0,
      hint: "You must look at every item once.",
      note: "One pass over n items is O(n). You can’t skip any, the max could be anywhere.", badge: "search"
    }),
    BON(1, "Constant and Linear", {
      prompt: "An O(n) function takes 2 ms for n = 1,000. Roughly how many ms for n = 5,000?",
      answer: 10,
      hint: "5 times the input, so about 5 times the time.",
      note: "About 10 ms. Linear time grows in direct proportion to n.", badge: "timer",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Nested loops ----------
    {
      type: "learn", door: 2,
      title: "A loop inside a loop is usually O(n²).",
      points: [["Nested loops", "n times n steps"], ["Pairs", "Comparing every pair of items is O(n²)"], ["Danger", "Fine for 100 items, too slow for 10 lakh"]],
      highlightLast: true,
      code: ["def has_duplicate(arr):", "    for i in range(len(arr)):", "        for j in range(i + 1, len(arr)):", "            if arr[i] == arr[j]:", "                return True", "    return False             # O(n²)"],
      output: "n = 1,000 → about 5 lakh comparisons"
    },
    BO(2, "Nested Loops", {
      prompt: "Two loops, one inside the other, each running n times. Big-O?",
      options: ["O(2n)", "O(n²)", "O(n)", "O(n log n)"], answer: 1,
      hint: "n times n.",
      note: "n × n = n². Two loops one after the other (not nested) would be O(n).", badge: "route"
    }),
    BO(2, "Nested Loops", {
      prompt: "One loop runs n times, THEN a separate loop runs n times. Big-O?",
      options: ["O(n²)", "O(n)", "O(1)", "O(2ⁿ)"], answer: 1,
      hint: "One after the other, not inside.",
      note: "n + n = 2n, and we drop constants, so O(n).", badge: "list-checks"
    }),
    BON(2, "Nested Loops", {
      prompt: "An O(n²) program does 100 steps for n = 10. About how many steps for n = 100?",
      answer: 10000,
      hint: "10 times the input means 10² = 100 times the steps.",
      note: "10,000 steps. Multiply n by 10 and O(n²) grows 100 times. That is why Arjun’s code timed out.", badge: "chart-column",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: O(log n) ----------
    {
      type: "learn", door: 3,
      title: "O(log n): cut the problem in half every step.",
      points: [["Binary search", "Look at the middle of sorted data, drop half"], ["Fast", "10 lakh items need only about 20 steps"], ["Needs sorted data", "It won’t work on an unsorted list"]],
      highlightLast: true,
      code: ["def binary_search(arr, target):", "    lo, hi = 0, len(arr) - 1", "    while lo <= hi:", "        mid = (lo + hi) // 2", "        if arr[mid] == target: return mid", "        if arr[mid] < target: lo = mid + 1", "        else: hi = mid - 1", "    return -1               # O(log n)"],
      output: "1,024 items → at most about 10 checks"
    },
    BO(3, "Logarithmic", {
      prompt: "What does binary search need from the data?",
      options: ["It must be sorted", "It must be very small", "It must be all strings", "It must have no zeros"], answer: 0,
      hint: "How does it know which half to drop?",
      note: "Only sorted data tells you whether the target is left or right of the middle.", badge: "list-checks"
    }),
    BON(3, "Logarithmic", {
      prompt: "Binary search on 1,024 sorted items. At most about how many halvings until 1 item is left?",
      answer: 10,
      hint: "2 to the power of what is 1,024?",
      note: "10, because 2¹⁰ = 1,024. That is O(log n): doubling the data adds just one step.", badge: "chart-column"
    }),
    BO(3, "Logarithmic", {
      prompt: "Which grows SLOWEST as n becomes very large?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"], answer: 1,
      hint: "Slowest growth means fastest code.",
      note: "Order from fastest to slowest: O(1), O(log n), O(n), O(n log n), O(n²).", badge: "timer",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain binary search to someone who has never coded, using a dictionary or a phone contact list.", note: "Open in the middle, drop half, repeat. 30 seconds.", points: 100 },

    // ---------- Round 4: Sorting and dropping terms ----------
    {
      type: "learn", door: 4,
      title: "Sorting costs, and keeping only the biggest term.",
      points: [["Good sorts", "Merge sort and Python’s sorted() are O(n log n)"], ["Simple sorts", "Bubble sort is O(n²)"], ["Simplify", "O(n² + n + 10) is just O(n²)"]],
      highlightLast: true,
      code: ["def solve(arr):", "    arr = sorted(arr)       # O(n log n)", "    for x in arr:           # O(n)", "        print(x)", "# total: O(n log n + n) → O(n log n)"],
      output: "Keep the biggest term"
    },
    BO(4, "Sorting", {
      prompt: "What is the Big-O of a good general sort like merge sort?",
      options: ["O(n²)", "O(log n)", "O(1)", "O(n log n)"], answer: 3,
      hint: "Between O(n) and O(n²).",
      note: "Merge sort splits in halves (log n levels) and merges n items at each level.", badge: "list-checks"
    }),
    BO(4, "Sorting", {
      prompt: "Simplify O(3n² + 5n + 100).",
      options: ["O(3n²)", "O(n² + n)", "O(n)", "O(n²)"], answer: 3,
      hint: "Keep the biggest term and drop constants.",
      note: "For large n, n² dominates. Constants like 3 are dropped too.", badge: "chart-column"
    }),
    BO(4, "Sorting", {
      prompt: "Sort a list, then loop through it once. Total Big-O?",
      options: ["O(n)", "O(n²)", "O(n log n)", "O(n² log n)"], answer: 2,
      hint: "Add them, keep the bigger.",
      note: "O(n log n) + O(n) = O(n log n).", badge: "route",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Space and the hash trick ----------
    {
      type: "learn", door: 5,
      title: "Space complexity, and trading memory for speed.",
      points: [["Space", "How much extra memory the code uses"], ["Set or dictionary", "Lookups take O(1) on average"], ["Trade-off", "Use O(n) memory to go from O(n²) to O(n) time"]],
      highlightLast: true,
      code: ["def has_duplicate(arr):", "    seen = set()", "    for x in arr:", "        if x in seen: return True", "        seen.add(x)", "    return False   # O(n) time, O(n) space"],
      output: "From O(n²) to O(n), using a set"
    },
    BO(5, "Space and Speed", {
      prompt: "The set version of has_duplicate makes a set that can hold all n items. Extra space?",
      options: ["O(n)", "O(1)", "O(n²)", "O(log n)"], answer: 0,
      hint: "How big can the set get?",
      note: "The set can grow to n items, so O(n) extra space.", badge: "list-checks"
    }),
    BO(5, "Space and Speed", {
      prompt: "Checking “x in my_set” in Python takes about how long, on average?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: 3,
      hint: "Sets use hashing.",
      note: "Hashing finds the item almost directly. “x in my_list” would be O(n).", badge: "zap"
    }),
    BO(5, "Space and Speed", {
      prompt: "Why is the set version of has_duplicate faster than the nested-loop version?",
      options: ["Sets automatically sort the data first", "It uses memory to avoid comparing pairs", "Python runs set code on a faster CPU core", "It checks fewer items from the list"], answer: 1,
      hint: "It remembers what it has seen.",
      note: "A classic trade: O(n) extra memory turns O(n²) time into O(n).", badge: "brain",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Interview picks (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: pick the fastest approach, like in an interview.",
      points: [["Step 1", "Say the brute force and its Big-O"], ["Step 2", "Find the slow part (usually a nested loop or repeated search)"], ["Step 3", "Use sorting, a set or binary search to speed it up"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game"], ["target", "Interview style", "Pick the best approach"], ["mic", "Then the final challenge", "Explain your fix"]] }
    },
    BO(6, "Interview Picks", {
      double: true,
      prompt: "Find if any two numbers in an unsorted list add up to a target. Fastest common approach?",
      options: ["Check every pair with two loops: O(n²)", "Sort, then check every pair: O(n² log n)", "One pass with a set of seen numbers: O(n)", "Try every subset of numbers: O(2ⁿ)"], answer: 2,
      hint: "For each x, is target − x already seen?",
      note: "The classic “two sum”: store seen numbers in a set and check target − x in O(1).", badge: "target"
    }),
    BO(6, "Interview Picks", {
      double: true,
      prompt: "You must search a sorted list of 10 lakh roll numbers many times. Best approach?",
      options: ["Linear search each time: O(n)", "Sort again before each search", "Binary search each time: O(log n)", "Compare every pair of roll numbers"], answer: 2,
      hint: "It is already sorted.",
      note: "About 20 steps per search instead of up to 10 lakh.", badge: "search"
    }),
    BON(6, "Interview Picks", {
      double: true,
      prompt: "n = 10,000. How many times faster is O(n) than O(n²) here? (Steps: n vs n².)",
      answer: 10000,
      hint: "n² ÷ n = n.",
      note: "10,000 times faster. That gap is the difference between passing and Time Limit Exceeded.", badge: "zap",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best explanation wins +200", prompt: "In 30 seconds, explain how you would speed up “find duplicates in a list” from O(n²) to O(n), and what it costs.", note: "Brute force, the slow part, the fix, the trade-off. The host picks the clearest answer.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Big-O in 8 Lines", note: "Screenshot this. Say the Big-O of every solution you write this week.", items: BIGOCARD },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, DSA practice and project nights every week. Beginners welcome.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
