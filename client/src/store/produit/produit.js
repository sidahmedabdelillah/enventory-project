import axios from "axios";
const state = () => ({
  produit: [],
});

const mutations = {
  setProduit: (state, produit) => {
    state.produit = produit;
  },
};

const actions = {
  fetchProduit: async ({ commit }) => {
    const pr = await axios.get(`${process.env.VUE_APP_SERVER}/api/v1/produits`);
    const { data } = pr;
    commit("setProduit", data);
  },
};

export default {
  state,
  mutations,
  actions,
};
