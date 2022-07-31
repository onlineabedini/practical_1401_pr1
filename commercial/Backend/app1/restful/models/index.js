// اwe define all of our models in this directory

let mongoose = require('mongoose');

//article schema
let article_schema = mongoose.Schema({
title: {
    type: String,
    required: true
},
author: {
    type: String,
    required: true
},
body: {
    type: String,
    required: true
},
});

let Article = module.exports = mongoose.model('Article' , article_schema)