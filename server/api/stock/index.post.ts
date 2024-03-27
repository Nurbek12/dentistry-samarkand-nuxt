import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    return prisma.stock.create({ data })
})