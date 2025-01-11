"use client";
import React from "react";

const AddressForm = ({ setAddressInfo, shippingAddress }) => {
  return (
    <div className="">
      <form className="grid grid-cols-6 mt-6 gap-2">
        {/* Full Name */}
        <div className="col-span-6">
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            value={shippingAddress.customer}
            required
            onChange={(e) =>
              setAddressInfo({
                ...shippingAddress,
                customer: e.target.value,
              })
            }
            placeholder="Your Full Name"
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
          />
        </div>

        {/* Address */}
        <div className="col-span-6">
          <label className="block font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={shippingAddress.address}
            required
            onChange={(e) =>
              setAddressInfo({ ...shippingAddress, address: e.target.value })
            }
            placeholder="Your Address"
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
          />
        </div>

        {/* City */}
        <div className="col-span-6 md:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            value={shippingAddress.city}
            required
            onChange={(e) =>
              setAddressInfo({ ...shippingAddress, city: e.target.value })
            }
            placeholder="Your City"
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border shadow-sm focus:outline-none focus:ring-blue focus:border-blue"
          />
        </div>

        {/* Police Station */}
        <div className="col-span-6 md:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Police Station (Thana)
          </label>
          <input
            type="text"
            value={shippingAddress.policeStation}
            required
            onChange={(e) =>
              setAddressInfo({
                ...shippingAddress,
                policeStation: e.target.value,
              })
            }
            placeholder="Your Police Station"
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border shadow-sm focus:outline-none focus:ring-blue focus:border-blue"
          />
        </div>

        {/* Phone Number */}
        <div className="col-span-6 md:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            required
            value={shippingAddress.phone}
            onChange={(e) =>
              setAddressInfo({ ...shippingAddress, phone: e.target.value })
            }
            placeholder="Your Phone Number"
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
          />
        </div>

        {/* Email */}
        <div className="col-span-6 md:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Email (Optional)
          </label>
          <input
            type="email"
            value={shippingAddress.email}
            onChange={(e) =>
              setAddressInfo({ ...shippingAddress, email: e.target.value })
            }
            placeholder="you@gmail.com"
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border border-colorBorder shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
