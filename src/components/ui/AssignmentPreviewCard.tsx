import Link from "next/link";

interface AssignmentPreviewCardProps {
  number: string;
  title: string;
  subtitle: string;
  href: string;
}

export default function AssignmentPreviewCard({ 
  number, 
  title, 
  subtitle, 
  href 
}: AssignmentPreviewCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      {/* Large faded number in background */}
      <div className="absolute right-8 top-8 text-[120px] font-bold text-gray-100 select-none leading-none">
        {number}
      </div>
      
      <div className="relative space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-base text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#345cff] transition-all duration-300 group-hover:gap-3"
        >
          View Details
          <svg 
            className="h-4 w-4 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
