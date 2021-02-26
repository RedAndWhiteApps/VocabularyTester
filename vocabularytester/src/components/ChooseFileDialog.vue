
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Upload Data</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-title>
            {{ title }}
          </v-card-title>
          <v-card-text>
            {{ description }}
            <FileInput :files="files" @setFiles="setFiles" />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="startQuiz" color="primary">Start</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FileInput from "./FileInput.vue";
import XLSX from "xlsx";

export default {
  name: "ChooseFileDialog",
  components: { FileInput },
  props: {
    title: String,
    description: String,
  },
  data: () => ({
    files: [],
    data: [],
    wordList: [],
  }),
  methods: {
    setFiles(files) {
      this.files = files;
    },

    startQuiz() {
      this.readFiles();
      this.$emit("setWordList", this.data);
    },

    dataToWorldList(){
      this.data.forEach(element => {
        
      });
    },

    readFiles() {
      const reader = new FileReader();
      reader.onload = this.readFile;
      this.files.forEach((file) => {
        reader.readAsBinaryString(file);
      });
    },

    readFile(e) {
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
      console.log(this.data);
    },
  },
};
</script>