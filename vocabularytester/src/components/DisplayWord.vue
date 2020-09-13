
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Vocabulary Tester</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <span>Source</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            {{word_explanation}}
            <v-text-field @keyup.enter="checkAnswer()" v-model="answer" label="Answer" name="Answer" prepend-icon="mdi-account" type="text"></v-text-field>
          </v-card-text>
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
export default {
  name: "DisplayWord",
  props: {
    word_explanation: String,
  },
  data: () => ({
    drawer: null,
    started: false,
    answer: ""
  }),
  methods: {
      checkAnswer() {
        this.$emit('answerinput', {answer: this.answer})
        this.answer = "";
      }
  }
};
</script>