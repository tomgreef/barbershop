const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentsSchema = new Schema({
    date: {
        type: String,
        trim: true
    },
    time: {
        type: String,
        trim: true
    },
    client: {
        type: String
    }
});

module.exports = mongoose.model('Appointment', appointmentsSchema)
