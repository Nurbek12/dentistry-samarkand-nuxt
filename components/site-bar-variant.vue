<template>
    <div class="w-full fixed transition-all z-20 bg-white">
        <div class="container px-2 md:px-8 mx-auto pt-2">
            <div class="hidden md:flex justify-between items-center pb-2">
                <nuxt-link to="/" class="font-bold text-teal-600">Областная стоматологическая поликлиника</nuxt-link>
                <div class="flex gap-4 items-center">
                    <div class="flex gap-1 items-center text-gray-700 font-light text-sm">
                        <CaPhone class="h-4 w-4" />
                        <span>+998 90 123 45 67</span>
                    </div>
                    <app-menu :active="activeLink===100">
                        <template #default>
                            <div :class="{'text-teal-700':activeLink===100}" class="cursor-pointer flex gap-1 items-center text-gray-700 hover:text-teal-700 active:text-teal-600 font-light text-sm">
                                <AkClock class="h-3 w-3" />
                                <span>Рабочее время: 8:00-18:00</span>
                            </div>
                        </template>
                        <template #items>
                            <div class="w-full px-3 py-2">
                                <div v-for="w,i in working_times" :key="i" class="select-none flex items-center justify-between w-full" :class="w.sunday?'text-red-500':'text-teal-900'">
                                    <span>{{ w.day }}</span>
                                    <span>{{ w.hours }}</span>
                                </div>
                            </div>
                        </template>
                    </app-menu>
                    <!-- <a target="_blank" href="https://www.google.com/maps?ll=39.645585,66.966658&z=12&t=m&hl=ru&gl=US&mapclient=embed&q=%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%D0%BD%D0%B4+%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%BA%D0%B0%D0%BD%D0%B4%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C" class="flex gap-1 items-center text-gray-700 font-light text-sm hover:text-teal-600"> -->
                    <a target="_blank" href="https://maps.app.goo.gl/hZSPG2TvY6Hh2tUs7" class="flex gap-1 items-center text-gray-700 font-light text-sm hover:text-teal-600">
                        <BxMap class="h-4 w-4" />
                        <span>Областная стоматология</span>
                    </a>
                </div>
            </div>
            <div class="flex justify-between items-center bg-teal-800 rounded-xl p-2">
                <nuxt-link to="/" class="block md:hidden font-bold text-white">Областная стоматологическая поликлиника</nuxt-link>
                <div class="md:flex items-center gap-1 hidden">
                    <template v-for="link,i in navigation_links(services, doctors)" :key="i">
                        <app-menu v-if="link.children?.length" :active="activeLink===i">
                            <template #default>
                                <div class="cursor-pointer pl-4 pr-3 py-1 rounded-lg flex gap-1 items-center" :class="route.path.includes(link.url)?'bg-white text-teal-800 hover:bg-white hover:text-teal-700':'text-white hover:bg-white/20'">
                                    <nuxt-link :to="link.url" class="select-none text-nowrap">
                                        {{ link.title }}
                                    </nuxt-link>
                                    <ClCaretDownMd class="mt-1 w-5 h-5" />
                                </div>
                            </template>
                            <template #items>
                                <div class="flex flex-col overflow-hidden">
                                    <div class="border-b hover:bg-gray-100 border-teal-800 px-3 py-1" v-for="c in link.children" :class="{'bg-gray-200':route.path===c.url}">
                                        <nuxt-link :to="c.url" class="select-none text-teal-900 text-nowrap">
                                            {{ c.title }}
                                        </nuxt-link>
                                    </div>
                                </div>
                            </template>
                        </app-menu>
                        <nuxt-link v-else :to="link.url" class="px-4 py-1 rounded-lg " :class="route.path.includes(link.url)?'bg-white text-teal-800 hover:bg-white hover:text-teal-700':'text-white hover:bg-white/20'">{{ link.title }}</nuxt-link>
                    </template>
                </div>
                <div class="hidden md:block">
                    <app-lang-btn />
                </div>
                <button class="block md:hidden text-2xl" @click="$emit('open-drawer')">
                    <keep-alive>
                        <component :is="drawer?CgClose:ByMenu" class="h-7 w-7 text-white" />
                    </keep-alive>
                </button>
            </div>
            <div class="w-full relative">
                <!-- <div class="absolute w-full bg-red-500 p-6">
                    
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { navigation_links, working_times } from '@/constants'
import { ByMenu, CgClose, AkClock, BxMap, CaPhone, ClCaretDownMd  } from '@kalimahapps/vue-icons'

const isScrolled = ref(false)
const activeLink = ref<null|number>(null)

const doctors = ref<any[]>([])
const services = ref<any[]>([])

const route = useRoute()
const props = defineProps({drawer: Boolean})
const { drawer } = toRefs(props)

onMounted(() => {
    window.addEventListener('scroll', () => { isScrolled.value = window.scrollY>0 })
})

onBeforeMount(async () => {
    const [s,d] = await Promise.all([
        $fetch('/api/service-category', { params: { page: 1, limit: 1000 } }),
        $fetch('/api/speciality', { params: { page: 1, limit: 1000 } }),
    ]);

    services.value = s.result.map(sr => ({
        title: sr.name_ru,
        url: `/services/${sr.id}`
    }));
    doctors.value = d.result.map(dr => ({
        title: dr.name_ru,
        url: `/doctors?spec=${dr.id}`
    }));
})
</script>