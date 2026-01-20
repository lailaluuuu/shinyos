// --- Laila Creature Engine v2 ---
// Call showCreatureReaction("hedgehog", "correct")
// or showSubjectReaction("investing", "correct")

const CREATURES = {
  // CORE CAST
  hedgehog: {
    emoji: "🦔",
    name: "Hedgehog · The Analyst",
    theme: "knowledge",
    tag: "Smart feedback",
    lines: {
      correct: "Exceptional civilians spotted.",
      wrong: "I am in witness protection now.",
      streak: "Your spike count is statistically illegal."
    }
  },
  turtle: {
    emoji: "🐢",
    name: "Turtle · The Strategist",
    theme: "patience",
    tag: "Long game thinking",
    lines: {
      correct: "Patience rewarded.",
      wrong: "We shall pretend this never happened.",
      streak: "Slow and relentless wins this timeline."
    }
  },
  fox: {
    emoji: "🦊",
    name: "Fox · Mischief Engine",
    theme: "speed",
    tag: "Cheeky dopamine",
    lines: {
      correct: "Calculated.",
      wrong: "This was not in my simulations.",
      streak: "You're speedrunning reality."
    }
  },
  rabbit: {
    emoji: "🐇",
    name: "Rabbit · Overachiever",
    theme: "energy",
    tag: "Hyper focus",
    lines: {
      correct: "YES YES YES.",
      wrong: "I have moved on 🐇",
      streak: "Too fast for the UI."
    }
  },
  dragon: {
    emoji: "🐉",
    name: "Baby Dragon · Reward Boss",
    theme: "xp",
    tag: "XP & level-ups",
    lines: {
      correct: "Tiny spark, big brain.",
      wrong: "Retry, mortal.",
      streak: "Evolution protocol initiated."
    }
  },
  panda: {
    emoji: "🐼",
    name: "Panda · Chaotic Zen",
    theme: "psych",
    tag: "Chill chaos",
    lines: {
      correct: "Slow clap achieved.",
      wrong: "*faceplants quietly*",
      streak: "Sitting on existential bamboo coins."
    }
  },
  bee: {
    emoji: "🐝",
    name: "Bee · The Economist",
    theme: "finance",
    tag: "Money & productivity",
    lines: {
      correct: "Economically optimal.",
      wrong: "I regret to inform you...",
      streak: "Honey coins have been printed."
    }
  },

  // BONUS: LOGIC / CODING / DEEP WORK
  octopus: {
    emoji: "🐙",
    name: "Octopus · Multitask Overlord",
    theme: "coding",
    tag: "Advanced logic",
    lines: {
      correct: "Eight tasks, one brain. Respect.",
      wrong: "Too many threads, not enough RAM.",
      streak: "Concurrency level: illegal."
    }
  },
  chameleon: {
    emoji: "🦎",
    name: "Chameleon · The Adapter",
    theme: "problem-solving",
    tag: "Pattern spotting",
    lines: {
      correct: "Adapted instantly.",
      wrong: "Colour mismatch detected.",
      streak: "You're blending into every challenge."
    }
  },
  crab: {
    emoji: "🦀",
    name: "Crab · Edge-Case Hunter",
    theme: "debug",
    tag: "Bug exterminator",
    lines: {
      correct: "All edge cases contained.",
      wrong: "A tiny bug scuttled past.",
      streak: "Shell shielded against all crashes."
    }
  },

  // BONUS: SCIENCE / UNIVERSE
  dinosaur: {
    emoji: "🦕",
    name: "Dino · Deep Time Scholar",
    theme: "history-science",
    tag: "Long-term perspective",
    lines: {
      correct: "You'd survive multiple epochs.",
      wrong: "Tiny asteroid of confusion detected.",
      streak: "Your streak just entered fossil record level."
    }
  },
  squid: {
    emoji: "🦑",
    name: "Squid · Lab Goblin",
    theme: "biology",
    tag: "Weird science",
    lines: {
      correct: "Beautifully chaotic experiment.",
      wrong: "The petri dish rebelled.",
      streak: "Lab tentacles fully synchronised."
    }
  },
  roboBird: {
    emoji: "🐦",
    name: "Robo-Bird · Orbit Scout",
    theme: "space",
    tag: "Space & signals",
    lines: {
      correct: "Signal received loud and clear.",
      wrong: "Static. Try re-aiming your brain dish.",
      streak: "You're basically a small satellite now."
    }
  },

  // BONUS: EMOTIONAL SUPPORT / VIBES
  otter: {
    emoji: "🦦",
    name: "Otter · Emotional Support",
    theme: "support",
    tag: "Soft power",
    lines: {
      correct: "We keep the little wins in our pockets.",
      wrong: "Here, have a tiny stone.",
      streak: "Floating down the river of progress."
    }
  },
  bear: {
    emoji: "🐻",
    name: "Bear · Chill Virtuoso",
    theme: "music-calm",
    tag: "Calm productivity",
    lines: {
      correct: "Smooth as a guitar solo.",
      wrong: "We hit one wrong chord, it's fine.",
      streak: "You're headlining the learning festival."
    }
  },
  penguin: {
    emoji: "🐧",
    name: "Penguin · Focus Monk",
    theme: "deep-focus",
    tag: "Cold-blooded concentration",
    lines: {
      correct: "Perfectly in rhythm.",
      wrong: "We slipped on one thought, stand up.",
      streak: "Ice-cold consistency achieved."
    }
  },

  // BONUS: FINANCE / CRYPTO FRIENDS
  piggyBot: {
    emoji: "🐷",
    name: "Piggy Bot · Savings AI",
    theme: "saving",
    tag: "Automated savings",
    lines: {
      correct: "Deposited in the vault of good decisions.",
      wrong: "Savings glitch. Re-route that choice.",
      streak: "Compound interest is now your sidekick."
    }
  },
  shiba: {
    emoji: "🐕",
    name: "Shiba · Meme Trader",
    theme: "crypto",
    tag: "High-risk chaos",
    lines: {
      correct: "Such gain. Much discipline.",
      wrong: "Volatility booped your nose.",
      streak: "Diamond paws activated."
    }
  },
  snail: {
    emoji: "🐌",
    name: "Snail · Compound Interest",
    theme: "long-finance",
    tag: "Slow wealth",
    lines: {
      correct: "Wealth compounds slowly, civilian.",
      wrong: "Too fast. We don't rush empires.",
      streak: "Tiny steps, absurd outcomes later."
    }
  },
  frog: {
    emoji: "🐸",
    name: "Frog · Market Hopper",
    theme: "analysis",
    tag: "Data jumps",
    lines: {
      correct: "Flawless hop between options.",
      wrong: "Missed that lily pad, try again.",
      streak: "You're leaping across trends like it's nothing."
    }
  },

  // BONUS: OTHER SUBJECT / MOOD CHARACTERS
  owl: {
    emoji: "🦉",
    name: "Owl · Endgame Teacher",
    theme: "teaching",
    tag: "Wisdom drops",
    lines: {
      correct: "A delightful intellectual escalation.",
      wrong: "We have identified a learning opportunity.",
      streak: "Wisdom streak: extended."
    }
  },
  stag: {
    emoji: "🦌",
    name: "Stag · Thoughtful Scholar",
    theme: "philosophy",
    tag: "Big picture thinking",
    lines: {
      correct: "Elegant reasoning.",
      wrong: "The forest got a bit foggy there.",
      streak: "Antlers fully tuned to higher concepts."
    }
  }
};

// Map app subjects → preferred creature pool
const SUBJECT_CREATURES = {
  investing: ["bee", "snail", "piggyBot", "shiba"],
  economics: ["bee", "snail", "panda"],
  moneyBasics: ["piggyBot", "bee", "snail"],
  coding: ["octopus", "chameleon", "crab", "hedgehog"],
  logic: ["hedgehog", "fox", "octopus"],
  psychology: ["panda", "stag", "otter"],
  science: ["dinosaur", "squid", "roboBird"],
  space: ["roboBird", "squid", "owl"],
  studySkills: ["penguin", "bear", "rabbit"],
  resilience: ["otter", "panda", "turtle"],
  default: ["hedgehog", "turtle", "fox", "rabbit"]
};

// Rotation tracking - cycles through ALL creatures
let creatureRotationIndex = 0;
const allCreatureKeys = Object.keys(CREATURES);

// Get next creature in rotation (cycles through all)
function getNextCreature() {
  const creature = allCreatureKeys[creatureRotationIndex];
  creatureRotationIndex = (creatureRotationIndex + 1) % allCreatureKeys.length;
  return creature;
}

// Cyberpunk confetti colors
const cyberpunkColors = ['#00ffff', '#ff00ff', '#b86bff', '#4ea2ff', '#2ed4c4', '#ff6b9d', '#ffdd9a', '#35c27e', '#9ae6ff', '#ff00aa'];

// Full-screen confetti burst
function triggerFullScreenConfetti() {
  const colors = cyberpunkColors;
  const confettiCount = 50; // More confetti for full screen
  
  // Create confetti from multiple points across the screen
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  // Trigger from center and multiple edge points
  const triggerPoints = [
    { x: screenWidth / 2, y: screenHeight / 2 }, // Center
    { x: screenWidth * 0.2, y: screenHeight * 0.3 }, // Top left area
    { x: screenWidth * 0.8, y: screenHeight * 0.3 }, // Top right area
    { x: screenWidth * 0.2, y: screenHeight * 0.7 }, // Bottom left area
    { x: screenWidth * 0.8, y: screenHeight * 0.7 }, // Bottom right area
  ];
  
  triggerPoints.forEach((point, index) => {
    setTimeout(() => {
      for (let i = 0; i < confettiCount / triggerPoints.length; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-particle';
        confetti.style.left = point.x + 'px';
        confetti.style.top = point.y + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (Math.random() * Math.PI * 2);
        const velocity = 150 + Math.random() * 150;
        const xVel = Math.cos(angle) * velocity;
        const yVel = Math.sin(angle) * velocity - 200;
        
        confetti.style.setProperty('--x-vel', xVel + 'px');
        confetti.style.setProperty('--y-vel', yVel + 'px');
        confetti.style.setProperty('--rotation', Math.random() * 720 - 360 + 'deg');
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 2000);
      }
    }, index * 50); // Stagger the bursts slightly
  });
}

// Continuous falling confetti from top of screen
let confettiInterval = null;
let activeConfettiParticles = [];

function startFallingConfetti() {
  // Clear any existing interval
  if (confettiInterval) {
    clearInterval(confettiInterval);
  }
  
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  // Create confetti continuously from top of screen
  confettiInterval = setInterval(() => {
    // Create 4-6 confetti pieces per interval for better visibility
    const count = 4 + Math.floor(Math.random() * 3);
    
    for (let i = 0; i < count; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-falling';
      
      // Random position across top of screen
      const startX = Math.random() * screenWidth;
      const startY = -40; // Start above viewport
      
      // Random size (make them bigger and more visible)
      const size = 12 + Math.random() * 10;
      confetti.style.width = size + 'px';
      confetti.style.height = size + 'px';
      
      // Random color from cyberpunk palette
      const color = cyberpunkColors[Math.floor(Math.random() * cyberpunkColors.length)];
      confetti.style.backgroundColor = color;
      
      // Random horizontal drift (more drift for visual interest)
      const drift = (Math.random() - 0.5) * 200; // -100 to 100px
      confetti.style.setProperty('--drift', drift + 'px');
      
      // Random fall duration (2-4 seconds for faster falling)
      const duration = 2 + Math.random() * 2;
      confetti.style.setProperty('--fall-duration', duration + 's');
      
      // Random rotation
      const rotation = Math.random() * 720 - 360;
      confetti.style.setProperty('--rotation', rotation + 'deg');
      
      // Random delay for staggered effect
      const delay = Math.random() * 0.2;
      confetti.style.animationDelay = delay + 's';
      
      confetti.style.left = startX + 'px';
      confetti.style.top = startY + 'px';
      confetti.style.position = 'fixed';
      confetti.style.display = 'block';
      
      document.body.appendChild(confetti);
      activeConfettiParticles.push(confetti);
      
      // Remove after animation completes
      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.remove();
        }
        activeConfettiParticles = activeConfettiParticles.filter(p => p !== confetti);
      }, (duration + delay + 0.5) * 1000);
    }
  }, 120); // Create new confetti every 120ms for more density
}

function stopFallingConfetti() {
  if (confettiInterval) {
    clearInterval(confettiInterval);
    confettiInterval = null;
  }
  
  // Clean up any remaining particles
  activeConfettiParticles.forEach(particle => {
    if (particle.parentNode) {
      particle.remove();
    }
  });
  activeConfettiParticles = [];
}

// Core function: show one creature reaction card
function showCreatureReaction(creatureKey = "hedgehog", outcome = "correct") {
  const root = document.getElementById("creature-reaction-root");
  if (!root) return;

  const creature = CREATURES[creatureKey];
  if (!creature) return;

  const line =
    (creature.lines && creature.lines[outcome]) ||
    creature.lines?.correct ||
    "Well done.";

  // Trigger confetti burst when creature appears
  if (outcome === "correct" || outcome === "streak") {
    triggerFullScreenConfetti();
    // Also start falling confetti for correct/streak
    startFallingConfetti();
  } else {
    // Less confetti for wrong answers, but still some
    triggerFullScreenConfetti();
  }

  // Clear previous
  root.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("creature-reaction");
  card.style.position = "relative";
  card.style.zIndex = "10002";

  if (outcome === "correct") {
    card.classList.add("creature-reaction--correct");
  } else if (outcome === "wrong") {
    card.classList.add("creature-reaction--wrong");
  } else if (outcome === "streak") {
    card.classList.add("creature-reaction--streak", "creature-reaction--glow");
  }

  card.innerHTML = `
    <div class="creature-reaction__emoji-wrap">
      ${creature.emoji}
    </div>
    <div class="creature-reaction__content">
      <div class="creature-reaction__name">${creature.name}</div>
      <div class="creature-reaction__line">${line}</div>
      ${
        creature.tag
          ? `<div class="creature-reaction__tag">
              <span class="creature-reaction__tag-dot"></span>
              <span>${creature.tag}</span>
            </div>`
          : ""
      }
    </div>
  `;

  root.appendChild(card);

  const visibleMs = outcome === "streak" ? 3500 : 2800; // Streak 3.5s, others 2.8s

  setTimeout(() => {
    card.style.animation = "creature-pop-out 200ms ease-in forwards";
    // Fade out backdrop
    if (root) {
      root.style.animation = "creature-backdrop-fade-out 200ms ease-in forwards";
    }
    setTimeout(() => {
      if (card.parentNode === root) {
        root.removeChild(card);
      }
      // Reset backdrop
      if (root) {
        root.style.animation = "";
      }
      // Stop falling confetti when creature disappears
      stopFallingConfetti();
    }, 220);
  }, visibleMs);
}

// Helper: choose a creature automatically based on subject, with rotation fallback
// Always rotates through all creatures for variety
function showSubjectReaction(subjectKey = "default", outcome = "correct") {
  // Always use rotation to cycle through all creatures
  const chosen = getNextCreature();
  showCreatureReaction(chosen, outcome);
}

// Helper: show next creature in rotation (for general use)
function showNextCreatureReaction(outcome = "correct") {
  const chosen = getNextCreature();
  showCreatureReaction(chosen, outcome);
}

// Expose globally for inline HTML or other files
window.showCreatureReaction = showCreatureReaction;
window.showSubjectReaction = showSubjectReaction;
window.showNextCreatureReaction = showNextCreatureReaction;
window.startFallingConfetti = startFallingConfetti;
window.stopFallingConfetti = stopFallingConfetti;
