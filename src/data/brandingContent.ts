export interface BrandingElement {
  id: string;
  title: string;
  description: string;
  type: "value" | "strength" | "goal" | "style";
}

export const brandingContent = {
  personalStatement: "Placeholder for personal branding statement",
  
  coreValues: [
    {
      id: "value-1",
      title: "Value 1",
      description: "Description of core value",
      type: "value" as const,
    },
  ],
  
  keyStrengths: [
    {
      id: "strength-1",
      title: "Strength 1",
      description: "Description of key strength",
      type: "strength" as const,
    },
  ],
  
  professionalGoals: [
    {
      id: "goal-1",
      title: "Goal 1",
      description: "Description of professional goal",
      type: "goal" as const,
    },
  ],
  
  brandingStyle: {
    colors: ["#345cff", "#9333ea"],
    tone: "Professional yet approachable",
    keywords: ["innovative", "collaborative", "growth-oriented"],
  },
};
