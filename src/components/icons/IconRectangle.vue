<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100" :stroke-width="strokeWidth">
    <rect x="0" y="0" width="100" height="100"
            fill="currentColor" :stroke="strokeColor"/>
    </svg>
</template>

<script setup lang="ts">
    defineProps<{
        strokeColor?: string 
        strokeWidth?: string
    }>()
</script>

<style lang="scss" scoped>

</style>