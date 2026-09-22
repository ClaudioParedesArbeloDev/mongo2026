import express from 'express';

const router= express.Router();

router.get('/', (req, res) =>{
    res.render('index', {
        Title: 'Mongo'
    })
})

router.get('/getCookie', (req, res) =>{
    res.render('cookie', {
        Title: 'Cookie'
    })
})

export default router;