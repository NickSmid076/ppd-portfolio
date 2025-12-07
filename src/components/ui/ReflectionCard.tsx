interface ReflectionCardProps {
  children: React.ReactNode;
  title?: string;
}

export default function ReflectionCard({ children, title = "What This Quadrant Reveals About Me" }: ReflectionCardProps) {
  return (
    <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-500">
      <h4 className="text-sm font-semibold text-blue-900 uppercase tracking-wider mb-3">{title}</h4>
      <p className="text-gray-700 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
