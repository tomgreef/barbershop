const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Create the server
const app = express();

// Conect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/barbershop',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
)

// Enable routing
app.use('/', routes());

// Port and execute server
app.listen(4000, () => {
    console.log('Server working')
})