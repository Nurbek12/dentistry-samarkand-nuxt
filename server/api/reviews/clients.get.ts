import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const page = query?.page || 1
    const limit = query?.limit || 12
    const search = query?.search
    const where: any = {}
    if(query?.doctor_id) where.doctor_id = query?.doctor_id
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
            ],
            publish: true
        })
    else Object.assign(where, {
        publish: true
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