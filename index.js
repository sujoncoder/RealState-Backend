import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB is connected ❤");
  })
  .catch((error) => {
    console.log(error.message);
  });

const app = express();

app.listen(300, () => {
  console.log("server is running on 3000");
});
