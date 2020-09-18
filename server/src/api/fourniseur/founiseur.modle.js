const mongoose = require('mongoose');

const fourniseurSchema = mongoose.Schema({
  cle: {
    Type: Number,
  },
  designation: {
    Type: String,
  },
});

module.exports = mongoose.Schema('Fourniseur', fourniseurSchema);
