interface TimelineBlock {
  weeks: string;
  title: string;
  description?: string;
}

interface TimelinePreviewProps {
  blocks: TimelineBlock[];
}

export default function TimelinePreview({ blocks }: TimelinePreviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blocks.map((block, index) => (
        <div 
          key={index}
          className="glass-card p-6 space-y-3 smooth-transition hover:shadow-xl hover:scale-[1.02]"
        >
          <div className="text-sm font-semibold text-[#345cff] dark:text-blue-400 uppercase tracking-wide">
            {block.weeks}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {block.title}
          </h3>
          {block.description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {block.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
