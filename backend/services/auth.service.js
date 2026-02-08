// services/auth.service.js
const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const generateToken = require('../utils/generateToken');

const registerUser = async (email, password) => {
  console.log('🔍 [DEBUG] Mencari user dengan email:', email);
  
  const existingUser = await User.findOne({ email });
  
  console.log('🔍 [DEBUG] Hasil pencarian:', existingUser ? 'DITEMUKAN' : 'TIDAK DITEMUKAN');
  
  if (existingUser) {
    throw new Error('Email sudah terdaftar');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashedPassword });
  
  console.log('✅ [DEBUG] User berhasil dibuat:', user.email);
  
  return {
    _id: user._id,
    email: user.email
  };
};

const loginUser = async (email, password) => {
  console.log('🔍 [DEBUG] Login attempt untuk email:', email);
  
  const user = await User.findOne({ email });
  
  if (!user) {
    console.log('❌ [DEBUG] User tidak ditemukan');
    throw new Error('Email atau password salah');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log('❌ [DEBUG] Password salah');
    throw new Error('Email atau password salah');
  }

  console.log('✅ [DEBUG] Login berhasil untuk:', user.email);
  
  return {
    _id: user._id,
    email: user.email,
    token: generateToken(user._id)
  };
};

module.exports = { registerUser, loginUser };