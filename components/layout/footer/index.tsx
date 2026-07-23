import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/container";
import Logo from "@/assets/sapphire-logo.svg";

const FOOTER_COLUMNS = [
  {
    label: "Programs",
    links: [
      { label: "Data Science", href: "/#data-science" },
      { label: "AI/ML", href: "/#ai-ml" },
      { label: "UI/UX", href: "/#ui-ux" },
      { label: "Full Stack", href: "/#full-stack" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Success Stories", href: "/#success-stories" },
      { label: "FAQs", href: "/#faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Legal",
    links: [{ label: "Privacy Policy", href: "/privacy-policy" }],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-[64px] pb-32">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/">
              <Image src={Logo} alt="Sapphire IQ" className="h-32 w-auto" />
            </Link>

            <p className="text-14 text-gray-two mt-4 leading-5.5 max-w-65">
             The career accelerator that replaces theory with proof — real projects, real mentors, real placements.
            </p>
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
          <p className="text-13 text-gray-two font-medium">Ahmedabad, India</p>
        </div>
      </Container>
    </footer>
  );
}
