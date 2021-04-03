
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color='positive' dark flat>
            <v-toolbar-title>Feedback</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-title class="justify-center">
            <div>Correct!!</div>
          </v-card-title>
          <v-card-text class="text-center text-h6">
            Keep up the good work!
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="saveAnswerToList" dark color="positive">Save</v-btn>
            <v-btn @click="closeFeedback" dark color="error">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DisableAutocomplete from "vue-disable-autocomplete";
import LetterDiff from "@/plugins/wordcomparator.js";

export default {
  name: "FeedbackDialog",
  props: {
    title: String,
    correctAnswer: String,
    yourAnswer: String,
    question: String,
  },
  data: () => ({}),
  mounted() {
  },
  methods: {
    saveAnswerToList() {
      this.$emit("saveAnswerToList", { answer: this.yourAnswer });
    },
    closeFeedback() {
      this.$emit("closeFeedback");
    },
  },
};
</script>

<style scoped>
.feedbackGrid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 6.5rem auto;
  grid-template-rows: 0.3rem auto;
}
</style>