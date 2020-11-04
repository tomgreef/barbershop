const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientControllers");
const appointmentController = require("../controllers/appointmentControllers");

module.exports = function () {
  // Add new clients via .POST(Where, Controller used)
  router.post("/clients", clientController.newClient);
  router.post("/appointments", appointmentController.newAppointment);

  // Obtain all clients and appointments
  router.get("/clients", clientController.allClients);
  router.get("/appointments", appointmentController.allAppointments);

  // Get client by ID
  router.get("/clients/:id", clientController.getClient);

  // Modifying a client
  router.put("/clients/:id", clientController.modifyClient);

  // Delete client and appointment by ID
  router.delete("/clients/:id", clientController.removeClient);
  router.delete("/appointments/:id", appointmentController.removeAppointment);
  
  return router;
};
