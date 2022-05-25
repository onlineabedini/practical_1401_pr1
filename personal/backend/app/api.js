// api router file
const api_router = require('express').Router();
var article_arey = require('./data/article');
var sample_arey = require('./data/sample')
const controller = require('./controller')

api_router.get('/', (req, res)=>{
    res.json({
        answer: "this is api res",
    })
})
api_router.get('/sample', (req, res) => controller.sample_controller.get_all_samples(req, res))
api_router.get('/article', (req, res)=> controller.article_controller.get_all_articles(req, res))

module.exports = api_router;