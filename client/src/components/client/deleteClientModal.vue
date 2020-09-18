<template>
  <div class="inline">
    <v-btn class="ma-5" color="primary" dark @click.stop="dialog = true">
      <v-icon left>mdi-delete</v-icon>
      Delete
    </v-btn>

    <v-dialog v-model="dialog" max-width="290" :disabled="disableButton">
      <v-card>
        <v-card-title class="headline"
          >Vouler Vous Confirmer le delete de ce Client</v-card-title
        >

        <v-card-text>
          SVP confirmer le delete du client {{ client.declaration }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            :loading="loading"
            text
            @click="deleteProduit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      snackbar: false,
      loading: false,
      client: {},
    };
  },
  props: ["clientToDelete", "disableButton"],
  methods: {
    async deleteProduit() {
      try {
        this.loading = true;
        await axios.delete(
          `${process.env.VUE_APP_SERVER}/api/v1/produits/${this.client._id}`
        );
        this.$store.dispatch("fetchProduit");
        this.lading = false;
        this.dialog = false;
        this.text = `Successfully Deleted the  Produit ${this.client.declaration} `;
        this.snackbar = true;
      } catch (err) {
        console.log(err);
        this.lading = false;
        this.dialog = false;
        this.$store.dispatch("fetchClients");
        this.text = err.message;
        this.snackbar = true;
      }
    },
  },
  watch: {
    dialog: function() {
      this.client = this.clientToDelete;
    },
  },
};
</script>
<style>
.inline {
  display: inline-block;
}
</style>
