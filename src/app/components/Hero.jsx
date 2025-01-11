import Button from "@/__shared/Button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="w-full relative overflow-hidden">
        <div className="">
          <Image src={"/img/coverm.png"} width={800} height={1200} alt="h1" />
        </div>
        <div className="absolute left-4 bottom-1/4">
          <div className="pb-8">
            <p className="text-sm ">Winter Collection</p>
            <h4 className="bold-f text-[22px] text-yellow">New, Amazing</h4>
            <h4 className="bold-f text-[22px]">Stuff Is Here</h4>

            <p className="text-sm">Shop today & get modern dress</p>
          </div>
          <Button className={"border border-black rounded-sm flex gap-3"}>
            <p>Shop Now</p>
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
                d="M10.2441 3.57741C10.5695 3.25198 11.0972 3.25198 11.4226 3.57741L17.2559 9.41075C17.5813 9.73617 17.5813 10.2638 17.2559 10.5893L11.4226 16.4226C11.0972 16.748 10.5695 16.748 10.2441 16.4226C9.91867 16.0972 9.91867 15.5695 10.2441 15.2441L14.6548 10.8333H3.33333C2.8731 10.8333 2.5 10.4603 2.5 10C2.5 9.53975 2.8731 9.16667 3.33333 9.16667H14.6548L10.2441 4.75593C9.91867 4.43049 9.91867 3.90285 10.2441 3.57741Z"
                fill="#070C10"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
