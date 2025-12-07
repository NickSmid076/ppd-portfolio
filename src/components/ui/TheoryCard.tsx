import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function TheoryCard({ title, children }: Props) {
  return (
    <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-cyan-100">
      <div className="mb-2 text-sm font-semibold tracking-wide">Theory Spotlight — {title}</div>
      <div className="text-sm text-cyan-50/90">{children}</div>
    </div>
  );
}
