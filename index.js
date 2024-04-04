import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./src/database/mongoose-database.js";
import { ProductModel } from "./src/model/product-model.js";

dotenv.config();

const app = express();

app.use(express.json());

connectToDatabase();

app.get("/productsList", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/productsList", async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);

    await newProduct.save();

    res.status(201).send(newProduct);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/productsList/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const productToDelete = await ProductModel.findById(productId);

    if (!productToDelete) return res.status(404).send("Product not found");

    const productDeleted = await ProductModel.findByIdAndDelete(productId);

    res.status(200).send(productDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = 3335;

app.listen(port, () => console.log("Server running on port 3335!"));
