import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/container";
import Logo from "@/assets/brand-logos/logo-plain.png";

export default function WebinarFooter() {
  return (
    <footer className="bg-black pt-14 pb-10">
      <Container>
        <div className="flex flex-col items-center text-center gap-4">
          <Link href="/">
            <Image src={Logo} alt="Sapphire IQ" height={24} className="h-16 w-auto" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              href="mailto:admin@sapphireiq.in"
              className="text-14 text-white-two hover:text-white transition-colors"
            >
              admin@sapphireiq.in
            </Link>
            <span className="text-white-two/40 max-sm:hidden">|</span>
            <Link
              href="tel:+918851442459"
              className="text-14 text-white-two hover:text-white transition-colors"
            >
              +91 88514 42459
            </Link>
          </div>
        </div>

        <div className="h-px bg-white/10 mt-8" />

        <p className="text-13 text-gray-two text-center mt-6">
          © {new Date().getFullYear()} Sapphire IQ. All rights reserved
        </p>
      </Container>
    </footer>
  );
}
