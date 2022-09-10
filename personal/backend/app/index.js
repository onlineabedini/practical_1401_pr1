const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const api_router = require('./api');

module.exports = class application {
    constructor() {
        this.server_config();
        this.data_base_config();
        this.other_config();
        this.api_config();
    }

    server_config() {
        app.listen(port, () => {
            console.log(`--------------------server is running on port ${port}`);
        });
    }
    
    data_base_config() {
        mongoose.connect('mongodb://localhost:27017/irnode_prac', { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    }

    other_config() {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(cors());
        app.use(express.static('public'));
    }
    
    api_config() {
        app.use('/api', api_router);
    }
}