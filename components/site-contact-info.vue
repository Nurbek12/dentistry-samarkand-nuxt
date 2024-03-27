<template>
    <div class="pointer-events-auto bg-white border rounded-2xl px-6 py-4 max-w-[500px]">
        <h1 class="font-medium text-2xl text-teal-600">Контактная информация</h1>
        <div class="flex flex-col gap-4 py-4">
            <div class="flex flex-col md:flex-row gap-2 items-start">
                <div>
                    <div class="w-[50px] h-[50px] rounded-full bg-teal-600/10 text-2xl flex items-center justify-center">
                        <BxMap class="text-teal-600" />
                    </div>
                </div>
                <div>
                    <h1 class="font-medium">Название клиники: {{ contact_info.clinicName }}</h1>                
                    <span>Адрес: {{ contact_info.address.city }}, {{ contact_info.address.street }}</span>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-2 items-start">
                <div class="w-[50px] h-[50px] rounded-full bg-teal-600/10 text-2xl flex items-center justify-center">
                    <CaPhoneIp class="text-teal-600" />
                </div>
                <div>
                    <h1 class="font-medium">Телефонные номера:</h1>                
                    <a :href="`tel:${contact_info.phone_1}`" class="hover:underline hover:text-teal-700">{{ contact_info.phone_1 }}</a>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-2 items-start">
                <div class="w-[50px] h-[50px] rounded-full bg-teal-600/10 text-2xl flex items-center justify-center">
                    <FeMail class="text-teal-600" />
                </div>
                <div>
                    <h1 class="font-medium">Адрес электронной почты:</h1>
                    <a :href="`mailto:${contact_info.email}`" class="hover:underline hover:text-teal-700">{{ contact_info.email }}</a>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-2 items-start">
                <div class="w-[50px] h-[50px] rounded-full bg-teal-600/10 text-2xl flex items-center justify-center">
                    <MdOutlinedAccessTime class="text-teal-600" />
                </div>
                <div>
                    <h1 class="font-medium">Рабочее время:</h1>
                    <div class="flex flex-col gap-1 mt-1">
                        <div v-for="t,i in contact_info.workingHours" :key="i" class="flex gap-8 justify-between items-center text-gray-600" :class="{'text-red-500':i==2}">
                            <span class="text-sm font-medium">{{ t.day }}</span>
                            <span class="text-sm">{{ t.hours }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex">
                <nuxt-link to="/about/clinic" class="w-full text-center py-3 rounded-xl bg-teal-800 hover:bg-teal-700 text-white">
                    Подробнее о клинике
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { contact_info } from '@/constants'
import { BxMap, CaPhoneIp, FeMail, MdOutlinedAccessTime } from '@kalimahapps/vue-icons'
</script>