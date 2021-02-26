
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Feedback</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-title>
            {{ title }}
          </v-card-title>
          <v-card-text>
            {{ description }}
            <FileInput v-model="files" />
          </v-card-text>
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="getFiles" color="primary">Check answer</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FileInput from "./FileInput.vue";

export default {
  name: "ChooseFileInput",
  components: { FileInput },
  props: {
    title: String,
    description: String,
    positiveFeedback: Boolean,
  },
  data: () => ({
    files: [],
  }),
  methods: {
    getFiles() {
      console.log("files in getFiels: ", this.files);
    },
  },
};
</script>