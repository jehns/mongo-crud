const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

// main app
const app = express();

// DB config
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));


// logging middleware
app.use(morgan('dev'));


// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))


// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// api routes
app.use('/api', require('./api'));


// send index html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// port for deployment or local 3000
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});

