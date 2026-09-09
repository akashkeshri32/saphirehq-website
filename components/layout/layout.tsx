"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";
import WebinarFooter from "./webinarFooter";

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isOrientationPage = pathname?.startsWith("/orientation");

  return (
    <>
      {!isOrientationPage && <Navbar />}

      <div className="overflow-x-hidden">
        {children}
      </div>

      {isOrientationPage ? <WebinarFooter /> : <Footer />}
    </>
  );
}
