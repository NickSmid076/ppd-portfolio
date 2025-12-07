"use client";

import { useState, useEffect, useRef } from "react";

type Quadrant = {
  coreQuality: string;
  pitfall: string;
  challenge: string;
  allergy: string;
};

export interface QuadrantSlide {
  title: string;
  items: Quadrant;
}

interface QuadrantSliderProps {
  slides: QuadrantSlide[];
}

export default function QuadrantSlider({ slides }: QuadrantSliderProps) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  // Drag/swipe handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
    const delta = Math.abs(e.clientX - startX);
    setOpacity(Math.max(0.6, 1 - delta / 300));
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = e.clientX - startX;
    const threshold = 75;

    if (delta > threshold) {
      prev();
    } else if (delta < -threshold) {
      next();
    }
    
    setOpacity(1);
    setCurrentX(0);
    setStartX(0);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setOpacity(1);
    setCurrentX(0);
    setStartX(0);
  };

  const dragOffset = isDragging ? (currentX - startX) * 0.3 : 0;

  return (
    <div 
      className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 overflow-hidden"
      role="region"
      aria-label="Ofman Quadrant Carousel"
    >
      {/* Gradient edges for scroll hint */}
      <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-blue-50 via-transparent to-transparent opacity-60 pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-purple-50 via-transparent to-transparent opacity-60 pointer-events-none z-10"></div>

      <div className="text-center mb-8">
        <h4 className="text-3xl font-bold text-gray-900 transition-all duration-300" style={{ opacity }}>
          {slides[index]?.title}
        </h4>
      </div>

      <div 
        ref={containerRef}
        className="w-full max-w-4xl mx-auto cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        style={{
          transform: `translateX(${dragOffset}px)`,
          transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease',
          opacity: opacity,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-xl p-6 md:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:scale-[1.015] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300 ease">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Core Quality</div>
            </div>
            <div className="text-base font-medium text-gray-900 leading-relaxed max-w-prose">
              {slides[index]?.items.coreQuality}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:scale-[1.015] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300 ease">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Pitfall</div>
            </div>
            <div className="text-base font-medium text-gray-900 leading-relaxed max-w-prose">
              {slides[index]?.items.pitfall}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:scale-[1.015] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300 ease">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Challenge</div>
            </div>
            <div className="text-base font-medium text-gray-900 leading-relaxed max-w-prose">
              {slides[index]?.items.challenge}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:scale-[1.015] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300 ease">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Allergy</div>
            </div>
            <div className="text-base font-medium text-gray-900 leading-relaxed max-w-prose">
              {slides[index]?.items.allergy}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
        <button
          onClick={prev}
          className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-[#345cff]"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-[#345cff]"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ease touch-manipulation ${
              i === index 
                ? "w-10 h-2.5 bg-[#345cff]" 
                : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 opacity-60 hover:opacity-100"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}
