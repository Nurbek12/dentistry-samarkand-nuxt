import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')

    return prisma.doctor.findFirst({
        where: { id: +id!, publish: true },
        include: {
            reviews: {
                where: { publish: true },
                select: {
                    id: true,
                    firstname: true,
                    lastname: true,
                    message: true,
                    rate: true,
                }
            }
        },
        orderBy: {
            created_at: 'desc'
        }
    })
})