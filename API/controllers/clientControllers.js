const Client = require("../models/client");

// When we create a new client, we do:
exports.newClient = async (req, res, next) => {
  // Everything Inserted in the database
  // We create an object client with data of the req.body
  const client = new Client(req.body);

  try {
    await client.save();
    res.json({ message: "The client has been added succesfully" });
  } catch (err) {
    console.log(err);
    next(); // This will display error and go to the following request
  }
};

// Get all clients:
exports.allClients = async (req, res, next) => {
  try {
    const clients = await Client.find({});
    res.json(clients);
  } catch (err) {
    console.log(err);
    next();
  }
};

// Get client by id
exports.getClient = async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.id);
    res.json(client);
  } catch (err) {
    console.log(err);
    next();
  }
};

// Modify client by id
exports.modifyClient = async (req, res, next) => {
  try {
    const client = await Client.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json(client);
  } catch (err) {
    console.log(err);
    next();
  }
};

// Remove client by id
exports.removeClient = async (req, res, next) => {
    try {
      const client = await Client.findOneAndRemove({ _id: req.params.id })
      res.json(client.first_name + " has been removed");
    } catch (err) {
      console.log(err);
      next();
    }
  };
  
