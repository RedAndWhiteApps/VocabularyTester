
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar :color="positiveFeedback ? 'positive' : 'error'" dark flat>
            <v-toolbar-title>Feedback</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-title class="justify-center">
            <div v-if="positiveFeedback">Correct!!</div>
            <div v-else>Not correct...</div>
          </v-card-title>
          <v-card-text class="text-center" v-if="positiveFeedback"> Keep up the good work! </v-card-text>
          <v-card-text class="feedbackGrid" v-else>
            <div class="font-weight-medium text-right">Question: </div> <div> {{question}}</div>
            <div class="font-weight-medium text-right">Correct Answer: </div> <div> {{correctAnswer}}</div>
            <div class="font-weight-medium text-right">Your Answer: </div> <div> {{yourAnswer}}</div>
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
import LetterDiff from "@/plugins/wordcomparator.js"

export default {
  name: "FeedbackDialog",
  props: {
    title: String,
    correctAnswer: String,
    yourAnswer: String,
    question: String,
    positiveFeedback: Boolean,
  },
  data: () => ({}),
  mounted(){
    console.log(LetterDiff('oke', '0k'));
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
.feedbackGrid{
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 6.5rem auto;
  grid-template-rows: 0.3rem auto;

}
</style>