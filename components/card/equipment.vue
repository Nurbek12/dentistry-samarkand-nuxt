<template>
    <div class="max-w-[350px] rounded-2xl hover:bg-gray-50 active:bg-gray-100 overflow-hidden cursor-pointer border">
        <div class="border-b h-[200px]">
            <nuxt-img :src="data.images?.[0]||''" class="h-full w-full object-cover" />
        </div>
        <div class="p-4 pt-2">
            <nuxt-link :to="`/equipment/${data.id}`" class="text-xl text-teal-700">{{ data.title }}</nuxt-link>
            <p class="text-sm">{{ data.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Equipment } from '@/types'

const { data } = defineProps<{data: Equipment}>()
</script>