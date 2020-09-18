<template>
  <div>
    <v-card max-height="90%">
      <v-card-title>
        Produits
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :single-select="true"
        v-model="selectedProduit"
        show-select
        item-key="declaration"
        :headers="headers"
        :items="produit"
        :search="search"
        :item="selectedProduit"
      ></v-data-table>
      <new-produit-modal title="New Client" />
      <update-produit-modal
        :produit="selectedProduit[0]"
        title="Update Client"
        :disableButton="!oneIsSelected"
      />
      <delete-produit-modal
        :produitToDelete="selectedProduit[0]"
        :disableButton="!oneIsSelected"
      />
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

import newProduitModal from "../components/produit/newProduitModal";
import updateProduitModal from "../components/produit/updateProduitModal";
import deleteProduitModal from "../components/produit/deleteProduitModal";
export default {
  components: {
    newProduitModal,
    updateProduitModal,
    deleteProduitModal,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "declaration",
          align: "start",
          sortable: false,
          value: "declaration",
        },
        { text: "prixAchat", value: "prixAchat" },
        { text: "prixVente", value: "prixVente" },
        { text: "stock", value: "stock" },
      ],
      selectedProduit: {},
    };
  },
  computed: {
    ...mapState({ produit: (state) => state.produit.produit }),
    oneIsSelected() {
      return this.selectedProduit.length == 1;
    },
  },
};
</script>
