<template>
  <v-container class="containerWords">
    <DisplayWord
      @answerinput="answerInput"
      :word_explanation="word_explanation"
    />
    <FeedbackDialog
      v-if="showFeedback"
      :description="feedbackDescription"
      :positiveFeedback="positiveFeedback"
      :yourAnswer="yourAnswer"
      @closeFeedback="closeFeedback"
      @saveAnswerToList="saveAnswerToList"
    />
    <div class="text-center">Amount left: {{ words.length + 1 }}</div>
    <!-- <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="!started" color="success">Start</v-btn>
      <v-btn v-else color="error">Stop</v-btn>
    </v-card-actions> -->
  </v-container>
</template>


<script>
import DisplayWord from "./DisplayWord.vue";
import FeedbackDialog from "./FeedbackDialog.vue";

export default {
  name: "DisplayWords",
  components: {
    DisplayWord,
    FeedbackDialog,
  },
  props: {
    wordList: Array,
  },
  data: () => ({
    yourAnswer: "",
    positiveFeedback: false,
    showFeedback: false,
    current_word: [],
    words: [],
    correct_words: [],
    mistaken_words: [],
    feedbackDescription: "",
  }),
  beforeMount() {
    this.words = this.wordList.slice();
    this.shuffleWords();
    this.current_word = this.words.pop();
  },
  computed: {
    word_explanation() {
      console.log("word_explanation", this.current_word, this.current_word[0]);
      try {
        return this.current_word[1].toString();
      } catch (e) {
        // TODO: notify error display --> missing correct table structure
        return "";
      }
    },
  },
  methods: {
    closeFeedback() {
      this.showFeedback = false;
    },
    saveAnswerToList(data) {
      console.log("saveAnswerToList", data);
      //TODO
    },
    shuffleWords() {
      this.words.sort(() => Math.random() - 0.5);
    },

    answerInput(data) {
      const current_word_inUpperCase = this.current_word[0]
        .toString()
        .toUpperCase();
      const answer_inUpperCase = data.answer.toString().toUpperCase();
      this.yourAnswer = data.answer.toString();
      this.showFeedback = true;

      if (current_word_inUpperCase == answer_inUpperCase) {
        console.log("correct answer");
        this.correct_words.push(this.current_word);
        this.positiveFeedback = true;
        this.feedbackDescription = "Keep up the good work!";
      } else {
        console.log("wrong answer");
        this.mistaken_words.push(this.current_word);
        this.words.unshift(this.current_word);
        // this.words.push(this.current_word)
        this.positiveFeedback = false;
        this.feedbackDescription =
          this.current_word[1] + " = " + this.current_word[0];
      }

      console.log(this.words);
      if (this.words.length > 0) {
        this.current_word = this.words.pop();
      } else {
        this.$emit("WordListFinished");
        // Congrats and go back
      }
    },
  },
};
</script>

<style scoped>
.containerWords {
  width: 100%;
  margin: auto;
}
</style>
