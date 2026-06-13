// A detailed view of a scenario with its title, description, and related sections
import type { Scenario } from "../types/Scenario"
import { ScenarioSection } from "./ScenarioSection"

interface ScenarioDetailProps {
  scenario: Scenario
}

export const ScenarioDetail: React.FC<ScenarioDetailProps> = ({
  scenario,
}) => {

  return (
    <div className="space-y-6 rounded-lg bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold">
        {scenario.title}
      </h1>

      <p className="text-slate-300">
        {scenario.description}
      </p>

      <ScenarioSection
        title="Expected Outcomes"
        items={scenario.expectedOutcomes}
      />

      <ScenarioSection
        title="Conversation Starters"
        items={scenario.conversationStarters}
      />

      <ScenarioSection
        title="Social Norms"
        items={scenario.socialNorms}
      />

      <ScenarioSection
        title="Anticipated Challenges"
        items={scenario.anticipatedChallenges}
      />

      <ScenarioSection
        title="Common Misunderstandings"
        items={scenario.misunderstandings}
      />

      <ScenarioSection
        title="Exit Strategies"
        items={scenario.exitStrategies}
      />

      <ScenarioSection
        title="Resources"
        items={scenario.resources}
      />

    </div>
  )
}