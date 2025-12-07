interface FeedbackGridProps {
  mentor: string;
  community: string;
  fitReflection: string;
}

export default function FeedbackGrid({ mentor, community, fitReflection }: FeedbackGridProps) {
  const Card = ({ title, text }: { title: string; text: string }) => (
    <div className="glass-card p-6 space-y-2">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{text}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Mentor Feedback" text={mentor} />
      <Card title="Learning Community Feedback" text={community} />
      <Card title="Reflection on Fit" text={fitReflection} />
    </div>
  );
}
