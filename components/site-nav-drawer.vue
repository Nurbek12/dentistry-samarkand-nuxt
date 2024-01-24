<template>
    <div class="fixed md:hidden w-[250px] h-[100vh] z-40 bg-white shadow-xl transition-all"
        :class="!drawer?'left-[-300px]':'left-0'">
        <div class="flex flex-col gap-4 p-10 h-full">
            <nuxt-link v-for="link,i in navigation_links"
                :key="i" @click="$emit('close-drawer')"
                :to="link.url" class="hover:underline" 
                :class="{'text-purple-600 underline':route.path===link.url}">
                    {{ link.title }}
            </nuxt-link>
            <div class="flex-1 flex flex-col justify-end">
                <div class="flex justify-between items-center">
                    <a href="#" v-for="s,i in social_links" :key="i" class="hover:text-purple-600 text-xl">
                        <component :is="s.icon" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { navigation_links, social_links } from '@/constants'

const route = useRoute()
const props = defineProps({drawer: Boolean})
const { drawer } = toRefs(props)
</script>