import { ProductModel } from "../model/product-model.js";

export async function getProducts(request, response) {
  try {
    const products = await ProductModel.find({});
    response.status(200).send(products);
  } catch (error) {
    response.status(500).send(error);
  }
}

export async function createProduct(request, response) {
  try {
    const newProduct = new ProductModel(request.body);

    await newProduct.save();

    response.status(201).send(newProduct);
  } catch (error) {
    response.status(500).send(error);
  }
}

export async function deleteProduct(request, response) {
  try {
    const productId = request.params.id;

    const productToDelete = await ProductModel.findById(productId);

    if (!productToDelete) return response.status(404).send("Product not found");

    const productDeleted = await ProductModel.findByIdAndDelete(productId);

    response.status(200).send(productDeleted);
  } catch (error) {
    response.status(500).send(error);
  }
}
