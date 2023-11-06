<script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick } from 'vue';
  import RoadMap from '@/components/home/RoadMap.vue'
  import Skills from '@/components/home/Skills.vue'
  import SobreMi from '@/components/home/SobreMi.vue'
  import Proyects from '@/components/home/Proyects.vue'
  import type RoadMapI from '@/interfaces/RoadMapI';

  const itemsEducation: RoadMapI[] = [
      {
      id:"1",
      color: "primary",
      },
      {
          id:"2",
          color: "primary"
      },
      {
          id:"3",
          color: "primary"
      },
      {
          id:"4",
          color: "primary"
      },
      {
          id:"5",
          color: "primary"
      },
      {
          id:"6",
          color: "primary"
      },
      {
          id:"7",
          color: "primary"
      },
    ]
    
  //   function hightLight(entries: IntersectionObserverEntry[], observer: IntersectionObserver) : void {
  //     entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           let accentBar: Element | null = document.querySelector(".accent-bar");
  //           let anterior: Element | null = document.querySelector(".hightlight");
            

  //           let actual: Element | null = null;
  //           document.querySelectorAll(".section-href").forEach((element) => {
  //             element.classList.remove('hightlight');
  //             if('#' + entry.target.id === element.getAttribute("href")) {
  //               actual = element;
  //               element.classList.add('hightlight');
  //             }
  //           })
            
  //           if(anterior !== null && actual !== null){
  //             //It's right
  //             let actualLeft: number = accentBar.querySelector(".v-btn__content").style.getPropertyValue("--left").length === 0 ? 0 : parseInt(accentBar.querySelector(".v-btn__content").style.getPropertyValue("--left").slice(0, -2));
  //             console.log(actualLeft);
  //             if(anterior?.compareDocumentPosition(actual) == 4) {
  //               accentBar.querySelector(".v-btn__content").style.setProperty("--left", (anterior.offsetWidth + actualLeft) + "px");
  //             } else {
  //               //Cambia el left por actual.offset
  //               accentBar.querySelector(".v-btn__content").style.setProperty("--left", (actualLeft - actual.offsetWidth) + "px");
  //             }

              
  //             //anterior.querySelector(".v-btn__content::after").style.opacity = 1;

  //             accentBar.querySelector(".v-btn__content").style.setProperty("--width", (actual.offsetWidth - 28) + "px");

  //           } 
            
  //           // if(anterior !== null && actual !== null){
  //           //   console.log(anterior.compareDocumentPosition(actual))
  //           //   console.log() 
  //           //   console.log(actual.offsetLeft)
  //           //   console.log(actual.offsetWidth)
  //           //   console.log(anterior.offsetLeft)
  //           // }
  //         }
  //     });
  // }
  //Detect when section is visible
  function hightLight(entries: IntersectionObserverEntry[], observer: IntersectionObserver) : void {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let accentBar: Element | null = document.querySelector(".accent-bar");
            let offsetLeftInitial: number | null = document.querySelector(".v-toolbar__append .d-none.d-md-block").offsetLeft;

          
            

            let actual: Element | null = null;
            document.querySelectorAll(".section-href").forEach((element) => {
              element.classList.remove('hightlight');
              if('#' + entry.target.id === element.getAttribute("href")) {
                actual = element;
                element.classList.add('hightlight');
              }
            })
            
            if(actual !== null){
              accentBar.querySelector(".v-btn__content").style.setProperty("--left", (actual.offsetLeft - offsetLeftInitial) + "px");
              accentBar.querySelector(".v-btn__content").style.setProperty("--width", (actual.offsetWidth - 28) + "px"); //28 is equal to padding button
            } 
            
            // if(anterior !== null && actual !== null){
            //   console.log(anterior.compareDocumentPosition(actual))
            //   console.log() 
            //   console.log(actual.offsetLeft)
            //   console.log(actual.offsetWidth)
            //   console.log(anterior.offsetLeft)
            // }
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
    <RoadMap id="education" :name="'education'" :arrayName="'educations'" :items="itemsEducation"></RoadMap>
  </v-container>
  <v-container fluid class="lighter">
    <Skills id="skills"></Skills>
  </v-container>

  <v-container >
    <v-footer class="d-flex flex-column pb-2">
      
      <p class="text-center w-100">
        2023 - Adrián Ródenas
      </p>
      <div class="d-flex justify-center mt-4 icons-footer">
        <a class="hover-icon-linkedin inline-block" target="_blank" href="https://www.linkedin.com/in/adrian-rodenas-pico/"><v-icon size="large" color="shades-black" >mdi-linkedin</v-icon></a>
        <a class="hover-icon-linkedin inline-block" target="_blank" href="mailto:adrian.ropi@gmail.com"><v-icon size="large" color="shades-black" >mdi-email</v-icon></a>
      </div>
      
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
  
  .icons-footer {
    gap: 15px;
  }
</style>