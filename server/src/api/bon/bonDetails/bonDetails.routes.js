const express = require('express');

const bonDetailsController = require('./bonDetails.controller');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await bonDetailsController.getAllBonDetails();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await bonDetailsController.getOneBonDetails(id);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const { details, bon } = req.body;
  try {
    const created = await bonDetailsController.createBonDetail(details, bon);
    res.send(created);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await bonDetailsController.removeBonDetails(id);
    res.send({ ok: 'ok' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
