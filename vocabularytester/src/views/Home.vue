<template>
  <div class="home">
    <DisplayWords v-if="words_excel.length > 0" :words_excel="words_excel" />
    <ChooseFileDialog v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayWords from "@/components/DisplayWords.vue";
import XLSX from "xlsx";
import ChooseFileDialog from "@/components/ChooseFileDialog.vue";

export default {
  name: "Home",
  components: {
    DisplayWords,
    ChooseFileDialog,
  },
  data: () => ({
    words_excel: [],
  }),
  mounted() {},
  methods: {
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
}
</style>
