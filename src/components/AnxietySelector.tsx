export type AnxietyLevel = "low" | "moderate" | "high"

interface AnxietySelectorProps {
  value: AnxietyLevel
  onChange: (level: AnxietyLevel) => void
}

const anxietyOptions: {
  value: AnxietyLevel
  label: string
  description: string
}[] = [
  {
    value: "low",
    label: "Low",
    description: "I feel mostly comfortable and want to make the most of the event.",
  },
  {
    value: "moderate",
    label: "Moderate",
    description: "I feel uncertain and would benefit from some preparation.",
  },
  {
    value: "high",
    label: "High",
    description: "I feel overwhelmed and need a simple, manageable plan.",
  },
]

export const AnxietySelector = ({
  value,
  onChange,
}: AnxietySelectorProps) => {
  return (
    <fieldset className="rounded-lg border border-slate-700 bg-slate-900 p-5">
      <legend className="px-2 text-xl font-semibold text-white">
        How anxious do you feel about this situation?
      </legend>

      <p className="mt-2 text-slate-300">
        Choose the option that best reflects how you feel right now.
      </p>

      <div className="mt-5 space-y-3">
        {anxietyOptions.map((option) => {
          const inputId = `anxiety-${option.value}`

          return (
            <div
              key={option.value}
              className="rounded-lg border border-slate-600 bg-slate-800 p-4"
            >
              <div className="flex items-start gap-3">
                <input
                  id={inputId}
                  type="radio"
                  name="anxiety-level"
                  value={option.value}
                  checked={value === option.value}
                  onChange={() => onChange(option.value)}
                  className="
                    mt-1 h-5 w-5
                    focus-visible:outline-none
                    focus-visible:ring-4
                    focus-visible:ring-sky-300
                  "
                />

                <div>
                  <label
                    htmlFor={inputId}
                    className="cursor-pointer font-semibold text-white"
                  >
                    {option.label}
                  </label>

                  <p className="mt-1 text-sm text-slate-300">
                    {option.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </fieldset>
  )
}