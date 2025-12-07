import Link from "next/link";
import { notFound } from "next/navigation";
import { logbook } from "@/data/logbook";
import StarrCard from "@/components/ui/StarrCard";
import TheorySpotlight from "@/components/ui/TheorySpotlight";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id: idParam } = await params;
  const id = Number(idParam);
  const week = logbook.find((w) => w.id === id);
  if (!week) return notFound();

  if (week.title === "Coming Soon") {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white via-[#f9fafe] to-[#eef1f8]">
        <section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
          <div className="rounded-2xl border border-black/5 bg-white p-10 text-center shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900">Content Coming Soon</h2>
            <p className="mt-2 text-gray-600">Week {week.id} will be added later.</p>
            <div className="mt-6">
              <Link
                href="/logbook"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
              >
                ← Back to Logbook
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f9fafe] to-[#eef1f8]">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-white to-[#f7f8fd]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm text-gray-700 shadow-sm">
            Week {week.id}
          </span>
          <h1 className="mt-4 text-[40px] font-semibold tracking-tight text-gray-900">{week.title}</h1>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-gray-700">
            A focused weekly reflection with concrete actions and insights.
          </p>
        </div>
      </section>

      {/* Content Section - Two Column Layout */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Main Content (without STARR) */}
          <div className="space-y-8 lg:col-span-2">
            {/* Expectations */}
            {week.expectations && (
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">Expectations</h2>
                <div className="mt-3 p-6 rounded-2xl bg-white/70 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/40">
                  <p className="text-[15px] leading-relaxed text-gray-700">{week.expectations}</p>
                </div>
              </div>
            )}

            {/* Overview */}
            {week.overview && (
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">Overview</h2>
                <div className="mt-3 p-6 rounded-2xl bg-white/70 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/40">
                  <p className="text-[15px] leading-relaxed text-gray-700">{week.overview}</p>
                </div>
              </div>
            )}

            {/* Next Week */}
            {week.nextWeek && (
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">Next Week</h2>
                <div className="mt-3 p-6 rounded-2xl bg-white/70 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/40">
                  <p className="text-[15px] leading-relaxed text-gray-700">{week.nextWeek}</p>
                </div>
              </div>
            )}

            {/* Summary */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-gray-900">Summary</h2>
              <div className="mt-3 p-6 rounded-2xl bg-white/70 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/40">
                <p className="text-[15px] leading-relaxed text-gray-700">{week.summary}</p>
              </div>
            </div>

          </div>

          {/* Right Column - Theory Spotlight (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {week.theorySpotlight ? (
                <TheorySpotlight
                  title={week.theorySpotlight}
                  body="A concise model that informed decisions and reflection this week."
                />
              ) : (
                <div className="p-6 rounded-2xl bg-white/70 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/40">
                  <h3 className="text-sm font-medium text-gray-500">Theory Spotlight</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-700">
                    No specific theory was highlighted this week.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* STARR Framework - Full Width */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">STARR Framework</h2>
          <div className="mt-4">
            <StarrCard starr={week.starr} />
          </div>
        </div>

        {/* Week Navigation */}
        <div className="mt-12 md:mt-16 flex items-center justify-center gap-4">
          <Link
            href={id > 1 ? `/logbook/week/${id - 1}` : "/logbook"}
            className={`inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium ${
              id > 1
                ? "border-black/10 bg-white text-gray-800 hover:bg-gray-50 shadow-sm"
                : "pointer-events-none border-gray-100 bg-gray-50 text-gray-400"
            }`}
          >
            ← Previous Week
          </Link>
          <Link
            href={id < 13 ? `/logbook/week/${id + 1}` : "/logbook"}
            className={`inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium ${
              id < 13
                ? "border-black/10 bg-white text-gray-800 hover:bg-gray-50 shadow-sm"
                : "pointer-events-none border-gray-100 bg-gray-50 text-gray-400"
            }`}
          >
            Next Week →
          </Link>
        </div>
      </section>
    </main>
  );
}
