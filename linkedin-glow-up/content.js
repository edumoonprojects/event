// LinkedIn Glow-Up (EduMoon Skills Club). For 2nd year onwards. The third Ravi game.
// Ravi got the job, but his LinkedIn profile still looks like a first-year account. Teams fix it in 6 rounds.
// Step types used: story · rules · learn · door · speak · compare · wordlist · end

const LQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 45, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
// "Tap the line on Ravi's profile" questions use the bug door with friendlier labels.
const PROFILE = { kind: "bug", time: 55, step1: "What’s the problem?", step2: "Tap the line on Ravi’s profile", say1: "First pick what’s wrong.", say2: "Now tap the line on Ravi’s profile.", partO: "the problem", partL: "the line", lineLabel: "line", bugLabel: "The line to fix is" };

// The take-home card: a 10-point profile checklist.
const CHECK = [
  ["A clear, friendly photo", "Your face, good light, plain background."],
  ["A headline that says what you do", "Role + skills + one proof. Not just “Student at…”."],
  ["A custom URL", "linkedin.com/in/your-name"],
  ["An About section with a hook", "Your first two lines show before “see more”."],
  ["Projects with links", "In Featured or Projects, with GitHub or a live link."],
  ["Skills you can explain", "5 to 10 real ones beat 50 random ones."],
  ["Experience with results", "Internships and roles with what you did, with numbers."],
  ["One post a month", "What you built, learned or won, and who helped."],
  ["Personal connection requests", "A short note saying why you want to connect."],
  ["Updated every semester", "New projects, roles and wins."]
];

window.GAME = {
  id: "linkedin-glow-up",
  title: "LinkedIn Glow-Up",
  club: "Skills Club",
  tagline: "Ravi got the job. His LinkedIn still looks like a first-year account. Give it a glow-up.",
  art: window.STORY_ART,
  guide: {
    years: "2nd year onwards", time: "35 minutes", level: "Beginner",
    about: "The third Ravi game, after Resume Rescue and HR Round. Ravi’s LinkedIn profile is holding him back. In 6 rounds, teams fix his photo and headline, About section, projects and Featured section, write his first good post, learn how to message seniors and recruiters, and spot the last mistakes. The game ends with Ravi’s Before → After profile and a 10-point checklist.",
    outcomes: "A profile structure that recruiters notice, a headline formula, how to write a first post without sounding fake, and how to message seniors so they actually reply.",
    tone: "Many students feel they have “nothing to show”. Remind them that class projects, college events and small wins all count. Encourage everyone to open their own LinkedIn during the game and fix one thing live.",
    extra: [["Live bonus", "After Round 2, give 2 minutes for everyone to update their own headline on their phone. Ask 2 or 3 people to read theirs aloud."]]
  },
  words: {
    round: "Round", unlocked: "Answer", badgeLabel: "Glowed up",
    rulesEyebrow: "How LinkedIn Glow-Up works", rulesTitle: "Spot it. Fix it. Get noticed.",
    learnText: "The host shares one LinkedIn tip.", crackTitle: "Fix",
    crackText: "Pick the fix on your phone and lock it in.",
    rulesExtra: "Line questions: <b>100</b> for the problem + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody got this one. Most profiles make this mistake!", cracked: "got it right",
    next: "Next round →", finale: "Next →", winner: "gave Ravi the best glow-up!", endLine: "Ravi’s profile is glowing. Now do yours!"
  },
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Skills Club · LinkedIn Glow-Up",
      title: "Ravi fixed his resume and cracked the HR round. But his LinkedIn still says “Student at college. Open to work.” Can your team give it a glow-up?",
      cards: [["user", "Ravi’s real-looking profile, full of common mistakes"], ["search", "6 rounds to find and fix them"], ["star", "See the Before → After, then fix your own"]]
    },
    { type: "rules" },

    // ---------- Round 1: Photo and headline ----------
    {
      type: "learn", door: 1,
      title: "The photo and headline are seen before anything else.",
      points: [["A clear, friendly photo", "Your face, good light, plain background. A phone photo is fine"], ["The headline formula", "Role you want + top skills + one proof"], ["It shows everywhere", "In search results, comments and connection requests"]],
      highlightLast: true,
      side: { label: "Weak → Strong headline", items: [["circle-x", "“Student at XYZ College”", "Says nothing about you"], ["circle-x", "“Aspiring Software Engineer”", "Everyone writes this"], ["circle-check", "“Junior Web Developer | React, JavaScript | Built a site used by 300+ students”", "Role, skills, proof"]] }
    },
    LQ(1, "Photo and Headline", {
      prompt: "Which profile photo is best?",
      options: ["A group photo from a college trip", "His face, good light, plain background", "A photo of his bike on a hill road", "No photo, to keep it private and professional"], answer: 1,
      hint: "What helps someone recognise and trust you?",
      note: "Profiles with a clear photo get noticed far more. It doesn’t need a studio, just a clear, friendly face.", badge: "user"
    }),
    LQ(1, "Photo and Headline", {
      prompt: "Best headline for Ravi?",
      options: ["“Junior Web Developer | React | Built a site used by 300+”", "“Open to work, please help me find a job”", "“Student at XYZ College”", "“Aspiring Software Engineer | Hardworking | Passionate”"], answer: 0,
      hint: "Role + skills + proof.",
      note: "Specific role, real skills and a number. Recruiters search by role and skill words, so this gets found.", badge: "target"
    }),
    LQ(1, "Photo and Headline", {
      prompt: "Which LinkedIn URL should Ravi use?",
      options: ["linkedin.com/in/ravi-kumar-8a7b3c2d91", "linkedin.com/in/ravikumar-dev", "linkedin.com/in/cutieravi143", "It doesn’t matter"], answer: 1,
      hint: "Remember Resume Rescue.",
      note: "A clean custom URL looks professional on a resume. You can change it in your profile settings.", badge: "link-2",
      board: true, boardLabel: "after Round 1"
    }),

    // ---------- Round 2: About section ----------
    {
      type: "learn", door: 2,
      title: "The About section: the first two lines decide if anyone reads on.",
      points: [["Start with a hook", "What you do or build, not “I am a hardworking person”"], ["Then your proof", "2 or 3 things you’ve built, done or won"], ["End with what you want", "The kind of role or people you’d like to connect with"]],
      highlightLast: true,
      side: { label: "A simple structure", items: [["flame", "Hook", "“I build web apps that students actually use.”"], ["badge-check", "Proof", "Projects, internship, hackathon"], ["target", "Goal", "“Looking for junior web developer roles.”"]] }
    },
    LQ(2, "About Section", Object.assign({}, PROFILE, {
      prompt: "Ravi’s About section. Which line should go?",
      code: ["I build web apps that students actually use.", "My college events site handled registrations for 300+ students.", "I am a hardworking, honest, dedicated, passionate and sincere person.", "I’m looking for junior web developer roles where I can keep learning."],
      outputOptions: ["It’s a list of claims with no proof", "It’s too specific", "It should be the first line"], outputAnswer: 0, bugLine: 2,
      bugText: "five adjectives, zero proof. The lines around it already show those qualities",
      hint: "Which line could be on everyone’s profile?",
      note: "Show, don’t tell. The project line proves he’s hardworking better than the word does.", badge: "x"
    })),
    LQ(2, "About Section", {
      prompt: "Best first line for Ravi’s About section?",
      options: ["“I build web apps that students use.”", "“Welcome to my profile!!! Thanks for visiting”", "“I am currently pursuing B.Tech.”", "“Hi, I am Ravi Kumar, son of…”"], answer: 0,
      hint: "Which line makes you want to read the next one?",
      note: "Only about two lines show before “see more”. Make them about what you do.", badge: "flame"
    }),
    LQ(2, "About Section", {
      prompt: "How long should a student’s About section be?",
      options: ["As long as a full essay about his life", "It doesn’t need one at all", "One word that describes him", "About 3 to 6 short lines"], answer: 3,
      hint: "Long enough for hook, proof and goal.",
      note: "Short and clear. Hook, proof, goal. Recruiters skim.", badge: "file-text",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Projects and Featured ----------
    {
      type: "learn", door: 3,
      title: "Your projects are your proof. Make them easy to see.",
      points: [["The Featured section", "Pin your best project, post or certificate at the top"], ["Projects need links", "GitHub, a live site, a demo video"], ["Say what it does, with a number", "Just like on your resume"]],
      highlightLast: true,
      side: { label: "What to feature", items: [["code", "Your best project", "With a link and one-line result"], ["award", "A real win", "Hackathon, competition, publication"], ["file-text", "A post you wrote", "About something you built or learned"]] }
    },
    LQ(3, "Projects", {
      prompt: "What should Ravi pin at the top of his Featured section?",
      options: ["A photo of his college main building", "A motivational quote about success", "His events site, live, used by 300+", "A certificate for a 1-hour webinar"], answer: 2,
      hint: "What proves he can do the job?",
      note: "The strongest proof goes first. A live link lets a recruiter see it in one click.", badge: "star"
    }),
    LQ(3, "Projects", {
      prompt: "Which project description is strongest?",
      options: ["“Website. HTML, CSS, JavaScript, Bootstrap, GitHub, Netlify.”", "“Events site that handled 300+ fest registrations. Live link.”", "“Very good project, please check it out.”", "“Did a website project for the college.”"], answer: 1,
      hint: "Action + what + number + link.",
      note: "The same rule as your resume: action, what, a number, and proof.", badge: "code"
    }),
    LQ(3, "Projects", {
      prompt: "Ravi has 25 certificates. What should he do with them on LinkedIn?",
      options: ["Add the 2 or 3 where he built something", "Add none, certificates don’t matter", "Post each one as a separate post", "Add all 25 to look hardworking"], answer: 0,
      hint: "Remember Resume Rescue.",
      note: "Quality over quantity. Too many certificates hide the ones that matter.", badge: "award",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Read your own LinkedIn headline aloud, or the one you’ll write tonight.", note: "Role + skills + proof. The room can suggest one improvement.", points: 100 },

    // ---------- Round 4: The first post ----------
    {
      type: "learn", door: 4,
      title: "A good post is about what you did and learned, not just “thrilled to announce”.",
      points: [["What happened", "One clear line: what you built, won or finished"], ["What you learned", "One real lesson, specific to you"], ["Who helped", "Tag mentors or teammates. People love being thanked"]],
      highlightLast: true,
      side: { label: "Post ideas for students", items: [["code", "A project you finished", "With a screenshot and link"], ["award", "A hackathon or event", "What you built in 24 hours"], ["lightbulb", "Something you learned", "“3 things I wish I knew about Git”"]] }
    },
    LQ(4, "The First Post", {
      prompt: "Ravi finished his internship. Which post opening is best?",
      options: ["“Internship over. Bye.”", "A post with only 30 hashtags and a photo", "“I’m thrilled and humbled to announce that…”", "“8 weeks, 14 bugs fixed. Here’s what I learned:”"], answer: 3,
      hint: "Which first line makes you want to read more?",
      note: "Specific numbers and a promise of a lesson. It sounds like a real person, not a template.", badge: "message-circle"
    }),
    LQ(4, "The First Post", Object.assign({}, PROFILE, {
      prompt: "Ravi’s draft post. Which line should change?",
      code: ["I just finished my 8-week internship at TechNova.", "I fixed 14 bugs in their billing app and learned how real code reviews work.", "Thanks to Anil sir for patiently reviewing every pull request.", "#internship #coding #java #python #ai #ml #success #motivation #hustle #trending"],
      outputOptions: ["Too many unrelated hashtags make it look spammy", "It has too few hashtags", "It should be the first line"], outputAnswer: 0, bugLine: 3,
      bugText: "10 hashtags, most unrelated. Use 3 to 5 that match the post",
      hint: "Did he use Java, AI or ML in this internship?",
      note: "A few relevant hashtags help people find your post. A long list of random ones looks like spam.", badge: "x"
    })),
    LQ(4, "The First Post", {
      prompt: "How often should a student post on LinkedIn?",
      options: ["Only on birthdays and festivals", "5 times a day to stay visible to recruiters", "When there’s something real to share", "Never, students shouldn’t post"], answer: 2,
      hint: "Quality or quantity?",
      note: "Regular, real posts beat daily filler. A project, an event, a lesson: that’s plenty.", badge: "clock",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Messaging seniors and recruiters ----------
    {
      type: "learn", door: 5,
      title: "A good message is short, specific and easy to say yes to.",
      points: [["Who you are", "One line: name, college, year"], ["Why them", "Something specific: their role, a post, your shared college"], ["A small, clear ask", "10 minutes of advice, not “please give me a job”"]],
      highlightLast: true,
      side: { label: "Never send", items: [["x", "“Hi”", "And nothing else"], ["x", "“Sir please refer me”", "To a stranger, with no context"], ["x", "Your resume with no message", "Nobody knows why"]] }
    },
    LQ(5, "Messaging", {
      prompt: "Ravi wants advice from Sneha, a senior from his college now at a product company. Best message?",
      options: ["“Hi Sneha, final-year CSE from your college. Saw your post on product companies. Could I ask 2 questions?”", "His resume, with no message at all", "“Hi”", "“Sir/madam please refer me in your company, I am very hardworking and need this job urgently”"], answer: 0,
      hint: "Who he is, why her, a small ask.",
      note: "Specific, respectful and easy to say yes to. Advice first; referrals often come later, once she knows him.", badge: "message-circle"
    }),
    LQ(5, "Messaging", {
      prompt: "When sending a connection request to a recruiter, Ravi should…",
      options: ["Send 10 requests to the same person until one is accepted", "Ask for a job in the very first line", "Send it with no note at all", "Add a short note on who he is and why"], answer: 3,
      hint: "Would you accept a request from a stranger with no note?",
      note: "A one or two line note makes a real connection much more likely to be accepted.", badge: "users"
    }),
    LQ(5, "Messaging", {
      prompt: "Sneha replied and gave great advice. What should Ravi do next?",
      options: ["Immediately ask her for a referral", "Thank her, try it, update her later", "Ask her to help with his assignment", "Nothing, the conversation is over"], answer: 1,
      hint: "How do you turn one message into a real connection?",
      note: "Thank, act, update. That’s how one message becomes a mentor.", badge: "heart",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: The final check (double) ----------
    {
      type: "learn", door: 6,
      title: "The final check: small mistakes, big impression.",
      points: [["Old information", "Wrong year, an old email, a role that ended"], ["Unprofessional bits", "A nickname, a joke headline, random posts"], ["Missing pieces", "No location, no contact info, an empty Skills section"]],
      highlightLast: true,
      side: { label: "Final round", items: [["zap", "Double points", "Still anyone’s game!"], ["search", "Spot the last mistakes", "On Ravi’s profile"], ["star", "Then the Before → After", "The full glow-up"]] }
    },
    LQ(6, "Final Check", Object.assign({}, PROFILE, {
      double: true,
      prompt: "Ravi’s profile top section. Which line should change?",
      code: ["Ravi Kumar", "Junior Web Developer | React, JavaScript | Built a site used by 300+ students", "Visakhapatnam, Andhra Pradesh", "Contact: cutieravi143@gmail.com"],
      outputOptions: ["It’s an unprofessional email address", "The location is too specific", "The name should be in capitals"], outputAnswer: 0, bugLine: 3,
      bugText: "a nickname email. Use his name-based one: ravi.kumar@gmail.com",
      hint: "Remember Resume Rescue, Round 2.",
      note: "Everything else is strong. One old detail can undo it.", badge: "mail"
    })),
    LQ(6, "Final Check", Object.assign({}, PROFILE, {
      double: true,
      prompt: "Ravi’s Skills section. Which line should change?",
      code: ["JavaScript", "React", "HTML and CSS", "Git and GitHub", "Blockchain, AI, ML, Cloud, Cybersecurity, IoT, AR/VR"],
      outputOptions: ["It lists skills he can’t back up", "It has too few skills", "It should be at the top"], outputAnswer: 0, bugLine: 4,
      bugText: "buzzwords he hasn’t used. List only skills you can explain in an interview",
      hint: "Remember HR Round, Round 4.",
      note: "Every listed skill can become an interview question. Real skills, backed by projects, win.", badge: "shield"
    })),
    LQ(6, "Final Check", {
      double: true,
      prompt: "How often should Ravi update his LinkedIn profile?",
      options: ["Every day, even if nothing changed", "Once, when he creates the profile", "Every semester, or after a new win", "Only when he’s looking for a job"], answer: 2,
      hint: "Recruiters look at profiles even when you’re not looking.",
      note: "Keep it updated as you go. Opportunities come when you least expect them.", badge: "clock",
      board: true, boardLabel: "after Round 6"
    }),

    {
      type: "compare", eyebrow: "You gave it a glow-up", title: "Ravi’s LinkedIn: Before → After",
      before: ["Photo: a group photo from Goa", "Headline: Student at XYZ College", "About: I am a hardworking, honest, dedicated person.", "Featured: empty", "Skills: 40 random skills", "Contact: cutieravi143@gmail.com", "Posts: none, or 30 hashtags"],
      after: ["Photo: clear face, good light, plain background", "Headline: Junior Web Developer | React, JavaScript | Built a site used by 300+ students", "About: I build web apps that students actually use…", "Featured: events site, with the live link", "Skills: 6 real skills, each backed by a project", "Contact: ravi.kumar@gmail.com · linkedin.com/in/ravikumar-dev", "Posts: one real internship post a month"],
      note: "Same Ravi. Now recruiters can see in 10 seconds what he can do."
    },
    { type: "speak", eyebrow: "Final challenge · best one wins +200", prompt: "Write and read out a 3-line message to a senior you admire, asking for 10 minutes of advice.", note: "Who you are, why them, a small ask. The room claps; the host picks the best one.", points: 200 },
    { type: "wordlist", eyebrow: "Take it home", title: "The 10-Point LinkedIn Checklist", note: "Screenshot this. Fix 3 things on your profile tonight.", items: CHECK },
    {
      type: "end",
      joinTitle: "Join the EduMoon Skills Club",
      joinText: "Resumes, LinkedIn, interviews and career games every week. Get noticed, together.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
