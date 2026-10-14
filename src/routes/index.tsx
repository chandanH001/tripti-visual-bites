import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { WeeklyMenu } from "@/components/site/WeeklyMenu";
import { Booking } from "@/components/site/Booking";
import {
  Hero, Trust, About, MenuSection, Services, Packages, HowItWorks, Gallery, Reviews, Faq, Contact, Footer, FloatingActions,
} from "@/components/site/Sections";

const TITLE = "খাবারের তৃপ্তি | প্রতিদিনের খাবার ও ক্যাটারিং সার্ভিস";
const DESC =
  "খাবারের তৃপ্তিতে প্রতিদিনের খাবার, সাপ্তাহিক মেনু এবং বিভিন্ন অনুষ্ঠানের ক্যাটারিং সার্ভিস সম্পর্কে জানুন। খাবারের অর্ডার ও কোটেশনের জন্য WhatsApp-এ যোগাযোগ করুন।";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "bn_BD" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          name: "খাবারের তৃপ্তি (Khabarer Tripti)",
          servesCuisine: "Bengali",
          description: DESC,
          areaServed: "Bangladesh",
          telephone: "+8801347136483",
          priceRange: "৳130",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <WeeklyMenu />
        <About />
        <MenuSection />
        <Services />
        <Packages />
        <HowItWorks />
        <Gallery />
        <Reviews />
        <Booking />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
