// A section of the scenario with a title and a list of items
interface ScenarioSectionProps {
  title: string
  items: string[]
}

export const ScenarioSection: React.FC<ScenarioSectionProps> = ({ title, items }) => {
  return (
    <div className="scenario-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}