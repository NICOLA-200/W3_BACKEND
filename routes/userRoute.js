
const express = require('express');
const multer = require('multer');
const { getAllUsers , registerUser } = require('../controller/userController');

const router = express.Router();
const upload = require('../config/cloudinary') 

// Route for creating a user
router.post('/user', upload.array('images'), registerUser);
router.get('/allUsers' , getAllUsers)

module.exports = router;
