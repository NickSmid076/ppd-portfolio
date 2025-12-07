interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Pill({ children, variant = "default" }: PillProps) {
  const variants = {
    default: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ring-gray-700/10 dark:ring-gray-400/20",
    accent: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 ring-blue-700/10 dark:ring-blue-400/30",
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 ring-inset smooth-transition hover:scale-105 ${variants[variant]}`}>
      {children}
    </span>
  );
}
