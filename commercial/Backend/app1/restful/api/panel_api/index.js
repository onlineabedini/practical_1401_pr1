const panel_api_router = require('express').Router()

panel_api_router.get('/', (req, res) => {
    // answer via controller
    res.json({
        answer: 'this is panel api res'
    })
})

module.exports = panel_api_router