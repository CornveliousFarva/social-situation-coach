// A card displaying a scenario with its title and description
import type { Scenario } from "../types/Scenario"

interface ScenarioCardProps {
  scenario: Scenario
  onSelect: (scenario: Scenario) => void
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario }) => {
  return (
    <div className="scenario-card">
      <h2>{scenario.title}</h2>
      <p>{scenario.description}</p>

      <h2 className="mb-2 text-2xl font-bold text-gray-800">
        {scenario.title} Details
      </h2>
      <p className="mb-4 text-slate-300">
        {scenario.description}
      </p>
      <div className="space-y-2 text-sm text-slate-400">
        <p>
          <strong>{scenario.expectedOutcomes.length}</strong> Expected Outcomes
        </p>
        <p>
          <strong>{scenario.conversationStarters.length}</strong> Conversation Starters
        </p>
        <p>
          <strong>{scenario.anticipatedChallenges.length}</strong> Common Challenges
        </p>
      </div>

      <button className="mt-6 w-full rounded bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-500">
        View Scenario
      </button>
    </div>
  )
}