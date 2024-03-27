<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-teal-600 text-3xl">{{ service?.name_ru || "Service" }}</h1>
                <p class="text-base text-gray-600">
                    Наши Стоматологические Услуги - Заботимся о Здоровье Вашей Улыбки
                </p>
            </div>

            <card-content :title="service?.name_ru" class="rounded bg-teal-800/10">
                <!-- <br> -->
                <p class="mt-2">Цена: {{ service?.price?.toLocaleString('en-EN') }} сумов</p>
                <p class="mt-2">{{ service?.description_ru }}</p>
            </card-content>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Service } from '@/types'

definePageMeta({
  layout: 'index-layout'
})

const route = useRoute()
const service = ref<Service|any>({})
const init = async () => {
    const data = await $fetch(`/api/services/id/${route.params.id}`)
       
    Object.assign(service.value, data)
}

await init()
</script>