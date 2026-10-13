import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Logo, WaIcon, btn } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "bg-background/95 shadow-soft backdrop-blur-md" : "bg-transparent")}>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
        <Logo />
        <nav aria-label="প্রধান মেনু" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className={cn("rounded-full px-3 py-2 text-[15px] font-medium transition-colors", active === n.id ? "bg-primary/10 text-primary" : "text-foreground/75 hover:text-primary")}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className={cn(btn.wa, "hidden sm:inline-flex")}>
            <WaIcon /> WhatsApp-এ যোগাযোগ
          </a>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"} className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 text-primary lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="মোবাইল মেনু" className="h-[calc(100dvh-68px)] overflow-y-auto border-t bg-background px-4 pb-8 pt-4 lg:hidden">
          <ul className="space-y-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className={cn("block rounded-2xl px-4 py-3.5 text-lg font-medium", active === n.id ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted")}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className={cn(btn.wa, "mt-6 w-full")}>
            <WaIcon /> WhatsApp-এ যোগাযোগ
          </a>
        </nav>
      )}
    </header>
  );
}
