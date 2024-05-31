"use client";

import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ConditionalLayoutRendering = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  return (
    <>
      {!isAuthPage && <Header />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
};

export default ConditionalLayoutRendering;
