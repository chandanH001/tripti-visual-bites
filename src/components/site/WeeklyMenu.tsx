import { useEffect, useState } from "react";
import { Minus, Plus, Truck } from "lucide-react";
import { WEEKLY_MENU, MEAL_PRICE, images } from "@/config/site";
import { waMealOrder, bn } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading, WaIcon, btn } from "./ui";

const dayImage: Record<string, string> = {
  fish: images.fish, beef: images.kitchen, chicken: images.roastKebab, bhorta: images.vorta, biryani: images.biryani,
};

function DayCard({ day, isToday }: { day: (typeof WEEKLY_MENU)[number]; isToday: boolean }) {
  const [qty, setQty] = useState(1);
  const total = qty * MEAL_PRICE;
  const setSafe = (n: number) => setQty(Math.min(50, Math.max(1, Number.isFinite(n) ? Math.floor(n) : 1)));
  return (
    <article className={cn("flex flex-col overflow-hidden rounded-3xl border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lift", isToday && "ring-2 ring-accent")}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={dayImage[day.image]} alt={`${day.day}-এর খাবার: ${day.items.join(", ")} (নমুনা ছবি)`} width={1024} height={640} loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">{day.day}</span>
        {isToday && <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">আজকের মেনু</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-primary">{day.main}</h3>
        <ul className="mt-2 flex flex-1 flex-wrap gap-1.5">
          {day.items.slice(1).map((i) => <li key={i} className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80">{i}</li>)}
        </ul>
        <p className="mt-4 text-3xl font-bold text-accent">৳{bn(MEAL_PRICE)} <span className="text-sm font-medium text-muted-foreground">/ প্রতি মিল</span></p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center rounded-full border" role="group" aria-label={`${day.day} পরিমাণ`}>
            <button type="button" onClick={() => setSafe(qty - 1)} disabled={qty <= 1} aria-label="পরিমাণ কমান" className="grid h-11 w-11 place-items-center rounded-full text-primary disabled:opacity-40"><Minus className="h-4 w-4" /></button>
            <input type="number" inputMode="numeric" min={1} max={50} value={qty} onChange={(e) => setSafe(Number(e.target.value))} aria-label="পরিমাণ" className="w-10 bg-transparent text-center font-bold text-primary [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none" />
            <button type="button" onClick={() => setSafe(qty + 1)} disabled={qty >= 50} aria-label="পরিমাণ বাড়ান" className="grid h-11 w-11 place-items-center rounded-full text-primary disabled:opacity-40"><Plus className="h-4 w-4" /></button>
          </div>
          <p className="text-right text-sm text-muted-foreground">মোট<br /><span className="text-lg font-bold text-primary" aria-live="polite">৳{bn(total)}</span></p>
        </div>
        <a href={waMealOrder(day.day, day.items.join(", "), qty)} target="_blank" rel="noopener noreferrer" className={cn(btn.waSm, "mt-4 min-h-12")}>
          <WaIcon className="h-4 w-4" /> WhatsApp-এ অর্ডার করুন
        </a>
      </div>
    </article>
  );
}

export function WeeklyMenu() {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(new Date().getDay()), []);
  return (
    <section id="weekly" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="প্রতিদিনের খাবার" title="সাপ্তাহিক খাবারের মেনু" subtitle={`ঘরোয়া স্বাদের পূর্ণ এক বেলার খাবার — প্রতি মিল মাত্র ৳${bn(MEAL_PRICE)}।`} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WEEKLY_MENU.map((d, i) => (
            <Reveal key={d.day} delay={(i % 4) * 70}><DayCard day={d} isToday={today === d.jsDay} /></Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm text-foreground/85">
          <Truck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          দেখানো মোট মূল্য শুধু খাবারের। ডেলিভারি চার্জ আলাদা, যা WhatsApp-এ আমাদের সঙ্গে নিশ্চিত করতে হবে। WhatsApp-এ বার্তা পাঠালেই অর্ডার নিশ্চিত হয় না — আমরা উত্তর দিয়ে নিশ্চিত করব।
        </p>
      </div>
    </section>
  );
}
