const main_api_router = require('express').Router()

main_api_router.get('/', (req, res) => {
    // answer via controller
    res.json({
        answer: 'main api is working'
    })
})
// main_grid
// products data
// second grid

module.exports = main_api_router