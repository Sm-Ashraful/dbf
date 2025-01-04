"use client";
import React, { useEffect, useState, useRef } from "react";
import { allDistict, upazilasOf } from "@bangladeshi/bangladesh-address";

const AddressForm = ({ setAddressInfo, shippingAddress }) => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const districts = allDistict();
  const upazilas = selectedDistrict ? upazilasOf(selectedDistrict) : [];

  useEffect(() => {
    if (isSubmitted) {
      setIsSubmitted(false); // Reset the submission state after submission
    }
  }, [isSubmitted]);

  return (
    <div className="">
      <form className="grid grid-cols-6 mt-6 gap-2">
        {/* Full Name */}
        <div className="col-span-6">
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            value={shippingAddress.customer}
            onChange={(e) =>
              setAddressInfo({
                ...shippingAddress,
                customer: e.target.value,
              })
            }
            placeholder=""
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
          />
        </div>

        {/* Address */}
        <div className="col-span-6">
          <label className="block font-medium text-gray-700">Address</label>
          <input
            type="text"
            value={shippingAddress.address}
            onChange={(e) =>
              setAddressInfo({ ...shippingAddress, address: e.target.value })
            }
            placeholder=""
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
          />
        </div>

        {/* City (District) */}
        <div className="col-span-6 md:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            City (শহরের নাম)
          </label>
          <select
            value={selectedDistrict}
            onChange={(e) => {
              const district = e.target.value;
              setSelectedDistrict(district);
              setSelectedUpazila("");
              setAddressInfo({ ...shippingAddress, city: district });
            }}
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border shadow-sm focus:outline-none focus:ring-blue focus:border-blue"
          >
            <option value="">Select a City</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>

        {/* Police Station (Upazila) */}
        <div className="col-span-6 md:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Police Station
          </label>
          <select
            value={selectedUpazila}
            onChange={(e) => {
              const upazila = e.target.value;
              setSelectedUpazila(upazila);
              setAddressInfo({ ...shippingAddress, policeStation: upazila });
            }}
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border shadow-sm focus:outline-none focus:ring-blue focus:border-blue"
            disabled={!selectedDistrict} // Disable if no district selected
          >
            <option value="">Select a Police Station</option>
            {upazilas.map((upazila) => (
              <option key={upazila.upazila} value={upazila.upazila}>
                {upazila.upazila}
              </option>
            ))}
          </select>
        </div>

        {/* Phone Number */}
        <div className="col-span-6 md:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            value={shippingAddress.phone}
            onChange={(e) =>
              setAddressInfo({ ...shippingAddress, phone: e.target.value })
            }
            className="bg-white pl-3 py-2 outline-none text-sm lg:text-base flex-1 w-full border shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm"
          />
        </div>

        {/* Email */}
        <div className="col-span-6 md:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Email
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
