<template>
  <div class="w-full p-2">
      <app-data-table
          :count="count"
          :items="items"
          :headers="headers"
          
          @fetching="getItems">
          <template #table-top>
              <div class="hidden lg:block"></div>
              <div class="hidden lg:block"></div>
              <button @click="dialog=true" class="bg-teal-600 hover:bg-teal-500 text-white rounded text-xs px-3 py-2">Добавить</button>
          </template>
          <template #table-item-created_at="{tableItem}">
              <span class="text-xs text-balance">{{ new Date(tableItem.created_at!).toLocaleString() }}</span>
          </template>
          <template #table-item-actions="{tableItem,index}">
              <div class="flex gap-1">
                  <button @click="update(tableItem.id!, index, { publish: !tableItem.publish })" class="bg-teal-600 hover:bg-teal-500 text-white text-xs px-3 py-2 rounded">{{ tableItem.publish?'Скрыть':'Публиковать' }}</button>
                  <button @click="editItem(tableItem, index)" class="bg-teal-600 hover:bg-teal-500 text-white text-xs px-3 py-2 rounded">Изменить</button>
                  <button @click="deleteItem(tableItem.id!, index)" class="bg-teal-600 hover:bg-teal-500 text-white text-xs px-3 py-2 rounded">Удалить</button>
              </div>
          </template>
      </app-data-table>
  </div>
  <app-dialog rounded :title="itemIndex==null?'Добавить обародование':'Изменить обародование'" :open="dialog" @close-dialog="close">
      <form @submit.prevent="save" class="mt-4 flex flex-col gap-4">
          <div class="w-full border rounded overflow-hidden">
            <input required v-model="editedItem.title" class="text-sm py-2 px-3 w-full outline-none" type="text" placeholder="Загаловок">
          </div>
          <div class="w-full border overflow-hidden rounded">
              <textarea required v-model="editedItem.description" class="text-sm py-2 px-3 w-full outline-none resize-none" rows="4" type="text" placeholder="Описания" />
          </div>
          <div class="w-full" hidden>
            <input @change="onFilesChange" id="files-input" multiple accept="image/*" type="file" placeholder="Фото для ава">
          </div>
          <div v-show="editedItem.images.length > 0" class="w-full p-2 border rounded flex gap-2 flex-wrap">
            <div class="rounded overflow-hidden h-[100px] w-[100px]" v-for="m,i in editedItem.images" :key="i">
              <img :src="m" class="w-full h-full object-cover" alt="">
            </div>
          </div>
          <div v-show="files.length > 0" class="w-full p-2 border rounded flex gap-2 flex-wrap">
            <div class="rounded overflow-hidden h-[100px] w-[100px]" v-for="m,i in files" :key="i">
              <img :src="getBlobFile(m)" class="w-full h-full object-cover" alt="">
            </div>
          </div>
          <label for="files-input" class="disabled:bg-teal-900 bg-teal-600 hover:bg-teal-500  rounded text-white text-center cursor-pointer text-sm px-3 py-2">
              Добавить фотографии
          </label>
          <button :disabled="createLoading" type="submit" class="bg-teal-600 hover:bg-teal-500 text-white text-sm px-3 py-2 rounded">
              {{ createLoading?'Загружается':'Сохранить' }}
          </button>
      </form>
  </app-dialog>
</template>

<script setup lang="ts">
import type { Equipment } from '@/types'

definePageMeta({
  layout: 'admin-layout',
  middleware: ['auth'],
})

const dialog = ref(false)
const files = ref<any[]>([])
const count = ref<number>(0)
const items = ref<Equipment[]>([])
const itemIndex = ref<number|null>(null)
const createLoading = ref<boolean>(false)
const editedItem = reactive<Equipment>({
  title: '',
  images: [],
  publish: true,
  description:'',
})

const headers = [
  { name: "ID", value: "id", sortable: true, balancedText: false, custom: false },
  { name: "Вопрос", value: "title", sortable: true, balancedText: false, custom: false },
  { name: "Ответ", value: "content", sortable: true, balancedText: false, custom: false },
  { name: "Дата", value: "created_at", sortable: true, balancedText: false, custom: true },
  { name: "Управлять", value: "actions", sortable: true, balancedText: false, custom: true },
]

const onFilesChange = (e: any) => {
  files.value.push(...e.target.files)
}

const getBlobFile = (f: any) => {
  return URL.createObjectURL(f)
}

const getItems = async (params: any) => {
  const data = await $fetch(`/api/faqs`, { params })
  count.value = data.count
  items.value = data.result as any
}

const editItem = (item: Equipment, index: number) => {
  Object.assign(editedItem, item)
  itemIndex.value = index
  dialog.value = true
}

const deleteItem = async (id: number, index: number) => {
  if(!confirm('Вы хотите удалить это?')) return
  await $fetch(`/api/equipment/delete/${id}`, {
      method: 'delete'
  })
  console.log('Deleted', id)
  items.value.splice(index, 1)
}

const uploadImage = async (file: any) => {
  const body = new FormData()
  body.append('file', file)
  return $fetch<{url: string, thumbnailUrl: string}>('/api/media/upload', {
      method: 'post', body
  })
}

const update = async (id: string, index: number, body: any) => {
  const data = await $fetch(`/api/equipment/update/${id}`, {
    method: 'put',
    body: JSON.stringify(body)
  })
  Object.assign(items.value[index], data)
}

const create = async (body: any) => {
  const data = await $fetch('/api/equipment', {
      method: 'POST',
      body: JSON.stringify(body)
  })
  items.value.push(data as any)
}

const save = async () => {
  createLoading.value = true

  // if(file.value) {
  //     const { url, thumbnailUrl } = await uploadImage(file.value)
  //     doctor.image = url
  //     doctor.thumb = thumbnailUrl
  // }

  if(files.value.length > 0) {
      await Promise.all(files.value.map(async (f: File) => {
        const { url } = await uploadImage(f)
        editedItem.images.push(url)
      }))
    }
  
  if(itemIndex.value !== null) await update(items.value[itemIndex.value!].id!, itemIndex.value!, editedItem)
      
  else await create(editedItem)

  createLoading.value = false
  close()
}

const close = () => {
  Object.assign(editedItem, {
      title: "",
      content: "",
      publish: false,
  })
  dialog.value = false
  itemIndex.value = null
}
</script>