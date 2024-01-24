import prisma from "~/prisma/prisma"

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const data = await readBody(event)
    return prisma.review.update({
        where: {id: +id!},
        data: { publish: data.publish }
    })
})