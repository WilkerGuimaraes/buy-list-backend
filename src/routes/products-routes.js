import { Router } from "express";

import {
  getProducts,
  createProduct,
  deleteProduct,
} from "../controllers/products-controller.js";

export const router = Router();

router.get("/productsList", getProducts);

router.post("/productsList", createProduct);

router.delete("/productsList:id", deleteProduct);
