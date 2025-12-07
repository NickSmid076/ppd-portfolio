type Props = { title: string; body: string; insight?: string };

export default function TheorySpotlight({ title, body, insight }: Props) {
  return (
    <div className="p-6 rounded-2xl bg-white/70 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/40">
      <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500" aria-hidden="true" />
      <h3 className="text-base font-semibold text-gray-900">Theory Spotlight</h3>
      <p className="mt-1 text-sm font-medium text-gray-500">{title}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{body}</p>
      {insight && (
        <p className="mt-4 text-[15px] leading-relaxed text-gray-600 italic border-l-2 border-blue-400 pl-3">
          {insight}
        </p>
      )}
    </div>
  );
}
