<template>
    <v-container class="sections">
        <v-row>
            <v-col cols="12">
                <h2 class="text-h4 mb-5 text-primary">{{ $t("home.skills.title") }}</h2>
                <!-- <p class="mt-6 text-grey-darken-3">{{ $t("home.skills.subtitle") }}</p> -->
                <!-- <v-img :src="product.image" ></v-img> -->
                <!-- <IconCss3></IconCss3> -->
                <div class="d-flex flex-wrap icons-skill mt-6">
                    <div class="icon-skill" v-for="icon in arrayIcons">
                        <component :is="icon"></component>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
    //We use tabler icons for the skills icons https://tabler.io/docs/icons/vue
    import { onMounted } from 'vue';
    import { useProductsStore } from '@/stores/products';
    import IconCss3 from '@/components/icons/frameworks/IconCss3.vue';
    import IconGit from '@/components/icons/frameworks/IconGit.vue';
    import IconHtml5 from '@/components/icons/frameworks/IconHtml5.vue';
    import IconJavascript from '@/components/icons/frameworks/IconJavascript.vue';
    import IconLaravel from '@/components/icons/frameworks/IconLaravel.vue';
    import IconMysql from '@/components/icons/frameworks/IconMysql.vue';
    import IconPhp from '@/components/icons/frameworks/IconPhp.vue';
    import IconPrestashop from '@/components/icons/frameworks/IconPrestashop.vue';
    import IconSass from '@/components/icons/frameworks/IconSass.vue';
    import IconTypescript from '@/components/icons/frameworks/IconTypescript.vue';
    import IconVue from '@/components/icons/frameworks/IconVue.vue';
    import IconWordpress from '@/components/icons/frameworks/IconWordpress.vue';
    import IconNuxt from '@/components/icons/frameworks/IconNuxt.vue';

    // import { IconCss3, IconGit, IconHtml5, IconJavascript, IconJquery, IconLaravel, IconMysql, IconPhp, IconPrestashop, IconSass, IconTypescript, IconVue, IconWordpress} from '@/components/icons/frameworks/';
    import frameworks from '@/components/icons/frameworks/';

    const productStore = useProductsStore();

    const arrayIcons = [
        IconVue,
        IconNuxt,
        IconJavascript,
        IconTypescript,
        IconCss3,
        IconGit,
        IconHtml5,
        IconLaravel,
        IconMysql,
        IconPhp,
        IconPrestashop,
        IconSass,
        IconWordpress,
    ]

    onMounted(() => {
        if(productStore.availableProducts.length === 0) {
            productStore.loadProducts();
        }
    });

    function getNameIcon(name) {
        return 'Icon' + name;
    }
</script>

<style scoped lang="scss">

    .d-flex.icons-skill {
        gap:20px;
        .icon-skill {
            width:52px; 
            height:52px;
        }
    }
</style>