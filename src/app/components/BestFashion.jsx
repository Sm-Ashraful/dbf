import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestFashion = () => {
  return (
    <div className="px-4 w-full overflow-hidden relative">
      <Image
        src={"/img/bestfashion.png"}
        alt={"best fashion"}
        width={800}
        height={800}
      />
      <div
        style={{
          background:
            "linear-gradient(89.75deg, #070C10 0.22%, rgba(7, 12, 16, 0) 99.79%)",
        }}
        className="flex flex-col justify-end text-white px-[40px] py-[42px] absolute w-full h-full transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <p className="text-sm">Summer Collection</p>
        <h4 className="bold-f text-[32px]">
          Show your best fashion clothes of your life.
        </h4>
        <p className="text-sm">Don’t miss the opportunity.</p>
        <Link
          href={"/"}
          className="flex items-center bold-f border-b border-yellow w-fit mt-4 "
        >
          <span>See All Collection</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2441 3.57733C10.5695 3.25189 11.0972 3.25189 11.4226 3.57733L17.2559 9.41067C17.5813 9.73609 17.5813 10.2638 17.2559 10.5892L11.4226 16.4225C11.0972 16.7479 10.5695 16.7479 10.2441 16.4225C9.91867 16.0971 9.91867 15.5694 10.2441 15.244L14.6548 10.8333H3.33333C2.8731 10.8333 2.5 10.4602 2.5 9.99992C2.5 9.53967 2.8731 9.16659 3.33333 9.16659H14.6548L10.2441 4.75584C9.91867 4.4304 9.91867 3.90277 10.2441 3.57733Z"
              fill="#070C10"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BestFashion;
