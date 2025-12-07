"use client";

import Button from "./Button";

interface GoalCardProps {
  title: string;
  preview: string;
  onView: () => void;
}

export default function GoalCard({ title, preview, onView }: GoalCardProps) {
  return (
    <div className="glass-card p-6 space-y-3 hover:shadow-xl hover:scale-[1.02] smooth-transition">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{preview}</p>
      <div className="pt-2">
        <Button onClick={onView} size="sm">
          View Goal
        </Button>
      </div>
    </div>
  );
}
