// Capture the Flag Lite (EduMoon Coding Club). For all years.
// A beginner CTF: find flags hidden in page source, encodings, ciphers, passwords and fake links. Ethics first.
// Step types used: story · rules · learn · door · speak · offer · wordlist · end
// Door kinds: "choice", "number", "bug" (relabelled: what is it, then tap the line)

const CQ = (round, name, extra) => Object.assign({ type: "door", kind: "choice", time: 60, board: false, eyebrow: `Round ${round} · ${name}` }, extra);
const CN = (round, name, extra) => CQ(round, name, Object.assign({ kind: "number", time: 60 }, extra));
const SPOT = { kind: "bug", time: 70, step1: "What is going on here?", step2: "Tap the line", say1: "First pick what’s going on.", say2: "Now tap the line.", partO: "the answer", partL: "the line", lineLabel: "line", bugLabel: "The line is" };

// The take-home card: the beginner CTF toolkit.
const TOOLKIT = [
  ["The golden rule", "Only test systems you own or have written permission to test. Everything else is a crime."],
  ["View source", "Ctrl+U in a browser. Look for comments and hidden fields."],
  ["Base64", "Letters, numbers, + and /, often ending in =. Decode it in any Base64 tool."],
  ["Binary and hex", "01000001 and 0x41 are both 65, the letter A."],
  ["Caesar and ROT13", "Shift each letter back. ROT13 shifts by 13; doing it twice gives the original."],
  ["Passwords", "Long beats complex. Sites should store a hash, never the password itself."],
  ["Read the real domain", "Look just before the first single /. That’s who you’re really talking to."],
  ["Where to practise", "picoCTF and OverTheWire Bandit are free, legal and made for beginners."]
];

window.GAME = {
  id: "ctf-lite",
  title: "Capture the Flag Lite",
  club: "Coding Club",
  tagline: "Your first Capture the Flag. Find the hidden flags, crack the codes, and learn to think like a defender.",
  art: window.STORY_ART,
  guide: {
    years: "All years (no security background needed)", time: "40 minutes", level: "Medium", mono: true,
    about: "Capture the Flag (CTF) contests are how security engineers practise. This is a gentle first one. In 6 rounds, teams find flags hidden in page source, decode Base64, binary and hex, break Caesar and ROT13 ciphers, learn how passwords are really stored, spot fake links, and solve a final multi-step capture. Every scenario uses made-up sites.",
    outcomes: "The basic CTF toolkit, an understanding of why sites must never trust what the browser sends, safer password and link habits, and a clear sense of where ethical hacking ends and crime begins.",
    tone: "Be clear from the first slide: these skills are for defending, and you only test systems you have permission to test. Celebrate curiosity. When a team cracks a flag, ask them how they did it.",
    extra: [["Ethics, every time", "If a student asks “Can I try this on my college portal?”, the answer is no, unless the college gives written permission. Point them to picoCTF and OverTheWire, which are built for practice."],
      ["Got a laptop?", "After the reveal you can show the decode in any free online Base64 or Caesar tool. It isn’t needed to play."]]
  },
  words: {
    round: "Round", unlocked: "Flag", badgeLabel: "Captured",
    rulesEyebrow: "How Capture the Flag Lite works", rulesTitle: "Learn the trick. Find the flag. Capture it first.",
    learnText: "The host shows one security trick.", crackTitle: "Capture",
    crackText: "Find the flag on your phone and lock it in.",
    rulesExtra: "Spot questions: <b>100</b> for the answer + <b>100</b> for the line. Round 6: <b>double</b>!",
    nobody: "Nobody captured this flag. Real CTF teams get stuck on these too!", cracked: "captured it",
    next: "Next round →", finale: "Next →", winner: "captured the most flags!", endLine: "All flags captured. Now go practise on picoCTF!"
  },
  offerEyebrow: "EduMoon Coding Club · CTF ranks",
  offerTitle: "Your hacker rank (the good kind)",
  offers: [
    { min: 0.7, icon: "crown", title: "Flag Master", text: "You think like a defender. Try the beginner challenges on picoCTF this week." },
    { min: 0.45, icon: "shield", title: "Security Analyst", text: "Strong! Start OverTheWire Bandit level 0. It teaches you Linux too." },
    { min: 0.2, icon: "key", title: "Code Breaker", text: "Good start. Practise Base64 and Caesar with the toolkit card." },
    { min: 0, icon: "lock", title: "Rookie", text: "Everyone starts here. Every security engineer captured their first flag once." }
  ],
  steps: [
    {
      type: "story", art: true,
      alert: "EduMoon Coding Club · CTF Lite",
      title: "18 flags are hidden in pages, codes and messages. Security teams practise exactly like this. Can your team capture them all?",
      cards: [["key", "Find flags in source, codes and ciphers"], ["shield", "Learn to think like a defender"], ["trophy", "Your score decides your rank"]]
    },
    { type: "rules" },

    // ---------- Round 1: Hidden in the source ----------
    {
      type: "learn", door: 1,
      title: "First: the rules. Then: view the source.",
      points: [["Only hack with permission", "Testing a system you don’t own is a crime under India’s IT Act. CTFs are legal practice"], ["Every page has source code", "Ctrl+U shows it. Developers sometimes leave secrets there"], ["The browser is not a safe", "Anything sent to your browser, a user can read and change"]],
      highlightLast: true,
      side: { label: "Golden rules", items: [["shield", "Permission first", "Only test what you own or are allowed to test"], ["key", "Practise legally", "picoCTF and OverTheWire"], ["search", "Report, don’t exploit", "Found a bug? Tell the owner"]] }
    },
    CQ(1, "Hidden in the Source", Object.assign({}, SPOT, {
      prompt: "The login page of CampusPortal (a practice site). What’s hiding here, and which line has the flag?",
      code: ["<h1>Welcome to CampusPortal</h1>", "<p>Please log in to continue</p>", "<!-- flag{view_source_wins} -->", "<button>Log in</button>"],
      outputOptions: ["An HTML comment that users can see in the source", "A secret only the server can read", "A broken button"], outputAnswer: 0, bugLine: 2,
      bugText: "flag{view_source_wins}. Comments don’t show on the page, but anyone can read them with View Source",
      hint: "Which line doesn’t show on the page but is still sent to the browser?",
      note: "Comments are invisible on the page, not secret. Never put passwords or keys in page source.", badge: "search"
    })),
    CQ(1, "Hidden in the Source", {
      prompt: "Which shortcut opens View Source in Chrome on Windows?",
      options: ["Ctrl+S", "Ctrl+P", "Ctrl+U", "Ctrl+H"], answer: 2,
      hint: "U, as in “Unveil”.",
      note: "Ctrl+U. On a Mac, it’s Cmd+Option+U. Ctrl+S saves, Ctrl+P prints, Ctrl+H opens history.", badge: "key"
    }),
    CQ(1, "Hidden in the Source", Object.assign({}, SPOT, {
      prompt: "A practice signup form. What’s the weakness, and which line could an attacker change?",
      code: ["<form action=\"/signup\">", "  <input name=\"username\">", "  <input type=\"hidden\" name=\"role\" value=\"student\">", "  <button>Sign up</button>", "</form>"],
      outputOptions: ["The username box is too small", "The server trusts a hidden field the user can change", "The button has no colour"], outputAnswer: 1, bugLine: 2,
      bugText: "the hidden role field. A user can edit it to “admin” before sending. The server must decide roles itself",
      hint: "Hidden from the page doesn’t mean hidden from the user.",
      note: "Never trust the browser. Anything in a form can be changed, so important decisions must be made on the server.", badge: "shield",
      board: true, boardLabel: "after Round 1"
    })),

    // ---------- Round 2: Encodings ----------
    {
      type: "learn", door: 2,
      title: "Encoding is not encryption.",
      points: [["Encoding just changes the format", "Anyone can reverse it, no key needed"], ["Spot Base64", "Letters, numbers, + and /, often ending in = or =="], ["Binary and hex are numbers", "Each byte can be a letter: 65 is A, 66 is B…"]],
      highlightLast: true,
      code: ["Text:    flag{base64}", "Base64:  ZmxhZ3tiYXNlNjR9"],
      output: "Same message, different format"
    },
    CQ(2, "Encodings", {
      prompt: "You find this string in a cookie. What is it most likely to be?",
      code: ["ZmxhZ3t5b3VfZm91bmRfbWV9"],
      options: ["A strong encrypted password", "Random noise", "Base64, which anyone can decode", "A virus"], answer: 2,
      hint: "Look at the characters it uses. Compare it with the example on the learn screen.",
      note: "It’s Base64 for flag{you_found_me}. It starts with ZmxhZ, just like the example. That’s “flag” in Base64.", badge: "search"
    }),
    CN(2, "Encodings", {
      prompt: "What is this binary number in decimal? Type the number.",
      code: ["01000001"],
      answer: 65,
      hint: "Only two bits are on: the 64 bit and the 1 bit.",
      trace: [["Bit values", "128 64 32 16 8 4 2 1"], ["Bits that are 1", "64 and 1"], ["64 + 1", "65, which is the letter A in ASCII"]],
      note: "65, the ASCII code for A. Computers store every letter you type as a number like this.", badge: "code"
    }),
    CN(2, "Encodings", {
      prompt: "What is hex 0x2A in decimal? Type the number.",
      code: ["0x2A"],
      answer: 42,
      hint: "In hex, A means 10. So 2A is 2 sixteens plus 10.",
      trace: [["2 × 16", "32"], ["A", "10"], ["32 + 10", "42"]],
      note: "42. Hex uses 0 to 9 and A to F, so one byte fits in exactly two hex digits.", badge: "zap",
      board: true, boardLabel: "after Round 2"
    }),

    // ---------- Round 3: Ciphers ----------
    {
      type: "learn", door: 3,
      title: "Old ciphers: shift the letters.",
      points: [["Caesar cipher", "Shift every letter by a fixed number. Shift 3: A becomes D"], ["ROT13", "A Caesar shift of 13. Apply it twice and you’re back where you started"], ["Easy to break", "Only 25 shifts to try. A computer does it instantly"]],
      highlightLast: true,
      code: ["Plain:    V I Z A G", "Shift 3:  Y L C D J"],
      output: "Shift each letter back by 3 to decode"
    },
    CQ(3, "Ciphers", {
      prompt: "This was encrypted with a Caesar shift of 3. What does it say?",
      code: ["IODJ"],
      options: ["CODE", "FLAG", "HACK", "LOCK"], answer: 1,
      hint: "Move each letter back by 3: I → F.",
      note: "FLAG. I → F, O → L, D → A, J → G.", badge: "key"
    }),
    CQ(3, "Ciphers", {
      prompt: "This was encrypted with ROT13. What does it say?",
      code: ["UNPX"],
      options: ["SAFE", "BYTE", "CODE", "HACK"], answer: 3,
      hint: "Shift each letter by 13. U → H.",
      note: "HACK. ROT13 is used to hide spoilers and puzzle answers, never real secrets.", badge: "lock"
    }),
    CN(3, "Ciphers", {
      prompt: "How many useful shifts does a Caesar cipher on the English alphabet have? (A shift of 0 doesn’t count.) Type the number.",
      answer: 25,
      hint: "A shift of 26 brings you back to the start.",
      note: "25. That’s why Caesar is so weak: you can try every key in seconds. Modern encryption has more keys than atoms in the universe.", badge: "target",
      board: true, boardLabel: "after Round 3"
    }),
    { type: "speak", eyebrow: "Speaking time · optional", prompt: "Explain in 20 seconds: what’s the difference between encoding and encryption?", note: "Use Base64 and Caesar as examples.", points: 100 },

    // ---------- Round 4: Passwords ----------
    {
      type: "learn", door: 4,
      title: "Passwords: long beats clever.",
      points: [["Length wins", "Every extra character multiplies the guesses an attacker needs"], ["Sites store a hash", "A one-way scramble. They check your password by hashing it again"], ["Limits stop guessing", "Lockouts and OTPs slow down attackers"]],
      highlightLast: true,
      side: { label: "Password strength", items: [["x", "Weak", "ravi2005 (a name and a year)"], ["lock", "Better", "A long random phrase"], ["shield", "Best", "A long phrase + a password manager + OTP"]] }
    },
    CQ(4, "Passwords", {
      prompt: "Which password is the hardest to crack?",
      options: ["P@ssw0rd!2024", "Ravi@2005#AU", "auto-mango-river-violet-42", "Qx7!kL"], answer: 2,
      hint: "Count the characters.",
      note: "A long passphrase of random words. P@ssw0rd! and name-plus-year are the first things attackers try, and 4 characters is far too short.", badge: "lock"
    }),
    CQ(4, "Passwords", {
      prompt: "How should a well-built website store your password?",
      options: ["As a salted hash, never the password itself", "In plain text, so it can email it back to you", "Encoded in Base64", "In a hidden field on the login page"], answer: 0,
      hint: "If the site can email you your old password, something is wrong.",
      note: "A salted hash. If the database leaks, attackers get scrambles, not passwords. Base64 is not protection; anyone can decode it.", badge: "shield"
    }),
    CN(4, "Passwords", {
      prompt: "How many different 4-digit PINs are there, from 0000 to 9999? Type the number.",
      answer: 10000,
      hint: "10 choices for each of 4 digits.",
      note: "10 × 10 × 10 × 10 = 10,000. Small enough that a bot can try them all, which is why apps lock you out after a few wrong tries.", badge: "key",
      board: true, boardLabel: "after Round 4"
    }),

    // ---------- Round 5: Fake links ----------
    {
      type: "learn", door: 5,
      title: "Every link has a real owner. Learn to find it.",
      points: [["Skip the https://", "The real domain ends at the next single /"], ["Read the domain right to left", "edubank.in.verify-now.xyz belongs to verify-now.xyz"], ["Watch the @", "Everything before an @ in a link is ignored"]],
      highlightLast: true,
      code: ["https://edubank.in.verify-now.xyz/login", "                   ^^^^^^^^^^^^^^", "Real owner: verify-now.xyz"],
      output: "Not EduBank at all"
    },
    CQ(5, "Fake Links", {
      prompt: "EduBank (a made-up bank) uses the domain edubank.in. Which link really goes to EduBank?",
      options: ["https://edubank.in.secure-login.xyz/", "https://edu-bank-secure.net/login", "https://edubank.in/login", "https://login@edubank-verify.co/"], answer: 2,
      hint: "Find the real domain in each one.",
      note: "Only edubank.in/login is EduBank. The others belong to secure-login.xyz, edu-bank-secure.net and edubank-verify.co.", badge: "globe"
    }),
    CQ(5, "Fake Links", Object.assign({}, SPOT, {
      prompt: "A message to students. Is it a scam, and which line gives it away?",
      code: ["From: CampusPortal Support", "Your exam hall ticket is blocked.", "Unblock in 30 minutes or miss your exam:", "https://campusportal.hallticket-unblock.xyz/login", "Enter your portal password and OTP."],
      outputOptions: ["Scam: fake link and a request for your OTP", "Real: it uses the college name", "Real: hall tickets do get blocked"], outputAnswer: 0, bugLine: 3,
      bugText: "the link’s real domain is hallticket-unblock.xyz, not your college’s site",
      hint: "Find the real domain in the link.",
      note: "Panic plus a link plus asking for an OTP is the classic phishing recipe. Go to your college site yourself instead of clicking.", badge: "shield"
    })),
    CQ(5, "Fake Links", {
      prompt: "Where does this link really take you?",
      code: ["https://edubank.in@evil-pages.xyz/login"],
      options: ["evil-pages.xyz", "edubank.in", "Your bank’s login page", "Nowhere, it’s broken"], answer: 0,
      hint: "What happens to everything before an @?",
      note: "evil-pages.xyz. The part before the @ is treated as a username and ignored. A sneaky trick attackers use.", badge: "search",
      board: true, boardLabel: "after Round 5"
    }),

    // ---------- Round 6: Final capture (double) ----------
    {
      type: "learn", door: 6,
      title: "Final capture: real CTFs stack tricks. Double points.",
      points: [["Ask: what format is this?", "Base64, binary, hex, a cipher?"], ["Peel one layer at a time", "Decode, look again, decode again"], ["Think like a defender", "Every trick today has a fix"]],
      highlightLast: true,
      side: { label: "Your toolkit", items: [["search", "View source", "Ctrl+U"], ["code", "Decode", "Base64, hex, binary"], ["key", "Shift letters", "Caesar and ROT13"]] }
    },
    CQ(6, "Final Capture", {
      double: true,
      prompt: "You find this in a page comment. It decodes in one step. What is the flag?",
      code: ["<!-- Q1RGe2RvdWJsZX0= -->"],
      options: ["It can’t be decoded without a key", "CTF{double}", "flag{base64}", "admin:admin"], answer: 1,
      hint: "Ends in =. Which encoding does that suggest?",
      note: "It’s Base64 for CTF{double}. Two tricks at once: hidden in a comment and encoded.", badge: "key"
    }),
    CQ(6, "Final Capture", {
      double: true,
      prompt: "A developer “protected” the admin password like this. What’s wrong?",
      code: ["// TODO remove before launch", "const adminPass = atob(\"c3VwZXJzZWNyZXQ=\");", "if (typed === adminPass) showAdmin();"],
      options: ["Nothing, it’s encrypted and safe from attackers", "The check should use = instead of ===", "Nothing, users can’t see the JavaScript", "Base64 isn’t secret, and the check runs in the browser"], answer: 3,
      hint: "Can a user read this JavaScript? Is Base64 protection?",
      note: "Two mistakes: JavaScript is sent to every browser, and atob() just decodes Base64 (it says “supersecret”). Password checks belong on the server.", badge: "shield"
    }),
    CN(6, "Final Capture", {
      double: true,
      prompt: "A practice site lets bots try unlimited PINs. A bot tries 1,000 PINs per second. How many seconds to try all 4-digit PINs? Type the number.",
      answer: 10,
      hint: "There are 10,000 PINs.",
      note: "10 seconds. That’s why lockouts, delays and OTPs matter. The fix is on the server: limit the tries.", badge: "timer",
      board: true, boardLabel: "after Round 6"
    }),

    // ---------- Final challenge, results, take-home ----------
    { type: "speak", eyebrow: "Final challenge · best answer wins +200", prompt: "You found a real security bug in an app. What do you do, step by step? 60 seconds.", note: "Best answers: don’t exploit it, don’t post it publicly, report it privately to the company (many have a security contact or bug bounty), and give them time to fix it.", points: 200 },
    { type: "offer" },
    { type: "wordlist", eyebrow: "Take it home", title: "Beginner CTF Toolkit", note: "Screenshot this. Then try picoCTF or OverTheWire Bandit, the legal way to practise.", items: TOOLKIT },
    {
      type: "end",
      joinTitle: "Join the EduMoon Coding Club",
      joinText: "Coding games, CTFs, escape rooms and project nights every week. No laptop needed to start.",
      joinButton: "Join the EduMoon community on WhatsApp",
      joinUrl: "https://chat.whatsapp.com/EqrtHVWwh3OI2aFhg6Zz6s"
    }
  ]
};
