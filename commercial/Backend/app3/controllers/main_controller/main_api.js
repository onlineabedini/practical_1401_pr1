const api_router = require('express').Router()

api_router.get('/', (req, res) => {
    // answer via controller
    res.json({
        answer: 'this is api res'
    })
})

module.exports = api_router