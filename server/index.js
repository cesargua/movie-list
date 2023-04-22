const express = require('express');

//router
var router = require('./routes.js');

// var db = require('./db');

// Middleware
var morgan = require('morgan');
var cors = require('cors');

const app = express();
module.exports.app = app;

const PORT = 3000 || process.env.PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static('client/dist'));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

// app.get('/api/movies', ()=>{

// })