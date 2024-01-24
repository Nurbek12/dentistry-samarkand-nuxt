import prisma from "~/prisma/prisma"

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const data = await readBody(event)
    return prisma.doctor.update({
        where: {id: +id!},
        data
    })
})