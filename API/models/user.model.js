import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model
const User = mongoose.model("User", userSchema);

export default User;
