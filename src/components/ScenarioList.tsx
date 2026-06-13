// A list of scenarios with their titles and descriptions

import type { Scenario } from "../types/Scenario"
import { ScenarioCard } from "./ScenarioCard"

interface ScenarioListProps {
  scenarios: Scenario[]
  onSelectScenario: (scenario: Scenario) => void
}

export const ScenarioList: React.FC<ScenarioListProps> = ({
  scenarios, onSelectScenario
}) => {
  return (
    <div className="space-y-4">
      {scenarios.map((scenario) => (
        <ScenarioCard
          key={scenario.id}
          scenario={scenario}
          onSelect={onSelectScenario}
        />
      ))}
    </div>
  )
}