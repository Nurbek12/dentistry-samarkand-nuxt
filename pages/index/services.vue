<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-purple-600 text-3xl">Наши услуги</h1>
                <p class="text-base text-gray-600">
                    Наши Стоматологические Услуги - Заботимся о Здоровье Вашей Улыбки
                </p>
            </div>
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <site-service-card  v-for="item,i in services" :key="i" :item="item" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'index-layout'
})

const services = ref([])
const init = async () => {
    const data = await $fetch('/api/services/clients', {
        params: { page: 1, limit: 12 }
    })
    services.value = data.result as any
}

init()
</script>