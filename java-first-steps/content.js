// Java First Steps (EduMoon Coding Club). For 1st and 2nd year, or anyone starting Java.
// Java from zero: the main method, printing, data types, if/else, loops, strings, and a first look at methods and objects.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (pick what happens, then tap the buggy line)

const VQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 50, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const VN = (round, name, extra) => VQ(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const VBUG = { kind: "bug", time: 75, step1: "What happens?", step2: "Tap the buggy line", say1: "First pick what happens.", say2: "Now tap the line with the bug." };

// The take-home card: 10 Java basics.
const JAVA = [
  ["public static void main(String[] args)", "Where every Java program starts running."],
  ["System.out.println(x);", "Prints x and moves to a new line. print() stays on the same line."],
  ["Every statement ends with ;", "A missing semicolon is the most common first error."],
  ["int, double, boolean, String", "Whole numbers, decimals, true/false, text. String has a capital S."],
  ["7 / 2 is 3", "int divided by int drops the decimal. Use 7.0 / 2 for 3.5."],
  ["if (marks >= 35) { … }", "Curly braces group the lines that belong together."],
  ["for (int i = 0; i < n; i++)", "Runs n times: i is 0 to n − 1."],
  ["a.equals(b)", "Compare Strings with .equals(), not ==."],
  ["Methods", "static int add(int a, int b) { return a + b; }"],
  ["Objects", "Student s = new Student(); A class is the plan, an object is the real thing."]
];

window.GAME = {
  id: "java-first-steps",
  title: "Java First Steps",
  club: "Coding Club",
  tagline: "Java runs banking apps, Android and placement exams. Take your first steps.",
  art: window.STORY_ART,
  guide: {
    years: "1st and 2nd year (anyone starting Java)", time: "40 minutes", level: "Beginner", mono: true,
    about: "Lakshmi’s college starts Java next semester, and her senior says, “Java looks scary, but it is just rules.” In 6 rounds, teams learn the shape of a Java program, printing, data types, if/else, loops, strings and a first look at methods and objects. They predict outputs and find the classic beginner mistakes, like a missing semicolon and comparing Strings with ==.",
    outcomes: "Reading a simple Java program, the main data types, integer division, loops, String comparison with .equals(), and what methods and objects are.",
    tone: "Java has a lot of words before anything happens (public static void main…). Reassure students: they do not need to memorise it today, just recognise it. Celebrate correct reasoning. If you have a laptop, run the code in an online Java compiler after the reveal.",
    extra: [["Next steps", "After this game, students who know C can compare with C++ Classes and Objects; anyone can follow up with Placement Round."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Compiled",
    rulesEyebrow: "How Java First Steps works", rulesTitle: "Learn one Java idea. Read the code. Predict what happens.",
    learnText: "The host explains one Java idea.", crackTitle: "Predict",
    crackText: "Work out what the program does and lock it in.",
    rulesExtra: "Bug questions: <b>100</b> for what happens + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Java trips up beginners here all the time!", cracked: "compiled it",
    next: "Next round →", finale: "Next →", winner: "are today’s Java starters!", endLine: "Lakshmi is ready for Java class."
  },
  offerEyebrow: "EduMoon Coding Club · Java level",
  offerTitle: "Your Java level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Java Ready", text: "You read Java well. Write your first program this week." },
    { min: 0.45, icon: "code", title: "Java Learner", text: "Strong! Revise the 10 basics below and try them in an online compiler." },
    { min: 0.2, icon: "compass", title: "Java Explorer", text: "Good start. Focus on types and loops first." },
    { min: 0, icon: "book-open", title: "Java Visitor", text: "Everyone starts here. Play Flowchart Logic, then come back." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Java next semester",
      title: "Lakshmi’s Java class starts next semester. Her senior says, “Java looks scary, but it is just rules.” Can your team help her learn the rules?",
      cards: [["code", "Real Java, short programs"], ["search", "Predict the output and find the bug"], ["trophy", "Your score decides your Java level"]]
    },
    { type: "rules" },

    // ---------- Round 1: The shape of a Java program ----------
    {
      type: "learn", door: 1,
      title: "Every Java program has the same outer shell.",
      points: [["class Main { … }", "All Java code lives inside a class"], ["public static void main(String[] args)", "The program starts running here"], ["System.out.println(\"Hi\");", "Prints Hi. Every statement ends with ;"]],
      highlightLast: true,
      code: ["public class Main {", "  public static void main(String[] args) {", "    System.out.println(\"Hello, Vizag!\");", "  }", "}"],
      output: "Hello, Vizag!"
    },
    VQ(1, "First Program", {
      prompt: "Where does a Java program start running?",
      options: ["At the first line of the file", "At the last closing brace", "Inside the main method", "Inside System.out"], answer: 2,
      hint: "Look for the method with a special name.",
      note: "Java always starts at public static void main(String[] args). Everything else is called from there.", badge: "rocket"
    }),
    VQ(1, "First Program", {
      prompt: "What does this print?",
      code: ["System.out.print(\"Hi \");", "System.out.print(\"there\");"],
      options: ["Hi and there on two lines", "Hithere", "Nothing, it needs println", "Hi there (on one line)"], answer: 3,
      hint: "print or println?",
      note: "print stays on the same line. println adds a new line after printing. The space inside \"Hi \" keeps the words apart.", badge: "code"
    }),
    VQ(1, "First Program", Object.assign({}, VBUG, {
      prompt: "Lakshmi’s first program. What happens, and which line has the bug?",
      code: ["public class Main {", "  public static void main(String[] args) {", "    System.out.println(\"Hello\")", "  }", "}"],
      outputOptions: ["It prints Hello", "It does not compile", "It prints nothing"], outputAnswer: 1, bugLine: 2,
      bugText: "the statement is missing its semicolon. Fix: System.out.println(\"Hello\");",
      hint: "Look at the end of each statement.",
      note: "Java will not even run without the ;. The error message may point to the next line, so look one line up.", badge: "search",
      board: true, boardLabel: "after Round 1"
    })),

    // ---------- Round 2: Data types ----------
    {
      type: "learn", door: 2,
      title: "In Java, every variable has a type.",
      points: [["int marks = 90;", "Whole numbers"], ["double cgpa = 8.4;", "Numbers with decimals"], ["String name = \"Ravi\"; boolean passed = true;", "Text, and true/false"]],
      highlightLast: true,
      code: ["int a = 7;", "int b = 2;", "System.out.println(a / b);"],
      output: "3 (int / int drops the decimal)"
    },
    VN(2, "Data Types", {
      prompt: "What does this print?",
      code: ["int total = 17;", "int people = 5;", "System.out.println(total / people);"],
      answer: 3,
      hint: "Both are int. What happens to the decimal?",
      note: "17 / 5 is 3.4, but int / int keeps only the whole part: 3. Use 17.0 / 5 to get 3.4.", badge: "chart-column"
    }),
    VQ(2, "Data Types", {
      prompt: "Which type should store a student’s CGPA, like 8.45?",
      options: ["double", "int", "boolean", "String"], answer: 0,
      hint: "It has a decimal point.",
      note: "double stores decimals. int would lose the .45.", badge: "graduation-cap"
    }),
    VQ(2, "Data Types", {
      prompt: "Which line will NOT compile?",
      options: ["int age = 19;", "boolean ok = true;", "String city = \"Vizag\";", "int name = \"Ravi\";"], answer: 3,
      hint: "Does the value match the type?",
      note: "\"Ravi\" is text, but the box was declared as int. Java checks types before running, which catches mistakes early.", badge: "x",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: if / else ----------
    {
      type: "learn", door: 3,
      title: "if / else if / else: the first true one wins.",
      points: [["if (marks >= 75)", "Checks a condition"], ["else if (marks >= 35)", "Checked only if the first was false"], ["else", "Runs when nothing above was true"]],
      highlightLast: true,
      code: ["int marks = 60;", "if (marks >= 75) System.out.println(\"Distinction\");", "else if (marks >= 35) System.out.println(\"Pass\");", "else System.out.println(\"Fail\");"],
      output: "Pass"
    },
    VQ(3, "if / else", {
      prompt: "What does this print?",
      code: ["int marks = 80;", "if (marks >= 35) {", "  System.out.println(\"Pass\");", "} else if (marks >= 75) {", "  System.out.println(\"Distinction\");", "}"],
      options: ["Pass", "Distinction", "Pass and Distinction", "Nothing"], answer: 0,
      hint: "Which condition is checked first?",
      note: "80 >= 35 is true, so Pass prints and the rest is skipped. Put the strictest condition first.", badge: "list-checks"
    }),
    VQ(3, "if / else", {
      prompt: "What does this print?",
      code: ["int age = 18;", "if (age > 18) {", "  System.out.println(\"Adult\");", "} else {", "  System.out.println(\"Not yet\");", "}"],
      options: ["Adult", "Not yet", "Adult and Not yet", "An error"], answer: 1,
      hint: "Is 18 greater than 18?",
      note: "18 > 18 is false. If 18 should count, use >=. Edges matter.", badge: "check"
    }),
    VQ(3, "if / else", {
      prompt: "What does && mean in: if (attendance >= 75 && marks >= 35)",
      options: ["Either one is enough", "Neither must be true", "Both must be true", "Only the first matters"], answer: 2,
      hint: "Can you write the exam with low attendance here?",
      note: "&& means AND: both must be true. || means OR: at least one must be true.", badge: "scale",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain to the room why 7 / 2 is 3 in Java, and how to get 3.5.", note: "int / int drops the decimal. Use a double. 20 seconds.", points: 100 },

    // ---------- Round 4: Loops ----------
    {
      type: "learn", door: 4,
      title: "Loops repeat code. The for loop is the most common.",
      points: [["for (int i = 1; i <= 5; i++)", "Start, condition, change"], ["while (condition)", "Repeat while something is true"], ["i++", "Adds 1 to i"]],
      highlightLast: true,
      code: ["for (int i = 1; i <= 3; i++) {", "  System.out.print(i + \" \");", "}"],
      output: "1 2 3"
    },
    VN(4, "Loops", {
      prompt: "What does this print?",
      code: ["int sum = 0;", "for (int i = 1; i <= 5; i++) {", "  sum += i;", "}", "System.out.println(sum);"],
      answer: 15,
      hint: "sum += i means sum = sum + i.",
      note: "1 + 2 + 3 + 4 + 5 = 15.", badge: "list-checks"
    }),
    VN(4, "Loops", {
      prompt: "How many stars does this print?",
      code: ["for (int i = 0; i < 10; i += 2) {", "  System.out.print(\"*\");", "}"],
      answer: 5,
      hint: "i goes 0, 2, 4…",
      note: "i is 0, 2, 4, 6 and 8: 5 stars. At 10, i < 10 is false.", badge: "sparkles"
    }),
    VQ(4, "Loops", Object.assign({}, VBUG, {
      prompt: "Counting down for a launch. What happens, and which line has the bug?",
      code: ["int n = 5;", "while (n > 0) {", "  System.out.println(n);", "  n++;", "}", "System.out.println(\"Launch!\");"],
      outputOptions: ["5 4 3 2 1 Launch!", "It never stops", "Only Launch!"], outputAnswer: 1, bugLine: 3,
      bugText: "n goes up, so n > 0 stays true forever. Fix: n--",
      hint: "Which way is n moving?",
      note: "n becomes 6, 7, 8… and is always above 0. The change must move towards the exit.", badge: "alarm-clock",
      board: true, boardLabel: "after Round 4"
    })),

    // ---------- Round 5: Strings ----------
    {
      type: "learn", door: 5,
      title: "Strings are text. Compare them with .equals().",
      points: [["\"Hi \" + name", "+ joins text"], ["name.length()", "How many characters"], ["a.equals(b)", "Use .equals() to compare text. == can give the wrong answer"]],
      highlightLast: true,
      code: ["String city = \"Vizag\";", "System.out.println(city.length());", "System.out.println(\"I love \" + city);"],
      output: "5, then I love Vizag"
    },
    VN(5, "Strings", {
      prompt: "What does this print?",
      code: ["String name = \"Lakshmi\";", "System.out.println(name.length());"],
      answer: 7,
      hint: "Count the letters.",
      note: "L-a-k-s-h-m-i: 7 characters. length() counts every character, including spaces if there are any.", badge: "spell-check"
    }),
    VQ(5, "Strings", {
      prompt: "What does this print?",
      code: ["int a = 2, b = 3;", "System.out.println(\"Sum: \" + a + b);"],
      options: ["Sum: 5", "Sum: 23", "Sum: a + b", "An error"], answer: 1,
      hint: "Java reads left to right. What is \"Sum: \" + 2 first?",
      note: "\"Sum: \" + 2 becomes the text \"Sum: 2\", then + 3 joins \"3\". Use \"Sum: \" + (a + b) to get 5.", badge: "zap"
    }),
    VQ(5, "Strings", {
      prompt: "Which is the right way to check if the typed password matches?",
      options: ["if (typed.equals(saved))", "if (typed == saved)", "if (typed = saved)", "if (typed.length == saved)"], answer: 0,
      hint: "Text in Java is compared with a method.",
      note: ".equals() compares the actual text. == checks if both are the same object in memory, which can be false even for the same text.", badge: "lock",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Methods and objects (double) ----------
    {
      type: "learn", door: 6,
      title: "Methods are reusable blocks. Classes are plans for objects.",
      points: [["static int square(int n) { return n * n; }", "A method: input in, result out"], ["class Student { String name; }", "A class is a plan"], ["Student s = new Student();", "new makes a real object from the plan"]],
      highlightLast: true,
      code: ["static int square(int n) {", "  return n * n;", "}", "System.out.println(square(6));"],
      output: "36"
    },
    VN(6, "Methods and Objects", {
      double: true,
      prompt: "What does this print?",
      code: ["static int add(int a, int b) {", "  return a + b;", "}", "System.out.println(add(4, 5) * 2);"],
      answer: 18,
      hint: "Work out add(4, 5) first.",
      note: "add(4, 5) returns 9, then 9 × 2 = 18.", badge: "zap"
    }),
    VQ(6, "Methods and Objects", {
      double: true,
      prompt: "Student is a class. What does new Student() do?",
      options: ["Deletes a student", "Creates a new Student object", "Prints the class name", "Copies an old student"], answer: 1,
      hint: "The class is the plan. What does new make?",
      note: "new builds a real object from the class plan, like building a house from a blueprint.", badge: "user"
    }),
    VQ(6, "Methods and Objects", Object.assign({}, VBUG, {
      double: true,
      prompt: "A method that should return the bigger number. What happens, and which line has the bug?",
      code: ["static int max(int a, int b) {", "  if (a > b) {", "    return b;", "  }", "  return a;", "}", "System.out.println(max(8, 3));"],
      outputOptions: ["8", "3", "It does not compile"], outputAnswer: 1, bugLine: 2,
      bugText: "when a is bigger it returns b. Fix: return a; on this line and return b; at the end",
      hint: "8 > 3 is true. What does it return then?",
      note: "The logic is flipped, so it returns the smaller number. The program runs fine; only testing with real values catches this.", badge: "search",
      board: true, boardLabel: "after Round 6"
    })),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Say a Java program that prints the 5 times table, from 5 × 1 to 5 × 10.", note: "for (int i = 1; i <= 10; i++) System.out.println(5 * i); The host picks the clearest explanation.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 Java Basics", note: "Screenshot this. Try each one in an online Java compiler.", items: JAVA },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, lab help and project nights every week. Learn to code, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
