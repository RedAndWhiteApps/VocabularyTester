
<template>
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Quick Selection</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-actions class="StartSelectionGrid">
            <div  class="text-xs-center">
              <v-btn @click="RedoRecentList"  color="primary">Redo recent set.</v-btn>
              
            </div>
            <div  class="text-xs-center">
              <v-btn @click="startQuiz" color="primary"
                >Select a set you saved!</v-btn
              >
            </div>
            <div fill-height fluid align-center>
              <v-btn @click="startQuiz" color="primary">Make a new set.</v-btn>
            </div>
          </v-card-actions>
        </v-card>
</template>

<script>
import XLSX from "xlsx";

export default {
  name: "ChooseFileDialog",
  components: {},
  props: {
    title: String,
    description: String,
  },
  data: () => ({}),
  methods: {
      RedoRecentList(){
          this.$store.commit('redoPreviousList');
      }
  },
};
</script>

<style scoped>
.StartSelectionGrid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 1.5rem;
  padding: 1.5rem;
  justify-content: center;
}

.StartSelectionGrid > div > .v-btn{
    /* min-width: 10rem; */
    width: 100%;
}

</style>