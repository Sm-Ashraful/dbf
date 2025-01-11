"use client";

import { useEffect, useState } from "react";
import Info from "./Info";
import Image from "next/image";
import toast from "react-hot-toast";

const CheckoutPageLeftTop = ({
  handleOrder,
  shippingAddress,
  setShippingAddress,
  setShippingValue,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orderItems, setOrderItems] = useState(null);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleOrderButtonClick = (event) => {
    event.preventDefault();

    if (
      !shippingAddress.customer ||
      !shippingAddress.address ||
      !shippingAddress.phone
    ) {
      toast.error("All field are required!");
    }

    console.log("Shipping address: ", shippingAddress);
    const orderObj = {
      info: { ...shippingAddress },
    };

    if (orderObj) {
      handleOrder(orderObj);
    }
  };

  return (
    <>
      <div className="overflow-hidden">
        <div>
          <h4 className="">Delivery Address</h4>
          <Info
            shippingAddress={shippingAddress}
            setShippingAddress={setShippingAddress}
          />
        </div>
      </div>
      <div className="mt-8">
        <h4 className="">Payment</h4>
        <div className="w-full mt-4">
          <div className="text-black">
            <input
              type="radio"
              id="cash"
              name="payment"
              value="cash"
              className="hidden"
              checked={true}
              onChange={handlePaymentChange}
            />
            <label className="radio-label" htmlFor="cash">
              <p className="ml-[25px]">Cash On Delivery</p>
            </label>
          </div>
        </div>
      </div>
      <button
        onClick={handleOrderButtonClick}
        type="submit"
        className={`bg-black/90 text-white px-4 py-3 mt-5 w-full text-sm sm:text-[1.2rem]`}
      >
        Order Now
      </button>
    </>
  );
};

export default CheckoutPageLeftTop;
