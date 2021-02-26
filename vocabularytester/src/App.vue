<template>
  <v-app id="inspire">
    <AnimatedBackground class="animated_background" />

    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>

      <v-toolbar-title>Easy Vocabulary Tester</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height main_view" fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer color="primary" app>
      <v-spacer></v-spacer>

      <span class="white--text"
        >RedAndWhiteApps &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import AnimatedBackground from "@/components/AnimatedBackground.vue";

export default {
  name: "LayoutsDemosBaselineFlipped",
  components: { AnimatedBackground },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>

<style scoped>
.animated_background {
  z-index: 0;
}

.main_view{
  z-index: 99;
}
</style>

