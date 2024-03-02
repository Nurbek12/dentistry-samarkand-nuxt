<template>
    <div class="w-full">
        <div class="container px-2 md:px-8">
            <div class="min-h-[100vh] py-16 flex flex-col items-center">
                <div class="text-center pt-20 pb-10">
                    <h1 class="font-medium text-teal-600 text-3xl">Врачи нашей команды</h1>
                    <p class="text-base text-gray-600">
                        Встречайте Нашу Команду Врачей - Профессионалы в Заботе о Вашей Улыбке
                    </p>
                </div>
                <div class="w-full">
                    <div class="border p-2 rounded">
                        <nuxt-img src="/images/doctors-2-image.jpg" class="rounded w-full h-[550px] object-top object-cover" alt="" />
                    </div>
                    <div class="grid py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <site-user-card @send-appointment="openReview($event)" v-for="doctor,i in doctors" :key="i" :doctor="doctor" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <app-dialog title="ЗАПИСЬ К СПЕЦИАЛИСТУ" :open="dialog" @close-dialog="dialog = false">
        <app-review-form :doctorid="doctorid" />
    </app-dialog>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'index-layout'
})

const dialog = ref(false)
const doctorid = ref<number | string | null>(null)

const openReview = (doctor: number | string | null) => {
    dialog.value = true
    doctorid.value =  doctor || null
}

const doctors = ref([])
const init = async () => {
    const data = await $fetch('/api/doctors/clients', {
        params: { page: 1, limit: 12 }
    })
    doctors.value = data.result as any
}

init()
</script>