import { ref } from 'vue';
import type { Product } from '../interfaces/product';
import { skill } from '../data/skills.js';
import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', () => {
    const availableProducts = ref<Product[]>([]);
    const cart = ref<Product[]>([]);
    
    function loadProducts() {
        availableProducts.value = skill;
    }

    function addProductCart(p: Product): void {
        cart.value.push(p);
    }

    function removeProductCart(id: number): void {
        cart.value = cart.value.filter((product: Product) => id !== product.id)
    }

    return {availableProducts, cart, loadProducts, addProductCart, removeProductCart}
});
