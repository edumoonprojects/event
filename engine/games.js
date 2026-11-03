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
