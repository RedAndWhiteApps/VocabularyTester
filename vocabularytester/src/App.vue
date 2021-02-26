<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>

      <v-toolbar-title>Easy Vocabulary Tester</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer color="primary" app>
      <v-spacer></v-spacer>

      <span class="white--text">RedAndWhiteApps &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "LayoutsDemosBaselineFlipped",
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>

