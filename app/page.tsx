import Layout from "@/components/layout/layout";
import HeroV1 from "@/components/sections/hero-v1";
import GradientRight from "@/assets/images/primary-gradient-right.svg";
import GradientLeft from "@/assets/images/primary-gradient-left.svg";
import Image from "next/image";
import { getAllDomains } from "@/lib/db-utils/domain";
import HomepageFormModal from "@/components/modals/homepage-form-modal";
import CardsWithCenterImg from "@/components/sections/cards-with-center-img";
import CardsWithLeftImg from "@/components/sections/cards-with-left-img";
import TwoColumnCards from "@/components/sections/two-column-cards";
import DomainsSection from "@/components/sections/domains";
import FaqSection from "@/components/sections/faq";

export default async function Home() {
  const domains = await getAllDomains();
  return (
    <>
      <div className="bg-dark">
        <Image
          src={GradientRight}
          alt=""
          width={400}
          height={400}
          className="absolute top-0 right-0"
          objectFit="contain"
        />

        <Image
          src={GradientLeft}
          alt=""
          width={400}
          height={400}
          className="absolute top-0 left-0"
          objectFit="contain"
        />
        <Layout>
          <HeroV1 />

          {/* Render Homepage Form based on url param */}

          <HomepageFormModal domains={domains} />

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
