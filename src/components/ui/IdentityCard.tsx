import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function IdentityCard({ title, children }: Props) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <div className="mt-2 text-sm text-slate-300">{children}</div>
    </div>
  );
}
