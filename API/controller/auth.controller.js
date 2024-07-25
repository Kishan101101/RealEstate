import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res, next) => {
  const { Username, Email, Password } = req.body;
  // Hash the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(Password, saltRounds);

  const newUser = new User({
    Username,
    Email,
    Password: hashedPassword, // Store the hashed password
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};
