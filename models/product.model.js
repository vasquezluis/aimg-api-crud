import mongoose, { mongo } from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// nombre y schema
export default mongoose.model("Product", productSchema);
