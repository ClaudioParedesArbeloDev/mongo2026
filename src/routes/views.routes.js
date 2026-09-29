import express from 'express';
import { userModel } from '../model/user.model.js';

const router= express.Router();

router.get('/', async (req, res) =>{
    try{
        /* leemos la pagina y el limite desde la url, ej: /?page=2&limit=5 */
        let page = parseInt(req.query.page) || 1
        let limit = parseInt(req.query.limit) || 10

        /* lean:true devuelve objetos planos, handlebars no puede leer documentos de mongoose */
        let result = await userModel.paginate({}, {page, limit, lean:true})

        res.render('index', {
            Title: 'Mongo',
            users: result.docs,
            page: result.page,
            totalPages: result.totalPages,
            hasPrevPage: result.hasPrevPage,
            hasNextPage: result.hasNextPage,
            prevLink: result.hasPrevPage ? `/?page=${result.prevPage}&limit=${limit}` : null,
            nextLink: result.hasNextPage ? `/?page=${result.nextPage}&limit=${limit}` : null
        })
    }
    catch(error){
        res.status(500).send('Error al obtener los usuarios: ' + error.message)
    }
})

router.get('/getCookie', (req, res) =>{
    res.render('cookie', {
        Title: 'Cookie'
    })
})

export default router;