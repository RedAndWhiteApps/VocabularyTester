<template>
  <v-navigation-drawer v-model="drawer" app right>
    <v-list dense>
      <v-subheader> Easy Tools </v-subheader>
      <v-list-item link @click="showSavedListDialog = !showSavedListDialog ">
        <v-list-item-action>
          <v-icon>mdi-playlist-star</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>My Saved Lists</v-list-item-title>
        </v-list-item-content>
        <SavedListsDialog :showSavedListDialog="showSavedListDialog" @SavedListsDialogState="SavedListsDialogState" />
      </v-list-item>

      <v-subheader> Quick Settings </v-subheader>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-action>
          <v-checkbox v-model="animatedBackground"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Animated Background</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SavedListsDialog from "@/components/SavedListsDialog.vue"

export default {
  name: "NavigationMenu",
  components: {SavedListsDialog },
  props: {
    showDrawer: Boolean,
  },
  data: () => ({
    drawer: null,
    showSavedListDialog: false,
  }),
  computed: {
    animatedBackground: {
      // getter
      get: function () {
        return this.$store.state.settings.animatedBackground;
      },
      // setter
      set: function (stateAnimatedBackground) {
        this.$store.commit("setAnimatedBackground", stateAnimatedBackground);
      },
    },
  },
  watch: {
    showDrawer() {
      this.drawer = this.showDrawer;
    },

    drawer() {
      this.$emit("drawerChangedValue", this.drawer);
    },
  },

  methods:{
    SavedListsDialogState(savedListsDialogState){
      this.showSavedListDialog = savedListsDialogState;
    }

  }
};
</script>

<style scoped>
</style>

