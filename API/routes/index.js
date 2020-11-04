const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientControllers');
const appointmentController = require('../controllers/appointmentControllers');

module.exports = function() {
    // Add new clients via .POST(Where, Controller used)
    router.post('/clients',
        clientController.newClient
    );

    router.post('/appointments',
        appointmentController.newAppointment
    );

    return router;
}