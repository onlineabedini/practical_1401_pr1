const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const api_router = require('./api');
require('dotenv').config();

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
        // write this inside .env file => mongodb://localhost:27017/irnode_prac_commercial
        mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost:27017/irnode_prac_commercial', { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    }

    other_config() {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(cors());
    }

    api_config() {
        app.use('/api', api_router);
    }
}