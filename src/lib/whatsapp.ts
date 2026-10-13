import { SITE } from "@/config/site";

export const DEFAULT_WA_MESSAGE =
  "আসসালামু আলাইকুম, আমি খাবারের তৃপ্তির ক্যাটারিং সার্ভিস সম্পর্কে জানতে চাই।";

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waFood = (name: string) =>
  waLink(`আসসালামু আলাইকুম, আমি ${name} সম্পর্কে জানতে চাই। অনুগ্রহ করে বিস্তারিত ও মূল্য জানাবেন।`);

export const waService = (name: string) =>
  waLink(`আসসালামু আলাইকুম, আমি আপনাদের "${name}" ক্যাটারিং সার্ভিস সম্পর্কে বিস্তারিত জানতে চাই।`);

export const waPackage = (name: string) =>
  waLink(`আসসালামু আলাইকুম, আমি "${name}" প্যাকেজের কোটেশন নিতে আগ্রহী।`);
