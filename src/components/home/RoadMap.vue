<template>
    <v-container class="sections">
        <h2 class="text-h4 mb-5 text-primary">Experience</h2>
        <v-row>
            <v-col cols="12" class="d-none flex-column d-md-flex">
                <v-timeline class="mt-6" side="end" line-color="secondary">
                        <v-timeline-item
                        v-for="item in items"
                        :key="item.id"
                        :dot-color="item.color"
                        size="x-small"
                        line-inset="10"
                        :fill-dot="true"
                        class="time-line-object"
                        >
                        
                        <v-card elevation="0">
                            <v-card-title class="text-shades-black d-flex">{{ $t(`home.experience.experiencias.${item.id}.title`) }} </v-card-title>
                            <v-card-subtitle class="text-shades-black opacity-1">{{ $t(`home.experience.experiencias.${item.id}.subtitle`) }} ({{ $t(`home.experience.experiencias.${item.id}.functions`) }}) | {{ $t(`home.experience.experiencias.${item.id}.dates`) }}</v-card-subtitle>
                            <v-card-text class="text-grey-darken-3">{{ $t(`home.experience.experiencias.${item.id}.description`) }}</v-card-text>
                            <v-card-actions>
                                <ChipGroup :chainWithSkills="$t(`home.experience.experiencias.${item.id}.skills`).split(',')"></ChipGroup>
                            </v-card-actions>
                        </v-card>
                        
                    </v-timeline-item>
                </v-timeline>
            </v-col>
            <v-col cols="12" class="d-flex flex-column d-md-none">
                <div>
                    <v-card class="" elevation="0" v-for="item in items" :key="item.id">
                        <v-card-title class="text-secondary px-0 d-flex">{{ $t(`home.experience.experiencias.${item.id}.title`) }} </v-card-title>
                        <v-card-subtitle class="text-shades-black opacity-1 px-0">{{ $t(`home.experience.experiencias.${item.id}.subtitle`) }} ({{ $t(`home.experience.experiencias.${item.id}.functions`) }}) | {{ $t(`home.experience.experiencias.${item.id}.dates`) }}</v-card-subtitle>
                        <v-card-text class="text-grey-darken-3 px-0">{{ $t(`home.experience.experiencias.${item.id}.description`) }}</v-card-text>
                        <v-card-actions>
                            <ChipGroup :chainWithSkills="$t(`home.experience.experiencias.${item.id}.skills`).split(',')"></ChipGroup>
                        </v-card-actions>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
    import ChipGroup from '../utils/ChipGroup.vue';
    import {IntersectionObserverCom} from '@/Composables/IntersectionObserverCom';

    IntersectionObserverCom(".time-line-object .v-timeline-item__body", "show-row");
    IntersectionObserverCom(".time-line-object .v-timeline-divider", "show-row");

    const items = [{
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
    }];
</script>

<style scoped lang="scss">
    .time-line-object :deep(.v-timeline-item__body),
    .time-line-object :deep(.v-timeline-divider) {
        transition: all 0.3s ease-in-out;
        opacity: 0!important;
        position: relative;
        top:-10px;

        &.show-row {
            opacity: 1!important;
            top:0;
        }
    }
</style>