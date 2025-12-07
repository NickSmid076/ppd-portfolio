"use client";

import Button from "./Button";

export interface GoalContent {
  title: string;
  smart: string;
  why: string;
  actions: string[];
  indicators: string[];
  feedbackSources: string[];
  support: string[];
}

interface GoalModalProps {
  open: boolean;
  onClose: () => void;
  content?: GoalContent;
}

export default function GoalModal({ open, onClose, content }: GoalModalProps) {
  if (!open || !content) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-[61] w-full max-w-2xl glass-card p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{content.title}</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 smooth-transition">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="mt-4 space-y-6 text-sm">
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">SMART Goal</div>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{content.smart}</p>
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">Why this matters</div>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{content.why}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Actions</div>
              <ul className="mt-1 list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                {content.actions.map((a, i) => (<li key={i}>{a}</li>))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Success indicators</div>
              <ul className="mt-1 list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                {content.indicators.map((a, i) => (<li key={i}>{a}</li>))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Feedback sources</div>
              <ul className="mt-1 list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                {content.feedbackSources.map((a, i) => (<li key={i}>{a}</li>))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Support needed</div>
              <ul className="mt-1 list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                {content.support.map((a, i) => (<li key={i}>{a}</li>))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}
