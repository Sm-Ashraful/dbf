"use client";

import { useState } from "react";

export default function ProductForm({ addProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    mainImage: "",
    sugImages: "",
    category: "",
    description: "",
    sizes: "",
    details: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    // Add all form data
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    // Submit to server
    await addProduct(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="mainImage"
          className="block text-gray-700 font-medium mb-2"
        >
          Main Image URL
        </label>
        <input
          type="text"
          name="mainImage"
          value={formData.mainImage}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="sugImages"
          className="block text-gray-700 font-medium mb-2"
        >
          Suggested Images (Comma-Separated)
        </label>
        <input
          type="text"
          name="sugImages"
          value={formData.sugImages}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 font-medium mb-2"
        >
          Category
        </label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-2"
        >
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="sizes" className="block text-gray-700 font-medium mb-2">
          Sizes (JSON Format)
        </label>
        <textarea
          name="sizes"
          value={formData.sizes}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="details"
          className="block text-gray-700 font-medium mb-2"
        >
          Details (Comma-Separated)
        </label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
          Price
        </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md"
      >
        Add Product
      </button>
    </form>
  );
}
