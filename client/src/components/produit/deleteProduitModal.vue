<template>
  <div class="inline">
    <v-btn color="primary" dark @click.stop="dialog = true" class="ma-5">
      <v-icon left>mdi-delete</v-icon>
      Delete
    </v-btn>

    <v-dialog v-model="dialog" max-width="290" :disableButton="disableButton">
      <v-card>
        <v-card-title class="headline"
          >Use Google's location service?</v-card-title
        >

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
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
      produit: {},
    };
  },
  props: ["produitToDelete", "disableButton"],
  methods: {
    async deleteProduit() {
      try {
        this.loading = true;
        await axios.delete(
          `${process.env.VUE_APP_SERVER}/api/v1/produits/${this.produit._id}`
        );
        this.$store.dispatch("fetchProduit");
        this.lading = false;
        this.dialog = false;
        this.text = `Successfully Deleted the  Produit ${this.declaration} `;
        this.snackbar = true;
      } catch (err) {
        console.log(err);
        this.lading = false;
        this.dialog = false;
        this.$store.dispatch("fetchProduit");
        this.text = err.message;
        this.snackbar = true;
      }
    },
  },
  watch: {
    dialog: function() {
      this.produit = this.produitToDelete;
    },
  },
};
</script>
<style>
.inline {
  display: inline-block;
}
</style>
