/* importamos express */
import express from 'express'
/* importamos para poder usar el archivo .env */
import dotenv from 'dotenv'
/* importando la ruta de users */
import usersRoutes from './routes/users.routes.js'
/* importamos el odm */
import mongoose from 'mongoose'

/* leemos el archivo .env */
dotenv.config()

/* estamos leyendo express */
const app = express()

/* aca estamos haciendo una constante puerto */
const PORT = process.env.PORT || 8080

/* usuario llamado desde el archivo env */
const USERDB = process.env.USERNAMEDB;

/* password obtenido desde el env */
const PASSWORDDB = process.env.PASSWORDDB;

app.use(express.json());
/* Rutas */
app.use('/api/users', usersRoutes)



mongoose.set("strictQuery", true);

mongoose.connect(`mongodb+srv://${USERDB}:${PASSWORDDB}@curso2026.q3qucac.mongodb.net/`)
        .then(()=>{
            console.log('conectado a MongoDB')
            app.listen(PORT, () => console.log(`El server esta escuchando en el puerto ${PORT}`))
        })
        .catch((error) => {
            console.log('No se puedo conectar a la DB: ', error)
            process.exit(1)
        })


