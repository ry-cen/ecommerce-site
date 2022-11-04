import mongoose from "mongoose";

type Product = {
  name: string;
  price: number;
  image: string;
  category: string;
  pid: string;
  countInStock: number;
  description: string;
}

const productSchema = new mongoose.Schema<Product> (
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    pid: { type: String, required: true, unique: true},
    countInStock: { type: Number, required: true },
    description: { type: String, required: true }
  }, {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model<Product>('Product', productSchema);

export default Product;