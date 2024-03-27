import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const page = query?.page || 1
    const limit = query?.limit || 12
      
    const [count,result] = await Promise.all([
        prisma.content.count({where: {publish: true}}),
        prisma.content.findMany({
            skip: (+page-1)*(+limit),
            take: +limit,
            where: { publish: true },
            orderBy: {
                created_at: 'desc'
            }
        })
    ])
    return {result, count}
})