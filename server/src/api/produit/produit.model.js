const mongoose = require('mongoose');

const produitSchema = mongoose.Schema({
  declaration: {
    type: String,
    require: true,
    unique: true,
  },
  prixAchat: {
    type: Number,
    required: true,
  },
  prixVente: Number,
  stock: Number,
});

module.exports = mongoose.model('Produit', produitSchema);
