//this is application server file
const express = require('express');
const app = express();
const port = 8080;
const api_router = require('./api')
const mongoose = require('mongoose');

module.exports = class application {
    constructor() {
        this.server_config()
        // config mongodb
        this.api_config()
    }

    server_config() {
        app.listen(port, () => {
            console.log('app1 is running on http://localhost:8080/')
        })
    }

    // config mongodb

    api_config() {
        // route for without api request
        app.use('/api', api_router)
        app.use('/', (req, res)=>{
            res.json(' redirect to front application ')
        })
    }

    // ----------------------------- task1
    // mongodb configuration
}
