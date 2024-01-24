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
                    name: {
                        contains: search,
                    }
                },
                {
                    phone: {
                        contains: search
                    }
                }
            ]
        })
        
        
    const [count,result] = await Promise.all([
        prisma.appointment.count({where}),
        prisma.appointment.findMany({
            skip: (+page-1)*(+limit),
            take: +limit,
            where,
            include: {
                doctor: {
                    select: {
                        id: true,
                        image: true,
                        name: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        })
    ])
    return {result, count}
})