// Placement Round 2: DSA (EduMoon Coding Club). For final year students. The advanced sequel to Placement Round.
// 6 rounds of product-company style questions: arrays, strings, searching, sorting, time complexity and interview thinking.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const PQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 75, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

// The take-home card: 8 DSA patterns and when to reach for each.
const PATTERNS = [
  ["Two pointers", "Sorted array, pairs, reversing, palindromes."],
  ["Hash map / set", "“Have I seen this before?” in O(1). Duplicates, two-sum, counting."],
  ["Binary search", "Sorted data, or “find the smallest value that works”."],
  ["Sliding window", "Best subarray or substring of a given length or rule."],
  ["Sort first", "Many problems get easy once the data is in order. O(n log n)."],
  ["Prefix sums", "Many “sum from i to j” questions answered quickly."],
  ["Stack", "Brackets, undo, “next greater element”."],
  ["Recursion / divide and conquer", "Trees, merge sort, problems that split into smaller copies."]
];

window.GAME = {
  id: "placement-round-2",
  title: "Placement Round 2: DSA",
  club: "Coding Club",
  tagline: "Product-company coding round. Arrays, strings, searching, sorting and Big O.",
  art: window.STORY_ART,
  guide: {
    years: "Final year (3rd years preparing early are welcome)", time: "40 minutes", level: "Advanced", mono: true,
    about: "The advanced sequel to Placement Round. In 6 rounds, teams solve the kind of DSA questions product companies ask: tracing array and string code, binary search, sorting passes, time complexity, and finally interview-style thinking about the best approach. Every team gets an offer letter based on its score.",
    outcomes: "8 DSA patterns and when to use each, a feel for Big O that helps them pick fast solutions, and practice thinking aloud the way interviewers want.",
    tone: "These questions are hard on purpose. Tell teams it’s normal to get some wrong; that’s how everyone learns DSA. When you reveal, trace the code slowly on the screen, and ask a team that got it right to explain how they thought.",
    extra: [["Played Placement Round first?", "This game assumes students know loops, arrays and functions. If your group is mostly 1st or 2nd year, run Placement Round or Escape the Lab instead."]]
  },
  words: {
    round: "Round", unlocked: "Cleared", badgeLabel: "Round cleared",
    rulesEyebrow: "How the coding round works", rulesTitle: "Learn the pattern. Solve it. Get the offer.",
    learnText: "The host teaches the pattern behind the questions.", crackTitle: "Solve",
    crackText: "Solve it and lock in your answer on the phone.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody cleared this one. It catches people in real interviews too!", cracked: "cleared it",
    next: "Next round →", finale: "Next →", winner: "got the best offer!", endLine: "Placement Round 2 complete!"
  },
  offerEyebrow: "EduMoon Tech · Coding round results",
  offerTitle: "Your offer letters are here",
  offers: [
    { min: 0.7, icon: "rocket", title: "Product company offer", text: "You think in patterns. Keep solving 2 problems a day and you’re ready." },
    { min: 0.45, icon: "briefcase", title: "Strong offer, next round", text: "Solid! Revise Big O and binary search, then try again." },
    { min: 0.2, icon: "landmark", title: "Service company offer", text: "Good base. Learn one pattern from the card each week." },
    { min: 0, icon: "book-open", title: "Practice offer", text: "Everyone starts here. Play Placement Round 1, then come back." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Tech · Coding round · Today",
      title: "You cleared the aptitude test. Now the real coding round. 6 rounds stand between your team and a product-company offer.",
      cards: [["code", "Real DSA questions, like product-company tests"], ["zap", "Faster correct answers score more"], ["briefcase", "Your score decides the offer"]]
    },
    { type: "rules" },

    // ---------- Round 1: Arrays ----------
    {
      type: "learn", door: 1,
      title: "Arrays: one pass is often enough.",
      points: [["Keep track as you go", "Store the best value so far in a variable"], ["Two values at once", "Largest AND second largest in a single loop"], ["Watch the edge cases", "Duplicates, negative numbers, an array of size 1"]],
      highlightLast: true,
      code: ["int best = a[0];", "for (int i = 1; i < n; i++)", "    if (a[i] > best) best = a[i];"],
      output: "best = the largest value, in one pass"
    },
    PQ(1, "Arrays", {
      kind: "number", time: 120,
      prompt: "Second largest, in one pass. What does this print?",
      code: ["int a[] = {4, 9, 2, 9, 7};", "int first = a[0], second = -1;", "for (int i = 1; i < 5; i++) {", "    if (a[i] > first) { second = first; first = a[i]; }", "    else if (a[i] > second && a[i] != first) second = a[i];", "}", "printf(\"%d\", second);"],
      answer: 7,
      hint: "Track first and second after every value: 9, then 2, then 9, then 7.",
      trace: [["start", "first = 4, second = -1"], ["9", "first = 9, second = 4"], ["2", "no change"], ["9", "equals first, skipped"], ["7", "7 > 4 and not 9 → second = 7"]],
      note: "Said 9? The second 9 is a duplicate of the largest, so it’s skipped. Duplicates are the classic trap in this question.", badge: "list-checks"
    }),
    PQ(1, "Arrays", {
      prompt: "To reverse an array of n elements in place, how many swaps do you need?",
      options: ["2n swaps", "n swaps", "⌊n/2⌋ swaps", "n − 1 swaps"], answer: 2,
      hint: "Swap the first with the last, then move both ends inwards. When do they meet?",
      note: "One swap fixes two positions, so n / 2 swaps. For n = 5, it’s 2; the middle element stays.", badge: "route"
    }),
    PQ(1, "Arrays", {
      prompt: "What’s the fastest way to check whether an array of n numbers has a duplicate?",
      options: ["Print the array and look for repeated numbers", "A hash set, checking each number: O(n)", "Sort it in descending order twice", "Compare every pair of elements: O(n²)"], answer: 1,
      hint: "Which tool answers “have I seen this before?” instantly?",
      note: "A hash set does it in one pass. Sorting first, O(n log n), also works if you can’t use extra memory.", badge: "search",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Strings ----------
    {
      type: "learn", door: 2,
      title: "Strings are arrays of characters. Two pointers work beautifully.",
      points: [["One pointer at each end", "i starts at 0, j at length − 1"], ["Move them towards each other", "i++ and j-- until they meet"], ["Stop when i >= j", "The middle character never needs checking"]],
      highlightLast: true,
      code: ["int i = 0, j = strlen(s) - 1;", "while (i < j) {", "    /* compare s[i] and s[j] */", "    i++; j--;", "}"],
      output: "Palindromes, reversing, pair problems"
    },
    PQ(2, "Strings", {
      kind: "number", time: 100,
      prompt: "Palindrome check on \"LEVEL\". How many times does the loop body run?",
      code: ["char s[] = \"LEVEL\";", "int i = 0, j = strlen(s) - 1, ok = 1;", "while (i < j) {", "    if (s[i] != s[j]) ok = 0;", "    i++; j--;", "}"],
      answer: 2,
      hint: "Write i and j for each loop: (0, 4), then…",
      trace: [["i = 0, j = 4", "L and L"], ["i = 1, j = 3", "E and E"], ["i = 2, j = 2", "i < j is false, stop"]],
      note: "Only 2 comparisons for 5 letters. Two pointers check a palindrome in n / 2 steps.", badge: "check"
    }),
    PQ(2, "Strings", {
      kind: "number", time: 100,
      prompt: "How many vowels does this count?",
      code: ["char s[] = \"EDUMOON\";", "int count = 0;", "for (int i = 0; s[i] != '\\0'; i++)", "    if (strchr(\"AEIOU\", s[i])) count++;", "printf(\"%d\", count);"],
      answer: 4,
      hint: "Go letter by letter: E, D, U, M, O, O, N.",
      trace: [["E", "vowel, 1"], ["D", "no"], ["U", "vowel, 2"], ["M", "no"], ["O, O", "vowels, 3 and 4"], ["N", "no"]],
      note: "E, U, O, O. strchr checks whether the letter appears in \"AEIOU\". The loop stops at '\\0', the end of every C string.", badge: "spell-check"
    }),
    PQ(2, "Strings", {
      prompt: "Reverse the order of the words in “I love Vizag”. What’s the result?",
      options: ["I evol gaziV", "love Vizag I", "gaziV evol I", "Vizag love I"], answer: 3,
      hint: "The words move. The letters inside each word don’t.",
      note: "A common trick: reverse the whole string, then reverse each word back. “I love Vizag” → “gaziV evol I” → “Vizag love I”.", badge: "route",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Searching ----------
    {
      type: "learn", door: 3,
      title: "Binary search halves the problem every step.",
      points: [["Only on sorted data", "Like finding a word in a dictionary"], ["Look at the middle", "Too small? Go right. Too big? Go left"], ["Very fast", "1,000 items in about 10 steps. 1 million in about 20"]],
      highlightLast: true,
      side: { label: "Linear vs binary", items: [["list-checks", "Linear search", "Check one by one. Up to n steps"], ["zap", "Binary search", "Halve each time. About log₂ n steps"], ["target", "Interview tip", "“Sorted” in a question is a hint: think binary search"]] }
    },
    PQ(3, "Searching", {
      prompt: "Binary search only works when…",
      options: ["The array is sorted", "All the numbers are positive", "The array is small", "The array has an even number of items"], answer: 0,
      hint: "How does it know which half to throw away?",
      note: "Binary search decides left or right by comparing with the middle. That only makes sense if the data is sorted.", badge: "list-checks"
    }),
    PQ(3, "Searching", {
      kind: "number", time: 90,
      prompt: "About how many steps does binary search need, at most, for 1,000 sorted items?",
      answer: 10,
      hint: "How many times can you halve 1,000 before you reach 1? 2 to the power of what is about 1,000?",
      trace: [["2¹⁰", "= 1,024"], ["1,000 → 500 → 250 → …", "about 10 halvings"]],
      note: "About 10. Linear search might take 1,000 steps. That difference is why Big O matters.", badge: "zap"
    }),
    PQ(3, "Searching", {
      kind: "number", time: 120,
      prompt: "Binary search for 42. How many times is the middle checked before 42 is found?",
      code: ["int a[] = {3, 8, 15, 21, 30, 42, 57};", "int lo = 0, hi = 6, steps = 0;", "while (lo <= hi) {", "    int mid = (lo + hi) / 2; steps++;", "    if (a[mid] == 42) break;", "    else if (a[mid] < 42) lo = mid + 1;", "    else hi = mid - 1;", "}", "printf(\"%d\", steps);"],
      answer: 2,
      hint: "First mid = (0 + 6) / 2 = 3. What’s a[3]?",
      trace: [["mid = 3", "a[3] = 21 < 42 → lo = 4"], ["mid = 5", "a[5] = 42, found"]],
      note: "2 checks to find 42 in 7 items. Linear search would have needed 6.", badge: "target",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain binary search to the room using a dictionary or a phone contact list.", note: "Interviewers love candidates who can explain an algorithm simply.", points: 100 },

    // ---------- Round 4: Sorting ----------
    {
      type: "learn", door: 4,
      title: "Bubble sort: the biggest value bubbles to the end each pass.",
      points: [["Compare neighbours", "If the left one is bigger, swap them"], ["One pass", "The largest value ends up last"], ["Too slow for big data", "O(n²). Real systems use O(n log n) sorts like merge sort or quicksort"]],
      highlightLast: true,
      code: ["{3, 1, 2}", "compare 3,1 → swap → {1, 3, 2}", "compare 3,2 → swap → {1, 2, 3}"],
      output: "After pass 1, 3 is in its final place"
    },
    PQ(4, "Sorting", {
      prompt: "Bubble sort (ascending) on {5, 1, 4, 2, 8}. What does the array look like after ONE pass?",
      options: ["{5, 1, 4, 2, 8}", "{1, 2, 4, 5, 8}", "{1, 4, 2, 5, 8}", "{1, 5, 4, 2, 8}"], answer: 2,
      hint: "Compare 5 and 1, then 5 and 4, then 5 and 2, then 5 and 8.",
      trace: [["5, 1", "swap → 1 5 4 2 8"], ["5, 4", "swap → 1 4 5 2 8"], ["5, 2", "swap → 1 4 2 5 8"], ["5, 8", "no swap"]],
      note: "Said fully sorted? One pass only guarantees the largest is at the end. 4 and 2 are still out of order.", badge: "chart-column"
    }),
    PQ(4, "Sorting", {
      prompt: "After k passes of bubble sort (ascending), what is guaranteed?",
      options: ["The array is exactly half sorted", "Nothing is guaranteed until it finishes", "The first k elements are sorted", "The k largest are in final place"], answer: 3,
      hint: "What happened to the biggest value in one pass?",
      note: "Each pass parks the next largest value at the end. That’s why later passes can stop one position earlier.", badge: "list-checks"
    }),
    PQ(4, "Sorting", {
      prompt: "You need to sort 1 million random numbers. Which is the best choice?",
      options: ["Merge sort or quicksort", "Sort by hand on paper", "Bubble sort, it’s simplest", "Selection sort, it’s stable"], answer: 0,
      hint: "Which ones are O(n log n)?",
      note: "Merge sort and quicksort are O(n log n). For a million items that’s about 20 million steps, versus a trillion for O(n²).", badge: "rocket",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Time complexity ----------
    {
      type: "learn", door: 5,
      title: "Big O: how the work grows as the input grows.",
      points: [["One loop over n", "O(n)"], ["A loop inside a loop", "O(n²)"], ["Halving or doubling each step", "O(log n). Very fast"]],
      highlightLast: true,
      side: { label: "For n = 1,000,000", items: [["zap", "O(log n)", "About 20 steps"], ["check", "O(n log n)", "About 20 million steps. Fine"], ["alarm-clock", "O(n²)", "A trillion steps. Too slow"]] }
    },
    PQ(5, "Big O", {
      prompt: "What’s the time complexity?",
      code: ["for (int i = 0; i < n; i++)", "    for (int j = 0; j < n; j++)", "        count++;"],
      options: ["O(log n)", "O(n²)", "O(2n)", "O(n)"], answer: 1,
      hint: "For each i, how many times does the inner loop run?",
      note: "n times n. Nested loops over the same input are the most common O(n²) pattern.", badge: "chart-column"
    }),
    PQ(5, "Big O", {
      prompt: "What’s the time complexity?",
      code: ["for (int i = 1; i < n; i = i * 2)", "    count++;"],
      options: ["O(log n)", "O(n²)", "O(1)", "O(n)"], answer: 0,
      hint: "i goes 1, 2, 4, 8, 16… How many steps to reach n?",
      note: "Doubling (or halving) each step gives O(log n). For n = 1,000,000 it’s only about 20 steps.", badge: "zap"
    }),
    PQ(5, "Big O", {
      prompt: "n = 1,000,000 and you have about 1 second. Which solution will finish in time?",
      options: ["O(n²)", "O(n³)", "O(2ⁿ)", "O(n log n)"], answer: 3,
      hint: "Computers do roughly 100 million simple steps a second.",
      note: "O(n log n) is about 20 million steps: fine. O(n²) is a trillion: far too slow. Coding tests often have exactly this limit.", badge: "clock",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Interview thinking (double) ----------
    {
      type: "learn", door: 6,
      title: "In interviews, how you think matters as much as the answer.",
      points: [["Start with brute force", "Say it out loud, with its Big O"], ["Then improve it", "Ask: can a hash map, sorting or two pointers help?"], ["Think aloud", "Silence is the worst answer. A partial idea is better"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["lightbulb", "Interview-style questions", "Choose the best approach"], ["mic", "Then the final challenge", "Explain like it’s a real interview"]] }
    },
    PQ(6, "Interview Thinking", {
      double: true,
      prompt: "Unsorted array. Find two numbers that add up to a target. What’s the best approach?",
      options: ["Check target − x in a hash set: O(n)", "Sort the array and print it out", "Use binary search on the unsorted array", "Check every possible pair: O(n²)"], answer: 0,
      hint: "If you need 10 and you see 3, what number are you hoping you’ve already seen?",
      note: "This is the famous two-sum problem. One pass with a hash set turns O(n²) into O(n).", badge: "key"
    }),
    PQ(6, "Interview Thinking", {
      double: true,
      prompt: "Same problem, but the array is SORTED and you can’t use extra memory. Best approach?",
      options: ["Nested loops over every pair", "Two pointers, one at each end", "Sort it again first, then search", "A hash set of all the values"], answer: 1,
      hint: "Remember the strings round.",
      note: "Two pointers: O(n) time and O(1) extra space. Sorted data is a strong hint for two pointers or binary search.", badge: "route"
    }),
    PQ(6, "Interview Thinking", {
      double: true,
      prompt: "The interviewer asks: “Can you do better than O(n²)?” You don’t know yet. Best response?",
      options: ["“No, this is the best possible solution for this problem.”", "“I don’t know.” and wait", "Think aloud: “If I could look up values fast, a hash map…”", "Stay silent and think"], answer: 2,
      hint: "What does the interviewer want to see?",
      note: "Thinking aloud shows your process, and interviewers often give hints when they can follow you. Silence gives them nothing to score.", badge: "message-circle",
      board: true, boardLabel: "after Round 6"
    }),

    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Explain your approach to two-sum in 30 seconds, like a real interview.", note: "Brute force first, then the better idea, with Big O for both.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 DSA Patterns Cheat Sheet", note: "Screenshot this. For every new problem, ask: which pattern fits?", items: PATTERNS },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Placement rounds, bug hunts and DSA practice every week. Get placed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
