const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const model = new Schema({
    title: {
        type: 'string',
    },
    content: {
        type: 'string',
    }
});

module.exports = mongoose.model('ticket', model);