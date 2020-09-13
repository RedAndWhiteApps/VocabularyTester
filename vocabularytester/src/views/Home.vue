<template>
  <div class="home">
    <DisplayWords v-if="words_excel.length > 0 " :words_excel="words_excel" />
    <label class="text-reader">
      <input type="file" @change="loadTextFromFile" />
    </label>
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayWords from "@/components/DisplayWords.vue";

export default {
  name: "Home",
  components: {
    DisplayWords,
  },
  data: () => ({
    words_excel: [],
  }),
  mounted() {},
  methods: {
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target.result;

        const words_excel = result.split("\n");
        words_excel.forEach((word_excel) => {
          const word_combination = word_excel.split(";");
          if (word_combination.length >= 2) {
            this.words_excel.push(word_combination);
          }
        });
      };
      reader.readAsText(file);
      console.log("Words has been loaded from the file",{ result: this.words_excel });
    },
  },
};
</script>
