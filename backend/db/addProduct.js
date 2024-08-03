const mongoose = require("mongoose");

const productSchema  = new mongoose.Schema(
    {
        title: String,
      price: String,
      description: String,
      category: String,
    }
);

const product = mongoose.model('products',productSchema);

module.exports = product;