import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <section>
      <header className="h-[65px] w-full bg-primary py-2 px-2 flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <Image src="/img/dbf-logo.jpg" alt="Logo" width={46} height={46} />
          <h4 className="text-2xl font-semibold uppercase text-white ">
            Dream Blue Fashion
          </h4>
        </div>
        <div className="w-[66px] bg-textSec text-white h-full flex justify-center items-center rounded-md">
          <GiHamburgerMenu className="text-2xl" />
        </div>
      </header>

      <div className="w-full relative overflow-hidden">
        <div className="">
          <Image src={"/img/h1.png"} width={800} height={1200} alt="h1" />
        </div>
      </div>
    </section>
  );
}
