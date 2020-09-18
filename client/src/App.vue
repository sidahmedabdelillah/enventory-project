<template>
  <v-app class="app" max-height="90vh">
    <sid-nav />
    <v-main>
      <router-view class="view" />
    </v-main>
  </v-app>
</template>

<script>
import sidNav from "./components/sidNav";

export default {
  name: "App",

  components: {
    sidNav,
  },
  created() {
    this.$store.dispatch("fetchProduit");
    this.$store.dispatch("fetchClients");
    this.$store.dispatch("fetchBons");
  },
  data: () => ({
    //
  }),
};
</script>
<style scoped>
.app {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.spacer {
  width: 56px;
}
.view {
  overflow-y: scroll;
}
</style>
