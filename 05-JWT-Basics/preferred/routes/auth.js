const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');


// POST /login route
router.post('/', login);

module.exports = router;
