/* importamos express */
import express from 'express'
/* importamos para poder usar el archivo .env */
import dotenv from 'dotenv'

import usersRoutes from './routes/users.routes.js'

/* leemos el archivo .env */
dotenv.config()

/* estamos leyendo express */
const app = express()

/* aca estamos haciendo una constante puerto */
const Port = process.env.PORT || 8080

app.use('/api/users', usersRoutes)

app.listen(Port, () => console.log(`El server esta escuchando en el puerto ${Port}`))


