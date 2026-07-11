import type { AnxietyLevel } from "./AnxietySelector"
// Provides guidance based on the user's selected anxiety level.
interface AnxietyGuidanceProps {
  level: AnxietyLevel
}

// A mapping of anxiety levels to suggested guidance items.
const guidance: Record<AnxietyLevel, string[]> = {
  low: [
    "Set a goal to introduce yourself to one or two people.",
    "Try one conversation starter you have not used before.",
    "Look for an opportunity to learn something new about the event or community.",
    "Check in with yourself periodically, even if you feel comfortable.",
  ],

  moderate: [
    "Review one or two conversation starters before arriving.",
    "Give yourself a clear and realistic goal for the event.",
    "Identify a quiet place where you can take a short break.",
    "Remember that you do not have to participate in every activity.",
  ],

  high: [
    "Focus only on arriving and becoming familiar with the environment.",
    "Prepare one conversation starter and one exit strategy.",
    "Identify exits, restrooms, and quiet spaces when you arrive.",
    "Give yourself permission to leave early if you become overwhelmed.",
    "Attending for a short time still counts as meaningful progress.",
  ],
}

// 
export const AnxietyGuidance: React.FC<AnxietyGuidanceProps> = ({
  level,
}) => {
  const headingId = `anxiety-guidance-${level}`

  return (
    <section
      aria-labelledby={headingId}
      aria-live="polite"
      className="rounded-lg border border-sky-700 bg-sky-950 p-5"
    >
      <h2 id={headingId} className="text-xl font-semibold text-sky-200">
        Suggested Plan
      </h2>

      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-100">
        {guidance[level].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}