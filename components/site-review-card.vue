<template>
<div class="border rounded px-4 py-2 flex flex-col">
    <h1 class="font-medium text-purple-600">{{ review.firstname }} {{ review.lastname }}</h1>
    <p class="flex-1">{{ review.message }}</p>
    <div class="flex items-center justify-between">
        <span></span>
        <span class="text-gray-500 font-light text-sm">{{ review.created_at }}</span>
    </div>
</div>
</template>

<script setup lang="ts">
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