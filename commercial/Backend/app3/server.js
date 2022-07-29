//this is application server file
const express = require('express');
const app = express();
const port = 8082;
const api_router = require('./restful/api')
const mongoose = require('mongoose');
const routes = require('./MVC/routes')

module.exports = class application {
    constructor() {
        this.server_config()
        this.config_mongodb()
        this.resful_config()
        this.MVC_config()
    }

    async server_config() {
        await app.listen(port, () => {
            console.log('app3 is running on http://localhost:8082/')
        })
    }

    async config_mongodb() {
        await mongoose.connect('mongodb://localhost:27017/irnode_commercial').then(() => {
            console.log('app3 database config success')
        })
    }

    async resful_config() {
        await app.use('/api', api_router)
    }

    async MVC_config() {
        await app.use('/', routes)
    }

}
