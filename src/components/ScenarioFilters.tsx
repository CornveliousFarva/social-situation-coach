interface ScenarioFiltersProps {
  searchTerm: string
  selectedCategory: string
  categories: string[]
  onSearchChange: (value: string) => void
  onCategoryChange: (category: string) => void
}

export const ScenarioFilters = ({
  searchTerm,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
}: ScenarioFiltersProps) => {
  return (
    <section
      aria-labelledby="scenario-filters-heading"
      className="mb-8 rounded-xl border border-slate-700 bg-slate-900 p-5"
    >
      <h2 id="scenario-filters-heading" className="text-xl font-bold text-white">
        Find a Scenario
      </h2>

      <div className="mt-5 space-y-5">
        <div>
          <label
            htmlFor="scenario-search"
            className="block font-semibold text-white"
          >
            Search scenarios
          </label>

          <input
            id="scenario-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by title or description"
            className="
              mt-2 w-full rounded-lg border border-slate-500
              bg-slate-800 px-4 py-3 text-white
              placeholder:text-slate-400
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-sky-300
            "
          />
        </div>

        <fieldset>
          <legend className="font-semibold text-white">
            Filter by category
          </legend>

          <div className="mt-3 flex flex-wrap gap-3">
            {categories.map((category) => {
              const isSelected = selectedCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  aria-pressed={isSelected}
                  className={`
                    rounded-lg border px-4 py-2 font-semibold
                    focus-visible:outline-none
                    focus-visible:ring-4
                    focus-visible:ring-sky-300
                    ${
                      isSelected
                        ? "border-sky-300 bg-sky-700 text-white"
                        : "border-slate-500 bg-slate-800 text-slate-200 hover:bg-slate-700"
                    }
                  `}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </fieldset>
      </div>
    </section>
  )
}