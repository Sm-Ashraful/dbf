import Image from "next/image";
import Link from "next/link";

const CheckoutHeader = () => {
  return (
    <div className="relative w-full  flex justify-center items-center">
      <Link href={"/"} className="items-center justify-center flex">
        <Image
          src={"/img/dbf.png"}
          alt="dream blue fashion"
          width={60}
          height={40}
        />
        <p className={` font-bold text-lg sm:text-xl  text-[#61B482]`}>
          Dream Blue <span className="text-customTheme1">Fashion</span>
        </p>
      </Link>
    </div>
  );
};

export default CheckoutHeader;
