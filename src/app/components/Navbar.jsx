"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import CardDrawer from "./cartdrawer";
import { useSelector } from "react-redux";

const Navbar = () => {
  return (
    <header className=" w-full bg-yellow py-2 px-2 ">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-1.5">
          <Image src="/img/dbf.png" alt="Logo" width={46} height={46} />
          <p className="leading-4 -ml-3 font-thin text-transparent bold-f bg-clip-text bg-gradient-to-r from-white  to-primary">
            DB Fashion
          </p>
        </Link>
        <div className="flex gap-4">
          <p>
            <CardDrawer type="" />
          </p>
          <p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 5L2.6 5M18 10.5L2.6 10.5M18 16L9.2 16"
                stroke="#070C10"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="w-full"></div>
    </header>
  );
};

export default Navbar;
