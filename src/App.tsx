import { useEffect, useState } from "react"
import type { Scenario } from "./types/Scenario"
import type { EventReflection } from "./types/EventReflection"
import { scenarios } from "./data/scenarios"
import { HomePage } from "./pages/HomePage"
import { ScenarioPage } from "./pages/ScenarioPage"

const STORAGE_KEY = "social-situation-coach-reflections"

const loadReflections = (): EventReflection[] => {
  try {
    const savedReflections = localStorage.getItem(STORAGE_KEY)

    if (!savedReflections) {
      return []
    }

    return JSON.parse(savedReflections) as EventReflection[]
  } catch {
    return []
  }
}

function App() {
  const [selectedScenario, setSelectedScenario] =
    useState<Scenario | null>(null)

  const [reflections, setReflections] =
    useState<EventReflection[]>(loadReflections)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reflections))
  }, [reflections])

  const handleSaveReflection = (reflection: EventReflection) => {
    setReflections((currentReflections) => [
      reflection,
      ...currentReflections,
    ])
  }

  const handleDeleteReflection = (reflectionId: string) => {
    setReflections((currentReflections) =>
      currentReflections.filter(
        (reflection) => reflection.id !== reflectionId
      )
    )
  }

  if (selectedScenario) {
    const scenarioReflections = reflections.filter(
      (reflection) => reflection.scenarioId === selectedScenario.id
    )

    return (
      <ScenarioPage
        scenario={selectedScenario}
        reflections={scenarioReflections}
        onSaveReflection={handleSaveReflection}
        onDeleteReflection={handleDeleteReflection}
        onBack={() => setSelectedScenario(null)}
      />
    )
  }

  return (
    <HomePage
      scenarios={scenarios}
      onSelectScenario={setSelectedScenario}
    />
  )
}

export default App