const router = require('express').Router();
const fs = require('fs');
var path = require('path');

// require all other api routes
let routes_list = {};
let api_routers = fs.readdirSync(path.join(__dirname))
api_routers.forEach(file => {
    routes_list[file.split('.')[0]] = require(path.join(__dirname, '/', file))
})

// api middlewares
router.use('/article', routes_list.article)
router.use('/auth', routes_list.auth)
router.use('/alert', routes_list.alert)
router.use('/product', routes_list.product)
router.use('/ticket', routes_list.ticket)
router.use('/user', routes_list.user)

module.exports = router;