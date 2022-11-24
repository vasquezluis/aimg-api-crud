import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export async function connectToDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Mongodb connected');
  } catch (e) {
    console.error(e);
  }
}
