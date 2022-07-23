const main_api_router = require('express').Router()

main_api_router.get('/', (req, res) => {
    // answer via controller
    res.json({
        answer: 'main api is working'
    })
})

module.exports = main_api_router