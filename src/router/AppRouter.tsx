// AppRouter.tsx - Placeholder for custom routing logic if needed

export const routes = {
  home: "/",
  about: "/about",
  assignments: {
    index: "/assignments",
    selfScan: "/assignments/self-scan",
    pdp: "/assignments/pdp",
    midtermPdp: "/assignments/midterm-pdp",
    criticalIncidents: "/assignments/critical-incidents",
    aiUsage: "/assignments/ai-usage",
    personalBranding: "/assignments/personal-branding",
  },
  logbook: {
    index: "/logbook",
    week: (id: string | number) => `/logbook/week/${id}`,
  },
  blog: {
    fromLostToLessLost: "/blog/from-lost-to-less-lost",
  },
  contact: "/contact",
} as const;

export default routes;
