import Link from "next/link";
import type { LogbookWeek } from "../../data/logbook";

function excerpt(text: string, words = 26) {
  const parts = text.trim().split(/\s+/);
  const slice = parts.slice(0, words).join(" ");
  return parts.length > words ? slice + "…" : slice;
}

export default function TimelineItem({ week }: { week: LogbookWeek }) {
  const comingSoon = week.title === "Coming Soon";
  const bulletColor = comingSoon ? "bg-gray-300" : "bg-blue-500";
  const tagStyles = comingSoon
    ? "border border-black/10 bg-white text-gray-700"
    : "border border-blue-500/20 bg-blue-50 text-blue-700";

  return (
    <Link
      href={`/logbook/week/${week.id}`}
      className="group relative block rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      aria-label={`Navigate to week ${week.id}: ${comingSoon ? "Coming Soon" : week.title}`}
    >
      {/* Bullet */}
      <span
        className={`absolute left-[-26px] top-6 inline-block h-3 w-3 rounded-full ${bulletColor} ring-4 ring-white`}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-gray-500">Week {week.id}</div>
          <h3 className="mt-0.5 text-base font-semibold text-gray-900">{comingSoon ? "Coming Soon" : week.title}</h3>
        </div>
        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${tagStyles}`}>
          {comingSoon ? "Coming Soon" : "Completed"}
        </span>
      </div>
      {!comingSoon && (
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{excerpt(week.summary)}</p>
      )}
    </Link>
  );
}
