<template>
    <v-container class="sections">
        <v-row class="pb-0">
            <v-col class="pb-0" order="2" order-md="1" cols="12" md="5" align-self="center"></v-col>
            <v-col class="pb-0" order="1" order-md="2" cols="12" md="7">
                <h2 class="text-h4 text-primary text-center mb-0">{{ $t('home.aboutMe.title') }}</h2>
            </v-col>
        </v-row>
        <v-row class="mt-0">
            <v-col class="pt-0" order="2" order-md="1" cols="12" md="5" align-self="center">
                <v-img src="img/logo.jpg" srcset="img/logo.jpg 400w, img/adrian_rodenas_pico.jpg 512w" sizes="(max-width:400px) 400px, 512px"></v-img>
            </v-col>
            <v-col class="pt-0" order="1" order-md="2" cols="12" md="7">
                <p class="mt-6 white-space text-shades-white">
                    {{ $t('home.aboutMe.description') }}
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>