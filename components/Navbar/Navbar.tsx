"use client";

import { useState } from "react";
import Link from "next/link";
import NavLinks from "./partials/NavLinks";
import LogoutButton from "./partials/LogoutButton";
import UserImage from "./partials/UserImage";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useRouter } from "next/navigation";
import { authActions } from "@/reduxStore/slices/authSlice";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    dispatch(authActions.Logout());
    try {
      const response: any = await axios.get(`/api/auth/logout`);
      if (response.data.success) {
        router.push("/signin");
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link className="text-white hover:text-gray-300" href="/">
            Logo
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <NavLinks />
          </ul>
        </div>
        <div className="hidden md:block">
          <LogoutButton onClickHandler={handleLogout} />
          <UserImage />
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
        <>
          <div className="md:hidden">
            <ul className="mt-2">
              <NavLinks />
            </ul>
          </div>
          <div className="md:hidden">
            <LogoutButton onClickHandler={handleLogout} />
            <UserImage />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
