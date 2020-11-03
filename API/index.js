const express = require('express');

// Create the server
const app = express();

// Port and execute server
app.listen(4000, () => {
    console.log('Server working')
})