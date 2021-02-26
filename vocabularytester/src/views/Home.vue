<template>
  <div class="home">
    <DisplayWords v-if="wordList.length > 0" :wordList="wordList" />
    <ChooseFileDialog @setWordList="setWordList" v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayWords from "@/components/DisplayWords.vue";
import ChooseFileDialog from "@/components/ChooseFileDialog.vue";

export default {
  name: "Home",
  components: {
    DisplayWords,
    ChooseFileDialog,
  },
  data: () => ({
    wordList: [],
  }),
  mounted() {
  },
  methods: {
    setWordList(data){
      this.wordList = data
      console.log(this.wordList, data, 'setWorldList')
    },
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
}
</style>
