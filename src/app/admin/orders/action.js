"use server";

import Order from "../orders/modal"; // Import the Order model
import Info from "../orders/modal/address"; // Import the Info model
import mongoose from "mongoose";

// Define the orderSubmit action
const orderSubmit = async (orderData) => {
  try {
    const {
      customer,
      phone,
      address,
      email,
      policeStation,
      orderAmount,
      shippingAmount,
      quantity,
      shippingStatus,
      items,
    } = orderData;

    console.log("Order data: ", orderData);

    if (
      !customer ||
      !phone ||
      !address ||
      !policeStation ||
      !orderAmount ||
      !shippingAmount ||
      !quantity ||
      !items ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      throw new Error("All fields are required and items must be provided.");
    }

    const newInfo = new Info({
      customer,
      phone,
      address,
      email,
      policeStation,
    });

    const savedInfo = await newInfo.save(); // Save the customer info

    // Create the Order document and reference the Info document
    const newOrder = new Order({
      orderAmount,
      shippingAmount,
      quantity,
      shippingStatus,
      items,
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
