<template>
    <div class="max-w-[600px] h-min w-full bg-white p-4 border rounded-3xl">
        <div class="text-center mb-4">
            <h1 class="font-medium text-xl text-teal-600">Заполните форму</h1>
        </div>
        <form @submit.prevent="send">
            <div class="flex flex-wrap justify-between gap-3">
                <div class="w-full border rounded-3xl overflow-hidden">
                    <input required v-model="review.firstname" class="p-3 w-full outline-none text-sm" type="text" placeholder="Имя">
                </div>
                <div class="w-full border rounded-3xl overflow-hidden">
                    <input v-model="review.lastname" class="p-3 w-full outline-none text-sm" type="text" placeholder="Фамилия">
                </div>
                <div class="border w-full rounded-3xl overflow-hidden">
                    <textarea required v-model="review.message" class="p-3 w-full outline-none text-sm resize-none" rows="4" type="text" placeholder="Отзыв" />
                </div>
                <div class="flex gap-1 items-center">
                    <template v-for="i in 5" :key="i">
                        <component @click="review.rate=i" :is="i>review.rate?AnOutlinedStar:AnFilledStar"  class="text-yellow-400 cursor-pointer w-6 h-6" />
                    </template>
                    <span class="ml-4">Ваша отценка</span>
                </div>
                <div class="w-full">
                    <button :disabled="loading" type="submit" class="disabled:bg-teal-900 bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 w-full rounded-3xl">Отправить</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import type { Review } from '@/types'
import { AnOutlinedStar, AnFilledStar } from '@kalimahapps/vue-icons'

const emits = defineEmits(['sumbited'])
const props = defineProps<{doctor?: number}>()
const loading = ref<boolean>(false)
const review = reactive<Review>({
    firstname: '',
    lastname: '',
    message: '',
    rate: 0
})

const send = async () => {
    loading.value = true
    if(props.doctor !== undefined) review.doctor_id = props.doctor
    
    const data = await $fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })
    emits('sumbited', data)
    alert('Ваш вопрос успешно отправлено!')
    Object.assign(review, {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: '',
        rate: 0,
    })
    loading.value = false
}
</script>