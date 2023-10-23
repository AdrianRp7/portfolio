<script setup lang="ts">
  import IconRectangle  from '@/components/icons/IconRectangle.vue'
  import IconCircle  from '@/components/icons/IconCircle.vue'
  import RoadMap from '@/components/home/RoadMap.vue'
  import Skills from '@/components/home/Skills.vue'
  import SobreMi from '@/components/home/SobreMi.vue'
  import Proyects from '@/components/home/Proyects.vue'
</script>

<template>
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
        <div class="d-flex forms flex-wrap">
          <IconRectangle class="text-primary" style="border-top-left-radius: 30px; border-bottom-left-radius: 30px;"></IconRectangle>
          <svg class="text-secondary text-secondary" fill="#ED9B40" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5757 1.42426C11.81 1.18995 12.1899 1.18995 12.4243 1.42426L22.5757 11.5757C22.81 11.81 22.8101 12.1899 22.5757 12.4243L12.4243 22.5757C12.19 22.81 11.8101 22.8101 11.5757 22.5757L1.42426 12.4243C1.18995 12.19 1.18995 11.8101 1.42426 11.5757L11.5757 1.42426Z" stroke="#ED9B40" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <IconRectangle class="text-shades-white"></IconRectangle>
          <IconRectangle class="text-white" stroke-color="#ED9B40" stroke-width="10"></IconRectangle>
          <IconRectangle class="text-shades-white"></IconRectangle>
          <IconCircle class="text-secondary"></IconCircle>
          <IconRectangle class="text-secondary" style="border-top-left-radius: 70px; border-bottom-left-radius: 50px;border-top-right-radius: 70px;"></IconRectangle>
          <IconRectangle class="text-shades-white"></IconRectangle>
          <IconRectangle class="text-shades-white"></IconRectangle>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <SobreMi id="about"></SobreMi>
  <RoadMap id="experience"></RoadMap>
  <Proyects id="projects"></Proyects>
  <Skills id="skills"></Skills>

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