const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.json('this is mvc')
})

module.exports = routes