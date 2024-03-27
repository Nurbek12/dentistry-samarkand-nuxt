import prisma from "~/prisma/prisma"

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    return prisma.gallery.delete({
        where: {id: +id!},
    })
})