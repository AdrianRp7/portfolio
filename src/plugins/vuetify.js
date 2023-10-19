import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
//import * as components from 'vuetify/components'; We imported automatically only the components we have with vite-plugin-vuetify
//import * as directives from 'vuetify/directives';

export const vuetifyConfiguration = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              //https://coolors.co/visualizer/42b883-ed9b40-fefffe
              primary: "#42b883", // #E53935
              secondary: "#ED9B40", // #FFCDD2
              accent: '#ffffff',
            }
          },
        },
      },
  })