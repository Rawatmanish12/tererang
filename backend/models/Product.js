import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    images: [String], // multiple images

    // ✅ New field for size
    size: {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL"], // predefined sizes
      default: "M", // default size
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // admin who added product
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
