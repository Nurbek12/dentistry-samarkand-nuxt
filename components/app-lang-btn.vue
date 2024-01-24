<template>
    <select v-model="locale" class="border-2 rounded px-2 py-1 cursor-pointer outline-none text-purple-600 border-purple-600">
        <option v-for="l,i in languages" :key="i" :value="l.lang">{{ l.title }}</option>
    </select>
</template>

<script setup lang="ts">
import { languages } from '@/constants'

const { locale } = useI18n()
</script>