"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Navbar from "./navbar";
import Footer from "./footer";
import WebinarFooter from "./webinarFooter";

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isOrientationPage = pathname?.startsWith("/orientation");

  return (
    <>
      {/* Every toast.error()/toast.success() call across the site (forms,
          enquiries, etc.) needs a mounted Toaster to actually render —
          without one, those calls are silent no-ops. */}
      <Toaster position="top-center" />

      {!isOrientationPage && <Navbar />}

      <div className="overflow-x-hidden">
        {children}
      </div>

      {isOrientationPage ? <WebinarFooter /> : <Footer />}
    </>
  );
}
