import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#D34D4D',
            secondary: '#555555',
            tertiary: '#e28a8a',
            quaternary: '7b7b7b',
            accent: '#e28a8a',
            error: '#b71c1c',
            positive: '#037f51',
          },
        },
      },
});
