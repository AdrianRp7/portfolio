<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
  import RoadMap from '@/components/home/RoadMap.vue'
  import Skills from '@/components/home/Skills.vue'
  import SobreMi from '@/components/home/SobreMi.vue'
  import Proyects from '@/components/home/Proyects.vue'


  //Detect when section is visible
function hightLight(entries: IntersectionObserverEntry[], observer: IntersectionObserver) : void {
      console.log("entro");
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              document.querySelectorAll(".section-href").forEach((element) => {
                element.classList.remove('hightlight');
              })
              // console.log("hola")
              console.log(entry.target.id)
              
              switch(entry.target.id) {
                case "about":
                  document.querySelectorAll(".section-href")[0].classList.add('hightlight')
                  break;
                case "experience":
                  document.querySelectorAll(".section-href")[1].classList.add('hightlight')
                  break;
                case "projects":
                  document.querySelectorAll(".section-href")[2].classList.add('hightlight')
                  break;
                case "skills":
                  document.querySelectorAll(".section-href")[3].classList.add('hightlight')
                  break;
              }
              //observer.unobserve(entry.target);
          }
      });
  }
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.40
  };
  
  const observer = new IntersectionObserver(hightLight, options);
  onMounted(() => {
      document.querySelectorAll('.sections').forEach(element => {
        observer.observe(element);
      })
  })
  onUnmounted(() => observer.disconnect());


</script>

<template>
  <v-container fluid>
    <v-container class="sections title-container" id="home">
      <v-row class="position-relative m-md-0">
        <v-col cols="12" md="6" lg="6" class="d-flex flex-column justify-space-between flex-grow-1 animation-fade-top px-0">
          <h1 class="text-h1 text-shades-black" v-html="$t('home.title')"></h1>
          <p class="text-body-1 text-grey-darken-3"  v-html="$t('home.subtitle')"></p>
          <!--<a class="hover-icon-linkedin inline-block" target="_blank" href="https://www.linkedin.com/in/adrian-rodenas-pico/">
             <v-icon size="large" color="shades-black" >mdi-linkedin</v-icon>
          </a>-->
        </v-col>
        <v-col cols="1" md="1" lg="1" class="px-md-0">

        </v-col>
        <v-col cols="12" md="5" lg="5" class="animation-fade-top px-0 pl-md-7 pl-lg-7">
          <!-- <div class="d-flex forms flex-wrap"> -->
            <a target="_blank" href="https://www.linkedin.com/in/adrian-rodenas-pico/">
              <v-img src="img/Layer_1.svg" alt=""></v-img>
            </a>
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

  //Customized styles

  @media #{map-get($display-breakpoints, 'md-and-up')} {
    .v-layout .title-container {
      max-width: 800px!important;
    }

  }

  @media #{map-get($display-breakpoints, 'lg-and-up')} {
    .v-layout .title-container {
      max-width: 800px!important;
    }
  }
  
</style>