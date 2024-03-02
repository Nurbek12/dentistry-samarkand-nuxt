<template>
    <div class="border rounded p-4">
        <h1 class="font-medium text-2xl text-teal-600">Контактная информация</h1>
        <div class="flex flex-col gap-4 py-4">
            <div class="flex flex-col md:flex-row gap-2 items-start">
                <div class="w-[50px] h-[50px] rounded-full bg-teal-600/10 text-2xl flex items-center justify-center">
                    <BxMap class="text-teal-600" />
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
                    <span>{{ contact_info.phone_1 }}, {{ contact_info.phone_2 }}</span>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-2 items-start">
                <div class="w-[50px] h-[50px] rounded-full bg-teal-600/10 text-2xl flex items-center justify-center">
                    <FeMail class="text-teal-600" />
                </div>
                <div>
                    <h1 class="font-medium">Адрес электронной почты:</h1>                
                    <span>{{ contact_info.email }}</span>
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
        </div>
    </div>
</template>

<script setup lang="ts">
import { contact_info } from '@/constants'
import { BxMap, CaPhoneIp, FeMail, MdOutlinedAccessTime } from '@kalimahapps/vue-icons'
</script>