// C++ Classes and Objects (EduMoon Coding Club). For 2nd year and anyone who knows C basics.
// Object-oriented C++ made simple: cout and cin, classes and objects, private and public, constructors, member functions, and a first look at inheritance and virtual functions.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (pick what happens, then tap the buggy line)

const PO = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 60, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const PON = (round, name, extra) => PO(round, name, Object.assign({ kind: "number", time: 70 }, extra));
const PBUG = { kind: "bug", time: 80, step1: "What happens?", step2: "Tap the buggy line", say1: "First pick what happens.", say2: "Now tap the line with the bug." };

// The take-home card: 10 OOP ideas in C++.
const OOP = [
  ["cout << x << endl;", "Print x and a new line. cin >> x; reads input."],
  ["Class", "A plan: what data an object has and what it can do."],
  ["Object", "A real thing made from the plan: Student s;"],
  ["private / public", "Private data is hidden; public functions are the way in."],
  ["Encapsulation", "Keep data private and change it only through safe functions."],
  ["Constructor", "Same name as the class. Runs automatically when an object is made."],
  ["Member function", "A function inside a class that works on that object’s data."],
  ["Inheritance", "class Car : public Vehicle  — Car gets Vehicle’s features."],
  ["virtual", "Lets the child class’s version run through a parent pointer."],
  ["Classes in C++ end with };", "Forgetting the semicolon is a classic first error."]
];

window.GAME = {
  id: "cpp-classes-objects",
  title: "C++ Classes and Objects",
  club: "Coding Club",
  tagline: "From C to C++: think in objects, the way real software is built.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year (anyone who knows C basics)", time: "40 minutes", level: "Medium", mono: true,
    about: "Manoj is building a small library system for his college in C++, and his senior says, “Stop writing everything in main. Think in objects.” In 6 rounds, teams learn cout and cin, classes and objects, private and public, constructors, member functions, and a first look at inheritance and virtual functions. They predict outputs and fix classic OOP mistakes.",
    outcomes: "Reading and writing simple C++ classes, the idea of encapsulation, how constructors run, and the basics of inheritance and polymorphism that interviews ask about.",
    tone: "OOP words sound heavy, so tie every idea to a real object: a student, a bank account, a library book. Draw a class as a box with data on top and functions below if you have a board.",
    extra: [["Interview link", "The four OOP pillars (encapsulation, abstraction, inheritance, polymorphism) are common in placement interviews. Mention it in Round 6."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Built",
    rulesEyebrow: "How C++ Classes and Objects works", rulesTitle: "Learn the idea. Read the class. Predict what happens.",
    learnText: "The host explains one object-oriented idea.", crackTitle: "Predict",
    crackText: "Work out what the program does and lock it in.",
    rulesExtra: "Bug questions: <b>100</b> for what happens + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. OOP trips up many interview candidates too!", cracked: "built it",
    next: "Next round →", finale: "Next →", winner: "are today’s object builders!", endLine: "Manoj’s library system runs on objects now."
  },
  offerEyebrow: "EduMoon Coding Club · OOP level",
  offerTitle: "Your OOP level",
  offers: [
    { min: 0.7, icon: "trophy", title: "Object Architect", text: "You think in objects. Build a small class-based project this month." },
    { min: 0.45, icon: "code", title: "Class Builder", text: "Strong! Write a BankAccount class with deposit and withdraw tonight." },
    { min: 0.2, icon: "wrench", title: "OOP Learner", text: "Good start. Revise constructors and private vs public." },
    { min: 0, icon: "book-open", title: "OOP Starter", text: "Everyone starts here. Play C Functions and Strings first." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · Library system",
      title: "Manoj is building a library system in C++. His senior says, “Stop writing everything in main. Think in objects.” Can your team help him?",
      cards: [["code", "Classes, objects, constructors and more"], ["search", "Predict outputs and fix OOP bugs"], ["trophy", "Your score decides your OOP level"]]
    },
    { type: "rules" },

    // ---------- Round 1: C to C++ ----------
    {
      type: "learn", door: 1,
      title: "C++ keeps C, and adds easier input and output.",
      points: [["cout << \"Hi\";", "Prints. Chain with <<"], ["cin >> age;", "Reads input. No & needed"], ["endl", "Ends the line, like \\n"]],
      highlightLast: true,
      code: ["int books = 3;", "cout << \"Books: \" << books << endl;", "cout << books * 2;"],
      output: "Books: 3, then 6 on the next line"
    },
    PO(1, "C to C++", {
      prompt: "What does this print?",
      code: ["int a = 4, b = 5;", "cout << a << \"+\" << b << \"=\" << a + b;"],
      options: ["4+5=9", "a+b=9", "4+5=45", "9"], answer: 0,
      hint: "Each << adds the next piece.",
      note: "It prints 4, then +, then 5, then =, then 9. << chains items in order.", badge: "code"
    }),
    PO(1, "C to C++", {
      prompt: "Which line reads a number into the variable age in C++?",
      options: ["cin << age;", "cout >> age;", "cin >> age;", "scan(age);"], answer: 2,
      hint: "Arrows point the way data flows: into age.",
      note: "cin >> age; sends input into age. cout << sends output to the screen.", badge: "route"
    }),
    PON(1, "C to C++", {
      prompt: "What does this print?",
      code: ["int pages = 120;", "int read = 45;", "cout << pages - read;"],
      answer: 75,
      hint: "Simple subtraction.",
      note: "120 − 45 = 75. C++ maths works just like C.", badge: "book-open",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Classes and objects ----------
    {
      type: "learn", door: 2,
      title: "A class is the plan. An object is the real thing.",
      points: [["class Book { … };", "Describes what every book has"], ["Book b1;", "Makes one real book object"], ["b1.title", "The dot reaches into that object"]],
      highlightLast: true,
      code: ["class Book {", "public:", "  string title;", "  int pages;", "};", "Book b1;", "b1.title = \"Wings of Fire\";", "cout << b1.title;"],
      output: "Wings of Fire"
    },
    PO(2, "Classes and Objects", {
      prompt: "Book is a class. Which line creates two separate book objects?",
      options: ["class b1, b2;", "Book b1, b2;", "Book = b1 + b2;", "new class Book;"], answer: 1,
      hint: "Type name, then object names.",
      note: "Book b1, b2; makes two independent objects from the same plan.", badge: "book-open"
    }),
    PON(2, "Classes and Objects", {
      prompt: "What does this print?",
      code: ["Book a, b;", "a.pages = 200;", "b.pages = 150;", "a.pages = a.pages + 50;", "cout << a.pages + b.pages;"],
      answer: 400,
      hint: "Each object has its own pages.",
      note: "a.pages becomes 250, b.pages stays 150. 250 + 150 = 400. Objects do not share their data.", badge: "chart-column"
    }),
    PO(2, "Classes and Objects", Object.assign({}, PBUG, {
      prompt: "Manoj’s first class. What happens, and which line has the bug?",
      code: ["class Member {", "public:", "  string name;", "  int id;", "}", "int main() { Member m; }"],
      outputOptions: ["It compiles and runs fine", "Compile error: missing semicolon", "It prints the name"], outputAnswer: 1, bugLine: 4,
      bugText: "a class must end with }; (a semicolon after the brace)",
      hint: "Look at how the class ends.",
      note: "Forgetting the ; after a class is the classic first C++ error. The message often points to the next line.", badge: "search",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: private and public ----------
    {
      type: "learn", door: 3,
      title: "Keep data private. Let functions guard it.",
      points: [["private:", "Only the class’s own functions can touch it"], ["public:", "Anyone can use it"], ["Encapsulation", "Change data only through safe functions, like deposit()"]],
      highlightLast: true,
      code: ["class Account {", "private:", "  int balance = 0;", "public:", "  void deposit(int x) { if (x > 0) balance += x; }", "  int get() { return balance; }", "};"],
      output: "Only deposit() can change balance"
    },
    PO(3, "private and public", Object.assign({}, PBUG, {
      prompt: "Using the Account class above. What happens, and which line has the bug?",
      code: ["Account acc;", "acc.deposit(500);", "acc.balance = 1000000;", "cout << acc.get();"],
      outputOptions: ["It prints 1000000", "Compile error: balance is private", "It prints 500"], outputAnswer: 1, bugLine: 2,
      bugText: "balance is private, so outside code cannot change it directly",
      hint: "Which part of the class is balance in?",
      note: "That is the point of private: nobody outside can secretly set a balance. They must go through deposit().", badge: "lock"
    })),
    PON(3, "private and public", {
      prompt: "What does this print? (deposit ignores amounts that are 0 or less)",
      code: ["Account acc;", "acc.deposit(300);", "acc.deposit(-100);", "acc.deposit(200);", "cout << acc.get();"],
      answer: 500,
      hint: "Which deposit is ignored?",
      note: "300 + 200 = 500. The −100 is rejected by the check inside deposit(). That is encapsulation protecting the data.", badge: "shield"
    }),
    PO(3, "private and public", {
      prompt: "Why make balance private instead of public?",
      options: ["To make the program run faster", "So only safe functions can change it", "Because C++ requires all data private", "So the balance can be printed"], answer: 1,
      hint: "Think about rules like “no negative deposits”.",
      note: "Private data plus public functions lets the class enforce its own rules. This is encapsulation.", badge: "shield",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain the difference between a class and an object using any real thing in this room.", note: "A plan vs the real thing. 20 seconds.", points: 100 },

    // ---------- Round 4: Constructors ----------
    {
      type: "learn", door: 4,
      title: "A constructor runs automatically when an object is made.",
      points: [["Same name as the class", "No return type, not even void"], ["Sets starting values", "Book(string t) { title = t; }"], ["Runs once per object", "At the moment it is created"]],
      highlightLast: true,
      code: ["class Book {", "public:", "  string title;", "  Book(string t) { title = t; cout << \"New book \"; }", "};", "Book b(\"Godaan\");"],
      output: "New book"
    },
    PON(4, "Constructors", {
      prompt: "How many times is “Hi” printed?",
      code: ["class Pen {", "public:", "  Pen() { cout << \"Hi \"; }", "};", "Pen a, b, c;"],
      answer: 3,
      hint: "One constructor call per object.",
      note: "Three objects, three constructor calls, three His.", badge: "pen-tool"
    }),
    PO(4, "Constructors", {
      prompt: "Which is a correct constructor for class Student?",
      options: ["Student(string n) { name = n; }", "void Student(string n) { name = n; }", "int Student(string n) { return n; }", "constructor Student(string n) { name = n; }"], answer: 0,
      hint: "Same name, no return type.",
      note: "A constructor has the class’s name and no return type, not even void.", badge: "user"
    }),
    PO(4, "Constructors", {
      prompt: "What does this print?",
      code: ["class Counter {", "public:", "  int n;", "  Counter() { n = 10; }", "};", "Counter c;", "c.n = c.n + 5;", "cout << c.n;"],
      options: ["5", "15", "10", "0"], answer: 1,
      hint: "What value did the constructor set?",
      note: "The constructor set n to 10, then +5 gives 15.", badge: "check",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Member functions ----------
    {
      type: "learn", door: 5,
      title: "Member functions work on the object’s own data.",
      points: [["Inside the class", "void issue() { available = false; }"], ["Called with a dot", "b1.issue();  changes only b1"], ["this", "Points to the object that called the function"]],
      highlightLast: true,
      code: ["class Book {", "public:", "  int copies = 3;", "  void issue() { if (copies > 0) copies--; }", "};", "Book b; b.issue(); b.issue();", "cout << b.copies;"],
      output: "1"
    },
    PON(5, "Member Functions", {
      prompt: "Using the Book class above, what does this print?",
      code: ["Book x, y;", "x.issue();", "y.issue(); y.issue(); y.issue(); y.issue();", "cout << x.copies + y.copies;"],
      answer: 2,
      hint: "y cannot go below 0.",
      note: "x has 2 left. y issues 3 copies, then the 4th call does nothing because copies is 0. 2 + 0 = 2.", badge: "book-open"
    }),
    PO(5, "Member Functions", {
      prompt: "b1.issue() is called. Which book’s copies change?",
      options: ["Every Book object’s", "None, until saved", "Only b1’s", "The last book created"], answer: 2,
      hint: "Who called the function?",
      note: "Each object has its own data. A member function changes only the object it was called on.", badge: "target"
    }),
    PO(5, "Member Functions", Object.assign({}, PBUG, {
      prompt: "A member function to return a book’s title. What happens, and which line has the bug?",
      code: ["class Book {", "  string title = \"Godaan\";", "public:", "  string getTitle() { return title; }", "};", "Book b;", "cout << b.title;"],
      outputOptions: ["It prints Godaan", "Compile error: title is private", "It prints nothing"], outputAnswer: 1, bugLine: 6,
      bugText: "class members are private by default. Fix: cout << b.getTitle();",
      hint: "Members above public: are… what by default in a class?",
      note: "In a class, members are private unless you say public. Use the getter function.", badge: "lock",
      board: true, boardLabel: "after Round 5"
    })),

    // ---------- Round 6: Inheritance and virtual (double) ----------
    {
      type: "learn", door: 6,
      title: "Inheritance reuses a class. virtual lets the child speak for itself.",
      points: [["class EBook : public Book", "EBook gets everything Book has, and can add more"], ["Overriding", "The child writes its own version of a function"], ["virtual", "With a parent pointer, the child’s version still runs"]],
      highlightLast: true,
      code: ["class Item { public: virtual void show() { cout << \"Item\"; } };", "class Book : public Item { public: void show() { cout << \"Book\"; } };", "Item* p = new Book();", "p->show();"],
      output: "Book (because show is virtual)"
    },
    PO(6, "Inheritance", {
      double: true,
      prompt: "class Magazine : public Book. What does Magazine get?",
      options: ["Nothing from Book at all", "Only Book’s constructor", "A copy of every Book object", "Book’s public members, plus its own"], answer: 3,
      hint: "Inheritance means reuse.",
      note: "Magazine inherits Book’s features and can add new ones. Write once, reuse many times.", badge: "route"
    }),
    PO(6, "Inheritance", {
      double: true,
      prompt: "What does this print?",
      code: ["class Item { public: void show() { cout << \"Item\"; } };", "class Book : public Item { public: void show() { cout << \"Book\"; } };", "Item* p = new Book();", "p->show();"],
      options: ["Book", "ItemBook", "Compile error", "Item"], answer: 3,
      hint: "Look for the word virtual. Is it there?",
      note: "Without virtual, the pointer’s type (Item) decides, so it prints Item. Add virtual to get Book.", badge: "search"
    }),
    PO(6, "Inheritance", {
      double: true,
      prompt: "An interviewer asks, “What is polymorphism?” Best simple answer?",
      options: ["One call, different behaviour per object", "Having many variables in one class", "Writing code in many languages", "Making many copies of one object"], answer: 0,
      hint: "Poly means many, morph means form.",
      note: "One call like show() acting differently for a Book, a Magazine or an EBook. Virtual functions make it happen.", badge: "sparkles",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, levels, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best answer wins +200", prompt: "Explain the 4 pillars of OOP in 30 seconds, with one example each.", note: "Encapsulation, abstraction, inheritance, polymorphism. The host picks the clearest.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "10 OOP Ideas in C++", note: "Screenshot this. Revise it before your next lab or interview.", items: OOP },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, lab help and project nights every week. Learn to code, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
