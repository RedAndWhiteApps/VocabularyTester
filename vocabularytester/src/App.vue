<template>
  <v-app id="inspire">
    <AnimatedBackground class="animated_background" />

    <NavigationMenu :showDrawer="drawer" @drawerChangedValue="drawerChangedValue"/>

    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>

      <v-toolbar-title>Easy Vocabulary Tester</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height main_view" fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer color="primary" app>
      <v-spacer></v-spacer>

      <span class="white--text">
        <a
          target="_blank"
          class="white--text"
          href="https://redandwhiteapps.com"
          >RedAndWhiteApps</a
        >
        &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import AnimatedBackground from "@/components/AnimatedBackground.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";

export default {
  name: "LayoutsDemosBaselineFlipped",
  components: { AnimatedBackground, NavigationMenu },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  methods:{
    drawerChangedValue(drawer){
      this.drawer = drawer;
    }
  }
};
</script>

<style scoped>
.animated_background {
  z-index: 0;
}

.main_view {
  z-index: 99;
}

a {
  text-decoration: none;
}
</style>

