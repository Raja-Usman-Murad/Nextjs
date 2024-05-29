"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Lists", href: "/lists" },
];

const NavLinks: React.FC = () => {
  const pathName = usePathname();
  return navLinks?.map((navLink) => {
    const isActive = navLink.href === pathName;
    return (
      <li key={navLink?.name}>
        <Link
          className={`text-white hover:text-gray-300 ${
            isActive ? "font-bold" : ""
          }`}
          href={navLink?.href}
        >
          {navLink?.name}
        </Link>
      </li>
    );
  });
};

export default NavLinks;
