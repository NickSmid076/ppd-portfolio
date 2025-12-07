"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface RoadmapStep {
  id: number;
  title: string;
  text: string;
}

interface FutureRoadmapProps {
  steps: RoadmapStep[];
}

const icons = ["💼", "💡", "👥", "❤️", "🌍", "📊", "🎯"];

export default function FutureRoadmap({ steps }: FutureRoadmapProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [highlightedPoint, setHighlightedPoint] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  // Smooth winding curved road path
  const roadPath = `
    M 120 100
    C 250 80, 350 160, 480 140
    S 720 100, 850 180
    S 1050 240, 1180 200
  `;

  // Calculate positions and rotations along the curve
  const getPathPoint = (index: number) => {
    const points = [
      { x: 120, y: 100, rotate: -5, side: "bottom" },
      { x: 365, y: 150, rotate: 8, side: "top" },
      { x: 590, y: 120, rotate: -3, side: "bottom" },
      { x: 780, y: 160, rotate: 6, side: "top" },
      { x: 930, y: 210, rotate: 4, side: "bottom" },
      { x: 1080, y: 220, rotate: -2, side: "top" },
      { x: 1180, y: 200, rotate: 0, side: "bottom" },
    ];
    return points[index] || points[0];
  };

  const handleCardClick = (stepId: number) => {
    setExpandedId(expandedId === stepId ? null : stepId);
    setHighlightedPoint(stepId);
    setTimeout(() => setHighlightedPoint(null), 2000);
  };

  return (
    <div ref={containerRef} className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-200 via-blue-200 to-cyan-200 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Cards */}
          <div className="space-y-16 pl-20 md:pl-28 pt-8 pb-16">
            {steps.map((step, index) => {
              const isExpanded = expandedId === step.id;
              const isActive = activeId === step.id;

              return (
                <motion.div
                  key={step.id}
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[4.5rem] md:-left-20 top-8">
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-purple-500 to-indigo-600 scale-110"
                          : "bg-white border-4 border-purple-300"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    >
                      <span className="text-sm font-bold text-white">{step.id}</span>
                    </motion.div>
                    
                    {/* Pulsing glow when highlighted */}
                    {highlightedPoint === step.id && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-purple-400"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <motion.div
                    className={`group relative bg-white rounded-3xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-6 md:p-8 cursor-pointer transition-all duration-500 ${
                      isActive ? "ring-4 ring-purple-400/30 ring-offset-4" : ""
                    }`}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                      boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                    }}
                    onClick={() => handleCardClick(step.id)}
                    onMouseEnter={() => setActiveId(step.id)}
                    onMouseLeave={() => setActiveId(null)}
                  >
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-50/60 via-blue-50/40 to-cyan-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative flex items-start gap-4 md:gap-6">
                      {/* Icon */}
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ rotate: [0, -8, 8, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 flex items-center justify-center text-3xl md:text-4xl shadow-lg">
                          {icons[index]}
                        </div>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                          {step.title}
                        </h4>
                        <p
                          className={`text-sm md:text-[15px] text-gray-600 leading-relaxed ${
                            isExpanded ? "" : "line-clamp-2"
                          }`}
                        >
                          {step.text}
                        </p>
                        
                        {/* Expand indicator */}
                        {!isExpanded && (
                          <div className="mt-3 text-xs text-purple-500 font-medium">
                            Click to read more →
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 pointer-events-none" />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* 2030 Destination */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              {/* Final timeline dot */}
              <div className="absolute -left-[4.5rem] md:-left-20 top-1/2 -translate-y-1/2">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 flex items-center justify-center shadow-[0_6px_20px_rgba(147,51,234,0.4)]"
                  whileHover={{ scale: 1.15, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-2xl">🎓</span>
                </motion.div>
              </div>

              {/* Destination card */}
              <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(147,51,234,0.3)] border-4 border-white">
                <div className="flex items-center gap-6">
                  <div className="text-6xl md:text-7xl">🎓</div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                      2030
                    </div>
                    <div className="text-base md:text-lg text-gray-700 font-semibold">
                      My Future Self
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
