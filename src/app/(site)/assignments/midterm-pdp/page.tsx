"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Goal {
  id: number;
  title: string;
  icon: string;
  smart: string;
  why: string;
  actions: string[];
  indicators: string[];
  feedbackSupport: string[];
}

interface FeedbackCard {
  title: string;
  icon: string;
  items: string[];
}

export default function MidtermPDPPage() {
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const goals: Goal[] = [
    {
      id: 1,
      title: "Planning & Organisation",
      icon: "📋",
      smart:
        "Plan and organize my week and following weeks in a way that accounts for work/internships, university assignments, social life, and free-time activities.",
      why: "I often notice myself focusing on one thing and doing it well, but this creates problems in other aspects that I must also keep in mind.",
      actions: ["Make a planning", "Talk about my planning and evaluate", "Be realistic"],
      indicators: ["Deadlines met", "Clear overview in my head"],
      feedbackSupport: ["Parents", "Friends", "Company mentor", "Coworkers"],
    },
    {
      id: 2,
      title: "Alternative Stress-Relief Activities",
      icon: "🧘",
      smart: "Find healthy, non-kickboxing activities that help me relax when fighting is not possible.",
      why: "Kickboxing is my main stress reliever. However, there are times I am not able to fight — but that should not mean I cannot relax.",
      actions: ["Deep self-reflection on who I am as a person", "Define the scope of possible activities", "Try several activities"],
      indicators: ["Peace of mind"],
      feedbackSupport: ["Parents", "Friends"],
    },
    {
      id: 3,
      title: "Linking Theory to Practice",
      icon: "📚",
      smart: "Showcase the link between academic journals, theoretical models, and business practice.",
      why: "I am practically oriented, but to enter the financial industry I need deeper theoretical background.",
      actions: ["Demonstrate academic depth in the thesis", "Link theory clearly to practice", "Analyze the company AND its external environment"],
      indicators: ["Feedback from company", "Feedback from university"],
      feedbackSupport: ["Company mentor", "Coworkers"],
    },
    {
      id: 4,
      title: "Understanding AI's Role in My Future",
      icon: "🤖",
      smart:
        "Discover how AI shapes my professional development and create a guideline on how I can use AI to enhance myself rather than be replaced.",
      why: "AI heavily shapes future business landscapes. I want it to help me, not replace me.",
      actions: ["Learn what AI is", "Study why jobs are replaced", "Understand what humans do better", "Incorporate findings into my personal branding blog"],
      indicators: ["Quality of final product", "University feedback"],
      feedbackSupport: ["Friends", "Professionals"],
    },
    {
      id: 5,
      title: "Producing a Digital/Tech Product",
      icon: "💻",
      smart: "Produce a tech product (small or big) or contribute to one.",
      why: "I have interest and talent in IT but lack concrete experience.",
      actions: ["Learn what a digital product is", "Understand laws & transparency", "Learn design steps", "Build the product", "Gather feedback"],
      indicators: ["Functionality of the product", "Peer feedback"],
      feedbackSupport: ["Friends", "Peers", "Coworkers", "University"],
    },
    {
      id: 6,
      title: "International Career Mapping",
      icon: "🌍",
      smart: "Build a clear map of which countries, cultures, and sectors align with my future based on international context.",
      why: "This clarifies my values and supports my international ambitions.",
      actions: ["Learn which Hofstede dimensions matter to me", "Research economic potential of key countries", "Define personal values", "Build list of countries and sectors"],
      indicators: ["Causal connection between theory and my vision"],
      feedbackSupport: ["Friends", "Family"],
    },
  ];

  const feedbackCards: FeedbackCard[] = [
    {
      title: "Company Mentor Feedback",
      icon: "💼",
      items: [
        "Revise documents for spelling and grammar",
        "Prioritize myself and proactively approach coworkers",
        "Communicate personal and professional concerns",
      ],
    },
    {
      title: "Student / Learning Community Feedback",
      icon: "👥",
      items: [
        "Cultural adjustment takes time",
        "Companies have demands; interns must voice needs",
        "Share worries about internship and university",
      ],
    },
    {
      title: "Reflection on Fit",
      icon: "💡",
      items: ["Deciding whether a culture fits you is as important as choosing your field"],
    },
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
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]">
              Midterm Evaluation PDP
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            A revised and deeper understanding of my development needs halfway through the internship.
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
              The experience during this internship has exposed me to many areas of personal and professional growth. Realizing my shortcomings was not easy — as it never is when noticing things you are not doing well. I understood that my original PDP goals did not address the core improvements needed for my development. I assumed I had reached a professional plateau, which created a sense of ego. That was not the case. Therefore, I have revised my goals to better reflect the growth required for the remainder of my internship.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Revised Goals Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Revised Development Goals
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <motion.button
                key={goal.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedGoal(goal)}
                className="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-left overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                <div className="absolute top-4 right-4 text-[120px] font-black text-white/5 leading-none pointer-events-none">
                  {String(goal.id).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{goal.icon}</span>
                  <h3 className="text-xl font-bold text-white">{goal.title}</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">{goal.smart}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-blue-300 text-sm font-semibold">
                  <span>View details</span>
                  <span aria-hidden>→</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

      </section>

      {/* Midterm Reflection */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.3)]"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Midterm Reflection</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              So far my sustainability product for the company has been the best. However over the course of my internship I grew more interest in tech — but not to the extent that I want a full-time future in it. My previous goals were more goals just to set goals; these new goals reflect who I am becoming. I realise now that I need deeper theoretical development, better planning, and a clearer professional identity. I have achieved or made progress on several professional goals, and I am taking significant steps toward goal 6. My practical approach helped me inside the company, but not enough for university assignments. Balancing both worlds remains a challenge, but these goals finely reflect the core of what I need to grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Feedback & Reflections
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feedbackCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300">
                      <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Reflection */}
      <section className="py-16 px-6 pb-28">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/70 to-blue-900/50 text-gray-100 rounded-3xl p-6 md:p-8 border border-white/10 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
            <p className="text-lg leading-relaxed">
              Midterm Reflection: I’m transitioning from execution to synthesis — moving beyond tasks to insights and outcomes. The next phase is about consolidating analytical depth with executive communication, and translating effort into visible impact.
            </p>
          </div>
        </div>
      </section>

      {/* Goal Modal */}
      <AnimatePresence>
        {selectedGoal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGoal(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
            >
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-t-3xl z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{selectedGoal.icon}</div>
                    <div>
                      <div className="text-sm opacity-90 mb-1">Goal {selectedGoal.id}</div>
                      <h2 className="text-3xl font-bold">{selectedGoal.title}</h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedGoal(null)}
                    className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all flex-shrink-0"
                  >
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.div>
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎯</span> SMART Goal
                  </h3>
                  <p className="text-base text-gray-200 leading-relaxed bg-white/5 rounded-2xl p-4 border border-white/10">{selectedGoal.smart}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">💡</span> Why This Goal Matters
                  </h3>
                  <p className="text-base text-gray-200 leading-relaxed bg-white/5 rounded-2xl p-4 border border-white/10">{selectedGoal.why}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">✅</span> Concrete Learning Actions
                  </h3>
                  <ul className="space-y-2 bg-white/5 rounded-2xl p-4 border border-white/10">
                    {selectedGoal.actions.map((action, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-200">
                        <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">📊</span> Success Indicators
                  </h3>
                  <ul className="space-y-2 bg-white/5 rounded-2xl p-4 border border-white/10">
                    {selectedGoal.indicators.map((indicator, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-200">
                        <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                        <span>{indicator}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">💬</span> Feedback Sources / Support
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedGoal.feedbackSupport.map((source, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-4 py-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 rounded-full text-sm font-medium"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedGoal(null)}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
