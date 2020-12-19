const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema
({
    name: {
      type: String, required: true,
    },

    codigo: {
      type: String, required: true,
    },

    tipo: {
      type: String,
    },

    estoqueMin: {
      type: String, 
    },

    estoqueMax: {
      type: String,
    },

    valorCusto: {
      type: String,
    },

    valorLucro: {
      type: String,
    },

    precoVenda: {
      type: String,
    }

});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
