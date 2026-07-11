import type { EventReflection } from "../types/EventReflection"

interface ReflectionHistoryProps {
  reflections: EventReflection[]
  onDelete: (reflectionId: string) => void
}

const calculateAverage = (reflection: EventReflection) => {
  const total =
    reflection.preparation +
    reflection.comfort +
    reflection.conversation +
    reflection.boundaries +
    reflection.sensoryManagement +
    reflection.overallExperience

  return (total / 6).toFixed(1)
}

export const ReflectionHistory = ({
  reflections,
  onDelete,
}: ReflectionHistoryProps) => {
  if (reflections.length === 0) {
    return (
      <section
        aria-labelledby="reflection-history-heading"
        className="rounded-xl border border-slate-700 bg-slate-900 p-6"
      >
        <h2
          id="reflection-history-heading"
          className="text-2xl font-bold text-white"
        >
          Reflection History
        </h2>

        <p className="mt-3 text-slate-300">
          You have not saved any reflections for this scenario yet.
        </p>
      </section>
    )
  }

  return (
    <section
      aria-labelledby="reflection-history-heading"
      className="rounded-xl border border-slate-700 bg-slate-900 p-6"
    >
      <h2
        id="reflection-history-heading"
        className="text-2xl font-bold text-white"
      >
        Reflection History
      </h2>

      <div className="mt-6 space-y-5">
        {reflections.map((reflection) => (
          <article
            key={reflection.id}
            className="rounded-lg border border-slate-600 bg-slate-800 p-5"
          >
            <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {new Date(
                    `${reflection.eventDate}T00:00:00`
                  ).toLocaleDateString()}
                </h3>

                <p className="mt-1 text-sky-300">
                  Average score: {calculateAverage(reflection)} out of 5
                </p>
              </div>

              <button
                type="button"
                onClick={() => onDelete(reflection.id)}
                aria-label={`Delete reflection from ${reflection.eventDate}`}
                className="
                  rounded-lg border border-red-400 px-3 py-2
                  font-semibold text-red-200
                  hover:bg-red-950
                  focus-visible:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-red-300
                "
              >
                Delete
              </button>
            </header>

            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-slate-200">Preparation</dt>
                <dd className="text-slate-300">
                  {reflection.preparation}/5
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-200">Comfort</dt>
                <dd className="text-slate-300">{reflection.comfort}/5</dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-200">Conversation</dt>
                <dd className="text-slate-300">
                  {reflection.conversation}/5
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-200">
                  Boundary Setting
                </dt>
                <dd className="text-slate-300">{reflection.boundaries}/5</dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-200">
                  Sensory Management
                </dt>
                <dd className="text-slate-300">
                  {reflection.sensoryManagement}/5
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-200">
                  Overall Experience
                </dt>
                <dd className="text-slate-300">
                  {reflection.overallExperience}/5
                </dd>
              </div>
            </dl>

            {reflection.wentWell && (
              <div className="mt-5">
                <h4 className="font-semibold text-white">What went well</h4>
                <p className="mt-1 whitespace-pre-wrap text-slate-300">
                  {reflection.wentWell}
                </p>
              </div>
            )}

            {reflection.challenges && (
              <div className="mt-5">
                <h4 className="font-semibold text-white">
                  What felt challenging
                </h4>
                <p className="mt-1 whitespace-pre-wrap text-slate-300">
                  {reflection.challenges}
                </p>
              </div>
            )}

            {reflection.nextTime && (
              <div className="mt-5">
                <h4 className="font-semibold text-white">
                  What to try next time
                </h4>
                <p className="mt-1 whitespace-pre-wrap text-slate-300">
                  {reflection.nextTime}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}