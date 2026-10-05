import { Card } from "@/components/ui/card";
import { MaterialIcon } from "./material-icon";

export function TrustRibbon() {
  return <section className="relative z-20 mx-auto -mt-5 w-full max-w-[1200px] px-6 pb-10"><Card className="flex flex-col justify-between gap-4 rounded-2xl border border-[#c4c5d7]/40 bg-white p-4 text-xs font-semibold text-slate-600 shadow-xl shadow-slate-900/5 sm:flex-row sm:items-center sm:p-5"><span className="flex items-center gap-2 text-slate-800"><MaterialIcon name="verified_user" className="text-xl text-[#0284c7]" filled />Registered NGO No. 80034050533987 | Limited by Guarantee</span><div className="flex flex-wrap gap-4 sm:gap-6"><span className="inline-flex items-center gap-1.5"><MaterialIcon name="check_circle" className="text-base text-emerald-600" />100% Politically Neutral &amp; Grassroots Driven</span><span className="inline-flex items-center gap-1.5"><MaterialIcon name="check_circle" className="text-base text-emerald-600" />Annual Community Impact &amp; Financial Reporting</span></div></Card></section>;
}
