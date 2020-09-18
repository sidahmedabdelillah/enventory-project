const express = require('express');

const emojis = require('./emojis');

const client = require('./client/client.routes');
const produit = require('./produit/produit.routes');
const bon = require('./bon/bon.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/clients', client);
router.use('/produits', produit);
router.use('/bons', bon);

router.use('/emojis', emojis);

module.exports = router;
