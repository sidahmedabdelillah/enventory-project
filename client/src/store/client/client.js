import axios from "axios";
const state = () => ({
  clients: [],
});

const mutations = {
  setClients: (state, _clients) => {
    state.clients = _clients;
  },
};

const actions = {
  fetchClients: async ({ commit }) => {
    const pr = await axios.get(`${process.env.VUE_APP_SERVER}/api/v1/clients`);
    const { data } = pr;
    commit("setClients", data);
  },
};

export default {
  state,
  mutations,
  actions,
};
