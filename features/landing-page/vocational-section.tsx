import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { trades } from "./data";
import { SectionHeading } from "./section-heading";

export function VocationalSection() {
  return <section className="w-full bg-[var(--surface-muted)] py-16 lg:py-24"><div className="mx-auto max-w-[1200px] px-6"><SectionHeading eyebrow="Livelihood Pathways" title="Vocational Apprenticeship in Action"><p className="mt-3 max-w-2xl text-slate-600">Practical mastery turns reliance into independence. We provide tangible technical training that equips young Ugandans with competitive, tradeable skills.</p></SectionHeading><div className="grid gap-6 md:grid-cols-3">{trades.map(([title, label, location, badge, image, text]) => <Card key={title} className="flex flex-col gap-4 rounded-3xl p-6 shadow-sm"><div className="group relative h-72 overflow-hidden rounded-2xl"><img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={image} alt={title} /><Badge className="absolute left-3 top-3 bg-white/90 text-slate-800 shadow-sm">● {location}</Badge><span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold text-white">{badge}</span></div><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-[#b45309]">{label}</span><span className="text-xl text-[#b45309]">✦</span></div><h3 className="text-xl font-semibold">{title}</h3><p className="text-sm leading-6 text-slate-600">{text}</p></Card>)}</div></div></section>;
}
