"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { assignments } from "@/data/assignments";

export default function HomePage() {
  const stats = [
    { value: "13+", label: "Weeks Completed" },
    { value: "100%", label: "Assignment Delivery" },
    { value: "7+", label: "Key Competencies" },
    { value: "1", label: "Cohesive Portfolio" },
  ];

  const competencies = [
    "Planning",
    "Communication",
    "Growth",
    "Strategy",
    "Professionalism",
    "Internationalization",
    "Ethical Awareness",
  ];

  const journey = [
    { weeks: "Weeks 1–3", title: "Finding My Footing", color: "blue", text: "Adapting to the environment and mapping expectations." },
    { weeks: "Weeks 4–6", title: "Recognition & Resilience", color: "pink", text: "Delivering value, handling feedback, and iterating with intent." },
    { weeks: "Weeks 7–10", title: "Communication & Authenticity", color: "green", text: "Building trust and communicating with clarity and care." },
  ];

  const pastelBlobs = [
    { bg: "rgba(99, 102, 241, 0.1)", icon: "rgb(99, 102, 241)" }, // Blue for Self-Scan
    { bg: "rgba(147, 51, 234, 0.1)", icon: "rgb(147, 51, 234)" }, // Purple for PDP
    { bg: "rgba(16, 185, 129, 0.1)", icon: "rgb(16, 185, 129)" }, // Green for Midterm
    { bg: "rgba(245, 158, 11, 0.1)", icon: "rgb(245, 158, 11)" }, // Orange for Critical
    { bg: "rgba(6, 182, 212, 0.1)", icon: "rgb(6, 182, 212)" }, // Cyan for AI
    { bg: "rgba(236, 72, 153, 0.1)", icon: "rgb(236, 72, 153)" }, // Pink for Branding
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f8f7ff] to-white">
      {/* Subtle background blobs */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-purple-200 blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200 blur-[120px] opacity-40 pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/40 to-purple-200/40 blur-[120px]" />
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-200/30 to-pink-200/30 blur-[100px]" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full relative z-10">
          {/* LEFT COLUMN - Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-xs font-bold text-blue-700 tracking-widest">
                INTERNATIONAL BUSINESS INTERN
              </span>
              <div>
                <h1 className="text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight mb-4">
                  Personal & Professional Development <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                Documenting my journey of growth, learning, and impact through strategic business innovation and professional development
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              {/* Primary Button */}
              <Link
                href="#assignments"
                className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center text-lg"
              >
                Explore My Portfolio ↓
              </Link>

              {/* IDG Button with Gradient Border */}
              <div className="p-[3px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                <Link
                  href="/about"
                  className="px-8 py-4 rounded-full font-bold text-gray-900 bg-white text-lg transition-all duration-300 hover:bg-gray-50 inline-flex items-center justify-center w-full"
                >
                  My Inner Development Goals →
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Profile Image with Enhanced Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center md:justify-end animate-float"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Outer animated glow halo */}
              <div className="absolute inset-[-40px] rounded-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 blur-[40px] opacity-60 animate-spin-slow" />
              
              {/* Middle ring */}
              <div className="absolute inset-[-20px] rounded-full border-2 border-white/50 opacity-40" />

              {/* Profile Image Container with prominent ring */}
              <div className="relative z-10 rounded-full overflow-hidden w-full h-full shadow-2xl ring-8 ring-white/70 bg-gradient-to-br from-blue-50 to-purple-50">
                <Image
                  src="/images/profile.jpg"
                  alt="Nick Smid - International Business Intern"
                  fill
                  className="object-cover object-center scale-110"
                  priority
                  sizes="420px"
                />
              </div>

              {/* Decorative floating elements */}
              <motion.div
                className="absolute -right-12 top-20 w-20 h-20 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 opacity-70"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -left-8 bottom-32 w-16 h-16 rounded-lg bg-gradient-to-br from-purple-400 to-purple-500 opacity-60"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-36">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-black/5 bg-white p-10 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="text-4xl font-semibold text-gray-900">{s.value}</div>
              <div className="mt-2 text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ASSIGNMENTS GRID */}
      <section id="assignments" className="py-36">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">PPD Assignments & Evidence</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            White cards with pastel accents and large watermark numbers.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {assignments.map((a, i) => (
            <Link
              key={a.id}
              href={a.href}
              className="group relative block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              {/* Colored circular icon */}
              <div
                className="mb-4 h-12 w-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: pastelBlobs[i].bg }}
              >
                <div
                  className="h-6 w-6 rounded-md"
                  style={{ backgroundColor: pastelBlobs[i].icon }}
                />
              </div>
              {/* Content */}
              <div>
                <span
                  className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium"
                  style={{ backgroundColor: pastelBlobs[i].bg, color: pastelBlobs[i].icon }}
                >
                  {a.number}
                </span>
                <h3 className="mt-3 text-base font-semibold text-gray-900">{a.title}</h3>
                <p className="mt-1.5 text-sm text-gray-600 line-clamp-2">{a.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-5xl px-6 text-center">
          <Link
            href="/assignments"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View All Assignments →
          </Link>
        </div>
      </section>

      {/* CORE COMPETENCIES */}
      <section className="py-36">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="text-xs tracking-wider text-gray-500">CORE COMPETENCIES</div>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">Skills & Capabilities</h2>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-4">
            {competencies.map((c) => (
              <div
                key={c}
                className="rounded-full border border-black/5 bg-white px-6 py-3 text-sm text-gray-700 shadow-sm"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIP JOURNEY TIMELINE */}
      <section className="py-36">
        <div className="mx-auto max-w-5xl px-6 text-center mb-16">
          <div className="text-xs tracking-wider text-blue-600 font-medium mb-2">MY JOURNEY</div>
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">My Internship Journey</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600">From feeling lost to finding clarity—13 weeks of growth, challenges, and transformation documented in my logbook</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 opacity-50" />
          <div className="relative space-y-20 max-w-4xl mx-auto px-6">
          {/* ITEM 1 - Weeks 1-3 (Left Card, Blue) */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="flex justify-end md:pr-12">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 max-w-sm text-right">
                <div className="mb-2 inline-flex items-center rounded-md bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                  📘 Weeks 1-3
                </div>
                <h3 className="text-base font-semibold text-gray-900">Finding My Footing</h3>
                <p className="mt-2 text-sm text-gray-600">Stepping into the unknown, facing first initiatives with uncertainty, and learning to navigate uncertainty</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
            </div>
          </div>

          {/* ITEM 2 - Weeks 4-5 (Right Card, Purple) */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="flex justify-center md:justify-end order-1 md:order-none">
            </div>
            <div className="flex justify-start md:pl-12 order-2">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 max-w-sm">
                <div className="mb-2 inline-flex items-center rounded-md bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                  📊 Weeks 4-5
                </div>
                <h3 className="text-base font-semibold text-gray-900">Recognition & Resilience</h3>
                <p className="mt-2 text-sm text-gray-600">Earning credibility through the EcoVadis contribution, while balancing a family emergency and delivering my first company-wide speech</p>
              </div>
            </div>
          </div>

          {/* ITEM 3 - Weeks 6-8 (Left Card, Orange) */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="flex justify-end md:pr-12">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 max-w-sm text-right">
                <div className="mb-2 inline-flex items-center rounded-md bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                  ⚖️ Weeks 6-8
                </div>
                <h3 className="text-base font-semibold text-gray-900">Balancing & Understanding</h3>
                <p className="mt-2 text-sm text-gray-600">Learning to communicate boundaries, diving into onboarding research, and discovering the complexity of organizational change resistance</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
            </div>
          </div>

          {/* ITEM 4 - Weeks 9-10 (Right Card, Teal) */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="flex justify-center md:justify-end order-1 md:order-none">
            </div>
            <div className="flex justify-start md:pl-12 order-2">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 max-w-sm">
                <div className="mb-2 inline-flex items-center rounded-md bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">
                  🎯 Weeks 9-10
                </div>
                <h3 className="text-base font-semibold text-gray-900">Breaking & Rebuilding</h3>
                <p className="mt-2 text-sm text-gray-600">Confronting the AI integrity lesson and reaching my breaking point emotionally—then choosing to ask for help and rebuild</p>
              </div>
            </div>
          </div>

          {/* ITEM 5 - Weeks 11-13 (Left Card, Pink) */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="flex justify-end md:pr-12">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 max-w-sm text-right">
                <div className="mb-2 inline-flex items-center rounded-md bg-pink-50 px-2.5 py-0.5 text-xs font-medium text-pink-700">
                  💬 Weeks 11-13
                </div>
                <h3 className="text-base font-semibold text-gray-900">Communication & Authenticity</h3>
                <p className="mt-2 text-sm text-gray-600">Relearning proactive communication, facing the irregularity wake-up call, and embracing authenticity over perfection under pressure</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
            </div>
          </div>

          {/* Journey in Progress Badge */}
          <div className="flex justify-center pt-12">
            <Link
              href="/logbook"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:shadow-xl hover:scale-105"
            >
              <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              Follow My Journey
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-36">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-[#f5f8ff] to-[#f7f4ff] p-20 text-center shadow-xl">
            <h2 className="text-3xl font-semibold text-gray-900">Ready to Explore More?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Dive into assignments, reflections, and artifacts that show clear growth and impact.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/assignments"
                className="rounded-full bg-black px-6 py-3 text-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition hover:opacity-90"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-gray-800 shadow-sm transition hover:bg-gray-50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
