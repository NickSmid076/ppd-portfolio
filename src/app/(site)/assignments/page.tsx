import Link from "next/link";
import AssignmentPreviewCard from "@/components/ui/AssignmentPreviewCard";
import { assignments } from "@/data/assignments";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        {/* Header Section */}
        <div className="mb-20 text-center space-y-4">
          <p className="text-sm font-medium text-[#345cff] uppercase tracking-wider">
            PORTFOLIO OVERVIEW
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            PPD Assignments & Evidence
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive collection of my personal and professional development work throughout the internship
          </p>
        </div>

        {/* Assignment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {assignments.map((assignment) => (
            <AssignmentPreviewCard
              key={assignment.id}
              number={assignment.number}
              title={assignment.title}
              subtitle={assignment.subtitle}
              href={assignment.href}
            />
          ))}
        </div>

        {/* Explore More Section */}
        <div className="text-center space-y-6 pb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore More
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Beyond these PPD assignments, view my additional work, certifications, and blog for a complete picture of my development.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link href="/logbook">
              <Button variant="primary">
                Additional Work
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline">
                Weekly Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
