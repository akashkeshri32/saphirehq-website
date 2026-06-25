import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}
