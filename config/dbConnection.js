const mongoose = require('mongoose');
require('dotenv').config(); 

console.log(process.env.MONGODB); 


mongoose.connect(process.env.MONGODB)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;
