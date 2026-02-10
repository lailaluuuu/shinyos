const subjectLessons = {
  finance: [
    {
      id: 1,
      type: "intro",
      title: "💰 Investing — The Skill You Can Learn at Any Age",
      subtitle: "Curiosity is enough. The rest is learnable. ✨\nWelcome to the class that makes the rest of life make more sense. 🎓",
      imageUrl: "images/investing-intro.png",
      imageAlt: "Investing introduction"
    },
    {
      id: 2,
      type: "content",
      title: "🎓 Why School Skipped This",
      paragraphs: [
        "The system taught: budgeting 💰, saving 💵, compound interest (4 lines in maths), and how to fill in forms 📝.",
        "The system skipped: how wealth actually forms 💎, why assets exist, what investing is, what it funds, how to allocate capital, and why time is the cheat code ⏰.",
        "Most people leave school knowing how to analyse a poem 📖, but not how to read a pension statement or a stock chart 📈.",
        "This course fixes that. You'll understand the mechanics, not just the buzzwords. 🎯"
      ]
    },
    {
      id: 3,
      type: "quiz",
      question: "🤔 School skipped investing because:",
      options: [
        { id: "a", text: "You can't grade compounding in 45 minutes", correct: false },
        { id: "b", text: "It wasn't a curriculum priority", correct: false },
        { id: "c", text: "A combination of factors", correct: true },
        { id: "d", text: "It was assumed to be handled at home 🏠", correct: false }
      ],
      explanation: "All of these reasons contributed to schools skipping investing education. The system prioritized testable, academic subjects over practical financial skills that require time to demonstrate value, leaving a knowledge gap that affects millions."
    },
    {
      id: 4,
      type: "content",
      title: "💡 What Investing Actually Is",
      paragraphs: [
        "Most people think investing is guessing 🎲, gambling 🎰, or day-trading on a spaceship-looking app 🚀.",
        "Others think it's only for rich people 💰 or finance professionals 👔.",
        "School rarely explains it. Families often assume it's 'too risky' or 'not for us.'",
        "Investing isn't day-trading, gambling, or a secret club for the £100k+ crowd.",
        "It's just owning a slice of something productive — a company, a piece of land, an energy grid, a solar farm, etc.",
        "These things create value in the real world: they sell products 📦, pay dividends 💵, rent land 🏘️, or power homes 🏡.",
        "Investing = putting money into productive assets that (hopefully) grow in value 📈 or generate income over time 💰.",
        "It isn't gambling, and it isn't magic ✨.",
        "It's allocating capital into things that produce returns 📊.",
        "Think of it like hiring employees. Your money doesn't sit still — it goes to work.",
        "Some assets become star performers, others do 'meh,' but the aim is simple: growth over time."
      ]
    },
    {
      id: 5,
      type: "quiz",
      question: "🤔 Investing is closer to:",
      options: [
        { id: "a", text: "Owning a bakery that sells bread every day 🥖", correct: true },
        { id: "b", text: "Betting on a horse to win once 🐎", correct: false },
        { id: "c", text: "Buying a lottery ticket 🎫", correct: false },
        { id: "d", text: "Guessing which emoji your friend will send 😂", correct: false }
      ],
      explanation: "Investing is about owning productive assets—like a bakery—that create value again and again over time, not one-off bets like horse racing or lottery tickets."
    },
    {
      id: 6,
      type: "content",
      title: "🌍 Why Investing Exists",
      paragraphs: [
        "Human economies expand because we invent 🔬, build 🏗️, innovate 💡, and demand new things 🆕.",
        "Investing is simply how we: fund innovation 🚀, fund growth 📈, fund risk ⚠️, fund long-term progress 🌟.",
        "Without investing → no tech 💻, no medicine 💊, no bridges 🌉, no chips 🖥️, no rockets 🚀, no progress.",
        "Investing is how progress is financed 💰.",
        "Money has three main paths:",
        "• Spending → gone immediately 💸",
        "• Saving → safe but static 🏦",
        "• Investing → used to build things and grow 📊",
        "Most adults only ever get taught the first two. 📚"
      ]
    },
    {
      id: 7,
      type: "quiz",
      question: "💭 Investing is essential because it finances:",
      options: [
        { id: "a", text: "Progress and growth 📈", correct: true },
        { id: "b", text: "Only cool inventions 🛸", correct: false },
        { id: "c", text: "Only companies 🏢", correct: false },
        { id: "d", text: "Only roads and bridges 🌉", correct: false }
      ],
      explanation: "Investing finances economic progress—innovation, businesses, and infrastructure all sit under that umbrella."
    },
    {
      id: 8,
      type: "content",
      title: "👻 The Invisible Enemy: Inflation",
      paragraphs: [
        "School treats money as static 💰. It never mentions the villain that slowly steals purchasing power 😈.",
        "£100 today might only have the buying power of ~£74 in 10 years (at ~3% annual inflation) 📉",
        "Inflation is a silent tax on time ⏰. Investing is how you fight it ⚔️.",
        "Early awareness makes financial decisions less mysterious 🔮 and more intentional 🎯."
      ]
    },
    {
      id: 9,
      type: "quiz",
      question: "🤔 Inflation mainly affects:",
      options: [
        { id: "a", text: "Prices 💰", correct: false },
        { id: "b", text: "Purchasing power 💵", correct: false },
        { id: "c", text: "Savings 🏦", correct: false },
        { id: "d", text: "All of the above ✅", correct: true }
      ],
      explanation: "Inflation affects prices, purchasing power, and the value of savings over time. It's why investing is essential to preserve and grow wealth."
    },
    {
      id: 10,
      type: "content",
      title: "⏰ The Cheat Code They Hid: Compound Growth",
      paragraphs: [
        "Compound growth deserved a 6-week school module, fireworks, and guest speakers.",
        "It's interest on your interest. Growth on growth. Time becoming exponential.",
        "Albert Einstein called it 'the 8th wonder of the world.' School gave it 4 lines in maths and moved on like it wasn't the formula that shapes wealth.",
        "The earlier you start, the less money you need.",
        "Here's the important bit: simple interest grows in a straight line. Compound growth curves upward because past growth becomes the engine for future growth.",
        "At first the curve looks slow — almost boring. Then time tilts it upward and the numbers get weird (in a good way).",
        "This is why £50/month at 18 can beat £200/month starting at 30. Time is doing most of the work.",
        "Compound growth doesn't reward brilliance. It rewards patience."
      ]
    },
    {
      id: 11,
      type: "interactive",
      title: "📊 See Your Money Grow",
      subtitle: "Drag the slider to see how time transforms your investment ⏰",
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
      title: "📍 Where Investing Happens (Finally Explained)",
      paragraphs: [
        "Real assets people grow wealth with:",
        "Stocks 📈 → partial ownership of businesses",
        "ETFs 📊 → many stocks at once (cheat mode) 🎮",
        "Bonds 💼 → lending",
        "Real Estate 🏘️ → physical assets",
        "Crypto ₿ → tech + speculation + volatility",
        "Businesses 🏢 → asymmetric upside",
        "Most adults never hear these words until they're 30+ and then panic google it at 1am 😅.",
        "Owning the economy is easier than beating it. 🎯"
      ]
    },
    {
      id: 13.5,
      type: "quiz",
      question: "🤔 You have £1,000 to invest. Which strategy gives you the MOST diversification?",
      options: [
        { id: "a", text: "Buy stock in one great company", correct: false },
        { id: "b", text: "Buy an ETF that owns 500 companies", correct: true },
        { id: "c", text: "Keep it in cash", correct: false },
        { id: "d", text: "Buy cryptocurrency only", correct: false }
      ],
      explanation: "An ETF that owns 500 companies gives you instant diversification. If one company fails, you still own 499 others. Single stocks = all eggs in one basket."
    },
    {
      id: 14,
      type: "content",
      title: "📈 Stocks & Dividends: Tiny Ownership Explained",
      paragraphs: [
        "A stock is a tiny slice of a real business 🏢.",
        "Businesses make products 📦, earn profits 💰, and expand 📈. Stocks let you own a part of that engine ⚙️.",
        "How do stockholders get paid? 💵",
        "→ Dividends: a share of profits paid out to owners 💰",
        "→ Buybacks: the company buys its own shares (makes yours more valuable) 📈",
        "→ Price appreciation: as the business grows, the market reprices it 🎯",
        "Not all companies pay dividends. Some reinvest profits into growth instead 🌱.",
        "Dividend companies = income today 💵. Growth companies = more income later (hopefully) 📈.",
        "Modern twist: we now have fractional shares — fancy ways to own tiny pieces of expensive stocks 🎯. You don't need a big wad to start 💰.",
        "Stocks are ownership 🏛️. Dividends are the owner's paycheck 💼."
      ]
    },
    {
      id: 15,
      type: "quiz",
      question: "🤔 ETFs let beginners:",
      options: [
        { id: "a", text: "Diversify automatically 📊", correct: true },
        { id: "b", text: "Pick individual winners 🎯", correct: false },
        { id: "c", text: "Bet on single companies 🎲", correct: false },
        { id: "d", text: "Avoid the market entirely 🚫", correct: false }
      ],
      explanation: "ETFs spread money across many companies, reducing the need for stock-picking and smoothing volatility."
    },
    {
      id: 16,
      type: "content",
      title: "📰 Why Markets Move: News, Fear, and Hype",
      paragraphs: [
        "Stock prices don't move in a vacuum. They react to what's happening in the world.",
        "Earnings reports 📊, interest rates 💰, elections 🗳️, wars ⚔️, new products 🆕, and regulation 📜 all change what investors think a business is worth 💎.",
        "In the short term, prices are heavily influenced by mood: fear 😨, greed 💰, hype 🔥, and headlines 📰.",
        "In the long term, prices are pulled toward reality: profits, cashflow, and how well the business actually performs.",
        "This is why markets can look chaotic day-to-day 🌪️ but more logical decade-to-decade 📊.",
        "You can't control the noise, but you can choose to focus on the signal: real businesses, real earnings, real value over time."
      ]
    },
    {
      id: 16.5,
      type: "quiz",
      question: "💭 A company's stock drops 20% after bad news. What should you do?",
      options: [
        { id: "a", text: "Panic sell immediately before it drops more", correct: false },
        { id: "b", text: "Check if the fundamentals changed or if it's just market noise", correct: true },
        { id: "c", text: "Buy more without thinking", correct: false },
        { id: "d", text: "Close your eyes and hope", correct: false }
      ],
      explanation: "Smart investors separate noise from signal. Ask: Did the company's ability to make money change? Or is the market just reacting emotionally? Don't let headlines control your decisions."
    },
    {
      id: 17,
      type: "quiz",
      question: "🤔 In the short term, markets mainly react to:",
      options: [
        { id: "a", text: "Headlines 📰, hype 🔥, fear 😨 and mood 😊", correct: true },
        { id: "b", text: "Decades of fundamental performance 📊", correct: false },
        { id: "c", text: "Perfect forecasting models 🔮", correct: false },
        { id: "d", text: "Astrology 🔮", correct: false }
      ],
      explanation: "Short-term market movements are driven by sentiment, headlines, and uncertainty. Long-term movements are driven by business performance and cashflows."
    },
    {
      id: 18,
      type: "content",
      title: "🎯 How to Pick Investments (Beginner Framework)",
      paragraphs: [
        "You don't need to 'beat the market' to build wealth 💰. Most people are better off owning the market 📊.",
        "Good investing decisions are usually boring 😴 and rule-based 📋.",
        "A simple way to think about picking investments:",
        "1) What am I investing for? (Goal) 🎯",
        "2) When do I need the money? (Time horizon) ⏰",
        "3) How much uncertainty can I tolerate? (Risk) ⚠️",
        "4) What assets match that profile? (Allocation) 📊",
        "For most beginners, broad ETFs are the cleanest starting point: diversified 📈, low-cost 💰, and no guessing required 🎯.",
        "Individual stocks become more reasonable once you understand the businesses behind them 🏢.",
        "Speculative assets (crypto ₿, startups 🚀, etc.) should be treated as 'moonshot buckets' 🌙 — tiny % of the portfolio, never the core.",
        "The core of good investing is alignment: the assets match your goals 🎯, time ⏰, and temperament 🧘."
      ]
    },
    {
      id: 21,
      type: "content",
      title: "⚔️ Risk: It's Not a Monster, It's the Price",
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
      question: "💭 Investors earn returns because they:",
      options: [
        { id: "a", text: "Like graphs and spreadsheets 📊", correct: false },
        { id: "b", text: "Take risk ⚠️", correct: true },
        { id: "c", text: "Buy the right guru's book 📚", correct: false },
        { id: "d", text: "Wait for luck 🍀", correct: false }
      ],
      explanation: "Returns exist because investors take risk. If outcomes were guaranteed, returns would be zero."
    },
    {
      id: 23,
      type: "content",
      title: "🎓 Final Reflection: The One School Never Gave",
      paragraphs: [
        "If money is a worker 👷, investing is hiring workers and teaching them new skills 📚.",
        "If inflation is a thief 👻, investing locks the door 🔒 and fights back ⚔️.",
        "If compounding is a cheat code 🎮, time is the multiplier ⏰.",
        "You now understand: how wealth forms 💎, why inflation matters 📉, why time matters ⏰, why investing exists 🌍, why productive assets grow 📈, and why compounding is seismic 🌊.",
        "This is the baseline for building portfolios 📊, choosing assets 💰, and not getting eaten by a system you're already living inside 🦈."
      ]
    },
    {
      id: 24,
      type: "quiz",
      question: "🤔 If money is a worker 👷, what is investing?",
      options: [
        { id: "a", text: "Hiring workers 👥", correct: false },
        { id: "b", text: "Chaining workers to a desk 🔗", correct: false },
        { id: "c", text: "Teaching workers new skills 📚", correct: false },
        { id: "d", text: "Hiring and teaching workers (A + C) ✅", correct: true }
      ],
      explanation: "Investing is like hiring workers (allocating capital) and teaching them new skills (putting money into productive assets that grow)."
    },
    {
      id: 25,
      type: "quiz",
      question: "🤔 If inflation is a thief 👻, what does investing do?",
      options: [
        { id: "a", text: "Locks the door 🔒", correct: false },
        { id: "b", text: "Fights back ⚔️", correct: false },
        { id: "c", text: "Ignores it 🙈", correct: false },
        { id: "d", text: "Locks the door and fights back (A + B) ✅", correct: true }
      ],
      explanation: "Investing both locks the door (preserves purchasing power) and fights back (grows wealth faster than inflation)."
    },
    {
      id: 19,
      type: "quiz",
      question: "🤔 If compounding is a cheat code 🎮, what is time?",
      options: [
        { id: "a", text: "The multiplier ✖️", correct: true },
        { id: "b", text: "The enemy 👹", correct: false },
        { id: "c", text: "The tax collector 💼", correct: false },
        { id: "d", text: "Irrelevant ❌", correct: false }
      ],
      explanation: "Time is the multiplier that makes compounding powerful. The longer your investments compound, the more exponential the growth becomes."
    },
    {
      id: 20,
      type: "interactive",
      title: "🎮 Risk vs. Return Challenge",
      subtitle: "Balance your portfolio across different risk levels",
      interactiveType: "risk-game",
      instructions: "Allocate £10,000 across three investment types. See how your choices affect potential returns!",
      investmentTypes: [
        { id: "safe", name: "Safe Bonds", risk: "Low", return: "3-5%", color: "#35c27e" },
        { id: "balanced", name: "Index Funds", risk: "Medium", return: "7-10%", color: "#fbbf24" },
        { id: "aggressive", name: "Growth Stocks", risk: "High", return: "12-20%", color: "#ef4444" }
      ]
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
    },
    // MONEY MACHINE LESSON STARTS HERE
    {
      id: "money-machine",
      subject: "finance",
      type: "lesson",
      slug: "money-machine",
      icon: "💰",
      title: "The Money Machine",
      subtitle: "Your money isn't where you think it is 💰",
      imageUrl: "images/themoneymachine-intro.png",
      imageAlt: "The Money Machine introduction",
      sections: [
        {
          type: "intro",
          subject: "finance",
          title: "The Money Machine",
          subtitle: "Your money isn't where you think it is 💰",
          imageUrl: "images/themoneymachine-intro.png",
          imageAlt: "The Money Machine introduction"
        },
        {
          type: "content",
          title: "The Big Lie. The vault is a lie 🏦",
          paragraphs: [
            "Here's something wild: when you put £100🤑 in the bank, it doesn't sit in a vault with your name on it.",
            "Most of it gets lent to someone else within hours.🤨",
            "Banks only keep about £10 of your £100. The other £90? Gone. Out the door. Working.",
            "This isn't a scam. It's literally how the whole system works. And it's completely legal.🤔"
          ],
          imageUrl: "images/gonefishing.png",
          imageAlt: "The Big Lie. The vault is a lie 🏦"
        },
        {
          type: "quiz",
          question: "If you deposit £100 and the bank keeps 10%, how much do they lend out?",
          options: [
            { id: "a", text: " £10 (Because they're being careful)", correct: false },
            { id: "b", text: " £50 (Split it down the middle)", correct: false },
            { id: "c", text: "£90 (Most of your money immediately leaves)", correct: true },
            { id: "d", text: "£0 (They keep it all safe)", correct: false }
          ],
          explanation: "Banks keep only a small fraction (usually 10%) and lend out the rest. This is called fractional reserve banking. It sounds sketchy, but it's how money multiplies through the economy.🤑"
        },
        {
          type: "content",
          title: "The Money Multiplier. One pound becomes ten 🪄",
          paragraphs: [
            "Here's where it gets trippy.😵‍💫 That £90 the bank lent out? It gets deposited in another bank.",
            "That bank keeps £9 and lends out £81.",
            "That £81 gets deposited, and the cycle continues.🌀",
            "Your original £100 has now created nearly £1,000 in the economy. From thin air. This is money multiplication."
          ],
          imageUrl: "images/Cellular-currency-multiplication.png",
          imageAlt: "The Money Multiplier. One pound becomes ten 🪄"
        },
        {
          type: "content",
          title: "The Nightmare Scenario😱 What if everyone wants their money? 😰",
          paragraphs: [
            "Remember, banks only have 10% of deposits on hand.",
            "If rumors spread that a bank is failing, people panic. 🔥",
            "Everyone rushes to withdraw at once. This is called a \"bank run.\"",
            "The bank literally doesn't have the cash. First 10% of people get their money. The rest get... nothing. 😵",
            "This is why banks sometimes close their doors during crises. Not because they're mean. Because the money isn't there. 💨"
          ]
        },
        {
          type: "quiz",
          question: "Why do bank runs happen?",
          options: [
            { id: "a", text: "People suddenly need cash for emergencies", correct: false },
            { id: "b", text: "Banks announce they're closing", correct: false },
            { id: "c", text: "Fear spreads that the bank might fail, so everyone withdraws at once", correct: true },
            { id: "d", text: "Interest rates drop too low", correct: false }
          ],
          explanation: "Bank runs are pure panic. Once people fear a bank is unstable, it becomes a self-fulfilling prophecy. Even healthy banks can collapse if enough people withdraw simultaneously. This is why deposit insurance (FDIC) exists—to stop the panic.🫨"
        },
        {
          type: "content",
          title: "How Banks Actually Make Money - The spread is everything 📊",
          paragraphs: [
            "Banks pay you maybe 0.5% interest on your savings. 💰",
            "They lend your money to others at 5-7% (or 20%+ on credit cards).",
            "That difference is called \"the spread.\" That's their profit.",
            "Example: They borrow from you at 0.5%, lend at 6%. That 5.5% gap? Pure profit on YOUR money.",
            "Oh, and fees. Overdraft fees. ATM fees. Account fees. Monthly fees. They LOVE fees. 😕"
          ]
        },
        {
          type: "quiz",
          question: "If a bank pays you 1% on savings and charges borrowers 6% on loans, what's their profit margin on each pound?",
          options: [
            { id: "a", text: "5% (The spread between what they pay and charge)", correct: true },
            { id: "b", text: "6% (Just the lending rate)", correct: false },
            { id: "c", text: "1% (Just the savings rate)", correct: false },
            { id: "d", text: "7% (Adding them together)", correct: false }
          ],
          explanation: "The spread is 6% - 1% = 5% profit. Banks make money on the difference between cheap deposits and expensive loans. It's their entire business model."
        },
        {
          type: "content",
          title: "The Credit Card Trap - The 20% hamster wheel 🐹",
          paragraphs: [
            "Credit card interest is usually 15-25% APR (annual percentage rate).",
            "Banks LOVE 😍 when you only pay the minimum payment.",
            "Example: $1,000 debt at 20% APR. Minimum payments? You'll pay for 5+ years and spend $600+ in interest.",
            "That $1,000 TV actually cost you $1,600. 😵‍💫",
            "They're not hoping you pay it off. They're hoping you don't. 😈"
          ],
          imageUrl: "images/hamster-wheel.png",
          imageAlt: "The Credit Card Trap - The 20% hamster wheel 🐹"
        },
        {
          type: "quiz",
          question: "Why do banks offer you credit cards when you're young?🐣",
          options: [
            { id: "a", text: "To help you build credit history", correct: false },
            { id: "b", text: "Because they're generous", correct: false },
            { id: "c", text: "To get you comfortable with debt early, when habits form", correct: true },
            { id: "d", text: "Because young people are financially responsible 🤣", correct: false }
          ],
          explanation: "Banks know that habits formed young stick for life. Get someone comfortable carrying a balance at 18, and they'll likely do it for decades. That's decades of interest payments. It's not generosity—it's strategy. "
        },
        {
          type: "content",
          title: "Where Your Money Really Is - Follow the money 🔍",
          paragraphs: [
            "Your £100 deposit is now split into pieces: 🧩",
            "£10 sits in the bank's reserves (the only \"real\" part)",
            "£30 is someone's car loan 🚗",
            "£25 is someone's mortgage payment",
            "£20 is someone's credit card debt 💳",
            "£15 is a business loan",
            "Your money is everywhere, earning the bank profit, while you get 0.5% interest.",
            "This is why banking is one of the most profitable industries on Earth. 🤑"
          ]
        },
        {
          type: "content",
          title: "Final Reflection - Now you know the game 🎮",
          paragraphs: [
            "Banks aren't evil. 🙊 But they ARE playing a different game than you think.",
            "Your deposits are their raw material. Their product is loans.",
            "Understanding this changes how you see money.",
            "Next time someone says \"put it in the bank where it's safe,\" you'll know what that REALLY means. 😉",
            "The money machine runs on your pound. Now you know how to use it—instead of being used by it. 😍"
          ]
        }
      ]
    }
  ],
  mind: [
    {
      id: "mind-pattern-hunger",
      subject: "mind",
      type: "lesson",
      title: "🧠 Pattern Hunger",
      subtitle: "Why your brain finds meaning — even when none exists",
      imageUrl: "images/pattern-hunger-intro.png",
      imageAlt: "Pattern Hunger introduction",
      sections: [
        {
          type: "content",
          title: "Your brain hates randomness 🎲",
          imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
          imageAlt: "Patterns representing randomness and meaning",
          paragraphs: [
            "Your brain would rather believe a false pattern than accept randomness.",
            "This isn't a flaw. It's survival wiring.",
            "Your visual cortex processes 10 million bits of information per second. Most of it gets thrown away. What stays? Patterns.",
            "For most of human history, missing a real pattern once could mean danger. Seeing a fake one usually meant nothing.",
            "A rustle in the grass could be wind — or a predator. Our ancestors who assumed 'just wind' didn't become ancestors.",
            "So the brain learned a rule:",
            "When in doubt — assume meaning."
          ]
        },
        {
          type: "content",
          title: "The pattern machine 🔗",
          paragraphs: [
            "Humans are not neutral observers.",
            "Your brain is constantly connecting dots:",
            "• Faces in clouds (pareidolia — even happens in 12-week-old infants)",
            "• Signals in silence",
            "• Meaning in coincidence",
            "• Stories from incomplete information",
            "This happens in your fusiform gyrus — a brain region so sensitive to patterns that it fires when you see three dots arranged like a face.",
            ": )",
            "Your brain just did it.",
            "That wasn't a face. But for a split second, your fusiform gyrus treated it like one.",
            "This happens automatically. Before logic. Before choice."
          ]
        },
        {
          type: "content",
          title: "🏀 The clustering illusion",
          imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop",
          imageAlt: "Basketball representing the hot hand illusion",
          paragraphs: [
            "In 1985, psychologist Thomas Gilovich studied basketball fans.",
            "Everyone believed in the 'hot hand' — the idea that players have streaks where they're more likely to make shots.",
            "Gilovich analyzed thousands of shots.",
            "Result? No hot hand. Just randomness.",
            "But here's what's wild: when people were shown random sequences of makes and misses, they still saw streaks.",
            "Even pure noise looks like a pattern to the human brain.",
            "Three heads in a row? Feels meaningful. But flip a coin 100 times and you'll get several streaks of 3+ in a row.",
            "That's just math being math."
          ]
        },
        {
          type: "interactive",
          title: "🎲 Pattern Detection Game",
          subtitle: "Can you spot real patterns vs. random noise?",
          interactiveType: "pattern-game",
          scenarios: [
            {
              sequence: "HHHTTT",
              isRandom: false,
              explanation: "This looks TOO perfect. Real randomness has more variation."
            },
            {
              sequence: "HTHHTH",
              isRandom: true,
              explanation: "This is genuinely random. No pattern despite what your brain wants to see."
            },
            {
              sequence: "HHHHHH",
              isRandom: false,
              explanation: "Six heads in a row is possible but unlikely (1.6% chance). Could be a weighted coin."
            }
          ]
        },
        {
          type: "content",
          title: "Pattern hunger 🍽️",
          imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
          imageAlt: "Patterns and connections the brain seeks",
          paragraphs: [
            "This constant search for meaning is sometimes called pattern hunger.",
            "The mind feels uncomfortable with gaps.",
            "In one study, researchers showed people random dot movements. When asked what they saw, most created elaborate explanations.",
            "The dots were random. But the brain demanded a story.",
            "Uncertainty feels worse than a bad explanation — so the brain fills in the blanks.",
            "Even if the story isn't true.",
            "Especially if the story feels familiar."
          ]
        },
        {
          type: "content",
          title: "Your brain on anxiety",
          paragraphs: [
            "Pattern detection goes into overdrive when you're stressed.",
            "Cortisol — your stress hormone — makes the pattern-seeking parts of your brain more active.",
            "This made sense for survival: when there's danger, you need to spot threats quickly.",
            "But in modern life it means:",
            "Anxious people see more patterns in random data.",
            "Stressed brains connect dots faster — and less accurately.",
            "When you're worried, your brain doesn't just find patterns. It finds threats."
          ]
        },
        {
          type: "content",
          title: "The gambler's fallacy 🎰",
          paragraphs: [
            "A roulette wheel hits black five times in a row.",
            "People start betting on red. 'It's due.'",
            "But the wheel has no memory. Each spin is independent. The odds haven't changed.",
            "Yet the pattern feels undeniable.",
            "This is called the gambler's fallacy — and it costs people millions every year.",
            "Your brain sees: black, black, black, black, black.",
            "Your brain thinks: RED must be next.",
            "Reality: the wheel doesn't care about patterns. Only humans do."
          ]
        },
        {
          type: "content",
          title: "Where it shows up in real life",
          paragraphs: [
            "You've experienced this when:",
            "• Someone doesn't reply and your mind writes a story",
            "• Two bad events happen and it becomes a pattern",
            "• You check your phone at 11:11 three times and think the universe is sending signs",
            "• Silence feels like a message",
            "• A coincidence feels intentional",
            "• Your Spotify shuffle plays two sad songs and you think it 'knows'",
            "The brain connects dots automatically — whether they belong together or not."
          ]
        },
        {
          type: "content",
          title: "Apophenia and conspiracy thinking 🕵️",
          paragraphs: [
            "Apophenia is the tendency to see connections between unrelated things.",
            "Everyone does this sometimes. But when it becomes extreme, it can lead to conspiracy theories.",
            "Why? Because conspiracy theories are just pattern recognition in overdrive.",
            "Nothing is random. Everything connects. Every detail has meaning.",
            "In one study, people who felt less control over their lives were more likely to see patterns in random images.",
            "When life feels chaotic, the brain compensates by finding order — even if it has to invent it."
          ]
        },
        {
          type: "content",
          title: "⚠️ The quiet danger",
          paragraphs: [
            "Patterns feel comforting.",
            "Even false ones.",
            "A bad explanation can feel safer than uncertainty.",
            "But mistaking noise for signal can lead to unnecessary fear, bad decisions, and emotional exhaustion.",
            "Real example:",
            "Someone checks their phone twice during lunch → you assume they're upset with you → you act distant → they notice and now they're actually confused.",
            "You created the pattern you feared.",
            "Not everything means something."
          ]
        },
        {
          type: "quiz",
          question: "Your friend doesn't text back for 3 hours. Your brain creates a story. What's the CAMERA view?",
          options: [
            { id: "a", text: "They're mad at me", correct: false },
            { id: "b", text: "They're busy with someone more interesting", correct: false },
            { id: "c", text: "No text received in 3 hours", correct: true },
            { id: "d", text: "They're ignoring me on purpose", correct: false }
          ],
          explanation: "The camera only sees: 'No text received in 3 hours.' Everything else is your narrator adding story. Your brain filled the silence with meaning that might not exist."
        },
        {
          type: "content",
          title: "The skill: noticing the pattern 👁️",
          paragraphs: [
            "The goal is not to stop your brain from finding patterns.",
            "That's impossible. And actually, you don't want to.",
            "Pattern recognition helps you:",
            "• Learn from experience",
            "• Predict danger",
            "• Understand people",
            "• Navigate complexity",
            "The skill is noticing when it happens — and asking if it's signal or noise.",
            "One useful question:",
            "Is this a real signal — or my brain filling silence?",
            "That pause creates space."
          ]
        },
        {
          type: "reflection",
          title: "A small experiment 🧪",
          prompt: "Think of a recent situation where you read into something.\n\nNow try this sentence:\n\n\"This may be a pattern — or it may just be noise.\"\n\nNotice what loosens.\n\nThis isn't about being right. It's about holding your conclusions more lightly.\n\nHere's another one to try when anxiety is high:\n\n\"My brain is doing what it evolved to do — find threats. But not every rustle is a predator.\""
        },
        {
          type: "quiz",
          question: "Why does the brain prefer a false pattern over no pattern?",
          options: [
            { id: "a", text: "Because it likes drama", correct: false },
            { id: "b", text: "Because humans are irrational", correct: false },
            { id: "c", text: "Because it evolved for survival, not accuracy", correct: true },
            { id: "d", text: "Because emotions override logic", correct: false }
          ],
          explanation: "Missing a real threat once = death. Seeing a fake threat = just embarrassing. Evolution chose paranoia. Better to flee from 100 rustling bushes (where 99 are wind) than to ignore the one that's a tiger."
        },
        {
          type: "quiz",
          question: "What happens to pattern recognition when you're stressed?",
          options: [
            { id: "a", text: "It becomes more accurate", correct: false },
            { id: "b", text: "It becomes more active and less accurate", correct: true },
            { id: "c", text: "It shuts down completely", correct: false },
            { id: "d", text: "It only finds positive patterns", correct: false }
          ],
          explanation: "Cortisol makes your pattern-detection systems more sensitive — which means you connect dots faster but with less accuracy. Stressed brains see more threats, even in random data."
        },
        {
          type: "content",
          title: "Closing thought 💭",
          paragraphs: [
            "The brain is a storyteller.",
            "It's been writing fiction for 200,000 years — and it's very good at it.",
            "Wisdom is knowing when the story is useful — and when it's just noise.",
            "You don't need to stop the pattern.",
            "You just need to see it.",
            "And remember:",
            "Sometimes three dots are just three dots.",
            "Even if they briefly looked like a face."
          ]
        }
      ]
    },
    {
      id: "mind-brain-power",
      subject: "mind",
      type: "lesson",
      title: "🧠 Brain Power",
      subtitle: "Discover how your amazing brain works and unlock your mental superpowers!",
      imageUrl: "images/brainpower-intro.png",
      imageAlt: "Brain Power introduction",
      sections: [
        {
          type: "content",
          title: "The Flashlight in the Dark 🔦",
          imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
          imageAlt: "Flashlight in darkness representing attention",
          paragraphs: [
            "**Welcome to Your First Superpower! ⚡**",
            "",
            "Did you know you have an incredible superpower? It's called ATTENTION, and you use it every single day!",
            "",
            "But here's the thing... most people don't know they can CONTROL this superpower. Today, you're going to learn exactly how it works. 🧠✨",
            "",
            "Ready to unlock your potential? Let's dive in!",
            "",
            "**Imagine This... 🌑**",
            "",
            "You're standing in a completely dark room. It's pitch black. You can't see anything.",
            "",
            "The room is full of stuff:",
            "• Your favorite toys 🎮",
            "• Scattered clothes 👕",
            "• Books and notebooks 📚",
            "• A desk and chair 🪑",
            "• Maybe even some snacks 🍪",
            "",
            "But you can't see ANY of it because it's so dark.",
            "",
            "Now... someone hands you a flashlight. 🔦",
            "",
            "Suddenly, you can see! But here's the catch: you can only see whatever you point the flashlight at.",
            "",
            "Everything else? Still in the dark.",
            "",
            "**That Flashlight? That's Your ATTENTION! 💡**",
            "",
            "Your attention works EXACTLY like that flashlight!",
            "",
            "🔦 The Flashlight = Your Attention",
            "🌑 The Dark Room = All the information around you",
            "✨ What the light touches = What you're focused on",
            "",
            "Right now, there are MILLIONS of things happening around you:",
            "• The hum of the air conditioner",
            "• The feeling of your clothes on your skin",
            "• The smell in the room",
            "• Sounds outside",
            "• The temperature",
            "• Your breathing",
            "• These words you're reading!",
            "",
            "But you can't focus on ALL of them at once. Your brain would explode! 🤯",
            "",
            "So your brain does something GENIUS: It points the flashlight (your attention) at just ONE thing at a time.",
            "",
            "**This Happens ALL Day Long! 🌅**",
            "",
            "Let's see when YOU use this superpower:",
            "",
            "**In Class 📝**",
            "Your teacher is talking (flashlight on teacher). Someone drops a book - BANG! (flashlight automatically jumps to the sound!) You force it back to the teacher (you're in control!)",
            "",
            "**Playing Video Games 🎮**",
            "Your flashlight is GLUED to the screen. Your mom calls your name... but you don't hear her! Why? Your flashlight isn't pointed at her voice!",
            "",
            "**At Dinner 🍽️**",
            "You're thinking about a test tomorrow (flashlight in your thoughts). Someone asks you to pass the salt. You don't hear them! Your flashlight is stuck in your head!",
            "",
            "This is NORMAL! Everyone's flashlight works this way. The question is: can you CONTROL where you point it?",
            "",
            "**Why Does This Happen? 🧪**",
            "",
            "Your brain is the most powerful computer on Earth! 🖥️✨",
            "",
            "Every single second, your brain receives about 11 MILLION bits of information:",
            "• What you see 👀",
            "• What you hear 👂",
            "• What you smell 👃",
            "• What you touch 🖐️",
            "• What you taste 👅",
            "• Your body position",
            "• Your emotions",
            "• Your memories",
            "• And SO much more!",
            "",
            "If your brain tried to process ALL of that? It would CRASH like an old computer! 💥",
            "",
            "So your brain has a genius solution: a FILTER! 🧹",
            "",
            "**Your brain's filter:**",
            "✅ Lets in: Important stuff (teacher talking, car horn, your name)",
            "❌ Blocks out: Background noise (air conditioner, clothes feeling, random sounds)",
            "",
            "This filter is your attention working automatically to keep you safe and focused!",
            "",
            "**You Have TWO Kinds of Flashlight Control! 🎮🚨**",
            "",
            "**Type 1: Top-Down (You're The Boss) 👑**",
            "",
            "This is when YOU decide where to point your flashlight.",
            "• You choose to read this lesson",
            "• You decide to do your homework",
            "• You pick which friend to listen to",
            "",
            "You're in CONTROL! This takes willpower and practice.",
            "",
            "**Type 2: Bottom-Up (Auto-Pilot) ⚡**",
            "",
            "This is when your brain AUTOMATICALLY moves your flashlight to keep you safe!",
            "• A loud BANG! → Flashlight jumps to the sound",
            "• Someone yells your name → Flashlight turns to them",
            "• A ball flies at your face → Flashlight locks on!",
            "",
            "Your brain evolved this over millions of years to protect you from danger! 🦕→🧍",
            "",
            "The BEST part? You can train your brain to be better at Type 1 (staying focused) while still keeping Type 2 (staying safe)!"
          ]
        },
        {
          type: "interactive",
          title: "🔦 Point Your Flashlight",
          subtitle: "Where are you pointing your attention? Tap one to see — that's you choosing (Top-Down)!",
          interactiveType: "flashlight",
          items: ["Teacher talking", "Phone buzz", "Window", "Your thoughts"]
        },
        {
          type: "interactive",
          title: "🦔 Cup Hedgehog",
          subtitle: "Track the hedgehog under the cups! Can you find it?",
          interactiveType: "cup-hedgehog"
        },
        {
          type: "quiz",
          question: "About how many bits of information does your brain receive per second?",
          options: [
            { id: "a", text: "~11 million", correct: true },
            { id: "b", text: "~1 million", correct: false },
            { id: "c", text: "~100 thousand", correct: false },
            { id: "d", text: "~1 billion", correct: false }
          ],
          explanation: "Your brain receives about 11 million bits per second! That's why it needs a filter - otherwise it would overload. The Gatekeeper lets only a tiny fraction through so you can focus."
        },
        {
          type: "quiz",
          question: "What is Top-Down attention?",
          options: [
            { id: "a", text: "When YOUR brain automatically focuses on a loud sound", correct: false },
            { id: "b", text: "When YOU choose where to focus (e.g. reading this lesson)", correct: true },
            { id: "c", text: "When your flashlight is off", correct: false },
            { id: "d", text: "When you're in hyperfocus mode only", correct: false }
          ],
          explanation: "Top-Down means you're the boss - you decide where to point your attention. It takes willpower. Bottom-Up is when your brain automatically grabs your attention (like a loud bang)."
        },
        {
          type: "content",
          title: "The Flashlight in the Dark — Key Takeaways 🔦",
          imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
          imageAlt: "Flashlight in darkness representing attention",
          paragraphs: [
            "**Key Takeaways 🎓**",
            "",
            "🔦 **Attention is like a flashlight** - you can only focus on one thing at a time",
            "",
            "🧠 **Your brain filters information** - it blocks out millions of things so you don't crash!",
            "",
            "👑 **Top-Down Attention** - When YOU choose where to focus (takes willpower)",
            "",
            "⚡ **Bottom-Up Attention** - When your brain automatically focuses on something (keeps you safe)",
            "",
            "💪 **You can train your focus** - Just like a muscle, practice makes you stronger!",
            "",
            "Remember: Everyone's flashlight works this way. You're not broken if you get distracted - you're human! The trick is learning to control your superpower. 🦸"
          ]
        },
        {
          type: "quiz",
          question: "What is attention like?",
          options: [
            { id: "a", text: "A flashlight in a dark room", correct: true },
            { id: "b", text: "A bucket of water", correct: false },
            { id: "c", text: "A flying bird", correct: false },
            { id: "d", text: "A math problem", correct: false }
          ],
          explanation: "Correct! Attention works just like a flashlight - you can only focus on what you 'shine' it on!"
        },
        {
          type: "content",
          title: "Your Brain's Gatekeeper 🚪",
          imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop",
          imageAlt: "Brain scan representing the brain's filter",
          paragraphs: [
            "**Meet Your Brain's Bouncer! 🕴️**",
            "",
            "Remember that filter we talked about? The one that keeps your brain from exploding with too much information?",
            "",
            "Well, it has a name: THE GATEKEEPER! 🚪🧠",
            "",
            "Today you'll learn exactly how this bouncer decides what gets into your brain's VIP club (your attention) and what gets left outside in the cold.",
            "",
            "**Your Brain is Like the Coolest Club in Town 🎉**",
            "",
            "Imagine your brain is the hottest nightclub in the world. Everyone wants to get in!",
            "",
            "Standing at the door? THE GATEKEEPER - a massive, no-nonsense bouncer. 💪",
            "",
            "Every second, MILLIONS of things are trying to get into your brain:",
            "",
            "• \"Let me in! I'm the sound of the fridge humming!\" 🔊",
            "• \"Pick me! I'm the itch on your ankle!\" 🦟",
            "• \"Notice me! I'm your teacher talking about math!\" 📐",
            "• \"Choose me! I'm that funny meme you saw yesterday!\" 😂",
            "",
            "But here's the thing: Your brain can only let a FEW things in at a time.",
            "",
            "So the Gatekeeper has to make FAST decisions: Who gets in? Who gets kicked out?",
            "",
            "**How Does the Gatekeeper Decide? 🤔**",
            "",
            "The Gatekeeper follows some pretty strict rules:",
            "",
            "**Rule #1: Keep You Alive! ☠️→✅**",
            "Anything that might hurt you IMMEDIATELY gets in!",
            "• A car horn? BOOM! Instant entry!",
            "• Something moving fast toward your face? IN!",
            "• A fire alarm? Welcome to the VIP section!",
            "",
            "**Rule #2: What You Care About 💖**",
            "Things you're interested in get priority access",
            "• Your crush's name? Instant admission!",
            "• Your favorite game? Red carpet treatment!",
            "• Boring lecture you don't care about? Sorry, not on the list!",
            "",
            "**Rule #3: What's New and Different ✨**",
            "Novel stuff gets noticed faster than boring, repetitive stuff",
            "• A new sound? Let's check it out!",
            "• The same clock ticking for hours? Ignored!",
            "• Someone wearing a crazy outfit? All eyes on them!",
            "",
            "**Rule #4: Your Goals Matter 🎯**",
            "If you're looking for something specific, the Gatekeeper watches for it",
            "• Lost your phone? Your brain is SCANNING for it!",
            "• Waiting for your friend? You'll spot them in a crowd!",
            "• Hungry? You'll notice every food sign!",
            "",
            "**When the Gatekeeper Makes Mistakes 😅**",
            "",
            "Sometimes your Gatekeeper lets the WRONG things in:",
            "",
            "**Mistake #1: The Shiny Object Problem ✨**",
            "Your Gatekeeper LOVES new and exciting things!",
            "• You're studying... but a notification pops up",
            "• The Gatekeeper thinks: 'Ooh! New! Exciting! Let it in!'",
            "• Suddenly you've lost 30 minutes on TikTok 📱",
            "",
            "**Mistake #2: The Worry Loop 😰**",
            "Your Gatekeeper thinks worries are important (trying to keep you safe!)",
            "• You're trying to sleep...",
            "• But your Gatekeeper keeps letting in thoughts about tomorrow's test",
            "• Now you're awake at 2 AM thinking about school!",
            "",
            "**Mistake #3: The Selective Hearing 🙉**",
            "When you're focused on something you love, the Gatekeeper blocks EVERYTHING else",
            "• You're gaming...",
            "• Mom calls you 5 times...",
            "• Your Gatekeeper blocked it all! (Now you're in trouble!)",
            "",
            "The good news? You can TRAIN your Gatekeeper to make better decisions! 💪",
            "",
            "**What's Really Happening in There? 🧬**",
            "",
            "Your Gatekeeper isn't actually a tiny person in your brain (surprise! 😄)",
            "",
            "It's a complex system involving several brain parts:",
            "",
            "**The Thalamus (The Main Bouncer) 🧠**",
            "• Located in the center of your brain",
            "• Routes all incoming information (except smell)",
            "• Decides what goes to consciousness and what doesn't",
            "",
            "**The Reticular Activating System (RAS) 📡**",
            "• Your brain's alarm system",
            "• Constantly scanning for danger or important stuff",
            "• Only lets through about 1% of information!",
            "",
            "**The Prefrontal Cortex (The Manager) 👔**",
            "• The 'thinking' part of your brain",
            "• Can OVERRIDE the automatic gatekeeper",
            "• This is where willpower comes from!",
            "",
            "Here's the coolest part: These systems work together in about 0.05 seconds - faster than you can blink! ⚡",
            "",
            "**Key Takeaways 🎓**",
            "",
            "🚪 **The Gatekeeper** - Your brain's filter that decides what information gets through",
            "",
            "⚡ **Works automatically** - Processes millions of decisions per second without you thinking",
            "",
            "🎯 **Follows rules** - Safety first, then interest, novelty, and your goals",
            "",
            "🤔 **Makes mistakes** - Can be distracted by shiny objects or let in too many worries",
            "",
            "💪 **Can be trained** - Practice and awareness make it smarter!",
            "",
            "🧠 **Multiple brain parts** - Thalamus, RAS, and Prefrontal Cortex work together",
            "",
            "Remember: Your Gatekeeper is trying its best to help you! Understanding how it works means you can work WITH it instead of fighting against it! 🤝"
          ]
        },
        {
          type: "interactive",
          title: "🔍 Attention Filter Challenge",
          subtitle: "How many distractions can your Gatekeeper handle?",
          interactiveType: "attention-game",
          instructions: "Focus on counting the red circles. Ignore everything else!",
          difficulty: "medium"
        },
        {
          type: "quiz",
          question: "Which Gatekeeper rule explains why you notice your name in a noisy room?",
          options: [
            { id: "a", text: "Keep you alive", correct: false },
            { id: "b", text: "What you care about", correct: true },
            { id: "c", text: "What's new and different", correct: false },
            { id: "d", text: "Your goals", correct: false }
          ],
          explanation: "Your name is something you care about, so the Gatekeeper gives it priority and lets it through even in a noisy room. That's Rule #2!"
        },
        {
          type: "quiz",
          question: "Which rule does the Gatekeeper follow FIRST?",
          options: [
            { id: "a", text: "Keep you entertained", correct: false },
            { id: "b", text: "Keep you alive", correct: true },
            { id: "c", text: "Keep you smart", correct: false },
            { id: "d", text: "Keep you awake", correct: false }
          ],
          explanation: "Exactly! Safety first - your Gatekeeper's #1 priority is keeping you alive!"
        },
        {
          type: "content",
          title: "The Zoom Lens 🔍",
          imageUrl: "https://images.unsplash.com/photo-1516307365426-bea591f050c9?w=800&h=400&fit=crop",
          imageAlt: "Camera lens representing focus and zoom levels",
          paragraphs: [
            "**Your Attention Has Settings! 📸**",
            "",
            "Pop quiz: Is your attention always the same?",
            "",
            "Nope! Your attention is like a camera lens - it can ZOOM in and ZOOM out! 🔍↔️",
            "",
            "Sometimes you need to see the BIG PICTURE (like in a soccer game).",
            "Sometimes you need LASER FOCUS (like threading a needle).",
            "",
            "Today you'll master all three zoom levels and learn when to use each one! 📸✨",
            "",
            "**Three Zoom Levels, One Amazing Brain! 🧠**",
            "",
            "**Level 1: BROAD FOCUS (The Floodlight) 💡**",
            "Think: Stadium lights lighting up a whole field",
            "• You're aware of EVERYTHING around you",
            "• Not focused on one specific thing",
            "• Monitoring the whole environment",
            "",
            "**Level 2: NARROW FOCUS (The Spotlight) 🔦**",
            "Think: Flashlight pointing at one specific thing",
            "• You're focused on ONE main task",
            "• Background stuff is dimmed but still there",
            "• Can shift to something else if needed",
            "",
            "**Level 3: HYPERFOCUS (The Laser) 🔴**",
            "Think: Laser beam so intense it cuts through metal",
            "• You're LOCKED IN on one thing",
            "• Everything else disappears",
            "• Time seems to stop",
            "• You might not hear your own name!",
            "",
            "None of these is 'better' - they're all useful for different situations! The trick is knowing which one to use and when! 🎯",
            "",
            "**When You Need the Big Picture 🌅**",
            "",
            "**What is Broad Focus?**",
            "Your attention spreads out like floodlights at a stadium. You're not focused on any ONE thing - you're monitoring EVERYTHING.",
            "",
            "**When is it useful?**",
            "✅ Walking through a crowded hallway (avoiding people)",
            "✅ Playing sports like soccer or basketball (watching the whole field/court)",
            "✅ Driving a car (watching for hazards everywhere)",
            "✅ At a party (being aware of different conversations)",
            "✅ Hiking in nature (enjoying everything around you)",
            "",
            "**The Downside:**",
            "• Hard to do detailed work (like homework)",
            "• Can't remember specific details well",
            "• Easy to miss important information in the 'flood'",
            "",
            "Think of it like this: You're the security guard watching 10 camera screens at once. You see everything, but you're not zoomed in on anything! 📹📹📹",
            "",
            "**The Goldilocks Zone 🐻**",
            "",
            "**What is Narrow Focus?**",
            "Your attention is pointed at one main thing, but you're still aware of your surroundings. It's the 'just right' level for most tasks!",
            "",
            "**When is it useful?**",
            "✅ Doing homework (focused on the problem, but you'd hear the fire alarm)",
            "✅ Having a conversation (focused on the person, but aware of the room)",
            "✅ Reading a book (in the story, but can pause if someone calls you)",
            "✅ Cooking (watching the pan, but monitoring the timer)",
            "✅ Playing an instrument (focused on the music, aware of your fingers)",
            "",
            "**The Sweet Spot:**",
            "• Detailed enough to do good work",
            "• Flexible enough to stay safe",
            "• Sustainable for hours!",
            "",
            "This is where your brain naturally wants to be for most activities. It's like working with one spotlight on your main stage! 🎭",
            "",
            "**The Zone: When Nothing Else Exists ⚡**",
            "",
            "**What is Hyperfocus?**",
            "Your attention becomes a LASER BEAM so intense that everything else completely disappears. This is 'the zone' athletes talk about!",
            "",
            "**When does it happen?**",
            "• Playing your favorite video game for hours 🎮",
            "• Reading a book so good you miss your stop on the bus 📖",
            "• Drawing or creating art and forgetting to eat 🎨",
            "• Solving a puzzle or building something complex 🧩",
            "• Practicing a skill you're passionate about 🎸",
            "",
            "**What it feels like:**",
            "• Time disappears (hours feel like minutes!)",
            "• You don't feel hungry, tired, or notice discomfort",
            "• Someone can call your name and you don't hear it",
            "• You're completely absorbed",
            "• Everything flows effortlessly",
            "",
            "**The Superpower:**",
            "✅ Incredible productivity on that ONE thing",
            "✅ Deep learning and skill building",
            "✅ Amazing feeling of 'flow'",
            "✅ Some of your best work happens here!",
            "",
            "**The Danger:**",
            "❌ You might miss important things (dinner call, appointments)",
            "❌ Can't sustain it for everything (your brain gets exhausted!)",
            "❌ Hard to control when it turns on/off",
            "❌ Can ignore basic needs (food, bathroom, sleep!)",
            "",
            "**The Truth About Hyperfocus:**",
            "Some brains (especially ADHD brains!) experience this MORE than others. It's like a superpower that's hard to control. You can't force it - it happens when you're truly engaged with something! 🚀"
          ]
        },
        {
          type: "quiz",
          question: "When is Hyperfocus most useful?",
          options: [
            { id: "a", text: "Deep work on one thing when you're fully absorbed", correct: true },
            { id: "b", text: "Monitoring a crowded room", correct: false },
            { id: "c", text: "Doing homework with the TV on", correct: false },
            { id: "d", text: "Watching 10 things at once", correct: false }
          ],
          explanation: "Hyperfocus is best for deep work on one thing when you're fully absorbed - like coding, reading, or creating. Crowded rooms and multitasking need Broad or Narrow focus!"
        },
        {
          type: "content",
          title: "The Zoom Lens — Problems and ADHD 🔍",
          imageUrl: "https://images.unsplash.com/photo-1516307365426-bea591f050c9?w=800&h=400&fit=crop",
          imageAlt: "Camera lens representing focus and zoom levels",
          paragraphs: [
            "**Common Zoom Problems:**",
            "",
            "**Problem 1: Stuck in Broad Focus 😵**",
            "• Trying to study but mind keeps wandering to everything else",
            "• Can't seem to 'zoom in' on the work",
            "• Solution: Reduce distractions! (Fewer things to monitor = easier to narrow focus)",
            "",
            "**Problem 2: Wrong Level Hyperfocus 🎮📱**",
            "• Hyperfocused on your phone when you should be doing homework",
            "• Can't 'zoom out' even though you need to",
            "• Solution: Remove the hyperfocus trigger BEFORE you start the real task!",
            "",
            "**Problem 3: Can't Find Hyperfocus When You Want It 😤**",
            "• Trying to focus deeply on boring homework",
            "• Your brain won't give you the laser!",
            "• Solution: Hyperfocus can't be forced - make the task more engaging or use narrow focus instead!",
            "",
            "**The ADHD Zoom Lens 🎲**",
            "",
            "Some brains have 'zoom controls' that work differently!",
            "",
            "**ADHD Brains: The Tricky Zoom Lens**",
            "",
            "People with ADHD often experience:",
            "",
            "**1. Zoom Roulette 🎰**",
            "The zoom level changes randomly!",
            "• One minute: Broad focus (distracted by everything)",
            "• Next minute: Hyperfocus (lost in a video for hours)",
            "• Hard to choose which level to use",
            "",
            "**2. The Hyperfocus Superpower/Curse ⚡😰**",
            "ADHD brains can achieve INCREDIBLE hyperfocus on things they love!",
            "• Build an entire LEGO city in one sitting",
            "• Code for 12 hours straight",
            "• Read an entire book series in a weekend",
            "",
            "BUT... they can't turn it on for boring stuff (like homework they don't care about).",
            "",
            "**3. The 'I Can't Find the Narrow Focus' Problem 🔍❓**",
            "The middle setting (Narrow Focus) can be the hardest!",
            "• Either too distracted (Broad) or too absorbed (Hyper)",
            "• The 'Goldilocks zone' feels impossible to find",
            "",
            "**Why This Happens:**",
            "ADHD brains have different levels of dopamine (a brain chemical). Dopamine helps control attention. Less dopamine = harder to control the zoom!",
            "",
            "**The Good News:**",
            "• Strategies can help! (We'll learn them!)",
            "• Hyperfocus is an actual SUPERPOWER for the right tasks!",
            "• Understanding your zoom lens is the first step to using it better! 💪",
            "",
            "Remember: Different doesn't mean broken! It means your zoom lens has different settings, and you need to learn YOUR manual! 📖✨",
            "",
            "**Key Takeaways 🎓**",
            "",
            "🔦 **Broad Focus (Floodlight)** - For monitoring everything (sports, crowded places, social situations)",
            "",
            "🔍 **Narrow Focus (Spotlight)** - For most tasks (homework, conversations, daily activities)",
            "",
            "⚡ **Hyperfocus (Laser)** - For deep work (when completely absorbed, time disappears)",
            "",
            "🎯 **Right tool for the job** - Different situations need different zoom levels!",
            "",
            "🔄 **You can learn to switch** - With practice, you can control your zoom better!",
            "",
            "🧠 **ADHD brains zoom differently** - Not broken, just different controls!",
            "",
            "💪 **Practice makes better** - Zoom control is a skill you can improve!",
            "",
            "Remember: You have a camera lens in your brain, and YOU can learn to be the photographer! Sometimes you need the wide shot, sometimes the close-up, and sometimes you need to capture every tiny detail! 📸✨"
          ]
        },
        {
          type: "quiz",
          question: "You're studying but keep checking your phone. Which zoom level are you stuck in?",
          options: [
            { id: "a", text: "Broad Focus - distracted by everything around you", correct: true },
            { id: "b", text: "Narrow Focus - successfully focused on studying", correct: false },
            { id: "c", text: "Hyperfocus - deeply absorbed in studying", correct: false },
            { id: "d", text: "No focus at all", correct: false }
          ],
          explanation: "You're in Broad Focus mode - your Gatekeeper is letting in too many signals (phone notifications, sounds, thoughts). You need to reduce distractions to shift into Narrow Focus for effective studying."
        },
        {
          type: "quiz",
          question: "Which zoom level is best for walking through a crowded hallway?",
          options: [
            { id: "a", text: "Broad Focus", correct: true },
            { id: "b", text: "Narrow Focus", correct: false },
            { id: "c", text: "Hyperfocus", correct: false },
            { id: "d", text: "No focus needed", correct: false }
          ],
          explanation: "Correct! Broad focus lets you monitor everything around you and avoid bumping into people!"
        },
        {
          type: "content",
          title: "The Stroop Challenge 🎨",
          imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
          imageAlt: "Patterns and colors representing the Stroop effect",
          paragraphs: [
            "**Time to Put Your Brain to the TEST! 🧪**",
            "",
            "You've learned about attention, the Gatekeeper, and zoom levels.",
            "",
            "But here's the question: How GOOD is your attention really? 🤔",
            "",
            "Today you're going to learn about one of the most famous attention tests in psychology: The Stroop Test! 🎨",
            "",
            "This test has been used by scientists for almost 100 years to study how the brain handles conflicting information!",
            "",
            "It's going to be HARD. It's going to be FRUSTRATING. And it's going to teach you something AMAZING about how your brain works! 🧠⚡",
            "",
            "**Here's What You Need to Know 🎯**",
            "",
            "In the Stroop Test, you see COLOR WORDS:",
            "RED",
            "BLUE",
            "GREEN",
            "YELLOW",
            "",
            "But here's the twist...",
            "",
            "The WORD and the INK COLOR don't always match! 🌈≠📝",
            "",
            "For example:",
            "• The word 'BLUE' might be written in red ink 🔴",
            "• The word 'GREEN' might be written in yellow ink 🟡",
            "• The word 'RED' might be written in green ink 🟢",
            "",
            "**Your Challenge:**",
            "Say (or click) the INK COLOR, NOT the word!",
            "",
            "Sounds easy, right? 😏",
            "",
            "Your brain is about to go to WAR with itself, and you're going to witness it live! Let's see why this is so hard! 🧠⚔️",
            "",
            "**Your Brain's Civil War ⚔️**",
            "",
            "Here's what happens inside your brain during the Stroop Test:",
            "",
            "**Part 1 of Your Brain (Reading System): 📖**",
            "'I see the letters R-E-D! That spells RED! The answer is RED!'",
            "",
            "**Part 2 of Your Brain (Color System): 🎨**",
            "'Wait! I see the ink is BLUE! The answer is BLUE!'",
            "",
            "**Your Conscious Mind: 😰**",
            "'Who do I listen to?! MAKE IT STOP!'",
            "",
            "**Why Reading Wins (Usually):**",
            "",
            "You've practiced reading THOUSANDS of times. Your brain has a SUPER HIGHWAY for reading.",
            "",
            "You don't practice 'ignoring words and only seeing colors' very often. That's like a tiny dirt path in your brain.",
            "",
            "So the reading highway SCREAMS louder than the color path! 📢",
            "",
            "**The Result:**",
            "Your brain has to fight itself! The reading system tries to take over, but you have to force your attention to the color instead.",
            "",
            "This is your Prefrontal Cortex (the 'boss' of your brain) having to work EXTRA HARD to override your automatic reading system! 💪🧠",
            "",
            "This is attention in ACTION! 🎯",
            "",
            "**What Just Happened? 🧠**",
            "",
            "Let's break down what your brain just went through:",
            "",
            "**Step 1: Visual Input 👀**",
            "Your eyes see the colored word and send signals to your brain",
            "",
            "**Step 2: Two Pathways Activate Simultaneously 🛤️🛤️**",
            "• Reading Pathway: Identifies the WORD (super fast, automatic)",
            "• Color Pathway: Identifies the INK COLOR (slower, requires attention)",
            "",
            "**Step 3: Conflict Detection! ⚠️**",
            "Your brain notices: 'Wait, these don't match! I have TWO answers!'",
            "This happens in a part of your brain called the Anterior Cingulate Cortex (ACC) - the 'error detector'!",
            "",
            "**Step 4: The Boss Steps In 👔**",
            "Your Prefrontal Cortex (the thinking part) has to OVERRIDE the automatic reading response",
            "This takes willpower and slows you down!",
            "",
            "**Step 5: Response Suppression 🛑**",
            "You have to BLOCK the word (reading pathway) and only respond to the color",
            "This is called 'inhibition' - stopping an automatic response!",
            "",
            "**The Result:**",
            "• Matching trials: Fast! (~0.5 seconds) ⚡",
            "• Conflict trials: Slow! (~1.2 seconds) 🐌",
            "• More errors on conflict trials",
            "• Your brain literally works HARDER (uses more energy/oxygen!)",
            "",
            "Scientists can actually SEE this on brain scans! The conflict lights up your prefrontal cortex like a Christmas tree! 🎄🧠",
            "",
            "**Real Life Stroop Moments 🌍**",
            "",
            "The Stroop Effect isn't just a lab test - it happens all the time in real life!",
            "",
            "**Example 1: The Wrong Name Slip 👥**",
            "You have a friend named Sarah and a friend named Emma.",
            "You're talking to Sarah but accidentally call her Emma!",
            "Why? Your brain's 'name pathway' grabbed the wrong automatic response!",
            "",
            "**Example 2: Left vs. Right Confusion 👈👉**",
            "Someone says 'Turn left!' but points right.",
            "Your brain: 'Wait, which do I follow - the word or the pointing?!'",
            "You freeze for a second while your brain sorts it out!",
            "",
            "**Example 3: 'Don't Think About Pink Elephants!' 🐘**",
            "As soon as someone says that, what do you think about?",
            "PINK ELEPHANTS!",
            "Your brain can't 'unsee' or 'unhear' information once it's there!",
            "",
            "**Example 4: Emoji Confusion 😊😢**",
            "Someone texts 'I'm fine 😭' (crying emoji)",
            "Your brain: 'The words say fine, but the emoji says NOT fine! What's the truth?!'",
            "You have to override the automatic 'fine = okay' response!",
            "",
            "**The Lesson:**",
            "Your brain has lots of automatic pathways (habits, reading, associations). When you need to override them, it takes EFFORT and ATTENTION! That's why new things feel hard at first! 💪",
            "",
            "**Key Takeaways 🎓**",
            "",
            "🎨 **The Stroop Effect** - When your brain gets conflicting information, it has to work harder to respond correctly",
            "",
            "📖 **Automatic Pathways** - Reading is so practiced it happens automatically and is hard to ignore",
            "",
            "🧠 **Prefrontal Cortex** - The 'boss' part of your brain that overrides automatic responses (uses the most energy!)",
            "",
            "⚔️ **Brain Conflict** - Different parts of your brain can 'compete' for control of your attention",
            "",
            "🐌 **Conflict = Slower** - When you have to override automatic responses, you slow down and make more errors",
            "",
            "🌈 **Different Brains** - ADHD, Autism, Dyslexia all experience the Stroop Effect differently (not better or worse, just different!)",
            "",
            "💪 **You Can Train It** - With practice and strategies, your brain gets better at handling conflict!",
            "",
            "🎯 **Real Life Application** - This isn't just a game - it teaches you how attention works when you face conflicting information!",
            "",
            "Remember: Every time your brain has to override an automatic response, you're exercising your attention muscles! The Stroop Test is like a gym for your prefrontal cortex! 🏋️🧠"
          ]
        },
        {
          type: "quiz",
          question: "In the Stroop Test, you're supposed to say:",
          options: [
            { id: "a", text: "The word you read", correct: false },
            { id: "b", text: "The ink color", correct: true },
            { id: "c", text: "Both the word and color", correct: false },
            { id: "d", text: "Whatever you want", correct: false }
          ],
          explanation: "Correct! You need to name the ink color and ignore the word - which is hard because reading is automatic!"
        },
        {
          type: "content",
          title: "The Brain Test Challenge 🎮",
          imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=400&fit=crop",
          imageAlt: "Neural network representing brain challenges",
          paragraphs: [
            "**Time for a Brain Challenge Mashup! 🎯**",
            "",
            "You've learned SO MUCH about attention!",
            "",
            "But can you USE what you've learned?",
            "",
            "This is where you prove you've mastered the Superpower of Attention! 🦸‍♂️",
            "",
            "**What These Challenges Taught You! 🎓**",
            "",
            "🔄 **Attention switching is exhausting** - Every switch costs mental energy",
            "",
            "🚪 **Filtering is HARD** - Your Gatekeeper processes millions of decisions, and you just felt what it's like to do a few!",
            "",
            "🔍 **Context determines zoom** - Different situations need different focus levels",
            "",
            "🐻 **You can't 'un-think' things** - Telling yourself NOT to think about something makes you think about it more",
            "",
            "⏱️ **Sustained focus has limits** - Your attention naturally wanders after 7-10 minutes",
            "",
            "🎯 **Distractions are powerful** - Bottom-Up attention is STRONG and automatic",
            "",
            "🤹 **Multitasking doesn't exist** - You're just switching quickly (and performing worse!)",
            "",
            "💪 **Practice makes better** - Every challenge helps train your attention muscles!",
            "",
            "🧠 **Self-awareness is key** - Understanding YOUR attention patterns helps you work WITH your brain, not against it!",
            "",
            "Remember:",
            "These challenges are HARD for everyone! If you struggled, that's completely normal! The goal isn't to be perfect - it's to UNDERSTAND how your amazing brain works so you can use it better! 🚀"
          ]
        },
        {
          type: "quiz",
          question: "True multitasking (doing two complex tasks simultaneously) is:",
          options: [
            { id: "a", text: "Possible with practice", correct: false },
            { id: "b", text: "Only possible for smart people", correct: false },
            { id: "c", text: "A myth - you're just rapidly switching", correct: true },
            { id: "d", text: "Easy for everyone", correct: false }
          ],
          explanation: "Exactly! True multitasking is a myth. Your brain rapidly switches between tasks, which makes both tasks suffer!"
        },
        {
          type: "content",
          title: "The Ultimate Gaming Setup 🎮",
          imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
          imageAlt: "Brain structure representing the command center",
          paragraphs: [
            "**Welcome to THE COMMAND CENTER! 🏰**",
            "",
            "You've learned all about attention - the SUPERPOWER.",
            "",
            "But where does this superpower come from?",
            "",
            "From the most powerful computer on Earth: YOUR BRAIN! 🧠💻",
            "",
            "Today you're going to explore this incredible machine! We're talking:",
            "• Processing speed faster than any gaming PC",
            "• Storage capacity bigger than the entire internet",
            "• Energy efficiency that makes the best tech look wasteful",
            "• Self-repair capabilities that would make any engineer jealous",
            "",
            "And it all fits in something the size of two fists! 👊👊",
            "",
            "Ready to meet YOUR command center? Let's dive in! 🚀",
            "",
            "**Your Brain by the Numbers 🔢**",
            "",
            "Let's start with some mind-blowing facts:",
            "",
            "**Size & Weight:**",
            "• Weight: ~3 pounds (1.4 kg) - about the size of a large cantaloupe! 🍈",
            "• Volume: ~1,300 cubic centimeters",
            "• Percentage of body weight: ~2%",
            "• Percentage of body's energy use: ~20%! 🔋",
            "",
            "**Processing Power:**",
            "• Neurons: ~86 BILLION brain cells! 🤯",
            "• Connections: Each neuron connects to ~1,000-10,000 others!",
            "• Total connections: ~100 TRILLION synapses!",
            "• Speed: Signals travel up to 268 mph (432 km/h)! ⚡",
            "",
            "**To put that in perspective:**",
            "If your brain was a computer:",
            "• Processing power: 1 EXAFLOP (1 quintillion calculations per second!)",
            "• Storage: ~2.5 PETABYTES (that's 2,500,000 gigabytes!)",
            "• The world's fastest supercomputer in 2024 can't match your brain!",
            "",
            "And your brain does all this while using just ~20 watts of power - less than a light bulb! 💡",
            "",
            "**The Craziest Part:**",
            "You're using this INSANE supercomputer right now to read these words! 🧠✨",
            "",
            "**The Brain's Neighborhoods 🗺️**",
            "",
            "Your brain has different 'neighborhoods' - regions that specialize in different jobs!",
            "",
            "**1. THE FRONTAL LOBE (The Boss) 👔**",
            "**Location:** Front of your brain, behind your forehead",
            "**Jobs:**",
            "• Planning and decision-making",
            "• Personality and emotions",
            "• Impulse control (stopping yourself from doing dumb stuff!)",
            "• Movement control",
            "• Speech production",
            "",
            "**Fun Fact:** This is the LAST part of your brain to fully develop (around age 25!) That's why teenagers take more risks! 🎢",
            "",
            "**2. THE PARIETAL LOBE (The Sensor) 🖐️**",
            "**Location:** Top and back of your brain",
            "**Jobs:**",
            "• Processing touch sensations",
            "• Spatial awareness (knowing where your body is)",
            "• Math and language processing",
            "• Integration of senses",
            "",
            "**Fun Fact:** This helps you touch your nose with your eyes closed! You 'know' where your nose is without looking! 👃",
            "",
            "**3. THE TEMPORAL LOBE (The Recorder) 🎧**",
            "**Location:** Sides of your brain, near your ears",
            "**Jobs:**",
            "• Processing sounds and language",
            "• Memory formation",
            "• Face recognition",
            "• Emotions",
            "",
            "**Fun Fact:** Damage here can make you unable to recognize faces (even your own family!) - a condition called prosopagnosia! 😱",
            "",
            "**4. THE OCCIPITAL LOBE (The Projector) 👁️**",
            "**Location:** Very back of your brain",
            "**Jobs:**",
            "• Processing everything you see",
            "• Color recognition",
            "• Depth perception",
            "• Visual memory",
            "",
            "**Fun Fact:** Everything you see is actually UPSIDE DOWN when it hits your eye! This part flips it right-side up! 🙃",
            "",
            "**5. THE CEREBELLUM (The Coordinator) ⚖️**",
            "**Location:** Bottom back of your brain, looks wrinkly!",
            "**Jobs:**",
            "• Balance and coordination",
            "• Fine motor control",
            "• Muscle memory (like riding a bike)",
            "• Some learning functions",
            "",
            "**Fun Fact:** Contains MORE neurons than the entire rest of your brain! Half your brain cells are here! 🤯",
            "",
            "**6. THE BRAIN STEM (The Life Support) 💓**",
            "**Location:** Bottom of your brain, connects to spine",
            "**Jobs:**",
            "• Breathing (automatic!)",
            "• Heart rate",
            "• Sleep/wake cycles",
            "• Swallowing and sneezing",
            "",
            "**Fun Fact:** You could lose huge chunks of your brain and survive, but damage the brain stem and you're in BIG trouble! It's the most critical part! ⚠️",
            "",
            "**Brain Fuel: What Powers This Machine? 🔋**",
            "",
            "Your brain needs fuel to run! Here's what powers your command center:",
            "",
            "**Fuel #1: GLUCOSE (Sugar) 🍬**",
            "• Your brain runs on sugar (from food you eat)!",
            "• Uses ~20% of your body's glucose supply",
            "• Can't store glucose - needs constant supply!",
            "• Low glucose = brain fog, poor focus, grumpiness 😤",
            "",
            "**That's why:**",
            "• Breakfast matters for school! (Fuels your brain!)",
            "• You feel dumb when hungry! (Brain is low on fuel!)",
            "• Studying on empty stomach is HARD! (No power!)",
            "",
            "**Fuel #2: OXYGEN 💨**",
            "• Carried by blood to brain cells",
            "• Brain uses ~20% of your body's oxygen!",
            "• Can't function without it for even a few minutes!",
            "• Deep breathing = more oxygen = better thinking! 🧘",
            "",
            "**That's why:**",
            "• Exercise helps you think better! (More oxygen!)",
            "• Stuffy rooms make you tired! (Less oxygen!)",
            "• Taking a walk 'clears your head!' (Oxygen boost!)",
            "",
            "**Fuel #3: WATER 💧**",
            "• Your brain is ~75% water!",
            "• Even small dehydration hurts performance!",
            "• Water helps nutrients reach brain cells",
            "",
            "**That's why:**",
            "• Drinking water during tests helps! (Brain hydration!)",
            "• Headaches when dehydrated! (Brain needs water!)",
            "• You can't think when thirsty! (Dry brain!)",
            "",
            "**Fuel #4: SLEEP 😴**",
            "• Brain cleans out waste products during sleep!",
            "• Consolidates memories (moves them to long-term storage)",
            "• Repairs connections and recharges",
            "",
            "**That's why:**",
            "• All-nighters HURT learning! (Brain can't save memories!)",
            "• You're dumb when tired! (Brain is dirty and low-power!)",
            "• 'Sleep on it' actually works! (Brain processes while you sleep!)",
            "",
            "**Pro Tips for Maximum Brain Power:**",
            "✅ Eat breakfast (brain fuel!)",
            "✅ Drink water regularly (brain hydration!)",
            "✅ Take breaks outdoors (oxygen boost!)",
            "✅ Get 8-10 hours of sleep (brain maintenance!)",
            "✅ Exercise (pumps oxygen and glucose!)",
            "",
            "Your brain is like a gaming PC - it NEEDS good power supply or it lags! 🎮⚡",
            "",
            "**Key Takeaways 🎓**",
            "",
            "🎮 **Your brain is like the ultimate gaming rig** - but millions of times more powerful than any computer!",
            "",
            "🔢 **86 billion neurons** - with 100 trillion connections, processing at exaflop speeds!",
            "",
            "🗺️ **Different brain regions** - Frontal, Parietal, Temporal, Occipital, Cerebellum, Brain Stem - each with specialized jobs!",
            "",
            "✨ **Six superpowers** - Pattern recognition, creativity, emotional intelligence, adaptation, energy efficiency, and multisensory integration!",
            "",
            "🔋 **Runs on glucose, oxygen, water, and sleep** - Your brain needs good fuel to perform well!",
            "",
            "🧠 **Most complex object in the universe** - Scientists are still discovering new things about it every day!",
            "",
            "Remember: You're walking around with the most powerful, most complex, most amazing computer ever created! It's more valuable than any gaming PC, any supercomputer, any AI system! 💎",
            "",
            "And it's YOURS! Treat it well (fuel, sleep, exercise), train it (practice, learning), and watch it become even more incredible! 🚀"
          ]
        },
        {
          type: "quiz",
          question: "Which brain region is called 'The Boss' and controls planning and decisions?",
          options: [
            { id: "a", text: "Cerebellum", correct: false },
            { id: "b", text: "Frontal Lobe", correct: true },
            { id: "c", text: "Occipital Lobe", correct: false },
            { id: "d", text: "Brain Stem", correct: false }
          ],
          explanation: "Correct! The Frontal Lobe is like the CEO of your brain, handling all the executive functions!"
        },
        {
          type: "content",
          title: "The Neuron Highway 🛣️",
          imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop",
          imageAlt: "Neural pathways and brain connections",
          paragraphs: [
            "**Coming Soon!**",
            "",
            "In this lesson, you'll discover:",
            "• How neurons are structured (cell body, dendrites, axon, myelin)",
            "• How electrical signals travel through your brain",
            "• What synapses are and how neurons communicate",
            "• How neurotransmitters carry messages between neurons",
            "• How neural pathways form and strengthen",
            "",
            "This content is being developed! Check back soon! 🚀"
          ]
        },
        {
          type: "content",
          title: "Building Brain Roads 🏗️",
          imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=400&fit=crop",
          imageAlt: "Neural pathways representing neuroplasticity",
          paragraphs: [
            "**Coming Soon!**",
            "",
            "In this lesson, you'll learn about:",
            "• Neuroplasticity - how your brain physically changes",
            "• How practice builds stronger neural connections",
            "• The role of myelin in becoming an expert",
            "• Why 'use it or lose it' is real (pruning)",
            "• Growth mindset and the power of 'yet'",
            "",
            "This content is being developed! Check back soon! 🚀"
          ]
        },
        {
          type: "content",
          title: "Different Operating Systems 💻",
          imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
          imageAlt: "Psychology and diverse thinking",
          paragraphs: [
            "**Not All Brains Work the Same Way! 🧠≠🧠**",
            "",
            "**Neurotypical vs Neurodivergent**",
            "• **Neurotypical** - Brain that works in ways society considers 'typical'",
            "• **Neurodivergent** - Brain that works differently (ADHD, Autism, Dyslexia, and more)",
            "",
            "Neither is better or worse - just different! Like having different operating systems! 🖥️",
            "",
            "**ADHD Brains: The Creative Chaos 💥**",
            "**How it's different:**",
            "• Attention Differences - Harder to control where focus goes, but can achieve incredible hyperfocus",
            "• Dopamine Levels - Lower baseline dopamine affects motivation and reward",
            "• Time Blindness - Harder to estimate time passing",
            "• Working Memory - May struggle to hold multiple things in mind",
            "",
            "**Superpowers:**",
            "✨ Hyperfocus on passion projects",
            "✨ Creative problem-solving",
            "✨ High energy and enthusiasm",
            "✨ Thinking outside the box",
            "✨ Noticing details others miss",
            "",
            "**Autistic Brains: The Detail Masters 🧩**",
            "**How it's different:**",
            "• Detail-Focused Processing - Notices small details, patterns, and inconsistencies",
            "• Sensory Processing - May be more/less sensitive to sounds, lights, textures",
            "• Social Communication - Processes social cues differently",
            "• Special Interests - Deep, passionate focus on specific topics",
            "",
            "**Superpowers:**",
            "✨ Exceptional pattern recognition",
            "✨ Honest and direct communication",
            "✨ Deep expertise in areas of interest",
            "✨ Logical thinking",
            "✨ Attention to detail",
            "",
            "**Dyslexic Brains: The Visual Thinkers 📚**",
            "**How it's different:**",
            "• Language Processing - Processes written language differently",
            "• Phonological Awareness - May struggle with sound-symbol connections",
            "• Reading Speed - Often reads more slowly (but not less intelligently!)",
            "",
            "**Superpowers:**",
            "✨ Spatial reasoning and 3D thinking",
            "✨ Creative problem-solving",
            "✨ Big-picture thinking",
            "✨ Storytelling abilities",
            "✨ Visual memory",
            "",
            "**Remember: Different ≠ Broken!**",
            "Every brain type has unique strengths and challenges. Understanding YOUR brain helps you:",
            "✅ Work WITH your brain instead of against it",
            "✅ Leverage your unique strengths",
            "✅ Find strategies that actually work for YOU",
            "✅ Celebrate what makes you unique! 🌟"
          ]
        },
        {
          type: "quiz",
          question: "Which is a common ADHD superpower?",
          options: [
            { id: "a", text: "Hyperfocus on passion projects", correct: true },
            { id: "b", text: "Perfect time estimation", correct: false },
            { id: "c", text: "Never getting distracted", correct: false },
            { id: "d", text: "Preferring routine over novelty", correct: false }
          ],
          explanation: "ADHD brains often have the superpower of incredible hyperfocus on things they love - like building, creating, or diving deep into a topic. Different doesn't mean broken!"
        },
        {
          type: "content",
          title: "The Chemistry Lab ⚗️",
          imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b2da0?w=800&h=400&fit=crop",
          imageAlt: "Chemistry lab representing neurotransmitters",
          paragraphs: [
            "**The Brain Chemistry Lab ⚗️**",
            "",
            "**Dopamine - The Motivation Molecule**",
            "**What it does:** Reward, motivation, focus, pleasure",
            "**Low levels:** Lack of motivation, difficulty focusing, anhedonia (can't feel pleasure)",
            "**High levels:** Increased motivation, sometimes impulsivity",
            "",
            "**Serotonin - The Mood Stabilizer**",
            "**What it does:** Mood regulation, sleep, appetite, social behavior",
            "**Low levels:** Depression, anxiety, sleep problems",
            "**Balanced levels:** Emotional stability, good sleep, contentment",
            "",
            "**GABA - The Calming Chemical**",
            "**What it does:** Reduces brain activity, promotes calmness",
            "**Low levels:** Anxiety, racing thoughts, difficulty relaxing",
            "**Balanced levels:** Calm, relaxed, can handle stress",
            "",
            "**Norepinephrine - The Alertness Agent**",
            "**What it does:** Alertness, focus, stress response",
            "**Low levels:** Brain fog, low energy, lack of focus",
            "**High levels:** Anxiety, stress, hypervigilance",
            "",
            "Different brains have different baseline levels of these chemicals - that's why brains work differently!",
            "",
            "Understanding brain chemistry helps you realize that how you feel and focus isn't just about 'trying harder' - it's about actual chemical processes in your brain! 🧪✨"
          ]
        },
        {
          type: "quiz",
          question: "Which chemical is often called the motivation molecule?",
          options: [
            { id: "a", text: "Serotonin", correct: false },
            { id: "b", text: "Dopamine", correct: true },
            { id: "c", text: "GABA", correct: false },
            { id: "d", text: "Norepinephrine", correct: false }
          ],
          explanation: "Dopamine is linked to reward, motivation, and focus. Low levels can make it harder to get started or stay focused - which is why brain chemistry matters!"
        },
        {
          type: "reflection",
          title: "Your Brain Power Takeaway",
          prompt: "What's one thing you learned about your brain that surprised you? How will you use this knowledge to better understand yourself or others?",
          placeholder: "Share your biggest takeaway from Brain Power..."
        },
        {
          type: "content",
          title: "🎉 Brain Power Complete!",
          imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=400&fit=crop",
          imageAlt: "Mind and achievement",
          paragraphs: [
            "**Congratulations! You've unlocked the secrets of your amazing brain! 🧠✨**",
            "",
            "**What You've Mastered:**",
            "✅ The Flashlight - Understanding attention and focus",
            "✅ The Gatekeeper - How your brain filters information",
            "✅ The Zoom Lens - Three levels of focus and when to use each",
            "✅ The Stroop Challenge - Brain conflict in action",
            "✅ The Brain Test - Putting it all together",
            "✅ The Command Center - The parts of your brain and what they do",
            "✅ Different Operating Systems - Celebrating brain diversity",
            "✅ Brain Chemistry - Understanding neurotransmitters",
            "",
            "**You now understand:**",
            "🧠 How attention works and how to control it",
            "🧠 Why your brain filters information",
            "🧠 The difference between neurotypical and neurodivergent brains",
            "🧠 How to fuel your brain for peak performance",
            "🧠 That every brain is unique and powerful in its own way!",
            "",
            "**Remember:**",
            "Your brain is the most complex and powerful object in the known universe! 🌌",
            "Understanding how it works is the first step to unlocking your full potential! 💪",
            "",
            "Keep learning, keep growing, and keep shining! 🌟",
            "",
            "Want to explore more? Check out the other Psychology lessons to learn about emotions, behavior, and the human mind! 🚀"
          ]
        }
      ]
    },
    {
      id: "mind-player-vs-narrator",
      subject: "mind",
      topic: "Identity & Perception",
      type: "lesson",
      title: "🧠 Player vs. Narrator",
      subtitle: "Separate who you choose to be from the stories your brain tells you",
      imageUrl: "images/playervintro.png",
      imageAlt: "Player vs. Narrator introduction",
      sections: [
        {
          type: "content",
          title: "Ever wonder why? 🤔",
          paragraphs: [
            "Ever wonder why two people can be in the exact same situation and tell completely different stories about what happened?",
            "Or why you can feel like a totally different person depending on your mood?",
            "**Your brain is constantly running two programs:**",
            "1. 🎮 **The Player** — Who you're choosing to be",
            "2. 🎬 **The Narrator** — The story your brain tells you about reality",
            "**Here's the wild part: The Narrator often lies to you. And most people never realize it.**"
          ]
        },
        {
          type: "content",
          title: "🎮 Part 1: The Player — Building Your Character",
          paragraphs: [
            "**The Truth About Identity**",
            "Right now, you might think of yourself as:",
            "⚽ \"I'm a football player\"",
            "📐 \"I'm bad at math\"",
            "😄 \"I'm the funny one\"",
            "**But here's the problem: Those are all just your current loadout.**",
            "They're things you *do* or things that happened *to* you. They can change tomorrow.",
            "**The real question is: Who are you choosing to *be*?**"
          ]
        },
        {
          type: "content",
          title: "⚡ Loadout vs. Permanent Upgrades",
          imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
          imageAlt: "Loadout vs upgrades",
          paragraphs: [
            "Think of life like a video game:",
            "**🎒 YOUR LOADOUT** (Can change anytime):",
            "• What sports you play",
            "• Your grades",
            "• Your style and clothes",
            "• Your hobbies",
            "• Your friend group",
            "**⭐ YOUR PERMANENT UPGRADES** (Who you actually are):",
            "• Kindness • Bravery • Honesty • Loyalty",
            "• Creativity • Patience • Humor • Resilience",
            "**The difference?**",
            "✅ You can quit football → Your loadout changes",
            "❌ You can't \"quit\" being kind → That's part of your core",
            "The best players focus on leveling up their permanent upgrades, not just changing their loadout."
          ]
        },
        {
          type: "quiz",
          question: "Which of these is a permanent upgrade, not a loadout?",
          options: [
            { id: "a", text: "Kindness", correct: true },
            { id: "b", text: "Football team", correct: false },
            { id: "c", text: "Current grades", correct: false },
            { id: "d", text: "Hobbies", correct: false }
          ],
          explanation: "Kindness is part of your core - who you're choosing to be. Loadout is what you do or have (sports, grades, hobbies) and can change."
        },
        {
          type: "quiz",
          question: "\"I'm bad at math\" is best described as:",
          options: [
            { id: "a", text: "A permanent identity that can't change", correct: false },
            { id: "b", text: "Your current loadout - something that can change", correct: true },
            { id: "c", text: "A permanent upgrade", correct: false },
            { id: "d", text: "Who you're choosing to be", correct: false }
          ],
          explanation: "It's loadout - something that happened or that you do. You can level up with practice or choose to see yourself differently. Your core is who you choose to be."
        },
        {
          type: "reflection",
          title: "⚡ The Character Core Exercise",
          prompt: "**Equip Your Core:** Pick 3 permanent upgrades you want to level up, and one small quest to \"grind XP\" for each this week.\n\n**Legacy Mode:** Imagine someone makes a documentary about you 10 years from now. What do you want them to say you were known for?\n\n💡 Your loadout is what you *do*. Your core is who you *are*. You get to choose your core."
        },
        {
          type: "content",
          title: "🎬 Part 2: The Narrator — Your Brain's Storyteller",
          paragraphs: [
            "**📸 The Camera vs. The Narrator**",
            "Here's something weird about your brain: **It doesn't show you reality. It tells you a story about reality.**",
            "**What Really Happened (Camera Mode):** Your friend walks past you in the hallway without saying hi.",
            "**What Your Narrator Might Say:**",
            "😟 Anxious: \"They're ignoring me because I did something wrong\"",
            "😤 Angry: \"They're being rude and fake\"",
            "😎 Confident: \"They probably didn't see me or were distracted\"",
            "**Same event. Three completely different stories.**",
            "Which one is true? **None of them.** The camera just saw: \"Person walked by without waving.\"",
            "**Your narrator filled in the rest.**"
          ]
        },
        {
          type: "content",
          title: "🧠 Why Does Your Brain Do This?",
          paragraphs: [
            "**The Autocorrect Problem 📱**",
            "Your brain is lazy. It wants to save energy. So instead of investigating every little thing, it *guesses* based on:",
            "• 😢 Your current mood",
            "• 📚 Past experiences",
            "• 😰 What you're afraid of",
            "• 🤞 What you're hoping for",
            "It's like texting: You type \"H-e-l...\" and your phone guesses \"Hello\" or \"Help.\"",
            "**Sometimes your phone guesses wrong.**",
            "**Your brain does this too — except with reality.**"
          ]
        },
        {
          type: "content",
          title: "⚡ The Gap",
          paragraphs: [
            "The trouble happens in **the gap** between:",
            "**📸 THE FACT** → What literally happened",
            "⬇️",
            "**🎬 THE STORY** → What your narrator says it means",
            "**Example:** Teacher says \"Can you stay after class?\"",
            "🎬 Story 1: \"I'm in trouble\"",
            "🎬 Story 2: \"They want to ask me something\"",
            "🎬 Story 3: \"They need help with something\"",
            "The fact is 4 words. Your narrator added everything else."
          ]
        },
        {
          type: "content",
          title: "🎨 Proof: The Dress",
          imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=400&fit=crop",
          imageAlt: "Perception and interpretation",
          paragraphs: [
            "Remember the famous dress that broke the internet?",
            "Some people saw it as **Blue and Black** 🔵⚫",
            "Others saw **Gold and White** 🟡⚪",
            "**Same dress. Same photo. Different brains processing it differently.**",
            "**The lesson:** If we can't even agree on a color, imagine how different your narrator and your friend's narrator might be in the same situation.",
            "**Your narrator isn't showing you the truth. It's showing you ONE interpretation.**"
          ]
        },
        {
          type: "interactive",
          title: "📸 Camera vs. Narrator",
          subtitle: "Spot the fact (camera) vs the story (narrator).",
          interactiveType: "camera-vs-narrator",
          scenarios: [
            { fact: "Your friend didn't text back.", camera: "No text back yet.", narrator: "They're ignoring me." },
            { fact: "Teacher said: Can you stay after class?", camera: "The four words the teacher said.", narrator: "I'm in trouble." }
          ]
        },
        {
          type: "quiz",
          question: "Teacher says \"Can you stay after class?\" What part is the camera?",
          options: [
            { id: "a", text: "The 4 words the teacher said", correct: true },
            { id: "b", text: "\"I'm in trouble\"", correct: false },
            { id: "c", text: "\"They want to ask me something\"", correct: false },
            { id: "d", text: "Your feeling of worry", correct: false }
          ],
          explanation: "The camera only captures what literally happened - the words spoken. Everything about what it means (trouble, ask something, etc.) is your narrator filling in the gap."
        },
        {
          type: "content",
          title: "🕵️ Part 3: Detective Mode — Catching Your Narrator",
          paragraphs: [
            "The superpower isn't stopping your narrator (you can't). **The superpower is noticing when it's probably wrong.**",
            "**🔍 The Narrator Check** — Use this anytime you feel upset, angry, or worried:",
            "**📸 CAMERA MODE:** What literally happened? (Facts only — no \"because\" or \"probably\")",
            "**🎬 MY NARRATOR'S VERSION:** What story is your brain telling you?",
            "**🔍 NARRATOR BIAS CHECK:** Before this happened, was I tired? Hungry? Already stressed? (If yes, your narrator is probably in \"threat mode.\")",
            "**🎭 ALTERNATE NARRATOR:** Can you think of ONE other explanation?",
            "**⚖️ TRUTH METER:** Which narrator is probably closest to what the camera saw?"
          ]
        },
        {
          type: "quiz",
          question: "Your friend walks past without saying hi. You think \"They're ignoring me because they're mad.\" Which part is the camera, and which is the narrator?",
          options: [
            { id: "a", text: "Both are the camera (facts)", correct: false },
            { id: "b", text: "\"Walked past\" = camera; \"ignoring me / mad\" = narrator", correct: true },
            { id: "c", text: "Both are the narrator (stories)", correct: false },
            { id: "d", text: "The whole thing is the camera", correct: false }
          ],
          explanation: "The camera only captures facts: a person walked by without saying hi. Everything about *why* — ignoring, mad, etc. — is your narrator filling in the gap with a story."
        },
        {
          type: "quiz",
          question: "In the Group Laugh scenario: You walk up, friends are laughing, they stop when you approach. Which narrator adds the MOST assumptions?",
          options: [
            { id: "a", text: "\"They were laughing at me\"", correct: true },
            { id: "b", text: "\"They finished their joke right when I walked up\"", correct: false },
            { id: "c", text: "\"They stopped because they didn't want to make me feel left out\"", correct: false }
          ],
          explanation: "Option A assumes intent (at me), malice (laughing at), and mind-reading (they were thinking about you). B and C add fewer assumptions about others' motives."
        },
        {
          type: "content",
          title: "💡 The Big Takeaways",
          paragraphs: [
            "**🎮 On Identity (The Player):**",
            "✅ You are not your grades, hobbies, or current situation",
            "✅ Those are just your loadout — they can change",
            "✅ **Who you ARE is who you're choosing to BE**",
            "✅ Focus on leveling up your permanent upgrades (your values)",
            "**🎬 On Perception (The Narrator):**",
            "✅ Your brain doesn't show you reality — it tells you a story about reality",
            "✅ That story is influenced by your mood, fears, and past experiences",
            "✅ **There's always a gap between what happened and what you think it means**",
            "✅ The superpower is catching your narrator and asking: \"Is this the camera talking, or just my narrator?\""
          ]
        },
        {
          type: "content",
          title: "🎯 Weekly Challenge",
          paragraphs: [
            "**Level 1 🌱** — Pick 3 permanent upgrades and do one small action for each this week",
            "**Level 2 🔥** — Use the Narrator Check on one situation that upsets you",
            "**Level 3 ⚡** — Catch your narrator being wrong and write down what the camera actually saw"
          ]
        },
        {
          type: "reflection",
          title: "🤯 Final Mind-Blow",
          prompt: "**90% of your suffering comes from your narrator, not from reality.**\n\nThe camera sees: \"No text back yet\" 📸\nYour narrator says: \"They hate me\" 🎬 → You feel terrible 😢\n\n**The event didn't hurt you. The story did.**\n\nWhen you learn to separate the camera from the narrator, you gain a superpower: **You stop being controlled by stories your brain makes up.**\n\nYou become the player, not the narrator's puppet. 🎮👑"
        }
      ]
    }
  ],
  space: [
    {
      id: "space-black-holes",
      slug: "black-holes",
      subject: "space",
      type: "lesson",
      title: "🌌 Black Holes: Where Reality Stops Making Sense",
      subtitle: "The universe contains things that exist even if you can't picture them",
      icon: "🕳️",
      imageUrl: "images/black-holes-intro.png",
      imageAlt: "Black hole introduction",
      sections: [
        {
          type: "content",
          title: "⚡ Where reality breaks",
          paragraphs: [
            "There are places in the universe where time slows, space bends, and 'before' and 'after' stop behaving normally.",
            "Black holes are not exotic objects.",
            "They are logical consequences of gravity.",
            "In 1915, Karl Schwarzschild — a German physicist doing calculations in the trenches of World War I — found something impossible in Einstein's equations.",
            "A mathematical solution where gravity becomes so strong that spacetime collapses into itself.",
            "Einstein didn't believe it. He thought nature would forbid it.",
            "Nature disagreed. 🌍"
          ]
        },
        {
          type: "content",
          title: "🕳️ What a black hole actually is",
          paragraphs: [
            "Not a vacuum cleaner.",
            "Not a tunnel.",
            "Not a hole.",
            "A black hole is matter compressed so tightly that space itself curves inward — permanently.",
            "Take the Sun. Compress it into a sphere 3 kilometers wide.",
            "Take Earth. Compress it into a marble 9 millimeters across.",
            "At that density, escape velocity exceeds the speed of light.",
            "Nothing — not even light — can climb back out of that gravitational well.",
            "That's a black hole."
          ]
        },
        {
          type: "content",
          title: "📐 The Schwarzschild radius",
          paragraphs: [
            "Every object has a Schwarzschild radius — the size it would need to be compressed to become a black hole.",
            "For you: about 10⁻²⁵ meters (a billion billion times smaller than an atom).",
            "For Earth: 9 millimeters.",
            "For the Sun: 3 kilometers.",
            "Right now, you're not compressed enough. But the math doesn't care about 'should.'",
            "If you could compress anything — a person, a planet, a star — below its Schwarzschild radius, it would collapse into a black hole.",
            "Gravity doesn't stop being polite at some threshold. It just wins."
          ]
        },
        {
          type: "content",
          title: "🌀 Spacetime curvature",
          paragraphs: [
            "Gravity isn't a force pulling you down.",
            "It's the shape of spacetime.",
            "Mass tells spacetime how to curve. Curved spacetime tells mass how to move.",
            "That's Einstein's general relativity in one sentence.",
            "Near a black hole, spacetime doesn't just curve — it collapses.",
            "Imagine a trampoline. Put a bowling ball on it. The fabric dips.",
            "Now imagine the bowling ball is so heavy the fabric tears and folds in on itself infinitely.",
            "That's closer."
          ]
        },
        {
          type: "content",
          title: "🚫 The event horizon: the point of no return",
          paragraphs: [
            "The event horizon is the boundary where escape velocity equals the speed of light.",
            "Cross it, and you cannot come back.",
            "Not because something is pulling you.",
            "Because all paths through spacetime now point inward.",
            "'Forward in time' and 'toward the center' become the same direction.",
            "It's not that you can't escape.",
            "It's that escape stops being a direction that exists."
          ]
        },
        {
          type: "quiz",
          question: "If you fell into a black hole feet-first, what would happen FIRST?",
          options: [
            { id: "a", text: "You'd be crushed instantly", correct: false },
            { id: "b", text: "Time would stop completely", correct: false },
            { id: "c", text: "Tidal forces would stretch you into spaghetti", correct: true },
            { id: "d", text: "You'd see the entire future of the universe", correct: false }
          ],
          explanation: "Spaghettification happens BEFORE you reach the singularity. Your feet experience stronger gravity than your head, stretching you vertically and compressing you horizontally. For supermassive black holes, this happens more gently - you might cross the event horizon intact."
        },
        {
          type: "content",
          title: "🧠 The most disturbing thing about the event horizon",
          paragraphs: [
            "Here's what breaks your brain:",
            "From the outside, you watch someone fall toward a black hole.",
            "They get slower. And slower. And slower.",
            "Time dilation means you never actually see them cross the event horizon.",
            "Their light gets redshifted into oblivion. They fade. But they never quite disappear.",
            "From their perspective?",
            "Nothing special happens at the event horizon. They cross it in finite time. Everything seems normal.",
            "Then they continue falling toward the singularity.",
            "Both perspectives are correct.",
            "Reality literally disagrees with itself depending on where you're standing."
          ]
        },
        {
          type: "content",
          title: "🍝 Spaghettification (yes, that's the real term)",
          paragraphs: [
            "If you fell into a black hole feet-first, tidal forces would stretch you.",
            "Your feet experience stronger gravity than your head.",
            "Near a stellar black hole (a few times the Sun's mass), this difference becomes extreme within meters.",
            "You would be stretched vertically and compressed horizontally.",
            "Long before you reached the event horizon, you would be torn into a stream of atoms.",
            "Scientists call this 'spaghettification.' 🍝",
            "For supermassive black holes (millions of solar masses), the tidal forces at the event horizon are gentler.",
            "You could cross it intact — and wouldn't realize anything happened until much later.",
            "By then, escape would no longer be a concept that applies."
          ]
        },
        {
          type: "content",
          title: "∞ The singularity: where math gives up",
          paragraphs: [
            "At the center of a black hole is the singularity.",
            "According to general relativity: infinite density, zero volume, infinite curvature.",
            "This is where the equations return 'undefined.'",
            "Physicists don't think singularities are physically real.",
            "They think singularities are places where general relativity breaks down — where we need quantum gravity.",
            "We don't have that theory yet.",
            "So we genuinely don't know what happens at the center of a black hole.",
            "Not 'we haven't measured it yet.'",
            "We don't have the language to describe it."
          ]
        },
        {
          type: "content",
          title: "✨ Hawking radiation: black holes evaporate",
          paragraphs: [
            "In 1974, Stephen Hawking discovered something shocking.",
            "Black holes aren't entirely black.",
            "Quantum effects near the event horizon cause black holes to emit radiation.",
            "Very slowly. A solar-mass black hole would take 10⁶⁷ years to evaporate.",
            "For comparison, the universe is 1.4 × 10¹⁰ years old.",
            "But here's the paradox:",
            "Hawking radiation appears to be random. It carries no information about what fell in.",
            "But quantum mechanics says information can't be destroyed.",
            "This is called the black hole information paradox — and it's still unsolved.",
            "Some of the smartest physicists alive disagree about the answer."
          ]
        },
        {
          type: "content",
          title: "⏳ Time dilation near black holes",
          paragraphs: [
            "The closer you are to a black hole, the slower your clock ticks relative to someone far away.",
            "This isn't perception. It's measurable, physical time.",
            "In the movie Interstellar, the characters visit a planet near a black hole where 1 hour = 7 Earth years.",
            "That math is correct for a rapidly spinning black hole (Gargantua in the film).",
            "If you orbited close to a black hole for what felt like a year, you could return to find centuries had passed.",
            "You wouldn't have traveled to the future.",
            "You would have experienced less time.",
            "Relativity doesn't care about what feels fair."
          ]
        },
        {
          type: "interactive",
          title: "⏰ Time Dilation Calculator",
          subtitle: "See how time slows near a black hole",
          interactiveType: "time-dilation",
          instructions: "Adjust your distance from the black hole. Watch how time flows differently!",
          maxDistance: 100,
          eventHorizon: 10
        },
        {
          type: "content",
          title: "📸 We've actually photographed one",
          paragraphs: [
            "In 2019, the Event Horizon Telescope — a planet-sized network of radio telescopes — captured the first image of a black hole.",
            "M87*, a supermassive black hole 55 million light-years away.",
            "6.5 billion times the mass of the Sun.",
            "The image shows a ring of glowing gas around a dark center — the shadow of the event horizon.",
            "That shadow is larger than our entire solar system.",
            "In 2022, they photographed Sagittarius A* — the black hole at the center of our galaxy.",
            "4 million solar masses. 27,000 light-years from Earth.",
            "We orbit it.",
            "We have been orbiting it for the entire existence of our species."
          ]
        },
        {
          type: "quiz",
          question: "Why does the black hole image from 2019 show a glowing ring instead of just darkness?",
          options: [
            { id: "a", text: "The black hole itself is glowing", correct: false },
            { id: "b", text: "Hot gas orbiting near the event horizon emits light before falling in", correct: true },
            { id: "c", text: "It's a camera error", correct: false },
            { id: "d", text: "Black holes aren't actually black", correct: false }
          ],
          explanation: "The ring is superheated gas (plasma) orbiting at nearly light speed. It's so hot (billions of degrees) it glows brightly before crossing the event horizon. The dark center is the black hole's shadow - the region where even light cannot escape."
        },
        {
          type: "content",
          title: "🧠 Why this breaks the brain",
          paragraphs: [
            "Your intuition expects:",
            "• Solid objects with surfaces",
            "• Clear boundaries",
            "• One shared timeline",
            "• Up and down",
            "Black holes offer:",
            "• Warped space with no 'inside' surface",
            "• Boundaries that depend on your reference frame",
            "• Time that flows differently depending on where you are",
            "• Directions that stop existing",
            "Your brain was not built for this.",
            "And that's the point."
          ]
        },
        {
          type: "content",
          title: "💡 What this teaches us",
          paragraphs: [
            "The universe does not care what feels intuitive.",
            "Human intuition evolved for:",
            "• Throwing spears at 20 mph",
            "• Crossing rivers",
            "• Spotting faces in crowds",
            "• Predicting where a deer will run",
            "Not for:",
            "• Objects moving at 99.9% the speed of light",
            "• Curved spacetime",
            "• Infinite density",
            "• Time as a flexible dimension",
            "Black holes are not weird because they're exotic.",
            "They're weird because they're honest.",
            "They show what the universe actually is — not what our primate brains are comfortable with."
          ]
        },
        {
          type: "quiz",
          question: "What is the event horizon?",
          options: [
            { id: "a", text: "The surface of the black hole", correct: false },
            { id: "b", text: "The point where gravity becomes infinite", correct: false },
            { id: "c", text: "The boundary where escape becomes impossible", correct: true },
            { id: "d", text: "The edge of the observable universe", correct: false }
          ],
          explanation: "The event horizon is the point of no return — where escape velocity exceeds the speed of light. It's not a physical surface. It's a boundary in spacetime itself. Cross it, and all future paths lead inward."
        },
        {
          type: "quiz",
          question: "Why do two observers disagree about what happens at the event horizon?",
          options: [
            { id: "a", text: "One of them is hallucinating", correct: false },
            { id: "b", text: "Time dilation causes their clocks to run at different rates", correct: true },
            { id: "c", text: "Black holes create optical illusions", correct: false },
            { id: "d", text: "The event horizon moves depending on who's watching", correct: false }
          ],
          explanation: "Extreme time dilation means an outside observer never sees someone cross the horizon (their clock slows to a stop from the outside perspective), while the falling observer crosses it in finite time on their own clock. Both are correct. Relativity is deeply weird."
        },
        {
          type: "content",
          title: "💫 The quiet insight",
          paragraphs: [
            "Confusion isn't failure.",
            "It's contact with the edge of understanding.",
            "Black holes remind us:",
            "• Reality is stranger than stories",
            "• Certainty is often a shortcut",
            "• 'I don't know' is a valid state",
            "• The universe is under no obligation to make sense to you",
            "And here's the beautiful part:",
            "We figured this out anyway.",
            "Not by trusting our intuition — but by trusting the math even when it felt impossible."
          ]
        },
        {
          type: "reflection",
          title: "🤔 A thought experiment",
          prompt: "Think of something that feels impossible to imagine.\n\nInfinite density. Time stopping. Directions that cease to exist.\n\nNow consider:\n\nThe universe contains things that exist even if you can't picture them.\n\nThat's not unsettling.\n\nThat's expansive.\n\nYour intuition is a tool for survival, not a map of reality."
        },
        {
          type: "content",
          title: "🌟 Closing thought",
          paragraphs: [
            "Black holes don't destroy reality.",
            "They reveal how little of it we were ever built to understand.",
            "And yet — through math, observation, and sheer intellectual audacity — we mapped them anyway.",
            "That's the real lesson.",
            "Not that the universe is strange.",
            "But that human curiosity is stronger than human intuition.",
            "We can understand things we cannot imagine.",
            "That might be the most remarkable thing in the universe. ✨"
          ]
        }
      ]
    },
    {
      id: "terraforming-mars-001",
      slug: "terraforming-mars",
      subject: "space",
      type: "lesson",
      title: "Terraforming Mars: From Red Hell to Green Paradise",
      subtitle: "Transform Mars using lasers, imported nitrogen, and artificial magnetic fields",
      difficulty: "Advanced",
      estimatedTime: "15-20 min",
      xpReward: 250,
      icon: "🔴",
      imageUrl: "images/terraforming_mars.png",
      imageAlt: "Terraforming Mars introduction",
      sections: [
        {
          type: "content",
          title: "🔴 Introduction: From Red Hell to Green Paradise",
          paragraphs: [
            "Mars is a disappointing hellhole lacking practically everything we need to stay alive. But what if we could transform it into a green new world using gigantic lasers and oceans of lava?",
            "This isn't science fiction. Terraforming Mars is theoretically possible on the same timescale our ancestors built great monuments. If humanity expands into the solar system, this could be our reality.",
            "Learning objectives:",
            "• Understand the three major challenges of terraforming Mars",
            "• Learn how thermolysis can create a breathable atmosphere",
            "• Discover why we need to import nitrogen from Titan",
            "• Explore how to build a stable biosphere from scratch",
            "• Understand the long-term protection needs of a terraformed planet"
          ]
        },
        {
          type: "content",
          title: "🔬 Step 1: Understanding the Problem",
          paragraphs: [
            "Before we can fix Mars, we need to understand exactly what's wrong with it. Mars today is a barren wasteland, but it wasn't always this way.",
            "About 4 billion years ago, Mars had a nice oxygen-rich atmosphere and vast oceans. It held onto this atmosphere for several hundred million years before losing it. Ultraviolet rays broke down atmospheric gases, and then solar wind swept them away into space.",
            "Key points:",
            "• Mars' atmosphere is too thin to breathe or protect from radiation",
            "• The surface is dry with no soil to grow anything",
            "• High cancer risk from radiation exposure",
            "• But frozen water exists in polar ice caps and deep reservoirs",
            "• Oxygen is trapped in iron oxides (rust) and carbonates in rocks"
          ]
        },
        {
          type: "quiz",
          question: "What happened to Mars' original atmosphere?",
          options: [
            { id: "a", text: "It was stolen by aliens for their own planet", correct: false },
            { id: "b", text: "Ultraviolet rays broke it down and solar wind swept it away", correct: true },
            { id: "c", text: "It sank into the planet's core", correct: false },
            { id: "d", text: "Mars never had an atmosphere to begin with", correct: false }
          ],
          explanation: "UV radiation broke down the atmospheric gases and oceans molecule by molecule. Then, without a strong magnetic field to protect it, the solar wind - a stream of charged particles from the Sun - gradually stripped away Mars' atmosphere over hundreds of millions of years."
        },
        {
          type: "content",
          title: "🎯 Step 2: The Goal",
          paragraphs: [
            "To make Mars habitable, we need to recreate Earth-like conditions. But what exactly does that mean in numbers?",
            "Earth's atmosphere is a precisely balanced mixture: 21% oxygen for us to breathe, 79% nitrogen as a buffer gas, and a tiny bit of CO2 (about 0.04%) to regulate temperature through the greenhouse effect.",
            "Target specs: 21% O2, 79% N2, trace CO2. Temperature: 14°C average. Pressure: 1 bar (same as Earth at sea level). We must shield against UV and cosmic radiation. We need liquid oceans and rivers on the surface, and weathered ground capable of supporting plant life."
          ]
        },
        {
          type: "quiz",
          question: "Why can't we just create a pure oxygen atmosphere on Mars?",
          options: [
            { id: "a", text: "Pure oxygen is too heavy and would sink into the ground", correct: false },
            { id: "b", text: "It would be extremely flammable and hard to breathe safely", correct: true },
            { id: "c", text: "Oxygen is toxic to all known life forms", correct: false },
            { id: "d", text: "We don't have enough oxygen to make a full atmosphere", correct: false }
          ],
          explanation: "A pure oxygen atmosphere would be incredibly dangerous - everything would be highly flammable, causing fires to spread rapidly. It's also difficult to breathe pure oxygen at normal pressure for extended periods. We need nitrogen as a 'buffer gas' to dilute the oxygen and make it safer, just like on Earth."
        },
        {
          type: "content",
          title: "Challenge 1: Creating the Atmosphere",
          paragraphs: [
            "Here's the wild part: to fix Mars' atmosphere, we first need to make things much worse. We need to melt the entire surface into oceans of lava.",
            "The oxygen we need is locked in Martian rocks as iron oxides (Fe2O3) and carbonates. To free these gases, we use THERMOLYSIS - breaking down compounds using extreme heat. This requires temperatures as high as the surface of the Sun.",
            "The method: Giant orbital laser arrays. Solar-pumped lasers powered by focused sunlight. Mirror array 11x the size of the United States. 20 Petawatts continuous (2x the most powerful laser today). 750 kg of O2 per cubic meter of rock melted. We only need to melt the top 8 meters of surface."
          ]
        },
        {
          type: "quiz",
          question: "Why do we need to melt Mars' surface instead of just importing oxygen from elsewhere?",
          options: [
            { id: "a", text: "Melting rocks is more fun than shipping gases", correct: false },
            { id: "b", text: "The oxygen is already there, locked in the rocks - we just need to free it", correct: true },
            { id: "c", text: "Imported oxygen wouldn't mix properly with Mars' atmosphere", correct: false },
            { id: "d", text: "Space shipping is illegal under interplanetary law", correct: false }
          ],
          explanation: "Mars' rust-red color comes from iron oxides - essentially rust. This rust contains enormous amounts of oxygen chemically bound to iron. It's far more efficient to extract this oxygen that's already on Mars than to ship trillions of tons from elsewhere in the solar system."
        },
        {
          type: "content",
          title: "Step 3: The Great Melting",
          paragraphs: [
            "Imagine what this would look like: 50 years of continuous planetary melting. It would be simultaneously terrifying and awe-inspiring.",
            "The skies shrouded in storms. The ground glowing red-hot, criss-crossed by rivers of lava. Tireless laser beams sweeping over the landscape, leaving trails too bright to look at. After they pass, the ground cools quickly. A strange snow falls - ashes from elements like silicon and iron solidifying as they cool.",
            "Happy accidents: All water from ice caps and underground rises as steam. Forms planet-wide clouds that rain everywhere. Rain washes out nasty gases like chlorine. Carries away harmful accumulated surface elements. Forms shallow oceans (saltier than Earth's). We can selectively dig deeper for ocean basins and preserve landmarks like Olympus Mons. Timeline: ~50 years of continuous lasering."
          ]
        },
        {
          type: "quiz",
          question: "Why do we need to melt Mars' surface instead of just pumping oxygen from Earth?",
          options: [
            { id: "a", text: "Melting is more fun", correct: false },
            { id: "b", text: "Mars rocks contain trapped oxygen in iron oxides - it's already there!", correct: true },
            { id: "c", text: "We can't transport oxygen through space", correct: false },
            { id: "d", text: "Melting makes the planet warmer", correct: false }
          ],
          explanation: "Mars' red color comes from iron oxide (rust) - oxygen chemically bonded to iron. There's enough oxygen trapped in Martian rocks to create a breathable atmosphere. We just need to break those chemical bonds using extreme heat (thermolysis). Shipping oxygen from Earth would require trillions of tons!"
        },
        {
          type: "quiz",
          question: "After 50 years of melting Mars, what's the problem with our new atmosphere?",
          options: [
            { id: "a", text: "It's too cold and the oxygen freezes solid", correct: false },
            { id: "b", text: "It's nearly 100% oxygen at only 0.2 bar - hard to breathe and extremely flammable", correct: true },
            { id: "c", text: "It contains too many greenhouse gases and overheats the planet", correct: false },
            { id: "d", text: "The laser damage made it toxic to all life", correct: false }
          ],
          explanation: "After thermolysis, we have an atmosphere that's almost pure oxygen at only 0.2 bar pressure (about 1/5 of Earth's pressure). This is dangerous for two reasons: it's difficult to breathe comfortably at low pressure, and pure oxygen is extremely flammable - any spark could cause catastrophic fires. We desperately need nitrogen to dilute it."
        },
        {
          type: "content",
          title: "Step 4: The Nitrogen Problem",
          paragraphs: [
            "We have a breathable amount of oxygen, but we need to add 79% nitrogen to make it safe and Earth-like. Unfortunately, Mars is severely lacking in nitrogen. We have to import it... from Saturn.",
            "The plan: Titan (Saturn's largest moon) has a thick atmosphere that's almost entirely nitrogen. We need 3,000 trillion tons. Titan is ~1.2 billion km from Mars. Giant automated factories on Titan's surface: laser-powered factories suck in Titan's atmosphere, compress nitrogen into liquid form, pump into bullet-shaped tanks, mass driver shoots them to Mars, tanks explode in Mars orbit mixing with oxygen. Timeline: ~2 generations (~50 years) with enough resources. Would be easier if we terraformed Venus first and had leftover nitrogen!"
          ]
        },
        {
          type: "quiz",
          question: "Why import nitrogen from Titan instead of from Earth's atmosphere?",
          options: [
            { id: "a", text: "Titan's nitrogen is better quality", correct: false },
            { id: "b", text: "Titan has a massive nitrogen atmosphere we can harvest without harming Earth", correct: true },
            { id: "c", text: "It's closer to Mars", correct: false },
            { id: "d", text: "Titan's nitrogen is already compressed", correct: false }
          ],
          explanation: "Titan's atmosphere is 95% nitrogen and extremely thick - a virtually unlimited supply. Taking nitrogen from Earth would deplete our atmosphere. While Titan is far away (at Saturn), it's worth the journey because we need 3,000 trillion tons of nitrogen!"
        },
        {
          type: "quiz",
          question: "Why is Titan the ideal source for nitrogen?",
          options: [
            { id: "a", text: "It's the closest celestial body with nitrogen", correct: false },
            { id: "b", text: "Titan's nitrogen is a special type that works better", correct: false },
            { id: "c", text: "It has a thick atmosphere that's almost entirely nitrogen - exactly what we need", correct: true },
            { id: "d", text: "The nitrogen on Titan is already compressed and ready to ship", correct: false }
          ],
          explanation: "Titan is unique in our solar system: it's the only moon with a thick atmosphere, and that atmosphere is about 95% nitrogen - almost pure! While it's far away (at Saturn), it's essentially a massive nitrogen reservoir. Other solar system bodies might have some nitrogen, but nothing comes close to Titan's abundance and accessibility."
        },
        {
          type: "content",
          title: "Step 5: One Century Later",
          paragraphs: [
            "About 100 years after starting the terraforming process, Mars has transformed dramatically. But it's still not ready for life.",
            "Status: Breathable mix of 21% O2, 79% N2 ✓. Pressure 1 bar ✓. Temperature warmed by CO2 and super greenhouse gases ✓. Appearance: black marble from cooling lava, spotted with growing oceans and red untouched patches. Problem: Still a wasteland - no better than Earth's harshest deserts. What's missing? LIFE."
          ]
        },
        {
          type: "quiz",
          question: "What would Mars look like at this stage?",
          options: [
            { id: "a", text: "Exactly like Earth with green continents and blue oceans", correct: false },
            { id: "b", text: "A black marble with growing oceans and some red patches of old surface", correct: true },
            { id: "c", text: "Still completely red and dusty, unchanged from before", correct: false },
            { id: "d", text: "A glowing ball of molten lava", correct: false }
          ],
          explanation: "The extensive melting would leave most of Mars' surface covered in cooled, black lava rock. Growing oceans would create blue patches, and areas where we preserved the original surface (like Olympus Mons) would remain red. It would be a stark, alien-looking world - breathable but lifeless."
        },
        {
          type: "content",
          title: "Challenge 2: Building a Biosphere",
          paragraphs: [
            "Installing a biosphere on a new planet is extremely difficult. Unexpected interactions between species or diseases can destabilize it to the point of collapse. We need to be strategic.",
            "Phase 1 - Seed the Oceans: Start with phytoplankton (microscopic plants). Without competition, they bloom rapidly. Creates bottom of aquatic food chain. Add tiny zooplankton next, then fish, potentially sharks and whales. Ocean life should thrive relatively quickly.",
            "Phase 2 - Conquer the Land (Much Harder): Plants need nutrient-filled soil. Mars has congealed lava and ash - essentially sterile rock. Slow solution: wait thousands of years for weathering. Fast solution: use our laser again!"
          ]
        },
        {
          type: "quiz",
          question: "Why is establishing life on land much harder than in the oceans?",
          options: [
            { id: "a", text: "Plants are more fragile than fish", correct: false },
            { id: "b", text: "The oceans provide better radiation shielding", correct: false },
            { id: "c", text: "Plants need nutrient-filled soil, but Mars' surface is sterile lava rock and ash", correct: true },
            { id: "d", text: "Land life requires oxygen but ocean life doesn't", correct: false }
          ],
          explanation: "Ocean life can thrive in water enriched with dissolved minerals and nutrients. But land plants need complex soil with organic matter, minerals, and microorganisms. Mars' freshly melted surface is just solidified lava and volcanic ash - it has the wrong chemistry and structure. It's like trying to grow a garden on a parking lot."
        },
        {
          type: "content",
          title: "Step 6: Creating Soil Fast",
          paragraphs: [
            "We could wait millennia for natural weathering, but we have a giant laser. Let's use it creatively.",
            "Rapid on-off laser pulses: ground rapidly heats up and contracts, breaks rock into smaller and smaller pieces. Add water to create dark mud. Mix in fungi and nitrogen-fixing bacteria.",
            "Nitrogen-fixing bacteria absorb N2 from the air and convert it into nitrate compounds that feed plants. They're Earth's natural fertilizer factories.",
            "First plants: species native to volcanic islands on Earth - perfectly suited to laser-blasted Martian landscape. Progression: enriched mud becomes foundation → grasslands emerge → forests grow (very tall, very fast due to lower gravity) → tree roots gather nutrients and dig deeper → roots turn more rock into soil → self-sustaining ecosystem formed."
          ]
        },
        {
          type: "interactive",
          title: "🌡️ Atmosphere Mixer",
          subtitle: "Create the perfect atmosphere for Mars",
          interactiveType: "atmosphere-builder",
          targetComposition: { oxygen: 21, nitrogen: 79, co2: 0.04 },
          instructions: "Adjust gas percentages to match Earth's atmosphere"
        },
        {
          type: "quiz",
          question: "What makes nitrogen-fixing bacteria so crucial for Mars?",
          options: [
            { id: "a", text: "They eat the toxic ash and make it safe", correct: false },
            { id: "b", text: "They convert atmospheric nitrogen into nitrate compounds that plants can use as food", correct: true },
            { id: "c", text: "They produce oxygen through photosynthesis", correct: false },
            { id: "d", text: "They protect other organisms from radiation", correct: false }
          ],
          explanation: "Nitrogen-fixing bacteria perform chemical magic: they take N2 gas from the air (which plants can't use directly) and convert it into nitrates and ammonia (which plants CAN use). This is critical because even though Mars now has a nitrogen-rich atmosphere, plants can't access it without these bacteria. They're the bridge that makes the atmosphere useful for plant life."
        },
        {
          type: "content",
          title: "Step 7: Ecosystem Expansion",
          paragraphs: [
            "Once we have functioning grasslands and forests, we can gradually introduce more complexity. But we need to be careful.",
            "Introduction order: more plant varieties (gradually), insects (but NOT mosquitoes!), animals (starting small, working up), careful monitoring at every step.",
            "Dangers: plants absorbing too much CO2 → planet cools too much; key species dying out → population collapse. On Earth, other species would fill the void. Mars' biosphere isn't as flexible yet. Constant monitoring and intervention needed to prevent collapse. Hundreds if not thousands of years before stable environment. Eventually Mars will have air, water, and food to sustain large human colonies."
          ]
        },
        {
          type: "quiz",
          question: "Why would a Martian biosphere be more fragile than Earth's?",
          options: [
            { id: "a", text: "Mars' lower gravity makes organisms weaker", correct: false },
            { id: "b", text: "The artificial atmosphere is unstable", correct: false },
            { id: "c", text: "Mars has fewer species with less biodiversity, so there are no backup species to fill ecological niches if something dies out", correct: true },
            { id: "d", text: "Martian soil is poisonous to most life", correct: false }
          ],
          explanation: "Earth's biospheres are resilient because they have incredible biodiversity - if one species of pollinator goes extinct, there are often others that can take over that role. Mars' engineered biosphere would start with minimal species, carefully selected. This means there are no 'backup' species. If your key pollinators die out, you could lose all plants that depend on them, triggering a cascade of extinctions."
        },
        {
          type: "content",
          title: "Challenge 3: Long-Term Protection",
          paragraphs: [
            "We've built an atmosphere and biosphere, but there's a problem we haven't addressed: Mars' core does not produce a magnetic field.",
            "Earth's magnetic field deflects solar radiation and cosmic rays. Mars has no rotating liquid iron core = no magnetic field. Solar wind will gradually strip away our new atmosphere (again!). High radiation exposure is dangerous for long-term Martian populations.",
            "The solution: Artificial magnetic field. Doesn't need to be huge like Earth's - just deflect solar wind enough so it doesn't touch Mars. Design: magnetic umbrella far ahead of Mars."
          ]
        },
        {
          type: "quiz",
          question: "Why did Mars lose its original atmosphere billions of years ago?",
          options: [
            { id: "a", text: "Asteroid impacts blew it away", correct: false },
            { id: "b", text: "It was too cold and the atmosphere froze and fell to the surface", correct: false },
            { id: "c", text: "Without a magnetic field, solar wind gradually stripped it away", correct: true },
            { id: "d", text: "Mars' low gravity couldn't hold onto the gases", correct: false }
          ],
          explanation: "Mars' core cooled and solidified early in its history, shutting down its magnetic field. Without this protective shield, the solar wind - a constant stream of charged particles from the Sun - could directly impact Mars' atmosphere. Over hundreds of millions of years, it literally blew the atmosphere away into space, atom by atom. We need to prevent this from happening again."
        },
        {
          type: "content",
          title: "Step 8: The Magnetic Umbrella",
          paragraphs: [
            "The final piece of the puzzle is elegant in its simplicity: a giant magnetic shield in space.",
            "Design: large superconducting ring, powered by nuclear facilities, placed at Mars-Sun L1 point. Lagrange point 1 is a special orbital position that stays constantly between the Sun and Mars. It deflects solar wind to the sides like an umbrella, protecting the entire planet and atmosphere.",
            "The solar wind is made of charged particles. A strong magnetic field deflects charged particles. The umbrella doesn't stop all radiation, but it prevents the continuous atmospheric stripping that doomed original Mars. Atmosphere protected ✓"
          ]
        },
        {
          type: "quiz",
          question: "Why place the magnetic shield at the L1 point instead of orbiting Mars?",
          options: [
            { id: "a", text: "L1 is closer to nuclear power sources", correct: false },
            { id: "b", text: "L1 stays constantly between the Sun and Mars, providing continuous protection", correct: true },
            { id: "c", text: "L1 has stronger gravity that powers the magnets", correct: false },
            { id: "d", text: "The magnetic field is stronger at L1", correct: false }
          ],
          explanation: "Lagrange points are special positions where gravitational forces balance out. The L1 point between the Sun and Mars stays in a fixed position relative to both bodies. This means our magnetic shield can remain stationary between the Sun and Mars without using fuel, providing constant protection as Mars orbits. Any other orbit would leave gaps in protection."
        },
        {
          type: "content",
          title: "🌍 The Complete Vision",
          paragraphs: [
            "Let's review the complete timeline and what we've accomplished.",
            "Years 0–50: Continuous laser melting → Oxygen atmosphere created. Years 50–100: Nitrogen import from Titan → Breathable atmosphere complete. Years 100–150: Ocean seeding → Marine biosphere established. Years 150–300: Soil creation and plant introduction → Land biosphere growing. Years 300–1000: Ecosystem stabilization and expansion. Ongoing: Magnetic umbrella maintenance and biosphere management.",
            "Roughly 1,000 years from start to stable, Earth-like planet. Same timescale as building great pyramids, cathedrals, or the Great Wall of China.",
            "Final result: A black, blue, and green marble. A giant volcanic island in space. Breathable, protected, stable atmosphere. Oceans, rivers, rain cycles. Thriving biosphere from microbes to potentially large animals. Large colonies can live on the surface without suits. First home designed and shaped solely by us and for us."
          ]
        },
        {
          type: "quiz",
          question: "What makes terraforming Mars more feasible than it might seem?",
          options: [
            { id: "a", text: "It only takes 50 years from start to finish", correct: false },
            { id: "b", text: "We already have all the technology we need today", correct: false },
            { id: "c", text: "The timescale (roughly 1,000 years) is similar to great monuments humans have built", correct: true },
            { id: "d", text: "Mars will terraform itself if we just add water", correct: false }
          ],
          explanation: "The ~1,000 year timeline seems long by human lifespans, but it's remarkably short by civilizational standards. Humans have built projects that lasted centuries: the Great Wall of China was built over ~2,000 years, Gothic cathedrals took centuries, and the pyramids were built over many generations. We're capable of multi-generational projects."
        },
        {
          type: "content",
          title: "💭 Final Reflection",
          paragraphs: [
            "Terraforming Mars isn't just about creating a second Earth. It's about what it represents for humanity.",
            "Significance: First time living in a home designed completely by us. Proof that we can shape entire worlds. Insurance against extinction events on Earth. First step toward becoming a multi-planetary species. Testing ground for eventual interstellar colonization. Ultimate expression of human ambition and engineering.",
            "Challenges: Requires solving current problems (climate, energy, cooperation). Needs massive resource investment. Demands multi-generational thinking. Requires unprecedented international cooperation. Must balance speed with safety and ethics.",
            "The real question: Not 'can we do it?' but 'will we choose to do it?'"
          ]
        },
        {
          type: "quiz",
          question: "What is the most significant obstacle to terraforming Mars?",
          options: [
            { id: "a", text: "The technology doesn't exist and may never exist", correct: false },
            { id: "b", text: "Mars is too far away to work on effectively", correct: false },
            { id: "c", text: "The financial resources, international cooperation, and long-term commitment required from humanity", correct: true },
            { id: "d", text: "The laws of physics make it impossible to maintain an atmosphere on Mars", correct: false }
          ],
          explanation: "The video emphasizes that terraforming Mars is 'possible' from a physics and engineering standpoint - we know how to do it. The real obstacles are human: can we gather the enormous resources? Can nations cooperate on a millennium-scale project? Will we prioritize this over other pressing problems? Can we maintain motivation across dozens of generations? Technology is the easy part; human nature and social organization are the hard parts."
        },
        {
          type: "reflection",
          title: "🌟 Completion: Mars Terraform Architect",
          prompt: "You've learned how to transform Mars from a frozen, barren hellhole into a living, breathing world - using lasers, imported nitrogen from Saturn, carefully managed biospheres, and artificial magnetic fields. The process would take roughly 1,000 years and require unprecedented human cooperation and resources.\n\nKey takeaways:\n• Mars lost its atmosphere because solar wind stripped it away without magnetic protection\n• Thermolysis with orbital lasers can extract oxygen from Martian rocks\n• Nitrogen must be imported from Titan (Saturn) to create Earth-like atmosphere\n• Building a stable biosphere requires careful sequencing from simple to complex life\n• Artificial magnetic shield at L1 point protects atmosphere long-term\n• Timeline: ~1,000 years - similar to humanity's greatest monuments\n\nAchievement unlocked: Mars Terraform Architect. Bonus: 100 XP. Unlocks: Venus terraforming, Titan colonization, Generation ships."
        }
      ]
    }
  ]
};
// Lesson boundaries per subject (slug -> { startIndex, endIndex }) for categories with multiple lessons
let lessonBoundariesBySubject = {};

// Lesson catalog per subject (for picker): [{ slug, title, difficulty, estimatedTime, xpReward, icon }, ...]
let lessonCatalogBySubject = {};

/** Split a long paragraphs array into chunks for multiple slides. Prefers breaking after empty strings. */
function splitParagraphsForSlides(paragraphs, maxPerSlide) {
  if (!Array.isArray(paragraphs) || paragraphs.length <= maxPerSlide) {
    return paragraphs.length ? [paragraphs] : [];
  }
  const chunks = [];
  let i = 0;
  while (i < paragraphs.length) {
    let end = Math.min(i + maxPerSlide, paragraphs.length);
    if (end < paragraphs.length && paragraphs[end] === "") {
      end++;
    }
    chunks.push(paragraphs.slice(i, end));
    i = end;
  }
  return chunks;
}

const MAX_PARAGRAPHS_PER_SLIDE = 20;

// Normalize subjectLessons: expand any "lesson" with sections into flat slides (content/quiz) so renderLesson can display them
(function normalizeSubjectLessons() {
  Object.keys(subjectLessons).forEach(function (subjectKey) {
    const lessons = subjectLessons[subjectKey];
    if (!Array.isArray(lessons)) return;
    const result = [];
    const boundaries = [];
    const catalog = [];
    lessons.forEach(function (lesson) {
      if ((lesson.type === "lesson" && lesson.sections && Array.isArray(lesson.sections)) ||
          (subjectKey === "finance" && lesson.id === "money-machine" && lesson.sections && Array.isArray(lesson.sections))) {
        const subject = lesson.subject || subjectKey;
        const slug = lesson.slug || (lesson.id && String(lesson.id).replace(/^[^-]+-/, "")) || "lesson";
        const startIndex = result.length;
        catalog.push({
          slug: slug,
          title: lesson.title || "Lesson",
          subtitle: lesson.subtitle || "",
          topic: lesson.topic || "",
          difficulty: lesson.difficulty || "",
          estimatedTime: lesson.estimatedTime || "",
          xpReward: lesson.xpReward != null ? lesson.xpReward : 0,
          icon: lesson.icon || (subjectKey === "space" ? "🔴" : subjectKey === "mind" ? "🧠" : subjectKey === "finance" ? "💰" : "📚")
        });
        const firstSectionIsIntro = lesson.sections[0] && lesson.sections[0].type === "intro";
        if (lesson.imageUrl && !firstSectionIsIntro) {
          result.push({
            type: "intro",
            subject: subject,
            title: lesson.title,
            subtitle: lesson.subtitle || "",
            imageUrl: lesson.imageUrl,
            imageAlt: lesson.imageAlt || (lesson.title + " introduction")
          });
        }
        lesson.sections.forEach(function (section) {
          if (section.type === "intro") {
            result.push({
              type: "intro",
              subject: subject,
              title: section.title || lesson.title,
              subtitle: section.subtitle || lesson.subtitle || "",
              imageUrl: section.imageUrl || lesson.imageUrl,
              imageAlt: section.imageAlt || (lesson.title + " introduction")
            });
          } else if (section.type === "content") {
            const paras = section.paragraphs || [];
            if (paras.length <= MAX_PARAGRAPHS_PER_SLIDE) {
              result.push({ type: "content", subject: subject, title: section.title, paragraphs: paras, imageUrl: section.imageUrl, imageAlt: section.imageAlt });
            } else {
              const chunks = splitParagraphsForSlides(paras, MAX_PARAGRAPHS_PER_SLIDE);
              chunks.forEach(function (chunk, idx) {
                const title = idx === 0 ? section.title : section.title + " (continued)";
                const slideImageUrl = idx === 0 ? section.imageUrl : undefined;
                const slideImageAlt = idx === 0 ? section.imageAlt : undefined;
                result.push({ type: "content", subject: subject, title: title, paragraphs: chunk, imageUrl: slideImageUrl, imageAlt: slideImageAlt });
              });
            }
          } else if (section.type === "quiz") {
            result.push({ type: "quiz", subject: subject, question: section.question, options: section.options || [], explanation: section.explanation });
          } else if (section.type === "reflection") {
            result.push({ type: "content", subject: subject, title: section.title, paragraphs: [section.prompt || ""] });
          } else if (section.type === "interactive") {
            result.push({
              type: "interactive",
              subject: subject,
              title: section.title,
              subtitle: section.subtitle || "",
              interactiveType: section.interactiveType || "calculator",
              scenarios: section.scenarios,
              items: section.items
            });
          }
        });
        boundaries.push({ slug: slug, startIndex: startIndex, endIndex: result.length });
      } else {
        result.push(lesson);
      }
    });
    subjectLessons[subjectKey] = result;
    lessonBoundariesBySubject[subjectKey] = boundaries;
    lessonCatalogBySubject[subjectKey] = catalog;
  });
  // Synthetic catalog for single-lesson subjects (finance, mind) so dropdown shows one lesson each
  const subjectNames = { finance: "Investing", mind: "Mind", space: "Space" };
  const subjectIcons = { finance: "💰", mind: "🧠", space: "🚀" };
  Object.keys(subjectLessons).forEach(function (subjectKey) {
    const catalog = lessonCatalogBySubject[subjectKey];
    const slides = subjectLessons[subjectKey];
    if (catalog.length === 0 && slides.length > 0) {
      const first = slides[0];
      const title = (first.type === "intro" && first.title) ? first.title : (first.title || subjectNames[subjectKey] || subjectKey);
      lessonCatalogBySubject[subjectKey] = [{
        slug: "main",
        title: typeof title === "string" ? title : (subjectNames[subjectKey] || subjectKey),
        subtitle: (first.type === "intro" && first.subtitle) ? first.subtitle : "",
        difficulty: "",
        estimatedTime: "~15 min",
        xpReward: 50,
        icon: subjectIcons[subjectKey] || "📚"
      }];
      lessonBoundariesBySubject[subjectKey] = [{ slug: "main", startIndex: 0, endIndex: slides.length }];
    }
  });
  // If subject has catalog entries but first lesson starts after index 0, prepend "main" for the leading flat slides (e.g. Finance: Investing 101 + Money Machine)
  Object.keys(subjectLessons).forEach(function (subjectKey) {
    const catalog = lessonCatalogBySubject[subjectKey];
    const boundaries = lessonBoundariesBySubject[subjectKey];
    const slides = subjectLessons[subjectKey];
    const shouldPrependMain = (catalog.length >= 1 && boundaries.length >= 1 && boundaries[0].startIndex > 0 && slides.length > 0) ||
      (subjectKey === "finance" && catalog.length === 1 && (catalog[0].slug === "machine" || catalog[0].slug === "money-machine") && slides.length > 0 &&
       slides[0].type === "intro" && typeof slides[0].title === "string" && slides[0].title.indexOf("Investing") !== -1);
    if (shouldPrependMain) {
      const first = slides[0];
      const mainTitle = (first.type === "intro" && first.title) ? first.title : (subjectNames[subjectKey] || subjectKey);
      const mainEndIndex = boundaries.length >= 1 ? boundaries[0].startIndex : slides.length;
      lessonCatalogBySubject[subjectKey] = [{
        slug: "main",
        title: typeof mainTitle === "string" ? mainTitle : (subjectNames[subjectKey] || subjectKey),
        subtitle: (first.type === "intro" && first.subtitle) ? first.subtitle : "",
        difficulty: "",
        estimatedTime: "~15 min",
        xpReward: 50,
        icon: subjectIcons[subjectKey] || "📚"
      }].concat(catalog);
      lessonBoundariesBySubject[subjectKey] = [
        { slug: "main", startIndex: 0, endIndex: mainEndIndex }
      ].concat(boundaries);
    }
  });
})();

// Categories structure (used by world grid + horizontal category picker)
const categories = [
  {
    id: "finance",
    name: "Finance",
    icon: "💰",
    subtitle: "Money and capital",
    subjects: ["finance"]
  },
  {
    id: "psychology",
    name: "Psychology",
    icon: "🧠",
    subtitle: "Mind and behavior",
    subjects: ["mind"]
  },
  {
    id: "space",
    name: "Space",
    icon: "🚀",
    subtitle: "Explore the mysteries of the universe",
    subjects: ["space"]
  }
];

// Subject metadata
const subjectMetadata = {
  finance: {
    name: "Investing",
    icon: "💰",
    subtitle: "The real-world skill school forgot to mention",
    category: "foundations"
  },
  mind: {
    name: "Mind",
    icon: "🧠",
    subtitle: "Why your brain finds meaning",
    category: "psychology"
  },
  space: {
    name: "Space",
    icon: "🚀",
    subtitle: "Explore the mysteries of the universe",
    category: "space"
  }
};

let activeSubject = "finance";
let currentIndex = 0;
let xp = 120;
let pendingXp = 0;
let era = "Foundations";
let activeCategory = null;
/** When in a category with multiple lessons, which lesson slug is active (null = on lesson picker). */
let activeLessonSlug = null;
/** When false, show home state (header + subject dropdown only); lesson loads only after user selects a subject. */
let userHasSelectedSubject = false;

function getLessonCatalog(subjectKey) {
  return lessonCatalogBySubject[subjectKey] || [];
}

function getLessonStartIndex(subjectKey, slug) {
  const boundaries = lessonBoundariesBySubject[subjectKey] || [];
  const b = boundaries.find((x) => x.slug === slug);
  return b ? b.startIndex : 0;
}

function getLessonSlugAt(subjectKey, index) {
  const boundaries = lessonBoundariesBySubject[subjectKey] || [];
  for (let i = boundaries.length - 1; i >= 0; i--) {
    if (index >= boundaries[i].startIndex && index < boundaries[i].endIndex) return boundaries[i].slug;
  }
  return null;
}

function hasLessonPicker(subjectKey) {
  const catalog = getLessonCatalog(subjectKey);
  return catalog.length > 1;
}

// Streak tracking
let streak = 0;
let lastLessonDate = null; // ISO date string (YYYY-MM-DD)

// Expose variables globally for Firebase module access
window.xp = xp;
window.streak = streak;
window.lastLessonDate = lastLessonDate;
let completedDays = {}; // Object with dates as keys (YYYY-MM-DD) for tracking daily completions

// Completed lessons (XP already awarded once; key = subject key e.g. "finance", "investing")
let completedLessonsForXp = [];

// Session tracking
let sessionXpGained = 0; // XP gained in current session
let sessionStartTime = null; // When current session started
let sessionTimeSpent = 0; // Time spent in current session (in seconds)

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

// Load user data from localStorage (or rely on Firestore when username is set)
function loadUserData() {
  const useFirebase = typeof window.firebaseIsLoggedIn === "function" && window.firebaseIsLoggedIn();

  if (!useFirebase) {
    const savedXp = localStorage.getItem("shinyos_xp");
    if (savedXp !== null) {
      xp = parseInt(savedXp, 10) || 120;
      const xpValue = $("#xpValue");
      if (xpValue) xpValue.textContent = xp.toString();
      updateXpProgress();
    }
    const savedBadges = localStorage.getItem("shinyos_badges");
    if (savedBadges) {
      try {
        window.earnedBadges = JSON.parse(savedBadges);
      } catch (e) {
        window.earnedBadges = [];
      }
    } else {
      window.earnedBadges = [];
    }
    const savedStreak = localStorage.getItem("shinyos_streak");
    if (savedStreak !== null) streak = parseInt(savedStreak, 10) || 0;
    const savedLastDate = localStorage.getItem("shinyos_last_lesson_date");
    if (savedLastDate) lastLessonDate = savedLastDate;
    checkAndUpdateStreak();
  } else {
    // Sync app globals from Firestore (already applied via syncProgressToApp)
    if (typeof window.xp !== "undefined") xp = window.xp;
    if (typeof window.streak !== "undefined") streak = window.streak;
    if (typeof window.lastLessonDate !== "undefined") lastLessonDate = window.lastLessonDate;
    if (typeof window.earnedBadges !== "undefined") window.earnedBadges = window.earnedBadges || [];
  }

  const savedTime = localStorage.getItem("shinyos_time_spent");
  if (savedTime !== null) totalTimeSpent = parseInt(savedTime, 10) || 0;

  const savedCompletedDays = localStorage.getItem("shinyos_completed_days");
  if (savedCompletedDays) {
    try {
      completedDays = JSON.parse(savedCompletedDays);
    } catch (e) {
      completedDays = {};
    }
  }

  const savedCompletedLessonsXp = localStorage.getItem("shinyos_completed_lessons_xp");
  if (savedCompletedLessonsXp) {
    try {
      completedLessonsForXp = JSON.parse(savedCompletedLessonsXp);
      if (!Array.isArray(completedLessonsForXp)) completedLessonsForXp = [];
    } catch (e) {
      completedLessonsForXp = [];
    }
  } else {
    completedLessonsForXp = [];
  }

  updateStreakDisplay();
  sessionXpGained = 0;
  sessionStartTime = Date.now();
  sessionTimeSpent = 0;

  syncBottomXpPill();
}

// Save user data to localStorage AND Firestore (if logged in)
function saveUserData() {
  // Always save to localStorage as fallback
  localStorage.setItem('shinyos_xp', xp.toString());
  if (window.earnedBadges) {
    localStorage.setItem('shinyos_badges', JSON.stringify(window.earnedBadges));
  }
  localStorage.setItem('shinyos_time_spent', totalTimeSpent.toString());
  localStorage.setItem('shinyos_streak', streak.toString());
  if (lastLessonDate) {
    localStorage.setItem('shinyos_last_lesson_date', lastLessonDate);
  }
  localStorage.setItem('shinyos_completed_days', JSON.stringify(completedDays));
  localStorage.setItem('shinyos_completed_lessons_xp', JSON.stringify(completedLessonsForXp));

  // Also save to Firestore if logged in
  if (window.firebaseSaveProgress) {
    window.firebaseSaveProgress();
  }
}

// Completed-lesson XP: only award XP once per lesson. Key = subjectKey for single-lesson, "subjectKey/slug" for multi-lesson.
function isLessonCompletedForXp(subjectKey, slug) {
  if (!Array.isArray(completedLessonsForXp)) return false;
  const key = slug ? subjectKey + "/" + slug : subjectKey;
  if (completedLessonsForXp.includes(key)) return true;
  if (!slug && completedLessonsForXp.includes(subjectKey)) return true; // backward compat
  return false;
}
function markLessonCompletedForXp(subjectKey, slug) {
  if (!Array.isArray(completedLessonsForXp)) completedLessonsForXp = [];
  const key = slug ? subjectKey + "/" + slug : subjectKey;
  if (!completedLessonsForXp.includes(key)) {
    completedLessonsForXp.push(key);
    saveUserData();
  }
}
function isAnyLessonCompletedForSubject(subjectKey) {
  if (!Array.isArray(completedLessonsForXp)) return false;
  return completedLessonsForXp.some(function (k) {
    return k === subjectKey || (typeof k === "string" && k.startsWith(subjectKey + "/"));
  });
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

// Keep bottom XP pill in sync: show pending (+8/+2) when earned, else show total XP (from header or app state)
function syncBottomXpPill() {
  const pillEl = document.getElementById("pendingXp");
  if (!pillEl) return;
  const displayVal = pendingXp > 0
    ? pendingXp
    : (() => {
        const headerEl = document.getElementById("xpValue");
        if (headerEl && headerEl.textContent) {
          const n = parseInt(headerEl.textContent, 10);
          if (!isNaN(n)) return n;
        }
        return xp;
      })();
  pillEl.textContent = String(displayVal);
}

// Expose for Firebase module so it can refresh the pill when it updates the header
window.syncBottomXpPill = syncBottomXpPill;

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
  
  // Also add to Firestore lessonsCompleted
  if (window.firebaseAddCompletedLesson) {
    window.firebaseAddCompletedLesson(badgeId);
  }
  
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

// Get today's date as YYYY-MM-DD string
function getTodayDateString() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

// Check if streak should be broken (missed a day)
function checkAndUpdateStreak() {
  const today = getTodayDateString();
  
  if (!lastLessonDate) {
    // No previous lesson date, streak stays at 0
    return;
  }
  
  const lastDate = new Date(lastLessonDate);
  const todayDate = new Date(today);
  const daysDiff = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
  
  if (daysDiff > 1) {
    // More than 1 day has passed, break the streak
    streak = 0;
    saveUserData();
    updateStreakDisplay();
  }
}

// Update streak when lesson is completed
function updateStreakOnLessonComplete() {
  const today = getTodayDateString();
  
  // Mark today as completed
  completedDays[today] = true;
  
  // Calculate session time spent
  if (sessionStartTime) {
    sessionTimeSpent = Math.floor((Date.now() - sessionStartTime) / 1000);
  }
  
  if (!lastLessonDate) {
    // First lesson ever
    streak = 1;
    lastLessonDate = today;
  } else if (lastLessonDate === today) {
    // Already completed a lesson today, don't increment streak
    // (but still update the date to be safe)
    lastLessonDate = today;
  } else {
    // Check if it's consecutive days
    const lastDate = new Date(lastLessonDate);
    const todayDate = new Date(today);
    const daysDiff = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
    
    if (daysDiff === 1) {
      // Consecutive day, increment streak
      streak += 1;
    } else if (daysDiff === 0) {
      // Same day, don't increment
      // (already handled above, but keeping for safety)
    } else {
      // More than 1 day gap, reset streak to 1
      streak = 1;
    }
    
    lastLessonDate = today;
  }
  
  // Sync for Firebase
  window.streak = streak;
  window.lastLessonDate = lastLessonDate;
  
  saveUserData();
  updateStreakDisplay();
  
  // Show streak screen with hedgehog
  showStreakScreen();
}

// Update streak display in UI
function updateStreakDisplay() {
  const streakValue = $("#streakValue");
  if (streakValue) {
    streakValue.textContent = streak.toString();
  }
}

// Show streak screen with week calendar, XP, time, and streak info
function showStreakScreen() {
  // First show the hedgehog creature reaction
  if (window.showCreatureReaction) {
    window.showCreatureReaction("hedgehog", "streak");
  }
  
  // Wait a bit for the creature to appear, then show the streak screen
  setTimeout(() => {
    const root = document.getElementById("creature-reaction-root");
    if (!root) return;
    
    // Get current week's dates
    const today = new Date();
    const currentWeek = getCurrentWeekDates(today);
    
    // Create streak screen overlay
    const streakScreen = document.createElement("div");
    streakScreen.id = "streakScreen";
    streakScreen.className = "streak-screen";
    
    // Calculate time spent (seconds only)
    const timeDisplay = `${sessionTimeSpent}s`;
    
    // Build week calendar
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let weekCalendarHTML = '<div class="streak-week-calendar">';
    
    currentWeek.forEach((date, index) => {
      const dateStr = date.toISOString().split('T')[0];
      const dayName = weekDays[date.getDay()];
      const isCompleted = completedDays[dateStr] || false;
      const isToday = dateStr === getTodayDateString();
      
      weekCalendarHTML += `
        <div class="streak-day ${isToday ? 'streak-day--today' : ''} ${isCompleted ? 'streak-day--completed' : ''}">
          <div class="streak-day-name">${dayName}</div>
          <div class="streak-day-date">${date.getDate()}</div>
          ${isCompleted ? '<div class="streak-day-check">✓</div>' : ''}
        </div>
      `;
    });
    
    weekCalendarHTML += '</div>';
    
    streakScreen.innerHTML = `
      <div class="streak-screen-content">
        <div class="streak-screen-header">
          <div class="streak-hedgehog-container">
            <div class="streak-hedgehog">🦔</div>
          </div>
          <div class="streak-screen-title">🔥 Streak Update</div>
        </div>
        
        <div class="streak-screen-stats">
          <div class="streak-stat">
            <div class="streak-stat-label">Cumulative Streak</div>
            <div class="streak-stat-value">${streak} day${streak !== 1 ? 's' : ''}</div>
          </div>
          
          <div class="streak-stat">
            <div class="streak-stat-label">XP Gained</div>
            <div class="streak-stat-value">+${sessionXpGained} XP</div>
          </div>
          
          <div class="streak-stat">
            <div class="streak-stat-label">Time Spent</div>
            <div class="streak-stat-value">${timeDisplay}</div>
          </div>
        </div>
        
        ${weekCalendarHTML}
        
        <button class="streak-screen-close" onclick="closeStreakScreen()">Continue</button>
      </div>
    `;
    
    // Append to root (same container as creature reaction)
    root.appendChild(streakScreen);
    
    // Animate in
    setTimeout(() => {
      streakScreen.classList.add('streak-screen--visible');
      // Auto-close and navigate home after 2.5 seconds
      setTimeout(() => closeStreakScreen(), 2500);
    }, 100);
  }, 2000); // Wait 2 seconds for creature to appear first
}

// Get dates for current week (Sunday to Saturday)
function getCurrentWeekDates(date) {
  const dates = [];
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - day); // Go back to Sunday
  
  for (let i = 0; i < 7; i++) {
    const weekDate = new Date(startOfWeek);
    weekDate.setDate(startOfWeek.getDate() + i);
    dates.push(weekDate);
  }
  
  return dates;
}

// Close streak screen
function closeStreakScreen() {
  const streakScreen = document.getElementById("streakScreen");
  if (streakScreen) {
    streakScreen.classList.remove('streak-screen--visible');
    setTimeout(() => {
      if (streakScreen.parentNode) {
        streakScreen.parentNode.removeChild(streakScreen);
      }
    }, 300);
  }
  
  // Reset session tracking for next session
  sessionXpGained = 0;
  sessionStartTime = Date.now();
  sessionTimeSpent = 0;

  // Navigate back to home so user sees the tree
  showHomeState();
  closeAllSubjectDropdowns();
  clearHashFromUrl();
  renderSubjectDropdownsActiveState();
}

// Expose close function globally
window.closeStreakScreen = closeStreakScreen;

// Check and award lesson completion badge
function checkLessonCompletion() {
  const lessons = getCurrentLessons();
  if (currentIndex >= lessons.length - 1) {
    // Lesson is complete
    const badgeId = `${activeSubject}-complete`;
    if (badges[badgeId]) {
      awardBadge(badgeId);
    }

    const completionKey = hasLessonPicker(activeSubject) ? activeLessonSlug : null;
    const alreadyCompleted = isLessonCompletedForXp(activeSubject, completionKey || undefined);
    if (!alreadyCompleted) {
      // Award bonus XP for completing lesson (first time only)
      const bonusXp = 50;
      xp += bonusXp;
      window.xp = xp; // Sync for Firebase
      sessionXpGained += bonusXp; // Track session XP
      const xpValue = $("#xpValue");
      if (xpValue) xpValue.textContent = xp.toString();
      updateXpProgress();
      markLessonCompletedForXp(activeSubject, completionKey || undefined);
    }

    // Update streak when lesson is completed
    updateStreakOnLessonComplete();

    saveUserData();

    // Show message
    const hintText = $("#hintText");
    if (hintText) {
      if (alreadyCompleted) {
        hintText.textContent = "Lesson complete! (No additional XP — already completed.)";
      } else {
        hintText.textContent = `🎉 Lesson complete! +50 bonus XP!`;
        hintText.classList.add('hint-success');
      }
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
  const xpValue = document.getElementById("xpValue") || $("#xpValue");
  const pendingXpEl = document.getElementById("pendingXp") || $("#pendingXp");
  
  if (pendingXpEl) {
    pendingXpEl.classList.add('xp-pulse');
  }
  if (xpValue) {
    xpValue.classList.add('xp-gain');
  }
  
  setTimeout(() => {
    if (pendingXpEl) {
      pendingXpEl.classList.remove('xp-pulse');
    }
    if (xpValue) {
      xpValue.classList.remove('xp-gain');
    }
  }, 600);
}

function getCurrentLessons() {
  return subjectLessons[activeSubject] || [];
}

// Get lessons for a selected category (subject in UI: Finance, Psychology, Space)
function getLessonsForCategory(categoryId) {
  const category = categories.find((c) => c.id === categoryId);
  if (!category || !category.subjects || category.subjects.length === 0) return [];
  const subjectId = category.subjects[0];
  return subjectLessons[subjectId] || [];
}

// Get the actual subject key (for lesson data) for a category
function getSubjectKeyForCategory(categoryId) {
  const category = categories.find((c) => c.id === categoryId);
  if (!category || !category.subjects || category.subjects.length === 0) return null;
  return category.subjects[0];
}

// Get finance/investing related image for quizzes
function getFinanceQuizImage(quizIndex) {
  // Collection of diverse finance/investing related images from Unsplash
  // Using different photo IDs to ensure variety and prevent repetition
  // Each image uses a different photo ID or different crop/focus point
  const financeImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop", // Money/coins
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop", // Stock market graph
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop", // Financial charts
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop", // Financial data
    "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=400&fit=crop", // Money growth/investment
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop", // Currency/money stacks
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop", // Financial planning
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop", // Trading charts
    "https://images.unsplash.com/photo-1554224154-26032e7140dd?w=800&h=400&fit=crop", // Calculator and money
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop", // Financial documents
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80&auto=format", // Money/coins (variant)
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop&q=80&auto=format", // Stock graph (variant)
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop&q=80&auto=format", // Charts (variant)
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80&auto=format", // Financial data (variant)
    "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=400&fit=crop&q=80&auto=format", // Investment (variant)
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop&q=80&auto=format", // Currency (variant)
    "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop&q=80&auto=format", // Planning (variant)
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=400&fit=crop&q=80&auto=format", // Trading (variant)
    "https://images.unsplash.com/photo-1554224154-26032e7140dd?w=800&h=400&fit=crop&q=80&auto=format", // Calculator (variant)
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop&q=80&auto=format", // Documents (variant)
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&dpr=2", // Money/coins (high res)
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop&dpr=2", // Stock graph (high res)
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop&dpr=2", // Charts (high res)
  ];
  
  // Cycle through images based on quiz index to ensure variety
  const imageIndex = quizIndex % financeImages.length;
  return financeImages[imageIndex];
}

// Get space/astronomy related image for quizzes
function getSpaceQuizImage(quizIndex) {
  const spaceImages = [
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=400&fit=crop", // Galaxy
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=400&fit=crop", // Space/stars
    "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=800&h=400&fit=crop", // Earth from space
    "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&h=400&fit=crop", // Mars
    "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=800&h=400&fit=crop", // Nebula
    "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&h=400&fit=crop", // Moon
    "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&h=400&fit=crop", // Aurora
    "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&h=400&fit=crop", // Telescope/space
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=400&fit=crop", // Stars
    "https://images.unsplash.com/photo-1579972841827-6a7690395092?w=800&h=400&fit=crop", // Planet
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&h=400&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=400&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&h=400&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=800&h=400&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&h=400&fit=crop&q=80&auto=format",
  ];
  const imageIndex = quizIndex % spaceImages.length;
  return spaceImages[imageIndex];
}

// Get mind/psychology related image for quizzes
function getMindQuizImage(quizIndex) {
  const mindImages = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop", // Brain
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=400&fit=crop", // Neural/abstract
    "https://images.unsplash.com/photo-1516307365426-bea591f050c9?w=800&h=400&fit=crop", // Psychology
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop", // Brain scan
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=400&fit=crop", // Mind/meditation
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop", // Thinking
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop", // Pattern/abstract
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=400&fit=crop", // Network/connections
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop", // Brain structure
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop", // Psychology/thinking
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=400&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1516307365426-bea591f050c9?w=800&h=400&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=400&fit=crop&q=80&auto=format",
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop&q=80&auto=format",
  ];
  const imageIndex = quizIndex % mindImages.length;
  return mindImages[imageIndex];
}

// Add mini hedgehog overlay to subject images (finance, space, mind)
function addHedgehogOverlay(imageContainer) {
  const hedgehog = document.createElement("div");
  hedgehog.textContent = "🦔";
  hedgehog.style.position = "absolute";
  hedgehog.style.fontSize = "40px";
  hedgehog.style.pointerEvents = "auto";
  hedgehog.style.zIndex = "100";
  hedgehog.style.opacity = "0.95";
  hedgehog.style.filter = "drop-shadow(0 3px 10px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 8px rgba(184, 107, 255, 0.4))";
  hedgehog.style.transition = "transform 0.3s ease, opacity 0.3s ease";
  hedgehog.style.animation = "hedgehog-float 3s ease-in-out infinite";
  hedgehog.style.cursor = "pointer";
  
  // Random position within image (avoid edges)
  const minX = 15;
  const maxX = 85; // percentage
  const minY = 15;
  const maxY = 80; // percentage
  const randomX = minX + Math.random() * (maxX - minX);
  const randomY = minY + Math.random() * (maxY - minY);
  
  hedgehog.style.left = randomX + "%";
  hedgehog.style.top = randomY + "%";
  hedgehog.style.transform = "translate(-50%, -50%)";
  
  // Ensure container has relative positioning
  imageContainer.style.position = "relative";
  imageContainer.appendChild(hedgehog);
  
  // Add hover effect
  hedgehog.addEventListener("mouseenter", () => {
    hedgehog.style.transform = "translate(-50%, -50%) scale(1.3)";
    hedgehog.style.opacity = "1";
  });
  hedgehog.addEventListener("mouseleave", () => {
    hedgehog.style.transform = "translate(-50%, -50%) scale(1)";
    hedgehog.style.opacity = "0.95";
  });
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
  const progressFill = $("#lessonProgressFill");
  const hintText = $("#hintText");
  const nextBtn = $("#nextBtn");

  if (!contentEl) {
    console.error("lessonContent element not found!");
    return;
  }

  contentEl.classList.remove("lesson-intro-page");

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

  // Default Next button text (overridden for intro)
  if (nextBtn) nextBtn.textContent = "Continue";

  // Reset hint + pending XP display (pill shows total XP when no pending)
  pendingXp = 0;
  syncBottomXpPill();
  // Set hint text: show retake message if lesson already completed for XP, else by lesson type
  const completionKey = hasLessonPicker(activeSubject) ? activeLessonSlug : null;
  if (currentIndex === 0 && isLessonCompletedForXp(activeSubject, completionKey || undefined)) {
    hintText.textContent = "This lesson is completed. You can practice again but won't earn additional XP.";
  } else if (lesson.type === "interactive") {
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
    if (nextBtn) nextBtn.textContent = "Start Learning";

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
    contentEl.className = "lesson-content lesson-intro-page";
    contentEl.style.display = "block";
    contentEl.style.visibility = "visible";
    contentEl.style.opacity = "1";
    contentEl.classList.remove("is-hidden");
    contentEl.style.textAlign = "center";
    contentEl.style.padding = "40px 20px";
    contentEl.style.background = "transparent";

    // Wrapper for entrance animation
    const introWrapper = document.createElement("div");
    introWrapper.className = "lesson-intro-inner";

    // Create image container with premium styling
    const imageContainer = document.createElement("div");
    imageContainer.className = "lesson-intro-image-wrap";
    imageContainer.style.position = "relative";

    const img = document.createElement("img");
    let imagePath = lesson.imageUrl || (activeSubject === "space" ? "images/black-holes-intro.png" : "images/investing-intro.png");
    let finalPath = imagePath.startsWith("/") ? imagePath.substring(1) : imagePath;
    if (!finalPath.startsWith("images/") && !finalPath.startsWith("http")) {
      finalPath = "images/" + finalPath;
    }

    img.alt = lesson.imageAlt || "Subject image";
    img.className = "lesson-intro-image";
    img.loading = "eager";

    imageContainer.appendChild(img);

    const cacheBuster = `?v=${Date.now()}`;
    const finalPathWithCache = finalPath + cacheBuster;

    img.src = finalPathWithCache;

    img.onerror = function() {
      console.error("❌ Image failed to load:", this.src);
      this.style.display = "none";
      const subjectIcon = activeSubject === "space" ? "🔴" : (activeSubject === "finance" ? "💰" : "📚");
      imageContainer.classList.add("lesson-intro-image--error");
      const placeholder = document.createElement("div");
      placeholder.className = "lesson-intro-placeholder";
      placeholder.textContent = subjectIcon;
      imageContainer.appendChild(placeholder);
    };

    img.onload = function() {
      console.log("✅ Intro image loaded successfully");
      this.style.display = "block";
      addHedgehogOverlay(imageContainer);
    };

    introWrapper.appendChild(imageContainer);

    // Subtitle text (staggered animation)
    if (lesson.subtitle) {
      const subtitleEl = document.createElement("p");
      subtitleEl.className = "lesson-intro-subtitle slide-in-up";
      subtitleEl.style.animationDelay = "0.25s";
      subtitleEl.style.opacity = "0";
      subtitleEl.textContent = lesson.subtitle;
      introWrapper.appendChild(subtitleEl);
    }

    contentEl.appendChild(introWrapper);

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
    
    // Add image with hedgehog overlay when present
    if (lesson.imageUrl) {
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
      imageContainer.style.position = "relative";
      
      const img = document.createElement("img");
      img.alt = lesson.imageAlt || "Slide image";
      img.style.width = "100%";
      img.style.height = "auto";
      img.style.minHeight = "200px";
      img.style.maxHeight = "300px";
      img.style.objectFit = "cover";
      img.style.display = "block";
      img.style.filter = "brightness(1.1) contrast(1.05)";
      img.loading = "lazy";
      img.crossOrigin = "anonymous";
      img.src = lesson.imageUrl;
      
      img.onerror = function() {
        this.style.display = "none";
        imageContainer.style.backgroundColor = "rgba(184, 107, 255, 0.2)";
        imageContainer.style.border = "2px dashed rgba(184, 107, 255, 0.4)";
        imageContainer.style.display = "flex";
        imageContainer.style.alignItems = "center";
        imageContainer.style.justifyContent = "center";
        const placeholder = document.createElement("div");
        placeholder.textContent = "🧠";
        placeholder.style.fontSize = "80px";
        placeholder.style.opacity = "0.6";
        imageContainer.appendChild(placeholder);
        addHedgehogOverlay(imageContainer);
      };
      
      img.onload = function() {
        addHedgehogOverlay(imageContainer);
      };
      
      imageContainer.appendChild(img);
      contentEl.appendChild(imageContainer);
    }
    
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
    
    const interactiveType = lesson.interactiveType || "calculator";
    if (interactiveType === "cup-hedgehog") {
      const gameEl = document.createElement("div");
      gameEl.className = "game-panel interactive-mind slide-in-up";
      gameEl.style.animationDelay = "0.2s";
      gameEl.style.padding = "24px";
      gameEl.style.background = "linear-gradient(135deg, rgba(184, 107, 255, 0.15), rgba(20, 18, 35, 0.8))";
      gameEl.style.borderRadius = "var(--radius-md)";
      gameEl.style.border = "2px solid rgba(184, 107, 255, 0.3)";
      gameEl.style.textAlign = "center";

      const messageP = document.createElement("p");
      messageP.style.color = "var(--text-soft)";
      messageP.style.marginBottom = "4px";
      messageP.style.minHeight = "24px";
      gameEl.appendChild(messageP);

      const roundScoreP = document.createElement("p");
      roundScoreP.style.fontSize = "14px";
      roundScoreP.style.color = "var(--text-soft)";
      roundScoreP.style.marginBottom = "16px";
      gameEl.appendChild(roundScoreP);

      let message = "";
      let round = 1;
      let score = 0;
      let phase = "intro";
      let cups = [];
      let hedgehogPos = 0;
      let animSwap = null;
      const maxRounds = 3;

      function updateDisplay() {
        messageP.textContent = message || "Press Start to begin";
        roundScoreP.textContent = "Round: " + round + " / " + maxRounds + " • Score: " + score;
      }

      function renderCupGrid() {
        const existing = gameEl.querySelector(".cup-grid");
        if (existing) existing.remove();
        const cupGrid = document.createElement("div");
        cupGrid.className = "cup-grid";
        cupGrid.style.display = "grid";
        cupGrid.style.gridTemplateColumns = "repeat(" + Math.ceil(Math.sqrt(cups.length || 1)) + ", 1fr)";
        cupGrid.style.gap = "12px";
        cupGrid.style.maxWidth = "520px";
        cupGrid.style.margin = "16px auto";
        cups.forEach(function (cupId, positionIndex) {
          const isSwapHighlight = animSwap && (animSwap.a === positionIndex || animSwap.b === positionIndex);
          const showHedgehog = (phase === "show" || phase === "reveal" || phase === "result") && positionIndex === hedgehogPos;
          const btn = document.createElement("button");
          btn.type = "button";
          btn.setAttribute("data-cup-id", cupId);
          btn.style.height = "84px";
          btn.style.borderRadius = "16px";
          btn.style.border = "2px solid rgba(255,255,255,0.15)";
          btn.style.background = isSwapHighlight ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.25)";
          btn.style.cursor = phase === "pick" ? "pointer" : "default";
          btn.style.fontSize = "26px";
          btn.title = phase === "pick" ? "Pick me" : "";
          btn.style.color = "#fff";
          const cupSpan = document.createElement("span");
          cupSpan.style.display = "inline-block";
          cupSpan.style.transform = "translateY(2px)";
          cupSpan.textContent = "🥤";
          btn.appendChild(cupSpan);
          if (showHedgehog) {
            const hogSpan = document.createElement("span");
            hogSpan.style.marginLeft = "10px";
            hogSpan.textContent = "🦔";
            btn.appendChild(hogSpan);
          }
          btn.addEventListener("click", function () {
            onPickCup(positionIndex);
          });
          cupGrid.appendChild(btn);
        });
        gameEl.appendChild(cupGrid);
      }

      function startCupHedgehogRound(r) {
        round = r;
        cups = ["cup-1", "cup-2", "cup-3"];
        hedgehogPos = Math.floor(Math.random() * cups.length);
        animSwap = null;
        phase = "show";
        message = "See the hedgehog? Watch closely!";
        updateDisplay();
        renderCupGrid();
        updateStartAndResetButtons();

        setTimeout(function () {
          phase = "cover";
          message = "Cups cover it...";
          updateDisplay();
          renderCupGrid();
        }, 2000);

        setTimeout(function () {
          phase = "shuffle";
          const numSwaps = 5;
          let swapCount = 0;
          function doNextSwap() {
            if (swapCount >= numSwaps) {
              animSwap = null;
              phase = "pick";
              message = "Where did the hedgehog go? Pick a cup!";
              updateDisplay();
              renderCupGrid();
              updateStartAndResetButtons();
              return;
            }
            let a = Math.floor(Math.random() * cups.length);
            let b = Math.floor(Math.random() * cups.length);
            while (b === a) b = Math.floor(Math.random() * cups.length);
            animSwap = { a: a, b: b };
            [cups[a], cups[b]] = [cups[b], cups[a]];
            if (hedgehogPos === a) hedgehogPos = b; else if (hedgehogPos === b) hedgehogPos = a;
            renderCupGrid();
            swapCount++;
            setTimeout(function () {
              animSwap = null;
              renderCupGrid();
              setTimeout(doNextSwap, 100);
            }, 450);
          }
          doNextSwap();
        }, 2500);
      }

      function onPickCup(positionIndex) {
        if (phase !== "pick") return;
        const correct = positionIndex === hedgehogPos;
        if (correct) score++;
        phase = "reveal";
        message = correct ? "🦔 Found it! Well done!" : "Wrong cup! The hedgehog was under another one.";
        updateDisplay();
        renderCupGrid();
        phase = "result";
        if (round < maxRounds) {
          setTimeout(function () {
            startCupHedgehogRound(round + 1);
          }, 1500);
        } else {
          message = "Game over! Final score: " + score + " / " + maxRounds + ". Press Reset to play again.";
          updateDisplay();
          updateStartAndResetButtons();
        }
      }

      function resetGame() {
        round = 1;
        score = 0;
        phase = "intro";
        message = "";
        cups = [];
        updateDisplay();
        renderCupGrid();
        updateStartAndResetButtons();
      }

      const buttonContainer = document.createElement("div");
      buttonContainer.style.marginTop = "16px";
      buttonContainer.style.display = "flex";
      buttonContainer.style.gap = "12px";
      buttonContainer.style.justifyContent = "center";
      buttonContainer.style.flexWrap = "wrap";

      const startBtn = document.createElement("button");
      startBtn.type = "button";
      startBtn.textContent = "Start";
      startBtn.style.padding = "12px 24px";
      startBtn.style.background = "linear-gradient(135deg, #b86bff, #8b5cf6)";
      startBtn.style.color = "#fff";
      startBtn.style.border = "none";
      startBtn.style.borderRadius = "8px";
      startBtn.style.fontSize = "15px";
      startBtn.style.fontWeight = "600";
      startBtn.style.cursor = "pointer";
      startBtn.addEventListener("click", function () { startCupHedgehogRound(1); });

      const resetBtn = document.createElement("button");
      resetBtn.type = "button";
      resetBtn.textContent = "Reset";
      resetBtn.style.padding = "12px 24px";
      resetBtn.style.background = "rgba(255, 255, 255, 0.08)";
      resetBtn.style.color = "#fff";
      resetBtn.style.border = "2px solid rgba(255, 255, 255, 0.15)";
      resetBtn.style.borderRadius = "8px";
      resetBtn.style.fontSize = "15px";
      resetBtn.style.cursor = "pointer";
      resetBtn.addEventListener("click", resetGame);

      function updateStartAndResetButtons() {
        buttonContainer.innerHTML = "";
        if (phase === "intro") {
          buttonContainer.appendChild(startBtn);
        }
        if (phase !== "intro") {
          buttonContainer.appendChild(resetBtn);
        }
      }

      updateDisplay();
      renderCupGrid();
      updateStartAndResetButtons();
      gameEl.appendChild(buttonContainer);
      contentEl.appendChild(gameEl);
      contentEl.style.opacity = "1";
    } else if (interactiveType === "camera-vs-narrator") {
      const gameEl = document.createElement("div");
      gameEl.className = "interactive-mind slide-in-up";
      gameEl.style.animationDelay = "0.2s";
      gameEl.style.padding = "24px";
      gameEl.style.background = "linear-gradient(135deg, rgba(184, 107, 255, 0.15), rgba(20, 18, 35, 0.8))";
      gameEl.style.borderRadius = "var(--radius-md)";
      gameEl.style.border = "2px solid rgba(184, 107, 255, 0.3)";
      const scenarios = lesson.scenarios || [
        { fact: "Your friend didn't text back.", camera: "No text back yet.", narrator: "They're ignoring me." },
        { fact: "Teacher said: Can you stay after class?", camera: "Four words the teacher said.", narrator: "I'm in trouble." }
      ];
      const scenario = scenarios[0];
      const factP = document.createElement("p");
      factP.style.fontWeight = "600";
      factP.style.color = "#fff";
      factP.style.marginBottom = "16px";
      factP.textContent = "Fact (what actually happened): " + (scenario.fact || "");
      gameEl.appendChild(factP);
      const labelP = document.createElement("p");
      labelP.style.fontSize = "14px";
      labelP.style.color = "var(--text-soft)";
      labelP.style.marginBottom = "12px";
      labelP.textContent = "Which is the camera (just the fact), and which is the narrator (the story)?";
      gameEl.appendChild(labelP);
      const boxCamera = document.createElement("div");
      boxCamera.style.padding = "12px 16px";
      boxCamera.style.background = "rgba(53, 194, 126, 0.2)";
      boxCamera.style.borderRadius = "8px";
      boxCamera.style.marginBottom = "8px";
      boxCamera.style.border = "2px solid rgba(53, 194, 126, 0.5)";
      boxCamera.innerHTML = "<strong>Camera:</strong> " + (scenario.camera || "");
      const boxNarrator = document.createElement("div");
      boxNarrator.style.padding = "12px 16px";
      boxNarrator.style.background = "rgba(184, 107, 255, 0.2)";
      boxNarrator.style.borderRadius = "8px";
      boxNarrator.style.border = "2px solid rgba(184, 107, 255, 0.5)";
      boxNarrator.innerHTML = "<strong>Narrator:</strong> " + (scenario.narrator || "");
      gameEl.appendChild(boxCamera);
      gameEl.appendChild(boxNarrator);
      const tipP = document.createElement("p");
      tipP.style.fontSize = "13px";
      tipP.style.color = "var(--text-soft)";
      tipP.style.marginTop = "16px";
      tipP.textContent = "The camera only captures what happened. The narrator adds the story. Learning to spot the difference is the superpower!";
      gameEl.appendChild(tipP);
      contentEl.appendChild(gameEl);
      contentEl.style.opacity = "1";
    } else if (interactiveType === "flashlight") {
      const gameEl = document.createElement("div");
      gameEl.className = "interactive-mind slide-in-up";
      gameEl.style.animationDelay = "0.2s";
      gameEl.style.padding = "24px";
      gameEl.style.background = "linear-gradient(135deg, rgba(184, 107, 255, 0.15), rgba(20, 18, 35, 0.8))";
      gameEl.style.borderRadius = "var(--radius-md)";
      gameEl.style.border = "2px solid rgba(184, 107, 255, 0.3)";
      const items = lesson.items || ["Teacher talking", "Phone buzz", "Window", "Your thoughts"];
      const labelP = document.createElement("p");
      labelP.style.fontSize = "14px";
      labelP.style.color = "var(--text-soft)";
      labelP.style.marginBottom = "16px";
      labelP.textContent = "Where are you pointing your flashlight? Tap one:";
      gameEl.appendChild(labelP);
      items.forEach(function (item, idx) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = item;
        btn.style.display = "block";
        btn.style.width = "100%";
        btn.style.padding = "14px 16px";
        btn.style.marginBottom = "8px";
        btn.style.textAlign = "left";
        btn.style.background = "rgba(255, 255, 255, 0.08)";
        btn.style.border = "2px solid rgba(255, 255, 255, 0.15)";
        btn.style.borderRadius = "8px";
        btn.style.color = "#fff";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "15px";
        btn.addEventListener("click", function () {
          [].slice.call(gameEl.querySelectorAll("button")).forEach(function (b) { b.style.borderColor = "rgba(255, 255, 255, 0.15)"; });
          btn.style.borderColor = "rgba(53, 194, 126, 0.8)";
          btn.style.background = "rgba(53, 194, 126, 0.15)";
          const fb = document.getElementById("flashlightFeedback");
          if (fb) fb.remove();
          const feedback = document.createElement("p");
          feedback.id = "flashlightFeedback";
          feedback.style.marginTop = "16px";
          feedback.style.color = "var(--text-soft)";
          feedback.textContent = "That's you choosing where to focus — Top-Down attention! You're in control of the flashlight.";
          gameEl.appendChild(feedback);
        });
        gameEl.appendChild(btn);
      });
      contentEl.appendChild(gameEl);
      contentEl.style.opacity = "1";
    } else if (interactiveType === "attention-game") {
      const gameEl = document.createElement("div");
      gameEl.className = "interactive-mind slide-in-up";
      gameEl.style.animationDelay = "0.2s";
      gameEl.style.padding = "24px";
      gameEl.style.background = "linear-gradient(135deg, rgba(184, 107, 255, 0.15), rgba(20, 18, 35, 0.8))";
      gameEl.style.borderRadius = "var(--radius-md)";
      gameEl.style.border = "2px solid rgba(184, 107, 255, 0.3)";
      gameEl.style.textAlign = "center";

      const instructionsP = document.createElement("p");
      instructionsP.style.fontSize = "14px";
      instructionsP.style.color = "var(--text-soft)";
      instructionsP.style.marginBottom = "24px";
      instructionsP.textContent = lesson.instructions || "Focus on counting the red circles. Ignore everything else!";
      gameEl.appendChild(instructionsP);

      let gameActive = false;
      let redCount = 0;
      let userGuess = null;
      let round = 1;
      const maxRounds = 3;

      const canvas = document.createElement("div");
      canvas.style.minHeight = "250px";
      canvas.style.background = "rgba(0, 0, 0, 0.3)";
      canvas.style.borderRadius = "12px";
      canvas.style.padding = "32px";
      canvas.style.marginBottom = "16px";
      canvas.style.display = "flex";
      canvas.style.flexWrap = "wrap";
      canvas.style.alignItems = "center";
      canvas.style.justifyContent = "center";
      canvas.style.gap = "16px";
      canvas.style.position = "relative";
      gameEl.appendChild(canvas);

      const scoreDisplay = document.createElement("div");
      scoreDisplay.style.fontSize = "16px";
      scoreDisplay.style.fontWeight = "600";
      scoreDisplay.style.color = "#fff";
      scoreDisplay.style.marginBottom = "16px";
      scoreDisplay.textContent = `Round ${round}/${maxRounds}`;
      gameEl.appendChild(scoreDisplay);

      const inputArea = document.createElement("div");
      inputArea.style.marginBottom = "16px";
      inputArea.style.display = "none";

      const inputLabel = document.createElement("p");
      inputLabel.style.fontSize = "14px";
      inputLabel.style.color = "var(--text-soft)";
      inputLabel.style.marginBottom = "12px";
      inputLabel.textContent = "How many RED circles did you count?";
      inputArea.appendChild(inputLabel);

      const buttonWrap = document.createElement("div");
      buttonWrap.style.display = "flex";
      buttonWrap.style.gap = "8px";
      buttonWrap.style.justifyContent = "center";
      buttonWrap.style.flexWrap = "wrap";

      for (let i = 0; i <= 10; i++) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = i.toString();
        btn.style.width = "48px";
        btn.style.height = "48px";
        btn.style.background = "rgba(255, 255, 255, 0.08)";
        btn.style.border = "2px solid rgba(255, 255, 255, 0.15)";
        btn.style.borderRadius = "8px";
        btn.style.color = "#fff";
        btn.style.fontSize = "16px";
        btn.style.fontWeight = "600";
        btn.style.cursor = "pointer";
        btn.style.transition = "all 0.2s ease";

        btn.addEventListener("click", function() {
          userGuess = i;
          checkAnswer();
        });

        btn.addEventListener("mouseenter", function() {
          this.style.background = "rgba(184, 107, 255, 0.3)";
          this.style.borderColor = "rgba(184, 107, 255, 0.6)";
          this.style.transform = "scale(1.05)";
        });

        btn.addEventListener("mouseleave", function() {
          this.style.background = "rgba(255, 255, 255, 0.08)";
          this.style.borderColor = "rgba(255, 255, 255, 0.15)";
          this.style.transform = "scale(1)";
        });

        buttonWrap.appendChild(btn);
      }

      inputArea.appendChild(buttonWrap);
      gameEl.appendChild(inputArea);

      const feedback = document.createElement("p");
      feedback.style.color = "var(--text-soft)";
      feedback.style.fontSize = "14px";
      feedback.style.minHeight = "24px";
      feedback.style.marginBottom = "16px";
      gameEl.appendChild(feedback);

      const actionBtn = document.createElement("button");
      actionBtn.type = "button";
      actionBtn.textContent = "Start Challenge";
      actionBtn.style.padding = "12px 24px";
      actionBtn.style.background = "linear-gradient(135deg, #b86bff, #8b5cf6)";
      actionBtn.style.color = "#fff";
      actionBtn.style.border = "none";
      actionBtn.style.borderRadius = "8px";
      actionBtn.style.fontSize = "15px";
      actionBtn.style.fontWeight = "600";
      actionBtn.style.cursor = "pointer";
      actionBtn.style.transition = "all 0.2s ease";

      actionBtn.addEventListener("mouseenter", function() {
        this.style.transform = "translateY(-2px)";
        this.style.boxShadow = "0 4px 12px rgba(184, 107, 255, 0.4)";
      });

      actionBtn.addEventListener("mouseleave", function() {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "none";
      });

      gameEl.appendChild(actionBtn);

      function generateCircles() {
        canvas.innerHTML = "";
        const colors = ["#ef4444", "#3b82f6", "#fbbf24", "#10b981", "#8b5cf6"];
        const colorNames = ["red", "blue", "yellow", "green", "purple"];

        const totalCircles = round === 1 ? 8 : round === 2 ? 12 : 16;
        const minRed = round === 1 ? 2 : round === 2 ? 3 : 4;
        const maxRed = round === 1 ? 4 : round === 2 ? 6 : 8;

        redCount = Math.floor(Math.random() * (maxRed - minRed + 1)) + minRed;

        const circles = [];

        for (let i = 0; i < redCount; i++) {
          circles.push({ color: colors[0], name: "red" });
        }

        for (let i = 0; i < totalCircles - redCount; i++) {
          const colorIndex = Math.floor(Math.random() * (colors.length - 1)) + 1;
          circles.push({ color: colors[colorIndex], name: colorNames[colorIndex] });
        }

        for (let i = circles.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [circles[i], circles[j]] = [circles[j], circles[i]];
        }

        circles.forEach((circle, index) => {
          setTimeout(() => {
            const circleEl = document.createElement("div");
            circleEl.style.width = "60px";
            circleEl.style.height = "60px";
            circleEl.style.borderRadius = "50%";
            circleEl.style.background = `radial-gradient(circle at 30% 30%, ${circle.color}dd, ${circle.color})`;
            circleEl.style.boxShadow = `0 4px 12px ${circle.color}66, inset -2px -2px 8px rgba(0,0,0,0.3), inset 2px 2px 8px rgba(255,255,255,0.2)`;
            circleEl.style.animation = "pop-in 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
            circleEl.setAttribute("data-color", circle.name);
            canvas.appendChild(circleEl);
          }, index * 100);
        });

        setTimeout(() => {
          const distraction = document.createElement("div");
          distraction.style.position = "absolute";
          distraction.style.top = "8px";
          distraction.style.right = "8px";
          distraction.style.fontSize = "12px";
          distraction.style.color = "rgba(255, 255, 255, 0.3)";
          distraction.style.fontWeight = "600";
          distraction.textContent = `${totalCircles} shapes total`;
          canvas.appendChild(distraction);
        }, circles.length * 100 + 200);
      }

      function checkAnswer() {
        inputArea.style.display = "none";

        if (userGuess === redCount) {
          feedback.style.color = "#35c27e";
          feedback.textContent = `✓ Correct! There were ${redCount} red circles. Your Gatekeeper filtered well!`;

          const allCircles = canvas.querySelectorAll('[data-color]');
          allCircles.forEach(circle => {
            if (circle.getAttribute('data-color') === 'red') {
              circle.style.border = "3px solid #35c27e";
              circle.style.transform = "scale(1.1)";
            } else {
              circle.style.opacity = "0.3";
            }
          });
        } else {
          feedback.style.color = "#ef4444";
          const diff = Math.abs(userGuess - redCount);
          if (diff === 1) {
            feedback.textContent = `✗ Close! You guessed ${userGuess}, but there were ${redCount} red circles.`;
          } else {
            feedback.textContent = `✗ Not quite. You guessed ${userGuess}, but there were ${redCount} red circles. Try focusing harder!`;
          }

          const allCircles = canvas.querySelectorAll('[data-color]');
          allCircles.forEach(circle => {
            if (circle.getAttribute('data-color') === 'red') {
              circle.style.border = "3px solid #fbbf24";
            } else {
              circle.style.opacity = "0.3";
            }
          });
        }

        if (round < maxRounds) {
          setTimeout(() => {
            round++;
            scoreDisplay.textContent = `Round ${round}/${maxRounds}`;
            actionBtn.style.display = "inline-block";
            actionBtn.textContent = "Next Round";
          }, 2000);
        } else {
          setTimeout(() => {
            feedback.style.color = "#b86bff";
            feedback.textContent = "🎉 Challenge complete! Your attention skills are improving!";
            actionBtn.style.display = "none";
          }, 2000);
        }
      }

      actionBtn.addEventListener("click", function() {
        if (!gameActive || round > 1) {
          gameActive = true;
          feedback.textContent = "";
          actionBtn.style.display = "none";
          inputArea.style.display = "none";

          generateCircles();

          const totalCircles = round === 1 ? 8 : round === 2 ? 12 : 16;
          setTimeout(() => {
            inputArea.style.display = "block";
          }, totalCircles * 100 + 500);
        }
      });

      const style = document.createElement("style");
      style.textContent = `
        @keyframes pop-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
      `;
      document.head.appendChild(style);

      contentEl.appendChild(gameEl);
      contentEl.style.opacity = "1";
    } else if (interactiveType === "pattern-game") {
      const gameEl = document.createElement("div");
      gameEl.className = "interactive-mind slide-in-up";
      gameEl.style.animationDelay = "0.2s";
      gameEl.style.padding = "24px";
      gameEl.style.background = "linear-gradient(135deg, rgba(184, 107, 255, 0.15), rgba(20, 18, 35, 0.8))";
      gameEl.style.borderRadius = "var(--radius-md)";
      gameEl.style.border = "2px solid rgba(184, 107, 255, 0.3)";

      const titleP = document.createElement("p");
      titleP.style.fontSize = "16px";
      titleP.style.fontWeight = "600";
      titleP.style.color = "#fff";
      titleP.style.marginBottom = "16px";
      titleP.textContent = "Is this sequence random or does it have a pattern?";
      gameEl.appendChild(titleP);

      const scenarios = lesson.scenarios || [];
      let currentScenario = 0;

      const sequenceDisplay = document.createElement("div");
      sequenceDisplay.style.fontSize = "32px";
      sequenceDisplay.style.fontFamily = "monospace";
      sequenceDisplay.style.letterSpacing = "8px";
      sequenceDisplay.style.padding = "24px";
      sequenceDisplay.style.background = "rgba(0, 0, 0, 0.3)";
      sequenceDisplay.style.borderRadius = "8px";
      sequenceDisplay.style.marginBottom = "24px";
      sequenceDisplay.style.textAlign = "center";
      sequenceDisplay.textContent = scenarios[0]?.sequence || "HTHHTH";
      gameEl.appendChild(sequenceDisplay);

      const buttonWrap = document.createElement("div");
      buttonWrap.style.display = "flex";
      buttonWrap.style.gap = "12px";
      buttonWrap.style.marginBottom = "16px";

      const randomBtn = document.createElement("button");
      randomBtn.type = "button";
      randomBtn.textContent = "Random";
      randomBtn.style.flex = "1";
      randomBtn.style.padding = "12px";
      randomBtn.style.background = "rgba(255, 255, 255, 0.08)";
      randomBtn.style.border = "2px solid rgba(255, 255, 255, 0.15)";
      randomBtn.style.borderRadius = "8px";
      randomBtn.style.color = "#fff";
      randomBtn.style.cursor = "pointer";

      const patternBtn = document.createElement("button");
      patternBtn.type = "button";
      patternBtn.textContent = "Has Pattern";
      patternBtn.style.flex = "1";
      patternBtn.style.padding = "12px";
      patternBtn.style.background = "rgba(255, 255, 255, 0.08)";
      patternBtn.style.border = "2px solid rgba(255, 255, 255, 0.15)";
      patternBtn.style.borderRadius = "8px";
      patternBtn.style.color = "#fff";
      patternBtn.style.cursor = "pointer";

      const feedback = document.createElement("p");
      feedback.style.color = "var(--text-soft)";
      feedback.style.fontSize = "14px";
      feedback.style.minHeight = "40px";

      function checkAnswer(isRandom) {
        const scenario = scenarios[currentScenario];
        const correct = isRandom === scenario.isRandom;
        feedback.style.color = correct ? "#35c27e" : "#ef4444";
        feedback.textContent = (correct ? "✓ Correct! " : "✗ Not quite. ") + scenario.explanation;
        randomBtn.disabled = true;
        patternBtn.disabled = true;
        setTimeout(() => {
          currentScenario = (currentScenario + 1) % scenarios.length;
          sequenceDisplay.textContent = scenarios[currentScenario].sequence;
          feedback.textContent = "";
          randomBtn.disabled = false;
          patternBtn.disabled = false;
        }, 3000);
      }

      randomBtn.addEventListener("click", () => checkAnswer(true));
      patternBtn.addEventListener("click", () => checkAnswer(false));

      buttonWrap.appendChild(randomBtn);
      buttonWrap.appendChild(patternBtn);
      gameEl.appendChild(buttonWrap);
      gameEl.appendChild(feedback);

      contentEl.appendChild(gameEl);
      contentEl.style.opacity = "1";
    } else if (interactiveType === "risk-game" || interactiveType === "atmosphere-builder" || interactiveType === "time-dilation") {
      const gameEl = document.createElement("div");
      gameEl.className = "interactive-mind slide-in-up";
      gameEl.style.animationDelay = "0.2s";
      gameEl.style.padding = "24px";
      gameEl.style.background = "linear-gradient(135deg, rgba(184, 107, 255, 0.15), rgba(20, 18, 35, 0.8))";
      gameEl.style.borderRadius = "var(--radius-md)";
      gameEl.style.border = "2px solid rgba(184, 107, 255, 0.3)";
      gameEl.style.textAlign = "center";

      const titleP = document.createElement("p");
      titleP.style.fontSize = "18px";
      titleP.style.fontWeight = "600";
      titleP.style.color = "#fff";
      titleP.style.marginBottom = "16px";
      titleP.textContent = lesson.title || "Interactive Challenge";
      gameEl.appendChild(titleP);

      const placeholder = document.createElement("div");
      placeholder.style.padding = "48px 24px";
      placeholder.style.background = "rgba(0, 0, 0, 0.2)";
      placeholder.style.borderRadius = "8px";
      placeholder.style.fontSize = "64px";
      placeholder.style.marginBottom = "16px";
      placeholder.textContent = interactiveType === "risk-game" ? "📊" : interactiveType === "atmosphere-builder" ? "🌡️" : "⏰";
      gameEl.appendChild(placeholder);

      const comingSoon = document.createElement("p");
      comingSoon.style.color = "var(--text-soft)";
      comingSoon.style.fontSize = "14px";
      comingSoon.textContent = lesson.instructions || "Full interactive experience coming soon!";
      gameEl.appendChild(comingSoon);

      contentEl.appendChild(gameEl);
      contentEl.style.opacity = "1";
    } else {
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
    }
    
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
      imageContainer.style.position = "relative"; // For hedgehog positioning
      
      const img = document.createElement("img");
      // Get subject-themed image
      let imageUrl;
      if (activeSubject === "finance") {
        imageUrl = getFinanceQuizImage(currentIndex);
      } else if (activeSubject === "space") {
        imageUrl = getSpaceQuizImage(currentIndex);
      } else if (activeSubject === "mind") {
        imageUrl = getMindQuizImage(currentIndex);
      } else {
        imageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop";
      }
      
      const altBySubject = { finance: "Finance and investing concept", space: "Space and astronomy", mind: "Mind and psychology" };
      img.alt = altBySubject[activeSubject] || "Subject image";
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
      
      img.src = imageUrl;
      
      img.onerror = function() {
        console.error("❌ Image failed to load:", this.src);
        this.style.display = "none";
        const subjectIcon = activeSubject === "finance" ? "💰" : (activeSubject === "space" ? "🚀" : (activeSubject === "mind" ? "🧠" : "📚"));
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
        
        // Add mini hedgehog overlay for all subjects
        addHedgehogOverlay(imageContainer);
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
  // Get fresh reference to ensure element exists
  const pendingXpEl = document.getElementById("pendingXp") || $("#pendingXp");
  const xpValue = document.getElementById("xpValue") || $("#xpValue");

  const subjectMap = {
    finance: "investing",
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

  // Only award XP on first completion of this lesson
  const completionKey = hasLessonPicker(activeSubject) ? activeLessonSlug : null;
  if (!isLessonCompletedForXp(activeSubject, completionKey || undefined)) {
    xp += pendingXp;
    window.xp = xp; // Sync for Firebase
    sessionXpGained += pendingXp; // Track session XP

    const currentXpValue = document.getElementById("xpValue");
    if (currentXpValue) currentXpValue.textContent = xp.toString();

    syncBottomXpPill();
    updateXpProgress();
    animateXpGain(pendingXp);
  }

  // Add lesson ID to lessonsCompleted (only once); Firebase skips if already present
  const lessonId = `${activeSubject}-${lesson.id}`;
  if (window.firebaseAddCompletedLesson) {
    window.firebaseAddCompletedLesson(lessonId);
  }

  saveUserData();
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
  renderLessonPath();
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

  // If at first slide of a lesson, return to home (lessons are in subject dropdowns)
  const slugAt = getLessonSlugAt(activeSubject, currentIndex);
  if (slugAt && currentIndex === getLessonStartIndex(activeSubject, slugAt)) {
    showHomeState();
    closeAllSubjectDropdowns();
    clearHashFromUrl();
    renderSubjectDropdownsActiveState();
    return;
  }

  if (currentIndex > 0) {
    // Award XP for reviewing content (only if lesson not already completed for XP)
    const completionKey = hasLessonPicker(activeSubject) ? activeLessonSlug : null;
    if (!isLessonCompletedForXp(activeSubject, completionKey || undefined)) {
      const reviewXp = 1;
      xp += reviewXp;
      window.xp = xp; // Sync for Firebase
      sessionXpGained += reviewXp;

      const xpValue = $("#xpValue");
      const pendingXpEl = $("#pendingXp");
      if (xpValue) {
        xpValue.textContent = xp.toString();
      }
      if (pendingXpEl) {
        pendingXpEl.textContent = reviewXp.toString();
      }
      animateXpGain(reviewXp);
      updateXpProgress();
    }

    saveUserData();

    currentIndex--;
    renderLesson();
    renderLessonPath();
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
  // Numbers intentionally not displayed on lesson progress bar
}

function switchTab(tab) {
  const lessonCard = $("#lessonCard");
  const journalPanel = $("#journalPanel");
  const tabs = document.querySelectorAll(".tab");
  if (tabs.length) tabs.forEach((t) => t.classList.remove("is-active"));

  if (tab === "lesson") {
    lessonCard.classList.remove("is-hidden");
    journalPanel.classList.add("is-hidden");
    var el = document.querySelector('[data-tab="lesson"]');
    if (el) el.classList.add("is-active");
  } else if (tab === "journal") {
    lessonCard.classList.add("is-hidden");
    journalPanel.classList.remove("is-hidden");
    var el = document.querySelector('[data-tab="journal"]');
    if (el) el.classList.add("is-active");
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
  } else if (subjectMetadata[subject]) {
    const meta = subjectMetadata[subject];
    const category = categories.find((c) => c.subjects && c.subjects.includes(subject));
    subjectChip.textContent = (category ? category.name + " · " : "") + meta.name;
    if (activeLessonSlug) {
      const catalog = getLessonCatalog(subject);
      const entry = catalog.find((e) => e.slug === activeLessonSlug);
      if (entry) {
        unitChip.textContent = "Unit: " + (entry.title ? stripLeadingEmojiForDisplay(entry.title) : entry.title);
        lessonTitle.textContent = entry.title;
        lessonSubtitle.textContent = (entry.subtitle && entry.subtitle.trim()) ? entry.subtitle : ((entry.difficulty ? entry.difficulty + " · " : "") + (entry.estimatedTime || "") + (entry.xpReward != null && entry.xpReward > 0 ? " · " + entry.xpReward + " XP" : ""));
      } else {
        unitChip.textContent = "Unit: " + (meta.subtitle || meta.name);
        lessonTitle.textContent = meta.name + " — " + (meta.subtitle || "");
        lessonSubtitle.textContent = meta.subtitle || "Learn and reflect.";
      }
    } else {
      unitChip.textContent = "Unit: " + (meta.subtitle || meta.name);
      lessonTitle.textContent = meta.name + " — " + (meta.subtitle || "");
      lessonSubtitle.textContent = meta.subtitle || "Learn and reflect.";
    }
    era = "Foundations";
    journalText.textContent = (category ? category.name + " · " : "") + meta.name + ". " + (meta.subtitle || "") + " Your notes and progress.";
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

// ---- Subject dropdowns (each subject = dropdown with lessons) ----
function closeAllSubjectDropdowns() {
  document.querySelectorAll(".subject-dropdown-menu.is-open").forEach(function (menu) {
    menu.classList.remove("is-open");
  });
  document.querySelectorAll(".subject-dropdown-btn[aria-expanded='true']").forEach(function (btn) {
    btn.setAttribute("aria-expanded", "false");
  });
}

function openSubjectDropdown(categoryId) {
  closeAllSubjectDropdowns();
  refreshSubjectDropdownLessons(categoryId); // Update completion trophies
  const wrap = document.getElementById("subjectDropdownsWrap");
  if (!wrap) return;
  const btn = wrap.querySelector(".subject-dropdown[data-category-id='" + categoryId + "'] .subject-dropdown-btn");
  const menu = wrap.querySelector(".subject-dropdown[data-category-id='" + categoryId + "'] .subject-dropdown-menu");
  if (btn) btn.setAttribute("aria-expanded", "true");
  if (menu) menu.classList.add("is-open");
}

function refreshSubjectDropdownLessons(categoryId) {
  const wrap = document.getElementById("subjectDropdownsWrap");
  if (!wrap) return;
  const menuInner = wrap.querySelector(".subject-dropdown[data-category-id='" + categoryId + "'] .subject-dropdown-menu-inner");
  if (!menuInner) return;
  const category = categories.find(function (c) { return c.id === categoryId; });
  const subjectKey = category ? getSubjectKeyForCategory(category.id) : null;
  if (!subjectKey || !subjectLessons[subjectKey]) return;
  const catalog = getLessonCatalog(subjectKey);
  menuInner.innerHTML = "";
  catalog.forEach(function (entry) {
    const completed = isLessonCompletedForXp(subjectKey, entry.slug === "main" ? undefined : entry.slug);
    const item = document.createElement("button");
    item.type = "button";
    item.className = "subject-dropdown-lesson";
    item.setAttribute("role", "menuitem");
    item.setAttribute("aria-label", "Start lesson: " + entry.title);
    item.dataset.slug = entry.slug;
    const metaParts = [];
    if (entry.topic) metaParts.push(entry.topic);
    if (entry.difficulty) metaParts.push(entry.difficulty);
    if (entry.estimatedTime) metaParts.push(entry.estimatedTime);
    if (entry.xpReward != null && entry.xpReward > 0) metaParts.push(entry.xpReward + " XP");
    item.innerHTML =
      "<span class=\"subject-dropdown-lesson-icon\">" + (entry.icon || "📚") + "</span>" +
      "<div class=\"subject-dropdown-lesson-body\">" +
      "<div class=\"subject-dropdown-lesson-title\">" + escapeHtml(stripLeadingEmojiForDisplay(entry.title)) + "</div>" +
      (metaParts.length ? "<div class=\"subject-dropdown-lesson-meta\">" + metaParts.map(function (p) { return "<span>" + escapeHtml(p) + "</span>"; }).join("") + "</div>" : "") +
      "</div>" +
      (completed ? "<span class=\"subject-dropdown-lesson-trophy\" aria-label=\"Completed\">🏆</span>" : "");
    item.addEventListener("click", function () {
      navigateToLessonFromDropdown(category.id, subjectKey, entry.slug === "main" ? null : entry.slug);
    });
    item.addEventListener("touchend", function (e) {
      e.preventDefault();
      navigateToLessonFromDropdown(category.id, subjectKey, entry.slug === "main" ? null : entry.slug);
    }, { passive: false });
    menuInner.appendChild(item);
  });
}

function navigateToLessonFromDropdown(categoryId, subjectKey, slug) {
  activeCategory = categoryId;
  activeSubject = subjectKey;
  activeLessonSlug = slug || null;
  currentIndex = getLessonStartIndex(subjectKey, slug || "main");
  closeAllSubjectDropdowns();
  showLessonView();
  stopTimeTracking();
  focusLessonTab();
  hideLessonPickerView();
  showLessonCard();
  updateMetaForSubject(activeSubject);
  renderLesson();
  renderLessonPath();
  updateBackButton();
  updateHashForView();
  try {
    localStorage.setItem("shinyos_lastCategory", activeCategory);
    localStorage.setItem("shinyos_lastSubject", activeSubject);
  } catch (e) {}
  renderSubjectDropdownsActiveState();
  renderLessonPath();
}

function renderSubjectDropdownsActiveState() {
  document.querySelectorAll(".subject-dropdown").forEach(function (el) {
    const id = el.getAttribute("data-category-id");
    el.classList.toggle("is-active", id === activeCategory);
  });
}

function renderSubjectDropdowns() {
  const wrap = document.getElementById("subjectDropdownsWrap");
  if (!wrap) return;
  if (wrap.querySelector(".subject-dropdown")) return; // already built
  wrap.innerHTML = "";
  categories.forEach(function (category) {
    const subjectKey = getSubjectKeyForCategory(category.id);
    if (!subjectKey || !subjectLessons[subjectKey]) return;
    const catalog = getLessonCatalog(subjectKey);
    const dropdown = document.createElement("div");
    dropdown.className = "subject-dropdown" + (activeCategory === category.id ? " is-active" : "");
    dropdown.setAttribute("data-category-id", category.id);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "subject-dropdown-btn";
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open " + category.name + " lessons");
    btn.innerHTML = "<span class=\"subject-dropdown-icon\">" + category.icon + "</span><span class=\"subject-dropdown-label\">" + category.name + "</span><span class=\"subject-dropdown-chevron\" aria-hidden=\"true\">▼</span>";
    const menu = document.createElement("div");
    menu.className = "subject-dropdown-menu";
    menu.setAttribute("role", "menu");
    const inner = document.createElement("div");
    inner.className = "subject-dropdown-menu-inner";
    catalog.forEach(function (entry) {
      const completed = isLessonCompletedForXp(subjectKey, entry.slug === "main" ? undefined : entry.slug);
      const item = document.createElement("button");
      item.type = "button";
      item.className = "subject-dropdown-lesson";
      item.setAttribute("role", "menuitem");
      item.setAttribute("aria-label", "Start lesson: " + entry.title);
      item.dataset.slug = entry.slug;
      const metaParts = [];
      if (entry.topic) metaParts.push(entry.topic);
      if (entry.difficulty) metaParts.push(entry.difficulty);
      if (entry.estimatedTime) metaParts.push(entry.estimatedTime);
      if (entry.xpReward != null && entry.xpReward > 0) metaParts.push(entry.xpReward + " XP");
      item.innerHTML =
        "<span class=\"subject-dropdown-lesson-icon\">" + (entry.icon || "📚") + "</span>" +
        "<div class=\"subject-dropdown-lesson-body\">" +
        "<div class=\"subject-dropdown-lesson-title\">" + escapeHtml(stripLeadingEmojiForDisplay(entry.title)) + "</div>" +
        (metaParts.length ? "<div class=\"subject-dropdown-lesson-meta\">" + metaParts.map(function (p) { return "<span>" + escapeHtml(p) + "</span>"; }).join("") + "</div>" : "") +
        "</div>" +
        (completed ? "<span class=\"subject-dropdown-lesson-trophy\" aria-label=\"Completed\">🏆</span>" : "");
      item.addEventListener("click", function () {
        navigateToLessonFromDropdown(category.id, subjectKey, entry.slug === "main" ? null : entry.slug);
      });
      item.addEventListener("touchend", function (e) {
        e.preventDefault();
        navigateToLessonFromDropdown(category.id, subjectKey, entry.slug === "main" ? null : entry.slug);
      }, { passive: false });
      inner.appendChild(item);
    });
    menu.appendChild(inner);
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      closeAllSubjectDropdowns();
      if (!isOpen) {
        btn.setAttribute("aria-expanded", "true");
        menu.classList.add("is-open");
      }
    });
    btn.addEventListener("touchend", function (e) {
      e.stopPropagation();
    }, { passive: false });
    dropdown.appendChild(btn);
    dropdown.appendChild(menu);
    wrap.appendChild(dropdown);
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".subject-dropdowns-wrap")) closeAllSubjectDropdowns();
  });
  document.addEventListener("touchstart", function (e) {
    if (!e.target.closest(".subject-dropdowns-wrap")) closeAllSubjectDropdowns();
  }, { passive: true });
  renderSubjectDropdownsActiveState();
}

function escapeHtml(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

/** Strip leading emoji(s) and optional space for dropdown/modal display (avoids double emoji with icon). */
function stripLeadingEmojiForDisplay(s) {
  if (!s || typeof s !== "string") return s;
  return s.replace(/^\s*[\p{Emoji}\p{Emoji_Presentation}\p{Emoji_Modifier}]+\s*/u, "").trim() || s;
}

// ---- Subject modal (used by "Let's go" / intro flow) ----
/** Which category is expanded in the subject modal (null = none). Only one at a time. */
let subjectModalExpandedCategoryId = null;

function openSubjectModal() {
  const modal = $("#subjectModal");
  if (modal) modal.classList.remove("is-hidden");
  const scrollY = window.scrollY;
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
}

function closeSubjectModal() {
  const modal = $("#subjectModal");
  if (modal) modal.classList.add("is-hidden");
  const scrollY = document.body.style.top ? Math.abs(parseInt(document.body.style.top, 10)) : 0;
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  window.scrollTo(0, scrollY);
}

function renderSubjectModalList() {
  const list = $("#subjectModalList");
  if (!list) return;
  list.innerHTML = "";
  categories.forEach((category) => {
    const subjectKey = getSubjectKeyForCategory(category.id);
    const catalog = subjectKey ? getLessonCatalog(subjectKey) : [];
    const isExpanded = subjectModalExpandedCategoryId === category.id;

    const card = document.createElement("div");
    card.className = "subject-modal-card" + (activeCategory === category.id ? " is-active" : "") + (isExpanded ? " is-expanded" : "");
    card.dataset.categoryId = category.id;

    const header = document.createElement("button");
    header.type = "button";
    header.className = "subject-modal-card-header";
    header.setAttribute("aria-expanded", isExpanded);
    header.setAttribute("aria-controls", "subject-modal-card-body-" + category.id);
    header.setAttribute("aria-label", isExpanded ? "Collapse " + category.name : "Expand " + category.name + " to see topics");
    const iconSpan = document.createElement("span");
    iconSpan.className = "subject-modal-item-icon";
    iconSpan.textContent = category.icon;
    const nameSpan = document.createElement("span");
    nameSpan.className = "subject-modal-card-title";
    nameSpan.textContent = category.name;
    header.appendChild(iconSpan);
    header.appendChild(nameSpan);
    if (subjectKey && isAnyLessonCompletedForSubject(subjectKey)) {
      const badge = document.createElement("span");
      badge.className = "lesson-completed-badge";
      badge.textContent = "Completed";
      badge.setAttribute("aria-label", "Lesson completed — no additional XP");
      header.appendChild(badge);
    }
    const chevron = document.createElement("span");
    chevron.className = "subject-modal-card-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "▼";
    header.appendChild(chevron);

    header.addEventListener("click", function (e) {
      e.stopPropagation();
      subjectModalExpandedCategoryId = subjectModalExpandedCategoryId === category.id ? null : category.id;
      renderSubjectModalList();
    });
    header.addEventListener("touchend", function (e) {
      e.preventDefault();
      e.stopPropagation();
      subjectModalExpandedCategoryId = subjectModalExpandedCategoryId === category.id ? null : category.id;
      renderSubjectModalList();
    }, { passive: false });

    const body = document.createElement("div");
    body.id = "subject-modal-card-body-" + category.id;
    body.className = "subject-modal-card-body";
    body.setAttribute("role", "region");
    body.setAttribute("aria-label", category.name + " topics");

    const subtopicsWrap = document.createElement("div");
    subtopicsWrap.className = "subject-modal-subtopics";
    catalog.forEach(function (entry) {
      let completed = false;
      if (subjectKey && Array.isArray(completedLessonsForXp)) {
        completed = completedLessonsForXp.includes(subjectKey + "/" + entry.slug) ||
          (entry.slug === "main" && (completedLessonsForXp.includes(subjectKey) || completedLessonsForXp.includes(subjectKey + "/main")));
      }
      const sub = document.createElement("button");
      sub.type = "button";
      sub.className = "subject-modal-subtopic" + (completed ? " is-completed" : "");
      sub.dataset.slug = entry.slug;
      sub.setAttribute("aria-label", "Start: " + entry.title);
      const subIcon = document.createElement("span");
      subIcon.className = "subject-modal-subtopic-icon";
      subIcon.textContent = entry.icon || "📚";
      const subTitleWrap = document.createElement("span");
      subTitleWrap.className = "subject-modal-subtopic-title-wrap";
      const subTitle = document.createElement("span");
      subTitle.className = "subject-modal-subtopic-title";
      subTitle.textContent = stripLeadingEmojiForDisplay(entry.title);
      subTitleWrap.appendChild(subTitle);
      if (entry.topic) {
        const subTopic = document.createElement("span");
        subTopic.className = "subject-modal-subtopic-topic";
        subTopic.textContent = entry.topic;
        subTitleWrap.appendChild(subTopic);
      }
      sub.appendChild(subIcon);
      sub.appendChild(subTitleWrap);
      if (completed) {
        const trophy = document.createElement("span");
        trophy.className = "subject-modal-subtopic-trophy";
        trophy.setAttribute("aria-label", "Completed");
        trophy.textContent = "🏆";
        sub.appendChild(trophy);
      }
      sub.addEventListener("click", function (e) {
        e.stopPropagation();
        const slug = entry.slug === "main" ? null : entry.slug;
        navigateToLessonFromDropdown(category.id, subjectKey, slug);
        closeSubjectModal();
      });
      sub.addEventListener("touchend", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const slug = entry.slug === "main" ? null : entry.slug;
        navigateToLessonFromDropdown(category.id, subjectKey, slug);
        closeSubjectModal();
      }, { passive: false });
      subtopicsWrap.appendChild(sub);
    });
    body.appendChild(subtopicsWrap);
    card.appendChild(header);
    card.appendChild(body);
    list.appendChild(card);
  });
}

function selectSubjectFromModal(category) {
  activeCategory = category.id;
  const subjectKey = getSubjectKeyForCategory(category.id);
  try {
    localStorage.setItem("shinyos_lastCategory", activeCategory);
    localStorage.setItem("shinyos_lastSubject", subjectKey || activeSubject || "finance");
  } catch (e) {}
  closeSubjectModal();
  if (subjectKey && subjectLessons[subjectKey]) {
    activeSubject = subjectKey;
    if (hasLessonPicker(subjectKey)) {
      // Multi-lesson: stay on home, open this subject's dropdown so user picks a lesson
      openSubjectDropdown(category.id);
      renderSubjectDropdownsActiveState();
    } else {
      // Single-lesson: go straight to lesson
      activeLessonSlug = null;
      currentIndex = 0;
      showLessonView();
      stopTimeTracking();
      focusLessonTab();
      hideLessonPickerView();
      showLessonCard();
      updateMetaForSubject(activeSubject);
      renderLesson();
      renderLessonPath();
      renderSubjectDropdownsActiveState();
    }
  } else {
    activeSubject = "finance";
    updateMetaForSubject(activeSubject);
    focusLessonTab();
    hideLessonPickerView();
    showLessonCard();
    $("#lessonContent").innerHTML = "<p class='slide-in-up'>This subject is coming soon. Pick another to start learning.</p>";
    $("#quizBlock").innerHTML = "";
    renderSubjectDropdownsActiveState();
  }
  renderLessonPath();
}

function showLessonPickerView() {
  const picker = $("#lessonPickerView");
  const card = $("#lessonCard");
  if (picker) {
    picker.classList.remove("is-hidden");
  }
  if (card) {
    card.classList.add("is-hidden");
  }
}

function hideLessonPickerView() {
  const picker = $("#lessonPickerView");
  const card = $("#lessonCard");
  if (picker) {
    picker.classList.add("is-hidden");
  }
  if (card) {
    card.classList.remove("is-hidden");
  }
}

function renderLessonPicker() {
  const grid = $("#lessonPickerGrid");
  const titleEl = $("#lessonPickerTitle");
  if (!grid) return;
  const category = categories.find((c) => c.id === activeCategory);
  if (titleEl && category) {
    titleEl.textContent = category.name;
  }
  grid.innerHTML = "";
  const catalog = getLessonCatalog(activeSubject);
  catalog.forEach((entry) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "lesson-picker-card";
    card.dataset.slug = entry.slug;
    card.setAttribute("aria-label", `Start lesson: ${entry.title}`);
    const icon = document.createElement("div");
    icon.className = "lesson-picker-card-icon";
    icon.textContent = entry.icon || "📚";
    const title = document.createElement("h3");
    title.className = "lesson-picker-card-title";
    title.textContent = stripLeadingEmojiForDisplay(entry.title);
    const meta = document.createElement("div");
    meta.className = "lesson-picker-card-meta";
    const parts = [];
    if (entry.topic) parts.push("<span>" + escapeHtml(entry.topic) + "</span>");
    if (entry.difficulty) parts.push("<span>" + escapeHtml(entry.difficulty) + "</span>");
    if (entry.estimatedTime) parts.push("<span>" + escapeHtml(entry.estimatedTime) + "</span>");
    if (entry.xpReward != null && entry.xpReward > 0) parts.push("<span>" + entry.xpReward + " XP</span>");
    meta.innerHTML = parts.join("");
    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(meta);
    card.addEventListener("click", () => selectLessonFromPicker(entry.slug));
    card.addEventListener("touchend", function (e) {
      e.preventDefault();
      selectLessonFromPicker(entry.slug);
    }, { passive: false });
    grid.appendChild(card);
  });
}

function selectLessonFromPicker(slug) {
  activeLessonSlug = slug;
  currentIndex = getLessonStartIndex(activeSubject, slug);
  stopTimeTracking();
  hideLessonPickerView();
  showLessonCard();
  updateMetaForSubject(activeSubject);
  renderLesson();
  renderLessonPath();
  updateBackButton();
  updateHashForView();
}

function clearHashFromUrl() {
  try {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  } catch (e) {}
}

function updateHashForView() {
  if (activeLessonSlug) {
    try { window.location.hash = activeCategory + "/" + activeLessonSlug; } catch (e) {}
  } else {
    try { window.location.hash = activeCategory; } catch (e) {}
  }
}

function applyHash() {
  const hash = (window.location.hash || "").replace(/^#/, "").trim();
  if (!hash) return;
  const parts = hash.split("/");
  const categoryId = parts[0];
  const lessonSlug = parts[1];
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return;
  activeCategory = category.id;
  const subjectKey = getSubjectKeyForCategory(category.id);
  if (!subjectKey || !subjectLessons[subjectKey]) return;
  activeSubject = subjectKey;
  if (lessonSlug && hasLessonPicker(subjectKey)) {
    const catalog = getLessonCatalog(subjectKey);
    const entry = catalog.find((e) => e.slug === lessonSlug);
    if (entry) {
      navigateToLessonFromDropdown(category.id, subjectKey, lessonSlug);
      return;
    }
  }
  if (hasLessonPicker(subjectKey)) {
    activeLessonSlug = null;
    showHomeState();
    openSubjectDropdown(categoryId);
  } else {
    currentIndex = 0;
    activeLessonSlug = null;
    showLessonView();
    focusLessonTab();
    hideLessonPickerView();
    showLessonCard();
    updateMetaForSubject(activeSubject);
    renderLesson();
    renderLessonPath();
  }
  renderSubjectDropdownsActiveState();
  renderLessonPath();
}

/** Restore last selected subject from localStorage when no hash; skip intro on subsequent visits. */
function restoreLastSubjectIfHome() {
  if (userHasSelectedSubject) return;
  let lastCategory, lastSubject;
  try {
    lastCategory = localStorage.getItem("shinyos_lastCategory");
    lastSubject = localStorage.getItem("shinyos_lastSubject");
  } catch (e) { return; }
  if (!lastCategory || !lastSubject) return;
  const category = categories.find((c) => c.id === lastCategory);
  if (!category || !subjectLessons[lastSubject]) return;
  activeCategory = lastCategory;
  activeSubject = lastSubject;
  if (hasLessonPicker(activeSubject)) {
    activeLessonSlug = null;
    showHomeState();
    openSubjectDropdown(lastCategory);
  } else {
    activeLessonSlug = null;
    currentIndex = 0;
    showLessonView();
    stopTimeTracking();
    focusLessonTab();
    hideLessonPickerView();
    showLessonCard();
    updateMetaForSubject(activeSubject);
    renderLesson();
    renderLessonPath();
  }
  renderSubjectDropdownsActiveState();
  renderLessonPath();
}

function focusLessonTab() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((t) => t.classList.remove("is-active"));
  const lessonTab = document.querySelector('[data-tab="lesson"]');
  if (lessonTab) lessonTab.classList.add("is-active");
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
}

function showLessonCard() {
  const lessonCard = document.getElementById("lessonCard");
  const journalPanel = document.getElementById("journalPanel");
  if (lessonCard) lessonCard.classList.remove("is-hidden");
  if (journalPanel) journalPanel.classList.add("is-hidden");
}

/** Leaf growth: positions on tree overlay (percent of container). On-branch only; no sky (top >= 28%) or ground. */
var TREE_LEAF_POSITIONS = [
  /* Right side / lower-right first (matches the 2 golden leaves in intro.png) */
  { left: 62, top: 52 }, { left: 58, top: 48 }, { left: 68, top: 55 }, { left: 72, top: 50 }, { left: 65, top: 58 },
  /* Center-right and center */
  { left: 52, top: 42 }, { left: 48, top: 48 }, { left: 55, top: 52 }, { left: 50, top: 38 }, { left: 58, top: 62 },
  { left: 42, top: 45 }, { left: 45, top: 52 }, { left: 38, top: 48 }, { left: 48, top: 58 },
  /* Center-left */
  { left: 32, top: 42 }, { left: 28, top: 48 }, { left: 35, top: 55 }, { left: 30, top: 52 },
  /* Left branches */
  { left: 22, top: 45 }, { left: 25, top: 52 }, { left: 28, top: 58 }, { left: 32, top: 62 },
  /* Additional branch spots */
  { left: 75, top: 62 }, { left: 70, top: 48 }, { left: 40, top: 62 }, { left: 36, top: 38 }, { left: 60, top: 38 },
  { left: 54, top: 65 }, { left: 44, top: 68 }, { left: 26, top: 42 }
];

/** Fruit: one per every 3rd lesson completion; positions on tree overlay (percent). */
var TREE_FRUIT_POSITIONS = [
  { left: 40, top: 50 }, { left: 56, top: 45 }, { left: 34, top: 55 }, { left: 70, top: 55 },
  { left: 46, top: 40 }, { left: 28, top: 55 }, { left: 64, top: 42 }, { left: 50, top: 58 }
];
var treeLeafPreviousCount = -1;
var treeFruitPreviousCount = -1;

/** Create realistic SVG leaf element with pointed oval shape and veins */
function createLeafSVG() {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 40");
  svg.setAttribute("class", "home-tree-leaf-svg");
  
  // Create gradient definition
  var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  var gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  gradient.setAttribute("id", "leafGrad" + Math.random().toString(36).substr(2, 9));
  gradient.setAttribute("x1", "0%");
  gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "100%");
  gradient.setAttribute("y2", "100%");
  
  var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "0%");
  stop1.setAttribute("stop-color", "#a8e6a8");
  
  var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "50%");
  stop2.setAttribute("stop-color", "#7cb342");
  
  var stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop3.setAttribute("offset", "100%");
  stop3.setAttribute("stop-color", "#5a8a3a");
  
  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  gradient.appendChild(stop3);
  defs.appendChild(gradient);
  svg.appendChild(defs);
  
  // Leaf body - pointed oval shape
  var leafBody = document.createElementNS("http://www.w3.org/2000/svg", "path");
  leafBody.setAttribute("d", "M12 2 Q20 10 20 22 Q20 34 12 38 Q4 34 4 22 Q4 10 12 2 Z");
  leafBody.setAttribute("fill", "url(#" + gradient.getAttribute("id") + ")");
  svg.appendChild(leafBody);
  
  // Center vein
  var centerVein = document.createElementNS("http://www.w3.org/2000/svg", "path");
  centerVein.setAttribute("d", "M12 6 L12 34");
  centerVein.setAttribute("stroke", "#4a7a2a");
  centerVein.setAttribute("stroke-width", "1");
  centerVein.setAttribute("fill", "none");
  centerVein.setAttribute("opacity", "0.7");
  svg.appendChild(centerVein);
  
  // Side veins (left)
  var veinL1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  veinL1.setAttribute("d", "M12 12 Q8 14 6 13");
  veinL1.setAttribute("stroke", "#4a7a2a");
  veinL1.setAttribute("stroke-width", "0.6");
  veinL1.setAttribute("fill", "none");
  veinL1.setAttribute("opacity", "0.5");
  svg.appendChild(veinL1);
  
  var veinL2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  veinL2.setAttribute("d", "M12 18 Q7 21 5 20");
  veinL2.setAttribute("stroke", "#4a7a2a");
  veinL2.setAttribute("stroke-width", "0.6");
  veinL2.setAttribute("fill", "none");
  veinL2.setAttribute("opacity", "0.5");
  svg.appendChild(veinL2);
  
  var veinL3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  veinL3.setAttribute("d", "M12 24 Q8 27 6 26");
  veinL3.setAttribute("stroke", "#4a7a2a");
  veinL3.setAttribute("stroke-width", "0.6");
  veinL3.setAttribute("fill", "none");
  veinL3.setAttribute("opacity", "0.5");
  svg.appendChild(veinL3);
  
  // Side veins (right)
  var veinR1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  veinR1.setAttribute("d", "M12 12 Q16 14 18 13");
  veinR1.setAttribute("stroke", "#4a7a2a");
  veinR1.setAttribute("stroke-width", "0.6");
  veinR1.setAttribute("fill", "none");
  veinR1.setAttribute("opacity", "0.5");
  svg.appendChild(veinR1);
  
  var veinR2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  veinR2.setAttribute("d", "M12 18 Q17 21 19 20");
  veinR2.setAttribute("stroke", "#4a7a2a");
  veinR2.setAttribute("stroke-width", "0.6");
  veinR2.setAttribute("fill", "none");
  veinR2.setAttribute("opacity", "0.5");
  svg.appendChild(veinR2);
  
  var veinR3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  veinR3.setAttribute("d", "M12 24 Q16 27 18 26");
  veinR3.setAttribute("stroke", "#4a7a2a");
  veinR3.setAttribute("stroke-width", "0.6");
  veinR3.setAttribute("fill", "none");
  veinR3.setAttribute("opacity", "0.5");
  svg.appendChild(veinR3);
  
  return svg;
}

/** Create realistic SVG golden apple/fruit element with highlight */
function createFruitSVG() {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 28 32");
  svg.setAttribute("class", "home-tree-fruit-svg");
  
  // Create gradient definition
  var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  var gradient = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
  gradient.setAttribute("id", "fruitGrad" + Math.random().toString(36).substr(2, 9));
  gradient.setAttribute("cx", "35%");
  gradient.setAttribute("cy", "30%");
  gradient.setAttribute("r", "60%");
  
  var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "0%");
  stop1.setAttribute("stop-color", "#ffe066");
  
  var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "50%");
  stop2.setAttribute("stop-color", "#ffd700");
  
  var stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop3.setAttribute("offset", "100%");
  stop3.setAttribute("stop-color", "#b8860b");
  
  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  gradient.appendChild(stop3);
  defs.appendChild(gradient);
  svg.appendChild(defs);
  
  // Apple body - rounded apple shape with indent at top
  var appleBody = document.createElementNS("http://www.w3.org/2000/svg", "path");
  appleBody.setAttribute("d", "M14 8 Q8 6 6 10 Q2 16 4 24 Q6 30 14 30 Q22 30 24 24 Q26 16 22 10 Q20 6 14 8 Z");
  appleBody.setAttribute("fill", "url(#" + gradient.getAttribute("id") + ")");
  svg.appendChild(appleBody);
  
  // Stem
  var stem = document.createElementNS("http://www.w3.org/2000/svg", "path");
  stem.setAttribute("d", "M14 8 Q14 4 16 2");
  stem.setAttribute("stroke", "#8b4513");
  stem.setAttribute("stroke-width", "1.5");
  stem.setAttribute("fill", "none");
  stem.setAttribute("stroke-linecap", "round");
  svg.appendChild(stem);
  
  // Small leaf on stem
  var stemLeaf = document.createElementNS("http://www.w3.org/2000/svg", "path");
  stemLeaf.setAttribute("d", "M15 5 Q18 3 20 5 Q18 6 15 5 Z");
  stemLeaf.setAttribute("fill", "#7cb342");
  svg.appendChild(stemLeaf);
  
  // Highlight/shine
  var highlight = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  highlight.setAttribute("cx", "10");
  highlight.setAttribute("cy", "14");
  highlight.setAttribute("rx", "3");
  highlight.setAttribute("ry", "4");
  highlight.setAttribute("fill", "rgba(255, 255, 255, 0.4)");
  svg.appendChild(highlight);
  
  return svg;
}

function renderTreeLeaves() {
  var overlay = document.getElementById("homeTreeLeafOverlay");
  if (!overlay) return;
  var completedCount = Array.isArray(completedLessonsForXp) ? completedLessonsForXp.length : 0;
  var total = TREE_LEAF_POSITIONS.length;
  var visibleLeaves = Math.min(completedCount, total);
  var animateIndex = -1;
  if (visibleLeaves > treeLeafPreviousCount && treeLeafPreviousCount >= 0) {
    animateIndex = treeLeafPreviousCount;
  }
  if (treeLeafPreviousCount < 0) treeLeafPreviousCount = visibleLeaves;
  overlay.innerHTML = "";
  
  // Render leaves with realistic SVG
  for (var i = 0; i < visibleLeaves; i++) {
    var pos = TREE_LEAF_POSITIONS[i];
    var leafContainer = document.createElement("div");
    leafContainer.className = "home-tree-leaf";
    leafContainer.style.left = pos.left + "%";
    leafContainer.style.top = pos.top + "%";
    
    // Add slight rotation variation for natural look
    var rotation = -30 + (i % 5) * 15;
    leafContainer.style.setProperty("--leaf-rotation", rotation + "deg");
    
    var leafSvg = createLeafSVG();
    leafContainer.appendChild(leafSvg);
    
    if (i === animateIndex) {
      leafContainer.classList.add("leaf-animate-in");
    } else {
      leafContainer.classList.add("leaf-visible");
    }
    overlay.appendChild(leafContainer);
  }
  treeLeafPreviousCount = visibleLeaves;

  // Render fruit with realistic SVG
  var fruitTotal = TREE_FRUIT_POSITIONS.length;
  var visibleFruit = Math.min(Math.floor(completedCount / 3), fruitTotal);
  var animateFruitIndex = -1;
  if (visibleFruit > treeFruitPreviousCount && treeFruitPreviousCount >= 0) {
    animateFruitIndex = treeFruitPreviousCount;
  }
  if (treeFruitPreviousCount < 0) treeFruitPreviousCount = visibleFruit;
  for (var j = 0; j < visibleFruit; j++) {
    var fpos = TREE_FRUIT_POSITIONS[j];
    var fruitContainer = document.createElement("div");
    fruitContainer.className = "home-tree-fruit";
    fruitContainer.style.left = fpos.left + "%";
    fruitContainer.style.top = fpos.top + "%";
    
    var fruitSvg = createFruitSVG();
    fruitContainer.appendChild(fruitSvg);
    
    if (j === animateFruitIndex) {
      fruitContainer.classList.add("fruit-animate-in");
    } else {
      fruitContainer.classList.add("fruit-visible");
    }
    overlay.appendChild(fruitContainer);
  }
  treeFruitPreviousCount = visibleFruit;
}

/** Show home state: header + illustration. Let's go button remains visible (persistent nav). Subject dropdowns hidden. */
function showHomeState() {
  userHasSelectedSubject = false;
  const homeEmpty = document.getElementById("homeEmptyState");
  const lessonPanel = document.getElementById("lessonPanel");
  const heroWrap = document.getElementById("homeHeroImageWrap");
  const subjectWrap = document.getElementById("subjectDropdownsWrap");
  if (homeEmpty) homeEmpty.classList.remove("is-hidden");
  if (lessonPanel) lessonPanel.classList.add("is-hidden");
  if (heroWrap) heroWrap.classList.remove("intro-image-hidden");
  if (subjectWrap) subjectWrap.classList.add("is-hidden");
  renderTreeLeaves();
}

/** Show lesson view (after user has selected a subject). Let's go button remains visible (persistent nav). Intro image hidden, subject dropdowns visible. */
function showLessonView() {
  userHasSelectedSubject = true;
  const homeEmpty = document.getElementById("homeEmptyState");
  const lessonPanel = document.getElementById("lessonPanel");
  const heroWrap = document.getElementById("homeHeroImageWrap");
  const subjectWrap = document.getElementById("subjectDropdownsWrap");
  if (homeEmpty) homeEmpty.classList.add("is-hidden");
  if (lessonPanel) lessonPanel.classList.remove("is-hidden");
  if (heroWrap) heroWrap.classList.add("intro-image-hidden");
  if (subjectWrap) subjectWrap.classList.remove("is-hidden");
}

// ---- Lesson path (Duolingo-style vertical path) ----
function getLessonNodeIcon(lesson, subjectId) {
  if (lesson.imageUrl) return null;
  if (lesson.type === "intro") return "📖";
  if (lesson.type === "quiz") return "❓";
  if (lesson.type === "interactive") return "📊";
  const title = (lesson.title || "").trim();
  if (title.length) return title.charAt(0);
  if (subjectId === "finance") return "💰";
  if (subjectId === "space") return "🚀";
  return "📚";
}

function renderLessonPath() {
  // Disabled - vertical lesson path hidden
  return;
}

function handleLessonPathNodeClick(index) {
  const subjectKey = getSubjectKeyForCategory(activeCategory);
  if (!subjectKey || !subjectLessons[subjectKey]) return;
  activeSubject = subjectKey;
  currentIndex = index;
  stopTimeTracking();
  focusLessonTab();
  showLessonCard();
  updateMetaForSubject(activeSubject);
  renderLesson();
  renderLessonPath();
}

// Legacy: no-op so existing refs (e.g. breadcrumb) don’t break
function showCategories() {
  renderSubjectDropdownsActiveState();
  renderLessonPath();
}

window.showCategories = showCategories;
window.goNextDirect = goNext;
window.goBackDirect = goBack;

// Theme management
function setThemeColor(theme) {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.content = theme === 'light' ? '#f8f7ff' : '#060712';
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('shinyos_theme') || 'dark';
  const html = document.documentElement;
  html.setAttribute('data-theme', savedTheme);
  setThemeColor(savedTheme);

  const themeToggle = $("#themeToggle");
  const themeIcon = themeToggle?.querySelector('.theme-icon');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('shinyos_theme', newTheme);
      setThemeColor(newTheme);

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

// ---------- Username Modal Wiring (FIX) ----------
function wireUsernameModal() {
  const modal = document.getElementById("usernameModal");
  const input = document.getElementById("usernameInput");
  const err = document.getElementById("usernameError");
  const btn = document.getElementById("usernameSubmit");

  if (!modal || !input || !btn) {
    console.warn("Username modal elements missing (#usernameModal, #usernameInput, #usernameSubmit).");
    return;
  }

  const USERNAME_RE = /^[a-z0-9_]{3,20}$/; // 3–20, lowercase, numbers, underscore

  function setError(msg) {
    if (!err) return;
    err.textContent = msg || "";
    err.classList.toggle("is-visible", !!msg);
  }

  function sanitize(v) {
    return (v || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");
  }

  function validate(v) {
    if (!v) return "Pick a username.";
    if (v.length < 3) return "Too short (min 3).";
    if (v.length > 20) return "Too long (max 20).";
    if (!USERNAME_RE.test(v)) return "Use lowercase letters, numbers, underscores only.";
    return "";
  }

  function refresh() {
    const val = sanitize(input.value);
    if (input.value !== val) input.value = val;

    const msg = validate(val);
    btn.disabled = !!msg;
    setError(msg);
  }

  input.addEventListener("input", refresh);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !btn.disabled) btn.click();
  });

  btn.addEventListener("click", async () => {
    const desired = sanitize(input.value);
    const msg = validate(desired);
    if (msg) {
      setError(msg);
      return;
    }

    btn.disabled = true;
    btn.textContent = "Saving…";

    try {
      if (typeof window.firebaseSetUsername !== "function") {
        throw new Error("firebaseSetUsername() missing. Make sure firebase.js is loaded BEFORE app.js.");
      }

      await window.firebaseSetUsername(desired);

      modal.classList.add("is-hidden");
      btn.textContent = "Let's go ✨";
      setError("");

      // Tell the gate to continue
      window.dispatchEvent(new Event("firebase:usernameset"));
    } catch (e) {
      console.warn("Username set failed:", e);
      const message =
        (e && (e.code === "username/taken" || String(e.message || "").toLowerCase().includes("taken")))
          ? "That username is taken — try another."
          : "Couldn’t save username. Check your connection and try again.";
      setError(message);
      btn.disabled = false;
      btn.textContent = "Let's go ✨";
    }
  });

  refresh();
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize theme first
  initTheme();
  // Wire username modal once DOM is ready
  wireUsernameModal();
  
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
  
  window.addEventListener("beforeunload", () => stopTimeTracking());
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopTimeTracking();
    } else {
      if (userHasSelectedSubject) {
        const lessonCard = document.getElementById("lessonCard");
        if (lessonCard && !lessonCard.classList.contains("is-hidden")) {
          startTimeTracking();
        }
      }
    }
  });

  const quizBlock = $("#quizBlock");
  if (quizBlock) quizBlock.style.display = "none";
  const celebrationOverlay = document.getElementById("celebrationOverlay");
  if (celebrationOverlay) celebrationOverlay.style.display = "none";

  const achievementPopup = $("#achievementPopup");
  if (achievementPopup) {
    achievementPopup.classList.remove("active");
    const dismissAchievement = () => achievementPopup.classList.remove("active");
    achievementPopup.addEventListener("click", dismissAchievement);
    achievementPopup.addEventListener("touchend", dismissAchievement);
  }

  currentIndex = 0;
  activeSubject = "finance";

  // Rotating status message: "Welcome back, {username} 🦔" or "You're #{rank} this week 👀🔥"
  // Defensive: Handles Firestore errors gracefully, never blocks UI
  let statusUseRank = Math.random() < 0.5;
  async function updateStatusMessage() {
    const el = document.getElementById("statusMessage");
    if (!el) return;
    try {
      const username = typeof window.firebaseGetUsername === "function" ? window.firebaseGetUsername() : "";
      if (!username) {
        el.textContent = "";
        return;
      }
      if (statusUseRank && typeof window.firebaseGetRank === "function") {
        try {
          const rank = await window.firebaseGetRank();
          if (rank != null) {
            el.textContent = "You're #" + rank + " this week 👀🔥";
            return;
          }
        } catch (e) {
          // Firestore error getting rank - fall back to username message
          console.warn("Failed to get rank for status message:", e);
        }
      }
      el.textContent = "Welcome back, " + username + " 🦔";
    } catch (e) {
      // Any error - just clear status message, don't break app
      console.warn("Error updating status message:", e);
      el.textContent = "";
    }
  }

  function rotateStatusMessage() {
    statusUseRank = !statusUseRank;
    updateStatusMessage();
  }

  // Leaderboard query & render: fetch top users, highlight current user
  // Defensive: Handles Firestore errors gracefully, shows placeholder on failure
  async function openLeaderboard() {
    const modal = document.getElementById("leaderboardModal");
    const listEl = document.getElementById("leaderboardList");
    if (!modal || !listEl) return;
    modal.classList.remove("is-hidden");
    listEl.innerHTML = "<p class=\"leaderboard-loading\">Loading…</p>";
    const fetchLeaderboard = window.firebaseFetchLeaderboard;
    const uid = typeof window.firebaseGetUid === "function" ? window.firebaseGetUid() : null;
    if (typeof fetchLeaderboard !== "function") {
      listEl.innerHTML = "<p class=\"leaderboard-empty\">Leaderboard unavailable.</p>";
      return;
    }
    let rows = [];
    try {
      rows = await fetchLeaderboard();
    } catch (e) {
      // Firestore permission error or any failure - show placeholder
      console.warn("Leaderboard fetch failed:", e);
      listEl.innerHTML = "<p class=\"leaderboard-empty\">Leaderboard unavailable.</p>";
      return;
    }
    if (!rows.length) {
      listEl.innerHTML = "<p class=\"leaderboard-empty\">No learners yet. Be the first!</p>";
      return;
    }
    listEl.innerHTML = "";
    function escapeHtml(s) {
      const d = document.createElement("div");
      d.textContent = s;
      return d.innerHTML;
    }
    rows.forEach(function (r, i) {
      const rank = i + 1;
      const isCurrent = uid && r.uid === uid;
      const row = document.createElement("div");
      row.className = "leaderboard-row" + (isCurrent ? " leaderboard-row--you" : "");
      row.innerHTML = "<span class=\"leaderboard-rank\">#" + rank + "</span><span class=\"leaderboard-username\">" + escapeHtml(r.username) + "</span><span class=\"leaderboard-xp\">" + r.xp + " XP</span><span class=\"leaderboard-streak\">🔥 " + r.streak + "</span>";
      listEl.appendChild(row);
    });
  }

  function closeLeaderboard() {
    const modal = document.getElementById("leaderboardModal");
    if (modal) modal.classList.add("is-hidden");
  }

  const leaderboardBtn = document.getElementById("leaderboardBtn");
  const leaderboardClose = document.getElementById("leaderboardModalClose");
  const leaderboardBackdrop = document.querySelector(".leaderboard-modal-backdrop");
  if (leaderboardBtn) leaderboardBtn.addEventListener("click", openLeaderboard);
  if (leaderboardClose) leaderboardClose.addEventListener("click", closeLeaderboard);
  if (leaderboardBackdrop) leaderboardBackdrop.addEventListener("click", closeLeaderboard);

  const headerHomeBtn = document.getElementById("headerHomeBtn");
  const headerTrophyBtn = document.getElementById("headerTrophyBtn");
  if (headerHomeBtn) {
    headerHomeBtn.addEventListener("click", function () { showHomeState(); });
  }
  if (headerTrophyBtn) {
    headerTrophyBtn.addEventListener("click", function () {
      const lessonPanel = document.getElementById("lessonPanel");
      if (lessonPanel && lessonPanel.classList.contains("is-hidden")) {
        showLessonView();
      }
      switchTab("journal");
    });
  }

  let mainInitDone = false;
  function runMainInit() {
    if (mainInitDone) return;
    mainInitDone = true;

    loadUserData();
    activeCategory = categories[0].id;
    activeSubject = getSubjectKeyForCategory(activeCategory) || "finance";
    currentIndex = 0;
    userHasSelectedSubject = false;
    showHomeState(); // Header + subject dropdown only; no lesson until user selects
    renderSubjectDropdowns(); // Build subject dropdown buttons and lesson menus
    renderSubjectDropdownsActiveState();
    renderSubjectModalList();
    updateMetaForSubject(activeSubject);
    updateXpProgress();

    const subjectModalClose = $("#subjectModalClose");
    if (subjectModalClose) {
      subjectModalClose.addEventListener("click", closeSubjectModal);
      subjectModalClose.addEventListener("touchend", function (e) {
        e.preventDefault();
        closeSubjectModal();
      }, { passive: false });
    }
    const subjectModalBackdrop = $("#subjectModalBackdrop");
    if (subjectModalBackdrop) {
      subjectModalBackdrop.addEventListener("click", closeSubjectModal);
      subjectModalBackdrop.addEventListener("touchend", function (e) {
        e.preventDefault();
        closeSubjectModal();
      }, { passive: false });
    }

    updateStatusMessage();
    setInterval(rotateStatusMessage, 15000);

    const nextBtn = $("#nextBtn");
    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        goNext();
      });
      nextBtn.blur();
    }
    const backBtn = $("#backBtn");
    if (backBtn) {
      backBtn.addEventListener("click", goBack);
      updateBackButton();
    }
    const lessonPickerBackBtn = $("#lessonPickerBackBtn");
    if (lessonPickerBackBtn) {
      lessonPickerBackBtn.addEventListener("click", function () {
        showHomeState();
        clearHashFromUrl();
        renderSubjectDropdownsActiveState();
      });
      lessonPickerBackBtn.addEventListener("touchend", function (e) {
        e.preventDefault();
        showHomeState();
        clearHashFromUrl();
        renderSubjectDropdownsActiveState();
      }, { passive: false });
    }
    window.addEventListener("hashchange", applyHash);
    // Apply hash on load for direct links; otherwise show home and clean URL
    const hashForInit = (window.location.hash || "").replace(/^#/, "").trim();
    if (hashForInit) {
      applyHash();
    } else {
      showHomeState();
      clearHashFromUrl();
    }
    renderSubjectDropdownsActiveState();
    document.querySelectorAll(".tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        switchTab(tab.dataset.tab);
        tab.classList.add("tab-press");
        setTimeout(function () { tab.classList.remove("tab-press"); }, 150);
      });
    });
    initMobileOptimizations();

    // Persistent "Let's go..." navigation button → open subject selection (visible on ALL pages)
    const homeCtaBtn = document.getElementById("homeCtaBtn");
    if (homeCtaBtn) {
      homeCtaBtn.addEventListener("click", function () { openSubjectModal(); });
      homeCtaBtn.addEventListener("touchend", function (e) {
        e.preventDefault();
        openSubjectModal();
      }, { passive: false });
    }

    // Intro screen (full-screen welcome): show after loading; "Let's go..." dismisses intro and reveals home
    const introScreen = document.getElementById("introScreen");
    const introScreenBtn = document.getElementById("introScreenBtn");
    if (introScreenBtn) {
      introScreenBtn.addEventListener("click", function () {
        if (introScreen) {
          introScreen.classList.add("is-hidden");
          introScreen.setAttribute("aria-hidden", "true");
        }
        // Reveal home; user can then click "Let's go..." on home to open subject modal
      });
      introScreenBtn.addEventListener("touchend", function (e) {
        e.preventDefault();
        if (introScreen) {
          introScreen.classList.add("is-hidden");
          introScreen.setAttribute("aria-hidden", "true");
        }
      }, { passive: false });
    }
    // Show intro screen on top after init (flow: Loading → Intro → Home)
    if (introScreen) {
      introScreen.classList.remove("is-hidden");
      introScreen.setAttribute("aria-hidden", "false");
    }
  }

  // ——— Username required gate ———
  let waitingForUsername = false;

  // If running directly from file://, skip Firebase auth gate and just init app locally
  if (location.protocol === "file:") {
    console.warn("Running from file:// — skipping Firebase auth gate and initializing app in local-only mode.");
    hideLoadingScreen();
    runMainInit();
    // Don't wait for Firebase auth events - app runs in local-only mode
    return;
  }

  async function onAuthReady(hasUser) {
    hideLoadingScreen();
    if (!hasUser) return;

    // Username required gate: wait for user progress, then check username
    try {
      const whenReady = typeof window.firebaseWhenUserProgressReady === "function"
        ? window.firebaseWhenUserProgressReady() : Promise.resolve();
      await whenReady;
    } catch (e) {
      console.warn("User progress ready check failed:", e);
    }

    const hasUsername = typeof window.firebaseHasUsername === "function"
      ? window.firebaseHasUsername() : false;

    if (hasUsername) {
      runMainInit();
      return;
    }

    // ——— Username prompt overlay ———
    // Pause app init; show modal until username set. Block interaction until completed.
    waitingForUsername = true;
    const modal = document.getElementById("usernameModal");
    const gateInput = document.getElementById("usernameInput");
    const gateError = document.getElementById("usernameError");
    const gateSubmit = document.getElementById("usernameSubmit");
    if (gateInput) { gateInput.value = ""; gateInput.focus(); }
    if (gateError) { gateError.textContent = ""; gateError.classList.remove("is-visible"); }
    if (gateSubmit) { gateSubmit.disabled = true; gateSubmit.textContent = "Let's go ✨"; }
    if (modal) modal.classList.remove("is-hidden");

    const onUsernameSet = () => {
      waitingForUsername = false;
      window.removeEventListener("firebase:usernameset", onUsernameSet);
      // Resume app init after username set
      runMainInit();
      updateStatusMessage();
    };
    window.addEventListener("firebase:usernameset", onUsernameSet);
  }

  // Handle auth ready immediately if already available
  if (window.__firebaseAuthReady) {
    onAuthReady(window.__firebaseAuthReady.hasUser);
  }

  window.addEventListener("firebase:authready", function (e) {
    onAuthReady(e.detail.hasUser);
  });

  // Safety fallback: hide loading after max 5s; do NOT run main init if blocked on username or no user
  setTimeout(() => {
    const loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen && !loadingScreen.classList.contains("hidden")) {
      console.warn("Loading screen timeout - forcing hide");
      hideLoadingScreen();
    }
    const loggedIn = typeof window.firebaseIsLoggedIn === "function" && window.firebaseIsLoggedIn();
    if (!mainInitDone && !waitingForUsername && loggedIn) {
      runMainInit();
    }
  }, 5000);
});

// ---------- Login + Profile menu (Logout in modal) ----------
const LOGOUT_BUTTON_PHRASES = [
  "Leaving so soon??!",
  "Already? Your neurons just warmed up…",
  "Logging out or just pretending to be productive?",
  "Hey—your thoughts were mid-sentence.",
  "So soon? The hedgehog barely stretched. 🦔",
  "Leaving already? I was enjoying your company.",
  "Go gently. Your thoughts will be here when you're back.",
  "Pause, not goodbye.",
  "You can rest. I'll hold the lights. ✨",
  "Suspending consciousness…",
  "Saving mental state…",
  "Background thoughts will continue running.",
  "System idle. Curiosity preserved.",
  "Enough for now. You did well.",
  "Log off. Live a little. Come back shiny.",
  "Take the insight with you.",
  "Learning paused—not lost.",
  "Escaping already?",
  "This is where most people quit… just saying. 😏",
  "Your future self says: see you soon.",
];

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const profileMenuBtn = document.getElementById("profileMenuBtn");
  const profileModal = document.getElementById("profileModal");
  const profileModalBackdrop = document.getElementById("profileModalBackdrop");
  const profileModalClose = document.getElementById("profileModalClose");
  const profileModalLogout = document.getElementById("profileModalLogout");

  function openProfileModal() {
    if (profileModal) profileModal.classList.remove("is-hidden");
    if (profileModalLogout && LOGOUT_BUTTON_PHRASES.length) {
      const phrase = LOGOUT_BUTTON_PHRASES[Math.floor(Math.random() * LOGOUT_BUTTON_PHRASES.length)];
      profileModalLogout.textContent = phrase;
    }
  }
  function closeProfileModal() {
    if (profileModal) profileModal.classList.add("is-hidden");
  }

  if (profileMenuBtn) {
    profileMenuBtn.addEventListener("click", openProfileModal);
  }
  if (profileModalBackdrop) {
    profileModalBackdrop.addEventListener("click", closeProfileModal);
  }
  if (profileModalClose) {
    profileModalClose.addEventListener("click", closeProfileModal);
  }
  if (profileModalLogout) {
    profileModalLogout.addEventListener("click", async (e) => {
      e.stopPropagation();
      try {
        if (typeof window.firebaseLogout === "function") {
          await window.firebaseLogout();
        }
        closeProfileModal();
      } catch (err) {
        console.error("Logout failed:", err);
      }
    });
  }

  // If opened as file://, Firebase Auth won't work properly
  if (location.protocol === "file:") {
    if (loginBtn) {
      loginBtn.disabled = true;
      loginBtn.title = "Run via Live Server (http://localhost...) to enable login.";
    }
    console.warn("Opened via file:// — Firebase Auth won't initialize. Use Live Server.");
    return;
  }

  // Wait briefly for firebase.js to attach functions to window
  function waitForFirebase(maxMs = 3000) {
    return new Promise((resolve) => {
      const start = Date.now();
      const tick = () => {
        const ok =
          typeof window.firebaseLoginGoogle === "function" &&
          typeof window.firebaseLogout === "function";
        if (ok) return resolve(true);
        if (Date.now() - start >= maxMs) return resolve(false);
        setTimeout(tick, 50);
      };
      tick();
    });
  }

  waitForFirebase().then((ready) => {
    if (!ready) {
      console.warn("Firebase functions not found. Check script order: firebase.js BEFORE app.js");
      if (loginBtn) {
        loginBtn.disabled = true;
        loginBtn.title = "Firebase not loaded. Check firebase.js + config + script order.";
      }
      return;
    }

    if (loginBtn) {
      loginBtn.addEventListener("click", async () => {
        try {
          await window.firebaseLoginGoogle();
        } catch (e) {
          console.error("Login failed:", e);
          alert("Login failed. Check Firebase Auth setup + authorized domains.");
        }
      });
    }

    window.addEventListener("firebase:authready", (e) => {
      const loggedIn = !!e.detail?.hasUser;
      if (loginBtn) loginBtn.classList.toggle("is-hidden", loggedIn);
      if (profileModalLogout) profileModalLogout.classList.toggle("is-hidden", !loggedIn);
    });
  });
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
    if (e.target.closest('.quiz-option, .next-btn, .back-btn, .tab')) {
      e.target.closest('.quiz-option, .next-btn, .back-btn, .tab')?.classList.add('touch-active');
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
