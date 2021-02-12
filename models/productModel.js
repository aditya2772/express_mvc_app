const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, unique: true},
    contact: {type: String, unique: true},
});

module.exports = mongoose.model('products', productModel);