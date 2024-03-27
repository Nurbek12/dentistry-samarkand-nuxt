import prisma from '@/prisma/prisma'

export default defineEventHandler(async (event) => {
    const {speciality_id,...body} = await readBody(event)
    // console.log(speciality_id, body);
    
    return prisma.doctor.create({
        data: {
            ...body,
            speciality: {connect: speciality_id.map((id: number) => ({id}))}
        }
    })
})