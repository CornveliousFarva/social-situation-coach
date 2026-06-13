import type { Scenario } from "../types/Scenario"

export const scenarios: Scenario[] = [
  {
      id: "religious-gathering",
      title: "Religious or Spiritual Gathering",
      category: "Community",
      description: "Prepare for attending a religious or spiritual gathering for the first time.",

      expectedOutcomes: [
          "People may sit, stand, sing, pray, or observe moments of silence.",
          "Dress expectations vary by community.",
          "New visitors are usually welcome."
      ],

      conversationStarters: [
          "Is this your regular community?",
          "What should a first-time visitor know?",
          "How long have you been involved here?"
      ],

      socialNorms: [
          "Observe before participating if you're unsure.",
          "Respect customs even if you don't understand them yet.",
          "Questions are usually welcomed when asked respectfully."
      ],

      misunderstandings: [
          "You are not expected to know every tradition immediately.",
          "Being quiet does not usually offend people."
      ],

      exitStrategies: [
          "Thank you for welcoming me.",
          "I appreciated being here today.",
          "It was nice meeting everyone."
      ],
      anticipatedChallenges: [],
      resources: []
  },

  {
      id: "sporting-event",
      title: "Sporting Event",
      category: "Entertainment",
      description: "Navigate attending a sporting event and interacting with other fans.",

      expectedOutcomes: [
          "Crowds can be loud and energetic.",
          "Fans often discuss teams, players, and recent results.",
          "Friendly rivalry is common."
      ],

      conversationStarters: [
          "How long have you supported this team?",
          "What do you think of today's matchup?",
          "Who's your favorite player?"
      ],

      socialNorms: [
          "Good-natured banter is usually acceptable.",
          "Avoid escalating disagreements.",
          "Respect personal space."
      ],

      misunderstandings: [
          "Not knowing every statistic is okay.",
          "You don't have to participate in chants."
      ],

      exitStrategies: [
          "Enjoy the rest of the game.",
          "I'm going to grab some food.",
          "Good talking with you."
      ],
      anticipatedChallenges: [],
      resources: []
  },

  {
      id: "networking-event",
      title: "Professional Networking Event",
      category: "Career",
      description: "Build confidence before attending professional networking events.",

      expectedOutcomes: [
          "People will often introduce themselves quickly.",
          "Conversations may be brief.",
          "Business cards or LinkedIn exchanges are common."
      ],

      conversationStarters: [
          "What brings you to this event?",
          "What kind of work do you do?",
          "What projects are you working on?"
      ],

      socialNorms: [
          "Listen as much as you talk.",
          "Be concise when introducing yourself.",
          "Respect people's time."
      ],

      misunderstandings: [
          "Short conversations are normal.",
          "Moving between groups is expected."
      ],

      exitStrategies: [
          "It was great meeting you.",
          "I'd love to connect on LinkedIn.",
          "Enjoy the rest of the event."
      ],
      anticipatedChallenges: [],
      resources: []
  }
]
