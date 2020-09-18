const axios = require("axios");

const state = () => ({
  bons: [],
});

const mutations = {
  setBons: (state, _bons) => {
    state.bons = _bons;
  },
};

const actions = {
  fetchBons: async ({ commit }) => {
    const bn = await axios.get(`${process.env.VUE_APP_SERVER}/api/v1/bons`);
    const { data } = bn;
    commit("setBons", data);
  },
};

module.exports = {
  state,
  mutations,
  actions,
};
