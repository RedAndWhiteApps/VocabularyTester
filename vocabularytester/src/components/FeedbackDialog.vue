
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar :color="positiveFeedback ? 'positive' : 'error'" dark flat >
            <v-toolbar-title>Feedback</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-title>
            {{title}}
          </v-card-title>
          <v-card-text>
              {{description}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DisableAutocomplete from 'vue-disable-autocomplete';

export default {
  name: "DisplayWord",
  props: {
    title: String,
    description: String,
    positiveFeedback: Boolean,
  },
  data: () => ({
  }),
  methods: {
      checkAnswer() {
        this.$emit('answerinput', {answer: this.answer})
        this.answer = "";
      }
  }
};
</script>