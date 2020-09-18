const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  declaration: {
    type: String,
    required: true,
    unique: true,
  },
  address: String,
});

module.exports = mongoose.model('Client', clientSchema);
