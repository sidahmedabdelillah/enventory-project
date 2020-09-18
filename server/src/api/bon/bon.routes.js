const express = require('express');
const bonController = require('./bon.controller');

const bonDetailsRouter = require('./bonDetails/bonDetails.routes');

const router = express.Router();

router.use('/bonDetails', bonDetailsRouter);

router.get('/', async (req, res, next) => {
  try {
    const bons = await bonController.getAllBons();
    res.send(bons);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await bonController.getOneBon(id);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const { bon } = req.body;
  const { details } = req.body;
  try {
    const newBon = await bonController.createBon(bon, details);
    res.send(newBon);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { details, bon } = req.body;
  try {
    const data = await bonController.updateBon(id, bon, details);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const bon = bonController.deleteBon(id);
    res.send(bon);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
