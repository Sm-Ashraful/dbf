"use client";

import { useState } from "react";
import { signInUser } from "./action";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the server-side action
    const response = await signInUser(new FormData(e.target));

    if (response.success) {
      router.push("/admin/orders");
      alert("Sign-in successful!");
    } else {
      // Handle sign-in error
      alert(`Error: ${response.message}`);
    }
  };

  return (
    <form
      action={signInUser}
      method="post"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
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
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Sign In
      </button>
    </form>
  );
}
