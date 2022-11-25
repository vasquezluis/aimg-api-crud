import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();

  res.json(products);
};

export const createProducts = async (req, res) => {
  console.log(req.body);
  const { name, description, price } = req.body;

  const product = new Product({
    name,
    description,
    price,
  });

  await product.save();
  res.json(product);
};

export const updateProducts = (req, res) => {
  res.send("updating produtcs");
};

export const deleteProducts = (req, res) => {
  res.send("deleting produtcs");
};
