const Produit = require('./produit.model');

const createProduit = async (produit) => {
  const newProduit = new Produit(produit);
  await newProduit.save();
  return newProduit;
};

const getOneProduit = async (produitId) => {
  const produit = await Produit.findOne({ _id: produitId });
  return produit;
};

const getAllProduits = async () => {
  const produits = await Produit.find({});
  return produits;
};

const editProduit = async (produitId, produit) => {
  const editedProduit = await Produit.findOneAndUpdate(
    { _id: produitId },
    produit
  );
  return editedProduit;
};

const deleteProduit = async (produitId) => {
  const removedProduit = await Produit.findOneAndDelete({ _id: produitId });
  return removedProduit;
};

module.exports = {
  createProduit,
  editProduit,
  deleteProduit,
  getOneProduit,
  getAllProduits,
};
