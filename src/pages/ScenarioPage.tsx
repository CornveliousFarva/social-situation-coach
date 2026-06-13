import type { Scenario } from "../types/Scenario"
import { ScenarioDetail } from "../components/ScenarioDetail"

interface ScenarioPageProps {
  scenario: Scenario
  onBack: () => void
}

export const ScenarioPage: React.FC<ScenarioPageProps> = ({
  scenario,
  onBack,
}) => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-4xl">
        <button
          onClick={onBack}
          className="mb-6 rounded-lg bg-slate-800 px-4 py-2 font-medium text-slate-200 hover:bg-slate-700"
        >
          ← Back to Scenarios
        </button>

        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-300">
            Social Situation Coach
          </p>

          <h1 className="text-4xl font-bold">{scenario.title}</h1>
        </div>

        <ScenarioDetail scenario={scenario} />
      </section>
    </main>
  )
}