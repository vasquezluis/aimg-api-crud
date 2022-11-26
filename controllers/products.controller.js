import Product from "../models/product.model.js";
import { uploadImage, deleteImage } from "../utils/cloudinary.js";
import fs from "fs-extra";

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

    // archivo a cloudinary - si existe req.files
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      product.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };

      // eliminar archivos temporales locales (imagenes)
      await fs.unlink(req.files.image.tempFilePath);
    }

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

    // si image tiene un public
    if (product.image?.public_id) {
      await deleteImage(product.image.public_id);
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
