import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Todo bien");
});

router.get("/ping", (req, res) => {
  res.send("Pong");
});

export default router;
