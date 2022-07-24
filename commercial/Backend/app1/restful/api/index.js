const api_router = require('express').Router()
const main_api = require('./main_api')
const panel_api = require('./panel_api')

api_router.use('/main', main_api)
api_router.use('/panel', panel_api)


module.exports = api_router