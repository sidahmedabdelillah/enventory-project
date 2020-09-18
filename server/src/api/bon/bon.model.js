const mongoose = require('mongoose');

const bonSchema = mongoose.Schema({
  numerDeBon: String,
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
  bonDetails: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BonDetail',
    },
  ],
  tottal: Number,
});

module.exports = mongoose.model('Bon', bonSchema);
