import Vue from "vue";
import VueRouter from "vue-router";
import produit from "../views/produit.vue";
import client from "../views/client";
import bon from "../views/bon";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: produit,
  },
  {
    path: "/client",
    name: "Home",
    component: client,
  },
  {
    path: "/bon",
    name: "Home",
    component: bon,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
