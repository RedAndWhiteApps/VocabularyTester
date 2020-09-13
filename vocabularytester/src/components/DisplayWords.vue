<template>
  <v-card class="containerWords">
    <DisplayWord />
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="!started" color="success">Start</v-btn>
      <v-btn v-else color="error">Stop</v-btn>

      <v-btn color="primary">Pass</v-btn>
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
    words_excel: [],
  },
  data: () => ({
    started: false,
    words: [],
    correct_words: [],
    mistaken_words: []
  }),
  methods: {
      
  }
};
</script>

<style scoped>
.containerWords {
  width: 90vw;
}
</style>
