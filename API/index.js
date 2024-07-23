import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// URL-encode your password if it contains special characters

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");

    const app = express();

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
