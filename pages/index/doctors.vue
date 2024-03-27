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
                    <div class="bg-teal-900 p-3 rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <input v-model="params.name" @input="setValue('name', ($event.target as any)?.value)" type="text" placeholder="ФИО" class="px-4 py-2 rounded-xl outline-none">
                        <select v-model="params.spec" @change="setValue('spec', ($event.target as any)?.value)" class="px-4 py-2 rounded-xl outline-none">
                            <option selected :value="''">Специальности</option>
                            <option v-for="s,i in specialty" :key="i" :value="s.id">{{ s.name_ru }}</option>
                        </select>
                        <select v-model="params.rate" @change="setValue('rate', ($event.target as any)?.value)" class="px-4 py-2 rounded-xl outline-none">
                            <option selected :value="''">Рейтинг</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <app-btn @click="getItems()">Показать</app-btn>
                    </div>

                    <div class="grid py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <!-- <site-user-card @send-appointment="openReview($event)" v-for="doctor,i in doctors" :key="i" :doctor="doctor" /> -->
                        <site-user-card v-for="d,i in doctors" :key="i" :doctor="d" />
                    </div>

                    <div class="border p-2 rounded">
                        <nuxt-img src="/images/doctors-2-image.jpg" class="rounded w-full h-[550px] object-top object-cover" alt="" />
                    </div>

                    <card-content title="Справочная информация" extra_class="bg-teal-800/10">
                        <p class="mt-2">Сеть стоматологических клиник «СМ-Стоматология» входит в многопрофильный медицинский холдинг «СМ-Клиника».</p>
                        <p class="mt-2">Договор оферты об использовании личного кабинета. Файл в формате pdf (312 Кб).</p>
                        <p class="mt-2">С режимом работы клиник «СМ-Стоматология» можно ознакомиться на странице Контакты.</p>
                        <p class="mt-2">Сведения о врачах, их профессиональном образовании и квалификации можно получить из резюме врачей, размещенных на сайте.</p>
                    </card-content>
                </div>
            </div>
        </div>
    </div>
    <app-dialog title="ЗАПИСЬ К СПЕЦИАЛИСТУ" :open="dialog" @close-dialog="dialog = false">
        <app-review-form :doctorid="doctorid" />
    </app-dialog>
</template>

<script setup lang="ts">
import type { Specialty, Doctor } from '@/types'

definePageMeta({
  layout: 'index-layout'
})

const dialog = ref(false)
const doctorid = ref<number | string | null>(null)

const openReview = (doctor: number | string | null) => {
    dialog.value = true
    doctorid.value =  doctor || null
}

const route = useRoute()
const router = useRouter()
const doctors = ref<Doctor[]>([])
const specialty = ref<Specialty[]>([])

const params = reactive({
    name: route.query.name || '',
    spec: route.query.spec || '',
    page: route.query.page || 1,
    rate: route.query.rate || '',
})

const setValue = (key: keyof typeof params, value: any) => {
    if(route.query[key] == value) return

    const updatedQuery = { ...route.query };
    if (value === 0 || value === '') delete updatedQuery[key]
    else updatedQuery[key] = value

    params[key] = value
    
    router.replace({ path: '/doctors', query: updatedQuery })
}

const getItems = async () => {
    const data = await $fetch('/api/doctors/clients', { params })
    
    doctors.value = data.result as any
}
const init = async () => {
    const data = await $fetch('/api/speciality', { params: { page: 1, limit: 1000 } })
    specialty.value = data.result as any
    getItems()
}

init()

watch(() => toRef(route.params.id), () => {
    params.spec = route.query?.spec || ''
    getItems()
})

// const dentists = [
//   {
//     id: 1,
//     name: "Алиса Игоревна Иванова",
//     experience: 10,
//     education: "МГМСУ им. А.И. Евдокимова",
//     phone: "+7 (987) 654-32-10",
//   },
//   {
//     id: 2,
//     name: "Андрей Сергеевич Петров",
//     experience: 8,
//     education: "Первый Московский государственный медицинский университет имени И.М. Сеченова",
//     phone: "+7 (916) 123-45-67",
//   },
//   {
//     id: 3,
//     name: "Мария Викторовна Сидорова",
//     experience: 5,
//     education: "Российский национальный исследовательский медицинский университет имени Н.И. Пирогова",
//     phone: "+7 (925) 876-54-32",
//   },
//   {
//     id: 4,
//     name: "Михаил Дмитриевич Кузнецов",
//     experience: 12,
//     education: "Санкт-Петербургский государственный медицинский университет имени И.П. Павлова",
//     phone: "+7 (903) 987-65-43",
//   },
//   {
//     id: 5,
//     name: "Ольга Николаевна Орлова",
//     experience: 7,
//     education: "Казанский государственный медицинский университет",
//     phone: "+7 (962) 543-21-09",
//   },
//   {
//     id: 6,
//     name: "Евгений Павлович Соколов",
//     experience: 15,
//     education: "Уральский государственный медицинский университет",
//     phone: "+7 (950) 123-45-67",
//   },
//   {
//     id: 7,
//     name: "Ирина Александровна Романова",
//     experience: 9,
//     education: "Белорусский государственный медицинский университет",
//     phone: "+7 (931) 234-56-78",
//     },
//   {
//     id: 8,
//     name: "Сергей Владимирович Волков",
//     experience: 6,
//     education: "Ташкентский государственный медицинский институт",
//     phone: "+7 (971) 123-45-67",
//   },
//   {
//     id: 9,
//     name: "Анна Михайловна Захарова",
//     experience: 11,
//     education: "Национальный медицинский университет имени А.А. Богомольца",
//     phone: "+7 (985) 654-32-10",
//   },
//   {
//     id: 10,
//     name: "Иван Петрович Белов",
//     experience: 14,
//     education: "Киевский национальный медицинский университет имени Богомольца",
//     phone: "+7 (926) 123-45-67",
//   },
//   {
//     id: 11,
//     name: "Ксения Сергеевна Лебедева",
//     experience: 8,
//     education: "Первый Санкт-Петербургский государственный медицинский университет имени И.П. Павлова",
//     phone: "+7 (909) 876-54-32",
//   },
//   {
//     id: 12,
//     name: "Максим Олегович Попов",
//     experience: 13,
//     education: "Рязанский государственный медицинский университет имени И.П. Павлова",
//     phone: "+7 (953) 987-65-43",
//   },
// ];
</script>