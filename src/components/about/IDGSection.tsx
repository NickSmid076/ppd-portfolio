"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { IDGDimension } from "@/data/idg";

interface Narrative {
  title: string;
  body: string;
  link: string;
  linkText: string;
}

interface Props {
  dimension: IDGDimension;
  narrative: Narrative;
  index: number;
}

export default function IDGSection({ dimension, narrative, index }: Props) {
  return (
    <motion.section
      id={`section-${dimension.key}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-16 md:py-20"
    >
      {/* Large colored gradient blobs positioned behind the card */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -left-80 top-1/4 w-[600px] h-[600px] blur-[120px] rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, ${dimension.gradient.from}, ${dimension.gradient.to})`
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute -right-80 bottom-1/4 w-[700px] h-[700px] blur-[140px] rounded-full opacity-50"
          style={{
            background: `radial-gradient(circle, ${dimension.gradient.to}, ${dimension.gradient.from})`
          }}
        />
      </div>

      <div className="space-y-10 md:space-y-12">
        {/* Heading Row */}
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60 mb-2">
                Dimension {index + 1} of 5
              </p>
              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-6xl">{dimension.icon}</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  {narrative.title}
                </h2>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content Card - Full-width glass card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.7)] hover:shadow-[0_40px_120px_rgba(0,0,0,0.9)] transition-all duration-700 group"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-70" />
          
          {/* Accent gradient border on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl"
            style={{
              background: `linear-gradient(135deg, ${dimension.gradient.from}, ${dimension.gradient.to})`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              padding: '2px'
            }}
          />

          <div className="relative z-10 space-y-8">
            {/* Body paragraphs */}
            <div className="space-y-6 max-w-5xl">
              {narrative.body.split('\n\n').map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-base md:text-lg leading-relaxed text-white/85"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Skills Display */}
            <div className="flex flex-wrap gap-3 pt-8 border-t border-white/10">
              {dimension.skills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-sm tracking-wide bg-white/10 border border-white/15 text-white/80 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/15 hover:border-white/25 transition-all duration-300 cursor-default"
                  style={{
                    boxShadow: `0 4px 20px ${dimension.gradient.from}20`
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Navigation Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4"
        >
          <Link
            href={narrative.link}
            className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:translate-y-[-3px]"
            style={{
              boxShadow: `0 10px 40px ${dimension.gradient.from}30`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 20px 60px ${dimension.gradient.from}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 10px 40px ${dimension.gradient.from}30`;
            }}
          >
            <span>{narrative.linkText}</span>
            <motion.span
              className="inline-block text-lg"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
