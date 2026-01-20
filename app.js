// Subject → lessons mapping

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
        "Weakness: because it doesn't rely on real-time customer choices, it often misjudges what people actually want, leading to shortages of some goods and surpluses of others."
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
        "Planned systems have a history of queues and shortages, because central planners can't perfectly predict changing preferences."
    }
  ],

  finance: [
    {
      id: 1,
      type: "content",
      title: "The Lesson Nobody Teaches",
      paragraphs: [
        "If school was useful, there would've been a class called: 'How Money Actually Becomes More Money.'",
        "Instead we learned that triangles have angles and mitochondria have vibes.",
        "Investing is the missing class: how the economy grows, how wealth forms, how time becomes an ally instead of an enemy, how to not work until you're dust.",
        "This isn't greed. It's understanding the system we already live inside."
      ]
    },
    {
      id: 2,
      type: "quiz",
      question: "Why wasn't investing taught in school?",
      options: [
        { id: "a", text: "Too practical", correct: false },
        { id: "b", text: "Too empowering", correct: false },
        { id: "c", text: "Would've made future adults harder to exploit", correct: false },
        { id: "d", text: "Mitochondria got priority", correct: true }
      ],
      explanation: "Technically all of them, but D wins for humor. The real answer is that practical financial education was never prioritized in traditional curricula."
    },
    {
      id: 3,
      type: "content",
      title: "What Investing Actually Is",
      paragraphs: [
        "Investing = buying tiny slices of the future.",
        "You put capital into something productive (companies, economies, ideas) and in exchange you get growth.",
        "The grown-up term for this is: 'Capital allocation.' The non-grown-up term: 'Money learns a trade.'",
        "Money isn't just for spending. Money is a worker. If you don't put it to work, inflation slowly fires it."
      ]
    },
    {
      id: 4,
      type: "quiz",
      question: "Which description is closest to investing?",
      options: [
        { id: "a", text: "Guessing prices", correct: false },
        { id: "b", text: "Allocating capital into productive assets", correct: true },
        { id: "c", text: "Gambling", correct: false },
        { id: "d", text: "Hoping", correct: false }
      ],
      explanation: "Investing is about allocating capital into productive assets that generate growth over time, not speculation or gambling."
    },
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
        "Ready for Lesson 2? Let's build an actual portfolio."
      ]
    },
    // ========== LESSON 2: Building a Portfolio ==========
    {
      id: 20,
      type: "content",
      title: "Lesson 2: Building a Portfolio — How to Allocate Capital",
      paragraphs: [
        "If I had £X, how would I actually split it?",
        "This is the question that keeps people stuck. They understand investing exists, but have no idea how to actually build a portfolio.",
        "Portfolio building = deciding what percentage goes where. It's not about picking the perfect stock. It's about structure."
      ]
    },
    {
      id: 21,
      type: "content",
      title: "Asset Classes 101",
      paragraphs: [
        "Stocks (Equities) → Ownership in companies. Higher risk, higher potential return.",
        "Bonds → Lending money to governments/companies. Lower risk, steady income.",
        "Real Estate → Physical property. Can provide income and appreciation.",
        "Cash → Emergency fund. Low risk, low return, but essential.",
        "Crypto → Digital assets. High volatility, high risk/reward.",
        "Each asset class behaves differently. The magic is in the mix."
      ]
    },
    {
      id: 22,
      type: "quiz",
      question: "Which asset class typically offers the highest long-term returns?",
      options: [
        { id: "a", text: "Cash", correct: false },
        { id: "b", text: "Bonds", correct: false },
        { id: "c", text: "Stocks (Equities)", correct: true },
        { id: "d", text: "They're all the same", correct: false }
      ],
      explanation: "Historically, stocks have provided the highest long-term returns (7-10% annually), but with higher volatility. This is the risk-return tradeoff in action."
    },
    {
      id: 23,
      type: "content",
      title: "What % Goes Where?",
      paragraphs: [
        "There's no one-size-fits-all answer. Your allocation depends on:",
        "• Your age (younger = can take more risk)",
        "• Your goals (retirement in 30 years vs buying a house in 5)",
        "• Your personality (can you sleep at night with volatility?)",
        "• Your timeline (when do you need the money?)",
        "A 25-year-old saving for retirement can be 80-90% stocks. A 60-year-old might be 40-60% stocks. Context matters."
      ]
    },
    {
      id: 24,
      type: "content",
      title: "Diversification (But Explained Properly)",
      paragraphs: [
        "Diversification isn't 'don't put all eggs in one basket.' That's too simple.",
        "Real diversification = spreading risk across:",
        "• Different asset classes (stocks, bonds, real estate)",
        "• Different geographies (UK, US, global markets)",
        "• Different sectors (tech, healthcare, finance, consumer)",
        "• Different company sizes (large cap, mid cap, small cap)",
        "The goal: when one thing crashes, others hold steady or rise. You're not betting on one outcome."
      ]
    },
    {
      id: 25,
      type: "quiz",
      question: "True diversification means:",
      options: [
        { id: "a", text: "Owning 10 different tech stocks", correct: false },
        { id: "b", text: "Spreading risk across asset classes, geographies, and sectors", correct: true },
        { id: "c", text: "Only investing in one country", correct: false },
        { id: "d", text: "Keeping everything in cash", correct: false }
      ],
      explanation: "True diversification spreads risk across multiple dimensions: asset classes, geographies, sectors, and company sizes. Owning 10 tech stocks is still concentrated risk."
    },
    {
      id: 26,
      type: "content",
      title: "Risk Profiles: Conservative / Balanced / Aggressive",
      paragraphs: [
        "Conservative (30% stocks, 60% bonds, 10% cash): For those who can't handle volatility. Lower returns, but sleep better at night.",
        "Balanced (60% stocks, 30% bonds, 10% cash): The middle ground. Growth with some stability.",
        "Aggressive (80-90% stocks, 10-20% bonds): For young investors with long timelines. Higher volatility, higher potential returns.",
        "Your risk profile should match your timeline and personality, not what someone on Twitter says."
      ]
    },
    {
      id: 27,
      type: "content",
      title: "Global Markets vs Domestic",
      paragraphs: [
        "UK investors often only invest in UK stocks. This is a mistake.",
        "The UK market is ~4% of global markets. You're missing 96% of opportunities.",
        "Global diversification = owning pieces of the entire world economy.",
        "When the UK economy struggles, other countries might be booming. You want exposure to both.",
        "A global ETF gives you instant worldwide diversification. It's the easiest way to own the world."
      ]
    },
    {
      id: 28,
      type: "quiz",
      question: "Why should UK investors consider global markets?",
      options: [
        { id: "a", text: "The UK is only ~4% of global markets", correct: false },
        { id: "b", text: "Global diversification reduces country-specific risk", correct: false },
        { id: "c", text: "Other economies may perform better than the UK", correct: false },
        { id: "d", text: "All of the above", correct: true }
      ],
      explanation: "Global investing provides access to the full world economy, reduces country-specific risk, and allows you to benefit from growth anywhere in the world."
    },
    {
      id: 29,
      type: "content",
      title: "Why ETFs Are Cheat Mode",
      paragraphs: [
        "ETFs (Exchange-Traded Funds) = buying hundreds or thousands of stocks in one transaction.",
        "Instead of picking individual stocks, you buy the entire market (or sector, or region).",
        "Benefits: instant diversification, low fees, easy to buy/sell, no stock-picking required.",
        "For beginners, a global ETF + a bond ETF = a complete portfolio. That's it. No complexity needed.",
        "ETFs are how you own the economy without becoming a stock analyst."
      ]
    },
    {
      id: 30,
      type: "content",
      title: "Example Portfolios: Beginner → Intermediate → Spicy",
      paragraphs: [
        "Beginner (£1,000-£10,000): 80% Global Stock ETF, 20% Bond ETF. Set it and forget it.",
        "Intermediate (£10,000-£50,000): 70% Global Stock ETF, 15% UK Stock ETF, 10% Bond ETF, 5% Real Estate ETF.",
        "Spicy (£50,000+): 60% Global Stocks, 15% UK Stocks, 10% Bonds, 5% Real Estate, 5% Crypto, 5% Individual stocks you've researched.",
        "Remember: complexity doesn't equal better returns. Simple often wins."
      ]
    },
    {
      id: 31,
      type: "quiz",
      question: "For a beginner with £5,000, the best portfolio is likely:",
      options: [
        { id: "a", text: "100% in one hot stock", correct: false },
        { id: "b", text: "80% Global Stock ETF, 20% Bond ETF", correct: true },
        { id: "c", text: "50% Crypto, 50% Meme stocks", correct: false },
        { id: "d", text: "Keep it all in cash", correct: false }
      ],
      explanation: "For beginners, a simple two-fund portfolio (global stocks + bonds) provides instant diversification, low fees, and is easy to manage. Complexity comes later."
    },
    {
      id: 32,
      type: "content",
      title: "Final Quiz: Building a Portfolio",
      paragraphs: [
        "You now understand asset allocation, diversification, risk profiles, and why ETFs make portfolio building accessible.",
        "The question 'If I had £X, how would I split it?' now has an answer based on your age, goals, timeline, and risk tolerance.",
        "Next lesson: Learn about dividends — money that pays you just for owning assets."
      ]
    },
    {
      id: 33,
      type: "quiz",
      question: "A balanced risk profile typically allocates:",
      options: [
        { id: "a", text: "30% stocks, 60% bonds, 10% cash", correct: false },
        { id: "b", text: "60% stocks, 30% bonds, 10% cash", correct: true },
        { id: "c", text: "90% stocks, 10% bonds", correct: false },
        { id: "d", text: "100% cash", correct: false }
      ],
      explanation: "A balanced portfolio typically has 60% stocks for growth, 30% bonds for stability, and 10% cash for emergencies. This balances risk and return."
    },
    // ========== LESSON 3: Dividends & Cashflow ==========
    {
      id: 34,
      type: "content",
      title: "Lesson 3: Dividends & Cashflow — Money That Pays You to Own It",
      paragraphs: [
        "Some companies don't just grow in value. They pay you cash just for owning them.",
        "This is dividends. It's like rent, but for stocks. You own the asset, and it pays you income.",
        "Understanding dividends = understanding how to build income streams from your investments."
      ]
    },
    {
      id: 35,
      type: "content",
      title: "Dividends Explained",
      paragraphs: [
        "When a company makes profit, it can:",
        "1. Reinvest it back into the business (growth stocks)",
        "2. Pay it out to shareholders as dividends (income stocks)",
        "3. Do both (balanced approach)",
        "Dividends = your share of company profits, paid quarterly or annually.",
        "If you own 100 shares of a company paying £1 per share annually, you get £100 per year. Just for owning it."
      ]
    },
    {
      id: 36,
      type: "quiz",
      question: "Dividends are:",
      options: [
        { id: "a", text: "Guaranteed payments", correct: false },
        { id: "b", text: "Your share of company profits paid to shareholders", correct: true },
        { id: "c", text: "Only for rich people", correct: false },
        { id: "d", text: "Tax-free always", correct: false }
      ],
      explanation: "Dividends are your share of company profits distributed to shareholders. They're not guaranteed and can be cut if the company struggles, but many companies have long dividend-paying histories."
    },
    {
      id: 37,
      type: "content",
      title: "Yields vs Yield Traps",
      paragraphs: [
        "Dividend Yield = Annual dividend ÷ Stock price × 100",
        "A 5% yield means if you invest £1,000, you get £50 per year in dividends.",
        "Yield Trap = a company with a very high yield (8%+) that's actually in trouble. The high yield exists because the stock price crashed, and the dividend will likely be cut.",
        "Good dividend stocks: consistent payouts, growing dividends, sustainable yields (2-5%).",
        "Yield traps: unsustainable payouts, declining business, desperate to attract investors."
      ]
    },
    {
      id: 38,
      type: "quiz",
      question: "A yield trap is:",
      options: [
        { id: "a", text: "A high-yielding stock that's actually in trouble", correct: true },
        { id: "b", text: "A low-yielding stock", correct: false },
        { id: "c", text: "Any dividend-paying stock", correct: false },
        { id: "d", text: "A bond", correct: false }
      ],
      explanation: "A yield trap is a stock with an unsustainably high dividend yield, usually because the stock price has crashed. The dividend is likely to be cut, and you'll lose both income and capital."
    },
    {
      id: 39,
      type: "content",
      title: "Dividend Aristocrats",
      paragraphs: [
        "Dividend Aristocrats = companies that have increased their dividends every year for 25+ years.",
        "These are the gold standard. They've survived recessions, crashes, and economic cycles while consistently paying and growing dividends.",
        "Examples: Johnson & Johnson, Coca-Cola, Procter & Gamble.",
        "They're not the sexiest stocks, but they're reliable income generators. Boring = beautiful for income investors."
      ]
    },
    {
      id: 40,
      type: "content",
      title: "Dividend ETFs",
      paragraphs: [
        "Instead of picking individual dividend stocks, you can buy a Dividend ETF.",
        "It holds dozens or hundreds of dividend-paying companies, giving you instant diversification.",
        "Benefits: automatic diversification, professional management, lower risk than single stocks, regular income.",
        "Perfect for: people who want income without stock-picking, beginners, passive investors.",
        "One ETF can give you exposure to the world's best dividend payers."
      ]
    },
    {
      id: 41,
      type: "quiz",
      question: "Dividend ETFs are good for:",
      options: [
        { id: "a", text: "People who want income without stock-picking", correct: false },
        { id: "b", text: "Automatic diversification across dividend stocks", correct: false },
        { id: "c", text: "Lower risk than single dividend stocks", correct: false },
        { id: "d", text: "All of the above", correct: true }
      ],
      explanation: "Dividend ETFs provide instant diversification, professional management, lower risk than individual stocks, and are perfect for passive income seekers."
    },
    {
      id: 42,
      type: "content",
      title: "Reinvest vs Take Income",
      paragraphs: [
        "When you receive dividends, you have two choices:",
        "Reinvest: Use dividends to buy more shares. This compounds your wealth faster. £100 dividend buys more shares, which pay more dividends, which buy more shares...",
        "Take Income: Withdraw dividends as cash. Use it for living expenses, treats, or other investments.",
        "Young investors: Reinvest for maximum compounding.",
        "Retirees: Take income to fund lifestyle.",
        "The choice depends on your goals and life stage."
      ]
    },
    {
      id: 43,
      type: "content",
      title: "Compounding via Dividends",
      paragraphs: [
        "Dividend compounding = dividends buy more shares, which pay more dividends, which buy more shares...",
        "Example: £10,000 invested, 4% yield = £400/year. Reinvest that £400, now you have £10,400. Next year: £416 in dividends. And so on.",
        "Over 20-30 years, dividend reinvestment can double or triple your returns compared to just price appreciation.",
        "This is why dividend reinvestment is powerful. You're getting paid to own assets, and using that payment to own more assets."
      ]
    },
    {
      id: 44,
      type: "quiz",
      question: "Dividend reinvestment is most powerful for:",
      options: [
        { id: "a", text: "Young investors with long time horizons", correct: true },
        { id: "b", text: "People who need income now", correct: false },
        { id: "c", text: "Only retirees", correct: false },
        { id: "d", text: "Nobody", correct: false }
      ],
      explanation: "Dividend reinvestment compounds wealth over time, making it most powerful for young investors with decades to let it grow. Retirees typically take income instead."
    },
    {
      id: 45,
      type: "content",
      title: "Dividend vs Growth Stocks",
      paragraphs: [
        "Dividend Stocks: Mature companies paying regular income. Lower growth, steady payouts. Examples: utilities, consumer staples, banks.",
        "Growth Stocks: Companies reinvesting profits for expansion. Higher growth potential, no dividends. Examples: tech companies, startups.",
        "You don't have to choose. A balanced portfolio can have both:",
        "• Growth stocks for long-term appreciation",
        "• Dividend stocks for income and stability",
        "The mix depends on your goals: growth-focused vs income-focused."
      ]
    },
    {
      id: 46,
      type: "quiz",
      question: "The main difference between dividend and growth stocks is:",
      options: [
        { id: "a", text: "Dividend stocks pay income, growth stocks reinvest profits", correct: true },
        { id: "b", text: "Growth stocks are always better", correct: false },
        { id: "c", text: "Dividend stocks don't grow", correct: false },
        { id: "d", text: "You can only own one type", correct: false }
      ],
      explanation: "Dividend stocks pay out profits as income, while growth stocks reinvest profits for expansion. Both have their place in a portfolio."
    },
    {
      id: 47,
      type: "content",
      title: "Final Quiz: Dividends & Cashflow",
      paragraphs: [
        "You now understand the weird magic of being paid to hold assets.",
        "Dividends = passive income from ownership. Reinvest for compounding, or take as income for lifestyle.",
        "Next lesson: Learn why humans self-sabotage their investments through behavioural finance."
      ]
    },
    {
      id: 48,
      type: "quiz",
      question: "The best strategy for dividend income depends on:",
      options: [
        { id: "a", text: "Your age and goals", correct: true },
        { id: "b", text: "What Twitter says", correct: false },
        { id: "c", text: "The latest market trend", correct: false },
        { id: "d", text: "Only your risk tolerance", correct: false }
      ],
      explanation: "Whether to reinvest dividends or take income depends on your age, goals, timeline, and financial needs. There's no one-size-fits-all answer."
    },
    // ========== LESSON 4: Behavioural Finance ==========
    {
      id: 49,
      type: "content",
      title: "Lesson 4: Behavioural Finance — Why Humans Self-Sabotage",
      paragraphs: [
        "You can know everything about investing and still lose money.",
        "Why? Because humans are emotional, irrational, and terrible at making financial decisions.",
        "Behavioural finance = understanding the psychology that makes us buy high, sell low, panic, and FOMO.",
        "This lesson protects future-you from present-you's worst impulses."
      ]
    },
    {
      id: 50,
      type: "content",
      title: "Loss Aversion",
      paragraphs: [
        "Losses hurt twice as much as gains feel good.",
        "Losing £100 feels worse than gaining £100 feels good. This is loss aversion.",
        "Result: People hold losing investments too long (hoping to break even) and sell winning investments too early (locking in small gains).",
        "The fix: Set rules. Decide your exit strategy before you invest. Don't let emotions override logic."
      ]
    },
    {
      id: 51,
      type: "quiz",
      question: "Loss aversion means:",
      options: [
        { id: "a", text: "Losses hurt more than equivalent gains feel good", correct: true },
        { id: "b", text: "You should never sell at a loss", correct: false },
        { id: "c", text: "Gains are more important than losses", correct: false },
        { id: "d", text: "You should always take profits immediately", correct: false }
      ],
      explanation: "Loss aversion is the psychological tendency to feel losses more intensely than equivalent gains. This leads to poor investment decisions like holding losers too long."
    },
    {
      id: 52,
      type: "content",
      title: "Panic Selling",
      paragraphs: [
        "Market crashes → panic → sell everything → miss the recovery.",
        "This is the most expensive mistake investors make. Selling during crashes locks in losses and prevents you from benefiting from the eventual recovery.",
        "The fix: Don't check your portfolio during crashes. Set it and forget it. Or better: buy more when everyone else is panicking (if you have cash).",
        "Remember: crashes are temporary. Panic selling makes them permanent."
      ]
    },
    {
      id: 53,
      type: "content",
      title: "FOMO Buying",
      paragraphs: [
        "FOMO (Fear Of Missing Out) = buying because everyone else is buying.",
        "You see a stock/crypto going up, everyone's talking about it, you don't want to miss out, so you buy at the top.",
        "Result: You buy high, it crashes, you sell low. Classic mistake.",
        "The fix: Have a plan. Don't invest based on hype. If everyone's talking about it, you're probably too late."
      ]
    },
    {
      id: 54,
      type: "quiz",
      question: "FOMO buying typically leads to:",
      options: [
        { id: "a", text: "Buying at the top and selling at the bottom", correct: true },
        { id: "b", text: "Great returns", correct: false },
        { id: "c", text: "Perfect timing", correct: false },
        { id: "d", text: "Diversification", correct: false }
      ],
      explanation: "FOMO buying means buying when everyone else is buying, which usually means buying at peak prices. When the hype dies, prices crash, and FOMO buyers sell at a loss."
    },
    {
      id: 55,
      type: "content",
      title: "Recency Bias",
      paragraphs: [
        "Recency bias = thinking what happened recently will continue forever.",
        "Stock market up 20% this year? 'It'll keep going up!'",
        "Stock market down 20%? 'It'll keep crashing!'",
        "Reality: Markets are cyclical. What goes up comes down. What goes down comes back up.",
        "The fix: Look at long-term history, not just recent performance. Don't extrapolate short-term trends."
      ]
    },
    {
      id: 56,
      type: "content",
      title: "Herd Behaviour",
      paragraphs: [
        "Humans are social animals. We follow the crowd, even when the crowd is wrong.",
        "If everyone's buying crypto, you want crypto. If everyone's selling stocks, you want to sell too.",
        "Herd behaviour creates bubbles (everyone buys) and crashes (everyone sells).",
        "The fix: Think independently. The crowd is usually wrong at extremes. Be greedy when others are fearful, fearful when others are greedy."
      ]
    },
    {
      id: 57,
      type: "quiz",
      question: "Herd behaviour in investing typically:",
      options: [
        { id: "a", text: "Creates bubbles and crashes", correct: true },
        { id: "b", text: "Leads to perfect market timing", correct: false },
        { id: "c", text: "Always produces good returns", correct: false },
        { id: "d", text: "Is the best investment strategy", correct: false }
      ],
      explanation: "Herd behaviour causes everyone to buy at the same time (creating bubbles) and sell at the same time (creating crashes). Following the crowd usually leads to poor timing."
    },
    {
      id: 58,
      type: "content",
      title: "Ego + Overconfidence",
      paragraphs: [
        "After a few wins, you think you're a genius. You start taking bigger risks, thinking you can't lose.",
        "Overconfidence = thinking you know more than you do, trading too much, taking unnecessary risks.",
        "Reality: Most of investing success is luck and time, not skill. Even professionals underperform the market.",
        "The fix: Stay humble. Stick to your plan. Don't let a few wins make you think you're invincible."
      ]
    },
    {
      id: 59,
      type: "content",
      title: "Time Inconsistency",
      paragraphs: [
        "Present-you wants to spend money. Future-you wants to be rich.",
        "Present-you makes promises future-you can't keep. 'I'll start investing next month.'",
        "Time inconsistency = valuing immediate gratification over long-term goals.",
        "The fix: Automate everything. Set up automatic investments. Make it so present-you can't sabotage future-you."
      ]
    },
    {
      id: 60,
      type: "content",
      title: "Dopamine Loops + Apps + Charts",
      paragraphs: [
        "Trading apps are designed to be addictive. Red and green numbers, constant updates, notifications.",
        "Every check releases dopamine. You become addicted to checking your portfolio.",
        "This leads to overtrading, emotional decisions, and poor returns.",
        "The fix: Delete the app. Check quarterly, not daily. Set it and forget it. Your future self will thank you."
      ]
    },
    {
      id: 61,
      type: "quiz",
      question: "Constantly checking your portfolio leads to:",
      options: [
        { id: "a", text: "Better returns", correct: false },
        { id: "b", text: "Overtrading and emotional decisions", correct: true },
        { id: "c", text: "Perfect timing", correct: false },
        { id: "d", text: "More knowledge", correct: false }
      ],
      explanation: "Constantly checking your portfolio creates dopamine loops, leads to emotional decisions, overtrading, and usually worse returns. Less checking = better results."
    },
    {
      id: 62,
      type: "content",
      title: "How to Build Anti-Panic Systems and Rules",
      paragraphs: [
        "Rules > Emotions. Write down your investment rules before you need them:",
        "• I will only check my portfolio once per quarter",
        "• I will not sell during crashes (unless I need the money)",
        "• I will rebalance annually, not reactively",
        "• I will not invest more than 5% in any single stock",
        "• I will not make investment decisions when emotional",
        "Automate what you can. Use dollar-cost averaging. Set it and forget it.",
        "Your future self will thank present-you for these rules."
      ]
    },
    {
      id: 63,
      type: "content",
      title: "Final Quiz: Behavioural Finance",
      paragraphs: [
        "You now understand the psychology of markets and how to protect yourself from your worst impulses.",
        "The goal: Understand why humans self-sabotage, and build systems to prevent it.",
        "Next lesson: Crypto — treating it like an asset class, not a casino."
      ]
    },
    {
      id: 64,
      type: "quiz",
      question: "The best way to avoid behavioural mistakes is:",
      options: [
        { id: "a", text: "Follow your emotions", correct: false },
        { id: "b", text: "Create rules and automate investments", correct: true },
        { id: "c", text: "Check your portfolio daily", correct: false },
        { id: "d", text: "Follow the crowd", correct: false }
      ],
      explanation: "Creating rules, automating investments, and removing emotion from decisions is the best way to avoid behavioural mistakes that sabotage returns."
    },
    // ========== LESSON 5: Crypto ==========
    {
      id: 65,
      type: "content",
      title: "Lesson 5: Crypto — Tech vs Speculation vs Narrative",
      paragraphs: [
        "Crypto is either the future of money or a speculative bubble. Probably both.",
        "This lesson treats crypto like an asset class, not a casino.",
        "You'll understand: why it exists, how it works, why it's volatile, and how to approach it intelligently."
      ]
    },
    {
      id: 66,
      type: "content",
      title: "Why Crypto Exists",
      paragraphs: [
        "Bitcoin was created after the 2008 financial crisis as a response to:",
        "• Centralized banking systems that failed",
        "• Government control over money",
        "• The need for decentralized, trustless transactions",
        "Crypto = digital money that doesn't need banks or governments.",
        "Whether you believe in it or not, it exists, it's valuable, and it's not going away."
      ]
    },
    {
      id: 67,
      type: "quiz",
      question: "Bitcoin was created as a response to:",
      options: [
        { id: "a", text: "The 2008 financial crisis and centralized banking", correct: true },
        { id: "b", text: "A random experiment", correct: false },
        { id: "c", text: "Government request", correct: false },
        { id: "d", text: "Bank collaboration", correct: false }
      ],
      explanation: "Bitcoin was created in 2009 as a decentralized alternative to traditional banking systems that failed during the 2008 financial crisis."
    },
    {
      id: 68,
      type: "content",
      title: "Difference Between BTC, ETH, and Altcoins",
      paragraphs: [
        "Bitcoin (BTC): Digital gold. Store of value. Limited supply (21 million). Simple, secure, decentralized.",
        "Ethereum (ETH): Programmable blockchain. Runs smart contracts, DeFi, NFTs. More complex, more utility.",
        "Altcoins: Everything else. Some have utility, most are speculation. High risk, high reward (or total loss).",
        "BTC and ETH are the blue chips. Altcoins are the lottery tickets.",
        "If you're new to crypto, start with BTC and ETH. Altcoins can come later (if at all)."
      ]
    },
    {
      id: 69,
      type: "content",
      title: "Smart Contracts, Blockchains, Tokenomics",
      paragraphs: [
        "Blockchain = a decentralized ledger. Everyone has a copy. No single point of failure.",
        "Smart Contracts = code that executes automatically. 'If X happens, do Y.' No middleman needed.",
        "Tokenomics = the economics of a token. Supply, distribution, utility, incentives.",
        "Understanding these helps you evaluate crypto projects beyond hype.",
        "Good projects: clear utility, sustainable tokenomics, real use cases.",
        "Bad projects: vague promises, infinite supply, no real utility."
      ]
    },
    {
      id: 70,
      type: "quiz",
      question: "The main difference between Bitcoin and Ethereum is:",
      options: [
        { id: "a", text: "Bitcoin is digital gold, Ethereum runs smart contracts", correct: true },
        { id: "b", text: "They're the same thing", correct: false },
        { id: "c", text: "Ethereum has a 21M cap", correct: false },
        { id: "d", text: "Bitcoin is more complex", correct: false }
      ],
      explanation: "Bitcoin is designed as digital gold (store of value), while Ethereum is a programmable blockchain that runs smart contracts and decentralized applications."
    },
    {
      id: 71,
      type: "content",
      title: "Why Crypto Moves Fast (Volatility Explained)",
      paragraphs: [
        "Crypto is volatile because:",
        "• It's a new asset class (less established than stocks)",
        "• 24/7 trading (no market close)",
        "• High leverage and speculation",
        "• Regulatory uncertainty",
        "• Narrative-driven (news and sentiment move prices fast)",
        "A 20% move in a day is normal. A 50% crash is possible. A 10x pump is possible.",
        "This is why you only invest what you can afford to lose. Crypto is high risk, high reward."
      ]
    },
    {
      id: 72,
      type: "content",
      title: "Cycles + Macro + Narratives",
      paragraphs: [
        "Crypto moves in cycles:",
        "• Bull market: Everything pumps, FOMO is high, new coins launch",
        "• Bear market: Everything crashes, fear is high, weak projects die",
        "• These cycles are driven by: macro economics, adoption, regulation, narratives",
        "Understanding cycles helps you avoid buying at the top and selling at the bottom.",
        "The narrative changes: 'digital gold' → 'programmable money' → 'Web3' → 'AI tokens'. The cycle repeats."
      ]
    },
    {
      id: 73,
      type: "quiz",
      question: "Crypto volatility is caused by:",
      options: [
        { id: "a", text: "24/7 trading and high speculation", correct: false },
        { id: "b", text: "Regulatory uncertainty and narrative-driven markets", correct: false },
        { id: "c", text: "It's a new, less established asset class", correct: false },
        { id: "d", text: "All of the above", correct: true }
      ],
      explanation: "Crypto volatility comes from multiple factors: 24/7 trading, high speculation, regulatory uncertainty, narrative-driven price movements, and being a new asset class."
    },
    {
      id: 74,
      type: "content",
      title: "Speculation with Literacy vs Vibes",
      paragraphs: [
        "Vibes-based crypto investing: 'This coin sounds cool, let's YOLO.'",
        "Literacy-based crypto investing: Understanding the tech, tokenomics, use case, team, and risks before investing.",
        "You can still speculate, but do it with knowledge:",
        "• Understand what you're buying",
        "• Know the risks",
        "• Have an exit strategy",
        "• Only invest what you can lose",
        "Speculation isn't bad if you're informed. Blind speculation is gambling."
      ]
    },
    {
      id: 75,
      type: "content",
      title: "Risk Management in Crypto Terms",
      paragraphs: [
        "Crypto risk management:",
        "• Allocate only 5-10% of portfolio to crypto (if any)",
        "• Stick to BTC and ETH for most of your crypto allocation",
        "• Use dollar-cost averaging (don't go all-in at once)",
        "• Have an exit strategy (take profits, set stop losses)",
        "• Store securely (hardware wallet for large amounts)",
        "• Don't invest more than you can afford to lose",
        "Treat crypto like a high-risk, high-reward asset class, not a get-rich-quick scheme."
      ]
    },
    {
      id: 76,
      type: "quiz",
      question: "Good crypto risk management includes:",
      options: [
        { id: "a", text: "Allocating 5-10% of portfolio max", correct: false },
        { id: "b", text: "Using dollar-cost averaging", correct: false },
        { id: "c", text: "Only investing what you can afford to lose", correct: false },
        { id: "d", text: "All of the above", correct: true }
      ],
      explanation: "Good crypto risk management includes limiting allocation, using dollar-cost averaging, only investing what you can lose, and having an exit strategy."
    },
    {
      id: 77,
      type: "content",
      title: "Final Quiz: Crypto",
      paragraphs: [
        "You now understand crypto as an asset class: the tech, the risks, the cycles, and how to approach it intelligently.",
        "Goal achieved: Treat crypto like an asset class, not a casino.",
        "Next lesson: The maths that actually matters — interest, inflation, and compounding."
      ]
    },
    {
      id: 78,
      type: "quiz",
      question: "The best approach to crypto for beginners is:",
      options: [
        { id: "a", text: "YOLO everything into meme coins", correct: false },
        { id: "b", text: "Start with BTC and ETH, small allocation, understand risks", correct: true },
        { id: "c", text: "Avoid it completely", correct: false },
        { id: "d", text: "Invest 50% of portfolio", correct: false }
      ],
      explanation: "For beginners, start with BTC and ETH (the blue chips), allocate only a small percentage (5-10%), and understand the risks before investing more."
    },
    // ========== LESSON 6: Interest, Inflation & Compounding ==========
    {
      id: 79,
      type: "content",
      title: "Lesson 6: Interest, Inflation & Compounding — The Maths That Actually Matters",
      paragraphs: [
        "This is the math that upgrades your intelligence.",
        "Understanding real vs nominal returns, inflation's impact, and compounding's power changes how you think about money.",
        "These concepts determine whether you build wealth or lose it over time."
      ]
    },
    {
      id: 80,
      type: "content",
      title: "Real vs Nominal Returns",
      paragraphs: [
        "Nominal Return = the number you see. 'My portfolio returned 8%!'",
        "Real Return = nominal return minus inflation. 'My portfolio returned 8%, but inflation was 3%, so my real return was 5%.'",
        "Real return is what matters. It's your actual purchasing power increase.",
        "Example: 8% return with 3% inflation = 5% real return. Your money grew, but not as much as it seems.",
        "Always think in real terms, not nominal. Inflation is the silent thief."
      ]
    },
    {
      id: 81,
      type: "quiz",
      question: "If your portfolio returns 10% and inflation is 3%, your real return is:",
      options: [
        { id: "a", text: "10%", correct: false },
        { id: "b", text: "7%", correct: true },
        { id: "c", text: "13%", correct: false },
        { id: "d", text: "3%", correct: false }
      ],
      explanation: "Real return = Nominal return - Inflation. 10% - 3% = 7% real return. This is your actual purchasing power increase."
    },
    {
      id: 82,
      type: "content",
      title: "Inflation as a Tax on Time",
      paragraphs: [
        "Inflation = your money loses purchasing power over time.",
        "£100 today buys less than £100 in 10 years. That's inflation's tax.",
        "At 3% inflation, your money loses half its purchasing power in ~24 years.",
        "This is why keeping money in cash is expensive. You're paying the inflation tax.",
        "Investing is how you fight inflation. You need returns that beat inflation to preserve and grow wealth."
      ]
    },
    {
      id: 83,
      type: "content",
      title: "Compounding as a Time Multiplier",
      paragraphs: [
        "Compounding = earning returns on your returns.",
        "Simple interest: £1,000 at 10% = £100/year forever.",
        "Compound interest: £1,000 at 10% = £100 year 1, £110 year 2, £121 year 3...",
        "Over 30 years: Simple = £4,000. Compound = £17,449.",
        "Time is the multiplier. The longer you compound, the more exponential the growth.",
        "Starting early matters more than starting with more money."
      ]
    },
    {
      id: 84,
      type: "quiz",
      question: "Compounding is powerful because:",
      options: [
        { id: "a", text: "You earn returns on your returns", correct: true },
        { id: "b", text: "It's simpler than simple interest", correct: false },
        { id: "c", text: "It requires no time", correct: false },
        { id: "d", text: "It's guaranteed", correct: false }
      ],
      explanation: "Compounding is powerful because you earn returns on both your principal and your previous returns, creating exponential growth over time."
    },
    {
      id: 85,
      type: "content",
      title: "Opportunity Cost",
      paragraphs: [
        "Opportunity cost = what you give up by choosing one option over another.",
        "Keeping £10,000 in cash costs you the returns you could have earned by investing it.",
        "If stocks return 7% and cash returns 0%, your opportunity cost of holding cash is 7% per year.",
        "Every financial decision has an opportunity cost. Understanding it helps you make better choices.",
        "Time also has opportunity cost. Starting to invest at 25 vs 35 can mean hundreds of thousands of pounds difference."
      ]
    },
    {
      id: 86,
      type: "content",
      title: "Growth vs Decay Curves",
      paragraphs: [
        "Growth curve (investing): Starts slow, accelerates over time. Exponential growth.",
        "Decay curve (inflation): Starts slow, accelerates over time. Exponential decay of purchasing power.",
        "The race: Can your investments grow faster than inflation decays your money?",
        "Over long periods, stocks historically grow 7-10% while inflation is 2-3%. Growth wins, but only if you invest.",
        "Understanding these curves helps you see why time and investing matter so much."
      ]
    },
    {
      id: 87,
      type: "quiz",
      question: "Opportunity cost of keeping money in cash is:",
      options: [
        { id: "a", text: "The returns you could have earned by investing", correct: true },
        { id: "b", text: "Zero", correct: false },
        { id: "c", text: "The inflation rate only", correct: false },
        { id: "d", text: "Not important", correct: false }
      ],
      explanation: "Opportunity cost is what you give up by choosing one option. Keeping cash costs you the investment returns you could have earned."
    },
    {
      id: 88,
      type: "content",
      title: "Final Quiz: Interest, Inflation & Compounding",
      paragraphs: [
        "You now understand the math that actually matters: real returns, inflation's impact, compounding's power, and opportunity cost.",
        "Goal achieved: The math that upgrades intelligence.",
        "Next lesson: Taxes, wrappers, and optimization — the adult level-up."
      ]
    },
    {
      id: 89,
      type: "quiz",
      question: "The most important return to focus on is:",
      options: [
        { id: "a", text: "Nominal return", correct: false },
        { id: "b", text: "Real return (after inflation)", correct: true },
        { id: "c", text: "Simple interest", correct: false },
        { id: "d", text: "Any positive return", correct: false }
      ],
      explanation: "Real return (nominal return minus inflation) is what matters because it shows your actual purchasing power increase. Nominal returns can be misleading."
    },
    // ========== LESSON 7: Taxes, Wrappers & Optimization ==========
    {
      id: 90,
      type: "content",
      title: "Lesson 7: Taxes, Wrappers & Optimization — The Adult Level-Up",
      paragraphs: [
        "You can earn great returns and still lose to taxes.",
        "This lesson: Keep more of what you earn, optimize legally, no panic.",
        "Understanding tax wrappers (ISAs, SIPPs) and tax optimization can save you thousands over your lifetime."
      ]
    },
    {
      id: 91,
      type: "content",
      title: "ISA / SIPP Explained (UK)",
      paragraphs: [
        "ISA (Individual Savings Account):",
        "• £20,000 annual allowance",
        "• All gains and income are tax-free forever",
        "• Can withdraw anytime (Stocks & Shares ISA)",
        "• Perfect for: general investing, building wealth",
        "",
        "SIPP (Self-Invested Personal Pension):",
        "• Tax relief on contributions (government adds 20-45%)",
        "• Can't access until age 55 (57 from 2028)",
        "• 25% tax-free lump sum on withdrawal",
        "• Perfect for: retirement savings, long-term wealth",
        "",
        "Use both. ISA for flexibility, SIPP for retirement."
      ]
    },
    {
      id: 92,
      type: "quiz",
      question: "The main advantage of an ISA is:",
      options: [
        { id: "a", text: "Tax-free gains and income forever", correct: true },
        { id: "b", text: "Higher contribution limits than SIPP", correct: false },
        { id: "c", text: "Government adds 20% to contributions", correct: false },
        { id: "d", text: "Can only access at retirement", correct: false }
      ],
      explanation: "ISAs provide tax-free gains and income forever, with a £20,000 annual allowance. You can withdraw anytime, making them flexible for general investing."
    },
    {
      id: 93,
      type: "content",
      title: "Capital Gains vs Income Tax",
      paragraphs: [
        "Capital Gains Tax:",
        "• Paid when you sell assets for profit",
        "• £6,000 annual allowance (2023-24, reducing to £3,000)",
        "• 10% or 20% rate (depending on income)",
        "",
        "Income Tax (on dividends/interest):",
        "• Paid on dividends and interest received",
        "• £1,000 dividend allowance (reducing to £500)",
        "• 8.75%, 33.75%, or 39.35% rates",
        "",
        "Solution: Use ISAs and SIPPs to avoid both. All gains and income are tax-free inside these wrappers."
      ]
    },
    {
      id: 94,
      type: "content",
      title: "Tax Shelters",
      paragraphs: [
        "Tax shelters = accounts where your investments grow tax-free.",
        "UK tax shelters:",
        "• ISA: Tax-free forever, flexible access",
        "• SIPP: Tax relief on contributions, tax-free growth, taxed on withdrawal",
        "• Premium Bonds: Tax-free winnings (but low returns)",
        "",
        "Strategy:",
        "1. Max out ISA first (£20k/year)",
        "2. Then contribute to SIPP (get tax relief)",
        "3. Only invest outside wrappers if you've maxed both",
        "",
        "This can save you tens of thousands in taxes over your lifetime."
      ]
    },
    {
      id: 95,
      type: "quiz",
      question: "The best strategy for UK investors is:",
      options: [
        { id: "a", text: "Invest outside ISAs and SIPPs", correct: false },
        { id: "b", text: "Max out ISA, then SIPP, then invest outside", correct: true },
        { id: "c", text: "Only use SIPPs", correct: false },
        { id: "d", text: "Ignore tax wrappers", correct: false }
      ],
      explanation: "The optimal strategy is to max out your ISA first (tax-free, flexible), then contribute to SIPP (tax relief), and only invest outside wrappers if you've maxed both."
    },
    {
      id: 96,
      type: "content",
      title: "Withholding Taxes (International Equities)",
      paragraphs: [
        "When you invest in US stocks, the US government withholds 15% of dividends (30% if no tax treaty).",
        "This happens automatically. You receive 85% of the dividend.",
        "Inside an ISA: You can't reclaim this tax, but you don't pay UK tax on the remaining 85%.",
        "Inside a SIPP: You can reclaim the withholding tax, getting the full dividend tax-free.",
        "For US dividend stocks, SIPPs are slightly more tax-efficient than ISAs.",
        "For most investors, the difference is small. Don't overthink it."
      ]
    },
    {
      id: 97,
      type: "content",
      title: "Brokers vs Platforms",
      paragraphs: [
        "Broker = executes your trades (buy/sell orders).",
        "Platform = the app/website you use to invest.",
        "Many platforms are also brokers (Trading 212, Freetrade, Hargreaves Lansdown).",
        "Considerations:",
        "• Fees (trading fees, platform fees, fund fees)",
        "• ISA/SIPP availability",
        "• Investment options (stocks, ETFs, funds)",
        "• User experience",
        "• Customer service",
        "",
        "Choose based on your needs. Low fees + ISA access + good UX = winner."
      ]
    },
    {
      id: 98,
      type: "quiz",
      question: "When choosing a broker/platform, consider:",
      options: [
        { id: "a", text: "Fees and ISA availability", correct: false },
        { id: "b", text: "Investment options and user experience", correct: false },
        { id: "c", text: "All of the above", correct: true },
        { id: "d", text: "Only the fees", correct: false }
      ],
      explanation: "When choosing a broker/platform, consider fees, ISA/SIPP availability, investment options, user experience, and customer service. Balance all factors."
    },
    {
      id: 99,
      type: "content",
      title: "Final Quiz: Taxes, Wrappers & Optimization",
      paragraphs: [
        "You now understand how to keep more of what you earn through tax optimization.",
        "Goal achieved: Optimize legally, keep more, no panic.",
        "Next lesson: When to buy and when to sell — timing without mystic powers."
      ]
    },
    {
      id: 100,
      type: "quiz",
      question: "The main benefit of using tax wrappers is:",
      options: [
        { id: "a", text: "Higher returns", correct: false },
        { id: "b", text: "Keeping more of your gains by avoiding taxes", correct: true },
        { id: "c", text: "Guaranteed profits", correct: false },
        { id: "d", text: "No risk", correct: false }
      ],
      explanation: "Tax wrappers like ISAs and SIPPs help you keep more of your gains by making them tax-free, which can save tens of thousands over your lifetime."
    },
    // ========== LESSON 8: When to Buy & When to Sell ==========
    {
      id: 101,
      type: "content",
      title: "Lesson 8: When to Buy & When to Sell — Timing Without Mystic Powers",
      paragraphs: [
        "Everyone wants to know: When do I buy? When do I sell?",
        "The answer: Rules > emotions > guesses.",
        "This lesson gives you a framework for timing decisions without needing to predict the future."
      ]
    },
    {
      id: 102,
      type: "content",
      title: "Owning Businesses vs Flipping Trends",
      paragraphs: [
        "Two approaches:",
        "Investor mindset: Own businesses for the long term. Buy quality, hold through volatility, let compounding work.",
        "Trader mindset: Flip trends, buy low sell high, time the market.",
        "For 95% of people: Investor mindset wins. Trading is hard, requires skill, and most traders lose money.",
        "The best time to buy? When you have money. The best time to sell? When you need money or your thesis changes.",
        "Time in market > timing the market."
      ]
    },
    {
      id: 103,
      type: "quiz",
      question: "For most people, the best approach is:",
      options: [
        { id: "a", text: "Trading and timing the market", correct: false },
        { id: "b", text: "Owning businesses long-term and letting compounding work", correct: true },
        { id: "c", text: "Buying and selling daily", correct: false },
        { id: "d", text: "Following every trend", correct: false }
      ],
      explanation: "For most people, the investor mindset (owning quality businesses long-term) beats trading. Time in market beats timing the market."
    },
    {
      id: 104,
      type: "content",
      title: "Valuation vs Speculation",
      paragraphs: [
        "Valuation = buying based on what something is worth (fundamentals, earnings, assets).",
        "Speculation = buying based on what you think others will pay (momentum, hype, narrative).",
        "Both can work, but:",
        "• Valuation is more sustainable and less risky",
        "• Speculation is higher risk, higher reward, requires timing",
        "Most successful investors use valuation. They buy when things are cheap relative to value, sell when expensive.",
        "Speculation can work, but treat it as gambling, not investing."
      ]
    },
    {
      id: 105,
      type: "content",
      title: "Dollar-Cost Averaging",
      paragraphs: [
        "Dollar-Cost Averaging (DCA) = investing a fixed amount regularly (e.g., £100/month) regardless of price.",
        "Benefits:",
        "• Removes emotion from timing decisions",
        "• Buys more shares when prices are low, fewer when high",
        "• Smooths out volatility",
        "• Automates investing",
        "",
        "Example: £100/month into an ETF. Some months you buy at £10/share (10 shares), some at £12/share (8.3 shares). Over time, you average out the price.",
        "DCA is the cheat code for regular investors. Set it and forget it."
      ]
    },
    {
      id: 106,
      type: "quiz",
      question: "Dollar-cost averaging helps by:",
      options: [
        { id: "a", text: "Removing emotion and automating investing", correct: false },
        { id: "b", text: "Buying more when prices are low, less when high", correct: false },
        { id: "c", text: "Smoothing out volatility", correct: false },
        { id: "d", text: "All of the above", correct: true }
      ],
      explanation: "Dollar-cost averaging removes emotion, automates investing, naturally buys more when prices are low, and smooths out volatility over time."
    },
    {
      id: 107,
      type: "content",
      title: "Rebalancing",
      paragraphs: [
        "Rebalancing = adjusting your portfolio back to target allocations.",
        "Example: Target is 80% stocks, 20% bonds. Stocks perform well, now you're 90% stocks, 10% bonds. Rebalance by selling stocks and buying bonds.",
        "When to rebalance:",
        "• Annually (set a date)",
        "• When allocations drift 5%+ from target",
        "• Don't rebalance too often (creates taxes and fees)",
        "",
        "Rebalancing forces you to sell high and buy low. It's counterintuitive but effective."
      ]
    },
    {
      id: 108,
      type: "content",
      title: "Taking Profits vs Conviction Holding",
      paragraphs: [
        "Taking profits = selling some of a winning investment to lock in gains.",
        "Conviction holding = holding through volatility because you believe in the long-term thesis.",
        "When to take profits:",
        "• You've hit a target (e.g., 2x your money)",
        "• The investment no longer fits your strategy",
        "• You need the money",
        "",
        "When to hold with conviction:",
        "• The thesis hasn't changed",
        "• You're investing for the long term",
        "• Volatility is normal, not a reason to sell",
        "",
        "There's no right answer. It depends on your goals and conviction."
      ]
    },
    {
      id: 109,
      type: "quiz",
      question: "Rebalancing helps by:",
      options: [
        { id: "a", text: "Forcing you to sell high and buy low", correct: true },
        { id: "b", text: "Maximizing trading fees", correct: false },
        { id: "c", text: "Following every market move", correct: false },
        { id: "d", text: "Avoiding all risk", correct: false }
      ],
      explanation: "Rebalancing forces you to sell assets that have performed well (selling high) and buy assets that have underperformed (buying low), maintaining your target allocation."
    },
    {
      id: 110,
      type: "content",
      title: "Time Horizons",
      paragraphs: [
        "Your time horizon determines your strategy:",
        "Short-term (1-3 years): Conservative. Cash, bonds, low volatility. You need the money soon.",
        "Medium-term (3-10 years): Balanced. Mix of stocks and bonds. Some growth, some stability.",
        "Long-term (10+ years): Aggressive. Mostly stocks. You can ride out volatility.",
        "",
        "The longer your time horizon, the more risk you can take. Time smooths out volatility.",
        "Don't invest money you need in 2 years the same way you invest money for retirement in 30 years."
      ]
    },
    {
      id: 111,
      type: "content",
      title: "Final Quiz: When to Buy & When to Sell",
      paragraphs: [
        "You now have a framework for timing decisions: rules over emotions, DCA for regular investing, rebalancing for maintenance, and time horizons for strategy.",
        "Goal achieved: Rules > emotions > guesses.",
        "Next lesson: The system — how markets, companies, and innovation actually create wealth."
      ]
    },
    {
      id: 112,
      type: "quiz",
      question: "The best approach for most investors is:",
      options: [
        { id: "a", text: "Time the market perfectly", correct: false },
        { id: "b", text: "Use dollar-cost averaging and hold long-term", correct: true },
        { id: "c", text: "Trade daily based on news", correct: false },
        { id: "d", text: "Only buy at market peaks", correct: false }
      ],
      explanation: "For most investors, dollar-cost averaging (regular investing) combined with long-term holding beats trying to time the market. Time in market > timing the market."
    },
    // ========== LESSON 9: The System ==========
    {
      id: 113,
      type: "content",
      title: "Lesson 9: The System — How Markets, Companies & Innovation Actually Create Wealth",
      paragraphs: [
        "Why do stocks return 7-10% long-term?",
        "This isn't magic. It's the system working as designed.",
        "Understanding the engine helps you stop guessing and start understanding."
      ]
    },
    {
      id: 114,
      type: "content",
      title: "Productive Assets",
      paragraphs: [
        "Productive assets = things that generate value over time.",
        "Companies produce goods/services → generate profits → reinvest or pay dividends → value increases.",
        "When you own stocks, you own pieces of productive businesses. Their productivity creates your returns.",
        "This is why stocks grow over time. Companies get better, more efficient, more profitable.",
        "You're not betting on prices. You're owning productive assets that create value."
      ]
    },
    {
      id: 115,
      type: "quiz",
      question: "Stocks grow over time because:",
      options: [
        { id: "a", text: "Companies are productive and generate value", correct: true },
        { id: "b", text: "Prices always go up", correct: false },
        { id: "c", text: "It's guaranteed", correct: false },
        { id: "d", text: "Magic", correct: false }
      ],
      explanation: "Stocks grow because companies are productive assets that generate profits, reinvest, and create value over time. This productivity drives long-term returns."
    },
    {
      id: 116,
      type: "content",
      title: "Innovation Cycles",
      paragraphs: [
        "Innovation drives economic growth:",
        "• New technologies create new industries",
        "• New industries create new jobs and wealth",
        "• Old industries adapt or die",
        "• The cycle repeats",
        "",
        "Examples: Internet → e-commerce, cloud computing, social media. AI → new applications, automation, efficiency.",
        "Investing in the market = owning a piece of all innovation. You don't need to pick winners. The market captures it all.",
        "This is why global stock markets tend to grow over long periods. Innovation compounds."
      ]
    },
    {
      id: 117,
      type: "content",
      title: "Global GDP & Why It Tends to Grow",
      paragraphs: [
        "Global GDP (Gross Domestic Product) = the total value of all goods/services produced.",
        "Why it grows:",
        "• Population growth (more people = more production)",
        "• Productivity improvements (technology, efficiency)",
        "• Innovation (new products, services, industries)",
        "",
        "Over long periods, global GDP grows ~3% per year. Stock markets, which represent companies, tend to grow faster (~7-10%) because companies are the most productive parts of the economy.",
        "This isn't guaranteed, but it's the historical pattern. The economy grows, companies grow, stocks grow."
      ]
    },
    {
      id: 118,
      type: "quiz",
      question: "Global GDP tends to grow because of:",
      options: [
        { id: "a", text: "Population growth and productivity improvements", correct: false },
        { id: "b", text: "Innovation and new industries", correct: false },
        { id: "c", text: "All of the above", correct: true },
        { id: "d", text: "Magic", correct: false }
      ],
      explanation: "Global GDP grows due to population growth, productivity improvements, and innovation. These factors combine to create long-term economic expansion."
    },
    {
      id: 119,
      type: "content",
      title: "Why Stocks Return 7–10% Real Long-Term",
      paragraphs: [
        "Historical data shows stocks return 7-10% annually over long periods (30+ years).",
        "Why?",
        "• Companies grow earnings ~5-7% per year (productivity + inflation)",
        "• Dividends add ~2-3% per year",
        "• Combined = 7-10% total return",
        "",
        "This isn't guaranteed every year. Some years you lose 30%. Some years you gain 30%. But over decades, the average is 7-10%.",
        "This is why long-term investing works. Time smooths out volatility and captures the underlying growth."
      ]
    },
    {
      id: 120,
      type: "content",
      title: "Why Capitalism (Mechanically, Not Morally) Compounds",
      paragraphs: [
        "Capitalism, as a system, compounds wealth:",
        "• Profits get reinvested → more production → more profits",
        "• Competition drives efficiency → better products → more value",
        "• Innovation creates new value → new industries → more growth",
        "",
        "This is mechanical, not moral. It's how the system works.",
        "When you invest, you're participating in this compounding system. You're not gambling. You're owning the engine of economic growth.",
        "This is why long-term stock investing has worked historically. You're betting on the system, not individual outcomes."
      ]
    },
    {
      id: 121,
      type: "quiz",
      question: "Capitalism compounds wealth because:",
      options: [
        { id: "a", text: "Profits get reinvested, creating more production and profits", correct: false },
        { id: "b", text: "Competition drives efficiency and innovation", correct: false },
        { id: "c", text: "The system mechanically compounds value over time", correct: false },
        { id: "d", text: "All of the above", correct: true }
      ],
      explanation: "Capitalism compounds wealth through reinvested profits, competition-driven efficiency, and innovation. This is the mechanical operation of the system."
    },
    {
      id: 122,
      type: "content",
      title: "Final Quiz: The System",
      paragraphs: [
        "You now understand the engine: productive assets, innovation cycles, GDP growth, and why stocks return 7-10% long-term.",
        "Goal achieved: Understand the engine instead of guessing.",
        "🎉 Congratulations! You've completed all 9 lessons of the Investing curriculum. You now have the knowledge to build wealth intelligently, avoid common mistakes, and understand the system you're investing in."
      ]
    },
    {
      id: 123,
      type: "quiz",
      question: "The main reason stocks return 7-10% long-term is:",
      options: [
        { id: "a", text: "Companies are productive and generate earnings growth", correct: false },
        { id: "b", text: "Dividends add to returns", correct: false },
        { id: "c", text: "The system of capitalism compounds value", correct: false },
        { id: "d", text: "All of the above", correct: true }
      ],
      explanation: "Stocks return 7-10% long-term because companies are productive (earnings growth), pay dividends, and the capitalist system mechanically compounds value over time."
    },
    {
      id: 124,
      type: "content",
      title: "🎉 Complete — You've Mastered Investing Fundamentals",
      paragraphs: [
        "Congratulations! You've completed all 9 lessons:",
        "✔ Lesson 1: Investing 101",
        "✔ Lesson 2: Building a Portfolio",
        "✔ Lesson 3: Dividends & Cashflow",
        "✔ Lesson 4: Behavioural Finance",
        "✔ Lesson 5: Crypto",
        "✔ Lesson 6: Interest, Inflation & Compounding",
        "✔ Lesson 7: Taxes, Wrappers & Optimization",
        "✔ Lesson 8: When to Buy & When to Sell",
        "✔ Lesson 9: The System",
        "",
        "You now have the knowledge to:",
        "• Build a portfolio that matches your goals",
        "• Understand risk and return",
        "• Avoid behavioural mistakes",
        "• Optimize taxes",
        "• Make informed investment decisions",
        "",
        "Ready for bonus tracks? Coming soon: Money Personalities, FIRE, Housing vs Renting, Debt, Macroeconomics, and more!"
      ]
    }
  ],

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
  ]
};

// Categories structure
const categories = [
  {
    id: "foundations",
    name: "Foundations",
    icon: "🏛️",
    subtitle: "Core concepts and fundamentals",
    subjects: ["economics", "finance"]
  },
  {
    id: "history",
    name: "History",
    icon: "📜",
    subtitle: "Explore the past",
    subjects: ["space"]
  }
];

// Subject metadata
const subjectMetadata = {
  economics: {
    name: "Economics",
    icon: "💼",
    subtitle: "Markets and planned economies",
    category: "foundations"
  },
  finance: {
    name: "Investing",
    icon: "💰",
    subtitle: "The real-world skill school forgot to mention",
    category: "foundations"
  },
  space: {
    name: "Space Race",
    icon: "🚀",
    subtitle: "The Cold War in space",
    category: "history"
  }
};

let activeSubject = "economics";
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
  console.log("renderLesson called - activeSubject:", activeSubject, "currentIndex:", currentIndex, "lessons:", lessons);
  
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
  
  console.log("Content element found:", contentEl);

  // Update progress immediately
  progressLabel.textContent = `${currentIndex + 1} / ${lessons.length}`;
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

  // Render content vs quiz
  if (lesson.type === "content") {
    // Clear quiz block for content lessons
    if (quizBlock) {
      quizBlock.innerHTML = "";
      quizBlock.style.display = "none";
      quizBlock.style.opacity = "0";
    }
    
    // Clear and populate content immediately - NO DELAY
    contentEl.innerHTML = "";
    contentEl.style.display = "block";
    contentEl.style.visibility = "visible";
    contentEl.style.opacity = "1";
    contentEl.style.minHeight = "auto";

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
      lesson.paragraphs.forEach((text, idx) => {
        const p = document.createElement("p");
        p.className = "slide-in-up";
        p.style.animationDelay = `${idx * 0.1}s`;
        p.style.color = "var(--text)";
        p.style.marginBottom = "18px";
        p.textContent = text;
        contentEl.appendChild(p);
        console.log("Added paragraph", idx, ":", text.substring(0, 50) + "...");
      });
    } else {
      // Fallback if no paragraphs
      const fallback = document.createElement("p");
      fallback.className = "slide-in-up";
      fallback.textContent = "Lesson content loading...";
      contentEl.appendChild(fallback);
      console.warn("No paragraphs found for lesson:", lesson);
    }
    
    // Force visibility
    const lessonBody = contentEl.parentElement;
    if (lessonBody) {
      lessonBody.style.display = "block";
      lessonBody.style.visibility = "visible";
      lessonBody.style.opacity = "1";
    }
    
    // Ensure content is visible immediately
    setTimeout(() => {
      contentEl.style.opacity = "1";
      contentEl.style.display = "block";
    }, 0);
    
    console.log("Content element innerHTML length:", contentEl.innerHTML.length);
    console.log("Content element children:", contentEl.children.length);
    } else if (lesson.type === "quiz") {
      // Fade out for quiz transition
      contentEl.style.opacity = '0';
      if (quizBlock) quizBlock.style.opacity = '0';
      
      setTimeout(() => {
        // Show both content area (for intro) and quiz block
        contentEl.innerHTML = "";
        contentEl.style.display = "block";
        
        const intro = document.createElement("p");
        intro.className = "slide-in-up";
        intro.textContent = "Quick check-in before we move on:";
        contentEl.appendChild(intro);

        // Render quiz
        if (quizBlock) {
          quizBlock.innerHTML = "";
          quizBlock.style.display = "block";

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
              btn.disabled = false; // Reset disabled state

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

        // Fade in quiz
        contentEl.style.opacity = '1';
        if (quizBlock) quizBlock.style.opacity = '1';
        
        // Debug log
        console.log("Rendered quiz lesson:", lesson.type, "Content length:", contentEl.innerHTML.length);
      }, 200);
    }
    
    // Debug log for content lessons
    if (lesson.type === "content") {
      console.log("Rendered content lesson:", lesson.type, "Content length:", contentEl.innerHTML.length, "Has title:", !!lesson.title, "Has paragraphs:", !!lesson.paragraphs);
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

  const celebrationOverlay = document.getElementById("celebrationOverlay");
  const celebrationIcon = document.getElementById("celebrationIcon");
  const celebrationText = document.getElementById("celebrationText");
  const celebrationXpText = document.getElementById("celebrationXpText");

  if (option.correct) {
    // Success animation
    button.classList.add("correct");
    const indicator = button.querySelector(".option-indicator");
    if (indicator) {
      indicator.textContent = "✓";
      indicator.classList.add('indicator-pop');
    }

    // Trigger confetti at button position
    const rect = button.getBoundingClientRect();
    triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);

    pendingXp = 8;
    hintText.textContent = lesson.explanation;
    hintText.classList.add('hint-success');
    setTimeout(() => hintText.classList.remove('hint-success'), 400);

    // Show Blu Bot celebration overlay
    if (celebrationOverlay) {
      celebrationIcon.textContent = "🎉";
      
      // Clear previous content and add Blu Bot celebrating image
      celebrationText.innerHTML = '';
      const bluBotSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      bluBotSvg.setAttribute("viewBox", "0 0 120 160");
      bluBotSvg.setAttribute("width", "150");
      bluBotSvg.setAttribute("height", "200");
      bluBotSvg.style.display = "block";
      bluBotSvg.style.margin = "0 auto";
      bluBotSvg.style.maxWidth = "100%";
      bluBotSvg.style.height = "auto";
      
      const useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
      useElement.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#blubot-celebrate");
      bluBotSvg.appendChild(useElement);
      celebrationText.appendChild(bluBotSvg);
      
      celebrationXpText.textContent = `+${pendingXp} XP`;
      celebrationOverlay.style.display = "flex";
      celebrationOverlay.classList.add("active");
      setTimeout(() => {
        celebrationOverlay.classList.remove("active");
        setTimeout(() => {
          celebrationOverlay.style.display = "none";
        }, 300);
      }, 1200);
    }
  } else {
    // Shake animation for incorrect
    button.classList.add("incorrect");
    button.classList.add('shake-horizontal');
    const indicator = button.querySelector(".option-indicator");
    if (indicator) {
      indicator.textContent = "✗";
      indicator.classList.add('indicator-pop');
    }

    // Show correct answer with glow
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

    // Show Blu Bot feedback overlay
    if (celebrationOverlay) {
      celebrationIcon.textContent = "🤖";
      celebrationText.textContent = "Blu Bot says: Try again!";
      celebrationXpText.textContent = `+${pendingXp} XP`;
      celebrationOverlay.classList.add("active");
      setTimeout(() => celebrationOverlay.classList.remove("active"), 1200);
    }
  }

  xp += pendingXp;
  xpValue.textContent = xp.toString();
  pendingXpEl.textContent = pendingXp.toString();
  
  // Animate XP gain
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
    // Show completion celebration
    const hintText = $("#hintText");
    hintText.textContent = "🎉 Unit complete! Great work!";
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
  
  // Animate active panel
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

  // Add transition animations
  [lessonTitle, lessonSubtitle].forEach(el => {
    el.classList.add('text-fade-in');
    setTimeout(() => el.classList.remove('text-fade-in'), 400);
  });

  if (subject === "economics") {
    subjectChip.textContent = "Economics · Markets";
    unitChip.textContent = "Unit: Planned Economies";
    lessonTitle.textContent = "Planned Economies";
    lessonSubtitle.textContent = "When the state takes the steering wheel of the market.";
    era = "Foundations";
    journalText.textContent =
      "Economics City · Markets. Stamps for planned vs market systems, tiny city diagrams, and your one-line notes on who sets prices.";
    missionsText.textContent =
      "Soon: run a tiny model of a planned economy vs a market economy and watch queues, surpluses, and growth change your city.";
  } else if (subject === "finance") {
    subjectChip.textContent = "Investing · Finance";
    unitChip.textContent = "Unit: The Real-World Skill School Forgot";
    lessonTitle.textContent = "Investing — The Real-World Skill School Forgot to Mention";
    lessonSubtitle.textContent = "How money actually becomes more money.";
    era = "Foundations";
    journalText.textContent = "Investing District · Finance. Stamps for compound growth, asset types, risk management, and your notes on building wealth.";
    missionsText.textContent = "Soon: build a portfolio simulation and watch your investments grow over time.";
  } else if (subject === "space") {
    subjectChip.textContent = "Cosmic History · Space Race";
    unitChip.textContent = "Unit: The Space Race";
    lessonTitle.textContent = "The Space Race";
    lessonSubtitle.textContent = "When rockets, politics, and prestige left the atmosphere.";
    era = "Modern";
    journalText.textContent =
      "Cosmic History · Space Race. Stamps for Sputnik, Gagarin, Apollo 11, and your notes on why space mattered in the Cold War.";
    missionsText.textContent =
      "Soon: choose which missions to fund as a Cold War leader and see how your space strategy shifts global prestige.";
  } else {
    subjectChip.textContent = "Prototype · Subject";
    unitChip.textContent = "Unit: Coming soon";
    lessonTitle.textContent = "Prototype subject";
    lessonSubtitle.textContent =
      "Economics and Cosmic History are alive. This district will wake up next.";
    era = "Foundations";
    journalText.textContent =
      "Prototype subject. This journal page will hold diagrams and notes once this district is wired.";
    missionsText.textContent =
      "Prototype subject. Soon: a small simulation mission for this area.";
  }

  eraLabel.textContent = era;
  eraPillLabel.textContent = `${era} Era`;
  
  // Pulse the era pill
  const eraPill = $("#eraLabel").parentElement;
  if (eraPill) {
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
  
  // Hide subject grid, show category grid
  subjectGrid.classList.add("is-hidden");
  categoryGrid.classList.remove("is-hidden");
  
  // Update breadcrumb
  breadcrumb.querySelector(".breadcrumb-item").classList.add("is-active");
  breadcrumbSeparator.style.display = "none";
  breadcrumbCurrent.textContent = "";
  
  // Clear active state from all category nodes
  document.querySelectorAll("#categoryGrid .world-node").forEach(n => {
    n.classList.remove("is-active");
  });
  
  // Clear and populate categories
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
  
  // Keep category grid visible, show subject grid below
  // categoryGrid stays visible - don't hide it
  subjectGrid.classList.remove("is-hidden");
  
  // Update breadcrumb
  breadcrumb.querySelector(".breadcrumb-item").classList.remove("is-active");
  breadcrumbSeparator.style.display = "inline";
  breadcrumbCurrent.textContent = category.name;
  
  // Mark active category visually
  document.querySelectorAll("#categoryGrid .world-node").forEach(n => {
    n.classList.remove("is-active");
  });
  node.classList.add("is-active");
  
  // Clear and populate subjects for this category
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
  
  // Node click animation
  node.classList.add('node-activate');
  setTimeout(() => node.classList.remove('node-activate'), 400);
}

function handleSubjectClick(node) {
  const subject = node.dataset.subject;

  document
    .querySelectorAll(".world-node")
    .forEach((n) => n.classList.remove("is-active"));
  node.classList.add("is-active");
  
  // Node click animation
  node.classList.add('node-activate');
  setTimeout(() => node.classList.remove('node-activate'), 400);

  if (["economics", "space", "finance"].includes(subject) || subjectLessons[subject]) {
    activeSubject = subject;
    currentIndex = 0; // Always reset to first lesson
    updateMetaForSubject(subject);
    // Render immediately - no delay
    renderLesson();
  } else {
    activeSubject = "economics";
    updateMetaForSubject(subject);
    $("#lessonContent").innerHTML =
      "<p class='slide-in-up'>Prototype mode: this subject will get its own lesson flow. For now, Economics City and Cosmic History are the ones that are alive.</p>";
    $("#quizBlock").innerHTML = "";
    const lessons = getCurrentLessons();
    const progressLabel = $("#lessonProgressLabel");
    const progressFill = $("#lessonProgressFill");
    progressLabel.textContent = `0 / ${lessons.length}`;
    progressFill.style.width = "0%";
  }
}

// Make showCategories available globally
window.showCategories = showCategories;
window.goNextDirect = goNext;
window.goBackDirect = goBack;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize quiz block as hidden
  const quizBlock = $("#quizBlock");
  if (quizBlock) {
    quizBlock.style.display = "none";
  }
  
  // Initialize celebration overlay as hidden
  const celebrationOverlay = document.getElementById("celebrationOverlay");
  if (celebrationOverlay) {
    celebrationOverlay.style.display = "none";
  }
  
  updateMetaForSubject("economics");
  
  // Show categories by default
  showCategories();
  
  // Render initial lesson immediately
  renderLesson();

  $("#nextBtn").addEventListener("click", goNext);
  
  const backBtn = $("#backBtn");
  if (backBtn) {
    backBtn.addEventListener("click", goBack);
    // Initialize back button visibility
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