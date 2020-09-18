const Client = require('./client.model');

const createClient = async (client) => {
  const newClient = new Client(client);
  await newClient.save();
  return newClient;
};
const getOneClient = async (clientId) => {
  const client = await Client.findById(clientId);
  return client;
};

const getAllClients = async () => {
  const clients = await Client.find({});
  return clients;
};

const editClient = async (clientId, _edited) => {
  const editedClient = await Client.findOneAndUpdate(
    { _id: clientId },
    _edited
  );
  return editedClient;
};

const deleteClient = async (clientId) => {
  const removedClient = await Client.findByIdAndRemove({ _id: clientId });
  return removedClient;
};

module.exports = {
  createClient,
  editClient,
  deleteClient,
  getOneClient,
  getAllClients,
};
