import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
      <div className="relative text-center">
        <h1 className="text-9xl font-bold text-cyan-400/20">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Page Not Found</h2>
        <p className="mt-3 text-lg text-slate-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-500/20"
          >
            ← Back to Home
          </Link>
          <Link
            href="/assignments"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
          >
            View Assignments
          </Link>
        </div>
      </div>
    </main>
  );
}
