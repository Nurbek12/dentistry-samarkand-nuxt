import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import prisma from '~/prisma/prisma'

export default defineEventHandler(async (event) => {
    const { jwtSecret } = useRuntimeConfig()
    const body = await readBody(event)

    const user = await prisma.admin.findFirst({
        where: { login: body.login }
    })

    if(!user) return { status: "warning", token: "none", message: "Login or Password incorrect!" }

    const pMatch = await bcrypt.compare(body.password, user.password)

    if(!pMatch) return { status: "warning", token: "none", message: "Login or Password incorrect!" }

    const token = jwt.sign({id: user.id, login: user.login}, jwtSecret, { expiresIn: "2h" })

    return { status: "ok", token, message: "Successfully authenticated" }
})