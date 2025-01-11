import Image from "next/image";
import React from "react";

const ShippingDetails = () => {
  return (
    <div className="bg-[#15191D] px-4 grid lg:flex grid-cols-2 py-4 gap-5">
      <div className="flex items-center gap-2.5">
        <Image
          src={"/img/scooter.png"}
          width={28}
          height={28}
          alt="icon image"
        />
        <div className="text-white">
          <p>Fast Delivery</p>
          <p className="text-xs text-white/80">1-3 Days Delivery</p>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <Image src={"/img/debit.png"} width={28} height={28} alt="icon image" />
        <div className="text-white">
          <p>Online Payment</p>
          <p className="text-xs text-white/80">Secure Payment Services</p>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <Image src={"/img/easy.png"} width={28} height={28} alt="icon image" />
        <div className="text-white">
          <p>Easy Return</p>
          <p className="text-xs text-white/80">Hassle Free Shopping</p>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <Image
          src={"/img/customer.png"}
          width={28}
          height={28}
          alt="icon image"
        />
        <div className="text-white">
          <p>24/7 Support</p>
          <p className="text-xs text-white/80">It has survived not only</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingDetails;
