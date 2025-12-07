import AssignmentHero from "../../../components/layout/AssignmentHero";
import Timeline from "../../../components/timeline/Timeline";
import { logbook } from "../../../data/logbook";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f9fafe] to-[#eef1f8]">
      <AssignmentHero
        title="Weekly Logbook"
        subtitle="Across 20 Weeks"
        description="A weekly reflection capturing personal growth, challenges, insights, and theory application."
        variant="light"
        showBack={false}
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left: Vertical timeline */}
          <div className="md:col-span-2">
            <Timeline weeks={logbook} />
          </div>
          {/* Right: Placeholder */}
          <div className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Select a Week</h3>
            <p className="mt-2 text-sm text-gray-600">
              Choose a week from the timeline to view its detailed reflection, STARR analysis, theory spotlight, and key insights.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
