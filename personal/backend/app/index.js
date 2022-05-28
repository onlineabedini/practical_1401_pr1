const  express = require('express');
const app = express();
const port = 2020;
const api_router = require('./api')
const cors = require('cors');

module.exports = class application {
    constructor() {
        this.server_config()
        this.other_config()
        this.api_config()
    }

    server_config() {
        app.listen(port, ()=>{
            console.log(' - - - - - - - - server is running! success!! http://localhost:2020/')
        })
    }

    other_config() {
        app.use(cors());
    }

    api_config() {
        app.use('/api', api_router)
    }
}