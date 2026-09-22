/* importamos express */
import express from 'express'
/* importamos para poder usar el archivo .env */
import dotenv from 'dotenv'
//importamos handlebars
import {engine} from 'express-handlebars';
/* importamos el odm */
import mongoose from 'mongoose';
//importar cookie parser
import cookieParser from 'cookie-parser';



//importamos el archivo utils
import __dirname from './utils.js';
//importamos el path
import path from 'path'

/* importando las rutas */
import usersRoutes from './routes/users.routes.js';
import viewsRoutes from './routes/views.routes.js'


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


//le decimos que vamos a recibir informacion en JSON
app.use(express.json());

/* //le decimos que vamos a recibir codificado de url
app.use(express.urlencoded({extended:true})) */

//usamos cookieParser
app.use(cookieParser("cursosecreto"));

app.get('/setCookie', (req, res) =>{
    res.cookie('CodeCookie', 'esta es una cookie muy poderosa',{signed:true}).send("CookieBack")
})

app.get('/getCookie', (req, res) =>{
    res.send(req.cookies)
})

app.get('/getSignedCookie', (req, res) => {
    res.send(req.signedCookies)
})

app.get('/deleteCookie', (req, res) => {
    res.clearCookie('CodeCookie').send("Cookie Eliminada")
})





/* Rutas */
/* app.use('/api/users', usersRoutes);
app.use('/', viewsRoutes); */

//handlebars
/* app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static('public'));
 */

//mongoose
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


