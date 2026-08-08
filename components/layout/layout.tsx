import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />

      <div className="overflow-x-hidden">
        {children}
      </div>

      <Footer />
    </>
  );
}
