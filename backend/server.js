const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(cors());

const productSchema = new mongoose.Schema({
  type: String,
  price: Number,
});

const ProductModel = mongoose.model('products', productSchema);

// Define route for /products
app.get('/products', (req, res) => {
  ProductModel.find({})
    .then(function(products) {
      res.json(products);
    })
    .catch(function(err) {
      console.log(err);
    });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
