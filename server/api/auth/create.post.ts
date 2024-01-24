import bcrypt from 'bcrypt'
import prisma from '~/prisma/prisma'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const hpass = await bcrypt.hash(body.password, 10)

    await prisma.admin.create({
        data: {
            login: body.login,
            password: hpass
        }
    })

    return true
})