import express from 'express';

const router = express.Router();

/* creamos una cookie firmada (usa el secreto de cookieParser en app.js) */
router.get('/setCookie', (req, res) =>{
    res.cookie('CodeCookie', 'esta es una cookie muy poderosa',{signed:true}).send("CookieBack")
})

/* devuelve las cookies sin firmar */
router.get('/getCookie', (req, res) =>{
    res.send(req.cookies)
})

/* devuelve las cookies firmadas */
router.get('/getSignedCookie', (req, res) => {
    res.send(req.signedCookies)
})

/* borramos la cookie */
router.get('/deleteCookie', (req, res) => {
    res.clearCookie('CodeCookie').send("Cookie Eliminada")
})

export default router;
