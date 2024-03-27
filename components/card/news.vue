<template>
    <div class="max-w-[350px] rounded-2xl hover:bg-gray-50 active:bg-gray-100 overflow-hidden cursor-pointer border">
        <div class="border-b w-full h-[200px]">
            <nuxt-img :src="data.image" class="h-full w-full object-cover" />
        </div>
        <div class="p-4 pt-2">
            <nuxt-link class="text-xl text-teal-600" :to="`/news/${data.id}`">{{ data.title }}</nuxt-link>
            <p class="text-sm text-balance">{{ data.description }}</p>
            <p class="mt-4 px-2 py-1 rounded-2xl bg-teal-700 w-min text-sm text-white whitespace-nowrap">{{ data.date }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { News } from '@/types'

const { data } = defineProps<{data: News}>()
</script>