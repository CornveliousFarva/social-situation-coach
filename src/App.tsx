import { useState } from "react"
import type { Scenario } from "./types/Scenario"
import { scenarios } from "./data/scenarios"
import { HomePage } from "./pages/HomePage"
import { ScenarioPage } from "./pages/ScenarioPage"

function App() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(
    null
  )

  return selectedScenario ? (
    <ScenarioPage
      scenario={selectedScenario}
      onBack={() => setSelectedScenario(null)}
    />
  ) : (
    <HomePage
      scenarios={scenarios}
      onSelectScenario={setSelectedScenario}
    />
  )
}

export default App