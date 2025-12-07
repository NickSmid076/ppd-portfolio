import Link from "next/link";

type Props = {
  title: string;
  preview: string;
  href: string;
};

export default function BlogPreviewCard({ title, preview, href }: Props) {
  return (
    <article className="glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{preview}</p>
      <div className="mt-4">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-500/20"
        >
          Read Full Blog Post →
        </Link>
      </div>
    </article>
  );
}
