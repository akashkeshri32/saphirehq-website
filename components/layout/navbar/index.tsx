// import Image from "next/image";
import Container from "../container";
import { Button } from "@/components/ui/button/button";
import { ButtonLink } from "@/components/ui/button/button-link";

const Navbar = () => {
  return (
    <nav className="fixed left-0 w-full top-4 max-lg:hidden z-50">
      <Container>
        <div className="border border-border-primary rounded-full backdrop-blur-md bg-canvas-tint/80 p-2.5 pl-5 flex items-center justify-between">
          <figure>
            <h3
              className="text-2xl font-bold font-heading"
              style={{
                background:
                  "linear-gradient(135deg, #1437FF 0%, #6A2EFF 50%, #9A2DFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SaphireHQ
            </h3>
          </figure>

          <div className="list-style-none flex gap-x-4 text-text-secondary">
            <NavItem title="Domains" href="/domains" />
            <NavItem title="Instructors" href="/instructors" />
            <NavItem title="About Us" href="/about" />
          </div>
          <div>
            <Button size={"sm"} className="rounded-full">
              Enroll Now
            </Button>
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
