"use server";

import Order from "../orders/modal"; // Import the Order model
import Info from "../orders/modal/address"; // Import the Info model
import mongoose from "mongoose";

// Define the orderSubmit action
const orderSubmit = async (orderData) => {
  try {
    const {
      info,
      orderAmount,
      shippingAmount,
      quantity,
      shippingStatus,
      items,
    } = orderData;

    console.log("Order data: ", orderData);

    const newInfo = new Info({ ...info });

    const savedInfo = await newInfo.save(); // Save the customer info

    const processedItems = items.map((item) => {
      if (!item._id) {
        throw new Error("Each item must have a valid product ID.");
      }
      return {
        product: new mongoose.Types.ObjectId(item._id), // Convert item._id to ObjectId
      };
    });

    // Create the Order document and reference the Info document
    const newOrder = new Order({
      orderAmount,
      shippingAmount,
      quantity,
      shippingStatus,
      items: processedItems, // Use processed items
      info: savedInfo._id, // Store the Info document's ObjectId
    });

    // Save the order in the database
    const savedOrder = await newOrder.save();

    return {
      success: true,
      message: "Order submitted successfully!",
      order: savedOrder.toObject({ versionKey: false }), // Return sanitized order data
    };
  } catch (error) {
    console.error("Error submitting order:", error.message);
    return { success: false, message: error.message };
  }
};

export { orderSubmit };
