import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Nuxt server')
})

export default { app }