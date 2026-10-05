import { Card } from "@/components/ui/card";
import { MaterialIcon } from "./material-icon";

const principles = [
  {
    label: "Our Vision",
    status: "Long-Term Horizon",
    icon: "visibility",
    title: "To achieve a knowledge-driven and economically empowered society.",
    description:
      "We envision Ugandan communities where every child and young adult has access to tools, knowledge, and self-sustaining opportunities to escape generational poverty.",
    indicators: [
      ["verified", "Sustainable Economic Transformation"],
      ["trending_up", "Intergenerational Opportunity & Agency"],
      ["groups_2", "Locally-Driven Community Leadership"],
    ],
    footer: "Empowered Self-Reliance",
    meta: "Wakiso, Kampala & Beyond",
    tone: {
      card: "bg-[var(--surface)]",
      glow: "bg-emerald-100/50",
      badge: "bg-[#d1fae5] text-[#059669]",
      border: "border-emerald-200/60",
      accent: "text-[#059669]",
      dot: "bg-[#059669]",
    },
  },
  {
    label: "Our Mission",
    status: "Active Daily Footprint",
    icon: "favorite",
    title: "To improve the quality of life of vulnerable children, youth, and persons in Uganda.",
    description:
      "Through collaborative grassroots programs in education, public health, and agricultural resilience, we provide hands-on, community-centered relief and training.",
    indicators: [
      ["volunteer_activism", "Direct Grassroots Action & Advocacy"],
      ["handyman", "Hands-on Vocational Trade Mastery"],
      ["shield_heart", "Dignity-Centered Relief & Nourishment"],
    ],
    footer: "14+ Operational Districts",
    meta: "100% Grassroots Mobilization",
    tone: {
      card: "bg-[var(--surface)]",
      glow: "bg-[#e0f2fe]/60",
      badge: "bg-[#e0f2fe] text-[#0284c7]",
      border: "border-blue-200/60",
      accent: "text-[#0284c7]",
      dot: "bg-[#0284c7]",
    },
  },
] as const;

export function VisionMissionSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-[var(--surface-muted)] py-16 lg:py-24">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-3 text-center lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-wide text-[#0284c7] shadow-sm">
            <MaterialIcon name="auto_awesome" className="text-base text-amber-600" />
            Guiding Principles &amp; Purpose
          </div>
          <h2 className="text-[28px] font-extrabold leading-9 tracking-tight lg:text-4xl">
            Rooted in Dignity, Driven by Purpose
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Catalyzing generational change through community-anchored education, vocational craft, and livelihood resilience across Uganda.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {principles.map((principle) => (
            <Card
              key={principle.label}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-10 ${principle.tone.card}`}
            >
              <div className={`pointer-events-none absolute -right-20 -top-20 size-64 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${principle.tone.glow}`} />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider shadow-sm ${principle.tone.badge}`}>
                    <MaterialIcon name={principle.icon} className="text-lg" filled />
                    {principle.label}
                  </div>
                  <span className={`rounded-full bg-[var(--surface-blue)] px-3 py-1 text-xs font-semibold ${principle.tone.accent}`}>
                    {principle.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-snug tracking-tight sm:text-[26px]">
                  {principle.title}
                </h3>
                <p className="leading-relaxed text-slate-600">{principle.description}</p>
                <div className="flex flex-col gap-2.5 border-t border-black/10 pt-3 text-sm">
                  {principle.indicators.map(([icon, text]) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <MaterialIcon name={icon} className={`text-lg ${principle.tone.accent}`} filled={icon === "volunteer_activism"} />
                      <span className="font-semibold">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`relative z-10 mt-8 flex items-center justify-between border-t pt-4 text-xs ${principle.tone.border}`}>
                <span className={`inline-flex items-center gap-1.5 font-bold ${principle.tone.accent}`}>
                  <span className={`size-2 rounded-full ${principle.tone.dot}`} />
                  {principle.footer}
                </span>
                <span className="text-slate-500">{principle.meta}</span>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[var(--surface)] p-6 shadow-sm sm:p-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[var(--surface-blue)] text-[#0037b0]">
              <MaterialIcon name="handshake" className="text-2xl" filled />
            </div>
            <div>
              <h4 className="text-[17px] font-bold leading-tight">From Compassion to Tangible Transformation</h4>
              <p className="mt-0.5 text-sm text-slate-600">
                Building self-reliant futures for Uganda&apos;s next generation with open transparency and community ownership.
              </p>
            </div>
          </div>
          <a href="#programs" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0037b0] px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors hover:bg-[#1d4ed8] sm:w-auto">
            Explore Our Impact Pillars
            <MaterialIcon name="arrow_forward" className="text-base" />
          </a>
        </Card>
      </div>
    </section>
  );
}
