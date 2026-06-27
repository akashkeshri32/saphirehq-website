import Layout from "@/components/layout/layout";
import HeroV1 from "@/components/sections/hero-v1";
import { getAllDomains } from "@/lib/db-utils/domain";
import HomepageFormModal from "@/components/modals/homepage-form-modal";
import CardsWithCenterImg from "@/components/sections/cards-with-center-img";
import CardsWithLeftImg from "@/components/sections/cards-with-left-img";
import TwoColumnCards from "@/components/sections/two-column-cards";
import DomainsSection from "@/components/sections/domains";
import FaqSection from "@/components/sections/faq";
import { Suspense } from "react";

export default async function Home() {
  const domains = await getAllDomains();
  return (
    <>
      <div className="bg-dark relative overflow-x-hidden">
        {/* Decorative gradient orbs */}
        {/* Top-right orb — deep royal blue → bright violet */}
        <div
          className="fixed top-0 right-0 w-175 h-175 pointer-events-none z-0 max-md:opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 85% 0%, rgba(20,55,255,0.14) 0%, rgba(106,46,255,0.08) 45%, transparent 65%)",
          }}
        />
        {/* Top-left orb — neon purple → light lavender */}
        <div
          className="fixed top-0 left-0 w-175 h-175 pointer-events-none z-0 max-md:opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 15% 0%, rgba(154,45,255,0.11) 0%, rgba(201,166,255,0.06) 45%, transparent 65%)",
          }}
        />
        {/* Mid-page center glow */}
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 pointer-events-none z-0 max-md:opacity-30"
          style={{
            background:
              "radial-gradient(ellipse, rgba(20,55,255,0.04) 0%, transparent 70%)",
          }}
        />

        <Layout>
          <HeroV1 />

          {/* Render Homepage Form based on url param */}
          <Suspense>
            <HomepageFormModal domains={domains} />
          </Suspense>

          <CardsWithCenterImg />

          <CardsWithLeftImg />

          <TwoColumnCards />

          <DomainsSection />

          <FaqSection />
        </Layout>
      </div>
    </>
  );
}
