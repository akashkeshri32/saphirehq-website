import AccentureLogo from "@/assets/partner-logos/accenture.png";
import AdobeLogo from "@/assets/partner-logos/adobe.png";
import AmazonLogo from "@/assets/partner-logos/amazon.png";
import CapgeminiLogo from "@/assets/partner-logos/capgemini.png";
import CognizantLogo from "@/assets/partner-logos/cognizant.png";
import DeloitteLogo from "@/assets/partner-logos/deloitte.png";
import FlipkartLogo from "@/assets/partner-logos/flipkart.png";
import GoogleLogo from "@/assets/partner-logos/google.png";
import HclLogo from "@/assets/partner-logos/hcl.png";
import IbmLogo from "@/assets/partner-logos/ibm.png";
import InfosysLogo from "@/assets/partner-logos/infosys.png";
import JioLogo from "@/assets/partner-logos/jio.png";
import LtiMindtreeLogo from "@/assets/partner-logos/ltimindtree.png";
import MeeshoLogo from "@/assets/partner-logos/meesho.png";
import OracleLogo from "@/assets/partner-logos/oracle.png";
import PaytmLogo from "@/assets/partner-logos/paytm.png";
import PhonePeLogo from "@/assets/partner-logos/phonepe.png";
import RazorpayLogo from "@/assets/partner-logos/razorpay.png";
import SwiggyLogo from "@/assets/partner-logos/swiggy.png";
import TcsLogo from "@/assets/partner-logos/tcs.png";
import TechMahindrLogo from "@/assets/partner-logos/tech-mahindra.png";
import WiproLogo from "@/assets/partner-logos/wipro.png";
import ZohoLogo from "@/assets/partner-logos/zoho.png";

import Image from "next/image";
import "./style.css";

const logos = [
  { src: GoogleLogo, alt: "Google" },
  { src: AmazonLogo, alt: "Amazon" },
  { src: AdobeLogo, alt: "Adobe" },
  { src: IbmLogo, alt: "IBM" },
  { src: OracleLogo, alt: "Oracle" },
  { src: DeloitteLogo, alt: "Deloitte" },
  { src: AccentureLogo, alt: "Accenture" },
  { src: CapgeminiLogo, alt: "Capgemini" },
  { src: CognizantLogo, alt: "Cognizant" },
  { src: InfosysLogo, alt: "Infosys" },
  { src: TcsLogo, alt: "TCS" },
  // { src: WiproLogo, alt: "Wipro" },
  { src: HclLogo, alt: "HCLTech" },
  { src: TechMahindrLogo, alt: "Tech Mahindra" },
  { src: LtiMindtreeLogo, alt: "LTIMindtree" },
  { src: ZohoLogo, alt: "Zoho" },
  { src: PhonePeLogo, alt: "PhonePe" },
  // { src: FlipkartLogo, alt: "Flipkart" },
  { src: SwiggyLogo, alt: "Swiggy" },
  { src: RazorpayLogo, alt: "Razorpay" },
  // { src: MeeshoLogo, alt: "Meesho" },
  { src: PaytmLogo, alt: "Paytm" },
  { src: JioLogo, alt: "Jio" },
];

const LogosCarousel = () => {
  return (
    <section className="py-28 relative z-20 overflow-hidden">
      <h5 className="mb-10 mt-5 text-center text-ink font-semibold uppercase text-lg">
        Career Opportunities Across Leading Organizations
      </h5>
      <div className="marquee">
        <div className="marquee__item flex gap-x-14 items-center pr-14">
          {logos.map(({ src, alt }, i) => (
            <figure key={`track2-${i}`}>
              <Image
                src={src}
                alt={alt}
                key={`track2-${i}`}
                height={26}
                objectFit="contain"
                className="opacity-70 object-contain"
              />
            </figure>
          ))}
        </div>

        <div className="marquee__item flex gap-x-14 items-center pr-14">
          {logos.map(({ src, alt }, i) => (
            <figure key={`track2-${i}`}>
              <Image
                src={src}
                alt={alt}
                key={`track2-${i}`}
                height={26}
                objectFit="contain"
                className="opacity-70 object-contain"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosCarousel;
