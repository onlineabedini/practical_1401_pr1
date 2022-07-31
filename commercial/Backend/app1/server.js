//this is application server file
const express = require('express');
const app = express();
const port = 8080;
const api_router = require('./restful/api')
const mongoose = require('mongoose');
const routes = require('./MVC/routes')

let db = mongoose.connection

//check connection
db.once('open', () => { 
    console.log('app1 database connected to MongoDB successfuly');
} );

//check for DB errors
db.on('error', function(err){
    console.log(err);
});

module.exports = class application {
    constructor() {
        this.server_config()
        this.config_mongodb()
        this.resful_config()
        this.MVC_config()
    }

    async server_config() {
        await app.listen(port, () => {
            console.log('app1 is running on http://localhost:8080/')
        })
    }

    async config_mongodb() {
        await mongoose.connect('mongodb://localhost:27017/nodekb')
    }

    async resful_config() {
        await app.use('/api', api_router)
    }

    async MVC_config() {
        await app.use('/', routes)
    }

}
