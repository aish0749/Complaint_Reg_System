const express = require('express');
const router=express.Router();
const authController = require('../controllers/auth');

router.post('/userlogin',authController.login)
router.post('/signup',authController.register)
router.post('/adminlogin',authController.adminlogin)
router.post('/filecomplaint',authController.complaint)
router.post('/historylogin',authController.history)
router.post('/update',authController.update)

//Finally we need to add these routes to app.js
module.exports = router;