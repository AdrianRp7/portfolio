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
              primary: "#75CCB2", // #42b883
              secondary: "#F7931E", // #FFCDD2
              accent: '#ffffff',
              background: '#FFF',
              surface: '#FFF',
              'grey-darken-2': "#FFF0DF",
              'grey-darken-4': "#292929",
              'grey-darken-3': "#292929",
              'shades-black ': "#292929",
              'shades-white ': "#292929",
              //fondo: 2E4057
              //#DAB6C4
              //FFA0AC
            }
          },
        },
      },
  })