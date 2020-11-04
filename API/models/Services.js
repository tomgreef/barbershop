const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
    name: {
        type: String
    },
    duration: {
        type: Number //En minutos
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model('Services', servicesSchema)
