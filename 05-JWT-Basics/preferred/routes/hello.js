const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { hello } = require('../controllers/helloController');

// GET /hello route
router.get('/hello', authMiddleware, hello);

module.exports = router;
