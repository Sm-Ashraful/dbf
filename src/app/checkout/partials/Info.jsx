"use client";
import React, { useState } from "react";
import AddressForm from "./AddressForm";

const Info = ({ shippingAddress, setShippingAddress, setShippingValue }) => {
  const [isShippingChecked, setIsShippingChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsShippingChecked(event.target.checked);
  };

  const handleAddressChange = (newAddress) => {
    console.log("New: ", newAddress);
    setShippingAddress(newAddress);
  };

  return (
    <div>
      <div className="w-full mt-4">
        <div>
          <div className="flex justify-between items-center py-2 px-4 text-[#1773b0] border border-[#1773b0] bg-[#1773b0]/20">
            <p className="text-black">Customer Details</p>
            <p className=" text-4xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M16 6.25v9.51c-.12.149-.217.314-.29.49H8.29a2.5 2.5 0 0 0-4.58 0H3a1 1 0 0 1-1-1v-9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2m6 7.11v2.89h-1.71a2.49 2.49 0 0 0-4.29-.49V7.25h2.43a1 1 0 0 1 .86.49l.91 1.51l1.23 2.05a4 4 0 0 1 .57 2.06" />
                  <path d="M8.5 17.25a2.5 2.5 0 1 1-4.79-1a2.5 2.5 0 0 1 4.79 1m12 0a2.5 2.5 0 1 1-4.79-1c.073-.176.17-.341.29-.49a2.49 2.49 0 0 1 4.29.49c.14.315.212.656.21 1m-9.5-6H6m5-3H6" />
                </g>
              </svg>
            </p>
          </div>
          <AddressForm
            setAddressInfo={setShippingAddress}
            shippingAddress={shippingAddress}
            setShippingValue={setShippingValue}
          />
        </div>

        <form action="#" className="flex flex-col mt-4">
          <label className="col-span-6">
            <input
              type="checkbox"
              name="shipping"
              className="mr-2"
              checked={isShippingChecked}
              onChange={handleCheckboxChange}
            />
            Save this information for the next time
          </label>
        </form>
        <div className="w-full mt-4 flex  py-4">
          <p className="text-sm md:text-[18px]  font-bold text-red-500 w-full flex">
            আপনার ডেলিভারি চার্জের শর্ত অনুযায়ী, ঢাকার ভিতরে ৬০ টাকা, এবং ঢাকার
            বাইরে ১০০ টাকা করে চার্জ যোগ হবে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
