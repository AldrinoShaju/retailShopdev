const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const products = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: false,
    },
    category:{
        type: String,
        required: true
    },
    marketPrice: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: false
    },
    img:{
        data: Buffer,
        contentType: String
    }
}, { timestamps: true });

const productsdata = mongoose.model('product', products);
module.exports = productsdata;