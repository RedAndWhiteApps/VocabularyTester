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
    <ChooseFileDialog @setWordList="setWordList" v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayWords from "./Vocabulary/DisplayWords.vue";
import ChooseFileDialog from "./Vocabulary/ChooseFileDialog.vue";

export default {
  name: "Home",
  components: {
    DisplayWords,
    ChooseFileDialog,
  },
  data: () => ({
    wordList: [],
    wordListFinishedText: "",
  }),
  mounted() {},
  methods: {
    setWordList(data) {
      this.wordList = data;
      this.$store.commit("setCurrentList", data);
      console.log(this.wordList, data, "setWorldList");
    },

    WordListFinished() {
      this.wordListFinishedText =
        "Congratz! You found all the correct answers!";
      this.wordList = [];
    },
  },
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
