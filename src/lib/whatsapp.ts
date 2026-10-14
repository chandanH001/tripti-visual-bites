import { SITE, MEAL_PRICE } from "@/config/site";

export const DEFAULT_WA_MESSAGE =
  "আসসালামু আলাইকুম, আমি খাবারের তৃপ্তির খাবার ও ক্যাটারিং সার্ভিস সম্পর্কে জানতে চাই।";

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
export const bn = (n: number | string) => String(n).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const waMealOrder = (day: string, items: string, qty: number) =>
  waLink(
    `আসসালামু আলাইকুম।\nআমি খাবারের তৃপ্তি থেকে খাবার অর্ডার করতে চাই।\n\nখাবার: ${day}-এর মেনু (${items})\nপরিমাণ: ${bn(qty)} মিল\nমূল্য: ৳${bn(qty * MEAL_PRICE)} (${bn(qty)} × ৳${bn(MEAL_PRICE)}, ডেলিভারি চার্জ আলাদা)\n\nঅনুগ্রহ করে অর্ডারটি নিশ্চিত করার জন্য যোগাযোগ করুন।`,
  );

export const waOrderGeneral = () =>
  waLink("আসসালামু আলাইকুম।\nআমি খাবারের তৃপ্তি থেকে আজকের খাবার অর্ডার করতে চাই। অনুগ্রহ করে বিস্তারিত জানাবেন।");

export const waFood = (name: string) =>
  waLink(`আসসালামু আলাইকুম, আমি ${name} সম্পর্কে জানতে চাই। অনুগ্রহ করে বিস্তারিত ও মূল্য জানাবেন।`);

export const waService = (name: string) =>
  waLink(`আসসালামু আলাইকুম, আমি আপনাদের "${name}" ক্যাটারিং সার্ভিসের কোটেশন নিতে চাই।`);

export const waPackage = (name: string) =>
  waLink(`আসসালামু আলাইকুম, আমি "${name}" প্যাকেজের কোটেশন নিতে আগ্রহী।`);
