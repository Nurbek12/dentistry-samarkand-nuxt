<template>
    <div class="max-w-[350px] rounded-2xl hover:bg-gray-50 active:bg-gray-100 overflow-hidden cursor-pointer border">
        <div class="border-b h-[200px]">
            <nuxt-img :src="data.image" class="h-full w-full object-cover" />
        </div>
        <div class="p-4 pt-2">
            <span class="text-xs text-teal-700">Акция проводится с {{ data?.start_date }} по {{ data?.end_date }}</span><br>
            <nuxt-link class="text-xl" :to="`/stock/${data.id}`">{{ data.name_ru }}</nuxt-link>
            <p class="text-sm text-balance">{{ data.description_ru }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Stock } from '@/types'

const { data } = defineProps<{data: Stock}>()
</script>