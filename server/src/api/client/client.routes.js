const express = require('express');
const clientController = require('./client.controller');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const clients = await clientController.getAllClients();
    res.send(clients);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const client = await clientController.getOneClient(id);
    res.send(client);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const newclient = req.body;
  try {
    const client = await clientController.createClient(newclient);
    res.send(client);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const newClient = req.body;
  try {
    const client = await clientController.editClient(id, newClient);
    res.send(client);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const client = await clientController.deleteClient(id);
    res.send(client);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
