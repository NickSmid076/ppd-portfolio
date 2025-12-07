"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabId = "personal" | "company" | "reflection";

export default function ResponsibleAIUsePage() {
  const [activeTab, setActiveTab] = useState<TabId>("personal");

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#050B16] to-[#050816] relative overflow-hidden">
      {/* Subtle star-like background noise */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.3),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(36,59,85,0.3),transparent_50%)]" />

      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
            Assignment 05
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Responsible AI Use
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            A critical reflection on how I used AI during my internship and how my company is navigating AI adoption.
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
              This assignment reflects on how I used AI tools—primarily ChatGPT—during my internship, and how my company approaches AI within its strategic and operational environment. It includes my personal learning, ethical considerations, moments where I misjudged AI reliance, and observations about organizational AI adoption. The goal is to understand not only how AI supported my work, but how I must develop as a professional to use AI responsibly and effectively.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-16"
          >
            <div className="inline-flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-lg">
              {[
                { id: "personal" as TabId, label: "Personal AI Use" },
                { id: "company" as TabId, label: "Company AI Use" },
                { id: "reflection" as TabId, label: "Reflection & Ethics" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 text-sm md:text-base">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "personal" && (
              <motion.div
                key="personal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Tools & Tasks */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
                  <div className="border-l-4 border-blue-500 p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Tools & Tasks Where I Used AI</h2>
                    <div className="space-y-4 text-base text-gray-300 leading-relaxed">
                      <p>
                        I used ChatGPT mainly as an assistance and analysis tool for the sustainability products I created and the revised website copy. It helped me identify which companies in the same sector had published sustainability reports so I could further analyze their work. I also used it to summarize large EU documents around EU taxonomy alignment and to understand what was most relevant for the company. In addition, I relied on it to critically analyze improvements in my findings and to support me in generating keywords for Google Scholar searches.
                      </p>
                      <p>
                        For the website copy, I was asked to use AI in line with the company's new marketing playbook. This showed me that AI can be an effective tool, but only when I constantly revised and refined my prompts—even after giving it a clear picture of the company and the goal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Insights About Accuracy */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
                  <div className="border-l-4 border-purple-500 p-8 md:p-12 space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">Insights About Accuracy & Limitations</h2>
                      <p className="text-base text-gray-300 leading-relaxed">
                        I used ChatGPT's temporary mode according to company guidelines, since it does not store company information. However, its accuracy in this niche market was sometimes questionable. It became more of a conversational partner that I had to train, rather than a simple source of truth.
                      </p>
                    </div>

                    {/* Red Warning Card */}
                    <div className="bg-red-950/40 border border-red-500/30 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex-shrink-0 w-6 h-6 text-red-400">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-red-300">Where I Misjudged AI</h3>
                      </div>
                      <p className="text-sm text-red-200/90 leading-relaxed">
                        Looking back, I see that I sometimes assumed AI's answers too quickly when analyzing findings. When AI pointed out weaknesses, I entered a tunnel vision and developed those ideas without re-evaluating them. This showed me that I wasn't truly letting AI assist me—I was overtrusting it. It taught me the importance of human oversight: the ability to analyze, make causal connections, and validate outputs, which AI cannot reliably do without strong prompting.
                      </p>
                    </div>

                    {/* Theory Spotlight */}
                    <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="text-3xl">💡</div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Theory Spotlight</h3>
                          <p className="text-sm text-blue-300">Responsible AI (Mollick, 2023)</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {[
                          { icon: "👁️", title: "Human Oversight", text: "Humans remain accountable for conclusions." },
                          { icon: "🔍", title: "Transparency", text: "You must explain why decisions were made." },
                          { icon: "🤝", title: "Augmentation, not automation", text: "AI should extend human skills, not fully replace them." },
                          { icon: "✓", title: "Critical Evaluation", text: "AI's output must be checked against reality and logic." }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">{item.icon}</span>
                              <div>
                                <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-300">{item.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="text-center italic text-blue-200 text-sm">
                        "My experience showed that I need to strengthen my analytical independence so AI supports me rather than directs me."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "company" && (
              <motion.div
                key="company"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* How Company Approaches AI */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
                  <div className="border-l-4 border-cyan-500 p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-white mb-6">How My Company Is Approaching AI</h2>
                    <p className="text-base text-gray-300 leading-relaxed">
                      The company is at a pivotal point in using AI. It wants to become the partner that helps clients navigate AI use, because many organizations are afraid of "messing up" with AI. There is an AI vision in development, but procedures are not fully formalized yet. Employees are already trained in AI-related cyber awareness, so the company can defend itself against cyber attacks, including those that use AI.
                    </p>
                  </div>
                </div>

                {/* Current AI Projects */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Current AI Projects & Applications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: "🔧",
                        title: "AI in Existing Tools",
                        text: "Several applications the company uses already include AI capabilities. However, they still need to outcompete built-in automations by integrating tools in a smarter way."
                      },
                      {
                        icon: "🏠",
                        title: "Mortgage AI Agent",
                        text: "The company is developing its own AI agent—a chatbot for people exploring mortgage options. Banks will be able to fill in their own logic so the bot can provide tailored support to clients about possible mortgage scenarios."
                      },
                      {
                        icon: "🎯",
                        title: "Strategic Potential & Transparency",
                        text: "AI will be embedded in future business potential, but transparency about how these systems are built and how data is stored remains the most important requirement."
                      }
                    ].map((project, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(0,200,255,0.2)] transition-all duration-300"
                      >
                        <div className="text-4xl mb-4">{project.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">{project.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "reflection" && (
              <motion.div
                key="reflection"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.3)]">
                  <div className="border-l-4 border-green-500 p-8 md:p-12 space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">Reflection & Ethical Guidelines</h2>
                      <p className="text-base text-gray-300 leading-relaxed mb-8">
                        There is not yet a formal, company-wide guideline around AI use, but employees are encouraged to use AI in temporary mode, think critically about the responses, and always be able to explain why certain decisions were made. The emerging principles align with responsible AI themes of human oversight, transparency, and ethical considerations.
                      </p>

                      <h3 className="text-xl font-bold text-white mb-4">What This Means for Me</h3>
                      <ul className="space-y-3 mb-8">
                        {[
                          "I remain responsible for the final analysis and conclusions.",
                          "I need to make my reasoning transparent, not just the AI's output.",
                          "I should use AI to augment my skills, not replace critical thinking.",
                          "I must keep strengthening the competencies that allow true human oversight."
                        ].map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-300">
                            <span className="text-green-400 font-bold flex-shrink-0">•</span>
                            <span className="text-base leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm">
                        <p className="text-base text-gray-200 leading-relaxed italic text-center">
                          Overall, this assignment made me realize that responsible AI use is less about the tools themselves and more about the professional I am becoming while using them.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <div className="h-32" />
    </main>
  );
}
