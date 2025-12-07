"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AssignmentHero from "@/components/layout/AssignmentHero";
import Section from "@/components/layout/Section";
import PageWrapper from "@/components/layout/PageWrapper";

interface Goal {
  id: number;
  title: string;
  icon: string;
  preview: string;
  smart: string;
  why: string;
  actions: string[];
  indicators: string[];
  feedbackSources: string[];
  support: string[];
}

export default function PDPPage() {
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const goals: Goal[] = [
    {
      id: 1,
      title: "Prioritization & Planning",
      icon: "📋",
      preview: "Develop structured weekly planning to balance internships, deadlines, training, and personal life.",
      smart: "Set clear priorities and plan the week in an organized, structured manner to maintain balance across internships, personal responsibilities, sports, and growth.",
      why: "I have many commitments that require structure—training several times a week, working on internships, university deadlines, and personal development. To ensure I don't feel overwhelmed, I need a planning system that gives me clarity and reduces stress, while still allowing room for family time, relationships, and rest.",
      actions: [
        "Create a weekly priority list",
        "Fill in my calendar every week",
        "Reflect each week on what didn't work"
      ],
      indicators: [
        "Number of deadlines met or missed",
        "Improvements in stress and overwhelm",
        "Stable personal finances resulting from better structure"
      ],
      feedbackSources: ["Coworkers", "Company mentor", "Parents"],
      support: ["Accessible cloud-based task tool", "Mentor deadlines", ""]
    },
    {
      id: 2,
      title: "International Networking",
      icon: "🌍",
      preview: "Build 1-2 meaningful international professional relationships.",
      smart: "Seek 1-2 meaningful international professional relationships built through intentional outreach, networking events, and conversations.",
      why: "Strong networks open doors for careers and growth. Building international relationships early expands my perspective and creates opportunities.",
      actions: [
        "Attend networking events",
        "Reach out to 2-3 international professionals via LinkedIn",
        "Schedule coffee chats with peers"
      ],
      indicators: [
        "Number of meaningful connections made",
        "Frequency of collaborative opportunities",
        "Peer/mentor feedback on networking skills"
      ],
      feedbackSources: ["Mentor", "Peers", "Self-review"],
      support: ["Event access", "Introductions", "Conversation starters"]
    },
    {
      id: 3,
      title: "Reporting & Strategy",
      icon: "📊",
      preview: "Contribute to a sustainability or annual report and translate insights into strategy.",
      smart: "Contribute a comprehensive analysis to a company report and translate insights into clear strategic recommendations.",
      why: "Reports drive business decisions. Learning to synthesize data, craft compelling narratives, and recommend strategy builds crucial executive presence.",
      actions: [
        "Volunteer for reporting project",
        "Create data summaries",
        "Draft strategic recommendations"
      ],
      indicators: [
        "Report quality and adoption",
        "Stakeholder feedback on insights",
        "Mentor rating on strategic thinking"
      ],
      feedbackSources: ["Stakeholders", "Manager", "Self-review"],
      support: ["Data access", "Mentorship", "Report templates"]
    },
    {
      id: 4,
      title: "AI Agent Development",
      icon: "🤖",
      preview: "Learn to build an AI agent that administers administrative tasks.",
      smart: "Build one working AI agent that automates administrative tasks or workflows, demonstrating capability with modern generative AI frameworks.",
      why: "Generative AI is reshaping work. Building a working AI agent demonstrates modern skills and unlocks new efficiencies.",
      actions: [
        "Select AI framework",
        "Study tutorials and docs",
        "Build prototype for real task"
      ],
      indicators: [
        "Agent functionality",
        "Task completion rate",
        "Team adoption and feedback"
      ],
      feedbackSources: ["Mentor", "Technical peer", "Usage metrics"],
      support: ["Learning resources", "API access", "Technical guidance"]
    },
    {
      id: 5,
      title: "Business Level Spanish",
      icon: "🗣️",
      preview: "Improve Spanish proficiency to hold basic business conversations.",
      smart: "Achieve conversational Spanish proficiency to conduct basic business meetings and conversations confidently by the end of the internship period.",
      why: "Speaking Spanish professionally opens doors to bigger business conversations.",
      actions: [
        "Attend Spanish proficiency classes",
        "Practice with native speakers",
        "Document conversations in learning journal"
      ],
      indicators: [
        "Fluency in business scenarios",
        "Native speaker feedback",
        "Completed practice conversations"
      ],
      feedbackSources: ["Language partner", "Instructor", "Self-assessment"],
      support: ["Spanish courses", "Native speaker connections", "Practice time"]
    },
    {
      id: 6,
      title: "Discover Relaxing Activities",
      icon: "❤️",
      preview: "Find a relaxing non-work activity that helps manage stress.",
      smart: "Identify and regularly practice at least one relaxing activity outside of work that demonstrably reduces stress levels and improves overall wellbeing.",
      why: "Busy careers require balance. Finding activities that help manage stress ensures sustained wellbeing, better focus, and prevents burnout.",
      actions: [
        "Try 3-4 relaxation techniques",
        "Track which helps most",
        "Build into weekly routine"
      ],
      indicators: [
        "Perceived stress levels",
        "Consistency of relaxation practice",
        "Feedback on mood and energy"
      ],
      feedbackSources: ["Self-assessment", "Family feedback", "Wellness tracking"],
      support: ["Access to activities", "Time allowance", "Community participation"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0D14] via-[#0D1120] to-[#070912] text-slate-100">
      <AssignmentHero
        title="Personal Development Plan (PDP)"
        subtitle="Assignment 2"
        description="A structured overview of my development goals for the internship period."
      />
      <PageWrapper className="max-w-6xl space-y-16">
        <Section>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-base leading-relaxed text-slate-200">
              This Personal Development Plan outlines the goals I aim to achieve during my internship period, based on my current strengths, development areas, aspirations, and long-term professional ambitions at the beginning of my internship.
            </p>
          </div>
        </Section>

        <Section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Development Goals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setSelectedGoal(goal)}
                  className="w-full h-full group relative bg-white/5 border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-8 text-left cursor-pointer transition-all duration-300 hover:shadow-[0_18px_60px_rgba(15,23,42,0.5)] hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">{goal.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-4xl font-light text-slate-300 mb-2">{String(goal.id).padStart(2, "0")}</div>
                      <h3 className="text-lg font-bold text-white leading-tight mb-3">{goal.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">{goal.preview}</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
                </button>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-slate-200">
              The PDP reflects the personal and professional growth I want to develop during my internship. Each goal aligns with my long-term ambitions and addresses both strengths and development areas.
            </p>
          </div>
        </Section>
      </PageWrapper>

      {/* Goal Detail Modal */}
      {selectedGoal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedGoal(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-950/90 border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_20px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-3xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{selectedGoal.icon}</div>
                  <div>
                    <div className="text-sm opacity-90">Goal {selectedGoal.id}</div>
                    <h2 className="text-2xl font-bold">{selectedGoal.title}</h2>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGoal(null)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors flex-shrink-0"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* SMART Goal */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-xl">✓</span> SMART Goal
                </h3>
                <p className="text-base text-slate-200 leading-relaxed">{selectedGoal.smart}</p>
              </div>

              {/* Why This Matters */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-xl">💡</span> Why This Matters
                </h3>
                <p className="text-base text-slate-200 leading-relaxed">{selectedGoal.why}</p>
              </div>

              {/* Three Column Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Concrete Actions */}
                <div>
                  <h4 className="font-bold text-white mb-3 text-sm">Concrete Actions</h4>
                  <ul className="space-y-2">
                    {selectedGoal.actions.map((action, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                        <span className="text-slate-200">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Success Indicators */}
                <div>
                  <h4 className="font-bold text-white mb-3 text-sm">Current Indicators</h4>
                  <ul className="space-y-2">
                    {selectedGoal.indicators.map((indicator, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                        <span className="text-slate-200">{indicator}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Feedback Sources & Support */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-white mb-3 text-sm">Possible Feedback Sources</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGoal.feedbackSources.map((source, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-blue-500/20 text-blue-200 border border-blue-400/30 rounded-full text-xs font-medium"
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-white mb-3 text-sm">Support Needed</h4>
                    <ul className="space-y-2">
                      {selectedGoal.support.map((item, idx) => (
                        item && (
                          <li key={idx} className="flex gap-3 text-sm">
                            <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                            <span className="text-slate-200">{item}</span>
                          </li>
                        )
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedGoal(null)}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Close Details
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
   );
 }
