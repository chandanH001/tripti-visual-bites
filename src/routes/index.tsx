import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Booking } from "@/components/site/Booking";
import {
  Hero, Trust, About, MenuSection, Services, Packages, HowItWorks, Gallery, Reviews, Faq, Contact, Footer, FloatingActions,
} from "@/components/site/Sections";

const TITLE = "খাবারের তৃপ্তি | বিয়ে, অনুষ্ঠান ও কর্পোরেট ক্যাটারিং সার্ভিস";
const DESC =
  "খাবারের তৃপ্তির সঙ্গে আপনার বিয়ে, জন্মদিন, পারিবারিক অনুষ্ঠান ও কর্পোরেট আয়োজনের জন্য পছন্দমতো খাবারের মেনু ও ক্যাটারিং কোটেশন নিন।";

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
