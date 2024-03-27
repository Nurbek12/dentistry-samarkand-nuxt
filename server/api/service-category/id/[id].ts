import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    return prisma.service_Category.findFirst({
        where: { id: +id!, },
        include: {
            services: {
                where: {
                    publish: true,
                },
                select: {
                    id: true,
                    description_ru: true,
                    image: true,
                    thumb: true,
                    name_ru: true,
                    price: true,
                    created_at: true,
                }
            }
        }
    })
})