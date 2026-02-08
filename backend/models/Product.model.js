// models/Product.model.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama produk wajib diisi']
  },
  price: {
    type: Number,
    required: [true, 'Harga wajib diisi'],
    min: [0, 'Harga tidak boleh negatif']
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: '/images/default-product.jpg'
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);