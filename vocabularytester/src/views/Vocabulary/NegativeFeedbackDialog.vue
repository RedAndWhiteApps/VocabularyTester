
<template>
  <v-container class="fill-height" fluid>
        <v-card class="elevation-12 parent_feedbackGrid">
          <v-toolbar color="error" dark flat>
            <v-toolbar-title>Feedback</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-title class="justify-center">
            <div>Not correct...</div>
          </v-card-title>

          <div class="pa-3 feedbackGrid text-h6">
            <div class="font-weight-medium text-right" >Question:</div>
            <div>{{ question }}</div>
            <div class="font-weight-medium text-right">Correct Answer:</div>
            <div>{{ correctAnswer }}</div>
            <div class="font-weight-medium text-right">Your Answer:</div>
            <div
              id="yourAnswerDiv"
              ref="yourAnswerDiv"
              class="yourAnswerDiv"
            ></div>
          </div>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="saveAnswerToList" dark color="positive">Save</v-btn>
            <v-btn @click="closeFeedback" dark color="error">Close</v-btn>
          </v-card-actions>
        </v-card>
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
  watch: {
    yourAnswer() {
      this.coloredFeedback();
    },
  },
  mounted() {
    this.coloredFeedback();
  },
  methods: {
    coloredFeedback() {
      const feedback = LetterDiff(this.yourAnswer, this.correctAnswer);
      // const paragrapgh = this.$refs.yourAnswerDiv;
      const paragrapgh = document.getElementById("yourAnswerDiv");

      console.log(paragrapgh);

      var spans = [];
      console.log(feedback);

      for (let i = 0; i < feedback.length; i++) {
        let color = "red";
        let word_status = feedback[i];

        if (word_status["same_letters"]) {
          console.log("same");

          var span =
            "<span style='color: " +
            "green" +
            ";'>" +
            word_status["same_letters"] +
            "</span>";

          spans.push(span);
        }
        if (word_status["different_letters"]) {
          console.log("different");

          var span =
            "<span style='color: " +
            "red" +
            ";'>" +
            word_status["different_letters"].word1 +
            "</span>";

          spans.push(span);
        }
      }

      // setting colored spans as paragraph HTML
      paragrapgh.innerHTML = spans.join(" ");
    },

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
.yourAnswerDiv {
  display: flex;
}
.yourAnswerDiv > span {
  display: inline-block;
  padding: 1em;
  border: 2px solid #f00;
}

.feedbackGrid {
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 9.5rem auto;
  /* grid-template-rows: 0.3rem auto; */
  width: auto;
}

.parent_feedbackGrid{
  margin:auto;
}

.gridline {
  border-right: 1px solid black;
  height: 100%;
}
</style>