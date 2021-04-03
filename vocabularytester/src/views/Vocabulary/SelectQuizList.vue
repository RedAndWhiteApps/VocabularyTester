<template>
  <div>
    <ChooseFileDialog @setWordList="setWordList" />
  </div>
</template>

<script>
// @ is an alias to /src
import ChooseFileDialog from "./ChooseFileDialog.vue";

export default {
  name: "SelectQuizList",
  components: {
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
  },
};
</script>

<style scoped>
</style>
