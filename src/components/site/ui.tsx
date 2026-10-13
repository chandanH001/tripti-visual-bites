import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function WaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("h-5 w-5", className)}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.46A11.3 11.3 0 0 0 12.04.7C5.78.7.69 5.79.69 12.05c0 2 .52 3.95 1.52 5.67L.6 23.3l5.72-1.5a11.3 11.3 0 0 0 5.72 1.46h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02z" />
    </svg>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-11 px-6 text-[15px] active:scale-[0.98]";
export const btn = {
  primary: cn(base, "bg-primary text-primary-foreground hover:bg-secondary shadow-soft hover:shadow-lift hover:-translate-y-0.5"),
  accent: cn(base, "bg-accent text-accent-foreground hover:brightness-110 shadow-soft hover:-translate-y-0.5"),
  outline: cn(base, "border border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground"),
  ghostLight: cn(base, "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"),
  wa: cn(base, "bg-whatsapp text-whatsapp-foreground hover:brightness-105 shadow-soft hover:-translate-y-0.5"),
  waSm: cn(base, "bg-whatsapp text-whatsapp-foreground hover:brightness-105 min-h-10 px-4 text-sm w-full"),
};

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, light, align = "center" }: {
  eyebrow?: string; title: string; subtitle?: string; light?: boolean; align?: "center" | "left";
}) {
  return (
    <Reveal className={cn("mb-10 md:mb-14 max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className={cn("mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-wide", light ? "text-gold" : "text-accent")}>
          <span className="h-px w-8 bg-current" /> {eyebrow}
        </p>
      )}
      <h2 className={cn("text-3xl font-bold sm:text-4xl md:text-[2.75rem]", light ? "text-primary-foreground" : "text-primary")}>{title}</h2>
      {subtitle && <p className={cn("mt-4 text-base md:text-lg", light ? "text-primary-foreground/75" : "text-muted-foreground")}>{subtitle}</p>}
    </Reveal>
  );
}

export function Logo({ light }: { light?: boolean }) {
  return (
    <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label="খাবারের তৃপ্তি — হোম">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-forest-gradient text-gold shadow-soft">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
          <path d="M3 15h18M5 15a7 7 0 0 1 14 0M12 6V4.5M2.5 18.5h19" />
          <path d="M9 3.5c0 1 .8 1 .8 2M14.2 3.5c0 1 .8 1 .8 2" opacity=".6" />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span className={cn("block truncate text-lg font-bold", light ? "text-primary-foreground" : "text-primary")}>খাবারের তৃপ্তি</span>
        <span className={cn("font-en block text-[10px] font-semibold tracking-[0.25em]", light ? "text-gold" : "text-accent")}>KHABARER TRIPTI</span>
      </span>
    </a>
  );
}
