// api router file
const api_router = require('express').Router();
var article_arey = require('./article');
var sample_arey = require('./sample')
 const alirezaController = require('./mohcontroller')

api_router.get('/', (req, res)=>{
    res.json({
        answer: "this is api res",
    })
})
api_router.get('/sample', (req, res)=>{
    res.json(sample_arey)
})

api_router.get('/article', (req, res)=>{
    res.json(article_arey)
})

api_router.get('/mohammad', (req , res)=>{
    res.json(alirezaController.add_last_name())
})

module.exports = api_router;