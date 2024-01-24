import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const page = query?.page || 1
    const limit = query?.limit || 12
    const search = query?.search
    const where = {}
    if(search) Object.assign(where, {
            OR: [
                {
                    firstname: {
                        contains: search,
                    }
                },
                {
                    lastname: {
                        contains: search
                    }
                },
                {
                    message: {
                        contains: search
                    }
                }
            ]
        })
        
        
    const [count,result] = await Promise.all([
        prisma.review.count({where}),
        prisma.review.findMany({
            skip: (+page-1)*(+limit),
            take: +limit,
            where,
            orderBy: {
                created_at: 'desc'
            }
        })
    ])
    return {result, count}
})