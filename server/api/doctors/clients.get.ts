import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const page = query?.page || 1
    const limit = query?.limit || 12
    
    const where: any = { AND: [{publish: true}] }
    if(query?.rate) where.AND.push({ rate: query?.rate })
    if(query?.spec) where.AND.push({ speciality: {
            some: {
                id: +query?.spec
            }
        }
    })
    if(query?.name) where.AND.push({ name: { contains: query?.name } })
        
    const [count,result] = await Promise.all([
        prisma.doctor.count({where}),
        prisma.doctor.findMany({
            skip: (+page-1)*(+limit),
            take: +limit,
            where,
            include: {
                _count: {
                    select: {
                        reviews: true
                    }
                },
                speciality: {
                    select: {
                        id: true,
                        name_ru: true,
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