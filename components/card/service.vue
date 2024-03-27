<template>
    <div class="max-w-[350px] rounded-3xl overflow-hidden border">
        <div class="w-full h-[200px] rounded-t overflow-hidden">
            <img :src="data.image" class="w-full h-full object-cover">
        </div>
        <div class="px-2 pb-2">
            <h1 class="my-2 text-center text-xl text-teal-700">{{ data.name_ru }}</h1>
            <p class="text-center mb-2">{{ data.description_ru }}</p>
            <app-btn @click="$router.push(`/service/${data.id}`)">Цена от {{ data.price.toLocaleString('en-EN') }} сумов</app-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Service } from '@/types'

const { data } = defineProps<{data: Service}>()
</script>