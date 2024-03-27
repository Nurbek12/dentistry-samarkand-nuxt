<template>
<div class="border p-3 rounded-3xl flex flex-col justify-between">
    <div class="flex justify-center items-end relative w-full">
        <div class="rounded-2xl w-full h-full overflow-hidden">
            <div class="w-full h-[280px]">
                <nuxt-img :src="doctor.image||'/users/400.jpg'" class="w-full h-full object-cover" alt="" />
                <!-- /images/nophoto.jpg -->
            </div>
        </div>
        <div class="bg-gradient-to-t from-[#0009] to-transparent absolute w-full rounded-b-2xl flex flex-col gap-2 pt-4 pb-2 px-2">
            <!-- <h3 class="text-sm text-gray-600">{{ doctor.specialty }}</h3> -->
            <div class="flex gap-1">
                <AnFilledStar class="text-yellow-400 cursor-pointer w-5 h-5" v-for="i in doctor.rating" :key="i" />
                <AnOutlinedStar class="text-yellow-400 cursor-pointer w-5 h-5" v-for="i in (5-doctor.rating)" :key="i" />
            </div>
            <h1 class="font-medium text-white">{{ doctor.name }}</h1>
        </div>
    </div>
    <div class="mt-2 w-full flex justify-start gap-4">
        <a v-for="sc,i in social_links" :key="i" :href="sc.url" class="text-gray-700 hover:text-teal-600">
            <component :is="sc.icon" class="text-xl" />
        </a>
    </div>
    <div class="mt-2 flex flex-1 flex-col gap-2">
        <p class="text-teal-600 text-sm font-normal">{{ doctor.experience }} лет опыта</p>
        <p class="flex-1">{{ doctor.education }}</p>
        <button @click="$emit('send-appointment', doctor.id)" class="bg-teal-600 hover:bg-teal-500 text-white w-full py-2 rounded-3xl">{{ $t('home.send_appointment') }}</button>
        <nuxt-link :to="`/doctor/${doctor.id}`" class="border-2 border-teal-600 hover:bg-teal-600 text-teal-600 hover:text-white w-full py-1 rounded-3xl flex justify-center items-center">
            35 Отзывов
        </nuxt-link>
    </div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Doctor } from '@/types'
import { social_links } from '@/constants'
import { AnFilledStar, AnOutlinedStar, FaRegComment } from '@kalimahapps/vue-icons'

const { doctor } = defineProps<{ 
    doctor: Doctor,
}>()
</script>