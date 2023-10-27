<script setup lang="ts">
  import IconRectangle  from '@/components/icons/IconRectangle.vue'
  import IconCircle  from '@/components/icons/IconCircle.vue'
  import RoadMap from '@/components/home/RoadMap.vue'
  import Skills from '@/components/home/Skills.vue'
  import SobreMi from '@/components/home/SobreMi.vue'
  import Proyects from '@/components/home/Proyects.vue'
</script>

<template>
  <v-container fluid>
    <v-container class="sections" id="home">
      <v-row class="position-relative">
        <v-col cols="12" md="6" class="d-flex flex-column justify-center flex-grow-1 animation-fade-top ">
          <h1 class="text-h3 text-md-h1 text-shades-black">{{$t('home.title')}} <span class="text-primary">Adrián</span></h1>
          <p class="mt-6 text-grey-darken-3 mb-6">{{ $t('home.subtitle') }}</p>
          <a class="hover-icon-linkedin inline-block" target="_blank" href="https://www.linkedin.com/in/adrian-rodenas-pico/">
            <v-icon size="large" color="shades-black" >mdi-linkedin</v-icon>
          </a>
        </v-col>
        <v-col cols="12" md="6" class="animation-fade-top">
          <!-- <div class="d-flex forms flex-wrap"> -->
            <v-img src="img/Layer_1.svg" alt=""></v-img>
          <!-- </div> -->
        </v-col>
      </v-row>
    </v-container>
  </v-container>
  <v-container fluid class="lighter">
    <SobreMi id="about"></SobreMi>
  </v-container>
  <v-container fluid>
    <RoadMap id="experience"></RoadMap>
  </v-container>
  <v-container fluid class="lighter">
    <Proyects id="projects"></Proyects>
  </v-container>
  <v-container fluid>
    <Skills id="skills"></Skills>
  </v-container>

  <v-container >
    <v-footer>
      
      <p class="text-center w-100">
        2023 - Adrián Ródenas <a class="hover-icon-linkedin inline-block" target="_blank" href="https://www.linkedin.com/in/adrian-rodenas-pico/">
        <v-icon size="large" color="shades-black" >mdi-linkedin</v-icon>
      </a>
      </p>
    </v-footer>
  </v-container>
</template>

<style scoped lang="scss">
  .forms svg{
    flex: 0 0 33.33%;
  }

  .hover-icon-linkedin {
    max-width: fit-content;
    &:hover i{
      color: rgb(var(--v-theme-primary))!important;
    }
  }

  .rotate-90 {
    transform: rotate(90deg);
  }

  .animation-fade-top {
    position: relative;
    animation: fade-top-movement 0.5s 1;
  }
  
</style>