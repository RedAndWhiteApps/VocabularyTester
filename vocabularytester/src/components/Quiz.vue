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
  mounted() {
    this.words = this.wordList.slice();
    console.log(this.words)
    this.shuffleWords();
    this.current_word = this.words.pop();
  },
  },
  methods: {
    shuffleWords() {
      this.words.sort(() => Math.random() - 0.5);
    },

    answerInput(data) {
    
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
