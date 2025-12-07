import { ReactNode } from "react";

interface CTASectionProps {
  title: string;
  children: ReactNode;
}

export default function CTASection({ title, children }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 dark:from-black dark:via-gray-900 dark:to-blue-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_70%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {children}
        </div>
      </div>
    </section>
  );
}
