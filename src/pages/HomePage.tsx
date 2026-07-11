// The home page of the application, displaying a list of available scenarios
import type { Scenario } from "../types/Scenario"
import { ScenarioList } from "../components/ScenarioList"
import { Footer } from "../components/Footer"

interface HomePageProps {
  scenarios: Scenario[]
  onSelectScenario: (scenario: Scenario) => void
}

export const HomePage: React.FC<HomePageProps> = ({
  scenarios,
  onSelectScenario,
}) => {
  return (
    <><main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sky-300">
            Social Situation Coach
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Prepare for unfamiliar social situations with confidence.
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            Choose a scenario to review expectations, conversation starters,
            social norms, common challenges, and respectful exit strategies.
          </p>
        </div>

        <ScenarioList
          scenarios={scenarios}
          onSelectScenario={onSelectScenario} />
      </section>
    </main><Footer /></>
  )
}