import Link from "next/link";
import type { ReactNode } from "react";

type AssignmentHeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  actions?: ReactNode;
  variant?: "dark" | "light";
  showBack?: boolean;
};

export default function AssignmentHero({ title, subtitle, description, actions, variant = "dark", showBack = true }: AssignmentHeroProps) {
  const isLight = variant === "light";
  return (
    <section className={
      isLight
        ? "relative overflow-hidden bg-gradient-to-b from-white via-[#f9fafe] to-[#eef1f8]"
        : "relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950"
    }>
      {!isLight && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.12),transparent_70%)]" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {showBack && (
          <Link
            href="/assignments"
            className={isLight ? "mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900" : "mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"}
            aria-label="Navigate back to assignments overview"
          >
            <svg className={isLight ? "h-4 w-4 text-gray-600" : "h-4 w-4"} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Assignments
          </Link>
        )}

        <div className="max-w-4xl">
          {subtitle && (
            <div className="mb-4">
              <span className={isLight ? "inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm" : "inline-flex items-center rounded-full bg-cyan-500/15 px-4 py-1.5 text-sm font-medium text-cyan-200 ring-1 ring-inset ring-cyan-400/30"}>
                {subtitle}
              </span>
            </div>
          )}

          <h1 className={isLight ? "text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl" : "text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"}>{title}</h1>

          {description && (
            <p className={isLight ? "mt-6 text-lg leading-8 text-gray-600 sm:text-xl" : "mt-6 text-lg leading-8 text-gray-300 sm:text-xl"}>{description}</p>
          )}

          {actions ? <div className="mt-8">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}
