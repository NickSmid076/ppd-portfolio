interface StatCardProps {
  metric: string;
  label: string;
  icon?: string;
}

export default function StatCard({ metric, label, icon }: StatCardProps) {
  return (
    <div className="glass-card p-6 text-center smooth-transition hover:shadow-xl">
      {icon && (
        <div className="mb-3 flex justify-center text-2xl">
          {icon}
        </div>
      )}
      <div className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
        {metric}
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
}
