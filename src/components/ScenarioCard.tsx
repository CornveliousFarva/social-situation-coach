import type { Scenario } from "../types/Scenario"

interface ScenarioCardProps {
  scenario: Scenario
  onSelect: (scenario: Scenario) => void
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({
  scenario,
  onSelect,
}) => {
  const titleId = `scenario-${scenario.id}-title`
  const descriptionId = `scenario-${scenario.id}-description`

  return (
    <article
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="rounded-xl border border-slate-600 bg-slate-900 p-6 shadow-lg"
    >
      <p className="mb-3 text-sm font-semibold text-sky-300">
        {scenario.category}
      </p>

      <h2 id={titleId} className="text-2xl font-bold text-white">
        {scenario.title}
      </h2>

      <p id={descriptionId} className="mt-3 text-slate-200">
        {scenario.description}
      </p>

      <button
        type="button"
        onClick={() => onSelect(scenario)}
        aria-label={`View scenario: ${scenario.title}`}
        className="
          mt-6 rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white
          hover:bg-sky-500
          focus-visible:outline-none
          focus-visible:ring-4
          focus-visible:ring-sky-300
          focus-visible:ring-offset-2
          focus-visible:ring-offset-slate-900
        "
      >
        View Scenario
      </button>
    </article>
  )
}