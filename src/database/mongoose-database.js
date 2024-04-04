import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.moforlu.mongodb.net/buy-list?retryWrites=true&w=majority`
    );
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("Um erro ocorreu!", error);
  }
}
