import { useState } from "react"
import type { FormEvent } from "react"
import type { EventReflection } from "../types/EventReflection"
import type { Scenario } from "../types/Scenario"

interface EventReflectionFormProps {
  scenario: Scenario
  onSave: (reflection: EventReflection) => void
}

type ScoreFieldProps = {
  id: string
  label: string
  description: string
  value: number
  onChange: (value: number) => void
}

const ScoreField = ({
  id,
  label,
  description,
  value,
  onChange,
}: ScoreFieldProps) => {
  return (
    <fieldset className="rounded-lg border border-slate-700 p-4">
      <legend className="px-2 font-semibold text-white">{label}</legend>

      <p id={`${id}-description`} className="mb-3 text-sm text-slate-300">
        {description}
      </p>

      <div
        className="flex flex-wrap gap-3"
        aria-describedby={`${id}-description`}
      >
        {[1, 2, 3, 4, 5].map((score) => {
          const inputId = `${id}-${score}`

          return (
            <div key={score}>
              <input
                id={inputId}
                type="radio"
                name={id}
                value={score}
                checked={value === score}
                onChange={() => onChange(score)}
                className="peer sr-only"
              />

              <label
                htmlFor={inputId}
                className="
                  flex h-11 w-11 cursor-pointer items-center justify-center
                  rounded-lg border border-slate-500 bg-slate-800
                  font-semibold text-white
                  hover:bg-slate-700
                  peer-checked:border-sky-300
                  peer-checked:bg-sky-700
                  peer-focus-visible:outline-none
                  peer-focus-visible:ring-4
                  peer-focus-visible:ring-sky-300
                  peer-focus-visible:ring-offset-2
                  peer-focus-visible:ring-offset-slate-900
                "
              >
                {score}
              </label>
            </div>
          )
        })}
      </div>

      <p className="mt-3 text-sm text-slate-300">
        Selected score: {value} out of 5
      </p>
    </fieldset>
  )
}

export const EventReflectionForm = ({
  scenario,
  onSave,
}: EventReflectionFormProps) => {
  const [eventDate, setEventDate] = useState("")
  const [preparation, setPreparation] = useState(3)
  const [comfort, setComfort] = useState(3)
  const [conversation, setConversation] = useState(3)
  const [boundaries, setBoundaries] = useState(3)
  const [sensoryManagement, setSensoryManagement] = useState(3)
  const [overallExperience, setOverallExperience] = useState(3)

  const [wentWell, setWentWell] = useState("")
  const [challenges, setChallenges] = useState("")
  const [nextTime, setNextTime] = useState("")
  const [saveMessage, setSaveMessage] = useState("")

  const resetForm = () => {
    setEventDate("")
    setPreparation(3)
    setComfort(3)
    setConversation(3)
    setBoundaries(3)
    setSensoryManagement(3)
    setOverallExperience(3)
    setWentWell("")
    setChallenges("")
    setNextTime("")
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const reflection: EventReflection = {
      id: crypto.randomUUID(),
      scenarioId: scenario.id,
      scenarioTitle: scenario.title,
      eventDate,
      preparation,
      comfort,
      conversation,
      boundaries,
      sensoryManagement,
      overallExperience,
      wentWell: wentWell.trim(),
      challenges: challenges.trim(),
      nextTime: nextTime.trim(),
      createdAt: new Date().toISOString(),
    }

    onSave(reflection)
    resetForm()
    setSaveMessage("Your reflection was saved.")

    window.setTimeout(() => {
      setSaveMessage("")
    }, 4000)
  }

  return (
    <section
      aria-labelledby="event-reflection-heading"
      className="rounded-xl border border-slate-700 bg-slate-900 p-6"
    >
      <header className="mb-6">
        <h2
          id="event-reflection-heading"
          className="text-2xl font-bold text-white"
        >
          Event Reflection
        </h2>

        <p className="mt-2 text-slate-300">
          Rate the experience based on your own goals. A lower score does not
          mean failure—it simply helps you track what felt easier or harder.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="event-date"
            className="block font-semibold text-white"
          >
            Event date
          </label>

          <input
            id="event-date"
            type="date"
            required
            value={eventDate}
            onChange={(event) => setEventDate(event.target.value)}
            className="
              mt-2 rounded-lg border border-slate-500 bg-slate-800
              px-3 py-2 text-white
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-sky-300
            "
          />
        </div>

        <div className="space-y-4">
          <ScoreField
            id="preparation"
            label="Preparation"
            description="How prepared did you feel before the event?"
            value={preparation}
            onChange={setPreparation}
          />

          <ScoreField
            id="comfort"
            label="Comfort"
            description="How comfortable did you feel during the event?"
            value={comfort}
            onChange={setComfort}
          />

          <ScoreField
            id="conversation"
            label="Conversation"
            description="How satisfied were you with your social interactions?"
            value={conversation}
            onChange={setConversation}
          />

          <ScoreField
            id="boundaries"
            label="Boundary Setting"
            description="How well did you recognize and communicate your needs?"
            value={boundaries}
            onChange={setBoundaries}
          />

          <ScoreField
            id="sensory-management"
            label="Sensory Management"
            description="How well were you able to manage the environment?"
            value={sensoryManagement}
            onChange={setSensoryManagement}
          />

          <ScoreField
            id="overall-experience"
            label="Overall Experience"
            description="How positive or worthwhile did the experience feel?"
            value={overallExperience}
            onChange={setOverallExperience}
          />
        </div>

        <div>
          <label
            htmlFor="went-well"
            className="block font-semibold text-white"
          >
            What went well?
          </label>

          <textarea
            id="went-well"
            rows={4}
            value={wentWell}
            onChange={(event) => setWentWell(event.target.value)}
            className="
              mt-2 w-full rounded-lg border border-slate-500
              bg-slate-800 px-3 py-2 text-white
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-sky-300
            "
          />
        </div>

        <div>
          <label
            htmlFor="challenges"
            className="block font-semibold text-white"
          >
            What felt challenging?
          </label>

          <textarea
            id="challenges"
            rows={4}
            value={challenges}
            onChange={(event) => setChallenges(event.target.value)}
            className="
              mt-2 w-full rounded-lg border border-slate-500
              bg-slate-800 px-3 py-2 text-white
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-sky-300
            "
          />
        </div>

        <div>
          <label
            htmlFor="next-time"
            className="block font-semibold text-white"
          >
            What would you like to try next time?
          </label>

          <textarea
            id="next-time"
            rows={4}
            value={nextTime}
            onChange={(event) => setNextTime(event.target.value)}
            className="
              mt-2 w-full rounded-lg border border-slate-500
              bg-slate-800 px-3 py-2 text-white
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-sky-300
            "
          />
        </div>

        <button
          type="submit"
          className="
            rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white
            hover:bg-sky-500
            focus-visible:outline-none
            focus-visible:ring-4
            focus-visible:ring-sky-300
            focus-visible:ring-offset-2
            focus-visible:ring-offset-slate-900
          "
        >
          Save Reflection
        </button>

        <p role="status" aria-live="polite" className="text-green-300">
          {saveMessage}
        </p>
      </form>
    </section>
  )
}