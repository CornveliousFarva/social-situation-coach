import type { EventReflection } from "../types/EventReflection"

interface ProgressDashboardProps {
  reflections: EventReflection[]
}

const getAverage = (
  reflections: EventReflection[],
  field: keyof Pick<
    EventReflection,
    | "preparation"
    | "comfort"
    | "conversation"
    | "boundaries"
    | "sensoryManagement"
    | "overallExperience"
  >
) => {
  if (reflections.length === 0) {
    return "0.0"
  }

  const total = reflections.reduce(
    (sum, reflection) => sum + reflection[field],
    0
  )

  return (total / reflections.length).toFixed(1)
}

const getMostPracticedScenario = (reflections: EventReflection[]) => {
  if (reflections.length === 0) {
    return "No activity yet"
  }

  const scenarioCounts = reflections.reduce<Record<string, number>>(
    (counts, reflection) => {
      counts[reflection.scenarioTitle] =
        (counts[reflection.scenarioTitle] ?? 0) + 1

      return counts
    },
    {}
  )

  return Object.entries(scenarioCounts).reduce(
    (mostPracticed, current) =>
      current[1] > mostPracticed[1] ? current : mostPracticed
  )[0]
}

export const ProgressDashboard = ({
  reflections,
}: ProgressDashboardProps) => {
  const recentReflections = [...reflections]
    .sort(
      (first, second) =>
        new Date(second.eventDate).getTime() -
        new Date(first.eventDate).getTime()
    )
    .slice(0, 3)

  const statistics = [
    {
      label: "Events Reflected On",
      value: reflections.length.toString(),
    },
    {
      label: "Average Preparation",
      value: `${getAverage(reflections, "preparation")}/5`,
    },
    {
      label: "Average Comfort",
      value: `${getAverage(reflections, "comfort")}/5`,
    },
    {
      label: "Average Experience",
      value: `${getAverage(reflections, "overallExperience")}/5`,
    },
  ]

  return (
    <section
      aria-labelledby="progress-dashboard-heading"
      className="mb-10 rounded-xl border border-slate-700 bg-slate-900 p-6"
    >
      <header>
        <h2
          id="progress-dashboard-heading"
          className="text-2xl font-bold text-white"
        >
          Your Progress
        </h2>

        <p className="mt-2 text-slate-300">
          A summary of your saved event reflections and personal progress.
        </p>
      </header>

      {reflections.length === 0 ? (
        <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800 p-5">
          <h3 className="text-lg font-semibold text-white">
            No reflections saved yet
          </h3>

          <p className="mt-2 text-slate-300">
            Complete an event reflection after attending a social situation,
            and your progress will appear here.
          </p>
        </div>
      ) : (
        <>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((statistic) => (
              <div
                key={statistic.label}
                className="rounded-lg border border-slate-700 bg-slate-800 p-5"
              >
                <dt className="text-sm font-semibold text-slate-300">
                  {statistic.label}
                </dt>

                <dd className="mt-2 text-3xl font-bold text-sky-300">
                  {statistic.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 rounded-lg border border-slate-700 bg-slate-800 p-5">
            <h3 className="font-semibold text-white">
              Most Practiced Scenario
            </h3>

            <p className="mt-2 text-lg text-sky-300">
              {getMostPracticedScenario(reflections)}
            </p>
          </div>

          <section
            aria-labelledby="recent-reflections-heading"
            className="mt-6"
          >
            <h3
              id="recent-reflections-heading"
              className="text-xl font-semibold text-white"
            >
              Recent Reflections
            </h3>

            <ul className="mt-4 space-y-3">
              {recentReflections.map((reflection) => (
                <li
                  key={reflection.id}
                  className="rounded-lg border border-slate-700 bg-slate-800 p-4"
                >
                  <p className="font-semibold text-white">
                    {reflection.scenarioTitle}
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    {new Date(
                      `${reflection.eventDate}T00:00:00`
                    ).toLocaleDateString()}
                    {" · "}
                    Overall experience: {reflection.overallExperience}/5
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </section>
  )
}