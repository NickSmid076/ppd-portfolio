import Link from "next/link";

interface AssignmentCardProps {
  number: string;
  title: string;
  subtitle: string;
  href: string;
}

export default function AssignmentCard({ 
  number, 
  title, 
  subtitle, 
  href 
}: AssignmentCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative glass-card p-8 smooth-transition hover:shadow-2xl hover:scale-[1.03] hover:border-[#345cff]/50 border-2 border-transparent">
        {/* Large faded number in background */}
        <div className="absolute right-6 top-6 text-8xl font-bold text-gray-200/40 dark:text-gray-700/40 select-none group-hover:text-[#345cff]/20 smooth-transition">
          {number}
        </div>
        
        <div className="relative space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-[#345cff] smooth-transition">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          <div className="inline-flex items-center gap-2 text-sm font-medium text-[#345cff] group-hover:gap-3 smooth-transition">
            View Assignment
            <svg 
              className="h-4 w-4 smooth-transition" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 smooth-transition glow-subtle pointer-events-none" />
      </div>
    </Link>
  );
}
