const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientsSchema = new Schema({
    first_name: {
        type: String,
        trim: true //This removes excesive space within strings
    },
    last_name: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('Client', clientsSchema)
