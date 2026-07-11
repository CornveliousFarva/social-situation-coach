Social Situation Coach

Social Situation Coach is an accessible web application built with React and TypeScript that helps users prepare for unfamiliar social situations through structured guidance, personalized planning, and post-event reflection.

The application is designed to reduce uncertainty by providing realistic expectations, conversation starters, social norms, anticipated challenges, exit strategies, and self-reflection tools for a variety of real-world situations.

Features

* Scenario-based preparation for unfamiliar social situations
* Personalized anxiety level selector with adaptive guidance
* Event reflection tracker
* Reflection history with local data persistence
* Scenario navigation with reusable React components
* Responsive interface built with Tailwind CSS

Accessibility

Accessibility has been a core design goal throughout development.

Current accessibility features include:

* Semantic HTML landmarks (main, section, article, header)
* Keyboard navigation
* Visible keyboard focus indicators
* ARIA labels and accessible names
* Screen reader-friendly heading hierarchy
* Color contrast improvements
* Lighthouse accessibility validation

Current Scenarios

* Religious or Spiritual Gathering
* Sporting Event
* Professional Networking Event

Additional scenarios are planned for future releases.

Technologies

* React
* TypeScript
* Vite
* Tailwind CSS
* HTML5
* CSS3
* Local Storage API

Project Structure

src/
├── components/
│   ├── AnxietyGuidance.tsx
│   ├── AnxietySelector.tsx
│   ├── EventReflectionForm.tsx
│   ├── ReflectionHistory.tsx
│   ├── ScenarioCard.tsx
│   ├── ScenarioDetail.tsx
│   ├── ScenarioList.tsx
│   └── ScenarioSection.tsx
│
├── data/
│   └── scenarios.ts
│
├── pages/
│   ├── HomePage.tsx
│   └── ScenarioPage.tsx
│
├── types/
│   ├── EventReflection.ts
│   └── Scenario.ts
│
└── App.tsx

Installation

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

Start the development server:

npm run dev

Create a production build:

npm run build

Preview the production build:

npm run preview

Roadmap

In Progress

* Additional social scenarios
* Search and category filtering
* Enhanced progress dashboard

Planned

* React Router integration
* Favorites
* Practice Mode with interactive responses
* Personal progress analytics
* Data export/import
* Optional cloud synchronization

Why I Built This

Social Situation Coach was created to help people approach unfamiliar social environments with greater confidence. Rather than focusing on rigid social “rules,” the application emphasizes preparation, realistic expectations, accessibility, and personal growth through structured guidance and self-reflection.

Author

Greg Schuman
