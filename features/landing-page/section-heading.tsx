import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="mb-12 flex flex-col gap-2"><span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">{eyebrow}</span><h2 className="text-[28px] font-bold leading-9 tracking-tight text-slate-950">{title}</h2>{children}</div>;
}
