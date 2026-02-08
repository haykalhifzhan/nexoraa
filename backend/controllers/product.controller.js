// controllers/product.controller.js
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../services/product.service');

const getAllProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProductCtrl = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProductCtrl = async (req, res) => {
  try {
    const product = await updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProductCtrl = async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.json({ message: 'Produk dihapus' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProductCtrl,
  updateProductCtrl,
  deleteProductCtrl
};