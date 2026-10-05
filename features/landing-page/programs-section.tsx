import Image from "next/image";

import { Card } from "@/components/ui/card";
import { images, pillars } from "./data";
import { MaterialIcon } from "./material-icon";

export function ProgramsSection() {
  const [education, health, food] = pillars;
  const secondary = [
    { item: health, image: images.food, location: "Kampala Drive", accent: "amber" },
    { item: food, image: images.farming, location: "Hoima Agro", accent: "green" },
  ] as const;

  return (
    <section id="programs" className="w-full bg-[var(--surface)] py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-xl flex-col gap-2">
            <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0037b0]">
              <span className="size-2 rounded-full bg-[#fe932c]" />Core Impact Pillars
            </span>
            <h2 className="text-[28px] font-extrabold tracking-tight">Integrated Community Programs</h2>
            <p className="text-base leading-6 text-slate-600">Targeting root bottlenecks to empower the whole community — from classroom scholastic materials to daily nutrition and clean living.</p>
          </div>
          <a className="inline-flex items-center gap-2 text-sm font-bold text-[#0037b0] transition-colors hover:text-[#1d4ed8]" href="#programs">Explore all ongoing work <MaterialIcon name="east" className="text-lg" /></a>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          <Card className="flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-200/80 bg-white p-0 shadow-md transition-shadow hover:shadow-xl lg:col-span-7">
            <div className="relative h-64 overflow-hidden sm:h-72">
              <Image src={education[4]} alt={education[0]} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-sm"><span className="mr-2 inline-block size-2 rounded-full bg-[#0037b0]" />{education[1]}</span>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white"><span className="inline-flex items-center gap-1.5 rounded-full bg-[#1d4ed8] px-3 py-1 text-xs font-bold"><MaterialIcon name="school" className="text-sm" />Pillar 01</span><span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold backdrop-blur-md">Active School Drive</span></div>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-5 p-6 sm:p-8">
              <div className="flex flex-col gap-3"><h3 className="text-2xl font-bold">Education &amp; Skills</h3><p className="leading-relaxed text-slate-600">{education[5]}</p></div>
              <div className="grid gap-3 border-t border-slate-100 pt-4 text-xs sm:grid-cols-3">{education[6].map((point) => <div key={point} className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/60 p-3"><MaterialIcon name="check_circle" className="text-lg text-[#0037b0]" /><span className="font-semibold text-slate-800">{point}</span></div>)}</div>
            </div>
          </Card>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {secondary.map(({ item, image, location, accent }, index) => (
              <Card key={item[0]} className={`flex flex-col overflow-hidden rounded-3xl border bg-white p-0 shadow-md transition-shadow hover:shadow-xl sm:flex-row ${accent === "amber" ? "border-amber-200/80" : "border-emerald-200/80"}`}>
                <div className="relative h-44 shrink-0 overflow-hidden sm:w-48 sm:h-auto"><Image src={image} alt={item[0]} fill sizes="192px" className="object-cover transition-transform duration-500 hover:scale-105" /><span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-slate-800">{location}</span></div>
                <div className="flex flex-1 flex-col justify-between gap-3 p-5"><div><span className={`mb-2 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${accent === "amber" ? "bg-amber-100 text-[#904d00]" : "bg-emerald-100 text-[#059669]"}`}><MaterialIcon name={index === 0 ? "health_and_safety" : "eco"} className="text-sm" />Pillar 0{index + 2}</span><h3 className="text-lg font-bold">{item[0]}</h3><p className="mt-1 text-[13px] leading-relaxed text-slate-600">{item[5]}</p></div><ul className="flex flex-col gap-1 border-t border-slate-100 pt-2 text-xs font-medium text-slate-700"><li className="flex items-center gap-1.5"><MaterialIcon name="check_circle" className={`text-[15px] ${accent === "amber" ? "text-[#fe932c]" : "text-[#059669]"}`} />{item[6][0]}</li><li className="flex items-center gap-1.5"><MaterialIcon name="check_circle" className={`text-[15px] ${accent === "amber" ? "text-[#fe932c]" : "text-[#059669]"}`} />{item[6][1]}</li></ul></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
