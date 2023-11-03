<template>
    <v-container class="sections">
        <v-row class="mt-0">
            <v-col class="py-0 pr-md-6" order="3" order-md="1" cols="12" md="6" lg="5" align-self="center">
                <v-img class="rounded-circle" src="img/logo.jpg" srcset="img/logo.jpg 400w, img/adrian_rodenas_pico.jpg 512w" sizes="(max-width:400px) 400px, 512px"></v-img>
            </v-col>
            
            <v-col class="pt-0 pl-md-6 pl-lg-8 pr-md-0" order="1" order-md="3" cols="12" md="6" lg="7">
                <h1 class="text-h1 text-shades-black mb-0">{{ $t('home.aboutMe.title') }}</h1>
                <p class="text-body-1 mt-2 white-space text-shades-white">
                    {{$t('home.aboutMe.firstSection.description1')}}
                </p>
                <p class="text-body-1 white-space text-shades-white my-5 my-md-5 my-lg-7 box-important-text" v-html="$t('home.aboutMe.firstSection.descriptionBox')">
                </p>
                <p class="text-body-1 white-space text-shades-white" v-html="$t('home.aboutMe.firstSection.description2')">
                </p>
            </v-col>
        </v-row>
        <v-divider color="secondary" class="my-10" thickness="2"></v-divider>
        <v-row class="mt-0">
            <v-col class="pt-0 pr-md-6 pl-lg-7 pl-0" order="3" order-md="1" cols="12" md="6" lg="7" >
                <p class="text-body-1 white-space text-shades-white" v-html="$t('home.aboutMe.secondSection.description1')">
                </p>
                <p class="mt-10 text-body-1 white-space text-shades-white" v-html="$t('home.aboutMe.secondSection.description2')">
                </p>
                <p class="mt-6 text-body-1 white-space text-shades-white box-important-text" v-html="$t('home.aboutMe.secondSection.descriptionBox')">
                </p>
            </v-col>
            <v-col class="pt-0 pl-md-6" order="1" order-md="3" cols="12" md="6" lg="5" align-self="center">
                <v-img class="rounded-circle" src="img/game-image-reduce.jpg" srcset="img/game-image-reduce.jpg 400w, img/game-image-reduce.jpg 512w" sizes="(max-width:400px) 400px, 512px"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .box-important-text {
        border: 3px solid #292929; 
        border-radius: 30px; 
        font-weight: 700;
        padding: 12px 20px;
        text-align: center;
    }
</style>