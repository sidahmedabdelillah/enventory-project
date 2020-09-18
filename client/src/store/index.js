import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import produit from "./produit/produit";
import client from "./client/client";
import bon from "./bon/bon";

export default new Vuex.Store({
  modules: {
    produit,
    client,
    bon,
  },
});
