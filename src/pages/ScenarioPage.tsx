// The page for displaying the details of a selected scenario

import type { Scenario } from "../types/Scenario"
import { ScenarioDetail } from "../components/ScenarioDetail"

interface ScenarioPageProps {
  scenario: Scenario
}

export const ScenarioPage: React.FC<ScenarioPageProps> = ({
  scenario,
}) => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-300">
            Social Situation Coach
          </p>

          <h1 className="text-4xl font-bold">
            {scenario.title}
          </h1>
        </div>

        <ScenarioDetail scenario={scenario} />
      </section>
    </main>
  )
}