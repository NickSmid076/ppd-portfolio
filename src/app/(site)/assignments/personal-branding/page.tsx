"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import VimeoPlayer from "@/components/media/VimeoPlayer";

export default function PersonalBrandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#0A0F1A] to-[#050816] relative overflow-hidden">
      {/* Subtle starry noise texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.3),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(36,59,85,0.3),transparent_50%)]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-1.5 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium">
            Assignment 06
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Personal Branding
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            A warm, human introduction to my future professional identity.
          </p>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-12"
        >
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              This page showcases the personal side of my emerging professional identity. As a student pursuing a future at the intersection of finance, strategy, and technology, this branding page introduces who I am becoming, how I present myself, and where I see my career evolving. It includes my elevator pitch, a reflection on my personal development journey, and a link to my external website showcasing the work I am building to demonstrate my skills.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Elevator Pitch Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-sm text-purple-400 mb-4">Tone: Warm & Human</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: "0 30px 80px rgba(59, 130, 246, 0.3)" }}
            className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300"
          >
            <div className="p-4 md:p-6">
              <VimeoPlayer videoId="1144246835" title="Personal Branding Elevator Pitch" />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-6 text-gray-400"
          >
            Elevator Pitch (en Español) — Sobre mi futuro en finanzas, estrategia y tecnología.
          </motion.p>
        </div>
      </section>

      {/* Professional Identity Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Identity
            </h2>
            <p className="text-lg text-gray-400">
              Three pillars that define my emerging career direction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "👤",
                title: "Who I Am",
                text: "A hybrid profile: analytical, digitally skilled, and strategically oriented."
              },
              {
                icon: "🎯",
                title: "What I'm Working Toward",
                text: "A career blending finance, consulting, and tech—enabled through strong analytical thinking and AI literacy."
              },
              {
                icon: "💎",
                title: "What Defines Me",
                text: "Constant learning, cultural awareness, and the desire to grow into a financially and technologically competent strategist."
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -12, boxShadow: "0 25px 60px rgba(100, 100, 255, 0.25)" }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Link to External Portfolio */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ 
              scale: 1.01, 
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.5), 0 25px 60px rgba(0, 0, 0, 0.3)" 
            }}
            className="block backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-400/50 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Visit My Professional Portfolio Website</h3>
                  <p className="text-gray-400">Showcasing industry analyses, DCFs, small IT products, and future case work.</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Personal Development Blog Preview */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              <span>📝</span> Personal Blog
            </div>
            <h2 className="text-3xl font-bold text-white">From Lost to Less Lost</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Blog Excerpt */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="space-y-6 text-base text-gray-300 leading-relaxed">
                <p>
                  Hosted in Barcelona. What changed me was not the internship itself, but living on my own for the first time in another country.
                </p>
                <p>
                  Spain revealed a warmth and social closeness I had longed for. I learned the value of connection, work–life balance, and that sometimes you only grow by letting people meet your vulnerability.
                </p>
                <p>
                  When my initial career optimism clashed with reality, I rediscovered structure, ambition, and the part of me that hates chaos.
                </p>
                <p className="italic">
                  This journey made me realize that growth is rarely linear — you move from feeling lost, to a little less lost, as you carve your own path.
                </p>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 25px 60px rgba(147, 51, 234, 0.3)" }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:border-purple-400/50"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Read the full blog post</h3>
              <p className="text-gray-400 flex items-center gap-2">
                Continue Reading 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Statement Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glowing divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-48 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-16 rounded-full"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full scale-150" />
            
            <h2 className="relative text-3xl md:text-4xl font-light text-white leading-relaxed tracking-wide">
              My brand is a reflection of who I am becoming: a financially minded, tech-enabled strategist who values human connection, continuous learning, and balanced ambition.
            </h2>
          </motion.div>

          {/* Final spacing */}
          <div className="h-32" />
        </div>
      </section>
    </main>
  );
}
