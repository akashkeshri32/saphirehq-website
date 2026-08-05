import type { Metadata } from "next";
import Container from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button/button-link";

export const metadata: Metadata = {
  title: "Page Not Found | Sapphire IQ",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="pt-44 pb-28">
      <Container className="text-center flex flex-col items-center">
        <span className="font-jetbrains text-14 font-semibold text-blue-primary">
          404
        </span>

        <h1 className="text-h1-mobile lg:text-h1 font-heading font-semibold mt-4.5">
          Page not found.
        </h1>

        <p className="text-17 text-text-gray mt-5 max-w-120">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back on track.
        </p>

        <ButtonLink href="/" className="mt-8">
          Back to Homepage
        </ButtonLink>
      </Container>
    </section>
  );
}
