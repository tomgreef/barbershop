const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create the server
const app = express();

// Enable CORS
const whitelist = ['http://localhost:3000', 'http://localhost:4000'];
const corsOptions = {
    origin: (origin, callback) => {
        // console.log(origin)
        const exists = whitelist.some(domain => domain == origin)
        if (exists){
            callback(null,true)
        } else {
            callback(new Error('Not whitelisted'))
        }
    }
}

//app.use(cors(corsOptions)); This is for production to whitelist URLS
app.use(cors());

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