import { defineStore } from 'pinia'

// const adminToken = useAuthData()

// const setToken = (token: string | null) => {
//     adminToken.value = token
// }

export const useAppStore = defineStore('app', {
    state: () => ({
        // token: adminToken.value
    }),
    getters: {
        // isLogged: state => !!state.token
    },
    actions: {
        // set_token(token: string | null){
        //     setToken(token)
        //     this.$patch({ token })
        // },
    }
})