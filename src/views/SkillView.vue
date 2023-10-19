<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3" class="d-flex flex-column" v-for="product in productStore.availableProducts" :key="product.id">
                <v-card class="flex-grow-1">
                    <v-img :src="product.image">
                    </v-img>
                    <v-card-title>
                            {{ product.name }}
                    </v-card-title>
                    <v-card-text>
                        {{ product.description }}
                    </v-card-text>
                    <v-card-actions class="flex-wrap justify-center">
                        <v-chip variant="elevated" elevation=0 v-for="proyect in product.proyects" color="secondary" class="text-white my-2 mr-2">proyect</v-chip>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import { useProductsStore } from '@/stores/products';

    const productStore = useProductsStore();

    onMounted(() => {
        if(productStore.availableProducts.length === 0) {
            productStore.loadProducts();
        }
    });
</script>

<style lang="scss" scoped>
    
</style>