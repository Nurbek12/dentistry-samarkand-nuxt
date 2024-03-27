<template>
<div class="border rounded-3xl px-4 py-2 flex flex-col">
    <div class="flex gap-2 items-center">
        <h1 class="font-medium text-teal-600">{{ review.firstname }} {{ review.lastname }}</h1>
        <div class="flex gap-1">
            <AnFilledStar class="text-yellow-400 cursor-pointer w-4 h-4" v-for="i in 4" :key="i" />
            <AnOutlinedStar class="text-yellow-400 cursor-pointer w-4 h-4" v-for="i in (5-4)" :key="i" />
        </div>
    </div>
    <p class="flex-1">{{ review.message }}</p>
    <div class="flex items-center justify-between">
        <span></span>
        <span class="text-gray-500 font-light text-sm">{{ new Date(review.created_at).toLocaleDateString() }}</span>
    </div>
</div>
</template>

<script setup lang="ts">
import { AnOutlinedStar, AnFilledStar } from '@kalimahapps/vue-icons'

const { review } = defineProps<{
    review: {
        firstname: string,
        lastname: string,
        phone: string,
        email: string,
        message: string,
        created_at: string,
    }
}>()
</script>