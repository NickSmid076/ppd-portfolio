interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantClasses = {
    default: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
    success: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
    warning: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
    error: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",
    info: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
