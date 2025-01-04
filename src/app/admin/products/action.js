"use server";

import Product from "./modals/product";

const addProduct = async (product) => {
  // Extract data from the `product` object
  const name = product.get("name");
  const mainImage = product.get("mainImage");
  const sugImages = product.get("sugImages");
  const category = product.get("category");
  const description = product.get("description");
  const sizes = product.get("sizes"); // Sizes should be an array of objects
  const details = product.get("details"); // Details should be an array
  const price = product.get("price");

  // Create a new Product instance
  const newProduct = new Product({
    name,
    mainImage,
    sugImages,
    category,
    description,
    sizes,
    details,
    price,
  });

  // Save and return the product
  return newProduct.save();
};

export { addProduct };
