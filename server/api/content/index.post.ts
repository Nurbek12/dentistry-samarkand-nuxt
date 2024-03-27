import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return prisma.content.create({
        data: body
    })
})