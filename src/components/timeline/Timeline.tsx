import type { LogbookWeek } from "../../data/logbook";
import TimelineItem from "./TimelineItem";

export default function Timeline({ weeks }: { weeks: LogbookWeek[] }) {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      <div className="pointer-events-none absolute left-3 top-0 h-full w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent" />
      <div className="flex flex-col gap-4">
        {weeks.map((w) => (
          <TimelineItem key={w.id} week={w} />)
        )}
      </div>
    </div>
  );
}
