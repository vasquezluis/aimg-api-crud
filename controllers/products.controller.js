import Product from "../models/product.model.js";

export const getProduct = async (req, res) => {
  const {
    params: { id },
  } = req;

  const product = await Product.findById(id);

  if (!product)
    return res.status(404).json({
      message: `Product ${id} does not exists`,
    });

  res.json(product);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();

  res.json(products);
};

export const createProducts = async (req, res) => {
  const { name, description, price } = req.body;

  const product = new Product({
    name,
    description,
    price,
  });

  await product.save();
  res.json(product);
};

export const updateProducts = async (req, res) => {
  const {
    params: { id },
  } = req;

  const productUpdated = await Product.findByIdAndUpdate(id, req.body, {
    new: true
  });

  res.json(productUpdated);
};

export const deleteProducts = async (req, res) => {
  const {
    params: { id },
  } = req;

  const product = await Product.findByIdAndDelete(id);

  if (!product)
    return res.status(404).json({
      message: `Product ${id} does not exists`,
    });

  res.json(product);
};
