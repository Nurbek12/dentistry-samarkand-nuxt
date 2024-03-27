import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    if(body.doctor_id) {
        const doctor = await prisma.doctor.findFirst({where:{id: +body.doctor_id}})

        const t = doctor?.rating === 0 ? 1 : 2
        const rating = (doctor?.rating + body.rate) / t
        await prisma.doctor.update({ where: { id: +body.doctor_id }, data: { rating } })
    }
    return prisma.review.create({
        data: body
    })
})