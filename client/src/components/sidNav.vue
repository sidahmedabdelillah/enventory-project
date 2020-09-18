<template>
  <v-navigation-drawer
    :app="true"
    v-model="drawer"
    :color="color"
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    :right="right"
    :permanent="permanent"
    :src="bg"
    clipped
    absolute
    dark
  >
    <v-list dense nav class="py-0">
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Application</v-list-item-title>
          <v-list-item-subtitle>Subtext</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="item in items"
        router
        :to="item.link"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Bon", icon: "mdi-view-dashboard", link: "/" },
        { title: "Produit", icon: "mdi-image", link: "/client" },
        { title: "Clien", icon: "mdi-help-box", link: "/bon" },
      ],
      color: "primary",
      right: false,
      permanent: true,
      miniVariant: true,
      expandOnHover: true,
      background: false,
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
};
</script>
