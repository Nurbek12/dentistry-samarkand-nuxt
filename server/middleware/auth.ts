import jwt from 'jsonwebtoken'

export default defineEventHandler((event) => {
    // const { jwtSecret } = useRuntimeConfig()
    const private_paths = [
        { path: /^\/api\/appointments.*$/, method: 'DELETE' },
        { path: /^\/api\/appointments.*$/, method: 'PUT' },
        { path: /^\/api\/appointments.*$/, method: 'GET' },

        { path: /^\/api\/doctors.*$/, method: 'DELETE' },
        { path: /^\/api\/doctors.*$/, method: 'PUT' },
        { path: /^\/api\/doctors.*$/, method: 'POST' },
        { path: /^\/api\/doctors(?!\/clients).*$/, method: 'GET' },

        { path: /^\/api\/faqs.*$/, method: 'DELETE' },
        { path: /^\/api\/faqs.*$/, method: 'PUT' },
        { path: /^\/api\/faqs.*$/, method: 'POST' },
        { path: /^\/api\/faqs(?!\/clients).*$/, method: 'GET' },

        { path: /^\/api\/info\/admin.*$/, method: 'GET' },
        { path: /^\/api\/media.*$/, method: 'POST' },
        
        { path: /^\/api\/reviews.*$/, method: 'DELETE' },
        { path: /^\/api\/reviews.*$/, method: 'PUT' },
        { path: /^\/api\/reviews.*$/, method: 'POST' },
        { path: /^\/api\/reviews(?!\/clients).*$/, method: 'GET' },

        { path: /^\/api\/services.*$/, method: 'DELETE' },
        { path: /^\/api\/services.*$/, method: 'PUT' },
        { path: /^\/api\/services.*$/, method: 'POST' },
        { path: /^\/api\/services(?!\/clients).*$/, method: 'GET' },
    ]
    
    if (!private_paths.some(p => event.method === p.method && p.path.test(event.path))) {
        return
    }
    const token = getCookie(event, 'admin-token')
    if(token) return
    // if(token) return { status: 401, message: 'Token required' }
    // const payload = jwt.verify(token!, jwtSecret)
    // event.context.auth = payload
})