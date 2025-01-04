"use client";

import { useState } from "react";
import { addUser } from "./action";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addUser(new FormData(e.target));
    console.log("Response:", response);
    if (response.success) {
      alert("Signup successful!");
    } else {
      alert(`Error: ${response.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-medium mb-2"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="mobile"
          className="block text-gray-700 font-medium mb-2"
        >
          Mobile Number
        </label>
        <input
          type="tel"
          name="mobile"
          id="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your mobile number"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  );
}
