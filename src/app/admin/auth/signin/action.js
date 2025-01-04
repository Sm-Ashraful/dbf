"use server";

import User from "../signup/modals";
import bcrypt from "bcrypt"; // Ensure you have bcrypt installed

const signInUser = async (formData) => {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    if (!username || !password) {
      throw new Error("Username and password are required.");
    }

    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("User not found.");
    }

    // Compare the password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new Error("Incorrect password.");
    }

    return {
      success: true,
      message: "User signed in successfully!",
      user: user.toObject({ versionKey: false }), // Removing mongoose version key
    };
  } catch (error) {
    console.error("Error during sign-in:", error.message);
    return { success: false, message: error.message };
  }
};

export { signInUser };
