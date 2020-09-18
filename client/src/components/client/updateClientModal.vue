<template>
  <div class="inline">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
      :disabled="disableButton"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          :depressed="true"
          dark
          v-bind="attrs"
          v-on="on"
          class="ma-5"
        >
          <v-icon left>mdi-pencil</v-icon>
          {{ title }}
        </v-btn>
      </template>
      <v-card>
        <v-form ref="form" v-model="valid">
          <v-card-title>
            <span class="headline">{{ title }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row align="center">
                <v-col cols="12">
                  <v-form ref="form" v-model="valid">
                    <v-text-field
                      v-model="declaration"
                      :counter="5"
                      :rules="nameRules"
                      label="Nom Prenom*"
                      required
                    ></v-text-field>
                  </v-form>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn
              :disabled="!valid"
              class="ma-2"
              color="secondary"
              :loading="loading"
              @click="update"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="2000">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    valid: true,
    dialog: false,
    stock: null,
    declaration: null,
    prixVente: null,
    prixAchat: null,
    nameRules: [(v) => !!v || "This is required"],
    loading: false,
    snackbar: false,
    text: "My timeout is set to 2000.",
  }),
  props: ["client", "title", "disableButton"],

  watch: {
    dialog: function() {
      this.declaration = this.client.declaration;
    },
  },
  methods: {
    async update() {
      const produit = {
        declaration: this.declaration,
      };
      try {
        this.loading = true;
        await axios.put(
          `${process.env.VUE_APP_SERVER}/api/v1/clients/${this.client._id}`,
          produit
        );
        this.text = `Successfully saved the new Client ${this.declaration} `;
      } catch (err) {
        this.text = err.message;
      }
      this.$store.dispatch("fetchClients");
      this.lading = false;
      this.dialog = false;
      this.snackbar = true;
    },
  },
};
</script>
<style scoped>
.inline {
  display: inline-block;
}
</style>
