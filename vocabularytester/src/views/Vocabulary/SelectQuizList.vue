<template>
  <div>
    <ChooseFileDialog @setWordList="setWordList" />
    <QuickListSelectionDialog />
  </div>
</template>

<script>
// @ is an alias to /src
import ChooseFileDialog from "./ChooseFileDialog.vue";
import QuickListSelectionDialog from "./QuickListSelectionDialog.vue"

export default {
  name: "SelectQuizList",
  components: {
    ChooseFileDialog,
    QuickListSelectionDialog
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
</style>
