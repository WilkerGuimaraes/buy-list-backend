import { Schema, model } from "mongoose";

const productSchema = Schema({
  productName: {
    type: String,
    required: true,
  },
});

export const ProductModel = model("Product", productSchema);
