import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Trims extra whitespace
  },
  mainImage: {
    type: String,
    required: true,
  },
  sugImages: {
    type: [String], // Array of strings for suggested image paths
    default: ["/img/f1.jpg", "/img/f2.jpg"],
  },
  category: {
    type: String,
    default: "Hoodie",
    trim: true,
  },
  description: {
    type: String,
    default: "Home delivery available all over Bangladesh (Cash on delivery)",
    trim: true,
  },
  sizes: [
    {
      name: {
        type: [String], // Array of size names
        enum: ["M", "L", "XL", "XXL"], // Allowed values
      },
      details: {
        type: [String], // Array of size details
        default: [
          "M : chest 38 inch length 26 inch",
          "L : chest 40 inch length 27 inch",
          "XL : chest 42 inch length 28 inch",
          "XXL : chest 44 inch length 29 inch ",
        ],
      },
      pant: {
        type: [String], // Array of pant size details
        default: ["Free size ", "Useable 30 to 40 (waist)", "Length 39 inch"],
      },
    },
  ],
  details: {
    type: [String], // Array of product details
    default: ["Fabric fleece", "300 GSM"],
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensure price is non-negative
  },
});

export default mongoose.models?.Product ||
  mongoose.model("Product", productSchema);
