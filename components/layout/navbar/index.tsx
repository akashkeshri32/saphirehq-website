"use client";

import { useState } from "react";
import Container from "../container";
import { ButtonLink } from "@/components/ui/button/button-link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import NavLogo from "@/assets/sapphire-logo-nav.svg";
import Link from "next/link";

const NAV_ITEMS = [
  { title: "Domains", href: "/#domains" },
  { title: "Instructors", href: "/#instructors" },
  { title: "Success stories", href: "/#success-stories" },
  { title: "FAQs", href: "/#faqs" },
  { title: "About Us", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 w-full top-4 z-50">
      <Container>
        <div className="bg-white/10 rounded-full backdrop-blur-md bg-canvas-tint/80 p-2.5 pl-5 flex items-center justify-between">
          <Link href={"/"}>
            <figure>
              <Image
                src={NavLogo}
                alt="saphireiq logo"
                height={30}
                objectFit="contain"
              />
            </figure>
          </Link>

          <div className="max-lg:hidden list-style-none flex gap-x-1 justify-between text-text-secondary">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.title} title={item.title} href={item.href} />
            ))}
          </div>

          <div className="max-lg:hidden space-x-1">
            <NavItem title="Login" href={"/login"} />
            <ButtonLink href="?apply-now" size={"sm"}>
              Apply For Internship
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="lg:hidden w-10 h-10 shrink-0 flex items-center justify-center rounded-full border border-border-stroke"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-3 rounded-3xl border border-border-stroke bg-white shadow-lg p-5 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-text-gray hover:text-black text-15 font-medium py-3 px-2 rounded-lg transition-colors"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-text-gray hover:text-black text-15 font-medium py-3 px-2 rounded-lg transition-colors"
            >
              Login
            </Link>

            <ButtonLink
              href="?apply-now"
              onClick={() => setIsOpen(false)}
              className="w-full justify-center mt-3"
            >
              Apply For Internship
            </ButtonLink>
          </div>
        )}
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
    <ButtonLink variant={"link"} href={href} className="font-medium! font-inter text-14">
      {title}
    </ButtonLink>
  );
};
