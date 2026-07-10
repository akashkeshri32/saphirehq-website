import { PropsWithChildren } from "react";
import Container from "@/components/layout/container";

export default function LegalContent({ children }: PropsWithChildren) {
  return (
    <Container className="py-16 md:py-20">
      <article className="legal-content max-w-3xl mx-auto">
        {children}
      </article>
    </Container>
  );
}
