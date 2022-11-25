import { Router } from "express";
import {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} from "../controllers/products.controller.js";

const router = Router();

// routes

router.get("/products", getProducts);

router.post("/products", createProducts);

router.put("/products", updateProducts);

router.delete("/products", deleteProducts);

export default router;
