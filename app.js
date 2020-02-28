var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// https://github.com/richardgirges/express-fileupload
var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ocrRouter = require('./routes/ocr');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// default options
app.use(fileUpload());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ocr', ocrRouter);

module.exports = app;
