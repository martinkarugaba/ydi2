import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { images } from "./data";

export function HeroSection() {
  return <section className="mx-auto w-full max-w-[1200px] px-6 pb-12 pt-8 lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col items-start gap-6 lg:col-span-6">
              <Badge className="border border-[#7dd3fc] bg-[#e0f2fe] px-4 py-1.5 text-[#0284c7]">♥ Youth-Led Grassroots Impact in Uganda</Badge>
              <div><h1 className="max-w-[430px] text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-[48px] md:leading-[56px]">YDI Heart to Heart Initiative</h1><p className="mt-2 text-xl font-semibold text-[#0284c7]">Improving livelihoods. Empowering futures.</p></div>
              <p className="max-w-xl text-lg leading-7 text-slate-600">We are a youth-led nonprofit organization working to improve the quality of life of vulnerable children, youth, and households across Uganda through education, health, and food security programs.</p>
              <div className="flex flex-wrap items-center gap-3 pt-2"><Button className="rounded-full bg-[#1d4ed8] px-8 py-3.5 shadow-lg shadow-blue-500/25">♥ Donate</Button><Button variant="outline" className="rounded-full bg-[var(--surface-blue)] px-7 py-3.5 text-[#0037b0]">Explore our work</Button><a className="rounded-full px-5 py-3.5 text-sm font-semibold text-slate-600" href="#involved">Partner With Us →</a></div>
              <div className="grid w-full grid-cols-3 gap-3 pt-3 text-xs font-semibold text-slate-600"><div className="flex flex-col rounded-2xl border border-amber-200/60 bg-[var(--surface-blue)] p-4"><b className="block text-xl text-[#d97706]">1,200+</b>Youth Reached</div><div className="flex flex-col rounded-2xl border border-blue-200/60 bg-[var(--surface-blue)] p-4"><b className="block text-xl text-[#0284c7]">14+</b>Districts Served</div><div className="flex flex-col rounded-2xl border border-emerald-200/60 bg-[var(--surface-blue)] p-4"><b className="block text-xl text-emerald-600">100%</b>Community-Led</div></div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-300/40 shadow-2xl shadow-blue-900/10 lg:col-span-6"><img className="h-[420px] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02] sm:h-[480px] lg:h-[520px]" src={images.hero} alt="YDI Heart to Heart community group" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /><div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/30 bg-white/90 p-4 backdrop-blur-md"><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-full bg-[#e0f2fe] text-[#0284c7]">●</div><div><b className="block text-sm">Community Uplift In Action</b><span className="text-xs text-slate-500">Wakiso &amp; beyond · Uganda</span></div></div><span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white">Active Drive</span></div></div>
          </div>
        </section>;
}
