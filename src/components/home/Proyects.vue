<template>
    <v-container>
        <h2 class="text-h4 text-primary text-center mb-9">{{ $t('home.proyects.title') }}</h2>
        <v-row class="projects box-shadow-project mb-5" align="center" v-for="n in 4" >
                <v-col cols="12" md="3" order="2" order-md="1">
                    <a class="text-decoration-none d-flex w-100" target="_blank" :href="`${$t('home.proyects.proyect.' + n + '.url')}`">
                        <v-img class="animation-scale" :src="`img/proyects/${$t('home.proyects.proyect.' + n + '.image')}`"></v-img>
                    </a>
                </v-col>
                <v-col cols="12" md="9" order="1" order-md="1">
                    <a class="text-decoration-none d-flex w-100" target="_blank" :href="`${$t('home.proyects.proyect.' + n + '.url')}`">
                        <v-card elevation="0">
                            <v-card-title class="text-shades-black d-flex">{{$t('home.proyects.proyect.' + n + '.title')}}</v-card-title>
                            <v-card-text class="text-grey-darken-3">{{$t('home.proyects.proyect.' + n + '.description')}}</v-card-text>
                            <v-card-actions>
                                <ChipGroup :chainWithSkills="`${$t('home.proyects.proyect.' + n + '.tecnologies')}`.split(',')"></ChipGroup>
                            </v-card-actions>
                        </v-card>
                    </a>
                </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
    import ChipGroup from '@/components/utils/ChipGroup.vue';
    import {IntersectionObserverCom} from '@/Composables/IntersectionObserverCom';
    
    IntersectionObserverCom(".projects", 'show-row');
    // import { onMounted } from 'vue';
    
    // onMounted(() => {
    //     function isVisible(entries: IntersectionObserverEntry[], observer: IntersectionObserver) : void {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('show-row');
    //                 observer.unobserve(entry.target);
    //             }
    //         });
    //     }
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.95
    //     };
        
    //     const observer = new IntersectionObserver(isVisible, options);
    //     document.querySelectorAll(".projects").forEach(element => {
    //         observer.observe(element);
    //     });
    // })
    //Intersection observer
</script>

<style>
    .animation-scale {
        position: relative;
    }
    .animation-scale:before {
        content: "";
        width: 100%;
        position: absolute;
        top: 0;
        height: 0;
        background-color: rgba(255, 255, 255, 0.2);
    }
    .projects {
        transition: all 0.3s ease-in-out;
        opacity: 0;
        position: relative;
        top:-10px;
    }

    .projects.show-row {
        opacity: 1;
        top:0;
    }
    /* .animation-scale:hover:before {
        animation: height 0.2s 1 ease;
    } */
    .box-shadow-project {
        animation: box-shadow 0.2s 1 ease;
    }
    .box-shadow-project:hover {
        /* -webkit-box-shadow: 0px 0px 1px 0px rgba(66, 184, 131, .75);
        -moz-box-shadow: 0px 0px 1px 0px rgba(66, 184, 131, .75);
        box-shadow: 0px 0px 1px 0px rgba(66, 184, 131, .75); */
        box-shadow: rgba(66, 184, 131, 0.5) 0px 6px 24px 0px, rgba(66, 184, 131, 0.3) 0px 0px 0px 1px;
    }


</style>