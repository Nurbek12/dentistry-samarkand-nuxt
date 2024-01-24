<template>
    <div class="w-full p-2">
        <div class="p-2 flex bg-white border justify-between items-center gap-2 rounded">
            <div class="border w-full max-w-[300px] rounded">
                <input @input="searchItems" type="text" class="rounded px-3 py-2 w-full text-sm outline-none" placeholder="Поиск">
            </div>
        </div>
        <div class="border w-full rounded mt-2 overflow-hidden">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Имя и фамилия
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Телефон
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Доктор
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Дата
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Управлять
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-show="items.length===0">
                            <td class="px-3 py-2 text-center bg-white border-b" colspan="5">
                                <span class="text-gray-600">Пусто</span>
                            </td>
                        </tr>
                        <tr v-for="item,i in items" :key="i" class="bg-white hover:bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.name }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.phone }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.doctor?.name }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ new Date(item.created_at!).toLocaleString() }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="flex gap-1">
                                    <button @click="checkItem(item.id!, i)" :disabled="item.check" class="bg-purple-600 hover:bg-purple-500 disabled:bg-purple-300 text-white rounded text-xs px-3 py-2">{{item.check?"Проверено":"Проверять"}}</button>
                                    <button @click="deleteItem(item.id!, i)" class="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-2 rounded">Удалить</button>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="py-2 flex items-center justify-between">
            <div class="border rounded overflow-hidden w-full max-w-[100px]">
                <select v-model="limit" class="bg-white px-3 py-2 w-full text-sm outline-none" placeholder="Поиск">
                    <option :value="20" selected>20</option>
                    <option :value="50">50</option>
                    <option :value="100">100</option>
                </select>
            </div>
            <div class="border rounded flex items-center justify-between gap-4 bg-white p-2">
                <span class="text-sm">{{ limit*(page-1)+1 }}-{{ limit*(page-1)+items.length }} / {{ count }}</span>
                <div class="flex items-center gap-2">
                    <button :disabled="page===1" @click="page--,getItems()" class="disabled:bg-purple-300 bg-purple-600 hover:bg-purple-500 text-white text-xs p-3 rounded-full">
                        <AkChevronLeft />
                    </button>
                    <button :disabled="page >= Math.ceil(count / limit)" @click="page++,getItems()" class="disabled:bg-purple-300 bg-purple-600 hover:bg-purple-500 text-white text-xs p-3 rounded-full">
                        <AkChevronRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash'
import type { Appointment } from '@/types'
import { AkChevronRight, AkChevronLeft } from '@kalimahapps/vue-icons'

const search = ref('')
const page = ref<number>(1)
const count = ref<number>(0)
const limit = ref<number>(20)
const items = ref<Appointment[]>([])

definePageMeta({
  layout: 'admin-layout',
  middleware: process.client ? 'auth' : undefined,
})

const qs = computed(() => {
    const qry: any = {}

    if (page.value) qry.page = page.value
    if (limit.value) qry.limit = limit.value
    if (search.value.trim()) qry.search = search.value

    return qry
})

const searchItems = debounce((e: any) => {
    search.value = e.target.value
    page.value = 1
}, 500)

const getItems = async () => {
    const data = await $fetch('/api/appointments', {
        params: qs.value
    })
    count.value = data.count
    items.value = data.result as any
}

const deleteItem = async (id: number, index: number) => {
    if(!confirm('Вы хотите удалить это?')) return
    console.log('Deleted', id)
    items.value.splice(index, 1)
}

const checkItem = async (id: number, index: number) => {
    if(!confirm('Вы чекали это?')) return
    console.log('check', id)
    await $fetch(`/api/appointments/update/${id}`, {
        method: 'put',
        body: JSON.stringify({ check: true })
    })
    Object.assign(items.value[index], { check: true })
}

getItems()
</script>