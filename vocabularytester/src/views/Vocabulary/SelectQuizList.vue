<template>
  <div class="SelectQuizList">
    <ChooseFileDialog @setWordList="setWordList" />
    <QuickListSelectionDialog />
    <SelectSequenceOrder />
  </div>
</template>

<script>
// @ is an alias to /src
import ChooseFileDialog from "./ChooseFileDialog.vue";
import QuickListSelectionDialog from "./QuickListSelectionDialog.vue";
import SelectSequenceOrder from "./SelectSequenceOrder.vue";

export default {
  name: "SelectQuizList",
  components: {
    ChooseFileDialog,
    QuickListSelectionDialog,
    SelectSequenceOrder,
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
  },
};
</script>

<style scoped>
.SelectQuizList {
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  padding: 1rem;
  justify-content: center;
  align-content: center;
  width: 50vw;
  margin: auto;
}

.SelectQuizList > .v-card {
  width: 40vw;
}

@media only screen and (max-width: 900px) {
  .SelectQuizList > .v-card {
    width: 80vw;
  }
}

@media only screen and (max-width: 450px) {
  .SelectQuizList > .v-card {
    width: calc(100vw - 2rem);
  }
}
</style>
