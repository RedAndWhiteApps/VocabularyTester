<template>
  <v-file-input
    v-model="files"
    placeholder="Upload your excel file here"
    label="File input"
    multiple
    prepend-icon="mdi-paperclip"
  >
    <template v-slot:selection="{ text }">
      <v-chip small label color="primary">
        {{ text }}
      </v-chip>
    </template>
  </v-file-input>
</template>

<script>
export default {
  watch: {
      files(){
        console.log('...files changed')
        this.$emit('setFiles', this.files)
      }
  },
  data: () => ({
    files: [],
  }),
  methods: {
  },
};
</script>