import Product from "../models/product.model.js";

export const getProduct = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const product = await Product.findById(id);

    if (!product)
      return res.status(404).json({
        message: `Product ${id} does not exists`,
      });

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createProducts = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const product = new Product({
      name,
      description,
      price,
    });

    await product.save();

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const productUpdated = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.json(productUpdated);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const product = await Product.findByIdAndDelete(id);

    if (!product)
      return res.status(404).json({
        message: `Product ${id} does not exists`,
      });

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
