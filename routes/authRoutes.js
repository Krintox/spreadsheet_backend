  
const express = require('express');
const passport = require('passport');
const { googleLogin, googleCallback, logout } = require('../controllers/Authcontroller');
const router = express.Router();

router.get('/google', googleLogin);
router.get('/google/callback', googleCallback);
router.get('/logout', logout);

module.exports = router;
