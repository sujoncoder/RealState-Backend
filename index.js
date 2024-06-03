import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();
const port = 3000;

// application layer
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB is connected ❤");
  })
  .catch((error) => {
    console.log(error.message);
  });

// app listening
app.listen(port, () => {
  console.log("server is running on 3000");
});
