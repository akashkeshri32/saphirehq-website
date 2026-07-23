import Image from "next/image";
import Container from "@/components/layout/container";

import Accenture from "@/assets/partner-logos/accenture.png";
import Adobe from "@/assets/partner-logos/adobe.png";
import Amazon from "@/assets/partner-logos/amazon.png";
import Capgemini from "@/assets/partner-logos/capgemini.png";
import Cognizant from "@/assets/partner-logos/cognizant.png";
import Deloitte from "@/assets/partner-logos/deloitte.png";
import Flipkart from "@/assets/partner-logos/flipkart.png";
import Google from "@/assets/partner-logos/google.png";
import Hcl from "@/assets/partner-logos/hcl.png";
import Ibm from "@/assets/partner-logos/ibm.png";
import Infosys from "@/assets/partner-logos/infosys.png";
import Jio from "@/assets/partner-logos/jio.png";
import Ltimindtree from "@/assets/partner-logos/ltimindtree.png";
import Meesho from "@/assets/partner-logos/meesho.png";
import Oracle from "@/assets/partner-logos/oracle.png";
import Paytm from "@/assets/partner-logos/paytm.png";
import Phonepe from "@/assets/partner-logos/phonepe.png";
import Razorpay from "@/assets/partner-logos/razorpay.png";
import Swiggy from "@/assets/partner-logos/swiggy.png";
import Tcs from "@/assets/partner-logos/tcs.png";
import TechMahindra from "@/assets/partner-logos/tech-mahindra.png";
import Wipro from "@/assets/partner-logos/wipro.png";
import Zoho from "@/assets/partner-logos/zoho.png";

const LOGOS = [
  { src: Accenture, name: "Accenture" },
  { src: Adobe, name: "Adobe" },
  { src: Amazon, name: "Amazon" },
  { src: Capgemini, name: "Capgemini" },
  { src: Cognizant, name: "Cognizant" },
  { src: Deloitte, name: "Deloitte" },
  // { src: Flipkart, name: "Flipkart" },
  { src: Google, name: "Google" },
  { src: Hcl, name: "HCL" },
  { src: Ibm, name: "IBM" },
  { src: Infosys, name: "Infosys" },
  { src: Jio, name: "Jio" },
  { src: Ltimindtree, name: "LTIMindtree" },
  { src: Meesho, name: "Meesho" },
  { src: Oracle, name: "Oracle" },
  { src: Paytm, name: "Paytm" },
  // { src: Phonepe, name: "PhonePe" },
  { src: Razorpay, name: "Razorpay" },
  { src: Swiggy, name: "Swiggy" },
  { src: Tcs, name: "TCS" },
  { src: TechMahindra, name: "Tech Mahindra" },
  { src: Wipro, name: "Wipro" },
  { src: Zoho, name: "Zoho" },
];

export const LogoCarouselSection = () => {
  return (
    <section className="py-80">
      <Container>
        <p className="text-13 font-jetbrains font-normal text-center text-text-gray">
          Trusted by 250+ hiring companies
        </p>

        <div className="mt-9 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center px-7 shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-auto min-w16 object-contain grayscale opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
