import { ReactNode } from "react";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export default function Hero({ badge, title, subtitle, children }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.08),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/30">
                {badge}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            {subtitle}
          </p>
          
          {children && (
            <div className="mt-10 flex items-center justify-center gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
