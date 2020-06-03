var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/createFrom', require('./routes/createForm'));
app.use('/api/v1/forms', require('./routes/forms'));
app.use('/api/v1/submitForm', require('./routes/submitForm'));

module.exports = app;
