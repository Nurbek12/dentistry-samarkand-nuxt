<template>
    <div class="w-full">
        <div class="container px-2 md:px-8">
            <div class="min-h-[100vh] py-16 flex flex-col items-center">
                <div class="text-center pt-20 pb-10">
                    <h1 class="font-medium text-teal-600 text-3xl">О нас</h1>
                    <p class="text-base text-gray-600">
                        Добро пожаловать в нашей поликлинику — место, где ваша улыбка — наша забота.
                    </p>
                </div>
                <div class="w-full mb-4 p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 rounded-2xl bg-teal-900">
                    <nuxt-link v-for="item,i in about_page_links" :key="i" :to="item.url" class="p-4 bg-white hover:bg-gray-200 rounded-lg flex justify-between items-center gap-2">
                        <div>
                            <div class="w-[70px] h-[70px] rounded-full bg-teal-900 text-white text-4xl flex items-center justify-center">
                                <component :is="item.icon" />
                            </div>
                        </div>
                        <span class="text-balance font-medium text-lg">{{ item.title }}</span>
                    </nuxt-link>
                </div>

                <div class="w-full">
                    <div class="border p-2 rounded-2xl">
                        <nuxt-img src="/images/bg-image.jpg" class="rounded-xl w-full h-[400px] object-cover" alt="" />
                    </div>
                    <br>
                    <p class="mt-4 p-4 rounded-2xl bg-teal-800/10">
                        Мы являемся ведущей стоматологической клиникой, предоставляющей высококачественные медицинские услуги с комфортом и заботой.
                        
                        В основе нашей работы лежат принципы профессионализма, этики и заботы о пациентах. Мы стремимся создать дружелюбную и поддерживающую среду для всех наших посетителей.
                        
                        Мы посвящаем себя обеспечению выдающейся стоматологической заботы, сочетая передовые технологии с нежным и индивидуальным подходом к каждому пациенту.
                        
                        Наша команда состоит из опытных и высококвалифицированных врачей, каждый из которых предан своему делу и постоянно совершенствует свои навыки в сфере стоматологии.
                        
                        Мы разрабатываем персонализированный план лечения для каждого пациента, учитывая их уникальные потребности и желания. Наша цель - не только лечить, но и обеспечивать долгосрочное здоровье улыбок.
                        
                        Мы оснащены последними технологическими достижениями в области стоматологии, что позволяет нам предоставлять высокоэффективные и безопасные процедуры.
                        
                        Читайте отзывы наших пациентов, которые делятся своим опытом и успехами после посещения нашей клиники. Ваше доверие - наша лучшая рекомендация.
                    
                        Если у вас есть вопросы, или вы хотели бы записаться на консультацию, свяжитесь с нами. Мы готовы помочь вам достичь лучшего здоровья улыбки!
                    </p>
                </div>

                <div class="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden gap-2">
                    <div v-for="i in 4" :key="i" class="rounded overflow-hidden">
                        <img src="/images/bg-3-image.jpg" class="w-full object-cover" height="400">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { about_page_links } from '~/constants'
definePageMeta({
  layout: 'index-layout'
})
</script>