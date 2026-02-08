// routes/product.routes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getAllProducts,
  getProduct,
  createProductCtrl,
  updateProductCtrl,
  deleteProductCtrl
} = require('../controllers/product.controller');

router.get('/', getAllProducts);
router.get('/:id', getProduct);

// Hanya untuk admin (untuk tugas, kita biarkan semua bisa akses — nanti tambah role jika perlu)
router.post('/', createProductCtrl);
router.put('/:id', updateProductCtrl);
router.delete('/:id', deleteProductCtrl);

module.exports = router;