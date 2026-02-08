// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('🔍 Connecting to:', process.env.MONGODB_URI); // ← tambahkan ini untuk debug
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB terhubung');
  } catch (err) {
    console.error('❌ Gagal connect MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;