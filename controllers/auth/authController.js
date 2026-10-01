import express from "express";
import { User } from "../../schemas/user-schema.js";

export const SignUpController = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      return response.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({
      email: normalizedEmail,
      password,
    });

    return response.status(201).json({ message: "User Created", user });
  } catch (err) {
    if (err?.code === 11000) {
      return response.status(409).json({ message: "User already exists" });
    }

    return response
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

export const LoginController = async (request, response) => {
  try {
    const { email, password } = request.body;
    const normalizedEmail = email?.toLowerCase().trim();

    if (!normalizedEmail || !password) {
      return response
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return response.status(404).json({ message: "user not found" });
    }

    if (user.password !== password) {
      return response.status(401).json({ message: "Invalid password" });
    }

    return response.status(200).json({ message: "user found", user: user });
  } catch (err) {
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};
