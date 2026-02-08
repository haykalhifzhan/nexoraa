// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const validateRequest = require('../middleware/validate');
const { register, login, getProfile } = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth');

router.post(
  '/register',
  body('email').isEmail().withMessage('Email tidak valid'),
  body('password').isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),
  validateRequest,
  register
);

router.post(
  '/login',
  body('email').isEmail().withMessage('Email tidak valid'),
  body('password').isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),
  validateRequest,
  login
);

router.get('/profile', protect, getProfile);

module.exports = router;