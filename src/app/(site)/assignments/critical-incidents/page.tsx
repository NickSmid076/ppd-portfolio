"use client";

import { motion } from "framer-motion";

interface Incident {
  id: number;
  title: string;
  starr: {
    situation: string;
    task: string;
    action: string;
    result: string;
    reflection: string;
  };
  theory: {
    title: string;
    definition: string;
    application: string;
    deepReflection: string;
  };
}

// Reusable Components
function STARRPanel({ starr }: { starr: Incident['starr'] }) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="text-blue-400">📋</span> STARR Analysis
      </h3>
      
      {[
        { label: 'Situation', content: starr.situation, icon: '🔍' },
        { label: 'Task', content: starr.task, icon: '🎯' },
        { label: 'Action', content: starr.action, icon: '⚡' },
        { label: 'Result', content: starr.result, icon: '✅' },
        { label: 'Reflection', content: starr.reflection, icon: '💭' }
      ].map((item, idx) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <h4 className="text-sm font-bold text-blue-400 mb-2 flex items-center gap-2">
            <span>{item.icon}</span> {item.label}:
          </h4>
          <p className="text-base text-gray-300 leading-relaxed">
            {item.content}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function TheorySpotlight({ theory }: { theory: Incident['theory'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">💡</div>
        <h3 className="text-2xl font-bold text-white">Theory Spotlight</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-bold text-blue-300 mb-3">{theory.title}</h4>
        </div>

        <div>
          <h5 className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-wide">Definition</h5>
          <p className="text-gray-300 leading-relaxed">{theory.definition}</p>
        </div>

        <div>
          <h5 className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-wide">Application</h5>
          <p className="text-gray-300 leading-relaxed">{theory.application}</p>
        </div>

        <div>
          <h5 className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-wide">Deep Reflection</h5>
          <p className="text-gray-300 leading-relaxed">{theory.deepReflection}</p>
        </div>
      </div>
    </motion.div>
  );
}

function IncidentCard({ incident, index }: { incident: Incident; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="mb-24"
    >
      {/* Card Title */}
      <div className="mb-8 flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {incident.id}
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            {incident.title}
          </h2>
        </div>
      </div>

      {/* Dual Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: STARR Panel */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
          <STARRPanel starr={incident.starr} />
        </div>

        {/* Right: Theory Panel */}
        <TheorySpotlight theory={incident.theory} />
      </div>
    </motion.div>
  );
}

export default function CriticalIncidentsPage() {
  const incidents: Incident[] = [
    {
      id: 1,
      title: "Positive Feedback on Sustainability Work",
      starr: {
        situation: "In my 4th week of the internship we were finishing and submitting the questionnaire for the sustainability certificate. We had made major improvements to the extent that the financial manager gave me a compliment that they thought they would be in 2030 in this position regarding sustainability and transparency.",
        task: "In this situation I was tasked with contributing to improving the sustainability score of the company.",
        action: "I had submitted the revised CSR plan and a sustainability report for Dialog Group. And presented the improvements and explained the decisions that were made and which trade-offs to consider.",
        result: "As a result the company was very satisfied with the sustainability for this year. And had a perspective on how to further integrate sustainability into their business so they would get an even better sustainability certificate.",
        reflection: "This compliment gave me confidence and also showed me how to apply the theory learned at school. This style of communication was rather low context compared to my previous internship experience which was more higher-context according to Hall's high/low context model definitions. I learned from this that communicating and discussing different viewpoints can lead to good results and the difference between school and business practice is still huge — and that this will shape potentially future expertise."
      },
      theory: {
        title: "Hall's High/Low Context Communication",
        definition: "Low-context cultures rely on explicit, direct information; high-context cultures depend on shared understanding and indirect cues.",
        application: "The low-context style used by the financial manager helped me align expectations quickly and understand how clarity improves business decision-making.",
        deepReflection: "This theory explains why I adapted more easily to explicit communication and shows the gap between academic training and real-world practice."
      }
    },
    {
      id: 2,
      title: "HR Discussion About My Private Situation",
      starr: {
        situation: "Due to what happened in my private life regarding family matters I had scheduled a meeting with the HR manager. In this meeting she pointed out that it is okay to take a break and to manage time for myself. She communicated clearly that it is a lot to handle.",
        task: "My task was to be transparent about what was happening in my private life, how it was affecting me, and how I preferred to handle matters.",
        action: "I did agree but still wanted to show dedication to the company. So I tried to move the discussion to what I could do.",
        result: "As a result we came to some agreements to manage workload and prioritize university assignments.",
        reflection: "It made me realize that as someone who is part of the company they take into consideration employee well-being. It showed emotional awareness from their side according to the Nonviolent Communication theory. It made me feel more open — however I should voice such concerns myself earlier instead of trying to deal with all of it alone."
      },
      theory: {
        title: "Nonviolent Communication (NVC)",
        definition: "A communication framework focused on empathy, emotional awareness, and acknowledging needs.",
        application: "HR's empathetic communication showed that being open about struggles is acceptable and professionally supported.",
        deepReflection: "This taught me that emotional transparency builds trust — and that I must initiate these conversations earlier."
      }
    },
    {
      id: 3,
      title: "Honest Feedback About Planning & Communication",
      starr: {
        situation: "I did not follow emails weeks prior to starting the thesis topic. And because Sales was occupied — which was the theme of the first proposed thesis — we decided to switch it to HR. However I did not communicate this well to my company mentor. He expected constant updating. I received honest feedback about how planning influences other people's agendas and that I must communicate mine, and that I cannot wait until others have space in their calendars.",
        task: "I had to explain my thoughts and how I still wanted to pass everything while making a thesis that was of value to the company.",
        action: "I listened mainly and confirmed I understood what they meant. I admitted I had to improve. However I also felt it was unfair that expectations had not been made explicit. We decided to move forward and clarify expectations.",
        result: "We came to very clear agreements on how to handle the thesis: we would call two times a week and I would send daily updates.",
        reflection: "This feedback did not feel nice as it felt more like critique of what I did not do well and did not take into regard what I did do well. I should have voiced this feeling, but due to time pressure I accepted it and focused on results. There were also wrong assumptions regarding communication from both sides, confirming the Ladder of Inference. In the future I need to make clear planning, stick to it, and communicate it proactively."
      },
      theory: {
        title: "Ladder of Inference",
        definition: "A cognitive model explaining how assumptions and beliefs form quickly without verifying facts.",
        application: "Both sides made assumptions about communication that were never clarified.",
        deepReflection: "Recognizing this process helps prevent misunderstandings and promotes transparent collaboration."
      }
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0D14] via-[#0E111A] to-[#0A0D14]">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Critical Incidents
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Key learning moments during my internship that shaped my development as a professional.
          </p>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-12"
        >
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
            <p className="text-lg text-gray-300 leading-relaxed">
              These critical incidents are moments that significantly influenced my learning process during the internship. They reflect not only outcomes but also the internal shifts in awareness, communication, and professional identity that occurred. Each incident is structured using STARR and connected to relevant theories that help explain the deeper learning behind the experience.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Learning Moments Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Learning Moments
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-400">
              Three transformative experiences analyzed through the STARR framework
            </p>
          </motion.div>

          {/* Incidents */}
          <div className="space-y-32">
            {incidents.map((incident, index) => (
              <IncidentCard key={incident.id} incident={incident} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Reflection */}
      <section className="py-20 px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.3)]"
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">💡</span> Closing Reflection
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              These incidents reflect the most meaningful moments of learning during my internship. They show where communication, expectations, emotional awareness, and initiative shaped my growth. The theories connected to each situation helped me understand the deeper mechanisms behind conflict, clarity, and personal development.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
