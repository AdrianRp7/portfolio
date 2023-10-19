<template>
    <div class="d-flex flex-wrap">
        <v-chip class="mr-2 mb-2 text-shades-white" v-for="skill in chainWithSkills" :color="skill.includes('-B') ? 'secondary' : 'primary'" :variant="'flat'">{{ skill.substring(0, skill.length - 2) }}</v-chip>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        //The chain will contain a string with Skill-(F or B (backend or frontend)), Skill2-B..... separate with commas.
        chainWithSkills:string[];
    }>();
</script>

<style scoped lang="scss">
    :deep(.v-chip__content) {
        color: #{map-get($shades, 'white')};
    }
</style>