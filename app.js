// Subject → lessons mapping
console.log("🚀 App loading...");

// Immediate test
setTimeout(() => {
  const nextBtn = document.querySelector("#nextBtn");
  console.log("Button check:", nextBtn ? "✅ Found" : "❌ Missing");
}, 1000);

// === CATEGORY STRUCTURE ===
const categories = {
  finance: {
    id: "finance",
    icon: "💰",
    title: "Finance & Markets",
    subtitle: "Money, investing, and crypto",
    color: "#FFD700",
    subjects: ["money", "investing", "crypto"]
  },
  sciences: {
    id: "sciences",
    icon: "🔬",
    title: "Sciences",
    subtitle: "Biology, physics, and climate",
    color: "#4A90E2",
    subjects: ["biology", "nuclear", "glaciers", "blackholes", "science"]
  },
  human: {
    id: "human",
    icon: "🧠",
    title: "Human Systems",
    subtitle: "Psychology, game theory, history",
    color: "#9B59B6",
    subjects: ["psych", "humans", "history"]
  },
  tech: {
    id: "tech",
    icon: "⚙️",
    title: "Technology & Resources",
    subtitle: "Systems, space, and materials",
    color: "#E74C3C",
    subjects: ["maths", "space", "minerals"]
  },
  existential: {
    id: "existential",
    icon: "🌋",
    title: "Existential Risks",
    subtitle: "World-ending scenarios",
    color: "#E67E22",
    subjects: ["apocalypse"]
  }
};

// Subject metadata for navigation
const subjectMeta = {
  money: { icon: "💵", title: "Economics Hub", subtitle: "How Money Works" },
  investing: { icon: "📈", title: "Investing District", subtitle: "Stock Markets & Strategy" },
  crypto: { icon: "🪙", title: "Crypto Wild West", subtitle: "Digital Gold & Chaos" },
  biology: { icon: "🧬", title: "Bio Lab", subtitle: "CRISPR & Immortality" },
  nuclear: { icon: "☢️", title: "Nuclear Core", subtitle: "Atoms & Explosions" },
  glaciers: { icon: "❄️", title: "Glacier Lab", subtitle: "Frozen Time Machines" },
  blackholes: { icon: "🌌", title: "Black Hole Zone", subtitle: "Cosmic Violence" },
  science: { icon: "🔬", title: "Science Lab", subtitle: "Placebo Effect" },
  psych: { icon: "🧠", title: "Psychology Quarter", subtitle: "Cognitive Biases" },
  humans: { icon: "🧩", title: "Game Theory Lab", subtitle: "Strategic Decisions" },
  history: { icon: "🏛️", title: "History Port", subtitle: "Empire Collapse" },
  maths: { icon: "⌨️", title: "Tech Grid", subtitle: "Path Dependence" },
  space: { icon: "🚀", title: "Cosmic History", subtitle: "The Space Race" },
  minerals: { icon: "⚡", title: "Resource Mines", subtitle: "Lithium, Copper & Power" },
  apocalypse: { icon: "🌋", title: "Apocalypse Zone", subtitle: "World-Ending Scenarios" },
  economics: { icon: "💰", title: "Economics City", subtitle: "Planned Economies" }
};

const subjectLessons = {
  economics: [
    {
      id: 1,
      type: "content",
      title: "What is a planned economy?",
      paragraphs: [
        "In a planned economy, the government takes control of the big economic decisions: what gets produced, how much is made, and how it is allocated.",
        "Instead of buyers and sellers shaping the market, the state plays conductor — setting targets for factories, farms, and services."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Who usually sets prices in a planned economy?",
      options: [
        { id: "a", text: "The government", correct: true },
        { id: "b", text: "Individual buyers and sellers", correct: false },
        { id: "c", text: "Private companies negotiating freely", correct: false }
      ],
      explanation:
        "In a planned economy, key prices are typically set by the state as part of the overall plan, not left to market forces."
    },
    {
      id: 3,
      type: "content",
      title: "Strengths and weaknesses",
      paragraphs: [
        "Advantage: a planned economy can move resources quickly towards national goals — for example, rapid industrialisation or wartime production.",
        "Weakness: because it doesn’t rely on real-time customer choices, it often misjudges what people actually want, leading to shortages of some goods and surpluses of others."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "Which outcome fits a planned economy?",
      options: [
        { id: "a", text: "Long queues and shortages for some goods", correct: true },
        { id: "b", text: "Instant price spikes whenever demand rises", correct: false },
        { id: "c", text: "Unlimited product choice on every shelf", correct: false }
      ],
      explanation:
        "Planned systems have a history of queues and shortages, because central planners can’t perfectly predict changing preferences."
    }
  ],

  // NEW: space + history subject
  space: [
    {
      id: 1,
      type: "content",
      title: "What was the Space Race?",
      paragraphs: [
        "The Space Race was a Cold War competition between the United States and the Soviet Union to achieve major milestones in space exploration.",
        "It wasn't just about rockets — it was about proving technological power, national prestige, and which system looked stronger to the rest of the world."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Which two countries were the main rivals in the Space Race?",
      options: [
        { id: "a", text: "United States and Soviet Union", correct: true },
        { id: "b", text: "United Kingdom and France", correct: false },
        { id: "c", text: "China and Japan", correct: false }
      ],
      explanation:
        "The Space Race was mainly between the USA and the USSR, as part of the wider Cold War rivalry."
    },
    {
      id: 3,
      type: "content",
      title: "Key milestones",
      paragraphs: [
        "1957: Sputnik 1 becomes the first artificial satellite in orbit, launched by the Soviet Union — a huge shock to the world.",
        "1961: Yuri Gagarin becomes the first human in space.",
        "1969: Apollo 11 lands the first humans on the Moon, with Neil Armstrong and Buzz Aldrin walking on the surface."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "Which of these was the first artificial satellite in space?",
      options: [
        { id: "a", text: "Sputnik 1", correct: true },
        { id: "b", text: "Apollo 11", correct: false },
        { id: "c", text: "Hubble Space Telescope", correct: false }
      ],
      explanation:
        "Sputnik 1, launched by the Soviet Union in 1957, was the first artificial satellite in Earth orbit."
    }
  ],

  // Psychology: Cognitive biases
  psych: [
    {
      id: 1,
      type: "content",
      title: "Mental shortcuts that run your life",
      paragraphs: [
        "Your brain uses cognitive biases — mental shortcuts that help you make quick decisions without burning too much energy.",
        "The problem? These shortcuts evolved for a different world. They're fast, but not always accurate. And they run quietly in the background, shaping your choices without you noticing."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why does your brain use cognitive biases?",
      options: [
        { id: "a", text: "To save energy and make quick decisions", correct: true },
        { id: "b", text: "To confuse you deliberately", correct: false },
        { id: "c", text: "Because logic is too boring", correct: false }
      ],
      explanation:
        "Biases are efficiency tools. Your brain can't analyse every detail, so it takes shortcuts — which sometimes backfire."
    },
    {
      id: 3,
      type: "content",
      title: "Confirmation bias in action",
      paragraphs: [
        "Confirmation bias makes you search for, interpret, and remember information that confirms what you already believe.",
        "Example: You think a politician is corrupt. Every news story gets filtered through that lens — you notice evidence that supports it and ignore evidence that doesn't. Both sides of every argument do this."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "What does confirmation bias make you do?",
      options: [
        { id: "a", text: "Look for information that confirms your existing beliefs", correct: true },
        { id: "b", text: "Change your mind when faced with facts", correct: false },
        { id: "c", text: "Weigh all evidence equally", correct: false }
      ],
      explanation:
        "Confirmation bias is your brain's tendency to cherry-pick evidence that fits your current worldview."
    },
    {
      id: 5,
      type: "content",
      title: "The availability heuristic",
      paragraphs: [
        "You judge how likely something is based on how easily examples come to mind — not based on actual statistics.",
        "Plane crashes feel scarier than car accidents because they're dramatic and reported everywhere. But statistically? You're far safer in a plane. Your brain doesn't run the numbers — it remembers the vivid story."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Why do plane crashes feel more dangerous than they actually are?",
      options: [
        { id: "a", text: "They're dramatic and easy to remember", correct: true },
        { id: "b", text: "They happen more often than car crashes", correct: false },
        { id: "c", text: "Statistics are intentionally hidden", correct: false }
      ],
      explanation:
        "The availability heuristic tricks you — memorable events feel more common than they are."
    }
  ],

  // Technology: QWERTY and path dependence
  maths: [
    {
      id: 1,
      type: "content",
      title: "Why QWERTY still exists",
      paragraphs: [
        "The QWERTY keyboard layout was designed in the 1870s for mechanical typewriters. The goal? Prevent jams by separating commonly used letter pairs.",
        "Better layouts exist — like Dvorak, which is faster and more comfortable. But QWERTY won anyway. This is path dependence: once something becomes the standard, switching has a cost that's hard to justify."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why was QWERTY originally designed?",
      options: [
        { id: "a", text: "To prevent mechanical typewriter jams", correct: true },
        { id: "b", text: "To maximize typing speed", correct: false },
        { id: "c", text: "Because it spells a word", correct: false }
      ],
      explanation:
        "QWERTY was optimized for old mechanical constraints, not for your fingers. But we're stuck with it now."
    },
    {
      id: 3,
      type: "content",
      title: "The lock-in effect",
      paragraphs: [
        "Once millions of people learned QWERTY, it became the default. Schools taught it. Jobs required it. Keyboards were manufactured for it.",
        "Switching to a 'better' system means retraining everyone, replacing hardware, and convincing an entire industry to change at once. The cost is too high — even if the new system is genuinely better."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "What keeps QWERTY dominant today?",
      options: [
        { id: "a", text: "The cost of switching to something new is too high", correct: true },
        { id: "b", text: "It's still the fastest possible layout", correct: false },
        { id: "c", text: "No better alternatives have been invented", correct: false }
      ],
      explanation:
        "Path dependence means inferior systems can win if they get there first. Switching costs create lock-in."
    },
    {
      id: 5,
      type: "content",
      title: "Path dependence everywhere",
      paragraphs: [
        "QWERTY is just one example. The same principle applies to: why we drive on different sides of the road in different countries, why electric vs gasoline cars took so long to compete, and why old software standards persist decades after better ones appear.",
        "The first mover doesn't have to be the best — just good enough to build momentum."
      ]
    }
  ],

  // History: Why empires collapse
  history: [
    {
      id: 1,
      type: "content",
      title: "Why empires collapse",
      paragraphs: [
        "Empires don't usually fall because of a single catastrophic event. They decline slowly — through overstretch, internal decay, and failure to adapt.",
        "Rome, the Ottomans, the British Empire: the pattern repeats. They grow powerful, expand beyond what they can manage, lose the systems that made them strong, and crumble when challenged."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What's a common cause of empire collapse?",
      options: [
        { id: "a", text: "Overextension beyond what they can manage", correct: true },
        { id: "b", text: "A single sudden invasion", correct: false },
        { id: "c", text: "Running out of gold", correct: false }
      ],
      explanation:
        "Most empires collapse slowly from internal strain, not from one big external shock."
    },
    {
      id: 3,
      type: "content",
      title: "The Roman pattern",
      paragraphs: [
        "Rome's collapse took centuries. Its borders became too expensive to defend. Corruption weakened institutions. The currency debased. Loyalty shifted from the state to local warlords.",
        "By the time 'barbarians' arrived, Rome was already hollow. The invaders just pushed over a structure that had rotted from within."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "How did Rome's empire end?",
      options: [
        { id: "a", text: "Slow internal decay over centuries", correct: true },
        { id: "b", text: "One decisive military defeat", correct: false },
        { id: "c", text: "A sudden natural disaster", correct: false }
      ],
      explanation:
        "Rome fell gradually. The final invasions were symptoms, not the cause."
    },
    {
      id: 5,
      type: "content",
      title: "Modern echoes",
      paragraphs: [
        "The pattern still holds. States that overextend militarily, neglect infrastructure, lose institutional trust, or fail to adapt to new realities face similar pressures.",
        "The British Empire shrank when the cost of holding it exceeded the benefit. The Soviet Union collapsed when its economic model couldn't keep up. Empires end when the math stops working."
      ]
    }
  ],

  // NEW: Investing for Real Humans 🦔
  investing: [
    {
      id: 1,
      type: "content",
      title: "How Stock Markets Actually Work",
      paragraphs: [
        "A stock market is like a **giant auction house** where people trade tiny slices of companies. When you buy a stock, you own a microscopic piece of that business.",
        "Why do prices move? Two forces: **1)** How well the company is doing (earnings, products, growth). **2)** How everyone *feels* about it (hype, fear, news).",
        "The weird part: **feeling matters more** than you think. A company can have amazing earnings and still drop **20%** if investors get spooked."
      ]
    },
    {
      id: 2,
      type: "scenario",
      question: "📊 Market Crash Scenario: What do you do?",
      scenario: "The market just dropped 15% in one day. Your £10,000 portfolio is now worth £8,500. What's your move?",
      options: [
        { id: "a", text: "🔴 Panic sell everything to stop the bleeding", consequence: "You lock in losses. Market rebounds next month. You missed the recovery. -£1,500 permanent loss.", correct: false },
        { id: "b", text: "💎 Hold steady and do nothing", consequence: "Market recovers over 6 months. Your portfolio returns to £10,000, then grows to £11,200. Smart patience.", correct: true },
        { id: "c", text: "🛒 Buy more while prices are low", consequence: "Risky but bold! You buy £1,000 more at the dip. Portfolio rebounds to £13,500. Legend status.", correct: true },
        { id: "d", text: "🏃 Switch everything to bonds", consequence: "Safe but slow. You avoid further drops but miss the rebound. Final value: £8,800. Mediocre outcome.", correct: false }
      ],
      explanation: "History lesson: Markets always crash. But they **always recover**. The S&P 500 has survived every crash since **1928** and still averages **10%** annual returns."
    },
    {
      id: 3,
      type: "content",
      title: "Dividends vs Growth: Pick Your Fighter",
      paragraphs: [
        "**Dividend stocks:** Companies that pay you cash regularly (like rent from a property). Think: mature, stable, boring. Example: Coca-Cola, utilities.",
        "**Growth stocks:** Companies that reinvest everything to expand. No cash now, but the stock price explodes if they succeed. Example: Tesla, tech startups.",
        "Which is better? **It depends**. Young? Go growth (you have time). Retired? Dividends give you income. Smart investors own both."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "Which is a growth stock?",
      options: [
        { id: "a", text: "A 100-year-old utility company paying 5% dividends", correct: false },
        { id: "b", text: "A 3-year-old AI startup reinvesting all profits", correct: true },
        { id: "c", text: "A bank paying steady quarterly dividends", correct: false }
      ],
      explanation: "Growth stocks reinvest profits to scale fast. They're volatile but can **10x**. Dividend stocks are the tortoises: slow, steady, reliable."
    },
    {
      id: 5,
      type: "interactive-slider",
      title: "⚖️ Risk vs Reward Simulator",
      question: "Adjust your risk level and see potential outcomes:",
      min: 0,
      max: 100,
      defaultValue: 50,
      labels: { 0: "🐢 Safe", 50: "⚖️ Balanced", 100: "🦈 Aggressive" },
      outcomes: {
        0: { text: "100% Bonds: +3% per year. Safe but slow. £10k → £13,439 in 10 years.", color: "#35c27e" },
        25: { text: "75% Bonds, 25% Stocks: +5% per year. £10k → £16,289 in 10 years.", color: "#4ea2ff" },
        50: { text: "50/50 Split: +7% per year. £10k → £19,672 in 10 years.", color: "#f4b65e" },
        75: { text: "75% Stocks, 25% Bonds: +9% per year. £10k → £23,674 in 10 years. More swings!", color: "#ff9a56" },
        100: { text: "100% Stocks: +10% per year. £10k → £25,937 in 10 years. Wild ride! 🎢", color: "#ff6b6b" }
      }
    },
    {
      id: 6,
      type: "content",
      title: "Bubbles & Manias: Humans Gone Wild",
      paragraphs: [
        "**1637:** Tulip Mania. Dutch people paid a year's salary for a single tulip bulb. It crashed. Tulips became worthless.",
        "**2000:** Dotcom Bubble. Any company with \".com\" in its name went **10x**. Most had no profits. **80%** collapsed.",
        "**2021:** Crypto mania, NFT madness, meme stocks. GME went from £4 to £400 then back to £20. Classic bubble behavior.",
        "Pattern: **Euphoria → FOMO → Crash**. Every generation thinks \"this time is different.\" It never is."
      ]
    }
  ],

  // OLD: Price perception
  oldInvesting: [
    {
      id: 1,
      type: "content",
      title: "Why prices feel unfair",
      paragraphs: [
        "You walk into a coffee shop. The same drink that cost $3 last year now costs $4.50. It feels like a rip-off — even if your salary also went up.",
        "Prices don't exist in a vacuum. Your sense of 'fair' is shaped by anchoring, information asymmetry, and loss aversion — not by actual supply and demand math."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why do price increases feel worse than they mathematically are?",
      options: [
        { id: "a", text: "You anchor to old prices and feel losses more than gains", correct: true },
        { id: "b", text: "Businesses are always cheating customers", correct: false },
        { id: "c", text: "Your memory of old prices is perfect", correct: false }
      ],
      explanation:
        "Loss aversion makes price increases hurt more than wage increases feel good. You anchor to what you're used to."
    },
    {
      id: 3,
      type: "content",
      title: "Information asymmetry",
      paragraphs: [
        "The seller knows more than you do. They know their costs, their margins, what other customers pay, and what you're likely willing to spend.",
        "Example: surge pricing on ride apps. The company knows demand is high. You don't know if the price will drop in 10 minutes, so you feel manipulated — even if the price reflects real scarcity."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "What is information asymmetry?",
      options: [
        { id: "a", text: "When one side of a transaction knows more than the other", correct: true },
        { id: "b", text: "When both sides have perfect information", correct: false },
        { id: "c", text: "When prices are set by computers", correct: false }
      ],
      explanation:
        "Sellers usually have more information than buyers. That imbalance shapes your perception of fairness."
    },
    {
      id: 5,
      type: "content",
      title: "The fairness instinct",
      paragraphs: [
        "Humans evolved in small groups where price gouging was personal betrayal. If someone hoarded water during a drought, the tribe remembered.",
        "Modern markets are impersonal and efficient — but your brain still treats 'unfair' pricing as a moral violation, not just a transaction. That's why dynamic pricing, even when economically rational, feels wrong."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Why does dynamic pricing feel unfair?",
      options: [
        { id: "a", text: "Your brain treats it as a moral violation, not just economics", correct: true },
        { id: "b", text: "It's always illegal", correct: false },
        { id: "c", text: "Companies do it only to hurt customers", correct: false }
      ],
      explanation:
        "Your fairness instinct evolved for small-group interactions. Modern pricing algorithms trigger those same moral alarms."
    }
  ],

  // Science: The placebo effect
  science: [
    {
      id: 1,
      type: "content",
      title: "The placebo effect",
      paragraphs: [
        "Give someone a sugar pill and tell them it's medicine. A measurable percentage will feel better — not because the pill did anything, but because they expected it to.",
        "This isn't 'just in their heads.' Brain scans show real changes. Pain signals decrease. Neurotransmitter levels shift. The expectation itself triggers biological responses."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What is the placebo effect?",
      options: [
        { id: "a", text: "Real biological changes caused by expectation alone", correct: true },
        { id: "b", text: "People lying about feeling better", correct: false },
        { id: "c", text: "A myth used by drug companies", correct: false }
      ],
      explanation:
        "Placebo effects are real and measurable. Your mind can trigger actual physical changes."
    },
    {
      id: 3,
      type: "content",
      title: "How powerful is it?",
      paragraphs: [
        "Placebo effects work best for subjective symptoms: pain, nausea, fatigue, mood. They're weaker (but not zero) for objective measures like tumor size or blood pressure.",
        "Studies show placebo painkillers can be 50–60% as effective as real ones. The color of the pill, the confidence of the doctor, even the price you're told it costs — all influence the effect."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "Which symptom responds most strongly to placebo?",
      options: [
        { id: "a", text: "Pain", correct: true },
        { id: "b", text: "Broken bones", correct: false },
        { id: "c", text: "Infectious diseases", correct: false }
      ],
      explanation:
        "Placebos work best on subjective symptoms like pain, where the brain's interpretation matters."
    },
    {
      id: 5,
      type: "content",
      title: "Why this matters",
      paragraphs: [
        "The placebo effect reveals that mind and body aren't separate. Your beliefs, expectations, and environment shape your biology.",
        "It also means drug trials must compare new medicines against placebos, not just 'nothing' — because doing something often helps, even if the something is inert."
      ]
    }
  ],

  // Crypto: Digital Wild West 🪙💀
  crypto: [
    {
      id: 1,
      type: "content",
      title: "What is Blockchain?",
      paragraphs: [
        "Imagine a spreadsheet that **no one controls**, everyone can see, and no one can cheat. That's blockchain. It's a **public ledger** of transactions, copied across thousands of computers.",
        "Why does this matter? **Banks can freeze your account. Governments can print money. Blockchain can't be stopped.** It runs on math, not trust."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What makes blockchain different from a bank?",
      options: [
        { id: "a", text: "No single authority controls it", correct: true },
        { id: "b", text: "It's faster than banks", correct: false },
        { id: "c", text: "It's free to use", correct: false }
      ],
      explanation:
        "Blockchain is **decentralized**. No CEO, no government, no middleman. Just code and consensus."
    },
    {
      id: 3,
      type: "content",
      title: "Bitcoin vs Ethereum: The Big Two",
      paragraphs: [
        "**Bitcoin** is digital gold. It's simple: send money, store value, don't trust banks. **21 million coins max**. That's it. That's the feature.",
        "**Ethereum** is a **programmable blockchain**. You can build apps on it (DeFi, NFTs, smart contracts). It's not just money — it's a **computer that no one owns**."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🎯 Crypto Choice: What do you buy?",
      scenario: "You have £1,000 to invest. Bitcoin is at £40,000. Ethereum is at £2,500. A new meme coin promises '100x gains!' What's your move?",
      options: [
        { id: "a", text: "🟠 All in on Bitcoin - digital gold", consequence: "Safe bet. Bitcoin is boring but reliable. It 2x over 2 years. Your £1,000 → £2,000. Solid.", correct: true },
        { id: "b", text: "💎 Split 50/50 Bitcoin and Ethereum", consequence: "Smart diversification. Bitcoin 2x, ETH 3x. Your £1,000 → £2,500. Well played.", correct: true },
        { id: "c", text: "🚀 All in on the meme coin", consequence: "It pumped 10x... then crashed 95%. You rode the wave but sold late. £1,000 → £200. Painful lesson.", correct: false },
        { id: "d", text: "🧠 70% BTC/ETH, 10% meme coin for fun", consequence: "Balanced risk. Main stack 2.5x, meme coin failed. £1,000 → £2,350. You played it right.", correct: true }
      ],
      explanation: "Rule of crypto: **never bet the farm on sh*tcoins**. Bitcoin and Ethereum are boring for a reason — they survive."
    },
    {
      id: 5,
      type: "content",
      title: "Security: Don't Get Rekt",
      paragraphs: [
        "**Exchanges** (Coinbase, Binance) are like banks. Easy to use, but they hold your keys. If they get hacked or go bankrupt, **your coins vanish**.",
        "**Wallets** (hardware or software) give you full control. **'Not your keys, not your crypto.'** But if you lose your keys, no one can help you. Ever."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Spot the scam:",
      options: [
        { id: "a", text: "'Send me 1 ETH and I'll send back 2 ETH!' - Elon Musk (fake account)", correct: true },
        { id: "b", text: "A coin with a public team, audited code, and real use case", correct: false },
        { id: "c", text: "Bitcoin hitting a new all-time high", correct: false }
      ],
      explanation:
        "If it sounds too good to be true, **it's a scam**. No one gives free money. Ever. Crypto is full of grifters."
    }
  ],

  // Glaciers & Ice Ages ❄️
  glaciers: [
    {
      id: 1,
      type: "content",
      title: "What is a Glacier?",
      paragraphs: [
        "A **glacier** is a river of ice that flows like a very slow liquid. It's snow compressed over thousands of years into solid ice that's so heavy it moves under its own weight.",
        "They move at **centimeters per day**. But that 'slow' motion can carve valleys, grind mountains to dust, and reshape entire continents. They're planetary machinery."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why do glaciers move?",
      options: [
        { id: "a", text: "Ice flows like a super-slow liquid under pressure", correct: true },
        { id: "b", text: "Wind pushes them", correct: false },
        { id: "c", text: "They slide on water", correct: false }
      ],
      explanation:
        "Ice under extreme pressure behaves like a **plastic material** - it deforms and flows. That's why glaciers move downhill over centuries."
    },
    {
      id: 3,
      type: "content",
      title: "Ice Cores: Time Capsules",
      paragraphs: [
        "Drill into a glacier and you're drilling through **time**. Each layer of ice is a snapshot of the atmosphere from when that snow fell. Trapped air bubbles = ancient atmosphere.",
        "Scientists have drilled ice cores going back **800,000 years**. They can measure CO₂ levels, temperature, volcanic eruptions, even pollen from extinct plants. It's a climate time machine."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🧊 Ice Core Discovery",
      scenario: "You're drilling an ice core in Antarctica. At 2,000 meters deep, you find a layer of ash, ancient viruses, and air bubbles with unusual CO₂ levels. What do you do?",
      options: [
        { id: "a", text: "🔬 Analyze the air bubbles first", consequence: "You discover CO₂ levels were 50% higher than expected. This rewrites climate history! You publish and win awards. Legend.", correct: true },
        { id: "b", text: "🦠 Study the ancient viruses immediately", consequence: "You accidentally revive a dormant virus. It's harmless but causes a biosecurity panic. Your lab gets shut down for 6 months.", correct: false },
        { id: "c", text: "🌋 Focus on the ash layer", consequence: "You identify a supervolcano eruption from 40,000 years ago that caused a mini ice age. Solid discovery, paper published!", correct: true },
        { id: "d", text: "📸 Take photos and seal the sample", consequence: "Safe but slow. Another team publishes first using your data. You get credited but miss the spotlight.", correct: false }
      ],
      explanation: "Ice cores hold **viruses**, **pollen**, **volcanic ash**, and **atmospheric snapshots**. Every layer is a treasure trove of ancient data."
    },
    {
      id: 5,
      type: "content",
      title: "When Will They Melt?",
      paragraphs: [
        "**Greenland** and **Antarctica** hold enough ice to raise sea levels by **65+ meters**. If they melted completely, most coastal cities would vanish.",
        "Current rate: Greenland loses **280 billion tons of ice per year**. That's accelerating. Even a partial melt would flood London, New York, Shanghai, and Mumbai. We're talking decades, not centuries."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "What happens if Greenland's ice sheet melts?",
      options: [
        { id: "a", text: "Sea levels rise ~7 meters, flooding major cities", correct: true },
        { id: "b", text: "Nothing, it's already floating", correct: false },
        { id: "c", text: "It triggers a new ice age", correct: false }
      ],
      explanation:
        "Greenland's ice sits on **land**, not water. When it melts, all that water flows into the ocean. **7 meters** of sea level rise = catastrophic."
    }
  ],

  // Nuclear Everything ☢️
  nuclear: [
    {
      id: 1,
      type: "content",
      title: "Fusion vs Fission",
      paragraphs: [
        "**Fission**: Split a big atom (uranium) → releases energy + radiation + waste. That's what nuclear power plants do. **Fusion**: Smash small atoms (hydrogen) together → releases MASSIVE energy, no long-lived waste. That's what the sun does.",
        "Fission works but creates radioactive waste that lasts thousands of years. Fusion is clean and limitless... but we can't sustain it yet. We've been '30 years away' for 70 years."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What's the difference between fusion and fission?",
      options: [
        { id: "a", text: "Fission splits atoms, fusion combines them", correct: true },
        { id: "b", text: "Fusion is what nuclear bombs use", correct: false },
        { id: "c", text: "They're the same thing", correct: false }
      ],
      explanation:
        "**Fission** breaks big atoms apart. **Fusion** forces small atoms together. Fusion is cleaner but way harder to achieve."
    },
    {
      id: 3,
      type: "content",
      title: "Chernobyl: What Went Wrong",
      paragraphs: [
        "**April 26, 1986**: A safety test at Chernobyl reactor 4 went catastrophically wrong. The reactor overheated, exploded, and released **400 times more radiation** than Hiroshima.",
        "Why? Soviet reactor design had a fatal flaw: at low power, it became **unstable**. Operators disabled safety systems during the test. The reactor went supercritical in seconds. Boom."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "☢️ Reactor Meltdown Scenario",
      scenario: "You're the control room operator. Reactor temperature is rising fast. Alarms are screaming. You have 30 seconds. What do you do?",
      options: [
        { id: "a", text: "🔴 SCRAM - emergency shutdown all control rods", consequence: "Reactor stops immediately. Crisis averted. You're a hero. This is the correct response for any runaway reactor.", correct: true },
        { id: "b", text: "💧 Flood the reactor with coolant water", consequence: "Water turns to steam instantly, pressure spikes, reactor explodes. Chernobyl scenario. You just killed everyone.", correct: false },
        { id: "c", text: "⚡ Cut all power to the reactor", consequence: "Pumps stop, cooling fails, meltdown begins. Without power, you can't control anything. Bad move.", correct: false },
        { id: "d", text: "📞 Call your supervisor first", consequence: "While you're calling, the reactor goes critical. Explosion. Never hesitate in an emergency.", correct: false }
      ],
      explanation: "**SCRAM** (Safety Control Rod Axe Man) = emergency shutdown. Drop all control rods to absorb neutrons and stop the chain reaction. This is drilled into every operator."
    },
    {
      id: 5,
      type: "content",
      title: "Nuclear Waste: The 10,000 Year Problem",
      paragraphs: [
        "Spent nuclear fuel stays dangerously radioactive for **10,000+ years**. We can't just bury it and forget it — we need storage that outlasts civilizations.",
        "Current plan: deep geological repositories. Dig 500 meters underground, store waste in steel/concrete, seal it, and mark it with warnings that future humans (or post-humans) can understand. How do you warn someone 10,000 years from now?"
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Why is nuclear waste so dangerous long-term?",
      options: [
        { id: "a", text: "It stays radioactive for thousands of years", correct: true },
        { id: "b", text: "It explodes if disturbed", correct: false },
        { id: "c", text: "It poisons water instantly", correct: false }
      ],
      explanation:
        "**Half-life** of some isotopes is tens of thousands of years. That means it takes that long for radioactivity to drop to 'safe' levels."
    }
  ],

  // Minerals & Metals ⚡
  minerals: [
    {
      id: 1,
      type: "content",
      title: "Why Lithium Matters",
      paragraphs: [
        "**Lithium** is the new oil. It powers every electric vehicle battery, every smartphone, every laptop. Demand is exploding. Supply? Concentrated in a few countries: **Australia**, **Chile**, and **China**.",
        "EVs need **10kg of lithium per battery**. As the world electrifies, lithium demand could increase **40x by 2040**. That's a supply crunch waiting to happen."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why is lithium critical for the future?",
      options: [
        { id: "a", text: "It's the key element in EV batteries", correct: true },
        { id: "b", text: "It's used in nuclear reactors", correct: false },
        { id: "c", text: "It makes phones faster", correct: false }
      ],
      explanation:
        "**Lithium-ion batteries** are the only viable technology for EVs and grid storage. No lithium = no electrification = climate goals fail."
    },
    {
      id: 3,
      type: "content",
      title: "Copper: The Wiring of Civilization",
      paragraphs: [
        "**Copper** conducts electricity better than almost anything else. Every power grid, every building, every electric motor needs copper. The world uses **25 million tons per year**.",
        "Problem: **peak copper** is approaching. Easy-to-mine deposits are running out. Future supply comes from deeper, dirtier, more expensive mines. And EVs need **4x more copper** than gas cars."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "⚡ Resource Geopolitics",
      scenario: "You're the leader of a lithium-rich country. China offers to build infrastructure in exchange for exclusive lithium mining rights. The West offers cash but wants open markets. What do you do?",
      options: [
        { id: "a", text: "🇨🇳 Accept China's infrastructure deal", consequence: "You get roads, ports, and factories. But China controls your lithium supply chain. 10 years later, they dictate prices. You're locked in.", correct: false },
        { id: "b", text: "🌍 Accept Western cash, keep markets open", consequence: "You get money but must build infrastructure yourself. Markets stay competitive. You maintain leverage. Smart long-term play.", correct: true },
        { id: "c", text: "⚖️ Play both sides, auction to highest bidder", consequence: "Short-term gains but both sides lose trust. You're seen as unreliable. Future investment dries up. Bad move.", correct: false },
        { id: "d", text: "🚫 Nationalize lithium, refuse all deals", consequence: "You control resources but lack tech and capital to extract them. Economy stagnates. You become the next Venezuela.", correct: false }
      ],
      explanation: "**Resource geopolitics** is about balancing sovereignty, development, and long-term leverage. Lock-in with one power = loss of negotiating power."
    },
    {
      id: 5,
      type: "content",
      title: "Supply Chains: Fragile by Design",
      paragraphs: [
        "Modern supply chains are **optimized for efficiency**, not resilience. Just-in-time delivery = zero buffer stock. One factory fire in Taiwan? Global chip shortage for 2 years.",
        "**80% of rare earth metals** come from China. If China stops exporting, the West can't make smartphones, wind turbines, or missiles. That's strategic vulnerability."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Why are supply chains so fragile?",
      options: [
        { id: "a", text: "They're optimized for cost, not resilience", correct: true },
        { id: "b", text: "Companies are lazy", correct: false },
        { id: "c", text: "There's a global shortage of everything", correct: false }
      ],
      explanation:
        "**Efficiency vs resilience trade-off**: just-in-time delivery saves money but creates single points of failure. One disruption = cascading collapse."
    }
  ],

  // Human Weirdness 🧩
  humans: [
    {
      id: 1,
      type: "content",
      title: "Game Theory: The Math of Strategy",
      paragraphs: [
        "**Game theory** studies strategic decision-making when your outcome depends on others' choices. It's not about games—it's about **nuclear war**, **business**, **evolution**, and **everyday life**.",
        "Key insight: **rational individual choices often lead to terrible collective outcomes**. That's why cooperation is hard and conflict is easy."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What is game theory?",
      options: [
        { id: "a", text: "The study of strategic decision-making", correct: true },
        { id: "b", text: "How to win board games", correct: false },
        { id: "c", text: "Psychology of gambling", correct: false }
      ],
      explanation:
        "Game theory analyzes **situations where your best choice depends on what others do**. Economics, war, evolution—all game theory."
    },
    {
      id: 3,
      type: "content",
      title: "The Prisoner's Dilemma",
      paragraphs: [
        "Two criminals are arrested. Police offer each a deal: **betray your partner** (go free) or **stay silent** (both get light sentences). If both betray, both get heavy sentences.",
        "**The trap**: betraying is the 'rational' choice for each individual, but if both do it, they're worse off. Cooperation is better collectively but risky individually. This explains arms races, pollution, and why trust is valuable."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🎭 Prisoner's Dilemma",
      scenario: "You and your partner are arrested. Police offer you a deal: betray your partner and go free (they get 10 years). If you both stay silent, you both get 1 year. If you both betray, you both get 5 years. What do you do?",
      options: [
        { id: "a", text: "🤐 Stay silent (cooperate)", consequence: "If your partner stays silent too: both get 1 year. Best outcome! But if they betray you: you get 10 years. Trust = risk.", correct: true },
        { id: "b", text: "🗣️ Betray your partner (defect)", consequence: "If they stayed silent: you go free, they get 10 years. If they also betrayed: you both get 5 years. 'Rational' but collectively worse.", correct: false }
      ],
      explanation: "**The dilemma**: individual rationality (betray) leads to mutual harm (5 years each). Cooperation (silence) is collectively better but requires trust. This is why **repeated games and reputation matter**."
    },
    {
      id: 5,
      type: "content",
      title: "Cognitive Biases in Action",
      paragraphs: [
        "**Anchoring**: the first number you hear influences all subsequent estimates. Stores use this by showing 'original price' before discounts.",
        "**Sunk cost fallacy**: you continue bad investments because you've already spent money/time. Rational choice ignores sunk costs. Humans don't. **Prospect theory**: losses hurt more than equivalent gains feel good. Losing £100 > gaining £100 emotionally."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "What is the sunk cost fallacy?",
      options: [
        { id: "a", text: "Continuing bad investments because you've already spent resources", correct: true },
        { id: "b", text: "Refusing to invest in anything risky", correct: false },
        { id: "c", text: "Investing too much too quickly", correct: false }
      ],
      explanation:
        "**Sunk costs** are unrecoverable past expenses. Rational decision-making ignores them. But humans hate 'wasting' past investments, so we throw good money after bad."
    }
  ],

  // Biology Sci-Fi 🧬
  biology: [
    {
      id: 1,
      type: "content",
      title: "CRISPR: Editing the Code of Life",
      paragraphs: [
        "**CRISPR** is molecular scissors that can cut and edit DNA with precision. Scientists can now delete genes, insert new ones, or fix genetic diseases. It's genetic engineering made easy.",
        "**2018**: Chinese scientist He Jiankui edited human embryos to make them HIV-resistant. The babies were born. The world freaked out. He was jailed. We now have the power to design humans."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What is CRISPR?",
      options: [
        { id: "a", text: "A tool for editing DNA precisely", correct: true },
        { id: "b", text: "A new type of microscope", correct: false },
        { id: "c", text: "A protein that causes diseases", correct: false }
      ],
      explanation:
        "**CRISPR-Cas9** is a gene-editing system borrowed from bacteria. It allows scientists to cut DNA at specific locations and modify genes. Revolutionary and terrifying."
    },
    {
      id: 3,
      type: "content",
      title: "Tardigrades: Indestructible Micro-Bears",
      paragraphs: [
        "**Tardigrades** (water bears) are microscopic animals that can survive: **-272°C to +150°C**, **radiation 1000x lethal to humans**, **decades without water**, **the vacuum of space**. They're basically immortal.",
        "How? They enter **cryptobiosis**—a state where metabolism stops completely. They dry out, replace water with protective sugars, and wait. Add water years later? They wake up. It's biological suspended animation."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🧬 CRISPR Ethics",
      scenario: "You're a genetic scientist. A couple wants you to edit their embryo to remove a gene causing fatal childhood disease. Legal in your country. Do you do it?",
      options: [
        { id: "a", text: "✅ Yes, remove the disease gene", consequence: "Child is born healthy. Family is grateful. But: you've crossed into human genetic modification. Slippery slope to designer babies begins.", correct: true },
        { id: "b", text: "❌ No, it's too risky", consequence: "Child is born with disease, dies at age 8. Family devastated. You could have prevented it. Was caution worth a child's life?", correct: false },
        { id: "c", text: "🧪 Edit for disease + add intelligence genes", consequence: "You create a 'designer baby.' Public outcry. You're fired and prosecuted. Child grows up as a media spectacle. Ethical catastrophe.", correct: false },
        { id: "d", text: "📋 Refer them to another clinic", consequence: "You avoid responsibility. Someone else does it anyway. Nothing changes except you didn't help or hinder.", correct: false }
      ],
      explanation: "**Gene editing dilemma**: preventing suffering vs playing God. Medical fixes seem reasonable until you ask: where's the line between therapy and enhancement?"
    },
    {
      id: 5,
      type: "content",
      title: "Senescence: Why We Age",
      paragraphs: [
        "**Senescence** is the process of aging. Cells accumulate damage, telomeres shorten, repair mechanisms fail. Eventually: cancer, organ failure, death. But some organisms don't age.",
        "**Hydra** (tiny water polyps) show **negligible senescence**. They don't age. Given ideal conditions, they're biologically immortal. **Naked mole rats** live 10x longer than similar-sized rodents and rarely get cancer. We're studying them to hack human aging."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "What is senescence?",
      options: [
        { id: "a", text: "The biological process of aging", correct: true },
        { id: "b", text: "A type of cancer", correct: false },
        { id: "c", text: "When cells stop dividing", correct: false }
      ],
      explanation:
        "**Senescence** = aging at the cellular and organismal level. Damage accumulates, repair fails, death follows. Some organisms escape this. We're trying to figure out how."
    }
  ],

  // If the World Ends 🌋
  apocalypse: [
    {
      id: 1,
      type: "content",
      title: "Supervolcanoes: Civilization Killers",
      paragraphs: [
        "A **supervolcano** eruption would dwarf any historical volcano. **Yellowstone** has a magma chamber 80km across. If it erupts, it would eject **1,000 cubic kilometers** of rock and ash.",
        "Result: **volcanic winter**. Ash blocks sunlight for years. Global temperatures drop 10°C. Crops fail worldwide. Mass starvation. Civilization collapses. Last time Yellowstone erupted? **640,000 years ago**. It's overdue."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What makes supervolcanoes so dangerous?",
      options: [
        { id: "a", text: "They block sunlight and cause global cooling", correct: true },
        { id: "b", text: "The lava covers entire continents", correct: false },
        { id: "c", text: "They trigger earthquakes everywhere", correct: false }
      ],
      explanation:
        "**Volcanic winter**: ash in the stratosphere blocks sunlight, dropping temperatures globally for years. Crops fail. Famine follows. It's an extinction-level threat."
    },
    {
      id: 3,
      type: "content",
      title: "Pandemic Math: Exponential Growth",
      paragraphs: [
        "**R₀** (R-naught) = how many people each infected person infects. If R₀ > 1, the disease **spreads exponentially**. If R₀ < 1, it dies out.",
        "COVID-19 had R₀ ≈ 3. That means: 1 person → 3 people → 9 → 27 → 81 → 243 → 729 in just 7 generations. Exponential growth is why pandemics explode before governments react."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🦠 Pandemic Response",
      scenario: "A novel virus emerges. R₀ = 4. Fatality rate = 2%. It's spreading fast. You're the health minister. What's your first move?",
      options: [
        { id: "a", text: "🔒 Immediate lockdown + contact tracing", consequence: "You stop exponential spread early. Economy takes a hit but deaths stay low. Lockdown fatigue sets in after 3 months. You saved thousands.", correct: true },
        { id: "b", text: "💉 Wait for vaccine development first", consequence: "Vaccines take 12-18 months. Virus spreads unchecked. Millions die. Healthcare collapses. Catastrophic failure.", correct: false },
        { id: "c", text: "🏥 Focus on hospital capacity only", consequence: "Hospitals are overwhelmed in weeks. Exponential growth outruns any capacity. Doctors forced to choose who lives. Nightmare scenario.", correct: false },
        { id: "d", text: "😷 Masks optional, trust personal responsibility", consequence: "Not enough compliance. R₀ stays above 1. Exponential spread continues. Death toll climbs. You failed.", correct: false }
      ],
      explanation: "**Exponential spread demands exponential response**. Early aggressive action (lockdown, tracing) buys time. Delays = deaths compound. It's math, not politics."
    },
    {
      id: 5,
      type: "content",
      title: "Nuclear Winter: The Aftermath",
      paragraphs: [
        "A nuclear war wouldn't just kill via explosions/radiation. The real killer: **nuclear winter**. Cities burn, smoke rises into the stratosphere, sunlight is blocked. Global temperatures drop **20-30°C**.",
        "**90% of humans would die from starvation** in the following months. Crops fail. Ecosystems collapse. Even a 'small' nuclear war (India vs Pakistan, 100 warheads) would cause global famine killing **2 billion people**."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "What is nuclear winter?",
      options: [
        { id: "a", text: "Global cooling caused by smoke blocking sunlight after nuclear war", correct: true },
        { id: "b", text: "The cold war during winter months", correct: false },
        { id: "c", text: "When nuclear reactors freeze", correct: false }
      ],
      explanation:
        "**Nuclear winter**: soot and smoke from burning cities rise into the stratosphere, block sunlight, and cause global cooling for years. Crops fail. Mass starvation. Existential threat."
    }
  ],

  // How Money Works 💵
  money: [
    {
      id: 1,
      type: "content",
      title: "What is Inflation?",
      paragraphs: [
        "**Inflation** = your money loses buying power over time. That £100 in your pocket? Next year it buys you £97 worth of stuff. The money didn't disappear — prices just went up.",
        "Why does it happen? Too much money chasing too few goods. Governments print money, people spend more, demand rises, prices rise. It's a feedback loop."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "What causes inflation?",
      options: [
        { id: "a", text: "Too much money in circulation relative to goods/services", correct: true },
        { id: "b", text: "Banks stealing from savers", correct: false },
        { id: "c", text: "Businesses being greedy", correct: false }
      ],
      explanation:
        "Inflation is about **supply and demand**. More money + same goods = higher prices. It's not greed, it's math."
    },
    {
      id: 3,
      type: "content",
      title: "Interest Rates: The Economy's Gas Pedal",
      paragraphs: [
        "When the economy overheats (inflation), central banks raise **interest rates**. This makes borrowing expensive, spending slows, inflation cools.",
        "When the economy crashes (recession), they **lower rates**. Cheap loans = people borrow and spend more = economy grows. It's economic steering."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "💰 Central Bank Decision",
      scenario: "You're the head of the central bank. Inflation is 8% (very high). Unemployment is 3% (very low). Housing prices are soaring. What do you do?",
      options: [
        { id: "a", text: "📈 Raise interest rates aggressively", consequence: "Inflation drops to 3% over 12 months. Housing cools. But unemployment rises to 5% and recession hits. Tough choice, but it worked.", correct: true },
        { id: "b", text: "📉 Lower interest rates to help people", consequence: "Inflation explodes to 12%. Prices spiral out of control. Currency collapses. You get fired. Economic disaster.", correct: false },
        { id: "c", text: "⏸️ Do nothing and wait", consequence: "Inflation stays high for years. Savers lose wealth. Public loses trust. Riots break out. You failed.", correct: false },
        { id: "d", text: "🖨️ Print more money to give people cash", consequence: "Hyperinflation. Currency becomes worthless. Zimbabwe / Weimar Germany scenario. Catastrophic failure.", correct: false }
      ],
      explanation: "High inflation = **raise rates**. It causes short-term pain (recession) but prevents long-term disaster (hyperinflation)."
    },
    {
      id: 5,
      type: "content",
      title: "Housing Markets: Why Prices Explode",
      paragraphs: [
        "Housing prices are driven by **supply, demand, and credit**. When interest rates are low, mortgages are cheap. More people can afford to buy. Demand skyrockets. Prices follow.",
        "Add in: limited supply (not building enough), foreign investment, and FOMO (fear of missing out). Result: **prices double in 5 years**. First-time buyers get priced out."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "Why do low interest rates push housing prices up?",
      options: [
        { id: "a", text: "Cheap mortgages = more buyers = higher demand = higher prices", correct: true },
        { id: "b", text: "Banks force prices up intentionally", correct: false },
        { id: "c", text: "Low rates mean houses are worth more", correct: false }
      ],
      explanation:
        "When borrowing is cheap, **more people can afford to buy**. More buyers competing for the same houses = prices go up. It's supply and demand."
    }
  ],

  // Black Holes & Cosmic Violence 🌌💀
  blackholes: [
    {
      id: 1,
      type: "content",
      title: "What is a Black Hole?",
      paragraphs: [
        "A black hole is what happens when **gravity wins**. A star dies, collapses, and crushes so much mass into such a tiny space that **nothing can escape**. Not even light.",
        "How small? A black hole with the mass of Earth would fit in your pocket. The actual **event horizon** (point of no return) would be **9mm wide**. Terrifying."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why can't light escape a black hole?",
      options: [
        { id: "a", text: "Gravity is so strong it bends spacetime into a trap", correct: true },
        { id: "b", text: "Black holes absorb light like a sponge", correct: false },
        { id: "c", text: "Light runs out of energy", correct: false }
      ],
      explanation:
        "Black holes warp **spacetime itself**. Once you cross the event horizon, all paths lead inward. There's no 'up' anymore."
    },
    {
      id: 3,
      type: "content",
      title: "Spaghettification (Yes, Really)",
      paragraphs: [
        "As you fall into a black hole, **tidal forces** stretch you. Your feet feel stronger gravity than your head. You get **pulled apart like taffy**.",
        "Small black holes? You spaghettify **before** you cross the event horizon. Supermassive ones? You'd cross and not even notice... until it's too late."
      ]
    },
    {
      id: 4,
      type: "scenario",
      question: "🌀 You're Falling Into a Black Hole...",
      scenario: "You're an astronaut who just crossed the event horizon of a supermassive black hole. What do you see?",
      options: [
        { id: "a", text: "🌟 The entire future of the universe flashing before your eyes", consequence: "Correct! Time dilation means you see the universe age rapidly as you fall. The stars die, galaxies collide, and the cosmos ends. Then you hit the singularity.", correct: true },
        { id: "b", text: "🕳️ Total darkness immediately", consequence: "Not quite. Light from outside can still reach you for a while. It's only when you look back that you see darkness.", correct: false },
        { id: "c", text: "👻 Your own past replayed backwards", consequence: "Nope. Time doesn't reverse. It just gets *weird*. You'd see the outside universe, not your memories.", correct: false },
        { id: "d", text: "🔥 You burn up instantly", consequence: "Not from heat. Supermassive black holes are surprisingly *gentle* at the horizon. You spaghettify deeper inside.", correct: false }
      ],
      explanation: "Black holes break physics in the best way. Time, space, and causality stop making sense."
    },
    {
      id: 5,
      type: "content",
      title: "Hawking Radiation: Black Holes Die",
      paragraphs: [
        "Stephen Hawking proved that black holes aren't **perfectly** black. They leak tiny amounts of radiation. Over trillions of years, they **evaporate**.",
        "Small black holes evaporate fast. Supermassive ones? They'll outlive the stars. But eventually, even black holes die."
      ]
    },
    {
      id: 6,
      type: "quiz",
      question: "What happens to black holes over time?",
      options: [
        { id: "a", text: "They slowly evaporate via Hawking radiation", correct: true },
        { id: "b", text: "They grow forever", correct: false },
        { id: "c", text: "They explode", correct: false }
      ],
      explanation:
        "Black holes **lose mass** through quantum effects at the event horizon. It's incredibly slow, but it happens."
    }
  ]
};

let activeSubject = "economics";
let currentIndex = 0;
let xp = 120;
let pendingXp = 0;
let era = "Foundations";
let level = 3;
let streak = 3;
let todayLessons = 2;
let todayGoal = 5;
let combo = 0;
let totalCorrect = 0;

// Level thresholds
const LEVEL_XP = [0, 50, 150, 300, 500, 750, 1050, 1400, 1800, 2250];

// Achievements
const achievements = {
  firstLesson: { unlocked: true, name: "First Steps", desc: "Complete your first lesson" },
  streak3: { unlocked: true, name: "On Fire", desc: "Maintain a 3-day streak" },
  streak7: { unlocked: false, name: "Week Warrior", desc: "Maintain a 7-day streak" },
  combo5: { unlocked: false, name: "Perfect Five", desc: "Get 5 correct in a row" },
  scholar: { unlocked: false, name: "Scholar", desc: "Reach Level 5" },
  polymath: { unlocked: false, name: "Polymath", desc: "Complete lessons in 5 subjects" }
};

function $(selector) {
  return document.querySelector(selector);
}

// Format lesson text with emphasis and visual highlights
function formatLessonText(text) {
  // Bold text between ** markers
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #ffdd9a; font-weight: 700;">$1</strong>');
  
  // Highlight key terms in quotes
  text = text.replace(/"([^"]+)"/g, '<span style="color: #4ea2ff; font-weight: 600;">"$1"</span>');
  
  // Emphasize numbers and dates
  text = text.replace(/\b(\d{4})\b/g, '<span style="color: #f4b65e; font-weight: 700;">$1</span>');
  text = text.replace(/\b(\d+%)\b/g, '<span style="color: #35c27e; font-weight: 700;">$1</span>');
  
  return text;
}

// ===== CONFETTI SYSTEM =====
function createConfetti() {
  const canvas = $("#confettiCanvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const confettiPieces = [];
  const colors = ["#ffdd9a", "#b86bff", "#4ea2ff", "#35c27e", "#f4b65e", "#d881ff"];
  
  // Create confetti pieces
  for (let i = 0; i < 100; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 2,
      angle: Math.random() * 360,
      wobble: Math.random() * 2 - 1
    });
  }
  
  let animationId;
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let stillVisible = false;
    
    confettiPieces.forEach((piece) => {
      piece.y += piece.speed;
      piece.x += piece.wobble;
      piece.angle += 5;
      
      if (piece.y < canvas.height + 20) {
        stillVisible = true;
      }
      
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate((piece.angle * Math.PI) / 180);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
      ctx.restore();
    });
    
    if (stillVisible) {
      animationId = requestAnimationFrame(animate);
    }
  }
  
  animate();
  
  // Clear after 4 seconds
  setTimeout(() => {
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 4000);
}

// ===== CELEBRATION SYSTEM =====
function showCelebration(type = "correct", xpGained = 8) {
  const overlay = $("#celebrationOverlay");
  const icon = $("#celebrationIcon");
  const text = $("#celebrationText");
  const xpText = $("#celebrationXpText");
  
  if (!overlay || !icon || !text || !xpText) return;
  
  if (type === "correct") {
    icon.textContent = ["🎉", "✨", "🌟", "💫", "⭐"][Math.floor(Math.random() * 5)];
    text.textContent = ["Awesome!", "Perfect!", "Brilliant!", "Amazing!", "Nailed it!"][Math.floor(Math.random() * 5)];
    xpText.textContent = `+${xpGained} XP`;
    createConfetti();
  } else if (type === "levelup") {
    icon.textContent = "🚀";
    text.textContent = `Level ${level}!`;
    xpText.textContent = "Keep going!";
    createConfetti();
  }
  
  overlay.classList.add("active");
  
  setTimeout(() => {
    overlay.classList.remove("active");
  }, 1500);
}

// ===== ACHIEVEMENT SYSTEM =====
function checkAndShowAchievement(achievementKey) {
  if (achievements[achievementKey] && !achievements[achievementKey].unlocked) {
    achievements[achievementKey].unlocked = true;
    
    const popup = $("#achievementPopup");
    const title = $("#achievementTitle");
    const desc = $("#achievementDesc");
    
    if (!popup || !title || !desc) return;
    
    title.textContent = "Achievement Unlocked!";
    desc.textContent = achievements[achievementKey].name;
    
    popup.classList.add("active");
    
    setTimeout(() => {
      popup.classList.remove("active");
    }, 3000);
  }
}

// ===== UPDATE UI =====
function updateGameUI() {
  const xpValueEl = $("#xpValue");
  const levelValueEl = $("#levelValue");
  const streakValueEl = $("#streakValue");
  const todayGoalEl = $("#todayGoal");
  const xpProgressMiniEl = $("#xpProgressMini");
  
  if (xpValueEl) xpValueEl.textContent = xp;
  if (levelValueEl) levelValueEl.textContent = level;
  if (streakValueEl) streakValueEl.textContent = streak;
  if (todayGoalEl) todayGoalEl.textContent = `${todayLessons}/${todayGoal}`;
  
  // Calculate level thresholds
  const currentLevelXP = LEVEL_XP[level - 1] || 0;
  const nextLevelXP = LEVEL_XP[level] || currentLevelXP + 500;
  
  // Update XP progress bar
  if (xpProgressMiniEl) {
    const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    xpProgressMiniEl.style.width = `${Math.min(progress, 100)}%`;
  }
  
  // Check for level up
  if (xp >= nextLevelXP && level < LEVEL_XP.length) {
    level++;
    showLevelUp();
    
    if (level >= 5 && !achievements.scholar.unlocked) {
      setTimeout(() => checkAndShowAchievement("scholar"), 2000);
    }
  }
}

function getCurrentLessons() {
  const lessons = subjectLessons[activeSubject] || [];
  console.log(`📚 getCurrentLessons() for "${activeSubject}":`, lessons.length, "lessons");
  return lessons;
}

function renderLesson() {
  console.log("📝 ========== renderLesson() START ==========");
  console.log("📝 Current subject:", activeSubject);
  console.log("📝 Current index:", currentIndex);
  console.log("📝 Will display progress as:", (currentIndex + 1), "/ X");
  
  const lessons = getCurrentLessons();
  console.log("📝 Got lessons:", lessons.length);
  
  if (!lessons || lessons.length === 0) {
    console.error("❌ No lessons available for subject:", activeSubject);
    return;
  }
  
  // Ensure currentIndex is valid
  if (currentIndex < 0 || currentIndex >= lessons.length) {
    console.warn("⚠️ Invalid currentIndex:", currentIndex, "Resetting to 0");
    currentIndex = 0;
  }
  
  const actualLesson = lessons[currentIndex];
  
  if (!actualLesson) {
    console.error("❌ No lesson found at index", currentIndex);
    return;
  }
  
  console.log("Rendering lesson type:", actualLesson.type);
  console.log("Lesson title/question:", actualLesson.title || actualLesson.question);
  console.log("Lesson data:", actualLesson);

  const contentEl = $("#lessonContent");
  const quizBlock = $("#quizBlock");
  const progressLabel = $("#lessonProgressLabel");
  const progressFill = $("#lessonProgressFill");
  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");
  
  if (!contentEl || !quizBlock) {
    console.error("❌ Missing UI elements!");
    return;
  }
  
  // Update progress with animation
  progressLabel.textContent = `${currentIndex + 1} / ${lessons.length}`;
  const pct = ((currentIndex + 1) / lessons.length) * 100;
  progressFill.style.width = `${pct}%`;

  // Reset hint + pending XP display
  pendingXp = 0;
  pendingXpEl.textContent = "0";
  hintText.textContent = "Tap an answer to check your understanding.";

  // Force clear and reset opacity
  contentEl.innerHTML = "";
  quizBlock.innerHTML = "";
  contentEl.style.opacity = '1';
  quizBlock.style.opacity = '1';

  // Render content vs quiz
  console.log("🎨 Rendering lesson type:", actualLesson.type);
  
  if (actualLesson.type === "content") {
    console.log("📄 Rendering content lesson");
    console.log("Title:", actualLesson.title);
    console.log("Paragraphs:", actualLesson.paragraphs?.length);

    if (actualLesson.title) {
      const titleP = document.createElement("div");
      titleP.style.fontSize = "20px";
      titleP.style.fontWeight = "800";
      titleP.style.marginBottom = "16px";
      titleP.style.color = "#fff";
      titleP.style.background = "linear-gradient(120deg, #fff, #d4c5ff)";
      titleP.style.webkitBackgroundClip = "text";
      titleP.style.webkitTextFillColor = "transparent";
      titleP.style.backgroundClip = "text";
      titleP.style.letterSpacing = "-0.01em";
      titleP.textContent = actualLesson.title;
      contentEl.appendChild(titleP);
      console.log("✅ Title appended to contentEl");
    }

    actualLesson.paragraphs.forEach((text, index) => {
      const p = document.createElement("p");
      p.innerHTML = formatLessonText(text);
      contentEl.appendChild(p);
      console.log(`✅ Paragraph ${index + 1} appended`);
    });
    
    console.log("📊 Final contentEl.children.length:", contentEl.children.length);
    console.log("📊 Final contentEl.innerHTML length:", contentEl.innerHTML.length);
  } else if (actualLesson.type === "quiz") {
    console.log("❓ Rendering quiz lesson");
    // Simple intro content
    const intro = document.createElement("div");
    intro.innerHTML = '<span style="font-size: 24px; margin-right: 8px;">💡</span><span style="font-weight: 700; font-size: 17px; color: #ffdd9a;">Time to test your knowledge!</span>';
    intro.style.display = "flex";
    intro.style.alignItems = "center";
    intro.style.marginBottom = "4px";
    contentEl.appendChild(intro);

    // Render quiz
    const label = document.createElement("div");
    label.className = "quiz-label";
    label.textContent = "Quiz";
    quizBlock.appendChild(label);

    const q = document.createElement("div");
    q.className = "quiz-question";
    q.textContent = actualLesson.question;
    quizBlock.appendChild(q);

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "quiz-options";

    actualLesson.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.dataset.optionId = opt.id;

      const textSpan = document.createElement("span");
      textSpan.textContent = opt.text;

      const indicator = document.createElement("span");
      indicator.className = "option-indicator";
      indicator.textContent = "○";

      btn.appendChild(textSpan);
      btn.appendChild(indicator);

      btn.addEventListener("click", () => {
        handleQuizClick(btn, opt, actualLesson);
      });

      optionsWrapper.appendChild(btn);
    });

    quizBlock.appendChild(optionsWrapper);
  } else if (actualLesson.type === "scenario") {
    console.log("🎯 Rendering scenario lesson");
    console.log("Scenario question:", actualLesson.question);
    console.log("Number of options:", actualLesson.options?.length);
    
    // Scenario-based decision making
    const scenarioBox = document.createElement("div");
    scenarioBox.style.cssText = "background: linear-gradient(135deg, rgba(244, 182, 94, 0.15), rgba(0, 0, 0, 0.5)); padding: 20px; border-radius: 14px; border: 2px solid rgba(244, 182, 94, 0.4); margin-bottom: 16px;";
    scenarioBox.innerHTML = `<div style="font-size: 16px; line-height: 1.6; color: #fff;">${actualLesson.scenario}</div>`;
    contentEl.appendChild(scenarioBox);

    // Render quiz-style options
    const label = document.createElement("div");
    label.className = "quiz-label";
    label.textContent = "Your Decision";
    quizBlock.appendChild(label);

    const q = document.createElement("div");
    q.className = "quiz-question";
    q.textContent = actualLesson.question;
    quizBlock.appendChild(q);

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "quiz-options";

    actualLesson.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.dataset.optionId = opt.id;

      const textSpan = document.createElement("span");
      textSpan.textContent = opt.text;

      const indicator = document.createElement("span");
      indicator.className = "option-indicator";
      indicator.textContent = "○";

      btn.appendChild(textSpan);
      btn.appendChild(indicator);

      btn.addEventListener("click", () => {
        handleScenarioClick(btn, opt, actualLesson);
      });

      optionsWrapper.appendChild(btn);
    });

    quizBlock.appendChild(optionsWrapper);
  } else if (actualLesson.type === "interactive-slider") {
    // Interactive slider lesson
    const titleDiv = document.createElement("div");
    titleDiv.style.cssText = "font-size: 20px; font-weight: 800; margin-bottom: 16px; color: #fff;";
    titleDiv.textContent = actualLesson.title;
    contentEl.appendChild(titleDiv);

    const questionDiv = document.createElement("div");
    questionDiv.style.cssText = "font-size: 16px; margin-bottom: 20px; color: var(--text-soft);";
    questionDiv.textContent = actualLesson.question;
    contentEl.appendChild(questionDiv);

    // Slider container
    const sliderContainer = document.createElement("div");
    sliderContainer.style.cssText = "background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0.6)); padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.15);";

    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = actualLesson.min;
    slider.max = actualLesson.max;
    slider.value = actualLesson.defaultValue;
    slider.style.cssText = "width: 100%; height: 8px; margin: 20px 0;";

    const labelDiv = document.createElement("div");
    labelDiv.style.cssText = "display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; font-weight: 600;";
    labelDiv.innerHTML = `<span>${actualLesson.labels[actualLesson.min]}</span><span>${actualLesson.labels[50]}</span><span>${actualLesson.labels[actualLesson.max]}</span>`;

    const resultDiv = document.createElement("div");
    resultDiv.style.cssText = "margin-top: 24px; padding: 20px; background: rgba(0, 0, 0, 0.5); border-radius: 12px; border-left: 4px solid #4ea2ff; font-size: 16px; line-height: 1.6;";
    resultDiv.textContent = actualLesson.outcomes[actualLesson.defaultValue].text;
    resultDiv.style.borderLeftColor = actualLesson.outcomes[actualLesson.defaultValue].color;

    slider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      const closest = Object.keys(actualLesson.outcomes).reduce((prev, curr) =>
        Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev
      );
      resultDiv.textContent = actualLesson.outcomes[closest].text;
      resultDiv.style.borderLeftColor = actualLesson.outcomes[closest].color;
    });

    sliderContainer.appendChild(labelDiv);
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(resultDiv);

    quizBlock.appendChild(sliderContainer);
  }
  
  console.log("📝 ========== renderLesson() END ==========");
  console.log("📝 Final currentIndex:", currentIndex);
}

function handleScenarioClick(button, option, lesson) {
  // Lock all options
  const allOptions = document.querySelectorAll(".quiz-option");
  allOptions.forEach((btn) => {
    btn.disabled = true;
  });

  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");
  
  if (!hintText || !pendingXpEl) return;

  if (option.correct) {
    button.classList.add("correct");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "✓";

    pendingXp = 12; // Scenarios give more XP
    combo++;
    totalCorrect++;
    
    // Show consequence
    hintText.innerHTML = `<strong style="color: #35c27e;">✓ Good call!</strong><br/>${option.consequence}<br/><br/><em style="color: var(--text-muted);">${lesson.explanation}</em>`;
    
    setTimeout(() => {
      showCelebration("correct", pendingXp);
    }, 300);
  } else {
    button.classList.add("incorrect");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "✗";

    pendingXp = 3;
    combo = 0;
    
    // Show consequence
    hintText.innerHTML = `<strong style="color: #ff7b7b;">Outcome:</strong><br/>${option.consequence}<br/><br/><em style="color: var(--text-muted);">${lesson.explanation}</em>`;
  }

  xp += pendingXp;
  updateGameUI();
  
  pendingXpEl.style.transform = 'scale(1.3)';
  pendingXpEl.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
  setTimeout(() => {
    pendingXpEl.textContent = `+${pendingXp}`;
    pendingXpEl.style.transform = 'scale(1)';
  }, 50);
}

function handleQuizClick(button, option, lesson) {
  // Lock all options
  const allOptions = document.querySelectorAll(".quiz-option");
  allOptions.forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove("correct", "incorrect");
    const indicator = btn.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "○";
  });

  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");
  
  if (!hintText || !pendingXpEl) return;

  if (option.correct) {
    button.classList.add("correct");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "✓";

    pendingXp = 8;
    combo++;
    totalCorrect++;
    hintText.textContent = lesson.explanation;
    
    // Check combo achievement
    if (combo >= 5 && !achievements.combo5.unlocked) {
      setTimeout(() => checkAndShowAchievement("combo5"), 1000);
    }
    
    // Show celebration
    setTimeout(() => {
      showCelebration("correct", pendingXp);
    }, 300);
    
  } else {
    button.classList.add("incorrect");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) indicator.textContent = "✗";

    pendingXp = 2;
    combo = 0; // Reset combo on wrong answer
    hintText.textContent = lesson.explanation || "Not quite. Review the content and try to think through the key concepts.";
  }

  // Animate XP gain
  const oldXp = xp;
  xp += pendingXp;
  
  // Update all UI
  updateGameUI();
  
  // Animate pending XP display
  pendingXpEl.style.transform = 'scale(1.3)';
  pendingXpEl.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
  setTimeout(() => {
    pendingXpEl.textContent = `+${pendingXp}`;
    pendingXpEl.style.transform = 'scale(1)';
  }, 50);
}

// Smooth counter animation
function animateCounter(element, start, end, duration) {
  const startTime = performance.now();
  const diff = end - start;
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.round(start + diff * easeOutQuart);
    
    element.textContent = current.toString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

function goNext() {
  console.log("➡️ goNext() called");
  console.log("➡️ Current index BEFORE increment:", currentIndex);
  
  const lessons = getCurrentLessons();
  if (!lessons.length) return;

  currentIndex++;
  console.log("➡️ Current index AFTER increment:", currentIndex);
  
  if (currentIndex >= lessons.length) {
    console.log("➡️ Reached end, looping back to 0");
    currentIndex = 0; // Loop back to start
    todayLessons++;
    updateGameUI();
    
    // Check daily goal achievement
    if (todayLessons >= todayGoal) {
      setTimeout(() => {
        showCelebration("correct", 20);
      }, 500);
    }
  }
  renderLesson();
}

// Expose globally for inline onclick
window.goNextDirect = goNext;
window.handleSubjectClickDirect = handleSubjectClick;

function showLevelUp() {
  const overlay = $("#levelUpOverlay");
  const number = $("#levelUpNumber");
  
  if (!overlay || !number) return;
  
  number.textContent = level;
  overlay.classList.add("active");
  
  createConfetti();
}

function closeLevelUp() {
  const overlay = $("#levelUpOverlay");
  if (!overlay) return;
  
  overlay.classList.remove("active");
}

// Make closeLevelUp globally accessible for inline onclick
window.closeLevelUp = closeLevelUp;

function switchTab(tab) {
  const lessonCard = $("#lessonCard");
  const journalPanel = $("#journalPanel");
  const missionsPanel = $("#missionsPanel");
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((t) => t.classList.remove("is-active"));

  if (tab === "lesson") {
    lessonCard.classList.remove("is-hidden");
    journalPanel.classList.add("is-hidden");
    missionsPanel.classList.add("is-hidden");
    document.querySelector('[data-tab="lesson"]').classList.add("is-active");
  } else if (tab === "journal") {
    lessonCard.classList.add("is-hidden");
    journalPanel.classList.remove("is-hidden");
    missionsPanel.classList.add("is-hidden");
    document.querySelector('[data-tab="journal"]').classList.add("is-active");
  } else if (tab === "missions") {
    lessonCard.classList.add("is-hidden");
    journalPanel.classList.add("is-hidden");
    missionsPanel.classList.remove("is-hidden");
    document.querySelector('[data-tab="missions"]').classList.add("is-active");
  }
}

function updateMetaForSubject(subject) {
  const subjectChip = $("#subjectChip");
  const unitChip = $("#unitChip");
  const lessonTitle = $("#lessonTitle");
  const lessonSubtitle = $("#lessonSubtitle");
  const eraLabel = $("#eraLabel");
  const eraPillLabel = $("#eraPillLabel");
  const journalText = $("#journalText");
  const missionsText = $("#missionsText");
  
  // Safe setter helper
  const safeSet = (element, value) => {
    if (element) element.textContent = value;
  };
  
  // Check if elements exist
  if (!subjectChip || !unitChip || !lessonTitle || !lessonSubtitle) {
    console.error("❌ Missing required DOM elements in updateMetaForSubject");
    return;
  }

  let journalContent = "";
  let missionsContent = "";
  
  if (subject === "economics") {
    subjectChip.textContent = "Economics · Markets";
    unitChip.textContent = "Unit: Planned Economies";
    lessonTitle.textContent = "Planned Economies";
    lessonSubtitle.textContent = "When the state takes the steering wheel of the market.";
    era = "Foundations";
    journalContent = "Economics City · Markets. Stamps for planned vs market systems, tiny city diagrams, and your one-line notes on who sets prices.";
    missionsContent = "Soon: run a tiny model of a planned economy vs a market economy and watch queues, surpluses, and growth change your city.";
  } else if (subject === "space") {
    subjectChip.textContent = "Cosmic History · Space Race";
    unitChip.textContent = "Unit: The Space Race";
    lessonTitle.textContent = "The Space Race";
    lessonSubtitle.textContent = "When rockets, politics, and prestige left the atmosphere.";
    era = "Modern";
    journalContent =
      "Cosmic History · Space Race. Stamps for Sputnik, Gagarin, Apollo 11, and your notes on why space mattered in the Cold War.";
    missionsContent =
      "Soon: choose which missions to fund as a Cold War leader and see how your space strategy shifts global prestige.";
  } else if (subject === "psych") {
    subjectChip.textContent = "Psychology · Mind";
    unitChip.textContent = "Unit: Cognitive Biases";
    lessonTitle.textContent = "Cognitive Biases";
    lessonSubtitle.textContent = "Mental shortcuts that quietly run your life.";
    era = "Foundations";
    journalContent =
      "Psychology Quarter · Mind. Stamps for confirmation bias, availability heuristic, and notes on how your brain takes shortcuts.";
    missionsContent =
      "Soon: test your own biases in simulated scenarios and see how they shape your decisions in real time.";
  } else if (subject === "maths") {
    subjectChip.textContent = "Technology · Systems";
    unitChip.textContent = "Unit: Path Dependence";
    lessonTitle.textContent = "Why QWERTY Exists";
    lessonSubtitle.textContent = "When 'good enough first' beats 'better later.'";
    era = "Modern";
    journalContent =
      "Technology Grid · Systems. Stamps for QWERTY, lock-in effects, and your notes on why inferior standards persist.";
    missionsContent =
      "Soon: run a market simulation where you choose between competing standards and watch path dependence unfold.";
  } else if (subject === "history") {
    subjectChip.textContent = "History · Empires";
    unitChip.textContent = "Unit: Why Empires Collapse";
    lessonTitle.textContent = "Empire Collapse";
    lessonSubtitle.textContent = "Patterns that repeat from Rome to modern states.";
    era = "Ancient";
    journalContent =
      "History Port · Empires. Stamps for Rome, Ottoman decline, and notes on overstretch and internal decay.";
    missionsContent =
      "Soon: manage an empire's resources and borders, then watch the consequences of your expansion choices.";
  } else if (subject === "science") {
    subjectChip.textContent = "Science · Mind-Body";
    unitChip.textContent = "Unit: The Placebo Effect";
    lessonTitle.textContent = "The Placebo Effect";
    lessonSubtitle.textContent = "When expectation becomes biology.";
    era = "Modern";
    journalContent =
      "Science Lab · Mind-Body. Stamps for placebo mechanisms, pain studies, and notes on how belief shapes reality.";
    missionsContent =
      "Soon: design a drug trial and see how placebo effects complicate the search for real medical effects.";
  } else if (subject === "investing") {
    subjectChip.textContent = "Investing · Real Humans";
    unitChip.textContent = "Unit: Stock Markets & Strategy";
    lessonTitle.textContent = "Investing for Real Humans";
    lessonSubtitle.textContent = "Build wealth without the jargon.";
    era = "Modern";
    journalContent =
      "Investing District · Markets. Stamps for ETFs, risk profiles, and portfolio archetypes. Build your strategy.";
    missionsContent =
      "Soon: build your portfolio, backtest strategies, and simulate market crashes to see how you'd react.";
  } else if (subject === "crypto") {
    subjectChip.textContent = "Crypto · Digital Wild West";
    unitChip.textContent = "Unit: Blockchain & Bitcoin";
    lessonTitle.textContent = "Crypto: Digital Wild West";
    lessonSubtitle.textContent = "Decentralized chaos and digital gold.";
    era = "Future";
    journalContent =
      "Crypto Wild West. Stamps for Bitcoin, Ethereum, security rules, and notes on how to not get rekt.";
    missionsContent =
      "Soon: sim trading with fake money, spot ponzi schemes, and build your crypto strategy (bull vs bear markets).";
  } else if (subject === "blackholes") {
    subjectChip.textContent = "Astrophysics · Violence";
    unitChip.textContent = "Unit: Black Holes";
    lessonTitle.textContent = "Black Holes & Cosmic Violence";
    lessonSubtitle.textContent = "Where gravity wins and physics breaks.";
    era = "Cosmic";
    journalContent =
      "Black Hole Zone. Stamps for event horizons, spaghettification, Hawking radiation, and time dilation weirdness.";
    missionsContent =
      "Soon: simulate falling into black holes, calculate escape velocities, and visualize spacetime warping.";
  } else if (subject === "glaciers") {
    subjectChip.textContent = "Climate · Ice Ages";
    unitChip.textContent = "Unit: Glaciers & Time";
    lessonTitle.textContent = "Glaciers & Ice Ages";
    lessonSubtitle.textContent = "Frozen rivers that reshape continents.";
    era = "Earth";
    journalContent =
      "Glacier Lab. Stamps for ice cores, climate timelines, sea level rise, and notes on planetary machinery.";
    missionsContent =
      "Soon: drill ice cores, analyze ancient atmospheres, and predict sea level changes based on melt rates.";
  } else if (subject === "nuclear") {
    subjectChip.textContent = "Physics · Atomic";
    unitChip.textContent = "Unit: Nuclear Everything";
    lessonTitle.textContent = "Nuclear Everything";
    lessonSubtitle.textContent = "Fusion, fission, and catastrophic failures.";
    era = "Modern";
    journalContent =
      "Nuclear Core. Stamps for fusion vs fission, Chernobyl, waste timelines, and reactor mechanics.";
    missionsContent =
      "Soon: manage a nuclear reactor, prevent meltdowns, and design waste storage for 10,000 years.";
  } else if (subject === "money") {
    subjectChip.textContent = "Economics · Macro";
    unitChip.textContent = "Unit: How Money Works";
    lessonTitle.textContent = "How Money Works";
    lessonSubtitle.textContent = "Inflation, interest rates, and housing bubbles.";
    era = "Modern";
    journalContent =
      "Economics Hub. Stamps for inflation cycles, central bank decisions, housing markets, and interest rate mechanics.";
    missionsContent =
      "Soon: run a central bank, set interest rates, and manage inflation vs recession trade-offs.";
  } else if (subject === "minerals") {
    subjectChip.textContent = "Resources · Materials";
    unitChip.textContent = "Unit: Critical Minerals";
    lessonTitle.textContent = "Minerals & Metals";
    lessonSubtitle.textContent = "Lithium, copper, and the supply chains that power civilization.";
    era = "Modern";
    journalContent =
      "Resource Mines. Stamps for lithium extraction, copper demand, supply chain fragility, and geopolitical control.";
    missionsContent =
      "Soon: manage a lithium mine, negotiate with superpowers, and navigate resource geopolitics.";
  } else if (subject === "humans") {
    subjectChip.textContent = "Psychology · Strategy";
    unitChip.textContent = "Unit: Game Theory";
    lessonTitle.textContent = "Human Weirdness";
    lessonSubtitle.textContent = "Game theory, cognitive biases, and why we're predictably irrational.";
    era = "Foundations";
    journalContent =
      "Game Theory Lab. Stamps for prisoner's dilemma, Nash equilibrium, anchoring bias, and sunk cost fallacy.";
    missionsContent =
      "Soon: play strategic games, test your biases, and see how rational you really are.";
  } else if (subject === "biology") {
    subjectChip.textContent = "Biology · Future";
    unitChip.textContent = "Unit: Genetic Engineering";
    lessonTitle.textContent = "Biology That Feels Like Sci-Fi";
    lessonSubtitle.textContent = "CRISPR, tardigrades, and the quest for immortality.";
    era = "Future";
    journalContent =
      "Bio Lab. Stamps for CRISPR mechanics, tardigrade survival, senescence, and gene editing ethics.";
    missionsContent =
      "Soon: design genetic modifications, balance ethics vs progress, and explore biological immortality.";
  } else if (subject === "apocalypse") {
    subjectChip.textContent = "Existential · Risks";
    unitChip.textContent = "Unit: Catastrophic Scenarios";
    lessonTitle.textContent = "If the World Ends";
    lessonSubtitle.textContent = "Supervolcanoes, pandemics, nuclear winter, and other fun scenarios.";
    era = "Crisis";
    journalContent =
      "Apocalypse Zone. Stamps for supervolcano mechanics, pandemic math, nuclear winter models, and survival strategies.";
    missionsContent =
      "Soon: simulate pandemic responses, calculate nuclear winter outcomes, and manage existential crises.";
  } else {
    // Placeholder for other subjects
    subjectChip.textContent = "Prototype · Subject";
    unitChip.textContent = "Unit: Coming soon";
    lessonTitle.textContent = "Prototype subject";
    lessonSubtitle.textContent =
      "More districts coming online soon.";
    era = "Foundations";
    journalContent =
      "Prototype subject. This journal page will hold diagrams and notes once this district is wired.";
    missionsContent =
      "Prototype subject. Soon: a small simulation mission for this area.";
  }

  // Safely set all text content at the end
  safeSet(eraLabel, era);
  safeSet(eraPillLabel, `${era} Era`);
  safeSet(journalText, journalContent);
  safeSet(missionsText, missionsContent);
}

function handleSubjectClick(node) {
  console.log("🎓 handleSubjectClick called for:", node.dataset.subject);
  const subject = node.dataset.subject;
  
  console.log("📚 Available lessons:", Object.keys(subjectLessons));
  console.log("🔍 Looking for subject:", subject);
  console.log("✅ Has lessons?", !!subjectLessons[subject]);
  if (subjectLessons[subject]) {
    console.log("📖 Number of lessons:", subjectLessons[subject].length);
  }

  document
    .querySelectorAll(".world-node")
    .forEach((n) => n.classList.remove("is-active"));
  node.classList.add("is-active");
  
  // Add a subtle pulse effect to the clicked node
  node.style.animation = 'none';
  setTimeout(() => {
    node.style.animation = 'subtle-float 0.6s ease-out';
  }, 10);

  // ALWAYS reset to first lesson when switching subjects
  console.log("🔄 Switching from", activeSubject, "to", subject);
  console.log("🔄 OLD currentIndex:", currentIndex);
  
  // Clear the content immediately to prevent old content from showing
  const contentEl = $("#lessonContent");
  const quizBlock = $("#quizBlock");
  if (contentEl) contentEl.innerHTML = "";
  if (quizBlock) quizBlock.innerHTML = "";
  
  // Force reset to 0 - this MUST happen before anything else
  currentIndex = 0;
  activeSubject = subject;
  
  console.log("🔄 NEW currentIndex:", currentIndex);
  console.log("🔄 NEW activeSubject:", activeSubject);
  
  // Make sure we're on the Lesson tab
  switchTab("lesson");
  
  // Check if subject has lesson content
  const liveSubjects = ["economics", "space", "psych", "maths", "history", "science", "investing", "crypto", "glaciers", "nuclear", "minerals", "humans", "biology", "apocalypse", "money", "blackholes"];
  if (liveSubjects.includes(subject)) {
    console.log("✅ Subject is live! Switching to:", subject);
    
    try {
      updateMetaForSubject(subject);
    } catch (error) {
      console.error("❌ Error in updateMetaForSubject:", error);
    }
    
    console.log("📝 About to render lesson at index:", currentIndex);
    console.log("📚 Lessons for subject:", subjectLessons[subject]?.length);
    console.log("🎯 First lesson:", subjectLessons[subject]?.[0]);
    
    // Render immediately, no need for requestAnimationFrame
    renderLesson();
    console.log("✅ Lesson rendered!");
  } else {
    console.warn("⚠️ Subject not in live list:", subject);
    activeSubject = "economics"; // keep a safe base for data
    updateMetaForSubject(subject);
    const contentEl = $("#lessonContent");
    contentEl.innerHTML =
      "<p style='font-weight: 600; opacity: 0.9;'>Prototype mode: this subject will get its own lesson flow. For now, Economics City and Cosmic History are the ones that are alive.</p>";
    $("#quizBlock").innerHTML = "";
    const lessons = getCurrentLessons();
    const progressLabel = $("#lessonProgressLabel");
    const progressFill = $("#lessonProgressFill");
    progressLabel.textContent = `0 / ${lessons.length}`;
    progressFill.style.width = "0%";
    
    // Fade in the message
    contentEl.style.opacity = '0';
    setTimeout(() => {
      contentEl.style.transition = 'opacity 0.4s ease-out';
      contentEl.style.opacity = '1';
    }, 50);
  }
}

// Wait for DOM to be fully ready
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// === CATEGORY NAVIGATION ===
let currentCategory = null;

function showCategories() {
  console.log("📁 Showing categories");
  currentCategory = null;
  
  const categoryGrid = $("#categoryGrid");
  const subjectGrid = $("#subjectGrid");
  const breadcrumbSeparator = $("#breadcrumbSeparator");
  const breadcrumbCurrent = $("#breadcrumbCurrent");
  
  // Show category grid, hide subject grid
  categoryGrid.classList.remove("is-hidden");
  subjectGrid.classList.add("is-hidden");
  
  // Update breadcrumb
  breadcrumbSeparator.style.display = "none";
  breadcrumbCurrent.textContent = "";
  
  // Clear and populate categories
  categoryGrid.innerHTML = "";
  Object.values(categories).forEach(cat => {
    const node = document.createElement("button");
    node.className = "world-node category-folder";
    node.dataset.category = cat.id;
    node.innerHTML = `
      <div class="node-icon">${cat.icon}</div>
      <div class="node-content">
        <span class="node-title">${cat.title}</span>
        <span class="node-subtitle">${cat.subtitle}</span>
      </div>
      <div class="folder-badge">${cat.subjects.length} topics</div>
    `;
    node.onclick = () => showCategorySubjects(cat.id);
    categoryGrid.appendChild(node);
  });
}

function showCategorySubjects(categoryId) {
  console.log("📂 Opening category:", categoryId);
  currentCategory = categoryId;
  
  const category = categories[categoryId];
  const categoryGrid = $("#categoryGrid");
  const subjectGrid = $("#subjectGrid");
  const breadcrumbSeparator = $("#breadcrumbSeparator");
  const breadcrumbCurrent = $("#breadcrumbCurrent");
  
  // Show subject grid, hide category grid
  categoryGrid.classList.add("is-hidden");
  subjectGrid.classList.remove("is-hidden");
  
  // Update breadcrumb
  breadcrumbSeparator.style.display = "inline";
  breadcrumbCurrent.textContent = category.title;
  
  // Clear and populate subjects
  subjectGrid.innerHTML = "";
  category.subjects.forEach(subjectId => {
    const meta = subjectMeta[subjectId];
    if (!meta) return;
    
    const node = document.createElement("button");
    node.className = `world-node world-node--${subjectId}`;
    node.dataset.subject = subjectId;
    node.innerHTML = `
      <div class="node-icon">${meta.icon}</div>
      <div class="node-content">
        <span class="node-title">${meta.title}</span>
        <span class="node-subtitle">${meta.subtitle}</span>
      </div>
      <div class="node-progress">
        <div class="node-progress-bar" style="width: ${Math.floor(Math.random() * 50)}%;"></div>
      </div>
    `;
    node.onclick = () => {
      window.handleSubjectClickDirect && window.handleSubjectClickDirect(node);
    };
    subjectGrid.appendChild(node);
  });
}

// Make functions globally accessible
window.showCategories = showCategories;
window.showCategorySubjects = showCategorySubjects;

function initApp() {
  // Initialize game UI
  updateGameUI();
  
  // Show categories on startup
  showCategories();
  
  // Start with economics wired (but don't navigate to it yet)
  updateMetaForSubject("economics");
  renderLesson();

  // Next button
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", function(e) {
      e.preventDefault();
      goNext();
    });
  }

  // Tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
    });
  });

  // Subject nodes - with debugging
  const subjectNodes = document.querySelectorAll(".world-node");
  console.log("🎓 Found subject nodes:", subjectNodes.length);
  
  subjectNodes.forEach((node, index) => {
    console.log(`Attaching listener ${index + 1}:`, node.dataset.subject);
    
    // Test if node is visible and clickable
    const styles = window.getComputedStyle(node);
    console.log(`  → Display: ${styles.display}, Pointer-events: ${styles.pointerEvents}, Z-index: ${styles.zIndex}`);
    
    // Method 1: addEventListener
    node.addEventListener("click", (e) => {
      console.log("✅ Subject card CLICKED (addEventListener):", node.dataset.subject);
      e.preventDefault();
      e.stopPropagation();
      handleSubjectClick(node);
    }, false);
    
    // Method 2: Direct onclick backup
    node.onclick = (e) => {
      console.log("🔘 Subject onclick fired:", node.dataset.subject);
      handleSubjectClick(node);
    };
  });
  
  console.log("✅ All subject card listeners attached!");
  
  // Level up continue button
  const levelUpBtn = document.querySelector(".level-up-continue");
  if (levelUpBtn) {
    levelUpBtn.addEventListener("click", () => {
      closeLevelUp();
    });
  }
  
  // Close celebration overlay when clicked
  const celebrationOverlay = $("#celebrationOverlay");
  if (celebrationOverlay) {
    celebrationOverlay.addEventListener("click", () => {
      celebrationOverlay.classList.remove("active");
    });
  }
  
  // Resize confetti canvas on window resize
  window.addEventListener("resize", () => {
    const canvas = $("#confettiCanvas");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  });
  
}
