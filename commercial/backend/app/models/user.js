const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const model = new Schema({
    full_name: {
        type: 'string',
    },
    username: {
        type: 'string',
        unique: true
    },
    phone: {
        type: 'string',
    },
    email: {
        type: 'string',
    },
    password: {
        type: 'string',
    },
    address: {
        type: 'string',
    },
    cart: {
        type: 'array',
        default: [],
    }
});

module.exports = mongoose.model('user', model);