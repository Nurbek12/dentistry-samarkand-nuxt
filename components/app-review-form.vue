<template>
    <form @submit.prevent="send" class="mt-4 flex flex-col gap-4">
        <div class="w-full border overflow-hidden rounded">
            <input required v-model="appointment.name" class="text-sm px-3 py-2 w-full outline-none" type="text"
                placeholder="Ваше имя">
        </div>
        <div class="w-full border overflow-hidden rounded">
            <input required v-model="appointment.phone" class="text-sm px-3 py-2 w-full outline-none" type="text"
                placeholder="Телефон">
        </div>
        <button type="submit"
            class="bg-teal-600 rounded hover:bg-teal-500 text-white text-sm px-3 py-2">Отправить</button>
    </form>
</template>

<script setup lang="ts">
const appointment = reactive({
    name: "",
    phone: "",
})

const props = defineProps<{doctorid: string|number|null}>()
const { doctorid } = toRefs(props)

const send = async () => {
    await $fetch('/api/appointments', {
        method: 'post',
        body: JSON.stringify({
            ...appointment,
            doctorid: doctorid.value || null
        })
    })
    Object.assign(appointment, {
        name: "",
        phone: "",
        doctorid: doctorid.value
    })
    alert('Succesfully sended!')
}
</script>