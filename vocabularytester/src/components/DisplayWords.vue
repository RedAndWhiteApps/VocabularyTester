<template>
  <v-card class="containerWords">
    <DisplayWord @answerinput="answerInput" :word_explanation="word_explanation" />
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

      if (this.current_word[0] == data.answer) {
        console.log("correct answer");
        this.correct_words.push(this.current_word);
      } else {
        console.log("wrong answer");
        this.mistaken_words.push(this.current_word);
        this.words.unshift(this.current_word);
      }

      console.log("er");
      this.current_word = this.words.pop();
      console.log({ wrods: this.words});
      console.log(this.current_word)
    },
  },
};
</script>

<style scoped>
.containerWords {
  width: 90vw;
  margin: auto;
}
</style>
