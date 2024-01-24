export default defineEventHandler((event) => {
    const safePaths = [
        '/api/doctors/clients',
        '/api/services/clients',
        '/api/faqs/clients',
        '/api/reviews/clients',
    ]
    if(!safePaths.includes(getRequestURL(event).pathname) && !getRequestURL(event).pathname.includes('/_ipx/')) {
        console.log('this is private url');   
    }
})