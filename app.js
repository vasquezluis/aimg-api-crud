import express from "express";
import morgan from "morgan";
import cors from "cors";

// getting routes
import indexRoutes from "./routes/index.routes.js";
import productsRouter from "./routes/products.routes.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

// routes
app.use(indexRoutes);
app.use(productsRouter);

export default app;
