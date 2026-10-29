// EduMoon Game Zone: the list of clubs and games.
// To add a game: add one entry to `games` below (newest first is not required; `added` sorts them).
// Paths are from the main event folder, e.g. "escape-the-lab/host.html".

window.ZONE = {
  clubs: [
    { id: "coding", name: "Coding Club", icon: "💻", color: "#4C9BFF", color2: "#1E4FD8", tagline: "Escape rooms, quizzes and placement rounds", about: "Learn real coding by playing. No laptop needed: every game runs on phones." },
    { id: "english", name: "English Club", icon: "🗣️", color: "#FF7A8A", color2: "#D6336C", tagline: "Speaking games, stories and debates", about: "Games where everyone talks in English, with no fear of mistakes." },
    { id: "skills", name: "Skills Club", icon: "🚀", color: "#3DDC97", color2: "#11A36A", tagline: "Careers, resumes and startup games", about: "Careers after BTech, interviews, resumes and building your own startup." }
  ],

  banner: {
    eyebrow: "🔥 Coming soon",
    title: "EduMoon VibeHack is coming",
    text: "Build a real project in one day with students from across Vizag. Be the first to know.",
    button: "Get notified on WhatsApp",
    url: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
  },

  games: [
    {
      club: "skills", icon: "🧭", title: "Life After BTech: Career Map", added: "2026-10-29",
      desc: "Learn 8 real career paths after BTech: guess the job, bust career myths, fix a 4-year plan. Then every student finds their own best-fit path.",
      years: "1st & 2nd year", level: "beginner", time: "40 min", group: "6–30 · teams or solo", needs: "📱 Phones only",
      host: "career-map/host.html", player: "career-map/"
    },
    {
      club: "english", icon: "🎬", title: "Movie Story Time: Baahubali", added: "2026-10-29",
      desc: "Hear the Baahubali story in simple English, learn 20 power words like usurp, clandestine and magnanimous, guess what happens next, and speak if you dare.",
      years: "All years", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "📱 Phones only",
      host: "movie-story-time/host.html", player: "movie-story-time/"
    },
    {
      club: "coding", icon: "💼", title: "Placement Round", added: "2026-10-29",
      desc: "5 rounds of real placement-style questions: /, %, patterns, functions, strings and an interview question. Every team gets an offer letter.",
      years: "2nd, 3rd & final year", level: "medium", time: "35 min", group: "6–30 · teams or solo", needs: "📱 Phones only",
      host: "placement-round/host.html", player: "placement-round/"
    },
    {
      club: "coding", icon: "🔐", title: "Escape the Lab", added: "2026-10-29",
      desc: "5 locked doors, 5 C concepts: variables, if-else, loops, bugs and arrays. Crack them all to spell the master key.",
      years: "1st & 2nd year", level: "beginner", time: "35 min", group: "6–30 · teams or solo", needs: "📱 Phones only",
      host: "escape-the-lab/host.html", player: "escape-the-lab/"
    },
    {
      club: "coding", icon: "🌐", title: "What Happens When You Tap?", added: "2026-10-28",
      desc: "How the internet works, from a tap on Instagram to a data centre and back. Quiz rounds and word hunts.",
      years: "Any year · no coding needed", level: "beginner", time: "25 min", group: "Any size · solo", needs: "📱 Phones only",
      host: "edumoon-live/host.html", player: "edumoon-live/"
    }
  ]
};
