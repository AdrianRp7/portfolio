<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import type { Ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import {changeActualElementNavbar, isAElement} from '@/interfaces/navbarAccentFunction'

const drawer: Ref<boolean> = ref(false);

  //When the language change we need to change the actual accent bar width because we use absolute values for the animation 
  //Example competencias to skills
  function updateNavbarAccentBar() {
    setTimeout(() => {
      const hightLightElement: HTMLElement | null = document.querySelector<HTMLElement>('.hightlight');
      if (isAElement(hightLightElement)) {
        const hrefCheck: string | null = hightLightElement.getAttribute("href");
        if(hrefCheck) {
          console.log(hrefCheck.slice(1,hrefCheck.length))
          changeActualElementNavbar(hrefCheck.slice(1,hrefCheck.length));
        }
      }
    },100)
  }

</script>

<template>
  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink> -->
    <v-layout class="test">
      <v-navigation-drawer v-model="drawer" :width="'100%'" :scrim="false" disable-resize-watcher>
        <v-container class="d-flex flex-column">
          <div class="d-flex align-center justify-space-between mb-6">
            <a href="#home" class="pl-3">
              <v-img class="rounded-circle" width="30px" src="logo-3.png"></v-img>
            </a>
            <v-btn icon="mdi-close" variant="plain" @click="drawer = !drawer">
            </v-btn>
          </div>
          <a class="text-black mb-4" href="#about">
            <v-btn flat class="text-capitalize text-grey-darken-4 font-weight-semibold600"  size="small">{{ $t('navbar.aboutMe') }}</v-btn>
          </a>
          <a class="text-black mb-4" href="#experience">
            <v-btn flat class="text-capitalize text-grey-darken-4 font-weight-semibold600"  size="small">{{ $t('navbar.experience') }}</v-btn>
          </a>
          <a class="text-black mb-4" href="#projects">
            <v-btn flat class="text-capitalize text-grey-darken-4 font-weight-semibold600"  size="small">{{ $t('navbar.projects') }}</v-btn>
          </a>
          <a class="text-black mb-4" href="#education">
            <v-btn flat class="text-capitalize text-grey-darken-4 font-weight-semibold600"  size="small">{{ $t('navbar.education') }}</v-btn>
          </a>
          <a class="text-black mb-4" href="#skills">
            <v-btn flat class="text-capitalize text-grey-darken-4 font-weight-semibold600"  size="small">{{ $t('navbar.skill') }}</v-btn>
          </a>
          <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn
                v-bind="props"
                size="small"
                variant="plain"
                class="text-capitalize justify-start opacity-1 text-grey-darken-4"
                append-icon="mdi-chevron-down "
              >
              {{ $t('navbar.languages') }}
                
              </v-btn>
              </template>
              <v-list>
                <v-list-item
                >
                  <v-list-item-title v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" @click="$i18n.locale=locale">
                    <v-btn
                    outlined
                    flat
                    size="small"
                    density="compact"
                    class="text-capitalize text-grey-darken-4"
                    @click="updateNavbarAccentBar()"
                  >
                    {{ $t(`navbar.languagesText.${locale}`) }}
                </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
        </v-container>
      </v-navigation-drawer>
      
      <v-app-bar  id="app-bar" class="max-width-bar text-grey-darken-3" flat v-once app>
        <template v-slot:prepend>
          
          <v-app-bar-nav-icon class="d-block d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <a href="#home">
            <v-img class="rounded-circle" width="30px" src="logo-3.png"></v-img>
          </a>
        </template>
        <template v-slot:append >
          <div class="d-none d-md-block">
              <a class="text-black section-href accent-bar" href="#about">
                <v-btn flat class="text-capitalize text-body-2 text-grey-darken-4 font-weight-semibold600 border-botton-selected" size="small">{{ $t('navbar.aboutMe') }}</v-btn>
              </a>
              <a class="text-black section-href" href="#experience">
                <v-btn flat class="text-capitalize text-body-2 text-grey-darken-4 font-weight-semibold600 border-botton-selected" size="small">{{ $t('navbar.experience') }}</v-btn>
              </a>
              <a class="text-black section-href" href="#projects">
                <v-btn flat class="text-capitalize text-body-2 text-grey-darken-4 font-weight-semibold600 border-botton-selected" size="small">{{ $t('navbar.projects') }}</v-btn>
              </a>
              <a class="text-black section-href" href="#education">
                <v-btn flat class="text-capitalize text-body-2 text-grey-darken-4 font-weight-semibold600 border-botton-selected" size="small">{{ $t('navbar.education') }}</v-btn>
              </a>
              <a class="text-black section-href" href="#skills">
                <v-btn flat class="text-capitalize text-body-2 text-grey-darken-4 font-weight-semibold600 border-botton-selected" size="small">{{ $t('navbar.skill') }}</v-btn>
              </a>
            <v-menu open-on-hover>
              <template v-slot:activator="{ props }">
                <v-btn
                outlined
                color="black"
                v-bind="props"
                size="small"
                class="text-capitalize text-grey-darken-4 font-weight-semibold600 text-body-2"
                append-icon="mdi-chevron-down "
              >
              {{ $t('navbar.languages') }}
                
              </v-btn>
              </template>
              <v-list>
                <v-list-item
                >
                  <v-list-item-title v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" @click="$i18n.locale=locale">
                    <v-btn
                    outlined
                    flat
                    size="small"
                    class="text-capitalize text-grey-darken-4"
                    @click="updateNavbarAccentBar()"
                  >
                    {{ $t(`navbar.languagesText.${locale}`) }}
                </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <!-- <a class="text-black" href="#home">
            <v-btn flat class="text-capitalize text-grey-darken-4" density="compact" size="small">{{ $t('navbar.home') }}</v-btn>
          </a> -->
          <!-- <v-icon class="text-grey-darken-4" icon="mdi-cart-outline" size="small"/> -->
        </template>  
      </v-app-bar>
      
      
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
</template>


<style scoped lang="scss">
.box-shadow-bar {
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.7);
}
#app-bar {
  // border-bottom: 1px solid rgba(60, 60, 60, .29);
  :deep(.v-toolbar-title__placeholder) {
    color: #{map-get($grey, 'darken-4')};
    
  }
}

:deep(.v-navigation-drawer) {
  width: 100%;
}


@media #{map-get($display-breakpoints, 'sm-and-down')} {
  :deep(.v-toolbar__append) {
    display: none!important;
  }
  :deep(.v-toolbar__prepend) {
    margin: 0 auto!important;
  }
}
.max-width-bar {
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.3);
}

@media #{map-get($display-breakpoints, 'lg-and-up')} {
  .max-width-bar {
    :deep(.v-toolbar__content) {
      max-width: 1200px;
      margin: 0 auto;
      // display: block;
    }
  }
  
  .v-toolbar.v-toolbar--flat.v-toolbar--density-default {
    transform: translate(-50%, 0%)!important;
    left: 50%!important;
  }
}

.section-href:first-of-type .border-botton-selected :deep(.v-btn__content){
  position: relative;
  &::after {
    content: "";
    // width: 100%;
    height: 6px;
    background-color: rgb(var(--v-theme-secondary));
    display: block;
    position: absolute;
    top: 85%;
    border-radius: 10px;
    //opacity: 0;
    // animation: center-to-right 0.1s ease-out;
    width: var(--width, 100%);
    left: var(--left, 0);
    transition: left 250ms;
  }
}

@keyframes left-to-center{
  0% {
    left: -20px;
  }
  100% {
    left: 0;
  }
}
@keyframes center-to-left{
  0% {
    left: 0;
  }
  100% {
    left: -20px;
  }
}
@keyframes right-to-center{
  0% {
    right: -20px;
  }
  100% {
    right: 0;
  }
}
@keyframes center-to-right{
  0% {
    right: 0;
    opacity: 1;
  }
  99% {
    opacity: 1;
  }
  100% {
    right: -20px;
    opacity: 0;
  }
}
</style>
