
<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Options</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-title class="mb-0 pb-0"> Sequence Options </v-card-title>
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
    </div>
    <div>
          <v-card-title class="mb-0 pb-0">Testing Method </v-card-title>

      <template>
        <v-container fluid>
          <v-radio-group v-model="TestingMethod">
            <v-radio value="Typing">
              <template v-slot:label>
                <div>
                  Typing<strong class="success--text"></strong>
                </div>
              </template>
            </v-radio>
            <v-radio value="MultipleChoice">
              <template v-slot:label>
                <div>
                  Multiple Choice <strong class="primary--text"></strong>
                </div>
              </template>
            </v-radio>
            <v-radio value="FlashCards">
              <template v-slot:label>
                <div>
                  Flash Cards <strong class="primary--text"></strong>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </v-container>
      </template>
    </div></v-card
  >
</template>

<script>
import DisableAutocomplete from "vue-disable-autocomplete";

export default {
  name: "SelectSequenceOrder",
  props: {},
  data: () => ({
      SequenceOrder: 'Random',
      TestingMethod: 'Typing'

  }),
  methods: {},
};
</script>