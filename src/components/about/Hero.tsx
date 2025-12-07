"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Enhanced background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-60 top-20 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/20 to-pink-400/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute -right-60 top-40 w-[500px] h-[500px] bg-gradient-to-bl from-purple-400/20 to-blue-400/20 blur-[120px] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
        {/* LEFT COLUMN - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 order-2 lg:order-1"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-5xl md:text-6xl">🧭</span>
              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60 mb-2">
                  Journey & Inner Development
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                  A Story of Growth, Identity & Becoming Myself
                </h1>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_90px_rgba(0,0,0,0.8)] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
              <p className="relative z-10 text-base md:text-lg leading-relaxed text-white/85">
                A journey through uncertainty, identity, and personal growth — guided by the Inner Development Goals framework. Five dimensions — Being, Thinking, Relating, Collaborating, Acting — map 23 skills that connect inner transformation to outer impact.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent" />
              <p className="text-sm text-white/70">
                <span className="font-semibold text-white">International Business Intern</span> · Strategically minded, human-centered growth
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-start"
          >
            <div className="inline-flex items-center gap-2 text-sm text-white/70 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/15 transition-all duration-300">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
              <span>Scroll to explore</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - Profile Image with Premium Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            {/* Animated gradient ring behind image */}
            <motion.div
              className="absolute inset-[-12px] rounded-full opacity-80"
              style={{
                background: 'conic-gradient(from 0deg, #8b5cf6, #ec4899, #f97316, #22d3ee, #8b5cf6)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Outer glow effect */}
            <div className="absolute inset-[-40px] rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 blur-[60px] opacity-60" />

            {/* Profile image container with float animation */}
            <motion.div
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.9)] bg-gradient-to-br from-blue-50 to-purple-50"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Nick Smid - International Business Intern"
                fill
                className="object-cover object-center scale-110"
                priority
                sizes="(max-width: 768px) 288px, 320px"
              />
            </motion.div>

            {/* Decorative floating elements */}
            <motion.div
              className="absolute -right-6 top-16 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 opacity-80 blur-sm"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -left-6 bottom-20 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-teal-500 opacity-70 blur-sm"
              animate={{ 
                y: [0, 18, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
