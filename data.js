// ShinyOS – Investing Basics content

const TRACKS = [
  {
    id: "investing-basics",
    name: "Investing Basics",
    subtitle: "How markets, shares and sensible investing actually work.",
    icon: "📈",
    lessons: [
      "inv-stock-market-1",
      "inv-buy-sell-1",
      "inv-risk-reward-1",
      "inv-diversification-1",
      "inv-long-term-1",
      "inv-fees-tax-1"
    ]
  }
];

const LESSONS = [
  {
    id: "inv-stock-market-1",
    trackId: "investing-basics",
    title: "What is the stock market?",
    summary: "Owning tiny pieces of companies instead of just saving in cash.",
    estMinutes: 3,
    icon: "🏙️",
    steps: [
      {
        type: "text",
        heading: "Owning slices of a company",
        body: [
          "When a company wants to raise money to grow, it can sell 'shares'.",
          "Each share is a tiny slice of ownership in that company.",
          "If you buy a share, you’re not just 'betting' on a price – you literally become one of the owners."
        ]
      },
      {
        type: "quiz",
        question: "When you buy shares in a company, you are…",
        options: [
          "Lending the company money like a bank",
          "Owning a tiny piece of the company",
          "Buying a voucher for their products",
          "Just donating money for free"
        ],
        correctIndex: 1,
        explanation: "Shares represent ownership. If the company does well, owners share in the benefits."
      },
      {
        type: "text",
        heading: "Where does trading happen?",
        body: [
          "Shares of big companies usually trade on stock exchanges, like the London Stock Exchange in the UK or the NYSE in the US.",
          "The 'stock market' is just the network of all these exchanges and the buyers and sellers using them.",
          "Indexes like the FTSE 100 or S&P 500 track groups of big companies to show how a market is doing overall."
        ]
      },
      {
        type: "quiz",
        question: "The FTSE 100 is…",
        options: [
          "A savings account with 100% interest",
          "A list of 100 big companies on the London market",
          "A government bond",
          "A type of cryptocurrency"
        ],
        correctIndex: 1,
        explanation: "FTSE 100 = an index of 100 large companies listed in the UK – a snapshot of the UK stock market."
      }
    ],
    xp: 22
  },

  {
    id: "inv-buy-sell-1",
    trackId: "investing-basics",
    title: "How buying & selling shares works",
    summary: "What actually happens when you tap 'buy' or 'sell' in your app.",
    estMinutes: 4,
    icon: "💸",
    steps: [
      {
        type: "text",
        heading: "Your broker is your gateway",
        body: [
          "You can’t walk into the stock exchange yourself, so you use a 'broker' – like Trading 212, Interactive Brokers, Freetrade, etc.",
          "When you tap 'buy' in the app, your broker sends an order into the market.",
          "On the other side is someone tapping 'sell' – the market matches you."
        ]
      },
      {
        type: "quiz",
        question: "What is a broker in investing?",
        options: [
          "A person who guarantees profits",
          "An app or firm that connects your orders to the market",
          "A tax office employee",
          "A type of share"
        ],
        correctIndex: 1,
        explanation: "Brokers are the middle layer between you and the exchange; they route your buy/sell orders."
      },
      {
        type: "text",
        heading: "Market vs limit orders",
        body: [
          "A market order says: 'Buy or sell as soon as possible at the best price available now.'",
          "A limit order says: 'Buy only if the price is at or below X' (or 'Sell only if at or above Y').",
          "Market orders fill faster, limit orders give you more control over price."
        ]
      },
      {
        type: "quiz",
        question: "Which order type gives you a specific maximum price when buying?",
        options: [
          "Market order",
          "Limit order",
          "Random order",
          "Stop ignoring my portfolio order"
        ],
        correctIndex: 1,
        explanation: "Limit orders let you set the maximum you’ll pay (when buying) or minimum you’ll accept (when selling)."
      },
      {
        type: "text",
        heading: "Profit, loss & holding period",
        body: [
          "If you buy a share at £10 and later sell at £15, your profit is £5 per share (ignoring fees and tax).",
          "If you sell at £8 instead, you’ve made a £2 loss per share.",
          "Investing usually works best over years, not days – time in the market beats constant jumping in and out for most people."
        ]
      },
      {
        type: "quiz",
        question: "You buy at £10 and sell at £15. What happened?",
        options: [
          "£5 profit per share",
          "£5 loss per share",
          "No change",
          "Only the broker gains"
        ],
        correctIndex: 0,
        explanation: "Sell price (£15) minus buy price (£10) = £5 profit per share (before fees/tax)."
      }
    ],
    xp: 28
  },

  {
    id: "inv-risk-reward-1",
    trackId: "investing-basics",
    title: "Risk & reward",
    summary: "Why potential return and risk are always holding hands.",
    estMinutes: 4,
    icon: "🎲",
    steps: [
      {
        type: "text",
        heading: "No return without risk",
        body: [
          "Cash in a simple savings account is usually low risk – but the return is also low.",
          "Shares can go up a lot over time, but their prices can also fall sharply in the short term.",
          "Higher potential return almost always comes with higher risk – nothing is magic-free."
        ]
      },
      {
        type: "quiz",
        question: "Which of these is usually *highest* risk?",
        options: [
          "Money in a basic bank savings account",
          "Government bonds from a stable country",
          "Shares in one small speculative company",
          "A jar of coins under your bed"
        ],
        correctIndex: 2,
        explanation: "A single small speculative company can swing wildly or even go to zero."
      },
      {
        type: "text",
        heading: "Volatility vs permanent loss",
        body: [
          "Volatility is the price bouncing up and down in the short term.",
          "Permanent loss is when something never recovers (e.g. a company going bankrupt).",
          "Good investing is about accepting volatility while reducing the chance of permanent loss."
        ]
      },
      {
        type: "quiz",
        question: "A 20% drop in a broad stock index is usually…",
        options: [
          "Guaranteed permanent loss",
          "A normal kind of volatility that has happened many times",
          "Illegal",
          "A sign you must sell everything immediately"
        ],
        correctIndex: 1,
        explanation: "Broad markets can swing a lot; over long history, they’ve recovered many such drops."
      }
    ],
    xp: 24
  },

  {
    id: "inv-diversification-1",
    trackId: "investing-basics",
    title: "Diversification & index funds",
    summary: "Not putting your entire life on one company’s shoulders.",
    estMinutes: 4,
    icon: "🧺",
    steps: [
      {
        type: "text",
        heading: "Don’t bet everything on one thing",
        body: [
          "If you put all your money into one single share, your future is tied to that one company.",
          "If that company fails, your investment can be wiped out.",
          "Diversification spreads your money across many companies so one failure hurts less."
        ]
      },
      {
        type: "quiz",
        question: "Which portfolio is more diversified?",
        options: [
          "100% in a single small tech stock",
          "Split across 500 different companies via an index fund",
          "Everything in one meme coin",
          "All in your friend’s new start-up"
        ],
        correctIndex: 1,
        explanation: "Owning small pieces of hundreds of companies reduces single-company risk."
      },
      {
        type: "text",
        heading: "What is an index fund?",
        body: [
          "An index fund is a fund that simply copies an index, like the FTSE 100 or S&P 500.",
          "Instead of picking companies yourself, you buy one fund that holds a slice of all the companies in that index.",
          "These are often low-cost and a common core for long-term investing."
        ]
      },
      {
        type: "quiz",
        question: "Index funds are usually designed to…",
        options: [
          "Beat the market using secret trading strategies",
          "Exactly match a chosen market index as cheaply as possible",
          "Guarantee no losses ever",
          "Hold only cash and gold"
        ],
        correctIndex: 1,
        explanation: "Index funds aim to track an index closely, not outsmart it."
      }
    ],
    xp: 26
  },

  {
    id: "inv-long-term-1",
    trackId: "investing-basics",
    title: "Long-term vs trading & compounding",
    summary: "Why patient, boring investing quietly wins most races.",
    estMinutes: 4,
    icon: "⏳",
    steps: [
      {
        type: "text",
        heading: "Time in the market",
        body: [
          "Short-term prices are noisy and driven by news, emotion and random events.",
          "Long-term, stock markets reflect company earnings, innovation and economic growth.",
          "Most ordinary investors do better by staying invested for years instead of jumping in and out."
        ]
      },
      {
        type: "quiz",
        question: "For most people, which is usually safer?",
        options: [
          "Constantly day-trading on news and rumours",
          "A simple diversified portfolio held for many years",
          "Putting everything in one 'hot tip'",
          "Borrowing lots to invest with leverage"
        ],
        correctIndex: 1,
        explanation: "Broad, diversified, long-term investing has historically worked well for patient investors."
      },
      {
        type: "text",
        heading: "The power of compounding",
        body: [
          "Compounding is growth on top of growth – your returns start earning returns.",
          "Even modest average returns, given enough years, can snowball into large amounts.",
          "This is why starting earlier with realistic amounts often beats starting late with massive contributions."
        ]
      },
      {
        type: "quiz",
        question: "Compounding means…",
        options: [
          "You only earn interest on your original amount",
          "You earn returns on both your original amount and previous returns",
          "Your money doubles every year guaranteed",
          "You never face risk"
        ],
        correctIndex: 1,
        explanation: "When growth itself grows, that’s compounding – small percentages become powerful over time."
      }
    ],
    xp: 26
  },

  {
    id: "inv-fees-tax-1",
    trackId: "investing-basics",
    title: "Fees, tax & accounts",
    summary: "Why costs and account type quietly change your results.",
    estMinutes: 4,
    icon: "💼",
    steps: [
      {
        type: "text",
        heading: "Fees nibble at returns",
        body: [
          "Brokers and funds often charge fees: trading fees, platform fees, fund management fees.",
          "A fee that sounds tiny each year can compound into a big difference over decades.",
          "Low-cost platforms and funds help more of the growth stay with you."
        ]
      },
      {
        type: "quiz",
        question: "Over 20+ years, which is usually better?",
        options: [
          "A high-fee fund that promises to beat the market",
          "A low-cost index fund that quietly tracks the market",
          "Trading constantly to avoid any single fund",
          "Paying the highest fees to feel fancy"
        ],
        correctIndex: 1,
        explanation: "Lower fees mean more of the market’s return stays in your pocket over time."
      },
      {
        type: "text",
        heading: "Tax wrappers & accounts",
        body: [
          "Different countries have different account types: tax-sheltered accounts, pensions, general investment accounts, etc.",
          "Using the right 'wrapper' can reduce how much tax you pay on interest, dividends or capital gains.",
          "The rules are specific to each country, so it’s worth learning how your local system works."
        ]
      },
      {
        type: "quiz",
        question: "Why do investors care about special account types (tax 'wrappers')?",
        options: [
          "They change which companies you can buy",
          "They can reduce or delay the tax you pay on your investments",
          "They guarantee higher returns",
          "They remove all risk from investing"
        ],
        correctIndex: 1,
        explanation: "Good account choice doesn’t change the market, but it changes how much you keep after tax."
      }
    ],
    xp: 28
  }
];

