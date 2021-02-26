<template>
  <v-card class="containerWords">
    <DisplayWord
      @answerinput="answerInput"
      :word_explanation="word_explanation"
    />
    <FeedbackDialog
      :title="'test'"
      :description="'testsss'"
      :positiveFeedback="true"
    />
    <div class="text-center">Amount left: {{ words.length + 1 }}</div>
    <div class="text-center">{{ feedback }}</div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="!started" color="success">Start</v-btn>
      <v-btn v-else color="error">Stop</v-btn>
    </v-card-actions>
  </v-card>
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
    started: false,
    current_word: [],
    words: [],
    correct_words: [],
    mistaken_words: [],
    feedback: "",
  }),
  beforeMount() {
    this.words = this.wordList.slice();
    this.shuffleWords();
    this.current_word = this.words.pop();
  },
  computed: {
    word_explanation() {
      console.log('word_explanation', this.current_word, this.current_word[0]);
      return this.current_word[1].toString();
    },
  },
  methods: {
    shuffleWords() {
      this.words.sort(() => Math.random() - 0.5);
    },

    answerInput(data) {
      const current_word_inUpperCase = this.current_word[0].toString().toUpperCase();
      const answer_inUpperCase = data.answer.toString().toUpperCase();

      if (current_word_inUpperCase == answer_inUpperCase) {
        console.log("correct answer");
        this.correct_words.push(this.current_word);
        this.feedback = "correct!";
      } else {
        console.log("wrong answer");
        this.mistaken_words.push(this.current_word);
        this.words.unshift(this.current_word);
        // this.words.push(this.current_word)
        this.feedback =
          "NOT CORRECT: " +
          this.current_word[1] +
          "\n -> \n" +
          this.current_word[0];
      }

      this.current_word = this.words.pop();
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
