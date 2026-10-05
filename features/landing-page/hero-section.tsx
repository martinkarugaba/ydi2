import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { images } from "./data";
import { MaterialIcon } from "./material-icon";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[640px] w-full items-center overflow-hidden lg:min-h-[720px]">
      <Image
        src={images.hero}
        alt="YDI Heart to Heart community group in Uganda"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070e20]/95 via-[#0c1836]/85 to-[#0f172a]/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070e20] via-transparent to-black/40" />
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-[#1d4ed8]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-10 size-96 rounded-full bg-[#fe932c]/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="flex flex-col items-start gap-6 lg:col-span-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-300/30 bg-white/10 px-4 py-2 text-sky-200 shadow-lg backdrop-blur-md">
            <MaterialIcon
              name="volunteer_activism"
              className="text-[18px] text-[#fe932c]"
              filled
            />
            <span className="font-bold tracking-tight">Youth-Led Grassroots Impact in Uganda</span>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md md:text-[48px] md:leading-[56px]">
              YDI Heart to Heart Initiative
            </h1>
            <p className="flex flex-wrap items-center gap-2 text-xl font-bold text-sky-300 drop-shadow-sm">
              <span>Improving livelihoods.</span>
              <span className="text-[#fe932c]">Empowering futures.</span>
            </p>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-200 drop-shadow-sm">
            We are a youth-led nonprofit organization working to improve the
            quality of life of vulnerable children, youth, and households across
            Uganda through education, health, and food security programs.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button className="rounded-full bg-[#fe932c] px-8 py-3.5 font-bold text-white shadow-xl shadow-amber-900/30 hover:bg-[#ea801b]">
              <MaterialIcon name="favorite" className="mr-2 text-lg text-white" filled />
              Donate
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/30 bg-white/15 px-7 py-3.5 text-white shadow-lg backdrop-blur-md hover:bg-white/25"
            >
              <MaterialIcon name="explore" className="mr-2 text-lg text-[#fe932c]" />
              Our Work
            </Button>
            <a
              className="inline-flex items-center gap-1 rounded-full px-5 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:text-white"
              href="#involved"
            >
              Partner With Us{" "}
              <MaterialIcon name="arrow_forward" className="text-lg" />
            </a>
          </div>
          <div className="grid w-full grid-cols-3 gap-3 pt-3 text-xs font-semibold text-slate-600">
            <Card className="flex flex-col rounded-2xl border-white/15 bg-white/10 p-4 text-blue-200 shadow-lg backdrop-blur-md">
              <b className="block text-2xl text-white">1,200+</b>Youth Reached
            </Card>
            <Card className="flex flex-col rounded-2xl border-white/15 bg-white/10 p-4 text-blue-200 shadow-lg backdrop-blur-md">
              <b className="block text-2xl text-[#38bdf8]">14+</b>Districts Served
            </Card>
            <Card className="flex flex-col rounded-2xl border-white/15 bg-white/10 p-4 text-blue-200 shadow-lg backdrop-blur-md">
              <b className="block text-2xl text-[#fe932c]">100%</b>Community-Led
            </Card>
          </div>
        </div>
          <div className="hidden flex-col gap-4 lg:col-span-4 lg:flex">
            <Card className="flex flex-col gap-4 rounded-3xl border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-2xl border border-[#fe932c]/40 bg-[#fe932c]/20">
                <MaterialIcon name="groups" className="text-[22px]" filled />
                </div>
                <div>
                  <b className="block text-sm">Community Uplift In Action</b>
                  <span className="text-xs text-blue-200">Wakiso &amp; beyond · Uganda</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-200">
                Locally anchored grassroots teams mobilizing skills workshops,
                maternal care packs, and direct agricultural seedling distribution.
              </p>
              <div className="flex items-center justify-between border-t border-white/15 pt-3">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300">
                  <span className="size-2 animate-ping rounded-full bg-emerald-400" />
                  Verified Community Action
                </span>
                <span className="rounded-full border border-blue-400/40 bg-blue-600/60 px-3 py-1 text-xs font-bold text-white">
                  Active Drive
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
