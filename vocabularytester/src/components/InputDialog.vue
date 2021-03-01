<template>
  <v-dialog v-model="dialog" scrollable persistent max-width="290" class="pa-12">
    <v-card>
      <v-card-title>A name for the list</v-card-title>
      <v-divider></v-divider>
      <v-text-field
      autofocus
      clearable
        class="mx-4"
        @keyup.enter="inputData()"
        v-model="data"
        label="Name"
        name="Name"
        type="text"
        autocomplete="off"
      ></v-text-field>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showInputDialog: Boolean,
  },
  data() {
    return {
      dialog: false,
      data: "",
    };
  },
  watch: {
    showInputDialog() {
      this.dialog = this.showInputDialog;
    },
    dialog() {
      this.$emit("inputDialogState", this.dialog);
    },
  },
  methods: {
    inputData() {
      this.$emit("inputData", this.data);
    },
  },
};
</script>

<style scoped>
</style>


