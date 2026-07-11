// The home page of the application, displaying a list of available scenarios
import { useMemo, useState } from "react"
import type { Scenario } from "../types/Scenario"
import { ScenarioList } from "../components/ScenarioList"
import { ScenarioFilters } from "../components/ScenarioFilters"
import { Footer } from "../components/Footer"

interface HomePageProps {
  scenarios: Scenario[]
  onSelectScenario: (scenario: Scenario) => void
}

export const HomePage = ({
  scenarios,
  onSelectScenario,
}: HomePageProps) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = useMemo(() => {
    const scenarioCategories = scenarios.map(
      (scenario) => scenario.category
    )

    return ["All", ...Array.from(new Set(scenarioCategories))]
  }, [scenarios])

  const filteredScenarios = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase()

    return scenarios.filter((scenario) => {
      const matchesCategory =
        selectedCategory === "All" ||
        scenario.category === selectedCategory

      const matchesSearch =
        normalizedSearchTerm === "" ||
        scenario.title.toLowerCase().includes(normalizedSearchTerm) ||
        scenario.description.toLowerCase().includes(normalizedSearchTerm)

      return matchesCategory && matchesSearch
    })
  }, [scenarios, searchTerm, selectedCategory])

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <main id="main-content" className="flex-1 px-6 py-12">
        <section
          aria-labelledby="home-page-title"
          className="mx-auto max-w-6xl"
        >
          <header className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sky-300">
              Social Situation Coach
            </p>

            <h1
              id="home-page-title"
              className="text-4xl font-bold md:text-5xl"
            >
              Prepare for unfamiliar social situations with confidence.
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
              Review expectations, conversation starters, social norms,
              potential challenges, and respectful exit strategies.
            </p>
          </header>

          <ScenarioFilters
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            categories={categories}
            onSearchChange={setSearchTerm}
            onCategoryChange={setSelectedCategory}
          />

          <p role="status" aria-live="polite" className="mb-4 text-slate-300">
            {filteredScenarios.length === 1
              ? "1 scenario found."
              : `${filteredScenarios.length} scenarios found.`}
          </p>

          {filteredScenarios.length > 0 ? (
            <ScenarioList
              scenarios={filteredScenarios}
              onSelectScenario={onSelectScenario}
            />
          ) : (
            <section
              aria-labelledby="no-results-heading"
              className="rounded-xl border border-slate-700 bg-slate-900 p-8 text-center"
            >
              <h2
                id="no-results-heading"
                className="text-2xl font-bold text-white"
              >
                No scenarios found
              </h2>

              <p className="mt-3 text-slate-300">
                Try another search term or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="
                  mt-5 rounded-lg bg-sky-600 px-4 py-2
                  font-semibold text-white hover:bg-sky-500
                  focus-visible:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-sky-300
                "
              >
                Clear Filters
              </button>
            </section>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}