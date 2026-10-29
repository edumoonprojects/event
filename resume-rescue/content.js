// Resume Rescue (EduMoon Skills Club). For 2nd, 3rd and final year.
// Ravi applied to 50 companies and got 0 replies. Teams rescue his resume in 6 rounds.
// Step types used: story · rules · learn · door · speak · compare · match · wordlist · end

const R = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Tap the line on Ravi's resume" questions use the bug door with friendlier labels.
const TAP = { kind: "bug", time: 50, step1: "Why is it a problem?", step2: "Tap the line on Ravi’s resume", say1: "First pick why it’s a problem.", say2: "Now tap the line on Ravi’s resume.", partO: "the reason", partL: "the line", lineLabel: "line", bugLabel: "The red flag is on" };

// The 10-point checklist: the take-home card, the Screen Deck, and My Resume Score.
const CHECK = [
  ["1 page", "A fresher’s resume fits on one page."],
  ["Name-based email", "Like ravi.kumar@gmail.com, not a nickname."],
  ["A specific top line", "Who you are + what you’ve built + the role you want."],
  ["Projects with numbers", "What you built, with what, and how many people used it."],
  ["Skills you can explain", "If you list it, be ready to answer questions on it."],
  ["Proof links", "GitHub, a portfolio or a clean LinkedIn URL."],
  ["No filler", "No “hardworking and honest”, no hobbies like “sleeping”."],
  ["Checked by someone else", "A friend or senior reads it for typos."],
  ["Saved as a PDF", "Named like Ravi_Kumar_Resume.pdf."],
  ["Updated this semester", "Add every new project, internship or win."]
];

window.GAME = {
  id: "resume-rescue",
  title: "Resume Rescue",
  club: "Skills Club",
  tagline: "Ravi sent 50 applications and got 0 replies. Rescue his resume, then fix your own.",
  art: window.STORY_ART,
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Rescued",
    rulesEyebrow: "How Resume Rescue works", rulesTitle: "Spot it. Fix it. Get the call.",
    learnText: "The host shares one quick resume tip.", crackTitle: "Rescue",
    crackText: "Pick the fix on your phone and lock it in.",
    rulesExtra: "Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most real resumes make this mistake!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "are today’s Resume Rescuers!", endLine: "You rescued Ravi’s resume!"
  },
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Resume Rescue",
      title: "Ravi sent his resume to 50 companies. He got 0 replies. Can your team rescue it?",
      cards: [["file-text", "Ravi’s real-looking resume, full of common mistakes"], ["search", "6 rounds to find and fix them"], ["badge-check", "See Ravi’s resume Before and After, then score your own"]]
    },
    { type: "rules" },

    // ---------- Round 1: The 6-Second Test ----------
    {
      type: "learn", door: 1,
      title: "Recruiters often skim a resume in seconds.",
      points: [["They skim, they don’t read", "The top third of the page decides if they read the rest"], ["Easy to scan wins", "Clear headings, short lines, the most important things first"], ["One page for freshers", "Short and strong beats long and weak"]],
      highlightLast: true,
      side: { label: "What a recruiter looks for", items: [["user", "Who are you?", "Name, degree, year, the role you want"], ["code", "What can you do?", "Skills, backed by projects"], ["link-2", "Can I see proof?", "GitHub, portfolio, LinkedIn"]] }
    },
    R(1, "The 6-Second Test", {
      prompt: "What should a recruiter see first, at the very top of a fresher’s resume?",
      options: ["Photo and date of birth", "Name, contact details and a one-line summary", "Hobbies and interests", "“I hereby declare that…”"], answer: 1,
      hint: "What does a recruiter need to know in the first 2 seconds?",
      note: "Name, phone, email, links, and one specific line about you. Everything else comes after.", badge: "user"
    }),
    R(1, "The 6-Second Test", {
      prompt: "How long should a fresher’s resume be?",
      options: ["1 page", "2 pages", "3 pages", "As long as possible"], answer: 0,
      hint: "Recruiters spend only seconds on each one.",
      note: "One page. Cut anything that doesn’t help you get THIS job.", badge: "file-text"
    }),
    R(1, "The 6-Second Test", {
      prompt: "Which section order works best for most freshers?",
      options: ["Hobbies → Personal details → Education", "Declaration → Objective → Education", "Education → Skills → Projects → Internships → Achievements", "Projects → Hobbies → Education"], answer: 2,
      hint: "Put what proves you can do the job near the top.",
      note: "Education, Skills, Projects, Internships, Achievements. If your projects are your strongest part, they can come right after Education.", badge: "list-checks",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: Spot the Red Flag ----------
    {
      type: "learn", door: 2,
      title: "Red flags make a recruiter stop reading.",
      points: [["Unprofessional details", "Nickname emails, selfies, “sleeping” as a hobby"], ["Generic lines", "Sentences that could be on anyone’s resume"], ["Every line must earn its place", "If it doesn’t help you get the job, cut it"]],
      highlightLast: true,
      side: { label: "Ask for every line", items: [["search", "Is it specific?", "Would it only fit me?"], ["target", "Is it relevant?", "Does it help for this role?"], ["badge-check", "Is it professional?", "Would I say it in an interview?"]] }
    },
    R(2, "Spot the Red Flag", Object.assign({}, TAP, {
      prompt: "The top of Ravi’s resume. Find the red flag.",
      code: ["RAVI KUMAR", "cutieravi143@gmail.com · +91 98xxx xxxxx", "Visakhapatnam, Andhra Pradesh", "linkedin.com/in/ravi-kumar"],
      outputOptions: ["Use a simple name-based email", "Remove the email completely", "Write the email in capital letters"], outputAnswer: 0, bugLine: 1,
      bugText: "a nickname email. Use something like ravi.kumar@gmail.com",
      hint: "Which line would you never show an interviewer?",
      note: "Make a free, name-based email just for jobs. It takes 2 minutes.", badge: "mail"
    })),
    R(2, "Spot the Red Flag", {
      prompt: "Ravi’s objective: “To get a job in a reputed MNC company where I can grow.” Best replacement?",
      options: ["Seeking a challenging position in a growth-oriented organisation.", "Hardworking, honest and dedicated person.", "Final year CSE student who built 2 web apps (HTML, CSS, JavaScript), looking for a junior web developer role.", "To get a job in a reputed MNC company."], answer: 2,
      hint: "Which line could only be about Ravi?",
      note: "Who you are + what you’ve built + the role you want. Specific beats “hardworking”.", badge: "target"
    }),
    R(2, "Spot the Red Flag", Object.assign({}, TAP, {
      prompt: "The bottom of Ravi’s resume. Find the red flag.",
      code: ["SKILLS: C, Python, HTML, CSS", "PROJECT: College Events Website", "HOBBIES: Watching movies, sleeping, chatting", "ACHIEVEMENT: 2nd prize, college coding contest"],
      outputOptions: ["Hobbies must always be on page 1", "It wastes space and says nothing good. Remove it, or show a real interest", "Add more hobbies to fill the page"], outputAnswer: 1, bugLine: 2,
      bugText: "“sleeping, chatting” says nothing good. Cut it, or show a real interest like “Captain, college chess team”",
      hint: "Which line would make a recruiter smile for the wrong reason?",
      note: "Hobbies are optional. If you add them, show something real: a team, a club, a skill.", badge: "x",
      board: true, boardLabel: "after Round 2"
    })),

    // ---------- Round 3: Weak vs Strong ----------
    {
      type: "learn", door: 3,
      title: "A strong line = action + what + a number.",
      points: [["Start with an action verb", "Built, designed, fixed, led, improved"], ["Say what and with what", "A college events website, with HTML, CSS and JavaScript"], ["Add a number", "Used by 300 students, 12 bugs fixed, 2nd of 60 teams"]],
      highlightLast: true,
      side: { label: "Weak → Strong", items: [["circle-x", "Did a project on Python.", "Weak: what? for whom?"], ["circle-check", "Built a Python bot that sends 200 students daily class reminders.", "Strong: action, what, number"], ["zap", "No number?", "Use people, time saved, or rank"]] }
    },
    R(3, "Weak vs Strong", {
      prompt: "Pick the strongest PROJECT line.",
      options: ["Did a project on website.", "Worked on a website project in a team.", "Built a college events website (HTML, CSS, JS) used by 300+ students to register for fests.", "Website project: good experience."], answer: 2,
      hint: "Find the action, the what, and the number.",
      note: "Built + what + tools + 300 students. A recruiter can picture it instantly.", badge: "code"
    }),
    R(3, "Weak vs Strong", {
      prompt: "Pick the strongest INTERNSHIP line.",
      options: ["Did internship at XYZ Pvt Ltd.", "Fixed 12 bugs and built a login page in React during a 2-month internship at XYZ Pvt Ltd.", "Internship: learned many things.", "Was an intern, attended meetings."], answer: 1,
      hint: "Which line says what Ravi actually DID?",
      note: "Even a small internship sounds strong when you say what you did, with numbers.", badge: "briefcase"
    }),
    R(3, "Weak vs Strong", {
      prompt: "Pick the strongest ACHIEVEMENT line.",
      options: ["Participated in many events.", "Good at coding.", "2nd place out of 60 teams in the college hackathon, for an attendance app.", "Certificate of participation in 15 events."], answer: 2,
      hint: "“Out of how many?” makes any win more impressive.",
      note: "A rank, out of how many, and for what. Participation alone doesn’t stand out.", badge: "award",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Say your best project in one line, with a number.", note: "Action + what + a number. Example: “I built a quiz app that 50 classmates used before exams.”", points: 100 },

    // ---------- Round 4: Honest Skills ----------
    {
      type: "learn", door: 4,
      title: "Every skill you list is a question you may be asked.",
      points: [["Interviewers pick from your list", "“You wrote Java. Explain inheritance.”"], ["Fewer, stronger skills", "5 skills you can explain beat 15 you can’t"], ["Be specific", "Not “computer knowledge”, but the actual tools"]],
      highlightLast: true,
      side: { label: "Good habits", items: [["list-checks", "Group them", "Languages · Web · Tools"], ["badge-check", "Mark your level if needed", "Python (basic)"], ["link-2", "Link the proof", "A project that uses each skill"]] }
    },
    R(4, "Honest Skills", {
      prompt: "A 2nd-year student’s skills section. Which one is a red flag?",
      options: ["C, Python (basic), HTML, CSS", "C, C++, Java, Python, JavaScript, Go, Rust, Kotlin, Swift, PHP, Ruby, R, AI, ML, Blockchain", "Python, SQL, Excel", "HTML, CSS, JavaScript, Git"], answer: 1,
      hint: "Could a 2nd-year student answer interview questions on all of them?",
      note: "A long list looks copied. List only what you can explain and show.", badge: "shield"
    }),
    R(4, "Honest Skills", {
      prompt: "Instead of writing “MS Office”, what’s better?",
      options: ["MS Office (expert)", "Computer knowledge", "Excel (pivot tables, VLOOKUP, charts)", "Typing speed"], answer: 2,
      hint: "Which one tells the recruiter exactly what you can do?",
      note: "Name the tool AND what you can do with it. “MS Office” alone says very little.", badge: "chart-column"
    }),
    R(4, "Honest Skills", {
      prompt: "What’s the best way to prove a skill on your resume?",
      options: ["Write “expert” next to it", "A link to a project or GitHub that uses it", "Make it bold", "List it twice"], answer: 1,
      hint: "What can a recruiter actually check?",
      note: "Proof beats claims. One small project with a link shows more than the word “expert”.", badge: "link-2",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Links and Proof ----------
    {
      type: "learn", door: 5,
      title: "Your links are your proof.",
      points: [["GitHub for developers", "Real code, pinned projects, a short README for each"], ["LinkedIn for everyone", "A clean URL, a real photo, your projects"], ["Certificates: quality over quantity", "Courses where you built something count most"]],
      highlightLast: true,
      side: { label: "Quick wins this week", items: [["code", "Pin your 3 best repos", "With a one-line description each"], ["user", "Set a custom LinkedIn URL", "linkedin.com/in/your-name"], ["file-text", "Add a README", "What it does and how to run it"]] }
    },
    R(5, "Links and Proof", {
      prompt: "Ravi wants a developer job. Which link helps him most?",
      options: ["Instagram", "GitHub with his projects", "Facebook", "A YouTube playlist"], answer: 1,
      hint: "Where can a recruiter see his code?",
      note: "GitHub is where developers show their work. Pin the best projects at the top.", badge: "code"
    }),
    R(5, "Links and Proof", {
      prompt: "Which LinkedIn link looks best on a resume?",
      options: ["linkedin.com/in/ravi-kumar-8a7b3c2d91", "linkedin.com/in/ravikumar-dev", "linkedin.com/in/cutieravi", "No link at all"], answer: 1,
      hint: "Which one is short, clean and professional?",
      note: "LinkedIn lets you set a custom URL in your profile settings. Use your name.", badge: "link-2"
    }),
    R(5, "Links and Proof", {
      prompt: "Which certificate is most worth listing?",
      options: ["Attended a 1-hour webinar", "A course where you built and submitted a real project", "All 25 certificates you have", "A school drawing competition"], answer: 1,
      hint: "Which one proves you can DO something?",
      note: "Pick 2 or 3 certificates that show real skills. Too many hide the good ones.", badge: "award",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Final Fix (double) ----------
    {
      type: "learn", door: 6,
      title: "The last 10% that most students forget.",
      points: [["The file name", "It’s the first thing HR sees in their inbox"], ["The format", "PDF keeps your layout the same on every device"], ["Use every space well", "Your last free line should be your next best proof"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["target", "3 final fixes", "Then the Before → After"], ["mic", "Then the final challenge", "Your 30-second pitch"]] }
    },
    R(6, "Final Fix", {
      double: true, time: 40,
      prompt: "Which file name should Ravi send?",
      options: ["Resume_final_FINAL2.docx", "Ravi_Kumar_Resume.pdf", "myresume(1).pdf", "IMG_2041.jpg"], answer: 1,
      hint: "HR may download 200 resumes today. Which one can they find again?",
      note: "Your name + Resume, as a PDF. Clean and easy to find.", badge: "file-text"
    }),
    R(6, "Final Fix", {
      double: true, time: 40,
      prompt: "PDF or Word?",
      options: ["PDF, unless the company asks for Word", "Always Word", "A photo of the printed resume", "It doesn’t matter"], answer: 0,
      hint: "Which one looks the same on every phone and laptop?",
      note: "PDF keeps your layout. Send Word only if the company asks for it.", badge: "badge-check"
    }),
    R(6, "Final Fix", {
      double: true, time: 45,
      prompt: "Ravi has space for one more line on his one-page resume. What should he add?",
      options: ["A declaration and his signature", "His father’s name and religion", "A second project with its GitHub link", "Hobbies: sleeping"], answer: 2,
      hint: "What helps him get THIS job?",
      note: "More proof of skills always wins. Personal details and declarations aren’t needed for most tech jobs.", badge: "code",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Before → After, final challenge, personal score, take-home ----------
    {
      type: "compare", eyebrow: "You rescued it", title: "Ravi’s resume: Before → After",
      before: ["cutieravi143@gmail.com", "Objective: To get a job in a reputed MNC company", "Did a project on website.", "Did internship at XYZ Pvt Ltd.", "Skills: 15 languages, AI, ML, Blockchain", "Hobbies: watching movies, sleeping", "Resume_final_FINAL2.docx · 3 pages"],
      after: ["ravi.kumar@gmail.com · github.com/ravikumar · linkedin.com/in/ravikumar-dev", "Final year CSE student who built 2 web apps, looking for a junior web developer role", "Built a college events website (HTML, CSS, JS) used by 300+ students", "Fixed 12 bugs and built a login page in React during a 2-month internship", "Skills: C, Python, HTML, CSS, JavaScript, Git", "2nd of 60 teams, college hackathon", "Ravi_Kumar_Resume.pdf · 1 page"],
      note: "Same Ravi, same projects. Only the way he shows them changed. Now he gets calls."
    },
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Your 30-second elevator pitch: who you are and your best project.", note: "The room claps; the host picks the best one.", points: 200 },
    {
      type: "match", eyebrow: "Just for you", title: "My Resume Score",
      note: "10 quick yes/no checks about your own resume. You’ll get a score out of 10 and your top 3 fixes for tonight. No resume yet? You’ll get a 7-day plan to make one.",
      url: "score.html", button: "Check my resume →"
    },
    { type: "wordlist", eyebrow: "Take it home", title: "The 10-point Resume Checklist", note: "Screenshot this. Check your resume against it tonight.", items: CHECK },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Careers, resumes, internships and startup games every week. Get ahead, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
window.RESUME_CHECK = CHECK;
