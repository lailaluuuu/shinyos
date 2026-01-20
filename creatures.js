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

  // Clear previous
  root.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("creature-reaction");

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

  const visibleMs = outcome === "streak" ? 3400 : 2600;

  setTimeout(() => {
    card.style.animation = "creature-pop-out 200ms ease-in forwards";
    setTimeout(() => {
      if (card.parentNode === root) {
        root.removeChild(card);
      }
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
