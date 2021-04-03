<template>
  <v-dialog v-model="dialog" scrollable width="unset">
    <v-card>
      <v-card-title
        >Your Saved Lists
        <v-btn
          class="mx-6 my-3"
          color="primary"
          @click="dialog = !dialog"
          >Save Current List</v-btn
        ></v-card-title
      >
      <InputDialog
        :dialog="dialog"
        @inputDialogState="inputDialogState"
        @inputData="saveCurrentList"
      />

      <v-divider></v-divider>
      <div class="SavedListLayout">
        <div class="overflow-y-auto">
          <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
          <v-list-item
            link
            v-for="(item, index) in savedLists"
            :key="item.name + index"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
                </v-list-item-group>

        </div>
        <ViewList :list="savedLists[selectedItem].list"/>
      </div>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false"> Save </v-btn>
        <v-spacer />
        <v-btn
          class="mx-6 my-3"
          color="primary"
          @click="dialog = !dialog"
          >Quiz Current List</v-btn
        >
        
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import InputDialog from "./InputDialog.vue";
import ViewList from "./ViewList.vue";

export default {
  components: { InputDialog, ViewList },
  props: {
    showSavedListDialog: Boolean,
  },
  data() {
    return {
      dialog: false,
      selectedItem: 1,
    };
  },
  computed: {
    savedLists: {
      // getter
      get: function () {
        console.log(this.$store.getters.savedLists);
        return this.$store.getters.savedLists;
      },
    },
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
      console.log("inputDialogState", stateDialog);
      this.dialog = dialog;
    },
    saveCurrentList(name) {
      this.dialog = false;
      this.$store.commit("addCurrentListToSavedLists", name);
    },
  },
};
</script>

<style scoped>

.SavedListLayout{
  display: grid;
  grid-template-columns: 20rem auto;
}
</style>


