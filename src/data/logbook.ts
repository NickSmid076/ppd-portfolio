export interface LogbookWeek {
  id: number;
  title: string;
  expectations?: string;
  overview?: string;
  nextWeek?: string;
  summary: string;
  starr: {
    situation: string;
    task: string;
    action: string;
    result: string;
    reflection: string;
  };
  theorySpotlight?: string | null;
}

export const logbook: LogbookWeek[] = [
  {
    id: 1,
    title: "Week 1 – Orientation & Setup",
    expectations: "I did not have much expectations as this was the very first week. I was rather curious on what this internship would give me.",
    overview: "When I arrived no one opened the door for 5 minutes. Then I got introduced to everyone and then my company mentor arrived. We had some small talk. The first day I participated in a meeting where I learned about accessibility in IT and got more info to research about the company. The following days I got used to the intranet and were rounding off the contracts with the company and school. I also struggled with public transport which made me late on the second day by 2,5 hours however the reaction of the others made me feel more comfortable socially.",
    nextWeek: "I had increased my knowledge about the company and wanted to leave a good impression on Mathieu and Caroline which I would be working on with the certificate of sustainability. Therefore I researched in the weekend some things about EcoVadis.",
    summary: "A slow but foundational week of settling in, learning the basics, and navigating uncertainty.",
    starr: {
      situation:
        "During my introduction with my company mentor, I was told more about the company. He reflected on the assignments from university, presented about the company and eventually talked about the planning for my internship.",
      task:
        "I was tasked with simply listening and asking questions. My task was rather to listen and understand the company better.",
      action:
        "I kept notes about the most important facets of the business and after getting access to the intranet I searched up the most important things that were mentioned.",
      result:
        "I gained decent knowledge about their products and set my first steps into understanding more about the company.",
      reflection:
        "My first week was slow and I was feeling a bit lost about what I actually needed to do. I asked my company mentor but he said to just take my time to settle in. I should have voiced my opinions and concerns more and prioritized scheduling a meeting."
    },
    theorySpotlight: null
  },

  {
    id: 2,
    title: "Week 2 – First Contribution",
    expectations: "I was thinking to just watch and learn about the company sustainability. And also hoping to learn more about the company.",
    overview:
      "When I had my first session with Caroline and Matthieu we dove straight into internal policy documents. I was tasked with some branding adjustments to the documents. I had my moment of first initiative as I felt I had to contribute something. My motivation was because Mathieu immediately asked me if I had any feedback regarding their CSR document which I had not been granted access to yet. I proposed a document after the first meeting with changes they could do to link more to the SDG's. They gave really positive feedback, and I started implementing it.",
    nextWeek:
      "I looked for competitors' annual and sustainability reports to understand what to implement for the company.",
    summary:
      "A week of initiative, early ownership, and learning how sustainability strategies are shaped.",
    starr: {
      situation:
        "During the second meeting we went through my first proposal for the company where I could ask questions about the company and how we can make it more practical.",
      task:
        "It was my task to initiate something for sustainability improvements when I was asked for feedback.",
      action:
        "I prepared documents explaining factors influencing certification, asked about current performance, and checked awareness of the SDGs.",
      result:
        "We had concrete action points linking to the SDGs and sustainability principles set by the UN. I contributed meaningfully.",
      reflection:
        "My initiative was good but I did not consider the depth of the company regarding sustainability. In my enthusiasm I followed their plan rather than discussing strategic direction. I was unsure about my position as an intern."
    },
    theorySpotlight: null
  },

  {
    id: 3,
    title: "Week 3 – Sustainability Progress",
    expectations:
      "I expected to get further along with the sustainability project and begin answering the questionnaire.",
    overview:
      "I presented development goals and was corrected on grammar. I was tasked with figuring out GHG emissions using financial data, which made me nervous. I started making a version of the sustainability report.",
    nextWeek:
      "We needed to finish the EcoVadis questionnaire due to a vacation, so I wanted to deliver the sustainability report including GHG emissions.",
    summary:
      "A demanding week learning emissions calculations, report building, and academic phrasing.",
    starr: {
      situation:
        "During the last meeting of the week we started filling in the questionnaire and reviewed what I had submitted.",
      task:
        "Assist in answering sustainability questions and search for required regulations.",
      action:
        "Prepared documents, reviewed questions, explained the sustainability report, and adapted phrasing.",
      result:
        "We felt confident about improving our score, though deadlines were tight.",
      reflection:
        "With limited time, I should have been more concise and prepared more effectively."
    },
    theorySpotlight: null
  },

  {
    id: 4,
    title: "Week 4 – Delivering My First Contribution",
    expectations:
      "I was expecting to finish up EcoVadis and was nervous about completing my first project.",
    overview:
      "I got positive feedback from HR about my contribution. We filled in the questionnaire, made changes to CSR documentation, and improved sustainability goals. My mentor emphasized improving grammar and spelling.",
    nextWeek:
      "Work with marketing and sales; install grammar-check tools.",
    summary:
      "A milestone week gaining confidence and being recognized for contribution.",
    starr: {
      situation:
        "During review of my sustainability report I was complimented that they did not imagine being here already.",
      task:
        "Deliver a self-initiated sustainability report and discuss improvements.",
      action:
        "Opened conversations about future improvements and trade-offs.",
      result:
        "Positioned myself as someone who works hard and delivers quality.",
      reflection:
        "I could have been more vocal from the start. I felt I had to prove myself instead of noticing I was already valued."
    },
    theorySpotlight: null
  },

  {
    id: 5,
    title: "Week 5 – Balancing Responsibilities",
    expectations:
      "I was unsure about the marketing and sales week and did not know how to contribute.",
    overview:
      "A mentally hard week due to my dad’s accident. I learned CRM, marketing strategy, and attended my first employee meeting. I was tasked with proposing website copy.",
    nextWeek:
      "Rewrite the company website copy and improve layouts using Figma.",
    summary:
      "A deeply emotional week balancing family emergencies and workplace responsibilities.",
    starr: {
      situation:
        "I had unexpectedly needed to introduce myself to the entire company.",
      task:
        "Give a last-minute introduction speech without preparation.",
      action:
        "Presented about my background, internship experience, and impressions of the company.",
      result:
        "Employees complimented my speaking skills and started new conversations with me.",
      reflection:
        "People saw me far more positively than I assumed. My self-judgment was harsher than reality."
    },
    theorySpotlight: null
  },

  {
    id: 6,
    title: "Week 6 – Processing & Moving Forward",
    expectations:
      "I expected to finish website copy while processing family events.",
    overview:
      "I opened up about my father. Workload was adjusted. I had a check-in meeting with my mentor and was moved into the HR onboarding project.",
    nextWeek:
      "Prepare documents for onboarding research.",
    summary:
      "A transition week realigning responsibilities and expectations.",
    starr: {
      situation:
        "Evaluation meeting with my mentor discussing progress and feelings.",
      task:
        "Update him about learning progress and prepare for next assignment.",
      action:
        "Explained what I learned about the company and improvements I saw.",
      result:
        "A short call clarifying expectations and the next assignment.",
      reflection:
        "I learned I must communicate workload and available time earlier."
    },
    theorySpotlight: null
  },

  {
    id: 7,
    title: "Week 7 – First Onboarding Insights",
    expectations:
      "I expected there was barely an onboarding process and wanted to uncover the gaps.",
    overview:
      "I wrote a plan of action and held my first onboarding interview.However when we started mapping the process down and I strated asking questions we realized that the onboarding was more inconsistent than we initially thought. This influenced the approach we had with the onboarding structure.",
    nextWeek:
      "Plan more interviews and prepare better questions.",
    summary:
      "A week of early discovery into onboarding challenges.",
    starr: {
      situation:
        "Meeting discussing what onboarding is and different ideas for scope and end product.",
      task:
        "Prepare myself to create a consistent onboarding strategy.",
      action:
        "Prepared my action plan, defended arguments, and countered questions.",
      result:
        "We reduced the scope of the assignment.",
      reflection:
        "People often resist change even when it improves their own work."
    },
    theorySpotlight: null
  },

  {
    id: 8,
    title: "Week 8 – Multiple Perspectives",
    expectations:
      "My goal was to learn different opinions about the company.",
    overview:
      "I interviewed owners, managers, and new employees. I asked challenging questions and saw conflicting visions.",
    nextWeek:
      "Map the onboarding process and talk to more employees.",
    summary:
      "A week revealing how inconsistent onboarding really was.",
    starr: {
      situation:
        "Interview with a senior employee who described poor onboarding.",
      task:
        "Investigate deeper without taking sides.",
      action:
        "Asked probing questions and uncovered underlying issues.",
      result:
        "Gained strong input for onboarding redesign.",
      reflection:
        "Onboarding inconsistency strongly shapes how valued employees feel."
    },
    theorySpotlight: null
  },

  {
    id: 9,
    title: "Week 9 – Setback & Realization",
    expectations:
      "I was talking to new employees to refine onboarding.",
    overview:
      "I struggled to systemize the onboarding process and learned I failed my sustainability scan.",
    nextWeek:
      "Resit the sustainability scan while contributing to the company.",
    summary:
      "A week of emotional and academic setback.",
    starr: {
      situation:
        "Failing my sustainability scan.",
      task:
        "Defend my work and redo the assignment.",
      action:
        "Almost sent a frustrated message but reconsidered after reviewing AI use. Restarted the assignment.",
      result:
        "Began redoing the entire assignment.",
      reflection:
        "I got too excited about the internship and rushed the assignment. I should have reviewed it thoroughly and communicated better."
    },
    theorySpotlight: null
  },

  {
    id: 10,
    title: "Week 10 – Emotional Difficulties",
    expectations:
      "I expected to keep onboarding moving while redoing my sustainability scan.",
    overview:
      "My mom needed an ambulance due to hyperventilation and I received a low scan score. I got sick and received more time for the resit.",
    nextWeek:
      "Combine research, HR onboarding work, and thesis setup.",
    summary:
      "An emotionally heavy week requiring resilience.",
    starr: {
      situation:
        "Conversation with HR about my mental health.",
      task:
        "Explain how everything was impacting me.",
      action:
        "Explained rationally while acknowledging workload pressure.",
      result:
        "Focused mostly on the resit, using the freedom given.",
      reflection:
        "Asking for help is not scary; people genuinely want to help."
    },
    theorySpotlight: null
  },

  {
    id: 11,
    title: "Week 11 – Planning & Expectations",
    expectations:
      "I expected to make big steps toward the thesis.",
    overview:
      "Had a call with mentor and HR about improving communication. Started structuring thesis tasks.",
    nextWeek:
      "Full focus on the thesis and theoretical basis.",
    summary:
      "A clarifying week rebuilding planning habits.",
    starr: {
      situation:
        "Meeting with mentor and HR addressing lack of communication.",
      task:
        "Explain the assignment and co-develop a plan to pass.",
      action:
        "Explained criteria and discussed field research.",
      result:
        "Was tasked with studying HR theory and research methodology.",
      reflection:
        "If someone’s agenda is full, I must be proactive and stand up for my progress."
    },
    theorySpotlight: null
  },

  {
    id: 12,
    title: "Week 12 – Irregularity Shock",
    expectations:
      "I expected to progress significantly on the thesis.",
    overview:
      "I discussed my thesis theories and framework with my mentor. My resit was flagged as irregularity.",
    nextWeek:
      "Continue work on the thesis.",
    summary:
      "A confronting week learning the consequences of academic precision.",
    starr: {
      situation:
        "My resit was flagged as irregularity.",
      task:
        "Defend the irregularity claim.",
      action:
        "Looked on OER Avans to understand irregularities and tested my report in multiple AI detectors.",
      result:
        "AI detectors flagged overly academic phrasing, revealing the real issue.",
      reflection:
        "Time management impacted my writing quality and led to the irregularity. I must plan better."
    },
    theorySpotlight: null
  },

  {
    id: 13,
    title: "Week 13 – Pressure & Reflection",
    expectations:
      "I expected to work on thesis and portfolio.",
    overview:
      "Pressure increased with upcoming deadlines for portfolio and thesis.",
    nextWeek:
      "Finish the portfolio and the thesis.",
    summary:
      "A week of emotional reflection under pressure.",
    starr: {
      situation:
        "While driving to a guest lecture, I was questioning my happiness, missing my life in Barcelona, and feeling disconnected.",
      task:
        "Manage my emotions while acknowledging deadlines.",
      action:
        "Reflected in the car and decided to finish work first before worrying about larger life questions.",
      result:
        "Still not fully happy, but satisfied by nearing deadlines.",
      reflection:
        "I need a priority list and good planning to prevent feeling overwhelmed."
    },
    theorySpotlight: null
  }
];