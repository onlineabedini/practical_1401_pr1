const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const model = new Schema({
    data: {
        type: 'string',
    }
});

module.exports = mongoose.model('alert', model);