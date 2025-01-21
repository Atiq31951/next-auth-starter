import mongoose from "mongoose";

export async function connectMongoDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_LOCAL_URL);

    return connection;
  } catch (error) {
    throw new Error(error);
  }
}
