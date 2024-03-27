<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden gap-[0.05rem] border bg-slate-200">
        <div v-for="item,i in props.items" :key="i" class="bg-white flex justify-start rounded items-center flex-col text-center p-4"> 
            <div class="w-[80px] h-[80px] mb-2 rounded-full flex justify-center items-center bg-teal-600/10">
                <component :is="item.icon" class="w-8 h-8 text-teal-600" />
            </div>
            
            <span v-show="item.title">{{ props.d?$t(item.title!):item.title }}</span>
            <p class="text-sm font-thin text-gray-600 mt-2" v-show="item.description">{{ props.d?$t(item.description!):item.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    items: {
        title: string,
        icon: any,
        description?: string,
    }[],
    d?: boolean,
}>()
</script>