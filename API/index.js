const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

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

// Enable body-parser which will allow correct formating of forms for the db
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Enable routing
app.use('/', routes());

// Port and execute server
app.listen(4000, () => {
    console.log('Server working')
})