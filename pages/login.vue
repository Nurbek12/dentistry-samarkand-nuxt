<template>
    <div class="h-[100vh] flex items-center justify-center px-2">
        <div class="max-w-[420px] w-full p-4 border rounded overflow-hidden">
            <form @submit.prevent="login" class="w-full">
                <h1 class="text-xl font-medium text-center text-purple-600">Войти в систему</h1>
                <p v-show="err" class="text-center text-sm text-red-600">Логин или пароль неправилный!</p>
                <div class="w-full mt-4 border rounded overflow-hidden">
                    <input required v-model="form_data.login" class="p-3 w-full outline-none text-sm" type="text"
                        placeholder="Логин">
                </div>
                <div class="w-full mt-4 border rounded overflow-hidden">
                    <input type="password" required v-model="form_data.password" class="p-3 w-full outline-none text-sm"
                        placeholder="Пароль">
                </div>
                <div class="w-full mt-4">
                    <button type="submit" :disabled="loading"
                        class="disabled:bg-purple-300 bg-purple-600 rounded hover:bg-purple-500 active:bg-purple-400 text-white px-3 py-2 w-full">Отправить</button>
                </div>
            </form>
        </div>
    </div>
</template>
    
<script setup lang="ts">
const err = ref(false)
const loading = ref(false)
const router = useRouter()
const store = useAppStore()
const form_data = reactive({
    login: '',
    password: ''
})

const login = async () => {
    loading.value = true
    const data: any = await $fetch('/api/auth/login', {
        method: 'post',
        body: JSON.stringify(form_data)
    })
    if(data.status === "ok") {
        store.set_token(data.token)
        router.push('/admin')
        err.value = false
    } else {
        err.value = true
    }
    loading.value = false
    Object.assign(login, {
        login: '',
        password: ''
    })
}
</script>