const express = require('express');
const { signup } = require('../controllers/authControllers');
const router = express.Router();

// Auth routes
// /api/signup
router.get('/signup', signup)

module.exports = router;