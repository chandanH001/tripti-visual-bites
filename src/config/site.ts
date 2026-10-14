/**
 * Central business configuration for খাবারের তৃপ্তি.
 * Every value marked PLACEHOLDER must be replaced with real details before launch.
 */
import hero from "@/assets/hero.jpg";
import biryani from "@/assets/biryani.jpg";
import buffet from "@/assets/buffet.jpg";
import roastKebab from "@/assets/roast-kebab.jpg";
import fish from "@/assets/fish.jpg";
import dessert from "@/assets/dessert.jpg";
import vorta from "@/assets/vorta.jpg";
import kitchen from "@/assets/kitchen.jpg";

export const images = { hero, biryani, buffet, roastKebab, fish, dessert, vorta, kitchen };

export const SITE = {
  name: "খাবারের তৃপ্তি",
  nameEn: "KHABARER TRIPTI",
  tagline: "প্রতিটি আয়োজনে, স্বাদের তৃপ্তি।",
  whatsappNumber: "8801347136483",
  whatsappDisplay: "01347136483",
  whatsappTel: "tel:+8801347136483",
  // Empty string = "not provided yet"; the site shows a neutral notice instead of fake data.
  phone: "", // PLACEHOLDER e.g. "01XXXXXXXXX"
  email: "", // PLACEHOLDER
  address: "", // PLACEHOLDER
  deliveryArea: "", // PLACEHOLDER
  hours: "", // PLACEHOLDER
  facebook: "", // PLACEHOLDER — full Facebook page URL
  instagram: "", // PLACEHOLDER
  googleMapsEmbed: "", // PLACEHOLDER — paste Google Maps embed URL
  googleReviewUrl: "", // PLACEHOLDER — Google review link
};

export const NOT_SET = "শীঘ্রই যুক্ত করা হবে";
export const callHref = () => (SITE.phone ? `tel:${SITE.phone.replace(/[^\d+]/g, "")}` : SITE.whatsappTel);

/** Daily meal price in Taka — confirmed by the business. Do not change without permission. */
export const MEAL_PRICE = 130;

const SIDES = ["সবজি", "ভাজি", "ডাল", "সালাদ"];
export const WEEKLY_MENU = [
  { day: "শনিবার", jsDay: 6, main: "মাছ", items: ["মাছ", ...SIDES], image: "fish" },
  { day: "রবিবার", jsDay: 0, main: "গরুর মাংস", items: ["গরুর মাংস", ...SIDES], image: "beef" },
  { day: "সোমবার", jsDay: 1, main: "সোনালি / দেশি মুরগি", items: ["সোনালি মুরগি বা দেশি মুরগি", ...SIDES], image: "chicken" },
  { day: "মঙ্গলবার", jsDay: 2, main: "বড় মাছ", items: ["বড় মাছ", ...SIDES], image: "fish" },
  { day: "বুধবার", jsDay: 3, main: "সোনালি মুরগি ও ভর্তা", items: ["সোনালি মুরগি", "ভর্তা", "ভাজি", "ডাল", "সালাদ"], image: "bhorta" },
  { day: "বৃহস্পতিবার", jsDay: 4, main: "গরুর মাংস", items: ["গরুর মাংস", ...SIDES], image: "beef" },
  { day: "শুক্রবার", jsDay: 5, main: "চিকেন বিরিয়ানি", items: ["চিকেন বিরিয়ানি", "ডিম", "ভাজি", "সালাদ"], image: "biryani" },
];

export const NAV = [
  { id: "home", label: "হোম" },
  { id: "about", label: "আমাদের সম্পর্কে" },
  { id: "weekly", label: "সাপ্তাহিক মেনু" },
  { id: "menu", label: "ক্যাটারিং মেনু" },
  { id: "services", label: "ক্যাটারিং সার্ভিস" },
    { id: "reviews", label: "কাস্টমার রিভিউ" },
  { id: "contact", label: "যোগাযোগ" },
];

export const MENU_CATEGORIES = [
  "সব খাবার",
  "বিরিয়ানি ও পোলাও",
  "ভাত ও মাছ",
  "মাংস ও রোস্ট",
  "কাবাব ও গ্রিল",
  "ভর্তা ও ভাজি",
  "ডেজার্ট ও মিষ্টি",
  "পানীয়",
] as const;

export type MenuItem = {
  name: string;
  desc: string;
  category: (typeof MENU_CATEGORIES)[number];
  image: string;
  /** Set to null to show "মূল্য জানতে যোগাযোগ করুন". Demo prices are illustrative only. */
  price: string | null;
};

export const MENU: MenuItem[] = [
  { name: "কাচ্চি বিরিয়ানি", desc: "সুগন্ধি চাল, খাসির মাংস ও আলুর ঐতিহ্যবাহী দমে রান্না।", category: "বিরিয়ানি ও পোলাও", image: biryani, price: null },
  { name: "চিকেন বিরিয়ানি", desc: "মশলাদার মুরগি ও ঝরঝরে বাসমতী চালের সমন্বয়।", category: "বিরিয়ানি ও পোলাও", image: hero, price: null },
  { name: "মোরগ পোলাও", desc: "ঘিয়ে ভাজা পোলাও আর নরম মোরগের মাংস।", category: "বিরিয়ানি ও পোলাও", image: kitchen, price: null },
  { name: "সাদা ভাত", desc: "ঝরঝরে সাদা ভাত, যেকোনো তরকারির সঙ্গী।", category: "ভাত ও মাছ", image: vorta, price: null },
  { name: "মাছের কালিয়া", desc: "রুই মাছের ঘন, মশলাদার বাঙালি কালিয়া।", category: "ভাত ও মাছ", image: fish, price: null },
  { name: "গরুর মাংস", desc: "ধীরে রান্না করা ঝাল-মশলার গরুর মাংস ভুনা।", category: "মাংস ও রোস্ট", image: kitchen, price: null },
  { name: "চিকেন রোস্ট", desc: "বিয়েবাড়ির স্বাদের ঘি-মাখা মুরগির রোস্ট।", category: "মাংস ও রোস্ট", image: roastKebab, price: null },
  { name: "বিফ রেজালা", desc: "দই ও মশলায় রান্না করা মোলায়েম রেজালা।", category: "মাংস ও রোস্ট", image: hero, price: null },
  { name: "চিকেন কাবাব", desc: "কয়লার আঁচে গ্রিল করা সুস্বাদু শিক কাবাব।", category: "কাবাব ও গ্রিল", image: roastKebab, price: null },
  { name: "ভর্তা প্ল্যাটার", desc: "আলু, বেগুন ও শুঁটকি ভর্তার ঘরোয়া আয়োজন।", category: "ভর্তা ও ভাজি", image: vorta, price: null },
  { name: "ফিরনি", desc: "মাটির বাটিতে ঠান্ডা, ঘন দুধের ফিরনি।", category: "ডেজার্ট ও মিষ্টি", image: dessert, price: null },
  { name: "জর্দা", desc: "বাদাম-কিশমিশে সাজানো মিষ্টি জর্দা পোলাও।", category: "ডেজার্ট ও মিষ্টি", image: dessert, price: null },
  { name: "বোরহানি", desc: "দই, পুদিনা ও মশলার সতেজ ঐতিহ্যবাহী পানীয়।", category: "পানীয়", image: dessert, price: null },
];

export const SERVICES = [
  { title: "বিয়ে ও বিবাহের আয়োজন", desc: "বিয়ে ও বিবাহ-সম্পর্কিত অনুষ্ঠানের জন্য বিশেষ খাবারের আয়োজন।", image: buffet },
  { title: "জন্মদিনের অনুষ্ঠান", desc: "জন্মদিনের আনন্দকে আরও সুস্বাদু করতে পছন্দমতো খাবারের ব্যবস্থা।", image: dessert },
  { title: "পারিবারিক অনুষ্ঠান", desc: "দাওয়াত, আকিকা, মিলাদ ও অন্যান্য পারিবারিক আয়োজনে ক্যাটারিং।", image: hero },
  { title: "কর্পোরেট ক্যাটারিং", desc: "অফিস মিটিং, সেমিনার, প্রশিক্ষণ ও কর্পোরেট অনুষ্ঠানের খাবার।", image: kitchen },
  { title: "বুফে ও বড় আয়োজন", desc: "অতিথিদের জন্য পরিকল্পিত বুফে ও বড় অনুষ্ঠানের খাবারের ব্যবস্থা।", image: roastKebab },
  { title: "কাস্টম ফুড অর্ডার", desc: "আপনার প্রয়োজন, অতিথির সংখ্যা ও বাজেট অনুযায়ী মেনু পরিকল্পনা।", image: biryani },
];

export const PACKAGES = [
  { name: "ছোট আয়োজন", suited: "জন্মদিন ও ছোট পারিবারিক অনুষ্ঠান।", price: null as string | null, featured: false,
    includes: ["পছন্দমতো খাবারের মেনু", "অতিথির সংখ্যা অনুযায়ী পরিকল্পনা", "বাজেট অনুযায়ী কোটেশন"] },
  { name: "বিশেষ আয়োজন", suited: "পারিবারিক দাওয়াত ও মাঝারি অনুষ্ঠান।", price: null as string | null, featured: true,
    includes: ["একাধিক খাবারের সমন্বয়ে মেনু", "আয়োজন অনুযায়ী খাবারের পরিকল্পনা", "কাস্টম কোটেশন"] },
  { name: "প্রিমিয়াম ক্যাটারিং", suited: "বিয়ে ও বড় অনুষ্ঠান।", price: null as string | null, featured: false,
    includes: ["বিস্তারিত মেনু পরিকল্পনা", "অতিথির সংখ্যা অনুযায়ী কোটেশন", "প্রয়োজন অনুযায়ী ক্যাটারিং ব্যবস্থাপনা"] },
];

export const GALLERY = [
  { src: hero, alt: "বাঙালি খাবারের সাজানো আয়োজন" },
  { src: buffet, alt: "বিয়ের বুফে আয়োজনের নমুনা" },
  { src: biryani, alt: "হাঁড়িতে কাচ্চি বিরিয়ানি" },
  { src: kitchen, alt: "রান্নাঘরে বিরিয়ানি ও রেজালা প্রস্তুত" },
  { src: roastKebab, alt: "চিকেন রোস্ট ও শিক কাবাব" },
  { src: fish, alt: "মাছের কালিয়া" },
  { src: vorta, alt: "কলাপাতায় ভর্তা ও ভাত" },
  { src: dessert, alt: "ফিরনি, জর্দা ও বোরহানি" },
];

/** SAMPLE testimonials — preview only. Replace with real customer reviews. */
export const TESTIMONIALS = [
  { name: "নমুনা গ্রাহক ১", rating: 0, text: "এখানে আসল গ্রাহকের মতামত বসানো হবে। খাবারের স্বাদ ও পরিবেশনা নিয়ে গ্রাহকের অভিজ্ঞতা।", date: "" },
  { name: "নমুনা গ্রাহক ২", rating: 0, text: "এটি একটি নমুনা রিভিউ। প্রকৃত রিভিউ পাওয়া গেলে এই লেখাটি পরিবর্তন করুন।", date: "" },
  { name: "নমুনা গ্রাহক ৩", rating: 0, text: "নমুনা মতামত — আয়োজনের অভিজ্ঞতা সম্পর্কে গ্রাহকের প্রকৃত কথা এখানে থাকবে।", date: "" },
];

export const FAQS = [
  { q: "কী কী অনুষ্ঠানে ক্যাটারিং সার্ভিস পাওয়া যায়?", a: "বিয়ে, জন্মদিন, পারিবারিক দাওয়াত, আকিকা, মিলাদ, কর্পোরেট অনুষ্ঠান ও বুফে আয়োজনসহ বিভিন্ন অনুষ্ঠানের জন্য ক্যাটারিং নিয়ে আলোচনা করা যায়।" },
  { q: "ন্যূনতম কতজনের খাবারের অর্ডার দেওয়া যায়?", a: "বিস্তারিত জানতে আমাদের সঙ্গে যোগাযোগ করুন।" },
  { q: "নিজেদের পছন্দমতো মেনু তৈরি করা যাবে কি?", a: "হ্যাঁ, আপনার পছন্দ ও বাজেট অনুযায়ী মেনু সাজানোর বিষয়ে আলোচনা করা যায়।" },
  { q: "ক্যাটারিংয়ের মূল্য কীভাবে নির্ধারণ করা হয়?", a: "মেনু, অতিথির সংখ্যা ও আয়োজনের ধরন অনুযায়ী মূল্য নির্ধারিত হয়। কোটেশনের জন্য যোগাযোগ করুন।" },
  { q: "কত দিন আগে বুকিং করতে হবে?", a: "বিস্তারিত জানতে আমাদের সঙ্গে যোগাযোগ করুন।" },
  { q: "খাবার সরবরাহের এলাকা কোথায়?", a: "বিস্তারিত জানতে আমাদের সঙ্গে যোগাযোগ করুন।" },
  { q: "খাবার পরিবেশনের ব্যবস্থাও কি রয়েছে?", a: "বিস্তারিত জানতে আমাদের সঙ্গে যোগাযোগ করুন।" },
  { q: "কীভাবে কোটেশন পাওয়া যাবে?", a: "এই পেজের বুকিং ফর্ম পূরণ করে অথবা সরাসরি WhatsApp-এ আপনার আয়োজনের তথ্য পাঠিয়ে কোটেশন চাইতে পারেন।" },
];
