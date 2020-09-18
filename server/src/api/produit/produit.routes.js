const express = require('express');
const produitController = require('./produit.controller');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const produits = await produitController.getAllProduits();
    res.send(produits);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const produit = await produitController.getOneProduit(id);
    res.send(produit);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const newproduit = req.body;
  try {
    const produit = await produitController.createProduit(newproduit);
    res.send(produit);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const newproduit = req.body;
  try {
    const produit = await produitController.editProduit(id, newproduit);
    res.send(produit);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const produit = await produitController.deleteProduit(id);
    res.send(produit);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
