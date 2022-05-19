// api router file
const api_router = require('express').Router();
var article_arey = require('./article')
var sample_arey = require('./sample')

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

module.exports = api_router;