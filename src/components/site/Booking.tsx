import { useState, type FormEvent } from "react";
import { Send, Info } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { SectionHeading, Reveal, WaIcon } from "./ui";

const EVENT_TYPES = ["বিয়ে", "জন্মদিন", "পারিবারিক অনুষ্ঠান", "কর্পোরেট অনুষ্ঠান", "বুফে", "অন্যান্য"];

type Form = { name: string; phone: string; type: string; date: string; venue: string; guests: string; menu: string; budget: string; notes: string };
const empty: Form = { name: "", phone: "", type: "", date: "", venue: "", guests: "", menu: "", budget: "", notes: "" };

function validate(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (f.name.trim().length < 2) e.name = "অনুগ্রহ করে আপনার নাম লিখুন।";
  const digits = f.phone.replace(/[^\d০-৯]/g, "");
  if (digits.length < 11 || digits.length > 14) e.phone = "সঠিক মোবাইল নম্বর লিখুন (যেমন: 01XXXXXXXXX)।";
  if (!f.type) e.type = "অনুষ্ঠানের ধরন নির্বাচন করুন।";
  if (!f.date) e.date = "অনুষ্ঠানের তারিখ নির্বাচন করুন।";
  if (f.venue.trim().length < 2) e.venue = "অনুষ্ঠানের স্থান লিখুন।";
  if (!f.guests || Number(f.guests) < 1) e.guests = "আনুমানিক অতিথির সংখ্যা লিখুন।";
  return e;
}

/** Builds the WhatsApp message. Swap this out for a server call later if a backend is added. */
function buildMessage(f: Form) {
  return [
    "আসসালামু আলাইকুম, আমি ক্যাটারিং কোটেশনের জন্য অনুরোধ করছি।",
    "",
    `👤 নাম: ${f.name}`,
    `📞 মোবাইল: ${f.phone}`,
    `🎉 অনুষ্ঠানের ধরন: ${f.type}`,
    `📅 তারিখ: ${f.date}`,
    `📍 স্থান: ${f.venue}`,
    `👥 আনুমানিক অতিথি: ${f.guests} জন`,
    f.menu && `🍛 পছন্দের মেনু: ${f.menu}`,
    f.budget && `💰 আনুমানিক বাজেট: ${f.budget}`,
    f.notes && `📝 অতিরিক্ত নির্দেশনা: ${f.notes}`,
    "",
    "অনুগ্রহ করে মেনু ও মূল্য সম্পর্কে জানাবেন।",
  ].filter((l) => l !== false && l !== undefined && l !== "" ? true : l === "").join("\n");
}

const field = "w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 transition";

export function Booking() {
  const [f, setF] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof Form) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`bk-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    window.open(waLink(buildMessage(f)), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const L = ({ id, label, req }: { id: keyof Form; label: string; req?: boolean }) => (
    <label htmlFor={`bk-${id}`} className="mb-1.5 block text-sm font-semibold text-primary">
      {label} {req && <span className="text-accent">*</span>}
    </label>
  );
  const Err = ({ id }: { id: keyof Form }) => errors[id] ? <p role="alert" className="mt-1.5 text-sm text-destructive">{errors[id]}</p> : null;

  return (
    <section id="booking" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="কোটেশন অনুরোধ" title="আপনার আয়োজনের তথ্য দিন" subtitle="ফর্মটি পূরণ করে পাঠালে আপনার তথ্যসহ WhatsApp খুলবে। আমরা মেনু ও মূল্য নিয়ে আপনার সঙ্গে যোগাযোগ করব।" />
            <Reveal className="flex gap-3 rounded-2xl border border-gold/40 bg-gold/10 p-5 text-sm text-foreground/85">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p>এটি শুধুমাত্র কোটেশনের অনুরোধ। আলোচনার পর শর্তাবলি চূড়ান্ত হলেই বুকিং নিশ্চিত হবে।</p>
            </Reveal>
          </div>
          <Reveal>
            <form onSubmit={submit} noValidate className="rounded-3xl border bg-card p-5 shadow-lift sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div><L id="name" label="আপনার নাম" req /><input id="bk-name" className={field} value={f.name} onChange={set("name")} autoComplete="name" placeholder="পূর্ণ নাম" /><Err id="name" /></div>
                <div><L id="phone" label="মোবাইল নম্বর" req /><input id="bk-phone" type="tel" inputMode="tel" className={field} value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="01XXXXXXXXX" /><Err id="phone" /></div>
                <div><L id="type" label="অনুষ্ঠানের ধরন" req />
                  <select id="bk-type" className={field} value={f.type} onChange={set("type")}>
                    <option value="">নির্বাচন করুন</option>
                    {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select><Err id="type" /></div>
                <div><L id="date" label="অনুষ্ঠানের তারিখ" req /><input id="bk-date" type="date" className={field} value={f.date} onChange={set("date")} min={new Date().toISOString().slice(0, 10)} /><Err id="date" /></div>
                <div><L id="venue" label="অনুষ্ঠানের স্থান" req /><input id="bk-venue" className={field} value={f.venue} onChange={set("venue")} placeholder="এলাকা / ভেন্যু" /><Err id="venue" /></div>
                <div><L id="guests" label="আনুমানিক অতিথির সংখ্যা" req /><input id="bk-guests" type="number" min={1} inputMode="numeric" className={field} value={f.guests} onChange={set("guests")} placeholder="যেমন: ১৫০" /><Err id="guests" /></div>
                <div className="sm:col-span-2"><L id="menu" label="পছন্দের খাবার বা মেনু" /><input id="bk-menu" className={field} value={f.menu} onChange={set("menu")} placeholder="যেমন: কাচ্চি বিরিয়ানি, রোস্ট, বোরহানি" /></div>
                <div className="sm:col-span-2"><L id="budget" label="আনুমানিক বাজেট" /><input id="bk-budget" className={field} value={f.budget} onChange={set("budget")} placeholder="যেমন: জনপ্রতি / মোট বাজেট" /></div>
                <div className="sm:col-span-2"><L id="notes" label="অতিরিক্ত নির্দেশনা" /><textarea id="bk-notes" rows={3} className={cn(field, "resize-y")} value={f.notes} onChange={set("notes")} placeholder="অন্য কোনো প্রয়োজন থাকলে লিখুন" /></div>
              </div>
              <button type="submit" className="mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-bold text-whatsapp-foreground shadow-soft transition hover:brightness-105 active:scale-[0.99]">
                <WaIcon /> WhatsApp-এ কোটেশন পাঠান <Send className="h-4 w-4" />
              </button>
              {sent && <p role="status" className="mt-4 rounded-xl bg-secondary/10 p-3 text-center text-sm text-secondary">WhatsApp খোলা হয়েছে — মেসেজটি পাঠালে আমরা শীঘ্রই যোগাযোগ করব।</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
