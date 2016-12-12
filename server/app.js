'use strict';
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");
var favicon = require("serve-favicon");
var helmet = require("helmet");
var routes = require("./routes/index");
var app = express();
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'somesecret',
    resave: true,
    saveUninitialized: true
}));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/lib', express.static(path.join(__dirname, '../node_modules')));
app.use('/app', express.static(path.join(__dirname, '../app')));
app.use('/css', express.static(path.join(__dirname, '../public/assets/css')));
app.use('/js', express.static(path.join(__dirname, '../public/assets/js')));
app.use('/config', express.static(path.join(__dirname, '../config')));
app.use('/', routes);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err;
    err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
//# sourceMappingURL=app.js.map