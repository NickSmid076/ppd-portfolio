"use client";
type Props = {
  file: string;
  title?: string;
  height?: number;
};

export default function PdfViewer({ file, title = "Document", height = 600 }: Props) {
  const handleDownload = async () => {
    try {
      await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file }),
      });
    } catch (err) {
      console.error("Download logging failed:", err);
    }
    window.open(file, "_blank");
  };

  return (
    <div className="w-full">
      {/* Title Bar */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-1 text-sm text-cyan-200 transition-colors hover:text-cyan-100"
        >
          Open in new tab ↗
        </button>
      </div>

      {/* PDF Embed */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <object
          data={file}
          type="application/pdf"
          className="w-full rounded-xl"
          style={{ height: `${height}px` }}
        >
          <p className="p-8 text-center text-slate-300">
            PDF preview is not available.{" "}
            <button
              onClick={handleDownload}
              className="text-cyan-200 underline hover:text-cyan-100"
            >
              Open in a new tab
            </button>
            .
          </p>
        </object>
      </div>
    </div>
  );
}
