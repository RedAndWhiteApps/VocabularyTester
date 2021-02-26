
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar :color="positiveFeedback ? 'positive' : 'error'" dark flat>
            <v-toolbar-title>Feedback</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-title>
            <div v-if="positiveFeedback">Correct!!</div>
            <div v-else>Not correct...</div>
          </v-card-title>
          <v-card-text>
            {{ description }}
          </v-card-text>
          <v-card-text> Your answer: {{ yourAnswer }} </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="saveAnswerToList" dark color="positive">Save</v-btn>
            <v-btn @click="closeFeedback" dark color="error">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DisableAutocomplete from "vue-disable-autocomplete";

export default {
  name: "FeedbackDialog",
  props: {
    title: String,
    description: String,
    yourAnswer: String,
    positiveFeedback: Boolean,
  },
  data: () => ({}),
  methods: {
    saveAnswerToList() {
      this.$emit("saveAnswerToList", { answer: this.yourAnswer });
    },
    closeFeedback() {
      this.$emit("closeFeedback");
    },
  },
};
</script>