//this is application server file
const express = require('express');
const app = express();
const port = 8083;
const api_router = require('./controllers/main_controller/main_api')

module.exports = class application {
    constructor() {
        this.server_config()
        // config mongodb
        this.api_config()
    }

    server_config() {
        app.listen(port, () => {
            console.log('app2 is running on http://localhost:8083/')
        })
    }

    // config mongodb

    api_config() {
        app.use('/api', api_router)
        app.use('/', (req, res)=>{
            response.writeHead(302, {
                'Location': 'https://www.digikala.com/'
                //add other headers here...
              });
              response.end();
        })
    }

    // ----------------------------- task1
    // mongodb configuration


    // ----------------------------- task2
    // based on MVC structure update project
    /*
        /controller
        /api
        /router
    */


    // ----------------------------- task3
    // add middleware to the project
    /*
        /middleware
            -> both global and local
    */
}
