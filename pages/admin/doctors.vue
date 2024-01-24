<template>
    <div class="w-full p-2">
        <div class="p-2 flex rounded bg-white border justify-between items-center gap-2">
            <div class="border w-full rounded overflow-hidden max-w-[300px]">
                <input @input="searchItems" type="text" class="px-3 py-2 w-full text-sm outline-none" placeholder="Поиск">
            </div>
            <button @click="dialog=true" class="bg-purple-600 hover:bg-purple-500 text-white rounded text-xs px-3 py-2">Добавить</button>
        </div>
        <div class="border rounded overflow-hidden w-full mt-2">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Фото
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Имя и фамилия
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Опыт
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Образование
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Специальность
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Управлять
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-show="items.length===0">
                            <td class="px-3 py-2 text-center bg-white border-b" colspan="6">
                                <span class="text-gray-600">Пусто</span>
                            </td>
                        </tr>
                        <tr v-for="item,i in items" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="w-[40px] h-[40px] rounded-full overflow-hidden">
                                    <img :src="item.thumb||'/images/nophoto.jpg'" alt="">
                                </div>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs">{{ item.name }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.experience }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs text-balance">{{ item.education }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <span class="text-xs">{{ item.specialty }}</span>
                            </th>
                            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div class="flex gap-1">
                                    <button @click="update(i, { id: item.id, publish: !item.publish })" class="text-white text-xs px-3 py-2 rounded" :class="item.publish?'bg-green-500 hover:bg-green-400':'bg-red-500 hover:bg-red-400'">
                                        <GlEye v-show="item.publish" class="w-4 h-4" />
                                        <ChEyeSlash v-show="!item.publish" class="w-4 h-4" />
                                    </button>
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
    <app-dialog :title="itemIndex==null?'Добавить доктор':'Изменить доктор'" :open="dialog" @close-dialog="close">
        <form @submit.prevent="save" class="mt-4 flex flex-col gap-4">
            <div class="flex items-center justify-start">
                <label for="file-input" class="cursor-pointer">
                    <div class="w-[120px] h-[120px] border-2 hover:bg-purple-600/10 border-purple-600 p-1 overflow-hidden rounded-full">
                        <img :src="currentImage" class="w-full rounded-full h-full object-cover" alt="">
                    </div>
                </label>
            </div>
            <div class="w-full border rounded overflow-hidden">
                <input required v-model="doctor.name" class="text-sm py-2 px-3 w-full outline-none" type="text" placeholder="Имя и фамилия">
            </div>
            <div class="w-full border rounded overflow-hidden">
                <input required v-model="doctor.phone" class="text-sm py-2 px-3 w-full outline-none" type="text" placeholder="Телефон">
            </div>
            <div class="w-full border rounded overflow-hidden">
                <input required v-model="doctor.experience" class="text-sm py-2 px-3 w-full outline-none" type="text" placeholder="Опыт">
            </div>
            <div class="w-full border rounded overflow-hidden">
                <input required v-model="doctor.education" class="text-sm py-2 px-3 w-full outline-none" type="text" placeholder="Образование">
            </div>
            <div class="w-full border rounded overflow-hidden">
                <input required v-model="doctor.specialty" class="text-sm py-2 px-3 w-full outline-none" type="text" placeholder="Специальность">
            </div>
            <div class="w-full border rounded overflow-hidden">
                <input v-model="doctor.tg" class="text-sm py-2 px-3 w-full outline-none" type="text" placeholder="Telegram">
            </div>
            <div class="w-full border rounded overflow-hidden">
                <input v-model="doctor.inst" class="text-sm py-2 px-3 w-full outline-none" type="text" placeholder="Instagram">
            </div>
            <div class="w-full border rounded overflow-hidden">
                <input v-model="doctor.fb" class="text-sm py-2 px-3 w-full outline-none" type="text" placeholder="Facebook">
            </div>
            <div class="w-full border rounded overflow-hidden">
                <input v-model="doctor.in" class="text-sm py-2 px-3 w-full outline-none" type="text" placeholder="Linkedin">
            </div>
            <div class="w-full" hidden>
                <input @change="onFileChange" id="file-input" accept="image/*" type="file" placeholder="Фото для ава">
            </div>
            <button :disabled="createLoading" type="submit" class="disabled:bg-purple-400 bg-purple-600 hover:bg-purple-500  rounded text-white text-sm px-3 py-2">
                {{ createLoading?'Загружается':'Сохранить' }}
            </button>
        </form>
    </app-dialog>
</template>

<script setup lang="ts">
import type { Doctor } from '@/types'
import { debounce } from 'lodash'
import { AkChevronRight, AkChevronLeft, ChEyeSlash, GlEye } from '@kalimahapps/vue-icons'

definePageMeta({
  layout: 'admin-layout',
  middleware: process.client ? 'auth' : undefined,
})

const search = ref('')
const dialog = ref(false)
const page = ref<number>(1)
const file = ref<any>(null)
const count = ref<number>(0)
const limit = ref<number>(20)
const items = ref<Doctor[]>([])
const itemIndex = ref<number|null>(null)
const createLoading = ref<boolean>(false)
const doctor = reactive<Doctor>({
    name: "",
    education: "",
    experience: "",
    specialty: "",
    fb: "",
    in: "",
    tg: "",
    inst: "",
    phone: "",
    publish: false,
})

const currentImage = computed(() => {
    if(file.value) return URL.createObjectURL(file.value)
    else if(itemIndex.value!==null) return items.value[itemIndex.value]?.thumb || '/images/nophoto.jpg'
    else return '/images/nophoto.jpg'
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
    try {
        const data = await $fetch(`/api/doctors`, {
            params: qs.value
        })
        items.value = data.result as any
        count.value = data.count
    } catch (error) {
        console.log(error)
    }
}

const onFileChange = (e: any) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return file.value = null
  return file.value = files[0]
}

const editItem = (item: Doctor, index: number) => {
    Object.assign(doctor, item)
    itemIndex.value = index
    dialog.value = true
}

const deleteItem = async (id: number, index: number) => {
    if(!confirm('Вы хотите удалить это?')) return
    await $fetch(`/api/doctors/delete/${id}`, {
        method: 'delete'
    })
    items.value.splice(index, 1)
}

const uploadImage = async (file: any) => {
    const body = new FormData()
    body.append('file', file)
    return $fetch<{url: string, thumbnailUrl: string}>('/api/media/upload', {
        method: 'post', body
    })
}

const create = async (body: any) => {
    const data = await $fetch('/api/doctors', {
        method: 'POST',
        body: JSON.stringify(body)
    })
    items.value.push(data as any)
}

const update = async (index: number, body: any) => {
    const data = await $fetch(`/api/doctors/update/${body.id}`, {
        method: 'put',
        body: JSON.stringify(body)
    })
    Object.assign(items.value[index], data)
}

const save = async () => {
    createLoading.value = true

    if(file.value) {
        const { url, thumbnailUrl } = await uploadImage(file.value)
        doctor.image = url
        doctor.thumb = thumbnailUrl
    }
    
    if(itemIndex.value !== null) update(itemIndex.value, doctor)
        
    else create(doctor)

    createLoading.value = false
    close()
}

const close = () => {
    Object.assign(doctor, {
        name: "",
        education: "",
        experience: "",
        specialty: "",
        phone: "",
        image: "",
        thumb: "",
        fb: "",
        in: "",
        tg: "",
        inst: "",
        publish: false,
    })
    file.value = null
    dialog.value = false
    itemIndex.value = null
}

getItems()
</script>