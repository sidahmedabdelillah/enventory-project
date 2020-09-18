const BonDetails = require('./bonDetails.model');
const Produit = require('../../produit/produit.model');

const createBonDetail = async (detail, bonId) => {
  const { quantite, prixUnit } = detail;
  const newdetail = new BonDetails({
    ...detail,
    bon: bonId,
    tottal: quantite * prixUnit,
  });
  const produit = await Produit.findById(detail.produit);
  const { stock } = produit;
  await Produit.findOneAndUpdate(
    { _id: produit._id },
    { stock: stock - detail.quantite }
  );
  const newdetailSaved = await newdetail.save();
  const newdetailPopulated = await BonDetails.findById(
    newdetailSaved._id
  ).populate('produit');
  return newdetailPopulated;
};

const getAllBonDetails = async () => {
  const bonDetails = await BonDetails.find({}).populate('produit');
  return bonDetails;
};

const getOneBonDetails = async (id) => {
  const bonDetails = await BonDetails.findById(id);
  return bonDetails;
};

const removeBonDetails = async (bonDetailsId) => {
  const bondetails = await BonDetails.findById(bonDetailsId);
  const pr = await Produit.findById(bondetails.produit);
  const { stock } = pr;
  await Produit.findByIdAndUpdate(
    { _id: pr._id },
    { stock: stock + bondetails.quantite }
  );
  await BonDetails.findOneAndDelete({ _id: bonDetailsId });
};

module.exports = {
  createBonDetail,
  getAllBonDetails,
  getOneBonDetails,
  removeBonDetails,
};
