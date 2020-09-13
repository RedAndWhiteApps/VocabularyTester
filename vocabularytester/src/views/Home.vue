<template>
  <div class="home">
    <DisplayWords :words_excel="words_excel"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayWords from '@/components/DisplayWords.vue'
import excel from '../assets/Vocabulary.csv'

export default {
  name: 'Home',
  components: {
    DisplayWords
  },
  data: () => ({
    words_excel: [],
  }),
  methods: {
      
  }
}
</script>
