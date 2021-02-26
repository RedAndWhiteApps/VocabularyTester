<template>
  <div>
    <v-file-input
      v-model="files"
      placeholder="Upload your documents"
      label="File input"
      multiple
      prepend-icon="mdi-paperclip"
    >
      <template v-slot:selection="{ text }">
        <v-chip small label color="primary">
          {{ text }}
        </v-chip>
      </template>
    </v-file-input>
    <v-btn @click="getFiles" color="primary">Check answer</v-btn>
  </div>
</template>

<script>
import XLSX from "xlsx";

export default {
  data: () => ({
    files: [],
  }),
   methods: {
    getFiles() {
      console.log("files in getFiels: ", this.files);
      this.files.forEach(file => {
          this.read(file.name)
      });
    },
    read(filename) {
      const wb = XLSX.readFile(filename);
      console.log('XLSX',wb);
      for (let i = 0, l = wb.SheetNames.length; i < l; i += 1) {
        this.processSheet(wb.Sheets[wb.SheetNames[i]]);
      }
    },
  },
};
</script>