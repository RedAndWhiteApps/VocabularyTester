<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="wordList" :search="search">
      <template v-slot:[`item.mistakes`]="{ item }">
        <v-chip color="primary" dark>
          {{ item.mistakes }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>


<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Word",
          align: "start",
          filterable: false,
          value: "word",
        },
        { text: "Meaning", value: "meaning" },
      ],
    };
  },

  computed: {
    wordList() {
      const wordList = [];
      this.list.forEach((item) => {
        const element = { word: item[0], meaning: item[1] };
        wordList.push(element);
      });
      return wordList;
    },
  },
};
</script>