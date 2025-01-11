import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ img, name, price, sizes, productId }) => {
  const handleOrderNowClick = () => {
    if (window.fbq) {
      fbq("track", "InitiateCheckout", { productId });
    }
    // Redirect to the product page
    window.location.href = `/product/${productId}`;
  };
  return (
    <div className="w-full cursor-pointer" onClick={handleOrderNowClick}>
      <Image src={img} alt={name} width={800} height={800} />
      <div className="space-y-3 pt-5">
        <h4 className="bold-f text-lg">{name}</h4>
        <div className="flex items-center justify-between ">
          <p className="text-xl bold-f text-primary">{price} TAKA</p>
          <div className="flex  gap-2">
            {sizes.map((size, idx) => (
              <p
                key={idx}
                className="bg-[#EAEAEA] px-1.5 py-[2.5px] text-lg rounded-[2px] text-center"
              >
                {size}
              </p>
            ))}
          </div>
        </div>
        <button className="w-full py-2 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
