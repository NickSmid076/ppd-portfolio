export interface Assignment {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  href: string;
  category: string;
  completed: boolean;
}

export const assignments: Assignment[] = [
  {
    id: "self-scan",
    number: "01",
    title: "Core Qualities & Future Vision",
    subtitle: "Understanding strengths, pitfalls, challenges, and future identity.",
    href: "/assignments/self-scan",
    category: "Self-Assessment",
    completed: false,
  },
  {
    id: "pdp",
    number: "02",
    title: "Personal Development Plan (PDP)",
    subtitle: "SMART goals guiding my growth during the internship.",
    href: "/assignments/pdp",
    category: "Planning",
    completed: false,
  },
  {
    id: "midterm-pdp",
    number: "03",
    title: "Midterm Evaluation PDP",
    subtitle: "Revised goals and deeper insight halfway through the internship.",
    href: "/assignments/midterm-pdp",
    category: "Review",
    completed: false,
  },
  {
    id: "critical-incidents",
    number: "04",
    title: "Critical Incidents",
    subtitle: "Key learning moments documented with STARR + theory.",
    href: "/assignments/critical-incidents",
    category: "Reflection",
    completed: false,
  },
  {
    id: "ai-usage",
    number: "05",
    title: "Responsible AI Usage",
    subtitle: "How I used AI and how my company implements AI responsibly.",
    href: "/assignments/ai-usage",
    category: "Technology",
    completed: false,
  },
  {
    id: "personal-branding",
    number: "06",
    title: "Personal Branding",
    subtitle: "Identity, elevator pitch (Spanish), external portfolio & blog.",
    href: "/assignments/personal-branding",
    category: "Professional Development",
    completed: false,
  },
];

export function getAssignmentById(id: string): Assignment | undefined {
  return assignments.find((assignment) => assignment.id === id);
}
