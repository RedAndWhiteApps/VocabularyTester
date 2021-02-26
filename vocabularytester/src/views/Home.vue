<template>
  <div class="home">
    <DisplayWords v-if="words_excel.length > 0" :words_excel="words_excel" />
    <choose-file-dialog v-else />
    <label>
      <input type="file" @change="loadText" />
    </label>
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayWords from "@/components/DisplayWords.vue";
import XLSX from "xlsx";
import ChooseFileDialog from "@/components/ChooseFileDialog.vue";
const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}));

export default {
  name: "Home",
  components: {
    DisplayWords,
    ChooseFileDialog,
  },
  data: () => ({
    words_excel: [],
    data: null,
    cols: null,
  }),
  mounted() {},
  methods: {
    loadText(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        /* Get first worksheet */
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        /* Update state */
        this.data = data;
        this.cols = make_cols(ws["!ref"]);
              console.log(data, make_cols(ws["!ref"]))

      };

      reader.readAsBinaryString(file);
    },
    
    read(filename) {
      const wb = XLSX.readFile(filename);
      console.log("XLSX", wb);
      for (let i = 0, l = wb.SheetNames.length; i < l; i += 1) {
        this.processSheet(wb.Sheets[wb.SheetNames[i]]);
      }
    },
    loadTextFromFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader("utf-8");

      reader.onload = (e) => {
        const result = e.target.result;
        console.log({ result: result });
        const words_excel = result.split("\n");
        words_excel.forEach((word_excel) => {
          const word_combination = word_excel.split(";");
          if (word_combination.length >= 2) {
            this.words_excel.push(word_combination);
          }
        });
      };
      reader.readAsText(file);
      console.log("Words has been loaded from the file", {
        result: this.words_excel,
      });
    },
  },
};
</script>

<style scoped>
.home {
  width: 100vw;
}
</style>
