import Product from "../models/Product.js";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Create new product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, size } = req.body;

    // Validate required fields
    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload images to Cloudinary
    let imageUrls = [];
    if (req.files) {
      for (const file of req.files) {
        const result = await cloudinary.v2.uploader.upload(file.path, {
          folder: "products",
        });
        imageUrls.push(result.secure_url);
      }
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      stock,
      size,
      images: imageUrls,
      createdBy: req.user._id, // Admin ID
    });

    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
};

// ✅ Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("createdBy", "name email");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// ✅ Get single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("createdBy", "name email");
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};

// ✅ Update product
export const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, size } = req.body;

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Update fields if provided
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.stock = stock || product.stock;
    product.size = size || product.size;

    // Upload new images if provided
    if (req.files && req.files.length > 0) {
      let imageUrls = [];
      for (const file of req.files) {
        const result = await cloudinary.v2.uploader.upload(file.path, {
          folder: "products",
        });
        imageUrls.push(result.secure_url);
      }
      product.images = imageUrls;
    }

    await product.save();

    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
};

// ✅ Delete product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.remove();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};
