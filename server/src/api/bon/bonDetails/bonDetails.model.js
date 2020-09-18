const mongoose = require('mongoose');

const bonDetailSchema = mongoose.Schema({
  bon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bon',
  },
  produit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produit',
  },
  quantite: Number,
  prixUnit: Number,
  tottal: Number,
});

module.exports = mongoose.model('BonDetail', bonDetailSchema);
