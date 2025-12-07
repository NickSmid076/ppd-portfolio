import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <main className={`mx-auto w-full max-w-5xl px-6 py-12 lg:px-8 lg:py-16 ${className}`}>
      {children}
    </main>
  );
}
