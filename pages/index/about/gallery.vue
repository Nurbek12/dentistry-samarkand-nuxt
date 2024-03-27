<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-teal-600 text-3xl">Галерея</h1>
                <p class="text-base text-gray-600">
                    Наши Стоматологические Услуги - Заботимся о Здоровье Вашей Улыбки
                </p>
            </div>

            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                
                <div v-for="g,i in items" :key="i" class="max-w-[350px] rounded-2xl overflow-hidden border">
                    <div class="border-b w-full h-[200px]">
                        <img :src="g.cover" class="w-full h-full object-cover">
                    </div>
                    <nuxt-link :to="`/gallery/${g.id}`" class="p-4 pt-2 text-xl text-teal-700">{{ g.title }}</nuxt-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Gallery } from '@/types'

definePageMeta({
  layout: 'index-layout'
})

const items = ref<Gallery[]>([])
const init = async () => {
    const data = await $fetch('/api/gallery/clients', {
        params: { page: 1, limit: 12 }
    })
    items.value = data.result as any
}

init()
</script>