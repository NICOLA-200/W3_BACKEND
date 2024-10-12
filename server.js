require('dotenv').config();

const express = require('express');
const router = require('./routes/userRoute');
require('./config/dbConnection');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));


app.get('/', (req, res) => {
  res.send('hello there!');
});


app.use(router);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
