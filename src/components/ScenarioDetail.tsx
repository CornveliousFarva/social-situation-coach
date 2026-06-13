// A detailed view of a scenario with its title, description, and related sections
import type { Scenario } from "../types/Scenario"
import { ScenarioSection } from "./ScenarioSection"

interface ScenarioDetailProps {
  scenario: Scenario
}

export const ScenarioDetail: React.FC<ScenarioDetailProps> = ({ scenario }) => {
  return (
    <div className="scenario-detail">
      <h1>{scenario.title}</h1>
      <p>{scenario.description}</p>

      <ScenarioSection title="Expected Outcomes" items={scenario.expectedOutcomes} />
      <ScenarioSection title="Conversation Starters" items={scenario.conversationStarters} />
      <ScenarioSection title="Common Challenges" items={scenario.anticipatedChallenges} />
    </div>
  )
}