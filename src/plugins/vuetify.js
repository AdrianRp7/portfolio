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
          dark: false,
          light: {
            colors: {
              //https://coolors.co/visualizer/42b883-ed9b40-fefffe
              primary: "#42b883", // #42b883
              secondary: "#ED9B40", // #FFCDD2
              accent: '#ffffff',
              background: '#2E4057',
              surface: '#2E4057',
              'grey-darken-2': "#31445E",
              'grey-darken-4': "#EDEDED",
              'grey-darken-3': "#EDEDED",
              'shades-black ': "#EDEDED",
              'shades-white ': "#EDEDED",
              //fondo: 2E4057
              //#DAB6C4
              //FFA0AC
            }
          },
        },
      },
  })