<template>
  <v-card class="containerWords">
    <DisplayWord @answerinput="answerInput" :word_explanation="word_explanation" />
    <div class="text-center">Amount left: {{words.length + 1}}</div>
    <div class="text-center">{{feedback}}</div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="!started" color="success">Start</v-btn>
      <v-btn v-else color="error">Stop</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
import DisplayWord from "./DisplayWord.vue";
export default {
  name: "DisplayWords",
  components: {
    DisplayWord,
  },
  props: {
    words_excel: Array,
  },
  data: () => ({
    started: false,
    current_word: [],
    words: [],
    correct_words: [],
    mistaken_words: [],
    feedback: ""
  }),
  mounted() {
    this.words = this.words_excel;
    this.shuffleWords();
    this.current_word = this.words.pop();
  },
  computed: {
    word_explanation() {
      return this.current_word[1];
    },
  },
  methods: {
    shuffleWords() {
      this.words.sort(() => Math.random() - 0.5);
    },

    answerInput(data) {
      console.log(data);

      if (this.current_word[0].toUpperCase() == data.answer.toUpperCase()) {
        console.log("correct answer");
        this.correct_words.push(this.current_word);
        this.feedback = "correct!"
      } else {
        console.log("wrong answer");
        this.mistaken_words.push(this.current_word);
        this.words.unshift(this.current_word);
        this.feedback = "NOT CORRECT: " + this.current_word[1]  + " -> " + this.current_word[0]
      }

      console.log("er");
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
