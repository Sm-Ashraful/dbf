import mongoose from "mongoose";

// Define the schema for the order
const infoSchema = new mongoose.Schema(
  {
    customer: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String },
    policeStation: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);

const Info = mongoose.models.Info || mongoose.model("Info", infoSchema);

export default Info;
