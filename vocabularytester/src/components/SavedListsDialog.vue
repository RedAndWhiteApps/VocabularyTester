<template>
  <v-dialog v-model="dialog" scrollable>
    <v-card>
      <v-card-title>Your Saved Lists</v-card-title>
      <v-btn @click="showInputDialog = !showInputDialog"
        >Save Current List</v-btn
      >
      <InputDialog
        :showInputDialog="showInputDialog"
        @inputDialogState="inputDialogState"
        @inputData="saveCurrentList"
      />
      <v-divider></v-divider>
      <div class="overflow-y-auto">
        <v-list-item link v-for="x in 11" :key="x">
          <v-list-item-content>
            <v-list-item-title>Single-line item</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import InputDialog from "./InputDialog.vue";

export default {
  components: { InputDialog },
  props: {
    showSavedListDialog: Boolean,
  },
  data() {
    return {
      dialog: false,
      showInputDialog: false,
    };
  },
  watch: {
    showSavedListDialog() {
      this.dialog = this.showSavedListDialog;
    },
    dialog() {
      this.$emit("SavedListsDialogState", this.dialog);
    },
  },
  methods: {
    inputDialogState(stateDialog) {
      console.log('inputDialogState', stateDialog)
      this.showInputDialog = stateDialog;
    },
    saveCurrentList(name) {
      this.showInputDialog = false;
      this.$store.commit("addCurrentListToSavedLists", name);
    },
  },
};
</script>

<style scoped>
</style>


