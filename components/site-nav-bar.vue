<template>
    <div class="w-full fixed transition-all z-20 bg-white" :class="{'shadow-lg': isScrolled&&!drawer}">
        <div class="container mx-auto">
            <div class="md:flex hidden justify-between items-center pt-2">
                <div class="flex gap-4 items-center">
                    <a href="#" v-for="s,i in social_links" :key="i" class="text-gray-700 hover:text-purple-600 text-xl flex items-center gap-2">
                        <component :is="s.icon" class="w-4 h-4" />
                        <span class="lg:inline-block hidden text-base font-thin">{{ s.title }}</span>
                    </a>
                </div>
                <div class="flex gap-4 items-center">
                    <div class="flex gap-1 items-center text-gray-700 font-light text-sm">
                        <CaPhone class="h-4 w-4" />
                        <span>+998 90 123 45 67</span>
                    </div>
                    <div class="flex gap-1 items-center text-gray-700 font-light text-sm">
                        <AkClock class="h-3 w-3" />
                        <span>Рабочее время: 9:00-18:00</span>
                    </div>
                    <div class="flex gap-1 items-center text-gray-700 font-light text-sm hover:text-purple-600">
                        <BxMap class="h-4 w-4" />
                        <nuxt-link to="/">Самарканд областная стоматология</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center py-4">
                <nuxt-link to="/" class="font-bold text-purple-600 text-xl">Сайт Стоматология</nuxt-link>

                <button class="block md:hidden text-2xl" @click="$emit('open-drawer')">
                    <keep-alive>
                        <component :is="drawer?CgClose:ByMenu" class="h-7 w-7 text-black" />
                    </keep-alive>
                </button>
                <div class="md:flex items-center gap-10 hidden">
                    <nuxt-link v-for="link,i in navigation_links" :key="i"
                        :to="link.url" class="hover:underline" :class="{'text-purple-600':route.path===link.url}">{{ link.title }}</nuxt-link>
                    <app-lang-btn />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { navigation_links, social_links } from '@/constants'
import { ByMenu, CgClose, AkClock, BxMap, CaPhone } from '@kalimahapps/vue-icons'

const route = useRoute()
const isScrolled = ref(false)
const props = defineProps({drawer: Boolean})
const { drawer } = toRefs(props)

onMounted(() => {
    window.addEventListener('scroll', () => { isScrolled.value = window.scrollY>0 })
})
</script>