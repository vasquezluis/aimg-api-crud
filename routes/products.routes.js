import { Router } from "express";
import {
  getProduct,
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} from "../controllers/products.controller.js";

const router = Router();

// routes

router.get("/products/:id", getProduct);

router.get("/products", getProducts);

router.post("/products", createProducts);

router.put("/products/:id", updateProducts);

router.delete("/products/:id", deleteProducts);

export default router;
