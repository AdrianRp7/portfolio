# portfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.




## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Extra things

### Avoid error types and others
To add types in the proyect, we need npm install @vue/runtime-core

## Install node scss
npm install -D sass-loader sass

### Install vuetify
npm i vuetify@^3.3.19

### Import https://www.npmjs.com/package/vite-plugin-vuetify in order to do dinamically the component import

npm i vite-plugin-vuetify

And we need to add vuetify to vite.config.ts
```Typescript
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify' //this

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify( {
      styles: {
        configFile: 'src/styles/settings.scss', //with that you can add new variables
      },
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

## Add icons
If you want to install icons you need to install them with npm in this case we want materials design icons

- npm install @mdi/font

After that we need to import them in main.ts

```Typescript
import './assets/main.css'
import "@mdi/font/css/materialdesignicons.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
//import * as components from 'vuetify/components'; We imported automatically only the components we have with vite-plugin-vuetify
//import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
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
              primary: "#42b883", // #E53935
              secondary: "#3b8eed", // #FFCDD2
              accent: '#252525',
            }
          },
        },
      },
  })
```

### Information vuetify configuration (colors, icons, etc)
[https://www.the-koi.com/projects/setting-up-vue-3-with-vuetify-icons-and-themes/](https://www.the-koi.com/projects/setting-up-vue-3-with-vuetify-icons-and-themes/)

### Add variables vuetify globally

vite.config.ts
```Typescript
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ 
    vue(),
    vuetify( {
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }
    ),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //this part is the important
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/settings.scss";
        `
      }
    }
  }
})