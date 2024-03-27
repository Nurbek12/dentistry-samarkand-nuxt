<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-teal-600 text-3xl">Отзывы о нас</h1>
                <p class="text-base text-gray-600">
                    Наши Стоматологические Услуги - Заботимся о Здоровье Вашей Улыбки
                </p>
            </div>
            <div class="grid gap-4 grid-cols-1">
                <div v-show="items.length == 0" class="text-center w-full">Нет комментариев</div>
                <site-review-card v-for="r,i in items" :key="i" :review="r" />
            </div>
        </div>
        <div id="review-form" class="bg-teal-700">
            <div class="container px-2 md:px-8 py-10">
                <div class="text-center mb-4 text-white">
                    <h1 class="font-normal text-xl">Форма Записи на Прием к Врачу</h1>
                    <p class="text-base">
                        Запишитесь на прием к нашим врачам - Ваш первый шаг к здоровой улыбке!
                    </p>
                </div>
                <div class="flex items-center justify-center">
                    <site-review-form @sumbited="items.push($event)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Review } from '~/types'

definePageMeta({
  layout: 'index-layout'
})

const items = ref<Review[]>([])

const init = async () => {
    const data = await $fetch('/api/reviews/clients')
    items.value = data.result as any
}

init()
</script>