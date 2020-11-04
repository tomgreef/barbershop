const appointment = require("../models/appointment");
const Appointment = require("../models/appointment");

// When we create a new appointment, we do:
exports.newAppointment = async (req, res, next) => {
  // Everything Inserted in the database
  // We create an object appointment with data of the req.body
  const appointment = new Appointment(req.body);

  try {
    await appointment.save();
    res.json({ message: "The appointment has been added succesfully" });
  } catch (err) {
    console.log(err);
    next(); // This will display error and go to the following request
  }
};

exports.allAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find({});
    res.json(appointments);
  } catch (err) {
    console.log(err);
    next();
  }
};

exports.removeAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.findOneAndRemove({ _id: req.params.id });
    res.json("Appoinment with date " + appointment.date + " and time " + appointment.time + " has been removed");
  } catch (err) {
    console.log(err);
    next();
  }
};
