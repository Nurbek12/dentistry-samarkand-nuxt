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
                    title: {
                        contains: search,
                    }
                },
                {
                    title_uz: {
                        contains: search
                    }
                },
                {
                    description: {
                        contains: search
                    }
                },
                {
                    description_uz: {
                        contains: search
                    }
                },
                {
                    publish: true
                }
            ]
        })
    else Object.assign(where, {
        publish: true
    })
        
        
    const [count,result] = await Promise.all([
        prisma.service.count({where}),
        prisma.service.findMany({
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