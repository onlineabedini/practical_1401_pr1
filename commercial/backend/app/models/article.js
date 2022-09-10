const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const model = new Schema({
    title: {
        type: 'string',
    },
    img_url: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
    content: {
        type: 'string',
    },
});

module.exports = mongoose.model('article', model);