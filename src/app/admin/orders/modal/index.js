import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderAmount: { type: Number, required: true },
    shippingAmount: { type: Number, required: true },
    quantity: { type: Number, required: true },
    shippingStatus: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    info: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Info",
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
