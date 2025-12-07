export default function CoreQuadrantTheoryCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">Theoretical Foundation</h3>
          <p className="mt-1 text-sm text-[#345cff] font-medium">Ofman Core Quadrant</p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">
        The Core Quadrant (Ofman, 1992) is a reflective tool that maps the interrelationship dimension of a person's behavior:
      </p>

      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-green-500 mt-1.5"></div>
          <div>
            <span className="font-semibold text-gray-900">Core Qualities:</span>
            <span className="ml-2 text-gray-600">Unique personal strengths that drives the success of task and relationship.</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-1.5"></div>
          <div>
            <span className="font-semibold text-gray-900">Pitfalls:</span>
            <span className="ml-2 text-gray-600">The excess or inappropriate use of a strength that undermines its essence.</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-yellow-500 mt-1.5"></div>
          <div>
            <span className="font-semibold text-gray-900">Challenges:</span>
            <span className="ml-2 text-gray-600">The positive opposite of my pitfall that is needed to balance this dynamic.</span>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-1.5"></div>
          <div>
            <span className="font-semibold text-gray-900">Allergies:</span>
            <span className="ml-2 text-gray-600">The negative opposite of my strength that I often find difficult to accept in others.</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 pt-2 border-t border-gray-100">
        My learnings are built heavily upon understanding these relationships in the context of my workplace. Most use cases involved balancing overly strict work and self-development.
      </p>
    </div>
  );
}
