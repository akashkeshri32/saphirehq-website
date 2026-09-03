"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";
import WebinarFooter from "./webinarFooter";

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isWebinarPage = pathname?.startsWith("/webinar");

  return (
    <>
      {!isWebinarPage && <Navbar />}

      <div className="overflow-x-hidden">
        {children}
      </div>

      {isWebinarPage ? <WebinarFooter /> : <Footer />}
    </>
  );
}
