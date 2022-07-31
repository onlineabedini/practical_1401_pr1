const main_api_router = require('express').Router()
const controller = require('./../../api_controller/main_controller/index')
let Article = require('./../../models')

main_api_router.get('/', (req, res) => {
    // answer via controller
    res.json({
        answer: 'main api is working'
    })
})

main_api_router.get('/grid1', (req, res) => {
    // answer via controller
    Article.find({} , (err , articles) => {
        if(err){
            console.log(err);
        }else {
            res.json({
                title: 'Articles',
                articles: articles
            })
        }
    });
})

main_api_router.get('/products', (req, res) => {
    // answer via controller
    res.json({
        answer: 'this is products data answer'
    })
})

main_api_router.get('/grid2', (req, res) => {
    // answer via controller
    res.json({
        answer: 'this is second grid answer'
    })
})

module.exports = main_api_router 
