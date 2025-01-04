"use server";

import bcrypt from "bcrypt"; // Import bcrypt for hashing passwords
import User from "./modals"; // Import your User schema

const addUser = async (formData) => {
  try {
    const username = formData.get("username");
    const password = formData.get("password");
    const mobile = formData.get("mobile");

    // Ensure all fields are provided
    if (!username || !password || !mobile) {
      throw new Error("All fields are required.");
    }

    // Hash the password before saving it to the database
    const salt = await bcrypt.genSalt(10); // Generate salt with rounds of 10
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    // Create a new User instance with the hashed password
    const newUser = new User({
      username,
      password: hashedPassword, // Store the hashed password
      mobile,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Return a sanitized object with success message
    return {
      success: true,
      message: "User created successfully!",
      user: savedUser.toObject({ versionKey: false }), // Convert to plain object and remove version key
    };
  } catch (error) {
    console.error("Error creating user:", error.message);
    return { success: false, message: error.message };
  }
};

export { addUser };
