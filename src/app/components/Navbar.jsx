import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className=" w-full bg-yellow py-2 px-2 ">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1.5">
          <Image src="/img/dbf.png" alt="Logo" width={46} height={46} />
          <p className="leading-4 -ml-3 font-thin text-transparent bold-f bg-clip-text bg-gradient-to-r from-white  to-primary">
            DB Fashion
          </p>
        </Link>
        <div className="flex gap-4">
          <p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0025 4.10999C8.16437 2.67936 5.50125 2.80811 3.81187 4.49686C1.9825 6.32624 1.9825 9.29686 3.81187 11.1262L9.55687 16.8712C9.80125 17.1156 10.1969 17.1156 10.4412 16.8712L16.1862 11.1262C18.0156 9.29686 18.0156 6.32624 16.1862 4.49686C14.505 2.81561 11.8419 2.69687 10.0025 4.10999ZM10 5.56499C10.2737 5.55999 10.4169 5.40374 10.4394 5.38436C11.9112 4.10311 13.965 4.04374 15.3025 5.38124C16.6437 6.72249 16.6437 8.90062 15.3025 10.2425L9.99875 15.5456L4.69562 10.2425C3.35437 8.90062 3.35437 6.72249 4.69562 5.38124C6.0375 4.03936 8.21625 4.03999 9.55812 5.38186C9.675 5.49874 9.83437 5.56499 10 5.56499Z"
                fill="#070C10"
              />
            </svg>
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
                d="M2.5 9.16666H5.83333M17.5 9.16666H9.16667"
                stroke="#070C10"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.33333 11.6667H11.6667"
                stroke="#070C10"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 7.5L12.5 2.5"
                stroke="#070C10"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 7.5L7.5 2.5"
                stroke="#070C10"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6803 13.5477C16.2745 15.4414 16.0716 16.3883 15.384 16.9442C14.6964 17.5 13.7281 17.5 11.7912 17.5H8.20877C6.27199 17.5 5.3036 17.5 4.61604 16.9442C3.92848 16.3883 3.72558 15.4414 3.31977 13.5477L2.96262 11.881C2.3639 9.08693 2.06454 7.68995 2.815 6.76165C3.56546 5.83334 4.99418 5.83334 7.85163 5.83334H12.1484C15.0059 5.83334 16.4346 5.83334 17.1851 6.76165C17.7441 7.45314 17.7206 8.40468 17.4247 10"
                stroke="#070C10"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
