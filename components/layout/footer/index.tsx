import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/container";
import Logo from "@/assets/brand-logos/logo-plain.png";
import DOMAINS from "@/lib/data/domains";

const FOOTER_COLUMNS = [
  {
    label: "Programs",
    links : DOMAINS.map(domain => ({
      label : domain.label,
      href : `/domains/${domain.id}`
    }))
  },
  {
    label: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Success Stories", href: "/placement-statistics" },
      { label: "FAQs", href: "/#faqs" },
      { label: "Enroll Now", href: "/enroll-now" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    label: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Refund & Cancellation Policy", href: "/refund-and-cancellation-policy" },
      { label: "Terms And Conditions", href: "/terms-and-conditions" },
      { label: "Code Of Conduct", href: "/code-of-conduct" },
    ],

  },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-[64px] pb-32">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/">
              <Image src={Logo} alt="Sapphire IQ" height={24} className="h-24 w-auto" />
            </Link>

            <p className="text-14 text-gray-two mt-4 leading-5.5 max-w-65">
             The career accelerator that replaces theory with proof — real projects, real mentors, real placements.
            </p>

            <Link
              href="mailto:admin@sapphireiq.in"
              className="text-14 text-white-two hover:text-white transition-colors mt-4 inline-block"
            >
              admin@sapphireiq.in
            </Link>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.label}>
              <p className="text-13 font-semibold font-inter uppercase text-gray-two">
                {column.label}
              </p>

              <ul className="flex flex-col gap-3 mt-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-14 font-normal text-white-two hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-white/10 mt-14" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-6">
          <p className="text-13 text-gray-two">
            © {new Date().getFullYear()} Sapphire IQ. All rights reserved
          </p>
          <p className="text-13 text-gray-two font-medium">Unitech Unihomes, Sector 117, Noida, Uttar Pradesh, 201304</p>
        </div>
      </Container>
    </footer>
  );
}
