const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, // Replace with your Cloudinary cloud name
    api_key: process.env.CLOUD_API_KEY,        // Replace with your Cloudinary API key
    api_secret: process.env.CLOUD_API_SECRET,  // Replace with your Cloudinary API secret
});

// Configure Multer Storage with Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'uploads', // The name of the folder in Cloudinary
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif'], // Allowed formats
    transformation: [{ width: 500, height: 500, crop: 'limit' }], // Optional transformations
});

// Create a Multer instance with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;