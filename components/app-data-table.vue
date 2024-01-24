<template>
    <div class="border rounded w-full">
        <div>

        </div>
        <div class="px-3 py-2">
            <table class="table w-full">
                <thead class="border-b">
                    <tr>
                        <td class="text-sm font-medium" v-for="header, i in props.headers" :key="i">{{ header.title }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item, j in props.items" :key="j" class="border-b">
                        <td v-for="header, i in props.headers" :key="i">
                            <div v-if="!$slots['item-' + header.key]">{{ item[header.key] }}</div>
                            <slot :name="'item-' + header.key" :item="item[header.key]" :title="header.title" :index="j" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-between items-center">

        </div>
    </div>
</template>
    
<script lang="ts" setup>
const props = defineProps({
    headers: {
        type: [Object]
    },
    items: {
        type: [Object]
    }
})
</script>