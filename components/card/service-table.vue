<template>
    <div class="border rounded-2xl overflow-hidden">
        <div class="p-4 flex gap-6 items-center bg-teal-800">
            <div>
                <div class="h-[70px] w-[70px] overflow-hidden rounded-full">
                    <img :src="data.image" class="w-full h-full object-cover">
                </div>
            </div>
            <div>
                <nuxt-link to="/services/1" class="hover:underline text-white  text-xl">{{ data.name_ru }}</nuxt-link>
                <!-- <p class="text-white text-lg">{{data.services?.length}}-услуги</p> -->
            </div>
        </div>
        <div class="text-white flex justify-between items-center px-4 py-2 bg-teal-800">
            <h1>Наименование услуги</h1>
            <div>Цена (сумов)</div>
        </div>

        <div v-for="child,i in data.services" :key="i" class="flex justify-between items-center px-4 py-2 hover:bg-gray-50 border-b">
            <nuxt-link :to="`/service/${child.id}`" class="hover:text-teal-800 hover:underline">{{ child.name_ru }}</nuxt-link>
            <div>{{ child.price.toLocaleString('en-EN') }} сумов</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Service_Category } from '@/types'

const { data } = defineProps<{data: Service_Category}>()
</script>