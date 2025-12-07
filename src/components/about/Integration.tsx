"use client";

import { motion } from "framer-motion";
import type { IDGDimension } from "@/data/idg";

interface IntegrationProps {
  quote: string;
  description: string;
  constellationSkills: { skill: string; dimension: IDGDimension }[];
}

export default function Integration({ quote, description, constellationSkills }: IntegrationProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-16 md:py-24"
    >
      {/* Enhanced soft background gradient - anchor the page */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-80 top-0 w-[700px] h-[700px] bg-gradient-to-br from-amber-400/20 to-orange-400/20 blur-[140px] rounded-full" />
        <div className="absolute -right-80 bottom-0 w-[700px] h-[700px] bg-gradient-to-bl from-cyan-400/20 to-teal-400/20 blur-[140px] rounded-full" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-[160px] rounded-full" />
      </div>

      <div className="space-y-16 md:space-y-20">
        {/* Heading & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
            Integration & Constellation
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            How the Dimensions Work Together
          </h2>
        </motion.div>

        {/* Quote & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_120px_rgba(0,0,0,0.8)] transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
            <div className="relative z-10 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl md:text-5xl">💡</span>
                  <p className="text-xl md:text-2xl text-white/90 italic leading-relaxed font-light">
                    "{quote}"
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-base md:text-lg leading-relaxed text-white/80">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Constellation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_120px_rgba(0,0,0,0.8)] transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">✨</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">IDG Constellation</h3>
                </div>
                <p className="text-white/70 text-sm tracking-wide">
                  23 interconnected skills across five dimensions
                </p>
              </div>
              
              {/* Skills grid with pill-shaped tags */}
              <div className="flex flex-wrap gap-2.5">
                {constellationSkills.map(({ skill, dimension }, idx) => (
                  <motion.div
                    key={`${skill}-${dimension.key}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: idx * 0.03,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative overflow-hidden rounded-full px-4 py-2.5 text-white text-sm font-medium shadow-[0_6px_24px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-default border border-white/20 hover:border-white/40"
                    style={{
                      background: `linear-gradient(135deg, ${dimension.gradient.from}40, ${dimension.gradient.to}40)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${dimension.gradient.from}60, ${dimension.gradient.to}60)`
                      }}
                    />
                    <span className="relative z-10">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
