import prisma from "~/prisma/prisma"

export default defineEventHandler(async (event) => {
    const query = getQuery<{gte: string,lt: string}>(event)
    
    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth() + 1
    const gte = query?.gte || `${currentYear}-${currentMonth>9?currentMonth:'0'+currentMonth}-01T00:00:00.000Z`
    const lt = query?.lt || `${currentYear}-${(currentMonth+1)>9?(currentMonth+1):'0'+(currentMonth+1)}-01T00:00:00.000Z`
    const [
        doctors,
        appointments,
        services,
        reviews,
        monthly_appointments
    ] = await Promise.all([
        prisma.doctor.count(),
        prisma.appointment.count(),
        prisma.service.count(),
        prisma.review.count(),
        prisma.appointment.groupBy({
            by: ['created_at'],
            _count: {
                created_at: true
            },
            where: {
                created_at: { gte, lt }
            }
        })
    ])

    return {
        doctors,
        appointments,
        services,
        reviews,
        monthly_appointments
    }
})