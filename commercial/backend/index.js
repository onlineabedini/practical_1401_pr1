const express = require('express');
const fs = require('fs');
const file_upload = require('express-fileupload')
const cookie_parser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')

require('dotenv').config();

//app
const app = express();

//middleware
app.use(express.json({ limit: "50mb" }))
app.use(cookie_parser());
app.use(morgan('dev'));
app.use(file_upload());
app.use(cors());

//route
fs.readdirSync('./routes').map((route) => {
    app.use('/api', require(`./routes/${route}`))
})

//run and config server
const port = process.env.PORT || 8080
let server = app.listen(port , () => {
    console.log(`server is runing on: http://localhost:${port}`)
});

//event warning
process.on('warning' ,(warning) => {
    console.warn("warning stackrace" + warning.stack)
});