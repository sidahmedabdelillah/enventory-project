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
        :items-per-page="7"
        item-key="declaration"
        :headers="headers"
        :items="bons"
        :search="search"
        :item="selectedProduit"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
