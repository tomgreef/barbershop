const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientControllers');

module.exports = function() {
    // Add new clients via .POST(Where, Controller used)
    router.post('/clients',
        clientController.newClient
    )

    return router;
}