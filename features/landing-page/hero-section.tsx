import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { images } from "./data";
import { MaterialIcon } from "./material-icon";

export function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 pb-12 pt-8 lg:pb-16">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col items-start gap-6 lg:col-span-6">
          <div className="inline-flex items-center rounded-full border border-[#7dd3fc] bg-[#e0f2fe] px-4 py-1.5 text-[#0284c7]">
            <MaterialIcon
              name="volunteer_activism"
              className="mr-2 text-base"
              filled
            />
            Youth-Led Grassroots Impact in Uganda
          </div>
          <div>
            <h1 className="max-w-[430px] text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-[48px] md:leading-[56px]">
              YDI Heart to Heart Initiative
            </h1>
            <p className="mt-2 text-xl font-semibold text-[#0284c7]">
              Improving livelihoods. Empowering futures.
            </p>
            <div className="mt-4 h-1 w-20 rounded-full bg-[#fe932c]" />
          </div>
          <p className="max-w-xl text-lg leading-7 text-slate-600">
            We are a youth-led nonprofit organization working to improve the
            quality of life of vulnerable children, youth, and households across
            Uganda through education, health, and food security programs.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button className="rounded-full bg-[#1d4ed8] px-8 py-3.5 shadow-lg shadow-blue-500/25">
              <MaterialIcon name="favorite" className="mr-2 text-lg" filled />
              Donate
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-[var(--surface-blue)] px-7 py-3.5 text-[#0037b0]"
            >
              <MaterialIcon name="explore" className="mr-2 text-lg" />
              Our Work
            </Button>
            <a
              className="inline-flex items-center gap-1 rounded-full px-5 py-3.5 text-sm font-semibold text-slate-600 transition-colors hover:text-[#0037b0]"
              href="#involved"
            >
              Partner With Us{" "}
              <MaterialIcon name="arrow_forward" className="text-lg" />
            </a>
          </div>
          <div className="grid w-full grid-cols-3 gap-3 pt-3 text-xs font-semibold text-slate-600">
            <Card className="flex flex-col rounded-2xl bg-[var(--surface-blue)] p-4">
              <b className="block text-xl text-[#d97706]">1,200+</b>Youth
              Reached
            </Card>
            <Card className="flex flex-col rounded-2xl bg-[var(--surface-blue)] p-4">
              <b className="block text-xl text-[#0284c7]">14+</b>Districts
              Served
            </Card>
            <Card className="flex flex-col rounded-2xl bg-[var(--surface-blue)] p-4">
              <b className="block text-xl text-emerald-600">100%</b>
              Community-Led
            </Card>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-900/10 lg:col-span-6">
          <div className="absolute -right-8 -top-8 z-10 grid size-24 place-items-center rounded-full bg-[#fe932c] text-white shadow-lg">
            <MaterialIcon name="favorite" className="text-3xl" filled />
          </div>
          <img
            className="h-[420px] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02] sm:h-[480px] lg:h-[520px]"
            src={images.hero}
            alt="YDI Heart to Heart community group"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-[#e0f2fe] text-[#0284c7]">
                <MaterialIcon name="groups" className="text-[22px]" filled />
              </div>
              <div>
                <b className="block text-sm">Community Uplift In Action</b>
                <span className="text-xs text-slate-500">
                  Wakiso &amp; beyond · Uganda
                </span>
              </div>
            </div>
            <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white">
              Active Drive
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
