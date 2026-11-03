// EduMoon Game Zone: the list of clubs and games.
// To add a game: add one entry to `games` below (newest first is not required; `added` sorts them).
// Paths are from the main event folder, e.g. "escape-the-lab/host.html".

window.ZONE = {
  clubs: [
    { id: "coding", name: "Coding Club", icon: "code", color: "#4C9BFF", color2: "#1E4FD8", tagline: "Escape rooms, quizzes and placement rounds", about: "Learn real coding by playing. No laptop needed: every game runs on phones." },
    { id: "english", name: "English Club", icon: "message-circle", color: "#FF7A8A", color2: "#D6336C", tagline: "Speaking games, stories and debates", about: "Games where everyone talks in English, with no fear of mistakes." },
    { id: "skills", name: "Skills Club", icon: "rocket", color: "#3DDC97", color2: "#11A36A", tagline: "Careers, resumes and startup games", about: "Careers after BTech, interviews, resumes and building your own startup." }
  ],

  banner: {
    eyebrow: "Coming soon",
    title: "EduMoon VibeHack is coming",
    text: "Build a real project in one day with students from across Vizag. Be the first to know.",
    button: "Get notified on WhatsApp",
    url: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
  },

  games: [
    {
      club: "coding", icon: "chart-column", title: "Placement Round 2: DSA", added: "2026-11-04",
      desc: "The advanced sequel. Product-company style questions on arrays, strings, binary search, sorting and Big O, then interview-style thinking. Every team gets an offer letter.",
      years: "Final year", level: "advanced", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "placement-round-2/host.html", player: "placement-round-2/"
    },
    {
      club: "skills", icon: "rocket", title: "Startup Tycoon", added: "2026-11-04",
      desc: "Run CampusEats, a hostel food delivery startup, for 6 months. Pick the problem, find customers, price, market, choose a co-founder and face an investor. Then pitch your own idea.",
      years: "All years", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "startup-tycoon/host.html", player: "startup-tycoon/"
    },
    {
      club: "english", icon: "mail", title: "Email Doctor", added: "2026-11-04",
      desc: "Diagnose and fix real student emails to professors and HR: subject lines, openings, asking for extensions, follow-ups and tone traps. Leave with reusable templates.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "email-doctor/host.html", player: "email-doctor/"
    },
    {
      club: "skills", icon: "landmark", title: "Money 101", added: "2026-11-04",
      desc: "Ravi got his first salary. CTC vs in-hand, a simple budget, emergency funds, compounding, credit card and EMI traps, and spotting money scams.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "money-101/host.html", player: "money-101/"
    },
    {
      club: "skills", icon: "user", title: "LinkedIn Glow-Up", added: "2026-11-04",
      desc: "The third Ravi game. Fix his photo, headline, About section and projects, write a real first post, and learn to message seniors so they reply.",
      years: "2nd year onwards", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "linkedin-glow-up/host.html", player: "linkedin-glow-up/"
    },
    {
      club: "english", icon: "mic", title: "Interview English Pro", added: "2026-11-04",
      desc: "The English of the technical round: explain your project in 60 seconds, say “I don’t know” like a pro, structure answers and drop filler words. Ends with a 90-second pitch.",
      years: "Final year", level: "advanced", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "interview-english-pro/host.html", player: "interview-english-pro/"
    },
    {
      club: "coding", icon: "route", title: "Git Rescue", added: "2026-11-04",
      desc: "11:40 PM, the night before submission, and a teammate overwrote the project. Commits, undo, branches, merge conflicts and GitHub, to save it in time.",
      years: "2nd & 3rd year", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "git-rescue/host.html", player: "git-rescue/"
    },
    {
      club: "coding", icon: "key", title: "Python Escape", added: "2026-11-04",
      desc: "Escape the Lab, in Python. 5 locked doors: variables, if/elif, loops with range, lists and a bug door. Crack them all to spell the master key.",
      years: "1st & 2nd year", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "python-escape/host.html", player: "python-escape/"
    },
    {
      club: "skills", icon: "file-user", title: "HR Round", added: "2026-11-03",
      desc: "The Resume Rescue sequel: Ravi got the interview call. Teams pick his best answers to real HR questions, from “Tell me about yourself” to bonds and relocation, and win an offer letter.",
      years: "Final year", level: "advanced", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "hr-round/host.html", player: "hr-round/"
    },
    {
      club: "coding", icon: "search", title: "Bug Hunt", added: "2026-11-03",
      desc: "The lab exam is tomorrow and every program almost works. Find the bug in 6 rounds of C: = vs ==, off-by-one, scanf, switch, endless loops and more.",
      years: "2nd & 3rd year", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "bug-hunt/host.html", player: "bug-hunt/"
    },
    {
      club: "skills", icon: "shield", title: "Scam or Safe", added: "2026-11-03",
      desc: "Real-looking KYC messages, UPI requests, fake internships, look-alike links and “digital arrest” calls. Decide scam or safe, find the red flag, and take home 8 rules.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "scam-or-safe/host.html", player: "scam-or-safe/"
    },
    {
      club: "english", icon: "users", title: "GD Arena", added: "2026-11-03",
      desc: "Learn the group discussion moves evaluators score: starting, disagreeing politely, handling a dominator, bringing people in and summarising. Then play a live GD.",
      years: "3rd & final year", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "gd-arena/host.html", player: "gd-arena/"
    },
    {
      club: "coding", icon: "sparkles", title: "Spot the AI", added: "2026-11-03",
      desc: "Human or AI? Then the twist: guessing isn’t reliable. Catch AI giving confident wrong answers, write better prompts, and learn when AI helps and when it doesn’t.",
      years: "All years · no coding needed", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones or Screen Deck",
      host: "spot-the-ai/host.html", player: "spot-the-ai/"
    },
    {
      club: "skills", icon: "file-text", title: "Resume Rescue", added: "2026-10-29",
      desc: "Ravi sent 50 applications and got 0 replies. Teams find the red flags, rewrite weak lines and fix his resume in 6 rounds. Then every student scores their own resume.",
      years: "2nd, 3rd & final year", level: "medium", time: "40 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "resume-rescue/host.html", player: "resume-rescue/"
    },
    {
      club: "english", icon: "spell-check", title: "Desi English Fixer", added: "2026-10-29",
      desc: "“Myself Ravi”, “I am having one doubt”, “Kindly do the needful”. Fix 18 everyday English habits for interviews and emails, then get your own fix list.",
      years: "All years", level: "beginner", time: "40 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "english-fixer/host.html", player: "english-fixer/"
    },
    {
      club: "skills", icon: "compass", title: "Life After BTech: Career Map", added: "2026-10-29",
      desc: "Learn 8 real career paths after BTech: guess the job, bust career myths, fix a 4-year plan. Then every student finds their own best-fit path.",
      years: "1st & 2nd year", level: "beginner", time: "40 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "career-map/host.html", player: "career-map/"
    },
    {
      club: "english", icon: "film", title: "Movie Story Time: Baahubali", added: "2026-10-29",
      desc: "Hear the Baahubali story in simple English, learn 20 power words like usurp, clandestine and magnanimous, guess what happens next, and speak if you dare.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "movie-story-time/host.html", player: "movie-story-time/"
    },
    {
      club: "coding", icon: "briefcase", title: "Placement Round", added: "2026-10-29",
      desc: "5 rounds of real placement-style questions: /, %, patterns, functions, strings and an interview question. Every team gets an offer letter.",
      years: "2nd, 3rd & final year", level: "medium", time: "35 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "placement-round/host.html", player: "placement-round/"
    },
    {
      club: "coding", icon: "lock", title: "Escape the Lab", added: "2026-10-29",
      desc: "5 locked doors, 5 C concepts: variables, if-else, loops, bugs and arrays. Crack them all to spell the master key.",
      years: "1st & 2nd year", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "Phones only",
      host: "escape-the-lab/host.html", player: "escape-the-lab/"
    },
    {
      club: "coding", icon: "globe", title: "What Happens When You Tap?", added: "2026-10-28",
      desc: "How the internet works, from a tap on Instagram to a data centre and back. Quiz rounds and word hunts.",
      years: "Any year · no coding needed", level: "beginner", time: "25 min", group: "Any size · solo", needs: "Phones only",
      host: "edumoon-live/host.html", player: "edumoon-live/"
    }
  ]
};
