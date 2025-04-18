const express = require('express');
const router = express.Router();
const { getProfile, login, logout, register } = require('../controllers/user.controller.js');
const { isAuthenticated } = require('../middlewares/isAuthenticated.js');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/getProfile').get(isAuthenticated, getProfile);
router.route('/logout').get(logout);

module.exports = router;
