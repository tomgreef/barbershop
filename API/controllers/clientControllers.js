

// When we create a new client, we do:
exports.newClient = (req, res, next) => {
    // Everything: Insert in the database

    res.json({message: 'The client has been added succesfully'});
}