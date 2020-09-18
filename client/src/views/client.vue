<template>
  <div>
    <v-card height="60%">
      <v-card-title>
        Clients
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
        :items="clients"
        :search="search"
        :item="selectedProduit"
      ></v-data-table>
      <new-client-modal title="New Client" />
      <update-client-modal
        :client="selectedProduit[0]"
        title="Update Client"
        :disableButton="!oneIsSelected"
      />
      <delete-client-modal
        :disableButton="!oneIsSelected"
        :clientToDelete="selectedProduit[0]"
      />
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

import newClientModal from "../components/client/newClientModal";
import updateClientModal from "../components/client/updateClientModal";
import deleteClientModal from "../components/client/deleteClientModal";

export default {
  components: { newClientModal, updateClientModal, deleteClientModal },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Nom Prenom",
          align: "start",
          sortable: false,
          value: "declaration",
        },
      ],
      selectedProduit: {},
    };
  },
  computed: {
    ...mapState({ clients: (state) => state.client.clients }),
    oneIsSelected() {
      return this.selectedProduit.length == 1;
    },
  },
};
</script>
