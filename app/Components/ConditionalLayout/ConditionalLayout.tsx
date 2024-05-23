"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const ConditionalLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
};

export default ConditionalLayout;
