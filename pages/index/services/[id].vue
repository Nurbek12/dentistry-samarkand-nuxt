<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-teal-600 text-3xl">{{ service?.name_ru || "Service" }}</h1>
                <p class="text-base text-gray-600">
                    Наши Стоматологические Услуги - Заботимся о Здоровье Вашей Улыбки
                </p>
            </div>
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <!-- <site-service-card  v-for="item,i in services" :key="i" :item="item" /> -->
                <card-service v-for="ser,i in service?.services||[]" :key="i" :data="ser" />
            </div>

            <card-content title="Показания для установки имплантов зубов" class="rounded bg-teal-800/10">
                <br>
                <p>1. Потеря единичного зуба. Проводится установка одного импланта с последующей фиксацией коронки.</p>
                <br>
                <p>2. Потеря нескольких зубов подряд. Восстановление осуществляется с помощью 2-3 имплантов и зафиксированного на них мостовидного протеза.</p>
                <br>
                <p>3. Потеря всех зубов в ряду. Выполняется имплантация 4-8 искусственных зубных корней с установкой полного протеза.</p>
            </card-content>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Service_Category } from '@/types'

definePageMeta({
  layout: 'index-layout'
})

const route = useRoute()
const service = ref<Service_Category|any>({})
const init = async () => {
    const data = await $fetch(`/api/service-category/id/${route.params.id}`)    
    Object.assign(service.value, data)
}

await init()
</script>