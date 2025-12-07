type Starr = {
  situation: string;
  task: string;
  action: string;
  result: string;
  reflection: string;
};

export default function StarrCard({ starr }: { starr: Starr }) {
  const items = [
    { k: "Situation", v: starr.situation },
    { k: "Task", v: starr.task },
    { k: "Action", v: starr.action },
    { k: "Result", v: starr.result },
    { k: "Reflection", v: starr.reflection },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 items-stretch">
      {items.map((it) => (
        <div
          key={it.k}
          className="p-6 rounded-2xl bg-white/70 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/40 flex flex-col h-full"
        >
          <div className="text-sm font-semibold text-gray-900 mb-3">{it.k}</div>
          <p className="text-[15px] leading-relaxed text-gray-700 flex-1">{it.v || "—"}</p>
        </div>
      ))}
    </div>
  );
}
