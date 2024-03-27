import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const page = query?.page || 1
    const limit = query?.limit || 12
    // const search = query?.search
    const where = {}
    // if(search) Object.assign(where, {
    //         OR: [
    //             {
    //                 name: {
    //                     contains: search,
    //                 }
    //             },
    //             {
    //                 name_ru: {
    //                     contains: search
    //                 }
    //             },
    //             {
    //                 name_uz: {
    //                     contains: search
    //                 }
    //             }
    //         ],
    //         // publish: true
    //     })
    // else Object.assign(where, {
    //     publish: true
    // })
        
        
    const [count,result] = await Promise.all([
        prisma.service_Category.count({where}),
        prisma.service_Category.findMany({
            skip: (+page-1)*(+limit),
            take: +limit,
            where,
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
            },
            orderBy: {
                created_at: 'desc'
            }
        })
    ])
    return {result, count}
})