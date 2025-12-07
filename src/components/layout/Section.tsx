import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  withSeparator?: boolean;
}

export default function Section({ children, className = "", withSeparator = false }: SectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      {children}
      {withSeparator && (
        <div className="my-8 border-t border-black/[0.08] dark:border-white/15" />
      )}
    </section>
  );
}
