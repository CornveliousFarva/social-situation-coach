import { useId } from "react"

interface ScenarioSectionProps {
  title: string
  items: string[]
}

export const ScenarioSection: React.FC<ScenarioSectionProps> = ({
  title,
  items,
}) => {
  const headingId = useId()

  if (items.length === 0) {
    return null
  }

  return (
    <section
      aria-labelledby={headingId}
      className="rounded-lg border border-slate-700 bg-slate-800 p-5"
    >
      <h2
        id={headingId}
        className="mb-3 text-xl font-semibold text-sky-300"
      >
        {title}
      </h2>

      <ul className="list-disc space-y-2 pl-6 text-slate-100">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}