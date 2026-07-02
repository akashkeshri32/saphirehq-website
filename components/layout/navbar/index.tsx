// import Image from "next/image";
import Container from "../container";
import { ButtonLink } from "@/components/ui/button/button-link";
import Image from "next/image";

import NavLogo from "@/assets/images/nav-logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed left-0 w-full top-4 max-lg:hidden z-50">
      <Container>
        <div className="border border-border-primary rounded-full backdrop-blur-md bg-canvas-tint/80 p-2.5 pl-5 flex items-center justify-between">
          <Link href={"/"}>
            <figure>
              <Image
                src={NavLogo}
                alt="saphireiq logo"
                height={45}
                objectFit="contain"
              />
            </figure>
          </Link>

          <div className="list-style-none flex gap-x-4 text-text-secondary">
            <NavItem title="Domains" href="/#domains" />
            <NavItem title="Instructors" href="/#instructors" />
            <NavItem title="Success stories" href="/#success-stories" />
            <NavItem title="FAQs" href="/#faqs" />

            <NavItem title="About Us" href="/about" />
          </div>
          <div>
            <ButtonLink href="?apply-now" size={"sm"} className="rounded-full">
              Apply Now
            </ButtonLink>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

type NavItemProps = {
  title: string;
  href: string;
};

const NavItem = ({ title, href }: NavItemProps) => {
  return (
    <ButtonLink variant={"link"} href={href}>
      {title}
    </ButtonLink>
  );
};
