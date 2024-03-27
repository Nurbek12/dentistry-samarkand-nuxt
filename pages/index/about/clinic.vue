<template>
    <div class="w-full">
        <div class="container px-2 md:px-8 py-16">
            <div class="text-center pt-20 pb-10">
                <h1 class="font-medium text-teal-600 text-3xl">О клинике</h1>
                <p class="text-base text-gray-600">
                    Наши Стоматологические Услуги - Заботимся о Здоровье Вашей Улыбки
                </p>
            </div>

            <div class="flex gap-6 items-start">
                <div class="rounded-lg max-w-[400px] w-full h-[300px] overflow-hidden">
                    <nuxt-img src="/images/hospital-image.jpg" alt="" class="w-full h-full object-cover" />
                </div>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-2">
                        <h1 class="font-medium">Название клиники:</h1>                
                        <span>{{ contact_info.clinicName }}</span>
                    </div>
                    <div class="flex gap-2">
                        <h1 class="font-medium">Адрес:</h1>                
                        <span>{{ contact_info.address.city }}, {{ contact_info.address.street }}</span>
                    </div>
                    <div class="flex gap-2">
                        <h1 class="font-medium">Телефонные номера:</h1>                
                        <a :href="`tel:${contact_info.phone_1}`" class="hover:underline hover:text-teal-700">{{ contact_info.phone_1 }}</a>
                    </div>
                    <div class="flex gap-2">
                        <h1 class="font-medium">Адрес электронной почты:</h1>
                        <a :href="`mailto:${contact_info.email}`" class="hover:underline hover:text-teal-700">{{ contact_info.email }}</a>
                    </div>
                    <div class="flex flex-col">
                        <h1 class="font-medium">Рабочее время:</h1>
                        <div class="pl-2 flex flex-col gap-1 mt-1 max-w-[400px]">
                            <div v-for="t,i in contact_info.workingHours" :key="i" class="flex gap-8 justify-between items-center text-gray-600" :class="{'text-red-500':i==2}">
                                <span class="text-sm font-medium">{{ t.day }}</span>
                                <span class="text-sm">{{ t.hours }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <card-content extra_class="bg-teal-800/10">
                <p>В районе метро «Войковская» и станции «Балтийская» МЦК действует стоматологическое отделение «СМ-Стоматология» на Старопетровском проезде, дом 7А, строение 22, которое предлагает пациентам услуги по следующим направлениям:</p>
                <br>
                <ul class="mt-2">
                    <li class="flex items-center gap-2">
                        <div>
                            <ClWavyCheck class="text-red-500 text-xl" />
                        </div>
                        <p>диагностика (панорамный снимок (ортопантомограмма), прицельный снимок, компьютерная диагностика состояния тканей пародонта);</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <div>
                            <ClWavyCheck class="text-red-500 text-xl" />
                        </div>
                        <p>терапевтическая стоматология (компьютерная анестезия без боли, микроинвазивные методы лечения кариеса и его осложнений, качественная пломбировка каналов, отбеливание зубов с помощью системы ZOOM, лазерное отбеливание, профессиональная гигиена полости рта);</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <div>
                            <ClWavyCheck class="text-red-500 text-xl" />
                        </div>
                        <p>ортопедическая стоматология (все виды керамики, коронки, вкладки, виниры, протезирование на имплантаты, протезирование без обточки зубов, нейлоновые протезы «Valplast» и «Acryfree», сложное протезирование при заболеваниях пародонта);</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <div>
                            <ClWavyCheck class="text-red-500 text-xl" />
                        </div>
                        <p>хирургическая стоматология (удаление зубов любой сложности, в том числе зубов мудрости, восстановление утраченной кости, пластика мягких тканей, зубосохраняющие операции);</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <div>
                            <ClWavyCheck class="text-red-500 text-xl" />
                        </div>
                        <p>имплантология (имплантация в сложных условиях, при недостатке кости, имплантация при наличии общесоматических заболеваний, использование новейших систем имплантации, большой выбор различных видов имплантов, импланты MIS Израиль, ASTRA TECH Швеция, BIOMED 3i США)</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <div>
                            <ClWavyCheck class="text-red-500 text-xl" />
                        </div>
                        <p>ортодонтия (исправление прикуса в любом возрасте, все виды брекет систем, невидимые брекеты, система «INCOGNITO», микроимпланты, лечение без брекетов);</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <div>
                            <ClWavyCheck class="text-red-500 text-xl" />
                        </div>
                        <p>пародонтология (компьютерная диагностика заболеваний пародонта (десен и полости рта), терапевтическое и хирургическое лечение заболеваний пародонта, использование диодного лазера «OPUS5»).</p>
                    </li>
                    <li class="flex items-center gap-2">
                        <div>
                            <ClWavyCheck class="text-red-500 text-xl" />
                        </div>
                        <p>«СМ-Стоматология» — стоматологическая клиника в Войковском районе Москвы (САО).</p>
                    </li>
                </ul>
                <br>
                Шаговая доступность стоматологии на Старопетровском проезде к Ленинградскому шоссе, а также метро Войковская, Сокол, Балтийская и Стрешнево, позволяет нашим пациентам удобно добраться, как на личном автомобиле, так и на общественном транспорте.

                Отделение «СМ-Стоматология» расположено на 2-м этаже клиники.
                <br><br>
                <b>
                    Записаться на прием к стоматологу на метро Войковская и Сокол можно по телефону +7 495 432 69 30 или с помощью формы ниже.
                </b>
            </card-content>

            <div class="w-full h-[450px] rounded-2xl overflow-hidden">
                <iframe width="100%" height="100%" id="gmap_canvas"
                    :src="`https://maps.google.com/maps?q=samarkhand,Областная+Стоматологическая+Больница&t=&z=18&ie=UTF8&iwloc=&output=embed`"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { contact_info } from '@/constants'
import { ClWavyCheck } from '@kalimahapps/vue-icons'

definePageMeta({
  layout: 'index-layout'
})
</script>