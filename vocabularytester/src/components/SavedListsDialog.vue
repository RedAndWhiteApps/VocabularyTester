<template>
  <v-navigation-drawer v-model="drawer" app right>
    <v-list dense>
      <v-subheader> Easy Tools </v-subheader>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-playlist-star</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>My Saved Lists</v-list-item-title>
        </v-list-item-content>
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
import AnimatedBackground from "@/components/AnimatedBackground.vue";

export default {
  name: "LayoutsDemosBaselineFlipped",
  components: { AnimatedBackground },
  props: {
    showDrawer: null,
  },
  data: () => ({
    drawer: null,
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
};
</script>

<style scoped>
</style>



<v-dialog
      v-model="dialog"
      scrollable
      max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Country</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group
            v-model="dialogm1"
            column
          >
            <v-radio
              label="Bahamas, The"
              value="bahamas"
            ></v-radio>
            <v-radio
              label="Bahrain"
              value="bahrain"
            ></v-radio>
            <v-radio
              label="Bangladesh"
              value="bangladesh"
            ></v-radio>
            <v-radio
              label="Barbados"
              value="barbados"
            ></v-radio>
            <v-radio
              label="Belarus"
              value="belarus"
            ></v-radio>
            <v-radio
              label="Belgium"
              value="belgium"
            ></v-radio>
            <v-radio
              label="Belize"
              value="belize"
            ></v-radio>
            <v-radio
              label="Benin"
              value="benin"
            ></v-radio>
            <v-radio
              label="Bhutan"
              value="bhutan"
            ></v-radio>
            <v-radio
              label="Bolivia"
              value="bolivia"
            ></v-radio>
            <v-radio
              label="Bosnia and Herzegovina"
              value="bosnia"
            ></v-radio>
            <v-radio
              label="Botswana"
              value="botswana"
            ></v-radio>
            <v-radio
              label="Brazil"
              value="brazil"
            ></v-radio>
            <v-radio
              label="Brunei"
              value="brunei"
            ></v-radio>
            <v-radio
              label="Bulgaria"
              value="bulgaria"
            ></v-radio>
            <v-radio
              label="Burkina Faso"
              value="burkina"
            ></v-radio>
            <v-radio
              label="Burma"
              value="burma"
            ></v-radio>
            <v-radio
              label="Burundi"
              value="burundi"
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>