<template>
  <v-card class="containerWords">
    <DisplayWord :word_explanation="word_explanation" :word_answer="word_answer" />
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
    word_explanation: "",
    word_answer: "",
    words: [],
    correct_words: [],
    mistaken_words: []
  }),
  mounted(){
      this.words = this.words_excel;
      this.showRandomWord(this.words);
  },
  methods: {
      showRandomWord(words){
          console.log(words)
          const randomWordCombination = words[Math.floor(Math.random()*words.length)]
          this.word_explanation = randomWordCombination[1]
          this.word_answer = randomWordCombination[0]
      }
  }
};
</script>

<style scoped>
.containerWords {
  width: 90vw;
  margin: auto;
}
</style>
