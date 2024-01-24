import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    return prisma.service.create({
        data: body
    })
})