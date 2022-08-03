const express = require('express');
const fs = require('fs');
const file_upload = require('express-fileupload')
const cookie_parser = require('cookie-parser')

require('dotenv').config();

//app
const app = express();

//middleware
app.use(express.json({limit: '50mb'}));
app.use(cookie_parser);

//route
fs.readdirSync('./routes').map((route) => {
    app.use('/' , require(`./routes/${route}`) )
});

//run and config server
const port = process.env.PORT || 8080
let server = app.listen(port , () => {
    console.log(`server is runing on port: ${port}`)
});

//event warning
process.on('warning' ,(warning) => {
    console.warn("warning stackrace" + warning.stack)
});