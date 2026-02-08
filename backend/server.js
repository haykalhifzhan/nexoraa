// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/products', require('./routes/product.routes'));

// Port
const PORT = process.env.PORT || 5000;

// Connect to DB & Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server berjalan di port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Gagal connect ke DB:', err);
    process.exit(1);
  });