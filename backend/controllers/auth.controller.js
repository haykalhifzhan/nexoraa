// controllers/auth.controller.js
const { registerUser, loginUser } = require('../services/auth.service');

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await registerUser(email, password);
    res.status(201).json({ message: 'Registrasi berhasil', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { _id, email: userEmail, token } = await loginUser(email, password);
    res.json({ token, user: { _id, email: userEmail } });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil profil' });
  }
};

module.exports = { register, login, getProfile };