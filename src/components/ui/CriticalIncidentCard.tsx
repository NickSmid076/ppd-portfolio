"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import TheoryCard from "./TheoryCard";

type Props = {
  title: string;
  preview: string;
  theory: string;
  children: ReactNode; // Full STARR + reflection content
};

export default function CriticalIncidentCard({ title, preview, theory, children }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <article className="glass group rounded-2xl p-5 transition-colors hover:bg-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`${open ? "Collapse" : "Expand"} details for ${title}`}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-slate-300">{preview}</p>
          </div>
          <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300">
            <svg
              className={`h-4 w-4 transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </button>

      <div className={`grid transition-all ${open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="collapsible overflow-hidden">
          <div className="space-y-5">
            <div className="h-px w-full bg-white/10" />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-3">
                {children}
              </div>
              <div className="space-y-3">
                <TheoryCard title={theory}>
                  This incident is interpreted through the selected lens, helping me slow down, examine assumptions, and translate learning into action.
                </TheoryCard>
                <p className="text-sm text-slate-300">
                  I translate this insight into concrete behavior changes and checkpoints for future situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
