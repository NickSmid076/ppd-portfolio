import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "bordered";
}

export default function Card({ children, className = "", variant = "default" }: CardProps) {
  const variantClasses = {
    default: "bg-white dark:bg-gray-800 shadow-md",
    glass: "glass-card",
    bordered: "border border-gray-200 dark:border-gray-700",
  };

  return (
    <div className={`rounded-lg p-6 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
