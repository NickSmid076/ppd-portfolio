"use client";
import { useState } from "react";
import type { ReactNode } from "react";

export type TabItem = { label: string; content: ReactNode };

type Props = {
  items: TabItem[];
  initialIndex?: number;
};

export default function Tabs({ items, initialIndex = 0 }: Props) {
  const [index, setIndex] = useState(initialIndex);

  return (
    <div className="w-full" role="tablist">
      <div className="flex flex-wrap gap-2">
        {items.map((t, i) => {
          const active = i === index;
          return (
            <button
              key={t.label}
              onClick={() => setIndex(i)}
              aria-selected={active}
              role="tab"
              className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
                active
                  ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-200"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        <div className="glass rounded-2xl p-6" role="tabpanel">
          {items[index]?.content}
        </div>
      </div>
    </div>
  );
}
