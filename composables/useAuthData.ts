export const useAuthData = () => {
    return useCookie<string|null>('admin-token', {
        expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
        default: () => null,
    })
}