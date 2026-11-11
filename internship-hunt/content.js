// Internship Hunt (EduMoon Skills Club). For 2nd year onwards.
// Kavya wants her first internship this summer. Teams help her find real ones, apply well, dodge fake offers and make the most of it.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end

const IH = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 40, board: false, eyebrow: `Round ${round} · ${name}` }, extra);

const HUNT = [
  ["Look in the right places", "College placement cell, the AICTE internship portal, company career pages, seniors and local startups."],
  ["One page, one link", "A one-page resume and one link to your real work."],
  ["Write to a person", "Short, specific messages beat mass copy-paste."],
  ["Never pay to intern", "Real internships don’t charge registration, training or certificate fees."],
  ["Check the company", "Real website, real people on LinkedIn, an email from the company’s own domain."],
  ["Read the offer", "Role, dates, stipend, hours and who your mentor is, in writing."],
  ["Update every week", "Tell your mentor what you did, what’s next and where you’re stuck."],
  ["Leave with proof", "A project you can show, a LinkedIn post and a recommendation."]
];

window.GAME = {
  id: "internship-hunt",
  title: "Internship Hunt",
  club: "Skills Club",
  tagline: "Find a real internship, apply the right way, and spot fake offers before they cost you.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year onwards (1st years welcome)", time: "40 minutes", level: "Beginner",
    about: "Kavya, a 2nd-year student, wants her first internship this summer. In 6 rounds, teams help her: where to find real internships, what to send, how to write to a startup, how to spot fake internship scams (the most important round), what to check in an offer letter, and how to make the most of the internship once she gets it.",
    outcomes: "Students know where real internships are posted, can apply with a short targeted message, can recognise the common signs of fake internships, and know what to check before accepting an offer.",
    tone: "Practical and protective. Fake internships that ask students for money are common, so spend extra time on Round 4 and ask if anyone has received such a message. Kavya and every company in the game are made up.",
    extra: [["Do this live", "Open the AICTE internship portal (internship.aicte-india.org) and your college placement page on the projector after Round 1, and show students where to register."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Hired",
    rulesEyebrow: "How Internship Hunt works", rulesTitle: "Find it. Apply right. Dodge the fakes.",
    learnText: "The host explains one step of the internship hunt.", crackTitle: "Answer",
    crackText: "Pick the best move for Kavya on your phone and lock it in.",
    rulesExtra: "Faster answers score more. Speak (optional): <b>+100</b>. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Many students learn this the hard way!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "found the best internship!", endLine: "Kavya got a real internship, and so can you."
  },
  offerEyebrow: "EduMoon Skills Club · Internship Hunt results",
  offerTitle: "Your hunter rank",
  offers: [
    { min: 0.7, icon: "crown", title: "Offer Magnet", text: "You know where to look and what to avoid. Apply to 3 real internships this week." },
    { min: 0.45, icon: "rocket", title: "Smart Applicant", text: "Strong! Update your resume and register on the AICTE portal today." },
    { min: 0.2, icon: "lightbulb", title: "Hunter in Training", text: "Good start. Save the 8 rules, especially “never pay to intern”." },
    { min: 0, icon: "book-open", title: "First-Time Hunter", text: "Everyone starts here. Ask a senior how they got their first internship." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · Internship Hunt",
      title: "Kavya, 2nd year CSE, wants her first internship this summer. She has 2 small projects, a lot of energy, and 5 “internship offers” in her inbox. Some are real. Some are traps.",
      cards: [["search", "Find real internships"], ["mail", "Apply the right way"], ["shield", "Spot fake offers"]]
    },
    { type: "rules" },

    // ---------- Round 1: Where to look ----------
    {
      type: "learn", door: 1,
      title: "Real internships are posted in real places.",
      points: [["Your college", "Placement cell, department notices and faculty"], ["Official portals", "The AICTE internship portal lists internships for students"], ["Companies and people", "Company career pages, seniors, alumni and local startups"]],
      highlightLast: true,
      side: { label: "Where Kavya should look", items: [["landmark", "Placement cell", "Notices and drives"], ["search", "AICTE portal", "internship.aicte-india.org"], ["users", "Seniors and alumni", "Referrals and tips"]] }
    },
    IH(1, "Where to Look", {
      prompt: "Kavya wants a safe place to start her search. Best first stop?",
      options: ["A random Telegram group with 50,000 members", "A forwarded message from an unknown number", "The placement cell and AICTE portal", "A pop-up ad promising “100% internship”"], answer: 2,
      hint: "Official and checked.",
      note: "Start with official sources. Then add company pages, seniors and alumni.", badge: "search"
    }),
    IH(1, "Where to Look", {
      prompt: "A senior did an internship at a small startup near RTIH last year. What should Kavya do?",
      options: ["Ask the senior how they got in", "Wait for the startup to post on Instagram", "Apply to the same startup without telling anyone", "Assume small startups don’t take interns"], answer: 0,
      hint: "People are often the best way in.",
      note: "Many internships, especially at startups, are never posted. Seniors and alumni are a goldmine.", badge: "users"
    }),
    IH(1, "Where to Look", {
      prompt: "When should Kavya start looking for a summer internship?",
      options: ["The week summer holidays begin", "2 to 3 months before the summer", "After her final exams results come out", "Only in her final year of college"], answer: 1,
      hint: "Good ones fill up early.",
      note: "Start early. Many companies pick summer interns months in advance.", badge: "clock",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: What to send ----------
    {
      type: "learn", door: 2,
      title: "Send less, but make it specific.",
      points: [["One-page resume", "Education, skills, projects with links"], ["One link to proof", "GitHub, a portfolio, or a Drive folder of your work"], ["Tailor it", "Two lines on why this company and this role"]],
      highlightLast: true,
      side: { label: "Kavya’s application kit", items: [["file-text", "Resume", "1 page, PDF"], ["code", "Proof", "GitHub with 2 projects"], ["mail", "Message", "4 to 5 lines, personal"]] }
    },
    IH(2, "Apply Right", {
      prompt: "Kavya’s two projects are small. Should she still include them?",
      options: ["No, only big projects matter to companies", "Yes, with a link to each", "No, list her school marks instead", "Yes, but say they were built by a big team"], answer: 1,
      hint: "Small and real beats big and fake.",
      note: "Yes. A small project with a working link shows more than a long list of skills.", badge: "code"
    }),
    IH(2, "Apply Right", {
      prompt: "Which approach gets more replies?",
      options: ["The same message sent to 200 companies in one day", "A long 2-page letter about her life story", "10 personal messages to companies she checked", "Only applying where her friends applied"], answer: 2,
      hint: "Quality over quantity.",
      note: "Personal messages to companies you actually looked at get far more replies than mass copy-paste.", badge: "mail",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Writing to a startup ----------
    {
      type: "learn", door: 3,
      title: "Writing to a startup: short, specific, easy to say yes to.",
      points: [["Subject line", "Role + your name + one strength"], ["Body", "Who you are, what you built, why them, one clear ask"], ["Follow up", "Once, politely, after about a week"]],
      highlightLast: true,
      side: { label: "A strong subject line", items: [["mail", "Weak", "“Internship”"], ["badge-check", "Strong", "“Frontend intern: Kavya, built a canteen menu site”"], ["clock", "Follow-up", "After 5 to 7 days"]] }
    },
    IH(3, "Write to a Startup", {
      prompt: "Best first line to a startup founder?",
      options: ["“Sir, please give me internship, I will work hard and do any task.”", "“Hi, I’m Kavya, 2nd-year CSE. I built a canteen menu site (link).”", "“Hello, are there any vacancies in your company?”", "“Dear Sir/Madam, I want to inform you about myself.”"], answer: 1,
      hint: "Who you are and proof, in one line.",
      note: "Specific and real. The founder knows who you are and what you can do in 5 seconds.", badge: "mail"
    }),
    IH(3, "Write to a Startup", {
      prompt: "No reply after a week. What now?",
      options: ["Send one short, polite follow-up", "Message them every day until they reply", "Post publicly that the startup ignores students", "Give up on all startups forever"], answer: 0,
      hint: "Once, politely.",
      note: "One follow-up is normal and often gets a reply. Founders are busy, not rude.", badge: "clock",
      board: true, boardLabel: "after Round 3"
    }),

    // ---------- Round 4: Spot the fake ----------
    {
      type: "learn", door: 4,
      title: "Fake internships are everywhere. Learn the signs.",
      points: [["They ask for money", "Registration, training, security deposit or certificate fees"], ["Too good, too fast", "No interview, huge stipend, “selected” within minutes"], ["Wrong details", "Free email addresses, no real website, pressure to pay today"]],
      highlightLast: true,
      side: { label: "Red flags", items: [["x", "“Pay ₹1,999 to confirm”", "Real internships pay you"], ["x", "Offer from a free email", "Not the company’s own domain"], ["x", "“Only 2 seats left, pay today”", "Pressure is a trap"]] }
    },
    IH(4, "Spot the Fake", {
      prompt: "“Congratulations! You’re selected for a paid internship. Pay ₹1,999 registration fee to confirm your seat.” What is this?",
      options: ["A normal step for every company", "A good deal, since it’s a paid internship", "Almost certainly a scam", "Fine, if the fee is refundable"], answer: 2,
      hint: "Who pays whom in a real internship?",
      note: "A scam. Real internships never ask you to pay to join. Don’t pay, and warn your friends.", badge: "shield"
    }),
    IH(4, "Spot the Fake", {
      prompt: "An offer says it’s from a famous IT company, but the email comes from a free email address and there was no interview. Best move?",
      options: ["Accept quickly before someone else does", "Reply with your Aadhaar and bank details", "Forward it to all your classmates", "Check the official careers page"], answer: 3,
      hint: "Verify from the source.",
      note: "Real offers come after interviews, from the company’s own email domain. Check the official careers page or call the official number.", badge: "search"
    }),
    IH(4, "Spot the Fake", {
      prompt: "Which of these is the safest sign that an internship is real?",
      options: ["A big stipend promised in the first message", "A “certificate guaranteed” in every message", "A deadline to decide within one hour", "An interview and a named mentor"], answer: 3,
      hint: "Real companies want to know you first.",
      note: "Real internships have an interview, a role you can describe, and a real person you’ll work with.", badge: "badge-check"
    }),
    IH(4, "Spot the Fake", {
      prompt: "Kavya almost paid a fake internship fee. What should she do now?",
      options: ["Keep it secret so nobody laughs at her", "Pay a smaller amount to test if it’s real", "Report it and warn her classmates", "Reply to the scammers to argue"], answer: 2,
      hint: "Protect others too.",
      note: "Report it (in India, the cybercrime helpline is 1930) and warn friends. If money was paid, report it quickly.", badge: "shield",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: The offer letter ----------
    {
      type: "learn", door: 5,
      title: "Got an offer? Read it before you say yes.",
      points: [["The basics", "Role, start and end dates, hours, online or in office"], ["Money", "Stipend amount and when it’s paid, or clearly unpaid"], ["People and proof", "Who your mentor is, and whether you get a certificate or letter"]],
      highlightLast: true,
      side: { label: "Kavya’s offer checklist", items: [["file-text", "Role and dates", "In writing"], ["landmark", "Stipend", "Amount and timing"], ["users", "Mentor", "A real name"]] }
    },
    IH(5, "Read the Offer", {
      prompt: "The offer says “Internship: various tasks as needed.” What should Kavya ask?",
      options: ["Nothing, it sounds flexible and fun", "What her work is and who guides her", "Whether she can skip the internship work", "If she can get the certificate on day one"], answer: 1,
      hint: "Vague roles can mean you learn nothing.",
      note: "Ask for the real work and the mentor. A clear role means you’ll have something to show at the end.", badge: "search"
    }),
    IH(5, "Read the Offer", {
      prompt: "An unpaid internship at a small startup promises real work and a mentor. Is it a scam?",
      options: ["Not necessarily: it isn’t pay-to-join", "Yes, every unpaid internship is a scam", "Yes, unless she pays a deposit first", "No, and she should pay them for the training"], answer: 0,
      hint: "Who is asking for money?",
      note: "Unpaid can be fine if you learn real skills. Paying THEM is the red flag. Decide based on the work and mentor.", badge: "lightbulb",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Make the most of it (double) ----------
    {
      type: "learn", door: 6,
      title: "Final round: make the internship count. Double points.",
      points: [["Weekly update", "What I did, what’s next, where I’m stuck"], ["Ask for feedback", "Early and often, then act on it"], ["Leave with proof", "A project to show, a post, and a recommendation"]],
      highlightLast: true,
      side: { label: "End of internship", items: [["code", "Proof", "Add the project to GitHub (if allowed)"], ["file-text", "Post", "What you built and learned"], ["badge-check", "Ask", "A short recommendation"]] }
    },
    IH(6, "Make It Count", {
      double: true,
      prompt: "Kavya is stuck on a task for 2 days. Best move?",
      options: ["Keep trying alone for another whole week", "Copy a solution without understanding it", "Quietly stop doing that task", "Ask her mentor, showing what she tried"], answer: 3,
      hint: "Mentors expect questions.",
      note: "Ask early and show what you tried. It shows effort and saves everyone time.", badge: "users"
    }),
    IH(6, "Make It Count", {
      double: true,
      prompt: "The internship ends. What helps Kavya most for her next application?",
      options: ["A post, the project link, a recommendation", "Only the certificate, filed away safely at home", "Telling friends it was great", "Nothing, internships don’t matter later"], answer: 0,
      hint: "Proof others can see.",
      note: "Proof beats paper. A project, a post and a recommendation open the next door.", badge: "rocket"
    }),
    IH(6, "Make It Count", {
      double: true,
      prompt: "Which weekly message to her mentor is best?",
      options: ["“Everything is fine.”", "No message unless the mentor asks for one", "“Done: login page. Next: signup. Stuck: one API error.”", "“Can I get my certificate early?”"], answer: 2,
      hint: "Done, next, stuck.",
      note: "Done, next, stuck: three lines that make mentors trust you with bigger work.", badge: "mail",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best pitch wins +200", prompt: "You meet a startup founder at RTIH. In 30 seconds, ask for an internship: who you are, what you built, and what you can help with.", note: "The room votes for the founder-ready pitch.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "8 rules of the internship hunt", note: "Screenshot this. Rule 4 could save you money.", items: HUNT },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Careers, resumes, internships and startup games every week. Get ahead, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
