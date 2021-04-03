<template>
  <div class="home">
    <v-card
      class="congratsCard"
      dark
      color="accent"
      v-if="wordListFinishedText !== ''"
    >
      <v-card-title class="justify-center" primary-title>
        {{ wordListFinishedText }}
      </v-card-title></v-card
    >
    <DisplayWords
      v-if="wordList.length > 0"
      :wordList="wordList"
      @WordListFinished="WordListFinished"
    />
    <SelectQuizList v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayWords from "./Vocabulary/DisplayWords.vue";
import SelectQuizList from "./Vocabulary/SelectQuizList.vue";

export default {
  name: "Home",
  components: {
    DisplayWords,
    SelectQuizList,
  },
  data: () => ({
    wordListFinishedText: "",
  }),
  mounted() {},
  methods: {
    WordListFinished() {
      this.wordListFinishedText =
        "Congratz! You found all the correct answers!";
      this.$store.commit("currentListFinished");
    },
  },
  computed: {
    wordList(){
      return this.$store.state.currentList;
    },
    previousList(){
      return this.$store.state.previousList;
    }
  }
};
</script>

<style scoped>
.home {
  width: 100vw;
}

.congratsCard {
  width: 50vw;
  margin: auto;
}
</style>
