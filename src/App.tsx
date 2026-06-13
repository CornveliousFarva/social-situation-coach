type Scenario = {
  title: string
  description: string
  sections: {
    heading: string
    items: string[]
  }[]
}

const scenarios: Scenario[] = [
  {
    title: "Religious or Spiritual Gathering",
    description:
      "Prepare for attending a religious or spiritual gathering for the first time.",
    sections: [
      {
        heading: "What to Expect",
        items: [
          "People may sit, stand, sing, pray, or listen at different times.",
          "It is usually okay to quietly observe if you are unsure what to do.",
          "Some communities may have customs around dress, food, or greetings.",
        ],
      },
      {
        heading: "Conversation Starters",
        items: [
          "Is this your regular community?",
          "What should a first-time visitor know?",
          "How long have you been coming here?",
        ],
      },
      {
        heading: "Exit Strategies",
        items: [
          "It was nice meeting you. I’m going to head out.",
          "Thank you for welcoming me. I appreciated being here.",
        ],
      },
    ],
  },
  {
    title: "Sporting Event",
    description:
      "Navigate attending a game, interacting with fans, and handling crowd energy.",
    sections: [
      {
        heading: "What to Expect",
        items: [
          "Crowds may be loud, emotional, and highly energetic.",
          "Friendly banter is common, but you do not have to participate.",
          "People may bond quickly over shared team loyalty.",
        ],
      },
      {
        heading: "Conversation Starters",
        items: [
          "How long have you been following this team?",
          "What do you think of the matchup today?",
          "Who’s your favorite player?",
        ],
      },
      {
        heading: "Exit Strategies",
        items: [
          "I’m going to grab food. Enjoy the game.",
          "Good talking with you. I’m going to watch the next bit.",
        ],
      },
    ],
  },
  {
    title: "Professional Networking Event",
    description:
      "Prepare for introductions, small talk, and ending conversations politely.",
    sections: [
      {
        heading: "What to Expect",
        items: [
          "People may ask what you do or what brought you there.",
          "Short conversations are normal.",
          "It is okay to move between groups.",
        ],
      },
      {
        heading: "Conversation Starters",
        items: [
          "What brought you to this event?",
          "What kind of work do you do?",
          "Are you working on anything interesting right now?",
        ],
      },
      {
        heading: "Exit Strategies",
        items: [
          "It was great meeting you. I’m going to say hello to a few other people.",
          "Thanks for chatting. I hope the rest of the event goes well.",
        ],
      },
    ],
  },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">Social Situation Coach</h1>
          <p className="mt-4 text-lg text-slate-300">
            Prepare for unfamiliar social environments with clear expectations,
            conversation starters, and exit strategies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {scenarios.map((scenario) => (
            <article
              key={scenario.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold">{scenario.title}</h2>
              <p className="mt-3 text-slate-300">{scenario.description}</p>

              <div className="mt-6 space-y-5">
                {scenario.sections.map((section) => (
                  <section key={section.heading}>
                    <h3 className="font-semibold text-sky-300">
                      {section.heading}
                    </h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App