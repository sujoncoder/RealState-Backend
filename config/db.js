import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connect successfull 😎");
  } catch (error) {
    console.log(error.message, "Database connect fail ⚠");
  }
};

export default connectDb;
