<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-teal-600 text-3xl">{{ doctor?.name }}</h1>
                <p class="text-base text-gray-600">
                    Мы ценим каждого пациента, и ваше мнение важно для нас. 
                </p>
            </div>

            <div class="w-full flex md:flex-row flex-col items-center gap-8">
                <div class="w-[250px] h-[250px] rounded-2xl overflow-hidden p-2 bg-teal-700">
                    <img :src="doctor?.image" class="w-full h-full ob rounded-2xl">
                </div>
                <div class="flex flex-col items-center md:items-start gap-2 py-4">
                    <div class="flex gap-1">
                        <AnFilledStar class="text-yellow-400 w-5 h-5" v-for="i in (doctor?.rating||0)" :key="i" />
                        <AnOutlinedStar class="text-yellow-400 w-5 h-5" v-for="i in (5-(doctor?.rating||0))" :key="i" />
                    </div>
                    <h1 class="font-medium text-xl text-teal-900">{{ doctor?.name }}</h1>
                    <h1 class="text-xl">{{ doctor?.education }}</h1>
                    <div class="flex gap-2 items-center flex-wrap">
                        <span class="border-r pr-2">Опыт: {{ doctor?.experience }} лет</span>
                        <!-- <span>Отзывы: {{ doctor?.reviews?.length }} людей</span> -->
                    </div>
                    <div class="mt-2 flex w-[400px] gap-2 items-center">
                        <button class="bg-teal-600 hover:bg-teal-500 text-white w-full py-2 rounded-3xl">{{ $t('home.send_appointment') }}</button>
                        <a href="#review" class="border-2 border-teal-600 hover:bg-teal-600 text-teal-600 hover:text-white w-full py-1 rounded-3xl flex justify-center items-center">
                            {{ doctor?.reviews?.length }} Отзывов
                        </a>
                    </div>
                    <h1></h1>
                </div>
            </div>

            <card-content title="Сертификаты" extra_class="bg-blue-500/10">
                <template #icon>
                    <div>
                        <FlCertificate class="text-5xl text-blue-700" />
                    </div>
                </template>
                <p class="mt-2">
                    <ul>
                        <li><i class="mr-2">&#x2022;</i>Свидетельство о специалисте по терапевтической стоматологии и эндодонтии (2025)</li>
                        <li><i class="mr-2">&#x2022;</i>Сертификат по лечению кариеса и пульпита (2026)</li>
                        <li><i class="mr-2">&#x2022;</i>Сертификат по эстетической стоматологии (2025)</li>
                    </ul>
                </p>
            </card-content>

            <card-content title="Специализация врача" extra_class="bg-blue-500/10">
                <template #icon>
                    <div>
                        <CoBook class="text-5xl text-blue-700" />
                    </div>
                </template>
                <p class="mt-2">
                    <ul>
                        <li><i class="mr-2">&#x2022;</i>Дантист-терапевт в стоматологической клинике "Дента-Плюс" (2018-2022)</li>
                        <li><i class="mr-2">&#x2022;</i>Дантист-эндодонт в стоматологической клинике "Здоровые зубы" (2023-настоящее время)</li>
                    </ul>
                </p>
            </card-content>

            <card-content title="Образование" extra_class="bg-blue-500/10">
                <template #icon>
                    <div>
                        <CdBook class="text-5xl text-blue-700" />
                    </div>
                </template>
                <p class="mt-2">
                    <ul>
                        <li><i class="mr-2">&#x2022;</i>Стоматологический факультет Московского государственного медицинско-стоматологического университета (2005-2010)</li>
                        <li><i class="mr-2">&#x2022;</i>Ординатура по терапевтической стоматологии и эндодонтии в Городской клинической больнице №1 (2010-2012)</li>
                    </ul>
                </p>
            </card-content>

            <card-content title="Опыт работы" extra_class="bg-blue-500/10">
                <template #icon>
                    <div>
                        <CaNetwork3 class="text-5xl text-blue-700" />
                    </div>
                </template>
                <p class="mt-2">
                    Др. Сэмюэл Джонсон - высококвалифицированный дантист-терапевт и эндодонт с большим опытом работы. Он владеет современными методами лечения зубов и десен, использует новейшее оборудование и материалы. Др. Джонсон всегда старается обеспечить максимальный комфорт своих пациентов во время лечения и добивается наилучших результатов. Он постоянно повышает свою квалификацию, посещая курсы и семинары по стоматологии. Др. Джонсон владеет английским и русским языками.
                </p>
            </card-content>

            <div id="#review" class="pt-6 w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                <site-review-form @sumbited="handleReview" :doctor="+route.params.id" />
                <div class="w-full flex flex-col gap-2 overflow-auto scrollbar-normal">
                    <div v-show="doctor?.reviews?.length == 0" class="text-center w-full">Нет комментариев</div>
                    <site-review-card v-for="r,i in (doctor?.reviews||[])" :key="i" :review="r" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { Doctor, Review } from '~/types'
import { FlCertificate, CoBook, CdBook, CaNetwork3, AnFilledStar, AnOutlinedStar } from '@kalimahapps/vue-icons'

definePageMeta({
  layout: 'index-layout'
})

const route = useRoute()
const doctor = reactive<Doctor>({} as any)

const init = async () => {
    const data = await $fetch(`/api/doctors/id/${route.params.id}`)
    // if(!data?.id) return console.log('This Doctor is not found')
    // console.log(data);
    
    Object.assign(doctor, data)
}

const handleReview = (r: Review) => {
    doctor?.reviews?.push(r)
    const t = doctor?.rating === 0 ? 1 : 2
    doctor.rating = (doctor?.rating + r.rate) / t
}
await init()
</script>