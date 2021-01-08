import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#1190cb',
        secondary: '#484848',
        accent: '#70bce0',
        error: '#e57373',
      },
    },
  },
});
