// Yuno learning platform - Single Lesson Version (Investing 101)
// Subject lessons data
// Note: Lesson order is determined by array position, not the 'id' field
// Lessons can be added or modified in the finance array below
const subjectLessons = {
  finance: [
    {
      id: 1,
      type: "intro",
      title: "Investing — The Skill You Can Learn at Any Age",
      subtitle: "Curiosity is enough. The rest is learnable.\nWelcome to the class that makes the rest of life make more sense.",
      imageUrl: "images/investing-intro.png",
      imageAlt: "Investing introduction"
    },
    {
      id: 2,
      type: "content",
      title: "Why School Skipped This",
      paragraphs: [
        "The system taught: budgeting, saving, compound interest (4 lines in maths), and how to fill in forms.",
        "The system skipped: how wealth actually forms, why assets exist, what investing is, what it funds, how to allocate capital, and why time is the cheat code.",
        "Most people leave school knowing how to analyse a poem, but not how to read a pension statement or a stock chart.",
        "This course fixes that. You'll understand the mechanics, not just the buzzwords."
      ]
    },
    {
      id: 3,
      type: "quiz",
      question: "School skipped investing because:",
      options: [
        { id: "a", text: "You can’t grade compounding in 45 minutes", correct: false },
        { id: "b", text: "It wasn’t a curriculum priority", correct: false },
        { id: "c", text: "A combination of factors", correct: true },
        { id: "d", text: "It was assumed to be handled at home", correct: false }
      ],
      explanation: "All of these reasons contributed to schools skipping investing education. The system prioritized testable, academic subjects over practical financial skills that require time to demonstrate value, leaving a knowledge gap that affects millions."
    },
    {
      id: 4,
      type: "content",
      title: "What Investing Actually Is",
      paragraphs: [
        "Most people think investing is guessing, gambling, or day-trading on a spaceship-looking app.",
        "Others think it's only for rich people or finance professionals.",
        "School rarely explains it. Families often assume it’s 'too risky' or 'not for us.'",
        "Investing isn’t day-trading, gambling, or a secret club for the £100k+ crowd.",
        "It’s just owning a slice of something productive — a company, a piece of land, an energy grid, a solar farm, etc.",
        "These things create value in the real world: they sell products, pay dividends, rent land, or power homes.",
        "Investing = putting money into productive assets that (hopefully) grow in value or generate income over time.",
        "It isn't gambling, and it isn't magic.",
        "It's allocating capital into things that produce returns.",
        "Think of it like hiring employees. Your money doesn’t sit still — it goes to work.",
        "Some assets become star performers, others do ‘meh,’ but the aim is simple: growth over time."
      ]
    },
    {
      id: 5,
      type: "quiz",
      question: "Investing is closer to:",
      options: [
        { id: "a", text: "Owning a bakery that sells bread every day", correct: true },
        { id: "b", text: "Betting on a horse to win once", correct: false },
        { id: "c", text: "Buying a lottery ticket", correct: false },
        { id: "d", text: "Guessing which emoji your friend will send", correct: false }
      ],
      explanation: "Investing is about owning productive assets—like a bakery—that create value again and again over time, not one-off bets like horse racing or lottery tickets."
    },
    {
      id: 6,
      type: "content",
      title: "Why Investing Exists",
      paragraphs: [
        "Human economies expand because we invent, build, innovate, and demand new things.",
        "Investing is simply how we: fund innovation, fund growth, fund risk, fund long-term progress.",
        "Without investing → no tech, no medicine, no bridges, no chips, no rockets, no progress.",
        "Investing is how progress is financed.",
        "Money has three main paths:",
        "• Spending → gone immediately",
        "• Saving → safe but static",
        "• Investing → used to build things and grow",
        "Most adults only ever get taught the first two."
      ]
    },
    {
      id: 7,
      type: "quiz",
      question: "Investing is essential because it finances:",
      options: [
        { id: "a", text: "Progress and growth", correct: true },
        { id: "b", text: "Only cool inventions", correct: false },
        { id: "c", text: "Only companies", correct: false },
        { id: "d", text: "Only roads and bridges", correct: false }
      ],
      explanation: "Investing finances economic progress—innovation, businesses, and infrastructure all sit under that umbrella."
    },
    {
      id: 8,
      type: "content",
      title: "The Invisible Enemy: Inflation",
      paragraphs: [
        "School treats money as static. It never mentions the villain that slowly steals purchasing power.",
        "£100 today might only have the buying power of ~£74 in 10 years (at ~3% annual inflation)",
        "Inflation is a silent tax on time. Investing is how you fight it.",
        "Early awareness makes financial decisions less mysterious and more intentional."
      ]
    },
    {
      id: 9,
      type: "quiz",
      question: "Inflation mainly affects:",
      options: [
        { id: "a", text: "Prices", correct: false },
        { id: "b", text: "Purchasing power", correct: false },
        { id: "c", text: "Savings", correct: false },
        { id: "d", text: "All of the above", correct: true }
      ],
      explanation: "Inflation affects prices, purchasing power, and the value of savings over time. It's why investing is essential to preserve and grow wealth."
    },
    {
      id: 10,
      type: "content",
      title: "The Cheat Code They Hid: Compound Growth",
      paragraphs: [
        "Compound growth deserved a 6-week school module, fireworks, and guest speakers.",
        "It's interest on your interest. Growth on growth. Time becoming exponential.",
        "Albert Einstein called it 'the 8th wonder of the world.' School gave it 4 lines in maths and moved on like it wasn't the formula that shapes wealth.",
        "The earlier you start, the less money you need.",
        "Here’s the important bit: simple interest grows in a straight line. Compound growth curves upward because past growth becomes the engine for future growth.",
        "At first the curve looks slow — almost boring. Then time tilts it upward and the numbers get weird (in a good way).",
        "This is why £50/month at 18 can beat £200/month starting at 30. Time is doing most of the work.",
        "Compound growth doesn’t reward brilliance. It rewards patience."
      ]
    },
    {
      id: 11,
      type: "interactive",
      title: "See Your Money Grow",
      subtitle: "Drag the slider to see how time transforms your investment",
      initialAmount: 1000,
      annualReturn: 7,
      minYears: 1,
      maxYears: 40
    },
    {
      id: 12,
      type: "quiz",
      question: "Compounding rewards:",
      options: [
        { id: "a", text: "Patience", correct: true },
        { id: "b", text: "Genius", correct: false },
        { id: "c", text: "Spreadsheets", correct: false },
        { id: "d", text: "Panic", correct: false }
      ],
      explanation: "Compounding rewards patience and time. The longer your money compounds, the more powerful the effect becomes."
    },
    {
      id: 13,
      type: "content",
      title: "Where Investing Happens (Finally Explained)",
      paragraphs: [
        "Real assets people grow wealth with:",
        "Stocks → partial ownership of businesses",
        "ETFs → many stocks at once (cheat mode)",
        "Bonds → lending",
        "Real Estate → physical assets",
        "Crypto → tech + speculation + volatility",
        "Businesses → asymmetric upside",
        "Most adults never hear these words until they're 30+ and then panic google it at 1am.",
        "Owning the economy is easier than beating it."
      ]
    },
    {
      id: 14,
      type: "content",
      title: "Stocks & Dividends: Tiny Ownership Explained",
      paragraphs: [
        "A stock is a tiny slice of a real business.",
        "Businesses make products, earn profits, and expand. Stocks let you own a part of that engine.",
        "How do stockholders get paid?",
        "→ Dividends: a share of profits paid out to owners",
        "→ Buybacks: the company buys its own shares (makes yours more valuable)",
        "→ Price appreciation: as the business grows, the market reprices it",
        "Not all companies pay dividends. Some reinvest profits into growth instead.",
        "Dividend companies = income today. Growth companies = more income later (hopefully).",
        "Modern twist: we now have fractional shares — fancy ways to own tiny pieces of expensive stocks. You don't need a big wad to start.",
        "Stocks are ownership. Dividends are the owner's paycheck."
      ]
    },
    {
      id: 15,
      type: "quiz",
      question: "ETFs let beginners:",
      options: [
        { id: "a", text: "Diversify automatically", correct: true },
        { id: "b", text: "Pick individual winners", correct: false },
        { id: "c", text: "Bet on single companies", correct: false },
        { id: "d", text: "Avoid the market entirely", correct: false }
      ],
      explanation: "ETFs spread money across many companies, reducing the need for stock-picking and smoothing volatility."
    },
    {
      id: 16,
      type: "content",
      title: "Why Markets Move: News, Fear, and Hype",
      paragraphs: [
        "Stock prices don’t move in a vacuum. They react to what’s happening in the world.",
        "Earnings reports, interest rates, elections, wars, new products, and regulation all change what investors think a business is worth.",
        "In the short term, prices are heavily influenced by mood: fear, greed, hype, and headlines.",
        "In the long term, prices are pulled toward reality: profits, cashflow, and how well the business actually performs.",
        "This is why markets can look chaotic day-to-day but more logical decade-to-decade.",
        "You can’t control the noise, but you can choose to focus on the signal: real businesses, real earnings, real value over time."
      ]
    },
    {
      id: 17,
      type: "quiz",
      question: "In the short term, markets mainly react to:",
      options: [
        { id: "a", text: "Headlines, hype, fear and mood", correct: true },
        { id: "b", text: "Decades of fundamental performance", correct: false },
        { id: "c", text: "Perfect forecasting models", correct: false },
        { id: "d", text: "Astrology", correct: false }
      ],
      explanation: "Short-term market movements are driven by sentiment, headlines, and uncertainty. Long-term movements are driven by business performance and cashflows."
    },
    {
      id: 18,
      type: "content",
      title: "How to Pick Investments (Beginner Framework)",
      paragraphs: [
        "You don't need to 'beat the market' to build wealth. Most people are better off owning the market.",
        "Good investing decisions are usually boring and rule-based.",
        "A simple way to think about picking investments:",
        "1) What am I investing for? (Goal)",
        "2) When do I need the money? (Time horizon)",
        "3) How much uncertainty can I tolerate? (Risk)",
        "4) What assets match that profile? (Allocation)",
        "For most beginners, broad ETFs are the cleanest starting point: diversified, low-cost, and no guessing required.",
        "Individual stocks become more reasonable once you understand the businesses behind them.",
        "Speculative assets (crypto, startups, etc.) should be treated as 'moonshot buckets' — tiny % of the portfolio, never the core.",
        "The core of good investing is alignment: the assets match your goals, time, and temperament."
      ]
    },
    {
      id: 21,
      type: "content",
      title: "Risk: It's Not a Monster, It's the Price",
      paragraphs: [
        "Risk is not danger. Risk is rent you pay to access return.",
        "Returns exist because uncertainty exists. If outcomes were guaranteed, returns would be zero. The return is compensation for taking risk.",
        "School teaches 'avoid risk.' Real life requires understanding it, pricing it, and using it wisely.",
        "Different assets have different jobs:",
        "→ Bonds = stability + income",
        "→ Stock markets = compounding over time",
        "→ Venture/crypto/startups = asymmetric moonshots",
        "Time reduces risk. Short horizons look volatile, long horizons look smoother. Volatility ≠ permanent loss.",
        "Low risk = low returns",
        "Medium risk = compounding engine",
        "High risk = moonshot or crater",
        "Risk isn't bad — mispriced risk is."
      ]
    },
    {
      id: 22,
      type: "quiz",
      question: "Investors earn returns because they:",
      options: [
        { id: "a", text: "Like graphs and spreadsheets", correct: false },
        { id: "b", text: "Take risk", correct: true },
        { id: "c", text: "Buy the right guru's book", correct: false },
        { id: "d", text: "Wait for luck", correct: false }
      ],
      explanation: "Returns exist because investors take risk. If outcomes were guaranteed, returns would be zero."
    },
    {
      id: 23,
      type: "content",
      title: "Final Reflection: The One School Never Gave",
      paragraphs: [
        "If money is a worker, investing is hiring workers and teaching them new skills.",
        "If inflation is a thief, investing locks the door and fights back.",
        "If compounding is a cheat code, time is the multiplier.",
        "You now understand: how wealth forms, why inflation matters, why time matters, why investing exists, why productive assets grow, and why compounding is seismic.",
        "This is the baseline for building portfolios, choosing assets, and not getting eaten by a system you're already living inside."
      ]
    },
    {
      id: 24,
      type: "quiz",
      question: "If money is a worker, what is investing?",
      options: [
        { id: "a", text: "Hiring workers", correct: false },
        { id: "b", text: "Chaining workers to a desk", correct: false },
        { id: "c", text: "Teaching workers new skills", correct: false },
        { id: "d", text: "Hiring and teaching workers (A + C)", correct: true }
      ],
      explanation: "Investing is like hiring workers (allocating capital) and teaching them new skills (putting money into productive assets that grow)."
    },
    {
      id: 25,
      type: "quiz",
      question: "If inflation is a thief, what does investing do?",
      options: [
        { id: "a", text: "Locks the door", correct: false },
        { id: "b", text: "Fights back", correct: false },
        { id: "c", text: "Ignores it", correct: false },
        { id: "d", text: "Locks the door and fights back (A + B)", correct: true }
      ],
      explanation: "Investing both locks the door (preserves purchasing power) and fights back (grows wealth faster than inflation)."
    },
    {
      id: 19,
      type: "quiz",
      question: "If compounding is a cheat code, what is time?",
      options: [
        { id: "a", text: "The multiplier", correct: true },
        { id: "b", text: "The enemy", correct: false }, // Quiz option
        { id: "c", text: "The tax collector", correct: false },
        { id: "d", text: "Irrelevant", correct: false }
      ],
      explanation: "Time is the multiplier that makes compounding powerful. The longer your investments compound, the more exponential the growth becomes."
    },
    {
      id: 26,
      type: "content",
      title: "🏁 Lesson 1 Complete — Economic Agency 101",
      paragraphs: [
        "You've taken the class school never offered: Economic Agency 101",
        "You now understand:",
        "✔ How wealth forms",
        "✔ Why inflation matters",
        "✔ Why time matters",
        "✔ Why investing exists",
        "✔ Why productive assets grow",
        "✔ Why compounding is seismic",
        "This is the baseline for building portfolios, choosing assets, and not getting eaten by a system you're already living inside.",
        "🎉 Congratulations! You've completed Investing 101!"
      ]
    }
  ]
};


// Categories structure
const categories = [
  {
    id: "foundations",
    name: "Foundations",
    icon: "🏛️",
    subtitle: "Core concepts and fundamentals",
    subjects: ["finance"]
  }
];

// Subject metadata
const subjectMetadata = {
  finance: {
    name: "Investing",
    icon: "💰",
    subtitle: "The real-world skill school forgot to mention",
    category: "foundations"
  }
};

let activeSubject = "finance";
let currentIndex = 0;
let xp = 120;
let pendingXp = 0;
let era = "Foundations";
let activeCategory = null;

// Time tracking
let lessonStartTime = null;
let totalTimeSpent = 0; // in seconds
let timeTrackingInterval = null;

// Badge system
const badges = {
  'finance-complete': {
    id: 'finance-complete',
    name: 'Economic Agency Master',
    icon: '💰', // Fallback emoji if image doesn't load
    imageUrl: 'images/badge-finance-complete.png', // Optional: path to badge image
    description: 'Completed Investing 101 - Economic Agency',
    subject: 'finance'
  }
};

// Load user data from localStorage
function loadUserData() {
  const savedXp = localStorage.getItem('shinyos_xp');
  if (savedXp !== null) {
    xp = parseInt(savedXp, 10) || 120;
    const xpValue = $("#xpValue");
    if (xpValue) xpValue.textContent = xp.toString();
    updateXpProgress();
  }
  
  const savedBadges = localStorage.getItem('shinyos_badges');
  if (savedBadges) {
    try {
      const badgeIds = JSON.parse(savedBadges);
      // Badges are stored as an array of badge IDs
      window.earnedBadges = badgeIds;
    } catch (e) {
      window.earnedBadges = [];
    }
  } else {
    window.earnedBadges = [];
  }
  
  // Load time spent
  const savedTime = localStorage.getItem('shinyos_time_spent');
  if (savedTime !== null) {
    totalTimeSpent = parseInt(savedTime, 10) || 0;
  }
}

// Save user data to localStorage
function saveUserData() {
  localStorage.setItem('shinyos_xp', xp.toString());
  if (window.earnedBadges) {
    localStorage.setItem('shinyos_badges', JSON.stringify(window.earnedBadges));
  }
  localStorage.setItem('shinyos_time_spent', totalTimeSpent.toString());
}

// Update XP progress bar
function updateXpProgress() {
  const xpProgressMini = $("#xpProgressMini");
  if (xpProgressMini) {
    // Calculate level (every 100 XP = 1 level, starting from level 1)
    const level = Math.floor(xp / 100) + 1;
    const xpInCurrentLevel = xp % 100;
    const progressPercent = (xpInCurrentLevel / 100) * 100;
    xpProgressMini.style.width = `${progressPercent}%`;
    
    const levelValue = $("#levelValue");
    if (levelValue) {
      levelValue.textContent = level.toString();
    }
  }
}

// Award badge
function awardBadge(badgeId) {
  if (!window.earnedBadges) {
    window.earnedBadges = [];
  }
  
  // Check if badge already earned
  if (window.earnedBadges.includes(badgeId)) {
    return false;
  }
  
  const badge = badges[badgeId];
  if (!badge) return false;
  
  // Add badge
  window.earnedBadges.push(badgeId);
  saveUserData();
  
  // Show achievement popup
  showAchievementPopup(badge);
  
  return true;
}

// Show achievement popup
function showAchievementPopup(badge) {
  const popup = $("#achievementPopup");
  const icon = popup?.querySelector(".achievement-icon");
  const title = $("#achievementTitle");
  const desc = $("#achievementDesc");
  
  if (!popup) return;
  
  // Update icon - use image if available, otherwise emoji
  if (icon) {
    icon.innerHTML = ""; // Clear existing content
    
    if (badge.imageUrl) {
      const img = document.createElement("img");
      img.src = badge.imageUrl;
      img.alt = badge.name;
      img.style.width = "64px";
      img.style.height = "64px";
      img.style.objectFit = "contain";
      img.style.filter = "drop-shadow(0 4px 12px rgba(255, 221, 154, 0.5))";
      
      // Fallback to emoji if image fails to load
      img.onerror = function() {
        icon.textContent = badge.icon;
        icon.style.fontSize = "48px";
      };
      
      icon.appendChild(img);
      icon.style.fontSize = "0"; // Reset font size when using image
    } else {
      icon.textContent = badge.icon;
      icon.style.fontSize = "48px";
    }
  }
  
  if (title) title.textContent = "Badge Earned!";
  if (desc) desc.textContent = badge.name;
  
  popup.classList.add("active");
  
  // Add click handler to dismiss
  const dismissHandler = () => {
    popup.classList.remove("active");
    popup.removeEventListener("click", dismissHandler);
    popup.removeEventListener("touchend", dismissHandler);
  };
  
  popup.addEventListener("click", dismissHandler);
  popup.addEventListener("touchend", dismissHandler);
  
  // Auto-hide after 4 seconds
  const autoHideTimeout = setTimeout(() => {
    popup.classList.remove("active");
    popup.removeEventListener("click", dismissHandler);
    popup.removeEventListener("touchend", dismissHandler);
  }, 4000);
  
  // Store timeout so we can clear it if manually dismissed
  popup.dataset.autoHideTimeout = autoHideTimeout;
}

// Check and award lesson completion badge
function checkLessonCompletion() {
  const lessons = getCurrentLessons();
  if (currentIndex >= lessons.length - 1) {
    // Lesson is complete
    const badgeId = `${activeSubject}-complete`;
    if (badges[badgeId]) {
      awardBadge(badgeId);
    }
    
    // Award bonus XP for completing lesson
    const bonusXp = 50;
    xp += bonusXp;
    const xpValue = $("#xpValue");
    if (xpValue) xpValue.textContent = xp.toString();
    updateXpProgress();
    saveUserData();
    
    // Show bonus XP message
    const hintText = $("#hintText");
    if (hintText) {
      hintText.textContent = `🎉 Lesson complete! +${bonusXp} bonus XP!`;
      hintText.classList.add('hint-success');
    }
  }
}

function $(selector) {
  return document.querySelector(selector);
}

// Yuno-style animations helper
function animateElement(el, animationClass, duration = 600) {
  return new Promise((resolve) => {
    el.style.animation = 'none';
    el.offsetHeight; // trigger reflow
    el.classList.add(animationClass);
    setTimeout(() => {
      el.classList.remove(animationClass);
      resolve();
    }, duration);
  });
}

// Confetti burst for correct answers
function triggerConfetti(x, y) {
  const colors = ['#f472b6', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24'];
  for (let i = 0; i < 15; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-particle';
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    const angle = (Math.random() * Math.PI * 2);
    const velocity = 100 + Math.random() * 100;
    const xVel = Math.cos(angle) * velocity;
    const yVel = Math.sin(angle) * velocity - 150;
    
    confetti.style.setProperty('--x-vel', xVel + 'px');
    confetti.style.setProperty('--y-vel', yVel + 'px');
    confetti.style.setProperty('--rotation', Math.random() * 720 - 360 + 'deg');
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 1000);
  }
}

// XP counter animation
function animateXpGain(amount) {
  const xpValue = $("#xpValue");
  const pendingXpEl = $("#pendingXp");
  
  pendingXpEl.classList.add('xp-pulse');
  xpValue.classList.add('xp-gain');
  
  setTimeout(() => {
    pendingXpEl.classList.remove('xp-pulse');
    xpValue.classList.remove('xp-gain');
  }, 600);
}

function getCurrentLessons() {
  return subjectLessons[activeSubject] || [];
}

// Get finance/investing related image for quizzes
function getFinanceQuizImage(quizIndex) {
  // Collection of diverse finance/investing related images from Unsplash
  // Includes: money, graphs, charts, financial data, currency, etc.
  const financeImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop", // Money/coins
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop", // Stock market graph
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop", // Financial charts
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop", // Financial data
    "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=400&fit=crop", // Money growth/investment
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop", // Currency/money stacks
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop", // Financial planning
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop", // Trading charts
  ];
  
  // Cycle through images based on quiz index
  const imageIndex = quizIndex % financeImages.length;
  return financeImages[imageIndex];
}

function renderLesson() {
  const lessons = getCurrentLessons();
  console.log("renderLesson called - activeSubject:", activeSubject, "currentIndex:", currentIndex, "lessons.length:", lessons.length);
  
  if (!lessons || lessons.length === 0) {
    console.error("No lessons found for subject:", activeSubject);
    return;
  }
  
  const lesson = lessons[currentIndex] || lessons[0];
  if (!lesson) {
    console.warn("No lesson found at index", currentIndex, "for subject", activeSubject);
    return;
  }
  
  console.log("Rendering lesson:", lesson.type, lesson.title || lesson.question);

  const contentEl = $("#lessonContent");
  const quizBlock = $("#quizBlock");
  const progressLabel = $("#lessonProgressLabel");
  const progressFill = $("#lessonProgressFill");
  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");

  if (!contentEl) {
    console.error("lessonContent element not found!");
    return;
  }

  // Start time tracking for this lesson
  startTimeTracking();

  // Update progress - show time spent instead of page numbers
  updateProgressDisplay();
  
  // Update progress bar
  const pct = ((currentIndex + 1) / lessons.length) * 100;
  progressFill.style.width = `${pct}%`;
  progressFill.classList.add('progress-pulse');
  setTimeout(() => progressFill.classList.remove('progress-pulse'), 400);

  // Update back button visibility
  updateBackButton();

  // Reset hint + pending XP display
  pendingXp = 0;
  pendingXpEl.textContent = pendingXp.toString();
  // Set hint text based on lesson type
  if (lesson.type === "interactive") {
    hintText.textContent = "Drag the slider to explore how time affects your investment.";
  } else if (lesson.type === "quiz") {
    hintText.textContent = "Tap an answer to check your understanding.";
  } else {
    hintText.textContent = "Continue to learn more.";
  }

  // Get lesson body reference
  const lessonBody = contentEl.parentElement;

  // Render content vs quiz vs intro
  if (lesson.type === "intro") {
    // Clear quiz block for intro lessons
    if (quizBlock) {
      quizBlock.innerHTML = "";
      quizBlock.style.display = "none";
      quizBlock.style.opacity = "0";
      quizBlock.style.visibility = "hidden";
    }
    
    // Force visibility of lesson body parent
    if (lessonBody) {
      lessonBody.style.display = "block";
      lessonBody.style.visibility = "visible";
      lessonBody.style.opacity = "1";
      lessonBody.classList.remove("is-hidden");
      lessonBody.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(20, 18, 35, 0.95))";
    }
    
    // Clear and populate intro content
    contentEl.innerHTML = "";
    contentEl.style.display = "block";
    contentEl.style.visibility = "visible";
    contentEl.style.opacity = "1";
    contentEl.classList.remove("is-hidden");
    contentEl.style.textAlign = "center";
    contentEl.style.padding = "40px 20px";
    contentEl.style.background = "transparent";
    
    // Create image container
    const imageContainer = document.createElement("div");
    imageContainer.style.marginBottom = "30px";
    imageContainer.style.borderRadius = "16px";
    imageContainer.style.overflow = "hidden";
    imageContainer.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.1)";
    imageContainer.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    imageContainer.style.minHeight = "300px";
    imageContainer.style.width = "100%";
    
    const img = document.createElement("img");
    const imagePath = lesson.imageUrl || "images/investing-intro.png";
    let finalPath = imagePath.startsWith("/") ? imagePath.substring(1) : imagePath;
    if (!finalPath.startsWith("images/") && !finalPath.startsWith("http")) {
      finalPath = "images/" + finalPath;
    }
    
    img.alt = lesson.imageAlt || "Subject image";
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.minHeight = "300px";
    img.style.maxHeight = "450px";
    img.style.objectFit = "cover";
    img.style.display = "block";
    img.style.opacity = "1";
    img.style.visibility = "visible";
    img.style.filter = "brightness(1.1) contrast(1.05)";
    img.className = "slide-in-up";
    img.loading = "eager";
    
    imageContainer.appendChild(img);
    
    const cacheBuster = `?v=${Date.now()}`;
    const finalPathWithCache = finalPath + cacheBuster;
    
    imageContainer.style.backgroundImage = `url("${finalPathWithCache}")`;
    imageContainer.style.backgroundSize = "cover";
    imageContainer.style.backgroundPosition = "center";
    
    img.src = finalPathWithCache;
    
    img.onerror = function() {
      console.error("❌ Image failed to load:", this.src);
      this.style.display = "none";
      const subjectIcon = activeSubject === "finance" ? "💰" : "📚";
      imageContainer.style.backgroundColor = "rgba(184, 107, 255, 0.2)";
      imageContainer.style.border = "2px dashed rgba(184, 107, 255, 0.4)";
      imageContainer.style.display = "flex";
      imageContainer.style.alignItems = "center";
      imageContainer.style.justifyContent = "center";
      imageContainer.style.flexDirection = "column";
      
      const placeholder = document.createElement("div");
      placeholder.textContent = subjectIcon;
      placeholder.style.fontSize = "100px";
      placeholder.style.opacity = "0.6";
      imageContainer.appendChild(placeholder);
    };
    
    img.onload = function() {
      console.log("✅ Intro image loaded successfully");
      this.style.display = "block";
      this.style.opacity = "1";
      this.style.visibility = "visible";
    };
    
    contentEl.appendChild(imageContainer);
    
  } else if (lesson.type === "content") {
    // **FIXED CONTENT RENDERING SECTION**
    console.log("Rendering CONTENT lesson at index", currentIndex, "Title:", lesson.title);
    
    // Clear quiz block for content lessons
    if (quizBlock) {
      quizBlock.innerHTML = "";
      quizBlock.style.display = "none";
      quizBlock.style.opacity = "0";
      quizBlock.style.visibility = "hidden";
    }
    
    // Force visibility of lesson body parent
    if (lessonBody) {
      lessonBody.style.display = "block";
      lessonBody.style.visibility = "visible";
      lessonBody.style.opacity = "1";
      lessonBody.classList.remove("is-hidden");
    }
    
    // Clear and build content FIRST (before any opacity changes)
    contentEl.innerHTML = "";
    contentEl.style.display = "block";
    contentEl.style.visibility = "visible";
    contentEl.classList.remove("is-hidden");
    
    // Build all content elements
    if (lesson.title) {
      const titleP = document.createElement("p");
      titleP.style.fontWeight = "600";
      titleP.style.fontSize = "18px";
      titleP.style.color = "#fff";
      titleP.className = "slide-in-up";
      titleP.textContent = lesson.title;
      contentEl.appendChild(titleP);
      console.log("Added title:", lesson.title);
    }

    if (lesson.paragraphs && lesson.paragraphs.length > 0) {
      console.log("Adding", lesson.paragraphs.length, "paragraphs");
      lesson.paragraphs.forEach((text, idx) => {
        const p = document.createElement("p");
        p.className = "slide-in-up";
        p.style.animationDelay = `${idx * 0.1}s`;
        p.style.color = "var(--text)";
        p.style.marginBottom = "18px";
        p.textContent = text;
        contentEl.appendChild(p);
      });
    } else {
      console.warn("No paragraphs found for lesson");
      const fallback = document.createElement("p");
      fallback.className = "slide-in-up";
      fallback.textContent = "Lesson content loading...";
      contentEl.appendChild(fallback);
    }
    
    // Make content visible immediately (no fade for first render)
    const isFirstContent = currentIndex === 1; // First content lesson after intro
    if (isFirstContent) {
      contentEl.style.opacity = "1";
      contentEl.style.transition = "";
    } else {
      // Fade in for subsequent content lessons
      contentEl.style.opacity = "0";
      void contentEl.offsetHeight; // Force reflow
      requestAnimationFrame(() => {
        contentEl.style.transition = "opacity 0.3s ease";
        contentEl.style.opacity = "1";
        setTimeout(() => {
          contentEl.style.transition = "";
        }, 300);
      });
    }
    
    console.log("Content rendered. Children count:", contentEl.children.length, "Opacity:", contentEl.style.opacity);
    
  } else if (lesson.type === "interactive") {
    // Interactive money growth calculator
    console.log("Rendering INTERACTIVE lesson at index", currentIndex, "Title:", lesson.title);
    
    // Clear quiz block for interactive lessons
    if (quizBlock) {
      quizBlock.innerHTML = "";
      quizBlock.style.display = "none";
      quizBlock.style.opacity = "0";
      quizBlock.style.visibility = "hidden";
    }
    
    // Force visibility of lesson body parent
    if (lessonBody) {
      lessonBody.style.display = "block";
      lessonBody.style.visibility = "visible";
      lessonBody.style.opacity = "1";
      lessonBody.classList.remove("is-hidden");
    }
    
    // Clear and build interactive content
    contentEl.innerHTML = "";
    contentEl.style.display = "block";
    contentEl.style.visibility = "visible";
    contentEl.style.opacity = "1";
    contentEl.classList.remove("is-hidden");
    
    // Title
    if (lesson.title) {
      const titleP = document.createElement("p");
      titleP.style.fontWeight = "600";
      titleP.style.fontSize = "18px";
      titleP.style.color = "#fff";
      titleP.style.marginBottom = "8px";
      titleP.className = "slide-in-up";
      titleP.textContent = lesson.title;
      contentEl.appendChild(titleP);
    }
    
    // Subtitle
    if (lesson.subtitle) {
      const subtitleP = document.createElement("p");
      subtitleP.style.color = "var(--text-soft)";
      subtitleP.style.marginBottom = "32px";
      subtitleP.style.fontSize = "14px";
      subtitleP.className = "slide-in-up";
      subtitleP.style.animationDelay = "0.1s";
      subtitleP.textContent = lesson.subtitle;
      contentEl.appendChild(subtitleP);
    }
    
    // Interactive calculator container
    const calcContainer = document.createElement("div");
    calcContainer.className = "interactive-calculator slide-in-up";
    calcContainer.style.animationDelay = "0.2s";
    calcContainer.style.padding = "32px 24px";
    calcContainer.style.background = "linear-gradient(135deg, rgba(184, 107, 255, 0.15), rgba(20, 18, 35, 0.8))";
    calcContainer.style.borderRadius = "var(--radius-md)";
    calcContainer.style.border = "2px solid rgba(184, 107, 255, 0.3)";
    calcContainer.style.marginBottom = "24px";
    
    // Initial values
    const initialAmount = lesson.initialAmount || 1000;
    const annualReturn = lesson.annualReturn || 7;
    const minYears = lesson.minYears || 1;
    const maxYears = lesson.maxYears || 40;
    let currentYears = Math.floor((minYears + maxYears) / 2);
    
    // Display current value
    const valueDisplay = document.createElement("div");
    valueDisplay.style.textAlign = "center";
    valueDisplay.style.marginBottom = "32px";
    
    const valueLabel = document.createElement("div");
    valueLabel.style.fontSize = "13px";
    valueLabel.style.color = "var(--text-soft)";
    valueLabel.style.marginBottom = "8px";
    valueLabel.textContent = "After " + currentYears + " years";
    valueDisplay.appendChild(valueLabel);
    
    const valueAmount = document.createElement("div");
    valueAmount.style.fontSize = "42px";
    valueAmount.style.fontWeight = "700";
    valueAmount.style.background = "linear-gradient(120deg, #fff, #d4c5ff)";
    valueAmount.style.webkitBackgroundClip = "text";
    valueAmount.style.webkitTextFillColor = "transparent";
    valueAmount.style.backgroundClip = "text";
    valueAmount.id = "calcValueAmount";
    valueDisplay.appendChild(valueAmount);
    
    const valueGain = document.createElement("div");
    valueGain.style.fontSize = "14px";
    valueGain.style.color = "#35c27e";
    valueGain.style.marginTop = "8px";
    valueGain.id = "calcValueGain";
    valueDisplay.appendChild(valueGain);
    
    calcContainer.appendChild(valueDisplay);
    
    // Slider container
    const sliderContainer = document.createElement("div");
    sliderContainer.style.marginBottom = "24px";
    
    const sliderLabel = document.createElement("div");
    sliderLabel.style.display = "flex";
    sliderLabel.style.justifyContent = "space-between";
    sliderLabel.style.marginBottom = "12px";
    sliderLabel.style.fontSize = "13px";
    sliderLabel.style.color = "var(--text-soft)";
    
    const sliderLabelMin = document.createElement("span");
    sliderLabelMin.textContent = minYears + " year" + (minYears !== 1 ? "s" : "");
    sliderLabel.appendChild(sliderLabelMin);
    
    const sliderLabelMax = document.createElement("span");
    sliderLabelMax.textContent = maxYears + " years";
    sliderLabel.appendChild(sliderLabelMax);
    
    sliderContainer.appendChild(sliderLabel);
    
    // Slider input
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = minYears;
    slider.max = maxYears;
    slider.value = currentYears;
    slider.step = 1;
    slider.style.width = "100%";
    slider.style.height = "8px";
    slider.style.borderRadius = "4px";
    slider.style.background = "rgba(255, 255, 255, 0.1)";
    slider.style.outline = "none";
    slider.style.cursor = "pointer";
    slider.style.appearance = "none";
    slider.style.webkitAppearance = "none";
    slider.id = "yearsSlider";
    
    // Custom slider styling
    slider.style.background = `linear-gradient(to right, rgba(184, 107, 255, 0.6) 0%, rgba(184, 107, 255, 0.6) ${((currentYears - minYears) / (maxYears - minYears)) * 100}%, rgba(255, 255, 255, 0.1) ${((currentYears - minYears) / (maxYears - minYears)) * 100}%, rgba(255, 255, 255, 0.1) 100%)`;
    
    // Slider thumb styling
    const style = document.createElement("style");
    style.textContent = `
      #yearsSlider::-webkit-slider-thumb {
        appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: linear-gradient(135deg, #b86bff, #8b5cf6);
        border: 3px solid rgba(255, 255, 255, 0.3);
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(184, 107, 255, 0.5);
        transition: all 0.2s ease;
      }
      #yearsSlider::-webkit-slider-thumb:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(184, 107, 255, 0.7);
      }
      #yearsSlider::-moz-range-thumb {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: linear-gradient(135deg, #b86bff, #8b5cf6);
        border: 3px solid rgba(255, 255, 255, 0.3);
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(184, 107, 255, 0.5);
        transition: all 0.2s ease;
      }
      #yearsSlider::-moz-range-thumb:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(184, 107, 255, 0.7);
      }
    `;
    document.head.appendChild(style);
    
    sliderContainer.appendChild(slider);
    calcContainer.appendChild(sliderContainer);
    
    // Info section
    const infoSection = document.createElement("div");
    infoSection.style.display = "grid";
    infoSection.style.gridTemplateColumns = "1fr 1fr";
    infoSection.style.gap = "16px";
    infoSection.style.marginTop = "24px";
    
    const infoItem1 = document.createElement("div");
    infoItem1.style.padding = "16px";
    infoItem1.style.background = "rgba(255, 255, 255, 0.05)";
    infoItem1.style.borderRadius = "var(--radius-md)";
    const infoLabel1 = document.createElement("div");
    infoLabel1.style.fontSize = "12px";
    infoLabel1.style.color = "var(--text-soft)";
    infoLabel1.style.marginBottom = "4px";
    infoLabel1.textContent = "Starting Amount";
    infoItem1.appendChild(infoLabel1);
    const infoValue1 = document.createElement("div");
    infoValue1.style.fontSize = "18px";
    infoValue1.style.fontWeight = "600";
    infoValue1.style.color = "#fff";
    infoValue1.textContent = "£" + initialAmount.toLocaleString();
    infoItem1.appendChild(infoValue1);
    infoSection.appendChild(infoItem1);
    
    const infoItem2 = document.createElement("div");
    infoItem2.style.padding = "16px";
    infoItem2.style.background = "rgba(255, 255, 255, 0.05)";
    infoItem2.style.borderRadius = "var(--radius-md)";
    const infoLabel2 = document.createElement("div");
    infoLabel2.style.fontSize = "12px";
    infoLabel2.style.color = "var(--text-soft)";
    infoLabel2.style.marginBottom = "4px";
    infoLabel2.textContent = "Annual Return";
    infoItem2.appendChild(infoLabel2);
    const infoValue2 = document.createElement("div");
    infoValue2.style.fontSize = "18px";
    infoValue2.style.fontWeight = "600";
    infoValue2.style.color = "#35c27e";
    infoValue2.textContent = annualReturn + "%";
    infoItem2.appendChild(infoValue2);
    infoSection.appendChild(infoItem2);
    
    calcContainer.appendChild(infoSection);
    contentEl.appendChild(calcContainer);
    
    // Calculate compound interest: A = P(1 + r)^t
    function calculateGrowth(principal, rate, years) {
      return principal * Math.pow(1 + rate / 100, years);
    }
    
    function updateDisplay() {
      const finalAmount = calculateGrowth(initialAmount, annualReturn, currentYears);
      const gain = finalAmount - initialAmount;
      const gainPercent = ((gain / initialAmount) * 100).toFixed(1);
      
      valueLabel.textContent = "After " + currentYears + " year" + (currentYears !== 1 ? "s" : "");
      valueAmount.textContent = "£" + Math.round(finalAmount).toLocaleString();
      valueGain.textContent = "+£" + Math.round(gain).toLocaleString() + " (" + gainPercent + "% gain)";
      
      // Update slider background
      const percent = ((currentYears - minYears) / (maxYears - minYears)) * 100;
      slider.style.background = `linear-gradient(to right, rgba(184, 107, 255, 0.6) 0%, rgba(184, 107, 255, 0.6) ${percent}%, rgba(255, 255, 255, 0.1) ${percent}%, rgba(255, 255, 255, 0.1) 100%)`;
      
      // Animate value change
      valueAmount.style.transform = "scale(1.05)";
      setTimeout(() => {
        valueAmount.style.transform = "scale(1)";
        valueAmount.style.transition = "transform 0.2s ease";
      }, 100);
    }
    
    // Initial calculation
    updateDisplay();
    
    // Slider event listener
    slider.addEventListener("input", (e) => {
      currentYears = parseInt(e.target.value);
      updateDisplay();
    });
    
    // Make content visible
    contentEl.style.opacity = "1";
    contentEl.style.transition = "opacity 0.3s ease";
    
  } else if (lesson.type === "quiz") {
    // Quiz rendering section
    // Force visibility of lesson body parent
    if (lessonBody) {
      lessonBody.style.display = "block";
      lessonBody.style.visibility = "visible";
      lessonBody.style.opacity = "1";
      lessonBody.classList.remove("is-hidden");
    }
    
    const isFirstLesson = currentIndex === 0;
    
    if (!isFirstLesson) {
      contentEl.style.opacity = '0';
      if (quizBlock) quizBlock.style.opacity = '0';
    } else {
      contentEl.style.display = "block";
      contentEl.style.visibility = "visible";
      contentEl.style.opacity = "1";
      contentEl.classList.remove("is-hidden");
    }
    
    const renderQuiz = () => {
      contentEl.innerHTML = "";
      contentEl.style.display = "block";
      contentEl.style.visibility = "visible";
      contentEl.style.opacity = "1";
      contentEl.classList.remove("is-hidden");
      
      // Create image container for subject image
      const imageContainer = document.createElement("div");
      imageContainer.className = "slide-in-up";
      imageContainer.style.marginBottom = "24px";
      imageContainer.style.borderRadius = "16px";
      imageContainer.style.overflow = "hidden";
      imageContainer.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(255, 255, 255, 0.1)";
      imageContainer.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
      imageContainer.style.minHeight = "200px";
      imageContainer.style.width = "100%";
      imageContainer.style.maxHeight = "300px";
      
      const img = document.createElement("img");
      // Get finance/investing related image (money, graphs, etc.)
      let imageUrl;
      if (activeSubject === "finance") {
        imageUrl = getFinanceQuizImage(currentIndex);
      } else {
        // Fallback for other subjects
        imageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop";
      }
      
      img.alt = "Finance and investing concept";
      img.style.width = "100%";
      img.style.height = "auto";
      img.style.minHeight = "200px";
      img.style.maxHeight = "300px";
      img.style.objectFit = "cover";
      img.style.display = "block";
      img.style.opacity = "1";
      img.style.visibility = "visible";
      img.style.filter = "brightness(1.1) contrast(1.05)";
      img.loading = "eager";
      img.crossOrigin = "anonymous"; // For external images
      
      // Use the finance image URL directly
      img.src = imageUrl;
      
      img.onerror = function() {
        console.error("❌ Image failed to load:", this.src);
        this.style.display = "none";
        const subjectIcon = activeSubject === "finance" ? "💰" : "📚";
        imageContainer.style.backgroundColor = "rgba(184, 107, 255, 0.2)";
        imageContainer.style.border = "2px dashed rgba(184, 107, 255, 0.4)";
        imageContainer.style.display = "flex";
        imageContainer.style.alignItems = "center";
        imageContainer.style.justifyContent = "center";
        imageContainer.style.flexDirection = "column";
        
        const placeholder = document.createElement("div");
        placeholder.textContent = subjectIcon;
        placeholder.style.fontSize = "80px";
        placeholder.style.opacity = "0.6";
        imageContainer.appendChild(placeholder);
      };
      
      img.onload = function() {
        console.log("✅ Subject image loaded successfully");
        this.style.display = "block";
        this.style.opacity = "1";
        this.style.visibility = "visible";
      };
      
      imageContainer.appendChild(img);
      contentEl.appendChild(imageContainer);

      if (quizBlock) {
        quizBlock.innerHTML = "";
        quizBlock.style.display = "block";
        quizBlock.style.visibility = "visible";
        quizBlock.style.opacity = "1";
        quizBlock.classList.remove("is-hidden");

        const label = document.createElement("div");
        label.className = "quiz-label slide-in-up";
        label.textContent = "Quiz";
        quizBlock.appendChild(label);

        const q = document.createElement("div");
        q.className = "quiz-question slide-in-up";
        q.style.animationDelay = '0.1s';
        q.textContent = lesson.question;
        quizBlock.appendChild(q);

        const optionsWrapper = document.createElement("div");
        optionsWrapper.className = "quiz-options";

        if (lesson.options && lesson.options.length > 0) {
          lesson.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option slide-in-up";
            btn.style.animationDelay = `${0.2 + idx * 0.1}s`;
            btn.dataset.optionId = opt.id;
            btn.disabled = false;

            const textSpan = document.createElement("span");
            textSpan.textContent = opt.text;

            const indicator = document.createElement("span");
            indicator.className = "option-indicator";
            indicator.textContent = "○";

            btn.appendChild(textSpan);
            btn.appendChild(indicator);

            btn.addEventListener("click", (e) => handleQuizClick(btn, opt, lesson, e));

            optionsWrapper.appendChild(btn);
          });
        }

        quizBlock.appendChild(optionsWrapper);
      }

      contentEl.style.opacity = '1';
      if (quizBlock) quizBlock.style.opacity = '1';
    };
    
    if (isFirstLesson) {
      renderQuiz();
    } else {
      setTimeout(renderQuiz, 200);
    }
  }
}

function handleQuizClick(button, option, lesson, event) {
  // Lock all options
  const allOptions = document.querySelectorAll(".quiz-option");
  allOptions.forEach((btn) => {
    btn.disabled = true;
  });

  const hintText = $("#hintText");
  const pendingXpEl = $("#pendingXp");
  const xpValue = $("#xpValue");

  const subjectMap = {
    finance: "investing",
    economics: "economics",
  };
  const creatureSubject = subjectMap[activeSubject] || "default";

  if (option.correct) {
    button.classList.add("correct");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) {
      indicator.textContent = "✓";
      indicator.classList.add('indicator-pop');
    }

    const rect = button.getBoundingClientRect();
    triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);

    pendingXp = 8;
    hintText.textContent = lesson.explanation;
    hintText.classList.add('hint-success');
    setTimeout(() => hintText.classList.remove('hint-success'), 400);

    if (window.showNextCreatureReaction) {
      window.showNextCreatureReaction("correct");
    } else if (window.showSubjectReaction) {
      window.showSubjectReaction(creatureSubject, "correct");
    }
  } else {
    button.classList.add("incorrect");
    button.classList.add('shake-horizontal');
    const indicator = button.querySelector(".option-indicator");
    if (indicator) {
      indicator.textContent = "✗";
      indicator.classList.add('indicator-pop');
    }

    allOptions.forEach((btn) => {
      const optId = btn.dataset.optionId;
      const correctOpt = lesson.options.find(o => o.id === optId && o.correct);
      if (correctOpt) {
        setTimeout(() => {
          btn.classList.add("show-correct");
          const ind = btn.querySelector(".option-indicator");
          if (ind) ind.textContent = "✓";
        }, 300);
      }
    });

    pendingXp = 2;
    hintText.textContent = lesson.explanation || "Not quite. Think about the key concepts we just covered.";

    if (window.showNextCreatureReaction) {
      window.showNextCreatureReaction("wrong");
    } else if (window.showSubjectReaction) {
      window.showSubjectReaction(creatureSubject, "wrong");
    }
  }

  xp += pendingXp;
  xpValue.textContent = xp.toString();
  pendingXpEl.textContent = pendingXp.toString();
  
  updateXpProgress();
  saveUserData();
  animateXpGain(pendingXp);
}

function goNext() {
  const lessons = getCurrentLessons();
  if (!lessons.length) return;

  // Stop time tracking before moving to next lesson
  stopTimeTracking();

  const nextBtn = $("#nextBtn");
  nextBtn.classList.add('button-press');
  setTimeout(() => nextBtn.classList.remove('button-press'), 200);

  currentIndex++;
  if (currentIndex >= lessons.length) {
    currentIndex = lessons.length - 1;
    checkLessonCompletion();
    return;
  }
  renderLesson();
  updateBackButton();
}

function goBack() {
  const lessons = getCurrentLessons();
  if (!lessons.length) return;

  // Stop time tracking before going back
  stopTimeTracking();

  const backBtn = $("#backBtn");
  if (backBtn) {
    backBtn.classList.add('button-press');
    setTimeout(() => backBtn.classList.remove('button-press'), 200);
  }

  if (currentIndex > 0) {
    currentIndex--;
    renderLesson();
    updateBackButton();
  }
}

function updateBackButton() {
  const backBtn = $("#backBtn");
  if (backBtn) {
    if (currentIndex > 0) {
      backBtn.style.display = "inline-flex";
    } else {
      backBtn.style.display = "none";
    }
  }
}

// Time tracking functions
function startTimeTracking() {
  // Stop any existing tracking
  stopTimeTracking();
  
  // Start new tracking session
  lessonStartTime = Date.now();
  
  // Update display every second
  timeTrackingInterval = setInterval(() => {
    updateProgressDisplay();
  }, 1000);
}

function stopTimeTracking() {
  if (lessonStartTime !== null) {
    // Calculate time spent on current lesson
    const timeSpent = Math.floor((Date.now() - lessonStartTime) / 1000);
    totalTimeSpent += timeSpent;
    saveUserData();
    lessonStartTime = null;
  }
  
  // Clear interval
  if (timeTrackingInterval) {
    clearInterval(timeTrackingInterval);
    timeTrackingInterval = null;
  }
}

function updateProgressDisplay() {
  const progressLabel = $("#lessonProgressLabel");
  if (!progressLabel) return;
  
  // Calculate current session time
  let currentSessionTime = 0;
  if (lessonStartTime !== null) {
    currentSessionTime = Math.floor((Date.now() - lessonStartTime) / 1000);
  }
  
  // Total time = saved time + current session time
  const totalTime = totalTimeSpent + currentSessionTime;
  const minutes = Math.floor(totalTime / 60);
  
  // Display time in minutes
  progressLabel.textContent = `${minutes}m`;
}

function switchTab(tab) {
  const lessonCard = $("#lessonCard");
  const journalPanel = $("#journalPanel");
  const tabs = document.querySelectorAll(".tab");
  
  tabs.forEach((t) => t.classList.remove("is-active"));

  if (tab === "lesson") {
    lessonCard.classList.remove("is-hidden");
    journalPanel.classList.add("is-hidden");
    document.querySelector('[data-tab="lesson"]').classList.add("is-active");
  } else if (tab === "journal") {
    lessonCard.classList.add("is-hidden");
    journalPanel.classList.remove("is-hidden");
    document.querySelector('[data-tab="journal"]').classList.add("is-active");
    renderBadges(); // Render badges when journal tab is opened
  }
  
  const activePanel = tab === "lesson" ? lessonCard : journalPanel;
  activePanel.classList.add('fade-in-scale');
  setTimeout(() => activePanel.classList.remove('fade-in-scale'), 400);
}

// Render badges in journal panel
function renderBadges() {
  const journalPanel = $("#journalPanel");
  if (!journalPanel) return;
  
  const journalText = $("#journalText");
  if (!journalText) return;
  
  // Clear existing content
  journalText.innerHTML = "";
  
  // Create badges section
  const badgesSection = document.createElement("div");
  badgesSection.className = "badges-section";
  
  const badgesTitle = document.createElement("h3");
  badgesTitle.textContent = "🏆 Your Badges";
  badgesTitle.style.marginTop = "0";
  badgesTitle.style.marginBottom = "20px";
  badgesTitle.style.fontSize = "20px";
  badgesTitle.style.fontWeight = "700";
  badgesTitle.style.background = "linear-gradient(120deg, #fff, #d4c5ff)";
  badgesTitle.style.webkitBackgroundClip = "text";
  badgesTitle.style.webkitTextFillColor = "transparent";
  badgesTitle.style.backgroundClip = "text";
  badgesSection.appendChild(badgesTitle);
  
  if (!window.earnedBadges || window.earnedBadges.length === 0) {
    const noBadges = document.createElement("p");
    noBadges.textContent = "Complete lessons to earn badges!";
    noBadges.style.color = "var(--text-soft)";
    noBadges.style.fontStyle = "italic";
    badgesSection.appendChild(noBadges);
  } else {
    const badgesGrid = document.createElement("div");
    badgesGrid.className = "badges-grid";
    badgesGrid.style.display = "grid";
    badgesGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))";
    badgesGrid.style.gap = "16px";
    badgesGrid.style.marginTop = "16px";
    
    window.earnedBadges.forEach(badgeId => {
      const badge = badges[badgeId];
      if (!badge) return;
      
      const badgeCard = document.createElement("div");
      badgeCard.className = "badge-card";
      badgeCard.style.padding = "20px";
      badgeCard.style.borderRadius = "var(--radius-md)";
      badgeCard.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(184, 107, 255, 0.1))";
      badgeCard.style.border = "2px solid rgba(184, 107, 255, 0.3)";
      badgeCard.style.textAlign = "center";
      badgeCard.style.transition = "all var(--transition-fast)";
      
      badgeCard.addEventListener("mouseenter", () => {
        badgeCard.style.transform = "translateY(-4px)";
        badgeCard.style.boxShadow = "0 8px 24px rgba(184, 107, 255, 0.3)";
      });
      
      badgeCard.addEventListener("mouseleave", () => {
        badgeCard.style.transform = "translateY(0)";
        badgeCard.style.boxShadow = "none";
      });
      
      const badgeIcon = document.createElement("div");
      badgeIcon.style.marginBottom = "12px";
      badgeIcon.style.display = "flex";
      badgeIcon.style.alignItems = "center";
      badgeIcon.style.justifyContent = "center";
      badgeIcon.style.minHeight = "64px";
      
      // Use image if available, otherwise use emoji
      if (badge.imageUrl) {
        const img = document.createElement("img");
        img.src = badge.imageUrl;
        img.alt = badge.name;
        img.style.width = "64px";
        img.style.height = "64px";
        img.style.objectFit = "contain";
        img.style.filter = "drop-shadow(0 4px 8px rgba(184, 107, 255, 0.3))";
        
        // Fallback to emoji if image fails to load
        img.onerror = function() {
          this.style.display = "none";
          badgeIcon.textContent = badge.icon;
          badgeIcon.style.fontSize = "48px";
        };
        
        badgeIcon.appendChild(img);
      } else {
        badgeIcon.textContent = badge.icon;
        badgeIcon.style.fontSize = "48px";
      }
      
      badgeCard.appendChild(badgeIcon);
      
      const badgeName = document.createElement("div");
      badgeName.textContent = badge.name;
      badgeName.style.fontWeight = "700";
      badgeName.style.fontSize = "16px";
      badgeName.style.color = "var(--text)";
      badgeName.style.marginBottom = "8px";
      badgeCard.appendChild(badgeName);
      
      const badgeDesc = document.createElement("div");
      badgeDesc.textContent = badge.description;
      badgeDesc.style.fontSize = "13px";
      badgeDesc.style.color = "var(--text-soft)";
      badgeDesc.style.lineHeight = "1.4";
      badgeCard.appendChild(badgeDesc);
      
      badgesGrid.appendChild(badgeCard);
    });
    
    badgesSection.appendChild(badgesGrid);
  }
  
  journalText.appendChild(badgesSection);
}

function updateMetaForSubject(subject) {
  const subjectChip = $("#subjectChip");
  const unitChip = $("#unitChip");
  const lessonTitle = $("#lessonTitle");
  const lessonSubtitle = $("#lessonSubtitle");
  const eraLabel = $("#eraLabel");
  const eraPillLabel = $("#eraPillLabel");
  const journalText = $("#journalText");

  [lessonTitle, lessonSubtitle].forEach(el => {
    el.classList.add('text-fade-in');
    setTimeout(() => el.classList.remove('text-fade-in'), 400);
  });

  if (subject === "finance") {
    subjectChip.textContent = "Investing · Finance";
    unitChip.textContent = "Unit: Economic Agency 101";
    lessonTitle.textContent = "Investing — The Skill You Can Learn at Any Age";
    lessonSubtitle.innerHTML = "Curiosity is enough. The rest is learnable.<br>Welcome to the class you didn't know existed.";
    era = "Foundations";
    journalText.textContent = "Investing District · Finance. Stamps for compound growth, asset types, risk management, and your notes on building wealth.";
  } else {
    subjectChip.textContent = "Prototype · Subject";
    unitChip.textContent = "Unit: Coming soon";
    lessonTitle.textContent = "Prototype subject";
    lessonSubtitle.textContent = "This subject will be available soon.";
    era = "Foundations";
    journalText.textContent = "Prototype subject. This journal page will hold diagrams and notes once this district is wired.";
  }

  if (eraLabel) eraLabel.textContent = era;
  if (eraPillLabel) eraPillLabel.textContent = `${era} Era`;
  
  const eraLabelEl = $("#eraLabel");
  if (eraLabelEl && eraLabelEl.parentElement) {
    const eraPill = eraLabelEl.parentElement;
    eraPill.classList.add('pill-pulse');
    setTimeout(() => eraPill.classList.remove('pill-pulse'), 500);
  }
}

function showCategories() {
  const categoryGrid = $("#categoryGrid");
  const subjectGrid = $("#subjectGrid");
  const breadcrumb = $("#breadcrumb");
  const breadcrumbSeparator = $("#breadcrumbSeparator");
  const breadcrumbCurrent = $("#breadcrumbCurrent");
  
  subjectGrid.classList.add("is-hidden");
  categoryGrid.classList.remove("is-hidden");
  
  breadcrumb.querySelector(".breadcrumb-item").classList.add("is-active");
  breadcrumbSeparator.style.display = "none";
  breadcrumbCurrent.textContent = "";
  
  document.querySelectorAll("#categoryGrid .world-node").forEach(n => {
    n.classList.remove("is-active");
  });
  
  categoryGrid.innerHTML = "";
  
  categories.forEach((category, idx) => {
    const node = document.createElement("div");
    node.className = "world-node";
    node.dataset.category = category.id;
    node.style.animation = `fadeInScale 0.4s ease-out ${idx * 0.1}s both`;
    
    const icon = document.createElement("div");
    icon.className = "node-icon";
    icon.textContent = category.icon;
    
    const content = document.createElement("div");
    content.className = "node-content";
    
    const title = document.createElement("span");
    title.className = "node-title";
    title.textContent = category.name;
    
    const subtitle = document.createElement("span");
    subtitle.className = "node-subtitle";
    subtitle.textContent = category.subtitle;
    
    content.appendChild(title);
    content.appendChild(subtitle);
    node.appendChild(icon);
    node.appendChild(content);
    
    node.addEventListener("click", () => handleCategoryClick(node, category));
    
    categoryGrid.appendChild(node);
  });
  
  activeCategory = null;
}

function handleCategoryClick(node, category) {
  const categoryGrid = $("#categoryGrid");
  const subjectGrid = $("#subjectGrid");
  const breadcrumb = $("#breadcrumb");
  const breadcrumbSeparator = $("#breadcrumbSeparator");
  const breadcrumbCurrent = $("#breadcrumbCurrent");
  
  subjectGrid.classList.remove("is-hidden");
  
  breadcrumb.querySelector(".breadcrumb-item").classList.remove("is-active");
  breadcrumbSeparator.style.display = "inline";
  breadcrumbCurrent.textContent = category.name;
  
  document.querySelectorAll("#categoryGrid .world-node").forEach(n => {
    n.classList.remove("is-active");
  });
  node.classList.add("is-active");
  
  subjectGrid.innerHTML = "";
  
  category.subjects.forEach((subjectId, idx) => {
    const subject = subjectMetadata[subjectId];
    if (!subject) return;
    
    const node = document.createElement("div");
    node.className = `world-node world-node--${subjectId}`;
    node.dataset.subject = subjectId;
    node.style.animation = `fadeInScale 0.4s ease-out ${idx * 0.1}s both`;
    
    const icon = document.createElement("div");
    icon.className = "node-icon";
    icon.textContent = subject.icon;
    
    const content = document.createElement("div");
    content.className = "node-content";
    
    const title = document.createElement("span");
    title.className = "node-title";
    title.textContent = subject.name;
    
    const subtitle = document.createElement("span");
    subtitle.className = "node-subtitle";
    subtitle.textContent = subject.subtitle;
    
    content.appendChild(title);
    content.appendChild(subtitle);
    node.appendChild(icon);
    node.appendChild(content);
    
    node.addEventListener("click", () => handleSubjectClick(node));
    
    subjectGrid.appendChild(node);
  });
  
  activeCategory = category.id;
  
  node.classList.add('node-activate');
  setTimeout(() => node.classList.remove('node-activate'), 400);
}

function handleSubjectClick(node) {
  const subject = node.dataset.subject;

  // Stop time tracking when switching subjects
  stopTimeTracking();

  document.querySelectorAll(".world-node").forEach((n) => n.classList.remove("is-active"));
  node.classList.add("is-active");
  
  node.classList.add('node-activate');
  setTimeout(() => node.classList.remove('node-activate'), 400);

  if (subjectLessons[subject]) {
    activeSubject = subject;
    currentIndex = 0;
    
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((t) => t.classList.remove("is-active"));
    const lessonTab = document.querySelector('[data-tab="lesson"]');
    if (lessonTab) {
      lessonTab.classList.add("is-active");
    }
    
    const lessonCard = document.getElementById("lessonCard");
    const journalPanel = document.getElementById("journalPanel");
    if (lessonCard) lessonCard.classList.remove("is-hidden");
    if (journalPanel) journalPanel.classList.add("is-hidden");
    
    const lessonContent = document.getElementById("lessonContent");
    const lessonBody = lessonContent ? lessonContent.parentElement : null;
    
    if (lessonContent) {
      lessonContent.style.display = "block";
      lessonContent.style.visibility = "visible";
      lessonContent.style.opacity = "1";
      lessonContent.classList.remove("is-hidden");
    }
    if (lessonBody) {
      lessonBody.style.display = "block";
      lessonBody.style.visibility = "visible";
      lessonBody.style.opacity = "1";
      lessonBody.classList.remove("is-hidden");
    }
    
    updateMetaForSubject(subject);
    renderLesson();
    
  } else {
    activeSubject = "finance";
    updateMetaForSubject(subject);
    $("#lessonContent").innerHTML = "<p class='slide-in-up'>This subject is not available yet. Please select a valid subject.</p>";
    $("#quizBlock").innerHTML = "";
    const progressLabel = $("#lessonProgressLabel");
    const progressFill = $("#lessonProgressFill");
    if (progressLabel) {
      const minutes = Math.floor(totalTimeSpent / 60);
      progressLabel.textContent = `${minutes}m`;
    }
    if (progressFill) {
      progressFill.style.width = "0%";
    }
  }
}

window.showCategories = showCategories;
window.goNextDirect = goNext;
window.goBackDirect = goBack;

// Theme management
function initTheme() {
  const savedTheme = localStorage.getItem('shinyos_theme') || 'dark';
  const html = document.documentElement;
  html.setAttribute('data-theme', savedTheme);
  
  const themeToggle = $("#themeToggle");
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('shinyos_theme', newTheme);
      
      // Update icon
      if (themeIcon) {
        themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
      }
    });
  }
  
  // Set initial icon
  if (themeIcon) {
    themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
  }
}

  document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme first
  initTheme();
  
  // Load user data first
  loadUserData();
  
  // Hide loading screen when app is ready
  function hideLoadingScreen() {
    const loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
      // Wait a bit for smooth transition, then hide
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
        // Remove from DOM after animation completes
        setTimeout(() => {
          if (loadingScreen.parentNode) {
            loadingScreen.parentNode.removeChild(loadingScreen);
          }
        }, 500);
      }, 300);
    }
  }
  
  // Hide loading screen after everything is initialized
  // Use requestAnimationFrame to ensure DOM is fully ready
  requestAnimationFrame(() => {
    // Wait for initial render, then hide loading screen
    setTimeout(hideLoadingScreen, 800);
  });
  
  // Save time when page is about to unload
  window.addEventListener('beforeunload', () => {
    stopTimeTracking();
  });
  
  // Also save time when page becomes hidden (mobile browsers)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopTimeTracking();
    } else {
      // Only restart if we're on a lesson (not on category/subject selection)
      const lessonCard = document.getElementById("lessonCard");
      if (lessonCard && !lessonCard.classList.contains("is-hidden")) {
        startTimeTracking();
      }
    }
  });
  
  const quizBlock = $("#quizBlock");
  if (quizBlock) {
    quizBlock.style.display = "none";
  }
  
  const celebrationOverlay = document.getElementById("celebrationOverlay");
  if (celebrationOverlay) {
    celebrationOverlay.style.display = "none";
  }
  
  // Ensure achievement popup is dismissed on load (fix for stuck popups)
  const achievementPopup = $("#achievementPopup");
  if (achievementPopup) {
    achievementPopup.classList.remove("active");
    // Add click/touch handler to dismiss
    const dismissAchievement = () => {
      achievementPopup.classList.remove("active");
    };
    achievementPopup.addEventListener("click", dismissAchievement);
    achievementPopup.addEventListener("touchend", dismissAchievement);
  }
  
  // Ensure currentIndex starts at 0 for intro lesson
  currentIndex = 0;
  activeSubject = "finance";
  
  updateMetaForSubject("finance");
  showCategories();
  renderLesson();
  updateXpProgress(); // Ensure XP progress is updated on load

  const nextBtn = $("#nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      goNext();
    });
    // Prevent auto-focus that might trigger accidental clicks
    nextBtn.blur();
  }
  
  const backBtn = $("#backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", goBack);
    updateBackButton();
  }

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
      tab.classList.add('tab-press');
      setTimeout(() => tab.classList.remove('tab-press'), 150);
    });
  });

  // Mobile optimizations
  initMobileOptimizations();
});

// Mobile-specific optimizations
function initMobileOptimizations() {
  // Prevent double-tap zoom on buttons and interactive elements
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, { passive: false });

  // Improve touch responsiveness for quiz options
  document.addEventListener('touchstart', function(e) {
    if (e.target.closest('.quiz-option, .world-node, .next-btn, .back-btn, .tab')) {
      e.target.closest('.quiz-option, .world-node, .next-btn, .back-btn, .tab')?.classList.add('touch-active');
    }
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    const activeEl = document.querySelector('.touch-active');
    if (activeEl) {
      setTimeout(() => activeEl.classList.remove('touch-active'), 150);
    }
  }, { passive: true });

  // Smooth scroll to top when navigating on mobile
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    const originalRenderLesson = window.renderLesson;
    if (originalRenderLesson) {
      window.renderLesson = function(...args) {
        const result = originalRenderLesson.apply(this, args);
        // Smooth scroll to lesson content on mobile
        setTimeout(() => {
          const lessonCard = document.getElementById('lessonCard');
          if (lessonCard) {
            lessonCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
        return result;
      };
    }
  }

  // Prevent pull-to-refresh on mobile (optional - can be removed if you want native behavior)
  let touchStartY = 0;
  document.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchmove', function(e) {
    const touchY = e.touches[0].clientY;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Prevent pull-to-refresh when at top of page
    if (scrollTop === 0 && touchY > touchStartY) {
      // Allow native pull-to-refresh, but you can prevent it here if needed
      // e.preventDefault();
    }
  }, { passive: true });

  // Optimize images for mobile
  if (isMobile) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.loading = 'lazy';
      if (!img.hasAttribute('decoding')) {
        img.decoding = 'async';
      }
    });
  }

  // Add viewport height fix for mobile browsers (addresses address bar issue)
  function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  setViewportHeight();
  window.addEventListener('resize', setViewportHeight);
  window.addEventListener('orientationchange', setViewportHeight);
}
