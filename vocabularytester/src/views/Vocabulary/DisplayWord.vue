
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Vocabulary Tester</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              class="resetCurrentBtn"
              @click="resetCurrentList"
              color="secondary"
              >Reset Set</v-btn
            >
          </v-toolbar>
          <v-card-title class="mb-0 pb-0">
            {{ word_explanation }}
          </v-card-title>
          <v-text-field
            class="mx-4"
            @keyup.enter="checkAnswer()"
            v-model="answer"
            label="Answer"
            name="Answer"
            type="text"
            autocomplete="off"
          ></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="checkAnswer" color="primary">Check answer</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DisableAutocomplete from "vue-disable-autocomplete";

export default {
  name: "DisplayWord",
  props: {
    word_explanation: String,
  },
  data: () => ({
    drawer: null,
    started: false,
    answer: "",
  }),
  methods: {
    resetCurrentList() {
      this.$store.commit("resetCurrentList");
    },
    checkAnswer() {
      this.$emit("answerinput", { answer: this.answer.toString() });
      this.answer = "";
    },
  },
};
</script>