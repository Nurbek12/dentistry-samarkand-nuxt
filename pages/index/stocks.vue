<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-teal-600 text-3xl">Наши Акции</h1>
                <p class="text-base text-gray-600">
                    Наши Стоматологические Услуги - Заботимся о Здоровье Вашей Улыбки
                </p>
            </div>
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <card-stock v-for="s,i in items" :key="i" :data="s" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Stock } from '@/types'

definePageMeta({
  layout: 'index-layout'
})

const items = ref<Stock[]>([])

const init = async () => {
    const data = await $fetch('/api/stock/clients', { params: { page: 1, limit: 24 } })

    items.value = data.result as any
}

init()
</script>