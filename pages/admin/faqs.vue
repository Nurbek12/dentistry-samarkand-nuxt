<template>
    <div class="w-full p-2">
        <div class="p-2 flex rounded bg-white border justify-between items-center gap-2">
            <div class="border rounded overflow-hidden w-full max-w-[300px]">
                <input @input="searchItems" type="text" class="px-3 py-2 w-full text-sm outline-none" placeholder="Поиск">
            </div>
        </div>
        <div class="border rounded overflow-hidden w-full mt-2">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Вопрос
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ответ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Управлять
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-show="items.length===0">
                            <td class="px-3 py-2 text-center bg-white border-b" colspan="3">
                                <span class="text-gray-600">Пусто</span>
                            </td>
                        </tr>
                        <tr v-for="item,i in items" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.title }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.content }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="flex gap-1">
                                    <button @click="update(item.id!, i, { publish: !item.publish })" class="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-2 rounded">{{ item.publish?'Скрыть':'Публиковать' }}</button>
                                    <button @click="editItem(item, i)" class="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-2 rounded">Изменить</button>
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
                <select v-model="limit" @change="getItems()" class="px-3 py-2 w-full bg-white text-sm outline-none" placeholder="Поиск">
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
    <app-dialog title="Изменить ответ" :open="dialog" @close-dialog="close">
        <form @submit.prevent="save" class="mt-4 flex flex-col gap-4">
            <div class="w-full border overflow-hidden rounded">
                <textarea readonly required v-model="faqs.title" class="text-sm py-2 px-3 w-full outline-none resize-none" rows="4" type="text" placeholder="Название" />
            </div>
            <div class="w-full border overflow-hidden rounded">
                <textarea required v-model="faqs.title_uz" class="text-sm py-2 px-3 w-full outline-none resize-none" rows="4" type="text" placeholder="Название (UZ)" />
            </div>
            <div class="w-full border overflow-hidden rounded">
                <textarea required v-model="faqs.content" class="text-sm py-2 px-3 w-full outline-none resize-none" rows="4" type="text" placeholder="Описание" />
            </div>
            <div class="w-full border overflow-hidden rounded">
                <textarea required v-model="faqs.content_uz" class="text-sm py-2 px-3 w-full outline-none resize-none" rows="4" type="text" placeholder="Описание (UZ)" />
            </div>
            <button :disabled="createLoading" type="submit" class="bg-purple-600 hover:bg-purple-500 text-white text-sm px-3 py-2 rounded">
                {{ createLoading?'Загружается':'Сохранить' }}
            </button>
        </form>
    </app-dialog>
</template>

<script setup lang="ts">
import type { FAQs } from '@/types'
import { debounce } from 'lodash'
import { AkChevronRight, AkChevronLeft } from '@kalimahapps/vue-icons'

definePageMeta({
  layout: 'admin-layout',
  middleware: process.client ? 'auth' : undefined,
})

const search = ref('')
const dialog = ref(false)
const page = ref<number>(1)
const count = ref<number>(0)
const limit = ref<number>(20)
const items = ref<FAQs[]>([])
const itemIndex = ref<number|null>(null)
const createLoading = ref<boolean>(false)
const faqs = reactive<FAQs>({
    title: "",
    content: "",
    publish: false,
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
    getItems()
}, 500)

const getItems = async () => {
    const data = await $fetch(`/api/faqs`, {
        params: qs.value
    })
    count.value = data.count
    items.value = data.result as any
}

const editItem = (item: FAQs, index: number) => {
    Object.assign(faqs, item)
    itemIndex.value = index
    dialog.value = true
}

const deleteItem = async (id: number, index: number) => {
    if(!confirm('Вы хотите удалить это?')) return
    await $fetch(`/api/faqs/delete/${id}`, {
        method: 'delete'
    })
    console.log('Deleted', id)
    items.value.splice(index, 1)
}

const update = async (id: number, index: number, body: any) => {
    const data = await $fetch(`/api/faqs/update/${id}`, {
        method: 'put',
        body: JSON.stringify(body)
    })
    Object.assign(items.value[index], data)
}

const save = async () => {
    await update(items.value[itemIndex.value!].id!, itemIndex.value!, faqs)
    close()
}

const close = () => {
    Object.assign(faqs, {
        title: "",
        content: "",
        publish: false,
    })
    dialog.value = false
    itemIndex.value = null
}

getItems()
</script>