export type IDGDimensionKey = "being" | "thinking" | "relating" | "collaborating" | "acting";

export interface IDGDimension {
  key: IDGDimensionKey;
  name: string;
  tagline: string;
  skills: string[];
  icon: string;
  gradient: { from: string; to: string };
}

export const idgDimensions: IDGDimension[] = [
  {
    key: "being",
    name: "Being",
    tagline: "Relationship to self — inner compass, integrity & authenticity, openness and learning mindset, self-awareness, presence.",
    skills: [
      "Inner compass",
      "Integrity & authenticity",
      "Openness & learning mindset",
      "Self-awareness",
      "Presence"
    ],
    icon: "🧭",
    gradient: { from: "#f97316", to: "#fb7185" }
  },
  {
    key: "thinking",
    name: "Thinking",
    tagline: "Cognitive skills — critical thinking, complexity awareness, perspective skills, sense-making, long-term orientation & visioning.",
    skills: [
      "Critical thinking",
      "Complexity awareness",
      "Perspective skills",
      "Sense-making",
      "Long-term orientation & visioning"
    ],
    icon: "🧠",
    gradient: { from: "#6366f1", to: "#22d3ee" }
  },
  {
    key: "relating",
    name: "Relating",
    tagline: "Caring for others & the world — appreciation, connectedness, humility, empathy & compassion.",
    skills: [
      "Appreciation",
      "Connectedness",
      "Humility",
      "Empathy & compassion"
    ],
    icon: "🤝",
    gradient: { from: "#f472b6", to: "#38bdf8" }
  },
  {
    key: "collaborating",
    name: "Collaborating",
    tagline: "Social skills — communication, co-creation, inclusive mindset & intercultural competence, trust, mobilisation skills.",
    skills: [
      "Communication skills",
      "Co-creation",
      "Inclusive mindset & intercultural competence",
      "Trust",
      "Mobilisation skills"
    ],
    icon: "🤲",
    gradient: { from: "#22d3ee", to: "#a855f7" }
  },
  {
    key: "acting",
    name: "Acting",
    tagline: "Enabling change — courage, creativity, optimism, perseverance.",
    skills: [
      "Courage",
      "Creativity",
      "Optimism",
      "Perseverance"
    ],
    icon: "🚀",
    gradient: { from: "#f59e0b", to: "#22c55e" }
  }
];
