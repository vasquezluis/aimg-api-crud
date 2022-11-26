import { Router } from "express";
import fileUpload from "express-fileupload";
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

router.post(
  "/products",
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/uploads/",
  }),
  createProducts
);

router.put("/products/:id", updateProducts);

router.delete("/products/:id", deleteProducts);

export default router;
