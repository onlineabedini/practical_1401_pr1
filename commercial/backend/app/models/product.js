const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const model = new Schema({
    title: {
        type: 'string',
    },
    subtitle: {
        type: 'string',
    },
    price: {
        type: 'string',
    },
    img_url: {
        type: 'string',
    },
    sec_img_url: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
    category: {
        type: 'string',
        default: 'all'
    },
    discount: {
        type: 'boolean',
        default: false
    }
});

module.exports = mongoose.model('product', model);