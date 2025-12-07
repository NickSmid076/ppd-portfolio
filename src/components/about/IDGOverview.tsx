"use client";

import { motion } from "framer-motion";
import type { IDGDimension } from "@/data/idg";

interface Props {
  dimensions: IDGDimension[];
}

export default function IDGOverview({ dimensions }: Props) {
  return (
    <section className="relative py-16 md:py-20">
      {/* Enhanced background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-60 top-20 w-[600px] h-[600px] bg-gradient-to-br from-pink-400/15 to-purple-400/15 blur-[140px] rounded-full" />
        <div className="absolute -right-60 bottom-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-400/15 to-blue-400/15 blur-[140px] rounded-full" />
      </div>

      <div className="space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60 mb-4">Framework Overview</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text">
            Five Dimensions of Inner Development
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-white/80 max-w-3xl mx-auto">
            A scientific, global framework that develops inner capacities for outer change. These five dimensions group 23 skills that strengthen personal leadership and enable sustainable development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6"
        >
          {dimensions.map((dim, index) => (
            <motion.div
              key={dim.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 backdrop-blur-xl p-6 md:p-7 transition-all duration-500 hover:shadow-[0_20px_70px_rgba(0,0,0,0.6)] cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${dim.gradient.from}15, ${dim.gradient.to}15)`,
              }}
            >
              {/* Gradient overlay that brightens on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${dim.gradient.from}30, ${dim.gradient.to}30)`
                }}
              />
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white/40 via-transparent to-transparent" />

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl md:text-5xl transform group-hover:scale-110 transition-transform duration-500">
                    {dim.icon}
                  </span>
                  <span className="text-xs font-bold text-white/40 group-hover:text-white/60 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                    {dim.name}
                  </h3>
                  <p className="text-xs md:text-sm text-white/75 leading-relaxed line-clamp-3 group-hover:text-white/90 transition-colors">
                    {dim.tagline}
                  </p>
                </div>

                {/* Skills preview */}
                <div className="pt-3 space-y-2 border-t border-white/10">
                  {dim.skills.slice(0, 3).map((skill, idx) => (
                    <div key={skill} className="flex items-start gap-2">
                      <span className="text-white/50 text-xs mt-0.5">•</span>
                      <span className="text-xs text-white/70 group-hover:text-white/90 transition-colors leading-tight">
                        {skill}
                      </span>
                    </div>
                  ))}
                  {dim.skills.length > 3 && (
                    <p className="text-xs text-white/50 italic pl-4">
                      +{dim.skills.length - 3} more
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, ${dim.gradient.from}, ${dim.gradient.to})`
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
