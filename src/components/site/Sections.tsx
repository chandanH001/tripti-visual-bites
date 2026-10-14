import { useCallback, useEffect, useState } from "react";
import {
  ChefHat, PartyPopper, SlidersHorizontal, MessageCircle, CheckCircle2, ArrowRight, Star,
  ChevronLeft, ChevronRight, X, Phone, Mail, MapPin, Clock, Plus, Facebook, Instagram, Sparkles, UtensilsCrossed, CalendarCheck, ClipboardList, Truck,
} from "lucide-react";
import { SITE, NOT_SET, callHref, MENU, MENU_CATEGORIES, SERVICES, PACKAGES, GALLERY, TESTIMONIALS, FAQS, NAV, images } from "@/config/site";
import { waLink, waFood, waService, waPackage, waOrderGeneral } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading, WaIcon, btn, Logo } from "./ui";

const wrap = "mx-auto max-w-7xl px-4 sm:px-6";
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero pb-16 pt-28 md:pb-24 md:pt-36">
      <div aria-hidden className="animate-float absolute -left-16 top-40 h-40 w-40 rounded-full border-2 border-gold/30" />
      <div aria-hidden className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      <div className={cn(wrap, "relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]")}>
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-card/70 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur">
            <Sparkles className="h-4 w-4 text-gold" /> প্রতিদিনের খাবার ও ক্যাটারিং সার্ভিস
          </p>
          <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.15] text-primary sm:text-6xl lg:text-[4.2rem]">
            স্বাদে ঐতিহ্য,<br /><span className="text-accent">আয়োজনে তৃপ্তি!</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            প্রতিদিন ঘরোয়া স্বাদের পূর্ণ খাবার মাত্র ৳১৩০-এ। পাশাপাশি বিয়ে, জন্মদিন, পারিবারিক ও কর্পোরেট আয়োজনের জন্য রয়েছে পছন্দমতো ক্যাটারিং ব্যবস্থা।
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#weekly" className={btn.accent}>আজকের মেনু দেখুন <ArrowRight className="h-4 w-4" /></a>
            <a href={waOrderGeneral()} {...ext} className={btn.wa}><WaIcon /> WhatsApp-এ অর্ডার</a>
            <a href="#booking" className={btn.outline}>ক্যাটারিং বুক করুন</a>
          </div>
          <ul className="mt-10 grid gap-3 text-sm font-medium text-foreground/80 sm:grid-cols-3">
            {["প্রতি মিল ৳১৩০", "সাপ্তাহিক ঘরোয়া মেনু", "অনুষ্ঠানের ক্যাটারিং"].map((t) => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" /> {t}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={150} className="relative">
          <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-gold-gradient opacity-25" aria-hidden />
          <img src={images.hero} alt="পিতলের পাত্রে কাচ্চি বিরিয়ানি, রোস্ট, রেজালা, মাছের কালিয়া ও বোরহানির আয়োজন" width={1280} height={1408} fetchPriority="high"
            className="relative aspect-[4/4.4] w-full rounded-[2rem] object-cover shadow-lift" />
          <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-3 rounded-2xl bg-card/95 p-4 shadow-lift backdrop-blur sm:left-auto sm:right-6 sm:w-72">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent"><UtensilsCrossed className="h-6 w-6" /></span>
            <div className="min-w-0"><p className="font-bold text-primary">প্রতিদিনের মিল ৳১৩০</p><p className="text-sm text-muted-foreground">ডেলিভারি চার্জ আলাদা</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- TRUST ---------------- */
export function Trust() {
  const items = [
    { icon: ChefHat, t: "সুস্বাদু খাবার", d: "স্বাদ ও মানের প্রতি বিশেষ যত্ন" },
    { icon: PartyPopper, t: "বিভিন্ন আয়োজন", d: "ছোট-বড় অনুষ্ঠানের উপযোগী ব্যবস্থা" },
    { icon: SlidersHorizontal, t: "পছন্দমতো মেনু", d: "আপনার বাজেট ও পছন্দ অনুযায়ী" },
    { icon: MessageCircle, t: "সহজ বুকিং", d: "WhatsApp-এ দ্রুত যোগাযোগ" },
  ];
  return (
    <section aria-label="আমাদের বৈশিষ্ট্য" className="py-12">
      <div className={cn(wrap, "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5")}>
        {items.map(({ icon: I, t, d }, i) => (
          <Reveal key={t} delay={i * 80} className="group rounded-3xl border bg-card p-5 transition hover:-translate-y-1 hover:shadow-lift md:p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-gold transition group-hover:bg-accent group-hover:text-accent-foreground"><I className="h-6 w-6" /></span>
            <h3 className="mt-4 text-lg font-bold text-primary">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className={cn(wrap, "grid items-center gap-12 lg:grid-cols-2 lg:gap-20")}>
        <Reveal className="relative order-2 lg:order-1">
          <img src={images.kitchen} alt="বড় হাঁড়িতে বিরিয়ানি ও রেজালা প্রস্তুত করা হচ্ছে" width={960} height={1200} loading="lazy" className="aspect-[4/5] w-4/5 rounded-[2rem] object-cover shadow-lift" />
          <img src={images.biryani} alt="কাচ্চি বিরিয়ানির হাঁড়ি" width={1024} height={768} loading="lazy" className="absolute -bottom-8 right-0 aspect-square w-1/2 rounded-[1.75rem] border-8 border-background object-cover shadow-lift" />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading align="left" eyebrow="আমাদের সম্পর্কে" title="খাবারের তৃপ্তি — স্বাদের সঙ্গে যত্নের বন্ধন" />
          <Reveal>
            <p className="-mt-4 text-lg leading-relaxed text-muted-foreground">
              খাবারের তৃপ্তি আপনার বিশেষ আয়োজনের খাবারকে আরও সুন্দর ও স্মরণীয় করে তুলতে কাজ করে। বিয়ে, জন্মদিন, পারিবারিক অনুষ্ঠান কিংবা অফিসের আয়োজন—আপনার প্রয়োজন, পছন্দ ও বাজেট অনুযায়ী ক্যাটারিং মেনু সাজানোর সুযোগ রয়েছে।
            </p>
            <ul className="mt-8 space-y-4">
              {["খাবারের মান ও স্বাদের প্রতি যত্ন", "আয়োজন অনুযায়ী মেনু পরিকল্পনা", "গ্রাহকের চাহিদাকে গুরুত্ব দেওয়া"].map((t) => (
                <li key={t} className="flex items-center gap-4 rounded-2xl bg-muted p-4 font-semibold text-primary">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><CheckCircle2 className="h-5 w-5" /></span>{t}
                </li>
              ))}
            </ul>
            <a href="#booking" className={cn(btn.primary, "mt-8")}>আমাদের সঙ্গে পরিকল্পনা করুন <ArrowRight className="h-4 w-4" /></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MENU ---------------- */
function FoodCard({ item }: { item: (typeof MENU)[number] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.image} alt={item.name} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">{item.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-bold text-primary sm:text-xl">{item.name}</h3>
        <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{item.desc}</p>
        <p className="mt-3 text-sm font-semibold text-accent">{item.price ?? "মূল্য জানতে যোগাযোগ করুন"}</p>
        <a href={waFood(item.name)} {...ext} className={cn(btn.waSm, "mt-4")}><WaIcon className="h-4 w-4" /> WhatsApp-এ অর্ডার</a>
      </div>
    </article>
  );
}

export function MenuSection() {
  const [cat, setCat] = useState<string>(MENU_CATEGORIES[0]);
  const items = cat === MENU_CATEGORIES[0] ? MENU : MENU.filter((m) => m.category === cat);
  return (
    <section id="menu" className="bg-muted/60 py-20 md:py-28">
      <div className={wrap}>
        <SectionHeading eyebrow="মেনু" title="ক্যাটারিং খাবারের মেনু" subtitle="অনুষ্ঠানের জন্য পছন্দের খাবার বেছে নিন — মূল্য অতিথির সংখ্যা ও মেনু অনুযায়ী।" />
        <div role="tablist" aria-label="খাবারের ক্যাটাগরি" className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {MENU_CATEGORIES.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={cn("min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition", cat === c ? "border-primary bg-primary text-primary-foreground shadow-soft" : "bg-card text-foreground/75 hover:border-accent hover:text-accent")}>
              {c}
            </button>
          ))}
        </div>
        <div key={cat} className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {items.map((m) => <FoodCard key={m.name} item={m} />)}
        </div>
        {items.length === 0 && <p className="text-center text-muted-foreground">এই ক্যাটাগরিতে শীঘ্রই খাবার যোগ করা হবে।</p>}
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className={wrap}>
        <SectionHeading eyebrow="ক্যাটারিং সার্ভিস" title="প্রতিটি আয়োজনের জন্য বিশেষ ক্যাটারিং" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <article className="group relative h-[22rem] overflow-hidden rounded-3xl shadow-soft">
                <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <span className="font-en text-sm font-semibold text-gold">0{i + 1}</span>
                  <h3 className="mt-1 text-2xl font-bold text-primary-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">{s.desc}</p>
                  <a href={waService(s.title)} {...ext} className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/15 px-5 py-2.5 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-whatsapp">
                    <WaIcon className="h-4 w-4" /> বিস্তারিত জানুন
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PACKAGES ---------------- */
export function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden bg-forest-gradient py-20 md:py-28">
      <div aria-hidden className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-gold/20" />
      <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-gold/20" />
      <div className={cn(wrap, "relative")}>
        <SectionHeading light eyebrow="প্যাকেজ" title="আপনার বাজেটে ক্যাটারিং প্যাকেজ" subtitle="প্রতিটি প্যাকেজ আপনার প্রয়োজন অনুযায়ী সাজানো যায়।" />
        <div className="grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className={cn("relative flex h-full flex-col rounded-3xl p-7 transition hover:-translate-y-1 md:p-8", p.featured ? "bg-card shadow-lift ring-2 ring-gold" : "border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur")}>
                {p.featured && <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-xs font-bold text-forest">জনপ্রিয়</span>}
                <h3 className={cn("text-2xl font-bold", p.featured ? "text-primary" : "text-primary-foreground")}>{p.name}</h3>
                <p className={cn("mt-2 text-sm", p.featured ? "text-muted-foreground" : "text-primary-foreground/70")}>উপযোগী: {p.suited}</p>
                <p className={cn("mt-6 text-lg font-bold", p.featured ? "text-accent" : "text-gold")}>{p.price ?? "মূল্য জানতে যোগাযোগ করুন"}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.includes.map((x) => (
                    <li key={x} className={cn("flex gap-3 text-[15px]", p.featured ? "text-foreground" : "text-primary-foreground/90")}>
                      <CheckCircle2 className={cn("mt-0.5 h-5 w-5 shrink-0", p.featured ? "text-secondary" : "text-gold")} />{x}
                    </li>
                  ))}
                </ul>
                <a href={waPackage(p.name)} {...ext} className={cn(btn.wa, "mt-8 w-full")}><WaIcon /> WhatsApp-এ কোটেশন নিন</a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
export function HowItWorks() {
  const steps = [
    { icon: MessageCircle, t: "যোগাযোগ করুন", d: "WhatsApp বা ফোনে আপনার প্রয়োজন জানান।" },
    { icon: ClipboardList, t: "আয়োজনের তথ্য দিন", d: "তারিখ, স্থান, অতিথির সংখ্যা ও বাজেট জানান।" },
    { icon: UtensilsCrossed, t: "মেনু ও কোটেশন নিন", d: "আপনার প্রয়োজন অনুযায়ী মেনু ও মূল্য সম্পর্কে আলোচনা করুন।" },
    { icon: CalendarCheck, t: "বুকিং নিশ্চিত করুন", d: "শর্তাবলি ও আয়োজনের বিস্তারিত চূড়ান্ত করুন।" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className={wrap}>
        <SectionHeading eyebrow="প্রক্রিয়া" title="সহজেই বুক করুন ক্যাটারিং" />
        <ol className="relative grid gap-6 md:grid-cols-4">
          <div aria-hidden className="absolute left-0 right-0 top-8 hidden h-px border-t-2 border-dashed border-gold/50 md:block" />
          {steps.map(({ icon: I, t, d }, i) => (
            <Reveal key={t} delay={i * 100}>
              <li className="relative flex gap-4 md:flex-col md:items-center md:text-center">
                <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary text-gold shadow-soft">
                  <I className="h-7 w-7" />
                  <span className="font-en absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{i + 1}</span>
                </span>
                <div><h3 className="text-lg font-bold text-primary md:mt-5">{t}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const [touchX, setTouchX] = useState<number | null>(null);
  const go = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + GALLERY.length) % GALLERY.length)), []);
  useEffect(() => {
    if (idx === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setIdx(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [idx, go]);
  const spans = ["md:col-span-2 md:row-span-2", "", "", "md:row-span-2", "", "md:col-span-2", "", ""];
  return (
    <section className="bg-muted/60 py-20 md:py-28">
      <div className={wrap}>
        <SectionHeading eyebrow="গ্যালারি" title="আমাদের খাবার ও আয়োজনের কিছু মুহূর্ত" subtitle="নমুনা ছবি — প্রকৃত আয়োজনের ছবি শীঘ্রই যোগ করা হবে।" />
        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {GALLERY.map((g, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`ছবি বড় করে দেখুন: ${g.alt}`} className={cn("group relative overflow-hidden rounded-2xl", spans[i])}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 bg-forest/0 transition group-hover:bg-forest/30" />
            </button>
          ))}
        </div>
      </div>
      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label="ছবির গ্যালারি" className="fixed inset-0 z-[70] flex items-center justify-center bg-forest/95 p-4 animate-in fade-in"
          onClick={() => setIdx(null)}
          onTouchStart={(e) => setTouchX(e.touches[0]!.clientX)}
          onTouchEnd={(e) => { if (touchX !== null) { const dx = e.changedTouches[0]!.clientX - touchX; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); } setTouchX(null); }}>
          <img src={GALLERY[idx]!.src} alt={GALLERY[idx]!.alt} className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-lift" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-primary-foreground/80">{GALLERY[idx]!.alt} · {idx + 1}/{GALLERY.length}</p>
          <button aria-label="বন্ধ করুন" onClick={() => setIdx(null)} className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"><X /></button>
          <button aria-label="আগের ছবি" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"><ChevronLeft /></button>
          <button aria-label="পরের ছবি" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"><ChevronRight /></button>
        </div>
      )}
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border bg-card p-7 shadow-soft">
      {t.rating > 0 ? (
        <div className="flex gap-1 text-gold" aria-label={`${t.rating} তারকা`}>
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={cn("h-5 w-5", i < t.rating && "fill-current")} />)}
        </div>
      ) : <span className="w-fit rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">নমুনা রিভিউ</span>}
      <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-foreground/85">“{t.text}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-primary font-bold text-gold">{t.name.charAt(0)}</span>
        <span><span className="block font-bold text-primary">{t.name}</span>{t.date && <span className="text-sm text-muted-foreground">{t.date}</span>}</span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className={wrap}>
        <SectionHeading eyebrow="কাস্টমার রিভিউ" title="গ্রাহকদের মতামত" />
        <p className="-mt-6 mb-10 text-center text-sm"><span className="rounded-full bg-gold/20 px-3 py-1 font-medium text-foreground/80">প্রিভিউ: নিচের মতামতগুলো নমুনা, প্রকৃত রিভিউ নয়</span></p>
        <div className="hidden gap-6 md:grid md:grid-cols-3">{TESTIMONIALS.map((t) => <TestimonialCard key={t.name} t={t} />)}</div>
        <div className="md:hidden">
          <TestimonialCard t={TESTIMONIALS[i]!} />
          <div className="mt-5 flex items-center justify-center gap-3">
            <button aria-label="আগের রিভিউ" onClick={() => setI((i - 1 + n) % n)} className="grid h-11 w-11 place-items-center rounded-full border text-primary"><ChevronLeft className="h-5 w-5" /></button>
            {TESTIMONIALS.map((_, k) => <span key={k} className={cn("h-2 rounded-full transition-all", k === i ? "w-6 bg-accent" : "w-2 bg-border")} />)}
            <button aria-label="পরের রিভিউ" onClick={() => setI((i + 1) % n)} className="grid h-11 w-11 place-items-center rounded-full border text-primary"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a href={SITE.googleReviewUrl || waLink("আসসালামু আলাইকুম, আমি খাবারের তৃপ্তি সম্পর্কে আমার অভিজ্ঞতা শেয়ার করতে চাই।")} {...ext} className={btn.outline}>আপনার অভিজ্ঞতা শেয়ার করুন</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="প্রশ্নোত্তর" title="সাধারণ কিছু প্রশ্ন" />
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={cn("rounded-2xl border bg-card transition", isOpen && "shadow-soft")}>
                <h3>
                  <button id={`faq-b-${i}`} aria-expanded={isOpen} aria-controls={`faq-p-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold text-primary sm:text-lg">
                    {f.q}
                    <Plus className={cn("h-5 w-5 shrink-0 text-accent transition-transform duration-300", isOpen && "rotate-45")} />
                  </button>
                </h3>
                <div id={`faq-p-${i}`} role="region" aria-labelledby={`faq-b-${i}`} className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden"><p className="px-5 pb-5 text-muted-foreground">{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const rows = [
    { icon: MessageCircle, l: "WhatsApp", v: SITE.whatsappDisplay, href: waLink() },
    { icon: Phone, l: "ফোন", v: SITE.phone || NOT_SET, href: SITE.phone ? callHref() : undefined },
    { icon: Mail, l: "ইমেইল", v: SITE.email || NOT_SET, href: SITE.email ? `mailto:${SITE.email}` : undefined },
    { icon: MapPin, l: "ঠিকানা", v: SITE.address || NOT_SET },
    { icon: Truck, l: "ডেলিভারি এলাকা", v: SITE.deliveryArea || NOT_SET },
    { icon: Clock, l: "সময়সূচি", v: SITE.hours || NOT_SET },
    { icon: Facebook, l: "Facebook পেজ", v: SITE.facebook ? "পেজ দেখুন" : NOT_SET, href: SITE.facebook || undefined },
  ];
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className={cn(wrap, "grid gap-10 lg:grid-cols-2")}>
        <div>
          <SectionHeading align="left" eyebrow="যোগাযোগ" title="আপনার আয়োজন নিয়ে কথা বলি" subtitle="যেকোনো প্রশ্ন বা কোটেশনের জন্য সরাসরি যোগাযোগ করুন।" />
          <ul className="grid gap-3 sm:grid-cols-2">
            {rows.map(({ icon: I, l, v, href }) => (
              <li key={l} className="rounded-2xl border bg-card p-5">
                <I className="h-5 w-5 text-accent" />
                <p className="mt-3 text-sm text-muted-foreground">{l}</p>
                {href ? <a href={href} {...(href.startsWith("http") ? ext : {})} className="font-en break-words font-semibold text-primary hover:text-accent">{v}</a> : <p className={cn("font-semibold", v === NOT_SET ? "text-muted-foreground" : "text-primary")}>{v}</p>}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={waLink()} {...ext} className={btn.wa}><WaIcon /> WhatsApp-এ যোগাযোগ</a>
            <a href="#booking" className={btn.outline}>কোটেশন অনুরোধ করুন</a>
          </div>
        </div>
        <div className="min-h-80 overflow-hidden rounded-3xl border bg-muted">
          {SITE.googleMapsEmbed ? (
            <iframe title="খাবারের তৃপ্তির অবস্থান" src={SITE.googleMapsEmbed} className="h-full min-h-80 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          ) : (
            <div className="relative grid h-full min-h-80 place-items-center p-8 text-center">
              <img src={images.buffet} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-15" />
              <div className="relative"><MapPin className="mx-auto h-10 w-10 text-accent" /><p className="mt-3 font-semibold text-primary">গুগল ম্যাপ এখানে দেখানো হবে</p><p className="text-sm text-muted-foreground">ব্যবসার ঠিকানা যুক্ত হলে ম্যাপ চালু হবে</p></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  const quick = NAV.filter((n) => ["home", "weekly", "menu", "services", "contact"].includes(n.id));
  return (
    <footer className="bg-forest pb-28 pt-16 text-primary-foreground/80 md:pb-10">
      <div className={cn(wrap, "grid gap-10 sm:grid-cols-2 lg:grid-cols-4")}>
        <div><Logo light /><p className="mt-4">{SITE.tagline}</p>
          <div className="mt-5 flex gap-3">
            {SITE.facebook && <a href={SITE.facebook} aria-label="Facebook" {...ext} className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent"><Facebook className="h-5 w-5" /></a>}
            {SITE.instagram && <a href={SITE.instagram} aria-label="Instagram" {...ext} className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent"><Instagram className="h-5 w-5" /></a>}
            <a href={waLink()} aria-label="WhatsApp" {...ext} className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-whatsapp"><WaIcon /></a>
          </div>
        </div>
        <div><h3 className="mb-4 font-bold text-gold">দ্রুত লিংক</h3><ul className="space-y-2">{quick.map((q) => <li key={q.id}><a href={`#${q.id}`} className="hover:text-gold">{q.label}</a></li>)}</ul></div>
        <div><h3 className="mb-4 font-bold text-gold">আমাদের সেবা</h3><ul className="space-y-2">{["বিয়ে ও বিবাহের আয়োজন", "জন্মদিনের ক্যাটারিং", "পারিবারিক অনুষ্ঠান", "কর্পোরেট ক্যাটারিং"].map((s) => <li key={s}><a href="#services" className="hover:text-gold">{s}</a></li>)}</ul></div>
        <div><h3 className="mb-4 font-bold text-gold">যোগাযোগ</h3>
          <ul className="space-y-2"><li>WhatsApp: <a href={waLink()} {...ext} className="font-en hover:text-gold">{SITE.whatsappDisplay}</a></li>{SITE.phone && <li><a href={callHref()} className="font-en hover:text-gold">{SITE.phone}</a></li>}{SITE.address && <li>{SITE.address}</li>}{SITE.facebook && <li><a href={SITE.facebook} {...ext} className="hover:text-gold">Facebook পেজ</a></li>}</ul>
          <a href={waLink()} {...ext} className={cn(btn.wa, "mt-4")}><WaIcon /> WhatsApp</a>
        </div>
      </div>
      <p className={cn(wrap, "mt-12 border-t border-primary-foreground/10 pt-6 text-center text-sm")}>© {new Date().getFullYear()} খাবারের তৃপ্তি। সর্বস্বত্ব সংরক্ষিত।</p>
    </footer>
  );
}

/* ---------------- FLOATING + MOBILE BAR ---------------- */
export function FloatingActions() {
  const [hideBar, setHideBar] = useState(false);
  useEffect(() => {
    const el = document.getElementById("booking");
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setHideBar(!!e?.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <>
      <a href={waLink()} {...ext} aria-label="WhatsApp-এ চ্যাট করুন"
        className={cn("fixed bottom-6 right-5 z-40 h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition hover:scale-110", "grid bottom-24 md:bottom-6")}>
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30" aria-hidden />
        <WaIcon className="relative h-7 w-7" />
      </a>
      <nav aria-label="দ্রুত যোগাযোগ" className={cn("fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 gap-2 rounded-2xl border bg-background/95 p-2 shadow-lift backdrop-blur transition-transform duration-300 md:hidden", hideBar && "translate-y-[150%]")}>
        <a href={callHref()} className="flex min-h-12 flex-col items-center justify-center rounded-xl text-xs font-semibold text-primary"><Phone className="h-5 w-5" />ফোন করুন</a>
        <a href={waLink()} {...ext} className="flex min-h-12 flex-col items-center justify-center rounded-xl bg-whatsapp text-xs font-bold text-whatsapp-foreground"><WaIcon />WhatsApp</a>
        <a href="#weekly" className="flex min-h-12 flex-col items-center justify-center rounded-xl bg-accent text-xs font-bold text-accent-foreground"><CalendarCheck className="h-5 w-5" />অর্ডার</a>
      </nav>
    </>
  );
}
