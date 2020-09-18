const Bon = require('./bon.model');
const bonDetailsController = require('./bonDetails/bonDetails.controller');

const createBon = async (bon, details) => {
  const newBon = new Bon(bon);
  await newBon.save();
  const createdDetailsPromise = details.map(async (detail) => {
    const dd = bonDetailsController.createBonDetail(detail, newBon._id);
    return dd;
  });
  const createdDetails = await Promise.all(createdDetailsPromise);
  const detailsIds = createdDetails.map((item) => item._id);
  const prixTottal = createdDetails.reduce((sum, item) => {
    const { tottal } = item;

    return sum + tottal;
  }, 0);

  const bb = await Bon.findOneAndUpdate(
    { _id: newBon._id },
    { bonDetails: detailsIds, tottal: prixTottal },
    {
      new: true,
    }
  );
  return bb;
};

const getAllBons = async () => {
  const bons = await Bon.find({})
    .populate({
      path: 'bonDetails',
      model: 'BonDetail',
      populate: {
        path: 'produit',
        model: 'Produit',
      },
    })
    .populate('client');
  return bons;
};

const getOneBon = async (id) => {
  const bon = await Bon.findById(id)
    .populate({
      path: 'bonDetails',
      model: 'BonDetail',
      populate: {
        path: 'produit',
        model: 'Produit',
      },
    })
    .populate('client');
  return bon;
};

const deleteBon = async (bonId) => {
  const bon = await Bon.findById(bonId);
  bon.bonDetails.forEach(async (bd) => {
    await bonDetailsController.removeBonDetails(bd._id);
  });
  const bn = await Bon.findOneAndDelete({ _id: bon._id });
  return bn;
};

const updateBon = async (bonId, bon, details) => {
  const newBon = await Bon.findById(bonId);

  const deletePromise = newBon.bonDetails.map(async (detail) => {
    const dd = bonDetailsController.removeBonDetails(detail);
    return dd;
  });
  await Promise.all(deletePromise);

  const createdDetailsPromise = details.map(async (detail) => {
    const dd = bonDetailsController.createBonDetail(detail, newBon._id);
    return dd;
  });
  const createdDetails = await Promise.all(createdDetailsPromise);

  const detailsIds = createdDetails.map((item) => item._id);
  const prixTottal = createdDetails.reduce((sum, item) => {
    const { tottal } = item;

    return sum + tottal;
  }, 0);

  const bb = await Bon.findOneAndUpdate(
    { _id: newBon._id },
    { bonDetails: detailsIds, tottal: prixTottal },
    {
      new: true,
    }
  );
  return bb;
};
module.exports = {
  createBon,
  getAllBons,
  getOneBon,
  deleteBon,
  updateBon,
};
