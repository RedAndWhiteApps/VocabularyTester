
<template>
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Sequence Options</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-title class="mb-0 pb-0"> Hi> </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="checkAnswer" color="primary">Check answer</v-btn>
          </v-card-actions>
        </v-card>
</template>

<script>
import DisableAutocomplete from "vue-disable-autocomplete";

export default {
  name: "SelectSequenceOrder",
  props: {},
  data: () => ({}),
  methods: {},
};
</script>