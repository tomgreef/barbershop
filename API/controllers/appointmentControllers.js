const Appointment = require('../models/appointment')

// When we create a new client, we do:
exports.newAppointment = async (req, res, next) => {
    // Everything Inserted in the database
    // We create an object client with data of the req.body
    const appointment = new Appointment(req.body)

    try {
        await appointment.save();
        res.json({message: 'The appointment has been added succesfully'});
    } catch (err) {
        console.log(err)
        next() // This will display error and go to the following request
    }
}