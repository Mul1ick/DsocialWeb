import type { ReactNode } from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
