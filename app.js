// Yuno learning platform - Single Lesson Version (Investing 101)
// Subject lessons data
// Note: Lesson order is determined by array position, not the 'id' field
const subjectLessons = {
  finance: [
    {
      id: 1,
      type: "intro",
      title: "Investing — The Skill You Can Learn at Any Age",
      subtitle: "Curiosity is enough. The rest is learnable.\nWelcome to the class you didn't know existed.",
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
        "The result? Adults with degrees who panic-google 'what is a stock' at 28.",
        "This course fixes that. You'll understand the mechanics, not just the buzzwords."
      ]
    },
    {
      id: 3,
      type: "quiz",
      question: "School skipped investing because:",
      options: [
        { id: "a", text: "It's too complicated", correct: false },
        { id: "b", text: "It's not in the curriculum priorities", correct: true },
        { id: "c", text: "Teachers don't know about it", correct: false },
        { id: "d", text: "It's only for rich people", correct: false }
      ],
      explanation: "School curricula prioritize basic literacy and numeracy over practical financial skills like investing, leaving a knowledge gap that affects millions."
    },
    {
      id: 4,
      type: "content",
      title: "What Investing Actually Is",
      paragraphs: [
        "Investing = putting money into productive assets that (hopefully) grow in value or generate income over time.",
        "Not gambling. Not luck. Not for rich people only.",
        "It's: allocating capital into things that produce returns.",
        "Think of it like hiring workers. Your money goes to work. Some workers (assets) are better than others."
      ]
    },
    {
      id: 5,
      type: "quiz",
      question: "Investing is best described as:",
      options: [
        { id: "a", text: "Gambling with extra steps", correct: false },
        { id: "b", text: "Allocating capital into productive assets", correct: true },
        { id: "c", text: "Only for people with £100k+", correct: false },
        { id: "d", text: "A get-rich-quick scheme", correct: false }
      ],
      explanation: "Investing is about putting money into productive assets that generate returns over time. It's not gambling, and you don't need to be rich to start."
    },
    {
      id: 6,
      type: "content",
      title: "Why Investing Exists",
      paragraphs: [
        "Human economies expand because we invent, build, innovate, and demand new things.",
        "Investing is simply how we: fund innovation, fund growth, fund risk, fund long-term progress.",
        "Without investing → no tech, no medicine, no bridges, no chips, no rockets, no progress.",
        "School missed that investing is how progress is financed."
      ]
    },
    {
      id: 7,
      type: "quiz",
      question: "Investing is essential because it finances:",
      options: [
        { id: "a", text: "Innovation", correct: false },
        { id: "b", text: "Infrastructure", correct: false },
        { id: "c", text: "New businesses", correct: false },
        { id: "d", text: "All of the above", correct: true }
      ],
      explanation: "Investing finances innovation, infrastructure, new businesses, and all forms of economic progress."
    },
    {
      id: 8,
      type: "content",
      title: "The Invisible Enemy: Inflation",
      paragraphs: [
        "School treats money as static. It never mentions the villain that slowly steals purchasing power.",
        "£100 today ≠ £100 in 10 years.",
        "Inflation is a silent tax on time. Investing is how you fight it.",
        "Wish someone had said that at 15 instead of making us laminate coursework."
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
        "The earlier you start, the less money you need."
      ]
    },
    {
      id: 11,
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
      id: 12,
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
      id: 13,
      type: "quiz",
      question: "ETFs let beginners:",
      options: [
        { id: "a", text: "Avoid stock-picking", correct: false },
        { id: "b", text: "Gain diversification", correct: false },
        { id: "c", text: "Copy market growth", correct: false },
        { id: "d", text: "All of the above", correct: true }
      ],
      explanation: "ETFs (Exchange-Traded Funds) allow beginners to avoid stock-picking, gain instant diversification, and track market growth all at once."
    },
    {
      id: 21,
      type: "content",
      title: "Risk: It's Not a Monster, It's the Price",
      paragraphs: [
        "Risk is not danger. Risk is rent you pay to access return.",
        "School teaches 'avoid risk.' But real life requires understanding it, pricing it, and using it wisely.",
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
        { id: "a", text: "Deserve it", correct: false },
        { id: "b", text: "Take risk", correct: true },
        { id: "c", text: "Pray to Warren Buffett", correct: false },
        { id: "d", text: "Have spreadsheets", correct: false }
      ],
      explanation: "Investors earn returns because they take calculated risks. Risk and return are fundamentally linked in investing."
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
        { id: "b", text: "The enemy", correct: false },
        { id: "c", text: "The tax collector", correct: false },
        { id: "d", text: "Irrelevant", correct: false }
      ],
      explanation: "Time is the multiplier that makes compounding powerful. The longer your investments compound, the more exponential the growth becomes."
    },
    {
      id: 21,
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

  // Update progress
  const pageNumber = lesson.type === "intro" ? 1 : currentIndex + 1;
  progressLabel.textContent = `${pageNumber} / ${lessons.length}`;
  const pct = ((currentIndex + 1) / lessons.length) * 100;
  progressFill.style.width = `${pct}%`;
  progressFill.classList.add('progress-pulse');
  setTimeout(() => progressFill.classList.remove('progress-pulse'), 400);

  // Update back button visibility
  updateBackButton();

  // Reset hint + pending XP display
  pendingXp = 0;
  pendingXpEl.textContent = pendingXp.toString();
  hintText.textContent = "Tap an answer to check your understanding.";

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
    
    // NOW fade in (after content is built)
    contentEl.style.opacity = "0";
    
    // Force reflow to ensure content is rendered
    void contentEl.offsetHeight;
    
    // Use requestAnimationFrame to ensure smooth transition
    requestAnimationFrame(() => {
      contentEl.style.transition = "opacity 0.3s ease";
      contentEl.style.opacity = "1";
      
      // Ensure visibility is maintained
      setTimeout(() => {
        contentEl.style.transition = "";
      }, 300);
    });
    
    console.log("Content rendered. Children count:", contentEl.children.length);
    
  } else if (lesson.type === "quiz") {
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
      
      const intro = document.createElement("p");
      intro.className = "slide-in-up";
      intro.textContent = "Quick check-in before we move on:";
      contentEl.appendChild(intro);

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
  
  animateXpGain(pendingXp);
}

function goNext() {
  const lessons = getCurrentLessons();
  if (!lessons.length) return;

  const nextBtn = $("#nextBtn");
  nextBtn.classList.add('button-press');
  setTimeout(() => nextBtn.classList.remove('button-press'), 200);

  currentIndex++;
  if (currentIndex >= lessons.length) {
    currentIndex = lessons.length - 1;
    const hintText = $("#hintText");
    hintText.textContent = "🎉 Lesson complete! Great work!";
    hintText.classList.add('hint-success');
    return;
  }
  renderLesson();
  updateBackButton();
}

function goBack() {
  const lessons = getCurrentLessons();
  if (!lessons.length) return;

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
  
  const activePanel = tab === "lesson" ? lessonCard : (tab === "journal" ? journalPanel : missionsPanel);
  activePanel.classList.add('fade-in-scale');
  setTimeout(() => activePanel.classList.remove('fade-in-scale'), 400);
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
    missionsText.textContent = "Soon: build a portfolio simulation and watch your investments grow over time.";
  } else {
    subjectChip.textContent = "Prototype · Subject";
    unitChip.textContent = "Unit: Coming soon";
    lessonTitle.textContent = "Prototype subject";
    lessonSubtitle.textContent = "This subject will be available soon.";
    era = "Foundations";
    journalText.textContent = "Prototype subject. This journal page will hold diagrams and notes once this district is wired.";
    missionsText.textContent = "Prototype subject. Soon: a small simulation mission for this area.";
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
    const missionsPanel = document.getElementById("missionsPanel");
    if (lessonCard) lessonCard.classList.remove("is-hidden");
    if (journalPanel) journalPanel.classList.add("is-hidden");
    if (missionsPanel) missionsPanel.classList.add("is-hidden");
    
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
    const lessons = getCurrentLessons();
    const progressLabel = $("#lessonProgressLabel");
    const progressFill = $("#lessonProgressFill");
    progressLabel.textContent = `0 / ${lessons.length}`;
    progressFill.style.width = "0%";
  }
}

window.showCategories = showCategories;
window.goNextDirect = goNext;
window.goBackDirect = goBack;

document.addEventListener("DOMContentLoaded", () => {
  const quizBlock = $("#quizBlock");
  if (quizBlock) {
    quizBlock.style.display = "none";
  }
  
  const celebrationOverlay = document.getElementById("celebrationOverlay");
  if (celebrationOverlay) {
    celebrationOverlay.style.display = "none";
  }
  
  updateMetaForSubject("finance");
  showCategories();
  renderLesson();

  $("#nextBtn").addEventListener("click", goNext);
  
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
});
