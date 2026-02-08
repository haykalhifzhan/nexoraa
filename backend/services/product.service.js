// services/product.service.js
const Product = require('../models/Product.model');

const getProducts = async () => {
  return await Product.find({});
};

const getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new Error('Produk tidak ditemukan');
  }
  return product;
};

const createProduct = async (data) => {
  return await Product.create(data);
};

const updateProduct = async (id, data) => {
  const product = await Product.findByIdAndUpdate(id, data, { new: true });
  if (!product) {
    throw new Error('Produk tidak ditemukan');
  }
  return product;
};

const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new Error('Produk tidak ditemukan');
  }
  return product;
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};