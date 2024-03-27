<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-teal-600 text-3xl">Правовая информация</h1>
                <p class="text-base text-gray-600">
                    Наши Стоматологические Услуги - Заботимся о Здоровье Вашей Улыбки
                </p>
            </div>

            <div class="mt-4 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <template  v-for="l,i in legal_info_sections" :key="i">
                    <a v-if="l.url[0] === '#'" :href="l.url!" class="w-full text-center py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white">{{ l.title }}</a>
                    <nuxt-link v-else :to="l.url" class="w-full text-center py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white">{{ l.title }}</nuxt-link>
                </template>
            </div>

            <div id="reference-information" class="mt-4 p-4 rounded-2xl bg-teal-800/10">
                <p class="font-medium text-lg">Справочная информация</p>
                <p class="mt-2">Сеть стоматологических клиник «СМ-Стоматология» входит в многопрофильный медицинский холдинг «СМ-Клиника».</p>
                <p class="mt-2">Договор оферты об использовании личного кабинета. Файл в формате pdf (312 Кб).</p>
                <p class="mt-2">С режимом работы клиник «СМ-Стоматология» можно ознакомиться на странице Контакты.</p>
                <p class="mt-2">Сведения о врачах, их профессиональном образовании и квалификации можно получить из резюме врачей, размещенных на сайте.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { legal_info_sections } from '~/constants'

definePageMeta({
  layout: 'index-layout'
})
</script>