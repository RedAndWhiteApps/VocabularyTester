
<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Sequence Options</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-title class="mb-0 pb-0"> </v-card-title>
    <div>
      <template>
        <v-container fluid>
          <v-radio-group v-model="SequenceOrder">
            <v-radio value="Random">
              <template v-slot:label>
                <div>
                  Random<strong class="success--text"></strong>
                </div>
              </template>
            </v-radio>
            <v-radio value="BeginToEnd">
              <template v-slot:label>
                <div>
                  Begin -->  End <strong class="primary--text"></strong>
                </div>
              </template>
            </v-radio>
            <v-radio value="EndToBegin">
              <template v-slot:label>
                <div>
                  End -->  Begin <strong class="primary--text"></strong>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </v-container>
      </template>
    </div></v-card
  >
</template></div>
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
  data: () => ({
      SequenceOrder: 'Random',

  }),
  methods: {},
};
</script>