import { images } from "./data";

export function SiteHeader() {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[#c4c5d7]/30 bg-[var(--surface)]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-4 px-6">
          <a href="#" className="flex items-center gap-2"><img className="h-11 w-auto object-contain" src={images.logo} alt="YDI Heart to Heart Initiative logo" /><div className="leading-tight"><div className="text-[18px] font-bold tracking-tight">YDI Heart to Heart</div><div className="text-[11px] font-bold uppercase tracking-widest text-[#0037b0]">Initiative Uganda</div></div></a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#434655] lg:flex"><a className="font-bold text-[#0037b0] transition-colors" aria-current="page" href="#">Home</a><a className="transition-colors hover:text-[#0037b0]" href="#about">About Us</a><a className="transition-colors hover:text-[#0037b0]" href="#programs">Our Programs</a><a className="transition-colors hover:text-[#0037b0]" href="#involved">Contact</a></nav>
          <div className="flex items-center gap-2"><a href="#donate" className="inline-flex items-center gap-1.5 rounded-full bg-[#0037b0] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1d4ed8]">♥ <span className="hidden sm:inline">Donate</span></a></div>
        </div>
      </header>;
}
