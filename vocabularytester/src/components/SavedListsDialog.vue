<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <v-card>
      <v-card-title>Your Saved Lists</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px">
       
      </v-card-text>
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
  export default {
    props:{
      showSavedListDialog: Boolean
    },
    data () {
      return {
        dialogm1: '',
        dialog: false,
      }
    },
    watch: {
    showSavedListDialog() {
      this.dialog = this.showSavedListDialog;
    },

    dialog() {
      this.$emit("SavedListsDialogState", this.dialog);
    },
  },
  }
</script>

<style scoped>
</style>


