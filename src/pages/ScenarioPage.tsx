import { useEffect, useRef } from "react"
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
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    headingRef.current?.focus()
  }, [scenario.id])

  return (
    <main
      id="main-content"
      className="min-h-screen bg-slate-950 px-6 py-12 text-white"
    >
      <section
        aria-labelledby="scenario-page-title"
        className="mx-auto max-w-4xl"
      >
        <button
          type="button"
          onClick={onBack}
          aria-label="Return to the scenario list"
          className="
            mb-8 rounded-lg bg-slate-800 px-4 py-2 font-medium text-slate-100
            hover:bg-slate-700
            focus-visible:outline-none
            focus-visible:ring-4
            focus-visible:ring-sky-300
            focus-visible:ring-offset-2
            focus-visible:ring-offset-slate-950
          "
        >
          <span aria-hidden="true">← </span>
          Back to Scenarios
        </button>

        <header className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-sky-300">
            Social Situation Coach
          </p>

          <h1
            ref={headingRef}
            id="scenario-page-title"
            tabIndex={-1}
            className="
              text-4xl font-bold
              focus:outline-none
              focus-visible:ring-4
              focus-visible:ring-sky-300
            "
          >
            {scenario.title}
          </h1>
        </header>

        <ScenarioDetail scenario={scenario} />
      </section>
    </main>
  )
}