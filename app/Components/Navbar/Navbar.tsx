"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Lists", href: "/lists" },
  { name: "List Detail", href: "/lists/10" },
  { name: "About", href: "/about" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link className="text-white hover:text-gray-300" href="/">
            RAJA USMAN
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navLinks?.map((navLink) => {
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
            })}
          </ul>
        </div>
        <div className="hidden md:block">
          <button
            className="text-white hover:text-gray-300"
            onClick={() => alert("Logout clicked")}
          >
            Logout
          </button>
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
            alt="User"
            className="w-8 h-8 rounded-full ml-2"
          />
        </div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 18h18v-2H3v2zM3 11h18V9H3v2zm0-7h18V2H3v2z"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="mt-2">
            {navLinks?.map((navLink) => {
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
            })}
            <li>
              <button
                className="block text-white hover:text-gray-300"
                onClick={() => alert("Logout clicked")}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;