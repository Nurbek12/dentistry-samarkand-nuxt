<template>
    <div class="w-full">
        <div class="flex items-center h-[100vh] bg-white">
            <div class="container px-2 md:px-8">
                <div class="relative min-h-[60vh] flex items-center rounded-3xl w-full p-4 md:p-8 bg-teal-600">
                    <app-home-carousel />
                    <div class="content max-w-full md:max-w-[600px] relative z-10 border-l-0 border-teal-600">
                        <h1 class="text-3xl text-white font-medium">{{ $t('home.title') }}</h1>
                        <p class="mt-4 text-base text-white">{{ $t('home.description') }}</p>
                        <!-- <div class="mt-4 text-gray-400 font-bold">Качественное лечение зубов по доступным ценам</div> -->
                        <div class="grid-cols-1 inline-grid sm:grid-cols-2 gap-2 mt-10">
                            <button @click="openReview(null)" class="bg-white hover:bg-gray-50 text-teal-600 px-3 py-2 rounded-3xl">{{ $t('home.send_appointment') }}</button>
                            <a class="border-2 border-white text-white text-center hover:bg-white hover:text-teal-600 px-3 py-2 rounded-3xl" href="#review-form">{{ $t('home.send_review') }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="container px-2 md:px-8 pb-8">
                <card-items :items="index_card_items" :d="true" />
                <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden gap-[0.05rem] border bg-slate-200">
                    <div v-for="item,i in index_card_items" :key="i" class="bg-white flex justify-start rounded items-center flex-col text-center p-4"> 
                        <div class="w-[80px] h-[80px] mb-2 rounded-full flex justify-center items-center bg-teal-600/10">
                            <component :is="item.icon" class="w-8 h-8 text-teal-600" />
                        </div>
                        
                        <span class="">{{ $t(item.title) }}</span>
                        <p class="text-sm font-thin text-gray-600 mt-2">{{ $t(item.description) }}</p>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="bg-gray-100">
            <div class="container px-2 md:px-8 py-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h1 class="font-normal text-xl mb-4">Почему выбирают нас:</h1>
                        <ul>
                            <li>
                                <p>
                                    <b class="text-teal-600">Профессиональные врачи:</b> Наши врачи - это команда опытных специалистов, готовых предоставить вам высококачественную стоматологическую помощь.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b class="text-teal-600">Инновационные технологии:</b> Мы оснащены последними технологическими достижениями, чтобы предоставлять эффективные и безопасные процедуры.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b class="text-teal-600">Индивидуальное лечение:</b> Разрабатываем уникальные планы лечения, учитывая ваши потребности и стремясь к долгосрочным результатам.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b class="text-teal-600">Забота о вас:</b> Мы создали уютную атмосферу, где каждый пациент может чувствовать настоящее внимание и заботу.
                                </p>
                            </li>
                        </ul>
                        <br>
                        <p>
                            Наши высококвалифицированные стоматологи предоставляют вам выдающуюся заботу о здоровье вашего улыбающегося лица. В [Название вашей клиники] мы сочетаем профессионализм с индивидуальным подходом, чтобы каждый пациент чувствовал себя уверенно и комфортно.
                        </p>
                        <br>
                        <router-link to="/about" class="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-3xl">{{ $t('home.read_more') }}</router-link>
                    </div>
                    <div class="border rounded-2xl p-2">
                        <nuxt-img src="/images/bg-2-image.jpg" class="rounded-xl h-full w-[100%] object-cover" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="container px-2 md:px-8 py-16">
                <div class="text-center mb-4">
                    <h1 class="font-normal text-xl">Наши Стоматологические Услуги</h1>
                    <p class="text-base text-gray-600">
                        Наша цель - создать здоровую и красивую улыбку, обеспечивая максимальный комфорт и профессиональное обслуживание.
                    </p>
                </div>
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <site-service-card v-for="item,i in services" :key="i" :item="item" />
                </div>
            </div>
        </div>
        <div>
            <div class="container px-2 md:px-8 py-16">
                <div class="bg-teal-600 rounded-2xl flex items-stretch relative">
                    <div class="w-full p-6">
                        <h1 class="text-normal text-xl text-white">Задайте свой вопрос экспертам стоматологии</h1>
                        <p class="text-white text-balance mt-2">Заполните форму ниже, чтобы отправить свой вопрос. Мы постараемся ответить в кратчайшие сроки. Важно для нас, чтобы вы чувствовали себя уверенно и информированно в отношении вашего стоматологического здоровья.</p>
                        <form @submit.prevent="sendQuestion" class="flex flex-wrap justify-start items-center gap-2 mt-4">
                            <input v-model="question_text" required name="title" type="text" class="rounded-3xl text-base border-2 bg-white py-2 px-4 outline-none font-thin" placeholder="Напишите вопрос">
                            <button type="submit" class="rounded-3xl border-2 border-white text-white hover:bg-white hover:text-teal-600 px-4 py-2">Отправить вопрос</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="container px-2 md:px-8 py-8">
                <div class="text-center mb-4">
                    <h1 class="font-normal text-xl">Часто задаваемые вопросы</h1>
                    <p class="text-base text-gray-600">
                        Мы готовы ответить на все ваши вопросы и предоставить консультацию по любым стоматологическим вопросам. Наша команда опытных врачей готова поделиться своим опытом и предложить вам профессиональные советы.
                    </p>
                </div>
                <div>
                    <site-expand-item :items="faqs" />
                </div>
            </div>
        </div>
        <div>
            <div class="container px-2 md:px-8 py-8">
                <div class="text-center mb-4">
                    <h1 class="font-normal text-xl">Наша Команда Врачей</h1>
                    <p class="text-base text-gray-600">
                        Опытные и Профессиональные Врачи Готовы Заботиться о Вашей Улыбке
                    </p>
                </div>
                <div class="grid py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <site-user-card @send-appointment="openReview($event)" v-for="doctor,i in doctors" :key="i" :doctor="doctor" />
                </div>
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
                    <site-review-form />
                </div>
            </div>
        </div>
        <div>
            <div class="container px-2 md:px-8 py-8">
                <div class="text-center mb-4">
                    <h1 class="font-normal text-xl">Отзывы о нас</h1>
                    <p class="text-base text-gray-600">
                        Далеко-далеко за словесными горами в стране гласных
                    </p>
                </div>
                <div class="grid py-6 gap-4">
                    <site-review-card v-for="review,i in reviews" :key="i" :review="review" />
                </div>
            </div>
        </div>
    </div>
    <app-dialog title="ЗАПИСЬ К СПЕЦИАЛИСТУ" :open="dialog" @close-dialog="dialog = false">
        <app-review-form :doctorid="doctorid" />
    </app-dialog>
</template>

<script setup lang="ts">
import type { Doctor, FAQs, Service, Review } from '@/types'
import { index_card_items } from '@/constants'

definePageMeta({
    layout: 'index-layout',
})

const dialog = ref(false)
const question_text = ref('')
const doctorid = ref<number | string | null>(null)
const doctors = ref<Doctor[]>([])
const faqs = ref<FAQs[]>([])
const services = ref<Service[]>([])
const reviews = ref<Review[]>([])

const openReview = (doctor: number | string | null) => {
    dialog.value = true
    console.log(doctor);
    
    doctorid.value =  doctor || null
}

const init = async () => {
    const [d,s,f,r] = await Promise.all([
        $fetch('/api/doctors/clients', { params: { page: 1, limit: 4 } }),
        $fetch('/api/services/clients', { params: { page: 1, limit: 6 } }),
        $fetch('/api/faqs/clients', { params: { page: 1, limit: 8 } }),
        $fetch('/api/reviews/clients', { params: { page:1, limit: 10 } })
    ])

    doctors.value = d.result as any
    services.value = s.result as any
    faqs.value = f.result as any
    reviews.value = r.result as any
}

const sendQuestion = async () => {
    await $fetch('/api/faqs', {
        method: 'POST',
        body: JSON.stringify({ title: question_text.value })
    })
    question_text.value = ''
    alert('Ваш вопрос успешно отправлено!')
}

init()
</script>