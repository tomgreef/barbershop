const Client = require('../models/client')

// When we create a new client, we do:
exports.newClient = async (req, res, next) => {
    // Everything Inserted in the database
    // We create an object client with data of the req.body
    const client = new Client(req.body)

    try {
        await client.save();
        res.json({message: 'The client has been added succesfully'});
    } catch (err) {
        console.log(err)
        next() // This will display error and go to the following request
    }
}