<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-teal-600 text-3xl">Наше Лаборатория</h1>
                <p class="text-base text-gray-600">
                    Наши Стоматологические Услуги - Заботимся о Здоровье Вашей Улыбки
                </p>
            </div>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <!-- <site-user-card :doctor="{
                    id: 1,
                    image: null,
                    name: 'Doctor Badge Hello adsfadsf adfdasf',
                    specialty: 'Hello afdfd',
                    rate: 4,
                    experience: 'Exxport Default',
                    education: 'Educatino EEdd',
                    languages: ['ru','en','uz'],
                }" /> -->
            </div>
            
            <card-content title="Справочная информация" extra_class="bg-teal-800/10">
                <p class="mt-2">Сеть стоматологических клиник «СМ-Стоматология» входит в многопрофильный медицинский холдинг «СМ-Клиника».</p>
                <p class="mt-2">Договор оферты об использовании личного кабинета. Файл в формате pdf (312 Кб).</p>
                <p class="mt-2">С режимом работы клиник «СМ-Стоматология» можно ознакомиться на странице Контакты.</p>
                <p class="mt-2">Сведения о врачах, их профессиональном образовании и квалификации можно получить из резюме врачей, размещенных на сайте.</p>
            </card-content>

            <div class="border p-2 rounded">
                <nuxt-img src="/images/doctors-2-image.jpg" class="rounded w-full h-[550px] object-top object-cover" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'index-layout'
})
</script>