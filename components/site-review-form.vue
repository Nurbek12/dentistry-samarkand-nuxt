<template>
    <div class="max-w-[600px] w-full bg-white p-4 border rounded">
        <div class="text-center mb-4">
            <h1 class="font-medium text-xl text-teal-600">Заполните форму</h1>
        </div>
        <form @submit.prevent="send">
            <div class="flex flex-wrap justify-between gap-3">
                <div class="w-full border rounded overflow-hidden">
                    <input required v-model="review.firstname" class="p-3 w-full outline-none text-sm" type="text" placeholder="Имя">
                </div>
                <div class="w-full border rounded overflow-hidden">
                    <input v-model="review.lastname" class="p-3 w-full outline-none text-sm" type="text" placeholder="Фамилия">
                </div>
                <div class="w-full border rounded overflow-hidden">
                    <input v-model="review.phone" class="p-3 w-full outline-none text-sm" type="text" placeholder="Телефон">
                </div>
                <div class="border w-full rounded overflow-hidden">
                    <textarea required v-model="review.message" class="p-3 w-full outline-none text-sm resize-none" rows="4" type="text" placeholder="Отзыв" />
                </div>
                <div class="w-full">
                    <button :disabled="loading" type="submit" class="disabled:bg-teal-900 bg-teal-600 hover:bg-teal-500 text-white px-3 py-2 w-full rounded">Отправить</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
const loading = ref<boolean>(false)
const review = reactive({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    message: ''
})

const send = async () => {
    loading.value = true

    await $fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })
    alert('Ваш вопрос успешно отправлено!')
    Object.assign(review, {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: ''
    })
    loading.value = false
}
</script>