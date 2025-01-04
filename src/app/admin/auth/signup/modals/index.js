import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // Ensure the username is unique
      trim: true, // Removes whitespace from the beginning and end
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Enforce a minimum password length
    },
    mobile: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          // Regex to validate a mobile number (10-15 digits)
          return /^[0-9]{10,15}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid mobile number!`,
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
