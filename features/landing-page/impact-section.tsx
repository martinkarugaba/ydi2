import { Card } from "@/components/ui/card";
import Image from "next/image";

import { images, impactCards } from "./data";
import { MaterialIcon } from "./material-icon";

export function ImpactSection() {
  return (
    <section
      id="donate"
      className="w-full border-t border-[#c4c5d7]/20 bg-gradient-to-b from-[#f8faff] to-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-2 text-center">
          <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0037b0]">
            <span className="size-2 rounded-full bg-[#fe932c]" />
            Transparency &amp; Accountability
          </span>
          <h2 className="mt-2 text-[28px] font-bold leading-9 tracking-tight">
            Tangible Impact Per Contribution
          </h2>
          <p className="mt-3 text-slate-600">
            Every contribution is mapped directly to procurement and local
            artisan toolkits with zero speculative overhead.
          </p>
        </div>
        <div className="grid items-end gap-8 md:grid-cols-3">
          {impactCards.map(
            ([label, amount, currency, title, text, action], index) => (
              <Card
                key={amount}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-0 ${index === 1 ? "border-2 border-[#1d4ed8] shadow-2xl md:-translate-y-4" : "border border-slate-200 shadow-sm"}`}
              >
                {index === 1 && (
                  <span className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#1d4ed8] to-[#0037b0] p-3 text-center text-xs font-extrabold uppercase tracking-wider text-white">
                    <MaterialIcon name="star" className="text-[16px] text-amber-300" />✦ Most Critical Need
                  </span>
                )}
                <div className={`flex items-center justify-between border-b p-6 ${index === 1 ? "border-blue-100 bg-blue-50/50" : "border-slate-100 bg-slate-50"}`}><div className="flex items-center gap-3"><Image src={[images.school, images.carpentry, images.farming][index]} alt="" width={48} height={48} className={`size-12 rounded-full object-cover border-2 shadow-sm ${index === 1 ? "border-[#1d4ed8]" : "border-white"}`} /><div><span className={`block text-xs font-extrabold uppercase tracking-wider ${index === 1 ? "text-[#1d4ed8]" : index === 2 ? "text-[#059669]" : "text-[#0284c7]"}`}>{label}</span><span className="text-xs text-slate-500">{index === 0 ? "Wakiso & Mayuge" : index === 1 ? "Direct Trainee Handout" : "Hoima & Mayuge Plots"}</span></div></div></div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-6 lg:p-8"><div className="flex flex-col gap-3"><div className="flex items-baseline gap-2"><b className={`text-[32px] font-extrabold ${index === 1 ? "text-[#0037b0]" : ""}`}>{amount}</b><span className="text-xs text-slate-500">{currency}</span></div><h4 className="text-xl font-bold">{title}</h4><p className="text-sm leading-relaxed text-slate-600">{text}</p></div><a href="#donate" className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-center text-sm font-bold transition-transform hover:-translate-y-0.5 ${index === 1 ? "bg-[#0037b0] text-white shadow-lg shadow-blue-500/25" : "bg-[var(--surface-blue)] text-[#0037b0] shadow-sm"}`}>
                  {index === 1 && (
                    <MaterialIcon name="favorite" className="text-lg" filled />
                  )}
                  {action}
                </a></div>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
