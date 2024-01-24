import { useAppStore } from "@/store/app.store"

export default defineNuxtRouteMiddleware((to, from) => {
    const { isLogged } = useAppStore()
    console.log(isLogged)
    if(!isLogged) {
        navigateTo('/login', { external: true })
    }
})