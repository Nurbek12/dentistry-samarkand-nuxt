<template>
<div class="border p-3 rounded flex flex-col justify-between">
    <div class="flex justify-start gap-2 items-center">
        <div class="rounded-lg w-[80px] h-[90px] overflow-hidden">
            <nuxt-img :src="doctor.image||'/images/nophoto.jpg'" class="w-full h-full object-cover" alt="" />
        </div>
        <div>
            <h1 class="font-medium">{{ doctor.name }}</h1>
            <h3 class="text-sm text-gray-600">{{ doctor.specialty }}</h3>
            <div class="mt-2 w-full flex justify-start gap-4">
                <a v-for="sc,i in social_links" :key="i" :href="sc.url" class="text-gray-700 hover:text-teal-600">
                    <component :is="sc.icon" class="text-xl" />
                </a>
            </div>
        </div>
    </div>
    <div class="mt-2 flex flex-1 flex-col gap-2">
        <p class="text-teal-600 text-sm font-normal">{{ doctor.experience }}</p>
        <p class="flex-1">{{ doctor.education }}</p>
        <button @click="$emit('send-appointment', doctor.id)" class="bg-teal-600 hover:bg-teal-500 text-white w-full py-2 rounded">{{ $t('home.send_appointment') }}</button>
    </div>
</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { social_links } from '@/constants'

const { doctor } = defineProps<{ 
    doctor: {
        id: number,
        image: string,
        name: string,
        specialty: string,
        experience: string,
        education: string,
        languages: string[],
    },
}>()
</script>